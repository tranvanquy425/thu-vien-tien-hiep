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

window.LIB_DATA["pham-nhan-tu-tien"].characters = {
  updatedAt: "2026-06-11",
  count: 82,
  chars: [
    {
      id: "han-lap",
      name: "Hàn Lập",
      cn: "韩立",
      aliases: ["Anh ngố"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "da-roi" },
        { ten: "Hoàng Phong Cốc", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ — Trường Xuân công tầng 11",
      trangThai: "song",
      blurb: "Nhân vật chính. Xuất thân nông dân nghèo, trí tuệ vượt trội, tính cẩn thận và ẩn nhẫn. Vào Thất Huyền môn nhờ tam thúc tiến cử, được Mặc đại phu thu làm thân truyền đệ tử vì thể chất kỳ dị. Sở hữu bình thần bí — vật bí ẩn hút linh khí và sinh ra Thần Bí Dịch có khả năng thôi sanh dược thảo. Thông thạo y thuật ngân châm, từng dùng Trừu Tủy Hoàn chia nhỏ làm dược dẫn. Tự phối chế các thánh dược hiếm có nhờ Thần Bí Dịch. Thực chất đang tu Trường Xuân công — tên thật của vô danh khẩu quyết Mặc đại phu truyền. Hiện là đệ tử cấp thấp Hoàng Phong Cốc phụ trách Bách Dược Viên; đã bí mật chôn bình thần bí trong dược viên và ngụy trang bằng Tàn Phiến, đang mưu kế tìm chủ dược để tự luyện Trúc Cơ đan.",
      vaiTro: "Nhân vật chính",
      tinhCach: [
        { text: "Thành thật, nhẫn nhịn, không tranh chấp — lời dặn của cha từ nhỏ", chuong: 1 },
        { text: "Tinh ranh, kín đáo, hay quan sát và đánh giá người xung quanh", chuong: 3 },
        { text: "Kiên trì cực độ, dốc hết sức dù cơ thể đã kiệt lực", chuong: 4 },
        { text: "Trọng tình nghĩa, nhớ nhà, thương tiểu muội", chuong: 6 },
        { text: "Cẩn thận đề phòng, nhạy bén với những điều bất thường", chuong: 9 },
        { text: "Giữ bí mật tuyệt đối — bản năng mách bảo không tiết lộ cái bình cho bất kỳ ai, kể cả người thân", chuong: 12 },
        { text: "Sau nhiều năm khổ tu, tâm ý chín chắn già dặn hơn tuổi, không còn nhiệt huyết bốc đồng của thuở trẻ", chuong: 16 },
        { text: "Trải qua lần bị kề đao vào cổ, từ bỏ phần bản tính thuần phác: 'không có lợi không làm', thực dụng và đề phòng hơn", chuong: 21 },
        { text: "Chủ động vun đắp nợ nhân tình với Lệ Phi Vũ như 'quân cờ' dài hạn — tính toán sâu xa nhưng không phải kẻ ác", chuong: 22 },
        { text: "Bị ép vào cục diện tuyệt vọng vẫn không phó thác mạng vào tay người khác, chủ động gia tăng thực lực và tự nắm vận mệnh", chuong: 32 },
        { text: "Giữ bí mật tuyệt đối trước mọi người — kể cả với hảo hữu Lệ Phi Vũ, chỉ thổ lộ điều cần thiết tối thiểu để sinh tồn", chuong: 39 },
        { text: "Lạnh lùng, quyết đoán, sẵn sàng ra lệnh giết sạch khi cần — không do dự khi phải hy sinh người khác để tự bảo toàn", chuong: 78 },
        { text: "Thực dụng tới mức tàn nhẫn: nhân lúc hỗn loạn để mưu tính con đường thoát thân, coi sự hỗn loạn là cơ hội", chuong: 79 },
        { text: "Nhẫn nhịn trước trưởng bối ép buộc: ngoài mặt tươi cười khiêm nhường, trong lòng thống hận, quyết tâm đợi cơ hội thu hồi cả vốn lẫn lời", chuong: 150 }
      ],
      tabs: {
        diem: [
          { text: "Con thứ tư trong gia đình nông dân bảy miệng ăn, 10 tuổi khi rời nhà", chuong: 1 },
          { text: "Bị cả làng gọi hỗn danh \"Anh ngố\" dù thực ra thông minh nhất làng", chuong: 1 },
          { text: "Tay lạnh như băng — Mặc đại phu nhận xét không giống tay người sống", chuong: 8 },
          { text: "Thể nội sinh ra lương khí (chân khí lạnh) khi tu Vô danh khẩu quyết — khác hẳn nhiệt lưu chân khí của đồng môn", chuong: 7 },
          { text: "Thông thạo y thuật ngân châm, am hiểu sâu về dược lý — học qua y tịch của Mặc đại phu", chuong: 20 }
        ],
        kinhLich: [
          { chuong: 1, importance: "major", text: "Tam thúc tiến cử dự kỳ khảo thí Thất Huyền môn; Hàn Lập lần đầu rời thôn." },
          { chuong: 2, importance: "minor", text: "Tam thúc dẫn tới Thanh Ngưu trấn, đợi người của tông môn tại Xuân Hương tửu lâu." },
          { chuong: 3, importance: "normal", text: "Cùng hơn ba chục hài đồng đi xe ngựa năm ngày, tới Thái Hà sơn — tổng môn Thất Huyền môn." },
          { chuong: 4, importance: "major", text: "Trải qua trắc thí Luyện Cốt Nhai ba chặng; kiệt sức, không lên được đỉnh sơn nhai đúng giờ." },
          { chuong: 5, importance: "major", text: "Được sư huynh Trương Quân ôm lên đỉnh; thành ký danh đệ tử. Mặc đại phu chọn làm đồng tử chế thuốc tại Thần thủ cốc." },
          { chuong: 6, importance: "major", text: "Mặc đại phu chính thức nhận làm đệ tử ký danh, truyền Vô danh khẩu quyết với điều kiện tra khảo sau nửa năm." },
          { bridge: true, khoang: "c0006–c0007", text: "Khổ tu Vô danh khẩu quyết nửa năm; biết nội môn đãi ngộ hơn ngoại môn nên quyết không bỏ." },
          { chuong: 7, importance: "normal", text: "Phát hiện thể nội sinh lương khí lạnh — khác hẳn chân khí nóng của đồng môn tu Chính dương kinh." },
          { chuong: 8, importance: "major", text: "Qua khảo hạch; Mặc đại phu phát hiện thể chất kỳ dị, kích động thu làm thân truyền đệ tử." },
          { chuong: 9, importance: "major", text: "Được cấp thạch thất luyện công riêng và dược vật trân quý; đột phá luyện thành tầng 2 Vô danh khẩu quyết, bị nội thương nhẹ." },
          { chuong: 10, importance: "major", text: "Nhặt được cái bình kim loại màu xanh biếc nặng bất thường trên đường mòn trong núi." },
          { chuong: 12, importance: "normal", text: "Khảo sát bình thần bí — đập bằng thiết chùy tới mười hai phần công lực, bình vẫn không một vết xước, xác lập bản chất bất hoại. Quyết giấu kín bình vào túi da đeo cổ." },
          { chuong: 13, importance: "major", text: "Bình thần bí lộ công năng lần đầu — hút ánh sáng trắng li ti từ không gian ban đêm, ra chỗ trống hút càng mạnh, tạo bồn ánh sáng lớn." },
          { chuong: 14, importance: "major", text: "Sau 8 ngày bình hút ánh sáng, thân bình hiện phù hào vàng kim cổ xưa, nắp tự mở; bên trong lộ một giọt Thần Bí Dịch màu xanh biếc to bằng hạt đậu. Mặc đại phu dùng tiền thưởng mỗi tầng gấp đôi để thúc Hàn Lập tu điên cuồng." },
          { bridge: true, khoang: "c0014–c0015", text: "Bốn năm khổ luyện trong Thần Thủ Cốc bị phong tỏa; Hàn Lập 14 tuổi, trầm mặc kiên nghị, vừa tu khẩu quyết vừa học y tịch của Mặc đại phu." },
          { chuong: 15, importance: "normal", text: "Luyện tới tầng 3 Vô danh khẩu quyết thì đình trệ hơn một năm. Phát giác ánh mắt tham lam của Mặc đại phu — lòng đề phòng tăng dần. Mặc đại phu hạ sơn, để Hàn Lập một mình trong Thần Thủ Cốc." },
          { bridge: true, khoang: "c0016–c0019", text: "Ra ngoài quan sát trường đấu giang hồ giữa các đệ tử (phe Vương đại bàn vs phe Trương Trường Quý). Dùng thủ thuật bịa thân phận để moi tin từ Kim Đông Bảo. Quan sát Lệ sư huynh thi triển Phong Lôi đao pháp đả bại Triệu Tử Linh. Hứa chữa bệnh miễn phí cho Kim Đông Bảo." },
          { chuong: 20, importance: "major", text: "Cứu tỉnh Lệ sư huynh bằng ngân châm bên suối; vạch trần Lệ sư huynh bí mật dùng Trừu Tủy Hoàn cả viên nhiều năm để tăng võ công. Tự tiết lộ mình cũng từng dùng Trừu Tủy Hoàn nhưng chia một viên thành mười phần làm dược dẫn nên không bị hại." },
          { chuong: 21, importance: "major", text: "Lệ Phi Vũ (Lệ sư huynh) tỉnh lại liền kề trường đao vào cổ đòi diệt khẩu; Hàn Lập giữ trấn định, lý luận và đề nghị phát độc thề giữ bí mật — lén thủ thiết đồng phòng thân. Nguy hiểm được hóa giải, Lệ Phi Vũ tự xưng tên và hứa trả ơn. Hai người hẹn hôm sau giao thuốc giảm đau (chỉ thống dược) tại cốc khẩu Thần Thủ Cốc." },
          { chuong: 22, importance: "normal", text: "Hàn Lập phối xong 5 phần chỉ thống dược cho Lệ Phi Vũ; cố ý làm đúng 5 phần để năm nào đối phương cũng phải tới lấy thêm. Đêm đó đột ngột có nguy cơ tâm ma xâm lấn, mất dần khống chế cơ thể; Mặc đại phu vắng nên phải tự xử." },
          { chuong: 23, importance: "major", text: "Dùng bình an phù cha mẹ tặng trừ tâm ma thoát hiểm; công lực tăng đạt đỉnh phong tầng thứ ba. Tình cờ tìm lại bình thần bí đã quên nhiều năm; làm thí nghiệm cho thỏ uống nước pha lục dịch — thỏ da nổi vết phồng, thân thể trướng phồng kinh người." },
          { chuong: 24, importance: "normal", text: "Hai thỏ nổ banh thân; Hàn Lập quyết không đụng bình nữa. Giao thuốc cho Lệ Phi Vũ tại cốc khẩu; khổ luyện cả buổi chiều vẫn không phá vỡ ngưỡng tầng tư, nhận ra cần dược vật mới qua được." },
          { chuong: 25, importance: "major", text: "Phát hiện bình thần bí thôi sanh dược thảo: mấy cọng thảo chỉ một-hai năm dược tính qua một đêm thành vài chục năm. Đặt ra ba nan đề: kiểm độc, xác nhận bình tái sinh lục dịch, nắm phương pháp thôi sanh. Thỏ ăn thuốc bổ từ thảo được thôi sanh không trúng độc. Suy đoán điều kiện kích hoạt: bình chỉ phát dị biến vào đêm trời quang thấy sao trăng." },
          { chuong: 26, importance: "major", text: "Xác nhận bình tái sử dụng được: cứ khoảng 7 ngày sinh một giọt lục dịch sau khi hấp thu quang điểm. Nắm phương pháp: nhỏ trực tiếp nguyên chất một giọt lên một gốc cây tăng khoảng 100 năm tuổi/dược tính mỗi giọt; lục dịch chỉ giữ được một khắc sau khi rời bình. Nuôi tam ô thảo thành ngàn năm qua hai tháng. Quyết tâm giữ bí mật bình tuyệt đối." },
          { chuong: 27, importance: "major", text: "Tận dụng Mặc đại phu vắng mặt, dùng lục dịch nuôi dưỡng dược tài trân quý và tự tay phối chế thành công: Hoàng Long Đan, Thanh Linh Tán, Kim Tủy Hoàn, Dưỡng Tinh Đan — hơn mười bình thánh dược. Quyết cất giấu bình khi sư phụ về." },
          { chuong: 28, importance: "major", text: "Ăn Hoàng Long Đan và Kim Tủy Hoàn, ngay đêm đó đột phá thành công tầng thứ tư Trường Xuân công; ngũ cảm tăng vọt, cảm nhận được mọi việc trong phạm vi mười trượng. Giấu đột phá thật khi Mặc đại phu về kiểm tra, tự tin nhờ điều khiển được cỗ chân khí kỳ dị." },
          { chuong: 29, importance: "major", text: "Mặc đại phu (Mặc Cư Nhân) lộ chân tướng: ra tay điểm huyệt chế trụ Hàn Lập thần tốc, tuyên bố quan hệ hai bên chỉ là lợi dụng lẫn nhau." },
          { chuong: 30, importance: "major", text: "Mặc Cư Nhân tiết lộ toàn bộ thân thế: 30 tuổi thật nhưng bị tà khí xâm cốt lão hóa cực nhanh, chỉ còn sống thêm một năm; cần Hàn Lập luyện Trường Xuân công lên tầng tư để dùng Trường Xuân khí kích thích bí huyệt phá giải." },
          { chuong: 31, importance: "major", tieuDe: "Bị ép nuốt Thi Trùng Hoàn", text: "Mặc đại phu vạch trần việc Hàn Lập cố ý giấu tiến độ, dồn ép tâm lý tới mức Hàn Lập thất thủ. Bị ép nuốt Thi Trùng Hoàn — trùng noãn tiềm phục trong cơ thể một năm; không có giải dược thì trùng phá vỡ ăn sạch nội tạng, chết trong ba ngày ba đêm thống khổ. Hàn Lập khuất phục, hứa một năm luyện đến tầng tư." },
          { chuong: 32, importance: "normal", tieuDe: "Tự nắm vận mệnh", text: "Tự thử giải độc Thi Trùng Hoàn bằng Thanh Linh Tán nhưng thất bại. Từ bỏ ý phó thác mạng vào lòng thương của Mặc đại phu, quyết tâm gia tăng thực lực và tự tìm đường sống." },
          { bridge: true, khoang: "c0033–c0034", text: "Hơn nửa năm: bắt đầu giao dịch dược-đổi-võ định kỳ với Lệ Phi Vũ tại thủy đàm bí mật; học Cuồng Mãnh Kình và các võ công khác. Nhờ Hoàng Long Đan và Kim Tủy Hoàn đột phá từ tầng tư lên tầng năm Trường Xuân công." },
          { chuong: 34, importance: "normal", tieuDe: "Nhắm Trát Nhãn kiếm pháp", text: "Nhận ra các chiêu thức võ học thiếu nội lực chân khí sẽ vô dụng trước Mặc đại phu; đặt hết kỳ vọng vào Trát Nhãn kiếm pháp — môn kiếm pháp không cần chân khí. Thỏa thuận với Lệ Phi Vũ lén lấy kiếm phổ." },
          { chuong: 35, importance: "normal", tieuDe: "Nhận đống bí tịch Thất Tuyệt đường", text: "Lệ Phi Vũ đem cả túi lớn bí tịch trộm từ Thất Tuyệt đường tàng thư — hóa ra toàn bộ 74 quyển đều cùng tên 'Trát Nhãn kiếm phổ'. Hàn Lập kinh hãi và tức giận vì nguy cơ bị tuần đường hộ pháp phát hiện." },
          { chuong: 37, importance: "normal", tieuDe: "Chọn Trát Nhãn kiếm pháp", text: "Đọc trọn đống bí tịch, phán đoán Trát Nhãn kiếm pháp phù hợp vì 'tam bất luyện' của nó khớp đúng hoàn cảnh mình: không cần chân khí thành tựu, cần nghị lực lớn và thiên phú." },
          { chuong: 38, importance: "normal", tieuDe: "Phát hiện gian tế nội gián", text: "Đêm khuya xuống núi, nghe lén hai gian tế Dã Lang bang bàn kế hoạch ra tay với Thất Huyền môn; nhận ra đại quản sự phòng bếp — người từng bán thỏ cho hắn — chính là nội gián cài cắm." },
          { chuong: 39, importance: "normal", tieuDe: "Nhường công cho Lệ Phi Vũ", text: "Quyết định giao toàn bộ công lao bắt gian tế cho Lệ Phi Vũ lập công, vừa báo đáp ân tình kiếm phổ, vừa không tự đưa mình vào nguy hiểm. Suy ngẫm sâu về bản chất Trát Nhãn kiếm pháp — bí kỹ ám sát lợi dụng ánh sáng và sai lầm thị giác." },
          { chuong: 40, importance: "normal", tieuDe: "Học thuộc kiếm phổ suốt đêm", text: "Đọc bí tịch suốt đêm tới sáng. Quyết định ghi tạc toàn bộ vào trí nhớ thay vì sao chép — tránh để Mặc đại phu giám thị phát hiện. Nhận ra muốn luyện thành cần 2-3 năm, thời gian không đợi người." },
          { chuong: 41, importance: "normal", tieuDe: "Rời sơn cốc bế quan", text: "Trả bí tịch gốc cho Lệ Phi Vũ, tố giác gian tế Dã Lang bang (trù phòng quản sự) để Lệ Phi Vũ lập công. Đặt thợ rèn làm vỏ kiếm cải tiến bí mật, phụ kiện vô danh và chuông sắt. Đêm đó bỏ trốn khỏi sơn cốc Mặc đại phu, để lại thư hẹn bốn tháng sau gặp lại." },
          { chuong: 42, importance: "normal", tieuDe: "Ẩn tu khe núi", text: "Ẩn thân trong khe núi hoang vu hình chữ nhất, bắt đầu luyện Nhuyễn cốt công. Phát hiện Vân sí điểu (chim lông vàng) là tai mắt của Mặc đại phu nhưng không nỡ ra tay vì yêu thích nó. Luyện thành Liễm tức công và Ngụy nặc thuật tới hỏa hầu nhất định." },
          { chuong: 43, importance: "normal", tieuDe: "Luyện thành La Yên bộ", text: "Luyện La Yên bộ trong rừng gai nguy hiểm, dùng Dưỡng Tinh Đan trị thương. Ngay ngày cuối luyện thành La Yên bộ với vài phần hỏa hầu. Trường Xuân công đã đạt tầng thứ sáu — tầng cao nhất Mặc đại phu cấp." },
          { chuong: 44, importance: "normal", tieuDe: "Đòi giải dược trước", text: "Trở lại đúng hẹn nhưng hết sức cảnh giác. Cố ý giữ cửa mở, ép Mặc đại phu giao giải dược Thi Trùng Hoàn trước khi cho kiểm tra công lực. Giả vờ lộ đột phá tầng tư, thực tế nén ở tầng tư để che giấu thực lực tầng sáu." },
          { chuong: 45, importance: "major", tieuDe: "Mặc đại phu trở mặt — thoát hiểm", text: "Mặc đại phu bắt mạch rồi trở mặt ra lệnh 'Thắt' khống chế thân thể. Nhờ thực lực tầng sáu, khả năng phục hồi dị thường vượt dự tính của Mặc đại phu, Hàn Lập thoát ra. Cơ thể cứng như thiết bản khiến điểm huyệt của lão thất bại. Lần đầu rút đoản kiếm lộ nanh vuốt, tuyên bố quyết sống mái." },
          { chuong: 46, importance: "normal", tieuDe: "Ám sát một kiếm thất thủ", text: "Dùng bột trắng tạo màn khói, kết hợp Nhuyễn cốt công + Liễm tức công + Ngụy nặc thuật ẩn mình áp sát mặt đất. Dùng chuông sắt treo trần làm nghi binh để Mặc đại phu ngửa đầu nhìn lên, rồi đánh một kiếm chí mạng vào bụng lão. Kiếm thất thủ chỉ khoét rách y sam, bị lộ thân." },
          { chuong: 47, importance: "normal", tieuDe: "Đối chiến Ma Ngân Thủ", text: "Giao chiến với Mặc đại phu khi lão thi triển Ma Ngân Thủ. Thi triển La Yên bộ thoát khỏi màn chắn bạc của Ma Ngân Thủ, chạy tới góc phòng tái lập thế." },
          { chuong: 48, importance: "normal", tieuDe: "Trá ngữ dẫn dụ", text: "Thể lực mất hơn phân nửa, tay trái tê liệt; dùng trá ngữ làm Mặc đại phu khựng thế công. Lấy ra đoản kiếm thứ hai (chủy thủ ngắn) dùng cho chiêu cất giấu cuối cùng. Bày tư thế thân người uốn như cung tên lao tới." },
          { chuong: 49, importance: "normal", tieuDe: "Sáo Trung Sáo", text: "Xoay góc mũi kiếm tạo bạch quang chói mắt làm Mặc đại phu tạm mù. Dụ Mặc đại phu bắt mũi kiếm rỗng, bất ngờ rút tiêm trùy giấu bên trong đâm thẳng yết hầu lão. Lão né thoát nhờ bản năng thân thể vượt người thường — chỉ trầy gáy chảy máu." },
          { chuong: 50, importance: "major", tieuDe: "Hạ độc khống chế Mặc đại phu", text: "Vờ đề nghị giảng hòa, thả vũ khí. Tiết lộ đã bôi Triền Hương Ti — độc dược từ từ nhập cốt — lên tiêm trùy trước khi đâm trúng Mặc đại phu; tự học cách phối chế từ tờ phương thuốc kẹp trong dược thư lão quên bẵng. Tự tin tuyên bố tánh mạng Mặc đại phu nằm trong tay mình." },
          { chuong: 51, importance: "normal", tieuDe: "Rơi vào thế hạ phong", text: "Hạ độc Triền Hương Ti vào Mặc đại phu nhưng lão thản nhiên không sợ — hắc có chỗ dựa. Bị Thiết Nô (thủ hạ thân thể cứng như đá) bắt giữ, thiết trùy bị đánh văng, vai và đầu gối trọng thương. Bình tĩnh suy ra Mặc đại phu cố ý lưu tình vì mình 'có điểm đại dụng', tính dùng điểm này để mặc cả. Bị Mặc đại phu lấy mất hộ tâm kính." },
          { chuong: 52, importance: "normal", tieuDe: "Chứng kiến Thất Quỷ Phệ Hồn đại pháp", text: "Bị Thiết Nô khống chế áp chế không thoát được; chứng kiến Mặc đại phu tự cắm bảy dao cán đầu quỷ vào thân và phát động Thất Quỷ Phệ Hồn đại pháp." },
          { chuong: 53, importance: "normal", tieuDe: "Nhận thức thế giới thần quỷ có thật", text: "Tận mắt xem Mặc đại phu hồi phục tuổi trẻ — hóa thành mỹ nam tử ~30 tuổi. Lần đầu xác tín thế giới tu tiên/thần quỷ là có thật. Trấn tĩnh, giả ngốc thử dò xin được tha." },
          { chuong: 54, importance: "normal", tieuDe: "Bị Định Thần Phù khống chế", text: "Hiểu ra Mặc đại phu định cướp đoạt thân xác, cố giãy dụa bất thành. Bị dán Định Thần Phù lên gáy — mất hoàn toàn quyền khống chế cơ thể nhưng vẫn nghe nhìn được. Kỳ lạ: Trường Xuân công trong người tự kích động khi nhìn ký hiệu trên phù." },
          { chuong: 55, importance: "normal", tieuDe: "Bị đặt vào trận đồ đoạt xá", text: "Bị mang vào căn nhà đá kín, bị quăng nằm ngửa giữa đồ án/trận đồ khảm ngọc thạch. Nghe quỷ hồn 'đệ tam nhân' lần đầu lộ diện qua tiếng nói." },
          { chuong: 56, importance: "major", tieuDe: "Nguyên thần mạnh dị thường — thắng cuộc đoạt xá", text: "Bị chú ngữ thôi miên hôn mê; trong mộng hóa thành quang cầu xanh biếc lớn bằng nắm tay (nguyên thần cực mạnh), nuốt gọn quang cầu vàng nhỏ, đánh đuổi quang cầu xanh lớn nhưng suy yếu (đối phương tự tách bộ phận để trốn, chỉ còn 1/3). Độc chiếm lãnh địa." },
          { chuong: 57, importance: "major", tieuDe: "Thoát đoạt xá — Mặc đại phu chết", text: "Tỉnh lại, giành lại thân thể — đoạt xá thất bại. Xác nhận Mặc đại phu đã chết (hóa lão cực độ, mắt trợn tròn). Định Thần Phù biến thành tro bụi. Phát hiện quang cầu (Dư Tử Đồng) còn trốn trong góc nhà đá; gọi đúng tên, Dư Tử Đồng thừa nhận thân phận và bắt đầu khai báo." },
          { chuong: 58, importance: "normal", tieuDe: "Nghe Dư Tử Đồng tự khai lai lịch", text: "Nghe Dư Tử Đồng (nguyên thần) kể toàn bộ quá khứ và chân tướng vụ Mặc đại phu. Không hoàn toàn tin nhưng tự suy ra bảy tám phần chân tướng." },
          { chuong: 59, importance: "normal", tieuDe: "Vạch trần toàn bộ âm mưu", text: "Tỉnh táo suy luận, vạch trần âm mưu Dư Tử Đồng: kẻ chủ mưu thật giăng bẫy Mặc đại phu và mình đồng quy vu tận. Nghe tam đại thiết tắc của đoạt xá. Dư Tử Đồng dụ làm đồ đệ gia tộc tu tiên, chưa nhận. Xác nhận tu Trường Xuân công tới tầng 6 (Dư Tử Đồng xác nhận)." },
          { chuong: 60, importance: "major", tieuDe: "Phun độc diệt nguyên thần Dư Tử Đồng", text: "Dùng mưu vờ đồng ý hợp tác để câu giờ moi thông tin xong rồi ra tay: phun độc dịch bằng ống đồng trúng nguyên thần Dư Tử Đồng, sau đó rút Ngọc Đái đoản kiếm chém xuống. Dư Tử Đồng bị diệt." },
          { chuong: 61, importance: "major", tieuDe: "Kết liễu nguyên thần Dư Tử Đồng", text: "Dùng thất độc thủy (ngũ độc thủy cải tiến thêm Thổ cô hoa) cùng nhuyễn kiếm kết liễu hoàn toàn nguyên thần Dư Tử Đồng. Sau khi giải thoát, đối mặt cự hán thiết nô đứng gác ngoài cửa đá." },
          { chuong: 62, importance: "major", tieuDe: "Phát hiện di thư Mặc đại phu — kỳ độc thi trung hoàn", text: "Lục soát thi thể Mặc đại phu, phát hiện di thư cài sẵn: lão đã hạ kỳ độc thi trung hoàn (phát tác 1-2 năm, chỉ noãn dương bảo ngọc mới giải) từ trước và đặt giao dịch ràng buộc — Hàn Lập phải tới nhà lão an bài thân nhân, đổi lấy gả con gái, nửa gia sản và noãn dương bảo ngọc. Chấp nhận giao dịch." },
          { chuong: 63, importance: "major", tieuDe: "Khống chế cự hán thiết nô — nhận ra Trương Thiết", text: "Dùng Dẫn hồn chung và máu của mình khống chế thành công cự hán thiết nô làm thuộc hạ phục tùng tuyệt đối. Nhìn kỹ mặt cự hán, rúng động nhận ra đây chính là di thể bạn thân Trương Thiết — hồn phách đã mất, bị Mặc đại phu cải tạo thành thi nhân." },
          { chuong: 64, importance: "normal", tieuDe: "Đặt tên Khúc Hồn — phi tang hiện trường", text: "Đặt tên 'Khúc Hồn' cho cự hán di thể Trương Thiết. Phi tang toàn bộ hiện trường, chôn thi thể Mặc đại phu, ra lệnh Khúc Hồn san phẳng nhà đá." },
          { chuong: 65, importance: "major", tieuDe: "Giả bút tích — trở thành Hàn thần y", text: "Hơn nửa năm sau, giả bút tích thư Mặc đại phu che giấu cái chết, tiếp quản chức trị bệnh của Thần thủ cốc. Trở thành 'thần y trẻ tuổi' nổi danh khắp Thất Huyền môn; Mã phó môn chủ chấp thuận, cấp bổng lộc. Phát hiện 'Trường sinh kinh' của Mặc đại phu thực ra là bí tịch Trường Xuân công ghi thêm hai tầng công pháp tiếp theo." },
          { chuong: 66, importance: "normal", tieuDe: "Quy định chuông cốc — tái ngộ Vũ Nham", text: "Thương lượng với Mã phó môn chủ giành toàn quyền quản lý Thần thủ cốc, đặt chuông lớn tại cửa để bí mật dùng bình thần bí. Tái ngộ Vũ Nham, cố ý tăng liều thuốc trả đũa nhưng vẫn chữa khỏi. Xác định phải rời môn sau một năm vì vật âm hàn ở đan điền." },
          { chuong: 67, importance: "major", tieuDe: "Luyện thành Hỏa Đạn Thuật và Thiên Nhãn Thuật", text: "Xác nhận đỉnh phong tầng sáu Trường Xuân công. Giải mã cổ ngữ ba tháng, luyện năm pháp thuật cuối bí tịch; chỉ luyện thành hai: Hỏa Đạn Thuật (hỏa cầu nung chảy tinh cương) và Thiên Nhãn Thuật (quan sát pháp lực). Ba môn còn lại — Định Thần Phù, Ngự Phong Quyết, Khống Vật Thuật — chưa nhập môn được." },
          { chuong: 68, importance: "normal", tieuDe: "Theo Mã Vinh tới cứu Lý trưởng lão", text: "Xác nhận Thiên Nhãn Thuật giúp quan sát pháp lực dưới dạng bạch quang, đậm nhất ở đan điền. Mã Vinh cầu cứu cứu Lý trưởng lão bị trúng kịch độc Dã Lang bang hôn mê. Hàn Lập do dự nhưng quyết định theo Mã Vinh đi." },
          { chuong: 69, importance: "normal", tieuDe: "Tới nhà Lý trưởng lão — thấy Lệ Phi Vũ vướng lưới tình", text: "Tới nhà Lý trưởng lão, được đón tiếp như 'Hàn thần y'; nhìn thấu những lời chào hỏi giả dối, sinh hảo cảm với người giữ thân phận. Bất ngờ thấy Lệ Phi Vũ đang ân cần an ủi một thiếu nữ — bộ dáng vướng lưới tình." },
          { chuong: 70, importance: "normal", tieuDe: "Thấy bệnh tình Lý trưởng lão — thử thách y thuật khó nhất", text: "Nhìn thấu quỷ kế chia rẽ của Mã phó môn chủ nhưng không bị lôi kéo. Lần đầu trực tiếp chứng kiến bệnh tình Lý trưởng lão: toàn thân nổi độc ban đủ màu, hắc khí phủ mặt khi thở — trúng độc cực nặng. Thử thách y thuật khó nhất từ trước đến nay." },
          { chuong: 71, importance: "normal", tieuDe: "Chẩn đoán và dùng Thanh Linh Tán", text: "Xác định Lý trưởng lão trúng hỗn hợp nhiều loại độc — một chẩn đoán bất ngờ ngay cả với Hàn Lập. Dùng Thanh Linh Tán (viên đỏ trong bình lam nhỏ, hòa nước ấm thành nước thuốc màu hồng đỏ) trị giải; Thanh Linh Tán không thể giải độc còn tiềm phục trong thân Lý trưởng lão." },
          { chuong: 72, importance: "normal", tieuDe: "Bức độc — giải ách Lý trưởng lão", text: "Dùng kim châm (ngân châm) kết hợp với nội lực Mã phó môn chủ và Tiễn trưởng lão bức huyết độc qua huyệt đạo ra ngoài. Mã Vinh lấy chậu nước. Toàn bộ độc tố tiêu trừ; Lý trưởng lão sẽ tỉnh lại ngày hôm sau." },
          { chuong: 73, importance: "normal", tieuDe: "Tiết lộ biết về Trừu Tủy Hoàn của Lệ Phi Vũ", text: "Sau khi Lý trưởng lão hồi phục, Hàn Lập thẳng thắn nói với Lệ Phi Vũ rằng mình biết về Trừu Tủy Hoàn. Lệ Phi Vũ xác nhận chỉ còn sống được thêm mấy năm, nhưng từ chối phế bỏ võ công; tuyên bố trong khi còn sống thì Trương Tụ Nhi là của mình một mình." },
          { chuong: 74, importance: "major", tieuDe: "Luyện thành Ngự Phong Quyết", text: "Sau nhiều thất bại, cuối cùng luyện thành Ngự Phong Quyết — pháp thuật khinh thân dùng pháp lực chứ không dùng thể lực, chỉ bay được một mình (không mang người khác), cần thiết cho tu sĩ cấp thấp. Hàn Lập đã 18 tuổi." },
          { chuong: 75, importance: "major", tieuDe: "Trường Xuân công đột phá tầng 8", text: "Nhờ ngày ngày ăn linh dược, Trường Xuân công đột phá lên tầng 8; pháp lực vượt qua nhục thân Dư Tử Đồng lúc còn sống. Ngộ ra Định Thần Phù và Khống Vật Thuật cần vật liệu/vật phẩm đặc biệt của tu tiên giả — lý do chưa luyện được. Dung hợp La Yên bộ và Ngự Phong Quyết tạo thân pháp xuất quỷ nhập thần. Cải tiến Hỏa Đạn Thuật — chỉ thi triển nửa thuật, giữ hỏa cầu trên tay làm vũ khí cận chiến." },
          { chuong: 76, importance: "normal", tieuDe: "Đại biến — Thất Huyền môn bị phục kích", text: "Đoàn đàm phán Thất Huyền môn (do Ngô phó môn chủ dẫn đầu) bị Dã Lang bang phục kích tại Lạc Sa pha bằng lượng lớn nỏ liên châu quân dụng từ dưới đất bắn lên; phần lớn bị giết. Lệ Phi Vũ trốn thoát về báo tin." },
          { chuong: 77, importance: "normal", tieuDe: "Phân tích chiến lược địch — đề ra đối sách", text: "Nhận tin từ Lệ Phi Vũ về việc Ngô phó môn chủ và nhiều trưởng lão bị giết. Phân tích chiến lược Dã Lang bang: vây phân đường không đánh, dồn cao thủ công Lạc Nhật phong. Quyết định tới nhà Lý trưởng lão tập hợp người, rồi vào phòng thu gom vật phẩm cần thiết." },
          { chuong: 78, importance: "major", tieuDe: "Triệu Khúc Hồn — ra lệnh giết sạch địch", text: "Triệu Khúc Hồn ra từ phòng nhỏ (phá vỡ cửa gỗ, khí thế như yêu ma). Lần đầu gặp nhóm Dã Lang bang do Tôn chấp pháp dẫn vào Thần Thủ Cốc bắt 'thần y'. Lạnh lùng ra lệnh cho Khúc Hồn giết sạch trừ tên Lam y, bắt sống để tra khảo." },
          { chuong: 79, importance: "normal", tieuDe: "Khai thác tin tức — quyết thừa loạn", text: "Đẩy việc tra khảo Lam y chấp pháp cho Lệ Phi Vũ; nhận được tin Thiết thương hội và Đoạn thủy môn cũng tấn công cùng Dã Lang bang. Quyết định thừa loạn, ra lệnh cho Lệ Phi Vũ hội họp người của mình, sẵn sàng giết sạch ai phát hiện ra bọn họ." },
          { chuong: 80, importance: "normal", tieuDe: "Chạm trán Đoạn Thủy môn", text: "Cùng Lệ Phi Vũ và Khúc Hồn chạy tới Lý trạch tiếp viện; bị mười tên áo xanh Đoạn Thủy môn chặn vây cách hơn một dặm. Điềm nhiên hỏi Lệ Phi Vũ ai sẽ ra tay; không tự ra trận, đứng quan sát trong khi Lệ Phi Vũ và Khúc Hồn tiêu diệt địch." },
          { bridge: true, khoang: "c0081–c0083", text: "Cùng Lệ Phi Vũ cải trang thành người của Đoạn Thủy Lưu, bí mật thâm nhập vào khu vực quanh Lạc Nhật Phong để quan sát tình hình trận địa." },
          { chuong: 84, importance: "major", tieuDe: "Lần đầu lộ thực lực trước đám đông", text: "Cởi bỏ ngụy trang, thi triển La Yên bộ kết hợp Ngự Phong Quyết — tốc độ kinh người, di chuyển như bóng ma. Trong nháy mắt hạ sát hơn mười đệ tử Đoạn Thủy môn mà địch không kịp phản ứng. Lần đầu công khai phô thực lực trước đám đông trong hoàn cảnh chiến đấu thật sự." },
          { chuong: 85, importance: "normal", tieuDe: "Tìm hiểu tử khế đấu", text: "Hỏi Mã Vinh về tình hình Lạc Nhật Phong và hai bên giao chiến; biết được thể lệ tử khế đấu lần đầu." },
          { chuong: 87, importance: "major", tieuDe: "Ký tử khế — phô thân pháp trước Vương Tuyệt Sở", text: "Theo Lệ Phi Vũ lên Lạc Nhật Phong xin gia nhập huyết đấu. Khi Vương môn chủ định từ chối, thi triển thân pháp cực nhanh — thoắt biến mất rồi xuất hiện ngay sau lưng Vương Tuyệt Sở mà không ai kịp cảm nhận — khiến cả Vương môn chủ lẫn ba vị sư thúc kinh ngạc, nghi ngờ lai lịch. Chính thức ký tên vào sinh tử thư, gia nhập trận huyết đấu." },
          { chuong: 88, importance: "major", tieuDe: "Dùng Thiên Nhãn Thuật soi Chu Nho", text: "Nhận ra Chu Nho dùng phù chú cấp bậc cao hơn Định Thần Phù. Lén niệm Thiên Nhãn Thuật quan sát, thấy bạch quang mờ nhạt trên thân Chu Nho — xác nhận đây là người tu tiên nhưng pháp lực thấp hơn mình. Vừa mừng vì mình thâm hậu hơn, vừa lo vì chưa rõ pháp thuật đối phương lợi hại ra sao." },
          { chuong: 89, importance: "minor", text: "Đứng quan sát trận đối đầu giữa hán tử râu ria (sư thúc Thất Huyền môn) và Chu Nho. Liếc nhìn Vương môn chủ đang thương lượng cách đối phó kim quang." },
          { chuong: 90, importance: "major", tieuDe: "Nhận ra khẩu quyết Chu Nho = Khu vật thuật của mình", text: "Khi Chu Nho kích hoạt hộp đen phóng luồng sáng giết hán tử cao thủ, Hàn Lập nhận ra ngay: khẩu quyết và thủ thế Chu Nho dùng để điều khiển luồng sáng giống hệt Khu vật thuật của mình — xác nhận Khu vật thuật là thuật của giới tu tiên. Trong khi cả phe Thất Huyền môn tuyệt vọng, riêng hắn mừng rỡ; nảy sinh ý muốn giết người đoạt bảo, hứng thú với người tu tiên càng lúc càng lớn." },
          { chuong: 91, importance: "normal", text: "Dùng Khu vật thuật (Khống Vật Thuật) đoạt kiếm phù từ tay Chu Nho ngay giữa trận huyết đấu; đây là lần đầu tiên áp dụng thực chiến thành công với vật phẩm tu tiên thật sự. Chu Nho sửng sốt, phải nhận Hàn Lập là tu sĩ và bỏ thế thượng phong." },
          { chuong: 92, importance: "normal", text: "Vận pháp lực kẹp kiếm phù giữa hai tay, tia sáng tiêu tán — lộ ra đạo phù lục vẽ thanh tiểu kiếm màu xám, hàn khí bức người. Cất vào ngực. Dùng Ngự Phong Quyết tiếp cận áp đảo tâm lý Chu Nho; giả danh người gia tộc tu tiên. Chu Nho sợ hãi khai tên thật là Tần Diệp Lĩnh, đệ tử Diệp gia." },
          { chuong: 93, importance: "major", tieuDe: "Diệt Chu Nho — đoạt ba vật phẩm", text: "Dùng mưu trả lại kiếm phù nhử Chu Nho ra mặt, đợi hắn bỏ Kim Quang Tráo rồi dùng Hỏa Đạn Thuật kết liễu. Từ tro tàn thu được ba vật: (1) đạo phù lục kim quang / Kim Quang Tráo còn sót, (2) lệnh bài tam giác khắc 'Thăng Tiên' và 'Lệnh', (3) Tần thị tộc phổ (gia phả họ Tần của Chu Nho). Phe Thất Huyền môn kinh ngạc; Chu Nho tử trận." },
          { chuong: 94, importance: "major", tieuDe: "Diệt Dã Lang bang trong tử đấu trường", text: "Sử dụng ẩn thân và độn thuật để mũi tên của đối phương xuyên qua người, sau đó giết Cổ Thiên Long và hơn 50 người Dã Lang bang còn lại trong tử đấu trường. Dã Lang bang bị xóa sổ hoàn toàn tại Lạc Nhật Phong." },
          { bridge: true, khoang: "c0094–c0095", text: "Đuổi các bang phái đồng minh Dã Lang bang ra khỏi Lạc Nhật Phong bằng một lời lạnh lùng 'còn không cút đi', mấy ngàn người tranh nhau tháo lui. Lặng lẽ xen vào đám người xuống núi để biến mất. Năm ngày sau quay lại tìm Khúc Hồn rồi về cốc." },
          { chuong: 95, importance: "normal", text: "Tin đồn 'hỏa ma' lan khắp nơi — dân gian đồn hắn đã bị tiên lôi đánh chết. Đóng cửa không tiếp khách. Khổ luyện Khu vật thuật liên tục ba ngày dùng kiếm phù cho đến khi nắm vận dụng thực tế nhuần nhuyễn." },
          { chuong: 96, importance: "normal", tieuDe: "Ngộ ra ba hạn chế của kiếm phù", text: "Sau khi luyện tập, tự tổng kết ba điểm yếu: (1) tiêu hao pháp lực khổng lồ, chỉ dùng được khoảng một khắc; (2) có hiệu quả tốt nhất trong phạm vi 20 trượng, từ 20-30 trượng bắt đầu ì ạch, ngoài 30 trượng không dùng được; (3) số lần sử dụng/tuổi thọ hữu hạn. Dùng Thiên Nhãn Thuật gây uy hiếp tâm lý Vương Tuyệt Sở. Lẻn vào phòng ngủ Vương Tuyệt Sở để cảnh cáo và thiết lập thế thương lượng." },
          { chuong: 97, importance: "normal", text: "Tới sớm nửa ngày, gặp riêng Vương Tuyệt Sở trước giờ hẹn chính thức; thương lượng ngầm 'giao dịch có lợi cho cả hai bên'. Biến mất trước giờ hẹn để tránh cuộc họp chính thức của toàn bộ Thất Huyền môn." },
          { chuong: 98, importance: "normal", tieuDe: "Rời Thất Huyền môn — tặng đan dược cho Lệ Phi Vũ và Vương Tuyệt Sở", text: "Để lại bình ngọc chứa Dưỡng Tinh Đan và thuốc khác cho Vương Tuyệt Sở; để lại thuốc kéo dài tuổi thọ cho Lệ Phi Vũ. Ghi thư từ biệt kèm dấu cười. Cùng Khúc Hồn ngồi xe ngựa rời đi hướng đông, Vân sí điểu đậu trên vai, không quay lại nhìn." },
          { chuong: 99, importance: "major", tieuDe: "Về thôn làng quan sát đám cưới em gái — rời hẳn", text: "Dùng linh thức quan sát từ xa cảnh đám cưới em gái trong thôn — cha mẹ đầu bạc lưng còng, tam thúc, Hàn Thiết. Em gái ngồi trên xe hoa rời đi. Quyết định vĩnh viễn không trở lại, tiếp tục con đường tu tiên độc lập. Đây là trang cuối Quyển 1." },
          { chuong: 100, importance: "normal", text: "Cùng Khúc Hồn đến Gia Nguyên Thành — cố hương Mặc đại phu — sau ba tháng đi thuyền. Bước xuống bến đò nhỏ hẻo lánh, giả dạng thiếu niên bình thường, Vân sí điểu đậu trên vai." },
          { bridge: true, khoang: "c0101–c0102", text: "Bị hai đầu mục bến đò Tôn nhị cẩu và Hắc Hùng nhắm vào tài phú; bị dẫn vào hẻm Hắc Thuỷ phục kích bởi hơn hai mươi đại hán." },
          { chuong: 103, importance: "normal", tieuDe: "Giết Hắc Hùng — thu phục Tôn nhị cẩu", text: "Dùng thân pháp quỷ dị lách ra sau lưng Hắc Hùng, đâm xuyên yết hầu bằng nhuyễn kiếm kết liễu hắn. Ép Tôn nhị cẩu nuốt Hủ tâm hoàn (độc khống chế hằng tháng), thu phục hắn làm thủ hạ, ném bạc vụn hơn trăm lạng để dọn sạch hiện trường." },
          { chuong: 104, importance: "normal", tieuDe: "Đọc di thư Mặc đại phu", text: "Tại khách sạn Hồi Nguyên, đọc kỹ di thư tỉ mỉ của Mặc đại phu về Kinh Giao hội, năm phu nhân, nghĩa nữ, hai đồ đệ và huynh đệ kết bái. Kiểm tra âm hàn chi độc trong đan điền đã ngưng kết thành hạt đậu đen — ước tính còn hai tháng trước khi bộc phát. Quyết tâm đoạt Noãn dương bảo ngọc." },
          { bridge: true, khoang: "c0104–c0105", text: "Qua Tôn nhị cẩu, nắm được bố cục ba đại bang (Thiên Phách môn, Huynh đệ minh, Kinh Giao hội) và tin Mặc đại phu đã chết một năm trước, Ngô Kiếm Minh đính ước cưới Mặc Ngọc Châu để đoạt Noãn dương bảo ngọc làm của hồi môn." },
          { chuong: 106, importance: "normal", tieuDe: "Nhận ra người tu tiên tại tửu lâu", text: "Ngồi tại Hương Gia tửu lâu đối diện Mặc phủ, dùng Thiên Nhãn Thuật nhận ra người áo lam (Lão Tam) là tu tiên pháp lực thâm hậu hơn mình nhiều, suýt bị chú ý. Nghe lén hai người tu tiên bàn về Thăng Tiên hội tổ chức tại Lam Châu và Trúc cơ đan — biết mình đạt tầng 7-8 tức miễn cưỡng đủ tư cách tham gia." },
          { bridge: true, khoang: "c0107–c0108", text: "Quan sát Mặc Ngọc Châu đi săn trở về; canh ba lén nhập Mặc phủ, vượt bẫy ám tiễn dày đặc bằng thân pháp, nghe lén Nghiêm thị và Mặc Thải Hoàn bàn về Ám Đà và kẻ giả mạo họ Ngô." },
          { chuong: 109, importance: "normal", tieuDe: "Ra mặt tại Mặc phủ", text: "Ném Văn long giới (nhẫn tín vật) vào phòng Nghiêm thị, tự xưng là đệ tử Mặc đại phu phụng lệnh đến bái kiến 'Tứ sư mẫu'. Nghiêm thị khớp hai chiếc nhẫn hình rồng xác nhận tín vật thật; đọc thư mạo danh xác nhận thân phận. Hàn Lập quan sát phản ứng sư mẫu, biết mình là con rể tương lai theo thư." },
          { chuong: 110, importance: "normal", tieuDe: "Kháng thuật mê hoặc của Tam nương", text: "Các phu nhân kéo tới. Một thiếu phụ cực kỳ kiều diễm (Tam nương) xuất hiện; Hàn Lập thất thần đắm chìm trong nhan sắc ngờ là mê hồn thuật. Khí lạnh từ đan điền tự vận chuyển một vòng kinh mạch kéo hắn tỉnh lại. Tam nương thấy hắn kháng lại, trong mắt lóe tia dị sắc." },
          { bridge: true, khoang: "c0111–c0112", text: "Gặp đủ bốn phu nhân có mặt tại Mặc phủ; Mặc Thải Hoàn đưa hắn vào căn phòng đầu hồi của Mặc phủ. Chứng kiến các phu nhân giải mã ám thư bằng bột màu từ long văn giới chỉ. Mặc Thải Hoàn đòi 7-8 nghìn lượng đan dược phí, Hàn Lập từ chối." },
          { chuong: 113, importance: "normal", tieuDe: "Tặng Oanh Hương Hoàn cho Mặc Thải Hoàn", text: "Đưa cho Mặc Thải Hoàn viên đan màu đỏ tươi thơm ngát — Oanh Hương Hoàn, ban đầu điều chế cho Lệ Phi Vũ. Không có công dụng tu luyện, chỉ xua đuổi côn trùng và tỏa hương mê người. Mặc Thải Hoàn ngờ là xuân dược nhưng chưa xác định." },
          { chuong: 114, importance: "normal", tieuDe: "Dùng câu cháu Tam phu nhân qua mặt Ngô Kiếm Minh", text: "Trong sân Mặc phủ gặp Mặc Ngọc Châu và Ngô Kiếm Minh; Yến Ca (đại đồ đệ Mặc đại phu) cũng có mặt. Ngô Kiếm Minh hỏi gắt thân phận — Hàn Lập đáp mình là cháu Tam phu nhân, tạm thời giải tỏa nghi ngờ." },
          { chuong: 115, importance: "normal", tieuDe: "Đối mặt các phu nhân mặc tang trắng — dùng linh thức dò xét", text: "Trước khi vào phòng, dùng linh thức quét toàn bộ không gian để phát hiện phục binh. Đối mặt đám phu nhân mặc áo tang trắng; Nhị phu nhân Lý thị lên tiếng cáo buộc. Ngũ phu nhân Vương thị yêu cầu Hàn Lập thuật lại cái chết Mặc đại phu." },
          { chuong: 116, importance: "normal", tieuDe: "Phô Hỏa đạn thuật — phá mê dược thiên nhân túy", text: "Tạo hỏa cầu lớn cỡ miệng chén rượu trên đầu ngón tay, búng vào bàn bên cạnh Lưu thị — bàn biến thành tro. Phát hiện nến trắng tẩm thiên nhân túy (mê dược); nhờ phương pháp tự chế đề phòng độc/mê hương từ thời Thất Huyền môn nên hoàn toàn miễn nhiễm." },
          { chuong: 117, importance: "normal", tieuDe: "Đàm phán — kể lại cái chết Mặc đại phu", text: "Nghiêm thị dùng âm hàn chi độc trong người hắn làm quân bài. Hàn Lập đáp: trước khi độc phát, hắn không ngại giết sạch toàn phủ. Hai bên chọn đàm phán. Hàn Lập kể lại toàn bộ chuyện cũ: bị Mặc đại phu hạ độc ép luyện Trường Xuân công, âm mưu đoạt xá, vai trò Dư Tử Đồng. Yêu cầu Nghiêm thị giao Noãn dương bảo ngọc, bị từ chối vì Mặc phủ đang nguy cơ diệt môn." },
          { chuong: 118, importance: "normal", tieuDe: "Đề nghị nhị tuyển nhất", text: "Phá mị thuật Lưu thị bằng Trường Xuân công. Giải thích giới tu tiên không được tùy tiện giết người phàm. Đề nghị lựa chọn 1: toàn Mặc phủ rời Lam Châu ẩn cư bình an — chỉ Lý thị hơi máy động. Lựa chọn 2: (chưa lộ cuối chương)." },
          { chuong: 119, importance: "normal", tieuDe: "Chốt điều kiện — nghe tin Thần tiên đại hội", text: "Chốt điều kiện với Nghiêm thị: có thể tiêu diệt thủ lĩnh MỘT trong hai bang đối địch. Cho các phu nhân một ngày cân nhắc. Trở về khách sạn, nghe Tôn nhị cẩu báo tin: tu tiên giả sẽ họp Thần tiên đại hội tại phụ cận thành Gia Nguyên. Tin từ đầu mục Tứ bình bang tình cờ nghe được khi giả chết bằng Quy tức công. Hàn Lập kích động — đây là cơ hội trăm năm tiếp xúc giới tu tiên." },
          { chuong: 120, importance: "major", tieuDe: "Lên kế hoạch thâu tóm Tứ bình bang", text: "Quyết định cài Tôn nhị cẩu thay thế Trầm Trọng Sơn làm bang chủ bù nhìn của Tứ bình bang. Điểm yếu của Trầm Trọng Sơn: hay lui tới Tiêu Tương Viện gặp hoa khôi Tiểu Kim Chi. Trao Dẫn hồn chung cho Tôn nhị cẩu dùng khống chế Khúc Hồn — thêm cơ chế khóa máu (máu chủ nhân gốc) để không ai đoạt chuông. Cử Vân sí điểu theo dõi Tôn nhị cẩu. Mục tiêu thật: bắt sống đôi nam nữ tu tiên đang đi về phía đại hội." },
          { chuong: 121, importance: "normal", tieuDe: "Cải trang đột nhập Tiêu Tương Viện", text: "Cải trang thành tiểu nhị, tự tay bưng rượu thức ăn vào phòng riêng của Trầm Trọng Sơn ở Tiêu Tương Viện. Quan sát thực lực Trầm Trọng Sơn và tam đại hộ pháp; nhận ra Trầm Tam nghi ngờ mình." },
          { chuong: 122, importance: "major", tieuDe: "Dùng Tiêu Hồn Tán diệt Tứ bình bang cũ", text: "Đã trộn Tiêu Hồn Tán vào rượu từ trước; uống Thanh Linh Tán giải độc trước. Trầm Trọng Sơn, tam đại hộ pháp và các kỹ nữ (gồm Kim Chi) đều chết. Đến Mặc phủ gặp ba nghĩa nữ của Mặc đại phu — Mặc Ngọc Châu, Mặc Thải Hoàn, Mặc Phượng Vũ." },
          { chuong: 123, importance: "normal", tieuDe: "Đàm phán với Nghiêm thị — chỉ nhận diệt một mục tiêu", text: "Từ chối lấy bất kỳ tiểu thư Mặc phủ nào. Đặt lại điều kiện: chỉ giết trang chủ Độc Bá sơn trang Âu Dương Phi Thiên đổi lấy Noãn dương bảo ngọc. Buộc phu nhân nuốt thuốc làm con tin hóa học. Yêu cầu ngựa và chân dung Âu Dương Phi Thiên." },
          { chuong: 124, importance: "normal", tieuDe: "Nhận di cảo y đạo — gặp Tịch Thiết Ngưu", text: "Rời Mặc phủ; Mặc Phượng Vũ đuổi theo nhờ lấy lại di cảo y đạo của cha — Hàn Lập giao cho nàng. Về khách điếm gặp Tôn nhị cẩu và Tịch Thiết Ngưu — nhân chứng nghe lén đôi tu tiên giả bàn về Thần tiên đại hội." },
          { chuong: 125, importance: "major", tieuDe: "Suy ra Thái Nam cốc — bố trí xong giang hồ Gia Nguyên Thành", text: "Từ lời kể Tịch Thiết Ngưu suy ra địa điểm đại hội là Thái Nam sơn cực nam Lam Châu. Phong Tịch Thiết Ngưu làm phó bang chủ. Tặng Tôn nhị cẩu giải độc đan giải trừ vĩnh viễn Hủ tâm hoàn. Rời Gia Nguyên Thành — hai tháng sau tới Thái Nam sơn." },
          { chuong: 126, importance: "major", tieuDe: "Trị lành hàn độc — ám sát Âu Dương Phi Thiên — gặp Vạn Tiểu Sơn", text: "Dùng Noãn dương bảo ngọc (dị bảo tự hút linh khí) áp vào đan điền hơn 15 ngày, trị lành hoàn toàn hàn độc. Hồi tưởng: đã ám sát Âu Dương Phi Thiên bằng một kiếm phù khi hắn một mình ngắm trăng — Phách vương giáp toàn thân vô dụng trước linh khí kiếm. Tại Thái Nam sơn, gặp Vạn Tiểu Sơn — xác nhận là tu tiên giả qua Thiên Nhãn Thuật; nhận ra sườn núi phủ sương mù chính là Thái Nam cốc." },
          { chuong: 127, importance: "normal", tieuDe: "Moi tin về hệ thống tu tiên từ Vạn Tiểu Sơn", text: "Dùng cách tán gẫu khéo léo moi từ Vạn Tiểu Sơn toàn bộ kiến thức tu tiên giới: hệ thống cảnh giới ba giai đoạn, thọ mệnh theo từng cấp, bốn loại linh căn và tỉ lệ xuất hiện, bảy môn phái Việt quốc. Tiếc nuối khi đường tới cốc quá ngắn, nghe chưa đủ." },
          { chuong: 128, importance: "normal", tieuDe: "Vào Thái Nam tiểu hội", text: "Thừa nhận với Vạn Tiểu Sơn là tán tu, không thuộc gia tộc nào. Theo Vạn Tiểu Sơn qua sương mù trận pháp, lần đầu bước vào Thái Nam tiểu hội — sự kiện giao dịch năm năm một lần của tiểu bối tu tiên Lam Châu. Tự nhắc phải đề phòng vì ai cũng có thể tiêu diệt mình." },
          { chuong: 129, importance: "normal", tieuDe: "Bị Thanh Nhan chân nhân nghi ngờ", text: "Gặp lão trưởng bối quản lý Thái Nam cốc — Thanh Nhan chân nhân — người nhận ra Hàn Lập là mộc-thuộc-tính tán tu Luyện Khí tầng thứ tám và tỏ thái độ nghi ngờ tâm thuật bất chánh. Hàn Lập khéo léo cáo từ mà không để lộ thêm điều gì." },
          { chuong: 130, importance: "normal", tieuDe: "Từ chối nhóm Tùng Văn — tự mình dạo chợ", text: "Được nhóm tán tu do Tùng Văn đạo sĩ dẫn đầu mời cùng đội, nhận đạo phù chìa khóa tiểu lâu. Từ chối vào nhóm, tự mình dạo chợ Thái Nam tiểu hội một mình." },
          { bridge: true, khoang: "c0131–c0132", text: "Dạo chợ Thái Nam tiểu hội, tìm hiểu giá trị linh thạch và phù lục. Đổi đan dược (Hoàng Long Đan, Kim Tủy Hoàn) lấy Phi hành phù, Không bạch phù chỉ và một quyển chú thư; dùng đạo phù Tùng Văn nhập tiểu lâu, gặp nhóm tán tu đầy đủ lần đầu gồm Ngô Cửu Chỉ và Hoàng Hiếu Thiên vừa gia nhập." },
          { chuong: 133, importance: "normal", tieuDe: "Bắt quả tang Ngô Cửu Chỉ dùng thâu kỹ", text: "Phát giác và tóm cổ tay Ngô Cửu Chỉ ngay khi thiếu niên giả vờ kết bái huynh đệ để dùng thâu kỹ. Tùng Văn hòa giải; nhóm bàn kế bán đồ chung và cảnh báo tán tu hay mất tích sau các kỳ hội — Hàn Lập không tham gia bán chung vì đã trao đổi hết hàng." },
          { bridge: true, khoang: "c0134–c0135", text: "Nghe Hắc Mộc và Hồ Bình Cô giảng toàn bộ cơ chế Thăng Tiên đại hội: mỗi mười năm tại Việt quốc, thất đại tiên phái dựng bảy lôi đài, đả lôi đài loại trực tiếp đến khi còn khoảng mười người được nhận làm đệ tử và uống Trúc cơ đan; tử vong cao, tán tu thua kém đệ tử gia tộc tu tiên về điều kiện." },
          { chuong: 136, importance: "normal", tieuDe: "Hỏi chế phù — phát hiện huynh muội Yến gia", text: "Hỏi Khổ Tang về cách chế linh phù: cần máu yêu thú làm đan sa, bút lông yêu thú hoặc bút than có thiên tài địa bảo. Ra chợ nhận ra quái cầm Song thủ vụ chính là linh điểu từng gặp quái ưng — xác định huynh muội Yến gia (đệ nhất gia tộc tu tiên có Kết Đan kỳ) đã đến dự Thăng Tiên đại hội. Muốn mua quyển Trường Xuân công." },
          { chuong: 137, importance: "normal", tieuDe: "Đổi đan dược — thu Kim Trúc bút và Tàn Phiến mầm", text: "Đổi đan dược tinh tiến pháp lực lấy quyển Trường Xuân công tầng 1-13 từ một thiếu nữ; thêm túi mầm thất tinh thảo; đổi tiếp lấy Kim Trúc bút (dị bảo chế phù) — di vật của tộc thiếu nữ, đổi cho huynh trưởng đột phá dự lôi đài." },
          { chuong: 138, importance: "minor", tieuDe: "Chế Định thần phù thất bại 12 lần — học đạo chế phù", text: "Thử chế Định thần phù thất bại liên tiếp mười hai lần; Khổ Tang giảng giải đạo chế phù: người mới thất bại hàng trăm lần là bình thường, cần vạn lần mới thành phù sư hợp cách. Quyết định không tự chế phù mà mua về dùng. Hơn mười ngày khổ tu luyện Trường Xuân công cùng bảy tám pháp thuật mới." },
          { chuong: 138, importance: "minor", tieuDe: "Đột phá Trường Xuân công tầng 9", text: "Trước khi Thái Nam hội kết thúc vài ngày, Trường Xuân công đột phá lên tầng thứ chín. Pháp lực tăng gấp đôi so với tầng tám; thành thạo Lưu sa thuật và Băng đông thuật." },
          { bridge: true, khoang: "c0139–c0140", text: "Hai ngày cuối Thái Nam hội, dạo chợ giữa hơn hai ngàn tu sĩ, tự nhận chỉ xếp trung lưu dù đã vào tầng chín. Chứng kiến hán tử da đen tầng mười rao đổi pháp bảo Tàn Phiến — mảnh ẩn hình tuyệt đối qua mặt cả Thiên Nhãn Thuật. Quyết 'thế tại tất đắc', dùng một Phi hành phù (linh phù sơ cấp bậc cao cực hiếm) đổi lấy Tàn Phiến trước sự kinh ngạc của đám đông." },
          { chuong: 141, importance: "normal", tieuDe: "Đoạt Tàn Phiến — vỡ lẽ Thăng Tiên Lệnh", text: "Thử nghiệm công hiệu Tàn Phiến (phủ lên chén rượu rồi điểm linh khí — linh khí bị nuốt, thu phiến lại thì cả vật lẫn linh khí hiện ra); dứt khoát đổi Phi hành phù lấy pháp bảo. Được thanh niên mặt tròn tặng quyển 'Thanh Khê bút lục'. Đọc sách, vỡ lẽ Thăng Tiên Lệnh do Hoàng Phong cốc phát ra, đối chiếu xác nhận lệnh bài đen thu từ Chu Nho. Lần đầu biết giá trị thật của lệnh — Trúc Cơ đan + tư cách nhập môn." },
          { chuong: 142, importance: "normal", tieuDe: "Bị phục kích — bị thương vai và chân trái", text: "Thái Nam tiểu hội kết thúc; Tùng Văn đạo sĩ vỗ vai lén rắc phấn định vị rồi bắn hỏa quang ra hiệu. Hàn Lập nghi ngờ nghỉ lại thêm một đêm, sáng sớm lén rời; hai kẻ truy đuổi bám theo bằng viên ngọc xanh dò phấn. Bị mai phục tại ao bùn — hán tử áo vàng phóng băng trùy, kẻ đại hán dùng Cự lực thuật khống chế chân; vai và chân trái bị băng trùy xuyên qua. Tự phong bế mạch máu cầm máu, dùng súc cốt công rút chân thoát khỏi tay địch, bắn Ngũ đạn liên phát đẩy lui tên áo vàng." },
          { chuong: 143, importance: "normal", tieuDe: "Phản sát — giết hai kẻ tập sát", text: "Tiếp chiến đại hán (Thổ giáp thuật + sợi roi hắc khí) và tên áo vàng (hồ lô 18 cầu đen). Dùng Kim Cương phù tạo kim tráo chịu đòn; dùng thuật biến cát nhấn chìm chân đại hán; gọi Phù Bảo từ hộp gỗ chém đôi 18 cầu, sau điều khiển kiếm quang quấn cổ đại hán chém đầu; dồn sạch pháp lực xuyên tim tên áo vàng đang bỏ chạy. Lục xác thu hơn 50 linh thạch loại kém, một phù lục và pháp khí. Không rõ ai chủ mưu." },
          { chuong: 144, importance: "normal", tieuDe: "Tới Hoàng Phong Cốc — bị xác định ngụy linh căn", text: "Theo Vương sư đệ về Hoàng Phong cốc (ẩn dưới kỳ môn đại trận tại Thái Nhạc Sơn, Kiến Châu). Nộp Thăng Tiên Lệnh; bị kiểm tra xác định tứ thuộc tính ngụy linh căn, xác suất Trúc Cơ chỉ ~1%. Trong đại điện, Diệp lão giả (Diệp Tính) và Ngô lão giả lập mưu thuyết phục hắn nhường Trúc Cơ đan." },
          { chuong: 145, importance: "normal", tieuDe: "Được nhận làm đệ tử — đối mặt đề nghị mua Trúc Cơ đan", text: "Chờ tại Nghênh Tân lâu ba bốn ngày; Chưởng môn duyệt cho gia nhập và cấp Trúc Cơ đan. Diệp lão giả đến gặp riêng, đề nghị mua Trúc Cơ đan, chào giá bảy tám khối linh thạch bậc trung và vật phẩm khác. Hàn Lập sửng sốt nhưng bắt đầu cân nhắc." },
          { chuong: 146, importance: "normal", tieuDe: "Nhường Trúc Cơ đan — đổi lấy quyền chọn công tác", text: "Tính toán lợi hại: từ chối dễ kết oán; Diệp lão là quản sự phân công công tác tạp vụ — chìa khóa để chọn việc trồng linh dược. Giả vờ u sầu, cuối cùng đồng ý nhường Trúc Cơ đan cho cháu Diệp Tính đổi lấy quyền tùy ý chọn loại công tác. Tự nhủ còn có bình thần bí nên đan dược gì cũng phối chế được về sau." },
          { chuong: 147, importance: "normal", tieuDe: "Chính thức nhập môn Hoàng Phong Cốc", text: "Diệp Tính đưa hắn vào Nghị sự đại điện hồi báo Chưởng môn Chung Linh Đạo. Hàn Lập chính thức trở thành đệ tử Hoàng Phong Cốc (Chấp sự đệ tử, cấp thấp nhất). Chưởng môn dàn xếp: Hàn Lập nhường đan, Diệp Tính bồi thường tổn thất. Vương sư thúc giới thiệu kết cấu môn phái: hơn 1 vạn đệ tử, 3 tầng Chấp sự/Lĩnh sự/Trúc cơ kỳ, 1 sư thúc tổ Nguyên Anh kỳ vắng mặt lâu." },
          { chuong: 148, importance: "normal", tieuDe: "Nhận vật phẩm đệ tử mới từ Lâm sư đệ", text: "Vương sư thúc dẫn tới nhà đá Lâm sư đệ (Hôi Y Lão Giả) nhận vật phẩm tùy thân: Hoàng ti sam, Thanh Diệp pháp khí, Liệt Dương kiếm, Lãnh Nguyệt đao, Thập Bội Trữ Vật, bộ công cụ tinh luyện. Lâm sư đệ chê tư chất kém nhưng chia sẻ tâm sự tịch liêu. Hàn Lập lần đầu dùng túi trữ vật; Vương sư thúc dạy ba điều kiêng kỵ." },
          { chuong: 149, importance: "normal", tieuDe: "Gặp Ngô Phong — nhắm Bách Dược Viên", text: "Vương sư thúc dẫn gặp Ngô Phong (chấp sự Truyền công các) — người chỉ giáo công pháp. Biết cần luyện lên tầng 10 để chuyển tới Huyền Khôn sơn. Tập phi hành bằng Thanh Diệp; lần đầu bay khiến hắn hăng hái dù đồng môn khinh thường tầng 9. Tới Bách Ky đường xin nhận công tác trồng trọt sớm; Diệp Tính cho phép. Chọn lọc danh sách trúc giản, nhắm tới một công tác dược viên." },
          { chuong: 150, importance: "normal", tieuDe: "Chọn Bách Dược Viên — bị Diệp Tính hối ước", text: "Kiên quyết chọn nhiệm vụ Bách Dược Viên tại Kim Phù lĩnh dù Vu chấp sự can ngăn và nhiều người từng thất bại. Đọc hết quyển trục kinh nghiệm thất bại, hiểu bảy tám phần khó, vẫn nhận. Diệp Tính ngập ngừng hối ước: hoãn giao một phần vật phẩm bồi thường với cớ luyện Hợp Khí đan. Hàn Lập ngoài mặt tươi cười, trong lòng thống hận, tự nhủ đợi cơ hội thu hồi cả vốn lẫn lời. Theo Vu chấp sự tới Kim Phù lĩnh nhận việc." },
          { chuong: 151, importance: "normal", tieuDe: "Nhận quản Bách Dược Viên — bí mật chôn bình thần bí", text: "Gặp Mã sư bá — lão đầu gầy gò cổ quái chủ nhân cũ dược viên. Bị thử thách nhận mặt thảo dược; gọi đúng nhiều loại hiếm khiến lão kinh ngạc. Nhận quyền quản lý dược viên + mộc bài mộc xanh làm lệnh bài cấm chế; Mã sư bá bàn giao bút ký và bảo thảo rồi bay đi. Ban đêm lén chôn bình thần bí ở góc dược viên, phủ Tàn Phiến che dấu hiệu thu linh khí. Cuối chương Diệp Tính chính thức hối ước: chỉ giao một phần năm linh thạch và pháp khí đã hứa, bỏ qua phần đan dược." },
          { chuong: 152, importance: "major", tieuDe: "Đột phá Trường Xuân công tầng 11 — hai năm sau nhập môn", text: "Hơn hai năm qua, theo chiến lược ẩn mình, tiềm tu tại dược viên, ăn Hoàng Long đan và Kim Tủy hoàn liên tục. Trường Xuân công liên tiếp đột phá hai tầng lên tầng mười một — trung đẳng trong đệ tử cấp thấp. Hoàng Long đan và Kim Tủy hoàn hết hẳn công hiệu; khởi động tìm đan dược khác. Thu nhập linh thạch tăng từ 2 lên 5 khối/tháng nhờ Mã sư bá hài lòng. Thử nghiệm cất lục dịch vào Hoàng Đồng bình — chỉ giữ được ~1 ngày rồi biến mất; tạm gác bí ẩn bình thần bí." },
          { bridge: true, khoang: "c0152–c0153", text: "Vài tháng sau đột phá tầng 11, thương lượng với Mã sư bá: dùng một năm công sức trông coi dược viên miễn phí đổi lấy ngọc phù bảo đảm để vào Nhạc Lộc điện." },
          { chuong: 153, importance: "normal", tieuDe: "Lần đầu vào Nhạc Lộc điện — dùng Truyền tống trận", text: "Tới thạch đài sườn Vu Quân sơn, dùng ngọc phù của Mã sư bá qua kiểm tra cấm chế. Cố ý cung kính xưng hô để tạo hảo cảm với hai hồng y đệ tử Trúc Cơ kỳ gác cửa. Lần đầu trải nghiệm Truyền tống trận — bị dịch chuyển tức thì vào đại sảnh lưu trữ bên trong điện." },
          { chuong: 154, importance: "normal", tieuDe: "Gặp Hứa lão — thất vọng tàng thư ít đan phương", text: "Vào thông đạo 'Đan', gặp Hứa lão — lão giả gian thương trông coi tàng thư. Dùng Thiên Nhãn Thuật không soi được tu vi của lão. Lên lầu hai, thất vọng: chỉ có y thư thế tục và đan phương cấp thấp vô dụng ở tầng 11. Còn hy vọng ở hai khối ngọc đồng chưa xem. Trả tổng 2 linh thạch phí đọc hai canh giờ." },
          { chuong: 155, importance: "normal", tieuDe: "Tìm được đan phương Trúc Cơ đan — gặp vòng luẩn quẩn chân hỏa", text: "Đọc ngọc đồng xanh: phương pháp luyện Trúc Cơ đan đầy đủ, nhưng bắt buộc cần tiên thiên chân hỏa — chỉ tu sĩ Trúc Cơ kỳ mới có; loại bỏ ngay phương án nhờ người vì sợ bị diệt khẩu. Đọc ngọc đồng đỏ: Định nhan đan, chỉ giữ dung nhan, không hỗ trợ tu luyện. Giữ lại vì tự luyện được (không cần chân hỏa) và có thể bán. Đấu trí với Hứa lão, phục chế cả hai ngọc đồng với giá 20 linh thạch; moi được giải thích về lý do thất truyền đan phương." },
          { chuong: 156, importance: "normal", tieuDe: "Biết địa phế chi hỏa — mua Ngân Ti đỉnh — đến huyền dương hỏa địa", text: "Hứa lão hé lộ địa phế chi hỏa — nguồn nhiệt luyện đan chính của tu tiên giới, thay thế tiên thiên chân hỏa. Mua Ngân Ti đỉnh giá 32 linh thạch; tổng 50 linh thạch lần tiếp xúc Hứa lão. Tự mình đi theo thông đạo không biển báo, thấy cửa đá ngũ sắc huyền dương hỏa địa. Bị người gác khinh miệt gọi 'đệ tử cùng quỷ cấp thấp'; ngoài mặt bình thản, quay lưng thì mắt lóe sát khí." },
          { chuong: 157, importance: "minor", text: "Trên đường bay về Bách Dược Viên, tình cờ chứng kiến trận tỷ thí trên đỉnh núi: Mộ Dung huynh đệ (lôi linh căn) đấu với Lục sư huynh (phong linh căn). Đứng quan sát, thầm hâm mộ dị linh căn; tự nhận pháp thuật mình (Hỏa đạn thuật) kém Lôi hệ." },
          { chuong: 158, importance: "normal", tieuDe: "Né tránh trận xung đột — kiểm kê nguyên liệu Trúc Cơ đan", text: "Khi Mộ Dung huynh đệ bị áp chế, một người định mượn hắn làm khiên — Hàn Lập lập tức dùng thân pháp nhoáng mình biến mất. Niếp sư muội (lam y nữ tử) xuất hiện dập tắt Thanh Hồ trảm, chấm dứt cuộc đấu; sau đó truyền âm khiển trách Hàn Lập về việc né tránh không cứu người. Hàn Lập không bận tâm, chỉ mong tránh sự chú ý. Về Bách Dược Viên đọc kỹ đan phương Trúc Cơ đan, xác nhận: 31 loại phụ dược đều có sẵn, nhưng thiếu 3 chủ dược hiếm (Ngọc Tủy Chi, Tử Hầu Hoa, Thiên Linh Quả)." },
          { chuong: 159, importance: "normal", tieuDe: "Biết ba chủ dược Trúc Cơ đan không thể nuôi trồng — tới Truyền Công Các", text: "Khích Mã sư bá để moi tin: ba chủ dược Trúc Cơ đan do thiên địa linh khí sinh ra, không có hạt giống, không thể nuôi trồng trong điều kiện bình thường. Nhận ra lục dịch chỉ thúc sinh trưởng, không tạo được mầm từ hư vô; nảy ý tìm cây con đem về nuôi. Quyết tâm hỏi Ngô Phong. Đến Truyền Công Các, đợi Ngô Phong giảng xong Hỏa Xà Thuật sơ cấp bậc trung." },
          { chuong: 160, importance: "major", tieuDe: "Nghe về Huyết Cấm Thí Luyện — tiến thoái lưỡng nan", text: "Ngô Phong tiết lộ: chủ dược Trúc Cơ đan chỉ còn tìm được trong cấm địa phía sau Hoàng Phong Cốc. Cấm địa bị cổ cấm thuộc tính phong phong bế; 5 năm suy yếu 5 ngày, cần Kết Đan kỳ phá mở. Kỳ lạ: Trúc Cơ kỳ bị chắn ngoài, chỉ Luyện Khí kỳ vào được. Tỉ lệ sống sót dưới một phần tư — sự kiện được gọi là Huyết Cấm Thí Luyện, nửa năm nữa sẽ diễn ra. Hàn Lập về Bách Dược Viên, mấy ngày liên tục cân nhắc lợi hại: không tham gia thì Trúc Cơ vô vọng; tham gia thì tỉ lệ tử vong tới 3/4. Khép chương trong thế tiến thoái lưỡng nan." },
          { chuong: 161, importance: "normal", tieuDe: "Quyết tham gia Huyết Cấm — học Liễm khí thuật", text: "Hàn Lập quyết định tham gia Huyết Cấm Thí Luyện. Đến Truyền Công Các hỏi Ngô Phong về cách ứng phó cấm địa; Ngô Phong truyền Liễm khí thuật — thuật thu giấu pháp lực khiến bản thân trông như người phàm hoặc đệ tử pháp lực yếu, tránh bị tiêu diệt trước bởi cao thủ. Xác nhận Trường Xuân công tầng 11. Lên đường ra phường thị Hoàng Phong Cốc mua vật phẩm chuẩn bị." },
          { chuong: 162, importance: "minor", tieuDe: "Vào phường thị — gặp Điền Bặc Ly tại Vạn Bảo Lâu", text: "Hàn Lập đến phường thị Hoàng Phong Cốc, vào lầu thương hội Vạn Bảo Lâu. Gặp Điền Bặc Ly — chưởng quỹ người thường. Yêu cầu xem các hộp gấm chứa vật phẩm tu tiên. Điền Bặc Ly trình bày cơ chế phòng thủ hai luồng pháp lực khi mở hộp: chỉ tu tiên giả Trúc Cơ kỳ trở lên mới an toàn mở được." },
          { chuong: 163, importance: "minor", tieuDe: "Ba pháp khí trong hộp gấm", text: "Vạn Bảo Lâu trình ba vật phẩm: Kim phù tử mẫu đao (bộ dao bay liên hoàn), Huyền thiết phi thiên thuẫn (khiên phi hành phòng thủ), Thiên lôi tử (mìn sét nổ). Hàn Lập thích Huyền thiết phi thiên thuẫn nhất. Hộp khác chứa Hoàng tinh chi — linh thảo ngàn năm. Đinh lão (giám định dược, người thường) được triệu đến xác minh." },
          { chuong: 164, importance: "minor", tieuDe: "Phù bảo — Kim Quang Chuyên", text: "Đinh lão xác nhận Hoàng tinh chi thật, tuổi hơn ngàn năm. Điền Bặc Ly giải thích cơ chế phù bảo: do Kết Đan kỳ luyện chế, ai cũng dùng được; tiền-Trúc-Cơ chỉ phát huy 1–2 thành uy lực; hậu Trúc Cơ phát huy toàn bộ; số lần dùng/tuổi thọ hữu hạn. Hộp cuối lộ Kim Quang Chuyên phù bảo (dạng hộp nhỏ ngũ sắc phát quang)." },
          { chuong: 165, importance: "normal", tieuDe: "Mua toàn bộ hộp gấm — phát hiện Lục sư huynh", text: "Hàn Lập dùng 2 gốc linh thảo ngàn năm đổi toàn bộ hộp gấm: Kim phù tử mẫu đao, Huyền thiết phi thiên thuẫn, Thiên lôi tử, Kim Quang Chuyên phù bảo, Hoàng tinh chi. Rời Vạn Bảo Lâu, tình cờ phát hiện Lục sư huynh đang cưỡng bức Trần sư muội bằng Hợp Hoan Hoàn — một thứ làm mất ý thức tự chủ. Lục sư huynh tìm thấy hộp gỗ đỏ bí ẩn trong đồ vật của Trần sư muội." },
          { chuong: 166, importance: "normal", tieuDe: "Đối đầu Lục sư huynh — cạm bẫy", text: "Lục sư huynh lộ thân phận thật: Luyện Khí kỳ tầng 12 trung giai, phong linh căn. Động cơ: nhà họ Đổng hứa gả con gái cho hắn nếu hắn tặng song tu kinh; Hồng Phất sư thúc tổ sẽ chú ý tới hắn. Hộp gỗ đỏ từ túi Trần sư muội chứa bình xanh đựng 2 viên Trúc Cơ đan thật. Lục sư huynh dàn trận muốn cướp. Hàn Lập phát hiện bẫy kịp thời, dùng Thủy tráo phù triển khai phòng thủ trước." },
          { chuong: 167, importance: "normal", tieuDe: "Ác đấu (Thượng) — xây ba lớp phòng thủ", text: "Hàn Lập chủ động tấn công trước; Lục sư huynh dùng phong phược thuật + Phong tường thuật (phù vàng cấp cao) áp đảo phản. Hàn Lập xây ba lớp phòng thủ: Tinh cương cự hoàn (vòng ngoài) + Huyền thiết phi thiên thuẫn (vòng giữa) + lam hào quang từ Kim Cương phù (vòng trong). Quyết định kích hoạt Kim Quang Chuyên phù bảo lúc đúng thời cơ." },
          { chuong: 168, importance: "normal", tieuDe: "Ác đấu (Trung) — phù bảo hóa cự kiếm", text: "Tinh cương hoàn vỡ trước uy lực Phong tường. Lục sư huynh tung tuyệt chiêu Hóa giao — Thanh giao kỳ biến thành Thanh giao khổng lồ. Kim Quang Chuyên phù bảo kích hoạt hóa thành cự kiếm xám dài 2–3 trượng chặn đứng Thanh giao. Xác nhận pháp lực Hàn Lập tương đương tầng 11 Trường Xuân công." },
          { chuong: 169, importance: "major", tieuDe: "Ác đấu (Hạ) — hạ Lục sư huynh", text: "Hai bên tiêu hao pháp lực lâu dài: Hàn Lập dùng linh thạch bậc trung thổ thuộc tính và bí mật nhai linh thảo duy trì pháp lực; chủ động bỏ vòng bảo hộ màu lam dồn lực điều kiếm uy hiếp. Lục sư huynh liều chết thu Thanh giao kỳ ngưng đao phong lớn. Hàn Lập điều cự kiếm chém đỉnh đầu Lục sư huynh đồng thời thi triển La yên bộ tới cực hạn né đao phong. Lục sư huynh bị chém bửa làm đôi — chết. Hàn Lập sống, pháp lực gần cạn." },
          { chuong: 170, importance: "normal", tieuDe: "Đoạt Trúc Cơ đan — khống chế Trần sư muội", text: "Cự kiếm (Kim Quang Chuyên phù bảo) hóa tro hoàn toàn sau trận. Hàn Lập thu Thanh giao kỳ và bình xanh chứa 2 viên Trúc Cơ đan thật cùng hộp đan dược từ túi Lục sư huynh. Nhớ lại bí quyết thắng trận: khéo lợi dụng linh tuyến — dừng Thủy tráo thuật tiết kiệm pháp lực trong khi pháp thuật địch vẫn tiêu hao linh lực. Trần sư muội (đang trong trạng thái Hợp Hoan đan) công kích Hàn Lập; hắn dùng Định thần phù / Định Thần thuật khống chế, đưa nàng về an toàn." }
        ],
        tuViMoc: [
          { chuong: 1, canhGioi: "Phàm nhân", text: "Chưa tu luyện, không có một điểm chân khí." },
          { chuong: 6, canhGioi: "Phàm nhân — sơ học Vô danh khẩu quyết", text: "Bắt đầu tu Vô danh khẩu quyết, sinh ra tia lương khí lúc có lúc không." },
          { chuong: 8, canhGioi: "Vô danh khẩu quyết — tầng 1", text: "Luồng năng lượng nội thể từ bằng sợi tóc tăng lên bằng sợi chỉ; vận hành được một chu thiên qua kỳ kinh bát mạch.", importance: "major" },
          { chuong: 9, canhGioi: "Vô danh khẩu quyết — tầng 2", text: "Luyện thành tầng 2 nhờ dược vật trợ lực; bị nội thương nhẹ khi trùng quan do kinh mạch phá liệt.", importance: "major" },
          { chuong: 14, canhGioi: "Trường Xuân công — tầng 3 (đỉnh phong)", text: "Sau 4 năm khổ tu, đột phá tầng 3 Trường Xuân công; cảm quan cực kỳ mẫn duệ. Sau đó đình trệ hơn một năm.", importance: "major" },
          { chuong: 23, canhGioi: "Trường Xuân công — tầng 3 đỉnh phong (sau biến cố tâm ma)", text: "Sau khi dùng bình an phù trừ tâm ma, công lực tăng đạt đỉnh phong tầng thứ ba; cách tầng bốn không còn xa.", importance: "normal" },
          { chuong: 28, canhGioi: "Trường Xuân công — tầng 4", text: "Nhờ Hoàng Long Đan và Kim Tủy Hoàn, đột phá thành công tầng thứ tư trong một đêm; ngũ cảm tăng vọt mang tính chất, điều khiển được cỗ chân khí kỳ dị.", importance: "major" },
          { chuong: 34, canhGioi: "Trường Xuân công — tầng 5", text: "Hai tháng trước chương 34 (tức khoảng c032-c033), nhờ Hoàng Long Đan và Kim Tủy Hoàn đột phá thẳng từ tầng tư lên tầng năm; năng lực ghi nhớ võ công 'gặp qua không thể quên' khởi phát.", importance: "major" },
          { chuong: 43, canhGioi: "Trường Xuân công — tầng 6", text: "Nhờ hơn mười bình linh dược phụ trợ, đột phá tầng sáu — tầng cao nhất Mặc đại phu từng cấp. Công pháp tầng sáu cho năng lực phục hồi thân thể dị thường vượt xa người bình thường, điều chính Hàn Lập cũng không ngờ tới; vẫn che giấu thực lực, chỉ phô tầng tư trước mặt Mặc đại phu.", importance: "major" },
          { chuong: 59, canhGioi: "Trường Xuân công — tầng 6", text: "Dư Tử Đồng xác nhận Hàn Lập đã tu tới tầng 6 — chỉ kém Dư Tử Đồng 1 tầng (Dư Tử Đồng tầng 7). Chính nhờ tốc độ/tư chất tu luyện vượt dự tính của Mặc đại phu nên đoạt xá thất bại.", importance: "major" },
          { chuong: 67, canhGioi: "Trường Xuân công — tầng 6 đỉnh phong; bán tu tiên giả", text: "Hàn Lập tự xác nhận đã đạt đỉnh phong tầng sáu Trường Xuân công. Luyện thành hai pháp thuật từ bí tịch: Hỏa Đạn Thuật và Thiên Nhãn Thuật — xác nhận có pháp lực. Ba pháp thuật còn lại chưa nhập môn được. Là người duy nhất trong Thất Huyền môn được coi là 'bán tu tiên giả'.", importance: "major" },
          { chuong: 75, canhGioi: "Trường Xuân công — tầng 8", text: "Nhờ ngày ngày ăn linh dược, đột phá lên tầng 8. Pháp lực đã vượt qua nhục thân Dư Tử Đồng lúc còn sống, nhưng kỹ xảo chiến đấu và độ nắm vững pháp thuật thực chiến vẫn kém hơn.", importance: "major" },
          { chuong: 138, canhGioi: "Trường Xuân công — tầng 9", text: "Sau hơn mười ngày khổ tu kết hợp đan dược tại Thái Nam hội, đột phá lên tầng chín. Pháp lực tăng gấp đôi so với tầng tám; thành thạo Lưu sa thuật và Băng đông thuật ngay sau khi vào tầng mới.", importance: "minor" },
          { chuong: 152, canhGioi: "Trường Xuân công — tầng 11 (tiền-Trúc-Cơ luyện thể)", text: "Hơn hai năm tiềm tu tại Bách Dược Viên, ăn Hoàng Long đan và Kim Tủy hoàn liên tục — Trường Xuân công liên tiếp đột phá hai tầng lên tầng mười một. Đạt trình độ trung đẳng trong đệ tử cấp thấp Hoàng Phong Cốc. Hoàng Long đan và Kim Tủy hoàn hết hẳn công hiệu; bước tiếp theo cần loại đan dược mới.", importance: "major" }
        ],
        nhanMach: [
          { ten: "Tam thúc (Lão Hàn béo)", tag: "ho-hang", quanHe: "Chú ruột, đệ tử ngoại môn Thất Huyền môn, người tiến cử Hàn Lập" },
          { ten: "Hàn phụ", tag: "cha-me", quanHe: "Cha ruột, nông dân" },
          { ten: "Hàn mẫu", tag: "cha-me", quanHe: "Mẹ ruột" },
          { ten: "Tiểu muội muội", tag: "ho-hang", quanHe: "Em gái út, người Hàn Lập yêu thương nhất" },
          { ten: "Mặc đại phu", tag: "su-mon", quanHe: "Sư phụ thân truyền tại Thất Huyền môn" },
          { ten: "Trương Thiết", tag: "ban-be", quanHe: "Bạn đồng môn thân nhất, cùng làm đệ tử Mặc đại phu; hiện mất tích" },
          { ten: "Lệ Phi Vũ", tag: "dong-mon", quanHe: "Đệ tử cùng môn (Lệ sư huynh); Hàn Lập cứu mạng và kết ơn nghĩa; hứa giúp đỡ khi cần" },
          { ten: "Kim Đông Bảo (tiểu toán bàn)", tag: "dong-mon", quanHe: "Đệ tử cùng môn, nguồn tin tức; Hàn Lập hứa chữa bệnh miễn phí" },
          { ten: "Trương Thiết / Khúc Hồn", tag: "ban-be", quanHe: "Bạn thân đồng môn; di thể bị cải tạo thành thi nhân Khúc Hồn, nay phục tùng Hàn Lập" },
          { ten: "Mã phó môn chủ", tag: "dong-mon", quanHe: "Phó môn chủ Thất Huyền môn, muốn lôi kéo Hàn Lập vào hệ phái" },
          { ten: "Mã Vinh", tag: "dong-mon", quanHe: "Đệ tử Lý trưởng lão, người dẫn Hàn Lập tới cứu sư phụ" },
          { ten: "Tôn nhị cẩu", tag: "thu-ha", quanHe: "Thủ hạ bị khống chế bằng Hủ tâm hoàn; tai mắt tại Gia Nguyên Thành" },
          { ten: "Nghiêm thị", tag: "su-mon", quanHe: "Tứ phu nhân Mặc đại phu — 'Tứ sư mẫu' theo thư mạo danh; đang thương lượng giao Noãn dương bảo ngọc" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Bình thần bí", loai: "pháp bảo (bất hoại, hút linh khí, thôi sanh dược thảo)", trangThai: "đang giữ — đeo trong túi da ở cổ", moTa: "Bình màu xanh nhạt, hoa văn lá xanh biếc sống động. Bất hoại trước vũ lực phàm nhân. Hút ánh sáng (quang điểm) ban đêm trời quang có trăng sao; khoảng 7 ngày/giọt tái sinh Thần Bí Dịch (lục dịch). Nhỏ trực tiếp một giọt nguyên chất lên một gốc dược thảo tăng khoảng 100 năm tuổi/dược tính. Lục dịch chỉ giữ được trong bình; rời bình một khắc là tan biến. Cũng là kịch độc: pha loãng cho thỏ uống thì thỏ nổ banh thân.", nguon: ["c0010", "c0012", "c0013", "c0014", "c0023", "c0024", "c0025", "c0026"] },
            { ten: "Huyền thiết phi thiên thuẫn (Huyền thiết thuẫn)", loai: "pháp khí — khiên phi hành", trangThai: "đang giữ", moTa: "Khiên phi hành pháp khí mua tại Vạn Bảo Lâu c163. Phòng thủ linh hoạt: vừa chặn đỡ vừa tấn công, di chuyển được trong không trung. Dùng thực chiến c167 làm lớp giữa ba lớp phòng thủ trước Phong tường thuật của Lục sư huynh.", nguon: ["c0163", "c0165", "c0167"] },
            { ten: "Thanh giao kỳ", loai: "pháp khí — kỳ phách", trangThai: "đang giữ — thu từ Lục sư huynh @c170", moTa: "Pháp khí phong thuộc tính của Lục sư huynh. Kích hoạt tuyệt chiêu Hóa giao biến thành Thanh giao (hình phách phong hệ) khổng lồ. Hàn Lập thu sau khi Lục sư huynh chết.", nguon: ["c0166", "c0167", "c0168", "c0169", "c0170"] }
            { ten: "Ngọc Đái đoản kiếm", loai: "nhuyễn kiếm (trọng kim)", trangThai: "đang giữ", moTa: "Nhuyễn kiếm Hàn Lập đặt thợ rèn làm bằng trọng kim — thanh kiếm đắt nhất hắn có. Rộng chừng một ngón tay, dài tầm thước rưỡi, lưỡi kiếm mềm dẻo. Lần đầu dùng tại c60 để chém nguyên thần Dư Tử Đồng.", nguon: ["c0060"] },
            { ten: "Ống đồng đựng độc dịch", loai: "vũ khí ẩn (độc)", trangThai: "đang giữ", moTa: "Ống đồng nhỏ chứa chất lỏng đen quánh đặc mùi hủ xú; bóp ngón cái thì phun ra. Tổn thương nguyên thần/quang cầu khi bắn trúng. Dùng lần đầu tại c60 để làm suy yếu nguyên thần Dư Tử Đồng trước khi chém.", nguon: ["c0060"] }
          ],
          danDuoc: [
            { ten: "Trúc Cơ đan (2 viên thật)", loai: "đan dược tu tiên — đột phá Trúc Cơ kỳ", trangThai: "đang giữ — thu từ túi Lục sư huynh @c170", moTa: "Hai viên Trúc Cơ đan thật, đựng trong bình xanh. Hàn Lập thu được từ túi trữ vật của Lục sư huynh sau trận chiến. Đây là mục tiêu hắn đã mưu tính từ đầu chuyến ra phường thị.", nguon: ["c0166", "c0170"] },
            { ten: "Trừu Tủy Hoàn", loai: "đan dược (từng dùng chia nhỏ)", trangThai: "đã dùng", moTa: "Từng chia một viên thành mười phần làm dược dẫn — cách dùng an toàn không gây hại.", nguon: ["c0020"] },
            { ten: "Thi Trùng Hoàn", loai: "đan dược (độc trùng noãn trong cơ thể)", trangThai: "đã được giải trừ — uống giải dược từ Mặc đại phu", moTa: "Trùng noãn điều chế bằng bí pháp của Mặc đại phu. Tiềm phục trong cơ thể một năm; có giải dược đặc chế thì tan rã, không thì phá vỏ ăn sạch nội tạng, chết trong ba ngày ba đêm thống khổ. Hàn Lập bị ép nuốt làm con tin. Thanh Linh Tán không giải được. Mặc đại phu giao giải dược khi Hàn Lập trở lại đúng hẹn bốn tháng sau.", nguon: ["c0031", "c0032", "c0044"] }
          ],
          congPhap: [
            { ten: "Trường Xuân công", loai: "công pháp tu thân", trangThai: "đang tu (tầng 11)", moTa: "Tên thật của vô danh khẩu quyết Mặc đại phu truyền. Yêu cầu người tu còn trẻ và có linh căn. Sinh ra lương khí lạnh (chân khí kỳ dị) trong nội thể. Tầng năm cho năng lực ghi nhớ võ học gặp qua không thể quên; tầng sáu cho năng lực phục hồi thân thể dị thường vượt xa người thường. Mỗi tầng tăng mạnh tinh thần và ngũ cảm; sinh ra năng lượng gọi là 'ngụy chân khí' vận hành trong kinh mạch, chỉ làm xúc giác bén nhạy, không uy lực như chân khí thật. Tầng 8 đạt được nhờ ngày ngày ăn linh dược — pháp lực vượt qua nhục thân Dư Tử Đồng lúc còn sống. Tầng 9 đột phá tại Thái Nam hội c138 sau hơn mười ngày kết hợp đan dược; pháp lực tăng gấp đôi so với tầng 8. Tầng 11 đột phá tại Hoàng Phong Cốc c152 sau hơn hai năm tiềm tu dùng Hoàng Long đan và Kim Tủy hoàn liên tục; đây là giới hạn của hai loại đan này.", nguon: ["c0006", "c0007", "c0008", "c0009", "c0014", "c0015", "c0028", "c0030", "c0034", "c0043", "c0045", "c0075", "c0138", "c0152"] },
            { ten: "Nhuyễn cốt công", loai: "công pháp tu thân", trangThai: "đã luyện thành", moTa: "Một trong chín bí kỹ Hàn Lập chọn từ kiếm phổ để luyện trong khe núi ẩn tu. Khiến thân thể mềm dẻo như không có xương, có thể áp sát ép thân xuống mặt đất để ẩn mình hoàn toàn ngay trước mắt đối thủ.", nguon: ["c0042", "c0046"] },
            { ten: "Liễm tức công", loai: "công pháp tu thân", trangThai: "đã luyện tới hỏa hầu nhất định", moTa: "Công pháp ẩn giấu hơi thở và khí tức. Hàn Lập luyện tới hỏa hầu nhất định sau ~hai tháng trong khe núi; kết hợp với Nhuyễn cốt công và Ngụy nặc thuật để ẩn mình hoàn toàn.", nguon: ["c0042", "c0046"] },
            { ten: "Ngụy nặc thuật", loai: "thuật", trangThai: "đã luyện tới hỏa hầu nhất định", moTa: "Thuật ngụy trang ẩn mình. Hàn Lập luyện tới hỏa hầu nhất định; dùng ngụy trang thành cọc gỗ vàng kiểm nghiệm thành quả, bắt được chim lông xám bay vào khe núi mà không bị phát hiện.", nguon: ["c0042", "c0046"] },
            { ten: "La Yên bộ", loai: "than-phap", trangThai: "đã luyện thành — dung hợp với Ngự Phong Quyết", moTa: "Thân pháp di chuyển như làn khói xanh, quỷ mị lặng không tiếng động, biến hóa góc độ khó tưởng tượng. Hàn Lập luyện trong rừng gai nguy hiểm, giắt thiết linh (chuông sắt) ở cổ, hông, tay, chân rèn di chuyển không phát tiếng. Tốn thể lực lớn khi thi triển liên tục. Từ c75: dung hợp với Ngự Phong Quyết (thi triển Ngự Phong trước rồi vận La Yên bộ) — thân pháp xuất quỷ nhập thần, 'kỳ ảnh bất kiến kỳ nhân'. Tại c169: thi triển tới cực hạn né đao phong Phong thuộc tính của Lục sư huynh trong trận ác đấu.", nguon: ["c0043", "c0047", "c0048", "c0075", "c0169"] },
            { ten: "Trát Nhãn kiếm pháp", loai: "bí kỹ kiếm pháp", trangThai: "đang nghiên cứu (ghi thuộc lòng)", moTa: "Kiếm kỹ ám sát lợi dụng ánh sáng và sai lầm thị giác. Không cần nội lực tinh thuần; đòi hỏi ngũ quan hơn người và thiên phú. Hàn Lập ghi tạc toàn bộ vào trí nhớ thay vì chép để giấu Mặc đại phu.", nguon: ["c0033", "c0034", "c0035", "c0036", "c0037", "c0039", "c0040"] },
            { ten: "Hoàng Long Đan", loai: "đan dược (thánh dược)", trangThai: "đã dùng một viên", moTa: "Thánh dược thoát thai hoán cốt, gia tăng công lực lớn. Hàn Lập tự phối chế bằng lục dịch thôi sanh dược tài; dùng một viên cùng Kim Tủy Hoàn giúp đột phá tầng tư.", nguon: ["c0027", "c0028"] },
            { ten: "Kim Tủy Hoàn", loai: "đan dược (thánh dược)", trangThai: "đã dùng một viên", moTa: "Thánh dược thoát thai hoán cốt, gia tăng công lực lớn. Hàn Lập tự phối chế; dùng cùng Hoàng Long Đan để đột phá tầng tư.", nguon: ["c0027", "c0028"] },
            { ten: "Thanh Linh Tán", loai: "đan dược (thánh dược)", trangThai: "đang lưu giữ (đã dùng chữa cho Lý trưởng lão)", moTa: "Thánh dược giải độc hiếm có, giải được trăm ngàn loại kịch độc. Hàn Lập tự phối chế bằng lục dịch thôi sanh dược tài. Dùng tại c71: hòa vào nước ấm cho Lý trưởng lão uống để giải hỗn hợp độc Dã Lang bang; không giải được độc còn tiềm phục sâu trong người Lý trưởng lão.", nguon: ["c0027", "c0071"] },
            { ten: "Dưỡng Tinh Đan", loai: "đan dược (thánh dược)", trangThai: "đang lưu giữ (đã dùng một số)", moTa: "Linh dược trị nội ngoại thương thần kỳ; ăn một viên lập tức cầm máu liền sẹo, ngày thứ hai tiêu trừ cả vết sẹo, không để lại dấu vết. Mạnh hơn nhiều thuốc trị thương thông thường. Hàn Lập dùng trong quá trình luyện La Yên bộ trong rừng gai. Tự phối chế bằng lục dịch thôi sanh dược tài.", nguon: ["c0027", "c0043"] },
            { ten: "Hỏa Đạn Thuật", loai: "pháp thuật công kích", trangThai: "đã cải tiến", moTa: "Pháp thuật công kích đầu tiên Hàn Lập luyện thành từ bí tịch Trường Xuân công. Phóng ra hỏa cầu đỏ rực, uy lực đủ nung chảy tinh cương và bốc hơi nước. Từ c75: Hàn Lập cải tiến — thay vì bắn hỏa cầu đi (quá chậm, cao thủ khinh công dễ né), chỉ thi triển nửa thuật, giữ hỏa cầu trên lòng bàn tay làm vũ khí cận chiến đoản binh lợi hại.", nguon: ["c0067", "c0068", "c0075"] },
            { ten: "Thiên Nhãn Thuật", loai: "pháp thuật phụ trợ", trangThai: "đã luyện thành", moTa: "Pháp thuật quan sát pháp lực, luyện rất dễ (thử là được). Vận lên mắt để xem đối phương có pháp lực hay không, pháp lực thâm hậu hay không, và có dùng pháp thuật phụ trợ trên người không. Pháp lực hiện ra dưới dạng bạch quang nhàn nhạt, dày đặc nhất ở đan điền. Ngoài ra còn gây uy hiếp tâm lý với người thường — họ cảm thấy bị nhìn thấu nội tâm. Tại c126 xác nhận Vạn Tiểu Sơn là tu tiên giả.", nguon: ["c0067", "c0068", "c0096", "c0126"] }
          ],
          linhThu: [
            { ten: "Vân sí điểu (chim lông vàng)", trangThai: "đang giữ — đậu trên vai", moTa: "Chim nhỏ màu vàng ban đầu là tai mắt của Mặc đại phu theo dõi Hàn Lập. Hàn Lập giữ lại sau khi Mặc đại phu chết. Từ c98 đậu trên vai Hàn Lập khi hắn rời Thất Huyền môn và tới Gia Nguyên Thành.", nguon: ["c0042", "c0098", "c0100"] }
          ],
          nguyenLieu: [],
          linhThao: [{ ten: "Túi mầm thất tinh thảo", trangThai: "đang giữ", moTa: "Túi xám buộc dây đỏ chứa mầm thất tinh thảo — mười năm nữa sẽ thành nguyên liệu tốt nhất chế tác bùa chú. Đổi từ thiếu nữ quầy hàng tại c137.", nguon: ["c0137"] }],
          khac: [
            { ten: "Kiếm phù / Kim Quang Chuyên phù bảo (cự kiếm xám)", loai: "phù bảo tu tiên", trangThai: "hóa tro hoàn toàn @c170 — hỏng không thể dùng", moTa: "Ban đầu là đạo phù lục vẽ tiểu kiếm xám (đoạt từ Chu Nho c91); từ c165 xác định thêm tức là Kim Quang Chuyên phù bảo mua tại Vạn Bảo Lâu. Kích hoạt hóa cự kiếm xám 2–3 trượng, sát thương cực lớn. Dùng thực chiến c167–c169: chặn Thanh giao, chém đôi Lục sư huynh. Hóa tro hoàn toàn sau trận c170 — hết tuổi thọ.", nguon: ["c0091", "c0092", "c0095", "c0096", "c0143", "c0165", "c0167", "c0168", "c0169", "c0170"] },
            { ten: "Kim Cương phù", loai: "phù lục hộ thể", trangThai: "đang giữ", moTa: "Vỗ lên người tạo lớp kim tráo (giáp kim quang) chống được pháp khí địch; làm thân pháp chậm lại. Lấy từ Kim Quang thượng nhân; khẩu quyết học từ Khẩu Tang hòa thượng. Dùng thực chiến c143.", nguon: ["c0143"] },
            { ten: "Hoàng ti sam", loai: "pháp y", trangThai: "đang mặc", moTa: "Áo tơ vàng — pháp y cấp phát cho đệ tử mới Hoàng Phong Cốc, nhận từ Lâm sư đệ c148.", nguon: ["c0148"] },
            { ten: "Thanh Diệp pháp khí (pháp khí phi hành hình lá xanh)", loai: "pháp khí phi hành", trangThai: "đang dùng", moTa: "Pháp khí phi hành đặc trưng Hoàng Phong Cốc, hình chiếc lá xanh. Dễ điều khiển nhưng tốc độ chậm hơn tuấn mã thường một chút vì đệ tử trong cốc đông. Hàn Lập dùng phi hành lần đầu c149.", nguon: ["c0148", "c0149"] },
            { ten: "Liệt Dương kiếm", loai: "pháp khí — kiếm", trangThai: "đang giữ", moTa: "Kiếm pháp khí cấp phát cho đệ tử mới Hoàng Phong Cốc, nhận từ Lâm sư đệ c148.", nguon: ["c0148"] },
            { ten: "Lãnh Nguyệt đao", loai: "pháp khí — đao", trangThai: "đang giữ", moTa: "Đao pháp khí cấp phát cho đệ tử mới Hoàng Phong Cốc, nhận từ Lâm sư đệ c148.", nguon: ["c0148"] },
            { ten: "Thập Bội Trữ Vật (túi trữ vật)", loai: "túi trữ vật cấp thấp", trangThai: "đang dùng", moTa: "Túi trữ vật miệng nhỏ màu đen cấp phát cho đệ tử mới; cấp thấp, không nhận chủ — ai cướp được túi thì chiếm hữu toàn bộ vật bên trong. Ba kiêng kỵ: không chứa quá giới hạn; không thu sinh linh sống; không để lộ trước người tu tiên khác. Nhận từ Lâm sư đệ c148.", nguon: ["c0148"] },
            { ten: "Tàn Phiến (pháp bảo)", loai: "pháp bảo ẩn hình", trangThai: "đang dùng — phủ che bình thần bí trong Bách Dược Viên", moTa: "Mảnh tàn của pháp bảo, hình như tấm vải trong suốt đầy nếp nhăn, viền xung quanh rách nát, mặt trên thỉnh thoảng lóe ánh sáng trắng. Bao quanh vật thể sẽ ẩn hình hoàn toàn, một tia linh khí cũng không tiết ra ngoài và không để linh khí ngoài thâm nhập vào — Thiên Nhãn Thuật cũng không phá được. Do tu sĩ Kết Đan kỳ hoặc Nguyên Anh kỳ luyện chế. Hàn Lập đổi bằng một tờ Phi hành phù; xác nhận công hiệu hút linh khí tại c141. Từ c151: phủ lên trên bình thần bí đã chôn ở góc Bách Dược Viên để che giấu dấu hiệu thu nạp linh khí bất thường của bình — nhờ đó linh khí khu vực chỉ đậm hơn chút ít, không gây nghi ngờ.", nguon: ["c0139", "c0140", "c0141", "c0151"] },
            { ten: "Kim Trúc bút", loai: "dị bảo chế phù", trangThai: "đang giữ", moTa: "Bút lông màu vàng rực dùng họa phù. Ngòi bút bằng lông yêu thú cấp hai Kim Tình Viên, thân bút bằng hỗn hợp kim tinh và ô thiết, do tu sĩ Trúc Cơ kỳ tế luyện ba ngày ba đêm. Di vật của tộc thiếu nữ bán cho Hàn Lập; giúp rót linh lực vào bút rất thuận lợi khi chế phù.", nguon: ["c0137", "c0138"] },
            { ten: "Không bạch phù chỉ", loai: "phù lục sơ cấp bậc thấp", trangThai: "đang giữ", moTa: "Phù trắng bậc thấp dùng làm nền vẽ linh phù. Hàn Lập đổi được cùng Phi hành phù tại c132.", nguon: ["c0132"] },
            { ten: "Mộc bài mộc xanh (lệnh bài Bách Dược Viên)", loai: "lệnh bài cấm chế", trangThai: "đang giữ", moTa: "Khối mộc bài màu xanh biếc dùng điều khiển cấm chế ra vào Bách Dược Viên. Mã sư bá giao khi bàn giao quyền quản lý dược viên cho Hàn Lập.", nguon: ["c0151"] },
            { ten: "Hoàng Đồng bình (pháp khí trữ vật)", loai: "pháp khí — trữ vật", trangThai: "đang giữ", moTa: "Pháp khí trữ vật Trúc Cơ kỳ luyện chế, cất giữ vật phẩm không để linh lực phát tán ra ngoài. Là một trong ba pháp khí Hàn Lập nhận được do Diệp Tính bồi thường (dù bị hối ước). Hạn chế: chỉ giữ được lục dịch trong bình thần bí tối đa khoảng một ngày rồi lục dịch biến mất — xác nhận lục dịch không đơn thuần là thiên địa linh khí ngưng tụ.", nguon: ["c0151", "c0152"] },
            { ten: "Ngọc đồng Trúc Cơ đan (bản phục chế)", loai: "ngọc giản lưu trữ đan phương", trangThai: "đang giữ", moTa: "Ngọc đồng màu xanh mướt ghi đầy đủ phương pháp luyện chế Trúc Cơ đan — từ nguyên liệu đến cách ngưng luyện thành đan. Bản phục chế từ ngọc đồng gốc tại tàng thư Nhạc Lộc điện, giá 10 linh thạch. Nhược điểm then chốt: bắt buộc phải dùng tiên thiên chân hỏa (chỉ Trúc Cơ kỳ mới có) để luyện thành.", nguon: ["c0155"] },
            { ten: "Ngọc đồng Định nhan đan (bản phục chế)", loai: "ngọc giản lưu trữ đan phương", trangThai: "đang giữ", moTa: "Ngọc đồng màu đỏ rực ghi phương pháp luyện chế Định nhan đan — đan chỉ dùng để giữ dung nhan thanh xuân vĩnh trú, không có tác dụng tu luyện. Ưu điểm: không cần tiên thiên chân hỏa, dược liệu thường thấy — nhưng cần dược tính ngàn năm trở lên. Bản phục chế giá 10 linh thạch; Hàn Lập giữ lại vì có thể tự luyện và bán cho người tu tiên khác.", nguon: ["c0155"] },
            { ten: "Ngân Ti đỉnh (đan lô)", loai: "pháp khí — đan lô", trangThai: "đang giữ", moTa: "Đan lô màu bạc nhỏ nhắn, tinh phẩm trong các đan lô của Hứa lão, thượng phẩm pháp khí. Hàn Lập chọn vì nhỏ gọn, tiết kiệm không gian túi trữ vật. Giá 32 linh thạch cấp thấp. Dùng để luyện đan dược tại huyền dương hỏa địa.", nguon: ["c0156"] },
            { ten: "Thăng Tiên Lệnh (lệnh bài đen)", loai: "vật nghịch thiên", trangThai: "đã nộp cho Hoàng Phong Cốc @c144-145 — đổi lấy tư cách nhập môn", moTa: "Lệnh bài một mặt khắc hai chữ 'Thăng Tiên', thu từ tro tàn Chu Nho c93. Do Hoàng Phong Cốc phát ra cho tổ thượng Tần gia. Người cầm tới đúng môn phái phát lệnh được ban Trúc Cơ đan + tư cách nhập môn — 'nhận lệnh không nhận người'. Vỡ lẽ lai lịch qua Thanh Khê bút lục c141. Hàn Lập nộp lệnh gia nhập Hoàng Phong Cốc c144-145; nhường Trúc Cơ đan cho cháu Diệp Tính.", nguon: ["c0093", "c0141", "c0144", "c0145"] },
            { ten: "Tần thị tộc phổ", loai: "sách gia phả", trangThai: "đang giữ", moTa: "Gia phả tộc Tần của Chu Nho (Tần Diệp Lĩnh), thu được từ tro tàn sau khi Chu Nho bị giết tại c93.", nguon: ["c0093"] },
            { ten: "Văn long giới (một trong cặp)", loai: "tín vật — nhẫn hình rồng", trangThai: "đã trao cho Nghiêm thị @c109 — nay trong tay bà", moTa: "Một chiếc trong cặp nhẫn khắc hoa văn rồng (long văn giới chỉ). Tín vật Mặc đại phu để lại. Hàn Lập ném vào phòng Nghiêm thị để xác nhận thân phận; khớp hoàn hảo với chiếc Nghiêm thị đang đeo, hoa văn rồng liền mạch không kẽ hở.", nguon: ["c0109"] }
          ]
        }
      },
      uuTien: 1,
      nguon: ["c0001", "c0002", "c0003", "c0004", "c0005", "c0006", "c0007", "c0008", "c0009", "c0010", "c0011", "c0012", "c0013", "c0014", "c0015", "c0016", "c0017", "c0018", "c0019", "c0020", "c0021", "c0022", "c0023", "c0024", "c0025", "c0026", "c0027", "c0028", "c0029", "c0030", "c0031", "c0032", "c0033", "c0034", "c0035", "c0036", "c0037", "c0038", "c0039", "c0040", "c0041", "c0042", "c0043", "c0044", "c0045", "c0046", "c0047", "c0048", "c0049", "c0050", "c0051", "c0052", "c0053", "c0054", "c0055", "c0056", "c0057", "c0058", "c0059", "c0060", "c0061", "c0062", "c0063", "c0064", "c0065", "c0066", "c0067", "c0068", "c0069", "c0070", "c0071", "c0072", "c0073", "c0074", "c0075", "c0076", "c0077", "c0078", "c0079", "c0080", "c0081", "c0082", "c0083", "c0084", "c0085", "c0086", "c0087", "c0088", "c0089", "c0090", "c0091", "c0092", "c0093", "c0094", "c0095", "c0096", "c0097", "c0098", "c0099", "c0100", "c0101", "c0102", "c0103", "c0104", "c0105", "c0106", "c0107", "c0108", "c0109", "c0110", "c0111", "c0112", "c0113", "c0114", "c0115", "c0116", "c0117", "c0118", "c0119", "c0120", "c0121", "c0122", "c0123", "c0124", "c0125", "c0126", "c0127", "c0128", "c0129", "c0130", "c0131", "c0132", "c0133", "c0134", "c0135", "c0136", "c0137", "c0138", "c0139", "c0140", "c0141", "c0142", "c0143", "c0144", "c0145", "c0146", "c0147", "c0148", "c0149", "c0150", "c0151", "c0152", "c0153", "c0154", "c0155", "c0156", "c0157", "c0158", "c0159", "c0160", "c0161", "c0162", "c0163", "c0164", "c0165", "c0166", "c0167", "c0168", "c0169", "c0170"]
    },
    {
      id: "mac-dai-phu",
      name: "Mặc đại phu",
      cn: "墨大夫",
      aliases: ["Mặc lão", "Mặc phu", "Mặc Cư Nhân"],
      tenThat: "Mặc Cư Nhân",
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn — Cung Phụng đường", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân vô linh căn — cao thủ võ lâm (Ma Ngân Thủ); tự tu Trường Xuân công tới tầng 4 (vì không có linh căn)",
      trangThai: "tu-vong",
      blurb: "Thầy thuốc bí ẩn của Thất Huyền môn. Tên thật Mặc Cư Nhân — từng là cao thủ võ lâm Lam Châu biệt danh 'quỷ thủ', thực chất mới 30 tuổi nhưng bị tà khí xâm cốt lão hóa cực nhanh. Chân tướng: là PHÀM NHÂN vô linh căn, không phải tu tiên giả thật; bị nguyên thần Dư Tử Đồng (kẻ hắn đầu độc giết hại) chui vào thân ký sinh, bị 'huyết tiến âm hồn chú' trớ chú khiến già nhanh mỗi ngày. Mọi pháp thuật quỷ đạo (Thất Quỷ Phệ Hồn đại pháp, Định Thần Phù) đều do Dư Tử Đồng truyền. Là công cụ bị Dư Tử Đồng lợi dụng thực hiện đoạt xá Hàn Lập. Chết vì đoạt xá thất bại — pháp lực không đủ hơn Hàn Lập, bị 'cắn ngược'.",
      vaiTro: "Sư phụ của Hàn Lập",
      tinhCach: [
        { text: "Lạnh lùng, ít nói, vô biểu cảm trong sinh hoạt hằng ngày", chuong: 6 },
        { text: "Khi phát hiện thể chất kỳ dị Hàn Lập, kích động đến mức điên cuồng, suýt mất kiểm soát", chuong: 8 },
        { text: "Nghiêm cấm tiết lộ Vô danh khẩu quyết — trịnh trọng bất thường với công pháp này", chuong: 6 },
        { text: "Nắm bắt tâm lý đệ tử, biết dùng tiền bạc làm đòn bẩy thúc đẩy tu luyện", chuong: 14 },
        { text: "Sòng phẳng: tuyên bố thẳng quan hệ với Hàn Lập chỉ là lợi dụng lẫn nhau, không có tình thầy trò thật sự", chuong: 29 }
      ],
      tabs: {
        diem: [
          { text: "Hơn sáu mươi tuổi về ngoại hình, tóc bạc, da nhăn, ho khan liên tục — trông như sắp ngã; thực chất mới 30 tuổi thật, bị tà khí xâm cốt lão hóa cực nhanh", chuong: 5 },
          { text: "Vốn không phải đệ tử Thất Huyền môn gốc; được Vương môn chủ mời nhập môn sau khi cứu mạng lão", chuong: 6 },
          { text: "Có một thân công phu nhưng chưa từng để đệ tử thấy thân thủ", chuong: 6 },
          { text: "Ngày ngày ôm khư khư cuốn Trường sinh kinh — mưu cầu sống quá ngàn năm", chuong: 7 },
          { text: "Sức khỏe suy sụp rõ rệt sau 4 năm: ho khan liên miên, lão hóa nhanh, bệnh ngày càng nặng", chuong: 15 }
        ],
        kinhLich: [
          { chuong: 5, importance: "major", text: "Bước ra từ rừng rậm, thiếu nhân thủ, chỉ ngay vào hai ký danh đệ tử Hàn Lập và Trương Thiết bắt về Thần thủ cốc." },
          { chuong: 6, importance: "major", text: "Chính thức nhận Hàn Lập và Trương Thiết làm đệ tử ký danh; truyền Vô danh khẩu quyết với điều kiện tra khảo." },
          { chuong: 8, importance: "major", text: "Kiểm tra và phát hiện thể chất kỳ dị của Hàn Lập; thu làm thân truyền đệ tử. Đột ngột đổi ý nhận cả Trương Thiết với tâm pháp khác." },
          { chuong: 9, importance: "normal", text: "Cấp thạch thất luyện công riêng và dược vật trân quý cho Hàn Lập; truyền Tượng giáp công cho Trương Thiết." },
          { chuong: 14, importance: "normal", text: "Hứa thưởng bạc trắng tăng gấp đôi mỗi tầng khẩu quyết Hàn Lập đột phá; phong tỏa Thần Thủ Cốc để hắn chuyên tâm tu luyện." },
          { chuong: 15, importance: "normal", text: "Hạ sơn tìm dược tài — rời Thất Huyền môn, để Hàn Lập ở lại Thần Thủ Cốc một mình. Sức khỏe suy sụp, dược vật trợ lực đã cạn kiệt." },
          { chuong: 28, importance: "major", text: "Trở về Thần Thủ Cốc sau một năm vắng mặt, dẫn theo một người thần bí mặc lục bào che kín mặt. Sắc mặt hôi bại không sinh khí như đại hạn sắp đến. Kiểm tra tiến độ tu luyện của Hàn Lập." },
          { chuong: 29, importance: "major", text: "Lộ chân tướng là cao thủ thực lực cao sâu: ra tay điểm huyệt chế trụ Hàn Lập thần tốc. Tự xưng tên thật Mặc Cư Nhân; tuyên bố quan hệ hai bên chỉ là lợi dụng lẫn nhau." },
          { chuong: 30, importance: "major", text: "Phơi bày toàn bộ thân thế: 30 tuổi thật, từng là cao thủ võ lâm Lam Châu hiệu 'quỷ thủ'; bị thân tín ám toán, nhờ kỳ thư tìm cách phá giải nhưng bị tà khí xâm cốt lão hóa cực nhanh; chỉ còn sống thêm khoảng một năm. Cần Hàn Lập luyện Trường Xuân công tới tầng tư để kích thích bí huyệt phá giải." },
          { chuong: 41, importance: "normal", text: "Đọc thư Hàn Lập để lại, bóp nát thư, thả Vân sí điểu đi theo dõi Hàn Lập. Nhắc tới 'kế hoạch' lớn gắn với mốc bốn tháng; tuyên bố 'thần cản sát thần, phật cản sát phật', cười rộ phong cuồng." },
          { chuong: 42, importance: "normal", text: "Nghe Dư Tử Đồng cảnh báo qua truyền âm trong đầu; đang luyện công pháp do Dư Tử Đồng cấp (đã thử trên động vật, có con vật chết). Đang rải trận pháp bằng bột xương dã thú trong thạch thất; hoàn toàn không biết Hàn Lập đã phát hiện thủ đoạn giám thị của mình." },
          { chuong: 44, importance: "normal", text: "Giao giải dược Thi Trùng Hoàn (viên đan màu đen) cho Hàn Lập như mồi nhử để dụ hắn đồng ý cho kiểm tra công lực. Lão hóa rõ rệt hơn, trông như ông lão bảy mươi." },
          { chuong: 45, importance: "major", text: "Bắt mạch xác nhận công lực rồi trở mặt: hô 'Thắt' khống chế thân thể Hàn Lập, định điểm ma huyệt trước ngực. Thất bại vì cơ thể Hàn Lập cứng như thiết bản; bị Hàn Lập thoát khỏi tay nắm nhờ cổ tay mềm dẻo như cá chạch. Bị Hàn Lập rút kiếm lần đầu lộ nanh vuốt." },
          { chuong: 46, importance: "normal", text: "Bị Hàn Lập ám sát một kiếm suýt thủng bụng; phải dùng Thiết bản kiều mới thoát, lần đầu trong nửa đời giang hồ bị áp sát tử thần đến mặt xanh lét run rẩy. Thừa nhận đã coi nhẹ Hàn Lập, chuẩn bị nghiêm túc dùng tuyệt kỹ thật." },
          { chuong: 47, importance: "normal", text: "Thi triển Ma Ngân Thủ — tuyệt kỹ thành danh của mình. Hai tay bành trướng chuyển màu trắng bạc cứng chắc như bạc thật. Chủ ý chỉ dùng nửa thành công lực để bắt sống Hàn Lập, không giết." },
          { chuong: 49, importance: "normal", text: "Bị bạch quang mù tạm thời; dựa Ma Ngân Thủ và công phu nghe tiếng gió định vị bắt được mũi kiếm của Hàn Lập. Bị tiêm trùy giấu trong mũi kiếm rỗng đâm vào gáy, chỉ trầy da nhờ bản năng né thoát thần tốc. Tự phong huyết mạch cầm máu." },
          { chuong: 50, importance: "major", tieuDe: "Bị hạ độc Triền Hương Ti", text: "Nhận ra bị trúng Triền Hương Ti — độc dược từ tờ phương thuốc chính lão chép rồi kẹp trong dược thư bỏ quên, nay bị Hàn Lập đọc lén và bôi lên binh khí. Biến sắc kinh hãi vì thứ này nằm ngoài dự liệu; cố chống đỡ nhưng vết thương ở gáy đang phát độc." },
          { chuong: 51, importance: "normal", tieuDe: "Điều Thiết Nô bắt Hàn Lập", text: "Không ngại Triền Hương Ti của Hàn Lập — có chỗ dựa. Lệnh Thiết Nô bắt giữ Hàn Lập nhưng ra lệnh 'điểm nhẹ thôi' vì Hàn Lập còn 'có đại dụng'. Lấy hộ tâm kính của Hàn Lập (giải thích vì sao điểm huyệt trước thất bại). Giở hộp gỗ ngân nhận — dụng cụ thi thuật sắp tới." },
          { chuong: 52, importance: "major", tieuDe: "Phát động Thất Quỷ Phệ Hồn đại pháp", text: "Tự cắm bảy dao nhọn cán hình đầu quỷ vào hai vai, hai chân, bụng và ngực. Nhập định, kết ấn hoa sen, niệm chú; mặt nổi quỷ vụ/hắc vụ đậm đen tạo xúc tu. Hét tên bí thuật 'Thất Quỷ Phệ Hồn đại pháp'." },
          { chuong: 53, importance: "major", tieuDe: "Hồi phục tuổi trẻ", text: "Hoàn thành Thất Quỷ Phệ Hồn đại pháp — bảy đầu quỷ hút sạch quỷ vụ trên mặt, lão trở về dung mạo nam tử ~30 tuổi, mỹ nam tử mị lực. Vẫn chưa buông tha Hàn Lập — mục đích thật với hắn còn ẩn." },
          { chuong: 54, importance: "major", tieuDe: "Khởi động đoạt xá bằng Định Thần Phù", text: "Tuyên bố thẳng ý định cướp thân Hàn Lập. Niệm chú dán Định Thần Phù lên sau gáy Hàn Lập — khống chế hoàn toàn thân thể hắn. Lộ quá khứ mỹ nam tử 'làm điên đảo giang hồ hiệp nữ'." },
          { chuong: 55, importance: "normal", tieuDe: "Tự xây nhà đá hành thuật", text: "Dẫn Hàn Lập vào căn nhà đá kín mít tự xây; đặt Hàn Lập giữa trận đồ khảm ngọc thạch. Ra lệnh Thiết Nô canh ngoài 'giết không tha'. Đối thoại căng thẳng với nguyên thần Dư Tử Đồng — ép thề độc vì nghi y ôm hận lừa gạt." },
          { chuong: 56, importance: "major", tieuDe: "Thực hiện nghi thức đoạt xá", text: "Cắm kim châm vào bí huyệt tăng tinh lực, kích hoạt trận đồ bằng hồng quang, niệm chú ngữ thôi miên Hàn Lập. Thực ra bị Dư Tử Đồng giăng bẫy: lão vô linh căn, tự tu tầng 4 bằng pháp lực mượn, không hơn được Hàn Lập tầng 6-7 → bị cắn ngược." },
          { chuong: 57, importance: "major", tieuDe: "CHẾT — đoạt xá thất bại", text: "Chết 'vô thanh vô tức' do đoạt xá thất bại, nguyên thần bị Hàn Lập thôn phệ ngược. Ngoại hình lúc chết: hóa lão cực độ, tóc bạc, khô gầy tiều tụy, già thêm ~10 tuổi, mắt trợn tròn hoảng sợ." },
          { chuong: 62, importance: "normal", tieuDe: "Di thư và kỳ độc thi trung hoàn", text: "Hàn Lập lục soát thi thể, phát hiện di thư cài sẵn của lão: đã hạ kỳ độc thi trung hoàn từ trước (thứ thật ra là kỳ độc phát tác 1-2 năm, chỉ noãn dương bảo ngọc mới giải được — không phải trùng noãn như tuyên bố trước đó), đặt giao dịch ràng buộc Hàn Lập tới nhà an bài thân nhân để đổi lấy noãn dương bảo ngọc." }
        ],
        tuViMoc: [
          { chuong: 29, canhGioi: "Cao thủ võ lâm phàm trần — Ma Ngân Thủ", text: "Ra tay điểm huyệt Hàn Lập cực nhanh như u linh, thân pháp vượt xa phàm nhân thường. Sở hữu tuyệt kỹ thành danh Ma Ngân Thủ — hai tay luyện cứng trắng bạc như bạc thật, đao thương bất nhập, bắt được lưỡi kiếm trực tiếp." },
          { chuong: 59, canhGioi: "Phàm nhân vô linh căn — Trường Xuân công tầng 4 (tự tu thất bại)", text: "Dư Tử Đồng tiết lộ: Mặc đại phu là phàm nhân KHÔNG có linh căn, không thể tu tiên thực thụ. Tự tu Trường Xuân công chỉ tới tầng 4 bằng pháp lực mượn/bí thuật. Đây là lý do hắn sa vào bẫy của Dư Tử Đồng — pháp lực không hơn Hàn Lập tầng 6-7 nên đoạt xá thất bại." }
        ],
        nhanMach: [
          { ten: "Hàn Lập", tag: "su-mon", quanHe: "Thân truyền đệ tử trên danh nghĩa; thực chất lợi dụng để phá giải" },
          { ten: "Trương Thiết", tag: "su-mon", quanHe: "Đệ tử (tâm pháp riêng)" },
          { ten: "Vương môn chủ", tag: "an-nhan", quanHe: "Người mời nhập môn sau khi được Mặc đại phu cứu mạng" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [
            { ten: "Bí dược chậm lão hóa", loai: "đan dược (tự phối)", trangThai: "đang dùng", moTa: "Loại thuốc Mặc Cư Nhân tự phối chế theo công thức trong kỳ thư, giúp làm chậm tốc độ lão hóa để cầm cự tới nay.", nguon: ["c0030"] }
          ],
          congPhap: [
            { ten: "Trường Xuân công", loai: "công pháp", trangThai: "đã truyền dạy cho Hàn Lập", moTa: "Công pháp Mặc đại phu tìm được từ kỳ thư; truyền cho Hàn Lập với tên 'vô danh khẩu quyết'. Cần người tu có linh căn. Luyện tới tầng tư có thể dùng Trường Xuân khí kích thích bí huyệt.", nguon: ["c0006", "c0030"] },
            { ten: "Trường sinh kinh", loai: "sách tu luyện", trangThai: "đang nghiên cứu", moTa: "Cuốn sách về tu thân dưỡng tính và kéo dài tuổi thọ; Mặc đại phu ôm khư khư.", nguon: ["c0007"] },
            { ten: "Kỳ thư thần bí", loai: "sách", trangThai: "đang giữ", moTa: "Quyển sách thâm ảo Mặc Cư Nhân vô tình được ở một nơi thần bí; chứa cách khôi phục công lực, cách phá giải tình cảnh của hắn, và công thức bí dược chậm lão hóa.", nguon: ["c0030"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      uuTien: 2,
      nguon: ["c0005", "c0006", "c0007", "c0008", "c0009", "c0010", "c0011", "c0013", "c0014", "c0015", "c0020", "c0021", "c0022", "c0023", "c0027", "c0028", "c0029", "c0030", "c0031", "c0032", "c0035", "c0039", "c0040", "c0041", "c0042", "c0044", "c0045", "c0046", "c0047", "c0048", "c0049", "c0050", "c0062"]
    },
    {
      id: "truong-thiet",
      name: "Trương Thiết",
      cn: "张铁",
      aliases: ["Trương ca", "Khúc Hồn"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Phàm nhân (võ giả) — Tượng giáp công tầng 3; di thể cải tạo thành thi nhân 'Khúc Hồn'",
      trangThai: "mat-hon",
      blurb: "Bạn thân và đồng môn của Hàn Lập tại Thất Huyền môn. Xuất thân từ nhà hàng ăn, tính chu đáo tốt bụng. Sau khi rời môn bí ẩn, bị Mặc đại phu và Dư Tử Đồng bắt cóc: hồn phách bị hủy, di thể bị luyện thành thi nhân bằng Tượng Giáp công + luyện thi thuật. Được Hàn Lập đặt tên 'Khúc Hồn' và khống chế bằng Dẫn hồn chung — nay là thi nhân phục tùng Hàn Lập tuyệt đối.",
      vaiTro: "Bạn đồng môn thân thiết của Hàn Lập",
      tinhCach: [
        { text: "Chu đáo, tốt bụng — mang bánh bao cho Hàn Lập khi nhớ ra bạn chưa ăn", chuong: 6 },
        { text: "Kiên trì khổ luyện không ngại đau đớn, ngồi dưới thác nước chịu trùng kích để luyện Tượng giáp công", chuong: 9 },
        { text: "Sẵn lòng giúp bạn thử mở bình dù không biết lý do; không hỏi nhiều", chuong: 11 }
      ],
      tabs: {
        diem: [
          { text: "Nhà bán quán (gia đình làm hàng ăn) nên quen lấy đồ ăn", chuong: 6 },
          { text: "Khổ tu Vô danh khẩu quyết không kém Hàn Lập nhưng thể nội hoàn toàn không có phản ứng", chuong: 8 },
          { text: "Sức lực lớn phi thường: hai tay nhấc nổi hơn mười thùng nước, lên xuống núi nhanh như bay", chuong: 11 }
        ],
        kinhLich: [
          { chuong: 5, importance: "normal", text: "Cùng Hàn Lập được Mặc đại phu chọn làm ký danh đệ tử tại Thần thủ cốc." },
          { chuong: 6, importance: "normal", text: "Đưa bánh bao cho Hàn Lập; được Hàn Lập gọi là Trương ca." },
          { chuong: 8, importance: "major", text: "Qua khảo hạch nhờ Mặc đại phu đột ngột đổi ý — đề nghị tâm pháp khác phù hợp với hắn." },
          { chuong: 9, importance: "major", text: "Được truyền Tượng giáp công; chỉ sau hai tháng đã luyện tầng 1 tới đỉnh phong, đang ngồi dưới thác nước chuẩn bị đột phá tầng 2." },
          { chuong: 11, importance: "normal", text: "Giúp Hàn Lập thử vặn mở bình thần bí nhưng cũng thất bại — bình hoàn toàn không nhúc nhích dù dùng hết sức." },
          { chuong: 13, importance: "normal", text: "Kể cho Hàn Lập nghe sự tàn khốc của Tượng giáp công tầng 1: Mặc đại phu bôi thuốc hôi và dùng gậy gỗ đánh rèn gân cốt, đêm không ngủ yên." },
          { chuong: 15, importance: "major", text: "Hai năm trước luyện thành Tượng giáp công tầng 3 rồi đột nhiên biến mất, chỉ để lại thư cáo từ nói muốn đi lịch lãm giang hồ — Thất Huyền môn chấn động." },
          { chuong: 63, importance: "major", tieuDe: "Nhận ra qua di thể — hồn phách đã mất", text: "Hàn Lập khống chế cự hán thiết nô bằng Dẫn hồn chung, rúng động nhận ra khuôn mặt cự hán chính là Trương Thiết — bạn thân năm xưa. Di thể đã bị Mặc đại phu cải tạo thành thi nhân, hồn phách hoàn toàn không còn." },
          { chuong: 64, importance: "normal", tieuDe: "Được đặt tên Khúc Hồn", text: "Hàn Lập đặt tên 'Khúc Hồn' cho di thể. Sự thật: Mặc đại phu và Dư Tử Đồng đã bắt cóc, hủy hồn phách, dùng Tượng Giáp công kết hợp luyện thi thuật (do Dư Tử Đồng cung cấp) tạo thành thi nhân. Khúc Hồn nhận lệnh san phẳng nhà đá." }
        ],
        tuViMoc: [
          { chuong: 9, canhGioi: "Tượng giáp công — tầng 1 đỉnh phong", text: "Da thịt dày chắc hơn, lực khí bền bỉ hơn; đang ngồi dưới thác để chuẩn bị đột phá tầng 2.", importance: "major" },
          { chuong: 15, canhGioi: "Tượng giáp công — tầng 3", text: "Luyện thành tầng 3 rồi rời môn bí ẩn — thông tin qua hồi cố, không có chi tiết quá trình đột phá.", importance: "major" }
        ],
        nhanMach: [
          { ten: "Hàn Lập", tag: "ban-be", quanHe: "Bạn thân đồng môn" },
          { ten: "Mặc đại phu", tag: "su-mon", quanHe: "Sư phụ truyền Tượng giáp công" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [],
          congPhap: [
            { ten: "Tượng giáp công", loai: "công pháp luyện thể", trangThai: "đã luyện (tầng 3)", moTa: "Do Mặc đại phu truyền; môn võ công ngoại gia chín tầng cực hiếm. Luyện thành tầng 3 thì rời môn.", nguon: ["c0009", "c0013", "c0015"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      nguon: ["c0005", "c0006", "c0007", "c0008", "c0009", "c0010", "c0011", "c0013", "c0015", "c0063", "c0064"]
    },
    {
      id: "tam-thuc",
      name: "Tam thúc (Lão Hàn béo)",
      cn: null,
      aliases: ["Lão Hàn béo", "Hàn béo mập"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn — ngoại môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân (ngoại đệ tử, không tu luyện)",
      trangThai: "song",
      blurb: "Chú ruột và người mở ra con đường tu tiên cho Hàn Lập. Mặt béo tròn, đại chưởng quỹ Xuân Hương tửu lâu tại Thanh Ngưu trấn, đệ tử ngoại môn Thất Huyền môn. Tốt bụng, khéo léo ứng xử, biết lo xa cho cháu.",
      vaiTro: "Chú ruột Hàn Lập, người tiến cử nhập Thất Huyền môn",
      tinhCach: [
        { text: "Tốt bụng, hay lén cho cha mẹ Hàn Lập đồ ăn; không có con nên tiến cử Hàn Lập", chuong: 1 },
        { text: "Khéo léo ứng xử — kín đáo đút lót Vương hộ pháp để nhờ chiếu cố cháu", chuong: 2 }
      ],
      tabs: {
        diem: [
          { text: "Đại chưởng quỹ Xuân Hương tửu lâu ở Thanh Ngưu trấn — tửu lâu thuộc Thất Huyền môn", chuong: 2 },
          { text: "Được gia tộc Hàn gọi là người trăm năm mới có một", chuong: 1 }
        ],
        kinhLich: [
          { chuong: 1, importance: "major", text: "Về thăm nhà, đề nghị tiến cử Hàn Lập dự khảo thí Thất Huyền môn; cha Hàn Lập đồng ý." },
          { chuong: 2, importance: "major", text: "Dẫn Hàn Lập tới Xuân Hương tửu lâu ở Thanh Ngưu trấn; đút lót Vương hộ pháp để nhờ chiếu cố cháu." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hàn Lập", tag: "ho-hang", quanHe: "Cháu ruột" },
          { ten: "Hàn phụ", tag: "ho-hang", quanHe: "Anh ruột" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0001", "c0002"]
    },
    {
      id: "vuong-ho-phap",
      name: "Vương hộ pháp",
      cn: null,
      aliases: ["Vương lão đệ"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ (võ công không yếu)",
      trangThai: "song",
      blurb: "Hộ pháp Thất Huyền môn, người dẫn đợt thứ mười bảy đệ tử mới về tông môn. Hán tử cao gầy khoảng bốn mươi tuổi, ngạo mạn khi đi đường nhưng cung kính trước cấp trên.",
      vaiTro: "Hộ pháp Thất Huyền môn",
      tinhCach: [
        { text: "Ngạo mạn với kẻ dưới, nhận hối lộ thì hòa hoãn", chuong: 2 },
        { text: "Xiểm nịnh, cung kính trước Nhạc đường chủ", chuong: 3 }
      ],
      tabs: {
        diem: [
          { text: "Thân thủ nhanh nhẹn, quen biết nhiều người trong môn, đường tiến thân lạc quan", chuong: 2 }
        ],
        kinhLich: [
          { chuong: 2, importance: "major", text: "Tự thân tới Xuân Hương tửu lâu đón nhóm đệ tử thứ mười bảy; nhận túi nặng của Lão Hàn béo, đồng ý chiếu cố Hàn Lập." },
          { chuong: 3, importance: "normal", text: "Dẫn nhóm tới Thái Hà sơn, bị Nhạc đường chủ trách đến trễ hai ngày." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Nhạc đường chủ", tag: "su-mon", quanHe: "Cấp trên trong Thất Huyền môn" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0002", "c0003", "c0005"]
    },
    {
      id: "nhac-duong-chu",
      name: "Nhạc đường chủ",
      cn: "乐堂主",
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn — Bách Đoán đường", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ",
      trangThai: "song",
      blurb: "Đường chủ Bách Đoán đường của Thất Huyền môn. Mặt mũi hồng hào, uy nghiêm, người điều phối và công bố kết quả trắc thí tuyển đệ tử.",
      vaiTro: "Đường chủ Bách Đoán đường",
      tinhCach: [
        { text: "Nghiêm nghị, khinh khỉnh, ra lệnh dứt khoát", chuong: 3 }
      ],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 3, importance: "normal", text: "Tiếp đón nhóm thứ mười bảy, trách Vương hộ pháp đến trễ, lệnh đưa đám trẻ nghỉ đêm." },
          { chuong: 5, importance: "major", text: "Công bố kết quả trắc thí: sáu người vào Bách Đoán đường, Vũ Nham vào Thất Tuyệt đường, Trương Thiết và Hàn Lập thành ký danh đệ tử." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0003", "c0004", "c0005"]
    },
    {
      id: "vu-nham",
      name: "Vũ Nham",
      cn: "武岩",
      aliases: ["Vũ thiếu gia"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn — Thất Tuyệt đường", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân — hạch tâm đệ tử Thất Tuyệt đường",
      trangThai: "song",
      blurb: "Mười ba tuổi, con nhà võ quán, có biểu tỷ là Huyền phu nhân — vợ Mã phó môn chủ. Nhờ thế lực gia đình được vượt tuổi quy định, leo đỉnh sơn nhai đầu tiên và được nhận vào Thất Tuyệt đường học tuyệt kỹ.",
      vaiTro: "Hạch tâm đệ tử Thất Tuyệt đường, có thế lực sau lưng",
      tinhCach: [
        { text: "Ngạo mạn, khinh người — leo lên đỉnh rồi giơ ngón cái chỉ xuống kẻ chưa tới, cười lớn bỏ đi", chuong: 4 }
      ],
      tabs: {
        diem: [
          { text: "Con nhà võ quán, từng tập võ — thân thể cường tráng hơn bạn cùng lứa", chuong: 3 },
          { text: "Vào Thất Tuyệt đường nhờ biểu tỷ là Huyền phu nhân (vợ Mã phó môn chủ), không phải thực lực", chuong: 5 }
        ],
        kinhLich: [
          { chuong: 3, importance: "normal", text: "Người lớn nhất xe (13 tuổi), làm đại ca đám trẻ." },
          { chuong: 4, importance: "normal", text: "Dẫn đầu cuộc trắc thí Luyện Cốt Nhai, leo lên đỉnh sớm nhất." },
          { chuong: 5, importance: "major", text: "Được lam bào lão giả tiếp nhận vào Thất Tuyệt đường làm hạch tâm đệ tử." },
          { chuong: 66, importance: "normal", tieuDe: "Tái ngộ — Hàn Lập trả đũa", text: "Tái ngộ Hàn Lập tại Thần thủ cốc với thái độ ngạo mạn như trước. Bị Hàn Lập cố ý tăng liều thuốc trả đũa nhưng vẫn được chữa khỏi bệnh." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Huyền phu nhân", tag: "ho-hang", quanHe: "Biểu tỷ (chị họ)" },
          { ten: "Mã phó môn chủ", tag: "dong-minh", quanHe: "Biểu tỷ phu (chồng chị họ), phó môn chủ Thất Huyền môn" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0003", "c0004", "c0005", "c0066"]
    },
    {
      id: "truong-quan",
      name: "Trương Quân",
      cn: "张君",
      aliases: ["Lạnh sư huynh", "Sư huynh cao gầy"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ",
      trangThai: "song",
      blurb: "Sư huynh bảo hộ Hàn Lập trong trắc thí Luyện Cốt Nhai. Mặt lạnh lùng, thân thể cường kiện. Đã dang tay sẵn sàng đỡ Hàn Lập khi suýt rơi, sau đó ôm Hàn Lập leo lên đỉnh sơn nhai.",
      vaiTro: "Đệ tử Thất Huyền môn, sư huynh bảo hộ Hàn Lập",
      tinhCach: [
        { text: "Lạnh lùng, ít nói, nhưng âm thầm chăm sóc đệ tử được giao", chuong: 4 },
        { text: "Miệng ghen ghét nhưng biết giữ mồm khi Ngô Minh nhắc nhở", chuong: 5 }
      ],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 4, importance: "normal", text: "Đi sát sau bảo hộ Hàn Lập; dang tay sẵn sàng đỡ khi Hàn Lập suýt rơi khỏi vách đá." },
          { chuong: 5, importance: "normal", text: "Ôm Hàn Lập leo lên đỉnh sơn nhai; tiết lộ Vũ Nham vào Thất Tuyệt đường nhờ quan hệ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Ngô Minh", tag: "dong-minh", quanHe: "Đồng môn sư huynh" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0004", "c0005"]
    },
    {
      id: "ngo-minh",
      name: "Ngô Minh",
      cn: null,
      aliases: ["Ngô Minh Thụy", "Mặt gầy sư huynh"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ",
      trangThai: "song",
      blurb: "Sư huynh trong Thất Huyền môn, đồng hành với Trương Quân. Thận trọng, sợ liên lụy, hay nịnh bợ Mặc đại phu.",
      vaiTro: "Đệ tử Thất Huyền môn",
      tinhCach: [
        { text: "Thận trọng, sợ bị phạt — can ngăn Trương Quân nói bậy về phó môn chủ", chuong: 5 }
      ],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 5, importance: "minor", text: "Cùng Trương Quân dẫn nhóm đệ tử quá quan lên núi; bợ đỡ Mặc đại phu." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Trương Quân", tag: "dong-minh", quanHe: "Đồng môn sư huynh" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0005"]
    },
    {
      id: "han-phu",
      name: "Hàn phụ",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      blurb: "Cha Hàn Lập, nông dân nghèo ở Sơn Biên tiểu thôn. Tính thận trọng, ban đầu do dự khi nghe đề nghị cho con vào môn phái, cuối cùng đồng ý vì lợi ích tiền bạc.",
      vaiTro: "Cha ruột Hàn Lập",
      tinhCach: [
        { text: "Thận trọng, nghe đến giang hồ môn phái thì do dự, hút điếu cày suy nghĩ", chuong: 1 }
      ],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 1, importance: "major", text: "Dặn Hàn Lập thành thật, nhẫn nhịn, không tranh chấp trước khi con lên đường." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hàn Lập", tag: "cha-me", quanHe: "Con trai thứ tư" },
          { ten: "Tam thúc", tag: "ho-hang", quanHe: "Em ruột" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0001"]
    },
    {
      id: "vuong-mon-chu",
      name: "Vương Tuyệt Sở",
      cn: null,
      aliases: ["Vương môn chủ"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ — người tu luyện, cao thủ võ học đứng đầu Thất Huyền môn",
      trangThai: "song",
      blurb: "Tên thật Vương Tuyệt Sở, Môn chủ Thất Huyền môn, truyền nhân của Thất tuyệt thương nhân. Vài năm trước bị địch nhân tập kích trọng thương, được Mặc đại phu cứu sống và sau đó mời lão nhập môn. Lãnh đạo Thất Huyền môn qua giai đoạn chiến tranh với Dã Lang bang, sẵn sàng ký tử khế đấu khi không thể tránh quyết chiến — sau đó kinh ngạc trước thân pháp bí ẩn của Hàn Lập.",
      vaiTro: "Môn chủ Thất Huyền môn",
      tinhCach: [
        { text: "Bình tĩnh, cẩn trọng — ngăn đệ tử nóng vội xông lên Chu Nho, chỉ phái một hộ pháp thăm dò trước", chuong: 88 },
        { text: "Quyết đoán trong tình huống nguy cấp — tự đề xuất tử khế đấu với điều kiện rõ ràng", chuong: 85 }
      ],
      tabs: {
        diem: [
          { text: "Truyền nhân Thất tuyệt thương nhân, nắm giữ tuyệt kỹ thương pháp", chuong: 6 },
          { text: "Chỉ huy tổng đàn Lạc Nhật Phong gồm Thất huyền điện một lớn sáu nhỏ; được ba vị sư thúc cao thủ chống lưng — đây là lý do dám nhận tử khế đấu", chuong: 82 }
        ],
        kinhLich: [
          { chuong: 6, importance: "normal", text: "Xuất môn bị địch nhân tập kích trọng thương, được Mặc đại phu cứu; cảm kích mời lão nhập môn và cấp sơn cốc." },
          { chuong: 43, importance: "normal", text: "Trước đông đảo đệ tử chính thức thụ phong chức hộ pháp cho Lệ Phi Vũ sau khi Lệ Phi Vũ lập công bắt hai gian tế Dã Lang bang." },
          { chuong: 75, importance: "normal", tieuDe: "Quyết định hòa đàm với Dã Lang bang", text: "Khi Dã Lang bang đột nhiên đề nghị hòa đàm, nội bộ Thất Huyền môn chia rẽ ý kiến; Vương môn chủ đập bàn quyết định: cứ đàm phán xem điều kiện — không quá đáng thì làm hòa, quá hà khắc thì tiếp tục chiến đấu." },
          { chuong: 77, importance: "normal", tieuDe: "Ở Lạc Nhật phong nhận tin tức về trận phục kích", text: "Hai vị cung phụng thoát nạn tại Lạc Sa pha chạy về Lạc Nhật phong báo cáo đoàn đàm phán bị diệt. Vương môn chủ nhận tin ở tổng đàn." },
          { chuong: 80, importance: "normal", tieuDe: "Lệnh bài được tên mập dùng khống chế nội bộ", text: "Kim sắc lệnh bài thiếp thân (tín vật đại diện Vương môn chủ) nằm trong tay tên mập họ hàng — bị dùng để tước quyền chỉ huy ngoại đường đệ tử của Mã Vinh." },
          { chuong: 82, importance: "normal", tieuDe: "Tên thật lộ — Vương Tuyệt Sở", text: "Tên thật Vương Tuyệt Sở lần đầu được gọi trực tiếp trong nguyên tác. Vương môn chủ chỉ huy Thất Huyền môn cố thủ tại tổng đàn Lạc Nhật Phong trước đợt tấn công của Dã Lang bang và Chu Nho." },
          { chuong: 84, importance: "normal", tieuDe: "Kích hoạt cơ quan Địa Động", text: "Trước sức tấn công áp đảo của Dã Lang bang, kích hoạt cơ quan bẫy Địa Động trong Lạc Nhật Phong để cản bước địch." },
          { chuong: 85, importance: "major", tieuDe: "Đề xuất tử khế đấu", text: "Đề ra hai điều kiện tử khế đấu 50 đối 50 với Cổ Thiên Long — giao đấu quyết định một phe được sống, một phe phải rút lui hẳn. Cổ Thiên Long chấp thuận." },
          { chuong: 87, importance: "normal", tieuDe: "Kinh ngạc trước thân pháp Hàn Lập", text: "Vốn định từ chối để Hàn Lập ở lại làm thầy thuốc; sau khi Hàn Lập phô thân pháp tốc độ kinh người — biến mất vô thanh vô tức hiện sau lưng mà không hề bị phát giác — Vương môn chủ cùng ba vị sư thúc đều kinh hãi, nghi ngờ lai lịch 'người này rốt cuộc là ai'. Cuối cùng gạch hai tên yếu, viết tên Hàn Lập và Lệ Phi Vũ vào sinh tử thư." },
          { chuong: 88, importance: "normal", tieuDe: "Thận trọng dò xét Chu Nho", text: "Không để cả đám xông lên cùng lúc; chỉ phái một hộ pháp ra thăm dò Kim Quang Tráo của Chu Nho trước khi quyết định bước tiếp." },
          { chuong: 89, importance: "normal", tieuDe: "Điều sư thúc đối phó kim tráo", text: "Sau khi thấy hộ pháp thất bại, cùng ba sư thúc thương lượng đối sách rồi cử hán tử râu ria — sư thúc cao thủ từng là mãnh tướng — ra phá kim cương bất hoại công của Chu Nho." },
          { chuong: 90, importance: "minor", text: "Cùng đám người của mình hô 'Cẩn thận' cảnh báo khi luồng sáng từ hộp đen Chu Nho phóng tới, nhưng không kịp ngăn hán tử bị giết." },
          { chuong: 92, importance: "minor", text: "Mừng như điên khi thấy Hàn Lập áp đảo Chu Nho; tự nhủ quyết định cho Hàn Lập tham gia tử đấu là cực sáng suốt; xem sự tồn vong của môn phái nay trông cậy vào Hàn Lập." },
          { chuong: 95, importance: "normal", text: "Vừa mừng vừa lo sau đại chiến: mừng vì Cổ Thiên Long bị diệt, lo vì thân thủ bí ẩn của Hàn Lập có thể chèn ép Thất Huyền môn. Để mắt tới Lệ Phi Vũ như đòn bẩy để tiếp cận Hàn Lập." },
          { chuong: 97, importance: "normal", text: "Họp kín bàn cách xử trí Hàn Lập; nội bộ chia phe giết-ngay và ôn-hòa. Lời cảnh báo của sư thúc áo xám về 'trưởng bối sau lưng Hàn Lập' khiến cả hội nghị chuyển sang phe ôn hòa. Được Hàn Lập gặp riêng sớm nửa ngày; sau giao dịch bí mật, tuyên bố trước hội trường rằng mọi phiền phức đã biến mất." },
          { chuong: 98, importance: "major", tieuDe: "Nhận Lệ Phi Vũ làm đệ tử — nhận đan dược từ Hàn Lập", text: "Chính thức nhận Lệ Phi Vũ làm đệ tử và phong làm đường chủ Ngoại Nhận Đường. Nhận được bình ngọc chứa Dưỡng Tinh Đan và thuốc khác do Hàn Lập để lại trước khi rời đi." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "an-nhan", quanHe: "Người cứu mạng, được mời vào môn làm Cung phụng" },
          { ten: "Lệ Phi Vũ", tag: "su-mon", quanHe: "Đệ tử được phong hộ pháp rồi đường chủ Ngoại Nhận Đường" },
          { ten: "Hàn Lập", tag: "su-mon", quanHe: "Thầy thuốc trong môn, đã ký tử khế đấu; lai lịch bí ẩn; đã rời môn sau giao dịch bí mật" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0006", "c0043", "c0075", "c0077", "c0080", "c0082", "c0084", "c0085", "c0086", "c0087", "c0088", "c0089", "c0090", "c0092", "c0095", "c0097", "c0098"]
    },
    {
      id: "ma-pho-mon-chu",
      name: "Mã phó môn chủ",
      cn: null,
      aliases: ["Mã phó bang chủ"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ — luyện Huyền âm chỉ đến tinh thuần",
      trangThai: "song",
      blurb: "Phó môn chủ Thất Huyền môn, kiểu người 'tiếu lý tàng đao' — bề ngoài thân thiện nhưng giỏi mưu kế ngầm. Vợ là Huyền phu nhân — biểu tỷ Vũ Nham. Luyện công pháp Huyền âm chỉ đến mức tinh thuần. Liên tục muốn lôi kéo Hàn Lập vào hệ phái của mình; dùng quỷ kế phá hoại quan hệ Hàn Lập với các hệ phái khác trong Thất Huyền môn.",
      vaiTro: "Phó môn chủ Thất Huyền môn",
      tinhCach: [
        { text: "Bề ngoài thân thiện, bên trong giỏi mưu kế ngầm — 'tiếu lý tàng đao'", chuong: 70 },
        { text: "Kiên trì lôi kéo Hàn Lập gia nhập hệ phái, dùng cả thủ đoạn chia rẽ để ngăn Hàn Lập ngả về hệ phái khác", chuong: 70 }
      ],
      tabs: {
        diem: [
          { text: "Luyện công pháp Huyền âm chỉ (玄阴指) đến mức tinh thuần", chuong: 70 }
        ],
        kinhLich: [
          { chuong: 5, importance: "normal", text: "Ra tay tương trợ đưa Vũ Nham vào Thất Tuyệt đường dù tuổi vượt yêu cầu." },
          { chuong: 65, importance: "normal", tieuDe: "Chấp thuận tiếp quản Thần thủ cốc", text: "Chấp thuận để Hàn Lập tiếp quản chức trị bệnh tại Thần thủ cốc; cấp bổng lộc cung phụng. Bắt đầu tiếp xúc trực tiếp với Hàn Lập." },
          { chuong: 66, importance: "normal", tieuDe: "Đồng ý quy định chuông cốc", text: "Đồng ý để Hàn Lập đặt chuông lớn tại cửa Thần thủ cốc — ai muốn gặp phải gõ chuông trước. Cũng đề nghị xếp thị nữ phục vụ sinh hoạt cho Hàn Lập; Hàn Lập từ chối." },
          { chuong: 70, importance: "normal", tieuDe: "Khích Triệu trưởng lão — lộ quỷ kế chia rẽ", text: "Dùng quỷ kế tâng bốc y thuật Hàn Lập để khích Triệu trưởng lão buột miệng nghi ngờ, nhằm làm Hàn Lập có ấn tượng xấu với Triệu trưởng lão và ngăn Hàn Lập ngả về hệ phái khác. Hàn Lập nhìn thấu nhưng không lộ. Lộ ra Mã phó môn chủ luyện Huyền âm chỉ đã tới mức tinh thuần." },
          { chuong: 71, importance: "normal", tieuDe: "Hỗ trợ chữa trị Lý trưởng lão", text: "Có mặt và hỗ trợ khi Hàn Lập dùng Thanh Linh Tán và châm cứu chữa trị." },
          { chuong: 72, importance: "normal", tieuDe: "Dùng nội lực bức độc — nguyên khí hao tổn", text: "Cùng Tiễn trưởng lão dùng nội lực bức huyết độc qua huyệt đạo ra ngoài; nguyên khí hao tổn không ít." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Vũ Nham", tag: "ho-hang", quanHe: "Em họ bên vợ (Huyền phu nhân là biểu tỷ của Vũ Nham)" },
          { ten: "Huyền phu nhân", tag: "the-thiep", quanHe: "Vợ" },
          { ten: "Triệu trưởng lão", tag: "doi-dich", quanHe: "Đối thủ hệ phái nội môn Thất Huyền môn" },
          { ten: "Hàn Lập", tag: "loi-dung", quanHe: "Đang ra sức lôi kéo vào hệ phái, chưa thành công" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [],
          congPhap: [
            { ten: "Huyền âm chỉ", loai: "chỉ pháp", trangThai: "đã luyện tới tinh thuần", moTa: "Công pháp/chỉ pháp đặc trưng của Mã phó môn chủ. Đã luyện tới mức tinh thuần; tên công pháp được đề cập trong lúc đấu khẩu với Triệu trưởng lão.", nguon: ["c0070"] }
          ],
          linhThu: [], nguyenLieu: [], linhThao: [], khac: []
        }
      },
      nguon: ["c0005", "c0065", "c0066", "c0069", "c0070", "c0071", "c0072"]
    },
    {
      id: "lao-truong",
      name: "Lão Trương",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      blurb: "Người lớn tuổi duy nhất biết chữ trong Sơn Biên tiểu thôn. Từng làm thư đồng vài năm cho nhà giàu trong thành. Người đặt tên cho hầu hết trẻ con trong thôn, kể cả Hàn Lập.",
      vaiTro: "Người biết chữ duy nhất trong thôn Hàn Lập",
      tinhCach: [],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 1, importance: "minor", text: "Đặt tên cho hầu hết trẻ con trong thôn; hay kể chuyện thế giới bên ngoài cho Hàn Lập nghe." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0001"]
    },
    {
      id: "vu-nham-bieu-ty",
      name: "Huyền phu nhân",
      cn: null,
      aliases: ["Biểu tỷ Vũ Nham"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "danh-nghia" }
      ],
      canhGioiCaoNhat: "Không rõ",
      trangThai: "song",
      blurb: "Chị họ của Vũ Nham, vợ Mã phó môn chủ Thất Huyền môn. Sự kiện bà gả vào vị trí đó là lý do Vũ Nham được ưu tiên vào Thất Tuyệt đường.",
      vaiTro: "Vợ Mã phó môn chủ, chị họ Vũ Nham",
      tinhCach: [],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 5, importance: "minor", text: "Được nhắc tới là lý do Vũ Nham vào được Thất Tuyệt đường vượt tuổi quy định." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Vũ Nham", tag: "ho-hang", quanHe: "Em họ" },
          { ten: "Mã phó môn chủ", tag: "the-thiep", quanHe: "Chồng" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0005"]
    },
    {
      id: "le-su-huynh",
      name: "Lệ Phi Vũ",
      cn: null,
      aliases: ["Lệ sư huynh", "Lệ hổ"],
      tenThat: "Lệ Phi Vũ",
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" },
        { ten: "Ngoại Nhận Đường", trangThai: "duong-chu" }
      ],
      canhGioiCaoNhat: "Phàm nhân (võ giả) — đường chủ Ngoại Nhận Đường, Thất Huyền môn",
      trangThai: "song",
      blurb: "Tên thật Lệ Phi Vũ, biệt danh giang hồ 'Lệ hổ'. Ký danh đệ tử Thất Huyền môn tự lực vươn lên top hạng nhờ sức luyện phi thường. Phá kỷ lục trắc thí (vượt 30 chiêu), vào Thất Tuyệt đường. Bí mật dùng Trừu Tủy Hoàn cả viên nhiều năm để tăng vọt võ công. Được Hàn Lập cứu sống, hứa trả ơn; hai người kết ơn nghĩa. Nhờ thông tin gian tế Dã Lang bang do Hàn Lập chuyển, lập công lớn được Vương môn chủ thụ phong hộ pháp, tiến nhập trung tầng Thất Huyền môn. Sau đó thăng đường chủ Ngoại Nhận Đường — được Vương Tuyệt Sở nhận làm đệ tử sau khi Hàn Lập rời môn.",
      vaiTro: "Đường chủ Ngoại Nhận Đường, Thất Huyền môn; đệ tử Vương Tuyệt Sở",
      tinhCach: [
        { text: "Thần sắc lãnh khốc, quyết đoán, khí thế ngút trời khi ra trận", chuong: 17 },
        { text: "Bề ngoài tiêu sái vô địch, bên trong ẩn giấu bí mật chết người", chuong: 20 },
        { text: "Si tình mâu thuẫn — biết thọ mệnh không còn dài nhưng vẫn kiên quyết giữ Trương Tụ Nhi: 'trong khi còn sống, Tụ Nhi là của ta một mình'", chuong: 73 },
        { text: "Liều lĩnh và quyết đoán trong chiến đấu — một mình lao vào đoạt đao chém địch 'thân pháp như cầu vồng'", chuong: 80 }
      ],
      tabs: {
        diem: [
          { text: "Thượng sơn 4 năm trước, không qua khảo hạch, vào với tư cách ký danh đệ tử như Hàn Lập", chuong: 18 },
          { text: "Căn cốt bình thường, tiềm lực hữu hạn — không ai ở cao tầng chịu nhận làm đệ tử; chỉ bái một hộ pháp bình thường, học Phong Lôi đao pháp", chuong: 18 },
          { text: "Nửa năm sau thượng sơn: đứng hạng nhất trắc thí ký danh, phá kỷ lục vượt 30 chiêu khi đối kháng sư huynh", chuong: 18 },
          { text: "Tự lực leo top 16 nội môn (tân đệ tử duy nhất), năm sau đạt hạng ba toàn môn", chuong: 18 }
        ],
        kinhLich: [
          { chuong: 17, importance: "normal", text: "Xuất hiện lần đầu trong trường đấu — được cả hai phe đồng loạt hô tên cổ vũ khi bước vào trận cuối. Cầm đao nhắm mắt, thần sắc lãnh khốc." },
          { chuong: 18, importance: "normal", text: "Tiểu sử được kể lại: ký danh đệ tử tự lực vươn lên top hạng, danh hiệu \"Lệ hổ\", sắp vào Thất Tuyệt đường. Dùng Phong Lôi đao pháp hóa hơn mười đao ảnh, hét vang như sấm, áp đảo Triệu Tử Linh." },
          { chuong: 19, importance: "minor", text: "Thắng Triệu Tử Linh — liên hoàn đao chấn bay nhuyễn kiếm, Triệu Tử Linh cam bái hạ phong. Đột nhiên biến sắc, viện cớ việc gấp, dùng khinh công cao minh vội rời trường." },
          { chuong: 20, importance: "major", text: "Bệnh cấp tính phát tác bên suối, gần chết. Được Hàn Lập cứu bằng ngân châm. Bí mật bị vạch trần: dùng Trừu Tủy Hoàn cả viên nhiều năm, chỉ còn sống thêm 5-6 năm. Phải tự chọn: nhờ Mặc đại phu phối bí dược (sống thêm 20-30 năm, mất võ công) hay tiếp tục dùng hoàn." },
          { chuong: 21, importance: "major", text: "Tỉnh lại sau khi được cứu, lập tức rút trường đao kề cổ Hàn Lập đòi lý do không diệt khẩu; lộ vẻ xấu hổ và thu đao sau khi Hàn Lập lập luận và phát độc thề. Tự xưng tên thật Lệ Phi Vũ, hứa trả ơn. Là đệ tử hộ pháp bình thường nhưng được lòng đường chủ/trưởng lão/môn chủ, nên cuộc sống không yên." },
          { chuong: 22, importance: "normal", text: "Hẹn trưa hôm sau quay lại lấy thuốc rồi đi điều dưỡng. Mang ơn sâu với Hàn Lập vì hắn không truy hỏi nguyên nhân dùng Trừu Tủy Hoàn." },
          { chuong: 24, importance: "normal", text: "Nhận gói dược phấn giảm đau (chỉ thống dược, năm phân) từ Hàn Lập tại cốc khẩu; mừng rỡ vì các loại thuốc giảm đau trước đây đều vô dụng. Lại thiếu Hàn Lập thêm một phần đại nhân tình." },
          { bridge: true, khoang: "c0033–c0034", text: "Giao dịch dược-đổi-võ định kỳ hơn nửa năm với Hàn Lập tại thủy đàm bí mật; dạy Cuồng Mãnh Kình và Triền Ti Thủ; hai người dần thành hảo hữu." },
          { chuong: 35, importance: "major", tieuDe: "Trộm bí tịch Thất Tuyệt đường", text: "Lấy trộm toàn bộ bí tịch từ Thất Tuyệt đường tàng thư — hóa ra 74 quyển đều cùng tên 'Trát Nhãn kiếm phổ' — mang ra giao cho Hàn Lập tại thủy đàm." },
          { chuong: 37, importance: "normal", tieuDe: "Mất hứng vì tam bất luyện", text: "Khi Hàn Lập giải thích Trát Nhãn kiếm pháp có điều kiện 'chân khí đã có thành tựu — không thể luyện', Lệ Phi Vũ (chân khí nội gia đã có hỏa hậu) lập tức mất hứng, dặn Hàn Lập sao lục bí tịch rồi cáo từ trước." },
          { chuong: 39, importance: "normal", tieuDe: "Nhận công lao từ Hàn Lập", text: "Hàn Lập quyết định chuyển công lao bắt gian tế Dã Lang bang cho Lệ Phi Vũ lập công huy hoàng — vừa báo đáp ân tình kiếm phổ, vừa giúp Lệ Phi Vũ (người có dã tâm tiến vào cao tầng) thực hiện khát vọng." },
          { chuong: 41, importance: "normal", text: "Nhận lại nguyên bản bí tịch từ Hàn Lập; được Hàn Lập báo tin về gian tế Dã Lang bang. Vừa mừng vừa sợ, gọi Hàn Lập 'hảo huynh đệ', cực kỳ cảm động." },
          { chuong: 43, importance: "major", tieuDe: "Thăng hộ pháp Thất Huyền môn", text: "Nhờ cơ cảnh hơn người, đương trường phá tan âm mưu trộm danh sách đệ tử của hai gian tế Dã Lang bang nằm vùng; bắt được bọn chúng. Vương môn chủ trước đông đảo đệ tử thụ phong hộ pháp, Lệ Phi Vũ chính thức tiến nhập trung tầng Thất Huyền môn, danh tiếng vang dội." },
          { chuong: 69, importance: "normal", tieuDe: "Tái xuất — vướng lưới tình thiếu nữ", text: "Tái xuất bất ngờ tại phòng khách nhà Lý trưởng lão (dù trước đây không có quan hệ gì với Lý trưởng lão). Đứng cạnh an ủi một thiếu nữ ~15-16 tuổi đang khóc — bộ dáng kẻ vướng vào lưới tình, trái ngược hoàn toàn với hình ảnh liều mạng vô thiên vô pháp trước đây." },
          { chuong: 70, importance: "minor", tieuDe: "Vờ không quen Hàn Lập — lén làm mặt quỷ", text: "Cố tình làm bộ lãnh khốc, vờ không quen biết Hàn Lập trước đông người để không bại lộ mối quan hệ riêng. Khi mọi người quay đi, lén làm mặt quỷ trêu Hàn Lập rồi lập tức khôi phục vẻ lạnh lùng." },
          { chuong: 73, importance: "major", tieuDe: "Từ chối phế võ — tuyên bố giữ Trương Tụ Nhi", text: "Hàn Lập thẳng thắn hỏi về Trừu Tủy Hoàn và thọ mệnh. Lệ Phi Vũ xác nhận chỉ còn sống được mấy năm, kiên quyết từ chối phế bỏ tu vi; tuyên bố 'trong khi còn sống, Trương Tụ Nhi là của ta một mình'." },
          { chuong: 74, importance: "major", tieuDe: "Thăng phó đường chủ Ngoại Nhận Đường", text: "Giết tử y chưởng kỳ sứ Dã Lang bang trong chiến tranh, được thăng chức phó đường chủ Ngoại Nhận Đường. Trở thành một trong 'Song Hùng' của Thất Huyền môn." },
          { chuong: 75, importance: "normal", tieuDe: "Phản đối hòa đàm với Dã Lang bang", text: "Khi Dã Lang bang đề nghị hòa đàm, Lệ Phi Vũ kiên quyết phản đối — nhưng ý kiến không được coi trọng." },
          { chuong: 76, importance: "normal", tieuDe: "Sống sót trận phục kích Lạc Sa pha", text: "Đi cùng đoàn đàm phán bị Dã Lang bang phục kích. Sống sót vì không bị coi là mục tiêu trọng yếu; mình đầy máu chạy về núi báo tin." },
          { chuong: 77, importance: "normal", tieuDe: "Phục kích Lam y chấp pháp — khai thác tin tức", text: "Phục kích một Lam y chấp pháp Dã Lang bang, xác nhận Ngô phó môn chủ và nhiều trưởng lão đã chết, nắm được kế hoạch địch. Báo cáo với Hàn Lập trên nóc nhà; lấy cớ trị thương lén tới chỗ Hàn Lập thay vì lên Lạc Nhật phong sợ bị đổ tội." },
          { chuong: 78, importance: "normal", tieuDe: "Chứng kiến Khúc Hồn giết địch", text: "Lần đầu thấy Khúc Hồn xuất trận — sốt ruột thúc giục Hàn Lập, rồi sợ run người khi Khúc Hồn bước ra. Chứng kiến Khúc Hồn tàn sát nhóm Dã Lang bang trong nháy mắt; khuôn mặt đầy vẻ khó tin." },
          { chuong: 79, importance: "normal", tieuDe: "Bức cung — diệt khẩu Lam y chấp pháp", text: "Bức cung Lam y chấp pháp khai toàn bộ tin tức về kế hoạch Dã Lang bang và liên minh. Sau khi lấy xong thông tin, tự tay diệt khẩu. Đồng ý đi hội họp người của mình theo kế hoạch Hàn Lập." },
          { chuong: 80, importance: "normal", tieuDe: "Một mình phá trận mười địch", text: "Bị mười tên áo xanh Đoạn Thủy môn chặn vây khi chạy tới Lý trạch. Một mình lao ra đoạt cương đao địch rồi chém người, thân pháp như cầu vồng, giết liền mấy tên chưa kịp phản ứng." },
          { chuong: 83, importance: "normal", tieuDe: "Cải trang vào Lạc Nhật Phong", text: "Cùng Hàn Lập cải trang thành người Đoạn Thủy Lưu để lén vào khu vực quanh Lạc Nhật Phong, nắm tình hình trận địa." },
          { chuong: 87, importance: "major", tieuDe: "Ký tử khế vì Trương Tụ Nhi", text: "Khi thấy Trương Tụ Nhi bị điều vào nhóm tử đấu, quyết tâm xé trang phục ngụy trang, lộ y phục Thất Huyền môn, đến trước Vương Tuyệt Sở tự xưng phó đường chủ Ngoại Nhận Đường xin tham gia huyết đấu. Chính thức ký tên vào sinh tử thư. Cảm động khi Hàn Lập đi theo, gọi 'huynh đệ tốt, đa tạ'." },
          { chuong: 88, importance: "minor", text: "Đứng trong hàng ngũ Thất Huyền môn tham gia huyết đấu; đang tâm sự thân mật cùng Trương Tụ Nhi ngay tại chiến trường." },
          { chuong: 90, importance: "minor", text: "Có mặt trong trận huyết đấu; chứng kiến Chu Nho kích hoạt luồng sáng từ hộp đen giết hán tử cao thủ phe đối lập." },
          { chuong: 95, importance: "normal", text: "Hưng phấn dị thường vì biết bạn thân Hàn Lập là 'thế ngoại cao nhân'; kể cho Hàn Lập nghe tin đồn 'hỏa ma' và ôm bụng cười hồi lâu không đứng dậy nổi. Vương Tuyệt Sở để mắt tới Lệ Phi Vũ với ánh mắt 'lão cáo già giảo hoạt' — muốn lợi dụng quan hệ với Hàn Lập." },
          { chuong: 97, importance: "minor", text: "Là người trung gian báo tin Hàn Lập sẽ lên Lạc Nhật Phong cho các nhân vật cao cấp; cũng là người Hàn Lập nhờ truyền thư hẹn gặp riêng Vương Tuyệt Sở." },
          { chuong: 98, importance: "major", tieuDe: "Được Vương Tuyệt Sở nhận làm đệ tử và thăng đường chủ Ngoại Nhận Đường", text: "Vương Tuyệt Sở chính thức nhận Lệ Phi Vũ làm đệ tử và phong làm đường chủ Ngoại Nhận Đường. Nhận được thuốc kéo dài tuổi thọ Hàn Lập để lại. Đứng trên đỉnh đồi nhìn theo bóng xe ngựa Hàn Lập rời đi trong cảm xúc." }
        ],
        tuViMoc: [
          { chuong: 18, canhGioi: "Phàm nhân (võ giả) — Phong Lôi đao pháp đỉnh", text: "Thực lực hạng ba toàn môn Thất Huyền môn nhờ kết hợp Phong Lôi đao pháp và Trừu Tủy Hoàn tăng cường thân thể." },
          { chuong: 33, canhGioi: "Phàm nhân (võ giả) — đã vào Thất Tuyệt đường", text: "Đã được vào Thất Tuyệt đường tu luyện; chân khí nội gia có hỏa hậu không ít; dùng dĩ chuyết phá xảo mới thắng Hàn Lập (không dùng chân khí thì trong trăm chiêu chưa chắc thắng)." },
          { chuong: 74, canhGioi: "Phàm nhân (võ giả) — phó đường chủ Ngoại Nhận Đường", text: "Sau khi giết tử y chưởng kỳ sứ Dã Lang bang, được thăng phó đường chủ Ngoại Nhận Đường, trở thành 'Song Hùng' cùng một cao thủ khác.", importance: "major" },
          { chuong: 98, canhGioi: "Phàm nhân (võ giả) — đường chủ Ngoại Nhận Đường; đệ tử Vương Tuyệt Sở", text: "Vương Tuyệt Sở nhận làm đệ tử và thăng đường chủ Ngoại Nhận Đường sau khi Hàn Lập rời môn.", importance: "major" }
        ],
        nhanMach: [
          { ten: "Hàn Lập", tag: "an-nhan", quanHe: "Người cứu mạng; đang nhận chỉ thống dược mỗi năm; hứa giúp đỡ khi cần; giao dịch võ-dược hơn nửa năm thành hảo hữu; cùng ký tử khế huyết đấu" },
          { ten: "Trương Tụ Nhi", tag: "the-thiep", quanHe: "Người trong lòng; ký tử khế để ở bên nàng trong trận huyết đấu" },
          { ten: "Triệu Tử Linh", tag: "doi-dich-tam-thoi", quanHe: "Đối thủ trong trường đấu, bị Lệ Phi Vũ đánh bại" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Trường đao", loai: "binh khí phàm tục", trangThai: "đang giữ", moTa: "Đao hàn quang, dùng thi triển Phong Lôi đao pháp.", nguon: ["c0017", "c0018"] }
          ],
          danDuoc: [
            { ten: "Trừu Tủy Hoàn", loai: "đan dược (đang dùng)", trangThai: "đang dùng — cả viên", moTa: "Dùng cả viên để tăng vọt võ công; chỉ còn sống thêm mấy năm. Gây thống khổ dữ dội sau mỗi lần dùng. Tại c73 Lệ Phi Vũ xác nhận với Hàn Lập: từ chối phế bỏ tu vi dù biết rõ thọ mệnh không còn.", nguon: ["c0020", "c0021", "c0022", "c0024", "c0073"] }
          ],
          congPhap: [
            { ten: "Phong Lôi đao pháp / Bôn Lôi đao pháp", loai: "đao pháp võ lâm", trangThai: "thành thục", moTa: "Đao pháp trung tầng Thất Huyền môn, liên hoàn đao thức, hét vang như sấm áp chế đối thủ, chém đá chặt vàng.", nguon: ["c0017", "c0018", "c0019"] },
            { ten: "Cuồng Mãnh Kình", loai: "công pháp cương mãnh", trangThai: "thành thục", moTa: "Công pháp thiên về cương dương mà Lệ Phi Vũ truyền cho Hàn Lập. Hàn Lập thấy quá cương mãnh không hợp.", nguon: ["c0033"] },
            { ten: "Triền Ti Thủ", loai: "công pháp", trangThai: "thành thục", moTa: "Môn võ công Lệ Phi Vũ truyền cho Hàn Lập; Hàn Lập luyện xuất thần nhập hóa chỉ trong hai tháng.", nguon: ["c0035"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      nguon: ["c0017", "c0018", "c0019", "c0020", "c0021", "c0022", "c0024", "c0033", "c0034", "c0035", "c0036", "c0037", "c0038", "c0039", "c0041", "c0043", "c0069", "c0070", "c0071", "c0072", "c0073", "c0074", "c0075", "c0076", "c0077", "c0078", "c0079", "c0080", "c0083", "c0087", "c0088", "c0090", "c0095", "c0097", "c0098"]
    },
    {
      id: "kim-dong-bao",
      name: "Kim Đông Bảo",
      cn: null,
      aliases: ["tiểu toán bàn", "vạn sự thông"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân (võ giả)",
      trangThai: "song",
      blurb: "Đệ tử trẻ của Thất Huyền môn, biệt danh \"tiểu toán bàn\" và \"vạn sự thông\" vì hay tính toán và biết hết chuyện trong môn. Là nguồn cung cấp thông tin cho Hàn Lập khi hắn quan sát trường đấu. Hứa được Hàn Lập chữa bệnh miễn phí.",
      vaiTro: "Đệ tử cùng môn, nguồn tin tức",
      tinhCach: [
        { text: "Hay tính toán vụ lợi, xu viêm phụ thế — đổi ngay từ \"sư đệ\" sang \"sư huynh\" khi tưởng Hàn Lập có thế lực", chuong: 17 },
        { text: "Miệng không ngừng, hào hứng kể chuyện, dễ tin người khi được chứng minh thân phận", chuong: 19 }
      ],
      tabs: {
        diem: [
          { text: "Biết hết mọi người, mọi sự trong môn — tự xưng \"vạn sự thông\"", chuong: 16 },
          { text: "Tục danh Kim Đông Bảo — lộ rõ khi Hàn Lập hỏi thẳng", chuong: 19 }
        ],
        kinhLich: [
          { chuong: 16, importance: "normal", text: "Đứng ngoài cổ vũ, kể cho Hàn Lập nghe toàn bộ nguyên do trường đấu (bi kịch Vương Dạng, mâu thuẫn phe phái)." },
          { chuong: 17, importance: "minor", text: "Đổi thái độ lập tức khi tưởng Hàn Lập là đệ tử cung phụng quyền thế; bắt đầu nghi ngờ khi thấy hắn không có dấu hiệu nội công." },
          { chuong: 19, importance: "minor", text: "Xác nhận thân phận Hàn Lập qua lệnh bài nội môn; kể bối cảnh chiến tranh Thất Huyền Môn — Dã Lang Bang và môn quy mới. Tục danh Kim Đông Bảo được hé lộ; Hàn Lập hứa chữa bệnh/thương miễn phí." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hàn Lập", tag: "dong-mon", quanHe: "Quen biết tại trường đấu; được hứa chữa bệnh miễn phí" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0016", "c0017", "c0019"]
    },
    {
      id: "trieu-tu-linh",
      name: "Triệu Tử Linh",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân (võ giả)",
      trangThai: "song",
      blurb: "Đệ tử của ngũ trưởng lão Thất Huyền môn. Kẻ mạnh nhất phe Trương Trường Quý trong trường đấu — dùng nhuyễn kiếm, kiếm pháp âm độc gian xảo, phòng thủ kín. Thua Lệ sư huynh: bị liên hoàn đao chấn bay nhuyễn kiếm, hổ khẩu tay phải bị thương, cam bái hạ phong.",
      vaiTro: "Đệ tử ngũ trưởng lão, đấu thủ phe Trương Trường Quý",
      tinhCach: [
        { text: "Tuy thua nhưng vẫn mỉm cười thi lễ — phong độ không mất mặt", chuong: 19 }
      ],
      tabs: {
        diem: [
          { text: "Đệ tử ngũ trưởng lão — thế lực sau lưng mạnh hơn bình thường", chuong: 18 },
          { text: "Dùng nhuyễn kiếm mỏng mềm, kiếm pháp phiêu hốt bất định, âm độc gian xảo, phòng thủ như giọt nước không lọt", chuong: 18 }
        ],
        kinhLich: [
          { chuong: 18, importance: "normal", text: "Được Trương Trường Quý cử ra đấu với Lệ sư huynh — người mạnh nhất phía mình. Phòng thủ kín nhưng khí thế đã mất trước liên hoàn đao áp đảo." },
          { chuong: 19, importance: "normal", text: "Bị liên hoàn đao của Lệ sư huynh chấn bay nhuyễn kiếm, hổ khẩu tay phải bị thương; cam bái hạ phong, mỉm cười thi lễ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Ngũ trưởng lão", tag: "su-mon", quanHe: "Sư phụ" },
          { ten: "Lệ sư huynh", tag: "doi-dich-tam-thoi", quanHe: "Đối thủ trường đấu, người đánh bại mình" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [],
          congPhap: [
            { ten: "Nhuyễn kiếm pháp", loai: "kiếm pháp võ lâm", trangThai: "thành thục", moTa: "Dùng nhuyễn kiếm mỏng mềm, kiếm pháp phiêu hốt bất định, âm độc gian xảo.", nguon: ["c0018", "c0019"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      nguon: ["c0018", "c0019"]
    },
    {
      id: "vuong-dai-ban",
      name: "Vương đại bàn",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân (võ giả)",
      trangThai: "song",
      blurb: "Đệ tử Thất Huyền môn, hảo hữu của Hàn Lập. Thân hình béo mập nhưng hạ bàn vững, quyền cước có lực, quan hệ rộng ở tầng trung-hạ. Đứng ra báo thù cho đường đệ Vương Dạng bị cướp hôn ước, cầm đầu phe trung-hạ tầng trong trường đấu với phe phú gia đệ tử của Trương Trường Quý.",
      vaiTro: "Đệ tử Thất Huyền môn, cầm đầu phe trung-hạ tầng trong tranh chấp",
      tinhCach: [
        { text: "Trọng nghĩa khí, đứng ra báo thù cho đường đệ; sau khi thắng thì đắc ý lắc mông khoe khoang", chuong: 16 }
      ],
      tabs: {
        diem: [
          { text: "Quan hệ rộng ở tầng trung-hạ — thu hút nhiều đệ tử tự nguyện giúp", chuong: 16 }
        ],
        kinhLich: [
          { chuong: 16, importance: "normal", text: "Thắng trận mở màn bằng quyền trúng gáy đối thủ, khiến hắn ngất xỉu. Sau đó đắc ý khoe khoang." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Dạng", tag: "ho-hang", quanHe: "Đường đệ, đã tự tử" },
          { ten: "Trương Trường Quý", tag: "doi-dich", quanHe: "Đối thủ trong tranh chấp" },
          { ten: "Hàn Lập", tag: "ban-be", quanHe: "Hảo hữu trong môn" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0016", "c0017", "c0020"]
    },
    {
      id: "truong-truong-quy",
      name: "Trương Trường Quý",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân (võ giả)",
      trangThai: "song",
      blurb: "Con lão bản tiền trang, nội môn đệ tử Thất Huyền môn. Tâm cao khí ngạo, ỷ tiền bạc. Ép cô gái (vợ chưa cưới Vương Dạng) cải hôn theo mình, gây ra cái chết của Vương Dạng và trận đấu phe phái với Vương đại bàn. Tự biết võ kém nên đòi đấu nhiều trận tính tổng và dùng tiền chiêu mộ trợ thủ phú gia đệ tử.",
      vaiTro: "Đệ tử phú gia, cầm đầu phe đối địch trong tranh chấp",
      tinhCach: [
        { text: "Ỷ tiền bạc lấn át, cướp hôn ước người khác; khôn vặt dùng tiền chiêu mộ thay vì tự đấu", chuong: 16 }
      ],
      tabs: {
        diem: [
          { text: "Con lão bản tiền trang — giàu có, dùng tiền chiêu mộ trợ thủ phú gia đệ tử", chuong: 16 }
        ],
        kinhLich: [
          { chuong: 16, importance: "normal", text: "Ép cô gái cải hôn, dẫn tới cái chết Vương Dạng. Tổ chức đấu phe với Vương đại bàn — đòi chia nhiều trận tính tổng, dùng tiền mộ trợ thủ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương đại bàn", tag: "doi-dich", quanHe: "Đối thủ trong tranh chấp" },
          { ten: "Triệu Tử Linh", tag: "dong-minh", quanHe: "Đấu thủ đại diện phe mình" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0016", "c0017", "c0018", "c0019", "c0020"]
    },
    {
      id: "vuong-duong",
      name: "Vương Dạng",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn — ngoại môn", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "tu-vong",
      blurb: "Đường đệ Vương đại bàn, ngoại môn đệ tử Thất Huyền môn. Có hôn ước từ nhỏ với một cô gái; cô gái bị Trương Trường Quý ỷ tiền ép cải hôn. Vương Dạng đau khổ nhảy sông tự tử — cái chết của hắn là ngòi nổ cho trận đấu phe phái giữa Vương đại bàn và Trương Trường Quý.",
      vaiTro: "Nhân vật nền — nguyên nhân của trận đấu phe phái",
      tinhCach: [],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 16, importance: "normal", text: "Bị Trương Trường Quý ỷ tiền cướp hôn ước (cô gái cải hôn); đau khổ nhảy sông tự tử. Cái chết thúc đẩy Vương đại bàn tìm Trương Trường Quý quyết đấu." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương đại bàn", tag: "ho-hang", quanHe: "Đường huynh" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0016"]
    },
    {
      id: "than-bi-nhan",
      name: "Thiết Nô",
      cn: null,
      aliases: ["Người lục bào", "Thần bí nhân"],
      gioiTinh: "nam",
      theLuc: [],
      canhGioiCaoNhat: "Cao thủ võ lâm phàm trần — thân thể cứng như đá, sức mạnh dị thường",
      trangThai: "vo-danh",
      blurb: "Nô bộc tuyệt đối phục tùng của Mặc đại phu. Che kín toàn thân bằng lục bào khăn đen, thân hình khổng lồ cao hơn người thường hai cái đầu, thân thể cứng như đá — vũ khí tấn công đều bật ra không gây thương tích. Tên thật 'Thiết Nô' do Mặc đại phu gọi. Người bí ẩn lục bào c28-c44 và Thiết Nô c51-c55 là cùng một người — Hàn Lập nhận ra bóng lưng quen thuộc khi y ra tay.",
      vaiTro: "Thủ hạ nô bộc Mặc đại phu — người thực thi lệnh trực tiếp",
      tinhCach: [
        { text: "Tuyệt đối phục tùng, không ý chí riêng — đứng bất động cả ngày như câm điếc; chỉ hành động khi Mặc đại phu ra lệnh", chuong: 34 },
        { text: "Ra tay nhưng giữ chừng theo lệnh — Mặc đại phu dặn 'điểm nhẹ thôi' nên chỉ đánh văng thiết trùy và khống chế chứ không giết Hàn Lập", chuong: 51 }
      ],
      tabs: {
        diem: [
          { text: "Che kín toàn thân bằng lục bào thùng thình và khăn đen — không lộ chút da thịt nào; vóc người cao to bất thường, cảm giác dung mạo dữ tợn", chuong: 28 },
          { text: "Thân thể cứng như đá — thiết trùy và vũ khí phàm nhân bật ra không gây thương tích", chuong: 51 },
          { text: "Sức mạnh kinh người — khống chế hoàn toàn Hàn Lập chỉ bằng một tay, không cho hắn thoát được", chuong: 51 }
        ],
        kinhLich: [
          { chuong: 28, importance: "normal", text: "Xuất hiện lần đầu (dưới tên 'người lục bào'): theo sau Mặc đại phu khi lão trở về Thần Thủ Cốc; đứng bất động phía sau ghế của Mặc đại phu, không nói gì." },
          { chuong: 34, importance: "normal", text: "Hàn Lập quan sát từ xa thấy người này đứng bất động ngoài cửa phòng Mặc đại phu giữa trời nắng; Hàn Lập thử bắt chuyện nhưng hắn như khúc gỗ. Bóng lưng khiến Hàn Lập có cảm giác quen thuộc tựa hồ đã gặp ở đâu." },
          { chuong: 44, importance: "minor", text: "Vẫn đứng vô thanh vô tức trong góc phòng Mặc đại phu như người chết khi Hàn Lập tới gặp lại; Hàn Lập phải cố ý để ý mới nhận ra sự tồn tại." },
          { chuong: 51, importance: "normal", tieuDe: "Lộ tên — bắt Hàn Lập theo lệnh", text: "Được Mặc đại phu gọi tên 'Thiết Nô' lần đầu. Nhận lệnh bắt Hàn Lập; đánh văng thiết trùy của hắn rồi khống chế hoàn toàn — thân thể cứng như đá, thiết trùy bật ra không gây thương tích. Đánh gãy vai và đầu gối Hàn Lập nhưng cố ý 'điểm nhẹ' theo lệnh chủ." },
          { chuong: 52, importance: "minor", text: "Tiếp tục khống chế Hàn Lập trong lúc Mặc đại phu thi triển Thất Quỷ Phệ Hồn đại pháp; không cho Hàn Lập thoát." },
          { chuong: 53, importance: "minor", text: "Vẫn canh giữ Hàn Lập sau khi Mặc đại phu hồi phục tuổi trẻ thành mỹ nam tử." },
          { chuong: 54, importance: "minor", text: "Canh giữ Hàn Lập khi Mặc đại phu dán Định Thần Phù." },
          { chuong: 55, importance: "minor", text: "Mang Hàn Lập vào căn nhà đá kín. Bị Mặc đại phu cho ra ngoài canh cửa với lệnh 'giết không tha' bất kỳ ai cố đột nhập." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "chu", quanHe: "Chủ nhân tuyệt đối sai khiến; Thiết Nô không bao giờ hành động ngược lệnh" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0028", "c0029", "c0034", "c0044", "c0051", "c0052", "c0053", "c0054", "c0055"]
    },
    {
      id: "co-thien-long",
      name: "Cổ Thiên Long",
      cn: null,
      aliases: ["Kim lang"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Dã Lang bang", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ — võ giả phàm tục cấp cao",
      trangThai: "tu-vong",
      blurb: "Bang chủ Dã Lang bang, biệt hiệu 'Kim lang'. Đại địch của Thất Huyền môn. Bề ngoài gầy yếu tuấn tú, tuổi khoảng ba mươi — trái ngược với lời đồn ma đầu tắm máu — nhưng cứ động là giết người đúng như truyền thuyết. Phát động cuộc tấn công tổng lực vào Lạc Nhật Phong: tổ chức 300 cây nỏ liên châu quân dụng, thuê cao thủ tu tiên Chu Nho, nhưng sau khi nhận huyết đấu thì bắt đầu hối tiếc khi nhận ra ba sư thúc Thất Huyền môn là cấp bậc nằm ngoài dự liệu.",
      vaiTro: "Bang chủ Dã Lang bang",
      tinhCach: [
        { text: "Bề ngoài tuấn tú gầy yếu trái ngược đồn đại; hành động thì đúng như truyền thuyết — cứ động cái là giết người", chuong: 38 },
        { text: "Táo bạo nhưng thiếu thận trọng — nhận huyết đấu mà chưa ước lượng đủ thực lực đối thủ, sau đó hối tiếc", chuong: 89 }
      ],
      tabs: {
        diem: [
          { text: "Biệt hiệu 'Kim lang'; tuổi khoảng ba mươi, gầy yếu tuấn tú — trái hẳn lời đồn về ma đầu cao to dữ tợn", chuong: 38 },
          { text: "Đứng sau quan sát toàn bộ chiến trường, không tự ra trận trực tiếp; ra quyết định chiến thuật từ phía sau", chuong: 89 }
        ],
        kinhLich: [
          { chuong: 38, importance: "normal", tieuDe: "Được nhắc qua lời gian tế và Lệ Phi Vũ", text: "Hai gian tế đêm khuya nhắc 'bang chủ' khi bàn kế hoạch hành động với Thất Huyền môn. Hàn Lập nhận ra 'Kim lang' Cổ Thiên Long là bang chủ Dã Lang bang duy nhất trong phương viên mấy trăm dặm. Lệ Phi Vũ từng kể thực tế về ngoại hình và tính cách hắn." },
          { chuong: 81, importance: "normal", tieuDe: "Tổ chức tấn công Lạc Nhật Phong", text: "Trực tiếp chỉ huy cuộc tấn công Lạc Nhật Phong với Hồng y thiết vệ tinh nhuệ và 300 cây nỏ liên châu mua từ em họ phó tướng; lên doanh trại chỉ huy trận chiến." },
          { chuong: 82, importance: "major", tieuDe: "Thuê Chu Nho — nhận chỉ đạo từ Trương tiên sư", text: "Thuê Chu Nho (Kim Quang thượng nhân) với thù lao 3000 lượng vàng trả trước và 2000 lượng sau khi giết ba sư thúc Thất Huyền môn. Toàn bộ kế hoạch tấn công có sự chỉ đạo của 'Trương tiên sư' — nhân vật bí ẩn chỉ nghe thấy giọng nói, Cổ Thiên Long tuyệt đối phục tùng." },
          { chuong: 85, importance: "major", tieuDe: "Chấp thuận tử khế đấu", text: "Nhận đề nghị tử khế đấu 50 đối 50 của Vương Tuyệt Sở; tự tin vào phi kiếm thuật của Chu Nho nên đồng ý. Ký vào sinh tử thư." },
          { chuong: 88, importance: "normal", tieuDe: "Nâng thù lao Chu Nho", text: "Tăng thù lao từ 5.000 lên 8.000 lượng vàng để Chu Nho ra trận tiêu diệt người Thất Huyền môn; vui mừng khi thấy Kim Quang Tráo uy lực." },
          { chuong: 89, importance: "normal", tieuDe: "Bắt đầu hối tiếc nhận huyết đấu", text: "Chứng kiến Chu Nho bị hán tử râu ria (sư thúc Thất Huyền môn) áp chế, lần đầu hối tiếc vì tùy tiện nhận lời huyết đấu; nhận ra Thất Huyền môn có ba cao thủ quái vật chống lưng, đó là lý do đối phương dám nhận tử khế. Cân nhắc có nên cử người trợ giúp Chu Nho hay không." },
          { chuong: 90, importance: "minor", text: "Sau khi thấy hán tử không phá nổi kim quang, bỏ ý định phái thêm người tấn công. Chứng kiến Chu Nho kích hoạt hộp đen giết hán tử." },
          { chuong: 94, importance: "major", tieuDe: "Tử trận tại tử đấu trường", text: "Bị Hàn Lập dùng ẩn thân và độn thuật qua mặt rồi giết trong tử đấu trường Lạc Nhật Phong. Cùng hơn 50 người Dã Lang bang còn lại đều bị tiêu diệt. Dã Lang bang chính thức bị xóa sổ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Dã Lang bang", tag: "su-mon", quanHe: "Người lãnh đạo" },
          { ten: "Thất Huyền môn", tag: "doi-dich", quanHe: "Thế lực đối địch chính" },
          { ten: "Chu Nho", tag: "dong-minh", quanHe: "Cao thủ tu tiên thuê làm chỗ dựa; giá 5000 rồi 8000 lượng vàng" },
          { ten: "Trương tiên sư", tag: "an-nhan", quanHe: "Nhân vật bí ẩn đứng sau chỉ đạo toàn bộ kế hoạch — lai lịch chưa rõ" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0038", "c0081", "c0082", "c0083", "c0084", "c0085", "c0086", "c0087", "c0088", "c0089", "c0090", "c0094"]
    },
    {
      id: "quan-su-bep",
      name: "Đại quản sự phòng bếp",
      cn: null,
      aliases: ["Quản sự trù phòng"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Dã Lang bang", trangThai: "gan-bo" },
        { ten: "Thất Huyền môn", trangThai: "gia-mao" }
      ],
      canhGioiCaoNhat: "Không rõ — võ giả phàm tục",
      trangThai: "song",
      blurb: "Đại quản sự phòng bếp trên núi Thất Huyền môn, thực chất là gian tế Dã Lang bang cài cắm nội bộ. Râu chữ bát, vẻ ngoài người buôn bán thành thật. Từng bán thỏ cho Hàn Lập và để lại ấn tượng tốt. Bị Hàn Lập nhận ra qua giọng nói khi nghe lén đêm khuya trên sơn đạo.",
      vaiTro: "Nội gián Dã Lang bang trong Thất Huyền môn",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Râu chữ bát, vẻ ngoài người buôn bán thành thật — thân phận quản sự bếp giúp thường xuyên lên xuống núi truyền tin không bị chú ý", chuong: 38 }
        ],
        kinhLich: [
          { chuong: 38, importance: "major", tieuDe: "Bị Hàn Lập nhận ra là gian tế", text: "Một trong hai gian tế đi đêm bàn kế hoạch hành động với Thất Huyền môn liên quan tới việc trộm một 'danh sách'. Hàn Lập nhận ra qua giọng nói — chính là quản sự trù phòng từng bán thỏ cho hắn." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Cổ Thiên Long", tag: "su-mon", quanHe: "Chủ của bang phái thực sự" },
          { ten: "Hàn Lập", tag: "doi-dich-tam-thoi", quanHe: "Người tình cờ phát hiện thân phận thật" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0038"]
    },
    {
      id: "truong-lao-trat-nhan",
      name: "Trưởng lão sáng lập Trát Nhãn kiếm pháp",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Võ giả phàm tục (từng công lực cao thâm)",
      trangThai: "tu-vong",
      blurb: "Vị trưởng lão Thất Huyền môn thời xa xưa. Thời tráng niên vốn công lực cao thâm, nhưng trong một lần giao tranh trên giang hồ bị đối thủ vô ý phế bỏ nội công. Giấu kín bí mật, bế quan hơn mười năm tự sáng tạo ra Trát Nhãn kiếm pháp — môn kiếm kỹ không cần nội lực. Dùng kiếm pháp mới luyện thành cứu Thất Huyền môn khỏi bị diệt vong, lập đại công, rồi qua đời ở tuổi hoa giáp (sáu mươi). Để lại di chúc đưa kiếm phổ vào Thất Tuyệt đường.",
      vaiTro: "Người sáng lập Trát Nhãn kiếm pháp",
      tinhCach: [
        { text: "Tài cao, thiên phú, kiên trì bế quan hơn mười năm để sáng tạo võ học mới sau khi mất nội lực", chuong: 40 }
      ],
      tabs: {
        diem: [
          { text: "Bị phế bỏ nội công, sợ mất địa vị trong môn nên giấu kín; dùng cơ trí hơn người để che đậy suốt thời gian bế quan", chuong: 40 },
          { text: "Qua đời ở tuổi hoa giáp (sáu mươi) sau khi cứu thoát Thất Huyền môn khỏi bị các bang phái vây công", chuong: 40 }
        ],
        kinhLich: [
          { chuong: 33, importance: "normal", tieuDe: "Được nhắc lần đầu", text: "Lệ Phi Vũ đề cập vị trưởng lão sáng tạo Trát Nhãn kiếm pháp: từng nhiều lần cứu Thất Huyền môn khỏi nguy cơ, trước khi lâm chung lập di chúc bắt buộc đưa kiếm pháp vào Thất Tuyệt đường." },
          { chuong: 40, importance: "normal", tieuDe: "Lai lịch đầy đủ được tiết lộ", text: "Thời tráng niên công lực cao thâm, bị đối thủ phế bỏ võ công vô ý; giấu bí mật, lặng lẽ cưỡng đoạt nhiều bí tịch các môn phái, bế quan hơn mười năm tự sáng tạo Trát Nhãn kiếm pháp. Khi luyện thành, Thất Huyền môn đang bị vây công sắp diệt; hắn mở đường máu thoát vây, lập đại công. Sau đó gặp đại hạn, qua đời ở tuổi hoa giáp." }
        ],
        tuViMoc: [
          { chuong: 40, canhGioi: "Võ giả bị phế nội công — chuyển sang kiếm kỹ không cần chân khí", text: "Từng công lực cao thâm nhưng bị phế bỏ hoàn toàn; về sau dùng Trát Nhãn kiếm pháp thay thế, đủ sức mở đường máu cho toàn môn phái." }
        ],
        nhanMach: [
          { ten: "Thất Huyền môn", tag: "su-mon", quanHe: "Môn phái, người hắn cứu thoát" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [],
          congPhap: [
            { ten: "Trát Nhãn kiếm pháp", loai: "bí kỹ kiếm pháp", trangThai: "sáng lập — đã để lại di chúc đưa vào Thất Tuyệt đường", moTa: "Môn kiếm kỹ ám sát không cần nội lực do hắn tự sáng tạo sau hơn mười năm bế quan, tổng hợp nhiều bí tịch.", nguon: ["c0033", "c0034", "c0040"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      nguon: ["c0033", "c0034", "c0040"]
    },
    {
      id: "du-tu-dong",
      name: "Dư Tử Đồng",
      cn: null,
      aliases: ["Đệ tam nhân", "Nguyên thần ký sinh"],
      gioiTinh: "nam",
      theLuc: ["Gia tộc tu tiên (không nêu tên)"],
      canhGioiCaoNhat: "Tu tiên — Trường Xuân công tầng 7 (chưa Trúc Cơ; nay chỉ còn nguyên thần, mất pháp thân)",
      trangThai: "tu-vong",
      blurb: "Tu sĩ sơ cấp xuất thân gia tộc tu tiên. Tu Trường Xuân công tới tầng 7 nhưng tư chất có hạn, không đạt Trúc Cơ. Khi bị Mặc Cư Nhân hạ độc giết chết, lâm tử dùng 'huyết tiến âm hồn chú' phóng nguyên thần chui vào thân Mặc đại phu ký sinh — trở thành quỷ hồn trú ngụ suốt nhiều năm. Là KẺ CHỦ MƯU thật: cố ý giăng bẫy để Mặc đại phu và Hàn Lập đồng quy vu tận, hòng ngư ông đắc lợi đoạt xá Hàn Lập. Bị Hàn Lập phản sát: độc dịch phá nguyên thần + Ngọc Đái đoản kiếm chém tận diệt tại @c60.",
      vaiTro: "Phản diện ngầm — kẻ chủ mưu vụ đoạt xá; nguyên thần ký sinh trong thân Mặc đại phu",
      tinhCach: [
        { text: "Giảo hoạt, xảo quyệt — đẩy hết tội lỗi cho Mặc đại phu (đã chết), tự xưng 'nạn nhân bất đắc dĩ' khi thật ra là kẻ chủ mưu", chuong: 58 },
        { text: "Kiên nhẫn và tầm nhìn xa — ký sinh suốt nhiều năm, chịu đựng Mặc đại phu dùng Phệ Hồn đại pháp giam cầm, chờ thời cơ đoạt xá", chuong: 59 },
        { text: "Biết xuống nước khi thế yếu — tha mạng Hàn Lập, hứa hẹn 'hợp tác', mời làm đồ đệ gia tộc tu tiên; thật ra muốn hắn hạ cảnh giác", chuong: 59 },
        { text: "Dụ dỗ bằng viễn cảnh tu tiên bất tử — chiêu quen dùng với cả Mặc đại phu lẫn Hàn Lập", chuong: 60 }
      ],
      tabs: {
        diem: [
          { text: "Trước khi chết dùng 'huyết tiến âm hồn chú' — hóa máu huyết thành huyết chú phún lên đầu Mặc đại phu; nguyên thần xuất khiếu, chui vào thân Mặc đại phu vì không có pháp khí dung thân", chuong: 58 },
          { text: "Ký sinh trong thân Mặc đại phu suốt nhiều năm, chịu bị Phệ Hồn đại pháp giam cầm khống chế, từng đòi về gia tộc xin cứu nhưng bị từ chối", chuong: 59 },
          { text: "Chủ mưu thật: cố ý truyền công pháp sai lệch cho Mặc đại phu, dẫn dắt hắn nhắm vào Hàn Lập — mục đích thật là để cả hai đồng quy vu tận, mình đoạt xá Hàn Lập", chuong: 59 },
          { text: "Nay chỉ còn nguyên thần (quang cầu lục quang), mất pháp thân; nguyên khí đại thương sau cuộc đoạt xá thất bại với Hàn Lập; pháp lực hao mòn dần vì không thân thể bổ sung", chuong: 59 }
        ],
        kinhLich: [
          { chuong: 42, importance: "normal", text: "Cảnh báo Mặc đại phu qua truyền âm: Hàn Lập tinh minh, không dễ thất bại. Bị Mặc đại phu khiển trách nghi ngờ công pháp 'có chỗ không ổn'; vội giải thích rồi không dám tiếp lời. Bộ mặt thật lúc này còn ẩn." },
          { chuong: 55, importance: "normal", tieuDe: "Lộ diện 'đệ tam nhân'", text: "Tiếng nói 'đệ tam nhân' lần đầu lộ diện — cất tiếng trong căn nhà đá khiến cả Mặc đại phu lẫn Hàn Lập đều nghe thấy. Ép Mặc đại phu thề độc về việc hợp tác — vì nghi lão ôm hận muốn trở mặt sau khi đoạt xá xong." },
          { chuong: 56, importance: "normal", tieuDe: "Giải thích Thất Quỷ Phệ Hồn đại pháp", text: "Tham gia vào nghi thức đoạt xá bên phía Mặc đại phu; hiện diện như quỷ hồn ẩn trong không gian. Giải thích nguyên lý Thất Quỷ Phệ Hồn đại pháp và cơ chế đoạt xá cho Hàn Lập nghe (lúc Hàn Lập đang bất tỉnh — về sau Hàn Lập nhớ lại)." },
          { chuong: 57, importance: "major", tieuDe: "Lộ danh tính — đoạt xá thất bại", text: "Đoạt xá thất bại; nguyên thần bị nguyên thần Hàn Lập đánh đuổi, chỉ còn 1/3, trốn vào góc nhà đá. Hàn Lập gọi đúng tên 'Dư Tử Đồng' — thừa nhận thân phận và bắt đầu khai báo. Chính thức lộ diện là nhân vật thứ ba ẩn phía sau vụ đoạt xá." },
          { chuong: 58, importance: "normal", tieuDe: "Tự khai lai lịch — chiêu tìm đồng cảm", text: "Kể trọn bộ lai lịch: gia tộc tu tiên, tu Trường Xuân công tầng 7, không đạt Trúc Cơ, lang thang thế tục, mua Huyết linh thảo, bị truy sát, dùng Bảo mệnh phù chạy thoát, gặp Mặc đại phu bị hại, lâm tử dùng huyết tiến âm hồn chú cứu nguyên thần. Đẩy hết tội cho Mặc đại phu, tự nhận là nạn nhân bất đắc dĩ." },
          { chuong: 59, importance: "major", tieuDe: "Tự thú chủ mưu — đề nghị hợp tác", text: "Bị Hàn Lập vạch trần toàn bộ: thực ra là kẻ chủ mưu, cố ý giăng bẫy. Thừa nhận là chủ mưu nhưng biện minh 'không có lựa chọn khác'. Tiết lộ tam đại thiết tắc của đoạt xá. Ở thế yếu, xuống nước đề nghị hợp tác: hứa dẫn Hàn Lập gặp trưởng lão gia tộc thu làm đồ đệ tu tiên chân chính." },
          { chuong: 60, importance: "major", tieuDe: "BỊ DIỆT — Hàn Lập phản sát", text: "Bị Hàn Lập dùng mưu vờ đồng ý hợp tác để câu giờ; lúc mất cảnh giác bị phun độc dịch trúng nguyên thần — quang cầu ảm đạm, thụ thương nặng, kêu thảm. Tiếp theo bị Ngọc Đái đoản kiếm chém xuống. Nguyên thần bị tiêu diệt tận gốc." }
        ],
        tuViMoc: [
          { chuong: 58, canhGioi: "Tu tiên — Trường Xuân công tầng 7 (không đạt Trúc Cơ)", text: "Tự khai: tu Trường Xuân công tới tầng 7 nhưng tư chất có hạn, hỏa hầu không đủ để đột phá Trúc Cơ. Rời gia tộc xuống thế tục tìm dược liệu/nâng tâm cảnh, cuối cùng sa vào vinh hoa phai nhạt tâm tu.", importance: "major" },
          { chuong: 59, canhGioi: "Nguyên thần tàn — 1/3 còn lại, nguyên khí đại thương", text: "Sau cuộc đoạt xá thất bại với Hàn Lập: chỉ còn 1/3 nguyên thần, nguyên khí đại thương, pháp lực hao mòn dần. Dư Tử Đồng xác nhận cao hơn Hàn Lập 1 tầng (tầng 7 vs tầng 6-7 của Hàn Lập), nhưng ở trạng thái đại thương không thể địch lại." }
        ],
        nhanMach: [
          { ten: "Mặc đại phu (Mặc Cư Nhân)", tag: "cuu-thu", quanHe: "Kẻ hạ độc giết hắn năm xưa; hắn ký sinh vào thân Mặc đại phu suốt nhiều năm, thống hận nhưng bất lực trước Phệ Hồn đại pháp" },
          { ten: "Hàn Lập", tag: "ke-thu", quanHe: "Mục tiêu đoạt xá; bị Hàn Lập phản sát tại c60" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [
            { ten: "Huyết linh thảo (đã mất)", loai: "dược liệu", trangThai: "bị cướp", moTa: "Dược liệu hiếm mua được ở dược điếm; bị Mặc đại phu cướp sau khi giết hắn.", nguon: ["c0058"] },
            { ten: "Dược hoàn (đã mất)", loai: "đan dược không rõ loại", trangThai: "bị cướp", moTa: "Đan dược trên thi thể Dư Tử Đồng; Mặc đại phu cướp uống vào, khôi phục công lực.", nguon: ["c0058"] }
          ],
          congPhap: [
            { ten: "Trường Xuân công (tầng 7)", loai: "công pháp tu tiên", trangThai: "đã tu", moTa: "Tu tới tầng 7, không đột phá Trúc Cơ được vì tư chất hạn.", nguon: ["c0058"] },
            { ten: "Huyết tiến âm hồn chú", loai: "bí thuật lâm tử", trangThai: "đã dùng @c58", moTa: "Bí thuật dùng khi lâm tử: hóa máu huyết thành huyết chú phún lên đầu đối phương; nguyên thần xuất khiếu thoát ra trước khi thân xác chết.", nguon: ["c0058"] }
          ],
          linhThu: [], nguyenLieu: [], linhThao: [],
          khac: [
            { ten: "Bảo mệnh phù (đã dùng)", loai: "phù lục gia tộc", trangThai: "đã tiêu hao", moTa: "Bí pháp gia tộc tu tiên: kích hoạt gây hiệu ứng 'đồng quy vu tận' với đối thủ — dùng để dọa lui tu sĩ truy sát.", nguon: ["c0058"] }
          ]
        }
      },
      uuTien: 3,
      nguon: ["c0042", "c0055", "c0056", "c0057", "c0058", "c0059", "c0060"]
    },
    {
      id: "ly-truong-lao",
      name: "Lý trưởng lão",
      cn: "李长老",
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ — trưởng lão Thất Huyền môn",
      trangThai: "song",
      blurb: "Trưởng lão Thất Huyền môn, sư phụ của Mã Vinh. Người tốt hiếm có ở tầng cao môn phái — không tranh quyền đoạt thế, đối đãi tử tế với tất cả mọi người từ đệ tử cấp thấp đến đồng môn. Quan hệ rộng, được cả môn yêu quý. Bị trúng kịch độc ám toán của Dã Lang bang khi xuống núi hành sự, hôn mê bất tỉnh — bệnh tình cực nặng (toàn thân nổi độc ban đủ màu, hắc khí phủ mặt khi thở). Được Hàn Lập chữa trị khỏi; hồi phục hoàn toàn.",
      vaiTro: "Trưởng lão Thất Huyền môn, bệnh nhân của Hàn Lập",
      tinhCach: [
        { text: "Không tham gia tranh quyền đoạt thế nội môn, đối đãi tử tế với mọi người — được cả môn từ trên xuống dưới kính trọng", chuong: 69 }
      ],
      tabs: {
        diem: [
          { text: "Vóc người mi mục thanh tú ('mi mục thiên') khi còn khỏe", chuong: 70 },
          { text: "Bị trúng kịch độc ám toán khi đấu với cao thủ Dã Lang bang: lúc trúng không để ý còn đánh bại đối phương, nhưng chưa về tới núi thì độc phát, lâm vào hôn mê", chuong: 68 }
        ],
        kinhLich: [
          { chuong: 68, importance: "major", tieuDe: "Trúng kịch độc Dã Lang bang", text: "Xuống núi hành sự, đấu với cao thủ Dã Lang bang, trúng ám toán kịch độc; đánh bại đối phương xong nhưng chưa về núi thì độc phát hôn mê. Các đại phu trên núi đều bó tay không nhận ra loại độc." },
          { chuong: 70, importance: "normal", tieuDe: "Bệnh tình được Hàn Lập chứng kiến", text: "Hàn Lập lần đầu trực tiếp thấy bệnh tình: hôn mê bất tỉnh; toàn thân nổi độc ban lớn nhỏ đủ màu sắc; mỗi lần thở ra mặt bị hắc khí nhàn nhạt phủ — triệu chứng trúng độc cực nặng." },
          { chuong: 71, importance: "normal", tieuDe: "Được Hàn Lập dùng Thanh Linh Tán giải độc", text: "Nhờ kết hợp Thanh Linh Tán (hòa nước ấm) và châm cứu. Toàn thân hắc khí và độc ban giảm mạnh. Thanh Linh Tán không giải được độc còn tiềm phục sâu trong người." },
          { chuong: 72, importance: "major", tieuDe: "Hoàn toàn giải độc — sẽ tỉnh lại ngày hôm sau", text: "Mã phó môn chủ và Tiễn trưởng lão dùng nội lực bức huyết độc qua huyệt đạo; Hàn Lập dùng kim châm để lấy độc ra. Mã Vinh lấy chậu nước. Toàn bộ độc tố tiêu trừ — hắc khí và độc ban biến mất hoàn toàn." },
          { chuong: 73, importance: "normal", tieuDe: "Hồi phục hoàn toàn", text: "Hắc khí và độc ban đã hết; Lý trưởng lão được phán là sẽ hồi phục dần. Hàn Lập kê đơn thuốc bổ rồi rời đi không chờ cảm tạ." },
          { chuong: 80, importance: "bridge", tieuDe: "Đã lên Lạc Nhật phong cùng gia nhân", text: "Được tên mập (thân tín Vương môn chủ) tới triệu lên Lạc Nhật phong nghị sự; Lý trưởng lão dẫn theo Trương Tụ Nhi và vài đệ tử lên núi trước khi đại biến xảy ra." },
          { chuong: 86, importance: "major", tieuDe: "Xác nhận là sư phụ Mã Vinh — ký tử khế đấu", text: "Một trong những trưởng bối trực tiếp ký tử khế đấu tham gia huyết chiến Thất Huyền môn với Dã Lang bang. Danh tính là sư phụ của Mã Vinh được xác nhận rõ trong nguyên tác tại chương này." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mã Vinh", tag: "su-mon", quanHe: "Đệ tử đắc ý thứ năm" },
          { ten: "Lý thị", tag: "the-thiep", quanHe: "Vợ" },
          { ten: "Trương Tụ Nhi", tag: "ho-hang", quanHe: "Cháu ngoại" },
          { ten: "Triệu trưởng lão", tag: "ban-be", quanHe: "Bạn chí giao" },
          { ten: "Hàn Lập", tag: "an-nhan", quanHe: "Thầy thuốc được mời tới cứu chữa" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0068", "c0069", "c0070", "c0071", "c0072", "c0073", "c0080", "c0086"]
    },
    {
      id: "trieu-truong-lao",
      name: "Triệu trưởng lão",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ — luyện Hỗn viên thủ",
      trangThai: "song",
      blurb: "Trưởng lão Thất Huyền môn, bạn chí giao của Lý trưởng lão. Tính bộc trực, lỗ mãng, dễ bị khích nổi nóng. Luyện Hỗn viên thủ — khiến hai bàn tay to lớn, mười ngón căng phồng. Vừa từ Tụ Bảo đường trở về, không cùng hệ phái với Mã phó môn chủ; lạnh nhạt và hoài nghi y thuật Hàn Lập.",
      vaiTro: "Trưởng lão Thất Huyền môn",
      tinhCach: [
        { text: "Bộc trực, lỗ mãng, dễ bị khích nổi nóng — buột miệng nói thẳng điều không nên nói khi bị Mã phó môn chủ dẫn dụ", chuong: 70 },
        { text: "Hoài nghi y thuật của người trẻ — không tin 'tiểu oa đầu mười mấy tuổi' có thể trị được", chuong: 70 }
      ],
      tabs: {
        diem: [
          { text: "Bàn tay to lớn, mười ngón căng phồng — đặc trưng của Hỗn viên thủ", chuong: 69 },
          { text: "Vừa từ Tụ Bảo đường trở về núi (hai ngày trước c69)", chuong: 69 }
        ],
        kinhLich: [
          { chuong: 69, importance: "normal", tieuDe: "Lần đầu gặp Hàn Lập", text: "Được Mã Vinh giới thiệu với Hàn Lập. Thái độ không lạnh không nóng, trong mắt đầy hoài nghi về y thuật 'Hàn thần y' còn trẻ tuổi." },
          { chuong: 70, importance: "normal", tieuDe: "Bị Mã phó môn chủ khích — mâu thuẫn hệ phái lộ rõ", text: "Bị Mã phó môn chủ dẫn dụ buột miệng nghi ngờ y thuật Hàn Lập ('Mới mười mấy tuổi tiểu oa đầu… ta không tin'). Lộ mâu thuẫn hệ phái: Triệu và Mã thuộc hai hệ phái đối địch trong Thất Huyền môn. Luyện Hỗn viên thủ được nhắc đến." },
          { chuong: 71, importance: "normal", tieuDe: "Hỗ trợ chữa trị Lý trưởng lão", text: "Có mặt và hỗ trợ khi Hàn Lập tiến hành chữa trị Lý trưởng lão." },
          { chuong: 72, importance: "normal", tieuDe: "Dùng nội lực bức độc", text: "Cùng Mã phó môn chủ và Tiễn trưởng lão dùng nội lực bức huyết độc qua huyệt đạo ra ngoài — nguyên khí hao tổn không ít." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Lý trưởng lão", tag: "ban-be", quanHe: "Bạn chí giao" },
          { ten: "Mã phó môn chủ", tag: "doi-dich", quanHe: "Đối thủ hệ phái nội môn" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [],
          congPhap: [
            { ten: "Hỗn viên thủ", loai: "thủ pháp", trangThai: "đang luyện", moTa: "Võ công đặc thù khiến hai bàn tay to lớn, mười ngón căng phồng. Mã phó môn chủ mỉa mai 'chắc đã luyện tới mức xuất thần nhập hóa'.", nguon: ["c0070"] }
          ],
          linhThu: [], nguyenLieu: [], linhThao: [], khac: []
        }
      },
      uuTien: 5,
      nguon: ["c0069", "c0070", "c0071", "c0072"]
    },
    {
      id: "tien-truong-lao",
      name: "Tiễn trưởng lão",
      cn: null,
      aliases: ["Tiền trưởng lão"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ — luyện nội công tuyệt tình đoạn dục",
      trangThai: "song",
      blurb: "Trưởng lão Thất Huyền môn, mặt trắng bệch ('bạch diện'). Luyện một môn nội công đặc thù phải 'tuyệt tình đoạn dục', dẫn đến tính cách lãnh đạm với tất cả mọi người. Hàn Lập đã từng gặp qua trước c69.",
      vaiTro: "Trưởng lão Thất Huyền môn",
      tinhCach: [
        { text: "Lãnh đạm với tất cả mọi người do yêu cầu của công pháp tu luyện — tuyệt tình đoạn dục", chuong: 69 }
      ],
      tabs: {
        diem: [
          { text: "Mặt trắng bệch ('bạch diện'), vẻ lạnh lùng nhất trong các trưởng lão", chuong: 69 }
        ],
        kinhLich: [
          { chuong: 69, importance: "minor", tieuDe: "Xuất hiện tại nhà Lý trưởng lão", text: "Có mặt trong phòng khách nhà Lý trưởng lão. Chỉ lạnh lùng gật đầu khi Mã Vinh giới thiệu với Hàn Lập, thái độ lãnh đạm đúng theo tính cách." },
          { chuong: 71, importance: "normal", tieuDe: "Hỗ trợ chữa trị Lý trưởng lão", text: "Có mặt và hỗ trợ khi Hàn Lập tiến hành chữa trị." },
          { chuong: 72, importance: "normal", tieuDe: "Dùng nội lực bức độc — nguyên khí đại thương", text: "Cùng Mã phó môn chủ dùng nội lực bức huyết độc qua huyệt đạo ra ngoài; nguyên khí hao tổn không ít." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: {
          phapBao: [],
          danDuoc: [],
          congPhap: [
            { ten: "Nội công tuyệt tình đoạn dục (chưa rõ tên)", loai: "nội công đặc thù", trangThai: "đang luyện", moTa: "Môn nội công đòi hỏi người luyện phải đoạn tuyệt tình cảm và dục vọng; dẫn đến tính cách lãnh đạm với mọi người. Tên cụ thể chưa được tiết lộ.", nguon: ["c0069"] }
          ],
          linhThu: [], nguyenLieu: [], linhThao: [], khac: []
        }
      },
      uuTien: 5,
      nguon: ["c0069", "c0071", "c0072"]
    },
    {
      id: "truong-tu-nhi",
      name: "Trương Tụ Nhi",
      cn: null,
      aliases: [],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "ho-hang" }
      ],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      blurb: "Thiếu nữ khoảng 15-16 tuổi, cháu ngoại của Lý trưởng lão. Khác họ Lý (chi tiết khiến Hàn Lập hơi bất ngờ). Gương mặt đáng yêu tinh nghịch; lúc c69-70 đang khóc, hai mắt sưng mọng vì lo lắng cho ông ngoại. Đối tượng tình cảm của Lệ Phi Vũ.",
      vaiTro: "Cháu ngoại Lý trưởng lão, đối tượng tình cảm của Lệ Phi Vũ",
      tinhCach: [
        { text: "Gương mặt đáng yêu tinh nghịch; khi lo lắng cho người thân thì khóc không thôi", chuong: 69 }
      ],
      tabs: {
        diem: [
          { text: "Cháu ngoại Lý trưởng lão, mang họ Trương (khác họ Lý)", chuong: 70 },
          { text: "Khoảng 15-16 tuổi, trên đầu cài bích ngọc trâm, mặc y phục xanh biếc, tóc đen tuyền túm cao", chuong: 69 }
        ],
        kinhLich: [
          { chuong: 69, importance: "normal", tieuDe: "Xuất hiện cạnh Lệ Phi Vũ", text: "Đang khóc (lo cho tình trạng ông ngoại), được Lệ Phi Vũ ở cạnh an ủi. Hàn Lập gặp lần đầu, đánh giá là 'tiểu mĩ nhân tiền thật giá thật'." },
          { chuong: 70, importance: "minor", tieuDe: "Được giới thiệu là cháu ngoại Lý trưởng lão", text: "Mã Vinh giới thiệu là cháu ngoại (khác họ) của Lý trưởng lão — chi tiết làm Hàn Lập hơi ngạc nhiên." },
          { chuong: 77, importance: "bridge", tieuDe: "Đã lên Lạc Nhật phong cùng ông ngoại", text: "Được nhắc tên khi Lệ Phi Vũ lo lắng cho an nguy; đã đi theo Lý trưởng lão lên Lạc Nhật phong trước khi đại biến xảy ra." },
          { chuong: 80, importance: "bridge", tieuDe: "Đang ở Lạc Nhật phong trong đại biến", text: "Được tên mập nhắc tới; đang ở Lạc Nhật phong cùng ông ngoại Lý trưởng lão trong khi Thất Huyền môn bị liên quân tấn công." },
          { chuong: 86, importance: "major", tieuDe: "Lộ thân phận hạch tâm đệ tử Thất tuyệt đường — ký tử khế", text: "Bị Vương môn chủ điều vào nhóm tử đấu — thân phận thực là hạch tâm đệ tử Thất tuyệt đường, không phải thiếu nữ nhu nhược như Hàn Lập tưởng. Đứng trong nhóm nữ cắn môi mặt tái nhợt, mặc quần áo trắng; sắp ký tử khế." },
          { chuong: 87, importance: "normal", text: "Vừa mừng rỡ vừa sợ hãi khi thấy Lệ Phi Vũ đến; chính thức tham gia huyết đấu cùng phía Thất Huyền môn. Đang tâm sự thân mật với Lệ Phi Vũ ngay tại chiến trường." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Lý trưởng lão", tag: "ho-hang", quanHe: "Ông ngoại" },
          { ten: "Lệ Phi Vũ", tag: "tinh-cam", quanHe: "Người để ý, ký tử khế để ở bên nàng trong huyết đấu" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0069", "c0070", "c0077", "c0080", "c0086", "c0087"]
    },
    {
      id: "ly-thi",
      name: "Lý thị",
      cn: null,
      aliases: ["Sư nương"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "ho-hang" }
      ],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      blurb: "Thiếu phụ trung niên, vợ của Lý trưởng lão. Được Mã Vinh gọi là 'sư nương'. Dẫn Hàn Lập vào phòng bệnh của Lý trưởng lão.",
      vaiTro: "Vợ Lý trưởng lão",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Thiếu phụ trung niên; được các đệ tử của Lý trưởng lão kính xưng là 'sư nương'", chuong: 70 }
        ],
        kinhLich: [
          { chuong: 70, importance: "minor", tieuDe: "Được giới thiệu, dẫn Hàn Lập vào phòng bệnh", text: "Mã Vinh giới thiệu Lý thị (sư nương) cho Hàn Lập. Lý thị dẫn Hàn Lập đi sát tới giường bệnh của Lý trưởng lão." },
          { chuong: 71, importance: "normal", tieuDe: "Bón thuốc cho Lý trưởng lão", text: "Tận tay bón Thanh Linh Tán đã hòa nước ấm cho Lý trưởng lão uống theo hướng dẫn của Hàn Lập." },
          { chuong: 72, importance: "normal", tieuDe: "Chứng kiến giải độc hoàn toàn", text: "Có mặt khi Mã phó môn chủ và Tiễn trưởng lão bức độc và Hàn Lập dùng kim châm. Lý trưởng lão hoàn toàn giải độc." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Lý trưởng lão", tag: "the-thiep", quanHe: "Chồng" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0070", "c0071", "c0072"]
    },
    {
      id: "ma-vinh",
      name: "Mã Vinh",
      cn: "马荣",
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ — cao cấp đệ tử Thất Huyền môn",
      trangThai: "song",
      blurb: "Đệ tử đắc ý thứ năm của Lý trưởng lão, mặc cẩm y cao cấp đệ tử. Từng theo sư phụ đến Thần thủ cốc vài lần ra mắt Hàn Lập nên là người quen. Người dẫn Hàn Lập đến cứu Lý trưởng lão bị trúng kịch độc. Tình thầy trò với Lý trưởng lão rất sâu đậm.",
      vaiTro: "Đệ tử đắc ý của Lý trưởng lão",
      tinhCach: [
        { text: "Lo lắng, quyết tâm không từ bỏ khi sư phụ lâm nguy — cầu cứu khắp nơi dù bị các đại phu khác bó tay", chuong: 68 },
        { text: "Thân phận thấp nên hay đứng ngoài nhường người khác nói chuyện; hành động lỗ mãng khi cấp bách (kéo thẳng tay Hàn Lập dù làm nhiều người bất mãn)", chuong: 69 }
      ],
      tabs: {
        diem: [
          { text: "Mặc cẩm y đặc trưng cao cấp đệ tử Thất Huyền môn", chuong: 68 },
          { text: "Đệ tử đắc ý thứ năm (năm trong số các đệ tử đắc ý) của Lý trưởng lão", chuong: 68 }
        ],
        kinhLich: [
          { chuong: 68, importance: "major", tieuDe: "Cầu cứu Hàn Lập cứu sư phụ", text: "Tới Thần thủ cốc khẩn cầu Hàn Lập cứu Lý trưởng lão trúng kịch độc Dã Lang bang đang hôn mê; lo lắng tột độ, tức giận các đại phu khác bó tay." },
          { chuong: 69, importance: "normal", tieuDe: "Dẫn Hàn Lập vào nhà Lý trưởng lão", text: "Đứng ngoài lo lắng (nắm chặt tay), sốt ruột kéo thẳng Hàn Lập vào phòng khách sau khi Hàn Lập chào hỏi xong. Giới thiệu lần lượt các nhân vật trong phòng cho Hàn Lập." },
          { chuong: 70, importance: "minor", tieuDe: "Giới thiệu thân nhân Lý trưởng lão", text: "Giới thiệu Lý thị (sư nương) và Trương Tụ Nhi (cháu ngoại Lý trưởng lão) cho Hàn Lập. Xấu hổ giải thích khi Lệ Phi Vũ vờ lạnh lùng với Hàn Lập." },
          { chuong: 72, importance: "normal", tieuDe: "Lấy nước chậu — hỗ trợ bức độc", text: "Được Hàn Lập chỉ thị, nhanh chóng đi lấy chậu nước sạch để đựng độc tố rút ra từ cơ thể Lý trưởng lão." },
          { chuong: 79, importance: "normal", tieuDe: "Bị tên mập tước quyền chỉ huy — sốt ruột bất lực", text: "Muốn phái người ra dò xét tình hình địch nhưng bị trung niên mập (thân tín Vương môn chủ) dùng kim sắc lệnh bài ép phải phục tùng; biến thành lá chắn sống của tên mập, 'sốt ruột như kiến bò trên chảo lửa'." },
          { chuong: 80, importance: "normal", tieuDe: "Tổ chức bảo vệ gia quyến tại khu nhà đang xây", text: "Thỉnh Lệ Phi Vũ để lại hơn hai mươi thủ hạ; gom đám gia quyến không biết võ công vào khu nhà đang xây trong núi để bảo vệ tập trung khi tao loạn." },
          { chuong: 84, importance: "normal", tieuDe: "Kể cho Hàn Lập nghe tình hình Lạc Nhật Phong", text: "Xuất hiện ngắn tại Lạc Nhật Phong; kể cho Hàn Lập nghe về tình hình tử khế đấu giữa Thất Huyền môn và Dã Lang bang, giúp Hàn Lập hiểu thể lệ huyết chiến." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Lý trưởng lão", tag: "su-mon", quanHe: "Sư phụ" },
          { ten: "Hàn Lập", tag: "an-nhan", quanHe: "Thầy thuốc được cầu cứu cứu sư phụ" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0068", "c0069", "c0070", "c0072", "c0079", "c0080", "c0084"]
    },
    {
      id: "ngo-pho-mon-chu",
      name: "Ngô phó môn chủ",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "tu-vong" }
      ],
      canhGioiCaoNhat: "Không rõ — phó môn chủ Thất Huyền môn (đệ nhị cao thủ toàn môn)",
      trangThai: "tu-vong",
      blurb: "Phó môn chủ Thất Huyền môn, cao thủ thứ hai toàn môn. Dẫn đầu đoàn đàm phán tới Lạc Sa pha gặp Dã Lang bang — không ngờ đây là bẫy phục kích. Bị vây công bởi quá nhiều cao thủ địch, chiến tử tại Lạc Sa pha.",
      vaiTro: "Phó môn chủ Thất Huyền môn (đã tử trận)",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Cao thủ thứ nhì Thất Huyền môn (sau Vương môn chủ)", chuong: 76 }
        ],
        kinhLich: [
          { chuong: 76, importance: "major", tieuDe: "Tử trận tại Lạc Sa pha", text: "Dẫn đầu đoàn đàm phán Thất Huyền môn tới Lạc Sa pha. Dã Lang bang dùng lượng lớn nỏ liên châu quân dụng từ dưới đất phục kích, bắn loạn tiễn tề xạ. Ngô phó môn chủ bị quá nhiều cao thủ Dã Lang bang vây công, chiến tử." },
          { chuong: 77, importance: "normal", tieuDe: "Xác nhận tử vong qua lời kể Lệ Phi Vũ", text: "Lệ Phi Vũ xác nhận với Hàn Lập: Ngô phó môn chủ và mấy trưởng lão đều đã chiến tử trong trận phục kích." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương môn chủ", tag: "su-mon", quanHe: "Môn chủ" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0076", "c0077"]
    },
    {
      id: "ton-chap-phap",
      name: "Tôn chấp pháp",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Dã Lang bang", trangThai: "tu-vong" }
      ],
      canhGioiCaoNhat: "Không rõ — chấp pháp Dã Lang bang",
      trangThai: "tu-vong",
      blurb: "Chấp pháp của Dã Lang bang, giọng bén nhọn như gà trống gáy. Dẫn hơn mười mấy người vào Thần Thủ Cốc theo tử lệnh của phó lệnh chủ để bắt sống thần y. Bị Khúc Hồn giết chết.",
      vaiTro: "Chấp pháp Dã Lang bang (đã chết)",
      tinhCach: [],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 78, importance: "normal", tieuDe: "Dẫn nhóm vào Thần Thủ Cốc bắt thần y — bị Khúc Hồn giết", text: "Dẫn hơn mười mấy bang chúng vào Thần Thủ Cốc theo tử lệnh phó lệnh chủ: bắt sống thần y, không được làm hại. Hàn Lập ra lệnh Khúc Hồn giết sạch trừ tên Lam y; Tôn chấp pháp cùng toàn bộ nhóm bị Khúc Hồn tiêu diệt." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0078"]
    },
    {
      id: "lam-y-chap-phap",
      name: "Lam y chấp pháp",
      cn: null,
      aliases: ["gia hoả tham sinh uý tử"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Dã Lang bang", trangThai: "tu-vong" }
      ],
      canhGioiCaoNhat: "Không rõ — chấp pháp Dã Lang bang",
      trangThai: "tu-vong",
      blurb: "Chấp pháp mặc lam y của Dã Lang bang. Bị Khúc Hồn bắt sống theo lệnh Hàn Lập. Tham sống sợ chết, khai hết toàn bộ tin tức không cần tra khảo. Bị Lệ Phi Vũ diệt khẩu sau khi cung cấp đủ thông tin.",
      vaiTro: "Chấp pháp Dã Lang bang (đã chết)",
      tinhCach: [
        { text: "Tham sống uý tử — khai hết không cần tra khảo khi bị bắt", chuong: 79 }
      ],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 78, importance: "normal", tieuDe: "Bị Khúc Hồn bắt sống", text: "Là người duy nhất trong nhóm Tôn chấp pháp mà Hàn Lập ra lệnh giữ mạng để tra khảo. Khúc Hồn bắt sống theo lệnh." },
          { chuong: 79, importance: "normal", tieuDe: "Khai toàn bộ — bị diệt khẩu", text: "Tham sống sợ chết, khai hết toàn bộ tin tức về kế hoạch của Dã Lang bang và liên minh (Thiết thương hội, Đoạn thủy môn) mà không cần tra khảo. Lệ Phi Vũ lấy đủ thông tin rồi diệt khẩu." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0078", "c0079"]
    },
    {
      id: "dau-muc-mat-seo",
      name: "Đầu mục mặt sẹo (Đoạn Thủy môn)",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Đoạn Thủy môn", trangThai: "khong-ro" }
      ],
      canhGioiCaoNhat: "Không rõ — đầu mục Đoạn Thủy môn (cấp ba đạo bạch tuyến)",
      trangThai: "khong-ro",
      blurb: "Đầu mục Đoạn Thủy môn có vết sẹo trên mặt, cấp cao nhất trong nhóm mười tên áo xanh chặn vây Hàn Lập và Lệ Phi Vũ. Tự nhận 'giang hồ lão luyện', quyết đoán rút lui khi nhận ra thực lực địch vượt trội.",
      vaiTro: "Đầu mục Đoạn Thủy môn",
      tinhCach: [
        { text: "Lọc lõi, biết lượng sức — ngay khi thấy Lệ Phi Vũ ra tay liền ra lệnh toàn bộ rút lui tứ tán, phát tín hiệu gọi viện binh", chuong: 80 }
      ],
      tabs: {
        diem: [
          { text: "Ba đạo bạch tuyến trên ống tay áo — cấp đầu mục, cao nhất trong nhóm mười người", chuong: 80 },
          { text: "Trên mặt có vết sẹo", chuong: 80 }
        ],
        kinhLich: [
          { chuong: 80, importance: "normal", tieuDe: "Chặn vây nhóm Hàn Lập — bị Lệ Phi Vũ và Khúc Hồn đánh tan", text: "Chỉ huy mười tên áo xanh Đoạn Thủy môn vây nhóm Hàn Lập cách Lý trạch hơn một dặm, tuyên bố 'Thất Huyền môn đã hết rồi'. Khi Lệ Phi Vũ ra tay, lập tức nhận ra thực lực vượt trội của địch, ra lệnh toàn bộ rút chạy và phát tín hiệu gọi cao thủ tăng viện." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0080"]
    },
    {
      id: "chu-nho",
      name: "Chu Nho",
      cn: null,
      aliases: ["Kim Quang thượng nhân", "Tần Diệp Lĩnh"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Dã Lang bang", trangThai: "lam-thue" },
        { ten: "Diệp gia", trangThai: "de-tu" }
      ],
      canhGioiCaoNhat: "Tu tiên sơ cấp — pháp lực thấp hơn Hàn Lập (Trường Xuân công tầng 8)",
      trangThai: "tu-vong",
      blurb: "Tu sĩ sơ cấp vóc người khiêm tốn, mang biệt hiệu 'Kim Quang thượng nhân' vì mê vàng và sở hữu bộ Kim Quang Tráo phòng ngự. Được Dã Lang bang thuê với giá 5000 rồi nâng lên 8000 lượng vàng để tiêu diệt ba sư thúc Thất Huyền môn. Sở hữu Kim cương bất hoại công (phòng thủ) và một hộp đen bí ẩn chứa vật phẩm điều khiển bằng khẩu quyết giống Khu vật thuật của Hàn Lập — người ngoài gọi là phi kiếm nhưng thực chất chưa xác nhận.",
      vaiTro: "Cao thủ tu tiên thuê cho Dã Lang bang",
      tinhCach: [
        { text: "Ngạo mạn, ác độc, thích hành hạ đối thủ — nở nụ cười quái dị khi thách thức Thất Huyền môn tùy ý tấn công", chuong: 89 },
        { text: "Vóc người không trọn vẹn từ nhỏ bị nhạo báng, đặc biệt căm hận người cao lớn uy mãnh", chuong: 89 }
      ],
      tabs: {
        diem: [
          { text: "Tầm vóc nhỏ bé, vẻ ngoài ăn mặc thô tục; cười tiếng chói tai 'hắc hắc'", chuong: 88 },
          { text: "Pháp lực thấp hơn Hàn Lập theo quan sát Thiên Nhãn Thuật — bạch quang mờ nhạt như có như không", chuong: 88 }
        ],
        kinhLich: [
          { chuong: 82, importance: "major", tieuDe: "Được Dã Lang bang thuê", text: "Ký hợp đồng với Cổ Thiên Long: nhận 3000 lượng vàng trả trước, 2000 lượng sau khi giết ba sư thúc Thất Huyền môn." },
          { chuong: 88, importance: "major", tieuDe: "Ra trận — kích hoạt Kim Quang Tráo", text: "Ngạo nghễ ra mặt đầu tiên trong trận huyết đấu. Dùng lá bùa kim quang phát ra Kim Quang Tráo bọc thân như khôi giáp, vô hiệu hóa đao của hộ pháp Thất Huyền môn; làm chấn động toàn trường. Nhận thêm thù lao 3000 lượng (tổng 8000 lượng vàng)." },
          { chuong: 89, importance: "normal", tieuDe: "Bị hán tử râu ria áp chế", text: "Thách Thất Huyền môn tùy ý công kích; bị hán tử râu ria — sư thúc cao thủ từng là mãnh tướng — áp chế hoàn toàn. Kim tráo bị đấm méo liên tục, ngã xuống đất, niệm pháp quyết hoảng loạn sai. Cố lấy hộp đen ra nhưng không kịp kích hoạt." },
          { chuong: 90, importance: "major", tieuDe: "Kích hoạt hộp đen — giết hán tử", text: "Ngồi xuống, đặt hộp đen lên đùi, niệm chú bắt quyết hô 'Khởi'; luồng sáng mờ bay ra, chém cụt tay phải rồi đâm xuyên ngực hán tử. Thị uy bằng cách điều luồng sáng vẽ hình mãng xà xám trên không; áp đảo tinh thần phe Thất Huyền môn. Hàn Lập nhận ra khẩu quyết giống hệt Khu vật thuật." },
          { chuong: 91, importance: "normal", text: "Bị Hàn Lập dùng Khu vật thuật đoạt mất kiếm phù (luồng sáng từ hộp đen). Kinh hoàng khi một đệ tử trông bình thường của Thất Huyền môn lại có thể thu hồi vật của mình; co tay rút chân, giận mà không dám tấn công." },
          { chuong: 92, importance: "normal", text: "Hiểu lầm Hàn Lập là người của gia tộc tu tiên. Sợ hãi cầu xin tha, khai tên thật: Tần Diệp Lĩnh, đệ tử Diệp gia, tới đây vì quen bang chủ Dã Lang bang chứ không có mưu đồ khai thác khoáng sản hay linh dược. Đang nhờ Hàn Lập tha mạng." },
          { chuong: 93, importance: "major", tieuDe: "Bị Hàn Lập dùng Hỏa Đạn Thuật giết chết", text: "Khi Hàn Lập giả vờ trả lại kiếm phù, hắn bỏ Kim Quang Tráo để đón — đúng lúc đó Hàn Lập phóng Hỏa Đạn Thuật kết liễu. Tử trận; để lại ba vật trong tro tàn: phù lục kim quang, lệnh bài tam giác, Tần thị tộc phổ." }
        ],
        tuViMoc: [
          { chuong: 88, canhGioi: "Tu tiên sơ cấp (nửa vời) — pháp lực dưới Hàn Lập tầng 8", text: "Hàn Lập dùng Thiên Nhãn Thuật quan sát thấy bạch quang mờ nhạt như có như không — xếp vào loại 'nửa vời', pháp lực thấp hơn mình." }
        ],
        nhanMach: [
          { ten: "Cổ Thiên Long", tag: "dong-minh", quanHe: "Chủ thuê — được trả 8000 lượng vàng" },
          { ten: "Thất Huyền môn", tag: "doi-dich", quanHe: "Đối thủ trong huyết đấu" },
          { ten: "Diệp gia", tag: "su-mon", quanHe: "Gia tộc tu tiên Chu Nho tự nhận là đệ tử" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Lá bùa kim quang (Kim Quang Tráo)", loai: "phù chú phòng ngự", trangThai: "đang dùng", moTa: "Lá bùa màu vàng kim quang lấp lánh; đập vào thân phát ra Kim Quang Tráo — quầng sáng vàng bọc thân cứng như sắt thép. Thuộc cấp bậc cao hơn Định Thần Phù.", nguon: ["c0088"] },
            { ten: "Hộp gỗ đen dán bùa phong ấn", loai: "pháp khí bí ẩn", trangThai: "đang giữ", moTa: "Hộp gỗ dài màu đen, dán bùa phong ấn; chứa luồng sáng mờ điều khiển bằng khẩu quyết giống Khu vật thuật. Người ngoài gọi vật bay ra là phi kiếm nhưng nguyên tác không xác nhận thân phận thật của nó.", nguon: ["c0089", "c0090"] }
          ],
          danDuoc: [],
          congPhap: [
            { ten: "Kim cương bất hoại công", loai: "công pháp phòng ngự", trangThai: "đang luyện", moTa: "Công pháp phòng ngự tạo màn hào quang vàng bao thân. Điểm yếu: lực vật lý cực mạnh liên tục có thể làm biến hình màn hào quang.", nguon: ["c0088", "c0089", "c0090"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      uuTien: 3,
      nguon: ["c0082", "c0088", "c0089", "c0090", "c0091", "c0092", "c0093"]
    },
    {
      id: "ba-su-thuc-that-huyen-mon",
      name: "Ba vị sư thúc Thất Huyền môn",
      cn: null,
      aliases: ["hán tử râu ria", "thư sinh", "áo xám trường kiếm"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân (võ học cực cao) — hóa cảnh cao thủ",
      trangThai: "song",
      blurb: "Ba vị trưởng bối sư thúc của Vương Tuyệt Sở, chỗ chống lưng để Thất Huyền môn dám nhận tử khế đấu. Ba người: một thư sinh, một hán tử râu ria ngoài sáu mươi tuổi từng là mãnh tướng giết địch vô số, và một người áo xám mang trường kiếm. Trong đó hán tử râu ria đơn thân áp chế Chu Nho bằng thân thủ kinh người: đi vòng tới mờ ảo gây choáng, tiếng gầm như long ngâm hổ gầm làm đối thủ tay chân vô lực, thân hình phình to như thiết tháp dùng quyền cước đập biến hình cả Kim Quang Tráo. Bị luồng sáng từ hộp đen Chu Nho chém cụt tay phải rồi giết chết.",
      vaiTro: "Trưởng bối sư thúc Thất Huyền môn, chỗ chống lưng chiến lược",
      tinhCach: [
        { text: "Hán tử râu ria: thận trọng đánh giá đối thủ, gõ nhẹ trêu chọc rồi mới tăng tốc tấn công — có kinh nghiệm chiến trận", chuong: 89 }
      ],
      tabs: {
        diem: [
          { text: "Ba người khác biệt rõ: thư sinh thanh mảnh; hán tử râu ria thô lỗ ngoài sáu mươi, từng là mãnh tướng; áo xám mang trường kiếm", chuong: 86 },
          { text: "Mi tâm có thần sắc tang thương — dù là cao thủ vẫn lo lắng trước Kim Quang Tráo của Chu Nho trước khi tìm được đối sách", chuong: 89 }
        ],
        kinhLich: [
          { chuong: 87, importance: "normal", text: "Cùng Vương Tuyệt Sở chứng kiến Hàn Lập phô thân pháp kinh người; thần sắc biến, kinh ngạc và kiêng kỵ." },
          { chuong: 89, importance: "major", tieuDe: "Hán tử râu ria đối chiến Chu Nho", text: "Được Vương Tuyệt Sở cử ra phá Kim Quang Tráo của Chu Nho. Đi vòng quanh ngày càng nhanh tới mờ ảo thân ảnh, gầm vang chấn động Lạc Nhật Phong khiến Chu Nho tay chân vô lực; thân hình phình to như thiết tháp, dùng quyền cước đấm đá dồn dập làm kim tráo liên tục biến hình, đẩy Chu Nho ngã xuống đất." },
          { chuong: 90, importance: "major", tieuDe: "Hán tử bị luồng sáng giết", text: "Nhận ra không thể phá vỡ kim quang, xoay người bỏ chạy. Bị luồng sáng từ hộp đen Chu Nho phóng theo: chém cụt cánh tay phải rồi đâm xuyên ngực, tử trận. Cái chết của hán tử khiến phe Thất Huyền môn rơi vào tuyệt vọng câm lặng." }
        ],
        tuViMoc: [
          { chuong: 89, canhGioi: "Phàm nhân võ học — hóa cảnh cao thủ", text: "Thân pháp nhanh tới mờ ảo; tiếng gầm làm đối thủ tay chân vô lực; thuật phình to thân thể cơ bắp cuồn cuộn đủ sức đập biến hình Kim Quang Tráo — cảnh giới võ học phàm nhân đỉnh cao, không phải tu tiên." }
        ],
        nhanMach: [
          { ten: "Vương Tuyệt Sở", tag: "su-mon", quanHe: "Cháu của ba sư thúc (gọi là 'sư thúc')" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 4,
      nguon: ["c0082", "c0086", "c0087", "c0089", "c0090"]
    },
    {
      id: "ly-mon-chu-de-that",
      name: "Lý Môn chủ đệ thất đại",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Không rõ — Môn chủ Thất Huyền môn thế hệ thứ bảy",
      trangThai: "tu-vong",
      blurb: "Môn chủ đời thứ bảy của Thất Huyền môn, đã qua đời từ lâu. Người thiết kế toàn bộ hệ thống cơ quan bẫy Đại Hãm Tịnh bên trong Lạc Nhật Phong — công trình được lưu truyền bảo vệ tổng đàn suốt hơn hai trăm năm. Đây là nhân vật KHÁC với Lý trưởng lão đang còn sống hiện tại.",
      vaiTro: "Môn chủ đời thứ bảy Thất Huyền môn, người thiết kế Đại Hãm Tịnh",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Người thiết kế hệ thống cơ quan bẫy Đại Hãm Tịnh trong Lạc Nhật Phong — công trình dựa trên động thạch nhũ tự nhiên chiếm hai phần ba lòng núi", chuong: 83 }
        ],
        kinhLich: [
          { chuong: 83, importance: "normal", tieuDe: "Được nhắc tới qua công trình Đại Hãm Tịnh", text: "Tên và công trình được đề cập khi nhắc tới lịch sử tổng đàn Lạc Nhật Phong: lão thiết kế Đại Hãm Tịnh tận dụng cấu trúc động thạch nhũ tự nhiên; cơ quan bẫy truyền thừa qua nhiều thế hệ tới hiện tại." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Thất Huyền môn", tag: "su-mon", quanHe: "Môn phái của lão" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0083"]
    },
    {
      id: "truong-tien-su",
      name: "Trương tiên sư",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Dã Lang bang", trangThai: "hau-thuan" }
      ],
      canhGioiCaoNhat: "Không rõ — tu tiên giả (lai lịch chưa rõ)",
      trangThai: "song",
      blurb: "Nhân vật bí ẩn đứng sau toàn bộ kế hoạch tấn công Thất Huyền môn của Dã Lang bang. Chỉ xuất hiện qua giọng nói — không ai nhìn thấy mặt. Cổ Thiên Long tuyệt đối phục tùng chỉ đạo của người này. Lai lịch, mục đích thực sự và thân phận thật đều chưa được tiết lộ.",
      vaiTro: "Người chỉ đạo bí ẩn sau lưng Dã Lang bang",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Chỉ xuất hiện qua giọng nói; Cổ Thiên Long cư xử phục tùng, không tự đưa ra quyết định lớn nào khi chưa có chỉ đạo", chuong: 82 }
        ],
        kinhLich: [
          { chuong: 82, importance: "major", tieuDe: "Xuất hiện lần đầu qua giọng nói", text: "Giọng nói vang lên, chỉ đạo kế hoạch tấn công Thất Huyền môn; Cổ Thiên Long nghe theo tuyệt đối. Lai lịch và hình dáng thật không được lộ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Cổ Thiên Long", tag: "dong-minh", quanHe: "Người chịu sự chỉ đạo" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 4,
      nguon: ["c0082"]
    },
    {
      id: "ton-nhi-cau",
      name: "Tôn nhị cẩu",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Tứ bình bang", trangThai: "da-roi" },
        { ten: "Hàn Lập (thủ hạ bị khống chế)", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Không rõ — thường nhân/võ lâm",
      trangThai: "song",
      blurb: "Tiểu đầu mục bang Tứ bình bang tại bến đò Gia Nguyên Thành, Lam Châu. Đầu méo mắt chuột, dáng gầy gò, giỏi nịnh nọt. Vốn là quản sự bến đò Tây thành, dưới tay bốn năm chục người. Lớn lên ở Gia Nguyên Thành, thông thuộc mọi tin tức lớn nhỏ trong thành. Mưu cướp Hàn Lập cùng Hắc Hùng nhưng thất bại: đầu hàng, bị ép nuốt Hủ tâm hoàn độc khống chế — nay làm tai mắt cho Hàn Lập.",
      vaiTro: "Thủ hạ Hàn Lập (bị khống chế bằng Hủ tâm hoàn); nguyên tiểu đầu mục Tứ bình bang",
      tinhCach: [
        { text: "Giỏi nịnh nọt nắm lòng người — nhờ đó leo lên được chức tiểu đầu mục dù bộ dạng rách rưới", chuong: 100 },
        { text: "Tham lam nhưng biết chọn thời điểm — thừa nhận đầu hàng ngay khi nhận ra tình thế tuyệt vọng", chuong: 103 }
      ],
      tabs: {
        diem: [
          { text: "Lớn lên ở Gia Nguyên Thành, am hiểu mọi bang phái, thế lực và tin tức trong thành", chuong: 103 },
          { text: "Quản sự bến đò Tây thành của Tứ bình bang, dưới tay bốn năm chục người — địa vị tiểu đầu mục", chuong: 104 }
        ],
        kinhLich: [
          { chuong: 100, importance: "normal", text: "Xuất hiện tại bến đò Gia Nguyên Thành, cùng đám thủ hạ chửi bới đám Hắc hùng mỗi sáng. Chứng kiến Hàn Lập và Khúc Hồn cập bến." },
          { bridge: true, khoang: "c0101–c0102", text: "Nhận ra tài phú lớn trong bao đồ Hàn Lập; hội ý Hắc Hùng chia chác bốn-sáu, sai thủ hạ dẫn Hàn Lập vào hẻm Hắc Thuỷ phục kích." },
          { chuong: 103, importance: "normal", tieuDe: "Đầu hàng — bị Hủ tâm hoàn khống chế", text: "Chứng kiến hơn hai mươi thủ hạ bị Khúc Hồn hạ gục và Hắc Hùng bị Hàn Lập đâm chết. Quỳ xin hàng, khoe am hiểu Gia Nguyên Thành. Bị Hàn Lập ép nuốt Hủ tâm hoàn — độc cần giải dược mỗi tháng một lần. Nhận bạc vụn hơn trăm lạng để dọn sạch hiện trường, hẹn sáng hôm sau gặp tại khách sạn." },
          { bridge: true, khoang: "c0104–c0107", text: "Báo cáo tình hình ba đại bang và chi tiết Mặc phủ cho Hàn Lập; nhận túi bạc hào phóng, được giao do thám về Ngô Kiếm Minh." },
          { chuong: 119, importance: "normal", tieuDe: "Báo tin Thần tiên đại hội", text: "Mang về tin xác thực: nhóm tu tiên giả sắp họp Thần tiên đại hội tại phụ cận thành Gia Nguyên. Nguồn tin: một cấp cao Tứ bình bang say rượu tiết lộ, lấy từ đầu mục nhỏ tình cờ nghe được khi giả chết bằng Quy tức công. Bang chủ Trầm Trọng Sơn đã ra lệnh cấm truyền." },
          { chuong: 120, importance: "major", tieuDe: "Nhận Dẫn hồn chung — được Hàn Lập cài làm bang chủ bù nhìn", text: "Hàn Lập giao Dẫn hồn chung để điều khiển Khúc Hồn; chuông đã được ràng bằng máu khóa (chủ nhân gốc) nên kẻ khác không đoạt được. Nhiệm vụ: thâu tóm Tứ bình bang, thay thế Trầm Trọng Sơn làm bang chủ bù nhìn để Hàn Lập khống chế từ phía sau. Hàn Lập sẽ cho Vân sí điểu theo dõi." },
          { chuong: 122, importance: "major", tieuDe: "Chính thức lên bang chủ Tứ bình bang mới", text: "Sau khi Trầm Trọng Sơn và tam đại hộ pháp chết vì Tiêu Hồn Tán, Tôn nhị cẩu chính thức lên làm bang chủ Tứ bình bang theo kế hoạch Hàn Lập." },
          { chuong: 125, importance: "major", tieuDe: "Nhận giải độc đan — Hủ tâm hoàn giải trừ vĩnh viễn", text: "Hàn Lập tặng Tôn nhị cẩu giải độc đan giải trừ vĩnh viễn Hủ tâm hoàn trong người; ân-uy cùng ban để đảm bảo lòng trung thành bền vững. Hàn Lập rời Gia Nguyên Thành giao Tứ bình bang lại cho Tôn nhị cẩu tự quản." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hắc hùng", tag: "dong-minh", quanHe: "Cựu đồng đảng ở bến đò — nay đã chết" },
          { ten: "Hàn Lập", tag: "chu", quanHe: "Chủ nhân — đã giải trừ Hủ tâm hoàn c125, trung thành vì ân-uy" },
          { ten: "Tịch Thiết Ngưu", tag: "noi-bo", quanHe: "Phó bang chủ Tứ bình bang do Hàn Lập phong c125" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Dẫn hồn chung", loai: "pháp bảo — chuông đồng", trangThai: "đang giữ — khống chế Khúc Hồn", moTa: "Hàn Lập giao chuông để Tôn nhị cẩu điều khiển Khúc Hồn trong nhiệm vụ thâu tóm Tứ bình bang. Chuông đã được khóa máu chủ nhân gốc.", nguon: ["c0120"] }
          ],
          danDuoc: [
            { ten: "Hủ tâm hoàn", loai: "độc (đã giải trừ)", trangThai: "đã giải trừ vĩnh viễn c125", moTa: "Bị Hàn Lập ép nuốt tại c103. Giải trừ vĩnh viễn bằng giải độc đan Hàn Lập tặng tại c125.", nguon: ["c0103", "c0125"] }
          ], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: []
        }
      },
      nguon: ["c0100", "c0101", "c0102", "c0103", "c0104", "c0105", "c0107", "c0119", "c0120", "c0122", "c0125"]
    },
    {
      id: "hac-hung",
      name: "Hắc hùng",
      cn: null,
      aliases: ["Hắc đại hán", "Hắc gia"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thiết chưởng hội", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Võ giả phàm — công phu hạng cao thủ hạng ba",
      trangThai: "tu-vong",
      blurb: "Tiểu đầu mục bang Thiết chưởng hội tại bến đò Gia Nguyên Thành. Cự hán vai to lưng rộng, da đen xanh. Công phu võ học miễn cưỡng vào hàng cao thủ hạng ba, nhãn lực tốt — đủ nhận ra Khúc Hồn chưa xuất toàn lực. Mưu cướp Hàn Lập nhưng phán đoán sai thân phận; bị Hàn Lập đâm xuyên yết hầu bằng nhuyễn kiếm, chết tại hẻm Hắc Thuỷ.",
      vaiTro: "Tiểu đầu mục Thiết chưởng hội, bến đò Gia Nguyên Thành",
      tinhCach: [
        { text: "Nhãn lực sắc bén hơn Tôn nhị cẩu — nhận ra ngay Khúc Hồn chưa xuất toàn lực và không phải đối thủ của mình", chuong: 102 }
      ],
      tabs: {
        diem: [
          { text: "Công phu võ học: miễn cưỡng vào hàng cao thủ hạng ba; nhãn lực tốt hơn bạn đồng hành", chuong: 102 }
        ],
        kinhLich: [
          { chuong: 100, importance: "normal", text: "Xuất hiện tại bến đò Gia Nguyên Thành, đứng phía đối diện Tôn nhị cẩu. Chứng kiến Hàn Lập và Khúc Hồn cập bến." },
          { bridge: true, khoang: "c0101–c0102", text: "Hội ý Tôn nhị cẩu mưu cướp tài phú Hàn Lập; bố trí hơn hai mươi thủ hạ phục kích tại hẻm Hắc Thuỷ. Treo thưởng hai mươi lạng mỗi người để kích động thủ hạ vây Khúc Hồn; nhận ra Khúc Hồn chưa xuất toàn lực nên mưu tính bắt cóc Hàn Lập thoát thân." },
          { chuong: 103, importance: "major", tieuDe: "Bị Hàn Lập đâm xuyên yết hầu — tử vong", text: "Lén áp sát Hàn Lập từ phía sau định đột kích bắt cóc; Hàn Lập phát giác, dùng thân pháp quỷ dị biến mất rồi lách ra sau lưng. Bị đâm xuyên yết hầu bằng nhuyễn kiếm, chết ngay tại chỗ tại hẻm Hắc Thuỷ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Tôn nhị cẩu", tag: "dong-minh", quanHe: "Đồng đảng bến đò — cả hai cùng mưu cướp Hàn Lập" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0100", "c0101", "c0102", "c0103"]
    },
    {
      id: "nghiem-thi",
      name: "Nghiêm thị",
      cn: null,
      aliases: ["Tứ phu nhân", "Tứ sư mẫu"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Kinh Giao hội", trangThai: "lanh-dao" },
        { ten: "Mặc phủ", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      blurb: "Tứ phu nhân của Mặc đại phu (Mặc Cư Nhân), biểu muội của ông. Sau khi chồng rời đi, một mình chủ trì Kinh Giao hội đang sa sút. Trầm tĩnh, mưu lược, tâm kế hơn người — biết kẻ giả mạo họ Ngô nhưng giả vờ câu giờ chờ cơ hội. Mặc đại phu từng chuyển đại bộ phận quyền lợi hội cho bà trước khi rời đi.",
      vaiTro: "Đại diện Kinh Giao hội; Tứ phu nhân Mặc phủ",
      tinhCach: [
        { text: "Trầm tĩnh, mưu lược: biết rõ kẻ giả mạo họ Ngô nhưng chủ động câu giờ thay vì trở mặt ngay, chờ điều tra và thời cơ", chuong: 108 },
        { text: "Đa nghi, cẩn trọng: dù tín vật đã khớp vẫn đòi xem thư xác nhận; nghi Hàn Lập giữ bí mật", chuong: 109 },
        { text: "Si tâm với chồng không đổi — Kinh Giao hội đang suy yếu, vẫn giữ vững chờ 'đông sơn tái khởi'", chuong: 108 }
      ],
      tabs: {
        diem: [
          { text: "Mỹ phụ khoảng ba mươi tuổi, xinh đẹp; đeo long văn giới chỉ — một trong cặp nhẫn tín vật Mặc đại phu để lại", chuong: 109 },
          { text: "Biết điều chế linh dược thông qua con gái nghĩa Mặc Phượng Vũ", chuong: 109 }
        ],
        kinhLich: [
          { chuong: 108, importance: "normal", tieuDe: "Hàn Lập nghe lén", text: "Hàn Lập đột nhập Mặc phủ, nghe lén Nghiêm thị và con gái Mặc Thải Hoàn bàn về Ám Đà suy yếu và kẻ giả mạo họ Ngô. Xác nhận bà biết rõ họ Ngô là giả mạo, đang câu giờ vì thế lực kẻ địch quá lớn." },
          { chuong: 109, importance: "normal", tieuDe: "Tiếp nhận tín vật và thư Mặc đại phu", text: "Nhận Văn long giới Hàn Lập ném vào phòng; khớp hai chiếc nhẫn xác nhận tín vật thật. Nghe Hàn Lập tự xưng đệ tử Mặc đại phu, chào 'Tứ sư mẫu'. Đọc kỹ thư, cau mày ưu tư — sai Mặc Thải Hoàn đi gọi các phu nhân khác tới." },
          { chuong: 110, importance: "normal", tieuDe: "Hỏi gốc tích sư đồ", text: "Hỏi Hàn Lập vì sao Mặc đại phu thu làm đồ đệ. Tỏ thái độ ai oán bất mãn khi nghe chồng ẩn cư Thải Hà sơn suốt tám năm; đa nghi, nhận định Hàn Lập đang giữ bí mật." },
          { chuong: 111, importance: "minor", text: "Cử Vương thị ra ngoài tuần tra vành đai trong khi Hàn Lập ở Mặc phủ — cho thấy bà nắm quyền điều phối nội bộ an ninh." },
          { chuong: 115, importance: "normal", tieuDe: "Đối mặt Hàn Lập mặc áo tang — bị dò xét bằng linh thức", text: "Gặp Hàn Lập cùng các phu nhân khác trong phòng; mặc áo tang trắng. Bị Hàn Lập dùng linh thức quét toàn không gian trước khi hắn vào." },
          { chuong: 116, importance: "normal", tieuDe: "Kế thiên nhân túy thất bại", text: "Tiết lộ mê dược thiên nhân túy tẩm trong nến trắng — tưởng Hàn Lập cũng bị ảnh hưởng; Hàn Lập phá bại. Thừa nhận Gia Nguyên Thành có nhiều người biết tu tiên giả tồn tại; xác nhận Mặc đại phu từng thấy tu tiên giả tranh đấu." },
          { chuong: 117, importance: "major", tieuDe: "Đàm phán — dùng âm hàn chi độc làm quân bài", text: "Nâng cây thoa dưới búi tóc, bình tĩnh lại, dùng âm hàn chi độc trong người Hàn Lập làm đòn uy hiếp. Nghe Hàn Lập kể lại toàn bộ chân tướng Mặc đại phu và Dư Tử Đồng. Lão luyện đổ hết tội lỗi lên Dư Tử Đồng để giữ thể diện phu quân. Từ chối giao Noãn dương bảo ngọc — lấy lý do Mặc phủ nguy cơ diệt môn cần ngoại lực." },
          { chuong: 118, importance: "major", tieuDe: "Đưa điều kiện — uy hiếp hủy bảo ngọc", text: "Đặt điều kiện trao đổi: Hàn Lập tiêu diệt Ngũ Sắc môn VÀ Độc Phách sơn trang; đổi lại nhận Noãn dương bảo ngọc. Uy hiếp: nếu dùng vũ lực, người tâm phúc sẽ hủy bảo ngọc. Nhiều dã tâm, không chịu bỏ quyền lực Kinh Giao hội." },
          { chuong: 119, importance: "normal", tieuDe: "Thận trọng, xin thương lượng trước khi trả lời", text: "Sau khi Hàn Lập đưa điều kiện diệt một bang (không phải cả hai), thận trọng xin được để tỷ muội bàn bạc rồi trả lời vào sáng mai." },
          { chuong: 122, importance: "normal", tieuDe: "Ba nghĩa nữ ra mắt Hàn Lập", text: "Hàn Lập đến Mặc phủ sau khi trừ xong Tứ bình bang cũ; gặp ba nghĩa nữ của Mặc đại phu gồm Mặc Ngọc Châu, Mặc Thải Hoàn, Mặc Phượng Vũ — được gọi là 'Mặc thị tam kiều'." },
          { chuong: 123, importance: "major", tieuDe: "Chấp nhận điều kiện mới — nuốt thuốc con tin", text: "Đồng ý điều kiện Hàn Lập đặt lại: chỉ diệt trang chủ Độc Bá sơn trang Âu Dương Phi Thiên (thầy của Ngô Kiếm Minh), đổi lấy Noãn dương bảo ngọc. Một mình nuốt thuốc con tin hóa học của Hàn Lập thay cho các con gái, thể hiện bản lĩnh che chắn cho con." },
          { chuong: 126, importance: "normal", tieuDe: "Giao Noãn dương bảo ngọc (hồi tưởng)", text: "Sau khi Hàn Lập ám sát Âu Dương Phi Thiên thành công, Nghiêm thị giao Noãn dương bảo ngọc đúng hẹn." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "gia-dinh", quanHe: "Chồng (biểu huynh); rời nhà gần mười năm, tình cảm vợ chồng rất sâu" },
          { ten: "Mặc Thải Hoàn", tag: "gia-dinh", quanHe: "Con gái ruột" },
          { ten: "Mặc Phượng Vũ", tag: "gia-dinh", quanHe: "Nghĩa nữ (con gái nuôi của Mặc đại phu), học y đạo" },
          { ten: "Hàn Lập", tag: "khach", quanHe: "Đã giao Noãn dương bảo ngọc sau khi hắn hoàn thành nhiệm vụ diệt Âu Dương Phi Thiên" }
        ],
        tuiDo: { phapBao: [
          { ten: "Long văn giới chỉ (một trong cặp)", loai: "tín vật — nhẫn hình rồng", trangThai: "đang đeo", moTa: "Chiếc nhẫn còn lại trong cặp Văn long giới. Khi khớp với chiếc Hàn Lập mang tới thì hoa văn rồng liền mạch hoàn hảo không kẽ hở.", nguon: ["c0109"] }
        ], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 3,
      nguon: ["c0104", "c0105", "c0107", "c0108", "c0109", "c0110", "c0111", "c0115", "c0116", "c0117", "c0118", "c0119", "c0122", "c0123", "c0126"]
    },
    {
      id: "mac-thai-hoan",
      name: "Mặc Thải Hoàn",
      cn: null,
      aliases: ["Hoàn nhi", "Tiểu thư út Mặc phủ"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Mặc phủ", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Phàm nhân (có thể liên quan luyện dược)",
      trangThai: "song",
      blurb: "Con gái ruột của Mặc đại phu và Nghiêm thị, khoảng mười lăm mười sáu tuổi. Dung mạo giống mẹ bảy tám phần. Tính tình bộc trực, sắc sảo; thống hận kẻ giả mạo họ Ngô. Toàn thân tản ra 'mùi vị tinh linh cổ quái' — gợi mở liên quan luyện dược.",
      vaiTro: "Con gái út Mặc phủ",
      tinhCach: [
        { text: "Bộc trực, thẳng thắn: nói thẳng muốn 'một kiếm chém kẻ họ Ngô ra làm đôi'", chuong: 108 },
        { text: "Nhanh nhẹn, tinh ý: cười hé với Hàn Lập tỏ vẻ hứng thú khi nghe câu chuyện bái sư", chuong: 110 }
      ],
      tabs: {
        diem: [
          { text: "Toàn thân tản ra mùi vị tinh linh cổ quái — gợi mở có liên quan tu luyện hay luyện dược", chuong: 109 },
          { text: "Được Nghiêm thị sai đi gọi các phu nhân — tin tưởng và giao việc", chuong: 110 }
        ],
        kinhLich: [
          { chuong: 108, importance: "normal", tieuDe: "Hàn Lập nghe lén", text: "Trò chuyện với mẹ Nghiêm thị về Ám Đà suy giảm thu nhập và kẻ giả mạo họ Ngô. Bất mãn gay gắt với Ngũ nương độc chiếm Ám Đà và kẻ họ Ngô đang bám đuổi đại tỷ." },
          { chuong: 109, importance: "normal", tieuDe: "Gặp Hàn Lập lần đầu", text: "Chứng kiến Hàn Lập ném nhẫn vào phòng rồi gõ cửa tự xưng đệ tử. Cười hé với Hàn Lập trong lúc hắn kể chuyện bái sư, tỏ vẻ hứng thú." },
          { chuong: 111, importance: "normal", tieuDe: "Đưa Hàn Lập vào phòng đầu hồi", text: "Theo lệnh Nghiêm thị, đưa Hàn Lập vào căn phòng đầu hồi của Mặc phủ để ổn định trước cuộc bàn bạc." },
          { chuong: 112, importance: "minor", text: "Đòi Hàn Lập 7-8 nghìn lượng bạc phí đan dược; Hàn Lập từ chối thẳng." },
          { chuong: 113, importance: "normal", tieuDe: "Nhận Oanh Hương Hoàn", text: "Hàn Lập tặng nàng Oanh Hương Hoàn — viên đan đỏ tươi thơm ngát, ban đầu điều chế cho Lệ Phi Vũ. Nàng nghi ngờ đây là xuân dược nhưng chưa dám xác định." },
          { chuong: 117, importance: "minor", text: "Nhắc gián tiếp trong lời Hàn Lập: tính xảo trá của nàng học từ Nghiêm thị — nàng là phiên bản trẻ của Nghiêm thị." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Nghiêm thị", tag: "gia-dinh", quanHe: "Mẹ ruột" },
          { ten: "Mặc Ngọc Châu", tag: "gia-dinh", quanHe: "Đại tỷ — con gái Đại phu nhân Kim thị" },
          { ten: "Hàn Lập", tag: "khach", quanHe: "Tự xưng đệ tử Mặc đại phu; tặng Oanh Hương Hoàn" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [
            { ten: "Oanh Hương Hoàn", loai: "đan hoàn (tặng phẩm)", trangThai: "đã nhận từ Hàn Lập", moTa: "Viên đan đỏ tươi, thơm ngát. Không có công dụng tu luyện; chỉ xua đuổi côn trùng và tỏa hương mê người. Mặc Thải Hoàn ngờ là xuân dược.", nguon: ["c0113"] }
          ],
          congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: []
        }
      },
      uuTien: 4,
      nguon: ["c0104", "c0108", "c0109", "c0110", "c0111", "c0112", "c0113", "c0117"]
    },
    {
      id: "mac-ngoc-chau",
      name: "Mặc Ngọc Châu",
      cn: null,
      aliases: ["Đại tiểu thư Mặc phủ", "Mặc phủ tam kiều (đứng đầu)"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Mặc phủ", trangThai: "hien-tai" },
        { ten: "Kinh Giao hội", trangThai: "lien-quan" }
      ],
      canhGioiCaoNhat: "Phàm nhân — võ học từ cao thủ Kinh Giao hội",
      trangThai: "song",
      blurb: "Đại tiểu thư Mặc phủ, con gái Đại phu nhân Kim thị và Mặc đại phu. Nhan sắc đứng đầu trong 'Mặc phủ tam kiều' — quốc sắc thiên hương khuynh thành. Từ nhỏ không thích nữ công, chỉ thích võ nghệ và săn bắn như đàn ông. Đang trên danh nghĩa đính hôn với Ngô Kiếm Minh — thực chất là kế câu giờ của Mặc phủ để điều tra kẻ giả mạo.",
      vaiTro: "Đại tiểu thư Mặc phủ; mục tiêu liên quan Noãn dương bảo ngọc",
      tinhCach: [
        { text: "Phóng khoáng, cá tính mạnh: thích võ và săn bắn, cứ ba ngày một lần cưỡi ngựa ra rừng — không màng lễ giáo con gái thông thường", chuong: 107 },
        { text: "Có cảm tình thật sự với Ngô Kiếm Minh — ửng đỏ mặt khi hắn nói nhỏ, tình cảm khá sâu dù hắn là kẻ giả mạo", chuong: 107 }
      ],
      tabs: {
        diem: [
          { text: "Nhan sắc quốc sắc thiên hương — Hàn Lập từ trên lầu tửu lâu nhìn xuống phải hít sâu một hơi; đẹp hơn Tam nương ba phần theo đánh giá ban đầu của hắn (trước khi gặp Tam nương)", chuong: 107 },
          { text: "Học võ nghệ từ cao thủ Kinh Giao hội; đánh bại mười sáu tình địch của Ngô Kiếm Minh gây xôn xao dư luận", chuong: 106 },
          { text: "Theo thư mạo danh Mặc đại phu: Nghiêm thị sẽ gả một trong ba thiên kim cho Hàn Lập, Noãn dương bảo ngọc làm của hồi môn", chuong: 110 }
        ],
        kinhLich: [
          { chuong: 106, importance: "normal", tieuDe: "Được nhắc tới", text: "Hàn Lập nghe kể: Mặc Ngọc Châu là mỹ nhân nổi danh nhất Mặc phủ, đính hôn với Ngô Kiếm Minh sau khi hắn đánh bại mười sáu tình địch." },
          { chuong: 107, importance: "normal", tieuDe: "Hàn Lập quan sát từ tửu lâu", text: "Cưỡi ngựa trở về sau chuyến đi săn, mặc đồ săn đỏ chói đội mũ tím. Giao ngựa và chiến lợi phẩm cho gia nhân. Nói chuyện thân mật với Ngô Kiếm Minh, ửng đỏ mặt — tình cảm khá sâu. Hàn Lập trên lầu nhìn xuống, lòng xao động." },
          { chuong: 114, importance: "minor", text: "Cùng Ngô Kiếm Minh và Yến Ca có mặt trong sân Mặc phủ khi Hàn Lập đi ngang — không biết thân phận thật của Hàn Lập." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "gia-dinh", quanHe: "Cha ruột (đã chết gần hai năm)" },
          { ten: "Nghiêm thị", tag: "gia-dinh", quanHe: "Tứ mẫu — người chủ trì Mặc phủ" },
          { ten: "Ngô Kiếm Minh", tag: "tinh-cam", quanHe: "Hôn phu danh nghĩa; thực chất là kẻ giả mạo bị Mặc phủ điều tra" },
          { ten: "Hàn Lập", tag: "tinh-cam", quanHe: "Con rể tiềm năng theo thư mạo danh của Mặc đại phu" },
          { ten: "Yến Ca", tag: "tinh-cam", quanHe: "Đại sư huynh — thầm yêu từ nhỏ, đã tỏ tình nhiều lần bị từ chối" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 3,
      nguon: ["c0104", "c0105", "c0106", "c0107", "c0109", "c0110", "c0114"]
    },
    {
      id: "ngo-kiem-minh",
      name: "Ngô Kiếm Minh",
      cn: null,
      aliases: ["Ngô công tử", "Ngô mỗ", "Kẻ giả mạo họ Ngô"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Mặc phủ (thâm nhập giả mạo)", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Phàm nhân — võ công cao cường",
      trangThai: "song",
      blurb: "Thanh niên bạch diện khoảng hai mươi tuổi, mày kiếm mặt lạnh, vóc người thon dài. Tự xưng là quan môn đệ tử học chân truyền võ công của Mặc đại phu. Thực chất là kẻ giả mạo — mang di thư và tín vật (giả) báo tang Mặc cư nhân đã chết, đính ước với Mặc Ngọc Châu mưu đoạt Noãn dương bảo ngọc làm của hồi môn. Mặc phủ biết rõ hắn giả mạo và đang câu giờ điều tra.",
      vaiTro: "Kẻ xâm nhập Mặc phủ — mưu đoạt Noãn dương bảo ngọc",
      tinhCach: [
        { text: "Văn võ toàn tài trên bề ngoài: đọc thơ tán tỉnh, đánh bại mười sáu tình địch để lấy lòng Mặc Ngọc Châu", chuong: 106 }
      ],
      tabs: {
        diem: [
          { text: "Đánh bại liên tiếp mười sáu tình địch theo đuổi Mặc Ngọc Châu — nổi danh võ công tuyệt đỉnh ở Gia Nguyên Thành", chuong: 106 },
          { text: "Hàn Lập suy đoán: tám chín phần mười là gián điệp do môn phái đối thủ Mặc đại phu cài vào", chuong: 106 }
        ],
        kinhLich: [
          { chuong: 105, importance: "normal", tieuDe: "Báo tang Mặc cư nhân", text: "Một năm trước, mang di thư và tín vật tới Mặc phủ báo tin Mặc cư nhân đã chết. Nhờ đó được công nhận là quan môn đệ tử và đính ước với Mặc Ngọc Châu." },
          { chuong: 107, importance: "normal", tieuDe: "Hàn Lập quan sát", text: "Cùng Mặc Ngọc Châu cưỡi ngựa đi săn trở về; nói nhỏ làm nàng ửng đỏ mặt — tình cảm hai người thật sự sâu. Hàn Lập nhìn từ xa đánh giá tướng mạo hắn hơn hẳn mình." },
          { chuong: 114, importance: "normal", tieuDe: "Tra hỏi thân phận Hàn Lập — bị qua mặt", text: "Gặp Hàn Lập trong sân Mặc phủ, hỏi gắt thân phận. Hàn Lập đáp là cháu Tam phu nhân; Yến Ca (đại đồ đệ Mặc đại phu) có mặt không tra hỏi thêm — Ngô Kiếm Minh tạm thời thôi nghi ngờ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc Ngọc Châu", tag: "tinh-cam", quanHe: "Hôn phu danh nghĩa — mục tiêu để đoạt bảo ngọc" },
          { ten: "Hàn Lập", tag: "doi-dich", quanHe: "Đối thủ tiềm năng — đều nhắm vào Noãn dương bảo ngọc" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 3,
      nguon: ["c0105", "c0106", "c0107", "c0108", "c0109", "c0110", "c0114"]
    },
    {
      id: "tam-nuong",
      name: "Tam nương",
      cn: null,
      aliases: ["Tam muội", "Tam phu nhân Lưu thị"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Mặc phủ", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Không rõ — nghi có khả năng mê hoặc bất thường",
      trangThai: "song",
      blurb: "Tam phu nhân của Mặc đại phu, thân muội của môn chủ Trường Phong môn (Khúc Lăng thành). Thiếu phụ chừng 23-24 tuổi cực kỳ kiều diễm phong tình — đẹp hơn Mặc Ngọc Châu ba phần. Giọng kiều mỵ quyến rũ, ăn nói xấc xược. Tính mạnh mẽ, hơi có dã tâm theo nhận định của Mặc đại phu trong di thư. Khi Hàn Lập kháng lại sự mê hoặc của nàng, trong mắt lóe lên tia dị sắc — gợi mở thân phận hoặc năng lực bất thường.",
      vaiTro: "Tam phu nhân Mặc phủ; nhân vật bí ẩn",
      tinhCach: [
        { text: "Xấc xược, thẳng thắn: trách 'phu quân' bỏ đi mười năm khiến tỷ muội sống như góa phụ ngay khi vừa gặp", chuong: 110 },
        { text: "Hơi có dã tâm — đánh giá của Mặc đại phu trong di thư; 'cần chú ý'", chuong: 104 }
      ],
      tabs: {
        diem: [
          { text: "Nhan sắc kiều diễm hơn Mặc Ngọc Châu ba phần theo cảm nhận của Hàn Lập — đẹp tới mức hắn nghi là hồ ly tinh hoặc đã luyện mê hồn thuật", chuong: 110 },
          { text: "Khi thấy Hàn Lập kháng lại sự mê hoặc nhanh chóng, trong mắt lóe tia dị sắc — gợi thân phận lai lịch không đơn giản", chuong: 110 },
          { text: "Thân muội môn chủ Trường Phong môn ở Khúc Lăng thành — có thế lực ngoại thích đứng sau", chuong: 104 }
        ],
        kinhLich: [
          { chuong: 104, importance: "minor", text: "Nhắc đến trong di thư Mặc đại phu: tính mạnh mẽ, hơi dã tâm, thân muội môn chủ Trường Phong môn, chưa sinh con — cần chú ý." },
          { chuong: 110, importance: "normal", tieuDe: "Xuất hiện và thi triển mê hoặc", text: "Dẫn đầu các phu nhân vào phòng với giọng kiều mỵ trách chồng bỏ đi. Hàn Lập vừa nhìn thất thần đắm chìm — được khí lạnh đan điền tự vận chuyển kéo tỉnh. Nàng thấy hắn tỉnh lại nhanh, trong mắt lóe tia dị sắc." },
          { chuong: 112, importance: "minor", text: "Tham gia giải mã ám thư cùng các phu nhân bằng bột màu từ long văn giới chỉ; nắm kỹ thuật đặc biệt của nhóm phu nhân Mặc phủ." },
          { chuong: 116, importance: "minor", text: "Khi Hàn Lập tạo hỏa cầu búng vào bàn bên cạnh, nàng cười ngã cười nghiêng không tin chuyện Hàn Lập là tu tiên giả; khi bàn hóa tro, mặt cắt không còn máu, vội lùi ra sau đống tro." },
          { chuong: 117, importance: "minor", text: "Cười hì hì, liếc mắt khêu gợi Hàn Lập trong khi Nghiêm thị đang thương lượng nghiêm túc — lộ bản tính bất cần." },
          { chuong: 118, importance: "normal", tieuDe: "Dùng mị thuật mê hồn dụ Hàn Lập", text: "Cười khêu gợi, miệng phả hương hoa lan dụ Hàn Lập chấp nhận điều kiện của Nghiêm thị. Hàn Lập vận Trường Xuân công, mắt phóng hàn ý lạnh khiến nụ cười nàng tắt hẳn — mị thuật vô hiệu. Không chịu rời quyền lực Kinh Giao hội đi ẩn cư." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "gia-dinh", quanHe: "Chồng (đã chết gần hai năm)" },
          { ten: "Môn chủ Trường Phong môn", tag: "ho-hang", quanHe: "Huynh trưởng — ngoại thích đứng sau" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 3,
      nguon: ["c0104", "c0110", "c0112", "c0116", "c0117", "c0118"]
    },
    {
      id: "nhom-tu-tien-thang-tien-hoi",
      name: "Nhóm tu tiên Thăng Tiên hội (Lão Tam, Nhị ca)",
      cn: null,
      aliases: ["Người áo lam", "Lão Tam", "Người áo vàng", "Nhị ca"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thăng Tiên hội (chưa rõ môn phái)", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Tu tiên — Lão Tam: tầng 10 công pháp cơ sở (vừa luyện thành nhờ Trúc cơ đan); Nhị ca: cao hơn",
      trangThai: "song",
      blurb: "Hai tu sĩ gặp tại Hương Gia tửu lâu ở Gia Nguyên Thành. Lão Tam (áo lam, ~27-28 tuổi, mày rậm mắt to) vừa luyện thành mười tầng công pháp cơ sở nhờ Trúc cơ đan; pháp lực thâm hậu hơn Hàn Lập nhiều. Nhị ca (áo vàng, ~30 tuổi) tu vi cao hơn, chủ trương thanh tâm quả dục. Cả hai đến Lam Châu dự Thăng Tiên hội gặp 'đại ca'. Ánh mắt Lão Tam khiến Hàn Lập cảm thấy bị nhìn thấu — nhận ra và đánh giá Hàn Lập mới ở tầng 7-8.",
      vaiTro: "Tu tiên tới Lam Châu dự Thăng Tiên hội",
      tinhCach: [
        { text: "Lão Tam: ham ăn, phóng khoáng — mấy năm không ăn thức ăn thế gian nên vào tửu lâu thưởng thức; bị Nhị ca trách làm thấp tâm tính tu tiên", chuong: 106 },
        { text: "Nhị ca: nghiêm túc, chủ trương thanh tâm quả dục — trách Lão Tam ham vật chất", chuong: 106 }
      ],
      tabs: {
        diem: [
          { text: "Lão Tam nhận ra Hàn Lập là tu tiên cùng loại; đánh giá hắn 'tầng 7-8, miễn cưỡng đủ tư cách Thăng Tiên hội'", chuong: 106 },
          { text: "Cả hai đang đi gặp 'đại ca' — người đứng đầu nhóm chưa lộ diện", chuong: 106 }
        ],
        kinhLich: [
          { chuong: 106, importance: "normal", tieuDe: "Gặp tại Hương Gia tửu lâu", text: "Lão Tam ngồi cạnh Hàn Lập tại tửu lâu; ánh mắt khiến Hàn Lập hoảng sợ vì bị nhìn thấu. Hàn Lập dùng Thiên Nhãn Thuật phát hiện pháp lực Lão Tam vượt hơn mình nhiều. Ra khỏi tửu lâu, Lão Tam hội ngộ Nhị ca; hai người bàn về Thăng Tiên hội và Trúc cơ đan." }
        ],
        tuViMoc: [
          { chuong: 106, canhGioi: "Lão Tam — tầng 10 công pháp cơ sở", text: "Vừa luyện thành mười tầng nhờ Trúc cơ đan; pháp lực thâm hậu hơn Hàn Lập nhiều.", importance: "normal" }
        ],
        nhanMach: [
          { ten: "Đại ca (chưa rõ danh tính)", tag: "su-mon", quanHe: "Người đứng đầu nhóm — đang chờ gặp" },
          { ten: "Hàn Lập", tag: "bat-ngo", quanHe: "Lão Tam nhận ra là tu tiên cùng loại tại tửu lâu" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 4,
      nguon: ["c0106"]
    },
    {
      id: "yen-ca",
      name: "Yến Ca",
      cn: null,
      aliases: ["Đại đồ đệ Mặc đại phu"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Kinh Giao hội", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Phàm nhân — võ học",
      trangThai: "song",
      blurb: "Đại đồ đệ của Mặc đại phu; thương mày lợt, người cao lớn hào sảng. Thầm yêu Mặc Ngọc Châu từ nhỏ đến lớn — tỏ tình nhiều lần nhưng đều bị từ chối. Gặp Hàn Lập tại Mặc phủ; bị Hàn Lập dùng câu 'cháu Tam phu nhân' để qua mặt Ngô Kiếm Minh đang kiểm tra thân phận.",
      vaiTro: "Đại đồ đệ Mặc đại phu; thành viên cấp cao Kinh Giao hội",
      tinhCach: [
        { text: "Hào sảng, cởi mở — chào Hàn Lập thân thiện dù không quen biết, không tra hỏi gắt", chuong: 114 }
      ],
      tabs: {
        diem: [
          { text: "Đại đồ đệ Mặc đại phu; võ học học từ Mặc đại phu", chuong: 114 },
          { text: "Thầm yêu Mặc Ngọc Châu từ nhỏ, tỏ tình nhiều lần đều bị từ chối — tâm tình chưa nguôi", chuong: 114 }
        ],
        kinhLich: [
          { chuong: 114, importance: "normal", tieuDe: "Gặp Hàn Lập tại Mặc phủ", text: "Xuất hiện trong khi Hàn Lập đang ở sân Mặc phủ cùng Ngô Kiếm Minh. Yến Ca chào Hàn Lập; Ngô Kiếm Minh hỏi gắt thân phận Hàn Lập — Hàn Lập đáp 'cháu Tam phu nhân'. Yến Ca không tra hỏi thêm, tình cờ giúp Hàn Lập qua mặt Ngô Kiếm Minh." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "su-mon", quanHe: "Sư phụ" },
          { ten: "Mặc Ngọc Châu", tag: "tinh-cam", quanHe: "Người yêu đơn phương — tỏ tình nhiều lần bị từ chối" },
          { ten: "Hàn Lập", tag: "bat-ngo", quanHe: "Đệ sư huynh (đệ đồ đệ của cùng một thầy)" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 4,
      nguon: ["c0104", "c0114"]
    },
    {
      id: "vuong-thi-ngu-phu-nhan",
      name: "Vương thị",
      cn: null,
      aliases: ["Ngũ phu nhân", "Ngũ nương"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Mặc phủ (Ám Đà)", trangThai: "lanh-dao" }
      ],
      canhGioiCaoNhat: "Phàm nhân — nội công uyên thâm",
      trangThai: "song",
      blurb: "Ngũ phu nhân của Mặc đại phu; độc chiếm Ám Đà — lực lượng bí mật thu bạc các trấn — theo di nguyện Mặc đại phu. Thiếu phụ lạnh như băng, mặt như núi tuyết. Nội công uyên thâm — được Nghiêm thị cử ra ngoài tuần tra vành đai khi Hàn Lập lần đầu tới Mặc phủ (c111). Người duy nhất có năng lực phản đối Nghiêm thị trong nội bộ, nhưng tuyên bố không ý kiến.",
      vaiTro: "Ngũ phu nhân Mặc phủ; lãnh đạo Ám Đà (lực lượng bí mật Kinh Giao hội)",
      tinhCach: [
        { text: "Lạnh lùng, ít nói — mặt không lộ cảm xúc, nhưng vặn vẹo ngón tay khi nghe Hàn Lập kể lại cái chết của Mặc đại phu", chuong: 115 },
        { text: "Thực dụng — tuyên bố để Tứ tỷ làm chủ khi Nghiêm thị cần thống nhất lập trường trước khi đàm phán", chuong: 118 }
      ],
      tabs: {
        diem: [
          { text: "Độc chiếm Ám Đà theo di nguyện Mặc đại phu — là nguồn thu nhập bí mật của Kinh Giao hội từ các trấn Trường Bình, Lạc Cốc, Lam Nguyệt, Ngũ Lĩnh; thu nhập đang sụt giảm", chuong: 108 },
          { text: "Nội công uyên thâm — Nghiêm thị cử ra tuần tra vành đai khi có khách lạ (Hàn Lập) trong Mặc phủ", chuong: 111 },
          { text: "Người duy nhất đủ năng lực phản đối Nghiêm thị trong đám phu nhân — nhưng không dùng tới quyền đó", chuong: 118 }
        ],
        kinhLich: [
          { chuong: 111, importance: "normal", tieuDe: "Tuần tra vành đai theo lệnh Nghiêm thị", text: "Nghiêm thị cử Vương thị ra ngoài tuần tra vành đai khi Hàn Lập có mặt trong Mặc phủ — xác nhận bà được giao nhiệm vụ nội công giám sát." },
          { chuong: 115, importance: "normal", tieuDe: "Hỏi Hàn Lập về cái chết Mặc đại phu", text: "Yêu cầu Hàn Lập thuật lại chi tiết cái chết của Mặc đại phu. Mặt không đổi nhưng vặn vẹo ngón tay — bộc lộ tâm trạng bất thường." },
          { chuong: 118, importance: "normal", tieuDe: "Không ý kiến khi Nghiêm thị cần thống nhất", text: "Nghiêm thị quay sang dò ý bà — người duy nhất có thể phản đối. Bà tuyên bố để Tứ tỷ làm chủ, không ý kiến — giúp Nghiêm thị yên tâm tiến hành đàm phán." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "gia-dinh", quanHe: "Chồng (đã chết)" },
          { ten: "Nghiêm thị", tag: "gia-dinh", quanHe: "Tứ tỷ — người nắm quyền Kinh Giao hội; Vương thị dưới quyền về danh nghĩa nhưng kiểm soát Ám Đà độc lập" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 3,
      nguon: ["c0104", "c0108", "c0111", "c0115", "c0116", "c0117", "c0118"]
    },
    {
      id: "ly-thi-nhi-phu-nhan",
      name: "Lý thị (Nhị phu nhân Mặc phủ)",
      cn: null,
      aliases: ["Nhị phu nhân", "Nhị tỷ"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Mặc phủ", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      blurb: "Nhị phu nhân của Mặc đại phu; xuất thân con gái gia đình quyền quý, hiểu lý lẽ. Người đầu tiên nhận ra Hàn Lập là tu tiên giả khi hắn tạo hỏa cầu, hô lên 'Tu tiên giả!' với vẻ sợ hãi. Tỏ ra xấu hổ trước màn ngụy biện của Nghiêm thị. Phu nhân duy nhất hơi máy động trước đề nghị rời Lam Châu ẩn cư bình an.",
      vaiTro: "Nhị phu nhân Mặc phủ",
      tinhCach: [
        { text: "Hiểu lý lẽ, tự trọng — bứt rứt cúi đầu xấu hổ khi Nghiêm thị nói điều không phải", chuong: 117 },
        { text: "Duy nhất lộ chút lòng yên phận — hơi máy động khi nghe Hàn Lập đề nghị rời thành ẩn cư", chuong: 118 }
      ],
      tabs: {
        diem: [
          { text: "Xuất thân gia đình quyền quý — được giáo dục cẩn thận, có ý thức lễ nghĩa hơn các tỷ muội", chuong: 117 },
          { text: "Biết sự tồn tại của tu tiên giả và kiêng kỵ thân phận tu tiên giả — người đầu tiên la lên 'Tu tiên giả!' khi Hàn Lập tạo hỏa cầu", chuong: 116 }
        ],
        kinhLich: [
          { chuong: 115, importance: "normal", tieuDe: "Lên tiếng cáo buộc Hàn Lập", text: "Trong cuộc gặp mặt mặc áo tang trắng, Nhị phu nhân Lý thị là người lên tiếng cáo buộc Hàn Lập trước mặt các phu nhân." },
          { chuong: 116, importance: "normal", tieuDe: "Nhận ra tu tiên giả — sợ hãi", text: "Khi Hàn Lập tạo hỏa cầu, buột miệng kêu 'Tu tiên giả!' với vẻ sợ hãi; bị Hàn Lập truy hỏi tại sao biết, được Nghiêm thị ngăn lại không cho trả lời." },
          { chuong: 117, importance: "normal", tieuDe: "Bứt rứt, xấu hổ", text: "Khi Nghiêm thị dùng lý lẽ ngụy biện, Lý thị bứt rứt cúi đầu xấu hổ — phản ứng cho thấy ý thức lễ nghĩa và sự tự trọng." },
          { chuong: 118, importance: "minor", text: "Phu nhân duy nhất hơi máy động tâm ý khi Hàn Lập đề nghị toàn Mặc phủ rời Lam Châu ẩn cư bình an." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "gia-dinh", quanHe: "Chồng (đã chết)" },
          { ten: "Nghiêm thị", tag: "gia-dinh", quanHe: "Tứ tỷ — người nắm quyền thực tế Mặc phủ" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 4,
      nguon: ["c0104", "c0115", "c0116", "c0117", "c0118"]
    },
    {
      id: "tram-trong-son",
      name: "Trầm Trọng Sơn",
      cn: null,
      aliases: ["Viên tí", "Bang chủ Tứ bình bang"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Tứ bình bang", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Phàm nhân — cao thủ võ lâm",
      trangThai: "tu-vong",
      blurb: "Bang chủ Tứ bình bang khu Tây thành Gia Nguyên Thành, ngoại hiệu 'Viên tí'. Có tam đại hộ pháp: 'Phi đao' Trầm Tam, 'Cuồng quyền' Tiễn Tiến, 'Độc tú tài' Phạm Tự. Hay lui tới Tiêu Tương Viện gặp hoa khôi Kim Chi — thói quen bị Hàn Lập lợi dụng. Chết vì Tiêu Hồn Tán trộn trong rượu tại c122.",
      vaiTro: "Cựu bang chủ Tứ bình bang (tử vong c122)",
      tinhCach: [
        { text: "Sợ thần tiên — nghe tin thủ hạ tình cờ gặp tu tiên giả là lập tức ban lệnh cấm truyền", chuong: 119 }
      ],
      tabs: {
        diem: [
          { text: "Ngoại hiệu 'Viên tí'; dưới tay ba đại hộ pháp: 'Phi đao' Trầm Tam, 'Cuồng quyền' Tiễn Tiến, 'Độc tú tài' Phạm Tự", chuong: 121 },
          { text: "Thường xuyên lui tới Tiêu Tương Viện để gặp hoa khôi Kim Chi — điểm yếu chết người", chuong: 120 }
        ],
        kinhLich: [
          { chuong: 119, importance: "normal", tieuDe: "Biết tin Thần tiên đại hội — cấm truyền", text: "Thủ hạ báo lên hắn chuyện tình cờ nghe được đôi nam nữ tu tiên giả bàn về Thần tiên đại hội. Hắn sợ thần tiên trách tội, lập tức hạ lệnh cấm truyền — chỉ cấp cao Tứ bình bang biết." },
          { chuong: 120, importance: "normal", tieuDe: "Bị Hàn Lập nhắm tới", text: "Hàn Lập lên kế hoạch dùng Tôn nhị cẩu thay thế hắn làm bang chủ bù nhìn, kiểm soát Tứ bình bang từ phía sau. Điểm yếu: thường xuyên tới Tiêu Tương Viện gặp Tiểu Kim Chi." },
          { chuong: 121, importance: "normal", tieuDe: "Hàn Lập đột nhập Tiêu Tương Viện", text: "Đang đàm hội cùng tam đại hộ pháp tại phòng riêng Tiêu Tương Viện khi Hàn Lập cải trang thành tiểu nhị mang rượu vào." },
          { chuong: 122, importance: "major", tieuDe: "Tử vong vì Tiêu Hồn Tán", text: "Uống rượu bị Hàn Lập trộn Tiêu Hồn Tán, chết cùng tam đại hộ pháp và các kỹ nữ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Tôn nhị cẩu", tag: "noi-bo", quanHe: "Thủ hạ cũ — người thay thế làm bang chủ sau khi chết" },
          { ten: "Tiểu Kim Chi", tag: "tinh-cam", quanHe: "Hoa khôi Tiêu Tương Viện — hay lui tới gặp" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 4,
      nguon: ["c0104", "c0119", "c0120", "c0121", "c0122"]
    },
    {
      id: "tieu-kim-chi",
      name: "Tiểu Kim Chi",
      cn: null,
      aliases: ["Hoa khôi Tiêu Tương Viện"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Tiêu Tương Viện", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      blurb: "Hoa khôi của Tiêu Tương Viện (kỹ viện Tây thành Gia Nguyên Thành). Bang chủ Tứ bình bang Trầm Trọng Sơn thường xuyên lui tới gặp nàng — thói quen này được Hàn Lập dùng làm điểm xuất phát trong kế hoạch thâu tóm Tứ bình bang.",
      vaiTro: "Hoa khôi Tiêu Tương Viện; điểm liên hệ trong kế hoạch của Hàn Lập",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Hoa khôi Tiêu Tương Viện; bang chủ Trầm Trọng Sơn thường xuyên đến gặp", chuong: 120 }
        ],
        kinhLich: [
          { chuong: 120, importance: "minor", text: "Được nhắc tới là hoa khôi Tiêu Tương Viện mà bang chủ Trầm Trọng Sơn hay lui tới — Hàn Lập dùng thông tin này trong kế hoạch thâu tóm Tứ bình bang." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Trầm Trọng Sơn", tag: "khach", quanHe: "Khách thường xuyên — bang chủ Tứ bình bang" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0120"]
    },
    {
      id: "mac-phuong-vu",
      name: "Mặc Phượng Vũ",
      cn: null,
      aliases: ["Nhị tiểu thư Mặc phủ"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Mặc phủ", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      blurb: "Nhị tiểu thư của Mặc phủ, nghĩa nữ của Mặc đại phu. Khoảng 16-17 tuổi, mặc áo vàng. Giọng nói nhẹ nhàng; đặc biệt yêu thích y đạo, tìm đến Hàn Lập để xin lại di cảo y đạo của cha nuôi. Khác với đại tiểu thư Mặc Ngọc Châu (đã đính hôn Ngô Kiếm Minh).",
      vaiTro: "Nghĩa nữ của Mặc đại phu; học y đạo",
      tinhCach: [
        { text: "Giọng nhẹ nhàng, khiêm tốn; chủ động hỏi thăm Hàn Lập về di cảo y đạo của cha", chuong: 124 }
      ],
      tabs: {
        diem: [
          { text: "Nghĩa nữ của Mặc đại phu; khoảng 16-17 tuổi, mặc áo vàng", chuong: 122 },
          { text: "Đặc biệt yêu thích y đạo — nhận di cảo y đạo của Mặc đại phu từ Hàn Lập", chuong: 124 }
        ],
        kinhLich: [
          { chuong: 122, importance: "minor", text: "Xuất hiện cùng Mặc Ngọc Châu và Mặc Thải Hoàn khi Hàn Lập đến Mặc phủ — được gọi là 'Mặc thị tam kiều'." },
          { chuong: 124, importance: "normal", tieuDe: "Nhận di cảo y đạo từ Hàn Lập", text: "Đuổi theo Hàn Lập khi hắn rời Mặc phủ; giọng nhẹ nhàng hỏi về di cảo y đạo của Mặc đại phu. Hàn Lập trao lại di cảo cho nàng." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "gia-dinh", quanHe: "Cha nuôi (nghĩa phụ)" },
          { ten: "Nghiêm thị", tag: "gia-dinh", quanHe: "Nghĩa mẫu — người thay Mặc đại phu nuốt thuốc con tin để bảo vệ con" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0122", "c0123", "c0124"]
    },
    {
      id: "tich-thiet-nguu",
      name: "Tịch Thiết Ngưu",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Tứ bình bang", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Phàm nhân — võ lâm",
      trangThai: "song",
      blurb: "Tráng hán khoảng 30 tuổi, mặt có nhiều thịt. Nhân chứng nghe lén đôi tu tiên giả bàn về Thần tiên đại hội tại Lam Châu — thông tin dẫn đường cho Hàn Lập tìm ra Thái Nam cốc. Được Hàn Lập phong làm phó bang chủ Tứ bình bang tại c125.",
      vaiTro: "Phó bang chủ Tứ bình bang; nhân chứng về Thái Nam cốc",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Tráng hán ~30 tuổi, mặt có nhiều thịt; biết Quy tức công", chuong: 124 },
          { text: "Tình cờ nghe lén đôi tu tiên giả nhắc đến Thái Nam cốc và Thăng Tiên đại hội", chuong: 125 }
        ],
        kinhLich: [
          { chuong: 124, importance: "normal", tieuDe: "Chờ Hàn Lập tại khách điếm cùng Tôn nhị cẩu", text: "Đang chờ cùng Tôn nhị cẩu khi Hàn Lập về khách điếm sau khi rời Mặc phủ. Là nhân chứng nghe lén đôi tu tiên giả." },
          { chuong: 125, importance: "major", tieuDe: "Khai báo về Thái Nam cốc — được phong phó bang chủ", text: "Thuật lại chi tiết: nữ tu tiên giả nhắc đến 'Thái Nam cốc' trước khi nói đến 'đại hội thần tiên'. Thông tin này giúp Hàn Lập suy ra địa điểm chính xác. Được Hàn Lập phong làm phó bang chủ Tứ bình bang." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Tôn nhị cẩu", tag: "noi-bo", quanHe: "Bang chủ Tứ bình bang — cấp trên" },
          { ten: "Hàn Lập", tag: "chu", quanHe: "Người phong chức; chủ mưu từ xa" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0124", "c0125"]
    },
    {
      id: "van-tieu-son",
      name: "Vạn Tiểu Sơn",
      cn: null,
      aliases: ["Tiểu Sơn"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Vạn gia", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ (tu tiên giả chính thức)",
      trangThai: "song",
      blurb: "Thiếu niên tu tiên khoảng 15-16 tuổi, mặc bạch y, người của Vạn gia (Khô Nhai sơn) — gia tộc có tổ tiên là tán tu từng vào Cự Kiếm Môn. Tính hồn nhiên, hay trào phúng, tự hào về gia tộc. Chủ động kết giao và chỉ dẫn Hàn Lập khi cùng đường tới Thái Nam cốc. Nguồn thông tin tu tiên giới quý giá cho Hàn Lập trong c127-c128.",
      vaiTro: "Thành viên Vạn gia; người dẫn đường vào Thái Nam tiểu hội",
      tinhCach: [
        { text: "Hồn nhiên, nhiệt tình — vui mừng gặp tán tu, không kỳ thị", chuong: 128 },
        { text: "Thích khoe khoang, hứng chí kể hết kiến thức tu tiên khi được lắng nghe chăm chú", chuong: 127 }
      ],
      tabs: {
        diem: [
          { text: "Bạch y thiếu niên ~15-16 tuổi; người Vạn gia (Khô Nhai sơn)", chuong: 126 },
          { text: "Tổ tiên Vạn gia là tán tu gia nhập Cự Kiếm Môn → tộc quy không kỳ thị tán tu", chuong: 128 }
        ],
        kinhLich: [
          { chuong: 126, importance: "normal", tieuDe: "Gặp Hàn Lập tại Thái Nam sơn", text: "Hàn Lập nhận ra là tu tiên giả qua Thiên Nhãn Thuật. Đang tìm đường vào Thái Nam cốc cùng hướng Hàn Lập." },
          { chuong: 127, importance: "normal", tieuDe: "Giảng giải hệ thống tu tiên cho Hàn Lập", text: "Trên đường tới cốc, hứng chí kể hết: hệ thống cảnh giới ba giai đoạn, thọ mệnh, bốn loại linh căn, bảy môn phái Việt quốc." },
          { chuong: 128, importance: "normal", tieuDe: "Dùng Trương thông âm phù — dẫn Hàn Lập vào Thái Nam tiểu hội", text: "Xưng tên. Dùng Trương thông âm phù báo hiệu vào cốc; cùng Hàn Lập bước qua sương mù trận pháp vào Thái Nam tiểu hội." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hàn Lập", tag: "ban-be", quanHe: "Người bạn tán tu mới gặp — cùng đường vào Thái Nam cốc" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 4,
      nguon: ["c0126", "c0127", "c0128"]
    },
    {
      id: "thanh-nhan-chan-nhan",
      name: "Thanh Nhan chân nhân",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thái Nam cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Tu tiên giả — cấp độ chưa xác định",
      trangThai: "song",
      blurb: "Lão trưởng bối cai quản Thái Nam tiểu hội. Cao gầy, vai rộng, mặc nho sam xanh, mặt xanh lè. Bạn chí giao với phụ thân Vạn Tiểu Sơn. Nhận ra Hàn Lập là mộc-thuộc-tính tán tu Luyện Khí tầng thứ tám và nghi ngờ Hàn Lập có tâm thuật bất chánh.",
      vaiTro: "Lão trưởng bối quản lý Thái Nam cốc / tiểu hội",
      tinhCach: [
        { text: "Nhãn lực tinh tường — nhận ra tu vi và thuộc tính linh căn của Hàn Lập chỉ qua một lần gặp", chuong: 129 },
        { text: "Thận trọng, đa nghi: nghi ngờ Hàn Lập tâm thuật bất chánh dù Vạn Tiểu Sơn giới thiệu", chuong: 129 }
      ],
      tabs: {
        diem: [
          { text: "Cao gầy, vai rộng, mặc nho sam xanh, mặt xanh lè; bạn chí giao phụ thân Vạn Tiểu Sơn", chuong: 129 },
          { text: "Nhận ra Hàn Lập: mộc-thuộc-tính tán tu, Luyện Khí tầng thứ tám", chuong: 129 }
        ],
        kinhLich: [
          { chuong: 129, importance: "normal", tieuDe: "Gặp Hàn Lập — nghi ngờ tâm thuật", text: "Gặp Hàn Lập trong Thái Nam cốc; xác nhận qua nhãn lực hắn là mộc-thuộc-tính tán tu Luyện Khí tầng thứ tám. Tỏ vẻ nghi ngờ tâm thuật bất chánh. Hàn Lập khéo léo cáo từ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Vạn Tiểu Sơn", tag: "ban-be", quanHe: "Chí giao với phụ thân — biết rõ gia tộc Vạn gia" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0129"]
    },
    {
      id: "tung-van-dao-si",
      name: "Tùng Văn đạo sĩ",
      cn: null,
      aliases: ["Quải Đan đạo sĩ"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thanh Ngưu quan", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ tầng 7-8 (Trường Xuân công)",
      trangThai: "song",
      blurb: "Đạo sĩ khoảng 27-28 tuổi, tay cầm phất trần, Ngọa Ngưu sơn Thanh Ngưu quan. Ngoại hiệu 'Quải Đan đạo sĩ'. Dẫn đầu một nhóm tán tu tại Thái Nam tiểu hội. Bề ngoài chính khí lẫm liệt, thực chất chủ mưu tập sát Hàn Lập sau tiểu hội — lén rắc phấn định vị lên áo Hàn Lập khi vỗ vai từ biệt rồi bắn hỏa quang ra hiệu cho đồng bọn phục kích.",
      vaiTro: "Trưởng nhóm tán tu tại Thái Nam tiểu hội; kẻ chủ mưu tập sát Hàn Lập",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "27-28 tuổi, tay phất trần; Ngọa Ngưu sơn Thanh Ngưu quan; Quải Đan đạo sĩ", chuong: 130 },
          { text: "Nhóm của Tùng Văn gồm: Hắc Mộc, Hắc Kim (song sinh, Thương Lang lĩnh), Hồng Liên tán nhân (nữ, Phi Liên động), Khổ Tang đại sư (Bồ Lộ sơn), Hồ Bình Cô và Hùng Đại Lực (vợ chồng, Thiên thủy trại)", chuong: 130 }
        ],
        kinhLich: [
          { chuong: 130, importance: "normal", tieuDe: "Mời Hàn Lập vào nhóm — bị từ chối", text: "Cùng nhóm tán tu tiếp cận Hàn Lập tại Thái Nam tiểu hội. Trao đạo phù chìa khóa tiểu lâu. Hàn Lập từ chối vào nhóm, tự mình dạo chợ một mình." },
          { chuong: 132, importance: "normal", tieuDe: "Đợi Hàn Lập — giới thiệu Ngô Cửu Chỉ và Hoàng Hiếu Thiên", text: "Chờ Hàn Lập ở lầu hai tiểu lâu. Niềm nở mời ngồi và giới thiệu hai người mới gia nhập nhóm: Ngô Cửu Chỉ (Vân Môn giản) và Hoàng Hiếu Thiên (Thạch Thác cốc)." },
          { chuong: 133, importance: "normal", tieuDe: "Hòa giải nhóm, cảnh báo mất tích", text: "Đứng ra hòa giải mâu thuẫn giữa Ngô Cửu Chỉ (trộm đồ đùa) và Hồ Bình Cô; cảnh báo nguy cơ tán tu mất tích sau các kỳ Thái Nam hội, đề nghị cả nhóm cùng rời đi sau Thăng tiên đại hội." },
          { chuong: 134, importance: "normal", tieuDe: "Chủ trì buổi giảng về Thăng tiên đại hội", text: "Xoa dịu Hồ Bình Cô để Hắc Mộc kể về Trúc cơ đan và Thăng tiên đại hội; giải thích thêm về công pháp kỳ lạ của Hoàng Hiếu Thiên; nhãn quang độc đáo (Hàn Lập cảm giác đạo sĩ đã nhìn ra thân phận tân thủ của mình)." },
          { chuong: 135, importance: "normal", tieuDe: "Giải thích bí ẩn kỳ tài mười một tầng", text: "Giải thích lý do hai kỳ tài Luyện khí tầng mười một (người gia tộc tu tiên, tiềm phục đặc biệt bồi dưỡng) vẫn phải lên lôi đài Thăng tiên đại hội; chua chát thừa nhận tán tu thua kém gia tộc tu tiên về điều kiện; cuối chương trấn an và chuyển đề tài." },
          { chuong: 136, importance: "normal", tieuDe: "Rủ Hàn Lập cùng đi — bị khéo léo từ chối", text: "Rủ Hàn Lập cùng nhóm rời đi sau đại hội; khuyên giải Ngô Cửu Chỉ khi thiếu niên bất mãn trước lời từ chối của Hàn Lập. Hàn Lập viện cớ chờ giao dịch xong mới quyết." },
          { chuong: 142, importance: "normal", tieuDe: "Kẻ chủ mưu tập sát Hàn Lập", text: "Sau khi tiểu hội kết thúc, giả vờ từ biệt Hàn Lập, nhân lúc vỗ vai lén rắc phấn không màu không sắc lên áo hắn để định vị. Lùi lại sau khi nhóm ra khỏi cốc, lộ vẻ hung ác, bắn hỏa quang vào bụi cây ra hiệu cho đồng bọn phục kích. Âm mưu và bản chất nguy hiểm phơi bày sau lớp chính khí lẫm liệt bề ngoài." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0130", "c0132", "c0133", "c0134", "c0135", "c0136", "c0142"]
    },
    {
      id: "ngo-cuu-chi",
      name: "Ngô Cửu Chỉ",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Vân Môn giản", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ — tầng 8 (đại viên mãn)",
      trangThai: "song",
      blurb: "Thiếu niên khoảng 16-17 tuổi, tu tiên của Vân Môn giản. Biệt tài: thâu kỹ (kỹ năng ăn trộm giang hồ) tinh xảo mà hầu hết người tu tiên không phát giác được. Tính cách hào hứng, thích kết bằng hữu, bất mãn khi bị cự tuyệt nhưng tự nhận thiếu sót.",
      vaiTro: "Thành viên nhóm tán tu Tùng Văn tại Thái Nam hội",
      tinhCach: [
        { text: "Nhiệt tình, hay làm thân — tiếp cận Hàn Lập bằng cách muốn kết huynh đệ cắt máu ăn thề", chuong: 133 },
        { text: "Tư chất hơn người — đã luyện công pháp tầng tám đại viên mãn, được Tùng Văn khen là kỳ tài trong tán tu", chuong: 133 },
        { text: "Thích đùa nhưng biết điểm dừng — cam kết không dùng thâu kỹ với đồng đạo sau khi bị bắt quả tang", chuong: 133 }
      ],
      tabs: {
        diem: [
          { text: "16-17 tuổi; Vân Môn giản; thân thủ thâu kỹ tinh xảo — thành thục đến mức người thường khó phát giác", chuong: 132 },
          { text: "Công pháp tầng tám đại viên mãn; được Tùng Văn khen là kỳ tài tán tu", chuong: 133 },
          { text: "Có được thâu kỹ trên đường tới Thái Nam cốc — lén thử trên người đồng đạo rồi trả lại, không có ác ý", chuong: 133 }
        ],
        kinhLich: [
          { chuong: 132, importance: "normal", tieuDe: "Gia nhập nhóm Tùng Văn — khiến đạo sĩ đau đầu", text: "Cùng Hoàng Hiếu Thiên xuất hiện trong phòng họp nhóm Tùng Văn tại tiểu lâu, là hai người mới khiến cả Tùng Văn đạo sĩ đau đầu." },
          { chuong: 133, importance: "normal", tieuDe: "Bị Hàn Lập bắt quả tang dùng thâu kỹ", text: "Tiếp cận Hàn Lập bằng cách muốn kết nghĩa huynh đệ, thực chất để thử thâu kỹ; bị Hàn Lập chộp cổ tay bắt quả tang. Sau khi Tùng Văn hòa giải, thành khẩn giải thích không có ác ý và cam kết không dùng thâu kỹ với đồng đạo trong đại hội nữa." },
          { chuong: 134, importance: "normal", tieuDe: "Hỏi về Thăng tiên đại hội", text: "Chủ động hỏi về Thăng tiên đại hội, thúc đẩy buổi giảng giải; hào hứng muốn lên lôi đài gia nhập đại môn phái sau khi nghe Hắc Mộc kể." },
          { chuong: 136, importance: "normal", tieuDe: "Bất mãn khi Hàn Lập không chịu đi cùng", text: "Bực bội khi Hàn Lập từ chối đi cùng nhóm, nêu lý do đoàn kết bảo vệ nhau; tự thấy hơi ép người nên bỏ qua sau khi Tùng Văn khuyên giải." },
          { chuong: 138, importance: "minor", tieuDe: "Chứng kiến Hàn Lập đột phá tầng chín", text: "Cùng nhóm trợn mắt há hốc mồm khi Hàn Lập đột phá Trường Xuân công tầng chín." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Tùng Văn đạo sĩ", tag: "dong-doi", quanHe: "Trưởng nhóm tán tu Thái Nam hội" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0132", "c0133", "c0134", "c0136", "c0138"]
    },
    {
      id: "hoang-hieu-thien",
      name: "Hoàng Hiếu Thiên",
      cn: null,
      aliases: ["Hoàng huynh"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thạch Thác cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ (pháp lực mạnh nhất nhóm tán tu — dường như hơn Tùng Văn đạo sĩ)",
      trangThai: "song",
      blurb: "Người mập mạp da trắng nõn khoảng 21-22 tuổi, tu tiên Thạch Thác cốc. Pháp lực cường đại nhất trong nhóm tán tu Tùng Văn, thậm chí mạnh hơn cả Tùng Văn đạo sĩ. Tính lạnh lùng, không khách khí, không ai dám chọc vì sợ thực lực. Công pháp tu luyện đặc biệt — cần ngủ.",
      vaiTro: "Thành viên nhóm tán tu Tùng Văn tại Thái Nam hội",
      tinhCach: [
        { text: "Lạnh lùng, không khách khí — thẳng thắn nói đã biết chuyện Thăng tiên hội rồi, về ngủ, không đợi ai", chuong: 134 },
        { text: "Thái độ âm trầm khi nghe cảnh báo tán tu mất tích", chuong: 133 }
      ],
      tabs: {
        diem: [
          { text: "21-22 tuổi, mập mạp da trắng nõn; Thạch Thác cốc", chuong: 132 },
          { text: "Pháp lực cường đại nhất nhóm — mạnh hơn cả Tùng Văn đạo sĩ; không ai dám để ý vì sợ thực lực", chuong: 133 },
          { text: "Công pháp tu luyện kỳ lạ cần ngủ — Tùng Văn giải thích hộ, không phải cố ý thất lễ", chuong: 134 }
        ],
        kinhLich: [
          { chuong: 132, importance: "normal", tieuDe: "Gia nhập nhóm Tùng Văn", text: "Cùng Ngô Cửu Chỉ gia nhập nhóm tán tu Tùng Văn tại tiểu lâu; sự xuất hiện của hai người khiến Tùng Văn đạo sĩ đau đầu." },
          { chuong: 133, importance: "normal", tieuDe: "Chứng kiến sự cố thâu kỹ", text: "Có mặt trong phòng họp; ánh mắt âm trầm khi nghe Tùng Văn cảnh báo về tán tu mất tích sau Thái Nam hội." },
          { chuong: 134, importance: "normal", tieuDe: "Bỏ về ngủ giữa chừng", text: "Lạnh lùng tuyên bố đã rõ chuyện Thăng tiên đại hội, rời phòng về ngủ mà không đợi ai. Tùng Văn giải thích hộ: công pháp hắn kỳ lạ cần ngủ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Tùng Văn đạo sĩ", tag: "dong-doi", quanHe: "Trưởng nhóm tán tu, thường giải thích hộ tính cách lạnh lùng của Hoàng Hiếu Thiên" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0132", "c0133", "c0134"]
    },
    {
      id: "hac-moc",
      name: "Hắc Mộc",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thương Lang lĩnh", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ",
      trangThai: "song",
      blurb: "Một trong hai huynh đệ song sinh Hắc Mộc–Hắc Kim từ Thương Lang lĩnh. Am hiểu tu tiên giới, là người giảng giải chi tiết về Trúc cơ đan và cơ chế Thăng tiên đại hội cho cả nhóm.",
      vaiTro: "Thành viên nhóm tán tu Tùng Văn tại Thái Nam hội",
      tinhCach: [
        { text: "Nhiệt tình giúp đỡ — đón Hàn Lập ở đầu cầu thang và dẫn vào phòng", chuong: 132 },
        { text: "Am hiểu tu tiên giới, biết rõ cơ chế Thăng tiên đại hội", chuong: 134 }
      ],
      tabs: {
        diem: [
          { text: "Huynh đệ song sinh với Hắc Kim; xuất thân Thương Lang lĩnh", chuong: 130 },
          { text: "Giảng giải toàn bộ nguồn gốc, cơ chế Trúc cơ đan và Thăng tiên đại hội cho nhóm", chuong: 134 }
        ],
        kinhLich: [
          { chuong: 132, importance: "normal", tieuDe: "Đón Hàn Lập — dẫn vào phòng", text: "Cùng Hắc Kim đứng ở đầu cầu thang lầu hai tiểu lâu, đón và dẫn Hàn Lập dọc hành lang vào phòng họp nhóm." },
          { chuong: 133, importance: "normal", tieuDe: "Chứng kiến sự cố thâu kỹ, biến sắc nghe tin mất tích", text: "Có mặt trong phòng; biến sắc và đồng ý cùng nhau rời đi sau hội khi nghe Tùng Văn cảnh báo tán tu bị mất tích một cách khó hiểu." },
          { chuong: 134, importance: "normal", tieuDe: "Giảng giải về Thăng tiên đại hội", text: "Người giảng giải cho cả nhóm về nguồn gốc Trúc cơ đan, cơ chế Thăng tiên đại hội, lý do tán tu khó đoạt lôi đài." },
          { chuong: 135, importance: "normal", tieuDe: "Tiếp tục bàn luận về lôi đài", text: "Lẩm bẩm Thăng tiên đại hội ngày càng kịch liệt; uể oải nêu tỷ lệ trúc cơ thất bại của tán tu." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hắc Kim", tag: "gia-dinh", quanHe: "Huynh đệ song sinh" },
          { ten: "Tùng Văn đạo sĩ", tag: "dong-doi", quanHe: "Trưởng nhóm tán tu Thái Nam hội" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0130", "c0132", "c0133", "c0134", "c0135"]
    },
    {
      id: "hac-kim",
      name: "Hắc Kim",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thương Lang lĩnh", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ",
      trangThai: "song",
      blurb: "Một trong hai huynh đệ song sinh Hắc Mộc–Hắc Kim từ Thương Lang lĩnh. Ít nói hơn huynh; quan sát sắc bén — đột nhiên phát biểu rằng người pháp lực yếu hơn vẫn có thể thắng nếu có pháp phù/pháp khí lợi hại.",
      vaiTro: "Thành viên nhóm tán tu Tùng Văn tại Thái Nam hội",
      tinhCach: [
        { text: "Ít nói nhưng nhận xét sắc bén — từ đầu im lặng rồi bất ngờ phát biểu chính xác về chiến thuật pháp phù trong lôi đài", chuong: 135 }
      ],
      tabs: {
        diem: [
          { text: "Huynh đệ song sinh với Hắc Mộc; xuất thân Thương Lang lĩnh", chuong: 130 },
          { text: "Từ đầu vào phòng im lặng; bất ngờ lên tiếng: pháp lực cao chưa chắc thắng nếu địch có pháp phù/pháp khí lợi hại", chuong: 135 }
        ],
        kinhLich: [
          { chuong: 132, importance: "normal", tieuDe: "Đón Hàn Lập — dẫn vào phòng", text: "Cùng Hắc Mộc đứng ở đầu cầu thang lầu hai tiểu lâu, đón và dẫn Hàn Lập dọc hành lang vào phòng họp nhóm." },
          { chuong: 135, importance: "normal", tieuDe: "Phát biểu về chiến thuật lôi đài", text: "Người duy nhất im lặng từ đầu phòng, đột nhiên lên tiếng: người pháp lực yếu hơn nhưng có pháp phù uy lực lớn hoặc pháp khí cực lợi hại vẫn có thể hạ kẻ mạnh hơn — nhận định được Tùng Văn đồng tình." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hắc Mộc", tag: "gia-dinh", quanHe: "Huynh đệ song sinh" },
          { ten: "Tùng Văn đạo sĩ", tag: "dong-doi", quanHe: "Trưởng nhóm tán tu Thái Nam hội" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0130", "c0132", "c0135"]
    },
    {
      id: "hong-lien-tan-nhan",
      name: "Hồng Liên tán nhân",
      cn: null,
      aliases: [],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Phi Liên động", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ",
      trangThai: "song",
      blurb: "Nữ tán tu từ Phi Liên động. Vốn trầm mặc ít nói trong nhóm Tùng Văn, nhưng đôi khi nêu nghi vấn sắc sảo. Dứt khoát đồng ý tiếp tục đi cùng nhóm sau Thái Nam hội.",
      vaiTro: "Thành viên nhóm tán tu Tùng Văn tại Thái Nam hội",
      tinhCach: [
        { text: "Trầm mặc ít nói, nhưng lên tiếng hỏi đúng điểm mấu chốt khi không phục", chuong: 135 },
        { text: "Dứt khoát — đồng ý đi cùng nhóm không chần chừ", chuong: 136 }
      ],
      tabs: {
        diem: [
          { text: "Nữ tán tu, Phi Liên động; ít nói nhất trong nhóm Tùng Văn", chuong: 130 }
        ],
        kinhLich: [
          { chuong: 133, importance: "normal", tieuDe: "Vẻ mặt mờ mịt nghe tin tán tu mất tích", text: "Khi Tùng Văn cảnh báo về tán tu mất tích sau Thái Nam hội, Hồng Liên tán nhân lộ vẻ mặt mờ mịt." },
          { chuong: 135, importance: "normal", tieuDe: "Hỏi về kỳ tài mười một tầng", text: "Đặt câu hỏi sắc sảo: chẳng lẽ kỳ tài công pháp mười một tầng phải lên đài tỷ thí, các tu tiên phái không chủ động thu nhận sao. Sau đó không phục, tức giận hỏi tán tu có thật không bằng đệ tử gia tộc tu tiên." },
          { chuong: 136, importance: "normal", tieuDe: "Dứt khoát theo nhóm", text: "Dứt khoát đồng ý tiếp tục đi cùng nhóm sau Thái Nam hội khi Tùng Văn rủ." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Tùng Văn đạo sĩ", tag: "dong-doi", quanHe: "Trưởng nhóm tán tu Thái Nam hội" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 6,
      nguon: ["c0130", "c0133", "c0135", "c0136"]
    },
    {
      id: "kho-tang-dai-su",
      name: "Khổ Tang đại sư",
      cn: null,
      aliases: ["tiểu hòa thượng"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Bồ Lộ sơn", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ",
      trangThai: "song",
      blurb: "Hòa thượng từ Bồ Lộ sơn, thành viên nhóm tán tu Tùng Văn. Hay ngồi tụng kinh, dáng vẻ cao tăng đắc đạo. Chỉ điểm Hàn Lập về đạo chế phù và phù thuật một cách tường tận và thực tiễn.",
      vaiTro: "Thành viên nhóm tán tu Tùng Văn; chỉ điểm Hàn Lập về chế phù",
      tinhCach: [
        { text: "Trầm tĩnh, hay tụng kinh ngồi một chỗ; không tham gia thương nghị vì đã giao dịch xong hàng mang theo", chuong: 132 },
        { text: "Kiến thức thực tiễn về chế phù rất uyên thâm — giải thích tường tận cho Hàn Lập về đan sa, bút và phù thuật", chuong: 136 }
      ],
      tabs: {
        diem: [
          { text: "Hòa thượng Bồ Lộ sơn; thường ngồi tụng Kim cương kinh ở lầu một tiểu lâu", chuong: 132 },
          { text: "Đồ mang đến đã trao đổi xong từ sớm, không tham gia thương nghị nhóm", chuong: 133 }
        ],
        kinhLich: [
          { chuong: 132, importance: "normal", tieuDe: "Gặp Hàn Lập, truyền lời Tùng Văn", text: "Ngồi tụng Kim cương kinh ở lầu một tiểu lâu khi Hàn Lập tới. Mãi mới mở mắt và truyền lời Tùng Văn đang đợi ở lầu hai." },
          { chuong: 136, importance: "normal", tieuDe: "Chỉ điểm Hàn Lập về chế linh phù", text: "Giảng cho Hàn Lập nguyên liệu chế linh phù: cần đan sa từ máu linh khí yêu thú, và bút (lông yêu thú hoặc bút than với thiên tài địa bảo); bút thường tỉ lệ thành công thấp đến đáng thương." },
          { chuong: 138, importance: "normal", tieuDe: "Chỉ điểm về đạo chế phù và phù thuật", text: "Sau khi Hàn Lập thất bại 12 lần chế Định thần phù, giải thích: người mới thất bại hơn trăm lần là bình thường; chỉ sau vạn lần luyện tập mới thành phù sư hợp cách; đồng thời giải thích sự khác biệt giữa chế phù và phù thuật. Hàn Lập từ đó tạm từ bỏ tự chế phù." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Tùng Văn đạo sĩ", tag: "dong-doi", quanHe: "Trưởng nhóm tán tu Thái Nam hội" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0130", "c0132", "c0133", "c0136", "c0138"]
    },
    {
      id: "ho-binh-co",
      name: "Hồ Bình Cô",
      cn: null,
      aliases: [],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Thiên thủy trại", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ",
      trangThai: "song",
      blurb: "Nữ tán tu từ Thiên thủy trại, vợ của Hùng Đại Lực. Người am hiểu thực tế lôi đài Thăng tiên hội — từng chính mắt chứng kiến, sắc mặt trắng bệch khi nhớ lại. Nhanh nhảu, hay cãi, nhưng biết điểm dừng và thực tế.",
      vaiTro: "Thành viên nhóm tán tu Tùng Văn; người giảng giải về Thăng tiên hội",
      tinhCach: [
        { text: "Nhanh nhảu, hay cãi nhau với Ngô Cửu Chỉ; xô ghế đứng dậy sắc mặt xanh mét khi bị khiêu khích", chuong: 133 },
        { text: "Thực tế, từng trải — từng chứng kiến lôi đài Thăng tiên hội lần trước, kiêng kỵ sự tàn khốc của nó", chuong: 134 },
        { text: "Cứng đầu nhưng không cố chấp — miễn cưỡng chấp nhận hòa giải với Ngô Cửu Chỉ", chuong: 133 }
      ],
      tabs: {
        diem: [
          { text: "Vợ Hùng Đại Lực (câm); Thiên thủy trại; hai vợ chồng dự tính ở lại Luyện khí kỳ cả đời, không lên lôi đài", chuong: 134 },
          { text: "Từng chính mắt xem Thăng tiên hội lần trước; nhớ lại vẫn sợ; biết rõ số lượng chết/bị thương", chuong: 134 }
        ],
        kinhLich: [
          { chuong: 133, importance: "normal", tieuDe: "Xô ghế cãi nhau với Ngô Cửu Chỉ", text: "Từng bị Ngô Cửu Chỉ trộm đồ; tức giận châm chọc, xô ghế đứng dậy. Sau khi Tùng Văn hòa giải, miễn cưỡng chấp nhận; hâm mộ vận may của Hàn Lập vì đã bán hết hàng từ sớm." },
          { chuong: 134, importance: "normal", tieuDe: "Bất mãn, muốn bàn về tán tu mất tích", text: "Ban đầu bất mãn khi chuyển sang bàn về Thăng tiên hội; sau ổn định, đồng ý kể về sự tàn khốc của lôi đài. Sắc mặt trắng bệch khi nhớ lại cảnh chứng kiến." },
          { chuong: 135, importance: "normal", tieuDe: "Giảng giải chi tiết lôi đài Thăng tiên hội", text: "Người giảng giải chính về điều kiện báo danh (tầng bảy+, dưới bốn mươi tuổi), bảy lôi đài thất đại tiên phái, thể thức tỷ thí loại trực tiếp; kể số người chết lần trước (hơn trăm) — sắc mặt lạnh tự giễu về bất lợi của tán tu." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hùng Đại Lực", tag: "gia-dinh", quanHe: "Chồng — câm bẩm sinh, mọi việc Hồ Bình Cô làm chủ" },
          { ten: "Tùng Văn đạo sĩ", tag: "dong-doi", quanHe: "Trưởng nhóm tán tu Thái Nam hội" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0130", "c0133", "c0134", "c0135"]
    },
    {
      id: "hung-dai-luc",
      name: "Hùng Đại Lực",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thiên thủy trại", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ",
      trangThai: "song",
      blurb: "Tán tu Thiên thủy trại, chồng của Hồ Bình Cô. Câm bẩm sinh nên mọi việc do phu nhân làm chủ. Vóc người to lớn, mang đại đao sau lưng.",
      vaiTro: "Thành viên nhóm tán tu Tùng Văn tại Thái Nam hội",
      tinhCach: [
        { text: "Bảo vệ phu nhân — đưa tay ra đại đao sau lưng khi Ngô Cửu Chỉ và Hồ Bình Cô xung đột", chuong: 133 },
        { text: "Ân cần — vòng tay qua vai an ủi Hồ Bình Cô khi nàng sợ hãi nhớ lại cảnh lôi đài", chuong: 134 }
      ],
      tabs: {
        diem: [
          { text: "Chồng Hồ Bình Cô; câm bẩm sinh; to lớn, mang đại đao; Thiên thủy trại", chuong: 133 }
        ],
        kinhLich: [
          { chuong: 133, importance: "normal", tieuDe: "Định rút đao bảo vệ phu nhân", text: "Khi Hồ Bình Cô và Ngô Cửu Chỉ tranh chấp kịch liệt, trợn mắt đưa tay vào đại đao sau lưng. Sau khi Tùng Văn hòa giải, thôi." },
          { chuong: 134, importance: "normal", tieuDe: "An ủi phu nhân", text: "Vòng tay qua vai Hồ Bình Cô an ủi khi nàng sắc mặt trắng bệch nhớ lại cảnh lôi đài Thăng tiên hội." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hồ Bình Cô", tag: "gia-dinh", quanHe: "Vợ — làm chủ mọi việc trong cặp vì Hùng Đại Lực câm" },
          { ten: "Tùng Văn đạo sĩ", tag: "dong-doi", quanHe: "Trưởng nhóm tán tu Thái Nam hội" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 6,
      nguon: ["c0130", "c0133", "c0134"]
    },
    {
      id: "diep-bao",
      name: "Diệp Báo",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Diệp gia — Tần Diệp lĩnh", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ",
      trangThai: "song",
      blurb: "Tự xưng người của Tần Diệp lĩnh (Diệp gia). Đi chân không, mặt như ngựa. Trả giá Phi thiên phù bị từ chối, tức giận đe dọa chủ quầy sẽ tính sổ sau đại hội. Sự xuất hiện của hắn khiến Hàn Lập cảnh giác vì Chu Nho (người Diệp gia bị Hàn Lập giết) từng nhắc tới Tần Diệp lĩnh.",
      vaiTro: "Thành viên Diệp gia; xuất hiện tại Thái Nam hội",
      tinhCach: [
        { text: "Nóng nảy, dễ tức — thất bại trong mặc cả thì lập tức đe dọa đối phương", chuong: 131 },
        { text: "Mượn danh thế lực — dựa vào thân phận Diệp gia để không sợ hậu quả khi đe dọa", chuong: 131 }
      ],
      tabs: {
        diem: [
          { text: "Đi chân không, mặt như ngựa; tự xưng người Tần Diệp lĩnh Diệp gia", chuong: 131 },
          { text: "Đệ tử Diệp gia xuất hiện tại Thái Nam hội, trả giá Phi thiên phù bị chủ quầy từ chối", chuong: 131 }
        ],
        kinhLich: [
          { chuong: 131, importance: "normal", tieuDe: "Trả giá Phi thiên phù — đe dọa chủ quầy", text: "Trả giá hai mươi khối linh thạch mua Phi thiên phù bị chủ quầy từ chối. Tức giận, tự xưng Diệp Báo của Tần Diệp lĩnh, đe dọa sau đại hội sẽ tính sổ, rồi bỏ đi. Sự xuất hiện khiến Hàn Lập cảnh giác vì biết hắn là người Diệp gia." },
          { chuong: 139, importance: "normal", tieuDe: "Đệ tử Diệp gia có mặt tại quầy rao bán Tàn Phiến", text: "Một đệ tử Diệp gia (áo gắn đồ án lá cây) đang giữ bát vàng Hồi phong bát tại quầy nơi hán tử da đen rao bán Tàn Phiến; từ chối đổi và đòi giá cao. Không nêu đích danh Diệp Báo nhưng là người Diệp gia cùng bối cảnh." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Chu Nho", tag: "dong-toc", quanHe: "Cùng là người Diệp gia Tần Diệp lĩnh — Chu Nho đã bị Hàn Lập giết, Diệp Báo có thể là nguy cơ tiếp theo" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0131", "c0139"]
    },
    {
      id: "chung-linh-dao",
      name: "Chung Linh Đạo",
      cn: null,
      aliases: ["Chung Chưởng môn", "Chung đại Chưởng môn"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Trúc Cơ kỳ hậu kỳ",
      trangThai: "song",
      blurb: "Chưởng môn hiện tại Hoàng Phong Cốc. Hơn trăm tuổi nhưng trông như mới ba mươi, tu vi hậu kỳ Trúc Cơ kỳ. Tính trầm ổn, công chính nghiêm minh, uy vọng cao. Chỉ phất tay áo đã dùng lực nhu hòa vô hình nâng người — thể hiện công lực thâm hậu. Dàn xếp ổn thỏa vụ Trúc Cơ đan, thu nhận Hàn Lập vào môn dù tư chất kém vì bổn môn giữ lời hứa với Thăng Tiên Lệnh.",
      vaiTro: "Chưởng môn Hoàng Phong Cốc",
      tinhCach: [
        { text: "Công chính nghiêm minh — dàn xếp vụ Trúc Cơ đan lưỡng toàn kỳ mỹ, không để ai bị thiệt hẳn", chuong: 147 }
      ],
      tabs: {
        diem: [
          { text: "Hơn trăm tuổi nhưng dáng trung niên khoảng ba mươi; tu vi hậu kỳ Trúc Cơ kỳ", chuong: 144 },
          { text: "Phất tay áo dùng lực nhu hòa vô hình nâng Hàn Lập dậy, không cần ra sức", chuong: 147 }
        ],
        kinhLich: [
          { chuong: 144, importance: "normal", tieuDe: "Chủ trì phân chia Trúc Cơ đan", text: "Chủ trì cuộc họp hơn mười quản sự, ra phán quyết về phân chia Trúc Cơ đan: ưu tiên người cầm Thăng Tiên Lệnh, tiểu cô nương hậu nhân Hồng Phất sư thúc, và người mang dị linh căn; cho phép Diệp lão giả tiếp cận giao dịch nhưng cấm cưỡng ép." },
          { chuong: 147, importance: "normal", tieuDe: "Thu nhận Hàn Lập — dàn xếp vụ Trúc Cơ đan", text: "Chính thức thu Hàn Lập làm đệ tử Hoàng Phong Cốc. Dàn xếp lưỡng toàn: Hàn Lập nhường đan, Diệp Tính bồi thường tổn thất. Phân phó Vương sư đệ an bài chỗ ở và phổ biến môn quy." }
        ],
        tuViMoc: [
          { chuong: 144, canhGioi: "Trúc Cơ kỳ hậu kỳ", text: "Hơn trăm tuổi, tu vi hậu kỳ Trúc Cơ kỳ; dáng như trung niên ba mươi.", importance: "normal" }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0144", "c0145", "c0147", "c0148"]
    },
    {
      id: "diep-tinh-lao-gia",
      name: "Diệp Tính lão giả",
      cn: null,
      aliases: ["Diệp lão giả", "Diệp sư thúc", "Diệp sư huynh", "Diệp Đường chủ"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" },
        { ten: "Diệp gia", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Trúc Cơ kỳ (quản sự)",
      trangThai: "song",
      blurb: "Quản sự Hoàng Phong Cốc, Đường chủ Bách Ky đường, thuộc Diệp gia. Nóng nảy, vai vế thấp hơn Mộ Dung Sam dù già hơn nhiều. Dùng quyền phân công công tác mặc cả ép Hàn Lập nhường Trúc Cơ đan cho cháu mình. Sau đó hối ước hoãn giao vật phẩm bồi thường với cớ luyện Hợp Khí đan; bị Ngô Tính nắm thóp.",
      vaiTro: "Quản sự Hoàng Phong Cốc; Đường chủ Bách Ky đường",
      tinhCach: [
        { text: "Nóng nảy, mưu lợi tư — dùng quyền hạn phân công công tác để ép buộc đệ tử cấp thấp", chuong: 144 },
        { text: "Ngụy quân tử — tuyên bố tuyệt không hối ước trong khi thực tế đang hối ước", chuong: 150 }
      ],
      tabs: {
        diem: [
          { text: "Đường chủ Bách Ky đường — phụ trách phân công công tác tạp vụ cho đệ tử cấp thấp", chuong: 149 },
          { text: "Thuộc Diệp gia; vai vế thấp hơn Mộ Dung Sam dù già hơn nhiều, phải gọi 'sư huynh'", chuong: 144 }
        ],
        kinhLich: [
          { chuong: 144, importance: "normal", tieuDe: "Cãi vã về Trúc Cơ đan", text: "Tức giận trong cuộc họp vì cháu mình bị tước suất Trúc Cơ đan nhường cho người cầm Thăng Tiên Lệnh. Cùng Ngô lão giả lập mưu: dụ người tư chất kém tự nguyện nhường đan." },
          { chuong: 145, importance: "normal", tieuDe: "Gặp riêng Hàn Lập — đề nghị mua Trúc Cơ đan", text: "Vào Nghênh Tân lâu gặp Hàn Lập, thái độ niềm nở gọi 'Diệp sư thúc', chào giá bảy tám khối linh thạch bậc trung và vật phẩm đổi lấy Trúc Cơ đan." },
          { chuong: 146, importance: "normal", tieuDe: "Chốt giao dịch", text: "Thuyết phục Hàn Lập: tư chất tứ linh căn dùng đan tỉ lệ thành công thấp, chi bằng đổi lấy vật hữu dụng. Đề nghị cho Hàn Lập tùy chọn công tác tạp vụ — chiêu sát thủ cuối cùng. Giao dịch thành: Hàn Lập nhường đan, được chọn công tác trồng linh dược." },
          { chuong: 149, importance: "normal", tieuDe: "Hào phóng duyệt công tác cho Hàn Lập", text: "Xuất hiện ở Bách Ky đường, hào phóng cho Hàn Lập tùy ý chọn công tác trồng trọt dù chưa hết một tháng làm quen." },
          { chuong: 150, importance: "normal", tieuDe: "Hối ước — bị Ngô Tính nắm thóp", text: "Hoãn giao một phần vật phẩm bồi thường với cớ luyện Hợp Khí đan cho cháu sắp Trúc Cơ. Hàn Lập nhẫn nhịn. Sau khi Hàn Lập đi, bị Ngô Tính lộ rõ đang khống chế qua thỏa thuận chia nửa Hợp Khí đan." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Ngô Tính lão giả", tag: "dong-mon", quanHe: "Đồng mưu; Ngô Tính nắm thóp Diệp Tính qua thỏa thuận chia Hợp Khí đan" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0144", "c0145", "c0146", "c0147", "c0149", "c0150"]
    },
    {
      id: "ngo-tinh-lao-gia",
      name: "Ngô Tính lão giả",
      cn: null,
      aliases: ["Ngô lão giả", "Ngô sư huynh"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Trúc Cơ kỳ (quản sự)",
      trangThai: "song",
      blurb: "Quản sự Hoàng Phong Cốc, mũi ưng dài, diện mục âm trầm, nổi danh túc trí đa mưu. Đứng sau bày mưu cho Diệp Tính dụ Hàn Lập nhường Trúc Cơ đan. Thực chất nắm thóp Diệp Tính qua thỏa thuận chia nửa Hợp Khí đan để khống chế lão trong nghị sự tông môn.",
      vaiTro: "Quản sự Hoàng Phong Cốc; kẻ đứng sau mưu tính",
      tinhCach: [
        { text: "Túc trí đa mưu — bày mưu cho Diệp Tính nhưng thực ra đang gài bẫy để khống chế lão", chuong: 144 }
      ],
      tabs: {
        diem: [
          { text: "Mũi ưng dài, diện mục âm trầm; nổi danh túc trí đa mưu trong môn phái", chuong: 144 },
          { text: "Khinh thường Hàn Lập: ví bóp chết hắn dễ như bóp con kiến", chuong: 150 }
        ],
        kinhLich: [
          { chuong: 144, importance: "normal", tieuDe: "Hiến kế cho Diệp Tính", text: "Gợi ý hỏi rõ thông tin người cầm Thăng Tiên Lệnh. Sau khi biết tư chất ngụy linh căn, xui Diệp Tính dụ người ta tự nguyện nhường đan đổi lấy vật hữu dụng khác." },
          { chuong: 150, importance: "normal", tieuDe: "Lộ ý đồ khống chế Diệp Tính", text: "Xuất hiện sau lưng Diệp Tính sau khi Hàn Lập đi. Hai người để lộ đồng mưu. Ngô Tính nắm thóp Diệp Tính qua thỏa thuận chia nửa Hợp Khí đan: sau này nghị sự tông môn Diệp Tính ắt phải nghiêng về phía mình." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Diệp Tính lão giả", tag: "dong-mon", quanHe: "Đồng mưu; Ngô Tính nắm thóp Diệp Tính để khống chế trong nghị sự" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0144", "c0150"]
    },
    {
      id: "mo-dung-sam",
      name: "Mộ Dung Sam",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Trúc Cơ kỳ (quản sự)",
      trangThai: "song",
      blurb: "Tu sĩ trung niên, quản sự Hoàng Phong Cốc. Vai vế cao — Diệp lão giả phải gọi 'sư huynh' dù trẻ hơn nhiều. Thần tình điềm tĩnh, biện luận sắc bén. Chủ trương giữ lời hứa với Thăng Tiên Lệnh, thách Diệp lão giả phát thề độc.",
      vaiTro: "Quản sự Hoàng Phong Cốc",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Vai vế cao hơn Diệp lão giả dù trẻ hơn nhiều; Diệp phải gọi 'sư huynh'", chuong: 144 }
        ],
        kinhLich: [
          { chuong: 144, importance: "normal", tieuDe: "Biện hộ giữ lời hứa Thăng Tiên Lệnh", text: "Giải thích: cả trăm năm mới có người cầm Thăng Tiên Lệnh tới, không thể không cấp đan; thách Diệp lão giả phát thề độc thì mới bỏ qua — Diệp lão giả không dám." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 6,
      nguon: ["c0144"]
    },
    {
      id: "vuong-su-thuc",
      name: "Vương sư thúc",
      cn: null,
      aliases: ["Vương sư đệ", "Vương dẫn đường", "Vương tiên sư"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Trúc Cơ kỳ (quản sự)",
      trangThai: "song",
      blurb: "Quản sự Hoàng Phong Cốc, người dẫn đường của phái tại Thăng Tiên đại hội. Dáng xanh xao, hòa nhã, kiên nhẫn. Đưa Hàn Lập cùng mười người thắng lôi đài về cốc; kiểm tra thuộc tính linh căn; giới thiệu kết cấu môn phái và dạy Hàn Lập dùng túi trữ vật.",
      vaiTro: "Quản sự Hoàng Phong Cốc; dẫn đường tại Thăng Tiên đại hội",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Dáng xanh xao, hòa nhã; sư đệ của Diệp lão giả; nhân duyên tốt trong cốc", chuong: 145 }
        ],
        kinhLich: [
          { chuong: 145, importance: "normal", tieuDe: "Đưa Hàn Lập về cốc — kiểm tra linh căn", text: "Sau khi Hàn Lập nộp Thăng Tiên Lệnh tại Thăng Tiên đại hội, đưa hắn cùng mười người thắng lôi đài về Hoàng Phong Cốc bằng pháp khí hình thuyền; kiểm tra xác định tứ thuộc tính ngụy linh căn." },
          { chuong: 147, importance: "normal", tieuDe: "Giới thiệu kết cấu môn phái", text: "Được Chưởng môn phân phó an bài chỗ ở cho Hàn Lập, phổ biến môn quy, giới thiệu toàn bộ kết cấu Hoàng Phong Cốc: ba tầng đệ tử, quản sự, thang tu vi." },
          { chuong: 148, importance: "normal", tieuDe: "Dẫn nhận vật phẩm và dạy dùng túi trữ vật", text: "Dẫn Hàn Lập tới nhà Lâm sư đệ nhận vật phẩm; dạy Hàn Lập ba điều kiêng kỵ khi dùng túi Thập Bội Trữ Vật." },
          { chuong: 149, importance: "normal", tieuDe: "Giới thiệu Ngô Phong — dẫn đi ra mắt", text: "Dẫn Hàn Lập tới Truyền công các giới thiệu Ngô Phong làm người chỉ giáo công pháp; đưa về khu nhà đá và rời đi sau khi hoàn thành trách nhiệm." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0144", "c0145", "c0147", "c0148", "c0149"]
    },
    {
      id: "lam-su-de",
      name: "Lâm sư đệ",
      cn: null,
      aliases: ["Hôi Y Lão Giả", "lão giả áo xám"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Không rõ (trưởng bối)",
      trangThai: "song",
      blurb: "Trưởng bối Hoàng Phong Cốc phụ trách phát vật phẩm tùy thân cho đệ tử mới. Áo xám nhàu nát. Tay nghề điêu khắc gỗ cao — khắc khỉ nhỏ sống động chỉ trong một chén trà. Tính lạnh, nói thẳng, bất kính với Chưởng môn Chung Linh Đạo do 'chuyện năm đó'. Lộ tâm sự tịch liêu khi nghe Hàn Lập bỏ qua Trúc Cơ đan.",
      vaiTro: "Trưởng bối Hoàng Phong Cốc; phát vật phẩm đệ tử mới",
      tinhCach: [
        { text: "Lạnh lùng, nói thẳng, không kiêng nể — chê tư chất Hàn Lập thẳng mặt và mỉa mai Chưởng môn", chuong: 148 }
      ],
      tabs: {
        diem: [
          { text: "Tay nghề điêu khắc gỗ xuất sắc; sống trong nhà đá rộng hơn bề ngoài (nghi có thủ pháp không gian)", chuong: 148 },
          { text: "Ác cảm với Chưởng môn Chung Linh Đạo do 'chuyện năm đó' — chưa được tiết lộ", chuong: 148 }
        ],
        kinhLich: [
          { chuong: 148, importance: "normal", tieuDe: "Phát vật phẩm đệ tử mới cho Hàn Lập", text: "Đang điêu khắc Hoàng Mộc khi Vương sư thúc và Hàn Lập tới; hoàn thành tác phẩm khỉ nhỏ sống động. Chê tư chất Hàn Lập, mỉa mai Chưởng môn. Lấy ra Hoàng ti sam, Thanh Diệp pháp khí, Liệt Dương kiếm, Lãnh Nguyệt đao, Thập Bội Trữ Vật, bộ công cụ tinh luyện giao cho Hàn Lập. Lộ tâm sự tịch liêu khi nghe việc Hàn Lập bỏ qua Trúc Cơ đan." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 6,
      nguon: ["c0148"]
    },
    {
      id: "ngo-phong",
      name: "Ngô Phong",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ — đỉnh điểm (kẹt, không vào được Trúc Cơ kỳ dù đã dùng Trúc Cơ đan)",
      trangThai: "song",
      blurb: "Đệ tử áo xanh khoảng ba mươi tuổi, chấp sự Truyền công các Hoàng Phong Cốc chuyên phụ trách công pháp cho đệ tử mới. Nắm giữ công pháp sơ cấp thuộc nhóm mười người đứng đầu đồng lứa, lĩnh ngộ pháp thuật cấp thấp xuất thần nhập hóa. Tính khiêm nhường, nhân phẩm tốt, truyền thụ không tàng tư. Đã từng dùng Trúc Cơ đan nhưng vẫn kẹt ở đỉnh điểm Luyện Khí kỳ — không vào được Trúc Cơ kỳ.",
      vaiTro: "Chấp sự Truyền công các Hoàng Phong Cốc; người chỉ giáo công pháp của Hàn Lập",
      tinhCach: [
        { text: "Tận tâm truyền thụ, không tàng tư — truyền đủ hết lĩnh hội bản thân không giấu lại", chuong: 159 },
        { text: "Chân thành khích lệ đệ tử kém tư chất: 'cần cù bù khuyết, chỉ cần khổ tâm tu hành cũng có thành tích tốt'", chuong: 159 }
      ],
      tabs: {
        diem: [
          { text: "Khoảng ba mươi tuổi, áo xanh; công pháp sơ cấp nhóm mười người đứng đầu đồng lứa", chuong: 149 },
          { text: "Từ một suy ba, lĩnh ngộ pháp thuật cấp thấp xuất thần nhập hóa — khiến Hàn Lập khâm phục và thu lợi ích không nhỏ qua hơn một năm học", chuong: 159 },
          { text: "Dùng Trúc Cơ đan nhưng thất bại Trúc Cơ, mãi dừng ở đỉnh điểm Luyện Khí kỳ", chuong: 159 }
        ],
        kinhLich: [
          { chuong: 149, importance: "normal", tieuDe: "Ra mắt làm người chỉ giáo công pháp", text: "Được Vương sư thúc giới thiệu tại Truyền công các. Hàn Lập cung kính chào, Ngô Phong khiêm nhường đáp lễ. Về sau sẽ hướng dẫn công pháp cho Hàn Lập." },
          { chuong: 152, importance: "minor", text: "Là một trong số ít người còn nhớ/biết Hàn Lập trong cốc — Hàn Lập thỉnh giáo công pháp định kỳ, học sơ cấp pháp thuật và khẩu quyết từ hắn." },
          { chuong: 159, importance: "normal", tieuDe: "Giảng Hỏa Xà Thuật — xác nhận thất bại Trúc Cơ", text: "Giảng Hỏa Xà Thuật sơ cấp bậc trung cho hai thiếu niên. Khi Hàn Lập chán nản về tư chất, khích lệ 'cần cù bù khuyết'. Hàn Lập qua đây biết: Ngô Phong đã dùng Trúc Cơ đan nhưng vẫn kẹt đỉnh Luyện Khí kỳ." },
          { chuong: 160, importance: "normal", tieuDe: "Giải thích về Huyết Cấm Thí Luyện", text: "Khi Hàn Lập hỏi về xuất xứ chủ dược Trúc Cơ đan, khuyên bỏ ý định rồi giải thích cặn kẽ: cấm địa phía sau Hoàng Phong Cốc, cơ chế cổ cấm 5 năm/5 ngày, Trúc Cơ kỳ bị chắn ngoài, tỉ lệ sống sót dưới 1/4. Sự kiện Huyết Cấm Thí Luyện diễn ra nửa năm sau." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0149", "c0152", "c0159", "c0160"]
    },
    {
      id: "vu-chap-su",
      name: "Vu chấp sự",
      cn: null,
      aliases: ["trung niên chấp sự Bách Ky đường"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ (chấp sự)",
      trangThai: "song",
      blurb: "Chấp sự trung niên ở Bách Ky đường Hoàng Phong Cốc. Hằng năm phải nhờ sư huynh đệ hỗ trợ mới tạm hoàn thành nhiệm vụ dược viên khó. Can Hàn Lập đừng chọn nhiệm vụ dược viên Bách Dược Viên. Sau dẫn Hàn Lập tới Kim Phù lĩnh.",
      vaiTro: "Chấp sự Bách Ky đường Hoàng Phong Cốc",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Chấp sự trung niên Bách Ky đường; hằng năm phải nhờ người hỗ trợ mới hoàn thành nhiệm vụ dược viên", chuong: 150 }
        ],
        kinhLich: [
          { chuong: 149, importance: "normal", tieuDe: "Kinh ngạc Hàn Lập quay lại xin công tác sớm", text: "Kinh ngạc khi Hàn Lập chưa hết tháng làm quen đã quay lại xin nhận công tác trồng trọt; yêu cầu phải chứng minh kinh nghiệm." },
          { chuong: 150, importance: "normal", tieuDe: "Can Hàn Lập — dẫn tới Kim Phù lĩnh", text: "Can ngăn Hàn Lập chọn nhiệm vụ Bách Dược Viên siêu khó. Sau khi Hàn Lập nhận nhiệm vụ, dẫn hắn tới Kim Phù lĩnh." },
          { chuong: 151, importance: "minor", text: "Đã quay về Bách Ky đường trước khi Hàn Lập vào Bách Dược Viên — không có mặt lúc bàn giao với Mã sư bá." },
          { chuong: 152, importance: "minor", text: "Là một trong số ít người ở cốc còn ngẫu nhiên nhớ tới Hàn Lập; mỗi tháng phát linh thạch cho hắn tại Bách Ky đường." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 7,
      nguon: ["c0149", "c0150", "c0151", "c0152"]
    },
    {
      id: "ma-su-ba",
      name: "Mã sư bá",
      cn: null,
      aliases: ["Mã lão giả", "lão đầu"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Tu tiên (cảnh giới không rõ — cao hơn Hàn Lập, phi hành tự do)",
      trangThai: "song",
      blurb: "Lão đầu gầy gò khoảng năm mươi tuổi, hai chòm râu nhỏ, mắt nhỏ mờ, dáng linh hoạt nhanh nhẹn. Chủ nhân thật sự của Bách Dược Viên tại Kim Phù lĩnh. Tính tình cổ quái, nói thẳng không khách khí, ít khi chia sẻ cách điều chế đan dược. Sở hữu kiến thức dược lý sâu rộng — nhận ra được nhiều loại thảo dược hiếm mà chính lão cũng tốn công mới hiểu rõ. Muốn thoát khỏi việc trông coi dược viên để chuyên tâm tu hành.",
      vaiTro: "Trưởng bối Hoàng Phong Cốc; chủ nhân Bách Dược Viên; sư bá của Hàn Lập",
      tinhCach: [
        { text: "Cổ quái, nói thẳng, keo kiệt cách điều chế — từ chối chia sẻ đan phương vì coi là tâm huyết qua vô số lần thất bại", chuong: 151 },
        { text: "Thực tế, không phải ngụy quân tử: bất mãn thì nói thẳng, hài lòng thì thưởng thêm — Hàn Lập cảm thấy lão 'mạnh hơn' Diệp sư thúc về nhân cách", chuong: 151 }
      ],
      tabs: {
        diem: [
          { text: "Tầm năm mươi tuổi, gầy gò, hai chòm râu nhỏ, mắt nhỏ mờ xoay chuyển, dáng linh hoạt nhanh nhẹn", chuong: 151 },
          { text: "Si mê luyện đan — nổi tiếng trong cốc vì điều này; keo kiệt không chịu chia sẻ cách điều chế", chuong: 153 }
        ],
        kinhLich: [
          { chuong: 151, importance: "major", tieuDe: "Bàn giao Bách Dược Viên cho Hàn Lập", text: "Thử thách Hàn Lập nhận mặt thảo dược — kinh ngạc khi hắn gọi đúng nhiều loại hiếm. Giao quyền quản lý dược viên + mộc bài mộc xanh; để lại bút ký kinh nghiệm + thảo dược tâm đắc. Bay đi để chuyên tâm tu hành/luyện đan." },
          { chuong: 152, importance: "minor", text: "Mỗi kỳ tới Bách Dược Viên nhận dược liệu đều hài lòng với Hàn Lập; tăng thưởng linh thạch từ 2 lên 5 khối/tháng." },
          { chuong: 153, importance: "minor", text: "Cấp ngọc phù bảo đảm cho Hàn Lập vào Nhạc Lộc điện — đổi bằng một năm trông coi dược viên miễn phí." },
          { chuong: 159, importance: "normal", tieuDe: "Tiết lộ bí mật ba chủ dược Trúc Cơ đan", text: "Bị Hàn Lập khích, lỡ miệng tiết lộ: Ngọc Tủy Chi, Tử Hầu Hoa, Thiên Linh Quả không có hạt giống, do thiên địa linh khí sinh ra, không thể nuôi trồng. Nơi tìm được 'cùng với tự sát không kém bao nhiêu'. Hẹn hai tháng sau quay lại lấy thuốc rồi bay đi." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0151", "c0152", "c0153", "c0159"]
    },
    {
      id: "hua-lao",
      name: "Hứa lão",
      cn: null,
      aliases: ["Hứa bá", "lão giả gian thương"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Tu tiên (cảnh giới không rõ — Thiên Nhãn Thuật của Hàn Lập không soi được, ít nhất Trúc Cơ kỳ)",
      trangThai: "song",
      blurb: "Lão giả mặt đầy hồng quang, trông coi tàng thư thông đạo 'Đan' tại Nhạc Lộc điện. Bản chất là gian thương thế tục không phải tu sĩ Trúc Cơ kỳ — cố ý bảo người gọi 'Hứa lão' chứ không xưng 'sư bá' để tiện thu phí. Thợ luyện chế đan lô pháp khí, phần lớn đỉnh lô đệ tử cấp thấp Hoàng Phong Cốc đều do lão làm. Tham linh thạch, hay gài 'miễn phí' để bán hàng, nhưng không bịa đặt về kiến thức địa hỏa.",
      vaiTro: "Người trông coi tàng thư đan phương và bán đan lô tại Nhạc Lộc điện",
      tinhCach: [
        { text: "Tham tài, gian thương điển hình: phí đọc sách 1 linh thạch/canh giờ, phí phục chế ngọc đồng 10 linh thạch/lần — cắt cổ với đệ tử cấp thấp", chuong: 154 },
        { text: "Hay dùng chiêu 'miễn phí' để gài mua hàng; kiểm tiền nhiều lần khi nhận; mau lẹ khi phục chế", chuong: 155 }
      ],
      tabs: {
        diem: [
          { text: "Mặt đầy hồng quang, cười hì hì; sở hữu túi vải trữ vật dung lượng cực lớn", chuong: 154 },
          { text: "Không phải tu sĩ Trúc Cơ kỳ — là 'gian thương phàm nhân' ở thế tục vào nơi đây", chuong: 155 }
        ],
        kinhLich: [
          { chuong: 154, importance: "normal", tieuDe: "Gặp Hàn Lập lần đầu tại Nhạc Lộc điện", text: "Chủ động chào Hàn Lập; từ chối xưng 'sư bá'. Mở cầu thang lên lầu hai bằng lệnh bài, đặt phí đọc sách (1 linh thạch/canh giờ) và phí sao chép (10 linh thạch/lần); Hàn Lập trả tổng 2 linh thạch." },
          { chuong: 155, importance: "normal", tieuDe: "Phục chế hai ngọc đồng đan phương", text: "Bị Hàn Lập dùng chiêu 'chỉ phục chế một cái' để moi câu hỏi miễn phí, sau đó nhận 20 linh thạch phục chế cả hai ngọc đồng. Giải thích lý do thất truyền đan phương trong tu tiên giới do đại kiếp và nguyên liệu cạn dần." },
          { chuong: 156, importance: "normal", tieuDe: "Tiết lộ địa phế chi hỏa — bán Ngân Ti đỉnh", text: "Buột miệng khoe đan lô chịu nhiệt địa hỏa, vô tình mở lối thoát cho Hàn Lập đang bế tắc chuyện tiên thiên chân hỏa. Giải thích kiến thức địa phế chi hỏa và huyền dương hỏa địa. Bán Ngân Ti đỉnh giá 32 linh thạch sau khi Hàn Lập mặc cả; tổng thu 50 linh thạch từ Hàn Lập." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0154", "c0155", "c0156"]
    },
    {
      id: "mo-dung-huyen-de",
      name: "Mộ Dung huynh đệ",
      cn: null,
      aliases: ["hai huynh đệ họ Mộ Dung", "song sinh Mộ Dung"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ (đệ tử mới, chưa tầng 9)",
      trangThai: "song",
      blurb: "Hai huynh đệ sinh đôi đệ tử mới nhập môn Hoàng Phong Cốc, khoảng 21-22 tuổi, mi thanh mục tú, da trắng nõn, ánh mắt nghịch ngợm. Sở hữu dị linh căn chuyển hóa thành lôi linh căn — tư chất nổi bật nhất đợt thu đệ tử, được trưởng lão Kết Đan kỳ hứa thu làm môn hạ nếu Trúc Cơ thành công. Thông thạo lôi hệ pháp thuật gồm Chưởng tâm lôi và liên hoàn lôi thuật trung cấp Thiên lôi liên hoàn kích.",
      vaiTro: "Đệ tử mới Hoàng Phong Cốc; sư đệ của Niếp sư muội",
      tinhCach: [
        { text: "Hưng phấn biểu diễn, nghịch ngợm, dễ nổi khí; bị khích là tức giận đến trắng mặt nhận ngay thách đấu", chuong: 157 }
      ],
      tabs: {
        diem: [
          { text: "Song sinh, khoảng 21-22 tuổi; từ dị linh căn chuyển hóa thành lôi linh căn — tư chất hiếm có trong cốc", chuong: 152 },
          { text: "Trưởng lão Kết Đan kỳ phá lệ xuất quan để quan sát, hứa thu làm môn hạ nếu Trúc Cơ thành công", chuong: 152 }
        ],
        kinhLich: [
          { chuong: 152, importance: "normal", tieuDe: "Nhập môn Hoàng Phong Cốc", text: "Là điểm sáng của đợt thu đệ tử với lôi linh căn từ dị linh căn chuyển hóa; trưởng lão Kết Đan kỳ đặc cách hứa thu làm môn hạ." },
          { chuong: 157, importance: "normal", tieuDe: "Tỷ thí với Lục sư huynh — đuối pháp lực", text: "Biểu diễn Chưởng tâm lôi, sau đó bị Lục sư huynh (phong linh căn) khinh thường thách đấu. Thi triển Thiên lôi liên hoàn kích — đám mây đen lớn, thiểm điện liên tục; vòng bảo hộ của Lục sư huynh suýt bị nghiền nát. Cuối cùng do đã tiêu hao pháp lực khi biểu diễn trước đó và tu luyện còn non, pháp lực kiệt sức trước, đành thua." },
          { chuong: 158, importance: "normal", tieuDe: "Bị Niếp sư muội phạt diện bích", text: "Khi Lục sư huynh thi triển Thanh Hồ trảm áp chế, một người mượn người ngoài làm khiên, một người mượn Hàn Lập (nhưng bị hắn né). Được Niếp sư muội giải vây; bị phạt diện bích cho tới khi luyện thành công pháp tầng thứ chín." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 6,
      nguon: ["c0152", "c0157", "c0158"]
    },
    {
      id: "luc-su-huynh",
      name: "Lục sư huynh",
      cn: null,
      aliases: ["Lục Tính thanh niên"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Luyện Khí kỳ tầng 12 trung giai — phong linh căn",
      trangThai: "tu-vong",
      blurb: "Đệ tử cũ Hoàng Phong Cốc, sở hữu phong linh căn — dị linh căn, hảo thủ phong hệ pháp thuật. Luyện Khí kỳ tầng 12 trung giai, pháp lực thâm hậu. Động cơ tham lam: muốn cướp 2 viên Trúc Cơ đan thật và dùng Hợp Hoan Hoàn cưỡng bức Trần sư muội để được nhà họ Đổng gả con gái kèm mối quan hệ Hồng Phất sư thúc tổ. Bị Hàn Lập đánh bại bằng mưu trí trong ác đấu c167–c169, chết — bị cự kiếm chém bửa làm đôi.",
      vaiTro: "Đệ tử Hoàng Phong Cốc; kẻ đối địch trong ác đấu c167–c169",
      tinhCach: [
        { text: "Kiêu ngạo, hay ghen ghét, tâm địa ác độc — lóe tia ác ý nhìn người cứu đối thủ nhưng che giấu bề ngoài văn nhã", chuong: 158 },
        { text: "Tham lam, sẵn sàng cưỡng bức đồng môn và ám toán để đạt mục đích; 'yêu thương luyến tiếc mạng nhỏ' — sợ chết nhưng vẫn liều khi đường cùng", chuong: 166 }
      ],
      tabs: {
        diem: [
          { text: "Phong linh căn — trước khi Mộ Dung nhập môn là người duy nhất có dị linh căn trong hàng đệ tử cốc", chuong: 157 },
          { text: "Luyện Khí kỳ tầng 12 trung giai — cảnh giới xác nhận qua pháp lực thâm hậu và điều khiển Thanh giao kỳ", chuong: 166 }
        ],
        kinhLich: [
          { chuong: 157, importance: "normal", tieuDe: "Thách đấu Mộ Dung huynh đệ", text: "Khinh thường lôi linh căn, thách đấu không tránh né không dùng pháp khí. Dùng vòng hào quang bảo hộ chịu đòn Thiên lôi liên hoàn kích; kinh ngạc trước uy lực vượt dự tính. Cuối cùng thắng nhờ pháp lực tinh thuần thâm hậu hơn do tu luyện nhiều năm." },
          { chuong: 158, importance: "normal", tieuDe: "Thanh Hồ trảm — bị Niếp sư muội dừng tay", text: "Phản công bằng Thanh Hồ trảm khi Mộ Dung huynh đệ kiệt pháp lực; tách đạo quang làm đôi truy hai hướng. Bị Niếp sư muội ngọn lửa thiêu nuốt Thanh Hồ, đổi thái độ lễ độ ngay. Lúc rời đi lóe tia ác ý nhìn thanh niên thấp lùn mang mộc quải, trừng mắt đe dọa." },
          { chuong: 165, importance: "normal", tieuDe: "Cưỡng bức Trần sư muội — phát hiện Trúc Cơ đan", text: "Dùng Hợp Hoan Hoàn cưỡng bức Trần sư muội; tìm thấy hộp gỗ đỏ bí ẩn trong đồ vật của nàng chứa bình xanh đựng 2 viên Trúc Cơ đan thật. Hàn Lập tình cờ chứng kiến." },
          { chuong: 166, importance: "normal", tieuDe: "Lộ thân phận — mưu đoạt Trúc Cơ đan", text: "Lộ cảnh giới thật: Luyện Khí tầng 12 trung giai, phong linh căn. Tiết lộ động cơ: nhà họ Đổng hứa gả con gái nếu được song tu kinh; cần Trúc Cơ đan làm mồi nhử. Dàn trận tấn công Hàn Lập." },
          { chuong: 169, importance: "major", tieuDe: "Chết trong ác đấu với Hàn Lập", text: "Chiến đấu quyết liệt c167–c169 với Hàn Lập: dùng Phong tường thuật, Thanh giao kỳ (Hóa giao), đao phong. Liều chết thu pháp lực Thanh giao kỳ dồn đao phong lớn nhưng thất bại — bị cự kiếm của Hàn Lập chém bửa làm đôi, chết. Túi trữ vật với 2 viên Trúc Cơ đan bị Hàn Lập thu." }
        ],
        tuViMoc: [
          { chuong: 166, canhGioi: "Luyện Khí kỳ tầng 12 trung giai — phong linh căn", text: "Xác nhận qua tự tiết lộ và điều khiển Thanh giao kỳ trong trận. Pháp lực thâm hậu hơn Hàn Lập (tầng 11) rõ rệt.", importance: "normal" }
        ],
        nhanMach: [
          { ten: "Trần sư muội", tag: "tinh-nhan", quanHe: "Tình lữ (bị hắn hại)" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 6,
      nguon: ["c0157", "c0158", "c0165", "c0166", "c0167", "c0168", "c0169"]
    },
    {
      id: "niep-su-muoi",
      name: "Niếp sư muội",
      cn: null,
      aliases: ["lam y nữ tử", "nữ tử áo lam"],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Tu tiên (cảnh giới cao hơn Lục sư huynh và Mộ Dung huynh đệ rõ rệt)",
      trangThai: "song",
      blurb: "Nữ tử cung trang màu lam, tóc búi cao, dung nhan diễm lệ như tiên, vóc dáng thon thả, thần thái phiêu phiêu xuất trần. Pháp lực cao: từ trên không phóng ngọn lửa nuốt trọn Thanh Hồ trảm của Lục sư huynh. Lãnh đạm, ít dao động trước mọi phản ứng xung quanh. Là sư tỷ của Mộ Dung huynh đệ. Đã truyền âm khiển trách Hàn Lập về việc né tránh không cứu người, mong 'lần sau gặp lại có thay đổi'.",
      vaiTro: "Đệ tử Hoàng Phong Cốc; sư tỷ của Mộ Dung huynh đệ",
      tinhCach: [
        { text: "Lãnh đạm, không dao động trước chú ý của đám đông; nhận thức rõ hành động người khác — phát giác tia ác ý của Lục sư huynh mà nhiều người không thấy", chuong: 158 },
        { text: "Nguyên tắc rõ ràng về nghĩa hiệp: không tán đồng việc để người bị lợi dụng làm khiên mà không can thiệp", chuong: 158 }
      ],
      tabs: {
        diem: [
          { text: "Dung nhan diễm lệ như tiên — đám nam tử xung quanh ngây ngốc khi nàng mỉm cười; Hàn Lập không bị thu hút, chỉ mong tránh sự chú ý của nàng", chuong: 158 }
        ],
        kinhLich: [
          { chuong: 158, importance: "major", tieuDe: "Xuất hiện chấm dứt cuộc tỷ thí — phạt Mộ Dung huynh đệ", text: "Từ trên không phóng ngọn lửa nuốt Thanh Hồ trảm của Lục sư huynh. Phạt Mộ Dung huynh đệ diện bích cho tới khi luyện thành công pháp tầng thứ chín. Truyền âm riêng khiển trách Hàn Lập về hành động né tránh không cứu người, mong hắn 'lần sau gặp lại có thay đổi'." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mộ Dung huynh đệ", tag: "su-mon", quanHe: "Sư muội — sư tỷ của hai huynh đệ họ Mộ Dung" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 5,
      nguon: ["c0158"]
    },
    {
      id: "tran-su-muoi",
      name: "Trần sư muội",
      cn: null,
      aliases: [],
      gioiTinh: "nu",
      theLuc: [
        { ten: "Hoàng Phong Cốc", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Tu tiên (không rõ cảnh giới)",
      trangThai: "song",
      blurb: "Nữ tử diễm lệ bên cạnh Lục sư huynh, con gái gia chủ Trần gia. Tuy xinh đẹp nhưng kém Niếp sư muội về dung mạo lẫn thần thái. Trúng Hợp Hoan đan của Lục sư huynh tại c165, bị cưỡng bức. Trên người có hộp gỗ đỏ chứa 2 viên Trúc Cơ đan thật. Được Hàn Lập khống chế bằng Định thần phù / Định Thần thuật khi tấn công hắn tại c170 (trạng thái mất kiểm soát do Hợp Hoan đan); kết cục sau đó không ghi rõ.",
      vaiTro: "Đệ tử Hoàng Phong Cốc; con gái gia chủ Trần gia; nạn nhân kế hoạch của Lục sư huynh",
      tinhCach: [
        { text: "Ghen tuông, hay lo lắng về tình cảm; phản ứng nhanh khi thấy tình lang có thể bị thu hút bởi người khác", chuong: 158 }
      ],
      tabs: {
        diem: [
          { text: "Con gái gia chủ Trần gia — mối quan hệ gia đình gắn với âm mưu của Lục sư huynh (cần kết nối Hồng Phất sư thúc tổ qua nhà họ Đổng)", chuong: 166 }
        ],
        kinhLich: [
          { chuong: 157, importance: "minor", text: "Có mặt bên cạnh Lục sư huynh khi hắn thách đấu Mộ Dung huynh đệ; lo lắng can ngăn nhưng bị từ chối." },
          { chuong: 158, importance: "minor", text: "Sợ Lục sư huynh bị Niếp sư muội mê hoặc; chủ động quàng tay hắn, dùng ánh mắt thù địch nhìn nữ tử áo lam." },
          { chuong: 165, importance: "normal", tieuDe: "Trúng Hợp Hoan đan — bị Lục sư huynh cưỡng bức", text: "Trúng Hợp Hoan đan của Lục sư huynh, mất ý thức tự chủ. Trong đồ vật của nàng có hộp gỗ đỏ chứa bình xanh đựng 2 viên Trúc Cơ đan thật — vật Lục sư huynh muốn chiếm đoạt. Hàn Lập tình cờ chứng kiến." },
          { chuong: 170, importance: "minor", text: "Trong trạng thái Hợp Hoan đan, nàng tấn công Hàn Lập sau khi hắn hạ Lục sư huynh. Hàn Lập dùng Định thần phù / Định Thần thuật khống chế, đưa nàng đến nơi an toàn." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Lục sư huynh", tag: "tinh-nhan", quanHe: "Tình lang (người đã hại nàng)" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 7,
      nguon: ["c0157", "c0158", "c0165", "c0166", "c0170"]
    },
    {
      id: "dien-bac-ly",
      name: "Điền Bặc Ly",
      cn: null,
      aliases: ["chưởng quỹ Vạn Bảo Lâu"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Vạn Bảo Lâu", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Người thường (phàm nhân)",
      trangThai: "song",
      blurb: "Chưởng quỹ phường thị Vạn Bảo Lâu tại phường thị Hoàng Phong Cốc. Người thường, am hiểu vật phẩm tu tiên, giải thích rõ ràng cơ chế phòng thủ hộp gấm và nguyên lý phù bảo. Tiếp đón Hàn Lập khi hắn tới mua vật phẩm chuẩn bị Huyết Cấm Thí Luyện.",
      vaiTro: "Chưởng quỹ Vạn Bảo Lâu",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Người thường nhưng am hiểu đạo lý vật phẩm tu tiên — trình bày mạch lạc cơ chế phòng thủ hộp gấm và phù bảo", chuong: 162 }
        ],
        kinhLich: [
          { chuong: 162, importance: "normal", text: "Tiếp Hàn Lập tại Vạn Bảo Lâu; giải thích cơ chế phòng thủ hai luồng pháp lực khi mở hộp gấm — an toàn với Trúc Cơ kỳ trở lên." },
          { chuong: 164, importance: "minor", text: "Giải thích cơ chế phù bảo: Kết Đan kỳ luyện chế; tiền-Trúc-Cơ phát huy 1–2 thành; hậu Trúc Cơ phát huy toàn bộ; số lần hữu hạn." },
          { chuong: 165, importance: "minor", text: "Chứng kiến Hàn Lập dùng 2 gốc linh thảo ngàn năm đổi toàn bộ hộp gấm, hoàn tất giao dịch." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 9,
      nguon: ["c0162", "c0163", "c0164", "c0165"]
    },
    {
      id: "dinh-lao",
      name: "Đinh lão",
      cn: null,
      aliases: ["giám định dược Vạn Bảo Lâu"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Vạn Bảo Lâu", trangThai: "hien-tai" }
      ],
      canhGioiCaoNhat: "Người thường (phàm nhân)",
      trangThai: "song",
      blurb: "Lão giả giám định dược vật tại Vạn Bảo Lâu, người thường. Am hiểu linh thảo tu tiên, xác nhận chính xác Hoàng tinh chi là thật và tuổi hơn ngàn năm. Được Điền Bặc Ly triệu đến khi Hàn Lập yêu cầu giám định.",
      vaiTro: "Giám định dược Vạn Bảo Lâu",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Người thường am hiểu linh thảo — xác nhận chính xác Hoàng tinh chi thật, tuổi hơn ngàn năm", chuong: 163 }
        ],
        kinhLich: [
          { chuong: 163, importance: "minor", text: "Được triệu đến giám định Hoàng tinh chi do Hàn Lập yêu cầu." },
          { chuong: 164, importance: "minor", text: "Xác nhận Hoàng tinh chi là thật, tuổi hơn ngàn năm — giao dịch được chốt." }
        ],
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      uuTien: 10,
      nguon: ["c0163", "c0164"]
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].artifacts = {
  updatedAt: "2026-06-11",
  count: 66,
  artifacts: [
    {
      id: "binh-than-bi",
      name: "Bình thần bí",
      cn: null,
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Chưa xác định (vật phi thường)",
      soHuu: ["Hàn Lập"],
      trangThai: "đang giữ — đeo trong túi da ở cổ",
      blurb: "Cái bình thần bí màu xanh nhạt Hàn Lập nhặt được trên đường mòn trong núi. Bất hoại trước vũ lực phàm nhân. Hút ánh sáng trắng ban đêm; sau 8 ngày hấp thụ hiện phù hào vàng kim cổ xưa, nắp tự mở, bên trong chứa một giọt Thần Bí Dịch màu xanh biếc.",
      detail: "Bình nhỏ gọn vừa một bàn tay, toàn thân màu xanh nhàn nhạt, hoa văn hình lá xanh biếc sống động. Chất liệu lạ không phải kim loại cũng không phải đồ sứ. Niêm phong cực chặt, nắp và thân như đúc liền khối khi chưa kích hoạt. BẤT HOẠI: bị đập bằng thiết chùy tới mười hai phần công lực vẫn không một vết xước. HÚT LINH KHÍ: ban đêm hút ánh sáng trắng li ti từ không gian xung quanh (quang điểm); chỉ kích hoạt vào đêm trời quang thấy rõ sao trăng. Sau 8 ngày hấp thụ, hiện phù hào vàng kim và nắp tự mở; bên trong có một giọt Thần Bí Dịch (lục dịch). THÔI SANH DƯỢC THẢO: nhỏ trực tiếp một giọt lục dịch nguyên chất lên một gốc dược thảo, tăng khoảng 100 năm tuổi/dược tính; khoảng 7 ngày tái sinh một giọt. Lục dịch chỉ giữ được trong bình — rời bình một khắc tan biến, không vật chứa nào tích trữ được. Hòa tan vào chất lỏng khác thì hiệu quả giảm mạnh. Pha loãng cho thỏ uống: thỏ da nổi vết phồng, thân thể trướng phồng rồi nổ banh — là kịch độc chết người. Lai lịch và tên gọi chính thức của chiếc bình vẫn còn là một bí ẩn.",
      nguon: ["c0010", "c0011", "c0012", "c0013", "c0014", "c0023", "c0024", "c0025", "c0026"]
    },
    {
      id: "than-bi-dich",
      name: "Thần Bí Dịch",
      cn: null,
      category: "khac",
      categoryLabel: "Chất dịch thần bí",
      phamCap: "Chưa xác định",
      soHuu: ["Hàn Lập (qua bình thần bí)"],
      trangThai: "trong bình thần bí",
      blurb: "Một giọt chất lỏng màu xanh biếc to bằng hạt đậu xuất hiện bên trong bình thần bí sau khi bình hấp thụ ánh sáng đủ 8 ngày. Nguyên tác cũng gọi là 'lục dịch'. Là kỳ dược thôi sanh dược thảo: nhỏ một giọt nguyên chất lên một gốc cây tăng khoảng 100 năm tuổi/dược tính. Đồng thời là kịch độc chết người nếu pha loãng uống vào.",
      detail: "Hình dạng: giọt màu xanh biếc bằng hạt đậu, cổn động chậm rãi trong bình, nhuốm xanh thành bình. Công năng thôi sanh: nhỏ trực tiếp nguyên chất lên một gốc dược thảo, tăng khoảng 100 năm tuổi mỗi giọt; hòa tan vào nước chỉ tăng một-hai năm. Giới hạn: rời bình một khắc là tan biến, không vật chứa nào giữ được. Kịch độc: pha loãng vào nước cho thỏ uống thì thỏ da nổi vết phồng, thân thể trướng phồng rồi nổ banh. Hàn Lập thoạt đầu thất vọng coi là 'vô dụng' khi mới tìm được.",
      nguon: ["c0014", "c0023", "c0024", "c0025", "c0026"]
    },
    {
      id: "truu-tuy-hoan",
      name: "Trừu Tủy Hoàn",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Hiếm (cần 23+ nguyên liệu quý)",
      soHuu: ["Lệ sư huynh (đang dùng cả viên)", "Hàn Lập (từng dùng chia nhỏ làm dược dẫn)"],
      trangThai: "lưu thông bí mật",
      blurb: "Dược hoàn màu phấn hồng đẹp mắt nhưng tỏa mùi hôi kỳ dị. Kích phát mạnh mẽ năng lực thân thể, làm võ công người dùng tăng vọt. Tác dụng phụ chết người: phải uống định kỳ, chịu đau như rút gân hút tủy, bỏ thuốc thì tê liệt hoặc chết; dù uống đúng vẫn chết sau khoảng 10 năm.",
      detail: "Thành phần: luyện từ hợp lan, hạt vĩ hoa, bách niên lam nghĩ noãn, cùng hai mươi ba loại vật phẩm hiếm khác. Công năng: sau khi phục dụng, kích phát mạnh mẽ năng lực thân thể, làm năng lực (võ công) người dùng tăng vọt; càng dùng võ công tinh tiến càng nhanh. Tác dụng phụ: phải uống tiếp định kỳ; mỗi lần chịu đau đớn như rút gân hút tủy (\"trừu cân hấp tủy\" — nguồn gốc tên hoàn); bỏ thuốc nhẹ thì toàn thân tê liệt, nặng thì mất mạng; dù uống đúng thời gian sau khoảng 10 năm vẫn không tránh khỏi cái chết. Lệ sư huynh dùng cả viên nhiều năm nên chỉ còn sống thêm mấy năm (xác nhận tại c73). Hàn Lập từng dùng bằng cách chia một viên thành mười phần làm dược dẫn — liều nhỏ không gây hại. Tại c73 Lệ Phi Vũ xác nhận với Hàn Lập: từ chối phế bỏ tu vi dù biết rõ thọ mệnh còn mấy năm.",
      nguon: ["c0020", "c0073"]
    },
    {
      id: "binh-an-phu",
      name: "Bình an phù",
      cn: null,
      category: "khac",
      categoryLabel: "Phù linh",
      phamCap: "Chưa xác định (vật phi thường)",
      soHuu: ["Hàn Lập"],
      trangThai: "đang giữ — đeo trên ngực",
      blurb: "Vật cha mẹ tặng Hàn Lập khi rời nhà. Khi chạm vào truyền cảm giác thanh tâm thấu tâm, lập tức bình lặng nội tâm, trừ tâm ma và tiêu mọi dị tượng trong cơ thể.",
      detail: "Trước nay Hàn Lập đeo trong cái túi ở ngực cùng bình thần bí. Đêm hắn bị tâm ma xâm lấn, thoạt đầu nghi cái túi/phù là nguyên nhân và ném đi — tình trạng càng nặng. Sau đó tìm lại bình an phù, chạm vào tay thì cảm giác thanh tâm truyền vào, mọi dị tượng tức thì tiêu tan. Đây là vật không tầm thường, năng lực thực sự chưa rõ hết.",
      nguon: ["c0022", "c0023"]
    },
    {
      id: "hoang-long-dan",
      name: "Hoàng Long Đan",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Thánh dược hiếm có",
      soHuu: ["Hàn Lập (tự phối chế)"],
      trangThai: "phần còn lại đang lưu giữ",
      blurb: "Thánh dược thoát thai hoán cốt, gia tăng công lực lớn. Hàn Lập tự phối chế bằng lục dịch thôi sanh dược tài trân quý. Dùng một viên cùng Kim Tủy Hoàn, ngay đêm đó đột phá tầng thứ tư Trường Xuân công.",
      detail: "Một trong các thánh dược Hàn Lập tự luyện bằng dược tài được thôi sanh bởi lục dịch từ bình thần bí, trong thời gian Mặc đại phu vắng mặt. Quá trình phối chế thất bại nhiều lần trước khi thành công. Hàn Lập thu được hơn mười bình thánh dược các loại.",
      nguon: ["c0027", "c0028"]
    },
    {
      id: "kim-tuy-hoan",
      name: "Kim Tủy Hoàn",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Thánh dược hiếm có",
      soHuu: ["Hàn Lập (tự phối chế)"],
      trangThai: "phần còn lại đang lưu giữ",
      blurb: "Thánh dược thoát thai hoán cốt, gia tăng công lực lớn. Hàn Lập tự phối chế bằng lục dịch thôi sanh dược tài. Dùng một viên cùng Hoàng Long Đan, ngay đêm đó đột phá tầng thứ tư Trường Xuân công.",
      detail: "Một trong các thánh dược Hàn Lập tự luyện. Dùng cùng đợt với Hoàng Long Đan để đột phá bình cảnh. Phần còn lại được Hàn Lập cất giữ bí mật để tiếp tục tu luyện các tầng sau.",
      nguon: ["c0027", "c0028"]
    },
    {
      id: "thanh-linh-tan",
      name: "Thanh Linh Tán",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Thánh dược hiếm có",
      soHuu: ["Hàn Lập (tự phối chế)"],
      trangThai: "đang lưu giữ",
      blurb: "Thánh dược giải độc hiếm có thế gian, giải được trăm ngàn loại kịch độc. Hàn Lập tự phối chế bằng lục dịch thôi sanh dược tài trân quý trong thời gian Mặc đại phu vắng mặt. Dùng tại c71 để giải hỗn hợp độc Dã Lang bang cho Lý trưởng lão.",
      detail: "Một trong các thánh dược Hàn Lập tự luyện. Thuộc loại giải độc, được phối chế dự phòng vì Hàn Lập ý thức mình vẫn là 'một nửa người giang hồ', dễ gặp ân oán. Cất giữ bí mật cùng các thánh dược khác. Sau khi bị ép nuốt Thi Trùng Hoàn, Hàn Lập thử dùng Thanh Linh Tán giải độc nhưng hoàn toàn vô dụng — xác nhận Thi Trùng Hoàn không phải độc dược thông thường mà là cổ trùng bí pháp nằm ngoài phạm vi giải độc. Tại c71: Hàn Lập hòa viên đỏ (Thanh Linh Tán) vào nước ấm tạo dược dịch màu hồng đỏ, Lý thị bón cho Lý trưởng lão uống; giải được phần lớn độc nhưng không giải được độc tiềm phục sâu — và không thể dùng để giải độc trong thân Hàn Lập (kết luận tại c71). Tên thuốc không được Hàn Lập tiết lộ.",
      nguon: ["c0027", "c0032", "c0071"]
    },
    {
      id: "duong-tinh-dan",
      name: "Dưỡng Tinh Đan",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Thánh dược hiếm có",
      soHuu: ["Hàn Lập (tự phối chế)"],
      trangThai: "đang lưu giữ",
      blurb: "Linh dược trị nội ngoại thương thần kỳ. Ăn một viên không khởi tử hồi sanh nhưng giảm bớt thương thế, bảo trụ tính mạng. Hàn Lập tự phối chế để phòng thân.",
      detail: "Một trong các thánh dược Hàn Lập tự luyện; thuộc nhóm trị thương, phối chế vì Hàn Lập biết mình có thể bị cuốn vào ân oán giang hồ. Cất giữ bí mật cùng các thánh dược khác.",
      nguon: ["c0027"]
    },
    {
      id: "thi-trung-hoan",
      name: "Thi Trùng Hoàn",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Kỳ độc (thực chất không phải trùng noãn)",
      soHuu: ["Mặc đại phu (chế tạo, cài vào Hàn Lập)"],
      trangThai: "đã được giải trừ — Hàn Lập uống giải dược từ Mặc đại phu tại c44",
      blurb: "Viên hoàn màu trắng đựng trong hộp gỗ tứ giác điêu khắc tinh xảo. Mặc đại phu tuyên bố là trùng noãn điều chế bằng bí pháp. Thực chất (lộ qua di thư c62): đây là KỲ ĐỘC — phát tác sau 1-2 năm, chỉ có noãn dương bảo ngọc mới giải được. Thanh Linh Tán không giải được; 'giải dược đặc chế' Mặc đại phu giao ở c44 thực ra là noãn dương bảo ngọc đúng hẹn giao dịch di thư.",
      detail: "Mặc đại phu dùng làm đòn sát thủ kiểm soát Hàn Lập: ép hắn nuốt rồi đặt thời hạn một năm luyện Trường Xuân công đến tầng tư. Khi nói với Hàn Lập, lão mô tả là trùng noãn — sau một năm trùng nở ra ăn sạch nội tạng, chết trong ba ngày ba đêm thống khổ. Di thư sau khi lão chết (c62) tiết lộ sự thật: đây là kỳ độc, không phải trùng; phát tác trong 1-2 năm; thuốc giải duy nhất là 'noãn dương bảo ngọc' — thứ lão gửi cho vợ làm hồi môn, cũng là thứ lão hứa giao cho Hàn Lập nếu Hàn Lập tới nhà an bài thân nhân. Thanh Linh Tán không giải được, xác nhận đây là loại độc đặc biệt ngoài phổ thông.",
      nguon: ["c0031", "c0032", "c0044", "c0062"]
    },
    {
      id: "van-si-dieu",
      name: "Vân sí điểu",
      cn: null,
      category: "linh-thu",
      categoryLabel: "Linh thú / sinh vật thông linh",
      phamCap: "Sinh vật thông linh hiếm",
      soHuu: ["Mặc đại phu (nguyên chủ)", "Hàn Lập (hiện tại)"],
      trangThai: "đang theo dõi Tôn nhị cẩu theo lệnh Hàn Lập",
      blurb: "Con chim nhỏ lông màu vàng thông linh, tai mắt giám thị của Mặc đại phu. Bay nhanh hơn mũi tên bắn từ cung cứng. Mặc đại phu dùng hiệu lệnh tiếng còi dài để triệu hồi; chim ăn Hoàng Lật Hoàn làm thức ăn khoái khẩu. Có linh tính như người. Sau khi Mặc đại phu mất, chim đậu trên vai Hàn Lập; tại c120 Hàn Lập cử chim theo dõi Tôn nhị cẩu trong nhiệm vụ thâu tóm Tứ bình bang.",
      detail: "Lông màu vàng, vô danh trong giới thông thường. Không bị lừa bởi các thủ thuật dụ dỗ, bẫy rập của Hàn Lập — hắn từng thử mọi cách nhưng đều thất bại. Bay rất nhanh, linh hoạt. Ban đầu nhiệm vụ: theo dõi Hàn Lập theo lệnh Mặc đại phu. Sau khi Mặc đại phu mất, Hàn Lập giữ lại chim. Từ c98 chim đậu trên vai Hàn Lập khi rời Thất Huyền môn và tới Gia Nguyên Thành. Tại c120 Hàn Lập cử chim theo dõi Tôn nhị cẩu trong kế hoạch thâu tóm Tứ bình bang; cung cấp Hoàng Lật Hoàn làm thức ăn.",
      nguon: ["c0041", "c0042", "c0098", "c0100", "c0120"]
    },
    {
      id: "sao-trung-sao",
      name: "Đoản kiếm 'Sáo Trung Sáo' (mũi kiếm rỗng + tiêm trùy)",
      cn: null,
      category: "vu-khi",
      categoryLabel: "Vũ khí",
      phamCap: "Vũ khí cơ quan tinh xảo",
      soHuu: ["Hàn Lập"],
      trangThai: "đã dùng trong trận đấu với Mặc đại phu",
      blurb: "Cơ quan bẫy-trong-bẫy do Hàn Lập thiết kế. Bề ngoài là một mũi kiếm bình thường có chuôi; nhưng mũi kiếm rỗng ruột, bên trong giấu một tiêm trùy (dùi nhọn) sắc bén. Khi địch dùng Ma Ngân Thủ bắt khóa mũi kiếm, Hàn Lập lập tức rút phần trùy ra đâm tiếp — để lại vỏ mũi kiếm nhẹ bẫng trong tay địch.",
      detail: "Tiêm trùy dài hơn một tấc, sắc nhọn; chuôi kiếm chính là tay cầm của tiêm trùy. Mũi kiếm ngoài hoàn toàn bình thường về ngoại hình. Hàn Lập kết hợp chiêu phản quang (xoay góc mũi kiếm tạo bạch quang chói mắt làm địch tạm mù) với bẫy này — dụ địch bắt kiếm rồi đâm tiêm trùy. Trong trận với Mặc đại phu: tiêm trùy đâm trúng gáy lão nhưng lão né thoát nhờ bản năng thân thể dị thường, chỉ gây trầy da. Tiêm trùy đã được bôi Triền Hương Ti trước trận.",
      nguon: ["c0041", "c0049", "c0050"]
    },
    {
      id: "trien-huong-ti",
      name: "Triền Hương Ti",
      cn: null,
      category: "doc-duoc",
      categoryLabel: "Độc dược",
      phamCap: "Độc dược hiểm — cần nhiều dược tài và nhiều bước phối chế",
      soHuu: ["Hàn Lập (tự phối chế từ tờ phương thuốc của Mặc đại phu)"],
      trangThai: "đã dùng — bôi lên tiêm trùy, đâm trúng Mặc đại phu",
      blurb: "Độc dược Hàn Lập bôi lên tiêm trùy trước khi giao chiến với Mặc đại phu. Tên nghe thanh nhã lãng mạn, nhưng dược lực như nữ nhân si tình tương tư — khiến nạn nhân khó trụ vững, từ từ nhập cốt. Cách điều chế cần nhiều dược tài và nhiều bước; Hàn Lập tự học từ tờ phương thuốc Mặc đại phu chép ra rồi kẹp trong dược thư bỏ quên.",
      detail: "Mặc đại phu từng lấy được phương thuốc này, vì phức tạp nên chép rõ ra giấy kẹp vào sách rồi quên bẵng — không cấm chế Hàn Lập đọc y thư. Hàn Lập tình cờ phát hiện và tự phối chế. Sau khi tiêm trùy đâm trúng gáy Mặc đại phu, vết thương mang độc; dược lực phát tán chậm (từ từ nhập cốt). Mặc đại phu cả kinh khi biết vì điều này hoàn toàn nằm ngoài dự liệu của lão.",
      nguon: ["c0050"]
    },
    {
      id: "giai-duoc-thi-trung",
      name: "Giải dược Thi Trùng Hoàn (dược hoàn màu đen)",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Giải dược đặc chế bí pháp",
      soHuu: ["Mặc đại phu (chế tạo, giữ trong bình bạc)"],
      trangThai: "đã giao cho Hàn Lập uống — Thi Trùng Hoàn đã tan rã",
      blurb: "Viên đan màu đen mùi cay nồng, đựng trong bình bạc nhỏ Mặc đại phu giấu trong tay áo. Giải trừ Thi Trùng Hoàn tiềm phục trong cơ thể; sau khi uống trùng noãn biến mất hoàn toàn. Mặc đại phu giao cho Hàn Lập khi hắn trở lại đúng hẹn bốn tháng sau, dùng làm mồi nhử để Hàn Lập đồng ý cho kiểm tra công lực.",
      detail: "Chỉ Mặc đại phu mới có giải dược đặc chế này. Sau khi Hàn Lập uống, cảm thấy bao tử đau một sát na rồi qua đi; kiểm tra thân thể thấy Thi Trùng Hoàn đã biến mất hoàn toàn. Đây là bước lão dùng để tạo cảm giác thành ý lừa Hàn Lập bớt đề phòng.",
      nguon: ["c0044"]
    },
    {
      id: "day-thua-ket-nut",
      name: "Dây thừng kết nút (Luyện Cốt Nhai)",
      cn: null,
      category: "khac",
      categoryLabel: "Đạo cụ trắc thí",
      phamCap: null,
      soHuu: ["Thất Huyền môn"],
      trangThai: "cố định tại Luyện Cốt Nhai",
      blurb: "Hơn mười sợi dây thừng có kết nút, thả từ đỉnh sơn nhai xuống để thí sinh đu leo trong trắc thí nhập môn Thất Huyền môn.",
      detail: "Bố trí tại đỉnh sơn nhai Luyện Cốt Nhai; mỗi thí sinh một sợi riêng, leo lên đỉnh trước chính ngọ là điều kiện thành đệ tử chính thức.",
      nguon: ["c0004"]
    },
    {
      id: "dinh-than-phu",
      name: "Định Thần Phù",
      cn: null,
      category: "khac",
      categoryLabel: "Phù lục",
      phamCap: "Phù lục tu tiên sơ cấp",
      soHuu: ["Mặc đại phu (đã dùng → tiêu tan)"],
      trangThai: "tiêu tan — biến thành tro bụi sau khi đoạt xá thất bại",
      blurb: "Phù lục tu tiên do Dư Tử Đồng truyền cho Mặc đại phu. Dán lên gáy mục tiêu sẽ khống chế hoàn toàn thân thể người đó nhưng giữ nguyên ý thức/ngũ quan. Mặc đại phu dùng để chuẩn bị đoạt xá Hàn Lập; tự tan thành tro sau khi nghi thức thất bại. Cũng là một trong năm pháp thuật cuối bí tịch Trường Xuân công — Hàn Lập CHƯA luyện được.",
      detail: "Hình thức: phù lục nhỏ, dán lên gáy mục tiêu. Hiệu quả: mục tiêu mất hoàn toàn quyền khống chế cơ thể nhưng vẫn nghe nhìn được. Kỳ lạ: khi Hàn Lập nhìn ký hiệu trên phù, Trường Xuân công trong người tự kích động — dấu hiệu linh căn phản ứng với phù lục. Kết cục: biến thành tro bụi khi đoạt xá thất bại tại c57. Ở c67: được ghi lại trong 5 pháp thuật cuối bí tịch Trường Xuân công mà Hàn Lập giải mã — hắn luyện ba tháng nhưng chưa nhập môn được Định Thần Phù (chỉ luyện thành Hỏa Đạn Thuật và Thiên Nhãn Thuật). Tại c75: Hàn Lập tra cứu tư liệu và ngộ ra nguyên nhân thất bại — pháp phù phải dùng vật liệu đặc biệt của tu tiên giả làm chất vẽ (không phải giấy vàng + bột bạc của người phàm); bề ngoài pháp phù tự chế trông giống mẫu nhưng không thể thi triển vì thiếu vật liệu tu tiên.",
      nguon: ["c0054", "c0057", "c0067", "c0075"]
    },
    {
      id: "ngan-nhan-quy-dau-dao",
      name: "Ngân nhận / Dao cán quỷ đầu",
      cn: null,
      category: "phap-bao",
      categoryLabel: "Dụng cụ bí thuật",
      phamCap: "Chưa xác định",
      soHuu: ["Mặc đại phu → Dư Tử Đồng (truyền)"],
      trangThai: "không rõ sau khi Mặc đại phu chết",
      blurb: "Hai loại dụng cụ dùng trong bí thuật Thất Quỷ Phệ Hồn đại pháp. Ngân nhận là hộp gỗ chứa vật phẩm Mặc đại phu lấy từ Hàn Lập; bảy dao nhọn cán hình đầu quỷ cắm vào người thi thuật để dẫn quỷ vụ.",
      detail: "Ngân nhận (hộp gỗ ngân nhận): hộp dụng cụ bí thuật Mặc đại phu mang theo; dùng để chứa hộ tâm kính lấy từ Hàn Lập (dụng cụ neo linh hồn/thân phận). Bảy dao nhọn cán quỷ đầu: Mặc đại phu tự cắm vào hai vai, hai chân, bụng và ngực khi phát động Thất Quỷ Phệ Hồn đại pháp; tạo quỷ vụ xúc tu màu đen bao phủ thi thuật. Do Dư Tử Đồng truyền lại.",
      nguon: ["c0051", "c0052"]
    },
    {
      id: "huyet-linh-thao",
      name: "Huyết linh thảo",
      cn: null,
      category: "nguyen-lieu",
      categoryLabel: "Nguyên liệu tu tiên",
      phamCap: "Hiếm — dược liệu tu tiên",
      soHuu: ["Dư Tử Đồng (mua được → bị cướp)"],
      trangThai: "bị Mặc đại phu cướp (đã mất)",
      blurb: "Dược liệu tu tiên hiếm Dư Tử Đồng mua được tại dược điếm khi lang thang thế tục. Chính vì tranh chấp dược liệu này mà Dư Tử Đồng bị tu sĩ khác truy sát, rồi sa vào tay Mặc đại phu bị hạ độc giết hại.",
      detail: "Lai lịch: Dư Tử Đồng rời gia tộc tu tiên xuống thế tục, ngẫu nhiên tìm được Huyết linh thảo tại một dược điếm. Tranh chấp với một tu sĩ khác (pháp lực cao hơn một bậc) — bị truy sát, hộc máu trọng thương. Dùng Bảo mệnh phù dọa lui đối thủ, chạy thoát nhưng trọng thương, lạc vào tay Mặc đại phu. Mặc đại phu cướp dược liệu trên thi thể Dư Tử Đồng để uống vào khôi phục công lực.",
      nguon: ["c0058"]
    },
    {
      id: "hong-du-hoa",
      name: "Hồng du hoa",
      cn: null,
      category: "nguyen-lieu",
      categoryLabel: "Nguyên liệu dược thảo",
      phamCap: "Dược thảo thường",
      soHuu: ["Dược điếm thế tục"],
      trangThai: "nguyên liệu phụ",
      blurb: "Loại hoa thảo bình thường, ngoại hình rất giống Huyết linh thảo trân quý nên thường bị nhầm lẫn hoặc bày cạnh nhau.",
      detail: "Chính vì hồng du hoa giống hệt Huyết linh thảo mà một quả Huyết linh thảo hiếm bị để lẫn cạnh nó tại một dược điếm thế tục — Dư Tử Đồng tình cờ nhận ra giá trị thật, bỏ tiền mua được, từ đó dẫn tới vụ tranh chấp và chuỗi biến cố khiến hắn trọng thương rồi mất mạng dưới tay Mặc đại phu. Bản thân hồng du hoa chỉ là dược liệu phổ thông, dùng để đối chiếu nhận dạng.",
      nguon: ["c0058"]
    },
    {
      id: "bao-menh-phu",
      name: "Bảo mệnh phù",
      cn: null,
      category: "khac",
      categoryLabel: "Phù lục gia tộc",
      phamCap: "Bí pháp gia tộc tu tiên",
      soHuu: ["Dư Tử Đồng (đã dùng → tiêu hao)"],
      trangThai: "đã tiêu hao tại c58",
      blurb: "Bí pháp gia tộc tu tiên Dư Tử Đồng mang theo. Khi kích hoạt tạo ra cơ chế 'đồng quy vu tận' — nếu đối thủ tiếp tục tấn công thì cả hai cùng chết. Dùng như đòn uy hiếp cuối cùng để dọa lui tu sĩ truy sát sau vụ tranh chấp Huyết linh thảo.",
      detail: "Cơ chế: kích hoạt đồng quy vu tận — đối thủ biết nếu ra tay giết Dư Tử Đồng thì cả hai sẽ chết theo. Tu sĩ truy sát biết danh tiếng bảo mệnh phù gia tộc nên rút lui. Kết quả: Dư Tử Đồng thoát chết nhưng vẫn trọng thương, tiếp tục chạy trốn. Phù đã tiêu hao sau lần dùng đó.",
      nguon: ["c0058"]
    },
    {
      id: "dan-hon-chung",
      name: "Dẫn hồn chung",
      cn: null,
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Chưa xác định",
      soHuu: ["Mặc đại phu (trước)", "Hàn Lập (hiện tại — đã trao tạm cho Tôn nhị cẩu)"],
      trangThai: "trao tạm Tôn nhị cẩu — dùng điều khiển Khúc Hồn trong nhiệm vụ Tứ bình bang",
      blurb: "Chiếc chuông đồng nhỏ với vết máu trên thành chuông. Hàn Lập tìm thấy trong di vật Mặc đại phu. Dùng kết hợp với máu của chủ nhân để khống chế thi nhân — Hàn Lập dùng nó cùng máu của mình để thu phục Khúc Hồn. Chuông có cơ chế khóa máu: máu chủ nhân gốc ràng vào chuông, kẻ khác không thể đoạt quyền kiểm soát.",
      detail: "Chuông đồng nhỏ, trên thành có vết máu cũ. Nguyên lý: chủ nhân nhỏ máu vào chuông, rung chuông để thiết lập khế ước điều khiển thi nhân — thi nhân trở thành thuộc hạ phục tùng tuyệt đối. Hàn Lập dùng lần đầu ở c63 để khống chế Khúc Hồn bằng máu của mình. Cơ chế bảo vệ (c120): máu chủ nhân gốc ràng vào chuông làm khóa — dù trao cho Tôn nhị cẩu sử dụng, kẻ khác cũng không thể đoạt quyền kiểm soát Khúc Hồn qua chuông này. Tại c120 Hàn Lập trao chuông cho Tôn nhị cẩu để điều khiển Khúc Hồn trong kế hoạch thâu tóm Tứ bình bang.",
      nguon: ["c0063", "c0120"]
    },
    {
      id: "noan-duong-bao-ngoc",
      name: "Noãn dương bảo ngọc",
      cn: null,
      category: "phap-bao",
      categoryLabel: "Pháp bảo / Bảo vật",
      phamCap: "Dị bảo — tự hút linh khí",
      soHuu: ["Hàn Lập (nhận từ Nghiêm thị sau khi diệt Âu Dương Phi Thiên; hiện đã dùng xong)"],
      trangThai: "đã dùng — hàn độc giải trị hoàn toàn c126; bảo quản trong mộc hạp",
      blurb: "Bảo ngọc dị bảo Mặc đại phu để lại tại Mặc phủ. Là thứ duy nhất giải được âm hàn chi độc trong người Hàn Lập. Đặc tính dị bảo: tự hút linh khí xung quanh, giúp tăng tốc quá trình trị liệu. Hàn Lập áp vào đan điền hơn 15 ngày tại Thái Nam sơn, chữa lành hoàn toàn. Bảo quản trong mộc hạp.",
      detail: "Được tiết lộ trong di thư Mặc đại phu (c62): là thứ duy nhất giải được kỳ độc thi trung hoàn/âm hàn chi độc mà lão đã hạ cho Hàn Lập. Lão gửi viên ngọc cho vợ làm hồi môn; đặt giao kèo — Hàn Lập tới nhà lão bảo vệ Mặc phủ bình an, Nghiêm thị sẽ gả một thiên kim và Noãn dương bảo ngọc làm của hồi môn (c62, c104). Hàn Lập cần vật này để giải âm hàn chi độc đã ngưng kết thành hạt đậu đen trong đan điền — ước tính hai tháng nữa sẽ bộc phát nếu không giải (c104). Ngô Kiếm Minh đính ước với Mặc Ngọc Châu chính là để lấy bảo ngọc làm của hồi môn (c105, c107). Tại c117-c118: Nghiêm thị từ chối giao ngọc và đặt ngọc trong tay người tâm phúc — tuyên bố 'chỉ một ngọn gió thổi động cỏ' sẽ lập tức hủy ngọc. Đàm phán thành công: Hàn Lập diệt Âu Dương Phi Thiên (c126 hồi tưởng), Nghiêm thị giao ngọc đúng hẹn. Tại c126 xác nhận là dị bảo: tự hút linh khí, giúp Hàn Lập trị lành hàn độc trong hơn 15 ngày tại Thái Nam sơn. Bảo quản trong mộc hạp.",
      nguon: ["c0062", "c0104", "c0105", "c0107", "c0109", "c0110", "c0115", "c0116", "c0117", "c0118", "c0123", "c0126"]
    },
    {
      id: "that-doc-thuy",
      name: "Thất độc thủy",
      cn: null,
      category: "doc-duoc",
      categoryLabel: "Độc dược",
      phamCap: "Độc dược tự chế",
      soHuu: ["Hàn Lập"],
      trangThai: "đã dùng hết tại c61",
      blurb: "Độc thủy Hàn Lập tự chế, cải tiến từ ngũ độc thủy bằng cách thêm Thổ cô hoa — gây hại trực tiếp đến nguyên thần. Dùng kết liễu hoàn toàn nguyên thần Dư Tử Đồng tại c61.",
      detail: "Ngũ độc thủy là độc thủy thông thường. Hàn Lập thêm Thổ cô hoa (độc thảo gây hại nguyên thần tu tiên) vào để tạo thất độc thủy, nhằm đặc chế cho mục tiêu là nguyên thần Dư Tử Đồng. Kết hợp cùng nhuyễn kiếm để kết liễu toàn bộ nguyên thần sau trận chiến nhà đá.",
      nguon: ["c0061"]
    },
    {
      id: "tho-co-hoa",
      name: "Thổ cô hoa",
      cn: null,
      category: "doc-duoc",
      categoryLabel: "Độc thảo",
      phamCap: "Độc thảo hiếm",
      soHuu: ["Hàn Lập (đã dùng)"],
      trangThai: "đã dùng vào thất độc thủy tại c61",
      blurb: "Độc thảo đặc biệt gây hại nguyên thần của người tu tiên. Hàn Lập thêm vào ngũ độc thủy để tạo thất độc thủy — nhắm trực tiếp vào nguyên thần Dư Tử Đồng.",
      detail: "Loại độc thảo hiếm có tính đặc thù: không gây hại cơ thể phàm tục, nhưng gây hại trực tiếp đến nguyên thần của tu tiên giả. Hàn Lập dùng nó làm thành phần bổ sung vào ngũ độc thủy tạo thành thất độc thủy để đối phó với nguyên thần Dư Tử Đồng.",
      nguon: ["c0061"]
    },
    {
      id: "no-lien-chau-quan-dung",
      name: "Nỏ liên châu quân dụng",
      cn: null,
      category: "vu-khi",
      categoryLabel: "Vũ khí",
      phamCap: "Vũ khí quân sự (không phải pháp khí)",
      soHuu: ["Dã Lang bang"],
      trangThai: "đã dùng trong nhiều trận",
      blurb: "Nỏ liên châu loại dùng trong quân đội, mạnh hơn nỏ thông thường. Dã Lang bang có nguồn cung từ em họ Cổ Thiên Long là phó tướng; trong đợt tấn công Lạc Nhật Phong Cổ Thiên Long mua thêm 300 cây với giá 2 vạn lượng. Trước đó đã dùng phục kích tiêu diệt phần lớn đoàn đàm phán Thất Huyền môn tại Lạc Sa pha.",
      detail: "Loại nỏ mạnh cấp quân đội, bắn nhiều mũi tên liên tục. Dã Lang bang bố trí nhiều người cầm nỏ ẩn dưới đất trước tại Lạc Sa pha — điểm gặp gỡ 'trung lập'. Khi đoàn đàm phán Thất Huyền môn vào vị trí, đồng loạt chui lên và bắn loạn tiễn tề xạ giết phần lớn đệ tử đội đàm phán. Đây là vũ khí không phải người tu luyện bình thường tự trang bị được — có hậu thuẫn quân sự. Tại c81, Cổ Thiên Long mua thêm 300 cây từ em họ phó tướng với giá 2 vạn lượng để chuẩn bị tấn công Lạc Nhật Phong.",
      nguon: ["c0076", "c0077", "c0081"]
    },
    {
      id: "kim-sac-lenh-bai",
      name: "Kim sắc lệnh bài thiếp thân Vương môn chủ",
      cn: null,
      category: "khac",
      categoryLabel: "Tín vật quyền lực",
      phamCap: "Tín vật đặc biệt (võ lâm, không phải pháp khí tu tiên)",
      soHuu: ["Vương môn chủ (người ban)", "Tên mập thân tín (người cầm)"],
      trangThai: "đang dùng",
      blurb: "Lệnh bài màu vàng kim, tín vật thiếp thân của Vương môn chủ, được ban cho người thân tín. Có thể thay mặt Vương môn chủ điều động đệ tử dưới cấp trưởng lão. Tên mập (họ hàng Vương môn chủ) dùng lệnh bài này tước quyền chỉ huy ngoại đường đệ tử của Mã Vinh trong thời điểm Thất Huyền môn bị tấn công.",
      detail: "Lệnh bài màu vàng kim của Vương môn chủ, do tên mập họ hàng (con cô con cậu) được giao để truyền khẩu lệnh triệu Lý trưởng lão lên Lạc Nhật phong nghị sự. Khi tên mập nán lại Lý trạch và đại biến xảy ra, hắn dùng lệnh bài để tước quyền chỉ huy ngoại đường đệ tử của Mã Vinh — biến Mã Vinh thành lá chắn bảo vệ riêng mình. Lệnh bài có hiệu lực với đệ tử dưới cấp trưởng lão; tội trái thượng lệnh có thể bị phế võ công, đuổi sơn môn hoặc đao trảm.",
      nguon: ["c0079", "c0080"]
    },
    {
      id: "sinh-tu-khe",
      name: "Sinh tử khế",
      cn: null,
      category: "khac",
      categoryLabel: "Văn bản giao ước",
      phamCap: "Không áp dụng (văn kiện pháp lý võ lâm)",
      soHuu: ["Thất Huyền môn", "Dã Lang bang"],
      trangThai: "đã ký — huyết đấu đang tiến hành",
      blurb: "Tờ giấy đỏ ghi giao ước tử đấu giữa Thất Huyền môn và Dã Lang bang. Còn gọi là 'Sinh tử thư' hoặc 'văn thư tử khế'. Điều khoản: 50 người mỗi bên, bên nào mất người cuối cùng thì thua; bên thua phải rút lui hẳn không được trả thù.",
      detail: "Hình thức: tờ giấy màu đỏ, dùng để giao ước tử đấu. Hai bên ký tên bằng mực đen; mỗi bên giữ một bản. Người ký tên vào buộc phải tham gia quyết đấu — ký xong không thể rút lui. Thể lệ: hai bên ra 50 người mỗi bên hỗn chiến; ai còn người cuối cùng là thắng. Bên thua phải rời bỏ khu vực, không được trả thù trong tương lai. Tại c86-c87: Vương Tuyệt Sở và Cổ Thiên Long trao đổi văn thư; Hàn Lập và Lệ Phi Vũ được viết thêm vào thay hai đệ tử yếu.",
      nguon: ["c0085", "c0086", "c0087"]
    },
    {
      id: "kim-quang-trao",
      name: "Kim Quang Tráo",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí phòng ngự",
      phamCap: "Tu tiên sơ cấp (phù chú cấp cao hơn Định Thần Phù)",
      soHuu: ["Chu Nho (Kim Quang thượng nhân)"],
      trangThai: "đang dùng",
      blurb: "Lớp hào quang vàng bọc thân người dùng như khôi giáp kim cương, sinh ra từ lá bùa kim quang Chu Nho đập vào thân. Vô hiệu hóa đao kiếm thông thường; điểm yếu là lực vật lý cực mạnh liên tục có thể làm biến hình.",
      detail: "Nguyên liệu kích hoạt: lá bùa màu vàng kim quang lấp lánh, mặt phủ đầy họa phù màu vàng — loại phù chú Hàn Lập nhận định cao hơn Định Thần Phù một bậc. Niệm chú xong đập bùa vào thân, ánh sáng vàng chói lòa tạo Kim Quang Tráo bao thân. Công năng: cứng như sắt thép, đao chém bật ra, hộ pháp lực lưỡng tay đau hổ khẩu; bảo vệ 'mưa gió không lọt'. Điểm yếu: lực vật lý cực lớn liên tục (quyền cước cao thủ hóa cảnh) có thể làm màn hào quang lõm phình biến hình và mất ổn định, khiến người dùng mất thăng bằng và không thể niệm pháp quyết bình tĩnh.",
      nguon: ["c0088", "c0089", "c0090"]
    },
    {
      id: "hop-go-den-chu-nho",
      name: "Hộp gỗ đen dán bùa phong ấn",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí bí ẩn",
      phamCap: "Tu tiên (cấp chưa xác định)",
      soHuu: ["Chu Nho (Kim Quang thượng nhân)"],
      trangThai: "đã dùng",
      blurb: "Hộp gỗ dài màu đen, dán bùa phong ấn, cất trong áo Chu Nho. Chứa một luồng sáng mờ điều khiển bằng khẩu quyết và thủ thế giống Khu vật thuật của Hàn Lập. Luồng sáng bay nhanh như điện, chém cụt tay và xuyên thủng ngực người — nhưng có phải phi kiếm thật hay không nguyên tác không xác nhận.",
      detail: "Hình dạng: hộp gỗ dài màu đen, có dán bùa phong ấn; Chu Nho cất trong áo, đặt lên đùi khi kích hoạt. Cách dùng: niệm chú bắt quyết hô 'Khởi'; luồng sáng mờ mờ bay ra từ hộp, lượn vài vòng rồi phóng theo điều khiển ngón tay. Hiệu lực: chém cụt tay phải hán tử mà nạn nhân không cảm thấy gì, sau đó quay ngược đâm xuyên ngực. Có thể điều khiển lượn vẽ hình mãng xà xám trên không thị uy. Người chứng kiến đều gọi là 'phi kiếm' theo truyền thuyết kiếm tiên, nhưng nguyên tác để ngỏ — Hàn Lập cũng không biết luồng sáng có thật là phi kiếm hay không. Khẩu quyết và thủ thế Chu Nho dùng để điều khiển giống hệt Khu vật thuật của Hàn Lập.",
      nguon: ["c0089", "c0090"]
    },
    {
      id: "kiem-phu",
      name: "Kiếm phù / Kim Quang Chuyên phù bảo",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Phù bảo tu tiên",
      phamCap: "Phù bảo — Kết Đan kỳ luyện chế",
      soHuu: ["Hàn Lập (đoạt từ Chu Nho @c0091–c0092; xác định thêm là Kim Quang Chuyên phù bảo @c0164–c0165)"],
      trangThai: "hóa tro hoàn toàn @c0170 — hỏng không thể dùng",
      blurb: "Đạo phù lục vẽ tiểu kiếm xám — ban đầu Hàn Lập đoạt từ Chu Nho, sau đó xác định đây cùng loại với Kim Quang Chuyên phù bảo mua ở Vạn Bảo Lâu (hoặc chính là phù bảo Vạn Bảo Lâu dùng trong trận). Kích hoạt hóa cự kiếm xám 2–3 trượng, uy lực khổng lồ. Dùng thực chiến c143 và c167–c169, chém đôi Lục sư huynh. Hóa tro hoàn toàn sau trận c170 — hết tuổi thọ.",
      detail: "Hình dạng khi thu hồi: phù lục vẽ thanh tiểu kiếm màu xám, khắc sống động, tự tản lưu quang nhàn nhạt và toả hàn khí. Ba hạn chế: (1) tiêu hao pháp lực khổng lồ, chỉ dùng ~một khắc; (2) hiệu quả tốt nhất trong 20 trượng; (3) số lần/tuổi thọ hữu hạn. Tại c143: xẻ 18 quang cầu đen, giết hai kẻ phục kích. Tại c167–c169: hóa cự kiếm xám dài 2–3 trượng, chặn Thanh giao của Lục sư huynh, cuối cùng chém bửa Lục sư huynh làm đôi. Tại c170: hóa tro hoàn toàn — hỏng hẳn, không còn sử dụng được.",
      nguon: ["c0091", "c0092", "c0093", "c0094", "c0095", "c0096", "c0143", "c0164", "c0165", "c0167", "c0168", "c0169", "c0170"]
    },
    {
      id: "thang-tien-lenh-bai",
      name: "Thăng Tiên Lệnh",
      cn: null,
      category: "khac",
      categoryLabel: "Lệnh bài / Tín vật môn phái",
      phamCap: "Không rõ — lệnh bài bảo chứng của Hoàng Phong Cốc",
      soHuu: ["Tần gia (nguyên chủ)", "Chu Nho (kẻ cuối cùng cầm lệnh trong Tần gia)", "Hàn Lập (đoạt từ Chu Nho @c0093, nộp cho Hoàng Phong Cốc @c0144–c0145)"],
      trangThai: "đã nộp cho Hoàng Phong Cốc @c0144–c0145",
      blurb: "Lệnh bài bảo chứng của Hoàng Phong Cốc, trao cho thế gia Tần gia ở Tần Diệp lĩnh từ hàng trăm năm trước. Người cầm lệnh có quyền vào Hoàng Phong Cốc xin được cấp Trúc Cơ đan, bất kể tư chất. Chu Nho — nam đinh cuối cùng Tần gia còn sống — từng bỏ trốn khỏi Diệp gia cùng lệnh này; Hàn Lập đoạt sau khi trừ Chu Nho, nộp lại cho môn phái khi nhập cốc.",
      detail: "Hoàng Phong Cốc cấp lệnh bài cho Tần gia từ hàng trăm năm trước. Điều kiện đổi lệnh: môn phái cam kết trao Trúc Cơ đan cho người cầm lệnh. Chu Nho — thực ra không phải Tần gia mà là người họ Chu, nam đinh duy nhất còn sống của Tần gia — chạy khỏi Diệp gia mang theo lệnh. Hàn Lập giết Chu Nho lấy lệnh (c093), dùng Tàn Phiến che giấu (c141), nộp cho đại biểu Hoàng Phong Cốc tại Thăng Tiên đại hội (c144–145) để đổi quyền được nhận Trúc Cơ đan.",
      nguon: ["c0093", "c0141", "c0144", "c0145"]
    },
    {
      id: "tan-thi-toc-pho",
      name: "Tần thị tộc phổ",
      cn: null,
      category: "khac",
      categoryLabel: "Tài liệu",
      phamCap: "Thường",
      soHuu: ["Hàn Lập (đoạt từ Chu Nho @c0093)"],
      trangThai: "đang giữ",
      blurb: "Gia phả họ Tần của Chu Nho (Tần Diệp Lĩnh). Thu từ tro tàn Chu Nho sau khi Hàn Lập kết liễu hắn tại tử đấu trường. Là manh mối về thân thế thật của Chu Nho và gia tộc Diệp gia.",
      detail: "Gia phả (tộc phổ) của dòng họ Tần — họ thật của Chu Nho là Tần Diệp Lĩnh. Thu được từ đống tro tàn sau khi Hàn Lập dùng Hỏa Đạn Thuật kết liễu Chu Nho. Nội dung cụ thể chưa được mở ra trong nguyên tác.",
      nguon: ["c0093"]
    },
    {
      id: "hu-tam-hoan",
      name: "Hủ tâm hoàn",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược — độc hoàn",
      phamCap: "Bí dược độc môn",
      soHuu: ["Hàn Lập (phối chế)"],
      trangThai: "đang dùng — tiềm phục trong người Tôn nhị cẩu",
      blurb: "Dược hoàn màu trắng to bằng long nhãn — 'độc môn bí dược' của Hàn Lập dùng để khống chế thủ hạ. Người nuốt vào phải dùng giải dược của Hàn Lập mỗi tháng một lần; nếu không, lục phủ ngũ tạng sẽ nát nhừ và chết. Được dùng để thu phục Tôn nhị cẩu tại Gia Nguyên Thành.",
      detail: "Hình dạng: dược hoàn màu trắng to bằng quả long nhãn, đựng trong bình sứ nhỏ cất trong ngực Hàn Lập. Cơ chế: sau khi nuốt, tiềm phục trong cơ thể; cần uống giải dược của Hàn Lập định kỳ mỗi tháng một lần. Nếu bỏ lỡ: lục phủ ngũ tạng nát nhừ, chết thống khổ. Hàn Lập dùng làm đòn bẩy khống chế lòng trung thành, kết hợp với lời hứa 'giải độc + trả tự do sau khi xong việc' để thu phục Tôn nhị cẩu.",
      nguon: ["c0103", "c0104", "c0105"]
    },
    {
      id: "van-long-gioi",
      name: "Văn long giới (cặp nhẫn)",
      cn: null,
      category: "khac",
      categoryLabel: "Tín vật",
      phamCap: "Phàm nhân — tín vật đặc chế",
      soHuu: ["Mặc đại phu (nguyên chủ)", "Hàn Lập (giữ một chiếc — đã trao)", "Nghiêm thị (giữ một chiếc — đang đeo)"],
      trangThai: "hai chiếc đang ở Mặc phủ (Hàn Lập đã trao chiếc của mình cho Nghiêm thị tại c109)",
      blurb: "Cặp nhẫn khắc hoa văn hình rồng (long văn giới chỉ) — tín vật của Mặc đại phu để lại. Hai chiếc khớp lại hoàn mỹ không kẽ hở, hoa văn rồng liền mạch. Hàn Lập dùng để xác nhận thân phận khi ra mặt tại Mặc phủ — Nghiêm thị xác minh ngay vì bà đang đeo chiếc còn lại.",
      detail: "Cặp nhẫn chạm khắc hoa văn rồng; khi ghép hai chiếc lại, hoa văn liền mạch hoàn hảo không kẽ hở — phương thức xác nhận tín vật độc đáo. Mặc đại phu trao chiếc thứ nhất cho Hàn Lập qua di thư làm bằng chứng thân phận đệ tử. Nghiêm thị đang đeo chiếc thứ hai trên tay. Tại c109, Hàn Lập ném chiếc nhẫn vào phòng Nghiêm thị; bà nhận ra tín vật, khớp lại xác nhận.",
      nguon: ["c0109"]
    },
    {
      id: "truc-co-dan",
      name: "Trúc Cơ đan",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược — tu tiên",
      phamCap: "Tu tiên (cực hiếm) — Hoàng Phong Cốc có trữ lượng giới hạn",
      soHuu: ["Lão Tam (đã dùng @c106)", "Hoàng Phong Cốc (trữ hữu; phân cho đệ tử có tư cách @c144–c147)", "Hàn Lập (được cấp một viên qua Thăng Tiên Lệnh, tự nguyện nhường cho Diệp Tính @c146–c147; thu được 2 viên thật từ Lục sư huynh @c170)"],
      trangThai: "lưu thông trong giới tu tiên; Hoàng Phong Cốc cấp theo ưu tiên; Hàn Lập hiện giữ 2 viên thật",
      blurb: "Đan dược tu tiên cực hiếm, hỗ trợ người tu luyện đột phá qua ngưỡng mười tầng công pháp cơ sở tiến vào Trúc Cơ kỳ. Hoàng Phong Cốc trữ hữu số lượng hạn chế, chỉ cấp cho đệ tử có tư cách (Thăng Tiên Lệnh, dị linh căn, hoặc hậu nhân Hồng Phất). Hàn Lập ban đầu nhường viên của mình cho Diệp Tính; về sau thu được 2 viên thật từ túi Lục sư huynh tại c170.",
      detail: "Được người áo lam (Lão Tam) đề cập tại Gia Nguyên Thành: nhờ uống Trúc Cơ đan mà luyện thành mười tầng (c106). Hoàng Phong Cốc: phân chia theo thứ tự ưu tiên (người cầm Thăng Tiên Lệnh > dị linh căn > hậu nhân Hồng Phất sư thúc tổ; c144). Hàn Lập tư chất ngụy linh căn ~1% thành công, Diệp lão giả thuyết phục nhường đan đổi vật hữu dụng; giao dịch chốt tại c146, chính thức hoàn tất tại c147. Tại c166: Lục sư huynh phát hiện hộp gỗ đỏ trong đồ Trần sư muội chứa bình xanh đựng 2 viên Trúc Cơ đan thật. Tại c170: Hàn Lập thu bình xanh này từ túi Lục sư huynh sau khi hắn chết — lần đầu Hàn Lập thực sự sở hữu Trúc Cơ đan.",
      nguon: ["c0106", "c0144", "c0145", "c0146", "c0147", "c0166", "c0170"]
    },
    {
      id: "oanh-huong-hoan",
      name: "Oanh Hương Hoàn",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Đan dược Thất Huyền môn (phàm nhân cấp)",
      soHuu: ["Hàn Lập (tự điều chế tại Thất Huyền môn)", "Mặc Thải Hoàn (nhận @c0113)"],
      trangThai: "đã trao cho Mặc Thải Hoàn",
      blurb: "Đan hoàn đỏ tươi, mùi thơm ngát. Ban đầu điều chế cho Lệ Phi Vũ tại Thất Huyền môn. Không có công dụng tu luyện; chỉ xua đuổi côn trùng và tỏa hương thơm mê người xung quanh. Hàn Lập tặng Mặc Thải Hoàn khi nàng đòi 7-8 nghìn lượng đan dược phí; nàng ngờ đây là xuân dược.",
      detail: "Viên hoàn màu đỏ tươi, thơm ngát — tên phù hợp mùi hương nồng nàn. Được điều chế tại Thất Huyền môn dùng cho Lệ Phi Vũ theo mục đích ban đầu. Công năng: không ảnh hưởng tu luyện; xua đuổi côn trùng bằng mùi; hương thơm tỏa ra khiến người xung quanh say mê. Hàn Lập tặng để đáp lại yêu cầu tiền của Mặc Thải Hoàn. Nàng nhận được nhưng nghi ngờ là xuân dược — chưa xác định trong chương 113.",
      nguon: ["c0113"]
    },
    {
      id: "hoang-lat-hoan",
      name: "Hoàng Lật Hoàn",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược — thức ăn linh thú",
      phamCap: "Đan hoàn dành cho linh thú",
      soHuu: ["Hàn Lập"],
      trangThai: "đang dùng cho Vân sí điểu",
      blurb: "Đan hoàn dùng làm thức ăn khoái khẩu cho Vân sí điểu. Hàn Lập dùng để nuôi chim khi giao Vân sí điểu cho Tôn nhị cẩu thực hiện nhiệm vụ theo dõi.",
      detail: "Được nhắc tới trong c120: Hàn Lập cung cấp Hoàng Lật Hoàn cùng với Vân sí điểu khi giao nhiệm vụ cho Tôn nhị cẩu. Trước đây (c41-42) cũng từng nhắc đây là thức ăn khoái khẩu của Vân sí điểu do Mặc đại phu dùng để triệu hồi chim.",
      nguon: ["c0041", "c0120"]
    },
    {
      id: "tieu-hon-tan",
      name: "Tiêu Hồn Tán",
      cn: null,
      category: "doc-duoc",
      categoryLabel: "Độc dược",
      phamCap: "Cực độc — một giọt cũng đủ giết người",
      soHuu: ["Hàn Lập"],
      trangThai: "đã dùng tại c122",
      blurb: "Độc dược cực mạnh Hàn Lập dùng để diệt Trầm Trọng Sơn và tam đại hộ pháp tại Tiêu Tương Viện. Chỉ một giọt cũng đủ gây chết người. Trộn vào rượu, toàn bộ người uống (bao gồm cả các kỹ nữ) đều tử vong. Hàn Lập uống Thanh Linh Tán giải độc trước để miễn nhiễm.",
      detail: "Hàn Lập trộn Tiêu Hồn Tán vào rượu trước khi đến Tiêu Tương Viện. Bản thân uống Thanh Linh Tán giải độc trước. Nạn nhân: Trầm Trọng Sơn (bang chủ Tứ bình bang), Tiễn Tiến, Phạm Tự, Trầm Tam (tam đại hộ pháp), Kim Chi và ba kỹ nữ khác — tất cả tử vong. Độc tính cực mạnh: một giọt đã đủ giết chết.",
      nguon: ["c0122"]
    },
    {
      id: "giai-doc-dan",
      name: "Giải độc đan",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Đan dược giải độc",
      soHuu: ["Hàn Lập (đã tặng Tôn nhị cẩu)"],
      trangThai: "đã tặng — Hủ tâm hoàn giải trừ vĩnh viễn",
      blurb: "Đan dược Hàn Lập tặng Tôn nhị cẩu tại c125 để giải trừ vĩnh viễn Hủ tâm hoàn còn tiềm phục trong người. Sau khi uống, Tôn nhị cẩu hoàn toàn thoát khỏi sự khống chế bằng độc.",
      detail: "Hàn Lập trao giải độc đan cho Tôn nhị cẩu trước khi rời Gia Nguyên Thành (c125). Đây là cách thực hiện triết lý 'ân-uy cùng ban' — ban ân để lòng trung thành bền vững hơn chỉ dùng uy hiếp. Sau khi uống đan, Tôn nhị cẩu hoàn toàn tự do khỏi Hủ tâm hoàn.",
      nguon: ["c0125"]
    },
    {
      id: "truong-thong-am-phu",
      name: "Trương thông âm phù",
      cn: null,
      category: "phu-luc",
      categoryLabel: "Phù lục",
      phamCap: "Sơ cấp phù lục",
      soHuu: ["Vạn Tiểu Sơn (người dùng)"],
      trangThai: "đã dùng tại c128",
      blurb: "Lá bùa Vạn Tiểu Sơn dùng để liên lạc với người bên trong Thái Nam cốc, báo hiệu xin mở trận pháp cho vào. Kích hoạt hóa thành hỏa quang bay vào màn sương mù; người trong cốc nhận được sẽ mở đường.",
      detail: "Vạn Tiểu Sơn lấy từ người ra, hoa vài cái, niệm chú rồi ném lên không — lá phù hóa một đạo hỏa quang bay vào sương mù biến mất. Đây là phương thức thông báo tiêu chuẩn để vào Thái Nam cốc qua trận pháp phong tỏa.",
      nguon: ["c0128"]
    },
    {
      id: "dao-phu-tieu-lau",
      name: "Đạo phù chìa khóa tiểu lâu",
      cn: null,
      category: "phu-luc",
      categoryLabel: "Phù lục",
      phamCap: "Phù lục chức năng",
      soHuu: ["Hàn Lập (nhận từ Tùng Văn)"],
      trangThai: "đang giữ",
      blurb: "Đạo phù Tùng Văn đạo sĩ trao cho Hàn Lập tại Thái Nam tiểu hội — dùng như chìa khóa vào tiểu lâu nơi nhóm của Tùng Văn trú ngụ. Hàn Lập nhận phù nhưng từ chối vào nhóm.",
      detail: "Tùng Văn đạo sĩ trao phù cho Hàn Lập như lời mời chính thức gia nhập nhóm tán tu. Hàn Lập nhận phù nhưng lựa chọn tự mình dạo chợ một mình thay vì cùng nhóm.",
      nguon: ["c0130"]
    },
    {
      id: "khong-bach-phu-chi",
      name: "Không bạch phù chỉ",
      cn: null,
      category: "linh-phu",
      categoryLabel: "Linh phù",
      phamCap: "Sơ cấp bậc thấp — nền phù lục",
      soHuu: ["Hàn Lập"],
      trangThai: "đang giữ",
      blurb: "Phù trắng sơ cấp bậc thấp dùng làm nền vẽ linh phù. Nguyên liệu cơ bản nhất để luyện chế phù lục — không có Không bạch phù chỉ thì không thể họa phù. Giá một khối linh thạch bậc thấp tại Thái Nam hội.",
      detail: "Hàn Lập đổi được một lá Không bạch phù chỉ cùng Phi hành phù và quyển Cơ sở chú quyết tàn bổn từ thanh niên bán phù c132. Hàn Lập dùng để thử chế Định thần phù c138 nhưng thất bại 12 lần liên tiếp.",
      nguon: ["c0131", "c0132", "c0138"]
    },
    {
      id: "phi-hanh-phu",
      name: "Phi hành phù",
      cn: null,
      category: "linh-phu",
      categoryLabel: "Linh phù",
      phamCap: "Sơ cấp bậc cao — thuộc tính phong",
      soHuu: ["Hàn Lập (đổi được từ c132, dùng đổi Tàn Phiến c140)"],
      trangThai: "đã dùng — đổi lấy Tàn Phiến",
      blurb: "Linh phù phi hành sơ cấp bậc cao, thuộc tính phong. Gặp nguy có thể bay lên không đi xa hơn chim, như thêm một mạng sống. Dùng được nhiều lần cho đến khi linh khí tiêu tan. Hiếm hàng — cả Thái Nam hội chỉ xuất hiện năm sáu cái, giá kinh người.",
      detail: "Hàn Lập đổi được từ một thanh niên tu tiên đang giậm chân tầng thứ chín bằng đan dược tinh tiến pháp lực (ba bình thêm tàn bổn chú quyết và một lá Không bạch phù chỉ). Sau đó Hàn Lập dùng chính tờ phù này đổi lấy pháp bảo Tàn Phiến từ hán tử da đen tại Thái Nam hội c140.",
      nguon: ["c0131", "c0132", "c0140"]
    },
    {
      id: "kim-truc-but",
      name: "Kim Trúc bút",
      cn: null,
      category: "di-bao",
      categoryLabel: "Dị bảo",
      phamCap: "Dị bảo chuyên dùng chế phù — do Trúc cơ kỳ tu sĩ tế luyện",
      soHuu: ["Hàn Lập"],
      trangThai: "đang giữ",
      blurb: "Bút lông màu vàng rực dùng họa phù, do tu sĩ Trúc cơ kỳ tế luyện ba ngày ba đêm. Ngòi bút bằng lông yêu thú cấp hai Kim Tình Viên, thân bút bằng hỗn hợp kim tinh và ô thiết. Giúp rót linh lực vào bút rất thuận lợi, tăng tỉ lệ thành công và uy lực phù lục.",
      detail: "Di vật của tộc một thiếu nữ bán hàng tại Thái Nam hội. Tộc nàng từng có cao thủ chế phù nhưng hai huynh muội không có thiên phú. Huynh trưởng muốn dự Thăng tiên đại hội cần đột phá nên đổi bút lấy đan dược tinh tiến pháp lực của Hàn Lập (ba bình Hoàng long đan và bốn bình Kim tủy hoàn cùng mầm thất tinh thảo).",
      nguon: ["c0137", "c0138"]
    },
    {
      id: "tan-phien",
      name: "Tàn Phiến",
      cn: null,
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Pháp bảo (mảnh tàn) — do Kết Đan kỳ hoặc Nguyên Anh kỳ tu sĩ luyện chế",
      soHuu: ["Hàn Lập (đổi từ hán tử da đen @c140, xác nhận công hiệu @c141)"],
      trangThai: "đang dùng — phủ che bình thần bí tại Bách Dược Viên",
      blurb: "Mảnh tàn của pháp bảo, hình như tấm vải trong suốt đầy nếp nhăn, viền xung quanh rách nát, mặt trên thỉnh thoảng lóe ánh sáng trắng. Bao quanh vật thể sẽ ẩn hình hoàn toàn, một tia linh khí cũng không tiết ra ngoài và không để linh khí ngoài thâm nhập vào — Thiên Nhãn Thuật cũng không phá được.",
      detail: "Do tu sĩ Kết Đan kỳ hoặc Nguyên Anh kỳ luyện chế; chỉ tu sĩ ngang cấp mới xem hoặc phá được công hiệu ẩn giấu. Hán tử da đen tầng mười rao bán tại Thái Nam hội đòi ba mươi khối linh thạch nhưng không tìm được người trả. Hàn Lập dùng một tờ Phi hành phù (linh phù sơ cấp bậc cao, hiếm hàng) để đổi. Tại c141, xác nhận công hiệu hút linh khí đặc biệt và ẩn giấu vật bên trong. Từ c151: phủ lên trên bình thần bí đã chôn ở góc Bách Dược Viên — che giấu dấu hiệu thu nạp linh khí bất thường của bình, giúp linh khí khu vực chỉ đậm hơn chút ít, không gây nghi ngờ.",
      nguon: ["c0139", "c0140", "c0141", "c0151"]
    },
    {
      id: "linh-thach",
      name: "Linh thạch",
      cn: null,
      category: "linh-thach",
      categoryLabel: "Linh thạch",
      phamCap: "Bốn bậc: thấp / trung / cao / siêu; phân theo ngũ hành (kim/mộc/thủy/thổ/hỏa) và hiếm hơn là phong/lôi",
      soHuu: ["Tu tiên giới (tiền tệ thông dụng)"],
      trangThai: "lưu thông",
      blurb: "Đá tràn ngập thiên địa linh khí, tiền tệ thông dụng nhất của người tu tiên. Dùng luyện công giúp tốc độ tu luyện kinh người; bố trí trận pháp và bổ sung pháp lực khi thi triển pháp thuật; dùng như 'máu truyền' trong chiến đấu khi pháp lực hao tổn. Ngày càng khan hiếm do khai thác quá độ.",
      detail: "Phân bốn bậc: thấp (đơn vị giao dịch cơ bản — một tờ Không bạch phù chỉ giá một khối thấp, một tờ Phi thiên phù giá ba mươi khối thấp), trung, cao, siêu. Thuộc tính ngũ hành (kim/mộc/thủy/thổ/hỏa); hiếm nhất là phong linh thạch và lôi linh thạch.",
      nguon: ["c0131"]
    },
    {
      id: "that-tinh-thao",
      name: "Thất tinh thảo",
      cn: null,
      category: "linh-thao",
      categoryLabel: "Linh thảo",
      phamCap: "Linh thảo — nguyên liệu chế tác bùa chú",
      soHuu: ["Hàn Lập (mầm, đổi từ thiếu nữ c137)"],
      trangThai: "đang trồng/lưu giữ (mầm — chưa trưởng thành)",
      blurb: "Linh thảo quý hiếm dùng làm nguyên liệu chế tác bùa chú. Khi trưởng thành sẽ là nguyên liệu tốt nhất để chế tác phù lục. Hàn Lập có được túi mầm thất tinh thảo — mười năm nữa mới thành.",
      detail: "Hàn Lập đổi được túi xám buộc dây đỏ chứa mầm thất tinh thảo từ thiếu nữ bán hàng tại Thái Nam hội c137. Mầm mười năm nữa mới trưởng thành thành nguyên liệu tốt nhất để chế tác bùa chú.",
      nguon: ["c0137", "c0138"]
    },
    {
      id: "thanh-khe-but-luc",
      name: "Thanh Khê bút lục",
      cn: null,
      category: "khac",
      categoryLabel: "Điển tịch / Tạp ký",
      phamCap: "Chưa rõ — sách thường hoặc bút ký tu tiên",
      soHuu: ["Thanh niên mặt tròn (gốc)", "Hàn Lập (nhận c141)"],
      trangThai: "đang giữ (Hàn Lập)",
      blurb: "Quyển bút lục của nơi gọi là Thanh Khê, do một thanh niên mặt tròn chủ động đưa cho Hàn Lập tại Thái Nam hội. Nội dung ghi chép tạp ký, bao gồm thông tin về địa danh và sự vật liên quan mà thanh niên muốn chia sẻ.",
      detail: "Thanh niên mặt tròn tại Thái Nam hội (c141) chủ động đưa quyển bút lục này cho Hàn Lập. Nội dung chưa được nguyên tác khai thác chi tiết trong đợt này.",
      nguon: ["c0141"]
    },
    {
      id: "hop-khi-dan",
      name: "Hợp Khí đan",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược — tu tiên",
      phamCap: "Tu tiên (hiếm) — hỗ trợ đệ tử Luyện Khí kỳ cao tầng chuẩn bị Trúc Cơ",
      soHuu: ["Diệp Tính lão giả (dự định luyện @c150)"],
      trangThai: "chưa luyện chế — Diệp Tính lên kế hoạch luyện",
      blurb: "Đan dược tu tiên hỗ trợ đệ tử Luyện Khí kỳ cao tầng hợp nhất khí mạch, chuẩn bị cho bước đột phá Trúc Cơ. Diệp Tính lão giả dự định luyện một lô để hỗ trợ cháu mình sắp Trúc Cơ. Dùng đây làm cớ hối ước Hàn Lập, đồng thời hứa chia nửa cho Ngô Tính đổi lấy sự ủng hộ nghị sự tông môn.",
      detail: "Nhắc tới tại c150: Diệp Tính lấy cớ 'gần đây muốn luyện một lô Hợp Khí Đan nên thiếu thốn' để hoãn giao vật phẩm bồi thường Hàn Lập. Thực chất dùng để hỗ trợ cháu mình sắp đột phá Trúc Cơ. Thỏa thuận ngầm: khi xuất lò sẽ chia nửa cho Ngô Tính để đổi lấy sự khống chế nghị sự.",
      nguon: ["c0150"]
    },
    {
      id: "hoang-ti-sam",
      name: "Hoàng ti sam",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — pháp y",
      phamCap: "Tu tiên — pháp y cấp phát đệ tử mới",
      soHuu: ["Hàn Lập (nhận từ Lâm sư đệ @c148)"],
      trangThai: "đang mặc",
      blurb: "Áo tơ vàng — pháp y tiêu chuẩn cấp phát cho đệ tử mới Hoàng Phong Cốc. Nhận từ Lâm sư đệ (Hôi Y Lão Giả) tại c148.",
      detail: "Vật phẩm tiêu chuẩn cấp phát đệ tử mới Hoàng Phong Cốc. Lâm sư đệ lấy từ trong phòng trao cho Hàn Lập cùng với các vật phẩm khác tại c148.",
      nguon: ["c0148"]
    },
    {
      id: "thanh-diep-phap-khi",
      name: "Thanh Diệp pháp khí",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — phi hành",
      phamCap: "Tu tiên — pháp khí phi hành cấp phát đệ tử mới",
      soHuu: ["Hàn Lập (nhận từ Lâm sư đệ @c148)"],
      trangThai: "đang sử dụng",
      blurb: "Pháp khí hình lá xanh dùng phi hành. Cấp phát đệ tử mới Hoàng Phong Cốc. Dễ điều khiển nhưng tốc độ chậm — chỉ nhanh hơn tuấn mã thường một chút vì môn phái đông đệ tử. Hàn Lập lần đầu tập bay bằng pháp khí này tại c149.",
      detail: "Nhận từ Lâm sư đệ tại c148. Tại c149, Hàn Lập lấy ra từ túi trữ vật tập bay: ban đầu chao đảo lúc cao lúc thấp, sau quen tay thì bay tiêu sái như Vương sư thúc. Tốc độ chậm do quy định môn phái (đông đệ tử, tránh va chạm). Phi hành trong cốc chỉ nhanh hơn tuấn mã thường một chút.",
      nguon: ["c0148", "c0149"]
    },
    {
      id: "liet-duong-kiem",
      name: "Liệt Dương kiếm",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — kiếm",
      phamCap: "Tu tiên — pháp khí chiến đấu cấp phát đệ tử mới",
      soHuu: ["Hàn Lập (nhận từ Lâm sư đệ @c148)"],
      trangThai: "đang giữ",
      blurb: "Kiếm pháp khí cấp phát cho đệ tử mới Hoàng Phong Cốc. Nhận từ Lâm sư đệ tại c148. Chi tiết công năng chưa được nguyên tác mô tả cụ thể trong đợt này.",
      detail: "Một trong bộ vật phẩm tiêu chuẩn cấp phát đệ tử mới Hoàng Phong Cốc: Hoàng ti sam, Thanh Diệp pháp khí, Liệt Dương kiếm, Lãnh Nguyệt đao, Thập Bội Trữ Vật, bộ công cụ tinh luyện. Nhận từ Lâm sư đệ tại c148.",
      nguon: ["c0148"]
    },
    {
      id: "lanh-nguyet-dao",
      name: "Lãnh Nguyệt đao",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — đao",
      phamCap: "Tu tiên — pháp khí chiến đấu cấp phát đệ tử mới",
      soHuu: ["Hàn Lập (nhận từ Lâm sư đệ @c148)"],
      trangThai: "đang giữ",
      blurb: "Đao pháp khí cấp phát cho đệ tử mới Hoàng Phong Cốc. Nhận từ Lâm sư đệ tại c148. Chi tiết công năng chưa được nguyên tác mô tả cụ thể trong đợt này.",
      detail: "Một trong bộ vật phẩm tiêu chuẩn cấp phát đệ tử mới Hoàng Phong Cốc: Hoàng ti sam, Thanh Diệp pháp khí, Liệt Dương kiếm, Lãnh Nguyệt đao, Thập Bội Trữ Vật, bộ công cụ tinh luyện. Nhận từ Lâm sư đệ tại c148.",
      nguon: ["c0148"]
    },
    {
      id: "thap-boi-tru-vat",
      name: "Thập Bội Trữ Vật",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — trữ vật",
      phamCap: "Tu tiên — túi trữ vật cấp phát đệ tử mới",
      soHuu: ["Hàn Lập (nhận từ Lâm sư đệ @c148)"],
      trangThai: "đang sử dụng",
      blurb: "Túi trữ vật pháp khí tu tiên, dung tích gấp mười lần thể tích ngoài. Cấp phát đệ tử mới Hoàng Phong Cốc. Ba điều kiêng kỵ: không bỏ vật còn linh lực vào; không đặt hai túi trữ vật lồng nhau; không cho người khác dùng khi chưa xóa thần thức.",
      detail: "Nhận từ Lâm sư đệ tại c148. Vương sư thúc dạy ba điều kiêng kỵ: (1) vật còn linh lực (pháp khí đang kích hoạt) không bỏ vào — có thể làm hỏng túi; (2) không đặt hai túi trữ vật lồng vào nhau; (3) chưa xóa thần thức của người cũ thì người mới không dùng được. Hàn Lập đã có kinh nghiệm dùng túi trữ vật từ trước (đoạt từ tu sĩ), nhưng đây là túi chính thức được cấp.",
      nguon: ["c0148"]
    },
    {
      id: "moc-bai-moc-xanh",
      name: "Mộc bài mộc xanh (lệnh bài Bách Dược Viên)",
      cn: null,
      category: "khac",
      categoryLabel: "Lệnh bài cấm chế",
      phamCap: "Pháp khí thông thường",
      soHuu: ["Hàn Lập (nhận từ Mã sư bá @c151)"],
      trangThai: "đang giữ",
      blurb: "Khối mộc bài màu xanh biếc — lệnh bài điều khiển cấm chế ra vào Bách Dược Viên. Mã sư bá giao cho Hàn Lập khi bàn giao quyền quản lý dược viên.",
      detail: "Nhận từ Mã sư bá tại c151 sau khi Hàn Lập thể hiện kiến thức dược lý và được giao quyền quản lý Bách Dược Viên. Dùng để mở/kiểm soát cấm chế bảo vệ xung quanh dược viên.",
      nguon: ["c0151"]
    },
    {
      id: "hoang-dong-binh",
      name: "Hoàng Đồng bình",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — trữ vật",
      phamCap: "Pháp khí Trúc Cơ kỳ luyện chế",
      soHuu: ["Hàn Lập (nhận từ bồi thường Diệp Tính @c151)"],
      trangThai: "đang giữ",
      blurb: "Pháp khí trữ vật Trúc Cơ kỳ luyện chế, cất giữ vật phẩm không để linh lực phát tán ra ngoài. Là một trong ba pháp khí Hàn Lập nhận được dù Diệp Tính hối ước. Hạn chế quan trọng: chỉ giữ được lục dịch từ bình thần bí tối đa khoảng một ngày rồi lục dịch biến mất.",
      detail: "Nhận tại c151 trong số vật phẩm Diệp Tính bồi thường (dù bị hối ước một phần). Tại c152, Hàn Lập thử nghiệm cho lục dịch vào bình: kết quả chỉ giữ được ~1 ngày rồi lục dịch biến mất vô ảnh vô tung — xác nhận lục dịch không đơn thuần là thiên địa linh khí ngưng tụ mà có bản chất phức tạp hơn. Hàn Lập tạm gác bí ẩn bình thần bí.",
      nguon: ["c0151", "c0152"]
    },
    {
      id: "ngoc-dong-truc-co-dan",
      name: "Ngọc đồng Trúc Cơ đan (bản phục chế)",
      cn: null,
      category: "khac",
      categoryLabel: "Ngọc giản lưu trữ đan phương",
      phamCap: "Ngọc giản tu tiên",
      soHuu: ["Hàn Lập (mua phục chế từ Hứa lão @c155)"],
      trangThai: "đang giữ",
      blurb: "Ngọc đồng màu xanh mướt, bản phục chế ghi đầy đủ phương pháp luyện chế Trúc Cơ đan — từ nguyên liệu đến cách ngưng luyện. Nhược điểm then chốt: bắt buộc dùng tiên thiên chân hỏa (chỉ Trúc Cơ kỳ mới có) mới luyện thành.",
      detail: "Đọc bằng cách áp lên trán, tâm thần chìm vào. Ghi đầy đủ phương pháp luyện chế Trúc Cơ đan gồm: cần 3 chủ dược (Ngọc Tủy Chi, Tử Hầu Hoa, Thiên Linh Quả) + 31 loại phụ dược dược tính mấy trăm năm + tiên thiên chân hỏa để luyện. Mua phục chế từ tàng thư lầu hai Nhạc Lộc điện giá 10 linh thạch tại c155. Hàn Lập đang mưu kế vượt qua yêu cầu tiên thiên chân hỏa bằng địa phế chi hỏa tại huyền dương hỏa địa.",
      nguon: ["c0155"]
    },
    {
      id: "ngoc-dong-dinh-nhan-dan",
      name: "Ngọc đồng Định nhan đan (bản phục chế)",
      cn: null,
      category: "khac",
      categoryLabel: "Ngọc giản lưu trữ đan phương",
      phamCap: "Ngọc giản tu tiên",
      soHuu: ["Hàn Lập (mua phục chế từ Hứa lão @c155)"],
      trangThai: "đang giữ",
      blurb: "Ngọc đồng màu đỏ rực, bản phục chế ghi phương pháp luyện chế Định nhan đan — đan chỉ giữ dung nhan thanh xuân vĩnh trú, không có tác dụng tu luyện. Không cần tiên thiên chân hỏa; dược liệu thường thấy nhưng cần dược tính ngàn năm trở lên.",
      detail: "Đọc bằng cách áp lên trán. Hàn Lập ban đầu định bỏ qua vì không hỗ trợ tu luyện, nhưng giữ lại vì: (1) tự luyện được không cần chân hỏa; (2) có thể bán cho người tu tiên khác làm nguồn thu linh thạch. Mua phục chế giá 10 linh thạch tại c155.",
      nguon: ["c0155"]
    },
    {
      id: "ngan-ti-dinh",
      name: "Ngân Ti đỉnh",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — đan lô",
      phamCap: "Thượng phẩm pháp khí — tinh phẩm trong đan lô",
      soHuu: ["Hàn Lập (mua từ Hứa lão @c156)"],
      trangThai: "đang giữ",
      blurb: "Đan lô màu bạc nhỏ nhắn, tinh phẩm trong các đan lô của Hứa lão, thượng phẩm pháp khí. Hàn Lập chọn vì nhỏ gọn, tiết kiệm không gian túi trữ vật. Dùng để luyện đan dược tại huyền dương hỏa địa.",
      detail: "Mua từ Hứa lão tại Nhạc Lộc điện giá 32 linh thạch cấp thấp sau khi mặc cả tại c156. Hứa lão giới thiệu là tinh phẩm bảo bối hạng nhất; Hàn Lập chọn cái nhỏ nhất trong số đan lô được giới thiệu vì lo không gian túi trữ vật có hạn. Tổng cộng Hàn Lập tiêu 50 linh thạch trong lần tiếp xúc Hứa lão (2 phí đọc + 20 phí phục chế + 32 đỉnh lô).",
      nguon: ["c0156"]
    },
    {
      id: "huyen-thiet-phi-thien-thuan",
      name: "Huyền thiết phi thiên thuẫn",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — khiên phi hành",
      phamCap: "Tu tiên (cấp chưa xác định)",
      soHuu: ["Hàn Lập (mua tại Vạn Bảo Lâu @c163–c165)"],
      trangThai: "đang giữ",
      blurb: "Khiên phi hành pháp khí mua tại Vạn Bảo Lâu phường thị Hoàng Phong Cốc. Vừa phòng thủ vừa có thể tấn công, di chuyển được trong không trung. Hàn Lập dùng làm lớp giữa trong ba lớp phòng thủ khi đối đầu Lục sư huynh.",
      detail: "Một trong ba pháp khí được Vạn Bảo Lâu giới thiệu cùng Kim phù tử mẫu đao và Thiên lôi tử. Hàn Lập thích nhất trong số ba do tính năng phòng thủ linh hoạt. Mua cùng toàn bộ hộp gấm bằng 2 gốc linh thảo ngàn năm. Thực chiến c167: làm lớp giữa ba lớp phòng thủ (Tinh cương cự hoàn ngoài + Huyền thiết thuẫn giữa + lam hào quang trong) trước Phong tường thuật của Lục sư huynh.",
      nguon: ["c0163", "c0164", "c0165", "c0167"]
    },
    {
      id: "tinh-cuong-hoan",
      name: "Tinh cương hoàn / Tinh cương cự hoàn",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — phòng thủ",
      phamCap: "Tu tiên (cấp chưa xác định)",
      soHuu: ["Hàn Lập"],
      trangThai: "vỡ @c168 — bị phá bởi Phong tường thuật",
      blurb: "Vòng pháp khí phòng thủ của Hàn Lập; khi mở rộng thành Tinh cương cự hoàn bao bọc toàn thân. Hàn Lập dùng làm lớp ngoài cùng trong trận ác đấu với Lục sư huynh, chịu đòn Phong tường thuật nhưng cuối cùng vỡ.",
      detail: "Dùng thực chiến c167–c168: làm lớp ngoài cùng trong ba lớp phòng thủ (cự hoàn ngoài + Huyền thiết thuẫn giữa + lam hào quang trong). Vỡ tại c168 trước uy lực Phong tường thuật của Lục sư huynh.",
      nguon: ["c0167", "c0168"]
    },
    {
      id: "kim-quang-chuyen-phu-bao",
      name: "Kim Quang Chuyên phù bảo",
      cn: null,
      category: "phu-bao",
      categoryLabel: "Phù bảo",
      phamCap: "Phù bảo — Kết Đan kỳ luyện chế",
      soHuu: ["Vạn Bảo Lâu (bán) → Hàn Lập (mua @c164–c165)"],
      trangThai: "hóa tro hoàn toàn @c170 — hỏng không thể dùng",
      blurb: "Phù bảo dạng hộp nhỏ ngũ sắc phát quang, mua tại Vạn Bảo Lâu. Khi kích hoạt hóa thành cự kiếm xám dài 2–3 trượng, uy lực khổng lồ. Ai cũng dùng được; tiền-Trúc-Cơ phát huy 1–2 thành; hậu Trúc-Cơ phát huy toàn bộ. Dùng thực chiến c167–c169, chém đôi Lục sư huynh; hóa tro sau trận.",
      detail: "Điền Bặc Ly giải thích nguyên lý phù bảo tại c164: do Kết Đan kỳ luyện chế, ai dùng cũng được; trước Trúc Cơ 1–2 thành uy lực, sau Trúc Cơ toàn bộ; số lần sử dụng/tuổi thọ hữu hạn. Hàn Lập kích hoạt c167: hóa cự kiếm xám 2–3 trượng chặn Thanh giao Lục sư huynh. Sau trận c169: Lục sư huynh chết, phù bảo ánh sáng ảm đạm vì pháp lực gần cạn. Tại c170: hóa tro hoàn toàn.",
      nguon: ["c0164", "c0165", "c0167", "c0168", "c0169", "c0170"]
    },
    {
      id: "thanh-giao-ky",
      name: "Thanh giao kỳ",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — kỳ phách phong hệ",
      phamCap: "Tu tiên (cấp chưa xác định — phong linh căn phù hợp)",
      soHuu: ["Lục sư huynh → Hàn Lập (thu @c170)"],
      trangThai: "đang giữ — Hàn Lập thu từ Lục sư huynh @c170",
      blurb: "Pháp khí phong thuộc tính của Lục sư huynh. Kích hoạt tuyệt chiêu Hóa giao biến thành Thanh giao (hình phách phong hệ) khổng lồ. Bị cự kiếm của Hàn Lập bào mòn dần, cuối trận Lục sư huynh thu hồi pháp lực dồn đao phong thay vào. Hàn Lập thu sau khi Lục sư huynh chết.",
      detail: "Tuyệt chiêu Hóa giao (c168): Lục sư huynh biến Thanh giao kỳ thành Thanh giao khổng lồ hình phách phong thuộc tính. Bị cự kiếm xám (phù bảo) của Hàn Lập bào mòn từ c168 đến c169, còn khoảng một trượng thì bị thu hồi. Cuối c169: Lục sư huynh thu pháp lực Thanh giao kỳ dồn đao phong lớn, Thanh giao kỳ khôi phục nguyên hình rớt xuống đất. Tại c170: Hàn Lập thu vào túi.",
      nguon: ["c0166", "c0167", "c0168", "c0169", "c0170"]
    },
    {
      id: "thien-loi-tu",
      name: "Thiên lôi tử",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — công kích nổ",
      phamCap: "Tu tiên (cấp chưa xác định)",
      soHuu: ["Hàn Lập (mua tại Vạn Bảo Lâu @c163–c165)"],
      trangThai: "đang giữ",
      blurb: "Pháp khí công kích dạng mìn sét nổ, mua tại Vạn Bảo Lâu. Một trong ba pháp khí Hàn Lập mua cùng Huyền thiết phi thiên thuẫn và Kim phù tử mẫu đao.",
      detail: "Xuất hiện c163: được Vạn Bảo Lâu giới thiệu cùng Kim phù tử mẫu đao và Huyền thiết phi thiên thuẫn. Hàn Lập mua khi đổi toàn bộ hộp gấm tại c165.",
      nguon: ["c0163", "c0165"]
    },
    {
      id: "kim-phu-tu-mau-dao",
      name: "Kim phù tử mẫu đao",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — đao bay liên hoàn",
      phamCap: "Tu tiên (cấp chưa xác định)",
      soHuu: ["Hàn Lập (mua tại Vạn Bảo Lâu @c163–c165)"],
      trangThai: "đang giữ",
      blurb: "Bộ dao bay liên hoàn pháp khí (tử mẫu kết hợp), mua tại Vạn Bảo Lâu. Một trong ba pháp khí Hàn Lập mua cùng Huyền thiết phi thiên thuẫn và Thiên lôi tử.",
      detail: "Xuất hiện c163: được Vạn Bảo Lâu giới thiệu. Hàn Lập mua khi đổi toàn bộ hộp gấm tại c165.",
      nguon: ["c0163", "c0165"]
    },
    {
      id: "hop-hoan-hoan",
      name: "Hợp Hoan Hoàn",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược — khống chế ý thức",
      phamCap: "Tu tiên (loại đan dược tà đạo)",
      soHuu: ["Lục sư huynh (dùng @c165)"],
      trangThai: "đã dùng lên người Trần sư muội @c165",
      blurb: "Đan dược khống chế ý thức, khiến người dùng mất tự chủ. Lục sư huynh dùng để cưỡng bức Trần sư muội tại c165. Trần sư muội còn trong trạng thái ảnh hưởng của Hợp Hoan đan đến c170 — tấn công Hàn Lập không có chủ ý, phải bị Định thần phù khống chế.",
      detail: "Xuất hiện c165: Lục sư huynh dùng Hợp Hoan Hoàn lên Trần sư muội. Hiệu ứng kéo dài đến c170 — nàng tấn công Hàn Lập trong trạng thái không kiểm soát ý thức.",
      nguon: ["c0165", "c0170"]
    },
    {
      id: "hoang-tinh-chi",
      name: "Hoàng tinh chi",
      cn: null,
      category: "nguyen-lieu",
      categoryLabel: "Linh thảo — ngàn năm",
      phamCap: "Linh thảo ngàn năm (hiếm)",
      soHuu: ["Vạn Bảo Lâu (bán) → Hàn Lập (mua @c163–c165; dùng làm vật đổi)"],
      trangThai: "đã dùng — dùng làm vật trao đổi lấy hộp gấm @c165",
      blurb: "Linh thảo ngàn năm Hoàng tinh chi, được Đinh lão xác nhận thật và tuổi hơn ngàn năm. Hàn Lập dùng 2 gốc linh thảo ngàn năm (bao gồm loại này) đổi toàn bộ hộp gấm tại Vạn Bảo Lâu.",
      detail: "Xuất hiện c163: trong một hộp gấm của Vạn Bảo Lâu. Đinh lão giám định tại c164: xác nhận Hoàng tinh chi thật, tuổi hơn ngàn năm. Hàn Lập đổi 2 gốc linh thảo ngàn năm (trong đó có Hoàng tinh chi) để mua toàn bộ hộp gấm tại c165.",
      nguon: ["c0163", "c0164", "c0165"]
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].techniques = {
  updatedAt: "2026-06-11",
  count: 44,
  techniques: [
    {
      id: "vo-danh-khau-quyet",
      name: "Trường Xuân công",
      cn: null,
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      phamCap: "Chưa xác định (nguồn gốc liên quan tu tiên)",
      hePhai: "Mặc đại phu (từ kỳ thư thần bí)",
      soHuu: ["Hàn Lập", "Mặc đại phu"],
      blurb: "Tên thật của 'vô danh khẩu quyết' Mặc đại phu truyền cho Hàn Lập. Yêu cầu người tu còn trẻ và có linh căn. Sinh ra lương khí lạnh (chân khí kỳ dị) bất thường. Đến tầng tư có thể dùng Trường Xuân khí kích thích bí huyệt người khác — là chìa khóa để Mặc đại phu phá giải tà khí xâm cốt của mình. Pháp quyết ghi trong quyển sách từ tầng một đến tầng mười ba.",
      detail: "Phân nhiều tầng (pháp quyết từ tầng 1 đến tầng 13, Hàn Lập mua được quyển đầy đủ tại Thái Nam hội c136-c137). Mặc đại phu tìm được từ kỳ thư thần bí; truyền cho Hàn Lập với tên 'vô danh khẩu quyết', nghiêm cấm tiết lộ. Khi tu, sinh ra luồng lương khí (chân khí lạnh) trong nội thể — khác hẳn nhiệt lưu chân khí nóng của Chính dương kinh. Năng lượng vận hành theo kỳ kinh bát mạch. Yêu cầu người tu còn trẻ và phải có 'linh căn' — Mặc đại phu đã thử mấy trăm đồng tử đều thất bại trước khi chọn được Hàn Lập. Đạt tầng 3: cảm quan mẫn duệ cực độ. Đạt tầng 4: ngũ cảm tăng vọt mang tính chất, điều khiển được cỗ chân khí kỳ dị. Tầng 8: pháp lực vượt qua nhục thân Dư Tử Đồng. Tầng 9 (đạt c138): sau hơn mười ngày khổ tu kết hợp đan dược tại Thái Nam hội; pháp lực tăng gấp đôi so với tầng 8.",
      nguon: ["c0006", "c0007", "c0008", "c0009", "c0014", "c0015", "c0028", "c0030", "c0136", "c0137", "c0138"]
    },
    {
      id: "tuong-giap-cong",
      name: "Tượng giáp công",
      cn: "象甲功",
      loai: "luyen-the",
      loaiLabel: "Luyện thể công pháp",
      phamCap: "Cao — 9 tầng, tầng 9 đao thương bất nhập",
      hePhai: "Không rõ (gần như thất truyền)",
      soHuu: ["Trương Thiết", "Mặc đại phu (truyền)", "Dư Tử Đồng (cung cấp cho Mặc đại phu mục đích tạo thi nhân)"],
      blurb: "Môn võ công luyện thể ngoại gia chín tầng, hiếm gặp gần như thất truyền. Mặc đại phu truyền cho Trương Thiết. Ba tầng đầu dễ luyện; từ tầng bốn trở đi thống khổ phi nhân khiến đa số bỏ cuộc. Đỉnh tầng chín như mặc bảo giáp — đao thương bất nhập. Ở c64 xác nhận: Tượng Giáp công được dùng kết hợp với luyện thi thuật (do Dư Tử Đồng cung cấp) để luyện di thể Trương Thiết thành thi nhân Khúc Hồn.",
      detail: "Chín tầng. Ba tầng đầu luyện như công phu phổ thông — ở tầng 1 đã phải chịu Mặc đại phu bôi thuốc hôi và dùng gậy gỗ đánh rèn gân cốt, đêm không ngủ yên. Tầng bốn trở đi thống khổ tăng dần — phần lớn người tu bỏ ở đây, tu vi ngừng trệ. Tầng năm, sáu đau khổ tăng gấp bội. Vượt tầng sáu thì về sau thoải mái, chỉ mỗi tháng vài ngày chịu đau sống đi chết lại. Tầng chín: thân như bảo giáp, đao thương bất nhập, thủy hỏa bất cận, chưởng quyền không đả thương được; sức lực như voi, tầng càng cao sức càng lớn, có thể bắt sống ác lang, xé xác hổ báo. Ngoài người sáng tạo (bẩm sinh không biết đau), chưa ai luyện tới tầng chín. Trương Thiết luyện tầng 1 rồi tiến tới tầng 3 (sau 4 năm biến mất bí ẩn). Ứng dụng bất thường: Mặc đại phu và Dư Tử Đồng kết hợp Tượng Giáp công với luyện thi thuật để luyện di thể Trương Thiết thành thi nhân Khúc Hồn — thân xác cứng như thiết bản.",
      nguon: ["c0009", "c0010", "c0013", "c0015", "c0064"]
    },
    {
      id: "phong-loi-dao-phap",
      name: "Phong Lôi đao pháp / Bôn Lôi đao pháp",
      cn: null,
      loai: "khac",
      loaiLabel: "Đao pháp võ lâm",
      phamCap: "Trung tầng võ học Thất Huyền môn",
      hePhai: "Thất Huyền môn",
      soHuu: ["Lệ sư huynh"],
      blurb: "Đao pháp của Lệ sư huynh — cường mãnh vô bì, toái thạch đoạn kim (chém đá chặt vàng). Liên hoàn đao thức, hét vang như sấm chấn động đối thủ, hóa thành hơn mười đao ảnh vây kín. Chỉ là trung tầng của Thất Huyền môn nhưng Lệ sư huynh vận dụng tới đỉnh, dùng nó leo lên hạng ba toàn môn.",
      detail: "Võ công phổ thông hạng trung tầng trong hệ thống võ học Thất Huyền môn. Do một hộ pháp bình thường truyền cho Lệ sư huynh — không phải tuyệt kỹ cao thâm. Đặc điểm thực chiến: hét lớn như sấm để áp chế khí thế đối phương, vung đao liên hoàn hóa thành hơn mười đao ảnh vây kín đối thủ; lực đao cường mãnh \"toái thạch đoạn kim\". Kết hợp với khinh công cao minh. Nguyên tác nhắc bằng cả hai tên Bôn Lôi và Phong Lôi đao pháp trong các chương khác nhau — đây là cùng một bộ đao pháp của Lệ sư huynh.",
      nguon: ["c0017", "c0018", "c0019"]
    },
    {
      id: "chinh-duong-kinh",
      name: "Chính dương kinh",
      cn: "正阳经",
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      phamCap: "Phổ thông nhập môn",
      hePhai: "Thất Huyền môn",
      soHuu: [],
      blurb: "Công pháp nhập môn của Thất Huyền môn, đa số đệ tử tu luyện. Sinh ra nhiệt lưu chân khí nóng rõ ràng — tu thành có thể đấm vỡ khúc gỗ nhỏ, nhảy cao một trượng.",
      detail: "Công pháp căn bản Thất Huyền môn dạy cho đệ tử nhập môn. Sinh nhiệt lưu chân khí (nóng). Kết quả thực tế sau khi tu thành: một quyền vỡ khúc gỗ nhỏ, nhảy cao khoảng một trượng.",
      nguon: ["c0007"]
    },
    {
      id: "truong-sinh-kinh",
      name: "Trường sinh kinh",
      cn: "长生经",
      loai: "cong-phap",
      loaiLabel: "Sách tu luyện",
      phamCap: "Không rõ",
      hePhai: "Không rõ",
      soHuu: ["Mặc đại phu"],
      blurb: "Cuốn sách về tu thân dưỡng tính và kéo dài tuổi thọ mà Mặc đại phu ôm khư khư. Nội dung liên quan tới mục tiêu trường sinh bất tử của lão.",
      detail: "Bìa sách có ba chữ đen to \"Trường sinh kinh\". Mặc đại phu ngày ngày đọc, ôm không rời tay. Hàn Lập và Trương Thiết nhận ra đây là lý do thật sự Mặc đại phu theo đuổi — mưu cầu sống quá ngàn năm. Chi tiết nội dung chưa rõ.",
      nguon: ["c0007"]
    },
    {
      id: "trat-nhan-kiem-phap",
      name: "Trát Nhãn kiếm pháp",
      cn: null,
      loai: "kiem-quyet",
      loaiLabel: "Kiếm pháp",
      phamCap: "Tuyệt học — bí kỹ ám sát (không cần nội lực)",
      hePhai: "Thất Huyền môn (Thất Tuyệt đường tàng thư)",
      soHuu: ["Hàn Lập (ghi thuộc lòng)"],
      blurb: "Bộ kiếm kỹ ám sát kỳ dị do một trưởng lão Thất Huyền môn thời xa xưa tự sáng tạo sau hơn mười năm bế quan — khi ông bị phế nội công và không thể tu luyện lại. Đặc điểm cốt lõi: không cần chân khí/nội lực, thay vào đó lợi dụng thiên thời-địa lợi-nhân hòa (vị trí cây cỏ, góc độ ánh sáng mạnh yếu) để làm sai lệch thị giác đối thủ, trong nháy mắt chộp sơ hở giết người. Điều kiện tu luyện 'tam bất luyện': chân khí đã có thành tựu — không luyện được; không có nghị lực lớn — không luyện được; không có thiên phú — không luyện được.",
      detail: "Được cất giữ tại Thất Tuyệt đường theo di chúc của người sáng lập. Toàn bộ 74 quyển bí tịch trong góc thư khố đều ghi cùng tên 'Trát Nhãn kiếm phổ' — mỗi quyển là một chiêu kiếm, mỗi chiêu lại chia hàng trăm phân thức tương ứng với từng hoàn cảnh thiên thời khác nhau. Điều kiện tu luyện cực biến thái: cấm dùng nội lực tinh thuần (chân khí mâu thuẫn kỹ xảo vận kình, làm chiêu kiếm biến đổi gây sơ hở); phải có ngũ quan-thị lực-thính giác hơn người. Cả Thất Huyền môn đều bỏ qua vì điều kiện kỳ cục, từ trước chưa ai luyện thành. Muốn thấu hiểu triệt để cần 8-10 năm; người thiên phú cần 2-3 năm mới có chút thành tựu. Hàn Lập ghi tạc toàn bộ vào trí nhớ thay vì sao chép để tránh lộ trước Mặc đại phu.",
      nguon: ["c0033", "c0034", "c0035", "c0036", "c0037", "c0039", "c0040"]
    },
    {
      id: "cuong-manh-kinh",
      name: "Cuồng Mãnh Kình",
      cn: null,
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      phamCap: "Trung tầng võ học Thất Huyền môn",
      hePhai: "Thất Huyền môn",
      soHuu: ["Lệ Phi Vũ", "Hàn Lập (đã học)"],
      blurb: "Công pháp cương mãnh thiên về cương dương của Thất Huyền môn. Lệ Phi Vũ truyền cho Hàn Lập; Hàn Lập thấy quá cương mãnh không hợp với mình và yêu cầu đổi sang loại mềm dẻo hơn.",
      detail: "Loại công pháp thiên cương dương — phù hợp với người có thiên tính cương mãnh như Lệ Phi Vũ. Hàn Lập học rồi nhận xét không hợp, xin học loại khác mềm dẻo khéo léo hơn.",
      nguon: ["c0033"]
    },
    {
      id: "trien-ti-thu",
      name: "Triền Ti Thủ",
      cn: null,
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      phamCap: "Trung tầng võ học Thất Huyền môn",
      hePhai: "Thất Huyền môn",
      soHuu: ["Lệ Phi Vũ", "Hàn Lập (thành thục)"],
      blurb: "Môn võ công mềm dẻo khéo léo do Lệ Phi Vũ truyền cho Hàn Lập. Hàn Lập luyện xuất thần nhập hóa chỉ trong hai tháng nhờ thiên phú võ học và năng lực ghi nhớ của Trường Xuân công.",
      detail: "Dùng để điều khiển lực vi tế — Hàn Lập dùng Triền Ti Thủ để khéo léo giải nút thắt túi đựng bí tịch mà Lệ Phi Vũ mang tới. Việc luyện thành trong hai tháng khiến Lệ Phi Vũ gọi Hàn Lập là thiên tài.",
      nguon: ["c0035"]
    },
    {
      id: "that-tuyet-thuong",
      name: "Thất tuyệt thương",
      cn: "七绝枪",
      loai: "kiem-quyet",
      loaiLabel: "Thương pháp",
      phamCap: "Không rõ",
      hePhai: "Thất Huyền môn (di sản sáng lập)",
      soHuu: ["Vương môn chủ"],
      blurb: "Thương pháp danh môn di sản của Thất tuyệt thương nhân — người sáng lập Thất Huyền môn. Vương môn chủ là truyền nhân.",
      detail: "Tuyệt kỹ do Thất tuyệt thương nhân (người sáng lập Thất Huyền môn hơn hai trăm năm trước) để lại. Vương môn chủ là truyền nhân. Chi tiết chiêu thức chưa được mô tả.",
      nguon: ["c0006"]
    },
    {
      id: "nhuyen-cot-cong",
      name: "Nhuyễn cốt công",
      cn: null,
      loai: "luyen-the",
      loaiLabel: "Công pháp luyện thể",
      phamCap: "Bí kỹ (từ kiếm phổ)",
      hePhai: "Không rõ (trích từ kiếm phổ Hàn Lập ghi nhớ)",
      soHuu: ["Hàn Lập"],
      blurb: "Công pháp khiến thân thể mềm dẻo như không có xương. Hàn Lập chọn luyện đầu tiên trong khe núi ẩn tu vì là môn khó nhất. Dùng để áp sát ép thân xuống mặt đất ẩn mình hoàn toàn ngay trước mắt đối thủ.",
      detail: "Hàn Lập luyện trong khe núi hình chữ nhất trong ~hai tháng. Kết hợp với Liễm tức công và Ngụy nặc thuật tạo thành bộ ẩn thân hoàn chỉnh — dùng trong trận chiến với Mặc đại phu để ẩn mình áp sát mặt đất ngay trước mắt lão.",
      nguon: ["c0042", "c0046"]
    },
    {
      id: "liem-tuc-cong",
      name: "Liễm tức công",
      cn: null,
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      phamCap: "Bí kỹ (từ kiếm phổ)",
      hePhai: "Không rõ (trích từ kiếm phổ Hàn Lập ghi nhớ)",
      soHuu: ["Hàn Lập"],
      blurb: "Công pháp ẩn giấu hơi thở và khí tức hoàn toàn. Hàn Lập luyện tới hỏa hầu nhất định sau ~hai tháng ẩn tu. Kết hợp Nhuyễn cốt công và Ngụy nặc thuật tạo bộ ẩn thân hoàn chỉnh.",
      detail: "Hàn Lập xác nhận thành quả bằng cách giả dạng cọc gỗ bắt được con chim lông xám trong khe núi mà Vân sí điểu không hay. Trong trận chiến với Mặc đại phu: giúp lão không thể định vị hắn qua hơi thở khi hắn ẩn mình áp sát mặt đất.",
      nguon: ["c0042", "c0046"]
    },
    {
      id: "nguy-nac-thuat",
      name: "Ngụy nặc thuật",
      cn: null,
      loai: "khac",
      loaiLabel: "Thuật ẩn thân",
      phamCap: "Bí kỹ (từ kiếm phổ)",
      hePhai: "Không rõ (trích từ kiếm phổ Hàn Lập ghi nhớ)",
      soHuu: ["Hàn Lập"],
      blurb: "Thuật ngụy trang ẩn mình. Hàn Lập luyện tới hỏa hầu nhất định, dùng để ngụy trang thành cọc gỗ vàng kiểm nghiệm thành quả. Kết hợp cùng Nhuyễn cốt công và Liễm tức công trong trận chiến với Mặc đại phu.",
      detail: "Trong khe núi ẩn tu, Hàn Lập đứng bất động ngụy trang thành cọc gỗ màu vàng; con chim lông xám bay vào tưởng thật, đáp xuống — Hàn Lập chộp được rồi thả ra. Vân sí điểu (tai mắt Mặc đại phu) gần đó cũng không phát hiện. Trong trận chiến: Mặc đại phu thổi bột trắng tan khói xong vẫn không tìm ra Hàn Lập ẩn dưới mặt đất ngay trước mặt.",
      nguon: ["c0042", "c0046"]
    },
    {
      id: "la-yen-bo",
      name: "La Yên bộ",
      cn: null,
      loai: "than-phap",
      loaiLabel: "Thân pháp",
      phamCap: "Bí kỹ — thân pháp cao cấp",
      hePhai: "Không rõ (trích từ kiếm phổ Hàn Lập ghi nhớ)",
      soHuu: ["Hàn Lập"],
      blurb: "Thân pháp di chuyển như làn khói xanh, quỷ mị lặng không tiếng động, góc độ biến hóa khó tưởng tượng — tà môn vô cùng. Hàn Lập luyện trong rừng gai nguy hiểm bằng cách giắt thiết linh (chuông sắt nhỏ) ở cổ, hông, cánh tay, bắp đùi, cổ chân để rèn di chuyển không phát tiếng. Tốn thể lực lớn khi dùng liên tục. Từ c75: dung hợp với Ngự Phong Quyết tạo thân pháp vượt trội.",
      detail: "Hàn Lập luyện thành vài phần hỏa hầu ngay ngày cuối trước khi gặp Mặc đại phu. Trong trận chiến: biến hóa thân thành làn khói nhẹ luồn qua góc độ quỷ dị thoát khỏi màn chắn bạc Ma Ngân Thủ của Mặc đại phu. Tốn thể lực lớn — sau nhiều lần dùng, tay trái Hàn Lập tê liệt hoàn toàn. Mặc đại phu nhận định La Yên bộ 'tà môn vô cùng' khiến ngay cả cao thủ Ma Ngân Thủ cũng giật mình. Tại c75: Hàn Lập dung hợp La Yên bộ với Ngự Phong Quyết (thi triển Ngự Phong trước rồi vận La Yên bộ theo sau) — hai bộ pháp kết hợp khắc phục điểm yếu thể lực, thân pháp trở thành 'kỳ ảnh bất kiến kỳ nhân' xuất quỷ nhập thần.",
      nguon: ["c0043", "c0047", "c0048", "c0075"]
    },
    {
      id: "ma-ngan-thu",
      name: "Ma Ngân Thủ",
      cn: null,
      loai: "luyen-the",
      loaiLabel: "Luyện thể công pháp (tay)",
      phamCap: "Tuyệt kỹ thành danh độc nhất vô nhị",
      hePhai: "Không rõ (tuyệt kỹ riêng của Mặc đại phu)",
      soHuu: ["Mặc đại phu"],
      blurb: "Tuyệt kỹ thành danh của Mặc đại phu. Vận khởi thì sát khí trùng thiên, hai tay bành trướng chuyển từ màu vàng sang trắng bạc, cứng chắc kiên bất khả tồi như luyện từ bạc thật — đao thương bất nhập, bắt được lưỡi kiếm sắc bén trực tiếp. Chiêu thức đa dạng: cự chưởng áp đỉnh, trảo bắt gân, hóa hai tay thành màn chắn bạc dày đặc.",
      detail: "Khi thi triển, sát khí tràn ngập không gian bức lui đối thủ. Cụ thể trong trận với Hàn Lập: búng ngón tay khiến hổ khẩu Hàn Lập nóng ran, đoản kiếm văng cắm sâu vào tường; bắt khóa mũi kiếm đoản trực tiếp trong trận Sáo Trung Sáo mà không bị thương. Chiêu 'Phách không chưởng' và 'Chỉ xích thiên nhai' là các thủ pháp bổ trợ Mặc đại phu dùng kết hợp với Ma Ngân Thủ.",
      nguon: ["c0047", "c0049"]
    },
    {
      id: "that-quy-phe-hon-dai-phap",
      name: "Thất Quỷ Phệ Hồn đại pháp",
      cn: null,
      loai: "bi-thuat",
      loaiLabel: "Bí thuật tà đạo",
      phamCap: "Bí thuật cấp cao (nguồn gốc tu tiên)",
      hePhai: "Tà đạo — do Dư Tử Đồng truyền cho Mặc đại phu",
      soHuu: ["Mặc đại phu (đã dùng, nay đã chết)", "Dư Tử Đồng (kẻ truyền thuật)"],
      blurb: "Bí thuật tà đạo cực kỳ uy lực do Dư Tử Đồng truyền cho Mặc đại phu. Thi thuật bằng cách tự cắm bảy dao nhọn cán hình đầu quỷ vào thân; tạo ra quỷ vụ đen đặc bao phủ, xúc tu hút linh/hồn kẻ khác. Dùng để hồi phục tuổi trẻ cho Mặc đại phu và chuẩn bị tiến hành đoạt xá.",
      detail: "Nghi thức: cắm bảy dao nhọn vào hai vai, hai chân, bụng và ngực; nhập định kết ấn hoa sen, niệm chú. Kết quả: mặt thi thuật giả nổi quỷ vụ đen đặc tạo xúc tu, rút sạch âm khí/quỷ khí từ môi trường; bảy đầu quỷ trên dao hút lấy quỷ vụ. Sau khi hoàn thành: Mặc đại phu hồi phục tuổi trẻ từ lão già 70+ thành mỹ nam tử ~30 tuổi. Thực chất là bước chuẩn bị năng lượng cho nghi thức đoạt xá tiếp theo. Nguồn gốc và toàn bộ công năng do Dư Tử Đồng truyền — đây là một trong những bí thuật Dư Tử Đồng dùng để lợi dụng Mặc đại phu.",
      nguon: ["c0052", "c0053"]
    },
    {
      id: "huyet-tien-am-hon-chu",
      name: "Huyết tiến âm hồn chú",
      cn: null,
      loai: "bi-thuat",
      loaiLabel: "Bí thuật lâm tử",
      phamCap: "Bí thuật gia tộc tu tiên (cấp độ thoát sinh)",
      hePhai: "Gia tộc tu tiên Dư Tử Đồng",
      soHuu: ["Dư Tử Đồng (đã dùng)"],
      blurb: "Bí thuật lâm tử của Dư Tử Đồng. Khi gần chết, hóa máu huyết thành huyết chú phún lên đầu đối phương; nguyên thần thoát ra khỏi thân xác trước khi thân xác tắt thở, chui vào cơ thể đối phương để tránh tiêu vong. Dư Tử Đồng dùng kỹ thuật này để ký sinh vào thân Mặc đại phu sau khi bị hắn đầu độc.",
      detail: "Cơ chế: lâm tử kích hoạt — máu huyết hóa thành huyết chú phún lên đầu đối phương (Mặc đại phu); nguyên thần Dư Tử Đồng xuất khiếu, không có pháp khí dung thân nên chui thẳng vào thân thể Mặc đại phu. Hệ quả: trạng thái nguyên thần ký sinh, chịu sự khống chế của Mặc đại phu, nhưng vẫn giữ được ý thức và mưu đồ riêng. Mặc đại phu dần già nhanh do 'huyết tiến âm hồn chú' của Dư Tử Đồng tàn dư trên thân lão.",
      nguon: ["c0058", "c0059"]
    },
    {
      id: "hoa-dan-thuat",
      name: "Hỏa Đạn Thuật",
      cn: "火弹术",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật công kích",
      phamCap: "Pháp thuật cơ sở (từ bí tịch Trường Xuân công)",
      hePhai: "Trường Xuân công",
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật công kích đầu tiên Hàn Lập luyện thành công từ 5 pháp thuật cuối bí tịch Trường Xuân công. Phóng hỏa cầu đỏ rực, uy lực đủ nung chảy tinh cương và bốc hơi nước tức thì. Còn được gọi là Hỏa Đan Thuật hoặc Hỏa Cầu Thuật. Từ c75 được Hàn Lập cải tiến thành vũ khí cận chiến.",
      detail: "Tên khác: Hỏa Đan Thuật (火弹术), Hỏa Cầu Thuật. Được ghi trong phần cuối bí tịch Trường Xuân công mà Hàn Lập giải mã được từ 'Trường sinh kinh' của Mặc đại phu. Hàn Lập mất ba tháng giải cổ ngữ, rồi luyện thành công. Uy lực: hỏa cầu đỏ rực, có thể nung chảy tinh cương và bốc hơi nước lập tức — mạnh hơn nhiều so với Thiên Nhãn Thuật. Tại c75: Hàn Lập nhận ra nhược điểm của cách bắn truyền thống (hỏa cầu bay đi quá chậm, cao thủ có khinh công dễ né); cải tiến cách dùng — chỉ thi triển nửa thuật, giữ hỏa cầu trên lòng bàn tay làm đoản binh khí cận chiến, tạo 'thần binh' đặc thù khó chống đỡ ở cự ly gần.",
      nguon: ["c0067", "c0068", "c0075"]
    },
    {
      id: "thien-nhan-thuat",
      name: "Thiên Nhãn Thuật",
      cn: "天眼术",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật phụ trợ",
      phamCap: "Pháp thuật cơ sở — kỹ xảo nhỏ (từ bí tịch Trường Xuân công)",
      hePhai: "Trường Xuân công",
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật quan sát pháp lực, luyện rất dễ (thử là được). Dùng vận pháp lực lên mắt để xem đối phương có pháp lực không, thâm hậu hay không, và có dùng pháp thuật phụ trợ trên người không. Pháp lực hiện ra dưới dạng bạch quang nhàn nhạt, đậm đặc nhất ở đan điền. Tại c88: Hàn Lập lén dùng trong trận huyết đấu, phát hiện Chu Nho là người tu tiên nhưng pháp lực thấp hơn mình. Tại c96: dùng gây áp lực tâm lý lên Vương Tuyệt Sở, khiến đối phương tưởng bị đọc nội tâm.",
      detail: "Được ghi trong phần cuối bí tịch Trường Xuân công. Kỹ xảo nhỏ — tác dụng tầm thường: chỉ quan sát pháp lực của đối phương (có hay không, thâm hậu hay không) và phát hiện pháp thuật phụ trợ đang dùng. Hàn Lập luyện thành ngay lần thử đầu. Khi vận lên mắt và nhìn vào người có pháp lực: thấy bạch quang nhàn nhạt bao phủ, nồng độ đậm đặc nhất ở đan điền. Sờ vào luồng bạch quang không cảm giác được — pháp lực là vật chất vô hình. Giới hạn: cả Thất Huyền môn chỉ mình Hàn Lập là bán tu tiên giả nên gần như không ai để quan sát. Tại c88 lần đầu dùng trong chiến trận thực tế: lén niệm khẩu quyết soi Chu Nho qua màn Kim Quang Tráo, thấy bạch quang mờ nhạt như có như không — xác nhận hắn là tu tiên nhưng pháp lực yếu hơn Hàn Lập. Tại c96: Hàn Lập dùng thuật này gây uy hiếp tâm lý, khiến Vương Tuyệt Sở tưởng đối phương 'thần thông quảng đại' đọc được nội tâm; Vương Tuyệt Sở phải tự 'thoát khỏi ảnh hưởng' mới trấn tĩnh lại.",
      nguon: ["c0067", "c0068", "c0088", "c0096", "c0126"]
    },
    {
      id: "luyen-thi-thuat",
      name: "Luyện thi thuật",
      cn: null,
      loai: "bi-thuat",
      loaiLabel: "Bí thuật luyện thi",
      phamCap: "Không rõ",
      hePhai: "Không rõ — do Dư Tử Đồng cung cấp",
      soHuu: ["Mặc đại phu (đã dùng)", "Dư Tử Đồng (cung cấp)"],
      blurb: "Thuật luyện thi nhân do Dư Tử Đồng cung cấp cho Mặc đại phu. Kết hợp với Tượng Giáp công của Trương Thiết để tạo ra thi nhân Khúc Hồn — cự hán thiết nô thân xác cứng như thiết bản, sức lực phi thường.",
      detail: "Dư Tử Đồng cung cấp luyện thi thuật cho Mặc đại phu; Mặc đại phu sau khi bắt cóc Trương Thiết đã hủy hồn phách, dùng kết hợp Tượng Giáp công (tầng 3 mà Trương Thiết đã luyện) và luyện thi thuật để cải tạo di thể thành thi nhân Khúc Hồn. Kết quả: thân xác cứng như thiết bản, sức mạnh của cự hán, phục tùng người có Dẫn hồn chung khống chế.",
      nguon: ["c0064"]
    },
    {
      id: "huyen-am-chi",
      name: "Huyền âm chỉ",
      cn: "玄阴指",
      loai: "noi-cong",
      loaiLabel: "Công pháp — chỉ pháp",
      phamCap: "Không rõ",
      hePhai: "Không rõ — Thất Huyền môn (hệ phái Mã)",
      soHuu: ["Mã phó môn chủ"],
      blurb: "Công pháp chỉ pháp đặc trưng của Mã phó môn chủ. Đã luyện tới mức tinh thuần. Tên được đề cập khi Mã phó môn chủ đấu khẩu với Triệu trưởng lão; chưa mô tả uy lực cụ thể.",
      detail: "Huyền âm chỉ — một loại chỉ pháp (công pháp luyện ngón tay/chỉ lực). Mã phó môn chủ tuyên bố đã luyện tới mức tinh thuần trong cuộc đấu khẩu với Triệu trưởng lão. Uy lực thực tế chưa được mô tả trong truyện đến c70.",
      nguon: ["c0070"]
    },
    {
      id: "hon-vien-thu",
      name: "Hỗn viên thủ",
      cn: "混元手",
      loai: "noi-cong",
      loaiLabel: "Công pháp — thủ pháp",
      phamCap: "Không rõ",
      hePhai: "Không rõ — Thất Huyền môn (hệ phái Triệu)",
      soHuu: ["Triệu trưởng lão"],
      blurb: "Công pháp thủ pháp đặc trưng của Triệu trưởng lão. Luyện khiến hai bàn tay to lớn, mười ngón căng phồng. Mã phó môn chủ mỉa mai 'chắc đã luyện tới xuất thần nhập hóa'; uy lực thực tế chưa được mô tả.",
      detail: "Hỗn viên thủ — công pháp luyện bàn tay/thủ lực đặc trưng. Khi luyện tới mức nhất định, biểu hiện bên ngoài: hai bàn tay to lớn bất thường, mười ngón tay căng phồng như ngón tay người thổi kèn. Hàn Lập quan sát bàn tay Triệu trưởng lão và nhận ra đặc điểm của một loại võ công đặc thù. Uy lực thực chiến chưa được mô tả đến c70.",
      nguon: ["c0069", "c0070"]
    },
    {
      id: "ngu-phong-quyet",
      name: "Ngự Phong Quyết",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — ngự phong",
      phamCap: "Pháp thuật cơ sở (từ bí tịch Trường Xuân công)",
      hePhai: "Trường Xuân công",
      soHuu: ["Hàn Lập (đã luyện thành @c74)"],
      blurb: "Một trong năm pháp thuật cuối bí tịch Trường Xuân công. Hàn Lập luyện ba tháng thất bại (c67), nhưng sau nhiều cố gắng cuối cùng luyện thành tại c74. Pháp thuật khinh thân dùng pháp lực (không dùng thể lực); chỉ bay một mình (không mang theo người khác); kết hợp La Yên bộ tạo thân pháp xuất quỷ nhập thần. Tại c84 lần đầu dùng trong chiến đấu thật — giúp Hàn Lập lộ thực lực trước đám đông.",
      detail: "Được ghi trong phần cuối bí tịch Trường Xuân công cùng với Hỏa Đạn Thuật, Thiên Nhãn Thuật, Định Thần Phù và Khống Vật Thuật. Tính chất: ngự phong/điều khiển gió, dùng pháp lực duy trì bay — khác với khinh công thông thường tiêu hao thể lực. Chỉ dùng được một mình (không thể mang theo người khác). Tại c74 Hàn Lập luyện thành sau nhiều thất bại. Tại c75 dung hợp với La Yên bộ: thi triển Ngự Phong trước rồi vận La Yên bộ theo sau, tạo thân pháp xuất quỷ nhập thần 'kỳ ảnh bất kiến kỳ nhân'. Tại c84 lần đầu dùng trong chiến đấu thực tế — kết hợp La Yên bộ tốc độ kinh người hạ sát đệ tử Đoạn Thủy môn. Tại c87 lại dùng phô thân pháp trước Vương Tuyệt Sở và ba sư thúc trong màn xin gia nhập tử khế.",
      nguon: ["c0067", "c0074", "c0075", "c0084", "c0087"]
    },
    {
      id: "khong-vat-thuat",
      name: "Khống Vật Thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — khống chế vật thể",
      phamCap: "Pháp thuật cơ sở (từ bí tịch Trường Xuân công)",
      hePhai: "Trường Xuân công",
      soHuu: ["Hàn Lập (đã luyện thành @c0091)"],
      blurb: "Một trong năm pháp thuật cuối bí tịch Trường Xuân công. Hàn Lập luyện ba tháng nhưng chưa nhập môn được. Tại c75 ngộ ra nguyên nhân: cần vật phẩm đặc biệt của tu tiên giả làm đối tượng khống chế. Tại c91: lần đầu dùng thực chiến thành công — đoạt kiếm phù từ tay Chu Nho giữa trận huyết đấu. Tại c92: lần đầu trong trận chiến bình thường dùng thành thạo. Tại c95: khổ luyện liên tục ba ngày cho đến khi nắm vận dụng nhuần nhuyễn.",
      detail: "Được ghi trong phần cuối bí tịch Trường Xuân công cùng với Hỏa Đạn Thuật, Thiên Nhãn Thuật, Định Thần Phù và Ngự Phong Quyết. Còn gọi là 'Khu vật thuật' (tên Hàn Lập dùng khi tự học). Tính chất: khống chế vật thể từ xa bằng pháp lực — áp pháp lực lên vật, xóa linh lực của chủ cũ và lập mối liên hệ mới. Hàn Lập không luyện được trong ba tháng nỗ lực ban đầu vì thiếu vật phẩm tu tiên làm đối tượng. Tại c91: lần đầu tiên áp dụng thực chiến thành công với vật phẩm tu tiên thật — dùng giữa trận huyết đấu để đoạt kiếm phù từ tay Chu Nho; Chu Nho sửng sốt. Tại c92: dùng bình tĩnh hơn, xóa linh lực Chu Nho trên kiếm phù và cất vào ngực. Ưu thế then chốt: pháp lực Hàn Lập thâm hậu hơn đối thủ nhiều lần nên áp đảo hoàn toàn. Tại c95: đóng cửa khổ luyện liên tục ba ngày sử dụng kiếm phù cho đến khi nắm vận dụng thực tế nhuần nhuyễn.",
      nguon: ["c0067", "c0075", "c0090", "c0091", "c0092", "c0095"]
    },
    {
      id: "kim-cuong-bat-hoai-cong",
      name: "Kim cương bất hoại công",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật phòng ngự",
      phamCap: "Tu tiên sơ cấp — cùng hệ với Kim Quang Tráo",
      hePhai: "Không rõ (tu tiên)",
      soHuu: ["Chu Nho (Kim Quang thượng nhân)"],
      blurb: "Công pháp/pháp thuật phòng ngự của Chu Nho, kích hoạt qua lá bùa kim quang tạo ra Kim Quang Tráo — màn hào quang vàng bọc thân cứng như kim cương. Điểm yếu: lực vật lý cực lớn liên tục (quyền cước cao thủ hóa cảnh) có thể làm biến hình và phá vỡ sự ổn định của màn hào quang.",
      detail: "Biểu hiện khi kích hoạt: ánh sáng vàng chói lòa phát ra từ lá bùa đập vào thân, tạo màn hào quang vàng bọc toàn thân như khôi giáp. Công năng: đao kiếm bình thường bật ra, hổ khẩu tay người chém đau; bảo vệ 'mưa gió không lọt' theo tuyên bố của Chu Nho. Cấu trúc: dẻo dai và tự phục hồi nguyên hình sau khi bị đánh méo nhẹ; nhưng dưới lực vật lý cực lớn liên tục từ cao thủ hóa cảnh thì liên tục biến hình, màn bảo vệ mất ổn định khiến người dùng không thể niệm pháp quyết bình tĩnh. Dưới lực phản công của người dùng khi bị tấn công: sinh ra phản lực gia tăng theo lực của đối phương — khiến tay chân cao thủ phàm nhân đau dần. Hàn Lập nhận định đây thuộc hệ phù chú cao hơn Định Thần Phù một bậc.",
      nguon: ["c0088", "c0089", "c0090"]
    },
    {
      id: "phi-kiem-thuat-chu-nho",
      name: "Thuật điều khiển luồng sáng (nghi phi kiếm)",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — điều khiển vật thể",
      phamCap: "Tu tiên (cấp chưa xác định)",
      hePhai: "Không rõ — cùng hệ khống vật thuật",
      soHuu: ["Chu Nho (Kim Quang thượng nhân)"],
      blurb: "Chu Nho dùng khẩu quyết và thủ thế điều khiển luồng sáng mờ bay ra từ hộp đen; luồng sáng chém cụt tay và giết hán tử cao thủ. Người chứng kiến gọi là 'phi kiếm' theo truyền thuyết kiếm tiên. Nguyên tác không xác nhận đây có thật là phi kiếm hay không; Hàn Lập cũng không biết luồng sáng nọ là gì. Điều chắc chắn: khẩu quyết và thủ thế giống hệt Khu vật thuật của Hàn Lập.",
      detail: "Cách dùng: Chu Nho đặt hộp đen lên đùi, niệm chú bắt quyết hô 'Khởi'; luồng sáng mờ mờ bay ra, lượn vài vòng rồi phóng theo hướng ngón tay chỉ điều khiển. Hiệu lực: bay nhanh như điện, chém cụt tay mà nạn nhân không cảm thấy, sau đó quay ngược đâm xuyên ngực. Có thể điều khiển lượn vẽ hình mãng xà xám trên không để thị uy. Người chứng kiến đều hiểu đây là 'phi kiếm' theo truyền thuyết; nhưng nguyên tác chủ ý không xác nhận — đây là điểm còn bỏ ngỏ. Mối liên hệ với Hàn Lập: hắn nhận ra khẩu quyết + thủ thế Chu Nho dùng giống hệt Khu vật thuật (Khống Vật Thuật) của mình — xác nhận ít nhất là cùng nguồn gốc kỹ thuật.",
      nguon: ["c0089", "c0090"]
    },
    {
      id: "quy-tuc-cong",
      name: "Quy tức công",
      cn: null,
      loai: "khac",
      loaiLabel: "Thuật sinh tồn / khí công",
      phamCap: "Phàm nhân cấp — lưu truyền rộng rãi giang hồ",
      hePhai: "Giang hồ phàm tục (không rõ nguồn gốc)",
      soHuu: ["Lưu truyền rộng trong giới giang hồ"],
      blurb: "Công pháp lưu truyền rất rộng trên giang hồ phàm tục. Làm khí tức và nhịp tim chậm lại tới cực điểm, đưa người vào trạng thái giả chết. Một đầu mục nhỏ Tứ bình bang dùng để qua mắt quái ưng hai đầu (linh thú chở tu tiên giả) tại ngoại thành Gia Nguyên — tình cờ nghe được đôi tu tiên giả bàn về Thần tiên đại hội.",
      detail: "Không thuộc về hệ tu tiên; là kỹ pháp sinh tồn phổ thông trong giới giang hồ phàm tục. Người luyện thành làm chậm nhịp tim và hơi thở tới mức gần như dừng hẳn, trông như xác chết. Đầu mục nhỏ Tứ bình bang dùng trong cây rỗng khi bị quái ưng hai đầu cực lớn (phương tiện di chuyển của đôi tu tiên giả) hạ xuống gần. Khi Quy tức công phát tác hoàn toàn, người dùng mất tri giác — đầu mục đó tỉnh lại sáng hôm sau, quái ưng đã đi.",
      nguon: ["c0119"]
    },
    {
      id: "phach-vuong-giap",
      name: "Phách vương giáp",
      cn: null,
      loai: "ngoai-cong",
      loaiLabel: "Ngạnh công — thân thể phòng thủ",
      phamCap: "Đứng đầu giang hồ phàm tục (ngạnh công hạng nhất)",
      hePhai: "Độc Bá sơn trang",
      soHuu: ["Âu Dương Phi Thiên (trang chủ Độc Bá sơn trang, tử vong c126)"],
      blurb: "Ngạnh công toàn thân đao thương bất nhập — tuyệt kỹ phòng thủ bậc nhất giang hồ phàm tục của trang chủ Độc Bá sơn trang Âu Dương Phi Thiên. Vô dụng hoàn toàn trước kiếm phù linh khí: Hàn Lập dùng một kiếm phù khi Âu Dương Phi Thiên một mình ngắm trăng, toàn thân phòng thủ tan vỡ, chết ngay.",
      detail: "Tuyệt kỹ võ công của Âu Dương Phi Thiên (ngoại hiệu 'Nộ sư'), trang chủ Độc Bá sơn trang. Đây là ngạnh công đứng đầu giang hồ trong giới phàm tục — toàn thân đao thương bất nhập. Tuy nhiên hoàn toàn vô dụng trước linh khí/pháp thuật tu tiên giả. Hàn Lập ám sát Âu Dương Phi Thiên bằng một kiếm phù khi hắn một mình ngắm trăng — Phách vương giáp không đỡ được, chết ngay.",
      nguon: ["c0126"]
    },
    {
      id: "luu-sa-thuat",
      name: "Lưu sa thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật",
      phamCap: "Sơ cấp (dễ học, ngay cả Luyện khí kỳ cũng học được)",
      hePhai: null,
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật sơ cấp dùng pháp lực biến một khu vực đất thành cát. Uy lực tùy theo pháp lực người sử dụng — người thần thông cao có thể hóa ngàn dặm ruộng tốt thành sa mạc. Hàn Lập thành thạo sau khi đột phá tầng chín Trường Xuân công.",
      detail: "Được liệt vào pháp thuật sơ cấp vì dễ học, không vì uy lực thấp. Hàn Lập luyện trong thời gian ở Thái Nam hội c138; ban đầu khó nhưng sau khi đột phá tầng chín pháp lực tăng gấp đôi, thuật này trở nên thuận tay — tùy tâm biến cát một khu vực lớn nhỏ c139.",
      nguon: ["c0138", "c0139"]
    },
    {
      id: "bang-dong-thuat",
      name: "Băng đông thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật",
      phamCap: "Sơ cấp (dễ học, ngay cả Luyện khí kỳ cũng học được)",
      hePhai: null,
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật sơ cấp làm nước ngưng kết thành băng trong một khu vực. Uy lực tùy pháp lực — người thần thông cao có thể ngưng sông Trường Giang thành băng. Hàn Lập thành thạo sau khi đột phá tầng chín Trường Xuân công.",
      detail: "Được liệt vào pháp thuật sơ cấp vì dễ học, không vì uy lực thấp. Hàn Lập luyện trong thời gian ở Thái Nam hội c138; ban đầu khó nhưng sau khi đột phá tầng chín pháp lực tăng gấp đôi, thuật này trở nên thuận tay — tùy tâm ngưng băng một khu vực lớn nhỏ c139.",
      nguon: ["c0138", "c0139"]
    },
    {
      id: "nac-than-thuat",
      name: "Nặc thân thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — phụ trợ",
      phamCap: "Sơ cấp phụ trợ — hiệu quả hạn chế trước người tu tiên",
      hePhai: null,
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật dùng linh lực bao toàn thân biến thành màu sắc bảo vệ giống hoàn cảnh xung quanh để người khác không phát giác. Hiệu quả tốt với người thường nhưng dễ bị phá bởi Thiên Nhãn Thuật của tu tiên — Hàn Lập đánh giá là 'chỉ mang tính chơi cho vui'.",
      detail: "Hàn Lập luyện được trong thời gian ở Thái Nam hội c138. Mang tính chất ẩn hình bề ngoài (màu sắc ngụy trang), khác hoàn toàn với Tàn Phiến (ẩn hình kể cả linh khí, Thiên Nhãn không phá được). Bất kỳ tu tiên dùng Thiên Nhãn Thuật đều dễ dàng phát giác người dùng Nặc thân thuật.",
      nguon: ["c0138", "c0139"]
    },
    {
      id: "truyen-am-thuat",
      name: "Truyền âm thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — phụ trợ",
      phamCap: "Sơ cấp phụ trợ",
      hePhai: null,
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật truyền âm thanh đến đối tượng chỉ định mà người ngoài không nghe được — phiên bản tu tiên của truyền âm nhập mật. Hàn Lập phải luyện tập qua nhiều lần dùng Truyền âm phù mới vận dụng được thuật này.",
      detail: "Hàn Lập luyện được trong thời gian ở Thái Nam hội c138. Khác với Truyền âm phù (dùng phù lục làm vật trung gian), Truyền âm thuật dùng trực tiếp pháp lực. Hàn Lập phải dùng mấy lần Truyền âm phù trước mới vận dụng được thuật này.",
      nguon: ["c0138", "c0139"]
    },
    {
      id: "che-phu-chi-dao",
      name: "Chế phù chi đạo",
      cn: null,
      loai: "ky-nang",
      loaiLabel: "Kỹ năng — họa phù",
      phamCap: "Nhập môn (Hàn Lập tự học, thất bại 12 lần, chưa thành công)",
      hePhai: null,
      soHuu: ["Hàn Lập (đang học — cấp độ nhập môn thất bại)"],
      blurb: "Kỹ thuật luyện chế linh phù: rót linh lực qua tay cầm bút vào thân bút, dùng ngòi bút chấm đan sa họa phù chú lên lá bùa (Không bạch phù chỉ). Khổ Tang đại sư chỉ ra: người mới thường thất bại hơn trăm lần là bình thường; thành phù sư hợp cách cần ít nhất vạn lần luyện tập.",
      detail: "Hàn Lập lần đầu thử chế Định thần phù với Kim Trúc bút và đan sa tại Thái Nam hội c138 — thất bại 12 lần liên tiếp (nổ tung, tự bùng cháy, hoặc linh lực tan biến). Khổ Tang đại sư giải thích đây là bình thường; phù sư chuyên nghiệp cực hiếm vì bồi dưỡng tốn kém. Hàn Lập tạm bỏ ý định tự chế phù, chuyển sang mua Định thần phù về dùng.",
      nguon: ["c0136", "c0138"]
    },
    {
      id: "ngu-dan-lien-phat",
      name: "Ngũ đạn liên phát",
      cn: null,
      loai: "thuat",
      loaiLabel: "Thuật — tấn công",
      phamCap: "Chưa xác định — biến tấu sơ cấp của Hỏa đạn thuật",
      hePhai: null,
      soHuu: ["Hàn Lập"],
      blurb: "Biến tấu của Hỏa đạn thuật do Hàn Lập tự phát triển: thay vì bắn một quả cầu lửa lớn, bắn năm quả cầu lửa nhỏ liên tiếp từ năm ngón tay, tạo ra một chuỗi công kích liên hoàn. Công lực mỗi viên yếu hơn Hỏa đạn thuật chuẩn nhưng bù lại tốc độ và mật độ công kích.",
      detail: "Hàn Lập dùng trong trận phục kích tại vũng lầy c142: bắn năm quả cầu lửa nhỏ từ năm ngón tay cùng lúc (liên phát). Đây là biến tấu tự phát triển từ Hỏa đạn thuật — thay đổi cách tập trung linh lực, chia đều cho năm ngón thay vì tập trung toàn bộ vào một điểm.",
      nguon: ["c0142"]
    },
    {
      id: "thuat-bien-cat",
      name: "Thuật biến cát",
      cn: null,
      loai: "thuat",
      loaiLabel: "Thuật — địa hệ",
      phamCap: "Chưa xác định — pháp thuật hệ thổ/địa",
      hePhai: null,
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật hệ thổ khiến mặt đất dưới chân đối phương hóa thành cát lún, làm địch mất thăng bằng và giảm cơ động. Hàn Lập dùng kết hợp với Kim Cương phù và Phù Bảo trong trận chiến tại c143.",
      detail: "Hàn Lập thi triển tại c143 trong trận đối phó hai kẻ phục kích: dùng Thuật biến cát làm đất dưới chân đại hán phát hoàng quang hóa cát, kết hợp đồng thời với Kim Cương phù tạo kim tráo và kích phát Phù Bảo (kiếm quang). Chiến thuật ba lớp: khống chế vị trí + phòng thủ + tấn công tổng lực.",
      nguon: ["c0143"]
    },
    {
      id: "cu-luc-thuat",
      name: "Cự lực thuật",
      cn: null,
      loai: "thuat",
      loaiLabel: "Thuật — cường hóa thân thể",
      phamCap: "Chưa xác định — thuật cường hóa lực lượng",
      hePhai: null,
      soHuu: ["hán tử áo vàng (kẻ phục kích @c142)"],
      blurb: "Pháp thuật tăng cường lực lượng thân thể, cho phép người dùng tung ra đòn tấn công mạnh mẽ gấp nhiều lần thông thường. Hán tử áo vàng (một trong hai kẻ phục kích) thi triển khi đánh Hàn Lập ở vũng lầy, gây thương tích nặng (vai và chân trái).",
      detail: "Xuất hiện c142: hán tử áo vàng dùng Cự lực thuật tấn công Hàn Lập trong trận phục kích tại vũng lầy, gây thương tích nghiêm trọng — vai và chân trái bị thương. Đây là thuật của đối địch, không phải của Hàn Lập.",
      nguon: ["c0142"]
    },
    {
      id: "tho-giap-thuat",
      name: "Thổ giáp thuật",
      cn: null,
      loai: "thuat",
      loaiLabel: "Thuật — phòng thủ địa hệ",
      phamCap: "Chưa xác định — pháp thuật hệ thổ phòng thủ",
      hePhai: null,
      soHuu: ["đại hán phát hoàng quang (kẻ phục kích @c143)"],
      blurb: "Pháp thuật hệ thổ triệu hoán lớp giáp đất đá bọc quanh thân, tăng khả năng phòng thủ trước đòn vật lý và pháp thuật. Đại hán phát hoàng quang (một trong hai kẻ phục kích) thi triển khi bị Hàn Lập tấn công tại c143.",
      detail: "Xuất hiện c143: đại hán phát hoàng quang dùng Thổ giáp thuật phòng thủ khi Hàn Lập phản công. Thuật hệ thổ phòng thủ, nhưng không đủ để chặn Phù Bảo (kiếm quang) và tổ hợp công kích của Hàn Lập. Đây là thuật của đối địch.",
      nguon: ["c0143"]
    },
    {
      id: "truc-co-dan-cong-thuc",
      name: "Trúc Cơ đan (công thức luyện chế)",
      cn: null,
      loai: "dan-duoc",
      loaiLabel: "Đan dược — đột phá Trúc Cơ kỳ",
      phamCap: "Không rõ phẩm cấp — đan đột phá bậc nhất tiên giới phổ thông",
      hePhai: null,
      soHuu: ["Hứa lão (giữ công thức tại Nhạc Lộc điện)"],
      blurb: "Công thức luyện chế Trúc Cơ đan — đan đột phá từ Luyện Khí kỳ lên Trúc Cơ kỳ. Yêu cầu tiên thiên chân hỏa hoặc địa phế chi hỏa; 3 chủ dược đặc biệt; hơn 30 phụ dược. Hàn Lập đọc từ ngọc đồng xanh tại Nhạc Lộc điện — phát hiện địa phế chi hỏa có thể thay thế, nhưng vẫn thiếu 3 chủ dược.",
      detail: "Xuất hiện c155–c156: Hàn Lập tại lầu hai tàng thư Nhạc Lộc điện đọc ngọc đồng xanh chứa phương pháp luyện Trúc Cơ đan. Điều kiện: cần tiên thiên chân hỏa (hoặc thay bằng địa phế chi hỏa theo tiết lộ Hứa lão @c156); 3 chủ dược không có hạt giống tại Hoàng Phong Cốc (@c159: Mã sư bá xác nhận); hơn 31 phụ dược — Hàn Lập đã có 31 loại trong Bách Dược Viên nhưng thiếu 3 chủ dược. Công thức từ lầu hai Nhạc Lộc điện, phí đọc 1 linh thạch/canh giờ.",
      nguon: ["c0155", "c0156", "c0159"]
    },
    {
      id: "dinh-nhan-dan-cong-thuc",
      name: "Định nhan đan (công thức luyện chế)",
      cn: null,
      loai: "dan-duoc",
      loaiLabel: "Đan dược — giữ dung nhan",
      phamCap: "Không rõ phẩm cấp — đan dược giữ nguyên vẻ ngoài",
      hePhai: null,
      soHuu: ["Hứa lão (giữ công thức tại Nhạc Lộc điện)"],
      blurb: "Công thức luyện chế Định nhan đan — đan dược giữ nguyên vẻ ngoài, ngăn lão hóa. Không cần tiên thiên chân hỏa nhưng yêu cầu dược liệu có dược tính ngàn năm. Hàn Lập đọc từ ngọc đồng đỏ tại Nhạc Lộc điện, giữ lại vì có thể tự luyện để bán.",
      detail: "Xuất hiện c155: Hàn Lập đọc ngọc đồng đỏ tại lầu hai Nhạc Lộc điện, nội dung là công thức Định nhan đan. Điểm khác biệt so với Trúc Cơ đan: không cần tiên thiên chân hỏa, nhưng các dược liệu chủ yếu cần đạt dược tính ngàn năm — cũng là điều kiện rất khó đáp ứng. Phí đọc 1 linh thạch/canh giờ, tổng 2 ngọc đồng là 2 linh thạch.",
      nguon: ["c0155"]
    },
    {
      id: "hoa-xa-thuat",
      name: "Hỏa Xà Thuật",
      cn: null,
      loai: "thuat",
      loaiLabel: "Thuật — công kích hỏa hệ",
      phamCap: "Sơ cấp bậc trung — pháp thuật hỏa hệ tấn công",
      hePhai: "Hoàng Phong Cốc",
      soHuu: ["Ngô Phong (giảng dạy @c159)"],
      blurb: "Pháp thuật hỏa hệ sơ cấp bậc trung, thi triển rắn lửa phun về phía địch. Ngô Phong giảng dạy cho các đệ tử tại Truyền Công Các, trong đó có Hàn Lập.",
      detail: "Xuất hiện c159: Ngô Phong giảng Hỏa Xà Thuật tại Truyền Công Các. Đây là pháp thuật hỏa hệ sơ cấp bậc trung — phân cấp bậc trung trong hệ sơ cấp. Ngô Phong là người dạy, các đệ tử Luyện Khí kỳ Hoàng Phong Cốc là học viên.",
      nguon: ["c0159"]
    },
    {
      id: "liem-khi-thuat",
      name: "Liễm khí thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — ẩn lực",
      phamCap: "Sơ cấp phụ trợ",
      hePhai: "Hoàng Phong Cốc (Ngô Phong truyền)",
      soHuu: ["Hàn Lập (học từ Ngô Phong @c161)"],
      blurb: "Thuật thu giấu pháp lực, làm bản thân trông như người phàm hoặc đệ tử pháp lực yếu. Ngô Phong truyền cho Hàn Lập trước khi hắn vào phường thị chuẩn bị Huyết Cấm Thí Luyện — giúp tránh bị cao thủ tiêu diệt trước vì lộ pháp lực.",
      detail: "Hàn Lập học từ Ngô Phong tại c161. Mục đích thực tế: giảm rủi ro trong môi trường Huyết Cấm Thí Luyện và phường thị đông đảo tu tiên giả.",
      nguon: ["c0161"]
    },
    {
      id: "phong-tuong-thuat",
      name: "Phong tường thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — phong hệ tấn công/phòng thủ",
      phamCap: "Cao cấp (phù vàng cấp cao) — phong linh căn",
      hePhai: "Không rõ — phong linh căn chuyên dùng",
      soHuu: ["Lục sư huynh"],
      blurb: "Pháp thuật phong hệ của Lục sư huynh, dùng từ phù vàng cấp cao. Tạo tường gió lốc xoáy uy lực lớn. Dùng trong ác đấu c167–c168, phá vỡ Tinh cương cự hoàn của Hàn Lập.",
      detail: "Xuất hiện c167: Lục sư huynh dùng phong phược thuật + Phong tường thuật phản công. Tại c168: Phong tường thuật phá vỡ Tinh cương cự hoàn lớp ngoài của Hàn Lập.",
      nguon: ["c0167", "c0168"]
    },
    {
      id: "hoa-giao",
      name: "Hóa giao (tuyệt chiêu Thanh giao kỳ)",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Tuyệt chiêu pháp khí — phong hệ",
      phamCap: "Tuyệt chiêu pháp khí cấp cao — phong linh căn",
      hePhai: "Không rõ — chuyên phối hợp với Thanh giao kỳ",
      soHuu: ["Lục sư huynh"],
      blurb: "Tuyệt chiêu của Lục sư huynh: kích hoạt Thanh giao kỳ biến thành Thanh giao khổng lồ (hình phách phong thuộc tính), uy lực cực mạnh. Bị cự kiếm xám (phù bảo) của Hàn Lập chặn đứng và bào mòn dần đến c169.",
      detail: "Xuất hiện c168: Lục sư huynh dùng Hóa giao khi thế bất lợi. Thanh giao kỳ biến thành Thanh giao dài khổng lồ ánh sáng xanh. Hai bên giằng co: cự kiếm xám vs Thanh giao. Thanh giao bị bào mòn từ c168 đến c169, còn ~một trượng thì Lục sư huynh thu hồi.",
      nguon: ["c0168", "c0169"]
    },
    {
      id: "thuy-trao-thuat",
      name: "Thủy tráo thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — thủy hệ phòng thủ/trói buộc",
      phamCap: "Sơ cấp thủy hệ",
      hePhai: null,
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật thủy hệ Hàn Lập dùng phòng thủ trước cuộc tấn công của Lục sư huynh. Điểm kỳ lạ là dù đã kích hoạt xong, pháp thuật vẫn tiêu hao pháp lực liên tục qua 'linh tuyến' — điểm yếu này Hàn Lập nhận ra và dừng thuật để tiết kiệm pháp lực trong khi địch cũng mất lực tương tự.",
      detail: "Xuất hiện c166: Hàn Lập triển khai Thủy tráo phù / Thủy tráo thuật phòng thủ. Tại c169–c170: nhớ lại bài học linh tuyến — pháp thuật đã kích hoạt vẫn tiếp tục rút pháp lực; Hàn Lập dừng Thủy tráo thuật để tiết kiệm pháp lực trong khi Lục sư huynh không biết và vẫn bị rút lực. Đây là bí quyết giúp Hàn Lập thắng.",
      nguon: ["c0166", "c0169", "c0170"]
    },
    {
      id: "dinh-than-thuat",
      name: "Định Thần thuật",
      cn: null,
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — khống chế",
      phamCap: "Sơ cấp (từ bí tịch Trường Xuân công hoặc phù lục tương đương)",
      hePhai: "Trường Xuân công / Định thần phù",
      soHuu: ["Hàn Lập"],
      blurb: "Pháp thuật khống chế thân thể mục tiêu — cùng tác dụng với Định thần phù. Hàn Lập dùng tại c170 để khống chế Trần sư muội đang mất kiểm soát do Hợp Hoan đan, đưa nàng đến nơi an toàn.",
      detail: "Xuất hiện c170: Hàn Lập dùng Định thần phù / Định Thần thuật khống chế Trần sư muội. Ghi chú: Định thần phù là phù lục biến thể, Định Thần thuật là pháp thuật trực tiếp; cả hai cùng mục đích. Hàn Lập chưa luyện thành Định thần phù từ trước (c75) nhưng đến c170 dùng được thuật.",
      nguon: ["c0170"]
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].map = {
  updatedAt: "2026-06-11",
  count: 57,
  nodes: [
    {
      id: "kinh-chau",
      name: "Kính Châu",
      cn: "镜州",
      capDo: "chau",
      parentId: null,
      blurb: "Châu lớn chứa Thái Hà sơn và Bách Mãng sơn. Địa bàn hoạt động của Thất Huyền môn và Dã Lang bang.",
      detail: "Một trong các châu (vùng địa lý lớn). Thất Huyền môn từng đứng đầu Kính Châu hơn mười năm trước khi suy tàn. Hiện cả Thất Huyền môn và Dã Lang bang đều tranh giành địa bàn tại đây.",
      theLucLienQuan: ["Thất Huyền môn", "Dã Lang bang"],
      nguon: ["c0002", "c0003"]
    },
    {
      id: "so-chau",
      name: "Sổ Châu",
      cn: null,
      capDo: "chau",
      parentId: null,
      blurb: "Châu lân cận Kính Châu; thanh danh Thất Huyền môn từng lan tới đây.",
      detail: "Được nhắc tới như vùng ảnh hưởng cũ của Thất Huyền môn thời thịnh vượng.",
      theLucLienQuan: [],
      nguon: ["c0002"]
    },
    {
      id: "thai-ha-son",
      name: "Thái Hà sơn",
      cn: "彩霞山",
      capDo: "gioi-nho",
      parentId: "kinh-chau",
      blurb: "Tổng môn Thất Huyền môn. Nguyên tên Lạc Phượng sơn — tương truyền có phượng hoàng ngũ sắc rớt xuống hóa thành núi. Một trong những núi lớn của Kính Châu, diện tích lớn thứ hai sau Bách Mãng sơn.",
      detail: "Phương viên mười dặm, hơn mười sơn phong. Đỉnh chính là Lạc Nhật phong — cao nhất, duy nhất một con đường độc đạo dẫn lên, mười ba trạm gác cả minh cả ám. Tổng đàn Thất Huyền môn đặt tại Lạc Nhật phong. Thất Huyền môn bị bức dời về đây từ hơn trăm năm trước.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0002", "c0003"]
    },
    {
      id: "lac-nhat-phong",
      name: "Lạc Nhật phong",
      cn: "落日峰",
      capDo: "khac",
      parentId: "thai-ha-son",
      blurb: "Đỉnh núi cao nhất và chính yếu của Thái Hà sơn, nơi đặt tổng đàn Thất Huyền môn. Con đường độc đạo dẫn lên, có mười ba trạm gác. Bên trong có hệ thống cơ quan bẫy Đại Hãm Tịnh do Lý Môn chủ đời thứ bảy thiết kế, tận dụng động thạch nhũ tự nhiên chiếm hai phần ba lòng núi.",
      detail: "Chỉ có một con đường độc đạo dẫn lên, hiểm trở, thiết lập mười ba trạm gác cả minh cả ẩn. Đây là trung tâm quyền lực của Thất Huyền môn, còn gọi là Tổng đường Thất Huyền môn. Bên trong có động thạch nhũ tự nhiên chiếm khoảng hai phần ba lòng núi — cấu trúc tạo điều kiện cho hệ thống cơ quan Đại Hãm Tịnh do Lý Môn chủ đệ thất đại thiết kế từ hơn hai trăm năm trước. Trên đỉnh có Thất huyền điện gồm một điện lớn và sáu điện nhỏ — trung tâm nghị sự. Phía trước Thất huyền điện có bãi đất trống đủ rộng để thiết lập tử đấu trường khi cần. Tại c84 Vương Tuyệt Sở kích hoạt cơ quan Địa Động trong núi để cản bước quân Dã Lang bang.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0003", "c0081", "c0082", "c0083", "c0084", "c0085", "c0086", "c0087", "c0088", "c0089", "c0090"]
    },
    {
      id: "tu-dau-truong-lac-nhat-phong",
      name: "Tử đấu trường (trước Thất huyền điện)",
      cn: null,
      capDo: "khac",
      parentId: "lac-nhat-phong",
      blurb: "Bãi đấu trường thiết lập tạm thời ngay trước Thất huyền điện tại Lạc Nhật Phong, nơi tổ chức tử khế huyết đấu 50 đối 50 giữa Thất Huyền môn và Dã Lang bang.",
      detail: "Được thiết lập cho cuộc huyết đấu theo tử khế ký giữa Vương Tuyệt Sở và Cổ Thiên Long. Không gian đủ rộng cho năm mươi người mỗi bên tham chiến. Cuộc huyết đấu bắt đầu từ c87 và đang tiếp diễn.",
      theLucLienQuan: ["Thất Huyền môn", "Dã Lang bang"],
      nguon: ["c0086", "c0087", "c0088", "c0089", "c0090"]
    },
    {
      id: "bach-mang-son",
      name: "Bách Mãng sơn",
      cn: "百莽山",
      capDo: "khac",
      parentId: "kinh-chau",
      blurb: "Ngọn núi lớn nhất Kính Châu về diện tích, lớn hơn Thái Hà sơn.",
      detail: "Được nhắc tới như điểm tham chiếu địa lý, lớn hơn Thái Hà sơn.",
      theLucLienQuan: [],
      nguon: ["c0003"]
    },
    {
      id: "luyen-cot-nhai",
      name: "Luyện Cốt Nhai",
      cn: "炼骨崖",
      capDo: "khac",
      parentId: "thai-ha-son",
      blurb: "Địa điểm trắc thí nhập môn của Thất Huyền môn — vách núi luyện cốt. Gồm ba chặng: rừng trúc dốc, bãi cự thạch sắc bén, và vách đá thẳng đứng cao hơn 30 trượng.",
      detail: "Ba chặng: (1) Trúc lâm — sườn núi dốc đầy trúc; (2) Giải đất bích nhai — cự thạch gió gọt sắc bén; (3) Sơn nhai — vách đá thẳng đứng trên 30 trượng, có hơn mười dây thừng kết nút thả từ đỉnh. Leo lên đỉnh trước chính ngọ = đệ tử chính thức.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0004"]
    },
    {
      id: "thanh-khach-vien",
      name: "Thanh khách viện",
      cn: "青客院",
      capDo: "khac",
      parentId: "thai-ha-son",
      blurb: "Khu nhà trong Thất Huyền môn dành cho đệ tử mới dự thi nghỉ đêm trước khi chọn lựa.",
      detail: "Nơi đám trẻ dự thi nghỉ qua đêm trước buổi trắc thí sáng hôm sau.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0003"]
    },
    {
      id: "than-thu-coc",
      name: "Thần thủ cốc",
      cn: "神手谷",
      capDo: "khac",
      parentId: "thai-ha-son",
      blurb: "Tiểu sơn cốc xanh biếc trong địa bàn Thất Huyền môn — nơi ở và làm việc của Mặc đại phu, đồng thời là nơi Hàn Lập tu luyện và học y thuật suốt nhiều năm. Có dược vườn lớn bên trái, mấy căn nhà nhỏ bên phải, chỉ một con đường ra vào.",
      detail: "Vương môn chủ cấp cho Mặc đại phu làm trạch phủ. Trong cốc có dược vườn trồng nhiều dược thảo lạ. Trên vách núi trong cốc có gian thạch thất luyện công riêng dựng từ đá hoa cương Bích đào không — Mặc đại phu bức được trưởng lão cấp cho Hàn Lập độc dụng. Mặc đại phu từng phong tỏa toàn bộ sơn cốc, chuyển việc khám bệnh ra ngoài, để Hàn Lập chuyên tâm tu luyện khẩu quyết trong 4 năm — cả cốc như giang sơn riêng của Hàn Lập. Sau khi Mặc đại phu hạ sơn và Trương Thiết biến mất, chỉ còn mình Hàn Lập ở đây.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0005", "c0009", "c0014", "c0015"]
    },
    {
      id: "son-bien-tieu-thon",
      name: "Sơn Biên tiểu thôn",
      cn: null,
      capDo: "khac",
      parentId: null,
      blurb: "Quê nhà Hàn Lập — làng ven núi nghèo, nhà tranh vách đất. Nơi Hàn Lập lớn lên trước khi rời đi.",
      detail: "Làng quê nghèo, dân làng lên núi đốn củi và hái quả dại. Người biết chữ duy nhất là Lão Trương từng làm thư đồng.",
      theLucLienQuan: ["Hàn gia"],
      nguon: ["c0001"]
    },
    {
      id: "thanh-nguu-tran",
      name: "Thanh Ngưu trấn",
      cn: "青牛镇",
      capDo: "thanh",
      parentId: "kinh-chau",
      blurb: "Tiểu trấn nhỏ — điểm tập hợp đệ tử mới Thất Huyền môn. Có Xuân Hương tửu lâu (do Thất Huyền môn điều hành) và Thanh Ngưu khách sạn.",
      detail: "Con đường chủ đạo chạy Đông-Tây. Có Thanh Ngưu khách sạn (duy nhất, nằm cuối trấn phía tây) và Xuân Hương tửu lâu (sâu trong trấn). Tam thúc Hàn Lập làm đại chưởng quỹ tại đây. Thất Huyền môn khống chế hơn chục tiểu trấn bao gồm vùng này.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0002"]
    },
    {
      id: "xuan-huong-tuu-lau",
      name: "Xuân Hương tửu lâu",
      cn: null,
      capDo: "khac",
      parentId: "thanh-nguu-tran",
      blurb: "Tửu lâu cổ kính ở Thanh Ngưu trấn, thuộc Thất Huyền môn. Tam thúc Hàn Lập làm đại chưởng quỹ tại đây.",
      detail: "Phía sau có tiểu viện vắng — nơi Hàn Lập nghỉ đợi người của tông môn. Là một trong nhiều cơ sở kinh doanh Thất Huyền môn điều hành qua đệ tử ngoại môn.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0002"]
    },
    {
      id: "tieu-thanh-phu-can",
      name: "Tiểu thành phụ cận",
      cn: null,
      capDo: "thanh",
      parentId: null,
      blurb: "Thị trấn nhỏ gần Sơn Biên tiểu thôn — nơi đại ca Hàn Lập học nghề thợ rèn và tam thúc làm đại chưởng quỹ tửu lâu.",
      detail: "Nhỏ hơn Thanh Ngưu trấn. Có tửu lâu và lò rèn.",
      theLucLienQuan: [],
      nguon: ["c0001"]
    },
    {
      id: "lam-chau",
      name: "Lam Châu",
      cn: null,
      capDo: "chau",
      parentId: "viet-quoc",
      blurb: "Một trong 13 châu của Việt quốc; diện tích đứng thứ 8 nhưng sung túc thứ 2 toàn quốc (sau Tân Châu). Vựa lương thực số một Việt quốc. Cố hương của Mặc đại phu — địa bàn trung tâm Quyển 2. Kinh Giao hội từng là một trong ba đại bá chủ Lam Châu; Thăng Tiên hội của giới tu tiên được tổ chức tại đây.",
      detail: "Lam Châu là châu phủ lớn thứ tám trong 13 châu Việt quốc về diện tích nhưng sung túc thứ hai (sau Tân Châu). Đất phì nhiêu, nhiều thuỷ đạo — vựa lương thực số một toàn quốc; giao thông đường thuỷ phát đạt, thuyền bè qua lại như con thoi. Gia Nguyên Thành nằm ở trung bộ Lam Châu, là đệ nhất đại thành nhờ Hương Lỗ đại vận hà và nhiều đường thuỷ bộ giao nhau. Địa bàn hoạt động cũ của Mặc Cư Nhân — hắc bạch lưỡng đạo đều nể sợ; sau khi bị thân tín ám toán, ông buộc phải bỏ cơ nghiệp và biệt tăm. Ba đại thế lực hiện tại: Thiên Phách môn (Đông thành), Huynh đệ minh (Bắc thành), Kinh Giao hội (Nam thành).",
      theLucLienQuan: ["Kinh Giao hội", "Thiên Phách môn", "Huynh đệ minh"],
      nguon: ["c0030", "c0100", "c0101", "c0105", "c0106"]
    },
    {
      id: "that-tuyet-duong-tang-thu",
      name: "Thất Tuyệt đường tàng thư",
      cn: null,
      capDo: "khac",
      parentId: "thai-ha-son",
      blurb: "Kho chứa bí tịch tuyệt học của Thất Huyền môn bên trong Thất Tuyệt đường. Có tuần đường hộ pháp canh giữ. Nơi lưu trữ kiếm phổ Trát Nhãn kiếm pháp theo di chúc trưởng lão sáng lập.",
      detail: "Phần tàng thư bên trong Thất Tuyệt đường — nơi cất giữ các bí tịch và tuyệt kỹ của Thất Huyền môn. Có tuần đường hộ pháp canh giữ, đột nhập trộm bí tịch là nguy hiểm đến tính mạng. Trong đó có 74 quyển bí tịch đều ghi 'Trát Nhãn kiếm phổ' bị quăng vào góc tối không ai để ý. Lệ Phi Vũ lén trộm toàn bộ mang ra ngoài cho Hàn Lập nghiên cứu.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0033", "c0034", "c0035", "c0036", "c0037", "c0039", "c0040"]
    },
    {
      id: "khe-nui-an-tu",
      name: "Khe núi hình chữ nhất (nơi Hàn Lập ẩn tu)",
      cn: null,
      capDo: "khac",
      parentId: "thai-ha-son",
      blurb: "Khe núi hoang vu ẩn mật trên sơn mạch Thất Huyền môn — nơi Hàn Lập bí mật ẩn tu bốn tháng trước khi gặp lại Mặc đại phu. Hai đỉnh núi cao kẹp giữa tạo thành hình chữ nhất; hai đầu khe bít kín bởi bụi gai, chỉ ra/vào bằng dây thừng thả từ đỉnh núi thấp hơn. Đỉnh khe phủ màn dây leo xanh tự nhiên che kín không bị phát hiện từ trên cao.",
      detail: "Ẩn mật hơn nơi từng gặp Lệ Phi Vũ. Mọc đầy cây bụi gai chi chít, chỉ có một khoảng đất nhỏ cho người chen chân; đỉnh khe có màn dây leo xanh tự nhiên bít kín. Trong khe có khối đá lớn, bãi đất trống trung ương và một căn nhà gỗ nhỏ Hàn Lập tự xây. Hàn Lập dùng nơi này luyện Nhuyễn cốt công, Liễm tức công, Ngụy nặc thuật và La Yên bộ trong ~hai tháng. Vân sí điểu (tai mắt Mặc đại phu) luôn đậu cành cây trong khe theo dõi.",
      theLucLienQuan: [],
      nguon: ["c0042"]
    },
    {
      id: "nui-gan-thon",
      name: "Núi gần Sơn Biên tiểu thôn",
      cn: null,
      capDo: "khac",
      parentId: "son-bien-tieu-thon",
      blurb: "Ngọn núi dân làng lên đốn củi và hái hồng tương quả. Nơi Hàn Lập hay lên hái quả cho em gái.",
      detail: "Không có yếu tố tu tiên. Là không gian phàm trần của thôn làng.",
      theLucLienQuan: [],
      nguon: ["c0001"]
    },
    {
      id: "lac-sa-pha",
      name: "Lạc Sa pha",
      cn: null,
      capDo: "khac",
      parentId: "kinh-chau",
      blurb: "Địa điểm trung lập giữa Thất Huyền môn và Dã Lang bang. Được Dã Lang bang đề nghị làm nơi đàm phán hòa bình. Thực chất là bẫy phục kích: Dã Lang bang bố trí người cầm nỏ liên châu quân dụng ẩn dưới đất và chiếm trước các điểm nghỉ dọc đường.",
      detail: "Địa điểm nằm giữa địa bàn Thất Huyền môn và Dã Lang bang. Được hai bên dùng làm nơi gặp gỡ trung lập. Trận phục kích tại đây diễn ra vào khoảng c76: Dã Lang bang dùng lượng lớn nỏ liên châu quân dụng từ dưới đất đồng loạt bắn lên; cao thủ sau đó xông vào hỗn chiến. Hầu hết đoàn đàm phán Thất Huyền môn gồm Ngô phó môn chủ, hộ pháp, cung phụng, trưởng lão bị giết tại đây.",
      theLucLienQuan: ["Thất Huyền môn", "Dã Lang bang"],
      nguon: ["c0076", "c0077"]
    },
    {
      id: "ngoai-nhan-duong",
      name: "Ngoại Nhận Đường",
      cn: null,
      capDo: "khac",
      parentId: "thai-ha-son",
      blurb: "Phân đường ngoại môn của Thất Huyền môn. Lệ Phi Vũ trở thành phó đường chủ sau khi lập công giết tử y chưởng kỳ sứ Dã Lang bang, rồi được phong đường chủ khi Hàn Lập rời môn.",
      detail: "Một trong các phân đường ngoại môn Thất Huyền môn (cùng với Phi Điểu đường, Tụ Bảo đường, Tứ Hải đường). Lệ Phi Vũ được thăng chức phó đường chủ Ngoại Nhận Đường tại c74 — đây là bước tiến sau khi đã được phong hộ pháp tại c43. Tại c98, được Vương Tuyệt Sở chính thức nhận làm đệ tử và phong làm đường chủ.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0074", "c0098"]
    },
    {
      id: "viet-quoc",
      name: "Việt quốc",
      cn: null,
      capDo: "quoc-gia",
      parentId: null,
      blurb: "Quốc gia nơi diễn ra sự kiện từ Quyển 2. Có 13 châu, trong đó Lam Châu (diện tích thứ 8, sung túc thứ 2) và Tân Châu (sung túc nhất) là những châu nổi bật.",
      detail: "Việt quốc gồm 13 châu. Lam Châu là châu thứ tám về diện tích nhưng sung túc thứ hai toàn quốc; Tân Châu là châu sung túc nhất. Gia Nguyên Thành nằm ở Lam Châu, là đích đến đầu tiên của Hàn Lập khi bắt đầu Quyển 2.",
      theLucLienQuan: [],
      nguon: ["c0100"]
    },
    {
      id: "gia-nguyen-thanh",
      name: "Gia Nguyên Thành",
      cn: null,
      capDo: "thanh",
      parentId: "lam-chau",
      blurb: "Đệ nhất đại thành của Lam Châu, nằm ở trung bộ châu; không phải phủ thành nhưng là nút giao thông thuỷ-bộ sầm uất nhờ Hương Lỗ đại vận hà chạy qua trung tâm. Cố hương của Mặc đại phu — đích đến của Hàn Lập khi bắt đầu Quyển 2.",
      detail: "Gia Nguyên Thành tuy không phải phủ thành nhưng là thành lớn nhất Lam Châu nhờ vị trí địa lợi: Hương Lỗ đại vận hà (sông nối Nam–Bắc Việt quốc) chạy qua trung tâm, cộng với nhiều đường thuỷ bộ giao nhau, tạo nên nút giao thông buôn bán. Là cố hương của Mặc đại phu. Hàn Lập và Khúc Hồn tới đây sau ba tháng đi thuyền từ nơi cũ. Tại đây có cục diện ba bang: Tứ bình bang và Thiết chưởng hội liên minh chống Độc long bang.",
      theLucLienQuan: ["Tứ bình bang", "Thiết chưởng hội", "Độc long bang"],
      nguon: ["c0100"]
    },
    {
      id: "tan-chau",
      name: "Tân Châu",
      cn: null,
      capDo: "chau",
      parentId: "viet-quoc",
      blurb: "Châu sung túc nhất trong Việt quốc; Lam Châu xếp thứ hai sau Tân Châu.",
      detail: "Nhắc đến trong bối cảnh so sánh: Lam Châu sung túc thứ hai Việt quốc, chỉ sau Tân Châu. Không có thêm chi tiết khác trong nguyên tác đến chương 100.",
      theLucLienQuan: [],
      nguon: ["c0100"]
    },
    {
      id: "huong-lo-dai-van-ha",
      name: "Hương Lỗ đại vận hà",
      cn: null,
      capDo: "khac",
      parentId: "gia-nguyen-thanh",
      blurb: "Con sông lớn (đại vận hà) nối Nam–Bắc Việt quốc, chạy qua trung tâm Gia Nguyên Thành — lý do thành này trở thành nút giao thông buôn bán quan trọng nhất Lam Châu.",
      detail: "Hương Lỗ đại vận hà là tuyến đường thuỷ huyết mạch nối hai miền Nam–Bắc Việt quốc, chạy thẳng qua trung tâm Gia Nguyên Thành. Nhờ con sông này mà hàng hoá lưu thông dễ dàng, biến Gia Nguyên Thành thành đệ nhất đại thành của Lam Châu dù không phải phủ thành.",
      theLucLienQuan: [],
      nguon: ["c0100"]
    },
    {
      id: "mac-phu",
      name: "Mặc phủ",
      cn: null,
      capDo: "khac",
      parentId: "gia-nguyen-thanh",
      blurb: "Phủ đệ gia tộc Mặc đại phu (Mặc Cư Nhân) trên đường Nam Lăng phía Nam Gia Nguyên Thành. Cổng lớn màu đen, biển hiệu 'Mặc phủ'. Nơi ở của Nghiêm thị và các phu nhân, con cái. Phòng thủ nghiêm mật: nhiều thủ vệ thường trực, hậu viện bố trí bẫy ám tiễn dày đặc.",
      detail: "Toạ lạc trên đường Nam Lăng — con phố phồn hoa nhất phía Nam Gia Nguyên Thành, đối diện Hương Gia tửu lâu. Cổng lớn màu đen với biển 'Mặc phủ'; canh gác tám đại hán mặc đồng phục được huấn luyện. Hậu viện có hoa viên lớn trồng hoa cỏ hiếm và thảo dược — gợi có người kế thừa y thuật Mặc đại phu. Phòng bị cực nghiêm: nhiều tầng ám tiễn bố trí kín đáo dọc đường vườn, thủ vệ tuần canh liên tục. Ngôi lầu nhỏ hai tầng bên trong có canh gác đặc biệt nghiêm (hai ba chục thủ vệ) — nơi Nghiêm thị và con gái Mặc Thải Hoàn ở. Tổng đà Kinh Giao hội đặt tại Gia Nguyên Thành, liên quan chặt chẽ với Mặc phủ.",
      theLucLienQuan: ["Kinh Giao hội"],
      nguon: ["c0104", "c0105", "c0106", "c0107", "c0108", "c0109", "c0110"]
    },
    {
      id: "huong-gia-tuu-lau",
      name: "Hương Gia tửu lâu",
      cn: null,
      capDo: "khac",
      parentId: "gia-nguyen-thanh",
      blurb: "Tửu lâu ba tầng đối diện Mặc phủ trên đường Nam Lăng, một trong những tửu lâu lớn nhất Gia Nguyên Thành. Chiêu bài là rượu 'Bách lý hương'. Nơi Hàn Lập ngồi theo dõi Mặc phủ từ lầu hai.",
      detail: "Toạ lạc trên đường Nam Lăng đối diện cổng Mặc phủ — vị trí lý tưởng để quan sát. Hàn Lập chọn chỗ ngồi lầu hai cạnh tấm vách để nghe lén mà không bị chú ý. Người áo lam (Lão Tam) cũng ghé đây thưởng thức thức ăn thế gian, vô tình ngồi gần Hàn Lập — dẫn tới cuộc 'chạm mặt' giữa hai tu tiên.",
      theLucLienQuan: [],
      nguon: ["c0106", "c0107"]
    },
    {
      id: "tieu-tuong-vien",
      name: "Tiêu Tương Viện",
      cn: null,
      capDo: "khac",
      parentId: "gia-nguyen-thanh",
      blurb: "Kỹ viện (nhà thổ) khu Tây thành Gia Nguyên Thành. Hoa khôi Tiểu Kim Chi. Bang chủ Tứ bình bang Trầm Trọng Sơn thường xuyên lui tới để gặp Tiểu Kim Chi — thói quen này được Hàn Lập lợi dụng trong kế hoạch thâu tóm Tứ bình bang.",
      detail: "Nằm trong khu Tây thành Gia Nguyên Thành — khu hỗn loạn của ba mươi ba tiểu bang phái. Địa điểm Trầm Trọng Sơn (bang chủ Tứ bình bang, ngoại hiệu 'Viên tí') thường xuyên lui tới gặp hoa khôi Tiểu Kim Chi. Hàn Lập nắm được thói quen này qua tin tức Tôn nhị cẩu cung cấp và đưa vào kế hoạch vô hiệu hóa Trầm Trọng Sơn, cài Tôn nhị cẩu lên bang chủ.",
      theLucLienQuan: ["Tứ bình bang"],
      nguon: ["c0120"]
    },
    {
      id: "nghiem-quy-thanh",
      name: "Nghiễm Quý thành",
      cn: null,
      capDo: "thanh",
      parentId: "lam-chau",
      blurb: "Thành phố cực nam Lam Châu, cách Thái Nam sơn khoảng 40 dặm. Điểm xuất phát gần nhất để đến Thái Nam sơn và Thái Nam cốc.",
      detail: "Tọa lạc ở cực nam Lam Châu. Hàn Lập dùng làm điểm tham chiếu để xác định vị trí Thái Nam sơn sau khi Tịch Thiết Ngưu cung cấp manh mối về Thái Nam cốc.",
      theLucLienQuan: [],
      nguon: ["c0125", "c0126"]
    },
    {
      id: "thai-nam-son",
      name: "Thái Nam sơn",
      cn: null,
      capDo: "son-mach",
      parentId: "lam-chau",
      blurb: "Ngọn núi cao hơn 3000m ở cực nam Lam Châu, cao thứ tư trong toàn châu. Trên đỉnh có Thái Nam tự (chùa). Phía bắc sườn núi có Thái Nam cốc bị màn sương mù trận pháp phong tỏa. Nơi Hàn Lập trị lành hàn độc và lần đầu gặp Vạn Tiểu Sơn.",
      detail: "Cao hơn 3000m, cao thứ tư Lam Châu. Trên đỉnh có Thái Nam tự. Phía bắc sườn núi có vùng sương mù che phủ quanh năm — là trận pháp che giấu lối vào Thái Nam cốc. Hàn Lập đến nơi này sau hai tháng từ khi rời Gia Nguyên Thành; trị lành hàn độc bằng Noãn dương bảo ngọc trong hơn 15 ngày tại đây.",
      theLucLienQuan: ["Thái Nam cốc"],
      nguon: ["c0125", "c0126"]
    },
    {
      id: "thai-nam-coc",
      name: "Thái Nam cốc",
      cn: null,
      capDo: "khac",
      parentId: "thai-nam-son",
      blurb: "Sơn cốc ba mặt là núi, phía bắc Thái Nam sơn, bị sương mù trận pháp che phủ. Lối vào duy nhất phải dùng Trương thông âm phù báo hiệu mới mở. Diện tích hơn trăm mẫu. Nơi tổ chức Thái Nam tiểu hội — sự kiện giao dịch năm năm một lần của tiểu bối tu tiên Lam Châu. Có cung điện lầu các hoa lệ và khu chợ buôn bán.",
      detail: "Ba mặt là núi cao, cửa vào duy nhất bị sương mù trận pháp phong tỏa. Vạn Tiểu Sơn dùng Trương thông âm phù để báo hiệu người bên trong mở đường — sương mù tách ra thành lối đi hẹp hai người đi sóng vai, không nhìn thấy điểm cuối. Bên trong: kỳ hoa dị thảo phủ kín, diện tích hơn trăm mẫu; có cung điện lầu các hoa lệ xa xỉ và sân chợ bố trí hình chữ Hồi (回) với đèn đồng và đá trắng phát quang. Thanh Nhan chân nhân là lão trưởng bối quản lý. Thái Nam tiểu hội 5 năm một lần; đặc biệt đông lần này vì Thăng Tiên đại hội tổ chức tại Lam Châu sau một tháng.",
      theLucLienQuan: ["Thái Nam tiểu hội"],
      nguon: ["c0125", "c0126", "c0128", "c0129"]
    },
    {
      id: "doc-ba-son-trang",
      name: "Độc Bá sơn trang",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Sơn trang của trang chủ Âu Dương Phi Thiên (ngoại hiệu 'Nộ sư'). Âu Dương Phi Thiên là sư phụ thứ bảy của Ngô Kiếm Minh, sở hữu tuyệt kỹ Phách vương giáp, ôm mộng bá chủ Lam Châu. Bị Hàn Lập ám sát tại c126.",
      detail: "Trang chủ Âu Dương Phi Thiên: tráng niên, không con cái, tuyệt kỹ võ công Phách vương giáp (toàn thân đao thương bất nhập — đứng đầu giang hồ phàm tục). Tâm kế cao, hiếm khi rời sơn trang, có dã tâm bá chủ Lam Châu. Là sư phụ thứ bảy của Ngô Kiếm Minh; chính vì quan hệ này Nghiêm thị mới nhắm hắn làm mục tiêu cần diệt. Chết vì một kiếm phù của Hàn Lập khi một mình ngắm trăng — Phách vương giáp vô dụng trước linh khí.",
      theLucLienQuan: ["Kinh Giao hội"],
      nguon: ["c0123", "c0126"]
    },
    {
      id: "ngoa-nguu-son",
      name: "Ngọa Ngưu sơn",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Ngọn núi nơi Tùng Văn đạo sĩ trú ngụ tại Thanh Ngưu quan. Tùng Văn đạo sĩ tự xưng là đạo sĩ của Thanh Ngưu quan trên Ngọa Ngưu sơn.",
      detail: "Được nhắc tới khi Tùng Văn đạo sĩ tự giới thiệu xuất thân. Là căn cứ của đạo quán Thanh Ngưu quan nơi Tùng Văn đạo sĩ tu luyện.",
      theLucLienQuan: [],
      nguon: ["c0130"]
    },
    {
      id: "thuong-lang-linh",
      name: "Thương Lang lĩnh",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Địa điểm xuất thân của hai huynh đệ song sinh Hắc Mộc và Hắc Kim. Cả hai là tán tu của Thương Lang lĩnh.",
      detail: "Được nhắc tới khi Tùng Văn đạo sĩ giới thiệu hai huynh đệ Hắc Mộc và Hắc Kim tại buổi họp nhóm tán tu.",
      theLucLienQuan: [],
      nguon: ["c0130"]
    },
    {
      id: "phi-lien-dong",
      name: "Phi Liên động",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Địa điểm xuất thân của Hồng Liên tán nhân — nữ tán tu ít nói trong nhóm Tùng Văn.",
      detail: "Được nhắc tới khi Tùng Văn giới thiệu các thành viên nhóm tán tu tại Thái Nam tiểu hội.",
      theLucLienQuan: [],
      nguon: ["c0130"]
    },
    {
      id: "bo-lo-son",
      name: "Bồ Lộ sơn",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Núi nơi Khổ Tang đại sư tu hành. Khổ Tang đại sư là hòa thượng tán tu của Bồ Lộ sơn.",
      detail: "Được nhắc tới khi giới thiệu Khổ Tang đại sư trong nhóm tán tu Tùng Văn. Là nơi tu hành của Khổ Tang trước khi tham gia Thái Nam tiểu hội.",
      theLucLienQuan: [],
      nguon: ["c0130"]
    },
    {
      id: "thien-thuy-trai",
      name: "Thiên thủy trại",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Địa điểm xuất thân của vợ chồng Hồ Bình Cô và Hùng Đại Lực. Hai vợ chồng đều là tán tu của Thiên thủy trại.",
      detail: "Được nhắc tới khi Tùng Văn giới thiệu các thành viên nhóm tán tu. Hồ Bình Cô và Hùng Đại Lực xuất thân Thiên thủy trại.",
      theLucLienQuan: [],
      nguon: ["c0130"]
    },
    {
      id: "van-mon-gian",
      name: "Vân Môn giản",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Địa điểm xuất thân của Ngô Cửu Chỉ — thiếu niên tán tu tư chất hơn người (tầng tám đại viên mãn). Ngô Cửu Chỉ được giới thiệu là người của Vân Môn giản.",
      detail: "Được nhắc tới khi Tùng Văn đạo sĩ giới thiệu Ngô Cửu Chỉ trong nhóm tán tu tại tiểu lâu Thái Nam hội c132.",
      theLucLienQuan: [],
      nguon: ["c0132"]
    },
    {
      id: "thach-thac-coc",
      name: "Thạch Thác cốc",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Địa điểm xuất thân của Hoàng Hiếu Thiên — tán tu pháp lực mạnh nhất nhóm Tùng Văn (mạnh hơn cả Tùng Văn đạo sĩ).",
      detail: "Được nhắc tới khi Tùng Văn đạo sĩ giới thiệu Hoàng Hiếu Thiên trong nhóm tán tu tại tiểu lâu Thái Nam hội c132.",
      theLucLienQuan: [],
      nguon: ["c0132"]
    },
    {
      id: "tan-diep-linh",
      name: "Tần Diệp lĩnh",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Căn cứ của gia tộc tu tiên Diệp gia. Diệp Báo tự xưng là người của Tần Diệp lĩnh. Liên quan đến Chu Nho — người Diệp gia đã bị Hàn Lập giết trước đây.",
      detail: "Theo lời Chu Nho (đã bị Hàn Lập giết ở c93), Tần Diệp lĩnh là nơi xuất thân của Diệp gia. Diệp Báo tại c131 tự xưng người Tần Diệp lĩnh. Đệ tử Diệp gia nhận diện qua đồ án hình lá cây trên áo.",
      theLucLienQuan: ["Diệp gia"],
      nguon: ["c0093", "c0131", "c0139"]
    },
    {
      id: "co-vu-son",
      name: "Cô Vũ sơn",
      cn: null,
      capDo: "khac",
      parentId: "lam-chau",
      blurb: "Căn cứ của Yến gia — đệ nhất tu tiên đại tộc Việt quốc, gia tộc duy nhất trong tu tiên đại phái có tu sĩ Kết Đan kỳ. Yến gia nuôi dưỡng linh cầm Song thủ vụ tại đây.",
      detail: "Được nhắc tới khi huynh muội Yến gia cưỡi linh cầm Song thủ vụ bay qua Thái Nam hội tới dự lôi đài Thăng Tiên đại hội c136. Yến gia là đệ nhất tu tiên đại tộc Việt quốc — gia tộc duy nhất có tu sĩ Kết Đan kỳ trong các tu tiên đại phái.",
      theLucLienQuan: ["Yến gia"],
      nguon: ["c0136"]
    },
    {
      id: "kien-chau",
      name: "Kiến Châu",
      cn: null,
      capDo: "chau",
      parentId: null,
      blurb: "Châu lớn nơi Hoàng Phong Cốc tọa lạc. Hoàng Phong Cốc nằm trong Thái Nhạc sơn thuộc Kiến Châu.",
      detail: "Nhắc tới tại c144 khi Vương sư thúc giới thiệu địa thế Hoàng Phong Cốc: cốc tọa lạc ở Thái Nhạc sơn, Kiến Châu.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0144"]
    },
    {
      id: "thai-nhac-son",
      name: "Thái Nhạc sơn",
      cn: null,
      capDo: "nui",
      parentId: "kien-chau",
      blurb: "Dãy núi lớn tại Kiến Châu, nơi Hoàng Phong Cốc tọa lạc. Toàn bộ khu vực được bảo vệ bởi kỳ môn đại trận.",
      detail: "Nhắc tới tại c144. Hoàng Phong Cốc lập trong Thái Nhạc sơn; cả khu vực có kỳ môn đại trận bảo vệ.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0144"]
    },
    {
      id: "hoang-phong-coc-dia",
      name: "Hoàng Phong Cốc (địa danh)",
      cn: null,
      capDo: "mon-phai-dia-danh",
      parentId: "thai-nhac-son",
      blurb: "Căn cứ địa của Hoàng Phong Cốc — một trong thất đại tiên phái Việt quốc, tọa lạc trong Thái Nhạc sơn, Kiến Châu. Bảo vệ bởi kỳ môn đại trận. Bao gồm Nghênh Tân lâu, Nghị sự đại điện, Truyền công các, Bách Ky đường và nhiều kiến trúc khác.",
      detail: "Mô tả từ c144–c149: cốc có kỳ môn đại trận, khu đệ tử ở nhà đá, Truyền công các lớn dựa núi, Bách Ky đường quản công tác tạp vụ. Chưởng môn Chung Linh Đạo cai quản; hơn mười nghìn đệ tử ba tầng.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0144", "c0145", "c0147", "c0148", "c0149"]
    },
    {
      id: "nguyen-vu-quoc",
      name: "Nguyên Vũ quốc",
      cn: null,
      capDo: "quoc-gia",
      parentId: null,
      blurb: "Quốc gia liền kề hoặc trong khu vực Việt quốc, được nhắc tới trong mạch truyện liên quan đến Hoàng Phong Cốc và phân chia địa bàn thất đại tiên phái.",
      detail: "Nhắc gián tiếp tại c144 trong bối cảnh thất đại tiên phái Việt quốc và phạm vi địa bàn. Chi tiết cụ thể chưa được khai thác đầy đủ trong đợt này.",
      theLucLienQuan: [],
      nguon: ["c0144"]
    },
    {
      id: "nghenh-tan-lau",
      name: "Nghênh Tân lâu",
      cn: null,
      capDo: "kien-truc",
      parentId: "hoang-phong-coc-dia",
      blurb: "Lầu tiếp đón đệ tử mới tại Hoàng Phong Cốc. Hàn Lập ở đây ba bốn ngày chờ Chưởng môn duyệt, và tại đây Diệp lão giả tới gặp riêng đề nghị mua Trúc Cơ đan.",
      detail: "Xuất hiện c145: Hàn Lập chờ tại Nghênh Tân lâu sau khi nộp Thăng Tiên Lệnh. Diệp lão giả vào lầu gặp riêng, đề nghị giao dịch Trúc Cơ đan.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0145"]
    },
    {
      id: "nghi-su-dai-dien",
      name: "Nghị sự đại điện",
      cn: null,
      capDo: "kien-truc",
      parentId: "hoang-phong-coc-dia",
      blurb: "Đại điện trung tâm Hoàng Phong Cốc nơi Chưởng môn chủ trì các cuộc họp quan trọng và thu nhận đệ tử chính thức. Hàn Lập chính thức nhập môn tại đây trước mặt Chưởng môn Chung Linh Đạo.",
      detail: "Xuất hiện c147: Hàn Lập được dẫn vào Nghị sự đại điện, Chưởng môn Chung Linh Đạo chính thức thu nhận hắn làm đệ tử Hoàng Phong Cốc; dàn xếp vụ Trúc Cơ đan và phân phó Vương sư đệ an bài chỗ ở.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0147"]
    },
    {
      id: "truyen-cong-cac",
      name: "Truyền công các",
      cn: null,
      capDo: "kien-truc",
      parentId: "hoang-phong-coc-dia",
      blurb: "Lầu đá lớn dựa vào núi ở chân núi Hoàng Phong Cốc, kéo dài sâu vào bụng núi. Nơi đệ tử học hỏi công pháp; bảng ba chữ vàng 'Truyền công các'. Ngô Phong — chấp sự phụ trách công pháp đệ tử mới — giảng dạy tại đây.",
      detail: "Mô tả tại c149: lầu đá lớn dựa núi, cực rộng, nhiều cánh cửa đá, đệ tử ra vào náo nhiệt. Vương sư thúc dẫn Hàn Lập vào phòng thứ ba giới thiệu Ngô Phong. Truyền công các là nơi truyền dạy công pháp cơ sở. Tại c159 Ngô Phong giảng Hỏa Xà Thuật (sơ cấp bậc trung, hỏa hệ) cho đệ tử Luyện Khí kỳ, trong đó có Hàn Lập.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0149", "c0159"]
    },
    {
      id: "bach-ky-duong",
      name: "Bách Ky đường",
      cn: null,
      capDo: "kien-truc",
      parentId: "hoang-phong-coc-dia",
      blurb: "Đại điện quản lý công tác tạp vụ của đệ tử Hoàng Phong Cốc. Diệp Tính lão giả làm Đường chủ. Hệ thống trúc giản ghi danh mục các loại công tác trồng trọt và tạp vụ; thưởng phạt bằng linh thạch.",
      detail: "Xuất hiện c149–c150: Hàn Lập tới đây xin nhận công tác trồng trọt. Vu chấp sự trung niên phụ trách phát trúc giản. Diệp Tính xuất hiện cho phép Hàn Lập chọn tự do. Tại c150 Hàn Lập chọn nhiệm vụ Bách Dược Viên tại Kim Phù lĩnh.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0149", "c0150"]
    },
    {
      id: "huyen-khon-son",
      name: "Huyền Khôn sơn",
      cn: null,
      capDo: "nui",
      parentId: "hoang-phong-coc-dia",
      blurb: "Nơi đệ tử Hoàng Phong Cốc chuyển đến sau khi luyện công pháp cơ sở đến tầng mười. Tại đây đệ tử tự do hơn: tùy ý tự tạo chỗ ở, không hạn chế kích thước phòng.",
      detail: "Nhắc tới tại c149: Hàn Lập biết mục tiêu tiếp theo là lên tầng mười công pháp cơ sở để được chuyển tới Huyền Khôn sơn. Tại đây không hạn chế kích thước phòng ở, đệ tử tự do xây dựng nơi tu luyện riêng.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0149"]
    },
    {
      id: "kim-phu-linh",
      name: "Kim Phù lĩnh",
      cn: null,
      capDo: "nui",
      parentId: "hoang-phong-coc-dia",
      blurb: "Một trong các lĩnh (đỉnh núi/khu vực) thuộc địa phận Hoàng Phong Cốc. Nơi đặt Bách Dược Viên mà Hàn Lập nhận làm công tác — nhiệm vụ được xem là siêu khó, nhiều đệ tử thất bại.",
      detail: "Xuất hiện c150: sau khi Hàn Lập nhận nhiệm vụ Bách Dược Viên, Vu chấp sự dẫn hắn tới Kim Phù lĩnh. Đây là nơi Hàn Lập sẽ trông coi dược viên — vị trí chiến lược cho kế hoạch dùng bình thần bí trồng linh dược.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0150"]
    },
    {
      id: "bach-duoc-vien",
      name: "Bách Dược Viên",
      cn: null,
      capDo: "kien-truc",
      parentId: "kim-phu-linh",
      blurb: "Dược viên trồng linh dược tại Kim Phù lĩnh, Hoàng Phong Cốc. Được ghi trong trúc giản nhiệm vụ là 'tiếp quản một tòa Bách Dược Viên tại Thanh Thạch lĩnh, hàng năm giao đủ số lượng dược thảo quy định'. Nhiều năm liên tiếp không đệ tử nào hoàn thành được — nhiệm vụ siêu khó.",
      detail: "Hàn Lập chọn nhiệm vụ này tại c150 dù bị Vu chấp sự can ngăn. Nhiều đệ tử trước đó tiếp nhận đều thất bại, bị phạt linh thạch, phải trả lại. Vu chấp sự hằng năm phải nhờ sư huynh đệ hỗ trợ mới tạm hoàn thành. Hàn Lập sau khi đọc quyển trục ghi kinh nghiệm thất bại, vẫn kiên quyết chọn — có toan tính riêng (bình thần bí).",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0149", "c0150"]
    },
    {
      id: "thanh-thach-linh",
      name: "Thanh Thạch lĩnh",
      cn: null,
      capDo: "nui",
      parentId: "hoang-phong-coc-dia",
      blurb: "Lĩnh thuộc địa phận Hoàng Phong Cốc, được ghi trên trúc giản nhiệm vụ là nơi đặt Bách Dược Viên. Trên thực tế Vu chấp sự dẫn Hàn Lập tới Kim Phù lĩnh — quan hệ chính xác giữa hai địa danh này chưa được làm rõ.",
      detail: "Tên xuất hiện trong trúc giản nhiệm vụ c149: 'tiếp quản một tòa Bách Dược Viên tại Thanh Thạch lĩnh'. Tuy nhiên c150 ghi Vu chấp sự dẫn tới Kim Phù lĩnh — có thể Thanh Thạch lĩnh và Kim Phù lĩnh là hai tên khác nhau cho cùng một khu vực, hoặc Bách Dược Viên nằm ở ranh giới giữa hai lĩnh.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0149"]
    },
    {
      id: "vu-quan-son",
      name: "Vu Quân sơn",
      cn: null,
      capDo: "nui",
      parentId: "hoang-phong-coc-dia",
      blurb: "Ngọn núi thuộc địa phận Hoàng Phong Cốc, nơi đặt Nhạc Lộc điện. Hàn Lập được Mã sư bá cấp ngọc phù miễn phí một năm để tới đây tra cứu đan phương.",
      detail: "Xuất hiện c153: Mã sư bá trao cho Hàn Lập ngọc phù bạch ngọc, miễn phí một năm lui tới Nhạc Lộc điện tại Vu Quân sơn. Đây là vị trí của kho lưu trữ đan phương và tàng thư y thuật của Hoàng Phong Cốc, có Truyền tống trận đặc biệt để đến đây.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0153"]
    },
    {
      id: "nhac-loc-dien",
      name: "Nhạc Lộc điện",
      cn: null,
      capDo: "kien-truc",
      parentId: "vu-quan-son",
      blurb: "Điện kho đan phương lớn của Hoàng Phong Cốc tại Vu Quân sơn. Lầu một có bàn đá dài và lão giả phụ trách (Hứa lão). Lầu hai là tàng thư: y thư, trúc giản đan phương, và 2 ngọc đồng — phí đọc 1 linh thạch/canh giờ. Bên trong có thông đạo không có biển báo dẫn xuống huyền dương hỏa địa.",
      detail: "Xuất hiện c153–c156: Hàn Lập đến Nhạc Lộc điện qua Truyền tống trận, gặp Hứa lão phụ trách (c154). Lầu hai có y thư, trúc giản và 2 ngọc đồng: ngọc xanh = Trúc Cơ đan (c155), ngọc đỏ = Định nhan đan (c155) — tổng 2 linh thạch phí đọc. Hứa lão tiết lộ địa phế chi hỏa thay tiên thiên chân hỏa (c156). Thông đạo bên trong không có biển báo dẫn xuống huyền dương hỏa địa (c156) — Hàn Lập mua Ngân Ti đỉnh 32 linh thạch, tổng chi 50 linh thạch. Đề cập tại c161: Ngô Phong hỏi về kế hoạch Hàn Lập sau khi thăm Nhạc Lộc điện.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0153", "c0154", "c0155", "c0156", "c0161"]
    },
    {
      id: "huyen-duong-hoa-dia",
      name: "Huyền dương hỏa địa",
      cn: null,
      capDo: "kien-truc",
      parentId: "nhac-loc-dien",
      blurb: "Khu vực bên trong Nhạc Lộc điện chứa địa phế chi hỏa — loại chân hỏa có thể thay thế tiên thiên chân hỏa để luyện Trúc Cơ đan. Cửa vào qua thông đạo không có biển báo, cửa đá ngũ sắc. Bán các lò luyện đan chuyên dụng (Ngân Ti đỉnh).",
      detail: "Xuất hiện c156: Hứa lão tiết lộ địa phế chi hỏa trong huyền dương hỏa địa có thể thay tiên thiên chân hỏa để luyện Trúc Cơ đan. Hàn Lập đi qua thông đạo không biển báo tới cửa đá ngũ sắc vào huyền dương hỏa địa. Tại đây có bán Ngân Ti đỉnh — lò luyện đan chuyên dụng. Hàn Lập mua 1 chiếc giá 32 linh thạch, tổng chi chuyến đi 50 linh thạch. Thủ vệ ở đây thái độ thô lỗ.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0156"]
    },
    {
      id: "cam-dia-hoang-phong-coc",
      name: "Cấm địa sau Hoàng Phong Cốc",
      cn: null,
      capDo: "vung",
      parentId: "hoang-phong-coc-dia",
      blurb: "Cấm địa cổ đại nằm phía sau Hoàng Phong Cốc, nơi diễn ra Huyết Cấm Thí Luyện. Cổ cấm phong hệ mạnh mẽ — Kết Đan kỳ trở lên phá mở 5 năm một lần, chỉ mở 5 ngày. Chỉ đệ tử Luyện Khí kỳ được phép vào; tỷ lệ tử vong xấp xỉ 3/4.",
      detail: "Tiết lộ tại c160: Ngô Phong giải thích cơ chế Huyết Cấm Thí Luyện cho Hàn Lập. Cấm địa có cổ cấm phong hệ từ thời xa xưa, định kỳ 5 năm một lần mới bị cao nhân Kết Đan kỳ phá mở, và chỉ duy trì 5 ngày trước khi cổ cấm phục hồi. Trong khoảng thời gian đó chỉ tu sĩ Luyện Khí kỳ mới có thể tiến vào — Trúc Cơ kỳ trở lên bị cấm địa cự tuyệt. Tỷ lệ tử vong khoảng 3/4 số người vào. Kỳ Huyết Cấm Thí Luyện tiếp theo sẽ diễn ra khoảng nửa năm sau c160. Hàn Lập tiến thoái lưỡng nan: cần tài nguyên nhưng rủi ro cực cao.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0160"]
    },
    {
      id: "phuong-thi-hoang-phong-coc",
      name: "Phường thị Hoàng Phong Cốc",
      cn: null,
      capDo: "khu-vuc",
      parentId: "hoang-phong-coc-dia",
      blurb: "Khu chợ/phường thị của Hoàng Phong Cốc, nơi tu tiên giả mua bán vật phẩm. Hàn Lập ra đây trước khi vào Huyết Cấm Thí Luyện để sắm đồ chuẩn bị. Có nhiều cửa hàng bán vật phẩm tu tiên, trong đó có Vạn Bảo Lâu.",
      detail: "Xuất hiện c161–c162: Hàn Lập đến phường thị chuẩn bị cho Huyết Cấm Thí Luyện. Vào Vạn Bảo Lâu — lầu thương hội tu tiên — để mua pháp khí và phù bảo.",
      theLucLienQuan: ["Hoàng Phong Cốc", "Vạn Bảo Lâu"],
      nguon: ["c0161", "c0162"]
    },
    {
      id: "van-bao-lau",
      name: "Vạn Bảo Lâu",
      cn: null,
      capDo: "kien-truc",
      parentId: "phuong-thi-hoang-phong-coc",
      blurb: "Lầu thương hội tu tiên trong phường thị Hoàng Phong Cốc. Chưởng quỹ là Điền Bặc Ly (người thường). Bán pháp khí, phù bảo, linh thảo qua hệ thống hộp gấm có cơ chế phòng thủ pháp lực. Hàn Lập mua toàn bộ hộp gấm bằng 2 gốc linh thảo ngàn năm.",
      detail: "Xuất hiện c162–c165: cơ chế an toàn hộp gấm — hai luồng pháp lực, an toàn với Trúc Cơ kỳ trở lên. Đinh lão giám định dược được triệu đến xác nhận Hoàng tinh chi. Các vật phẩm bán: Kim phù tử mẫu đao, Huyền thiết phi thiên thuẫn, Thiên lôi tử, Kim Quang Chuyên phù bảo, Hoàng tinh chi — tất cả đổi với 2 gốc linh thảo ngàn năm.",
      theLucLienQuan: ["Hoàng Phong Cốc"],
      nguon: ["c0162", "c0163", "c0164", "c0165"]
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].factions = {
  updatedAt: "2026-06-11",
  count: 25,
  factions: [
    {
      id: "that-huyen-mon",
      name: "Thất Huyền môn",
      cn: "七玄门",
      type: "mon-phai",
      typeLabel: "Môn phái võ lâm",
      diaBan: "Thái Hà sơn, Kính Châu; Tổng đường tại Lạc Nhật phong",
      nhanVatChinh: ["Vương Tuyệt Sở (Vương môn chủ)", "Mã phó môn chủ", "Nhạc đường chủ", "Vương hộ pháp", "Mặc đại phu", "Lệ Phi Vũ", "Trương Tụ Nhi"],
      blurb: "Môn phái võ lâm truyền thừa hơn hai trăm năm, từng đứng đầu Kính Châu, nay là tam lưu tiểu thế lực. Tổng đường tại Lạc Nhật phong có Thất huyền điện (một lớn sáu nhỏ) và hệ thống cơ quan bẫy Đại Hãm Tịnh do Môn chủ đời thứ bảy thiết kế. Ba vị sư thúc — cao thủ hóa cảnh — là chỗ chống lưng để Vương Tuyệt Sở dám nhận tử khế đấu 50 đối 50 với Dã Lang bang; trận huyết đấu đang tiến hành tại Lạc Nhật phong.",
      detail: "Thành lập hơn hai trăm năm trước bởi Thất Tuyệt thượng nhân (Thất Tuyệt thương nhân). Thời thịnh: đứng đầu Kính Châu hơn mười năm, thanh danh lan tới Sổ Châu. Sau khi Thất Tuyệt chân nhân bệnh chết, môn phái suy sụp, bị liên minh các môn phái đẩy khỏi Kính Châu thành, dời về Thái Hà sơn hơn trăm năm trước. Cơ cấu hiện tại: Môn chủ (Vương Tuyệt Sở) + ba phó môn chủ; Trưởng lão hội; Ba vị sư thúc cao thủ hóa cảnh (thư sinh / hán tử râu ria từng là mãnh tướng / áo xám trường kiếm); Nội môn (Bách Đoán đường, Thất Tuyệt đường, Cung Phụng đường, Huyết Nhận đường); Ngoại môn (Phi Điểu đường, Tụ Bảo đường, Tứ Hải đường, Ngoại Nhận đường). Tổng đàn Lạc Nhật phong gồm Thất huyền điện một lớn sáu nhỏ, bên trong có động thạch nhũ tự nhiên và hệ thống cơ quan bẫy Đại Hãm Tịnh. Chiến tranh với Dã Lang bang leo thang đến đỉnh điểm: đội đàm phán bị phục kích tại Lạc sa pha, Ngô phó môn chủ và các trưởng lão thiệt mạng; ba liên quân tấn công Thái Hà sơn. Vương Tuyệt Sở ký tử khế đấu 50 đối 50 với Cổ Thiên Long — trận huyết đấu đang diễn ra.",
      nguon: ["c0001", "c0002", "c0003", "c0006", "c0017", "c0019", "c0033", "c0034", "c0035", "c0037", "c0038", "c0039", "c0040", "c0043", "c0074", "c0075", "c0076", "c0077", "c0079", "c0080", "c0081", "c0082", "c0083", "c0084", "c0085", "c0086", "c0087", "c0088", "c0089", "c0090"]
    },
    {
      id: "da-lang-bang",
      name: "Dã Lang bang",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái",
      diaBan: "Nhiều hương trấn nghèo ở Kính Châu",
      nhanVatChinh: ["Cổ Thiên Long", "Trương tiên sư (hậu thuẫn bí ẩn)"],
      blurb: "Bang phái gốc mã tặc, hung hăng tàn ác. Trong cuộc tấn công tổng lực vào Lạc Nhật phong: Cổ Thiên Long huy động Hồng y thiết vệ tinh nhuệ, 300 cây nỏ liên châu quân dụng, và thuê cao thủ tu tiên Chu Nho làm chỗ dựa. Toàn bộ kế hoạch có chỉ đạo của 'Trương tiên sư' — nhân vật chỉ nghe thấy giọng nói, lai lịch chưa rõ. Bị xóa sổ hoàn toàn tại Lạc Nhật Phong khi Hàn Lập giết Cổ Thiên Long và hơn 50 người còn lại trong tử đấu trường.",
      detail: "Tiền thân là đám mã tặc đốt phá cướp bóc ở Kính Châu; bị quan binh đuổi giết, một bộ phận theo hàng quan phủ, phần còn lại lập thành Dã Lang bang. Là bang phái duy nhất đủ sức đối kháng Thất Huyền môn. Huấn luyện bang chúng theo kiểu mã tặc: thấy máu càng điên cuồng, chém giết liều mạng. Trong nhiều năm xung đột, hai bên đánh hơn mười trận to nhỏ. Giai đoạn ch.38: phái gian tế cài trong Thất Huyền môn. Giai đoạn ch.75-80: đề nghị hòa đàm dẫn Thất Huyền môn vào bẫy — bày trận nỏ liên châu tại Lạc sa pha; đồng thời huy động Thiết thương hội + Đoạn thủy môn đánh lên núi. Giai đoạn ch.81-90: Cổ Thiên Long dẫn Hồng y thiết vệ (~60 người tinh nhuệ) tấn công Lạc Nhật phong; mua thêm 300 nỏ liên châu từ em họ phó tướng; thuê Chu Nho làm sát thủ diệt ba sư thúc Thất Huyền môn. Ký tử khế đấu 50 đối 50; bắt đầu hối tiếc khi nhận ra đối phương có ba cao thủ hóa cảnh chống lưng. Có hậu thuẫn bí ẩn từ 'Trương tiên sư' — nhân vật chỉ xuất hiện qua giọng nói, được Cổ Thiên Long phục tùng tuyệt đối. Kết cục: bị Hàn Lập xóa sổ hoàn toàn trong tử đấu trường tại c94 — Cổ Thiên Long và hơn 50 người bị tiêu diệt. Cơ cấu: lệnh chủ — phó lệnh chủ — chấp pháp (lam y) — Hồng y thiết vệ (cận vệ tinh nhuệ khoảng sáu mươi người) — bang chúng tinh anh.",
      nguon: ["c0002", "c0019", "c0038", "c0041", "c0043", "c0075", "c0076", "c0077", "c0078", "c0079", "c0081", "c0082", "c0083", "c0084", "c0085", "c0086", "c0087", "c0088", "c0089", "c0090", "c0094"]
    },
    {
      id: "han-gia",
      name: "Hàn gia",
      cn: null,
      type: "gia-toc",
      typeLabel: "Gia tộc",
      diaBan: "Sơn Biên tiểu thôn",
      nhanVatChinh: ["Hàn Lập", "Hàn phụ"],
      blurb: "Gia đình nông dân nghèo bảy miệng ăn — cha, mẹ, đại ca, nhị ca Hàn Chú, tỷ tỷ, Hàn Lập, tiểu muội muội. Tam thúc là người duy nhất trong nhà từng ra ngoài làm ăn.",
      detail: "Sống tại Sơn Biên tiểu thôn. Nguồn thu nhập ít ỏi: đại ca học thợ rèn 30 đồng/tháng, tam thúc đại chưởng quỹ. Hàn Lập được kỳ vọng đem tiền về nhà sau khi vào Thất Huyền môn.",
      nguon: ["c0001"]
    },
    {
      id: "that-tuyet-duong",
      name: "Thất Tuyệt đường",
      cn: "七绝堂",
      type: "phan-duong",
      typeLabel: "Phân đường nội môn",
      diaBan: "Thái Hà sơn (Thất Huyền môn)",
      nhanVatChinh: ["Vũ Nham"],
      blurb: "Phân đường nội môn cao cấp của Thất Huyền môn — nơi nhập thất đệ tử môn chủ được học tuyệt kỹ. Có tổng quản cai quản; bên trong có tàng thư lưu giữ bí tịch tuyệt học, trong đó có Trát Nhãn kiếm phổ (74 quyển, hơn trăm năm không ai để ý).",
      detail: "Đường cao cấp nhất trong Thất Huyền môn, chỉ nhập thất đệ tử môn chủ mới được học tuyệt kỹ. Có tổng quản Thất Tuyệt đường quản lý chung, có tuần đường hộ pháp canh giữ tàng thư. Vũ Nham nhờ quan hệ gia đình được đặc cách vào. Lệ Phi Vũ được đặc cách vào nhờ thực lực xuất chúng. Tàng thư có 74 quyển 'Trát Nhãn kiếm phổ' bị quăng góc tối không ai dòm ngó vì điều kiện tu luyện kỳ cục.",
      nguon: ["c0005", "c0033", "c0034", "c0035", "c0036", "c0037", "c0039", "c0040"]
    },
    {
      id: "bach-doan-duong",
      name: "Bách Đoán đường",
      cn: "百锻堂",
      type: "phan-duong",
      typeLabel: "Phân đường nội môn",
      diaBan: "Thái Hà sơn (Thất Huyền môn)",
      nhanVatChinh: ["Nhạc đường chủ"],
      blurb: "Phân đường nội môn của Thất Huyền môn chuyên tiếp nhận và huấn luyện đệ tử chính thức. Nơi sáu người vượt trắc thí Luyện Cốt Nhai trở thành nội đệ tử.",
      detail: "Đứng đầu là Nhạc đường chủ. Có phó đường chủ (Cố phó đường chủ) và giáo tập (Lý giáo tập). Trên một đỉnh núi gần Thần thủ cốc, các giáo tập dạy đệ tử mới cách chiến đấu bằng vũ khí.",
      nguon: ["c0005", "c0010"]
    },
    {
      id: "doan-thuy-mon",
      name: "Đoạn Thủy môn",
      cn: null,
      type: "mon-phai",
      typeLabel: "Môn phái nhỏ",
      diaBan: "Kính Châu (liên kết với Dã Lang bang)",
      nhanVatChinh: [],
      blurb: "Môn phái nhỏ tham chiến cùng Dã Lang bang trong cuộc tấn công Thất Huyền môn. Đệ tử mặc áo xanh, ống tay áo có bạch tuyến phân cấp: một đạo là hạng thấp nhất, ba đạo là đầu mục.",
      detail: "Tham gia liên minh do Dã Lang bang tập hợp để đánh Thất Huyền môn. Đệ tử mặc áo xanh cầm cương đao; cấp bậc phân biệt bằng số đạo bạch tuyến trên ống tay áo (một đạo = thấp nhất, ba đạo = đầu mục). Một nhóm mười tên (dẫn đầu là đầu mục mặt sẹo ba đạo) chặn vây nhóm Hàn Lập — Lệ Phi Vũ — Khúc Hồn cách Lý trạch hơn một dặm, bị Lệ Phi Vũ và Khúc Hồn tiêu diệt toàn bộ.",
      nguon: ["c0079", "c0080"]
    },
    {
      id: "thiet-thuong-hoi",
      name: "Thiết thương hội",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái nhỏ",
      diaBan: "Kính Châu (liên kết với Dã Lang bang)",
      nhanVatChinh: [],
      blurb: "Bang phái nhỏ tham gia liên minh do Dã Lang bang dẫn đầu tấn công Thất Huyền môn.",
      detail: "Được xác nhận qua lời khai của Lam y chấp pháp Dã Lang bang: Thiết thương hội cùng Đoạn thủy môn tham gia vây đánh Thất Huyền môn bên cạnh Dã Lang bang. Không có thêm chi tiết về cơ cấu hay nhân vật lãnh đạo trong các chương này.",
      nguon: ["c0079"]
    },
    {
      id: "diep-gia",
      name: "Diệp gia",
      cn: null,
      type: "gia-toc",
      typeLabel: "Gia tộc tu tiên",
      diaBan: "Tần Diệp lĩnh, Lam Châu; thành viên trong Hoàng Phong Cốc",
      nhanVatChinh: ["Chu Nho (tên thật Tần Diệp Lĩnh — đệ tử, đã chết c93)", "Diệp Báo (đệ tử, mặt như ngựa, xuất hiện c131)", "Diệp Tính lão giả (quản sự, Đường chủ Bách Ky đường Hoàng Phong Cốc)"],
      blurb: "Gia tộc tu tiên có căn cứ tại Tần Diệp lĩnh, Lam Châu. Có thành viên trong Hoàng Phong Cốc (Diệp Tính lão giả — Đường chủ Bách Ky đường). Diệp Tính chủ mưu ép Hàn Lập nhường Trúc Cơ đan để hỗ trợ cháu mình sắp đột phá Trúc Cơ, sau đó hối ước vật phẩm bồi thường. Gia tộc đủ thế lực khiến tu sĩ cấp thấp kiêng kỵ.",
      detail: "Xuất hiện qua lời khai Chu Nho c92-c93. Diệp Báo tại c131 trả giá Phi thiên phù bị từ chối, tức giận đe dọa chủ quầy. Đệ tử Diệp gia tại c139 (áo gắn lá cây) giữ bát vàng Hồi phong bát. Tại c141, Chu Nho vốn không phải Tần gia mà là người họ Chu — nam đinh duy nhất còn sống của Tần gia sau biến cố Diệp gia chiếm Thăng Tiên Lệnh. Diệp Tính lão giả xuất hiện c144-c150: Đường chủ Bách Ky đường, dùng quyền hạn phân công ép Hàn Lập nhường đan, sau đó hối ước vật phẩm.",
      nguon: ["c0092", "c0093", "c0131", "c0139", "c0141", "c0144", "c0145", "c0146", "c0147", "c0149", "c0150"]
    },
    {
      id: "tu-binh-bang",
      name: "Tứ bình bang",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái",
      diaBan: "Khu Tây thành, Gia Nguyên Thành, Lam Châu",
      nhanVatChinh: ["Tôn nhị cẩu (bang chủ mới từ c122)", "Tịch Thiết Ngưu (phó bang chủ từ c125)"],
      blurb: "Bang phái đứng đầu trong ba mươi ba tiểu bang phía Tây Gia Nguyên Thành. Gần một nghìn bang chúng. Cựu bang chủ Trầm Trọng Sơn bị Hàn Lập diệt tại c122; Tôn nhị cẩu lên làm bang chủ mới theo kế hoạch Hàn Lập. Tịch Thiết Ngưu được phong phó bang chủ tại c125. Hàn Lập rời Gia Nguyên Thành nhưng tiếp tục giật dây từ xa.",
      detail: "Đứng đầu trong ba mươi ba tiểu bang khu Tây thành Gia Nguyên Thành. Quy mô gần một nghìn bang chúng, chủ yếu là kiệu phu và khổ lực ở bến đò. Cựu bang chủ Trầm Trọng Sơn biệt hiệu 'Viên tí' bị Hàn Lập dùng Tiêu Hồn Tán diệt cùng tam đại hộ pháp tại Tiêu Tương Viện (c121-c122). Tôn nhị cẩu chính thức lên bang chủ từ c122. Tịch Thiết Ngưu được phong phó bang chủ vì cung cấp thông tin về Thái Nam cốc (c125). Hàn Lập rời Gia Nguyên Thành, bang do Tôn nhị cẩu tự quản; Hàn Lập đã giải trừ Hủ tâm hoàn cho Tôn nhị cẩu bằng giải độc đan.",
      nguon: ["c0100", "c0104", "c0105", "c0119", "c0120", "c0121", "c0122", "c0125"]
    },
    {
      id: "thiet-chuong-hoi",
      name: "Thiết chưởng hội",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái",
      diaBan: "Khu Tây thành, Gia Nguyên Thành, Lam Châu",
      nhanVatChinh: ["Hắc hùng (tiểu đầu mục, đã chết)"],
      blurb: "Bang phái trong nhóm ba mươi ba tiểu bang Tây thành Gia Nguyên Thành. Hắc hùng là tiểu đầu mục; đối thủ trực tiếp Tứ bình bang tại bến đò. Liên minh với Tứ bình bang chống Độc long bang dù hai bên thù ghét nhau.",
      detail: "Không phải 'Thiết thương hội' (bang phái tại Kính Châu từ c79) — đây là thế lực riêng tại Gia Nguyên Thành, Lam Châu. Hắc hùng là tiểu đầu mục bến đò, đã bị Hàn Lập giết tại c103. Thiết chưởng hội và Tứ bình bang cùng chia sẻ bến đò; duy trì liên minh chống Độc long bang dù hằng ngày vẫn xung đột.",
      nguon: ["c0100", "c0101", "c0103", "c0104"]
    },
    {
      id: "doc-long-bang",
      name: "Độc long bang",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái",
      diaBan: "Gia Nguyên Thành, Lam Châu",
      nhanVatChinh: [],
      blurb: "Bang mạnh hoạt động ở Gia Nguyên Thành — lý do Tứ bình bang và Thiết chưởng hội phải duy trì liên minh dù thù nhau. Chưa xuất hiện trực tiếp đến chương 110.",
      detail: "Được nhắc như thế lực mạnh hơn cả Tứ bình bang lẫn Thiết chưởng hội tại vùng Gia Nguyên Thành. Sự tồn tại của Độc long bang là lý do khiến hai bang nhỏ hơn phải hợp tác dù bình thường thù địch nhau. Chưa có nhân vật hay sự kiện trực tiếp được mô tả đến chương 110.",
      nguon: ["c0100"]
    },
    {
      id: "kinh-giao-hoi",
      name: "Kinh Giao hội",
      cn: null,
      type: "bang-hoi",
      typeLabel: "Bang hội",
      diaBan: "Nam thành Gia Nguyên Thành; Tổng đà Mặc phủ, Lam Châu",
      nhanVatChinh: ["Nghiêm thị (đang chủ trì)", "Mặc Cư Nhân / Mặc đại phu (sáng lập, đã chết)", "Vương thị/Ngũ nương (độc chiếm Ám Đà)", "Yến Ca (đại đồ đệ Mặc đại phu)", "Triệu Khôn (nhị đồ đệ)", "Mã Không Thiên (hộ pháp, đã tách ra)"],
      blurb: "Bang hội do Mặc đại phu (Mặc Cư Nhân) sáng lập, từng là một trong ba đại bá chủ Lam Châu. Nay sa sút: chỉ giữ khu Nam thành Gia Nguyên Thành. Mối đe dọa lớn nhất — trang chủ Độc Bá sơn trang Âu Dương Phi Thiên — đã bị Hàn Lập ám sát tại c126 đổi lấy Noãn dương bảo ngọc. Còn lại mối đe dọa từ Ngũ Sắc môn.",
      detail: "Thời thịnh: bang chúng phổ thông sáu vạn bốn nghìn, hạch tâm hơn bảy nghìn; đứng đầu ba bá chủ Lam Châu; tổng đà tại Gia Nguyên Thành, có nhiều phân đà. Cơ cấu quyền lực: sáng lập — Mặc Cư Nhân; Nghiêm thị đại diện sau khi chồng ra đi; Ám Đà (lực lượng bí mật chuyên thu bạc từ các trấn) do Ngũ nương độc chiếm theo di nguyện Mặc đại phu. Sau khi Mặc đại phu mất tích: nội bộ phân liệt, bị các thế lực bên ngoài chèn ép — suy sụp chỉ sau một đêm. Hiện chỉ giữ Nam thành, chia phần với Xuân Vũ lâu, Kim Cương môn, Lạc Nhật phái. Hai kẻ thù cũ: Ngũ Sắc môn và Độc Bá sơn trang. Tại c123: Nghiêm thị chấp nhận điều kiện Hàn Lập diệt trang chủ Độc Bá sơn trang Âu Dương Phi Thiên đổi lấy Noãn dương bảo ngọc. Tại c126 (hồi tưởng): Hàn Lập ám sát thành công Âu Dương Phi Thiên; Nghiêm thị giao ngọc đúng hẹn.",
      nguon: ["c0104", "c0105", "c0107", "c0108", "c0109", "c0110", "c0111", "c0115", "c0116", "c0117", "c0118", "c0119", "c0123", "c0126"]
    },
    {
      id: "thien-phach-mon",
      name: "Thiên Phách môn",
      cn: null,
      type: "mon-phai",
      typeLabel: "Môn phái",
      diaBan: "Đông thành Gia Nguyên Thành, Lam Châu",
      nhanVatChinh: [],
      blurb: "Thế lực mạnh nhất trong ba đại bang Gia Nguyên Thành, chiếm khu Đông thành giàu có. Liên thủ với Kim Kiếm môn và Thanh Y bang. Hiện đang vượt mặt Kinh Giao hội và Huynh đệ minh trong cục diện thành.",
      detail: "Một trong ba đại thế lực của Gia Nguyên Thành (cùng Huynh đệ minh và Kinh Giao hội). Chiếm lĩnh khu Đông thành — khu giàu có nhất thành. Liên minh Kim Kiếm môn và Thanh Y bang làm hậu thuẫn. Không có thêm chi tiết về nhân vật lãnh đạo hay sự kiện cụ thể đến chương 110.",
      nguon: ["c0105"]
    },
    {
      id: "huynh-de-minh",
      name: "Huynh đệ minh",
      cn: null,
      type: "bang-hoi",
      typeLabel: "Bang hội",
      diaBan: "Bắc thành Gia Nguyên Thành, Lam Châu",
      nhanVatChinh: [],
      blurb: "Một trong ba đại thế lực của Gia Nguyên Thành, chiếm khu Bắc thành. Kết minh với Thiết Thương hội và Thương hà thuyền bang. Đứng thứ hai sau Thiên Phách môn trong cục diện hiện tại.",
      detail: "Một trong ba đại bang hội Gia Nguyên Thành. Chiếm lĩnh khu Bắc thành; liên minh Thiết Thương hội và Thương hà thuyền bang. Thứ hạng đứng giữa: mạnh hơn Kinh Giao hội (đang suy sụp) nhưng yếu hơn Thiên Phách môn. Lưu ý: Thiết Thương hội trong liên minh này là thế lực khác với Thiết thương hội ở Kính Châu (c79) và Thiết chưởng hội ở bến đò (c100).",
      nguon: ["c0105"]
    },
    {
      id: "ngu-sac-mon",
      name: "Ngũ Sắc môn",
      cn: null,
      type: "mon-phai",
      typeLabel: "Môn phái",
      diaBan: "Lam Châu",
      nhanVatChinh: [],
      blurb: "Một trong hai thế lực thù địch chính của Kinh Giao hội tại Lam Châu. Nghiêm thị từng yêu cầu Hàn Lập tiêu diệt cả Ngũ Sắc môn lẫn Độc Bá sơn trang; Hàn Lập chỉ chấp nhận diệt một (c119). Cuối cùng Hàn Lập chọn diệt Âu Dương Phi Thiên — Ngũ Sắc môn vẫn còn là mối đe dọa với Kinh Giao hội.",
      detail: "Được nhắc đến là một trong hai đại địch của Kinh Giao hội (c118). Chưa có thêm thông tin cụ thể về quy mô, lãnh đạo hay địa điểm đến c130.",
      nguon: ["c0118", "c0119", "c0123"]
    },
    {
      id: "doc-ba-son-trang-faction",
      name: "Độc Bá sơn trang",
      cn: null,
      type: "son-trang",
      typeLabel: "Sơn trang",
      diaBan: "Lam Châu",
      nhanVatChinh: ["Âu Dương Phi Thiên (trang chủ — đã chết c126)"],
      blurb: "Sơn trang do trang chủ Âu Dương Phi Thiên (ngoại hiệu 'Nộ sư') lãnh đạo, từng là một trong hai thế lực thù địch của Kinh Giao hội. Âu Dương Phi Thiên có dã tâm bá chủ Lam Châu, tuyệt kỹ Phách vương giáp. Bị Hàn Lập ám sát tại c126 theo thỏa thuận với Nghiêm thị.",
      detail: "Trang chủ Âu Dương Phi Thiên: tráng niên, không con cái, sở hữu Phách vương giáp (toàn thân đao thương bất nhập — ngạnh công hạng nhất giang hồ phàm tục), tâm kế cao, hiếm rời sơn trang, ôm mộng bá chủ Lam Châu. Là sư phụ thứ bảy của Ngô Kiếm Minh. Nghiêm thị đặt điều kiện: Hàn Lập diệt Âu Dương Phi Thiên đổi Noãn dương bảo ngọc (c123). Hàn Lập ám sát bằng một kiếm phù khi hắn một mình ngắm trăng — Phách vương giáp vô dụng trước linh khí (c126 hồi tưởng).",
      nguon: ["c0118", "c0123", "c0126"]
    },
    {
      id: "van-gia",
      name: "Vạn gia",
      cn: null,
      type: "gia-toc",
      typeLabel: "Gia tộc tu tiên",
      diaBan: "Khô Nhai sơn, Lam Châu",
      nhanVatChinh: ["Vạn Tiểu Sơn (đệ tử)"],
      blurb: "Gia tộc tu tiên tại Khô Nhai sơn, hậu thuẫn từ Cự Kiếm Môn. Tổ tiên vốn là tán tu, sau gia nhập Cự Kiếm Môn thành đệ tử chính thức rồi lập nên Vạn gia. Tộc quy đặc biệt: cấm kỳ thị tán tu, luôn giao hảo với tán tu.",
      detail: "Tổ tiên Vạn gia có xuất thân tán tu nên Vạn gia lập tộc quy/tổ huấn cấm kỳ thị tán tu, luôn thân thiện với tán tu. Được Cự Kiếm Môn chống lưng. Vạn Tiểu Sơn (thiếu niên 15-16 tuổi) là đại diện gia tộc tham dự Thái Nam tiểu hội c128.",
      nguon: ["c0128"]
    },
    {
      id: "thai-nam-tieu-hoi",
      name: "Thái Nam tiểu hội",
      cn: null,
      type: "hoi-cho",
      typeLabel: "Hội chợ tu tiên",
      diaBan: "Thái Nam cốc, Lam Châu",
      nhanVatChinh: ["Thanh Nhan chân nhân (lão trưởng bối quản lý)"],
      blurb: "Sự kiện giao dịch năm năm một lần dành cho tiểu bối tu tiên Lam Châu trao đổi mua bán vật phẩm tu luyện trong Thái Nam cốc. Lần tổ chức c128 đặc biệt đông vì Thăng Tiên đại hội sắp mở tại Lam Châu sau một tháng.",
      detail: "Diễn ra mỗi 5 năm, quy tụ hàng tiểu bối tu tiên từ khắp Lam Châu. Khu chợ bố trí hình chữ Hồi (回), thắp đèn đồng và đá trắng phát quang. Toàn bộ người tham gia là thanh thiếu niên tu tiên. Lần này đặc biệt đông vì Thăng Tiên đại hội sẽ mở tại Lam Châu sau 1 tháng. Thanh Nhan chân nhân là lão trưởng bối cai quản.",
      nguon: ["c0125", "c0128", "c0129", "c0130"]
    },
    {
      id: "yen-gia",
      name: "Yến gia",
      cn: null,
      type: "gia-toc",
      typeLabel: "Gia tộc tu tiên",
      diaBan: "Cô Vũ sơn, Lam Châu",
      nhanVatChinh: ["Huynh muội Yến gia (hai người tham gia Thăng Tiên đại hội c136)"],
      blurb: "Đệ nhất tu tiên đại tộc Việt quốc. Gia tộc tu tiên duy nhất trong các tu tiên đại phái của Việt quốc có tu sĩ Kết Đan kỳ. Căn cứ tại Cô Vũ sơn; nuôi dưỡng linh cầm Song thủ vụ (quái điểu hai đầu to bằng con trâu nhỏ). Lần đầu phái huynh muội tham gia Thăng Tiên đại hội (lần trước không phái người).",
      detail: "Yến gia được giới thiệu khi huynh muội Yến gia cưỡi linh cầm Song thủ vụ bay qua Thái Nam hội c136, gây xôn xao đám đông. Song thủ vụ: thân đầy lông mao màu xám, hai cánh rộng mấy trượng, bốn con mắt lóe lục quang, móng vuốt như liêm đao — một yêu cầm hung ác. Hàn Lập nhận ra đây chính là con quái ưng đã gặp cùng 'thần tiên nam nữ' ở c? (Thiết Ngưu bối cảnh).",
      nguon: ["c0136"]
    },
    {
      id: "that-dai-tien-phai-viet-quoc",
      name: "Thất đại tiên phái Việt quốc",
      cn: null,
      type: "lien-minh-mon-phai",
      typeLabel: "Liên minh môn phái tu tiên",
      diaBan: "Việt quốc",
      nhanVatChinh: ["Hoàng Phong Cốc (một trong bảy phái)"],
      blurb: "Bảy đại môn phái tu tiên của Việt quốc, hợp lực sản xuất Trúc Cơ đan — loại linh dược giúp đột phá từ Luyện Khí kỳ lên Trúc Cơ kỳ. Mỗi phái đưa ra mười đệ tử và mười khối Trúc Cơ đan tại Thăng Tiên đại hội mười năm một lần. Bảy lôi đài Thăng Tiên đại hội tương ứng bảy tiên phái. Hoàng Phong Cốc là một trong bảy phái, tọa lạc tại Thái Nhạc sơn Kiến Châu.",
      detail: "Trúc Cơ đan chỉ các đại môn phái mới luyện chế được; cả Việt quốc liên thủ mười năm chỉ sản xuất hơn ngàn viên — tự dùng còn không đủ. Phương thức phân phối: Thăng Tiên đại hội mười năm một lần — đả lôi đài chọn người ưu tú nhập môn và được uống Trúc Cơ đan. Người đại thắng lôi đài trở thành đệ tử tiên phái, uống Trúc Cơ đan để đột phá Trúc Cơ kỳ. Hoàng Phong Cốc xác nhận là một thành viên tại c141, c144.",
      nguon: ["c0134", "c0135", "c0141", "c0144"]
    },
    {
      id: "nhom-tan-tu-tung-van",
      name: "Nhóm tán tu Tùng Văn",
      cn: null,
      type: "nhom-tu-do",
      typeLabel: "Nhóm tán tu tạm thời",
      diaBan: "Thái Nam cốc (tụ hội), tỏa ra Lam Châu",
      nhanVatChinh: ["Tùng Văn đạo sĩ (trưởng nhóm)", "Hắc Mộc", "Hắc Kim", "Hồng Liên tán nhân", "Khổ Tang đại sư", "Hồ Bình Cô", "Hùng Đại Lực", "Ngô Cửu Chỉ", "Hoàng Hiếu Thiên"],
      blurb: "Nhóm tán tu tạm thời tụ hội tại Thái Nam tiểu hội, do Tùng Văn đạo sĩ tập hợp. Mục đích: hỗ trợ giao dịch, bảo vệ nhau trước nguy cơ tán tu mất tích sau Thái Nam hội. Hàn Lập được mời nhưng từ chối do trực giác bất an.",
      detail: "Nhóm gồm nhiều tán tu từ các địa điểm khác nhau: Hắc Mộc/Hắc Kim (Thương Lang lĩnh, song sinh), Hồng Liên tán nhân (Phi Liên động, nữ), Khổ Tang đại sư (Bồ Lộ sơn, hòa thượng), Hồ Bình Cô/Hùng Đại Lực (vợ chồng, Thiên thủy trại). Sau đó thêm Ngô Cửu Chỉ (Vân Môn giản) và Hoàng Hiếu Thiên (Thạch Thác cốc). Tùng Văn cảnh báo nhiều lần về tán tu mất tích sau các kỳ Thái Nam hội — đề nghị cùng nhau rời đi sau Thăng tiên đại hội.",
      nguon: ["c0130", "c0132", "c0133", "c0134", "c0135", "c0136"]
    },
    {
      id: "hoang-phong-coc",
      name: "Hoàng Phong Cốc",
      cn: null,
      type: "mon-phai",
      typeLabel: "Môn phái tu tiên",
      diaBan: "Thái Nhạc sơn, Kiến Châu",
      nhanVatChinh: ["Chung Linh Đạo (Chưởng môn, hậu kỳ Trúc Cơ kỳ)", "Diệp Tính lão giả (Đường chủ Bách Ky đường)", "Ngô Tính lão giả (quản sự)", "Mộ Dung Sam (quản sự)", "Vương sư thúc (quản sự)", "Lâm sư đệ / Hôi Y Lão Giả (trưởng bối)", "Ngô Phong (chấp sự Truyền công các)"],
      blurb: "Một trong thất đại tiên phái Việt quốc. Tọa lạc tại Thái Nhạc sơn, Kiến Châu, bảo vệ bởi kỳ môn đại trận. Hơn mười nghìn đệ tử, chia ba tầng: chấp sự (Luyện Khí thấp-trung), lĩnh sự (Luyện Khí cao), quản sự (Trúc Cơ kỳ). Một Nguyên Anh sư thúc tổ vắng mặt lâu dài. Hàn Lập nhập môn qua Thăng Tiên Lệnh tại Thăng Tiên đại hội.",
      detail: "Thông tin từ c144–c149. Chưởng môn Chung Linh Đạo — hậu kỳ Trúc Cơ kỳ, trên trăm tuổi trông như ba mươi, uy vọng cao. Cơ cấu: Nghênh Tân lâu (tiếp đón), Nghị sự đại điện (họp nghị), Truyền công các (công pháp), Bách Ky đường (công tác tạp vụ), Huyền Khôn sơn (đệ tử tầng mười trở lên). Hàn Lập được nhận làm đệ tử c147, giao nộp Trúc Cơ đan theo thỏa thuận với Diệp Tính c146.",
      nguon: ["c0141", "c0144", "c0145", "c0146", "c0147", "c0148", "c0149", "c0150"]
    },
    {
      id: "tan-gia",
      name: "Tần gia",
      cn: null,
      type: "gia-toc",
      typeLabel: "Gia tộc tu tiên (đã diệt vong)",
      diaBan: "Tần Diệp lĩnh (lịch sử)",
      nhanVatChinh: ["Chu Nho (nam đinh cuối cùng, đã chết c93)"],
      blurb: "Gia tộc tu tiên cổ xưa tọa lạc tại Tần Diệp lĩnh, từng được Hoàng Phong Cốc cấp Thăng Tiên Lệnh. Bị Diệp gia thôn tính; nam đinh cuối cùng (người họ Chu) bỏ trốn với Thăng Tiên Lệnh. Sau khi Chu Nho chết c93, Tần gia thực tế đã tuyệt tự.",
      detail: "Được làm rõ tại c141: Chu Nho thực ra không phải Tần gia mà là người họ Chu — nam đinh duy nhất còn sống của Tần gia. Tần gia từng nắm giữ Thăng Tiên Lệnh — lệnh bài bảo chứng Hoàng Phong Cốc sẽ cấp Trúc Cơ đan. Diệp gia chiếm lĩnh Tần Diệp lĩnh và thôn tính Tần gia; Chu Nho bỏ trốn mang theo Thăng Tiên Lệnh. Sau khi Hàn Lập giết Chu Nho và nộp Thăng Tiên Lệnh cho Hoàng Phong Cốc (c144–145), Tần gia chính thức mất hết di sản.",
      nguon: ["c0141", "c0144"]
    },
    {
      id: "van-bao-lau-faction",
      name: "Vạn Bảo Lâu",
      cn: null,
      type: "thuong-lau",
      typeLabel: "Thương lâu tu tiên",
      diaBan: "Phường thị Hoàng Phong Cốc",
      nhanVatChinh: ["Điền Bặc Ly (chưởng quỹ)", "Đinh lão (giám định dược)"],
      blurb: "Lầu thương hội tu tiên tại phường thị Hoàng Phong Cốc, chuyên bán pháp khí và vật phẩm tu tiên. Cơ chế bán hàng độc đáo: dùng hộp gấm với phòng thủ pháp lực, chỉ Trúc Cơ kỳ trở lên mới an toàn mở được. Hàn Lập giao dịch tại đây trước Huyết Cấm Thí Luyện.",
      detail: "Xuất hiện c162–c165. Điền Bặc Ly — chưởng quỹ người thường. Đinh lão — giám định dược người thường. Hàn Lập mua: Kim phù tử mẫu đao, Huyền thiết phi thiên thuẫn, Thiên lôi tử, Kim Quang Chuyên phù bảo, Hoàng tinh chi — đổi bằng 2 gốc linh thảo ngàn năm.",
      nguon: ["c0162", "c0163", "c0164", "c0165"]
    },
    {
      id: "tran-gia",
      name: "Trần gia",
      cn: null,
      type: "gia-toc",
      typeLabel: "Gia tộc tu tiên",
      diaBan: "Không rõ — Việt quốc",
      nhanVatChinh: ["Trần sư muội (con gái gia chủ)"],
      blurb: "Gia tộc có quan hệ với Hoàng Phong Cốc qua Trần sư muội — đệ tử đang tu luyện trong cốc. Con gái gia chủ Trần gia là Trần sư muội, nạn nhân của Lục sư huynh.",
      detail: "Đề cập tại c165–c166: Trần sư muội là con gái gia chủ Trần gia. Lục sư huynh dùng Hợp Hoan đan cưỡng bức nàng nhằm lấy 2 viên Trúc Cơ đan thật trong túi nàng. Cái tên Trần gia xuất hiện như bối cảnh thân phận Trần sư muội.",
      nguon: ["c0165", "c0166"]
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].volumes = {
  updatedAt: "2026-06-11",
  volumes: [
    {
      value: "q01",
      label: "Quyển 1",
      range: "Ch.1 – 99",
      title: "Thất Huyền Môn",
      summary: "Hàn Lập từ cậu bé nông thôn bước vào con đường tu tiên khi được tiến cử vào Thất Huyền môn. Từ kỳ trắc thí gian khổ đến khi một mình diệt sạch Dã Lang bang và rời Thất Huyền môn — hành trình khởi đầu của một phàm nhân vươn lên nghịch thiên, khép lại bằng khoảnh khắc lặng lẽ nhìn đám cưới tiểu muội rồi vĩnh viễn không quay lại.",
      milestones: [
        "Ch.1: Hàn Lập rời Sơn Biên tiểu thôn theo tam thúc",
        "Ch.3-4: Trắc thí Luyện Cốt Nhai",
        "Ch.5: Trở thành ký danh đệ tử, được Mặc đại phu chọn vào Thần thủ cốc",
        "Ch.6: Nhận Vô danh khẩu quyết",
        "Ch.8: Trở thành thân truyền đệ tử của Mặc đại phu",
        "Ch.9: Đột phá tầng 2 Vô danh khẩu quyết",
        "Ch.10: Nhặt được bình thần bí",
        "Ch.91: Đoạt kiếm phù từ Chu Nho — lần đầu dùng Khống Vật Thuật thực chiến",
        "Ch.93: Diệt Chu Nho bằng mưu kế — đoạt ba vật phẩm tu tiên",
        "Ch.94: Diệt Cổ Thiên Long và toàn bộ Dã Lang bang trong tử đấu trường",
        "Ch.98-99: Rời Thất Huyền môn, về thôn lần cuối nhìn đám cưới tiểu muội rồi lên đường"
      ]
    },
    {
      value: "q02",
      label: "Quyển 2",
      range: "Ch.100 – 170",
      title: "Gia Nguyên Thành",
      summary: "Hàn Lập và Khúc Hồn đặt chân tới Gia Nguyên Thành — cố hương của Mặc đại phu — sau ba tháng đi thuyền. Tới Lam Châu thực hiện di thư Mặc đại phu: giải âm hàn chi độc bằng Noãn dương bảo ngọc đang ở Mặc phủ. Thu phục Tôn nhị cẩu làm tai mắt, đột nhập Mặc phủ ban đêm, ra mặt với Nghiêm thị dưới danh nghĩa đệ tử Mặc đại phu. Đàm phán căng thẳng với các phu nhân — phá mê dược thiên nhân túy, kể lại chân tướng Mặc đại phu, lên kế hoạch thâu tóm Tứ bình bang để tiếp cận Thần tiên đại hội gần Gia Nguyên. Sau khi nhập môn Hoàng Phong Cốc, Hàn Lập nhận nhiệm vụ trông coi Bách Dược Viên — bí mật chôn bình thần bí để tăng tốc trồng linh dược, đột phá Trường Xuân công tầng 11, tìm ra con đường luyện Trúc Cơ đan qua địa phế chi hỏa tại Nhạc Lộc điện, nhận tin về Huyết Cấm Thí Luyện. Khép lại Quyển 2 bằng trận ác đấu với Lục sư huynh trong phường thị — Hàn Lập thắng nhờ mưu trí, lần đầu sở hữu 2 viên Trúc Cơ đan thật.",
      milestones: [
        "Ch.100: Hàn Lập tới Gia Nguyên Thành, Lam Châu — mở đầu Quyển 2",
        "Ch.103: Giết Hắc Hùng — thu phục Tôn nhị cẩu bằng Hủ tâm hoàn",
        "Ch.104: Đọc di thư Mặc đại phu; xác nhận âm hàn chi độc còn khoảng hai tháng trước khi bộc phát",
        "Ch.106: Lần đầu nhận ra tu tiên sống cùng thành (Lão Tam); biết về Thăng Tiên hội Lam Châu",
        "Ch.109: Ra mặt tại Mặc phủ với tín vật Văn long giới, tự xưng đệ tử Mặc đại phu",
        "Ch.110: Kháng thuật mê hoặc của Tam nương nhờ khí lạnh đan điền",
        "Ch.113: Tặng Oanh Hương Hoàn cho Mặc Thải Hoàn thay vì trả tiền đan dược",
        "Ch.116: Thi triển Hỏa đạn thuật trước các phu nhân; phá mưu thiên nhân túy của Nghiêm thị",
        "Ch.117: Đàm phán chính thức — kể lại toàn bộ chân tướng Mặc đại phu; Nghiêm thị từ chối giao Noãn dương bảo ngọc",
        "Ch.119: Tôn nhị cẩu báo tin Thần tiên đại hội gần Gia Nguyên — Hàn Lập nắm cơ hội trăm năm",
        "Ch.120: Lên kế hoạch thâu tóm Tứ bình bang; giao Dẫn hồn chung cho Tôn nhị cẩu, cử Vân sí điểu giám sát",
        "Ch.151: Nhận Bách Dược Viên — bí mật chôn bình thần bí, dùng Tàn Phiến phủ che",
        "Ch.152: Đột phá Trường Xuân công tầng 11 (tiền-Trúc-Cơ) sau 2 năm khổ tu",
        "Ch.155–156: Phát hiện công thức Trúc Cơ đan tại Nhạc Lộc điện; Hứa lão tiết lộ địa phế chi hỏa thay tiên thiên chân hỏa; mua Ngân Ti đỉnh",
        "Ch.160: Ngô Phong tiết lộ Huyết Cấm Thí Luyện — cấm địa 5 năm một lần, tỷ lệ chết 3/4",
        "Ch.161: Quyết định tham gia Huyết Cấm Thí Luyện; học Liễm khí thuật từ Ngô Phong",
        "Ch.165–169: Tình cờ chứng kiến Lục sư huynh hại Trần sư muội; bị cưỡng bức đối đầu; ác đấu ba chương hạ Lục sư huynh",
        "Ch.170: Phù bảo hóa tro; thu 2 viên Trúc Cơ đan thật — mục tiêu dài hạn lần đầu đạt được"
      ]
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].cotTruyen = {
  q01: [
    {
      chuong: 1,
      tieuDe: "Sơn Biên Tiểu Thôn",
      tomTat: "Hàn Lập, mười tuổi, con thứ tư nhà nông nghèo bảy miệng ăn ở Sơn Biên tiểu thôn. Bước ngoặt đến khi tam thúc — đại chưởng quỹ tửu lâu và đệ tử ngoại môn Thất Huyền môn — về nhà đề nghị tiến cử Hàn Lập dự kỳ khảo thí chiêu thu đệ tử. Cha Hàn Lập đồng ý vì lợi ích tiền bạc. Một tháng sau, Hàn Lập lên xe ngựa rời thôn, kìm nước mắt, không biết vận mệnh mình vừa rẽ sang hướng khác."
    },
    {
      chuong: 2,
      tieuDe: "Thanh Ngưu Trấn",
      tomTat: "Sau ba ngày đường, tam thúc dẫn Hàn Lập tới Thanh Ngưu trấn và sắp xếp cho hắn nghỉ tại tiểu viện sau Xuân Hương tửu lâu — cơ sở của Thất Huyền môn. Vài ngày sau, Vương hộ pháp đích thân đến đón nhóm đệ tử mới. Tam thúc đút lót kín đáo để nhờ Vương hộ pháp chiếu cố cháu. Chương cũng dựng bối cảnh thế lực vùng: Thất Huyền môn (suy tàn, tam lưu tiểu thế lực) đang căng thẳng với Dã Lang bang gốc mã tặc."
    },
    {
      chuong: 3,
      tieuDe: "Thất Huyền Môn",
      tomTat: "Đoàn xe năm ngày tới Thái Hà sơn — tổng môn Thất Huyền môn, căn cứ đặt tại đỉnh Lạc Nhật phong hiểm trở. Hàn Lập quan sát bạn đồng hành: Vũ Nham mười ba tuổi, con nhà võ quán, có biểu tỷ quyền thế trong môn. Nhạc đường chủ tiếp đón, lệnh cho đám trẻ nghỉ đêm tại Thanh khách viện; sáng hôm sau dẫn xuống khu rừng trúc bắt đầu chọn lựa đệ tử."
    },
    {
      chuong: 4,
      tieuDe: "Luyện Cốt Nhai",
      tomTat: "Trắc thí nhập môn tại Luyện Cốt Nhai: vượt ba chặng gian khổ — rừng trúc dốc, bãi cự thạch sắc bén, vách đá thẳng đứng — và leo lên đỉnh trước chính ngọ. Vũ Nham dẫn đầu, leo lên đỉnh sớm nhất rồi ngạo mạn nhìn xuống. Hàn Lập kiệt sức dần; được sư huynh lạnh lùng âm thầm bảo hộ. Cuối chương hắn tới được sợi dây thừng nhưng hai tay hoàn toàn mất cảm giác, vẫn quyết thử thêm một lần."
    },
    {
      chuong: 5,
      tieuDe: "Mặc Đại Phu",
      tomTat: "Hàn Lập không kịp leo đỉnh, được sư huynh Trương Quân ôm lên; thành ký danh đệ tử cùng Trương Thiết. Vũ Nham nhờ thế lực chị họ (vợ Mã phó môn chủ) mà vào thẳng Thất Tuyệt đường học tuyệt kỹ. Trên đường lên núi, đoàn gặp Mặc đại phu — lão thầy thuốc già yếu ho khan nhưng được tất cả kính trọng như thần. Thiếu nhân thủ, Mặc đại phu chỉ thẳng vào hai ký danh đệ tử dẫn về Thần thủ cốc."
    },
    {
      chuong: 6,
      tieuDe: "Vô Danh Khẩu Quyết",
      tomTat: "Mặc đại phu chính thức nhận Hàn Lập và Trương Thiết làm đệ tử ký danh, tuyên bố chỉ dạy y dược không dạy võ; truyền Vô danh khẩu quyết tu thân dưỡng tính, cấm tiết lộ, hẹn tra khảo sau nửa năm. Hàn Lập biết được cơ cấu Thất Huyền môn và lai lịch Mặc đại phu: người ngoài cứu mạng Vương môn chủ nên được mời nhập môn, y thuật siêu việt, công phu ẩn giấu, được tất cả kính trọng."
    },
    {
      chuong: 7,
      tieuDe: "Tu Luyện Nan",
      tomTat: "Nửa năm khổ tu, Hàn Lập phát hiện thể nội sinh ra lương khí lạnh — khác hẳn nhiệt lưu chân khí nóng của đồng môn tu Chính dương kinh. Tốc độ tiến bộ chậm kinh người, suýt nản chí bỏ cuộc; đến khi biết Trương Thiết tu cùng bộ khẩu quyết mà hoàn toàn không sinh ra gì thì Hàn Lập nhận ra mình còn may mắn và càng dốc sức. Hàn Lập và Trương Thiết cũng nhận ra Mặc đại phu thực ra mưu cầu trường sinh bất tử."
    },
    {
      chuong: 8,
      tieuDe: "Nhập Môn Đệ Tử",
      tomTat: "Sau nửa năm, Hàn Lập và Trương Thiết dự khảo hạch. Trương Thiết hoàn toàn không có thành quả; còn Hàn Lập tuy chỉ nhích được chút ít (lương khí từ bằng sợi tóc lên sợi chỉ) nhưng khi Mặc đại phu chạm tay lạnh như băng của hắn, luồng năng lượng tự vận hành khiến lão kích động như vừa tìm được kỳ trân dị bảo — lập tức thu Hàn Lập làm thân truyền đệ tử. Đột ngột đổi ý, Mặc đại phu cũng nhận Trương Thiết với tâm pháp riêng. Cả hai đều qua."
    },
    {
      chuong: 9,
      tieuDe: "Tượng Giáp Công",
      tomTat: "Hàn Lập được đối đãi đặc biệt: thạch thất luyện công riêng bằng đá hoa cương cứng chắc (chỉ dành cho người thân phận cao trong môn) và dược vật trân quý giúp tốc độ tu tăng mấy lần. Nhờ đó hắn đột phá luyện thành tầng 2 Vô danh khẩu quyết — bị nội thương nhẹ khi trùng quan. Mặc đại phu truyền Tượng giáp công cho Trương Thiết; môn võ công luyện thể chín tầng cực hiếm này rất hợp với Trương Thiết, hắn đã luyện tầng 1 tới đỉnh phong."
    },
    {
      chuong: 10,
      tieuDe: "Thần Bí Bình Tử",
      tomTat: "Hàn Lập theo thói quen rời Thần thủ cốc đi xem Trương Thiết luyện Tượng giáp công dưới thác nước. Trên đường, hắn đá phải một vật cứng giấu dưới lá khô — một cái bình kim loại màu xanh biếc hoa văn tinh xảo, nặng bất thường, bên trong chứa chất lỏng sóng sánh, nắp vặn không mở được. Vừa tò mò vừa bị đau chân, Hàn Lập giấu bình vào ngực đề phòng người khác thấy, rồi quay về chỗ ở."
    },
    {
      chuong: 11,
      tieuDe: "Bình Nan Khai",
      tomTat: "Hàn Lập trở về phòng, tự băng bó vết thương ngón chân bằng thuốc của Mặc đại phu rồi nghiêm túc khảo sát cái bình thần bí: chất liệu lạ không phải kim loại cũng không phải đồ sứ, hoa văn lá xanh sống động, niêm phong cực chặt. Hàn Lập nhờ Trương Thiết — người có sức lực nhấc nổi hơn mười thùng nước — thử mở giúp, nhưng cả hai đều thất bại. Bình không nhúc nhích. Hàn Lập giấu sự thật, mang bình về ngồi ngắm nghĩ cách mở."
    },
    {
      chuong: 12,
      tieuDe: "Đập Bình Tử",
      tomTat: "Hàn Lập quyết định thử bạo lực: lén lấy tiểu thiết chùy từ phòng chứa tạp vật, đập bình với lực tăng dần tới mười hai phần công lực. Nửa thân bình lún vào viên gạch cứng nhưng bình vẫn nguyên vẹn tuyệt đối — không một vết xước. Xác lập chắc chắn: đây là vật phi thường, bất hoại trước vũ lực phàm nhân. Hàn Lập quyết giữ kín, giấu bình vào túi da đeo cổ cùng bùa bình an của mẹ. Qua hồi ký: xuất thân nghèo khổ và mâu thuẫn sâu với phú gia đệ tử định hình tâm lý chiếm hữu và không tin người quyền thế."
    },
    {
      chuong: 13,
      tieuDe: "Dị Tượng Khởi",
      tomTat: "Trương Thiết mang cơm tới cùng ăn, kể khổ về Tượng giáp công tầng 1 dưới tay Mặc đại phu (bôi thuốc hôi, chịu đòn gậy gỗ, đêm không ngủ yên). Đêm hôm đó, khi Hàn Lập ôm bình ngủ thiếp, bình thần bí lần đầu lộ công năng: hút ánh sáng trắng li ti từ giếng trời, ra chỗ trống thì tụ tập dày đặc hơn, tạo thành một bồn ánh sáng lớn bao quanh bình. Đây là lần đầu bảo vật bộc lộ bản chất phi thường."
    },
    {
      chuong: 14,
      tieuDe: "Thần Bí Dịch",
      tomTat: "Hàn Lập xác nhận bình hút ánh sáng mạnh nhất khi đặt ngoài trời thoáng đãng ban đêm. Đến ngày thứ tám, thân bình phát quang xanh biếc, hiện văn tự vàng kim cổ xưa, nắp tự mở nhẹ nhàng — bên trong lộ một giọt Thần Bí Dịch màu xanh biếc to bằng hạt đậu, chậm rãi cổn động. Hàn Lập thất vọng coi là vô dụng và cất đi nghiên cứu sau. Bốn năm trôi qua: Mặc đại phu dùng tiền thưởng (gấp đôi mỗi tầng) thúc Hàn Lập tu điên cuồng, phong tỏa Thần Thủ Cốc để hắn chuyên tâm. Kết quả: Hàn Lập 14 tuổi, đạt tầng 3 Vô danh khẩu quyết."
    },
    {
      chuong: 15,
      tieuDe: "Tứ Niên Hậu",
      tomTat: "Sau 4 năm, Hàn Lập đình trệ ở tầng 3 hơn một năm dù tiêu hao lớn kỳ trân dược vật. Nhờ cảm quan mẫn duệ từ tầng 3, hắn phát giác ánh mắt tham lam của Mặc đại phu — nhìn hắn như nhìn đồ vật. Lòng đề phòng tăng dần. Mặc đại phu sức khỏe suy sụp, hạ sơn tìm dược tài, để Hàn Lập ở lại một mình. Hai năm trước, Trương Thiết đã biến mất sau khi luyện thành Tượng giáp công tầng 3 — để lại thư cáo từ đi lịch lãm giang hồ, gây chấn động Thất Huyền môn."
    },
    {
      chuong: 16,
      tieuDe: "Tiểu Toán Bàn",
      tomTat: "Hàn Lập ra ngoài quan sát trường đấu giữa hai phe đệ tử Thất Huyền Môn. Bằng cách bịa thân phận và khéo léo khai thác \"tiểu toán bàn\" (đệ tử hay tính toán vụ lợi, biết hết chuyện trong môn), Hàn Lập nắm rõ nguyên do: Vương Dạng (đường đệ Vương đại bàn) bị Trương Trường Quý ỷ tiền cướp hôn ước, uất ức nhảy sông tự tử. Trận đấu mang tính phe phái — phú gia đệ tử đối đầu trung-hạ tầng đệ tử. Vương đại bàn thắng trận mở màn. Hàn Lập nhận ra nhiệt huyết thuở trẻ đã nguội, định xem xong về sơn cốc."
    },
    {
      chuong: 17,
      tieuDe: "Lệ Sư Huynh (1)",
      tomTat: "Tiếp diễn trường đấu: đao vs kiếm, kết thúc với người dùng đao trúng kế bại trận. Tiểu toán bàn kể cho Hàn Lập nghe về Lệ sư huynh — người sắp ra trận cuối. Hàn Lập bịa thân phận \"đệ tử của một vị cung phụng\" để tự nâng vị thế, khiến tiểu toán bàn đổi xưng hô và nịnh bợ. Hàn Lập tự biết mình chỉ là hư danh. Lệ sư huynh xuất hiện: thần sắc lãnh khốc, cầm đao hàn quang, nhắm mắt đứng ở trung tâm; cả hai phe đồng loạt hô tên khiến tràng đấu chấn động."
    },
    {
      chuong: 18,
      tieuDe: "Lệ Sư Huynh (2)",
      tomTat: "Tiểu toán bàn kể đầy đủ tiểu sử Lệ sư huynh: ký danh đệ tử xuất thân, phá kỷ lục trắc thí (vượt 30 chiêu), căn cốt bình thường nên không ai nhận, chỉ học Phong Lôi đao pháp từ hộ pháp bình thường — nhưng tự lực leo top 16 rồi hạng ba toàn môn; danh hiệu \"Lệ hổ\", sắp vào Thất Tuyệt đường. Trương Trường Quý cử Triệu Tử Linh (đệ tử ngũ trưởng lão, dùng nhuyễn kiếm âm độc) ra đấu; Lệ sư huynh hét vang chấn động, hóa hơn mười đao ảnh áp chế hoàn toàn. Hàn Lập nêu nghi vấn vì sao không có sư huynh lớn nào dự xem — tiểu toán bàn biến sắc, gợi ý điều kiêng kỵ bí mật."
    },
    {
      chuong: 19,
      tieuDe: "Giang Hồ Đấu",
      tomTat: "Hàn Lập trình lệnh bài nội môn chứng minh thân phận; Kim Đông Bảo (tục danh tiểu toán bàn) kể bí mật: chiến tranh với Dã Lang bang nhiều năm, tổn thất nhiều sư huynh lớn, dẫn tới môn quy mới — đệ tử xuất sư phải xuống núi lịch lãm trước khi nhận chức nội môn. Lệ sư huynh thắng nốt: liên hoàn đao chấn bay nhuyễn kiếm Triệu Tử Linh, hổ khẩu tay phải bị thương, cam bái hạ phong. Lệ sư huynh đột ngột biến sắc, viện cớ việc gấp, vội rời trường bằng khinh công. Hàn Lập hỏi tục danh Kim Đông Bảo, hứa chữa bệnh miễn phí, rồi bỏ vào tùng lâm."
    },
    {
      chuong: 20,
      tieuDe: "Trừu Tủy Hoàn",
      tomTat: "Hàn Lập băng rừng tùng, nghe tiếng rên bên suối, phát hiện Lệ sư huynh bệnh cấp tính nguy hiểm tính mạng. Hắn dùng ngân châm điểm huyệt cứu tỉnh. Nhận ra bình ngọc nhỏ trên người Lệ sư huynh, Hàn Lập vạch trần toàn bộ bí mật Trừu Tủy Hoàn: thành phần từ hợp lan và 23 loại vật hiếm, kích phát thân thể tăng vọt võ công, nhưng phải uống định kỳ và dù uống đúng vẫn chết sau khoảng 10 năm. Lệ sư huynh chỉ còn sống 5-6 năm. Hàn Lập tiết lộ mình cũng từng dùng hoàn này nhưng chia mười phần làm dược dẫn — cách an toàn không gây hại. Hắn đề nghị hai lựa chọn cho Lệ sư huynh: nhờ Mặc đại phu phối bí dược (sống thêm 20-30 năm, mất võ công) hay tiếp tục dùng Trừu Tủy Hoàn — để hắn tự quyết."
    },
    {
      chuong: 21,
      tieuDe: "Chỉ Thống Dược",
      tomTat: "Lệ Phi Vũ (Lệ sư huynh) tỉnh lại sau khi được Hàn Lập cứu, lập tức rút trường đao kề cổ Hàn Lập đòi lý do không diệt khẩu. Hàn Lập giữ trấn định, lập luận bằng đạo lý 'vừa cứu mạng' và đề nghị phát độc thề giữ bí mật — lén thủ thiết đồng phòng thân trong ống tay áo. Nguy hiểm được hóa giải. Lệ Phi Vũ tự xưng tên thật, hứa trả ơn. Hàn Lập đoán đúng nỗi phiền toái chính trị của Lệ Phi Vũ: đệ tử hộ pháp bình thường nhưng được lòng đường chủ, trưởng lão, môn chủ. Hai người hẹn hôm sau giao chỉ thống dược tại cốc khẩu. Sau biến cố, Hàn Lập rút ra bài học 'không có lợi không làm', từ bỏ phần bản tính thuần phác."
    },
    {
      chuong: 22,
      tieuDe: "Tâm Ma Sanh",
      tomTat: "Lệ Phi Vũ hẹn trưa hôm sau lấy thuốc rồi cáo từ đi điều dưỡng; Hàn Lập cố ý không truy hỏi nguyên nhân dùng Trừu Tủy Hoàn — hành động tế nhị khiến Lệ Phi Vũ mang ơn sâu hơn. Hàn Lập phối xong 5 phần chỉ thống dược, cố ý làm đúng 5 phần để năm nào đối phương cũng phải tới lấy. Đêm đó hắn ngồi hoài niệm người thân — hơn bốn năm xa nhà, gửi bạc về nhà khá lên nhưng khẩu khí thư ngày càng xa lạ. Bất ngờ, khí huyết quay cuồng, tâm ma xâm lấn — nguy cơ sống chết trong gang tấc. Mặc đại phu vắng mặt, Hàn Lập phải tự cứu."
    },
    {
      chuong: 23,
      tieuDe: "Thí Dược Thỏ",
      tomTat: "Hàn Lập lóe ra, tìm lại bình an phù cha mẹ tặng — chạm vào tay liền cảm giác thanh tâm thấu nhập, mọi dị tượng tức thì tiêu trừ, thoát chết khỏi tâm ma. Hắn mới nhận ra đây không phải tẩu hỏa nhập ma mà là tâm ma xâm lấn người tu đạo. Công lực tăng đạt đỉnh phong tầng thứ ba. Tình cờ tìm lại bình thần bí đã quên — nhận ra đây là kỳ vật thế gian ít có, quyết thí nghiệm giọt lục dịch. Sáng hôm sau mua 2 con thỏ từ quản sự bếp, pha lục dịch vào nước cho thỏ uống — thỏ da nổi vết phồng, thân thể trướng phồng to như dưa hấu, kết cục kinh người."
    },
    {
      chuong: 24,
      tieuDe: "Kinh Hồn Định",
      tomTat: "Hai con thỏ nổ banh thân, huyết nhục bay tán loạn. Hàn Lập quyết không đụng vào bình nữa. Đến trưa, giao gói dược phấn giảm đau cho Lệ Phi Vũ tại cốc khẩu; Lệ Phi Vũ mừng rỡ vì từ trước các loại thuốc giảm đau đều vô dụng, lại thiếu thêm một phần đại nhân tình. Trở về, Hàn Lập dọn sạch hiện trường vụ nổ; khổ luyện cả buổi chiều vẫn không phá vỡ ngưỡng tầng tư — nhận ra cần ngoại lực dược vật, mong Mặc đại phu sớm về."
    },
    {
      chuong: 25,
      tieuDe: "Sáp Liễu Thành",
      tomTat: "Sáng hôm sau ra dược viên, Hàn Lập phát hiện điều kỳ diệu: mấy cọng dược thảo bị nước pha lục dịch làm ướt qua một đêm đã biến đổi thành dược tài vài chục năm dược tính (hoàng long thảo lá phát tử, khổ liên hoa nở chín cánh, vong ưu quả vỏ đen). Hắn mừng đến mức cười ngửa mặt té ngã. Đặt ra ba nan đề cần giải: kiểm độc, xác nhận bình tái sinh lục dịch, nắm phương pháp. Thỏ ăn thuốc bổ từ thảo thôi sanh không trúng độc, ngược lại kiện tráng hơn. Hàn Lập suy đoán điều kiện kích hoạt: bình chỉ phát dị biến vào đêm trời quang thấy sao trăng. Trời mưa phùn nửa tháng liền, hắn buồn bực cực kỳ."
    },
    {
      chuong: 26,
      tieuDe: "Thôi Dược Sanh",
      tomTat: "Trời quang trở lại; bình thần bí tái hiện quang điểm tụ thành quả cầu sáng, rồi 7 ngày sau sinh một giọt lục dịch mới — xác nhận bình tái sử dụng được. Qua hàng loạt thí nghiệm, Hàn Lập nắm phương pháp: nhỏ nguyên chất một giọt lên một gốc cây tăng khoảng 100 năm tuổi, hòa tan thì hiệu quả giảm mạnh. Lục dịch chỉ giữ được một khắc sau khi rời bình. Nuôi tam ô thảo thành ngàn năm qua hai tháng. Nhận thức 'hoài bích kỳ tội': bảo vật vô giá này nếu lộ ra thì chính các môn chủ bổn môn cũng giết người đoạt bảo; quyết tâm thủ khẩu như bình. Tự nhắc tiếp tục tu Trường Xuân công vì cảm nhận biến hóa kỳ lạ trên thân thể."
    },
    {
      chuong: 27,
      tieuDe: "Phối Linh Dược",
      tomTat: "Tận dụng thời gian Mặc đại phu vắng mặt (đã nửa năm, còn 6-7 tháng nữa mới về), Hàn Lập bí mật dùng lục dịch nuôi dưỡng dược tài trân quý. Hắn nhớ lại ánh mắt kỳ quái của Mặc đại phu từng nhìn hắn như nhìn đồ vật, quyết tâm giấu kín bí mật bình. Qua nhiều lần thất bại tốn kém, hắn tự tay phối chế thành công các thánh dược: Hoàng Long Đan, Thanh Linh Tán, Kim Tủy Hoàn, Dưỡng Tinh Đan — hơn mười bình thánh dược hiếm có. Từ nay việc tu luyện lên tầng tư, thậm chí tầng năm, sáu cũng không tốn quá nhiều sức lực."
    },
    {
      chuong: 28,
      tieuDe: "Mặc Lão Hồi Cốc",
      tomTat: "Hàn Lập trích linh dược phối thêm hai loại thuốc phòng thân: một loại giải độc, một loại chữa thương. Rồi ăn Hoàng Long Đan và Kim Tủy Hoàn — ngay đêm đó đột phá tầng thứ tư Trường Xuân công. Ngũ cảm tăng vọt mang tính chất: thấy rõ sợi tơ nhện trong góc phòng, nghe tiếng giun đào đất cách mấy chục trượng, cảm nhận vạn vật phạm vi mười trượng. Không lâu sau, Mặc đại phu trở về Thần Thủ Cốc sau một năm vắng mặt — sắc mặt hôi bại như đại hạn sắp đến, dẫn theo một người thần bí mặc lục bào che kín mặt. Hàn Lập đưa ra đáp án dự phòng 'không có biến hóa gì lớn', giấu đột phá thật, tự tin che giấu được nhờ điều khiển chân khí."
    },
    {
      chuong: 29,
      tieuDe: "Xung Đột Khởi",
      tomTat: "Mặc đại phu thăm dò chân khí Hàn Lập và tỏ ý không hài lòng. Vào phòng kín, hắn lộ chân tướng: thân pháp như u linh, trong nháy mắt điểm huyệt chế trụ Hàn Lập toàn thân tê liệt. Hàn Lập cố giữ trấn định, dùng lời cung kính rồi hỏi ngược thẳng thắn; Mặc đại phu tán dương ba tiếng 'Hảo', tước cục sắt hắn lén thủ phòng thân. Mặc đại phu tự xưng tên thật Mặc Cư Nhân, đặt thẳng: quan hệ hai bên chỉ là lợi dụng lẫn nhau, không có tình thầy trò."
    },
    {
      chuong: 30,
      tieuDe: "Kiêu Hùng Mạt Lộ",
      tomTat: "Mặc Cư Nhân phơi bày toàn bộ thân thế: thực chất mới 30 tuổi dù bề ngoài như trên 70; từng là cao thủ võ lâm Lam Châu hiệu 'quỷ thủ', bị thân tín ám toán bằng độc thủ nên lưu lạc. Tại nơi thần bí, tình cờ được kỳ thư: khôi phục được công lực nhưng bị tà khí xâm cốt, lão hóa cực nhanh (một ngày bằng mười ngày người thường), chỉ còn sống thêm khoảng một năm. Cách phá giải: cần người luyện Trường Xuân công tới tầng tư dùng Trường Xuân khí kích thích bí huyệt — sau khi thử mấy trăm đồng tử thất bại, chỉ Hàn Lập (có linh căn) mới có phản ứng. Lý do ra tay khống chế sớm: lần xuống núi vừa rồi bị cừu gia nhận ra, khổ chiến hao hết tinh lực. Hàn Lập ngoài mặt bình thản nhưng nội tâm chấn động dữ dội."
    },
    {
      chuong: 31,
      tieuDe: "Thi Trùng Hoàn",
      tomTat: "Mặc đại phu vạch trần việc Hàn Lập cố ý giấu giếm tiến độ tu luyện Trường Xuân công, dồn ép tâm lý cho tới khi hắn thất thủ. Lão lấy ra Thi Trùng Hoàn — trùng noãn bí pháp — ép Hàn Lập nuốt vào, đặt thời hạn một năm: nếu không có giải dược, trùng nở ra ăn sạch nội tạng, chết thống khổ ba ngày ba đêm. Mặc đại phu còn đe dọa cha mẹ thân nhân Hàn Lập. Hàn Lập từng nảy ý đồng quy vu tận nhưng không thể để cha mẹ liên lụy, đành khuất phục."
    },
    {
      chuong: 32,
      tieuDe: "Hào Khí Sinh",
      tomTat: "Hàn Lập thử giải độc Thi Trùng Hoàn bằng Thanh Linh Tán nhưng thất bại — xác nhận Mặc đại phu không lừa. Hắn từ bỏ ý nghĩ phó thác mạng vào lòng thương của đối phương, quyết tâm gia tăng thực lực và tự nắm vận mệnh. Trên sân đón gió sớm dưới bình minh đỏ rực, Hàn Lập hào khí đại phát, tuyên bố vận mệnh chỉ do mình nắm giữ."
    },
    {
      chuong: 33,
      tieuDe: "Tư Hạ Giao Dịch",
      tomTat: "Hàn Lập và Lệ Phi Vũ duy trì giao dịch dược-đổi-võ định kỳ tại thủy đàm bí mật (bốn phía vách núi, lối vào là tiểu sơn động sau cây hòe cổ) đã hơn nửa năm và dần thành hảo hữu. Hàn Lập than Cuồng Mãnh Kình quá cương mãnh không hợp; Lệ Phi Vũ đề nghị bỏ khẩu quyết theo hắn học chân công phu, Hàn Lập từ chối. Khi hỏi về kiếm pháp không cần chân khí, Lệ Phi Vũ nhắc tới Trát Nhãn kiếm pháp — kiếm pháp kỳ quái chưa ai luyện thành trong hơn trăm năm."
    },
    {
      chuong: 34,
      tieuDe: "Trát Nhãn Kiếm Pháp",
      tomTat: "Hàn Lập linh cảm Trát Nhãn kiếm pháp chính là thứ mình cần; thỏa thuận với Lệ Phi Vũ lén đem nguyên cuốn ra ngoài cho hắn chép rồi trả về. Trên đường về Thần Thủ cốc, Hàn Lập quan sát nam tử thần bí đứng bất động ngoài cửa phòng Mặc đại phu — phán đoán đây là sát thủ con rối của Mặc đại phu, bóng lưng có cảm giác quen thuộc nhưng không nhớ ra. Hồi tưởng: hai tháng trước nhờ Hoàng Long Đan và Kim Tủy Hoàn đột phá từ tầng tư lên tầng năm Trường Xuân công, có năng lực ghi nhớ võ học không thể quên."
    },
    {
      chuong: 35,
      tieuDe: "Thâu Bí Tịch",
      tomTat: "Lệ Phi Vũ mang tới một túi lớn nặng trịch — hóa ra không phải một quyển mà là cả đống bí tịch trộm từ Thất Tuyệt đường tàng thư. Hàn Lập kinh hãi tức giận vì nguy cơ bị tuần đường hộ pháp phát hiện thì cả hai chết không kịp. Mỗi cuốn đều đóng dấu 'Thất tuyệt đường tàng thư' bằng mực vàng."
    },
    {
      chuong: 36,
      tieuDe: "Giật Mình",
      tomTat: "Hàn Lập trấn tĩnh yêu cầu giải thích. Lệ Phi Vũ trao cho hắn một quyển mỏng — bìa ghi 'Trát Nhãn kiếm phổ', rồi lần lượt ném thêm bốn quyển nữa đều cùng tên. Hàn Lập ngây dại khi biết toàn bộ đống bí tịch đó — tổng cộng 74 quyển — đều cùng mang tên 'Trát Nhãn kiếm phổ'. Lệ Phi Vũ hả hê vì hiếm thấy được khuôn mặt 'giật mình' của Hàn Lập. Hàn Lập cẩn thận mở xem các trang sách ố vàng."
    },
    {
      chuong: 37,
      tieuDe: "Tam Bất Luyện",
      tomTat: "Hàn Lập đọc trọn đống bí tịch với tốc độ kinh nhân, vận Trường Xuân công diễn luyện lại trong đầu. Hắn giải thích Trát Nhãn kiếm pháp cho Lệ Phi Vũ: kiếm kỹ lợi dụng ánh sáng và sai lầm thị giác, chỉ là một phần nhỏ của tổng thể. Điều kiện 'tam bất luyện' — quan trọng nhất là cấm chân khí có thành tựu — khiến Lệ Phi Vũ lập tức mất hứng và cáo từ về trước. Hàn Lập nhờ Trường Xuân công nhìn rõ ban đêm mới chạy được về Thất Huyền môn trên sơn đạo hiểm yếu tối đen."
    },
    {
      chuong: 38,
      tieuDe: "Đêm Gặp Gian Tế",
      tomTat: "Trên đường về đêm, nhờ giác quan nhạy bén từ Trường Xuân công, Hàn Lập kịp ẩn mình sau đại thụ, nghe lén được hai gian tế Dã Lang bang bàn kế hoạch ra tay với Thất Huyền môn — liên quan tới việc trộm một 'danh sách'. Hắn nhận ra một trong hai người chính là đại quản sự phòng bếp (người từng bán thỏ cho hắn) qua giọng nói; nhận xét thân phận quản sự bếp mới dễ lên xuống núi thường xuyên truyền tin không bị chú ý."
    },
    {
      chuong: 39,
      tieuDe: "Điều Kiện Biến Thái",
      tomTat: "Hàn Lập quyết định giao toàn bộ công lao bắt gian tế cho Lệ Phi Vũ lập công — vừa báo đáp ân tình kiếm phổ, vừa giúp Lệ Phi Vũ (người có dã tâm tiến vào cao tầng vì Trừu Tủy Hoàn đã ăn) thực hiện khát vọng. Hắn suy ngẫm sâu về bản chất Trát Nhãn kiếm pháp: bí kỹ ám sát kết hợp thiên thời-địa lợi-nhân hòa, lợi dụng ánh sáng-cây cỏ làm sai lệch thị giác địch, cấm có nội lực tinh thuần, chiêu thức phức tạp đến mức cả Thất Huyền môn từ bỏ."
    },
    {
      chuong: 40,
      tieuDe: "Bí Kỹ Uyên Nguyên",
      tomTat: "Chương kể lai lịch Trát Nhãn kiếm pháp: người sáng lập là trưởng lão Thất Huyền môn bị phế nội công, giấu kín bí mật, bế quan hơn mười năm tự sáng tạo ra môn kiếm kỹ từ các bí tịch cưỡng đoạt. Khi luyện thành thì Thất Huyền môn đang bị vây diệt — hắn mở đường máu thoát vây, lập đại công, rồi qua đời ở tuổi hoa giáp. Hàn Lập đọc bí tịch suốt đêm tới sáng, quyết ghi tạc toàn bộ vào trí nhớ thay vì sao chép để không lộ trước Mặc đại phu; nhận ra muốn luyện thành cần 2-3 năm, mà thời gian không đợi người."
    },
    {
      chuong: 41,
      tieuDe: "Lưu Ngôn Dạ Xuất",
      tomTat: "Hàn Lập kết thúc mọi chuẩn bị trong nửa tháng: trả bí tịch gốc cho Lệ Phi Vũ và tố giác gian tế Dã Lang bang (đại quản sự trù phòng) để Lệ Phi Vũ lập công. Đặt thợ rèn bí mật làm vỏ kiếm cải tiến, phụ kiện vô danh và chuông sắt tinh xảo — dụng cụ cho kế hoạch tự vệ chưa lộ rõ. Đêm đó biến mất khỏi sơn cốc Mặc đại phu, để lại thư hẹn gặp lại đúng bốn tháng sau. Phía Mặc đại phu: đọc thư, bóp nát, rồi triệu hồi Vân sí điểu — loài chim bay nhanh hơn mũi tên — sai đi theo dõi Hàn Lập suốt thời gian bế quan; tuyên bố 'thần cản sát thần' và cười rộ phong cuồng."
    },
    {
      chuong: 42,
      tieuDe: "Vân Sí Điểu",
      tomTat: "Mở đầu tiết lộ góc khuất: Dư Tử Đồng — thanh niên bí ẩn giao tiếp với Mặc đại phu qua truyền âm trong đầu — cảnh báo lão chớ khinh thường Hàn Lập. Mặc đại phu đang luyện công pháp do Dư Tử Đồng cấp (đã thử trên động vật, có con chết), và rải trận pháp bằng bột xương dã thú trong thạch thất. Hàn Lập phía mình đã ẩn mình trong khe núi hoang vu hình chữ nhất — hai đỉnh núi kẹp giữa, bụi gai bít hai đầu, màn dây leo che kín đỉnh. Sau ~hai tháng, luyện thành Liễm tức công và Ngụy nặc thuật tới hỏa hầu nhất định; kiểm nghiệm bằng cách ngụy trang thành cọc gỗ bắt được chim lông xám. Đoán ra Vân sí điểu là tai mắt của Mặc đại phu nhưng không nỡ ra tay vì yêu thích nó."
    },
    {
      chuong: 43,
      tieuDe: "Vạn Sự Cụ Bị",
      tomTat: "Thất Huyền môn xảy ra đại sự: Lệ Phi Vũ phá tan âm mưu của hai gian tế Dã Lang bang, bắt được cả hai. Vương môn chủ trước đông đảo đệ tử thụ phong hộ pháp cho Lệ Phi Vũ, danh tiếng vang dội — Hàn Lập không hay biết vì đang bế quan luyện công. Chính Hàn Lập: chỉ còn một hôm trước ngày hẹn, luyện thành La Yên bộ ngay ngày cuối trong rừng gai bằng cách giắt thiết linh khắp người. Trường Xuân công đã đạt tầng sáu — tầng cao nhất Mặc đại phu từng cấp, đạt được nhờ hơn mười bình linh dược phụ trợ. Mỗi tầng Trường Xuân công tăng tinh thần và ngũ cảm; sinh ra 'ngụy chân khí' chỉ tăng xúc giác chứ không có uy lực thực dụng. Hàn Lập đoán các tầng tối hậu mới là nơi chứa diệu dụng chính, nhưng biết không thể đòi Mặc đại phu cấp tiếp."
    },
    {
      chuong: 44,
      tieuDe: "Giải Dược",
      tomTat: "Hàn Lập trở lại đúng hẹn, đối mặt Mặc đại phu trong một màn đấu trí căng thẳng. Lão dùng khích tướng để dụ hắn vào nhà, cố tình đóng cửa — Hàn Lập cảnh cáo, buộc lão để cửa mở. Hàn Lập ép Mặc đại phu giao giải dược Thi Trùng Hoàn trước khi cho kiểm tra công lực; lão miễn cưỡng đưa viên đan màu đen, Hàn Lập uống xuống — trùng noãn biến mất hoàn toàn. Khuôn mặt vô tình giữ không nổi, lộ vẻ mừng; Mặc đại phu chú ý thấy, giải thích điều đó như 'đốc thúc tu luyện'. Cuối chương: lão lại xin bắt mạch, Hàn Lập e bị chế trụ qua đó — khó mở miệng từ chối thẳng."
    },
    {
      chuong: 45,
      tieuDe: "Ám Toán Dữ Lão Nha",
      tomTat: "Hàn Lập đã tính trước bước này: giấu thực lực ở tầng tư, chuẩn bị sẵn kế thoát thân. Đồng ý cho bắt mạch; Mặc đại phu xác nhận được công lực rồi trở mặt hô 'Thắt', khống chế thân thể Hàn Lập bất động. Lão định điểm ma huyệt trước ngực — thất bại hoàn toàn vì cơ thể Hàn Lập cứng như thiết bản (nhờ Trường Xuân công tầng sáu). Nhờ tầng sáu, năng lực phục hồi dị thường vượt xa dự tính của Mặc đại phu; Hàn Lập tỉnh lại, cổ tay linh hoạt như cá chạch thoát ra. Lăn tới góc phòng, rút đoản kiếm, lạnh lùng tuyên bố hôm nay chỉ một người sống ra khỏi căn phòng — lần đầu lộ nanh vuốt trước Mặc đại phu."
    },
    {
      chuong: 46,
      tieuDe: "Phá Thang Nhất Kiếm",
      tomTat: "Mặc đại phu khinh thường, chủ động nhường Hàn Lập ra tay trước. Hàn Lập ra đòn: vốc bột trắng tạo màn khói dày đặc che kín toàn phòng, thân ảnh biến mất. Mặc đại phu dùng Phách không chưởng khuấy tan khói nhưng Hàn Lập đã biến. Lão đứng gần cửa chắc chắn kiểm soát lối ra — nhưng nghe tiếng chuông sắt trên trần nhà, nhìn lên đánh chưởng — mắc bẫy nghi binh. Đúng lúc đó một kiếm hàn quang từ dưới đất phóng lên đâm vào bụng lão: Hàn Lập đã áp sát mặt đất bằng Nhuyễn cốt công + Liễm tức công + Ngụy nặc thuật. Kiếm chỉ khoét rách y sam nhờ Mặc đại phu dùng Thiết bản kiều né thoát. Lần đầu trong nửa đời giang hồ, Mặc đại phu run rẩy mặt xanh lét vì suýt chết. Lão thừa nhận coi nhẹ Hàn Lập, chuẩn bị ra tuyệt chiêu thật."
    },
    {
      chuong: 47,
      tieuDe: "Ma Ngân Thủ Đối La Yên Bộ",
      tomTat: "Mặc đại phu thốt ba chữ 'Ma Ngân Thủ', sát khí trùng thiên bức Hàn Lập lùi. Hai tay lão bành trướng chuyển trắng bạc cứng chắc — đây mới là thực lực chân chính. Lão vọt lên không áp đỉnh đầu Hàn Lập bằng cự chưởng bạc, chủ ý chỉ dùng nửa công lực để bắt sống. Hàn Lập đâm kiếm, Mặc đại phu tay bắt kiếm tay đánh vai — búng ngón khiến kiếm văng cắm vào tường. Lão đổi trảo định bắt gân tỳ bà. Hàn Lập thi triển La Yên bộ biến người thành làn khói nhẹ luồn góc độ quỷ dị qua dưới màn chắn bạc, thoát ra góc phòng."
    },
    {
      chuong: 48,
      tieuDe: "Trá Ngữ",
      tomTat: "Hàn Lập thể trạng xấu: thể lực mất hơn nửa, tay trái tê liệt hoàn toàn, La Yên bộ không dùng tiếp được. Mặc đại phu bất ngờ chuyển sang giọng ôn hòa khuyên Hàn Lập đầu hàng — lão nhường trước vì có lòng kiêng kỵ. Hàn Lập từ chối, lấy từ ngực ra đoản kiếm thứ hai (chủy thủ dài hơn nửa thước, sáng ngời sắc bén). Mặc đại phu ra chiêu 'Chỉ xích thiên nhai' tiến sát trong nháy mắt. Hàn Lập cố ý làm bộ sợ, ném lời trá ngữ 'Ngươi bây giờ mới thật là bị lừa gạt — ngươi hãy nhìn đoản kiếm trong tay ta!' làm Mặc đại phu khựng thế công. Tận dụng sơ hở, Hàn Lập bày tư thế toàn thân uốn như cung tên kéo căng, lao tới như mũi tên bắn ra; mũi kiếm huyễn hóa thành hơn mười lưỡi kiếm đâm từ nhiều phương."
    },
    {
      chuong: 49,
      tieuDe: "Sáo Trung Sáo",
      tomTat: "Mặc đại phu nhìn rõ vị trí kiếm thật, quyết đánh nát lưỡi kiếm. Hàn Lập xoay góc mũi kiếm tạo hơn mười đoàn bạch quang cực chói ánh thẳng vào mắt lão — Mặc đại phu tạm mù, nước mắt chảy liên miên. Lão chuyển sang dùng tai nghe tiếng gió định vị, dùng Ma Ngân Thủ bắt khóa mũi kiếm — tự tin vì công phu nghe tiếng gió của lão đến mức tú hoa châm cũng không qua nổi. Hàn Lập lập tức rút tiêm trùy giấu trong mũi kiếm rỗng đâm thẳng yết hầu lão (cơ quan 'Sáo Trung Sáo'). Mặc đại phu bản năng giãy đầu né thoát trong gang tấc — tiêm trùy chỉ trầy gáy chảy máu. Lão lăn người thoát xa, phong huyết mạch cầm máu; thị giác khôi phục; nhận ra trong tay còn cầm cái mũi kiếm rỗng — mới hiểu đây là bẫy-trong-bẫy. Phát hiện điều ngoài ý muốn khiến cơn tức bị dập tắt (bỏ ngỏ)."
    },
    {
      chuong: 50,
      tieuDe: "Triền Hương Ti",
      tomTat: "Mặc đại phu hồi tưởng và kinh hãi nhận ra: Hàn Lập đã bố trí 'liên hoàn sáo' từ đầu — từ việc không cho đóng cửa đến phản xạ ánh sáng mặt trời, tất cả nằm trong tính toán. Lão coi hắn như thần đồng chuyển thế. Cả hai rơi vào thế giằng co, không ai dám ra tay trước. Hàn Lập vờ đề nghị giảng hòa, thả thiết trùy xuống chân — nhưng đây là bước cuối của kế hoạch. Hàn Lập tiết lộ: tiêm trùy đã bôi Triền Hương Ti — độc dược từ từ nhập cốt, cách phối chế học lén từ tờ phương thuốc Mặc đại phu chép rồi kẹp trong dược thư bỏ quên. Mặc đại phu biến sắc cả kinh — nhận ra mình bị hạ bằng chính sơ suất của mình. Tánh mạng lão nay nằm trong tay Hàn Lập."
    },
    {
      chuong: 51,
      tieuDe: "Cự Hán Hiển Uy",
      tomTat: "Kế hoạch của Hàn Lập sụp đổ hoàn toàn: Mặc đại phu không hề sợ Triền Hương Ti — lão đã có chỗ dựa bí mật. Lệnh một người tên Thiết Nô lao ra bắt Hàn Lập với tốc độ như chớp. Hàn Lập dùng thiết trùy đâm vào bụng Thiết Nô — nhưng như đâm vào đá; binh khí bật văng, cổ tay tê dại. Thiết Nô bóp chặt hai vai Hàn Lập như muốn nghiền nát xương; Hàn Lập đầu gối đá vào hạ bộ nhưng chỗ đó cũng cứng như sắt đá — đầu gối gần vỡ. Bị khống chế hoàn toàn, gần ngất. Mặc đại phu ra lệnh 'điểm nhẹ thôi' vì Hàn Lập còn 'đại dụng' — Hàn Lập lập tức hiểu: điểm 'đại dụng' này là chỗ để mặc cả thoát thân. Mặc đại phu lấy hộ tâm kính từ ngực Hàn Lập (giải thích sao trước kia điểm huyệt không được), rồi mở hộp gỗ ngân nhận — mấy thanh dao cổ quái cán hình đầu quỷ — ánh mắt tà ác nhìn Hàn Lập như sắp ra tay."
    },
    {
      chuong: 52,
      tieuDe: "Thất Quỷ Phệ Hồn",
      tomTat: "Mặc đại phu cầm dao nhọn cán đầu quỷ bổ chậm rãi xuống người Hàn Lập — nhưng cắm thẳng vào vai mình, không chảy một giọt máu. Không phải trừng phạt mà là chuẩn bị bí thuật. Lần lượt cắm tổng cộng bảy thanh dao vào hai vai, hai chân, bụng, ngực — nhìn như bị loạn đao phân thây mà bình thản. Nhập định, kết ấn hoa sen, môi niệm chú; mặt nổi quỷ vụ đen đặc hơn một năm trước nhiều lần, sinh ra xúc tu sáng đen nhảy múa. Khi hắc vụ dày nhất, Mặc đại phu mở to mắt hét tên bí thuật: 'Thất Quỷ Phệ Hồn đại pháp!' — lần đầu cái tên đáng sợ này được xướng lên. Thiết Nô tiếp tục áp đầu vai Hàn Lập, khóa chặt mọi cơ hội thoát thân."
    },
    {
      chuong: 53,
      tieuDe: "Mỹ Nam Tử",
      tomTat: "Thất Quỷ Phệ Hồn đại pháp hoàn thành: bảy đầu quỷ trên dao trợn mắt đỏ như máu, há miệng hớp sạch quỷ vụ đen trên mặt Mặc đại phu. Khi lớp hắc tuyến biến mất hoàn toàn, hiện ra một mỹ nam tử khoảng ba mươi tuổi — chính là Mặc đại phu trẻ lại hàng chục tuổi, mị lực tràn trề. Sự thật được xác nhận: lão không hề nói dối — vốn ngoài ba mươi, bị tà ma quỷ đói hút tinh nguyên trong lúc trị thương nên lão hóa cực độ. Nhưng mặc dù đã hồi phục, lão vẫn chưa thả Hàn Lập. Hàn Lập tỉnh táo nhận ra điều này và giả ngốc thử dò: 'Người đã khỏi rồi, có thể tha đệ tử?' — chương kết ở cái câu thăm dò đó, không có câu trả lời."
    },
    {
      chuong: 54,
      tieuDe: "Định Thần Phù",
      tomTat: "Mặc đại phu lộ thẳng ý định: 'Thân thể này, ta phải tiếp thu' — ý đồ cướp đoạt xác Hàn Lập không còn che giấu. Lão lấy ra tờ giấy vàng cũ kỹ đựng trong túi lụa đỏ như lửa; mặt trước vẽ ký hiệu bằng sơn bạc — kỳ lạ: Trường Xuân công trong người Hàn Lập tự kích động khi nhìn vào ký hiệu đó. Hàn Lập giãy dụa nhưng Thiết Nô đè chặt bằng hai bàn tay to như núi. Mặc đại phu niệm chú, các ký hiệu bạc lần lượt phóng sáng, hô một chữ 'Định' như sấm nổ rồi áp phù lên ót Hàn Lập. Lập tức Hàn Lập mất hoàn toàn quyền điều khiển thân thể — không nháy mắt được, thân như cái xác — nhưng ý thức và ngũ quan vẫn còn. Mặc đại phu thong thả: 'Thân thể ngươi còn có thể giữ lại chốc lát nữa.'"
    },
    {
      chuong: 55,
      tieuDe: "Đệ Tam Nhân",
      tomTat: "Hàn Lập bị mang vào một căn nhà đá kín mít mới xây, thắp đầy đèn nến, giữa nhà vẽ một đồ án khảm ngọc thạch xanh phương viên mấy trượng — đây là trận đồ tiến hành nghi thức đoạt xá. Mặc đại phu đặt Hàn Lập nằm ngửa giữa trận, sai Thiết Nô canh ngoài: 'Ai tới gần thì giết không tha.' Đúng lúc căng thẳng, một giọng nói bí ẩn của nam tử trẻ cất lên trong phòng — không phải ai bước vào, mà là âm thanh từ một nguyên thần/quỷ hồn vô hình: đây là 'đệ tam nhân' không có thân xác, chỉ còn nguyên thần, chính là kẻ đã truyền cho Mặc đại phu toàn bộ bí thuật (Thất Quỷ Phệ Hồn đại pháp, Định Thần Phù). Mặc đại phu đa nghi, ép đệ tam nhân thề độc bằng tổ tiên và toàn tộc mới chịu tiến hành. Đệ tam nhân tức giận nhưng thề, sau đó Mặc đại phu tắt dần đèn chuẩn bị khởi sự."
    },
    {
      chuong: 56,
      tieuDe: "Quang Cầu Chi Chiến",
      tomTat: "Dư Tử Đồng (tên đệ tam nhân) phát lời thề độc đầy đủ, thuyết phục Mặc đại phu ra tay: 'Ông không có linh căn, không thể tu tiên — nếu đoạt xá thành công sẽ có thân xác linh căn, thoát sinh lão bệnh tử.' Mặc đại phu quyết tâm, cắm kim châm vào bí huyệt tăng tinh lực, bắn hồng quang vào trận đồ, niệm chú ngữ thôi miên Hàn Lập. Ý thức Hàn Lập mờ dần rồi hôn mê — trong cơn mê, hắn hóa thành quang cầu xanh biếc lớn bằng nắm tay, sáng chói. Lần lượt hai quang cầu địch xâm nhập: quang cầu vàng nhỏ bằng ngón cái — Hàn Lập nuốt gọn không khó; quang cầu xanh to hơn nhưng ánh sáng ảm đạm — kinh hãi do dự, mỗi lần bị bắt lại tự cắt bỏ một phần để chạy, cuối cùng chỉ còn 1/3. Hàn Lập độc chiếm 'lãnh địa', thắng hai trận — nguyên thần hắn mạnh dị thường, vượt xa dự liệu của kẻ đoạt xá."
    },
    {
      chuong: 57,
      tieuDe: "Thân Tỉnh Địch Vong",
      tomTat: "Hàn Lập tỉnh dậy, đầu đau nặng, toàn thân mềm nhũn — nhưng thân thể lại lần nữa hoàn toàn là của hắn. Đoạt xá thất bại. Quay sang nhìn Mặc đại phu: lão đã chết — hóa lão tột độ, tóc bạc, khô gầy tiều tụy già hơn mười tuổi, hai mắt trợn tròn hoảng sợ đông cứng. Hàn Lập cẩn thận kiểm tra mạch + hơi thở — xác nhận đại địch gian xảo đã chết 'vô thanh vô tức'. Định Thần Phù đã tan thành tro bụi trên gáy. Hàn Lập còn phát hiện một quang cầu xanh biếc nhỏ — tàn dư nguyên thần Dư Tử Đồng — đang lập lòe run rẩy trong góc tối của nhà đá, sợ hãi né tránh ánh mắt. Hàn Lập bước lại, gọi đúng tên: 'Dư Tử Đồng.' Quang cầu giật mình thừa nhận. Hàn Lập lạnh lùng yêu cầu: khai đầy đủ ngươi là ai, mối quan hệ với Mặc đại phu, và kế hoạch của bọn ngươi."
    },
    {
      chuong: 58,
      tieuDe: "Toàn bộ chân tướng",
      tomTat: "Dư Tử Đồng (nguyên thần) kể trọn lai lịch trước mặt Hàn Lập: xuất thân gia tộc tu tiên, tu Trường Xuân công tới tầng 7 nhưng không đạt Trúc Cơ; rời gia tộc lang thang thế tục, mua Huyết linh thảo hiếm rồi bị tu sĩ mạnh hơn truy sát; dùng Bảo mệnh phù của gia tộc dọa lui đối thủ, nhưng trọng thương. Tình cờ gặp Mặc đại phu — bị lão lén hạ độc giết hại để cướp dược liệu. Lâm tử dùng 'huyết tiến âm hồn chú' phóng nguyên thần chui vào thân Mặc đại phu tránh tiêu vong — ký sinh từ đó. Chân tướng thực sự về Mặc đại phu: không phải kỳ thư thần bí mà nhờ cướp dược hoàn trên thi thể Dư Tử Đồng mà công lực khôi phục. Hàn Lập nghe xong, không tin hoàn toàn nhưng tự suy ra bảy tám phần: Dư Tử Đồng tự nhận là nạn nhân nhưng mưu đồ vẫn còn ẩn."
    },
    {
      chuong: 59,
      tieuDe: "Tam Đại Thiết Tắc",
      tomTat: "Hàn Lập tỉnh táo vạch trần toàn bộ: Dư Tử Đồng chính là kẻ chủ mưu, cố ý giăng bẫy để Mặc đại phu và Hàn Lập đồng quy vu tận — mình ngư ông đắc lợi đoạt xá Hàn Lập. Dư Tử Đồng thừa nhận nhưng biện minh không có lựa chọn khác. Bí mật đoạt xá được tiết lộ: ba quy tắc sắt của tu tiên giới — chỉ tu sĩ pháp lực CAO đoạt được kẻ pháp lực THẤP; không đoạt xá phàm nhân; mỗi người chỉ đoạt xá được một lần trong đời. Bí quyết cuối đặc biệt quan trọng: Trường Xuân công tầng 6 của Hàn Lập cao hơn dự tính của Mặc đại phu (lão tầng 4, Dư Tử Đồng tầng 7) — đủ để phản chiếm. Dư Tử Đồng thấy mình ở thế yếu, xuống nước đề nghị hợp tác: hứa đưa Hàn Lập gặp trưởng lão gia tộc tu tiên thu làm đồ đệ, đổi lại Hàn Lập giúp tìm thân thể cho hắn đoạt xá."
    },
    {
      chuong: 60,
      tieuDe: "Thí Độc",
      tomTat: "Hàn Lập vờ cân nhắc đề nghị hợp tác, đòi Dư Tử Đồng giải thích nghi vấn về bản nguyên chi lực và ký ức bị nhồi vào đầu sau vụ thôn phệ nguyên thần. Dư Tử Đồng tự tin trả lời tất cả — vì chiêu 'hứa đắc đạo thành tiên vĩnh sinh bất tử' này đã từng mê hoặc được cả Mặc đại phu. Sau khi moi đủ thông tin, Hàn Lập ra tay không do dự: phun độc dịch đen quánh từ ống đồng giấu sẵn trúng thẳng vào quang cầu lục quang — nguyên thần Dư Tử Đồng ảm đạm, thụ thương nặng, kêu thảm. Hàn Lập lập tức rút Ngọc Đái đoản kiếm — nhuyễn kiếm rèn bằng trọng kim, thanh kiếm đắt nhất hắn có, lần đầu được dùng — chém thẳng xuống quang cầu. Kẻ chủ mưu sau hàng chục năm mưu đồ bị chính con mồi phản sát bằng đúng thứ hắn không ngờ tới nhất: trọng kim và độc."
    },
    {
      chuong: 61,
      tieuDe: "Thần Diệt",
      tomTat: "Hàn Lập dùng thất độc thủy (cải tiến từ ngũ độc thủy + Thổ cô hoa) và nhuyễn kiếm kết liễu hoàn toàn nguyên thần Dư Tử Đồng — kẻ chủ mưu vụ đoạt xá. Sau khi giải thoát, hắn đối mặt mối nguy mới: cự hán thiết nô đứng gác ngoài cửa đá, lai lịch và nhược điểm chưa rõ."
    },
    {
      chuong: 62,
      tieuDe: "Giao Dịch",
      tomTat: "Lục soát thi thể Mặc đại phu, Hàn Lập phát hiện di thư cài sẵn: lão đã hạ kỳ độc 'thi trung hoàn' (phát tác 1-2 năm, chỉ noãn dương bảo ngọc mới giải) và đặt ra giao dịch ràng buộc — Hàn Lập phải tới nhà lão, an bài thân nhân, đổi lấy gả con gái, nửa gia sản và noãn dương bảo ngọc. Mặc dù mang đầy hiểm nguy, Hàn Lập quyết chấp nhận giao dịch."
    },
    {
      chuong: 63,
      tieuDe: "Chân Dung",
      tomTat: "Hàn Lập dùng Dẫn hồn chung và máu của mình để khống chế thành công cự hán thiết nô, thu làm thuộc hạ phục tùng tuyệt đối. Nhìn kỹ khuôn mặt cự hán, hắn rúng động nhận ra đây chính là di thể bạn thân Trương Thiết — hồn phách đã mất, bị Mặc đại phu cải tạo thành thi nhân."
    },
    {
      chuong: 64,
      tieuDe: "Khúc Hồn",
      tomTat: "Hàn Lập đặt tên 'Khúc Hồn' cho cự hán — di thể Trương Thiết bị Mặc đại phu và Dư Tử Đồng bắt cóc, hủy hồn phách, kết hợp Tượng Giáp công với luyện thi thuật (do Dư Tử Đồng cung cấp) để tạo thành thi nhân. Hàn Lập phi tang toàn bộ hiện trường, chôn thi thể Mặc đại phu, ra lệnh Khúc Hồn san phẳng nhà đá."
    },
    {
      chuong: 65,
      tieuDe: "Hàn Thần Y",
      tomTat: "Hơn nửa năm sau, Hàn Lập giả bút tích thư Mặc đại phu che giấu cái chết, tiếp quản chức trị bệnh, trở thành 'thần y trẻ tuổi' nổi danh khắp Thất Huyền môn. Mã phó môn chủ chấp thuận, cấp bổng lộc cung phụng. Hàn Lập còn phát hiện 'Trường sinh kinh' của Mặc đại phu thực ra là bí tịch Trường Xuân công — ghi thêm hai tầng công pháp tiếp theo."
    },
    {
      chuong: 66,
      tieuDe: "Cổ Quái Quy Định",
      tomTat: "Hàn Lập thương lượng Mã phó môn chủ giành toàn quyền quản lý Thần thủ cốc, đặt chuông lớn tại cửa — ai muốn gặp phải gõ chuông. 'Cổ quái quy định' này giúp hắn bí mật dùng bình thần bí mà không bị nhòm ngó. Tái ngộ Vũ Nham (người quen cũ ngạo mạn), Hàn Lập cố ý tăng liều thuốc trả đũa nhưng vẫn chữa khỏi. Cuối chương lo lắng vì vật âm hàn ở đan điền chưa giải — xác định phải rời môn sau một năm."
    },
    {
      chuong: 67,
      tieuDe: "Hỏa Đạn Thuật",
      tomTat: "Hàn Lập xác nhận đỉnh phong tầng sáu Trường Xuân công. Giải mã cổ ngữ ba tháng, luyện năm pháp thuật ghi trong cuối bí tịch; chỉ luyện thành hai: Hỏa Đạn Thuật (hỏa cầu nung chảy tinh cương, bốc hơi nước) và Thiên Nhãn Thuật (quan sát pháp lực). Ba môn còn lại — Định Thần Phù, Ngự Phong Quyết, Khống Vật Thuật — chưa nhập môn được."
    },
    {
      chuong: 68,
      tieuDe: "Trúng Độc",
      tomTat: "Hàn Lập xác nhận Thiên Nhãn Thuật giúp quan sát pháp lực người khác dưới dạng bạch quang, đặc biệt đậm đặc tại đan điền. Mã Vinh — đệ tử đắc ý của Lý trưởng lão — khẩn cầu Hàn Lập cứu sư phụ bị trúng kịch độc ám toán của Dã Lang bang, đang hôn mê, các đại phu khác bó tay. Hàn Lập do dự nhưng theo Mã Vinh tới."
    },
    {
      chuong: 69,
      tieuDe: "Lệ Phi Vũ Dữ Thiếu Nữ",
      tomTat: "Hàn Lập tới nhà Lý trưởng lão, được đón tiếp bởi đông đảo người tới thăm hỏi. Bất ngờ thấy Lệ Phi Vũ đang ân cần an ủi một thiếu nữ (~15-16 tuổi) đang khóc — bộ dáng 'vướng lưới tình' trái ngược hoàn toàn trước đây. Mã Vinh giới thiệu Mã phó môn chủ, Tiễn trưởng lão (luyện nội công tuyệt tình đoạn dục) và Triệu trưởng lão (bạn chí giao Lý trưởng lão, mới từ Tụ Bảo đường về, lạnh nhạt hoài nghi y thuật Hàn Lập)."
    },
    {
      chuong: 70,
      tieuDe: "Thiêu Bát",
      tomTat: "Mã phó môn chủ dùng quỷ kế khích Triệu trưởng lão bác bỏ y thuật Hàn Lập, lộ mâu thuẫn hệ phái nội môn. Giới thiệu thêm Lý thị (vợ Lý trưởng lão) và Trương Tụ Nhi (cháu ngoại Lý trưởng lão — thiếu nữ Lệ Phi Vũ đang để ý). Lần đầu Hàn Lập nhìn thấy bệnh tình Lý trưởng lão: toàn thân nổi độc ban đủ màu, hắc khí phủ mặt khi thở — trúng độc cực nặng, chương kết tại thử thách y thuật khó nhất."
    },
    {
      chuong: 71,
      tieuDe: "Thanh Linh Tán",
      tomTat: "Hàn Lập chẩn đoán Lý trưởng lão trúng độc hỗn hợp, chỉ nói 'năm phần nắm chắc' để thoái thác, nhưng Lý thị kiên quyết chấp nhận mạo hiểm. Hàn Lập lấy một viên dược hoàn đỏ từ bình lam nhỏ, hòa nước ấm thành chén thuốc hồng đỏ — Thanh Linh Tán. Thuốc hiệu nghiệm vượt dự liệu: hắc khí nhạt dần, độc ban thu nhỏ, mọi người kinh ngạc và thái độ với Hàn Lập đổi hẳn. Hàn Lập vừa mừng vừa bực vì lỡ nói khó nay trở thành dễ, đồng thời day dứt vì thuốc giải được cho người khác lại bất lực với độc tiềm phục trong chính cơ thể mình."
    },
    {
      chuong: 72,
      tieuDe: "Bạt Độc",
      tomTat: "Dư độc trong người Lý trưởng lão vẫn chưa sạch hẳn. Hàn Lập thực thi thủ pháp giải độc chuẩn bị sẵn: sai lấy chậu nước, nhờ Mã phó môn chủ và Tiễn trưởng lão dùng nội lực tinh thuần bức độc ra qua huyệt đạo, còn mình dùng kim châm phóng huyệt giải huyết độc. Sau một khoảng thời gian dài, Hàn Lập bước ra báo khu trừ sạch — Lý trưởng lão chỉ cần nghỉ ngơi qua đêm là tỉnh lại; Mã phó môn chủ và Tiễn trưởng lão nguyên khí đại thương đang điều tức."
    },
    {
      chuong: 73,
      tieuDe: "Lệ Phi Vũ Đích Tâm Tư",
      tomTat: "Lý trưởng lão hồi phục: hắc khí và độc ban gần như biến mất, ngủ ngon; Lý thị quyết đợi chồng khỏe sẽ cùng tới đáp tạ. Hàn Lập kê đơn dưỡng thân rồi lặng lẽ rời đi, kéo Lệ Phi Vũ ra một chỗ vắng. Hàn Lập vạch thẳng: Lệ Phi Vũ đã uống Trừu Tủy Hoàn, chỉ còn sống được mấy năm — Lệ Phi Vũ tái mặt, mặc nhiên thừa nhận. Hàn Lập khuyên buông tình cảm; Lệ Phi Vũ lạnh giọng tuyên bố: khi hắn còn sống, Trương Tụ Nhi chỉ là của riêng hắn — lời nói lạnh người."
    },
    {
      chuong: 74,
      tieuDe: "Ngự Phong Quyết",
      tomTat: "Hàn Lập 18 tuổi. Thất Huyền môn và Dã Lang bang chính thức tuyên chiến, xung đột liên miên giúp y thuật Hàn Lập tiến vượt bậc. Lệ Phi Vũ giết tử y chưởng kỳ sứ của Dã Lang bang, thăng phó đường chủ Ngoại Nhận Đường — một trong Song Hùng thế hệ trẻ — và đàm hôn với Trương Tụ Nhi. Hàn Lập sau vô số lần thất bại rốt cuộc luyện thành Ngự Phong Quyết: thân nhẹ như bay, tốc độ cao, tiêu hao pháp lực — pháp thuật di chuyển bắt buộc của tu tiên giả cấp thấp."
    },
    {
      chuong: 75,
      tieuDe: "Pháp Vũ Tịnh Dụng",
      tomTat: "Trường Xuân công của Hàn Lập đột phá lên tầng 8 nhờ linh dược; pháp lực vượt qua nhục thân Dư Tử Đồng khi còn sống. Hàn Lập dung hợp La Yên Bộ với Ngự Phong Quyết tạo thân pháp xuất quỷ nhập thần; cải tiến Hỏa Đạn Thuật thành đoản binh cận chiến thay vì hoả cầu chậm chạp. Ngộ ra Định Thần Phù và Không Vật Thuật cần vật liệu tu tiên giả mới thi triển được. Đang chuẩn bị hạ sơn thì Dã Lang bang đột ngột đề nghị hòa đàm — Vương môn chủ quyết định gặp mặt xem điều kiện."
    },
    {
      chuong: 76,
      tieuDe: "Đàm Phán Dữ Hoả Khởi",
      tomTat: "Đội đàm phán gần trăm cao thủ do Ngô phó môn chủ dẫn đầu tiến tới Lạc Sa pha — vùng đất trung gian. Dã Lang bang đã bày sẵn bẫy: nỏ liên châu quân dụng chôn dưới đất, bắn tề xạ hạ gần hết đội đàm phán; các điểm dừng chân đã bị chiếm trước thành rọ bẫy. Ngô phó môn chủ, hộ pháp, cung phụng, trưởng lão chết gần sạch — Lệ Phi Vũ là một trong số ít sống sót chạy về báo tin. Ngay lúc đó còi báo động vang, Dã Lang bang đã đánh thẳng lên Thái Hà sơn."
    },
    {
      chuong: 77,
      tieuDe: "Đối Sách",
      tomTat: "Hàn Lập và Lệ Phi Vũ bàn cách ứng phó trên nóc nhà. Hàn Lập phân tích: Dã Lang bang gài gian tế, dùng nỏ liên châu để hạ cao thủ, vây phân đường rồi dồn quân đánh tổng đường Lạc Nhật Phong. Lệ Phi Vũ xác nhận đã phục kích một lam y chấp pháp địch, biết Ngô phó môn chủ và các trưởng lão đã tử trận; hắn sợ bị đổ tội nên lén tới chỗ Hàn Lập thay vì lên Lạc Nhật Phong. Hàn Lập quyết định tới chỗ Lý trưởng lão tập hợp thuộc hạ Lệ Phi Vũ, rồi tùy tình hình mà tính."
    },
    {
      chuong: 78,
      tieuDe: "Lâm Trung Sát Lục",
      tomTat: "Hàn Lập triệu Khúc Hồn — cự hán khí thế yêu ma — ra từ căn phòng nhỏ, khiến Lệ Phi Vũ sợ run. Ba người nhanh chóng rời đi. Sắp tới cửa rừng, Hàn Lập nghe tiếng bước chân địch từ sớm: hơn mười mấy người Dã Lang Bang do Tôn chấp pháp dẫn đầu vào Thần Thủ Cốc theo lệnh bắt sống thần y. Hàn Lập lạnh lùng ra lệnh: giết sạch, trừ người mặc lam y giữ sống. Khúc Hồn hóa cuồng phong xông vào rừng — tiếng kêu thảm thiết vang lên rồi nhanh chóng yên tĩnh; Lệ Phi Vũ chứng kiến, mặt đầy khó tin."
    },
    {
      chuong: 79,
      tieuDe: "Vô Đề",
      tomTat: "Khúc Hồn lôi Lam y chấp pháp hôn mê từ trong rừng ra. Lệ Phi Vũ bức cung: Dã Lang bang đã hạ mấy cửa quan Lạc Nhật Phong; ngoài ra Thiết thương hội và Đoạn Thủy môn cũng cùng tấn công — môn phái lâm đại nạn. Lệ Phi Vũ diệt khẩu tên chấp pháp xong, Hàn Lập ra quyết sách: thừa loạn cho Lệ Phi Vũ hội họp người của mình, sẵn sàng giết sạch nhân chứng. Cảnh chuyển tới nhà Lý trưởng lão: tên mập thân tín Vương môn chủ rút kim sắc lệnh bài tước quyền chỉ huy của Mã Vinh, ép hắn cố thủ thay vì dò xét tình hình địch."
    },
    {
      chuong: 80,
      tieuDe: "Ngộ Địch",
      tomTat: "Tên mập thân tín Vương môn chủ (con cô con cậu) vốn tới triệu Lý trưởng lão lên Lạc Nhật Phong nghị sự, nán lại nghỉ thì gặp đại biến; nay dùng lệnh bài khống chế Mã Vinh, không cho dò xét địch. Mã Vinh tổ chức hơn hai mươi thủ hạ gom đám gia quyến không biết võ vào khu nhà xây trong núi đề phòng tao loạn. Nhóm Hàn Lập bị mười tên áo xanh cầm cương đao Đoạn Thủy môn chặn vây cách Lý trạch hơn một dặm. Lệ Phi Vũ đoạt đao chém người nhanh như thiểm điện; Khúc Hồn hóa bóng đen quỷ mị lần lượt đâm yết hầu từng tên bỏ trốn — không tha một ai."
    },
    {
      chuong: 81,
      tieuDe: "Binh Lâm Lạc Nhật",
      tomTat: "Cổ Thiên Long chỉ huy Hồng y thiết vệ tinh nhuệ của Dã Lang bang tiến áp Lạc Nhật phong — tổng đàn Thất Huyền môn. Trước đó hắn đã mua thêm 300 cây nỏ liên châu quân dụng từ em họ phó tướng với giá hai vạn lượng. Một giọng nói bí ẩn 'Trương tiên sư' chỉ đạo toàn bộ kế hoạch — Cổ Thiên Long phục tùng tuyệt đối nhưng không ai nhìn thấy mặt người này."
    },
    {
      chuong: 82,
      tieuDe: "Kim Quang Thượng Nhân",
      tomTat: "Cổ Thiên Long thuê Chu Nho — tự xưng 'Kim Quang thượng nhân' — làm sát thủ với thù lao 3000 lượng vàng trả trước, 2000 lượng sau khi giết ba sư thúc Thất Huyền môn. Chu Nho vóc người nhỏ bé, mê vàng, là người tu tiên nửa vời. Vương Tuyệt Sở — tên thật Vương môn chủ — lần đầu được gọi trực tiếp; lão chỉ huy Thất Huyền môn cố thủ tại Lạc Nhật phong. Thất huyền điện được mô tả gồm một lớn sáu nhỏ; môn phái truyền thừa hơn hai trăm năm."
    },
    {
      chuong: 83,
      tieuDe: "Đại Hãm Tịnh",
      tomTat: "Hàn Lập và Lệ Phi Vũ cải trang thành người của Đoạn Thủy Lưu, bí mật thâm nhập khu vực quanh Lạc Nhật phong quan sát tình hình. Nguyên tác tiết lộ bên trong Lạc Nhật phong có động thạch nhũ tự nhiên chiếm hai phần ba lòng núi, làm cơ sở cho hệ thống cơ quan bẫy Đại Hãm Tịnh do Lý Môn chủ đời thứ bảy thiết kế từ hơn hai trăm năm trước."
    },
    {
      chuong: 84,
      tieuDe: "La Yên Hiển Uy",
      tomTat: "Hàn Lập lần đầu lộ thực lực trước đám đông: cởi bỏ ngụy trang, thi triển La Yên bộ kết hợp Ngự Phong Quyết, tốc độ kinh người hạ sát hơn mười đệ tử Đoạn Thủy môn trong nháy mắt. Vương Tuyệt Sở kích hoạt cơ quan bẫy Địa Động trong lòng Lạc Nhật phong để cản bước quân Dã Lang bang. Mã Vinh xuất hiện ngắn, kể cho Hàn Lập nghe tình hình tử khế đấu. Nhắc tới Khúc Hồn đang ẩn náu dưới chân núi."
    },
    {
      chuong: 85,
      tieuDe: "Tử Khế Huyết Đấu",
      tomTat: "Vương Tuyệt Sở đề xuất tử khế đấu 50 đối 50 với Cổ Thiên Long với hai điều kiện rõ ràng. Cổ Thiên Long tự tin vào phi kiếm thuật của Chu Nho nên chấp thuận. Hàn Lập lần đầu nghe về thể lệ tử khế huyết đấu từ Mã Vinh: bên nào còn người cuối cùng thắng, bên thua phải rút lui hẳn không được trả thù. Sinh tử thư bắt đầu được lập."
    },
    {
      chuong: 86,
      tieuDe: "Ký Kết Sinh Tử Thư",
      tomTat: "Sinh tử thư màu đỏ được hai bên lập ra. Ba vị sư thúc của Vương Tuyệt Sở lộ diện: một thư sinh, một hán tử râu ria hung hãn từng là mãnh tướng, và một người áo xám mang trường kiếm. Lý trưởng lão tham gia ký tử khế đấu — danh tính là sư phụ Mã Vinh được xác nhận. Kết chương đột biến: Trương Tụ Nhi — tưởng là thiếu nữ yếu đuối — cũng bước ra trong nhóm tử đấu, hóa ra là hạch tâm đệ tử Thất tuyệt đường."
    },
    {
      chuong: 87,
      tieuDe: "Lược Hiển Thân Thủ",
      tomTat: "Lệ Phi Vũ quyết ký tử khế để ở bên Trương Tụ Nhi; Hàn Lập vì tình nghĩa và muốn thử thực lực nên đi theo. Hai người xé trang phục ngụy trang lộ y phục Thất Huyền môn. Khi Vương môn chủ định từ chối, Hàn Lập lần đầu phô thân pháp kinh người — thoắt biến mất rồi xuất hiện ngay sau lưng Vương Tuyệt Sở mà không ai cảm nhận được, khiến cả Vương môn chủ lẫn ba sư thúc kinh ngạc nghi ngờ 'người này rốt cuộc là ai'. Hai bên trao đổi sinh tử thư xong, huyết đấu chính thức bắt đầu."
    },
    {
      chuong: 88,
      tieuDe: "Kim Quang Tráo",
      tomTat: "Trong trận huyết đấu, Chu Nho ngạo nghễ ra mặt đầu tiên. Hắn đập lá bùa kim quang vào thân phát ra Kim Quang Tráo — quầng sáng vàng bọc toàn thân cứng như sắt thép, vô hiệu hóa nhát đao của hộ pháp Thất Huyền môn, làm chấn động toàn trường. Trong khi mọi người kinh hoảng, riêng Hàn Lập lén dùng Thiên Nhãn Thuật soi qua màn kim quang: phát hiện bạch quang trên người Chu Nho mờ nhạt, xác nhận đây là tu tiên nửa vời pháp lực thấp hơn mình. Cổ Thiên Long nâng thù lao lên 8000 lượng vàng."
    },
    {
      chuong: 89,
      tieuDe: "Mâu Dữ Thuẫn",
      tomTat: "Chu Nho ngạo mạn thách Thất Huyền môn tùy ý công kích kim cương bất hoại công. Vương Tuyệt Sở cử hán tử râu ria — sư thúc từng là mãnh tướng ngoài sáu mươi tuổi — ra đối phó. Hán tử đi vòng quanh ngày càng nhanh tới mờ ảo thân ảnh, gầm vang như long ngâm hổ gầm làm cả Lạc Nhật phong rung chuyển khiến Chu Nho tay chân vô lực; thân hình phình to như thiết tháp, dùng quyền cước đấm đá dồn dập làm kim tráo biến hình, đẩy Chu Nho ngã xuống đất. Chu Nho móc hộp gỗ đen dán bùa phong ấn ra nhưng không kịp kích hoạt. Cổ Thiên Long đứng phía sau lần đầu hối tiếc vì đã nhận lời huyết đấu."
    },
    {
      chuong: 90,
      tieuDe: "Phi Kiếm?",
      tomTat: "Hán tử tiếp tục công phá kim quang nhưng tầng bảo vệ dẻo dai sinh phản lực gia tăng khiến tay chân đau dần; nhận ra vô vọng, xoay người bỏ chạy. Chu Nho ngồi xuống, kích hoạt hộp đen: luồng sáng mờ bay ra, chém cụt tay phải rồi đâm xuyên ngực hán tử, giết chết hắn. Phe Thất Huyền môn kinh hoảng, gọi đó là 'phi kiếm' theo truyền thuyết kiếm tiên — nhưng nguyên tác để ngỏ không xác nhận. Riêng Hàn Lập mừng rỡ: hắn nhận ra khẩu quyết và thủ thế Chu Nho dùng điều khiển luồng sáng giống hệt Khu vật thuật của mình — xác nhận đây là kỹ thuật tu tiên, và lần đầu nảy sinh ý muốn giết người đoạt bảo."
    },
    {
      chuong: 91,
      tieuDe: "Thưởng Bảo",
      tomTat: "Hai sư thúc còn lại của Vương Tuyệt Sở lao ra báo thù cho sư thúc đã chết. Nho sinh dùng ngân châm và đủ loại ám khí cản phi kiếm nhưng vô hiệu. Người áo xám rút bảo kiếm xuất được kiếm quang dài hai tấc — khiến Cổ Thiên Long toát mồ hôi lạnh; chém phi kiếm: tiếng vang lớn, người áo xám ngã xuống phun máu, mũi kiếm gãy ba tấc, phi kiếm rớt xuống nhưng vẫn còn linh tính. Chu Nho đắc ý điều phi kiếm nhắm nho sinh — thì Hàn Lập cất tiếng 'cái đồ đang bay đó, ta rất thích', dùng pháp lực áp đảo cướp quyền khống chế: phi kiếm xoay trên không bay về tay Hàn Lập. Nho sinh bị Chu Nho kịp chém đứt đầu trước đó. Chu Nho tái nhợt thốt 'người tu tiên!', kinh sợ lộ rõ."
    },
    {
      chuong: 92,
      tieuDe: "Kiếm Phù",
      tomTat: "Hàn Lập vận pháp lực kẹp phi kiếm giữa hai tay, tia sáng tiêu tán lộ ra đạo phù lục vẽ thanh tiểu kiếm xám, hàn khí bức người — chỉ là bùa phù, không phải phi kiếm thật. Cất vào ngực. Dùng Ngự Phong Quyết áp sát Chu Nho, giả làm người gia tộc tu tiên. Chu Nho sợ hãi khai tên thật: Tần Diệp Lĩnh, đệ tử Diệp gia, quen bang chủ Dã Lang bang nên ra tay giúp; cầu xin tha mạng và hỏi ngược danh xưng gia tộc của Hàn Lập. Vương Tuyệt Sở mừng như điên, xem sự tồn vong của môn phái trông cậy vào Hàn Lập."
    },
    {
      chuong: 93,
      tieuDe: "Liệt Hỏa Phần Địch",
      tomTat: "Hàn Lập phán đoán Chu Nho dù là người Diệp gia cũng chỉ là tiểu tốt vô danh — quyết giết. Giả vờ khờ khạo, trả lại kiếm phù cho Chu Nho; Chu Nho mừng rỡ thu mất kim tráo hộ thân. Hàn Lập hô 'Tộc trưởng tới!' khiến Chu Nho giật mình quay đầu, lập tức phóng Hỏa đạn thuật thiêu Chu Nho thành tro trong chớp mắt. Thu được ba vật từ tro: đạo phù kim tráo (Kim Quang Tráo), lệnh bài tam giác khắc 'Thăng Tiên' + 'Lệnh', và quyển tộc phổ họ Tần. Phe Dã Lang bang mất trấn sơn, tuyệt vọng; Vương Tuyệt Sở ôm chặt Hàn Lập mừng rỡ."
    },
    {
      chuong: 94,
      tieuDe: "Hoàn Thắng",
      tomTat: "Hàn Lập đứng dậy gom chiến lợi phẩm rồi thét uy hiếp Dã Lang bang: tự đoạn kinh mạch hay để hắn ra tay. Cổ Thiên Long điên cuồng hạ lệnh toàn quân tử chiến, bắn mấy trăm mũi tên dày đặc — tên xuyên qua người Hàn Lập vô hại (độn thuật ẩn thân). Hàn Lập thoắt ẩn thoắt hiện thiêu từng người bằng Hỏa đạn thuật; cố ý chừa Cổ Thiên Long đến cuối rồi dùng một quả Hỏa đạn đầy đủ kết liễu. Dã Lang bang bị xóa sổ hoàn toàn trong tử đấu trường tại Lạc Nhật Phong."
    },
    {
      chuong: 95,
      tieuDe: "Ma Danh Hách Khởi",
      tomTat: "Hàn Lập một câu lạnh lùng 'còn không cút đi' khiến mấy ngàn người bang phái đồng minh tranh nhau tháo lui, giẫm đạp nhau xuống núi. Hàn Lập lẻn vào đám người biến mất. Tin đồn lan khắp nơi: dân gian biến Hàn Lập thành 'hỏa ma' bị tiên lôi đánh chết, không còn tung tích. Năm ngày sau đêm hôm ấy Hàn Lập xuống núi tìm Khúc Hồn về cốc, đóng cửa khổ luyện Khu vật thuật điều khiển kiếm phù liên tục ba ngày cho đến khi nắm vận dụng nhuần nhuyễn."
    },
    {
      chuong: 96,
      tieuDe: "Khuyết Hãm",
      tomTat: "Hàn Lập thử nghiệm kiếm phù, phát hiện ba hạn chế: tiêu hao pháp lực khổng lồ (chỉ dùng một khắc), hiệu quả tốt nhất trong 20 trượng (ngoài 30 trượng mất hiệu dụng), và tuổi thọ hữu hạn. Lập tức ngừng luyện để dành dùng vào lúc then chốt. Lệ Phi Vũ kể tin đồn 'hỏa ma', mang lời mời Hàn Lập lên gặp Vương Tuyệt Sở, được hứa chức phó đường chủ Ngoại Nhận Đường. Sáng sớm hôm sau Hàn Lập lẻn vào phòng ngủ Vương Tuyệt Sở, dùng Thiên Nhãn Thuật gây chấn nhiếp tinh thần, ra oai phủ đầu trước giờ hẹn chính thức."
    },
    {
      chuong: 97,
      tieuDe: "Bối Hậu Giao Dịch",
      tomTat: "Nội bộ Thất Huyền môn họp kín: phe muốn giết Hàn Lập đoạt pháp môn đấu với phe ôn hòa; sư thúc áo xám cảnh tỉnh 'không sợ trưởng bối Hàn Lập tìm tới?' — cả hội nghị đổi chiều. Hàn Lập cố ý tới sớm nửa ngày gặp riêng Vương Tuyệt Sở, dùng Thiên Nhãn Thuật dò xét và thương lượng ngầm 'giao dịch có lợi cho cả hai bên'. Đến giờ hẹn chính thức Hàn Lập không xuất hiện tại Chủ điện. Vương Tuyệt Sở tinh thần phấn chấn tuyên bố: mọi phiền phức đã biến mất, Hàn Lập đã rời đi phương xa."
    },
    {
      chuong: 98,
      tieuDe: "Hồi Thôn",
      tomTat: "Vương Tuyệt Sở chính thức thu Lệ Phi Vũ làm đệ tử, phong đường chủ Ngoại Nhận Đường. Lệ Phi Vũ sáng ra thấy trong phòng có mấy bình thuốc kéo dài tuổi thọ và thư chia tay của Hàn Lập — không ký tên, chỉ vẽ khuôn mặt cười và câu chúc thành hôn cùng Trương Tụ Nhi. Lệ Phi Vũ leo núi tiễn biệt từ xa. Hàn Lập và Khúc Hồn ngồi xe ngựa rời hướng Đông, Vân sí điểu đậu trên vai; năm ngày sau về tới thôn cũ, để Khúc Hồn trên xe, một mình bước vào thôn."
    },
    {
      chuong: 99,
      tieuDe: "Ly Khai",
      tomTat: "Hàn Lập dùng linh thức dò ra cả thôn tụ tập trước nhà mình vì đám cưới tiểu muội. Hắn nấp sau gốc đại thụ lặng lẽ quan sát: nhận ra tam thúc mập, Hàn Thiết cùng đại tẩu, rồi cha mẹ đầu tóc bạc lưng còng. Tiểu muội áo hồng được cõng ra ngồi lên xe hoa rời đi theo chú rể tú tài đội mão xanh. Hàn Lập quay người rời thôn với vẻ kiên nghị — tự xác định vĩnh viễn không trở lại, dứt khoát theo con đường tu tiên. Đây là trang cuối Quyển 1."
    }
  ],
  q02: [
    {
      chuong: 100,
      tieuDe: "Gia Nguyên Thành",
      tomTat: "Lam Châu — châu lớn thứ 8 nhưng sung túc thứ 2 Việt quốc, là vựa lương thực số một toàn quốc. Gia Nguyên Thành ở trung bộ, đệ nhất đại thành của châu nhờ Hương Lỗ đại vận hà nối Nam-Bắc chạy qua trung tâm. Tại bến đò hẻo lánh: Tôn nhị cẩu (Tứ bình bang) và Hắc hùng (Thiết chưởng hội) cùng hai nhóm cửu vạn chiếm bến, thù ghét nhau nhưng phải liên minh chống Độc long bang. Hàn Lập và Khúc Hồn bước xuống từ thuyền nhỏ — sau ba tháng đi thuyền từ Kính Châu, đặt chân tới cố hương Mặc đại phu, mở đầu Quyển 2."
    },
    {
      chuong: 101,
      tieuDe: "Tiền Tài Nhạ Hoạ",
      tomTat: "Hàn Lập đặt chân lên bến đò Gia Nguyên Thành, mang bao đồ chứa mấy ngàn lượng bạc trắng. Tài phú lộ liễu lọt vào mắt hai đầu mục bến đò: Tôn nhị cẩu (Tứ bình bang) chủ động rủ Hắc Hùng (Thiết chưởng hội) hợp tác, thoả thuận chia bốn-sáu. Hắc Hùng sai thủ hạ giả làm kiệu phu dẫn Hàn Lập về phía hẻm Hắc Thuỷ, nơi đám đại hán đã phục sẵn."
    },
    {
      chuong: 102,
      tieuDe: "Hẻm Hắc Thuỷ",
      tomTat: "Hàn Lập phát hiện bẫy khi đường dẫn tới 'khách sạn' ngày càng vắng vẻ. Bị dẫn vào hẻm tối với hơn hai mươi đại hán phục kích. Hàn Lập ra lệnh Khúc Hồn 'giết, không lưu tay'; cự hán lập tức đánh nát đầu nhiều tên. Hắc Hùng nhận ra Khúc Hồn chưa xuất toàn lực, mưu tính bắt cóc Hàn Lập làm con tin để thoát thân."
    },
    {
      chuong: 103,
      tieuDe: "Thu Phục",
      tomTat: "Hắc Hùng lén áp sát định bắt cóc Hàn Lập; bị Hàn Lập dùng thân pháp quỷ dị lách ra sau lưng, đâm xuyên yết hầu bằng nhuyễn kiếm, tử vong ngay tại chỗ. Tôn nhị cẩu chứng kiến thảm cảnh, quỳ xin hàng. Hàn Lập ép hắn nuốt Hủ tâm hoàn (độc khống chế hằng tháng), thu phục làm thủ hạ điều tra Gia Nguyên Thành. Ném cho Tôn nhị cẩu túi bạc vụn hơn trăm lạng dọn hiện trường."
    },
    {
      chuong: 104,
      tieuDe: "Tình Báo",
      tomTat: "Hàn Lập tại khách sạn Hồi Nguyên đọc kỹ di thư Mặc đại phu: nắm rõ cơ cấu Kinh Giao hội (sáu vạn bốn nghìn bang chúng), năm phu nhân (Đại — Kim thị, Nhị — Lý thị, Tam — Lưu thị, Tứ — Nghiêm thị nắm quyền, Ngũ — Vương thị độc chiếm Ám Đà), nghĩa nữ Mặc Phượng Vũ, hai đồ đệ Yến Ca và Triệu Khôn, huynh đệ kết bái Mã Không Thiên. Kiểm tra âm hàn chi độc trong đan điền đã ngưng kết thành hạt đậu đen, ước tính hai tháng nữa bộc phát. Quyết tâm đoạt Noãn dương bảo ngọc. Tôn nhị cẩu cung cấp tin về bang phái Tây thành và Tứ bình bang."
    },
    {
      chuong: 105,
      tieuDe: "Sơ Đạp Tu Tiên Lộ",
      tomTat: "Tôn nhị cẩu báo cáo cục diện Gia Nguyên Thành: ba đại bang (Thiên Phách môn chiếm Đông, Huynh đệ minh chiếm Bắc, Kinh Giao hội suy yếu giữ Nam, Tây thành hỗn loạn tiểu bang). Kinh Giao hội đột ngột sa sút sau một đêm vì nội bộ phân liệt và bị thế lực ngoài chèn ép; nay do Nghiêm phu nhân chủ trì. Một năm trước Ngô Kiếm Minh mang di thư + tín vật báo tang Mặc cư nhân đã chết, đính ước cưới đại tiểu thư Mặc Ngọc Châu mưu lấy Noãn dương bảo ngọc làm của hồi môn. Hàn Lập âm trầm sắc mặt — biết Mặc cư nhân thực chất đã chết gần hai năm trước tay mình. Sai Tôn nhị cẩu do thám về Ngô Kiếm Minh."
    },
    {
      chuong: 106,
      tieuDe: "Lam Y Nhân",
      tomTat: "Hàn Lập ngồi lầu hai Hương Gia tửu lâu đối diện Mặc phủ dò xét. Một người tu tiên áo lam (Lão Tam, ~27 tuổi) ngồi cạnh — ánh mắt nhìn thấu khiến Hàn Lập hoảng sợ. Dùng Thiên Nhãn Thuật xác nhận pháp lực Lão Tam vượt hơn mình nhiều. Ra ngoài, Lão Tam gặp người áo vàng (Nhị ca), hai người bàn về Thăng Tiên hội ở Lam Châu và Trúc cơ đan; Lão Tam đánh giá Hàn Lập tầng 7-8 tức miễn cưỡng đủ tư cách tham dự hội."
    },
    {
      chuong: 107,
      tieuDe: "Mặc Ngọc Châu",
      tomTat: "Hàn Lập quan sát từ tửu lâu đoàn cưỡi ngựa trở về: Mặc Ngọc Châu mặc đồ săn đỏ chói nhan sắc quốc sắc thiên hương, đi cùng Ngô Kiếm Minh. Hai người tình cảm thân mật — Hàn Lập nhận thấy nhiệm vụ khó hơn dự tính, lần đầu xao động cảm xúc nam nữ. Quyết định đêm đó nhập Mặc phủ gặp Nghiêm thị, dùng tín vật Mặc đại phu vạch trần kẻ giả mạo. Canh ba lén vào hậu viện Mặc phủ qua mặt toàn bộ thủ vệ."
    },
    {
      chuong: 108,
      tieuDe: "Dạ Nhập Mặc Phủ",
      tomTat: "Hàn Lập vượt hoa viên dày bẫy ám tiễn, leo lên ngôi lầu nhỏ phòng bị nghiêm nhất. Dùng thính giác siêu cấp nghe lén cuộc trò chuyện giữa Nghiêm thị và con gái Mặc Thải Hoàn: Ám Đà (lực lượng bí mật) do Ngũ nương độc chiếm theo di nguyện Mặc đại phu, thu nhập đang sụt giảm; Nghiêm thị chỉ giả vờ câu giờ kẻ giả mạo họ Ngô, sẵn sàng trở mặt bắt giữ khi cần. Hàn Lập định hiện thân thì Mặc Thải Hoàn nhắc 'tên giả mạo họ Ngô' — hắn rụt lại chưa lộ diện."
    },
    {
      chuong: 109,
      tieuDe: "Đăng Môn",
      tomTat: "Hàn Lập cân nhắc xong, ném Văn long giới (nhẫn tín vật hình rồng) vào phòng Nghiêm thị, gõ cửa tự xưng đệ tử Mặc đại phu chào 'Tứ sư mẫu'. Nghiêm thị khớp hai chiếc nhẫn xác nhận tín vật thật; đọc thư mạo danh Mặc đại phu — thư hứa gả một thiên kim kèm Noãn dương bảo ngọc làm của hồi môn nếu Hàn Lập bảo vệ Mặc phủ. Nghiêm thị đa nghi, sai Mặc Thải Hoàn gọi các phu nhân. Hàn Lập thầm quan sát phản ứng của bà."
    },
    {
      chuong: 110,
      tieuDe: "Hồ Mị",
      tomTat: "Nghiêm thị hỏi gốc tích sư đồ; Hàn Lập kể bảy phần thật ba phần giả — Mặc đại phu ẩn cư Thải Hà sơn vì vết thương, gặp hắn tám năm trước, ba tháng trước sai hạ sơn tới Mặc phủ. Các phu nhân kéo tới: dẫn đầu là người đoan trang (khoảng 31-32 tuổi), tiếp theo là một thiếu phụ cực kỳ kiều diễm (Tam nương, ~23-24 tuổi) giọng kiều mỵ trách chồng bỏ đi mười năm. Hàn Lập thất thần đắm chìm vì nhan sắc Tam nương; khí lạnh từ đan điền tự vận chuyển một vòng kinh mạch kéo hắn tỉnh lại. Tam nương thấy hắn kháng lại, trong mắt lóe tia dị sắc."
    },
    {
      chuong: 111,
      tieuDe: "Mỹ Phụ",
      tomTat: "Hàn Lập gặp đủ bốn phu nhân có mặt trong phủ: Nghiêm thị (Tứ phu nhân), Lý thị (Nhị phu nhân), Lưu thị (Tam phu nhân), cùng Mặc Thải Hoàn. Nghiêm thị xác nhận Vương thị (Ngũ phu nhân) đang tuần tra vành đai bên ngoài. Bốn phu nhân đọc lá thư mật của Mặc đại phu trong bầu không khí nghiêm trọng — nội dung chưa tiết lộ. Mặc Thải Hoàn nhận lệnh đưa Hàn Lập vào căn phòng đầu hồi để ổn định chỗ ở."
    },
    {
      chuong: 112,
      tieuDe: "Ám Tín",
      tomTat: "Các phu nhân bàn luận về Hàn Lập; Tam phu nhân Lưu thị tiết lộ có Thiên Hồ đại pháp từng khiến Ngô công tử si mê cả ngày. Bốn phu nhân cùng dùng bột màu từ bốn chiếc long văn giới chỉ pha nước, chiếu lên ám thư để hiện ra nội dung ẩn. Mặc Thải Hoàn đòi 7-8 nghìn lượng đan dược phí từ Hàn Lập; Hàn Lập từ chối thẳng."
    },
    {
      chuong: 113,
      tieuDe: "Oanh Hương Hoàn",
      tomTat: "Hàn Lập và Mặc Thải Hoàn đứng đối nhau trong hậu viện — nàng dùng đủ chiêu làm nũng, giả đáng thương nhưng đều bị Hàn Lập miễn nhiễm (nhờ đã quen với Lệ Phi Vũ). Hàn Lập lục túi tặng nàng bình Oanh Hương Hoàn — viên đan màu đỏ tươi tỏa hương, công dụng xua côn trùng và tỏa hương mê người, vốn điều chế cho Lệ Phi Vũ. Mặc Thải Hoàn nghi là xuân dược nên đòi nhờ Nhị tỷ kiểm nghiệm trước khi dùng. Hàn Lập thầm gạch nàng khỏi danh sách ái mộ vì quá tinh ranh và mê tiền."
    },
    {
      chuong: 114,
      tieuDe: "Yến Ca Si Tình",
      tomTat: "Buổi sáng, Yến Ca (đại đệ tử Mặc đại phu, mày rậm mắt to, tự nhận tư chất kém) tới gõ cửa dẫn Hàn Lập đến gặp các phu nhân. Qua hoa viên hậu viện, hai người tình cờ gặp Mặc Ngọc Châu và Ngô Kiếm Minh đang đi dạo. Yến Ca lập tức si ngốc nhìn Ngọc Châu tới xuất thần; Hàn Lập phải tự xưng là cháu Tam phu nhân để qua mắt Ngô Kiếm Minh. Yến Ca thổ lộ cùng lớn lên với Ngọc Châu từ nhỏ nhưng đã bị cự tuyệt nhiều lần. Tại lầu của các phu nhân, Hàn Lập được thông báo sẽ nhận một nhiệm vụ khiến hắn vừa vui vừa kinh hãi."
    },
    {
      chuong: 115,
      tieuDe: "Kinh Biến",
      tomTat: "Hàn Lập dùng linh thức quét toàn bộ phòng trước khi vào để kiểm tra phục binh — không có cao thủ lạ. Bước vào thì thấy cả đám phu nhân mặc tang phục tơ trắng ngồi chờ: họ đã biết tin Mặc đại phu chết và nhận ra hắn là nghi phạm. Hàn Lập nghênh ngang ngồi đối diện, không e sợ. Nhị phu nhân Lý thị bùng phát hỏi thẳng có phải hắn giết chồng không; Hàn Lập đáp lửng lơ 'vừa chết trên tay ta, vừa là tự sát'. Ngũ phu nhân Vương thị yêu cầu hắn kể lại đầu đuôi, hứa sẽ không để chịu oan nếu vô can."
    },
    {
      chuong: 116,
      tieuDe: "Phiên Kiểm",
      tomTat: "Hàn Lập cười lạnh tuyên bố không sợ Mặc phủ, rồi dùng Hỏa đạn thuật tạo hỏa cầu cỡ miệng chén rượu trên đầu ngón tay — búng vào bàn bên cạnh Lưu thị đốt thành tro tức thì. Lý thị kêu 'tu tiên giả!', cả đám thất sắc đứng dậy. Hàn Lập kinh ngạc vì họ biết khái niệm tu tiên giả; Nghiêm thị giải thích thành Gia Nguyên vốn có người từng tận mắt thấy tu tiên giả tranh đấu. Hàn Lập phát hiện nến trắng trong phòng tẩm mê dược thiên nhân túy; nhờ phương pháp đề phòng tự chế từ thời Thất Huyền môn nên hoàn toàn miễn nhiễm, công khai bẻ gãy kế hoạch của Nghiêm thị."
    },
    {
      chuong: 117,
      tieuDe: "Ngôn Hòa",
      tomTat: "Nghiêm thị tung quân bài cuối: hàn độc trong người Hàn Lập là vũ khí uy hiếp duy nhất — do chính Mặc đại phu trao lại cho bà. Hàn Lập lạnh lùng đáp trước khi độc phát hắn đủ sức giết sạch toàn phủ; hai bên đều cố kỵ nhau nên đồng ý ngồi đàm phán. Hàn Lập thuật lại toàn bộ: Mặc đại phu ép luyện Trường Xuân công hơn bốn năm, mưu đoạt xá thân thể, Dư Tử Đồng can dự, hắn phát hiện âm độc mới buộc đến Lam Châu. Các phu nhân đối chiếu với mật thư của Mặc đại phu thấy khớp. Nghiêm thị đổ hết tội lên Dư Tử Đồng để 'lau sạch' phu quân; từ chối thẳng giao Noãn dương bảo ngọc, buộc Hàn Lập phải ở lại vì Mặc phủ đang đứng trước nguy cơ bị diệt môn."
    },
    {
      chuong: 118,
      tieuDe: "Nhị Tuyển Nhất",
      tomTat: "Nghiêm thị đặt điều kiện trao đổi: Hàn Lập tiêu diệt cả Ngũ Sắc môn lẫn Độc Phách sơn trang; đổi lại nhận Noãn dương bảo ngọc kèm được chọn một trong các thiên kim Mặc phủ làm vợ. Uy hiếp thêm: nếu cưỡng đoạt, người tâm phúc sẽ hủy bảo ngọc. Lưu thị cũng thi triển mị thuật mê hồn nhưng Hàn Lập vận Trường Xuân công miễn nhiễm. Hàn Lập đưa 'nhị tuyển nhất': hoặc toàn Mặc phủ lập tức ẩn cư xa lánh giang hồ — hắn đảm bảo an toàn; hoặc theo một phương án thứ hai mà hắn khẳng định đám Nghiêm thị chắc chắn chọn. Chỉ có Nhị phu nhân Lý thị hơi máy động trước con đường thứ nhất; Nghiêm thị và Lưu thị không chịu bỏ quyền lực."
    },
    {
      chuong: 119,
      tieuDe: "Ý Ngoại Tiêu Tức",
      tomTat: "Hàn Lập ra điều kiện cuối với Nghiêm thị: chỉ chịu trừ thủ lĩnh một trong hai bang đối địch, không phải cả hai — rồi nghênh ngang rời Mặc phủ, ra hạn đến sáng mai phải có câu trả lời. Về tới khách sạn, Tôn Nhị Cẩu báo tin sốt dẻo: gần thành Gia Nguyên sắp có 'Thần tiên đại hội' — các tu tiên giả ước hẹn tụ tập. Nguồn tin từ một đầu mục Tứ Bình Bang dùng Quy tức công giả chết trong rừng, vô tình nghe trộm đôi nam nữ tu tiên giả cưỡi quái ưng hai đầu bàn về hội. Bang chủ Tứ Bình Bang 'Viên tí' Trầm Trọng Sơn đã ra lệnh cấm truyền tin. Hàn Lập kích động vì đây là cơ hội trăm năm tiếp xúc giới tu tiên, dằn hưng phấn hỏi có biết thời gian và địa điểm cụ thể không."
    },
    {
      chuong: 120,
      tieuDe: "Định Kế Đoạt Bang",
      tomTat: "Tôn Nhị Cẩu thú nhận không biết thời điểm và địa điểm chính xác của hội tu tiên. Hàn Lập bèn dùng cương-nhu khuất phục Tôn Nhị Cẩu: hứa dựng hắn làm bang chủ Tứ Bình Bang, đổi lấy sự phục tùng tuyệt đối. Tôn Nhị Cẩu tiết lộ bang chủ Trầm Trọng Sơn mỗi chiều giờ ngọ đều tới Tiêu Tương Viện si mê kỹ nữ Tiểu Kim Chi — đây là thời điểm ra tay. Hàn Lập trao Dẫn Hồn Chung cho Tôn Nhị Cẩu để điều khiển Khúc Hồn diệt phe phản đối khi lên ngôi; cơ chế khóa huyết đảm bảo Tôn Nhị Cẩu không thể chiếm quyền. Mục tiêu thật của Hàn Lập là bắt sống đôi nam nữ tu tiên giả để tra hỏi về đại hội. Sau khi Tôn Nhị Cẩu rời đi, Hàn Lập thưởng cho Vân Sí Điểu một viên Hoàng Lật Hoàn rồi sai nó bí mật theo dõi Tôn Nhị Cẩu, phòng hắn bỏ trốn."
    },
    {
      chuong: 121,
      tieuDe: "Tiêu Tương Viện",
      tomTat: "Hàn Lập cải trang thành tiểu nhị, mang rượu thức ăn vào phòng riêng của bang chủ Tứ Bình Bang Trầm Trọng Sơn ở Tiêu Tương Viện. Trầm Trọng Sơn đang đàm hội cùng tam đại hộ pháp: 'Phi đao' Trầm Tam, 'Cuồng quyền' Tiễn Tiến, 'Độc tú tài' Phạm Tự. Hàn Lập quan sát thực lực bốn người và nhận thấy Trầm Tam nghi ngờ mình — chương kết thúc tại tình huống căng thẳng."
    },
    {
      chuong: 122,
      tieuDe: "Độc Sát",
      tomTat: "Hàn Lập đã trộn Tiêu Hồn Tán vào rượu trước đó, bản thân uống Thanh Linh Tán giải độc trước. Trầm Trọng Sơn, Tiễn Tiến, Phạm Tự, Trầm Tam và các kỹ nữ (gồm Kim Chi) đều chết vì độc. Tôn Nhị Cẩu chính thức lên làm bang chủ Tứ Bình Bang mới, Hàn Lập giật dây từ sau bóng tối. Hàn Lập đến Mặc phủ, gặp ba nghĩa nữ của Mặc đại phu — 'Mặc thị tam kiều': Mặc Ngọc Châu, Mặc Thải Hoàn, Mặc Phượng Vũ."
    },
    {
      chuong: 123,
      tieuDe: "Giao Dịch",
      tomTat: "Hàn Lập từ chối lấy bất kỳ tiểu thư Mặc phủ nào. Đàm phán với Nghiêm thị: chỉ nhận giết một mục tiêu — trang chủ Độc Bá sơn trang Âu Dương Phi Thiên (ngoại hiệu 'Nộ sư', là thầy của Ngô Kiếm Minh) — để đổi lấy Noãn dương bảo ngọc. Buộc phu nhân nuốt thuốc làm con tin hóa học. Yêu cầu ngựa và chân dung Âu Dương Phi Thiên."
    },
    {
      chuong: 124,
      tieuDe: "Mặc Phượng Vũ",
      tomTat: "Nghiêm thị một mình uống thuốc con tin, tha cho các cô gái. Khi Hàn Lập rời Mặc phủ, Nhị tiểu thư Mặc Phượng Vũ đuổi theo hỏi thăm về di cảo y đạo của cha — Hàn Lập trao lại cho nàng. Về khách điếm, Tôn Nhị Cẩu đã chờ cùng Tịch Thiết Ngưu — tráng hán khoảng 30 tuổi, chính là nhân chứng nghe lén đôi tu tiên giả bàn về Thần tiên đại hội."
    },
    {
      chuong: 125,
      tieuDe: "An Bài",
      tomTat: "Tịch Thiết Ngưu thuật lại: nữ tu tiên giả nhắc đến 'Thái Nam cốc' trước khi nói 'đại hội thần tiên'. Hàn Lập suy ra địa điểm là Thái Nam sơn — cực nam Lam Châu, cách Nghiễm Quý thành 40 dặm. Phong Tịch Thiết Ngưu làm phó bang chủ Tứ Bình Bang. Tặng Tôn Nhị Cẩu giải độc đan giải trừ vĩnh viễn Hủ tâm hoàn. Hàn Lập rời Gia Nguyên Thành, hai tháng sau đến Thái Nam sơn."
    },
    {
      chuong: 126,
      tieuDe: "Thái Nam Sơn",
      tomTat: "Hàn Lập đã dùng Noãn dương bảo ngọc áp vào đan điền hơn 15 ngày để chữa lành hàn độc. Noãn dương bảo ngọc là dị bảo tự hấp thụ linh khí — bảo quản trong mộc hạp. Hồi tưởng: ám sát Âu Dương Phi Thiên bằng một kiếm phù khi hắn một mình ngắm trăng, Phách vương giáp (ngạnh công) vô dụng trước linh khí kiếm. Nhận được bảo ngọc từ Nghiêm thị. Tại Thái Nam sơn, gặp Vạn Tiểu Sơn (bạch y thiếu niên 15-16 tuổi, người Vạn gia, Khô Nhai sơn) — xác nhận qua Thiên Nhãn Thuật là tu tiên giả. Sườn núi phủ sương mù chính là Thái Nam cốc."
    },
    {
      chuong: 127,
      tieuDe: "Linh Căn Chi Thuyết",
      tomTat: "Vạn Tiểu Sơn giải thích hệ thống tu tiên: ba giai đoạn lớn (hạ — trung — thượng cảnh giới); hạ gồm Luyện Khí → Trúc Cơ → Kết Đan → Nguyên Anh → Hóa Thần. Thọ mệnh: Trúc Cơ hơn 200 tuổi, Kết Đan 400-500 tuổi, Nguyên Anh tới 1000 tuổi. Linh căn phân bốn loại: Ngụy (4-5 hành, tắc tầng 3-4), Chân (2-3 hành), Thiên căn (1 hành, tốc độ 2-3x, cực hiếm), Biến dị (vài loại đặc biệt như Lôi/Băng/Ám). Việt quốc có 7 môn phái: Yểm Nguyệt tông (mạnh nhất), Linh Thú sơn, Hoàng Phong cốc, Thanh Hư môn, Hóa Đao ổ, Thiên Khuyết bảo, Cự Kiếm môn."
    },
    {
      chuong: 128,
      tieuDe: "Thái Nam Tiểu Hội",
      tomTat: "Vạn Tiểu Sơn xưng tên, tiết lộ gia tộc có tổ tiên là tán tu gia nhập Cự Kiếm Môn nên tộc quy không kỳ thị tán tu. Hàn Lập thừa nhận mình là tán tu. Vạn Tiểu Sơn dùng Trương thông âm phù báo hiệu vào cốc. Thái Nam tiểu hội là sự kiện giao dịch năm năm một lần cho tiểu bối tu tiên Lam Châu — đặc biệt đông vì Thăng Tiên đại hội sẽ mở tại Lam Châu sau một tháng. Sơn cốc ba mặt núi rộng hơn trăm mẫu, có cung điện lầu các hoa lệ và khu chợ buôn bán sầm uất."
    },
    {
      chuong: 129,
      tieuDe: "Thanh Nhan Chân Nhân",
      tomTat: "Trong Thái Nam cốc, Hàn Lập gặp lão trưởng bối cai quản — Thanh Nhan chân nhân (cao gầy, mặc nho sam xanh, mặt xanh lè), bạn chí giao của phụ thân Vạn Tiểu Sơn. Chân nhân nhận ra Hàn Lập là mộc-thuộc-tính tán tu Luyện Khí tầng thứ tám; nghi ngờ Hàn Lập có tâm thuật bất chánh. Hàn Lập khéo léo cáo từ. Khu chợ bố trí hình chữ 'Hồi', thắp đèn đồng và đá phát quang — toàn bộ người tham gia đều là thiếu niên, trang lứa tiểu bối."
    },
    {
      chuong: 130,
      tieuDe: "Nhập Hỏa",
      tomTat: "Một nhóm tán tu mời Hàn Lập cùng đội: dẫn đầu là Tùng Văn đạo sĩ (Ngọa Ngưu sơn Thanh Ngưu quan, Quải Đan đạo sĩ); thành viên gồm Hắc Mộc, Hắc Kim (song sinh, Thương Lang lĩnh), Hồng Liên tán nhân (nữ, Phi Liên động), Khổ Tang đại sư (Bồ Lộ sơn), Hồ Bình Cô và Hùng Đại Lực (vợ chồng, Thiên thủy trại). Đa số tu Trường Xuân công tầng 7-8. Tùng Văn trao đạo phù chìa khóa tiểu lâu cho Hàn Lập. Hàn Lập từ chối nhóm lại, tự mình dạo chợ."
    },
    {
      chuong: 131,
      tieuDe: "Linh Thạch Dữ Linh Phù",
      tomTat: "Hàn Lập dạo chợ Thái Nam hội không có linh thạch, tìm hiểu hệ thống giao dịch tu tiên. Linh thạch được giới thiệu: bốn bậc (thấp/trung/cao/siêu), theo thuộc tính ngũ hành; ngày càng khan hiếm do khai thác quá độ. Hàn Lập xem giá các phù lục và động tâm với Phi thiên phù sơ cấp bậc cao (ba mươi khối). Diệp Báo — đệ tử Tần Diệp lĩnh — trả giá bị từ chối, đe dọa chủ quầy sau đại hội sẽ tính sổ. Hàn Lập cảnh giác ngay vì 'Tần Diệp lĩnh' liên quan Chu Nho. Hàn Lập định đổi đan dược lấy Phi thiên phù nhưng bị từ chối lần đầu."
    },
    {
      chuong: 132,
      tieuDe: "Thu Hoạch",
      tomTat: "Hàn Lập khéo léo che giấu lượng đan dược dồi dào của mình, chốt giao dịch: đổi thêm ba bình đan tinh tiến pháp lực lấy Phi hành phù (linh phù sơ cấp bậc cao), một lá Không bạch phù chỉ và quyển Cơ sở chú quyết tàn bổn (gồm bảy tám pháp thuật bậc thấp và Địa thứ thuật sơ cấp bậc trung). Sau đó dùng đạo phù Tùng Văn vào tiểu lâu — thấy cấm pháp thanh quang bao quanh, kiểm tra bằng Thiên nhãn thuật. Trong lầu gặp Khổ Tang đại sư đang tụng kinh; lên lầu hai gặp nhóm Tùng Văn cùng hai người mới: Ngô Cửu Chỉ (Vân Môn giản) và Hoàng Hiếu Thiên (Thạch Thác cốc)."
    },
    {
      chuong: 133,
      tieuDe: "Thâu Kỹ",
      tomTat: "Ngô Cửu Chỉ giả vờ thân thiết để dùng thâu kỹ (kỹ năng trộm giang hồ) nhưng bị Hàn Lập chộp cổ tay bắt quả tang — Hàn Lập nhận ra vì từng tu luyện cùng loại bí thuật. Hồ Bình Cô bùng lên vì trước đây cũng bị Ngô Cửu Chỉ trộm. Tùng Văn đứng ra hòa giải; Ngô Cửu Chỉ cam kết không dùng thâu kỹ với đồng đạo nữa. Hoàng Hiếu Thiên lộ diện pháp lực mạnh nhất nhóm. Tùng Văn cảnh báo mọi người: các kỳ Thái Nam hội trước đây, nhiều tán tu mất tích khó hiểu sau khi hội kết thúc — đề nghị cùng nhau rời đi sau Thăng tiên đại hội."
    },
    {
      chuong: 134,
      tieuDe: "Thăng Tiên Đại Hội",
      tomTat: "Ngô Cửu Chỉ hỏi về Thăng tiên đại hội — mở buổi giảng giải dài. Hắc Mộc kể: để đột phá từ Luyện khí kỳ lên Trúc cơ kỳ phải có Trúc cơ đan (mỹ danh 'Thăng tiên hoàn'), chỉ đại môn phái mới luyện chế được; cả Việt quốc liên thủ mười năm chỉ được hơn ngàn viên. Thăng tiên đại hội mười năm một lần: thất đại tiên phái mỗi phái đưa mười đệ tử mang mười khối Trúc cơ đan, người chiến thắng lôi đài được nhập môn và uống đan. Hạn chế tuổi: dưới bốn mươi. Hoàng Hiếu Thiên rời phòng về ngủ vì công pháp kỳ lạ. Hàn Lập nghi Tùng Văn đã nhìn ra thân phận người mới tu tiên của mình."
    },
    {
      chuong: 135,
      tieuDe: "Kinh Văn",
      tomTat: "Hồ Bình Cô giảng tiếp điều kiện báo danh (công pháp tầng bảy+, dưới bốn mươi tuổi, dùng Quan cốt thuật kiểm tra tuổi thật). Thái Nam cốc hiện hơn ngàn người vì phần lớn đến để quan sát đối thủ Thăng tiên hội. Hắc Kim phát biểu: người pháp lực yếu hơn vẫn có thể thắng nếu có pháp phù/pháp khí lợi hại — Tùng Văn đồng tình. Tùng Văn giải thích bí ẩn: hai kỳ tài tầng mười một từng đồng quy vu tận tại lôi đài là người gia tộc tu tiên được bồi dưỡng đặc biệt dùng con đường tắt. Tùng Văn chua chát thừa nhận tán tu thua kém gia tộc tu tiên về điều kiện, nhưng trấn an: còn trẻ, còn mười năm sau."
    },
    {
      chuong: 136,
      tieuDe: "Yến Gia",
      tomTat: "Hồng Liên tán nhân dứt khoát đi cùng nhóm; Tùng Văn rủ Hàn Lập nhưng Hàn Lập từ chối vì trực giác bất an. Ngô Cửu Chỉ bất mãn nhưng thôi. Ngày hôm sau Hàn Lập học chế linh phù — hỏi Khổ Tang về đan sa và bút, được chỉ điểm. Bên ngoài xuất hiện linh cầm Song thủ vụ (quái điểu hai đầu, thân xám, bốn mắt lóe lục quang): là linh cầm của Yến gia — đệ nhất tu tiên đại tộc Việt quốc ở Cô Vũ sơn, gia tộc duy nhất có tu sĩ Kết Đan kỳ. Hàn Lập nhận ra đây chính là con quái ưng từng thấy với 'thần tiên nam nữ'. Hàn Lập ra chợ mua quyển Trường Xuân công (tầng 1-13) giá hai linh thạch."
    },
    {
      chuong: 137,
      tieuDe: "Kim Trúc Bút",
      tomTat: "Hàn Lập đổi đan dược tinh tiến pháp lực (Hoàng long đan) lấy quyển Trường Xuân công từ thiếu nữ bán hàng; thêm túi mầm thất tinh thảo (mười năm nữa thành nguyên liệu tốt nhất chế bùa). Hàn Lập hỏi mua đan sa và bút; thiếu nữ không có đan sa nhưng gọi huynh trưởng mang đến Kim Trúc bút — dị bảo chuyên chế phù (ngòi bút lông Kim Tình Viên cấp hai, thân bút kim tinh ô thiết, Trúc cơ kỳ tu sĩ tế luyện ba ngày ba đêm). Hai huynh muội không có thiên phú chế phù; huynh trưởng cần đột phá tầng cảnh để dự Thăng tiên hội nên đổi bút lấy đan dược. Hàn Lập đổi ba bình Hoàng long đan và bốn bình Kim tủy hoàn lấy Kim Trúc bút và mầm thất tinh thảo."
    },
    {
      chuong: 138,
      tieuDe: "Chế Phù Chi Đạo",
      tomTat: "Hàn Lập mua thêm đan sa, về phòng thử chế Định thần phù bằng Kim Trúc bút — thất bại 12 lần liên tiếp (nổ tung, bùng cháy). Khổ Tang đại sư giải thích: người mới thất bại trăm lần là bình thường; thành phù sư hợp cách cần vạn lần luyện tập; khác với phù thuật (dùng phù lưu trữ pháp thuật người khác dùng). Hàn Lập quyết định tạm bỏ tự chế phù, chuyển sang mua Định thần phù. Sau hơn mười ngày luyện khí kết hợp đan dược, Trường Xuân công đột phá tầng chín — pháp lực tăng gấp đôi tầng tám. Luyện thêm được Lưu sa thuật, Băng đông thuật thuần thục (nhờ pháp lực tầng chín), và các pháp thuật mới: Truyền âm thuật, Nặc thân thuật."
    },
    {
      chuong: 139,
      tieuDe: "Pháp Bảo Tàn Phiến",
      tomTat: "Hai ngày cuối Thái Nam hội, hơn hai ngàn người tu tiên đổ về — Hàn Lập nhận ra dù đã tầng chín vẫn chỉ hạng trung lưu giữa đám đông. Tại chợ, một hán tử da đen tầng mười rao bán pháp bảo Tàn Phiến: mảnh vải trong suốt nếp nhăn rách rưới — bao quanh vật thể sẽ ẩn hình hoàn toàn, linh khí không lọt ra lọt vào, Thiên Nhãn Thuật cũng không phá được (do Kết Đan kỳ/Nguyên Anh kỳ luyện chế). Chủ quầy người Diệp gia từ chối đổi, đòi ba mươi khối linh thạch. Hàn Lập ngay lập tức quyết tâm 'thế tại tất đắc'."
    },
    {
      chuong: 140,
      tieuDe: "Thế Tại Tất Đắc",
      tomTat: "Hàn Lập bước vào khi giá tranh lên tới hai mươi khối — một tiểu tán tu tầng năm hô bừa bị hán tử da đen phóng linh áp dọa. Hàn Lập xuất ra một tờ Phi hành phù (linh phù sơ cấp bậc cao, hiếm hàng — cả Thái Nam hội chỉ xuất hiện năm sáu cái, giá kinh người), đặt lên quầy đề nghị đổi lấy Tàn Phiến. Đám đông kinh ngạc trước tờ phù quý hiếm."
    },
    {
      chuong: 141,
      tieuDe: "Tàn Phiến Thần Công",
      tomTat: "Hàn Lập xác nhận Tàn Phiến có hai công hiệu: hút linh khí đặc biệt và ẩn giấu vật bên trong khỏi Thiên Nhãn Thuật. Dùng Tàn Phiến che giấu Thăng Tiên Lệnh của Hoàng Phong Cốc. Một thanh niên mặt tròn chủ động đưa quyển Thanh Khê bút lục cho Hàn Lập. Qua bút lục, Hàn Lập biết được xuất xứ và ý nghĩa thực sự của Thăng Tiên Lệnh: đây là lệnh bài bảo chứng Hoàng Phong Cốc sẽ cấp Trúc Cơ đan, vốn thuộc Tần gia ở Tần Diệp lĩnh — gia tộc đã bị Diệp gia thôn tính; Chu Nho (người họ Chu) là nam đinh cuối cùng bỏ trốn mang theo lệnh."
    },
    {
      chuong: 142,
      tieuDe: "Kẻ Phản Bội",
      tomTat: "Tùng Văn đạo sĩ là kẻ phản bội: bí mật rắc phấn định vị lên áo Hàn Lập khi bắt tay từ biệt, dẫn đường cho hai thích khách — hán tử áo vàng và đại hán phát hoàng quang. Hai kẻ phục kích tại vũng lầy lầy lội. Hán tử áo vàng dùng Cự lực thuật tấn công, gây thương tích nghiêm trọng: vai và chân trái Hàn Lập bị thương. Hàn Lập đáp trả bằng Ngũ đạn liên phát — biến tấu Hỏa đạn thuật bắn năm quả cầu lửa liên tiếp từ năm ngón tay."
    },
    {
      chuong: 143,
      tieuDe: "Phản Sát",
      tomTat: "Hàn Lập tung đòn phản công ba lớp: Kim Cương phù tạo kim tráo bảo vệ, Thuật biến cát làm đất dưới chân đại hán hóa thành cát lún, đồng thời kích phát Phù Bảo (kiếm quang trong hộp gỗ) — kiếm quang xẻ toàn bộ mười tám quả cầu đen trong hộp gỗ của đại hán rồi giết cả hai kẻ phục kích. Thu loot: hơn năm mươi khối linh thạch, phù lục, pháp khí. Đại hán từng dùng Thổ giáp thuật phòng thủ nhưng không đủ."
    },
    {
      chuong: 144,
      tieuDe: "Hoàng Phong Cốc",
      tomTat: "Vương sư thúc dẫn Hàn Lập và mười người thắng lôi đài về Hoàng Phong Cốc bằng pháp khí thuyền qua Kiến Châu. Kiểm tra linh căn: Hàn Lập được xác định tứ thuộc tính ngụy linh căn (~1% cơ hội Trúc Cơ). Chưởng môn Chung Linh Đạo — hậu kỳ Trúc Cơ kỳ, dáng như ba mươi tuổi — chủ trì phân chia Trúc Cơ đan: ưu tiên người cầm Thăng Tiên Lệnh, hậu nhân Hồng Phất sư thúc, người dị linh căn. Diệp lão giả (Đường chủ Bách Ky đường) tức giận vì cháu mình bị tước suất. Ngô lão giả hiến kế: dụ người tư chất kém tự nguyện nhường đan."
    },
    {
      chuong: 145,
      tieuDe: "Giao Dịch Đề Nghị",
      tomTat: "Hàn Lập chờ tại Nghênh Tân lâu ba bốn ngày. Được Chưởng môn duyệt cho gia nhập và cấp Trúc Cơ đan. Diệp lão giả vào Nghênh Tân lâu gặp riêng, xưng 'Diệp sư thúc', đề nghị mua Trúc Cơ đan với giá bảy tám khối linh thạch bậc trung và vật phẩm khác. Hàn Lập sửng sốt nhưng bắt đầu cân nhắc lợi hại."
    },
    {
      chuong: 146,
      tieuDe: "Thỏa Thuận",
      tomTat: "Diệp lão giả thuyết phục: tứ linh căn tỉ lệ Trúc Cơ thấp, chi bằng đổi vật hữu dụng. Chiêu sát thủ: cho Hàn Lập tùy chọn công tác tạp vụ (quyền của Đường chủ Bách Ky đường). Hàn Lập tự an ủi: tin vào bình thần bí sau này sẽ có cơ hội tự luyện Trúc Cơ đan. Giao dịch chốt: Hàn Lập nhường Trúc Cơ đan, đổi lấy quyền chọn công tác trồng linh dược."
    },
    {
      chuong: 147,
      tieuDe: "Chính Thức Nhập Môn",
      tomTat: "Hàn Lập được dẫn vào Nghị sự đại điện trước mặt Chưởng môn và hơn mười quản sự. Chung Linh Đạo chính thức thu nhận hắn làm đệ tử Hoàng Phong Cốc; dàn xếp lưỡng toàn: Hàn Lập nhường đan, Diệp Tính bồi thường tổn thất vật phẩm. Phân phó Vương sư đệ an bài chỗ ở và phổ biến môn quy: hơn mười nghìn đệ tử ba tầng (chấp sự, lĩnh sự, Trúc Cơ kỳ quản sự), một Nguyên Anh sư thúc tổ vắng mặt lâu."
    },
    {
      chuong: 148,
      tieuDe: "Lĩnh Vật Phẩm",
      tomTat: "Vương sư thúc dẫn Hàn Lập tới nhà Lâm sư đệ (Hôi Y Lão Giả — trưởng bối áo xám tài điêu khắc gỗ, bất kính với Chưởng môn). Lâm sư đệ phát vật phẩm đệ tử mới: Hoàng ti sam (pháp y), Thanh Diệp pháp khí (phi hành), Liệt Dương kiếm, Lãnh Nguyệt đao, Thập Bội Trữ Vật (túi trữ vật), bộ công cụ tinh luyện. Vương sư thúc dạy ba điều kiêng kỵ dùng túi trữ vật. Lâm sư đệ lộ tâm sự tịch liêu khi nghe Hàn Lập nhường qua Trúc Cơ đan."
    },
    {
      chuong: 149,
      tieuDe: "Tạp Vụ",
      tomTat: "Vương sư thúc dẫn Hàn Lập tới Truyền công các, giới thiệu Ngô Phong (chấp sự công pháp đệ tử mới, ~30 tuổi, công pháp sơ cấp top 10 đồng lứa) làm người chỉ giáo. Hàn Lập lần đầu tập phi hành bằng Thanh Diệp pháp khí. Bay tới Bách Ky đường xin nhận công tác trồng trọt sớm — Vu chấp sự kinh ngạc. Diệp Tính xuất hiện hào phóng cho phép chọn tự do. Hàn Lập xem trúc giản xanh liệt kê nhiều công tác: Ngũ hoa thụ, Hỏa Vân sâm, Thực nguyệt Mai thảo, Hoàng Ngọc trúc… và tìm thấy một công tác rất ưng ý."
    },
    {
      chuong: 150,
      tieuDe: "Hối Nặc",
      tomTat: "Hàn Lập chọn nhiệm vụ tiếp quản Bách Dược Viên tại Kim Phù lĩnh — nhiệm vụ siêu khó nhiều năm không ai hoàn thành. Vu chấp sự can ngăn nhưng Hàn Lập sau khi đọc quyển trục ghi kinh nghiệm thất bại vẫn kiên quyết nhận. Diệp Tính hối ước: lấy cớ luyện Hợp Khí đan hoãn giao vật phẩm bồi thường; Hàn Lập ngoài mặt tươi cười, trong lòng thống hận, tự nhủ sẽ thu hồi cả vốn lẫn lời. Sau khi Hàn Lập đi, Ngô Tính xuất hiện: lộ rõ đang khống chế Diệp Tính qua thỏa thuận chia nửa Hợp Khí đan — ai làm điều này ắt phải theo mình trong nghị sự tông môn."
    },
    {
      chuong: 151,
      tieuDe: "Bách Dược Viên",
      tomTat: "Hàn Lập tới Bách Dược Viên tại Kim Phù lĩnh, tiếp nhận từ Mã sư bá — một lão giả kỳ quái, vốn là cựu quản sự cấp Trúc Cơ kỳ nay bị giáng xuống giữ vườn. Dược viên hoang tàn: linh thụ chết gần hết, đất đai thoái hóa. Mã sư bá đòi lương hai linh thạch/tháng để ở lại chỉ dẫn. Qua đối thoại lộ rõ Diệp Tính đã để vườn xuống cấp cố ý; Mã sư bá uất hận Diệp Tính. Hàn Lập khôn khéo thuyết phục lão ở lại. Trong lúc thu vật phẩm bàn giao — 3 pháp khí, 2 linh thạch trung cùng hơn 10 linh thạch thấp — Hàn Lập âm thầm chôn bình thần bí vào đất, dùng Tàn Phiến phủ che vị trí."
    },
    {
      chuong: 152,
      tieuDe: "Lưỡng Niên",
      tomTat: "Hai năm trôi qua trong Bách Dược Viên. Hàn Lập miệt mài tu luyện, đột phá Trường Xuân công lên tầng 11 — cảnh giới tiền-Trúc-Cơ cao nhất mà thể nội chịu được mà không Trúc Cơ hóa. Thử dùng Hoàng Đồng bình luyện lục dịch nhưng chỉ giữ được gần một ngày rồi thoái hóa — lúc này hắn biết còn thiếu điều gì đó. Mã sư bá được tăng lương lên 5 linh thạch/tháng vì công dưỡng thực giỏi. Đồng môn đến thăm kể chuyện: cặp song sinh Mộ Dung (lôi linh căn thiên tài) nhập môn; đệ tử trội nhất Lý Tính ra đi bí ẩn sau hai năm; một đồng tử Huyền Âm chi nhãn cực hiếm vừa được chấp nhận. Thông tin cũ xác nhận: Ngô Phong đã uống Trúc Cơ đan nhưng thất bại đột phá."
    },
    {
      chuong: 153,
      tieuDe: "Nhạc Lộc Điện",
      tomTat: "Mã sư bá chủ động đề nghị giúp đỡ — trao ngọc phù bạch ngọc cho Hàn Lập, miễn phí lui tới Nhạc Lộc điện một năm để tra cứu đan phương. Nhạc Lộc điện tọa lạc tại Vu Quân sơn, đến nơi qua Truyền tống trận. Hai hồng y đệ tử Trúc Cơ kỳ gác cửa nghiêm ngặt. Mã sư bá giải thích sơ lược cơ cấu điện: lầu một tiếp đón, lầu hai tàng thư đan phương và y thư tốn phí đọc. Ngọc phù có hiệu lực một năm — Hàn Lập lên kế hoạch khai thác tối đa."
    },
    {
      chuong: 154,
      tieuDe: "Hứa Lão",
      tomTat: "Hàn Lập vào Nhạc Lộc điện lần đầu, gặp Hứa lão — lão giả phàm nhân phụ trách quản lý, thái độ lạnh nhạt. Bên trong điện có thông đạo khắc chữ 'Đan'. Lầu hai tàng thư có nhiều y thư, trúc giản đan phương, và hai ngọc đồng đặc biệt — phí đọc 1 linh thạch/canh giờ. Hứa lão cũng giới thiệu về Hoa thị kim châm bí thuật — một kỹ thuật luyện kim châm từ thời Hoa gia. Tổng cộng Hàn Lập tốn 2 linh thạch cho lần đọc đầu."
    },
    {
      chuong: 155,
      tieuDe: "Trúc Cơ Đan",
      tomTat: "Hàn Lập đọc hai ngọc đồng tại lầu hai. Ngọc đồng xanh: phương pháp luyện Trúc Cơ đan — cần tiên thiên chân hỏa, 3 chủ dược quý hiếm, và hơn 30 phụ dược. Vòng luẩn quẩn: cần Trúc Cơ đan để vào Trúc Cơ kỳ mới có thể luyện — ai sẵn có tiên thiên chân hỏa thì đã được môn phái luyện rồi. Ngọc đồng đỏ: Định nhan đan — không cần chân hỏa nhưng cần dược liệu dược tính ngàn năm, cũng là khó kiếm. Hứa lão tiết lộ mình là 'gian thương' chuyên giao dịch vật liệu quý. Hàn Lập thuê phục chế hai ngọc đồng với giá 20 linh thạch. Đề tài đại kiếp nạn được gợi đến."
    },
    {
      chuong: 156,
      tieuDe: "Địa Phế Chi Hỏa",
      tomTat: "Hứa lão tiết lộ giải pháp bẻ vòng luẩn quẩn: địa phế chi hỏa — loại hỏa nguồn từ lòng đất, có thể thay thế tiên thiên chân hỏa trong luyện Trúc Cơ đan. Hắn dẫn Hàn Lập qua thông đạo không biển báo đến cửa đá ngũ sắc vào huyền dương hỏa địa bên trong Nhạc Lộc điện. Tại đây bán các lò luyện đan chuyên dụng. Hàn Lập chọn mua Ngân Ti đỉnh nhỏ nhất giá 32 linh thạch (thủ vệ thô lỗ, Hứa lão mặc cả giúp). Tổng chi chuyến đi: 50 linh thạch (2 phí đọc + 20 phục chế + 32 đỉnh lô)."
    },
    {
      chuong: 157,
      tieuDe: "Mộ Dung Huynh Đệ",
      tomTat: "Hàn Lập về Bách Dược Viên thì chứng kiến trận tỷ thí giữa cặp song sinh Mộ Dung — lôi linh căn — và Lục sư huynh — phong linh căn. Mộ Dung huynh đệ thi triển Thiên lôi liên hoàn kích liên tục, áp đảo Lục sư huynh ban đầu. Trận đánh kịch liệt tại vùng dược viên. Mộ Dung huynh đệ thua vì cạn pháp lực trước — lôi linh căn tiêu hao nhiều. Hàn Lập đứng xem từ xa, không can thiệp."
    },
    {
      chuong: 158,
      tieuDe: "Phạt Đứng",
      tomTat: "Lục sư huynh dùng chiêu cuối Thanh Hồ trảm kết thúc trận. Niếp sư muội — lam y nữ tử — xuất hiện dập tắt chiêu kịp thời ngăn thương vong. Hàn Lập bị truyền âm khiển trách vì để người ngoài vào tỷ thí trong khu vực mình quản lý. Mộ Dung huynh đệ bị phạt diện bích tu đến tầng 9. Sau khi mọi người rời đi, Hàn Lập kiểm kê kho dược liệu: đã có 31 loại phụ dược sẵn trong vườn, nhưng thiếu 3 loại chủ dược mới luyện được Trúc Cơ đan."
    },
    {
      chuong: 159,
      tieuDe: "Chủ Dược",
      tomTat: "Hàn Lập hỏi Mã sư bá về 3 loại chủ dược cần cho Trúc Cơ đan — lão khẳng định không có hạt giống nào trong Hoàng Phong Cốc, thậm chí cả Thất đại tiên phái Việt quốc cũng hiếm. Kế hoạch tự luyện Trúc Cơ đan gặp vách tường lớn. Ngô Phong tới Truyền Công Các giảng Hỏa Xà Thuật — pháp thuật hỏa hệ sơ cấp bậc trung — cho đệ tử Luyện Khí kỳ. Hàn Lập tham dự, học bài giảng. Thông tin về Ngô Phong thất bại Trúc Cơ được xác nhận lại trong bối cảnh này."
    },
    {
      chuong: 160,
      tieuDe: "Huyết Cấm Thí Luyện",
      tomTat: "Ngô Phong giữ lại Hàn Lập sau buổi giảng, tiết lộ về Huyết Cấm Thí Luyện: cấm địa cổ đại sau Hoàng Phong Cốc mang cổ cấm phong hệ, 5 năm một lần bị Kết Đan kỳ phá mở trong 5 ngày. Chỉ tu sĩ Luyện Khí kỳ được vào; tỷ lệ tử vong xấp xỉ 3/4. Bên trong có thứ gì đó rất giá trị — người sống sót thường tiến bộ vượt bậc. Kỳ tiếp theo diễn ra khoảng nửa năm nữa. Ngô Phong gợi ý Hàn Lập tham gia. Hàn Lập tiến thoái lưỡng nan: cần tài nguyên nhưng rủi ro cực cao, không biết bên trong có gì giúp luyện Trúc Cơ đan không."
    },
    {
      chuong: 161,
      tieuDe: "Phường Thị",
      tomTat: "Sau mấy đêm suy tính, Hàn Lập quyết tâm tham gia Huyết Cấm Thí Luyện. Xác nhận lần cuối tại Nhạc Lộc điện: không còn đường tìm chủ dược nào khác. Lên kế hoạch chuẩn bị nửa năm: học thêm pháp thuật từ Ngô Phong, mua pháp khí và phù lục cao cấp tại phường thị bên ngoài môn phái. Chọn học Liễm khí thuật — phụ trợ bậc trung thu giấu pháp lực, thực dụng hơn Ẩn nặc thuật khi đối phó tu sĩ Luyện Khí kỳ. Khổ tu Liễm khí thuật ban ngày, dùng lục dịch nuôi linh thảo ban đêm — chuẩn bị dược liệu ngàn năm để mang đi giao dịch."
    },
    {
      chuong: 162,
      tieuDe: "Vạn Bảo Lâu",
      tomTat: "Hàn Lập tới phường thị Hoàng Phong Cốc dưới giả danh 'Lệ huynh', đội nón che mặt, vào từ cửa Bắc. Chọn Vạn Bảo Lâu — lầu thương hội tu tiên lớn nhất, đông khách nhất. Gặp Điền Bặc Ly — chưởng quỹ người thường, thanh nhã lão luyện. Yêu cầu xem bảo vật tốt nhất. Khi Điền chưởng quỹ mở hộp gấm, Hàn Lập phát hiện hai luồng pháp lực vô hình áp lên linh hồn — cơ chế phòng thủ của Vạn Bảo Lâu đề phòng cướp bảo vật, chỉ an toàn với tu sĩ Trúc Cơ kỳ trở lên."
    },
    {
      chuong: 163,
      tieuDe: "Cẩm Hạp Chi Bảo",
      tomTat: "Điền chưởng quỹ giới thiệu ba pháp khí: Kim phù tử mẫu đao (bộ đao mẹ-con), Huyền thiết phi thiên thuẫn (khiên phi hành), Thiên lôi tử (cầu lôi nổ uy lực đủ giết Trúc Cơ kỳ). Hàn Lập thích nhất Huyền thiết thuẫn — tự động bay che chở, đúng thứ cần cho Huyết Cấm. Điền chưởng quỹ giữ lại một hộp gấm cuối, thử ép Hàn Lập lộ thực lực. Hàn Lập lấy gốc Hoàng tinh chi (linh thảo ngàn năm) ra đặt im lặng. Điền chưởng quỹ kinh ngạc, sai gọi Đinh lão — chuyên gia giám định dược — lên thẩm định."
    },
    {
      chuong: 164,
      tieuDe: "Phù Bảo Chi Bí",
      tomTat: "Đinh lão giám định kỹ càng, cam đoan Hoàng tinh chi là thật, tuổi hơn ngàn năm, dược tính còn nguyên. Điền chưởng quỹ đề nghị đổi công bằng: một gốc linh thảo ngàn năm lấy hai kiện pháp khí trong hộp đầu, hoặc một kiện trong hộp cuối. Hàn Lập yêu cầu xem hộp cuối cùng — bên trong là Kim Quang Chuyên phù bảo: tấm phù lục kim quang lập lòe, dạng hộp nhỏ ngũ sắc. Hàn Lập nhận ra giống phù lục tiểu kiếm xám của mình. Điền chưởng quỹ giải thích toàn bộ cơ chế phù bảo: Kết Đan kỳ luyện chế, ai cũng dùng được; tiền-Trúc-Cơ 1–2 thành uy lực; hậu Trúc Cơ toàn bộ; số lần hữu hạn."
    },
    {
      chuong: 165,
      tieuDe: "Dạ Ngộ",
      tomTat: "Hàn Lập quyết định mua trọn tất cả hộp gấm: dùng 2 gốc linh thảo ngàn năm đổi lấy toàn bộ — Kim phù tử mẫu đao, Huyền thiết phi thiên thuẫn, Thiên lôi tử, Kim Quang Chuyên phù bảo, Hoàng tinh chi. Sau giao dịch, trốn đi vòng vèo ba bốn ngày phòng bị theo dõi. Chập tối vào thạch động núi nghỉ ngơi. Quá nửa đêm nghe tiếng động ngoài — Lục sư huynh áo trắng đang dùng Hợp Hoan đan cưỡng bức Trần sư muội — chính tình nhân của hắn. Hàn Lập nhìn trộm, thấy Lục sư huynh lục được hộp gỗ đỏ bí ẩn trong đồ Trần sư muội."
    },
    {
      chuong: 166,
      tieuDe: "Ngoan Độc",
      tomTat: "Lục sư huynh tiết lộ động cơ tàn ác: cô gái họ Đổng hứa gả nếu hắn đoạn tuyệt Trần sư muội và song tu; nhờ bà cô tổ Hồng Phất sư thúc tổ thu nhận. Hộp gỗ đỏ chứa bình xanh với 2 viên Trúc Cơ đan thật. Hàn Lập động lòng tham, định tập kích. Nhưng phát hiện kịp Lục sư huynh (tầng 12 trung giai, phong linh căn) đã bày bẫy — giả vờ cởi đai lưng, thực ra đã phát hiện Hàn Lập nấp gần. Hàn Lập kịp vỗ phù Thủy tráo, chặn dây thừng xanh (Phong phược thuật) tập kích. Hai người lộ diện, đối mặt."
    },
    {
      chuong: 167,
      tieuDe: "Ác Đấu (Thượng)",
      tomTat: "Hàn Lập chủ động ra tay trước: phóng Tinh cương hoàn + cầu đen từ hồ lô + hỏa cầu liên hoàn. Lục sư huynh dùng Phong tường thuật từ phù vàng cấp cao — cơn lốc trắng cao vài chục trượng nuốt tất cả đòn tấn công. Hàn Lập biến sắc; hỏa cầu vòng qua cũng bị tường gió chặn và nuốt. Hàn Lập xây ba lớp phòng thủ đề phòng đợt phản công: Tinh cương cự hoàn lớp ngoài + Huyền thiết phi thiên thuẫn lớp giữa + lam hào quang Kim Cương phù lớp trong. Quyết định chờ thời cơ dùng Kim Quang Chuyên phù bảo."
    },
    {
      chuong: 168,
      tieuDe: "Ác Đấu (Trung)",
      tomTat: "Tinh cương cự hoàn vỡ trước Phong tường thuật. Lục sư huynh tung tuyệt chiêu Hóa giao: Thanh giao kỳ biến thành Thanh giao khổng lồ lao vào. Hàn Lập kích hoạt Kim Quang Chuyên phù bảo: hóa cự kiếm xám 2–3 trượng chặn đứng Thanh giao. Xác nhận pháp lực Hàn Lập tương đương tầng 11. Trận biến thành cuộc tiêu hao lâu dài — hai bên đều móc linh thạch bổ sung; Lục sư huynh kinh ngạc khi Hàn Lập dùng linh thạch bậc trung (chuẩn Trúc Cơ kỳ mới có)."
    },
    {
      chuong: 169,
      tieuDe: "Ác Đấu (Hạ)",
      tomTat: "Hàn Lập bí mật nhai linh thảo từ túi trữ vật duy trì pháp lực; chủ động triệt tiêu vòng bảo hộ lam dồn lực vào cự kiếm uy hiếp. Lục sư huynh không thể tạo đao phong mà không bị kiếm đe dọa — bất lực, pháp lực dần cạn. Liều chết thu Thanh giao kỳ ngưng đao phong lớn ném Hàn Lập. Hàn Lập điều cự kiếm chém thẳng đỉnh đầu Lục sư huynh, đồng thời thi triển La yên bộ tới cực hạn né đao phong. Đao phong mất khống chế cắt rãnh bùn rồi tan. Lục sư huynh bị chém bửa làm đôi — chết. Hàn Lập sống, pháp lực gần cạn."
    },
    {
      chuong: 170,
      tieuDe: "Chiến Lợi Phẩm Và Hương Diễm",
      tomTat: "Cự kiếm (Kim Quang Chuyên phù bảo) hóa tro ngay sau trận. Hàn Lập đau đan điền vì nuốt quá nhiều linh thảo gây phản phệ. Hồi tưởng bí quyết thắng: biết 'linh tuyến' — pháp thuật đã kích hoạt vẫn rút pháp lực liên tục; hắn dừng Thủy tráo thuật tiết kiệm lực, Lục sư huynh không biết nên vẫn duy trì Phong tường và dần kiệt sức. Thu Thanh giao kỳ và bình xanh chứa 2 viên Trúc Cơ đan thật cùng hộp đan dược từ túi Lục sư huynh. Đúng lúc đó Trần sư muội (Hợp Hoan đan phát tác, Phong phược thuật vừa hết) lao ra ôm Hàn Lập cuồng loạn. Hàn Lập dùng Định thần phù / Định Thần thuật khống chế, nhẹ nhàng đặt nàng xuống."
    }
  ]
};
