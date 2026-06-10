/* DỮ LIỆU THẬT — Phàm Nhân Tu Tiên. Dùng cho CẢ xem local (file://) lẫn deploy.
   Cảnh giới: Hạ cảnh giới (nhân giới) → Trung cảnh giới (Linh giới) → Độ Kiếp → Tiên giới (+ Pháp Tắc).
   Nguồn đối chiếu: cabaymau.vn/he-thong-tu-luyen-pham-nhan-tu-tien (Chiến xác nhận chính xác) + đối chiếu canon nguyên tác.
   Bộ não: web/data/<slug>/data.js là nguồn dữ liệu thực thể của web. Mỗi bộ một khu riêng, KHÔNG liên thông với bộ khác. */
window.LIB_DATA = window.LIB_DATA || {};
window.LIB_DATA["pham-nhan-tu-tien"] = window.LIB_DATA["pham-nhan-tu-tien"] || {};

window.LIB_DATA["pham-nhan-tu-tien"].realms = {
  updatedAt: "2026-06-10", chot: false,
  ghiChu: "Hệ tu luyện chia ba chặng lớn: HẠ CẢNH GIỚI ở nhân giới (Luyện Khí → Trúc Cơ → Kết Đan → Nguyên Anh → Hóa Thần), TRUNG CẢNH GIỚI ở Linh giới (Luyện Hư → Hợp Thể → Đại Thừa), rồi vượt cửa ĐỘ KIẾP gột phàm thai để phi thăng TIÊN GIỚI (Chân Tiên → Huyền Tiên → Kim Tiên → Thái Ất Ngọc Tiên → Đại La Kim Tiên → Đạo Tổ). Mỗi lần đột phá, tuổi thọ và sức mạnh tăng vượt bậc; lên tới Tiên giới thì sức mạnh gắn với việc lĩnh ngộ Pháp Tắc của Ba Ngàn Đại Đạo.",
  heThong: [
    { id: "tu-tien", ten: "Tu tiên (con đường Hàn Lập)", chinh: true,
      moTa: "Hành trình từ phàm nhân: hấp thu linh khí → ngưng linh lực → kết kim đan → nguyên anh → hóa thần, vượt thiên kiếp phi thăng Linh giới rồi Tiên giới, đỉnh cao là Đạo Tổ hợp nhất Đại Đạo.",
      detail: "Ba chặng lớn: (1) HẠ CẢNH GIỚI ở nhân giới — Luyện Khí, Trúc Cơ, Kết Đan, Nguyên Anh, Hóa Thần; Hóa Thần là cao nhất phàm nhân đạt được trước khi phi thăng. (2) TRUNG CẢNH GIỚI ở Linh giới — Luyện Hư, Hợp Thể, Đại Thừa. (3) Vượt cửa ĐỘ KIẾP gột rửa phàm thai thành Tiên Thể, phi thăng TIÊN GIỚI — Chân Tiên, Huyền Tiên, Kim Tiên, Thái Ất Ngọc Tiên, Đại La Kim Tiên, Đạo Tổ; ở Tiên giới việc tiến giai gắn với đả thông Tiên Khiếu và lĩnh ngộ Pháp Tắc. Đặc trưng Hàn Lập: xuất thân phàm nhân, cẩn trọng, dựa vào Chưởng Thiên Bình — pháp bảo thần bí có không gian gia tốc thời gian nuôi linh dược/linh thảo cực nhanh — mà từng bước nghịch thiên vươn lên." },
    { id: "phap-tac", ten: "Pháp Tắc — Ba Ngàn Đại Đạo", chinh: false,
      moTa: "Ở Tiên giới, mọi sức mạnh quy về Ba Ngàn Đại Đạo; mỗi Đại Đạo ứng một loại Pháp Tắc. Tu sĩ lĩnh ngộ Pháp Tắc để tiến giai và áp chế đối thủ.",
      detail: "Có ba Pháp Tắc được coi là CHÍ TÔN — nguồn gốc của vạn pháp, các Pháp Tắc khác đều phân hóa ra từ chúng:\n\n1. PHÁP TẮC THỜI GIAN — thao túng dòng thời gian, có thể tác động đến mọi thứ (đây cũng là loại Hàn Lập lĩnh ngộ).\n2. PHÁP TẮC KHÔNG GIAN — di chuyển và tạo lập các không gian khác nhau, là nền tảng cho nhiều thần thông.\n3. PHÁP TẮC LUÂN HỒI — chi phối sự sống, cái chết và sự chuyển kiếp của chúng sinh.\n\nLĩnh ngộ Pháp Tắc, đặc biệt là Tam Đại Chí Tôn, là con đường dẫn tới cảnh giới Đại La và Đạo Tổ." },
    { id: "tien-dac-biet", ten: "Phân loại Tiên nhân đặc biệt", chinh: false,
      moTa: "Ngoài các cảnh giới chính, Tiên giới còn phân loại Tiên nhân theo cách tu và việc có nắm Pháp Tắc hay không.",
      detail: "• NGỤY TIÊN: người vừa phi thăng, chưa hoàn toàn chuyển Pháp Lực thành Tiên Linh Lực.\n\n• TÁN TIÊN: Tiên nhân KHÔNG nắm giữ Pháp Tắc — số lượng cực đông (\"mười tiên chín tán\"). Vẫn lên cấp được nhờ tu Tiên Linh Lực, nhưng vì không có Pháp Tắc hộ thân nên Độ Kiếp tiến giai khó hơn Chân Tiên rất nhiều.\n\n• LỰC TIÊN (còn gọi Huyển Tiên): một dị loại trong hàng Tán Tiên, không cầu Pháp Tắc mà chuyên rèn nhục thân, dùng \"lực phá đạo\" để tiến giai; số lượng cực ít.\n\n• ĐỊA TIÊN: ngưng tụ Pháp Tắc nhờ lực lượng tín niệm của tín đồ trong một khu vực; tạo ra một hóa thân để dùng Pháp Tắc, có thể mạnh hơn cả bản thể — nhưng ra khỏi địa vực thì Pháp Tắc gần như mất hiệu lực." }
  ],
  realms: [
    { id: "luyen-khi", name: "Luyện Khí Kỳ", he: "tu-tien", buoc: "Hạ cảnh giới (nhân giới)", capBac: 1,
      blurb: "Hấp thu, tinh lọc linh khí trời đất, tích trong đan điền — bước khởi đầu thoát phàm.", dacThu: "Phân 13 tầng · thọ ~120–150 tuổi.",
      detail: "Giai đoạn nhập môn: dẫn và tinh lọc tinh hoa linh khí thiên địa, để linh khí tồn tại dạng khí trong đan điền, dần cải tạo thể chất. Phân 13 tầng. Tu sĩ Luyện Khí thọ khoảng 120–150 tuổi — chỉ hơn phàm nhân thế tục một chút.",
      tuongDuong: {}, nguon: [] },
    { id: "truc-co", name: "Trúc Cơ Kỳ", he: "tu-tien", buoc: "Hạ cảnh giới (nhân giới)", capBac: 2,
      blurb: "Linh khí hóa dịch, lập nền tảng — chạm ngưỡng cửa tu chân, đủ tư cách đệ tử nội môn.", dacThu: "Sơ → Trung → Hậu kỳ · thọ ~200 tuổi.",
      detail: "Linh khí ngưng từ dạng khí thành dạng dịch, xây dựng căn cơ vững chắc cho việc thi triển pháp thuật. Lột xác thành tu sĩ thật sự, thọ nguyên tăng lên khoảng 200 tuổi, đủ tư cách làm đệ tử nội môn. Thường cần Trúc Cơ đan để tăng tỉ lệ thành công.",
      tuongDuong: {}, nguon: [] },
    { id: "ket-dan", name: "Kết Đan Kỳ", he: "tu-tien", buoc: "Hạ cảnh giới (nhân giới)", capBac: 3,
      blurb: "Cô đọng linh lực thành kim đan màu vàng — chính thức là tu tiên chân chính.", dacThu: "Sơ → Trung → Hậu → Đỉnh · thọ ~500 tuổi.",
      detail: "Linh lực cô đọng thành một viên nội đan màu vàng (kim đan) trong đan điền. Đạt cảnh giới này, tu sĩ mới thật sự được xem là người tu tiên chân chính; có thể ngự khí/ngự kiếm phi hành và thọ tới khoảng 500 tuổi.",
      tuongDuong: {}, nguon: [] },
    { id: "nguyen-anh", name: "Nguyên Anh Kỳ", he: "tu-tien", buoc: "Hạ cảnh giới (nhân giới)", capBac: 4,
      blurb: "Kim đan vỡ, thai nghén Nguyên Anh (linh hồn thứ hai); đạt trường sinh tương đối.", dacThu: "Sơ → Trung → Hậu → Đỉnh · thọ >2000 tuổi.",
      detail: "Kim đan vỡ ra, thai nghén Nguyên Anh — một linh hồn thứ hai có hình dạng tương tự bản thể. Nguyên Anh có thể thay bản tôn tiếp tục tu luyện, xuất khiếu, thậm chí đoạt xá sau khi bản thể bị hủy diệt. Nhờ vậy đạt trường sinh tương đối, sống hơn 2000 tuổi. (Hàn Lập về sau tu được song Nguyên Anh.)",
      tuongDuong: {}, nguon: [] },
    { id: "hoa-than", name: "Hóa Thần Kỳ", he: "tu-tien", buoc: "Hạ cảnh giới (nhân giới)", capBac: 5,
      blurb: "Ngưng thần thức cường đại — đỉnh cao phàm nhân đạt được ở nhân giới.", dacThu: "Cao nhất Hạ cảnh giới · trước khi phi thăng Linh giới.",
      detail: "Tu sĩ ngưng được thần thức cường đại và dùng nó để chiến đấu; là cảnh giới cao nhất mà phàm nhân có thể đạt được ở Hạ giới (nhân giới). Muốn tiến xa hơn buộc phải phi thăng lên Linh giới.",
      tuongDuong: {}, nguon: [] },
    { id: "luyen-hu", name: "Luyện Hư Kỳ", he: "tu-tien", buoc: "Trung cảnh giới (Linh giới)", capBac: 6,
      blurb: "Cảnh giới đầu của Linh giới — rèn lại công pháp, thích nghi linh khí cao cấp.", dacThu: "",
      detail: "Giai đoạn đầu tiên sau khi phi thăng Linh giới; tu sĩ phải rèn luyện lại công pháp và thích nghi với môi trường linh khí cao cấp hơn nhiều so với nhân giới.",
      tuongDuong: {}, nguon: [] },
    { id: "hop-the", name: "Hợp Thể Kỳ", he: "tu-tien", buoc: "Trung cảnh giới (Linh giới)", capBac: 7,
      blurb: "Hợp nhất Nguyên Anh, thần thức và công lực thành Pháp Tướng uy lực.", dacThu: "Pháp Tướng = sát chiêu cuối, tốn lớn linh lực.",
      detail: "Hợp nhất Nguyên Anh, thần thức và công lực của bản thân thành một Pháp Tướng có uy lực mạnh mẽ — thường được xem là sát chiêu cuối cùng vì khi thi triển tiêu hao lượng lớn linh lực.",
      tuongDuong: {}, nguon: [] },
    { id: "dai-thua", name: "Đại Thừa Kỳ", he: "tu-tien", buoc: "Trung cảnh giới (Linh giới)", capBac: 8,
      blurb: "Tu vi cao nhất Linh giới — lĩnh ngộ một phần quy tắc thiên địa.", dacThu: "Đỉnh phong → dẫn động phi thăng kiếp.",
      detail: "Mức tu vi cao nhất ở Linh giới; bắt đầu hiểu và lĩnh ngộ được một phần quy tắc của thiên địa. Đạt đỉnh phong thì có thể tùy thời dẫn động phi thăng chi kiếp để bước vào Tiên giới.",
      tuongDuong: {}, nguon: [] },
    { id: "do-kiep", name: "Độ Kiếp (cửa quan)", he: "tu-tien", buoc: "Thượng cảnh giới — cửa ải lên Tiên giới", capBac: 9,
      blurb: "Không phải một tầng tu luyện mà là thử thách sinh tử để phi thăng Tiên giới.", dacThu: "Gột phàm thai → Tiên Thể.",
      detail: "Thực chất Thượng cảnh giới chỉ là một cửa quan duy nhất: Độ Kiếp. Đây không phải một tầng tu luyện mà là thử thách sinh tử — đối mặt Thiên Kiếp để gột rửa phàm thai, chuyển hóa thành Tiên Thể. Vượt qua thành công thì phi thăng Tiên giới, đạt bất tử chân chính; thất bại là hình thần câu diệt.",
      tuongDuong: {}, nguon: [] },
    { id: "chan-tien", name: "Chân Tiên", he: "tu-tien", buoc: "Tiên giới", capBac: 10,
      blurb: "Cấp đầu Tiên giới — chuyển Pháp Lực thành Tiên Linh Lực, bắt đầu lĩnh ngộ Pháp Tắc.", dacThu: "Đả thông 12 Tiên Khiếu = Chân Tiên trung kỳ · vượt Thiên Nhân Tam Suy.",
      detail: "Cấp bậc đầu tiên ở Tiên giới. Tu sĩ chuyển Pháp Lực thành Tiên Linh Lực và bắt đầu lĩnh ngộ lực lượng Pháp Tắc; tiến cấp bằng cách đả thông các Tiên Khiếu trên cơ thể (ví dụ đả thông 12 Tiên Khiếu là Chân Tiên trung kỳ). Chân Tiên phải vượt Thiên Nhân Tam Suy chi Kiếp: Thân suy, Tiên suy, Khiếu suy.",
      tuongDuong: {}, nguon: [] },
    { id: "huyen-tien", name: "Huyền Tiên", he: "tu-tien", buoc: "Tiên giới", capBac: 11,
      blurb: "Bậc Tiên giới trên Chân Tiên — pháp lực và lĩnh ngộ Pháp Tắc sâu hơn.", dacThu: "Tiếp tục đả thông Tiên Khiếu.",
      detail: "Cảnh giới Tiên giới trên Chân Tiên và dưới Kim Tiên; tiếp tục đả thông Tiên Khiếu và lĩnh ngộ Pháp Tắc sâu hơn. Bậc này xuất hiện nhiều ở hậu truyện (Tiên Giới Thiên).",
      tuongDuong: {}, nguon: [] },
    { id: "kim-tien", name: "Kim Tiên", he: "tu-tien", buoc: "Tiên giới", capBac: 12,
      blurb: "Ngưng tụ Pháp Tắc chi tia, thi triển Linh Vực sơ cấp.", dacThu: "Vượt Thiên Nhân Nhị Suy (Hồn/Sát) → đủ Ngũ Suy.",
      detail: "Đả thông thêm nhiều Tiên Khiếu để tiến vào Kim Tiên; có khả năng ngưng tụ Pháp Tắc chi tia và thi triển Linh Vực sơ cấp. Kim Tiên còn phải vượt Thiên Nhân Nhị Suy chi Kiếp (Hồn suy, Sát suy) — cộng với Tam Suy của Chân Tiên là hoàn thành đủ Thiên Nhân Ngũ Suy.",
      tuongDuong: {}, nguon: [] },
    { id: "thai-at-ngoc-tien", name: "Thái Ất Ngọc Tiên", he: "tu-tien", buoc: "Tiên giới", capBac: 13,
      blurb: "Đả thông tới 360 Tiên Khiếu, chuyển thần hồn thành Đại La Chân Hồn.", dacThu: "",
      detail: "Cấp bậc trên Kim Tiên; đòi hỏi đả thông tới khoảng 360 Tiên Khiếu và chuyển hóa thần hồn thành Đại La Chân Hồn — bước chuẩn bị cho việc đột phá Đại La.",
      tuongDuong: {}, nguon: [] },
    { id: "dai-la-kim-tien", name: "Đại La Kim Tiên", he: "tu-tien", buoc: "Tiên giới", capBac: 14,
      blurb: "Bậc vĩ đại gần đỉnh Tiên giới — đột phá bằng Trảm Tam Thi.", dacThu: "Đỉnh phong ~1799 Tiên Khiếu.",
      detail: "Cấp bậc vĩ đại, đỉnh phong đả thông tới khoảng 1799 Tiên Khiếu. Việc đột phá lên Đại La cần trải qua quá trình Trảm Tam Thi: Trảm Thiện Thi, Trảm Ác Thi, Trảm Tự Thi — mỗi lần trảm một Thi thì tiến lên một cấp bậc mới trong Đại La cảnh.",
      tuongDuong: {}, nguon: [] },
    { id: "dao-to", name: "Đạo Tổ", he: "tu-tien", buoc: "Tiên giới", capBac: 15,
      blurb: "Đỉnh cao tối thượng — Trảm tới Thi thứ ba và Hợp Đạo, đứng trên vạn vật.", dacThu: "Hợp nhất Đại Đạo; không thể tùy ý chiến đấu.",
      detail: "Cảnh giới tối thượng. Đạo Tổ là người đã Trảm tới Thi thứ ba ở Đại La đỉnh phong, vượt qua Đại Thiên Đại Kiếp và \"Hợp Đạo\" — hợp nhất với Đại Đạo mình tu. Tuy nhiên Đạo Tổ không thể tùy ý ra tay chiến đấu, vì làm vậy sẽ gia tốc quá trình đồng hóa với Đại Đạo, cuối cùng hóa thành một bộ phận của chính Đại Đạo đó.",
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
