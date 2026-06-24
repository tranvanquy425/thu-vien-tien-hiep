#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
r4_doi_chieu_nblm.py â€” KHÃ‚U Äá»I CHIáº¾U NotebookLM trong R4 (chá»‘t 2026-06-23, Chiáº¿n).
Má»Ÿ rá»™ng 2026-06-23: há»— trá»£ 5 loáº¡i tháº» + cháº¿ Ä‘á»™ --toan-bo rÃ  toÃ n bá»™ â‰¤ chÆ°Æ¡ng N.

VAI TRÃ’: GIá»® NGUYÃŠN quy trÃ¬nh V2 (R1 Ä‘á»c nguyÃªn tÃ¡c â†’ R2 viáº¿t tháº» â†’ R4 QA). ÄÃ¢y lÃ  Má»˜T KHÃ‚U THÃŠM
trong R4: sau khi R2 Ä‘Ã£ viáº¿t tháº», há»i NotebookLM vá» Má»ŒI tháº» trong Ä‘á»£t Ä‘á»ƒ báº¯t chá»— R1/R2 SÃ“T hoáº·c SAI â€”
mÃ  KHÃ”NG pháº£i Ä‘á»c láº¡i truyá»‡n (NotebookLM tá»•ng há»£p 1 thá»±c thá»ƒ theo toÃ n máº¡ch ráº¥t Ä‘áº§y Ä‘á»§).

NGUYÃŠN Táº®C (theo bo-nao/R4-QA.md N0 + R1-DOC.md N1.9):
- KHOANH VÃ™NG báº±ng CHÃNH CÃ‚U Há»ŽI (khÃ´ng Ã©p pháº¡m vi lá»‡nh cá»©ng). Vd Ä‘á»£t tá»›i chÆ°Æ¡ng 400:
  "Viáº¿t kinh lá»‹ch cá»§a <tÃªn> tÃ­nh tá»« Ä‘áº§u truyá»‡n Ä‘áº¿n chÆ°Æ¡ng 400."
- ÄÃ‚Y LÃ€ KHÃ‚U BÃO CÃO, KHÃ”NG Tá»° Sá»¬A THáº²NG THáºº. NotebookLM lá»‡ch tháº» = NGHI Váº¤N â†’ xuáº¥t ra bÃ¡o cÃ¡o cho R1.
  R1 Ä‘á»‘i chiáº¿u há»“ sÆ¡ research rá»“i má»›i bá»• sung (R2 viáº¿t láº¡i). NguyÃªn tÃ¡c/research lÃ  trá»ng tÃ i.
- GOM Cáº¢ HAI thÃ nh 1 báº£n Ä‘áº§y Ä‘á»§ nháº¥t, KHÃ”NG bá» bÃªn nÃ o, khÃ´ng trÃ¹ng (viá»‡c gom lÃ  cá»§a R1/R2 á»Ÿ bÆ°á»›c sau).
- NotebookLM thá»‰nh thoáº£ng sai nhÆ°ng cÆ¡ báº£n Ä‘áº§y Ä‘á»§ â†’ chá»‰ gá»£i Ã½, khÃ´ng phÃ¡n Ä‘Ãºng/sai.
- KHÃ”NG Gá»¬I Ná»˜I DUNG THáºº VÃ€O PROMPT NotebookLM: cÃ¢u há»i chá»‰ gá»“m tÃªn+alias+pháº¡m vi.
  Äá»‘i chiáº¿u thá»±c hiá»‡n á»Ÿ phÃ­a Ä‘á»c bÃ¡o cÃ¡o (R1). Giá»¯ input call < 28K token.

Äáº¦U RA: ket_qua/_doi_chieu_nblm/<bo>_<tá»«>-<Ä‘áº¿n>_<all|loai>.json
         cáº¥u trÃºc: {bo,tu,den,toanBo,notebook,luc,soThe,theTheoLoai:{loai:[...],...},loi:[...]}

CHáº Y:  python r4_doi_chieu_nblm.py --notebook <id> --bo tien-nghich --tu 351 --den 400
        [--loai all|characters|artifacts|techniques|factions|map]
        [--toan-bo]              # láº¥y Má»ŒI tháº» cÃ³ Ã­t nháº¥t 1 neo â‰¤ den (khÃ´ng lá»c tu)
        [--quyen q05]            # náº¿u biáº¿t quyá»ƒn; máº·c Ä‘á»‹nh suy tá»« web/data/<bo>/quyen/*
        [--chi-mau N]            # chá»‰ há»i N tháº» Ä‘áº§u xuyÃªn má»i loáº¡i (test)
"""
import argparse, json, os, re, sys, time
import lib_chung as L

# â”€â”€â”€â”€â”€â”€â”€â”€â”€ báº£ng loáº¡i tháº»: loai â†’ (wrap_key, arr_key) â”€â”€â”€â”€â”€â”€â”€â”€â”€
# wrap_key: key trong window.__LIBQ["bo"]["qNN"]["<wrap>"]={...}
# arr_key:  key máº£ng items bÃªn trong object Ä‘Ã³
LOAI_THE = {
    "characters": ("characters", "chars"),
    "techniques": ("techniques", "techniques"),
    "map":        ("map",        "nodes"),
    "artifacts":  ("artifacts",  "artifacts"),
    "factions":   ("factions",   "factions"),
}

# web/data/<bo>/quyen â€” nÆ¡i engine V2 ghi tháº» (khÃ¡c KETQUA cá»§a V3)
def _quyen_dir(bo):
    return os.path.join(L.DRIVE, "web", "data", bo, "quyen")

def _ten_thu_muc_bo(bo):
    return "Tien_Nghich" if bo == "tien-nghich" else bo

# â”€â”€â”€â”€â”€â”€â”€â”€â”€ Ä‘á»c 1 file .js dáº¡ng window.__LIBQ[...]["<wrap>"]={...} â”€â”€â”€â”€â”€â”€â”€â”€â”€
def _doc_entity_js(fp, wrap):
    """Parse 1 file <loai>.js cá»§a V2 â†’ object (wrap_key â†’ {arr_key:[...]}). Tráº£ {} náº¿u lá»—i.
    Thuáº­t toÃ¡n: tÃ¬m '["<wrap>"]=' rá»“i cÃ¢n ngoáº·c Ä‘á»ƒ láº¥y JSON."""
    if not os.path.exists(fp):
        return {}
    try:
        txt = open(fp, encoding="utf-8").read()
    except Exception:
        return {}
    pattern = r'\["' + re.escape(wrap) + r'"\]\s*=\s*(\{)'
    m = re.search(pattern, txt)
    if not m:
        return {}
    i = m.start(1)
    depth, j, instr, esc = 0, i, False, False
    while j < len(txt):
        c = txt[j]
        if instr:
            if esc: esc = False
            elif c == "\\": esc = True
            elif c == '"': instr = False
        else:
            if c == '"': instr = True
            elif c == "{": depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    j += 1; break
        j += 1
    try:
        return json.loads(txt[i:j])
    except Exception:
        return {}

def _doc_characters_js(fp):
    """TÆ°Æ¡ng thÃ­ch ngÆ°á»£c: parse characters.js (gá»i _doc_entity_js)."""
    return _doc_entity_js(fp, "characters")


def _neo_so(s):
    mm = re.search(r"c?(\d{3,4})", str(s or ""))
    return int(mm.group(1)) if mm else None


def _neo_max_min_cua_the(item):
    r"""QuÃ©t toÃ n bá»™ JSON cá»§a item, tÃ¬m má»i pattern c?(\d{3,4}), tráº£ (min,max).
    Tráº£ None náº¿u khÃ´ng cÃ³ neo nÃ o.
    DÃ¹ng Ä‘á»ƒ xÃ¡c Ä‘á»‹nh pháº¡m vi chÆ°Æ¡ng mÃ  tháº» liÃªn quan tá»›i."""
    raw = json.dumps(item, ensure_ascii=False)
    nums = [int(x) for x in re.findall(r"c?(\d{3,4})", raw)]
    if not nums:
        return None
    return (min(nums), max(nums))


def _the_trong_dot(c, tu, den):
    """Tháº» CÃ“ ÃT NHáº¤T 1 má»‘c kinhLich neo trong [tu,den] â†’ thuá»™c Ä‘á»£t nÃ y (Ä‘Ã¡ng Ä‘á»‘i chiáº¿u).
    DÃ nh cho characters (dÃ¹ng field kinhLich). Cháº¿ Ä‘á»™ máº·c Ä‘á»‹nh (khÃ´ng --toan-bo)."""
    kl = ((c.get("tabs") or {}).get("kinhLich")) or []
    for m in kl:
        n = _neo_so(m.get("chuong") or m.get("khoang"))
        if n is not None and tu <= n <= den:
            return True
    return False


def _the_co_neo_le_den(item, den):
    """Cháº¿ Ä‘á»™ --toan-bo: tháº» cÃ³ ÃT NHáº¤T 1 neo â‰¤ den (quÃ©t toÃ n JSON).
    DÃ¹ng cho má»i loáº¡i tháº» khi --toan-bo báº­t."""
    mm = _neo_max_min_cua_the(item)
    if mm is None:
        return False
    return mm[0] <= den  # min cá»§a má»i neo â‰¤ den â†’ tháº» Ä‘Ã£ xuáº¥t hiá»‡n trÆ°á»›c/táº¡i den


def _tom_tat_kinhlich(c):
    """RÃºt gá»n kinh lá»‹ch hiá»‡n cÃ³ cá»§a tháº» characters (chÆ°Æ¡ng + tiÃªu Ä‘á») Ä‘á»ƒ Ä‘á»‘i chiáº¿u.
    KHÃ”NG gá»­i vÃ o prompt NotebookLM â€” chá»‰ dÃ¹ng khi Ä‘á»c bÃ¡o cÃ¡o."""
    kl = ((c.get("tabs") or {}).get("kinhLich")) or []
    out = []
    for m in kl:
        neo = m.get("chuong") or m.get("khoang") or ""
        td = m.get("tieuDe") or ("(bridge)" if m.get("bridge") else "")
        out.append(f"{neo} {td}".strip())
    return out


def _tom_tat_the(item, loai):
    """RÃºt gá»n tháº» hiá»‡n cÃ³ Ä‘á»ƒ Ä‘Æ°a vÃ o bÃ¡o cÃ¡o Ä‘á»‘i chiáº¿u (KHÃ”NG gá»­i vÃ o prompt NotebookLM).
    Má»—i loáº¡i láº¥y field phÃ¹ há»£p. Input nhá», chá»‰ dÃ¹ng phÃ­a R1 Ä‘á»c bÃ¡o cÃ¡o."""
    if loai == "characters":
        return _tom_tat_kinhlich(item)
    # Vá»›i má»i loáº¡i khÃ¡c: name + mÃ´ táº£ ngáº¯n + danh sÃ¡ch neo tÃ¬m Ä‘Æ°á»£c
    raw = json.dumps(item, ensure_ascii=False)
    neos = sorted(set(int(x) for x in re.findall(r"c?(\d{3,4})", raw)))
    desc = item.get("desc") or item.get("moTa") or item.get("description") or ""
    if isinstance(desc, list):
        desc = " ".join(str(x) for x in desc[:3])
    return {
        "name": item.get("name") or item.get("id") or "",
        "moTaNgan": str(desc)[:200],
        "neoTimThay": neos,
    }


def _prompt_cho_the(loai, ten_hoi, den):
    """Sinh cÃ¢u há»i gá»­i NotebookLM cho tá»«ng loáº¡i tháº», khoanh vÃ¹ng tá»›i chÆ°Æ¡ng den.
    CÃ¢u há»i chá»‰ gá»“m tÃªn+alias+pháº¡m vi â€” KHÃ”NG nhá»“i ná»™i dung tháº» vÃ o prompt (giá»¯ input < 28K)."""
    if loai == "characters":
        return (
            f"Viáº¿t kinh lá»‹ch (cÃ¡c sá»± kiá»‡n quan trá»ng theo trÃ¬nh tá»±) cá»§a nhÃ¢n váº­t {ten_hoi} "
            f"tÃ­nh tá»« Ä‘áº§u truyá»‡n Ä‘áº¿n háº¿t chÆ°Æ¡ng {den}. Má»—i sá»± kiá»‡n ghi rÃµ xáº£y ra á»Ÿ khoáº£ng chÆ°Æ¡ng nÃ o. "
            f"Chá»‰ liá»‡t kÃª sá»± kiá»‡n CÃ“ THáº¬T trong truyá»‡n tÃ­nh tá»›i chÆ°Æ¡ng {den}, khÃ´ng suy diá»…n."
        )
    elif loai == "artifacts":
        return (
            f"Tá»•ng há»£p thÃ´ng tin vá» phÃ¡p báº£o/váº­t pháº©m {ten_hoi} tÃ­nh Ä‘áº¿n háº¿t chÆ°Æ¡ng {den}: "
            f"nguá»“n gá»‘c, cÃ´ng dá»¥ng vÃ  uy lá»±c, ai sá»Ÿ há»¯u qua cÃ¡c thá»i ká»³, biáº¿n hoÃ¡ hoáº·c thÄƒng cáº¥p náº¿u cÃ³. "
            f"Chá»‰ nÃªu thÃ´ng tin CÃ“ THáº¬T trong truyá»‡n tÃ­nh tá»›i chÆ°Æ¡ng {den}, khÃ´ng suy diá»…n."
        )
    elif loai == "techniques":
        return (
            f"Tá»•ng há»£p thÃ´ng tin vá» cÃ´ng phÃ¡p/ká»¹ nÄƒng {ten_hoi} tÃ­nh Ä‘áº¿n háº¿t chÆ°Æ¡ng {den}: "
            f"nguá»“n gá»‘c, cÃ´ng dá»¥ng vÃ  uy lá»±c, ai tu luyá»‡n, cÃ¡c táº§ng/cáº£nh giá»›i cá»§a cÃ´ng phÃ¡p, "
            f"biáº¿n hoÃ¡ náº¿u cÃ³. "
            f"Chá»‰ nÃªu thÃ´ng tin CÃ“ THáº¬T trong truyá»‡n tÃ­nh tá»›i chÆ°Æ¡ng {den}, khÃ´ng suy diá»…n."
        )
    elif loai == "factions":
        return (
            f"Tá»•ng há»£p thÃ´ng tin vá» tháº¿ lá»±c {ten_hoi} tÃ­nh Ä‘áº¿n háº¿t chÆ°Æ¡ng {den}: "
            f"lai lá»‹ch vÃ  vá»‹ trÃ­, nhÃ¢n váº­t chá»§ chá»‘t, sá»± kiá»‡n lá»›n liÃªn quan, hÆ°ng suy. "
            f"Chá»‰ nÃªu thÃ´ng tin CÃ“ THáº¬T trong truyá»‡n tÃ­nh tá»›i chÆ°Æ¡ng {den}, khÃ´ng suy diá»…n."
        )
    elif loai == "map":
        return (
            f"Tá»•ng há»£p thÃ´ng tin vá» Ä‘á»‹a Ä‘iá»ƒm {ten_hoi} tÃ­nh Ä‘áº¿n háº¿t chÆ°Æ¡ng {den}: "
            f"vá»‹ trÃ­, Ä‘áº·c Ä‘iá»ƒm ná»•i báº­t, sá»± kiá»‡n lá»›n xáº£y ra táº¡i Ä‘Ã³, tháº¿ lá»±c chiáº¿m giá»¯. "
            f"Chá»‰ nÃªu thÃ´ng tin CÃ“ THáº¬T trong truyá»‡n tÃ­nh tá»›i chÆ°Æ¡ng {den}, khÃ´ng suy diá»…n."
        )
    else:
        return (
            f"Tá»•ng há»£p thÃ´ng tin vá» {ten_hoi} tÃ­nh Ä‘áº¿n háº¿t chÆ°Æ¡ng {den}. "
            f"Chá»‰ nÃªu thÃ´ng tin CÃ“ THáº¬T trong truyá»‡n, khÃ´ng suy diá»…n."
        )


def doi_chieu_mot_the(notebook, item, loai, den, timeout=240):
    """Há»i NotebookLM vá» 1 tháº» (khoanh vÃ¹ng tá»›i chÆ°Æ¡ng den), tráº£ vá» (traLoiNblm, err).
    KHOANH VÃ™NG Báº°NG CHÃNH CÃ‚U Há»ŽI â€” khÃ´ng Ã©p pháº¡m vi kiá»ƒu lá»‡nh cá»©ng.
    KHÃ”NG gá»­i ná»™i dung tháº» vÃ o prompt (giá»¯ input < 28K token)."""
    ten = item.get("name") or item.get("id") or ""
    alias = ", ".join(item.get("aliases") or [])
    ten_hoi = ten + (f" (cÃ²n gá»i: {alias})" if alias else "")
    prompt = _prompt_cho_the(loai, ten_hoi, den)
    return L.hoi_notebook(notebook, prompt, timeout=timeout, moi=True)


def _loc_the_loai(items, loai, tu, den, toan_bo, chi_id=None):
    """Lá»c tháº» trong máº£ng items theo cháº¿ Ä‘á»™:
    - chi_id (set id): náº¿u cÃ³ â†’ CHá»ˆ láº¥y tháº» cÃ³ id náº±m trong táº­p nÃ y (Æ°u tiÃªn cao nháº¥t, bá» qua tu/den/toan_bo).
    - toan_bo=True: láº¥y má»i tháº» cÃ³ ÃT NHáº¤T 1 neo â‰¤ den (quÃ©t toÃ n JSON).
    - toan_bo=False: vá»›i characters dÃ¹ng _the_trong_dot [tu,den]; loáº¡i khÃ¡c quÃ©t neo trong [tu,den]."""
    result = []
    for item in items:
        if not isinstance(item, dict):
            continue
        if chi_id:
            if item.get("id") in chi_id:
                result.append(item)
            continue
        if toan_bo:
            if _the_co_neo_le_den(item, den):
                result.append(item)
        else:
            if loai == "characters":
                if _the_trong_dot(item, tu, den):
                    result.append(item)
            else:
                # loáº¡i khÃ¡c: tÃ¬m neo trong khoáº£ng [tu,den] trong toÃ n JSON
                raw = json.dumps(item, ensure_ascii=False)
                nums = [int(x) for x in re.findall(r"c?(\d{3,4})", raw)]
                if any(tu <= n <= den for n in nums):
                    result.append(item)
    return result


def chay(notebook, bo, tu, den, quyen=None, loai_chon="all", toan_bo=False,
         chi_mau=0, bo_qua=0, chi_id=None, timeout=240, log=print):
    qdir = _quyen_dir(bo)
    # cÃ¡c quyá»ƒn cáº§n quÃ©t
    if quyen:
        quyens = [quyen]
    else:
        quyens = sorted([d for d in (os.listdir(qdir) if os.path.isdir(qdir) else [])
                         if re.match(r"^q\d+$", d)])

    # danh sÃ¡ch loáº¡i cáº§n quÃ©t
    if loai_chon == "all":
        loai_list = list(LOAI_THE.keys())
    else:
        if loai_chon not in LOAI_THE:
            log(f"[R4Â·NotebookLM] Lá»–I: --loai '{loai_chon}' khÃ´ng há»£p lá»‡. "
                f"Chá»n: all, {', '.join(LOAI_THE.keys())}")
            return None
        loai_list = [loai_chon]

    # gom tháº» theo loáº¡i
    the_theo_loai = {l: [] for l in loai_list}  # loai -> [(quyen, item)]
    for l in loai_list:
        wrap_key, arr_key = LOAI_THE[l]
        for q in quyens:
            fp = os.path.join(qdir, q, f"{l}.js")
            obj = _doc_entity_js(fp, wrap_key)
            items = obj.get(arr_key) or []
            loc = _loc_the_loai(items, l, tu, den, toan_bo, chi_id=chi_id)
            for item in loc:
                the_theo_loai[l].append((q, item))

    tong_the = sum(len(v) for v in the_theo_loai.values())

    # --bo-qua + --chi-mau: cat lo tren danh sach phang theo thu tu loai
    if (chi_mau and chi_mau > 0) or (bo_qua and bo_qua > 0):
        phang = []
        for l in loai_list:
            for it in the_theo_loai[l]:
                phang.append((l, it))
        if chi_mau and chi_mau > 0:
            lat = phang[bo_qua: bo_qua + chi_mau]
        else:
            lat = phang[bo_qua:]
        the_theo_loai = {l: [] for l in loai_list}
        for (l, it) in lat:
            the_theo_loai[l].append(it)
        tong_the = sum(len(v) for v in the_theo_loai.values())

    che_do = "toan-boâ‰¤" + str(den) if toan_bo else f"dot-{tu}-{den}"
    log(f"[R4Â·NotebookLM] Ä‘á»‘i chiáº¿u {tong_the} tháº» ({che_do}, loáº¡i: {loai_chon}, "
        f"quyá»ƒn: {', '.join(quyens) or 'â€”'})")
    for l in loai_list:
        log(f"  {l}: {len(the_theo_loai[l])} tháº»")

    bao_cao = {
        "bo": bo, "tu": tu, "den": den, "toanBo": toan_bo,
        "loai": loai_chon, "notebook": notebook,
        "luc": time.strftime("%Y-%m-%d %H:%M:%S"),
        "soThe": tong_the,
        "theTheoLoai": {l: [] for l in loai_list},
        "loi": [],
    }

    so_da_hoi = 0
    dung = False
    for l in loai_list:
        if dung:
            break
        ds = the_theo_loai[l]
        for q, item in ds:
            so_da_hoi += 1
            ten = item.get("name") or item.get("id")
            log(f"  ({so_da_hoi}/{tong_the}) [{l}] há»i NotebookLM: {ten}â€¦")
            ans, err = doi_chieu_mot_the(notebook, item, l, den, timeout=timeout)
            if err == "AUTH_HET_HAN":
                bao_cao["loi"].append("AUTH_HET_HAN â€” cáº§n Ä‘Äƒng nháº­p láº¡i NotebookLM, dá»«ng Ä‘á»‘i chiáº¿u.")
                log("  [DO] NotebookLM háº¿t phiÃªn Ä‘Äƒng nháº­p â†’ dá»«ng.")
                dung = True
                break
            entry = {
                "loai": l,
                "quyen": q,
                "id": item.get("id"),
                "ten": ten,
                "aliases": item.get("aliases") or [],
                "theHienCo": _tom_tat_the(item, l),  # tÃ³m táº¯t tháº» R1/R2 Ä‘Ã£ viáº¿t (KHÃ”NG gá»­i vÃ o prompt)
                "nblm": ans or "",
            }
            if ans is None:
                entry["loi"] = err or "khÃ´ng há»i Ä‘Æ°á»£c"
                log(f"    [W] lá»—i: {err}")
            bao_cao["theTheoLoai"][l].append(entry)
            time.sleep(1)  # nghá»‰ nháº¹ giá»¯a cÃ¡c cÃ¢u há»i

    tag_loai = "all" if loai_chon == "all" else loai_chon
    out_dir = os.path.join(L.KETQUA, "_doi_chieu_nblm")
    os.makedirs(out_dir, exist_ok=True)
    out_fp = os.path.join(out_dir, f"{bo}_{tu}-{den}_{tag_loai}.json")
    L.luu_json(out_fp, bao_cao)

    so_loi = len(bao_cao["loi"]) + sum(1 for l in loai_list
                                        for e in bao_cao["theTheoLoai"][l] if e.get("loi"))
    log(f"[R4Â·NotebookLM] XONG â†’ {out_fp} ({so_da_hoi} tháº», {so_loi} lá»—i)")
    log("  â†’ R1 Ä‘á»c bÃ¡o cÃ¡o: tháº» nÃ o theHienCo THIáº¾U so vá»›i nblm thÃ¬ Ä‘á»‘i chiáº¿u research bá»• sung.")
    return out_fp


def main():
    ap = argparse.ArgumentParser(
        description="Äá»‘i chiáº¿u NotebookLM vá»›i tháº» R2 Ä‘Ã£ viáº¿t (5 loáº¡i tháº»).")
    ap.add_argument("--notebook", required=True, help="ID sá»• NotebookLM cá»§a bá»™")
    ap.add_argument("--bo", default="tien-nghich")
    ap.add_argument("--tu", type=int, required=True, help="ChÆ°Æ¡ng báº¯t Ä‘áº§u Ä‘á»£t")
    ap.add_argument("--den", type=int, required=True, help="ChÆ°Æ¡ng káº¿t thÃºc Ä‘á»£t")
    ap.add_argument("--loai", default="all",
                    help="all (máº·c Ä‘á»‹nh) hoáº·c 1 loáº¡i: characters|artifacts|techniques|factions|map")
    ap.add_argument("--toan-bo", action="store_true",
                    help="Láº¥y Má»ŒI tháº» cÃ³ Ã­t nháº¥t 1 neo â‰¤ den (rÃ  toÃ n bá»™ â‰¤507, khÃ´ng lá»c tu)")
    ap.add_argument("--quyen", help="vd q05 (máº·c Ä‘á»‹nh quÃ©t má»i quyá»ƒn)")
    ap.add_argument("--chi-mau", type=int, default=0,
                    help="Chá»‰ há»i N tháº» Ä‘áº§u xuyÃªn má»i loáº¡i (test)")
    ap.add_argument("--bo-qua", type=int, default=0, help="bo qua N the dau (chia lo)")
    ap.add_argument("--chi-id", default="",
                    help="CHá»ˆ há»i cÃ¡c tháº» cÃ³ id trong danh sÃ¡ch nÃ y (phÃ¢n cÃ¡ch pháº©y). Æ¯u tiÃªn cao nháº¥t, bá» qua tu/den/toan-bo.")
    ap.add_argument("--timeout", type=int, default=240)
    args = ap.parse_args()
    chi_id_set = set(x.strip() for x in args.chi_id.split(",") if x.strip()) or None
    chay(args.notebook, args.bo, args.tu, args.den,
         quyen=args.quyen, loai_chon=args.loai, toan_bo=args.toan_bo,
         chi_mau=args.chi_mau, bo_qua=args.bo_qua, chi_id=chi_id_set, timeout=args.timeout)


if __name__ == "__main__":
    main()
