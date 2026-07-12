/* hoi-ai.js — Bong bóng chat nổi "Hỏi AI về bộ này" (HỎI-AI 2 TẦNG)   (2026-07-03 V2-Steward hoi-ai-bubble)
   - Chỉ chạy khi window.LIB_CONFIG.chrome.hoiAI.endpoint có URL (Steward thêm vào config.js sau).
   - UI: nút tròn nổi cố định góc TRÁI-DƯỚI (góc PHẢI đã có bong bóng Zalo/TikTok .bubbles của chrome.js);
     bấm → mở panel chat nhỏ (câu hỏi phải, trả lời trái); giữ lịch sử nhiều lượt trong RAM, KHÔNG localStorage.
   - z-index 45: DƯỚI drawer(60)/drawer-bg(50), TRÊN topbar(40) + nội dung.
   - Gửi câu hỏi → backend Apps Script (hoi-ai-web-backend.gs):
       mode='nblm'  → máy Chiến bật: poll ?act=traloi&id= mỗi 6s (tối đa 20 lần = 120s);
                      'loi' hoặc hết lượt → tự gửi lại force:'vilao' (tầng 2).
       mode='vilao' → trả lời ngay.
   - MỌI câu trả lời kèm disclaimer nguyên văn (chữ nhỏ, mờ). KHÔNG hiện token/giá.
   - CSS tự tiêm, dùng biến theme.css (có fallback) → tự khớp theme sáng/tối. Tái dùng class .send. */
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
    // ---- CSS riêng (tự tiêm — không sửa theme.css) ----
    const css = document.createElement("style");
    css.textContent =
      /* nút tròn nổi góc TRÁI-dưới — ấn son chu sa + viền vàng, nổi bật trên nền tối lẫn sáng */
      ".ha-fab{position:fixed;left:16px;bottom:20px;z-index:45;display:flex;align-items:center;justify-content:center;" +
        "width:56px;height:56px;border-radius:50%;border:2px solid var(--gold2,#e5c96b);cursor:pointer;" +
        "background:radial-gradient(circle at 32% 28%,#d94b3a,#b0231c 62%,#8f1a15);color:#ffe9c2;font-size:26px;line-height:1;" +
        "box-shadow:0 4px 16px rgba(176,35,28,.55),0 0 0 4px rgba(229,201,107,.12);transition:transform .15s;animation:haPulse 2.6s ease-in-out infinite}" +
      "@keyframes haPulse{0%,100%{box-shadow:0 4px 16px rgba(176,35,28,.55),0 0 0 4px rgba(229,201,107,.12)}50%{box-shadow:0 4px 22px rgba(176,35,28,.78),0 0 0 7px rgba(229,201,107,.22)}}" +
      ".ha-fab:hover{transform:scale(1.08)}" +
      ".ha-fab .ha-fab-lbl{position:absolute;left:66px;white-space:nowrap;font-size:12px;font-weight:600;font-family:var(--sans,sans-serif);" +
        "background:#b0231c;border:1px solid var(--gold2,#e5c96b);color:#ffe9c2;" +
        "padding:3px 9px;border-radius:8px;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,.3)}" +
      "@media(max-width:640px){.ha-fab .ha-fab-lbl{display:none}}" +
      /* panel chat nhỏ góc trái-dưới */
      ".ha-panel{position:fixed;left:16px;bottom:88px;z-index:45;width:min(360px,calc(100vw - 32px));" +
        "max-height:70vh;display:none;flex-direction:column;overflow:hidden;" +
        "background:var(--card-bg,#1d160d);border:1.5px solid var(--gold2,#e5c96b);border-radius:14px;" +
        "box-shadow:0 14px 40px rgba(0,0,0,.55),0 0 0 3px rgba(176,35,28,.18)}" +
      ".ha-panel.show{display:flex}" +
      "@media(max-width:640px){.ha-panel{left:8px;right:8px;width:auto}}" +
      ".ha-head{display:flex;align-items:center;gap:8px;padding:11px 14px;border-bottom:1px solid var(--line-gold,#6b521f);flex:0 0 auto;background:linear-gradient(90deg,rgba(176,35,28,.20),rgba(229,201,107,.10))}" +
      ".ha-title{font-weight:700;font-size:14.5px;color:var(--gold2,#e5c96b)}" +
      ".ha-close{margin-left:auto;background:none;border:none;color:var(--muted,#a99d84);font-size:17px;cursor:pointer;padding:2px 6px;flex:0 0 auto}" +
      ".ha-body{flex:1 1 auto;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px;min-height:110px;" +
        "scrollbar-width:thin;scrollbar-color:var(--line2,#4a3b22) transparent}" +
      ".ha-hint{font-size:12.5px;color:var(--muted,#a99d84);line-height:1.6}" +
      /* bong bóng lượt chat: hỏi phải / đáp trái */
      ".ha-msg{max-width:85%;padding:9px 12px;border-radius:12px;font-size:13.5px;line-height:1.65;" +
        "color:var(--text,#e8dfc8);overflow-wrap:anywhere}" +
      ".ha-msg.q{align-self:flex-end;background:rgba(201,162,39,.16);border:1px solid var(--line-gold,#6b521f);border-bottom-right-radius:4px}" +
      ".ha-msg.a{align-self:flex-start;background:var(--input-bg,#1d1710);border:1px solid var(--line2,#4a3b22);border-bottom-left-radius:4px}" +
      ".hoi-ai-status{flex:0 0 auto;font-size:12px;color:var(--muted,#a99d84);padding:2px 14px 0;min-height:16px}" +
      ".hoi-ai-disclaimer{margin-top:10px;padding-top:7px;border-top:1px dashed var(--line2,#4a3b22);" +
        "font-size:11px;color:var(--muted2,#7d7259);opacity:.85;font-style:italic}" +
      /* chân panel: textarea 1-2 dòng + nút Gửi */
      ".ha-form{display:flex;gap:8px;align-items:flex-end;padding:10px 12px 12px;border-top:1px solid var(--line2,#4a3b22);flex:0 0 auto;margin:0}" +
      ".ha-form textarea{flex:1;min-width:0;resize:none;min-height:38px;max-height:72px;background:var(--input-bg,#1d1710);" +
        "border:1px solid var(--line2,#4a3b22);color:var(--text,#e8dfc8);border-radius:10px;padding:8px 10px;" +
        "font-family:var(--sans,sans-serif);font-size:13.5px;line-height:1.5}" +
      ".ha-form .send{flex:0 0 auto;padding:9px 14px}";
    document.head.appendChild(css);

    // ---- nút tròn nổi (góc trái-dưới) + panel chat ----
    const fab = document.createElement("button");
    fab.type = "button";
    fab.className = "ha-fab";
    fab.setAttribute("aria-label", "Hỏi AI về bộ này");
    fab.innerHTML = '<span class="ha-fab-ico">🤖</span><span class="ha-fab-lbl">Hỏi AI</span>';

    const panel = document.createElement("div");
    panel.className = "ha-panel";
    panel.innerHTML =
      '<div class="ha-head"><span class="ha-title">🤖 Hỏi AI về bộ này</span>' +
        '<button type="button" class="ha-close" id="haClose" aria-label="Đóng">✕</button></div>' +
      '<div class="ha-body" id="haBody">' +
        '<div class="ha-hint">Thắc mắc về nhân vật, sự kiện, pháp bảo… trong bộ này? Hỏi AI của thư viện (miễn phí, chờ khoảng 30–90 giây).</div>' +
      '</div>' +
      '<div class="hoi-ai-status" id="haStatus"></div>' +
      '<form class="ha-form" id="haForm">' +
        '<textarea id="haText" rows="2" maxlength="500" placeholder="Ví dụ: Vương Lâm và Lý Muộn Hương quen nhau thế nào?" required></textarea>' +
        '<button type="submit" class="send" id="haBtn">Gửi ›</button>' +
      '</form>';

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    const form = document.getElementById("haForm");
    const ta = document.getElementById("haText");
    const btn = document.getElementById("haBtn");
    const elStatus = document.getElementById("haStatus");
    const elBody = document.getElementById("haBody");

    // mở/đóng panel
    fab.addEventListener("click", () => {
      panel.classList.toggle("show");
      if (panel.classList.contains("show")) ta.focus();
    });
    document.getElementById("haClose").addEventListener("click", () => panel.classList.remove("show"));
    // Enter = gửi (Shift+Enter xuống dòng)
    ta.addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (form.requestSubmit) form.requestSubmit();
        else form.dispatchEvent(new Event("submit", { cancelable: true }));
      }
    });

    const setStatus = t => { elStatus.textContent = t || ""; };
    // lịch sử hỏi-đáp trong phiên: mảng trong RAM (KHÔNG localStorage); DOM giữ nguyên các lượt
    const lichSu = [];
    function themTin(vai, html) {           // vai: 'q' (hỏi, phải) | 'a' (đáp, trái)
      lichSu.push({ vai: vai, html: html });
      const d = document.createElement("div");
      d.className = "ha-msg " + vai;
      d.innerHTML = html;
      elBody.appendChild(d);
      elBody.scrollTop = elBody.scrollHeight;
    }
    function hienTraLoi(traLoi, disclaimer) {
      setStatus("");
      themTin("a", fmt(traLoi) +
        '<div class="hoi-ai-disclaimer">' + esc(disclaimer || DISCLAIMER) + '</div>');
    }
    function hienLoi(msg) {
      setStatus("");
      themTin("a", '<i>' + esc(msg) + '</i>');
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

    // poll kết quả tầng 1: mỗi ~6s, tối đa 25 lần (~150s — NotebookLM có khi 90s+). Trả object khi
    // 'xong', null khi 'loi'/hết giờ.
    // (2026-07-04 V2-Steward hoi-ai-fix3) MỖI NHỊP THỬ ĐỌC 3 LẦN: redirect 302 của /exec THỈNH
    // THOẢNG nuốt query-param → doGet trả text mặc định / trang HTML thay vì JSON → res.json() ném
    // lỗi. KHÔNG retry thì cả nhịp coi như hỏng → dễ bỏ lỡ câu trả lời NotebookLM ĐÃ SẴN SÀNG rồi
    // rơi xuống tầng 2 (vilao) trả lời kém hơn ("thư viện đang cập nhật"). Đây chính là lỗi web hiện
    // câu tầng-2 dù NotebookLM đã trả lời đầy đủ.
    async function pollTraLoi(id) {
      for (let i = 0; i < 25; i++) {
        await sleep(6000);
        let r = null;
        for (let lan = 0; lan < 3; lan++) {
          try {
            const res = await fetch(EP + "?act=traloi&id=" + encodeURIComponent(id));
            r = await res.json();
            break;                                  // đọc được JSON → thoát vòng thử-lại
          } catch (e) { r = null; await sleep(800); } // blip (HTML/redirect) → thử lại nhanh
        }
        if (r && r.trangThai === "xong") return r;
        if (r && r.trangThai === "loi") return null;   // tầng 1 lỗi thật → fallback ngay
        setStatus("Đang tra sổ tay AI (30–90 giây)… " + (i + 1) * 6 + "s");
      }
      return null; // quá ~150s → fallback tầng 2
    }

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const cauHoi = ta.value.trim();
      if (cauHoi.length < 3) { setStatus("Đạo hữu gõ câu hỏi dài hơn chút nhé (tối thiểu 3 ký tự)."); return; }
      btn.disabled = true;
      themTin("q", esc(cauHoi));           // bong bóng câu hỏi (bên phải)
      ta.value = "";
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

  // chạy sau khi DOM sẵn (fab + panel append thẳng vào body, không phụ thuộc footer)
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
