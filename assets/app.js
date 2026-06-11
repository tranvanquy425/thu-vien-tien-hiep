/* sync-bump 2026-06-11T00:32Z — sort nhân mạch/túi đồ theo thời gian + dedup chéo tab */
/* ===================== Thư Viện Tiên Hiệp — app trang bộ ===================== */
(function () {
  "use strict";
  const CFG = window.LIB_CONFIG || {};
  const slug = new URLSearchParams(location.search).get("bo") || (CFG.boList && CFG.boList[0].slug);
  const bo = (CFG.boList || []).find(b => b.slug === slug);
  const DEMO = (window.LIB_DEMO || {})[slug] || {};
  let usedDemo = false;

  const $ = s => document.querySelector(s);
  const view = $("#view");
  const esc = s => (s == null ? "" : String(s)).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  const pad4 = n => String(n).padStart(4, "0");
  // Một nhân vật có thể thuộc NHIỀU thế lực (giữ tới khi rời bỏ) → theLuc là mảng (chấp cả chuỗi cũ).
  const tlName = x => typeof x === "string" ? x : (x && x.ten || "");
  const tlRaw = c => Array.isArray(c.theLuc) ? c.theLuc.filter(Boolean) : (c.theLuc ? [c.theLuc] : []);
  const tlArr = c => tlRaw(c).map(tlName);   // tên hiển thị (chuỗi) — dùng cho lọc/chip
  const TL_TRANG = { "gan-bo": "", "danh-nghia": "danh nghĩa", "gia-mao": "thân phận giả", "da-roi": "đã rời" };
  // Phe/Môn phái có trạng thái gắn bó; rời/giả mạo hết -> Tán tu (N1)
  function fmtTheLuc(c) {
    const arr = tlRaw(c);
    if (!arr.length) return "";
    const objs = arr.filter(x => typeof x === "object");
    const tanTu = objs.length === arr.length && arr.length && arr.every(x => x.trangThai === "da-roi" || x.trangThai === "gia-mao");
    const piece = x => {
      const nm = tlName(x);
      const off = typeof x === "object" && (x.trangThai === "da-roi" || x.trangThai === "gia-mao");
      const lbl = (typeof x === "object" && x.trangThai && TL_TRANG[x.trangThai]) ? ' <span class="tl-st">(' + esc(TL_TRANG[x.trangThai]) + ')</span>' : '';
      return '<span class="' + (off ? 'tl-off' : '') + '">' + esc(nm) + lbl + '</span>';
    };
    const list = arr.map(piece).join(' · ');
    return tanTu
      ? '<b class="cg-ten">Tán tu</b> <span class="tl-st">(không môn phái)</span><div class="tl-past">từng qua: ' + list + '</div>'
      : list;
  }

  if (!bo) { view.innerHTML = '<div class="empty">Không tìm thấy bộ truyện. <a href="index.html">Về Tàng Thư Các</a></div>'; return; }
  $("#boSub").textContent = bo.ten + " · " + (bo.cn || "");
  $("#crumbBo").textContent = bo.ten;
  document.title = bo.ten + " · Thư Viện Tiên Hiệp";

  /* -------- nav 7 mục -------- */
  const MUC = CFG.muc || [];
  const nav = $("#boNav");
  nav.innerHTML = MUC.map(m => '<a href="#' + m.id + '" data-id="' + m.id + '">' + esc(m.ten) + '</a>').join("");

  /* -------- data load -------- */
  async function loadJson(url) { const r = await fetch(url, { cache: "no-cache" }); if (!r.ok) throw new Error(r.status); return r.json(); }
  async function loadEntity(name, demoKey) {
    const D = (window.LIB_DATA || {})[slug];           // dữ liệu thật (data.js) — ưu tiên, chạy cả local
    if (D && D[demoKey]) return D[demoKey];
    try { return await loadJson(bo.dataBase + "/" + name + ".json"); }
    catch (e) { usedDemo = true; return DEMO[demoKey] || null; }
  }
  function readerBaseUrl() { return bo.readerBase + (readerState.phanBase || ""); }   // nối base của PHẦN đang chọn
  async function loadReaderIndex() {
    const D = (window.LIB_DATA || {})[slug];
    // Ưu tiên index R2 (đủ toàn bộ chương). readerBase chưa đặt/chưa lên → fallback bundle reader.js (Ch.1-20) → demo.
    try { return await loadJson(readerBaseUrl() + "/index.json"); }
    catch (e) {
      if (D && D.reader && D.reader.index) return D.reader.index;
      usedDemo = true; return (DEMO.reader && DEMO.reader.index) || null;
    }
  }
  async function loadChapter(so) {
    const D = (window.LIB_DATA || {})[slug];
    if ((readerState.phanBase || "") === "" && D && D.reader && D.reader.chapters && D.reader.chapters[so]) return D.reader.chapters[so];
    try { return await loadJson(readerBaseUrl() + "/chapters/c" + pad4(so) + ".json"); }
    catch (e) { usedDemo = true; return (DEMO.reader && DEMO.reader.chapters && DEMO.reader.chapters[so]) || null; }
  }
  async function loadCotTruyen(quyen) {
    const D = (window.LIB_DATA || {})[slug];
    if (D && D.cotTruyen && D.cotTruyen[quyen]) return D.cotTruyen[quyen];
    try { return await loadJson(bo.dataBase + "/cot-truyen/" + quyen + ".json"); }
    catch (e) { usedDemo = true; return (DEMO.cotTruyen && DEMO.cotTruyen[quyen]) || []; }
  }

  const DB = {};
  async function preload() {
    const [chars, realms, arts, techs, map, facs, vols] = await Promise.all([
      loadEntity("characters", "characters"), loadEntity("realms", "realms"),
      loadEntity("artifacts", "artifacts"), loadEntity("techniques", "techniques"),
      loadEntity("map", "map"), loadEntity("factions", "factions"), loadEntity("volumes", "volumes")
    ]);
    DB.chars = (chars && chars.chars) || [];
    DB.realms = ((realms && realms.realms) || []).slice().sort((a, b) => (a.capBac || 0) - (b.capBac || 0));
    DB.heThong = (realms && realms.heThong) || [];
    DB.doiChieu = (realms && realms.doiChieu) || [];
    DB.realmsGhiChu = (realms && realms.ghiChu) || "";
    DB.linhLuc = ((window.LIB_DATA || {})[slug] || {}).linhLuc || null;
    DB.artifacts = (arts && arts.artifacts) || [];
    DB.techniques = (techs && techs.techniques) || [];
    DB.mapNodes = (map && map.nodes) || [];
    DB.capBac = ((window.LIB_DATA || {})[slug] || {}).capBac || null;
    DB.factions = (facs && facs.factions) || [];
    DB.volumes = (vols && vols.volumes) || [];
    if (usedDemo) $("#demoBanner").style.display = "";
  }

  /* -------- neo chương -------- */
  function neoChips(arr) {
    if (!arr || !arr.length) return "";
    return '<div class="kv">' + arr.map(n => {
      const so = parseInt(String(n).replace(/[^0-9]/g, ""), 10);
      return '<a class="neo" href="#doc" data-goch="' + so + '">' + esc(n) + '</a>';
    }).join("") + '</div>';
  }
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-goch]");
    if (a) { pendingChapter = parseInt(a.getAttribute("data-goch"), 10); }
  });

  /* -------- drawer -------- */
  const drawer = $("#drawer"), drawerBg = $("#drawerBg");
  function openDrawer(title, cn, bodyHtml) {
    $("#dTitle").innerHTML = esc(title); $("#dCn").textContent = cn || "";
    $("#dBody").innerHTML = bodyHtml;
    drawer.classList.add("show"); drawerBg.classList.add("show");
  }
  function closeDrawer() { drawer.classList.remove("show"); drawerBg.classList.remove("show"); }
  $("#dClose").onclick = closeDrawer; drawerBg.onclick = closeDrawer;

  /* ======================= VIEWS ======================= */
  const trangThaiLabel = { song: "Còn sống", "tu-vong": "Tử vong", "mat-tich": "Mất tích", "khong-ro": "Không rõ" };

  /* --- 1. Đọc truyện --- */
  let readerState = { index: null, cur: -1, phanBase: "" };
  let pendingChapter = null;
  async function viewDoc() {
    const phanList = (bo.phanList && bo.phanList.length > 1) ? bo.phanList : null;
    view.innerHTML = '<div class="loading">Đang tải mục lục…</div>';
    if (!readerState.index) readerState.index = await loadReaderIndex();
    const idx = readerState.index;
    if (!idx || !idx.chuong || !idx.chuong.length) { view.innerHTML = '<div class="page-head"><h1>Đọc truyện</h1></div><div class="empty">Chưa có dữ liệu chương.<br>Đặt file <code>reader.js</code> vào <code>web/data/' + esc(slug) + '/</code>, hoặc chạy reader-build → R2 cho toàn bộ chương.</div>'; return; }
    const quyens = [...new Set(idx.chuong.map(c => c.quyen).filter(Boolean))];
    const volLabel = {}; (DB.volumes || []).forEach(v => volLabel[v.value] = v.label + (v.range ? " · " + v.range : ""));
    const qOpts = (quyens.length > 1 ? '<option value="">— Tất cả quyển —</option>' : '') +
      quyens.map(q => '<option value="' + esc(q) + '">' + esc(volLabel[q] || q) + '</option>').join("");
    view.innerHTML =
      '<div class="page-head"><h1>Đọc truyện</h1><span class="sub">đã nạp ' + idx.chuong.length + ' chương' + (idx.tongChuong && idx.tongChuong > idx.chuong.length ? ' / tổng ' + idx.tongChuong : '') + '</span></div>' +
      '<div class="toolbar">' +
        (phanList ? '<label>Phần</label><select id="rPhan">' + phanList.map(p => '<option value="' + esc(p.base) + '"' + (((readerState.phanBase || "") === p.base) ? ' selected' : '') + '>' + esc(p.ten) + '</option>').join("") + '</select>' : '') +
        (quyens.length ? '<label>Quyển</label><select id="rVol">' + qOpts + '</select>' : '') +
        '<label>Chương</label><select id="rCh" style="flex:1 1 220px"></select>' +
        '<input id="rJump" type="number" min="1" placeholder="Tới chương #" style="max-width:150px">' +
        '<span class="count" id="rCount"></span>' +
      '</div>' +
      '<div class="reader-main"><div class="inner"><div id="rContent"><div class="loading">…</div></div>' +
        '<div class="pager"><button class="btn" id="rPrev">‹ Chương trước</button><button class="btn" id="rNext">Chương sau ›</button></div></div></div>';
    function fillCh() {
      const qv = $("#rVol") ? $("#rVol").value : "";
      const items = idx.chuong.filter(c => !qv || c.quyen === qv);
      $("#rCh").innerHTML = items.map(c => '<option value="' + idx.chuong.indexOf(c) + '">#' + c.so + ' · ' + esc(c.tieuDe || ("Chương " + c.so)) + '</option>').join("");
      $("#rCount").textContent = items.length + " chương";
    }
    function syncVol(q) { if ($("#rVol") && q) { $("#rVol").value = q; fillCh(); } }
    window.__readerSync = syncVol;
    fillCh();
    if ($("#rPhan")) $("#rPhan").onchange = () => { readerState.phanBase = $("#rPhan").value; readerState.index = null; readerState.cur = -1; pendingChapter = null; viewDoc(); };
    if ($("#rVol")) $("#rVol").onchange = () => { fillCh(); const v = $("#rCh").value; if (v !== "") openCh(+v); };
    $("#rCh").onchange = () => openCh(+$("#rCh").value);
    $("#rJump").onchange = () => { const so = parseInt($("#rJump").value, 10); const j = idx.chuong.findIndex(c => c.so === so); if (j >= 0) { syncVol(idx.chuong[j].quyen); openCh(j); } };
    $("#rPrev").onclick = () => openCh(readerState.cur - 1);
    $("#rNext").onclick = () => openCh(readerState.cur + 1);
    let start = 0;
    if (pendingChapter != null) { const j = idx.chuong.findIndex(c => c.so === pendingChapter); if (j >= 0) start = j; pendingChapter = null; }
    if (idx.chuong[start]) syncVol(idx.chuong[start].quyen);
    openCh(start);
  }
  async function openCh(i) {
    const idx = readerState.index; if (!idx || i < 0 || i >= idx.chuong.length) return;
    readerState.cur = i; const meta = idx.chuong[i];
    const _sel = $("#rCh");
    if (_sel) {
      if (![..._sel.options].some(o => o.value === String(i)) && window.__readerSync) window.__readerSync(meta.quyen);
      if ([..._sel.options].some(o => o.value === String(i))) _sel.value = String(i);
    }
    if ($("#rPrev")) $("#rPrev").disabled = i <= 0;
    if ($("#rNext")) $("#rNext").disabled = i >= idx.chuong.length - 1;
    $("#rContent").innerHTML = '<div class="loading">Đang tải chương ' + meta.so + '…</div>';
    const data = await loadChapter(meta.so);
    if (!data) { $("#rContent").innerHTML = '<div class="empty">Không tải được chương ' + meta.so + '.</div>'; return; }
    const ttl = (data.tieuDe || meta.tieuDe || "").trim();
    const body = (data.noiDung || "").split(/\n{2,}/).map(p => "<p>" + esc(p.replace(/\n/g, " ").trim()) + "</p>").join("");
    $("#rContent").innerHTML =
      '<div class="paper"><div class="cnum">Chương ' + meta.so + (data.quyen ? " · " + esc(data.quyen) : "") + '</div>' +
      (ttl ? '<h1>' + esc(ttl) + '</h1>' : '') +
      '<div class="cmeta">' + (data.soKyTu ? data.soKyTu.toLocaleString("vi-VN") + " ký tự" : "") + '</div>' +
      '<div class="cbody">' + (body || "<p>(Chương trống)</p>") + '</div></div>';
    const _rm = $("#rContent").closest(".reader-main"); if (_rm && _rm.scrollTo) _rm.scrollTo({ top: 0 });
  }

  /* --- 2. Cốt Truyện --- */
  async function viewCotTruyen() {
    const vols = DB.volumes;
    view.innerHTML =
      '<div class="page-head"><h1>Cốt Truyện</h1><span class="sub">Tóm tắt theo chương</span></div>' +
      '<div class="toolbar">' +
        '<label>Quyển</label><select id="fVol"></select>' +
        '<label>Chương</label><select id="fCh"><option value="">— Tất cả —</option></select>' +
        '<span class="count" id="ctCount"></span></div>' +
      '<div id="ctVolInfo"></div><div id="ctList" class="cards" style="gap:10px"></div>';
    const fVol = $("#fVol"), fCh = $("#fCh");
    if (!vols.length) { $("#ctList").innerHTML = '<div class="empty">Chưa có dữ liệu quyển.</div>'; return; }
    fVol.innerHTML = vols.map(v => '<option value="' + v.value + '">' + esc(v.label) + " · " + esc(v.range || "") + '</option>').join("");
    async function renderVol() {
      const v = vols.find(x => x.value === fVol.value) || vols[0];
      $("#ctVolInfo").innerHTML = "";   // bỏ ô tóm tắt quyển — vào thẳng danh sách chương
      const data = await loadCotTruyen(v.value);
      fCh.innerHTML = '<option value="">— Tất cả —</option>' + data.map(c => '<option value="' + c.chuong + '">Ch.' + c.chuong + (c.tieuDe ? " · " + esc(c.tieuDe) : "") + '</option>').join("");
      drawCt(data);
      function drawCt(list) {
        const chSel = fCh.value;
        const items = chSel ? list.filter(c => String(c.chuong) === chSel) : list;
        $("#ctCount").textContent = items.length + " chương";
        $("#ctList").innerHTML = items.length ? items.map(c =>
          '<div class="card" style="cursor:default"><h3 style="font-size:16px">Chương ' + c.chuong + (c.tieuDe ? ' <span class="cn">' + esc(c.tieuDe) + '</span>' : '') + '</h3>' +
          '<div class="blurb">' + esc(c.tomTat || "") + '</div>' + neoChips(["@c" + pad4(c.chuong)]) + '</div>').join("")
          : '<div class="empty">Chưa có tóm tắt cho lựa chọn này.</div>';
      }
      fCh.onchange = () => drawCt(data);
    }
    fVol.onchange = renderVol; renderVol();
  }

  /* --- 3. Nhân Vật --- */
  function viewNhanVat() {
    const chars = DB.chars;
    const theLucs = [...new Set(chars.flatMap(tlArr))];
    view.innerHTML =
      '<div class="page-head"><h1>Nhân Vật</h1><span class="sub">' + chars.length + ' nhân vật</span></div>' +
      '<div class="toolbar"><input id="nvSearch" placeholder="Tìm tên / biệt danh…">' +
        '<select id="nvTheLuc"><option value="">— Mọi thế lực —</option>' + theLucs.map(t => '<option>' + esc(t) + '</option>').join("") + '</select>' +
        '<span class="count" id="nvCount"></span></div>' +
      '<div id="nvGrid" class="cards grid-3"></div>';
    function draw() {
      const q = $("#nvSearch").value.trim().toLowerCase(), tl = $("#nvTheLuc").value;
      const items = chars.filter(c => {
        const hay = (c.name + " " + (c.cn || "") + " " + (c.aliases || []).join(" ")).toLowerCase();
        return (!q || hay.includes(q)) && (!tl || tlArr(c).includes(tl));
      });
      $("#nvCount").textContent = items.length + " kết quả";
      $("#nvGrid").innerHTML = items.length ? items.map(c =>
        '<div class="card" data-id="' + c.id + '"><h3>' + esc(c.name) + (c.cn ? ' <span class="cn">' + esc(c.cn) + '</span>' : '') + '</h3>' +
        '<div class="meta-row">' +
          tlArr(c).map(x => '<span class="chip">' + esc(x) + '</span>').join('') +
          (c.canhGioiCaoNhat ? '<span class="chip gold">' + esc(c.canhGioiCaoNhat) + '</span>' : '') +
          '<span class="chip">' + esc(trangThaiLabel[c.trangThai] || c.trangThai || "") + '</span></div>' +
        '<div class="blurb">' + esc(c.blurb || "") + '</div></div>').join("")
        : '<div class="empty">Không có nhân vật phù hợp.</div>';
      $("#nvGrid").querySelectorAll(".card").forEach(el => el.onclick = () => openChar(el.dataset.id));
    }
    $("#nvSearch").oninput = draw; $("#nvTheLuc").onchange = draw; draw();
  }
  function openChar(id) {
    const c = DB.chars.find(x => x.id === id); if (!c) return;
    const t = c.tabs || {};
    const kl = (t.kinhLich || []).map(e => {
      if (e.bridge) {
        return '<div class="ev bridge"><div class="ev-bridge">' +
          (e.khoang ? '<span class="neo rng">' + esc(e.khoang) + '</span> ' : '') + esc(e.text || "") + '</div></div>';
      }
      const lv = e.importance || "normal";
      return '<div class="ev ' + lv + '"><div class="ev-head"><span class="lvl ' + lv + '">' +
        ({ major: "Trọng đại", normal: "Quan trọng", minor: "Bình thường" }[lv] || "Quan trọng") + '</span>' +
        (e.tieuDe ? '<b class="ev-tieude">' + esc(e.tieuDe) + '</b>' : '') +
        (e.chuong ? '<a class="neo" href="#doc" data-goch="' + String(e.chuong).replace(/[^0-9]/g, "") + '">' + esc(e.chuong) + '</a>' : '') +
        '</div><div class="ev-text">' + esc(e.text || "") + '</div></div>';
    }).join("");
    const RTAG = { "cha-me": "Cha/Mẹ", "ban-be": "Bạn bè", "dong-minh": "Đồng minh", "doi-thu": "Đối thủ", "ho-hang": "Họ hàng", "an-nhan": "Ân nhân", "su-mon": "Sư môn", "the-thiep": "Thê thiếp", "khac": "Khác" };
    const nmArr = _sortChrono(t.nhanMach || []);
    const nmCompact = nmArr.length > 6;   // nhiều quan hệ (vd nhân vật chính) -> bấm-mở
    const nm = nmArr.map(n => {
      const hd = '<b class="ix-ten">' + esc(n.ten) + '</b>' +
        (n.tag ? '<span class="rtag ' + esc(n.tag) + '">' + esc(RTAG[n.tag] || n.tag) + '</span>' : '') +
        (n.quanHe ? '<span class="chip">' + esc(n.quanHe) + '</span>' : '');
      const bd = '<div class="ev-text">' + esc(stripNeo(n.ghiChu || "")) + '</div>';
      return nmCompact
        ? '<details class="itx"><summary>' + hd + '</summary>' + bd + '</details>'
        : '<div class="ev"><div class="ev-head">' + hd + '</div>' + bd + '</div>';
    }).join("");
    // Tiểu sử: prose + điểm nổi bật (có neo) — theo khuôn web cũ
    const diem = (t.diem || []).map(d => '<div class="ev minor"><div class="ev-text">' + esc(d.text || "") +
      (d.chuong ? ' <a class="neo" href="#doc" data-goch="' + String(d.chuong).replace(/[^0-9]/g, "") + '">' + esc(d.chuong) + '</a>' : '') + '</div></div>').join("");
    const ib = (lbl, val, full) => val ? '<div class="iblock' + (full ? ' full' : '') + '"><div class="lbl">' + lbl + '</div><div class="val">' + val + '</div></div>' : '';
    const hanBd = [c.cn ? esc(c.cn) : '', (c.aliases && c.aliases.length) ? esc(c.aliases.join(", ")) : ''].filter(Boolean).join(" · ");
    const tieuSuPane =
      '<div class="info-grid">' +
        ib("Họ tên", esc(c.name)) +
        ib("Hán tự / Bí danh", hanBd || "—") +
        ib("Vai trò", esc(c.vaiTro || (c.blurb ? "" : ""))) +
        ib("Phe / Môn phái", fmtTheLuc(c)) +
        ib("Cảnh giới", fmtCanhGioi(c.canhGioiCaoNhat), true) +
        ib("Tính cách", (c.tinhCach ? fmtBullets(c.tinhCach) : ""), true) +
      '</div>' +
      ((diem && !c.tinhCach) ? '<div style="margin-top:14px"><div class="chip gold">Nét nổi bật</div><div class="timeline" style="margin-top:10px">' + diem + '</div></div>' : '');
    // Tu vi: mỗi mục = 1 ĐẠI CẢNH GIỚI (Ngưng Khí/Trúc Cơ/Kết Đan…) HOẶC mốc hệ-khác/bước ngoặt — thẻ BẤM-MỞ.
    // Tiểu cảnh giới (sơ/trung/hậu kỳ, tầng) nằm trong `tieu` của đại cảnh giới → render thành CHẤM CON. Theo thứ tự cốt truyện.
    const goch = s => String(s).replace(/[^0-9]/g, "");
    const tuViHtml = (t.tuViMoc || []).map(m => {
      const subs = (m.tieu || []).map(s => '<div class="tv-sub"><span class="tv-dot"></span><div class="tv-subbody"><b>' + esc(s.canhGioi || "") + '</b>' +
        (s.chuong ? ' <a class="neo" href="#doc" data-goch="' + goch(s.chuong) + '">' + esc(s.chuong) + '</a>' : '') +
        (s.text ? '<div class="tv-subtext">' + esc(s.text) + '</div>' : '') + '</div></div>').join("");
      const tag = m.heKhac ? '<span class="tv-tag he">' + esc(typeof m.heKhac === "string" ? m.heKhac : "Hệ khác") + '</span>' : (m.buocNgoat ? '<span class="tv-tag bn">Bước ngoặt</span>' : '');
      return '<details class="tvg"><summary><span class="tv-dot big"></span><b class="tv-canh">' + esc(m.canhGioi || "") + '</b>' + tag +
        (m.chuong ? '<a class="neo" href="#doc" data-goch="' + goch(m.chuong) + '" onclick="event.stopPropagation()">' + esc(m.chuong) + '</a>' : '') + '</summary>' +
        '<div class="tvg-body">' + (m.text ? '<div class="ev-text">' + esc(m.text) + '</div>' : '') + (subs ? '<div class="tv-subs">' + subs + '</div>' : '') + '</div></details>';
    }).join("");
    const tuViPane = tuViHtml ? '<div class="tvgroups">' + tuViHtml + '</div>' : '<div class="prose">' + esc(t.tuVi || "—") + '</div>';
    const td = t.tuiDo || {};
    const TDTRANG = { "dang-co": "Đang giữ", "da-dung": "Đã dùng", "hong": "Hư hỏng", "mat": "Bị mất", "bi-cuop": "Bị cướp", "doi-ten": "Đổi tên" };
    function bagItem(it) {
      if (it == null) return "";
      if (typeof it === "string") return '<div class="ev"><div class="ev-text">' + esc(it) + '</div></div>';
      const st = it.trangThai ? '<span class="rtag ' + esc(it.trangThai) + '">' + esc(TDTRANG[it.trangThai] || it.trangThai) + '</span>' : '';
      const old = it.tenCu ? '<span class="chip">trước gọi: ' + esc(it.tenCu) + '</span>' : '';
      const neo = it.nguon ? ' <a class="neo" href="#doc" data-goch="' + String(it.nguon).replace(/[^0-9]/g, "") + '">' + esc(it.nguon) + '</a>' : '';
      const moTa = it.moTa || it.ghiChu || "";
      return '<div class="ev"><div class="ev-head"><b style="color:#e6c878">' + esc(it.ten || "") + '</b>' + st + old + '</div>' +
        (moTa ? '<div class="ev-text">' + esc(moTa) + neo + '</div>' : (neo ? '<div class="ev-text">' + neo + '</div>' : '')) + '</div>';
    }
    // Tự gộp pháp bảo/công pháp có soHuu chứa nhân vật này vào túi đồ
    // (chống lỗi túi đồ sót do nhập tay tách rời / key trùng bị đè). Dedup theo tên + alias.
    function autoMerge(manual, owned) {
      const arr = (manual || []).slice();
      // Chuẩn hóa tên để dedup: bỏ phần trong ngoặc "(...)", lowercase, gộp khoảng trắng.
      const norm = x => String(typeof x === "string" ? x : ((x && (x.ten || x.name)) || "")).toLowerCase().replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
      // Dedup với MỌI danh mục túi đồ tay (không riêng phapBao) → tránh trùng chéo tab (đan dược/nguyên liệu đã liệt kê tay).
      const allManual = [].concat(td.phapBao || [], td.congPhap || [], td.danDuoc || [], td.nguyenLieu || [], td.linhThu || [], td.linhThao || [], td.khac || []);
      const manualNorms = allManual.map(norm).filter(n => n.length >= 4);
      const hasName = a => [a.name].concat(a.aliases || []).map(norm).filter(n => n.length >= 4).some(n => manualNorms.indexOf(n) !== -1);
      const firstNeo = s => { const m = String(s || "").match(/c(\d{1,4})/i); return m ? "@c" + ("0000" + m[1]).slice(-4) : ""; };
      (owned || []).forEach(a => {
        if (hasName(a)) return;
        arr.push({ ten: a.name, moTa: a.blurb || "", nguon: (a.nguon && a.nguon[0]) || firstNeo(a.trangThai) || firstNeo(a.blurb), trangThai: TDTRANG[a.trangThai] ? a.trangThai : undefined });
      });
      return arr;
    }
    const ownArts = (DB.artifacts || []).filter(a => (a.soHuu || []).includes(c.id));
    const ownTechs = (DB.techniques || []).filter(a => (a.soHuu || []).includes(c.id));
    const TD_CATS = [["phapBao", "Pháp bảo"], ["congPhap", "Công pháp"], ["danDuoc", "Đan dược"], ["linhThu", "Linh thú"], ["nguyenLieu", "Nguyên liệu"], ["linhThao", "Linh thảo"], ["khac", "Khác"]];
    let bagItems = [];
    TD_CATS.forEach(p => {
      const arr = p[0] === "phapBao" ? autoMerge(td.phapBao, ownArts) : p[0] === "congPhap" ? autoMerge(td.congPhap, ownTechs) : td[p[0]];
      (arr || []).forEach(it => bagItems.push({ cat: p[1], it: (typeof it === "string" ? { ten: it } : it) }));
    });
    bagItems = bagItems.map((x, i) => [x, i]).sort((a, b) => (_firstCh(a[0].it) - _firstCh(b[0].it)) || (a[1] - b[1])).map(p => p[0]);
    const bagCompact = bagItems.length > 6;   // túi đồ dài (nhân vật chính) -> bộ lọc + bấm-mở
    let bagHtml;
    if (!bagItems.length) bagHtml = '';
    else if (!bagCompact) {
      bagHtml = TD_CATS.map(p => {
        const items = bagItems.filter(x => x.cat === p[1]);
        return items.length ? '<div style="margin-bottom:12px"><div class="chip gold">' + p[1] + '</div><div class="timeline" style="margin-top:8px">' + items.map(x => bagItem(x.it)).join("") + '</div></div>' : '';
      }).join("");
    } else {
      const cats = TD_CATS.map(p => p[1]).filter(lbl => bagItems.some(x => x.cat === lbl));
      const fb = '<div class="bag-filter"><button class="bchip active" data-cat="">Tất cả (' + bagItems.length + ')</button>' +
        cats.map(lbl => '<button class="bchip" data-cat="' + esc(lbl) + '">' + esc(lbl) + ' (' + bagItems.filter(x => x.cat === lbl).length + ')</button>').join("") + '</div>';
      const list = bagItems.map(x => {
        const it = x.it;
        const st = (it.trangThai && TDTRANG[it.trangThai]) ? '<span class="rtag ' + esc(it.trangThai) + '">' + esc(TDTRANG[it.trangThai]) + '</span>' : '';
        const old = it.tenCu ? '<span class="chip">trước gọi: ' + esc(it.tenCu) + '</span>' : '';
        const moTa = esc(stripNeo(it.moTa || it.ghiChu || ""));
        return '<details class="itx" data-cat="' + esc(x.cat) + '"><summary><span class="bcat">' + esc(x.cat) + '</span><b class="ix-ten">' + esc(it.ten || "") + '</b>' + st + old + '</summary><div class="ev-text">' + (moTa || "—") + '</div></details>';
      }).join("");
      bagHtml = fb + '<div class="bag-list" id="bagList">' + list + '</div>';
    }
    const tabs = [
      ["Tiểu sử", tieuSuPane],
      ["Kinh lịch", kl ? '<div class="timeline">' + kl + '</div>' : '<div class="empty">Chưa có sự kiện.</div>'],
      ["Tu vi", tuViPane],
      ["Nhân mạch", nm ? '<div class="timeline">' + nm + '</div>' : '<div class="empty">—</div>'],
      ["Túi đồ", bagHtml || '<div class="empty">Trống.</div>']
    ];
    const head = '<div class="kv">' +
      tlArr(c).map(x => '<span class="chip">' + esc(x) + '</span>').join('') +
      (c.canhGioiCaoNhat ? '<span class="chip gold">' + esc(c.canhGioiCaoNhat) + '</span>' : '') +
      '<span class="chip">' + esc(trangThaiLabel[c.trangThai] || "") + '</span>' +
      (c.aliases && c.aliases.length ? '<span class="chip">Biệt danh: ' + c.aliases.map(esc).join(", ") + '</span>' : '') + '</div>' +
      (c.blurb ? '<div class="char-blurb-scroll">' + esc(c.blurb) + '</div>' : '');
    const tabsBar = '<div class="tabs">' + tabs.map((t2, i) => '<button data-t="' + i + '"' + (i === 0 ? ' class="active"' : '') + '>' + t2[0] + '</button>').join("") + '</div>';
    const panes = tabs.map((t2, i) => '<div class="tab-pane' + (i === 0 ? ' active' : '') + '" data-p="' + i + '">' + t2[1] + '</div>').join("");
    openDrawer(c.name, c.cn, head + tabsBar + panes);   // bỏ "Neo nguồn" cuối thẻ — neo đã gắn inline trong từng mục (dữ liệu nội bộ)
    $("#dBody").querySelectorAll(".tabs button").forEach(b => b.onclick = () => {
      $("#dBody").querySelectorAll(".tabs button").forEach(x => x.classList.remove("active"));
      $("#dBody").querySelectorAll(".tab-pane").forEach(x => x.classList.remove("active"));
      b.classList.add("active"); $("#dBody").querySelector('.tab-pane[data-p="' + b.dataset.t + '"]').classList.add("active");
    });
    // bộ lọc Túi đồ theo loại (chế độ gọn)
    $("#dBody").querySelectorAll(".bag-filter .bchip").forEach(b => b.onclick = () => {
      $("#dBody").querySelectorAll(".bag-filter .bchip").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      const cat = b.dataset.cat;
      $("#dBody").querySelectorAll("#bagList details").forEach(d => { d.style.display = (!cat || d.dataset.cat === cat) ? "" : "none"; });
    });
  }

  /* --- 4. Map --- */
  const CAP_LABEL = { "gioi-dien": "Giới diện", "tinh-cau": "Tinh cầu", "vuc": "Vực", "gioi-nho": "Giới nhỏ", "quoc-gia": "Quốc gia", "chau": "Châu", "thanh": "Thành", "khac": "Khác" };

  function buildCapBacSvg(cb) {
    if (!cb || !cb.capList || !cb.capList.length) return "";
    var list = cb.capList.slice().sort(function(a, b) { return b.cap - a.cap; });
    var BAND_H = 90, ARROW_H = 28, W = 800, PAD = 20;
    var totalH = list.length * BAND_H + (list.length - 1) * ARROW_H + PAD * 2;
    var svgParts = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + totalH + '" width="100%" style="display:block;max-width:100%;overflow:visible" aria-label="Sơ đồ cấp bậc tu chân quốc">',
      '<defs>',
      '<marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">',
      '<polygon points="0 0, 8 3, 0 6" fill="var(--line-gold)"/>',
      '</marker>',
      '</defs>'
    ];
    var CAP_COLORS = { 6: "var(--chu)", 5: "var(--gold)", 4: "var(--gold-soft)", 3: "var(--jade)", 2: "var(--muted)", 1: "var(--muted2)" };
    list.forEach(function(band, idx) {
      var y = PAD + idx * (BAND_H + ARROW_H);
      var color = CAP_COLORS[band.cap] || "var(--muted2)";
      var isEmpty = !band.thucThe || band.thucThe.length === 0;
      var bandOpacity = isEmpty ? '0.45' : '1';
      // Band background
      svgParts.push('<rect x="' + PAD + '" y="' + y + '" width="' + (W - PAD * 2) + '" height="' + BAND_H + '" rx="10" fill="var(--ink3)" stroke="' + color + '" stroke-width="1.5" opacity="' + bandOpacity + '"/>');
      // Cap label badge
      svgParts.push('<rect x="' + (PAD + 10) + '" y="' + (y + 10) + '" width="130" height="26" rx="6" fill="' + color + '" opacity="0.18"/>');
      svgParts.push('<text x="' + (PAD + 75) + '" y="' + (y + 28) + '" text-anchor="middle" font-size="13" font-weight="700" fill="' + color + '" font-family="var(--sans)" opacity="' + bandOpacity + '">' + esc(band.ten) + '</text>');
      // Entities
      if (isEmpty) {
        svgParts.push('<text x="' + (PAD + 155) + '" y="' + (y + 28) + '" font-size="12" fill="var(--muted2)" font-family="var(--sans)" font-style="italic">(chưa rõ trong nguyên tác)</text>');
      } else {
        var ex = PAD + 155, ey = y + 22;
        band.thucThe.forEach(function(te, ti) {
          var bw = Math.min(140, (W - PAD * 2 - 155 - 10) / Math.max(band.thucThe.length, 1) - 8);
          var bx = ex + ti * (bw + 8);
          if (bx + bw > W - PAD * 2 + PAD) return; // overflow guard
          svgParts.push('<rect x="' + bx + '" y="' + ey + '" width="' + bw + '" height="50" rx="8" fill="var(--panel)" stroke="' + color + '" stroke-width="1" opacity="0.85"/>');
          // Entity name — wrap at ~16 chars
          var nameStr = te.ten || "";
          var line1 = nameStr.length > 16 ? nameStr.slice(0, 16) : nameStr;
          var line2 = nameStr.length > 16 ? nameStr.slice(16, 30) : "";
          svgParts.push('<text x="' + (bx + bw / 2) + '" y="' + (ey + (line2 ? 18 : 24)) + '" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--gold2)" font-family="var(--serif)" style="dominant-baseline:auto">' + esc(line1) + '</text>');
          if (line2) svgParts.push('<text x="' + (bx + bw / 2) + '" y="' + (ey + 32) + '" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--gold2)" font-family="var(--serif)">' + esc(line2) + '</text>');
          // Neo
          if (te.neo) {
            var neoStr = te.neo.split(",")[0].trim();
            svgParts.push('<text x="' + (bx + bw / 2) + '" y="' + (ey + 46) + '" text-anchor="middle" font-size="9.5" fill="var(--muted2)" font-family="var(--sans)">' + esc(neoStr) + '</text>');
          }
        });
      }
      // Arrow between bands
      if (idx < list.length - 1) {
        var arrowX = W / 2;
        var arrowY1 = y + BAND_H;
        var arrowY2 = arrowY1 + ARROW_H - 6;
        svgParts.push('<line x1="' + arrowX + '" y1="' + arrowY1 + '" x2="' + arrowX + '" y2="' + arrowY2 + '" stroke="var(--line-gold)" stroke-width="1.5" marker-end="url(#arrowhead)" opacity="0.6"/>');
        svgParts.push('<text x="' + (arrowX + 10) + '" y="' + (arrowY1 + ARROW_H / 2 + 4) + '" font-size="10" fill="var(--muted2)" font-family="var(--sans)" opacity="0.8">quản lý</text>');
      }
    });
    // Legend
    svgParts.push('<text x="' + PAD + '" y="' + (totalH - 4) + '" font-size="10.5" fill="var(--muted2)" font-family="var(--sans)" font-style="italic">Ghi chú: cấp trên quản cấp dưới · dữ liệu từ nguyên tác Ch.1-220 · nguồn: Liên Minh Tu Chân @c0104</text>');
    svgParts.push('</svg>');
    return svgParts.join("\n");
  }

  function viewMap() {
    var cb = DB.capBac;
    var svgBlock = "";
    if (cb && cb.capList && cb.capList.length) {
      svgBlock = '<div class="section-title" style="margin-top:8px">Sơ đồ cấp bậc tu chân quốc</div>' +
        '<div style="background:var(--panel-bg);border:1px solid var(--line-gold);border-radius:var(--radius);padding:16px 12px;margin-bottom:22px;overflow-x:auto">' +
        buildCapBacSvg(cb) +
        '<div style="margin-top:10px;font-size:12px;color:var(--muted);font-family:var(--sans)">' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--chu);margin-right:5px;vertical-align:middle"></span>Lục cấp&ensp;' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--gold);margin-right:5px;vertical-align:middle"></span>Ngũ cấp&ensp;' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--gold-soft);margin-right:5px;vertical-align:middle"></span>Tứ cấp&ensp;' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--jade);margin-right:5px;vertical-align:middle"></span>Tam cấp&ensp;' +
        '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--muted);margin-right:5px;vertical-align:middle"></span>Nhị/Nhất cấp' +
        '</div>' +
        '</div>';
    }
    const nodes = DB.mapNodes;
    view.innerHTML = '<div class="page-head"><h1>Map</h1><span class="sub">Khu vực từ lớn tới nhỏ</span></div>' +
      svgBlock +
      (nodes.length ? '<div class="section-title">Cây địa danh</div><div class="tree" id="mapTree"></div>' : '<div class="empty">Chưa có dữ liệu map.</div>');
    if (!nodes.length) return;
    const byParent = {}; nodes.forEach(n => { (byParent[n.parentId || "root"] = byParent[n.parentId || "root"] || []).push(n); });
    function build(pid) {
      const ch = byParent[pid]; if (!ch) return "";
      return '<ul>' + ch.map(n => {
        const kids = byParent[n.id];
        return '<li>' + (kids ? '<span class="tw" data-tw>▾</span>' : '<span class="tw">•</span>') +
          '<span class="node" data-id="' + n.id + '"><span class="cap">' + (CAP_LABEL[n.capDo] || n.capDo || "") + '</span>' + esc(n.name) + '</span>' +
          (kids ? build(n.id) : "") + '</li>';
      }).join("") + '</ul>';
    }
    $("#mapTree").innerHTML = build("root");
    $("#mapTree").querySelectorAll("[data-tw]").forEach(tw => tw.onclick = () => {
      const ul = tw.parentElement.querySelector("ul"); if (!ul) return;
      const hide = ul.style.display === "none"; ul.style.display = hide ? "" : "none"; tw.textContent = hide ? "▾" : "▸";
    });
    $("#mapTree").querySelectorAll(".node").forEach(nd => nd.onclick = () => {
      $("#mapTree").querySelectorAll(".node").forEach(x => x.classList.remove("sel")); nd.classList.add("sel");
      const n = nodes.find(x => x.id === nd.dataset.id);
      openDrawer(n.name, n.cn, '<div class="kv"><span class="chip gold">' + (CAP_LABEL[n.capDo] || n.capDo || "") + '</span></div>' +
        '<div class="prose">' + esc(stripNeo(n.detail || n.blurb || "—")) + '</div>' +
        (n.theLucLienQuan && n.theLucLienQuan.length ? '<div style="margin-top:12px"><div class="chip">Thế lực liên quan</div><div class="prose">' + n.theLucLienQuan.map(esc).join(" · ") + '</div></div>' : ''));
    });
  }

  /* --- 5. Cảnh Giới --- */
  function viewCanhGioi() {
    const realms = DB.realms, heThong = DB.heThong || [], doiChieu = DB.doiChieu || [];
    if (!realms.length) { view.innerHTML = '<div class="page-head"><h1>Cảnh Giới</h1></div><div class="empty">Chưa có dữ liệu cảnh giới.</div>'; return; }
    const heChinh = heThong.find(h => h.chinh) || heThong[0];
    const cgSub = heChinh ? esc(heChinh.ten) + (doiChieu.length ? " (hệ chính) · có bảng đối chiếu" : "") : "Hệ thống tu luyện";
    const loTrinhTitle = "Lộ trình " + (heChinh ? esc(heChinh.ten) : "tu luyện");
    const heCards = heThong.length ? '<div class="cards grid-2" style="margin-bottom:14px">' + heThong.map((h, i) =>
      '<div class="card" data-he="' + i + '">' + (h.chinh ? '<span class="chip gold">Hệ chính</span> ' : '') +
      '<h3 style="display:inline">' + esc(h.ten) + '</h3>' +
      '<div class="blurb">' + esc(h.moTa || "") + '</div>' +
      '<div style="margin-top:8px;color:var(--gold);font-size:12.5px">Xem chi tiết ›</div></div>').join("") + '</div>' : "";
    // bảng đối chiếu — nội dung cho cửa sổ (mở từ thanh ngang)
    const rows = doiChieu.map(r =>
      '<tr style="border-top:1px solid var(--line)"><td style="color:var(--muted2);white-space:nowrap;padding:8px 10px">' + esc(r.buoc || "") + '</td>' +
      '<td style="color:var(--gold2);font-weight:600;padding:8px 10px">' + esc(r.tuDao || "") + '</td>' +
      '<td style="color:#cdbfa3;padding:8px 10px">' + esc(r.tuTien || "—") + '</td>' +
      '<td style="color:#e7a98e;padding:8px 10px">' + esc(r.coToc || "—") + '</td></tr>').join("");
    const tableInner = doiChieu.length ?
      '<div style="overflow-x:auto;border:1px solid var(--line);border-radius:10px">' +
      '<table style="border-collapse:collapse;width:100%;min-width:520px;font-size:13.5px">' +
      '<thead><tr style="background:#241b10">' +
      '<th style="text-align:left;padding:9px 10px;color:var(--gold2)">Bước</th>' +
      '<th style="text-align:left;padding:9px 10px;color:var(--gold2)">Tu Đạo</th>' +
      '<th style="text-align:left;padding:9px 10px;color:var(--gold2)">Tu Tiên</th>' +
      '<th style="text-align:left;padding:9px 10px;color:var(--gold2)">Cổ Tộc</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>' : "";
    // THANH NGANG đối chiếu — đặt ngay sau 4 hệ thống
    const dcBar = doiChieu.length ?
      '<button class="btn gold" id="dcBar" style="width:100%;text-align:left;display:flex;align-items:center;gap:10px;padding:13px 16px;margin-bottom:18px;font-size:14.5px">' +
      '<span style="font-size:18px">▤</span> Bảng đối chiếu hệ thống · Tu Đạo — Tu Tiên — Cổ Tộc <span style="margin-left:auto;color:var(--gold)">bấm để xem ›</span></button>' : "";

    // Hệ Cảnh Giới Linh Lực (thượng cổ) — KHÁC cảnh giới tu vi; chỉ render khi có dữ liệu
    const ll = DB.linhLuc;
    const llSection = ll ? (
      '<h2 class="section-title" style="margin-top:24px">Cảnh Giới Linh Lực <span style="font-size:12.5px;color:var(--muted);font-weight:400">· hệ thượng cổ thất truyền — KHÁC cảnh giới tu vi</span></h2>' +
      (ll.ghiChu ? '<div class="prose" style="font-size:13.5px;color:var(--muted);margin-bottom:12px">' + esc(ll.ghiChu) + '</div>' : "") +
      '<div class="cards grid-3">' + (ll.capBac || []).map((c, i) =>
        '<div class="card" data-ll="' + i + '"><h3 style="display:inline">' + esc(c.ten) + '</h3>' +
        '<div class="blurb">' + esc(c.blurb || "") + '</div>' +
        '<div style="margin-top:8px;color:var(--gold);font-size:12.5px">Xem chi tiết ›</div></div>').join("") + '</div>' +
      ((ll.thucThe && ll.thucThe.length) ? '<div style="margin-top:14px"><div class="chip gold">Trong truyện</div>' +
        ll.thucThe.map(t => '<div class="rcard" style="margin-top:8px"><h3 style="font-size:14.5px">' + esc(t.ten) + '</h3>' +
          '<div class="blurb">' + esc(t.detail || "") + '</div></div>').join("") + '</div>' : "")
    ) : "";

    view.innerHTML =
      '<div class="page-head"><h1>Cảnh Giới</h1><span class="sub">' + cgSub + '</span></div>' +
      (DB.realmsGhiChu ? '<div class="prose" style="font-size:13.5px;color:var(--muted);margin-bottom:14px">' + esc(stripNeo(DB.realmsGhiChu)) + '</div>' : "") +
      heCards + dcBar +
      '<h2 class="section-title">' + loTrinhTitle + '</h2><div class="ladder" id="ladder"></div>' +
      llSection;
    if (doiChieu.length) $("#dcBar").onclick = () => openDrawer("Bảng đối chiếu hệ thống", "Tu Đạo · Tu Tiên · Cổ Tộc", tableInner);
    // thẻ hệ thống bấm được → cửa sổ chi tiết + cấp bậc đối chiếu
    view.querySelectorAll('.card[data-he]').forEach(el => el.onclick = () => {
      const h = heThong[+el.dataset.he];
      let body = '<div class="prose">' + fmtProse(h.detail || h.moTa || "") + '</div>';
      if (h.capBac && h.capBac.length) body += '<div style="margin-top:14px"><div class="chip gold">Cấp bậc & đối chiếu</div><div class="timeline" style="margin-top:10px">' +
        h.capBac.map(c => '<div class="ev"><div class="ev-head"><b style="color:#e6c878">' + esc(c.ten) + '</b>' +
          (c.tuongDuong ? '<span class="chip">↔ ' + esc(c.tuongDuong) + '</span>' : '') + '</div>' +
          (c.moTa ? '<div class="ev-text">' + esc(c.moTa) + '</div>' : '') + '</div>').join("") + '</div></div>';
      if (h.link) body += '<div style="margin-top:12px"><a class="neo" href="' + esc(h.link) + '" target="_blank" rel="noopener">Trang wiki ↗</a></div>';
      openDrawer(h.ten, h.chinh ? "Hệ chính" : "", body);
    });

    $("#ladder").innerHTML = realms.map(r => {
      const tdg = r.tuongDuong || {};
      const eq = [tdg.tuTien ? '<span class="chip">Tiên: ' + esc(tdg.tuTien) + '</span>' : '', tdg.coToc ? '<span class="chip chu">Cổ Tộc: ' + esc(tdg.coToc) + '</span>' : ''].join("");
      return '<div class="rung" data-id="' + esc(r.id) + '"><div class="rail"><div class="dot"></div><div class="line"></div></div>' +
        '<div class="rcard"><h3><span class="lvlno">#' + (r.capBac || "?") + '</span>' + esc(r.name) +
        (r.aliases && r.aliases.length ? ' <span class="cn">(' + r.aliases.map(esc).join(", ") + ')</span>' : '') + '</h3>' +
        '<div class="meta-row"><span class="chip gold">' + esc(r.buoc || "") + '</span>' + eq + '</div>' +
        '<div class="blurb">' + esc(r.blurb || "") + '</div></div></div>';
    }).join("");
    $("#ladder").querySelectorAll(".rung").forEach(el => el.onclick = () => {
      const r = realms.find(x => x.id === el.dataset.id); const tdg = r.tuongDuong || {};
      openDrawer(r.name, (r.aliases && r.aliases.length ? r.aliases.join(", ") : r.cn), '<div class="kv"><span class="chip gold">' + esc(r.buoc || "") + '</span><span class="chip">Cấp ' + (r.capBac || "?") + '</span></div>' +
        '<div class="prose">' + fmtProse(r.detail || r.blurb || "—") + '</div>' +
        (r.dacThu ? '<div style="margin-top:12px"><div class="chip gold">Đặc thù</div><div class="prose">' + esc(stripNeo(r.dacThu)) + '</div></div>' : '') +
        ((tdg.tuTien || tdg.coToc) ? '<div style="margin-top:12px"><div class="chip gold">Tương đương</div><div class="prose">' +
          (tdg.tuTien ? 'Tu Tiên: ' + esc(tdg.tuTien) + '<br>' : '') + (tdg.coToc ? 'Cổ Tộc: ' + esc(tdg.coToc) : '') + '</div></div>' : ''));
    });
    // wiring thẻ cảnh giới linh lực
    if (ll) view.querySelectorAll('.card[data-ll]').forEach(el => el.onclick = () => {
      const c = (ll.capBac || [])[+el.dataset.ll]; if (!c) return;
      openDrawer(c.ten, "Cảnh giới linh lực" + (ll.ten ? " · " + ll.ten : ""),
        '<div class="prose">' + esc(stripNeo(c.detail || c.blurb || "—")) + '</div>');
    });
  }

  /* --- 6 & 7. Pháp Bảo / Công Pháp (lưới + lọc) --- */
  // Gỡ neo nguồn (@cXXXX) khỏi nội dung HIỂN THỊ — neo chỉ dùng nội bộ (áp dụng MỌI mục)
  function stripNeo(text) {
    if (!text) return text;
    let t = String(text).replace(/\(([^()]*)\)/g, function (m, inner) {
      if (!/@c\d{3,4}/i.test(inner)) return m;
      const cleaned = inner.replace(/@c\d{3,4}/gi, "").replace(/[–\-,;:，、]/g, " ").replace(/\s+/g, " ").trim();
      return cleaned ? "(" + cleaned + ")" : "";
    });
    t = t.replace(/@c\d{3,4}/gi, "");
    return t.replace(/\s+([.,;:!?…)])/g, "$1").replace(/\s{2,}/g, " ").trim();
  }
  // Ô thông tin dạng "sơ yếu lý lịch" (dùng chung CSS .info-grid/.iblock với thẻ nhân vật)
  function iblk(lbl, val, full) { return val ? '<div class="iblock' + (full ? ' full' : '') + '"><div class="lbl">' + lbl + '</div><div class="val">' + val + '</div></div>' : ''; }
  function infoGrid(pairs) { const b = pairs.map(p => iblk(p[0], p[1], p[2])).filter(Boolean).join(""); return b ? '<div class="info-grid">' + b + '</div>' : ''; }
  function ownerName(id) { const c = (DB.chars || []).find(x => x.id === id); return c ? c.name : id; }
  function _neoCount(s) { var m = String(s || "").match(/@c\d{3,4}/g); return m ? m.length : 0; }
  function _prio(it) { return (it && typeof it === "object" && typeof it.uuTien === "number") ? it.uuTien : 0; } // ưu tiên cao = nổi lên đầu
  function _sortPrio(arr) { return (arr || []).map(function (x, i) { return [x, i]; }).sort(function (a, b) { return (_prio(b[0]) - _prio(a[0])) || (a[1] - b[1]); }).map(function (p) { return p[0]; }); }
  // Thứ tự THỜI GIAN: lấy số chương đầu tiên (gap/nguon/ghiChu/moTa) → nhỏ trước. Thiếu neo → về cuối.
  function _firstCh(it) {
    if (!it || typeof it !== "object") return 999999;
    var m = String(it.gap || it.nguon || it.ghiChu || it.moTa || "").match(/c(\d{1,4})/i);
    return m ? parseInt(m[1], 10) : 999999;
  }
  function _sortChrono(arr) { return (arr || []).map(function (x, i) { return [x, i]; }).sort(function (a, b) { return (_firstCh(a[0]) - _firstCh(b[0])) || (a[1] - b[1]); }).map(function (p) { return p[0]; }); }
  function _short(s, n) { s = stripNeo(String(s || "")); return s.length > n ? s.slice(0, n).replace(/\s+\S*$/, "") + "…" : s; }
  // Cảnh giới: mỗi mốc 1 dòng, tên bôi vàng, neo cỡ nhỏ trong ngoặc
  function fmtCanhGioi(s) {
    if (!s) return "";
    return String(s).split(/\s*[;\n]\s*/).map(function (x) { return x.trim(); }).filter(Boolean).map(function (seg) {
      var m = seg.match(/^([\s\S]*?)\s*(\([^()]*\))\s*$/);
      var ten = m ? m[1] : seg, neo = m ? m[2] : "";
      return '<div class="cg-line"><b class="cg-ten">' + esc(ten) + '</b>' + (neo ? ' <span class="cg-neo">' + esc(neo) + '</span>' : '') + '</div>';
    }).join("");
  }
  // Tách theo ';' (hoặc mảng) -> gạch đầu dòng (dùng cho Tính cách)
  function fmtBullets(s) {
    var parts = Array.isArray(s) ? s : String(s || "").split(/\s*;\s*/);
    parts = parts.map(function (x) { return (typeof x === "string" ? x : (x && x.text || "")).trim(); }).filter(Boolean);
    if (!parts.length) return "";
    return '<ul class="tc-list">' + parts.map(function (p) { return '<li>' + esc(stripNeo(p)) + '</li>'; }).join("") + '</ul>';
  }
  // Chia một đoạn prose dài thành các đoạn nhỏ dễ đọc; TỰ GỠ NEO hiển thị (áp dụng mọi mục, cả về sau)
  function fmtProse(text) {
    text = stripNeo(text);
    if (!text) return '<p class="pp">—</p>';
    text = String(text).trim();
    let paras;
    if (/\n/.test(text)) {
      paras = text.split(/\n+/).map(s => s.trim()).filter(Boolean);
    } else {
      const sents = text.match(/[^.!?…]+[.!?…]+(?:["'”’)\]]+)?\s*|[^.!?…]+$/g) || [text];
      paras = [];
      for (let i = 0; i < sents.length; i += 2) paras.push(sents.slice(i, i + 2).join(" ").trim());
    }
    return paras.filter(Boolean).map(p => '<p class="pp">' + esc(p) + '</p>').join("");
  }
  function gridView(opts) {
    const { title, sub, items, getCat, catKey, detail } = opts;
    const cats = [...new Set(items.map(getCat).filter(Boolean))];
    view.innerHTML = '<div class="page-head"><h1>' + title + '</h1><span class="sub">' + sub + '</span></div>' +
      '<div class="toolbar"><input id="gSearch" placeholder="Tìm tên…">' +
      '<select id="gCat"><option value="">— Mọi loại —</option>' + cats.map(c => '<option>' + esc(c) + '</option>').join("") + '</select>' +
      '<span class="count" id="gCount"></span></div><div id="gGrid" class="cards grid-3"></div>';
    function draw() {
      const q = $("#gSearch").value.trim().toLowerCase(), cat = $("#gCat").value;
      const list = items.filter(it => (!q || (it.name + " " + (it.cn || "")).toLowerCase().includes(q)) && (!cat || getCat(it) === cat));
      $("#gCount").textContent = list.length + " mục";
      $("#gGrid").innerHTML = list.length ? list.map((it, i) =>
        '<div class="card" data-i="' + items.indexOf(it) + '"><h3>' + esc(it.name) + (it.cn ? ' <span class="cn">' + esc(it.cn) + '</span>' : '') + '</h3>' +
        '<div class="meta-row">' + (getCat(it) ? '<span class="chip gold">' + esc(getCat(it)) + '</span>' : '') +
        (it.phamCap ? '<span class="chip">' + esc(it.phamCap) + '</span>' : '') +
        (it.soHuu && it.soHuu.length ? '<span class="chip">' + esc(it.soHuu[0]) + (it.soHuu.length > 1 ? " +" + (it.soHuu.length - 1) : "") + '</span>' : '') +
        '</div><div class="blurb">' + esc(it.blurb || "") + '</div></div>').join("")
        : '<div class="empty">Không có mục phù hợp.</div>';
      $("#gGrid").querySelectorAll(".card").forEach(el => el.onclick = () => detail(items[+el.dataset.i]));
    }
    $("#gSearch").oninput = draw; $("#gCat").onchange = draw; draw();
  }
  function viewPhapBao() {
    gridView({
      title: "Pháp Bảo", sub: DB.artifacts.length + " mục", items: DB.artifacts,
      getCat: it => it.categoryLabel || it.category,
      detail: it => openDrawer(it.name, (it.aliases && it.aliases.length ? it.aliases.join(", ") : it.cn),
        infoGrid([
          ["Loại", esc(it.categoryLabel || it.category || "")],
          ["Phẩm cấp", esc(stripNeo(it.phamCap || ""))],
          ["Sở hữu", it.soHuu && it.soHuu.length ? esc(it.soHuu.map(ownerName).join(", ")) : ""],
          ["Trạng thái", esc(stripNeo(it.trangThai || "")), true]
        ]) +
        '<div class="prose" style="margin-top:14px">' + fmtProse(it.detail || it.blurb) + '</div>')
    });
  }
  function viewCongPhap() {
    gridView({
      title: "Công Pháp", sub: DB.techniques.length + " mục", items: DB.techniques,
      getCat: it => it.loaiLabel || it.loai,
      detail: it => openDrawer(it.name, (it.aliases && it.aliases.length ? it.aliases.join(", ") : it.cn),
        infoGrid([
          ["Loại", esc(it.loaiLabel || it.loai || "")],
          ["Phẩm cấp", esc(stripNeo(it.phamCap || ""))],
          ["Hệ phái", esc(it.hePhai || "")],
          ["Sở hữu", it.soHuu && it.soHuu.length ? esc(it.soHuu.map(ownerName).join(", ")) : ""]
        ]) +
        '<div class="prose" style="margin-top:14px">' + fmtProse(it.detail || it.blurb) + '</div>')
    });
  }

  /* ======================= router ======================= */
  const ROUTES = { "doc": viewDoc, "cot-truyen": viewCotTruyen, "nhan-vat": viewNhanVat, "map": viewMap, "canh-gioi": viewCanhGioi, "phap-bao": viewPhapBao, "cong-phap": viewCongPhap };
  function route() {
    const id = (location.hash.replace("#", "") || (MUC[0] && MUC[0].id));
    nav.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.dataset.id === id));
    closeDrawer();
    const fn = ROUTES[id] || viewDoc;
    fn();
  }
  window.addEventListener("hashchange", route);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeDrawer();
    if ((location.hash === "#doc" || location.hash === "") && readerState.index) {
      if (e.target.tagName === "INPUT") return;
      if (e.key === "ArrowLeft") openCh(readerState.cur - 1);
      if (e.key === "ArrowRight") openCh(readerState.cur + 1);
    }
  });

  preload().then(() => { if (!location.hash) location.hash = "#" + (MUC[0] && MUC[0].id || "doc"); route(); });
})();
