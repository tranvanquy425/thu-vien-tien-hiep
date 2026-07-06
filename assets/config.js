/* sync-bump 2026-06-11T16:30Z — ảnh local assets/vl.jpg + hl.jpg */
/* Cấu hình site Thư Viện Tiên Hiệp.
   - readerBase: URL công khai R2 chứa dữ liệu chương (index.json + chapters/).
     Khi chưa có/CORS chưa bật → web tự dùng DỮ LIỆU MẪU để xem bố cục.
   - dataBase: nơi chứa JSON thực thể (characters/realms/...). Khi deploy,
     đồng bộ <bộ>/data/*.json vào đây. Local mở bằng file:// sẽ fallback demo.
*/
window.LIB_CONFIG = {
  tenSite: "Thư Viện Tiên Hiệp",
  boList: [
    {
      slug: "tien-nghich", ten: "Tiên Nghịch", cn: "仙逆", tacGia: "Nhĩ Căn",
      anh: "assets/Vuong-lam.jpg",
      blurb: "Vương Lâm — phàm nhân tư chất tầm thường, nghịch thiên cải mệnh, bước trên con đường tu tiên đầy máu và cô độc.",
      readerBase: "https://pub-658fed66a0f7435ea298fac5be78815b.r2.dev/tien-nghich/reader",
      dataBase: "data/tien-nghich",
      // (2026-07-06 V2-Steward) file GỘP LỚN (data.js/cotTruyen.js) nay ở R2 (gỡ khỏi git, hết trần 5MB). bo.html nạp từ đây, fallback local.
      dataR2: "https://pub-658fed66a0f7435ea298fac5be78815b.r2.dev/tien-nghich/data",
      // (2026-07-03 V2-Steward 1moc-ghim) chỉ NHÂN VẬT CHÍNH thật mới được badge "★ Nhân vật chính" + ghim đầu danh sách.
      nhanVatChinh: ["vuong-lam"]
    },
    {
      slug: "pham-nhan-tu-tien", ten: "Phàm Nhân Tu Tiên", cn: "凡人修仙传", tacGia: "Vong Ngữ",
      anh: "assets/Han-lap.jpg",
      blurb: "Hàn Lập — kẻ phàm nhân cẩn trọng, dựa vào Chưởng Thiên Bình thần bí mà từng bước vươn lên giữa muôn vàn hiểm cảnh tu tiên giới.",
      readerBase: "https://pub-658fed66a0f7435ea298fac5be78815b.r2.dev/pham-nhan-tu-tien/reader",
      dataBase: "data/pham-nhan-tu-tien",
      dataR2: "https://pub-658fed66a0f7435ea298fac5be78815b.r2.dev/pham-nhan-tu-tien/data",
      // Bộ có NHIỀU PHẦN: mỗi phần 1 thư mục reader riêng (base nối sau readerBase). 1 phần → bỏ qua, reader chạy như cũ.
      phanList: [
        { phan: 1, ten: "Phần 1 · Vong Ngữ", base: "" },
        { phan: 2, ten: "Phần 2 · Tiên Giới Thiên", base: "/phan2" }
      ],
      // (2026-07-03 V2-Steward 1moc-ghim) chỉ NHÂN VẬT CHÍNH thật mới được badge "★ Nhân vật chính" + ghim đầu danh sách.
      nhanVatChinh: ["han-lap"]
    },
    {
      slug: "the-gioi-hoan-my", ten: "Thế Giới Hoàn Mỹ", cn: "完美世界", tacGia: "Thần Đông",
      anh: "assets/Thach-hao.jpg",
      blurb: "Thạch Hạo — từ Thạch Thôn trong Đại Hoang vùng vẫy lớn lên, mang theo nghịch thiên cốt cách, bước qua vô số tinh không và thời đại để truy tầm con đường chân tiên bất diệt.",
      readerBase: "https://pub-658fed66a0f7435ea298fac5be78815b.r2.dev/the-gioi-hoan-my/reader",
      dataBase: "data/the-gioi-hoan-my",
      dataR2: "https://pub-658fed66a0f7435ea298fac5be78815b.r2.dev/the-gioi-hoan-my/data",
      // (2026-07-03 V2-Steward 1moc-ghim) chỉ NHÂN VẬT CHÍNH thật mới được badge "★ Nhân vật chính" + ghim đầu danh sách.
      nhanVatChinh: ["thach-hao"]
    }
  ],
  // ===== 4 khối chrome (đầu/cuối trang + bong bóng) — ĐIỀN LINK THẬT =====
  chrome: {
    sponsor: {
      han: "洞",
      tag: "Nhà tài trợ",
      name: "Động Tu Tiên",
      appeal: "Kính mong các vị đạo hữu ủng hộ một đơn hàng.",
      desc: "Chuyên mô hình, standee và pháp bảo tiên hiệp — <b>Freeship toàn quốc từ 50k</b>.",
      cta: "Vào động phủ",
      url: "http://dongtutien.com"
    },
    donate: {
      lead: "Nếu thư viện giúp ích, mời đạo hữu trợ duyên để tại hạ duy trì và cập nhật.",
      qrText: "Quét QR VietQR (VPBank)",
      qrImg: "https://img.vietqr.io/image/VPB-0968099273-compact2.png?accountName=LE%20VAN%20CHIEN&addInfo=Tro%20duyen%20Thu%20Vien%20Tien%20Hiep",
      info: [
        { k: "Ngân hàng", v: "VPBank" },
        { k: "Chủ tài khoản", v: "Lê Văn Chiến" },
        { k: "Số tài khoản", v: "0968099273" },
        { k: "Momo", v: "0968099273" }
      ]
    },
    feedback: {
      lead: "Phát hiện chỗ nào chưa chuẩn so với nguyên tác? Gửi cho tại hạ để sửa.",
      endpoint: ""        // ⬅ DÁN URL Web App "Góp Ý" sau khi deploy (xem _He_Thong/gop-y/). Rỗng = hiện lời cảm ơn (chưa lưu).
    },
    // (2026-07-03 V2-Steward hoi-ai-2tang) Hỏi AI công khai 2 tầng: máy bật → NotebookLM (0đ), máy tắt → vilao+wiki.
    hoiAI: {
      endpoint: "https://script.google.com/macros/s/AKfycbzbHwJ4H07Fme0KDvOprS1WI58Ce8ErmbmW6ZtPUuDkgmoWH6V9Z6CVnn5NH97oxxTJUg/exec"        // ⬅ DÁN URL Web App "Hỏi AI" sau khi deploy (xem _He_Thong/hoi-ai-web/). Rỗng = ẨN widget.
    },
    social: {
      zalo: "http://zalo.me/0968099273",
      tiktok: "http://tiktok.com/@ratnhieumohinh"
    }
  },

  // 7 mục công khai (thứ tự cố định)
  muc: [
    { id: "doc",        ten: "Đọc truyện" },
    { id: "cot-truyen", ten: "Cốt Truyện" },
    { id: "nhan-vat",   ten: "Nhân Vật" },
    { id: "map",        ten: "Map" },
    { id: "canh-gioi",  ten: "Cảnh Giới" },
    { id: "phap-bao",   ten: "Pháp Bảo" },
    { id: "cong-phap",  ten: "Công Pháp" }
  ]
};
