/* hoi-ai.js — Widget công khai "Hỏi AI về bộ này" (HỎI-AI 2 TẦNG)   (2026-07-03 V2-Steward hoi-ai-2tang)
   - Chỉ chạy khi window.LIB_CONFIG.chrome.hoiAI.endpoint có URL (Steward thêm vào config.js sau).
   - Gửi câu hỏi → backend Apps Script (hoi-ai-web-backend.gs):
       mode='nblm'  → máy Chiến bật: poll ?act=traloi&id= mỗi 6s (tối đa 20 lần = 120s);
                      'loi' hoặc hết lượt → tự gửi lại force:'vilao' (tầng 2).
       mode='vilao' → trả lời ngay.
   - MỌI câu trả lời kèm disclaimer nguyên văn (chữ nhỏ, mờ). KHÔNG hiện token/giá.
   - Tái dùng class theme.css (.foot-card, .fb-form, .send, .lead) — thêm ít CSS riêng bên dưới. */
(function () {
  "use strict";
  const C = (window.LIB_CONFIG && window.LIB_CONFIG.chrome && window.LIB_CONFIG.chrome.hoiAI) || null;
  if (!C || !C.endpoint) return;                 // chưa cấu hình endpoint → widget im lặng
  const EP = C.endpoint;
  const slug = new URLSearchParams(location.search).get("bo") || "";
  if (!slug) return;                             // chỉ hiện trên trang bộ (?bo=...)

  // disclaimer dự phòng — ưu tiên chuỗi server trả về (backend giữ bản nguyên văn)
  const DISCLAIMER = "Thông tin này là do AI cung cấp, chưa hẳn đã chính xác 100%. Đạo hữu hãy tìm kiếm thông tin trong thư viện tại ô tìm kiếm để đảm bảo thông tin chính xác nhất";

  const esc = s => (s == null ? "" : String(s)).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  // escape HTML rồi mới format nhẹ: **đậm** → <b>, \n → <br>
  const fmt = s => esc(s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>");
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  function init() {
    // ---- CSS riêng (phần theme.css chưa có) ----
    const css = document.createElement("style");
    css.textContent =
      ".hoi-ai-wrap{max-width:1200px;margin:26px auto 8px;padding:0 20px}" +
      ".hoi-ai-card .hoi-ai-status{font-size:13px;color:var(--muted,#a99d84);margin-top:10px;min-height:18px}" +
      ".hoi-ai-answer{display:none;margin-top:12px;padding:14px 16px;background:var(--input-bg,#1d1710);" +
        "border:1px solid var(--line2,#4a3b22);border-radius:10px;font-size:14px;line-height:1.7;color:var(--text,#e8dfc8);overflow-wrap:anywhere}" +
      ".hoi-ai-answer.show{display:block}" +
      ".hoi-ai-disclaimer{margin-top:12px;padding-top:8px;border-top:1px dashed var(--line2,#4a3b22);" +
        "font-size:11.5px;color:var(--muted2,#7d7259);opacity:.85;font-style:italic}";
    document.head.appendChild(css);

    // ---- section widget ----
    const sec = document.createElement("div");
    sec.className = "hoi-ai-wrap";
    sec.innerHTML =
      '<div class="foot-card hoi-ai-card">' +
        '<h3><span class="seal" style="width:30px;height:30px;font-size:18px">問</span> 🤖 Hỏi AI về bộ này</h3>' +
        '<p class="lead">Thắc mắc về nhân vật, sự kiện, pháp bảo… trong bộ này? Hỏi AI của thư viện (miễn phí, chờ khoảng 30–90 giây).</p>' +
        '<form class="fb-form" id="haForm">' +
          '<textarea id="haText" maxlength="500" placeholder="Ví dụ: Vương Lâm và Lý Muộn Hương quen nhau thế nào?" required></textarea>' +
          '<button type="submit" class="send" id="haBtn">Hỏi AI ›</button>' +
        '</form>' +
        '<div class="hoi-ai-status" id="haStatus"></div>' +
        '<div class="hoi-ai-answer" id="haAnswer"></div>' +
      '</div>';

    // chèn TRƯỚC footer (chrome.js append sponsor.foot + site-foot vào cuối body);
    // không thấy footer → append vào cha của #view; bí nữa → cuối body
    const foot = document.querySelector(".sponsor.foot") || document.querySelector(".site-foot");
    const view = document.getElementById("view");
    if (foot && foot.parentNode) foot.parentNode.insertBefore(sec, foot);
    else if (view && view.parentNode) view.parentNode.appendChild(sec);
    else document.body.appendChild(sec);

    const form = document.getElementById("haForm");
    const ta = document.getElementById("haText");
    const btn = document.getElementById("haBtn");
    const elStatus = document.getElementById("haStatus");
    const elAnswer = document.getElementById("haAnswer");

    const setStatus = t => { elStatus.textContent = t || ""; };
    function hienTraLoi(traLoi, disclaimer) {
      setStatus("");
      elAnswer.innerHTML = fmt(traLoi) +
        '<div class="hoi-ai-disclaimer">' + esc(disclaimer || DISCLAIMER) + '</div>';
      elAnswer.classList.add("show");
    }
    function hienLoi(msg) {
      setStatus("");
      elAnswer.innerHTML = '<i>' + esc(msg) + '</i>';
      elAnswer.classList.add("show");
    }

    // POST JSON kiểu text/plain (simple request, KHÔNG preflight) — mode CORS mặc định để ĐỌC response
    async function goiHoi(body) {
      const res = await fetch(EP, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(body)
      });
      return res.json();
    }

    // poll kết quả tầng 1: mỗi 6s, tối đa 20 lần. Trả object khi 'xong', null khi 'loi'/hết lượt.
    async function pollTraLoi(id) {
      for (let i = 0; i < 20; i++) {
        await sleep(6000);
        try {
          const res = await fetch(EP + "?act=traloi&id=" + encodeURIComponent(id));
          const r = await res.json();
          if (r && r.trangThai === "xong") return r;
          if (r && r.trangThai === "loi") return null;   // tầng 1 lỗi → fallback ngay
          setStatus("Đang tra sổ tay AI (30–90 giây)… " + (i + 1) * 6 + "s");
        } catch (e) { /* mạng chập 1 nhịp → thử lần sau */ }
      }
      return null; // quá 120s → fallback tầng 2
    }

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const cauHoi = ta.value.trim();
      if (cauHoi.length < 3) { setStatus("Đạo hữu gõ câu hỏi dài hơn chút nhé (tối thiểu 3 ký tự)."); return; }
      btn.disabled = true;
      elAnswer.classList.remove("show");
      setStatus("Đang gửi câu hỏi…");
      try {
        let r = await goiHoi({ act: "hoi", slug: slug, cauHoi: cauHoi });
        if (r && r.ok && r.mode === "nblm") {
          // TẦNG 1: chờ máy Chiến hỏi NotebookLM
          setStatus("Đang tra sổ tay AI (30–90 giây)…");
          const kq = await pollTraLoi(r.id);
          if (kq && kq.traLoi) { hienTraLoi(kq.traLoi, kq.disclaimer); return; }
          // lỗi / quá 120s → tự chuyển tầng 2
          setStatus("Sổ tay AI đang bận — chuyển sang trả lời nhanh…");
          r = await goiHoi({ act: "hoi", slug: slug, cauHoi: cauHoi, force: "vilao" });
        }
        if (r && r.ok && r.traLoi) { hienTraLoi(r.traLoi, r.disclaimer); return; }
        if (r && r.err === "het-quota") { hienLoi(r.msg || "Hôm nay đã hết lượt hỏi AI, mời đạo hữu quay lại ngày mai."); return; }
        hienLoi((r && r.msg) || "AI của thư viện đang bận, đạo hữu thử lại sau ít phút nhé.");
      } catch (err) {
        hienLoi("Không gửi được câu hỏi (mạng chập?). Đạo hữu thử lại sau nhé.");
      } finally {
        btn.disabled = false;
      }
    });
  }

  // chạy sau khi DOM sẵn (chrome.js đã kịp chèn footer nếu hoi-ai.js đứng sau nó)
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
