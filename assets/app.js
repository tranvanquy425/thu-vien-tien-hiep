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
    const D = (window.LIB_DATA || {})[slug];
    if (D && D[demoKey]) return D[demoKey];
    try { return await loadJson(bo.dataBase + "/" + name + ".json"); }
    catch (e) { usedDemo = true; return DEMO[demoKey] || null; }
  }
  async function loadReaderIndex() {
    const D = (window.LIB_DATA || {})[slug];
    if (D && D.reader && D.reader.index) return D.reader.index;
    try { return await loadJson(bo.readerBase + "/index.json"); }
    catch (e) { usedDemo = true; return (DEMO.reader && DEMO.reader.index) || null; }
  }
  async function loadChapter(so) {
    const D = (window.LIB_DATA || {})[slug];
    if (D && D.reader && D.reader.chapters && D.reader.chapters[so]) return D.reader.chapters[so];
    try { return await loadJson(bo.readerBase + "/chapters/c" + pad4(so) + ".json"); }
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
    DB.artifacts = (arts && arts.artifacts) || [];
    DB.techniques = (techs && techs.techniques) || [];
    DB.mapNodes = (map && map.nodes) || [];
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
  let readerState = { index: null, cur: -1 };
  let pendingChapter = null;
  async function viewDoc() {
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
      $("#ctVolInfo").innerHTML = '<div class="card" style="cursor:default;margin-bottom:14px"><h3>' + esc(v.label) + " — " + esc(v.title || "") +
        '</h3><div class="blurb">' + esc(v.summary || "") + '</div>' +
        (v.milestones && v.milestones.length ? '<div class="meta-row">' + v.milestones.map(m => '<span class="chip gold">' + esc(m) + '</span>').join("") + '</div>' : "") + '</div>';
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
    const theLucs = [...new Set(chars.map(c => c.theLuc).filter(Boolean))];
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
        return (!q || hay.includes(q)) && (!tl || c.theLuc === tl);
      });
      $("#nvCount").textContent = items.length + " kết quả";
      $("#nvGrid").innerHTML = items.length ? items.map(c =>
        '<div class="card" data-id="' + c.id + '"><h3>' + esc(c.name) + (c.cn ? ' <span class="cn">' + esc(c.cn) + '</span>' : '') + '</h3>' +
        '<div class="meta-row">' +
          (c.theLuc ? '<span class="chip">' + esc(c.theLuc) + '</span>' : '') +
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
        ({ major: "Trọng đại", normal: "Thường", minor: "Nhỏ" }[lv] || "Thường") + '</span>' +
        (e.chuong ? '<a class="neo" href="#doc" data-goch="' + String(e.chuong).replace(/[^0-9]/g, "") + '">' + esc(e.chuong) + '</a>' : '') +
        '</div><div class="ev-text">' + esc(e.text || "") + '</div></div>';
    }).join("");
    const RTAG = { "cha-me": "Cha/Mẹ", "ban-be": "Bạn bè", "dong-minh": "Đồng minh", "doi-thu": "Đối thủ", "ho-hang": "Họ hàng", "an-nhan": "Ân nhân", "su-mon": "Sư môn", "the-thiep": "Thê thiếp", "khac": "Khác" };
    const nm = (t.nhanMach || []).map(n => '<div class="ev"><div class="ev-head"><b style="color:#e6c878">' + esc(n.ten) + '</b>' +
      (n.tag ? '<span class="rtag ' + esc(n.tag) + '">' + esc(RTAG[n.tag] || n.tag) + '</span>' : '') +
      (n.quanHe ? '<span class="chip">' + esc(n.quanHe) + '</span>' : '') + '</div><div class="ev-text">' + esc(n.ghiChu || "") + '</div></div>').join("");
    const diem = (t.diem || []).map(d => '<div class="ev minor"><div class="ev-text">' + esc(d.text || "") +
      (d.chuong ? ' <a class="neo" href="#doc" data-goch="' + String(d.chuong).replace(/[^0-9]/g, "") + '">' + esc(d.chuong) + '</a>' : '') + '</div></div>').join("");
    const ib = (lbl, val, full) => val ? '<div class="iblock' + (full ? ' full' : '') + '"><div class="lbl">' + lbl + '</div><div class="val">' + val + '</div></div>' : '';
    const hanBd = [c.cn ? esc(c.cn) : '', (c.aliases && c.aliases.length) ? esc(c.aliases.join(", ")) : ''].filter(Boolean).join(" · ");
    const tieuSuPane =
      '<div class="info-grid">' +
        ib("Họ tên", esc(c.name)) +
        ib("Hán tự / Bí danh", hanBd || "—") +
        ib("Vai trò", esc(c.vaiTro || (c.blurb ? "" : ""))) +
        ib("Phe / Môn phái", esc(c.theLuc || "")) +
        ib("Cảnh giới", esc(c.canhGioiCaoNhat || ""), true) +
        ib("Tính cách", esc(c.tinhCach || ""), true) +
      '</div>' +
      (t.tieuSu ? '<div class="ts-sum">' + esc(t.tieuSu) + '</div>' : '') +
      (diem ? '<div style="margin-top:14px"><div class="chip gold">Nét nổi bật</div><div class="timeline" style="margin-top:10px">' + diem + '</div></div>' : '');
    const tuViMoc = (t.tuViMoc || []).map(m => '<div class="ev ' + (m.importance || "major") + '"><div class="ev-head">' +
      (m.canhGioi ? '<span class="lvl major">' + esc(m.canhGioi) + '</span>' : '') +
      (m.chuong ? '<a class="neo" href="#doc" data-goch="' + String(m.chuong).replace(/[^0-9]/g, "") + '">' + esc(m.chuong) + '</a>' : '') +
      '</div>' + (m.text ? '<div class="ev-text">' + esc(m.text) + '</div>' : '') + '</div>').join("");
    const tuViPane = tuViMoc ? '<div class="timeline">' + tuViMoc + '</div>' : '<div class="prose">' + esc(t.tuVi || "—") + '</div>';
    const td = t.tuiDo || {};
    const bag = [["Pháp bảo", td.phapBao], ["Công pháp", td.congPhap], ["Đan dược", td.danDuoc], ["Linh thú", td.linhThu], ["Khác", td.khac]]
      .filter(([, a]) => a && a.length).map(([lbl, a]) => '<div style="margin-bottom:10px"><div class="chip gold">' + lbl + '</div><div class="prose">' + a.map(esc).join(" · ") + '</div></div>').join("");
    const tabs = [
      ["Tiểu sử", tieuSuPane],
      ["Kinh lịch", kl ? '<div class="timeline">' + kl + '</div>' : '<div class="empty">Chưa có sự kiện.</div>'],
      ["Tu vi", tuViPane],
      ["Nhân mạch", nm ? '<div class="timeline">' + nm + '</div>' : '<div class="empty">—</div>'],
      ["Túi đồ", bag || '<div class="empty">Trống.</div>']
    ];
    const head = '<div class="kv">' +
      (c.theLuc ? '<span class="chip">' + esc(c.theLuc) + '</span>' : '') +
      (c.canhGioiCaoNhat ? '<span class="chip gold">' + esc(c.canhGioiCaoNhat) + '</span>' : '') +
      '<span class="chip">' + esc(trangThaiLabel[c.trangThai] || "") + '</span>' +
      (c.aliases && c.aliases.length ? '<span class="chip">Biệt danh: ' + c.aliases.map(esc).join(", ") + '</span>' : '') + '</div>' +
      '<div class="prose" style="margin-bottom:10px">' + esc(c.blurb || "") + '</div>';
    const tabsBar = '<div class="tabs">' + tabs.map((t2, i) => '<button data-t="' + i + '"' + (i === 0 ? ' class="active"' : '') + '>' + t2[0] + '</button>').join("") + '</div>';
    const panes = tabs.map((t2, i) => '<div class="tab-pane' + (i === 0 ? ' active' : '') + '" data-p="' + i + '">' + t2[1] + '</div>').join("");
    openDrawer(c.name, c.cn, head + tabsBar + panes + (c.nguon && c.nguon.length ? '<div style="margin-top:14px"><div class="chip">Neo nguồn</div>' + neoChips(c.nguon) + '</div>' : ''));
    $("#dBody").querySelectorAll(".tabs button").forEach(b => b.onclick = () => {
      $("#dBody").querySelectorAll(".tabs button").forEach(x => x.classList.remove("active"));
      $("#dBody").querySelectorAll(".tab-pane").forEach(x => x.classList.remove("active"));
      b.classList.add("active"); $("#dBody").querySelector('.tab-pane[data-p="' + b.dataset.t + '"]').classList.add("active");
    });
  }

  /* --- 4. Map --- */
  const CAP_LABEL = { "gioi-dien": "Giới diện", "tinh-cau": "Tinh cầu", "vuc": "Vực", "gioi-nho": "Giới nhỏ", "quoc-gia": "Quốc gia", "chau": "Châu", "thanh": "Thành", "khac": "Khác" };
  function viewMap() {
    const nodes = DB.mapNodes;
    view.innerHTML = '<div class="page-head"><h1>Map</h1><span class="sub">Khu vực từ lớn tới nhỏ</span></div>' +
      (nodes.length ? '<div class="tree" id="mapTree"></div>' : '<div class="empty">Chưa có dữ liệu map.</div>');
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
        '<div class="prose">' + esc(n.detail || n.blurb || "—") + '</div>' +
        (n.theLucLienQuan && n.theLucLienQuan.length ? '<div style="margin-top:12px"><div class="chip">Thế lực liên quan</div><div class="prose">' + n.theLucLienQuan.map(esc).join(" · ") + '</div></div>' : '') +
        neoChips(n.nguon));
    });
  }

  /* --- 5. Cảnh Giới --- */
  function viewCanhGioi() {
    const realms = DB.realms, heThong = DB.heThong || [], doiChieu = DB.doiChieu || [];
    if (!realms.length) { view.innerHTML = '<div class="page-head"><h1>Cảnh Giới</h1></div><div class="empty">Chưa có dữ liệu cảnh giới.</div>'; return; }
    const heCards = heThong.length ? '<div class="cards grid-2" style="margin-bottom:14px">' + heThong.map((h, i) =>
      '<div class="card" data-he="' + i + '">' + (h.chinh ? '<span class="chip gold">Hệ chính</span> ' : '') +
      '<h3 style="display:inline">' + esc(h.ten) + '</h3>' +
      '<div class="blurb">' + esc(h.moTa || "") + '</div>' +
      '<div style="margin-top:8px;color:var(--gold);font-size:12.5px">Xem chi tiết ›</div></div>').join("") + '</div>' : "";
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
    const dcBar = doiChieu.length ?
      '<button class="btn gold" id="dcBar" style="width:100%;text-align:left;display:flex;align-items:center;gap:10px;padding:13px 16px;margin-bottom:18px;font-size:14.5px">' +
      '<span style="font-size:18px">▤</span> Bảng đối chiếu hệ thống · Tu Đạo — Tu Tiên — Cổ Tộc <span style="margin-left:auto;color:var(--gold)">bấm để xem ›</span></button>' : "";
    view.innerHTML =
      '<div class="page-head"><h1>Cảnh Giới</h1><span class="sub">Hệ thống tu luyện — Tu Đạo (chính) · đối chiếu Tu Tiên & Cổ Tộc</span></div>' +
      (DB.realmsGhiChu ? '<div class="prose" style="font-size:13.5px;color:var(--muted);margin-bottom:14px">' + esc(DB.realmsGhiChu) + '</div>' : "") +
      heCards + dcBar +
      '<h2 class="section-title">Lộ trình Tu Đạo</h2><div class="ladder" id="ladder"></div>';
    if (doiChieu.length) $("#dcBar").onclick = () => openDrawer("Bảng đối chiếu hệ thống", "Tu Đạo · Tu Tiên · Cổ Tộc", tableInner);
    view.querySelectorAll('.card[data-he]').forEach(el => el.onclick = () => {
      const h = heThong[+el.dataset.he];
      let body = '<div class="prose">' + esc(h.detail || h.moTa || "") + '</div>';
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
        '<div class="prose">' + esc(r.detail || r.blurb || "—") + '</div>' +
        (r.dacThu ? '<div style="margin-top:12px"><div class="chip gold">Đặc thù</div><div class="prose">' + esc(r.dacThu) + '</div></div>' : '') +
        ((tdg.tuTien || tdg.coToc) ? '<div style="margin-top:12px"><div class="chip gold">Tương đương</div><div class="prose">' +
          (tdg.tuTien ? 'Tu Tiên: ' + esc(tdg.tuTien) + '<br>' : '') + (tdg.coToc ? 'Cổ Tộc: ' + esc(tdg.coToc) : '') + '</div></div>' : '') +
        neoChips(r.nguon));
    });
  }

  /* --- 6 & 7. Pháp Bảo / Công Pháp --- */
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
      detail: it => openDrawer(it.name, it.cn, '<div class="kv">' +
        (it.categoryLabel ? '<span class="chip gold">' + esc(it.categoryLabel) + '</span>' : '') +
        (it.phamCap ? '<span class="chip">' + esc(it.phamCap) + '</span>' : '') +
        (it.trangThai ? '<span class="chip">' + esc(it.trangThai) + '</span>' : '') + '</div>' +
        (it.soHuu && it.soHuu.length ? '<div class="prose"><b>Sở hữu:</b> ' + it.soHuu.map(esc).join(", ") + '</div>' : '') +
        '<div class="prose">' + esc(it.detail || it.blurb || "—") + '</div>' + neoChips(it.nguon))
    });
  }
  function viewCongPhap() {
    gridView({
      title: "Công Pháp", sub: DB.techniques.length + " mục", items: DB.techniques,
      getCat: it => it.loaiLabel || it.loai,
      detail: it => openDrawer(it.name, it.cn, '<div class="kv">' +
        (it.loaiLabel ? '<span class="chip gold">' + esc(it.loaiLabel) + '</span>' : '') +
        (it.phamCap ? '<span class="chip">' + esc(it.phamCap) + '</span>' : '') +
        (it.hePhai ? '<span class="chip">' + esc(it.hePhai) + '</span>' : '') + '</div>' +
        (it.soHuu && it.soHuu.length ? '<div class="prose"><b>Sở hữu:</b> ' + it.soHuu.map(esc).join(", ") + '</div>' : '') +
        '<div class="prose">' + esc(it.detail || it.blurb || "—") + '</div>' + neoChips(it.nguon))
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