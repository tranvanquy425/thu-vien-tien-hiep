/* DỮ LIỆU THẬT — Phàm Nhân Tu Tiên. Dùng cho CẢ xem local (file://) lẫn deploy.
   Nguồn cảnh giới: Fandom Phàm Nhân Tu Tiên (phamnhan.fandom.com) — KHUNG THAM KHẢO, CHỜ Chiến duyệt theo nguyên tác.
   Bộ não: web/data/<slug>/data.js là nguồn dữ liệu thực thể của web. Mỗi bộ một khu riêng, KHÔNG liên thông với bộ khác. */
window.LIB_DATA = window.LIB_DATA || {};
window.LIB_DATA["pham-nhan-tu-tien"] = window.LIB_DATA["pham-nhan-tu-tien"] || {};

window.LIB_DATA["pham-nhan-tu-tien"].realms = {
  updatedAt: "2026-06-10", chot: false,
  ghiChu: "KHUNG THAM KHẢO cảnh giới Phàm Nhân Tu Tiên (nguồn Fandom phamnhan) — Hàn Lập đi con đường tu chân tiêu chuẩn. CHỜ Chiến duyệt/đối chiếu nguyên tác trước khi chốt (số tầng, thọ nguyên, mô tả chi tiết sẽ rà theo truyện qua các đợt đọc). KHÔNG dùng hệ cảnh giới của Tiên Nghịch cho bộ này.",
  heThong: [
    { id: "tu-chan", ten: "Tu Chân (con đường Hàn Lập)", chinh: true,
      moTa: "Hệ tu luyện tiêu chuẩn của tu chân giới: hấp thu linh khí trời đất, từng bước ngưng tụ linh lực → kim đan → nguyên anh → nguyên thần, vượt thiên kiếp phi thăng Linh giới rồi Tiên giới.",
      detail: "Tu chân giới (nhân giới) tu từ Luyện Khí tới Hóa Thần (cá biệt Đại Thừa); muốn tiến xa hơn phải phi thăng Linh giới (Luyện Hư → Hợp Thể → Đại Thừa → Độ Kiếp) rồi vượt kiếp lên Tiên giới (Chân Tiên trở lên). Đặc trưng Phàm Nhân Tu Tiên: nhân vật chính Hàn Lập xuất thân phàm nhân, cẩn trọng, dựa vào bình Tiểu Cực (Lục Cực Chân Quân) gia tốc linh dược mà từng bước vươn lên." }
  ],
  realms: [
    { id: "luyen-khi", name: "Luyện Khí Kỳ", he: "tu-chan", buoc: "Hạ cảnh giới", capBac: 1,
      blurb: "Hấp thu linh khí trời đất, tích vào đan điền — bước khởi đầu thoát phàm.", dacThu: "Phân 13 tầng.",
      detail: "Giai đoạn nhập môn: dẫn linh khí thiên địa vào thân, tích trữ trong đan điền, cải tạo thể chất. Thường phân 13 tầng. (Chi tiết chờ đối chiếu nguyên tác.)",
      tuongDuong: {}, nguon: [] },
    { id: "truc-co", name: "Trúc Cơ Kỳ", he: "tu-chan", buoc: "Hạ cảnh giới", capBac: 2,
      blurb: "Linh lực hóa dịch, lập nền tảng — chính thức thành tu sĩ, thọ nguyên kéo dài.", dacThu: "Sơ → Trung → Hậu kỳ.",
      detail: "Ngưng linh khí thành linh lực dạng dịch, xây dựng căn cơ tu luyện; lột xác thành tu sĩ thật sự, thọ nguyên tăng đáng kể. Cần Trúc Cơ đan để tăng tỉ lệ thành công.",
      tuongDuong: {}, nguon: [] },
    { id: "ket-dan", name: "Kết Đan Kỳ", he: "tu-chan", buoc: "Hạ cảnh giới", capBac: 3,
      blurb: "Ngưng tụ kim đan ở đan điền; ngự khí phi hành.", dacThu: "Sơ → Trung → Hậu → Đỉnh.",
      detail: "Nén linh lực ngưng thành một viên kim đan trong đan điền; có thể ngự khí/ngự kiếm phi hành, thọ nguyên dài hơn nhiều.",
      tuongDuong: {}, nguon: [] },
    { id: "nguyen-anh", name: "Nguyên Anh Kỳ", he: "tu-chan", buoc: "Hạ cảnh giới", capBac: 4,
      blurb: "Kim đan vỡ kết thành nguyên anh; nguyên anh xuất khiếu, thuấn di.", dacThu: "Sơ → Trung → Hậu → Đỉnh.",
      detail: "Kim đan tan vỡ ngưng thành nguyên anh trong thân; nguyên anh có thể xuất khiếu, đoạt xá, dịch chuyển nhanh. Hàn Lập về sau tu luyện song nguyên anh (đệ nhị nguyên anh).",
      tuongDuong: {}, nguon: [] },
    { id: "hoa-than", name: "Hóa Thần Kỳ", he: "tu-chan", buoc: "Hạ cảnh giới", capBac: 5,
      blurb: "Nguyên anh hợp nhất thần thức thành nguyên thần — đỉnh cao tu chân giới.", dacThu: "Mốc rất khó với tu sĩ nhân giới.",
      detail: "Nguyên anh dung hợp thần thức/ý cảnh thành nguyên thần; là cảnh giới cao nhất phổ biến ở tu chân giới (nhân giới). Muốn tiến xa hơn phải phi thăng Linh giới.",
      tuongDuong: {}, nguon: [] },
    { id: "luyen-hu", name: "Luyện Hư Kỳ", he: "tu-chan", buoc: "Trung cảnh giới", capBac: 6,
      blurb: "Cảnh giới của Linh giới — luyện thần phản hư, tiếp xúc quy tắc.", dacThu: "",
      detail: "Cảnh giới đầu của Linh giới sau khi phi thăng; bắt đầu cảm ngộ quy tắc thiên địa, sức mạnh vượt xa tu chân giới.",
      tuongDuong: {}, nguon: [] },
    { id: "hop-the", name: "Hợp Thể Kỳ", he: "tu-chan", buoc: "Trung cảnh giới", capBac: 7,
      blurb: "Dung hợp pháp lực và bản thể; chiến lực kinh người.", dacThu: "",
      detail: "Hợp nhất pháp lực, nguyên thần và nhục thân; nắm giữ quy tắc sâu hơn. (Chi tiết chờ đối chiếu.)",
      tuongDuong: {}, nguon: [] },
    { id: "dai-thua", name: "Đại Thừa Kỳ", he: "tu-chan", buoc: "Trung cảnh giới", capBac: 8,
      blurb: "Đỉnh cao trước thiên kiếp — chuẩn bị độ kiếp phi thăng Tiên giới.", dacThu: "",
      detail: "Cảnh giới tối cao của Linh giới; viên mãn thì dẫn động thiên kiếp để vượt lên Tiên giới.",
      tuongDuong: {}, nguon: [] },
    { id: "do-kiep", name: "Độ Kiếp Kỳ", he: "tu-chan", buoc: "Trung cảnh giới", capBac: 9,
      blurb: "Vượt thiên kiếp; thành thì phi thăng Tiên giới, bại thì hình thần câu diệt.", dacThu: "Quá độ lên Tiên giới.",
      detail: "Giai đoạn vượt thiên kiếp (lôi kiếp) để phi thăng Tiên giới; cực kỳ hung hiểm, thất bại là thân tử đạo tiêu.",
      tuongDuong: {}, nguon: [] },
    { id: "chan-tien", name: "Chân Tiên", he: "tu-chan", buoc: "Thượng cảnh giới (Tiên giới)", capBac: 10,
      blurb: "Bước vào Tiên giới — thành tiên nhân chân chính.", dacThu: "Khởi đầu Tiên giới.",
      detail: "Cảnh giới khởi đầu của Tiên giới (phần hậu truyện). Trên Chân Tiên còn Huyền Tiên, Kim Tiên, Thái Ất Kim Tiên, Đại La Kim Tiên, Đạo Tổ.",
      tuongDuong: {}, nguon: [] },
    { id: "huyen-tien", name: "Huyền Tiên", he: "tu-chan", buoc: "Thượng cảnh giới (Tiên giới)", capBac: 11,
      blurb: "Cấp Tiên giới trên Chân Tiên.", dacThu: "",
      detail: "Một bậc Tiên giới trên Chân Tiên. (Chi tiết chờ đối chiếu hậu truyện.)",
      tuongDuong: {}, nguon: [] },
    { id: "kim-tien", name: "Kim Tiên", he: "tu-chan", buoc: "Thượng cảnh giới (Tiên giới)", capBac: 12,
      blurb: "Cấp Tiên giới trên Huyền Tiên.", dacThu: "",
      detail: "Một bậc Tiên giới trên Huyền Tiên. (Chi tiết chờ đối chiếu hậu truyện.)",
      tuongDuong: {}, nguon: [] },
    { id: "thai-at-kim-tien", name: "Thái Ất Kim Tiên", he: "tu-chan", buoc: "Thượng cảnh giới (Tiên giới)", capBac: 13,
      blurb: "Cấp cao Tiên giới.", dacThu: "",
      detail: "Bậc cao của Tiên giới. (Chi tiết chờ đối chiếu hậu truyện.)",
      tuongDuong: {}, nguon: [] },
    { id: "dai-la-kim-tien", name: "Đại La Kim Tiên", he: "tu-chan", buoc: "Thượng cảnh giới (Tiên giới)", capBac: 14,
      blurb: "Bậc tối cao gần đỉnh Tiên giới.", dacThu: "",
      detail: "Một trong những bậc tối cao của Tiên giới, dưới Đạo Tổ. (Chi tiết chờ đối chiếu hậu truyện.)",
      tuongDuong: {}, nguon: [] },
    { id: "dao-to", name: "Đạo Tổ", he: "tu-chan", buoc: "Thượng cảnh giới (Tiên giới)", capBac: 15,
      blurb: "Đỉnh cao tối thượng — đứng trên vạn vật.", dacThu: "Đỉnh phong toàn truyện.",
      detail: "Cảnh giới tối thượng. (Chi tiết chờ đối chiếu hậu truyện.)",
      tuongDuong: {}, nguon: [] }
  ],
  doiChieu: []
};

window.LIB_DATA["pham-nhan-tu-tien"].characters = { updatedAt: "2026-06-10", chars: [] };
window.LIB_DATA["pham-nhan-tu-tien"].artifacts = { artifacts: [] };
window.LIB_DATA["pham-nhan-tu-tien"].techniques = { techniques: [] };
window.LIB_DATA["pham-nhan-tu-tien"].map = { nodes: [] };
window.LIB_DATA["pham-nhan-tu-tien"].factions = { factions: [] };
window.LIB_DATA["pham-nhan-tu-tien"].volumes = { volumes: [] };
window.LIB_DATA["pham-nhan-tu-tien"].cotTruyen = {};
