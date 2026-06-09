/* DỮ LIỆU MẪU — chỉ để duyệt bố cục web, KHÔNG phải dữ liệu thật.
   Đúng schema BO_NAO_CHUNG. Khi có data thật trong <bộ>/data/*.json + R2,
   web sẽ tự dùng data thật và bỏ qua file này. */
window.LIB_DEMO = window.LIB_DEMO || {};
window.LIB_DEMO["tien-nghich"] = {
  _demo: true,

  characters: { updatedAt: "mẫu", count: 3, chars: [
    {
      id: "vuong-lam", name: "Vương Lâm", cn: "王林", aliases: ["Thiết Trụ"],
      gioiTinh: "Nam", theLuc: "Tán tu", canhGioiCaoNhat: "(mẫu) — điền sau", trangThai: "song",
      blurb: "(mẫu) Nhân vật chính. Phàm nhân tư chất tầm thường, nghịch thiên cải mệnh.",
      tabs: {
        tieuSu: "(Nội dung mẫu) Vương Lâm xuất thân thôn quê, tên mụ Thiết Trụ, từ nhỏ thông minh hiếu học.",
        kinhLich: [
          { chuong: "@c0001", importance: "major", text: "(mẫu) Rời thôn, theo tứ thúc lên đường — khởi điểm hành trình." },
          { bridge: true, khoang: "@c0002–@c0006", text: "(mẫu) Trên đường tới nơi mới, Vương Lâm lần đầu va chạm với thế giới ngoài sơn thôn." },
          { chuong: "@c0007", importance: "normal", text: "(mẫu) Vào được một thế lực tu tiên, bắt đầu tu luyện." }
        ],
        tuVi: "(mẫu) Diễn tiến tu vi: từ phàm nhân → các mốc đột phá sẽ ghi kèm neo chương khi có data thật.",
        nhanMach: [
          { ten: "Tứ thúc", quanHe: "Người dẫn đường", ghiChu: "(mẫu) đưa Vương Lâm rời thôn." },
          { ten: "Lý Mộ Uyển", quanHe: "Bạn đồng hành", ghiChu: "(mẫu) quan hệ phát triển về sau." }
        ],
        tuiDo: {
          phapBao: ["(mẫu) Pháp bảo A"], congPhap: ["(mẫu) Công pháp nhập môn"],
          danDuoc: ["(mẫu) Đan dược hồi khí"], linhThu: [], khac: ["(mẫu) Vật phẩm khác"]
        }
      },
      nguon: ["@c0001", "@c0007", "@c0020"]
    },
    {
      id: "ly-mo-uyen", name: "Lý Mộ Uyển", cn: "李慕婉", aliases: [],
      gioiTinh: "Nữ", theLuc: "(mẫu) Tông môn", canhGioiCaoNhat: "(mẫu)", trangThai: "khong-ro",
      blurb: "(mẫu) Một nhân vật nữ quan trọng trong giai đoạn đầu.",
      tabs: {
        tieuSu: "(mẫu) Tiểu sử Lý Mộ Uyển — điền sau.",
        kinhLich: [{ chuong: "@c0015", importance: "normal", text: "(mẫu) Lần xuất hiện đáng chú ý." }],
        tuVi: "(mẫu) Tu vi — điền sau.", nhanMach: [{ ten: "Vương Lâm", quanHe: "Bạn đồng hành", ghiChu: "(mẫu)" }],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      }, nguon: ["@c0015"]
    },
    {
      id: "tu-do-nam", name: "Tư Đồ Nam", cn: "司徒南", aliases: [],
      gioiTinh: "Nam", theLuc: "(mẫu)", canhGioiCaoNhat: "(mẫu)", trangThai: "tu-vong",
      blurb: "(mẫu) Nhân vật phụ tuyến đầu.",
      tabs: { tieuSu: "(mẫu) điền sau.", kinhLich: [], tuVi: "(mẫu)", nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] } }, nguon: []
    }
  ]},

  realms: {
    updatedAt: "2026-06-09", chot: true,
    ghiChu: "Tu Đạo là hệ tu luyện CHÍNH, xuyên suốt cả truyện. Tu Tiên và Cổ Tộc là hệ song song, đối chiếu tương đương. Nguồn: Fandom Vũ Trụ Tiên Nghịch (đã xác nhận khớp truyện gốc).",
    heThong: [
      { id: "tu-dao", ten: "Tu Đạo", chinh: true, moTa: "Hệ tu luyện chính, xuyên suốt cả truyện. 4 bước: dựng căn cơ → chữ Niết → chứng đạo bổn nguyên → Đạp Thiên." },
      { id: "tu-tien", ten: "Tu Tiên", moTa: "Hệ tiên nhân: Tiên Sĩ → Thượng Tiên → Thiên Tiên → Tiên Vương → Tiên Quân → Tiên Đế → các Tôn." },
      { id: "co-toc", ten: "Cổ Tộc (Cổ Thần · Cổ Yêu · Cổ Ma)", moTa: "Đo bằng 'sao' (Tinh): Nhất Tinh → Cửu Tinh → 27 sao." },
      { id: "tien-di-toc", ten: "Tiên Di Tộc / Tiên Tuyển Tộc", moTa: "Chủng tộc phụ, hệ riêng. Chi tiết tại wiki, bổ sung sau.", link: "https://vu-tru-tien-nghich.fandom.com/vi/wiki/Ti%C3%AAn_Di_T%E1%BB%99c" }
    ],
    realms: [
      { id: "ngung-khi", name: "Ngưng Khí", aliases: ["Linh Động Kỳ", "Luyện Khí"], buoc: "Bước 1", capBac: 1, blurb: "Hấp thu linh khí trời đất vào thân, cải tạo thể chất.", detail: "Còn gọi Linh Động Kỳ, phân từ tầng 1 đến tầng 15.", dacThu: "Phân 15 tầng.", tuongDuong: { tuTien: "", coToc: "Nhất Tinh (1 sao)" }, nguon: [] },
      { id: "truc-co", name: "Trúc Cơ", buoc: "Bước 1", capBac: 2, blurb: "Thanh tẩy toàn thân, cải tạo thể chất lần hai, lột xác thành tu sĩ thật.", tuongDuong: { tuTien: "", coToc: "Nhất Tinh (1 sao)" }, nguon: [] },
      { id: "ket-dan", name: "Kết Đan", buoc: "Bước 1", capBac: 3, blurb: "Ngưng tụ một viên kim đan ở đan điền.", tuongDuong: { tuTien: "", coToc: "Nhất Tinh (1 sao)" }, nguon: [] },
      { id: "nguyen-anh", name: "Nguyên Anh", buoc: "Bước 1", capBac: 4, blurb: "Kim đan vỡ, hình thành nguyên anh; có thể đoạt xá, thuấn di.", tuongDuong: { tuTien: "", coToc: "Nhị Tinh (2 sao)" }, nguon: [] },
      { id: "hoa-than", name: "Hoá Thần", buoc: "Bước 1", capBac: 5, blurb: "Nuôi nguyên anh thành nguyên thần nhờ hợp nhất ý cảnh và thần thức.", tuongDuong: { tuTien: "", coToc: "Nhị Tinh (2 sao)" }, nguon: [] },
      { id: "anh-bien", name: "Anh Biến", buoc: "Bước 1", capBac: 6, blurb: "Tẩy phàm thể, hình thành tiên thể, vận tiên lực — tương đương Tiên Sĩ.", tuongDuong: { tuTien: "Tiên Sĩ", coToc: "Tam Tinh (3 sao)" }, nguon: [] },
      { id: "van-dinh", name: "Vấn Đỉnh", buoc: "Bước 1", capBac: 7, blurb: "Đỉnh Nhất Bộ, một ngưỡng lớn về thọ nguyên; có hai con đường Thuận và Nghịch Thiên.", tuongDuong: { tuTien: "Thượng Tiên", coToc: "Tam Tinh (3 sao)" }, nguon: [] },
      { id: "am-hu", name: "Âm Hư", buoc: "Quá Độ", capBac: 8, blurb: "Quá độ 'Hư Thực Nhị Ý' — lĩnh hội ý nghĩa Hư.", tuongDuong: { tuTien: "Thượng Tiên", coToc: "Tứ Tinh (4 sao)" }, nguon: [] },
      { id: "duong-thuc", name: "Dương Thực", buoc: "Quá Độ", capBac: 9, blurb: "Quá độ 'Hư Thực Nhị Ý' — lĩnh hội ý nghĩa Thực.", tuongDuong: { tuTien: "Thượng Tiên", coToc: "Tứ Tinh (4 sao)" }, nguon: [] },
      { id: "khuy-niet", name: "Khuy Niết", buoc: "Bước 2", capBac: 10, blurb: "Khởi đầu Nhị Bộ — khuy phá thiên cơ, chạm tầng quy tắc sâu hơn.", tuongDuong: { tuTien: "Thiên Tiên", coToc: "Ngũ Tinh (5 sao)" }, nguon: [] },
      { id: "tinh-niet", name: "Tịnh Niết", buoc: "Bước 2", capBac: 11, blurb: "Thanh tịnh bản nguyên, gột rửa tạp niệm.", tuongDuong: { tuTien: "Tiên Vương", coToc: "Ngũ Tinh (5 sao)" }, nguon: [] },
      { id: "toai-niet", name: "Toái Niết", buoc: "Bước 2", capBac: 12, blurb: "Phá vỡ giới hạn, niết bàn trùng sinh.", tuongDuong: { tuTien: "Tiên Quân", coToc: "Ngũ Tinh (5 sao)" }, nguon: [] },
      { id: "thien-nhan-suy-kiep", name: "Thiên Nhân Suy Kiếp", buoc: "Quá Độ", capBac: 13, blurb: "Quá độ — vượt kiếp suy của thiên nhân trước khi vào Tam Bộ.", tuongDuong: { tuTien: "Tiên Quân", coToc: "Lục Tinh (6 sao)" }, nguon: [] },
      { id: "khong-niet", name: "Không Niết", buoc: "Bước 3", capBac: 14, blurb: "Tam Bộ ('Tứ Không') — chứng đạo bổn nguyên, hàng đại năng.", tuongDuong: { tuTien: "Tiên Đế", coToc: "Thất Tinh (7 sao)" }, nguon: [] },
      { id: "khong-linh", name: "Không Linh", buoc: "Bước 3", capBac: 15, blurb: "Tầng hai của 'Tứ Không'.", tuongDuong: { tuTien: "Tiên Đế", coToc: "Bát Tinh (8 sao)" }, nguon: [] },
      { id: "khong-huyen", name: "Không Huyền", buoc: "Bước 3", capBac: 16, blurb: "Tầng ba của 'Tứ Không'.", tuongDuong: { tuTien: "Tiên Đế", coToc: "Cửu Tinh (9 sao)" }, nguon: [] },
      { id: "huyen-kiep", name: "Huyền Kiếp", buoc: "Bước 3", capBac: 17, blurb: "Kiếp giữa Tam Bộ.", tuongDuong: { tuTien: "", coToc: "Dung luyện tam mạch" }, nguon: [] },
      { id: "khong-kiep", name: "Không Kiếp", buoc: "Bước 3", capBac: 18, blurb: "Bên Tu Tiên phân Đại Tôn → Kim Tôn → Thiên Tôn → Dược Thiên Tôn.", tuongDuong: { tuTien: "Đại Tôn · Kim Tôn · Thiên Tôn · Dược Thiên Tôn", coToc: "Nhị Thập Thất Tinh (27 sao)" }, nguon: [] },
      { id: "dai-thien-ton", name: "Đại Thiên Tôn", buoc: "Bước 3", capBac: 19, blurb: "Ngưng tụ Đại Thiên Tôn chi dương.", tuongDuong: { tuTien: "", coToc: "Độ qua Tam Tổn Thất Kiếp" }, nguon: [] },
      { id: "dap-thien-kieu", name: "Đạp Thiên Cửu Kiều", buoc: "Quá Độ", capBac: 20, blurb: "Vượt 9 cầu Đạp Thiên (Đệ Nhất → Đệ Cửu) để hoàn toàn vào Tứ Bộ.", tuongDuong: { tuTien: "", coToc: "" }, nguon: [] },
      { id: "dap-thien", name: "Đạp Thiên Cảnh", buoc: "Bước 4", capBac: 21, blurb: "Tứ Bộ — cảnh giới siêu thoát, đỉnh cao Tu Đạo.", tuongDuong: { tuTien: "", coToc: "" }, nguon: [] }
    ],
    doiChieu: [
      { buoc: "Bước 1", tuDao: "Ngưng Khí", tuTien: "", coToc: "Nhất Tinh (1 sao)" },
      { buoc: "Bước 1", tuDao: "Trúc Cơ", tuTien: "", coToc: "Nhất Tinh (1 sao)" },
      { buoc: "Bước 1", tuDao: "Kết Đan", tuTien: "", coToc: "Nhất Tinh (1 sao)" },
      { buoc: "Bước 1", tuDao: "Nguyên Anh", tuTien: "", coToc: "Nhị Tinh (2 sao)" },
      { buoc: "Bước 1", tuDao: "Hoá Thần", tuTien: "", coToc: "Nhị Tinh (2 sao)" },
      { buoc: "Bước 1", tuDao: "Anh Biến", tuTien: "Tiên Sĩ", coToc: "Tam Tinh (3 sao)" },
      { buoc: "Bước 1", tuDao: "Vấn Đỉnh", tuTien: "Thượng Tiên", coToc: "Tam Tinh (3 sao)" },
      { buoc: "Quá Độ", tuDao: "Âm Hư", tuTien: "Thượng Tiên", coToc: "Tứ Tinh (4 sao)" },
      { buoc: "Quá Độ", tuDao: "Dương Thực", tuTien: "Thượng Tiên", coToc: "Tứ Tinh (4 sao)" },
      { buoc: "Bước 2", tuDao: "Khuy Niết", tuTien: "Thiên Tiên", coToc: "Ngũ Tinh (5 sao)" },
      { buoc: "Bước 2", tuDao: "Tịnh Niết", tuTien: "Tiên Vương", coToc: "Ngũ Tinh (5 sao)" },
      { buoc: "Bước 2", tuDao: "Toái Niết", tuTien: "Tiên Quân", coToc: "Ngũ Tinh (5 sao)" },
      { buoc: "Quá Độ", tuDao: "Thiên Nhân Suy Kiếp", tuTien: "Tiên Quân", coToc: "Lục Tinh (6 sao)" },
      { buoc: "Bước 3", tuDao: "Không Niết", tuTien: "Tiên Đế", coToc: "Thất Tinh (7 sao)" },
      { buoc: "Bước 3", tuDao: "Không Linh", tuTien: "Tiên Đế", coToc: "Bát Tinh (8 sao)" },
      { buoc: "Bước 3", tuDao: "Không Huyền", tuTien: "Tiên Đế", coToc: "Cửu Tinh (9 sao)" },
      { buoc: "Bước 3", tuDao: "Huyền Kiếp", tuTien: "", coToc: "Dung luyện tam mạch" },
      { buoc: "Bước 3", tuDao: "Không Kiếp", tuTien: "Đại Tôn · Kim Tôn · Thiên Tôn · Dược Thiên Tôn", coToc: "Nhị Thập Thất Tinh (27 sao)" },
      { buoc: "Bước 3", tuDao: "Đại Thiên Tôn", tuTien: "", coToc: "Độ qua Tam Tổn Thất Kiếp" },
      { buoc: "Quá Độ", tuDao: "Đạp Thiên Đệ Nhất – Đệ Cửu Kiều", tuTien: "", coToc: "" },
      { buoc: "Bước 4", tuDao: "Đạp Thiên Cảnh", tuTien: "", coToc: "" }
    ]
  },

  artifacts: { updatedAt: "mẫu", artifacts: [
    { id: "phi-kiem-a", name: "(mẫu) Phi Kiếm Thanh Phong", cn: "", category: "phap-bao", categoryLabel: "Pháp bảo",
      phamCap: "(mẫu) Hạ phẩm", soHuu: ["Vương Lâm"], trangThai: "đang dùng",
      blurb: "(mẫu) Phi kiếm dùng thời kỳ đầu.", detail: "(mẫu) Mô tả chi tiết — điền sau.", nguon: ["@c0012"] }
  ]},

  techniques: { updatedAt: "mẫu", techniques: [
    { id: "cp-nhap-mon", name: "(mẫu) Thanh Nguyên Quyết", cn: "", loai: "cong-phap", loaiLabel: "Công pháp",
      phamCap: "(mẫu) Hoàng giai", hePhai: "(mẫu) Chính đạo", soHuu: ["Vương Lâm"],
      blurb: "(mẫu) Công pháp nhập môn.", detail: "(mẫu) điền sau.", nguon: ["@c0007"] }
  ]},

  map: { updatedAt: "mẫu", nodes: [
    { id: "tu-chan-gioi", name: "(mẫu) Tu Chân Giới", cn: "", capDo: "gioi-dien", parentId: null,
      blurb: "(mẫu) Giới diện lớn nhất giai đoạn đầu.", detail: "(mẫu) điền sau.", theLucLienQuan: [], nguon: [] }
  ]},

  factions: { updatedAt: "mẫu", factions: [
    { id: "tong-mon-x", name: "(mẫu) Tông Môn X", cn: "", type: "tong-mon", typeLabel: "Tông môn",
      diaBan: "(mẫu) Trung Châu", nhanVatChinh: ["Lý Mộ Uyển"], blurb: "(mẫu) Một tông môn giai đoạn đầu.", detail: "(mẫu)", nguon: [] }
  ]},

  volumes: { updatedAt: "mẫu", volumes: [
    { value: "q01", label: "Quyển 1", range: "Ch.1 – 20", title: "(mẫu) Ly Hương",
      summary: "(mẫu) Vương Lâm rời thôn, bước vào tu tiên.", milestones: ["(mẫu) Rời thôn", "(mẫu) Nhập môn"] }
  ]},

  cotTruyen: {
    q01: [
      { chuong: 1, tieuDe: "LY HƯƠNG", tomTat: "(mẫu) Vương Lâm rời thôn theo tứ thúc, mở đầu hành trình." }
    ]
  },

  reader: {
    index: { updatedAt: "mẫu", ten: "Tiên Nghịch", tongChuong: 3, chuong: [
      { so: 1, tieuDe: "LY HƯƠNG", quyen: "q01", soKyTu: 412 },
      { so: 2, tieuDe: "(mẫu) Nhập thành", quyen: "q01", soKyTu: 36 },
      { so: 7, tieuDe: "(mẫu) Nhập môn", quyen: "q01", soKyTu: 34 }
    ]},
    chapters: {
      1: { chuong: 1, tieuDe: "LY HƯƠNG", quyen: "q01", soKyTu: 412,
        noiDung: "Thiết Trụ ngồi ở bên con đường nhỏ trong thôn, vẻ mặt ngẩn ngơ nhìn bầu trời xanh thẳm. Thiết Trụ vốn không phải tên thật của hắn — hắn vốn tên là Vương Lâm.\n\n(Đây là đoạn trích mẫu chương 1 để minh hoạ trải nghiệm đọc. Nội dung đầy đủ sẽ lấy từ dữ liệu thật trên R2 khi đã upload.)" },
      2: { chuong: 2, tieuDe: "(mẫu) Nhập thành", quyen: "q01", soKyTu: 36, noiDung: "(mẫu) Nội dung chương 2 — điền từ data thật." },
      7: { chuong: 7, tieuDe: "(mẫu) Nhập môn", quyen: "q01", soKyTu: 34, noiDung: "(mẫu) Nội dung chương 7 — điền từ data thật." }
    }
  }
};