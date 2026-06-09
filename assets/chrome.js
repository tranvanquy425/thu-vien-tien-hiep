/* Chrome dùng chung mọi trang: nhà tài trợ (đầu+cuối), donate trợ duyên,
   góp ý, bong bóng Zalo+TikTok. Đọc window.LIB_CONFIG.chrome. */
(function () {
  "use strict";
  const C = (window.LIB_CONFIG && window.LIB_CONFIG.chrome) || {};
  const esc = s => (s == null ? "" : String(s)).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  const sp = C.sponsor || {}, dn = C.donate || {}, fb = C.feedback || {}, so = C.social || {};

  function sponsorHTML(foot) {
    return '<div class="sponsor' + (foot ? ' foot' : '') + '"><div class="sponsor-inner">' +
      '<div class="spseal">' + esc(sp.han || "洞") + '</div>' +
      '<div class="sptext"><div class="sptag">' + esc(sp.tag || "Nhà tài trợ") + '</div>' +
      '<div class="spname">' + esc(sp.name || "") + '</div>' +
      (sp.appeal ? '<div class="spappeal">' + esc(sp.appeal) + '</div>' : '') +
      '<div class="spdesc">' + (sp.desc || "") + '</div></div>' +
      '<a class="spcta" href="' + esc(sp.url || "#") + '" target="_blank" rel="noopener">' + esc(sp.cta || "Xem ngay") + ' ›</a>' +
      '</div></div>';
  }

  // ---- top sponsor: chèn sau demo-banner (nếu có) hoặc sau topbar ----
  const anchor = document.querySelector(".demo-banner") || document.querySelector(".topbar");
  if (anchor) {
    const t = document.createElement("div"); t.innerHTML = sponsorHTML(false);
    anchor.parentNode.insertBefore(t.firstChild, anchor.nextSibling);
  }

  // ---- footer: bottom sponsor + donate + góp ý + copyline ----
  const diRows = (dn.info || []).map(i => '<div class="di"><span>' + esc(i.k) + '</span><b>' + esc(i.v) + '</b></div>').join("");
  const qr = dn.qrImg ? '<img class="qr" src="' + esc(dn.qrImg) + '" alt="QR trợ duyên">'
    : '<div class="qr">' + esc(dn.qrText || "QR") + '</div>';
  const foot = document.createElement("div");
  foot.innerHTML =
    sponsorHTML(true) +
    '<div class="site-foot"><div class="flourish"><span class="gem">❖ ❖ ❖</span></div>' +
      '<div class="foot-grid">' +
        '<div class="foot-card"><h3><span class="seal" style="width:30px;height:30px;font-size:18px">緣</span> Trợ duyên</h3>' +
          '<p class="lead">' + esc(dn.lead || "") + '</p>' +
          '<div class="donate-row">' + qr + '<div class="donate-info">' + diRows + '</div></div></div>' +
        '<div class="foot-card"><h3><span class="seal" style="width:30px;height:30px;font-size:18px">諫</span> Góp ý</h3>' +
          '<p class="lead">' + esc(fb.lead || "Góp ý nếu thấy nội dung chưa chuẩn.") + '</p>' +
          '<form class="fb-form" id="fbForm">' +
            '<textarea id="fbText" placeholder="Nội dung góp ý (vd: chương 12 ghi sai cảnh giới…)" required></textarea>' +
            '<div class="fb-row"><input id="fbWho" placeholder="Tên / liên hệ (không bắt buộc)"></div>' +
            '<button type="submit" class="send">Gửi góp ý ›</button>' +
            '<div class="fb-note" id="fbNote">Đa tạ đạo hữu! Góp ý đã được ghi nhận.</div>' +
          '</form></div>' +
      '</div>' +
      '<div class="copyline">Thư Viện Tiên Hiệp · tra cứu bám sát nguyên tác, có neo chương · © ' + new Date().getFullYear() + '</div>' +
    '</div>';
  document.body.appendChild(foot);

  // ---- bong bóng Zalo + TikTok ----
  const bub = document.createElement("div");
  bub.className = "bubbles";
  bub.innerHTML =
    '<a class="zalo" href="' + esc(so.zalo || "#") + '" target="_blank" rel="noopener" aria-label="Zalo">' +
      '<span class="lbl">Nhắn Zalo</span>' +
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 5.8 2 10.5c0 2.6 1.4 4.9 3.6 6.4-.1.9-.6 2.3-1.4 3.4-.2.3 0 .7.4.6 1.9-.4 3.4-1.2 4.3-1.8 1.1.3 2.3.4 3.1.4 5.5 0 10-3.8 10-8.5S17.5 2 12 2z"/></svg></a>' +
    '<a class="tiktok" href="' + esc(so.tiktok || "#") + '" target="_blank" rel="noopener" aria-label="TikTok">' +
      '<span class="lbl">Xem TikTok</span>' +
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8c-.9-.6-1.5-1.6-1.7-2.8h-2.7v11c0 1.3-1.1 2.4-2.4 2.4S7.4 15.3 7.4 14s1.1-2.4 2.4-2.4c.3 0 .5 0 .8.1v-2.8c-.3 0-.5-.1-.8-.1C7 8.8 4.6 11.2 4.6 14s2.4 5.2 5.2 5.2 5.2-2.4 5.2-5.2V8.6c1 .7 2.3 1.1 3.6 1.1V7c-.7 0-1.4-.2-2-.6z"/></svg></a>';
  document.body.appendChild(bub);

  // ---- xử lý góp ý ----
  const form = document.getElementById("fbForm");
  if (form) form.addEventListener("submit", async e => {
    e.preventDefault();
    const text = document.getElementById("fbText").value.trim();
    if (!text) return;
    const who = document.getElementById("fbWho").value.trim();
    const payload = { text, who, page: location.href, bo: new URLSearchParams(location.search).get("bo") || "", at: new Date().toISOString() };
    try {
      if (fb.endpoint) {
        await fetch(fb.endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
      }
    } catch (_) { /* no-cors: bỏ qua lỗi opaque */ }
    document.getElementById("fbNote").classList.add("show");
    form.querySelector("textarea").value = ""; form.querySelector("input").value = "";
  });
})();
