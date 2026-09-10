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

  // ---- global search bar + autocomplete live: chèn sau sponsor top ----
  const sponsorTop = document.querySelector(".sponsor:not(.foot)");
  const searchEl = document.createElement("div");
  searchEl.innerHTML = '<div class="global-search"><div class="gs-inner"><input class="gs-input" type="text" placeholder="Tìm nhân vật, pháp bảo, sự kiện..." aria-label="Tìm kiếm" autocomplete="off"><button class="gs-btn" aria-label="Tìm">🔍</button></div><div class="gs-suggest" id="gsSuggest" role="listbox"></div></div>';
  const searchNode = searchEl.firstChild;
  if (sponsorTop) {
    sponsorTop.parentNode.insertBefore(searchNode, sponsorTop.nextSibling);
  } else if (anchor) {
    anchor.parentNode.insertBefore(searchNode, anchor.nextSibling);
  }
  const gsInput = document.querySelector(".gs-input");
  const gsBtn = document.querySelector(".gs-btn");
  const gsSug = document.getElementById("gsSuggest");
  function doSearch() {
    const q = gsInput ? gsInput.value.trim() : "";
    if (q) location.href = "search.html?q=" + encodeURIComponent(q);
  }
  if (gsBtn) gsBtn.addEventListener("click", doSearch);

  /* ===== Autocomplete: nạp data mọi bộ → gợi ý live → dẫn THẲNG tới đích ===== */
  const norm = s => (s || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  const boList = (window.LIB_CONFIG && window.LIB_CONFIG.boList) || [];
  let INDEX = null;      // mảng phẳng các mục tra cứu
  let loading = null;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve(src);
      s.onerror = () => reject(new Error("Không tải được " + src));
      document.head.appendChild(s);
    });
  }
  async function loadSearchIndex(b) {
    if (b.shardBase) {
      const r = await fetch(b.shardBase + "/search-index.json");
      if (!r.ok) throw new Error("Search index HTTP " + r.status);
      addIndexFromShard(b, await r.json());
      return;
    }
    if (!(window.LIB_DATA && window.LIB_DATA[b.slug])) {
      await loadScript((b.dataR2 || b.dataBase || ("data/" + b.slug)) + "/data.js");
    }
    buildIndexForBo(b);
  }
  function ensureData() {
    if (loading) return loading;
    INDEX = [];
    loading = Promise.allSettled(boList.map(loadSearchIndex)).then(results => {
      const failed = results.filter(r => r.status === "rejected").length;
      if (failed === results.length && results.length) throw new Error("Không tải được dữ liệu tìm kiếm");
      return INDEX;
    });
    return loading;
  }
  // Dựng index từ file search-index.json (mảng {t:loại, n:tên, a:[biệt danh], id}) — link theo id
  function addIndexFromShard(b, arr) {
    const bo = b.slug, boTen = b.ten;
    const LINK = {
      "Nhân vật": id => "bo.html?bo=" + bo + "&char=" + encodeURIComponent(id) + "#nhan-vat",
      "Pháp bảo": id => "bo.html?bo=" + bo + "&artifact=" + encodeURIComponent(id) + "#phap-bao",
      "Công pháp": id => "bo.html?bo=" + bo + "&tech=" + encodeURIComponent(id) + "#cong-phap",
      "Cảnh giới": id => "bo.html?bo=" + bo + "&realm=" + encodeURIComponent(id) + "#canh-gioi",
      "Địa điểm": id => "bo.html?bo=" + bo + "&place=" + encodeURIComponent(id) + "#map",
      "Thế lực": id => "bo.html?bo=" + bo + "&faction=" + encodeURIComponent(id) + "#the-luc"
    };
    (arr || []).forEach(it => {
      const mk = LINK[it.t]; if (!mk || !it.n) return;
      const aliases = it.a || [];
      INDEX.push({ type: it.t, name: it.n, aliases: aliases.join(", "), bo, boTen, link: mk(it.id), hay: norm([it.n].concat(aliases).join(" ")) });
    });
  }
  // Dựng index từ LIB_DATA (chế độ non-shard: data.js đã nạp) — link pháp bảo/công pháp theo INDEX mảng
  function buildIndexForBo(b) {
    const d = (window.LIB_DATA || {})[b.slug]; if (!d) return;
    const bo = b.slug, boTen = b.ten;
    const add = (type, name, aliases, link) => INDEX.push({ type, name, aliases: (aliases || []).join(", "), bo, boTen, link, hay: norm([name].concat(aliases || []).join(" ")) });
    if (d.characters && d.characters.chars) d.characters.chars.forEach(c => {
      const identities = Array.isArray(c.thanPhanKhac) ? c.thanPhanKhac : [];
      const aliases = Array.from(new Set([].concat(c.aliases || [], identities.flatMap(x => [x && x.name].concat((x && x.aliases) || [], (x && x.oldIds) || []))).filter(Boolean)));
      add("Nhân vật", c.name, aliases, "bo.html?bo=" + bo + "&char=" + encodeURIComponent(c.id) + "#nhan-vat");
    });
    if (d.artifacts && d.artifacts.artifacts) d.artifacts.artifacts.forEach((a, i) => add("Pháp bảo", a.name, a.aliases, "bo.html?bo=" + bo + "&artifact=" + encodeURIComponent(a.id != null ? a.id : i) + "#phap-bao"));
    if (d.techniques && d.techniques.techniques) d.techniques.techniques.forEach((t, i) => add("Công pháp", t.name, t.aliases, "bo.html?bo=" + bo + "&tech=" + encodeURIComponent(t.id != null ? t.id : i) + "#cong-phap"));
    if (d.realms && d.realms.realms) d.realms.realms.forEach(r => add("Cảnh giới", r.name, r.aliases, "bo.html?bo=" + bo + "&realm=" + encodeURIComponent(r.id) + "#canh-gioi"));
    if (d.map && d.map.nodes) d.map.nodes.forEach(p => add("Địa điểm", p.name, p.aliases, "bo.html?bo=" + bo + "&place=" + encodeURIComponent(p.id) + "#map"));
    if (d.factions && d.factions.factions) d.factions.factions.forEach(f => add("Thế lực", f.name, f.aliases, "bo.html?bo=" + bo + "&faction=" + encodeURIComponent(f.id || "") + "#the-luc"));
  }
  function highlight(name, q) {
    const nn = norm(name), i = nn.indexOf(q);
    if (i < 0) return esc(name);
    return esc(name.slice(0, i)) + "<b>" + esc(name.slice(i, i + q.length)) + "</b>" + esc(name.slice(i + q.length));
  }
  const MAX_SUG = 12;
  let curList = [], curSel = -1;
  function renderSug(q) {
    if (!gsSug) return;
    const nq = norm(q);
    if (!nq || !INDEX) { gsSug.classList.remove("show"); gsSug.innerHTML = ""; curList = []; curSel = -1; return; }
    // ưu tiên: khớp đầu chuỗi > chứa; ổn định theo loại
    const hits = INDEX.filter(it => it.hay.includes(nq));
    // điểm: khớp đầu chuỗi tốt nhất, rồi tên ngắn hơn (sát hơn)
    hits.sort((a, b) => (b.hay.startsWith(nq) - a.hay.startsWith(nq)) || a.name.length - b.name.length);
    const top = hits.slice(0, MAX_SUG);
    // gom theo loại để header không lặp (giữ thứ tự xuất hiện của loại)
    const order = [], byType = {};
    top.forEach(it => { if (!byType[it.type]) { byType[it.type] = []; order.push(it.type); } byType[it.type].push(it); });
    curList = []; order.forEach(ty => byType[ty].forEach(it => curList.push(it)));
    curSel = -1;
    if (!curList.length) {
      gsSug.innerHTML = '<div class="gs-sug-group">Không có gợi ý — nhấn Enter để tìm toàn văn</div>';
      gsSug.classList.add("show"); return;
    }
    let html = "", lastType = "";
    const totalHits = hits.length;
    curList.forEach((it, i) => {
      if (it.type !== lastType) { html += '<div class="gs-sug-group">' + esc(it.type) + '</div>'; lastType = it.type; }
      html += '<a class="gs-sug" data-i="' + i + '" href="' + esc(it.link) + '">' +
        '<span class="gs-sug-name">' + highlight(it.name, nq) + '</span>' +
        (it.aliases ? '<span class="gs-sug-alias">' + esc(it.aliases) + '</span>' : '<span class="gs-sug-alias"></span>') +
        (boList.length > 1 ? '<span class="gs-sug-bo">' + esc(it.boTen) + '</span>' : '') + '</a>';
    });
    if (totalHits > MAX_SUG) html += '<div class="gs-sug-more" data-more="1">Xem tất cả ' + totalHits + ' kết quả ›</div>';
    gsSug.innerHTML = html;
    gsSug.classList.add("show");
    gsSug.querySelectorAll(".gs-sug-more").forEach(el => el.onclick = doSearch);
  }
  function setSel(n) {
    const items = gsSug ? gsSug.querySelectorAll(".gs-sug") : [];
    if (!items.length) return;
    curSel = (n + items.length) % items.length;
    items.forEach((el, i) => el.classList.toggle("active", i === curSel));
    items[curSel].scrollIntoView({ block: "nearest" });
  }
  if (gsInput) {
    let t = null;
    gsInput.addEventListener("input", () => {
      const q = gsInput.value.trim();
      clearTimeout(t);
      if (!q) { renderSug(""); return; }
      ensureData().then(() => { if (gsInput.value.trim() === q) renderSug(q); });
      if (INDEX) t = setTimeout(() => renderSug(q), 60);
    });
    gsInput.addEventListener("focus", () => { ensureData(); if (gsInput.value.trim()) renderSug(gsInput.value.trim()); });
    gsInput.addEventListener("keydown", e => {
      if (e.key === "ArrowDown") { e.preventDefault(); setSel(curSel + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setSel(curSel - 1); }
      else if (e.key === "Enter") {
        if (curSel >= 0 && curList[curSel]) { location.href = curList[curSel].link; }
        else doSearch();
      } else if (e.key === "Escape") { gsSug && gsSug.classList.remove("show"); }
    });
    document.addEventListener("click", e => {
      if (gsSug && !searchNode.contains(e.target)) gsSug.classList.remove("show");
    });
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

  // ---- nút cuộn nhanh lên đầu / xuống cuối trang (mũi tên nổi góc phải) ----
  (function () {
    const css = document.createElement("style");
    css.textContent =
      ".scroll-nav{position:fixed;right:16px;bottom:148px;z-index:65;display:flex;flex-direction:column;gap:8px}" +
      ".scroll-nav button{width:44px;height:44px;border-radius:50%;border:1.5px solid var(--line-gold,#6b521f);cursor:pointer;" +
        "background:var(--card-bg,#1d160d);color:var(--gold2,#e5c96b);font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;" +
        "box-shadow:0 4px 14px rgba(0,0,0,.4);transition:.15s;font-family:var(--sans,sans-serif)}" +
      ".scroll-nav button:hover{transform:scale(1.08);border-color:var(--gold,#c9a227);color:var(--gold3,#f3e6bf)}" +
      ".scroll-nav button:disabled{opacity:.35;cursor:default;transform:none}" +
      "@media(max-width:640px){.scroll-nav{right:10px;bottom:132px}.scroll-nav button{width:40px;height:40px}}";
    document.head.appendChild(css);

    const nav = document.createElement("div");
    nav.className = "scroll-nav";
    nav.innerHTML =
      '<button type="button" class="sc-top" aria-label="Lên đầu trang" title="Lên đầu trang">▲</button>' +
      '<button type="button" class="sc-bottom" aria-label="Xuống cuối trang" title="Xuống cuối trang">▼</button>';
    document.body.appendChild(nav);

    const topBtn = nav.querySelector(".sc-top");
    const botBtn = nav.querySelector(".sc-bottom");
    const doc = document.documentElement;
    function update() {
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.pageYOffset || doc.scrollTop || 0;
      topBtn.disabled = y <= 1;
      botBtn.disabled = y >= max - 1;
    }
    topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    botBtn.addEventListener("click", () => window.scrollTo({ top: doc.scrollHeight, behavior: "smooth" }));
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  })();

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
