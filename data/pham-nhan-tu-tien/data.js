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
  count: 41,
  chars: [
    {
      id: "han-lap",
      name: "Hàn Lập",
      cn: "韩立",
      aliases: ["Anh ngố"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Phàm nhân — Trường Xuân công tầng 8",
      trangThai: "song",
      blurb: "Nhân vật chính. Xuất thân nông dân nghèo, trí tuệ vượt trội, tính cẩn thận và ẩn nhẫn. Vào Thất Huyền môn nhờ tam thúc tiến cử, được Mặc đại phu thu làm thân truyền đệ tử vì thể chất kỳ dị. Sở hữu bình thần bí — vật bí ẩn hút linh khí và sinh ra Thần Bí Dịch có khả năng thôi sanh dược thảo. Thông thạo y thuật ngân châm, từng dùng Trừu Tủy Hoàn chia nhỏ làm dược dẫn. Tự phối chế các thánh dược hiếm có nhờ Thần Bí Dịch. Thực chất đang tu Trường Xuân công — tên thật của vô danh khẩu quyết Mặc đại phu truyền.",
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
        { text: "Thực dụng tới mức tàn nhẫn: nhân lúc hỗn loạn để mưu tính con đường thoát thân, coi sự hỗn loạn là cơ hội", chuong: 79 }
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
          { chuong: 98, importance: "major", tieuDe: "Rời Thất Huyền môn — tặng đan dược cho Lệ Phi Vũ và Vương Tuyệt Sở", text: "Để lại bình ngọc chứa Dưỡng Tinh Đan và thuốc khác cho Vương Tuyệt Sở; để lại thuốc kéo dài tuổi thọ cho Lệ Phi Vũ. Ghi thư từ biệt kèm dấu cười. Cùng Khúc Hồn ngồi xe ngựa rời đi hướng đông, Vân sí điểu đậu trên vai, không quay lại nhìn." },
          { chuong: 99, importance: "major", tieuDe: "Về thôn làng quan sát đám cưới em gái — rời hẳn", text: "Dùng linh thức quan sát từ xa cảnh đám cưới em gái trong thôn — cha mẹ đầu bạc lưng còng, tam thúc, Hàn Thiết. Em gái ngồi trên xe hoa rời đi. Quyết định vĩnh viễn không trở lại, tiếp tục con đường tu tiên độc lập. Đây là trang cuối Quyển 1." },
          { chuong: 100, importance: "normal", text: "Cùng Khúc Hồn đến Gia Nguyên Thành — cố hương Mặc đại phu — sau ba tháng đi thuyền. Bước xuống bến đò nhỏ hẻo lánh, giả dạng thiếu niên bình thường, Vân sí điểu đậu trên vai." }
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
          { chuong: 75, canhGioi: "Trường Xuân công — tầng 8", text: "Nhờ ngày ngày ăn linh dược, đột phá lên tầng 8. Pháp lực đã vượt qua nhục thân Dư Tử Đồng lúc còn sống, nhưng kỹ xảo chiến đấu và độ nắm vững pháp thuật thực chiến vẫn kém hơn.", importance: "major" }
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
          { ten: "Mã Vinh", tag: "dong-mon", quanHe: "Đệ tử Lý trưởng lão, người dẫn Hàn Lập tới cứu sư phụ" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Bình thần bí", loai: "pháp bảo (bất hoại, hút linh khí, thôi sanh dược thảo)", trangThai: "đang giữ — đeo trong túi da ở cổ", moTa: "Bình màu xanh nhạt, hoa văn lá xanh biếc sống động. Bất hoại trước vũ lực phàm nhân. Hút ánh sáng (quang điểm) ban đêm trời quang có trăng sao; khoảng 7 ngày/giọt tái sinh Thần Bí Dịch (lục dịch). Nhỏ trực tiếp một giọt nguyên chất lên một gốc dược thảo tăng khoảng 100 năm tuổi/dược tính. Lục dịch chỉ giữ được trong bình; rời bình một khắc là tan biến. Cũng là kịch độc: pha loãng cho thỏ uống thì thỏ nổ banh thân.", nguon: ["c0010", "c0012", "c0013", "c0014", "c0023", "c0024", "c0025", "c0026"] },
            { ten: "Ngọc Đái đoản kiếm", loai: "nhuyễn kiếm (trọng kim)", trangThai: "đang giữ", moTa: "Nhuyễn kiếm Hàn Lập đặt thợ rèn làm bằng trọng kim — thanh kiếm đắt nhất hắn có. Rộng chừng một ngón tay, dài tầm thước rưỡi, lưỡi kiếm mềm dẻo. Lần đầu dùng tại c60 để chém nguyên thần Dư Tử Đồng.", nguon: ["c0060"] },
            { ten: "Ống đồng đựng độc dịch", loai: "vũ khí ẩn (độc)", trangThai: "đang giữ", moTa: "Ống đồng nhỏ chứa chất lỏng đen quánh đặc mùi hủ xú; bóp ngón cái thì phun ra. Tổn thương nguyên thần/quang cầu khi bắn trúng. Dùng lần đầu tại c60 để làm suy yếu nguyên thần Dư Tử Đồng trước khi chém.", nguon: ["c0060"] }
          ],
          danDuoc: [
            { ten: "Trừu Tủy Hoàn", loai: "đan dược (từng dùng chia nhỏ)", trangThai: "đã dùng", moTa: "Từng chia một viên thành mười phần làm dược dẫn — cách dùng an toàn không gây hại.", nguon: ["c0020"] },
            { ten: "Thi Trùng Hoàn", loai: "đan dược (độc trùng noãn trong cơ thể)", trangThai: "đã được giải trừ — uống giải dược từ Mặc đại phu", moTa: "Trùng noãn điều chế bằng bí pháp của Mặc đại phu. Tiềm phục trong cơ thể một năm; có giải dược đặc chế thì tan rã, không thì phá vỏ ăn sạch nội tạng, chết trong ba ngày ba đêm thống khổ. Hàn Lập bị ép nuốt làm con tin. Thanh Linh Tán không giải được. Mặc đại phu giao giải dược khi Hàn Lập trở lại đúng hẹn bốn tháng sau.", nguon: ["c0031", "c0032", "c0044"] }
          ],
          congPhap: [
            { ten: "Trường Xuân công", loai: "công pháp tu thân", trangThai: "đang tu (tầng 8)", moTa: "Tên thật của vô danh khẩu quyết Mặc đại phu truyền. Yêu cầu người tu còn trẻ và có linh căn. Sinh ra lương khí lạnh (chân khí kỳ dị) trong nội thể. Tầng năm cho năng lực ghi nhớ võ học gặp qua không thể quên; tầng sáu cho năng lực phục hồi thân thể dị thường vượt xa người thường. Mỗi tầng tăng mạnh tinh thần và ngũ cảm; sinh ra năng lượng gọi là 'ngụy chân khí' vận hành trong kinh mạch, chỉ làm xúc giác bén nhạy, không uy lực như chân khí thật. Tầng 8 đạt được nhờ ngày ngày ăn linh dược — pháp lực vượt qua nhục thân Dư Tử Đồng lúc còn sống.", nguon: ["c0006", "c0007", "c0008", "c0009", "c0014", "c0015", "c0028", "c0030", "c0034", "c0043", "c0045", "c0075"] },
            { ten: "Nhuyễn cốt công", loai: "công pháp tu thân", trangThai: "đã luyện thành", moTa: "Một trong chín bí kỹ Hàn Lập chọn từ kiếm phổ để luyện trong khe núi ẩn tu. Khiến thân thể mềm dẻo như không có xương, có thể áp sát ép thân xuống mặt đất để ẩn mình hoàn toàn ngay trước mắt đối thủ.", nguon: ["c0042", "c0046"] },
            { ten: "Liễm tức công", loai: "công pháp tu thân", trangThai: "đã luyện tới hỏa hầu nhất định", moTa: "Công pháp ẩn giấu hơi thở và khí tức. Hàn Lập luyện tới hỏa hầu nhất định sau ~hai tháng trong khe núi; kết hợp với Nhuyễn cốt công và Ngụy nặc thuật để ẩn mình hoàn toàn.", nguon: ["c0042", "c0046"] },
            { ten: "Ngụy nặc thuật", loai: "thuật", trangThai: "đã luyện tới hỏa hầu nhất định", moTa: "Thuật ngụy trang ẩn mình. Hàn Lập luyện tới hỏa hầu nhất định; dùng ngụy trang thành cọc gỗ vàng kiểm nghiệm thành quả, bắt được chim lông xám bay vào khe núi mà không bị phát hiện.", nguon: ["c0042", "c0046"] },
            { ten: "La Yên bộ", loai: "than-phap", trangThai: "đã luyện thành — dung hợp với Ngự Phong Quyết", moTa: "Thân pháp di chuyển như làn khói xanh, quỷ mị lặng không tiếng động, biến hóa góc độ khó tưởng tượng. Hàn Lập luyện trong rừng gai nguy hiểm, giắt thiết linh (chuông sắt) ở cổ, hông, tay, chân rèn di chuyển không phát tiếng. Tốn thể lực lớn khi thi triển liên tục. Từ c75: dung hợp với Ngự Phong Quyết (thi triển Ngự Phong trước rồi vận La Yên bộ) — thân pháp xuất quỷ nhập thần, 'kỳ ảnh bất kiến kỳ nhân'.", nguon: ["c0043", "c0047", "c0048", "c0075"] },
            { ten: "Trát Nhãn kiếm pháp", loai: "bí kỹ kiếm pháp", trangThai: "đang nghiên cứu (ghi thuộc lòng)", moTa: "Kiếm kỹ ám sát lợi dụng ánh sáng và sai lầm thị giác. Không cần nội lực tinh thuần; đòi hỏi ngũ quan hơn người và thiên phú. Hàn Lập ghi tạc toàn bộ vào trí nhớ thay vì chép để giấu Mặc đại phu.", nguon: ["c0033", "c0034", "c0035", "c0036", "c0037", "c0039", "c0040"] },
            { ten: "Hoàng Long Đan", loai: "đan dược (thánh dược)", trangThai: "đã dùng một viên", moTa: "Thánh dược thoát thai hoán cốt, gia tăng công lực lớn. Hàn Lập tự phối chế bằng lục dịch thôi sanh dược tài; dùng một viên cùng Kim Tủy Hoàn giúp đột phá tầng tư.", nguon: ["c0027", "c0028"] },
            { ten: "Kim Tủy Hoàn", loai: "đan dược (thánh dược)", trangThai: "đã dùng một viên", moTa: "Thánh dược thoát thai hoán cốt, gia tăng công lực lớn. Hàn Lập tự phối chế; dùng cùng Hoàng Long Đan để đột phá tầng tư.", nguon: ["c0027", "c0028"] },
            { ten: "Thanh Linh Tán", loai: "đan dược (thánh dược)", trangThai: "đang lưu giữ (đã dùng chữa cho Lý trưởng lão)", moTa: "Thánh dược giải độc hiếm có, giải được trăm ngàn loại kịch độc. Hàn Lập tự phối chế bằng lục dịch thôi sanh dược tài. Dùng tại c71: hòa vào nước ấm cho Lý trưởng lão uống để giải hỗn hợp độc Dã Lang bang; không giải được độc còn tiềm phục sâu trong người Lý trưởng lão.", nguon: ["c0027", "c0071"] },
            { ten: "Dưỡng Tinh Đan", loai: "đan dược (thánh dược)", trangThai: "đang lưu giữ (đã dùng một số)", moTa: "Linh dược trị nội ngoại thương thần kỳ; ăn một viên lập tức cầm máu liền sẹo, ngày thứ hai tiêu trừ cả vết sẹo, không để lại dấu vết. Mạnh hơn nhiều thuốc trị thương thông thường. Hàn Lập dùng trong quá trình luyện La Yên bộ trong rừng gai. Tự phối chế bằng lục dịch thôi sanh dược tài.", nguon: ["c0027", "c0043"] },
            { ten: "Hỏa Đạn Thuật", loai: "pháp thuật công kích", trangThai: "đã cải tiến", moTa: "Pháp thuật công kích đầu tiên Hàn Lập luyện thành từ bí tịch Trường Xuân công. Phóng ra hỏa cầu đỏ rực, uy lực đủ nung chảy tinh cương và bốc hơi nước. Từ c75: Hàn Lập cải tiến — thay vì bắn hỏa cầu đi (quá chậm, cao thủ khinh công dễ né), chỉ thi triển nửa thuật, giữ hỏa cầu trên lòng bàn tay làm vũ khí cận chiến đoản binh lợi hại.", nguon: ["c0067", "c0068", "c0075"] },
            { ten: "Thiên Nhãn Thuật", loai: "pháp thuật phụ trợ", trangThai: "đã luyện thành", moTa: "Pháp thuật quan sát pháp lực, luyện rất dễ (thử là được). Vận lên mắt để xem đối phương có pháp lực hay không, pháp lực thâm hậu hay không, và có dùng pháp thuật phụ trợ trên người không. Pháp lực hiện ra dưới dạng bạch quang nhàn nhạt, dày đặc nhất ở đan điền. Ngoài ra còn gây uy hiếp tâm lý với người thường — họ cảm thấy bị nhìn thấu nội tâm.", nguon: ["c0067", "c0068", "c0096"] }
          ],
          linhThu: [
            { ten: "Vân sí điểu (chim lông vàng)", trangThai: "đang giữ — đậu trên vai", moTa: "Chim nhỏ màu vàng ban đầu là tai mắt của Mặc đại phu theo dõi Hàn Lập. Hàn Lập giữ lại sau khi Mặc đại phu chết. Từ c98 đậu trên vai Hàn Lập khi hắn rời Thất Huyền môn và tới Gia Nguyên Thành.", nguon: ["c0042", "c0098", "c0100"] }
          ],
          nguyenLieu: [],
          linhThao: [],
          khac: [
            { ten: "Kiếm phù (đạo phù lục vẽ tiểu kiếm màu xám)", loai: "phù lục tu tiên", trangThai: "đang giữ — cất trong ngực", moTa: "Đạo phù lục vẽ một thanh tiểu kiếm màu xám sống động, tự tản lưu quang nhàn nhạt, hàn khí bức người. Kích hoạt hóa thành luồng sáng có sát thương. Đoạt từ Chu Nho tại c91. Ba hạn chế: tiêu pháp lực khổng lồ (chỉ dùng ~1 khắc); hiệu quả tốt nhất trong 20 trượng; số lần/tuổi thọ hữu hạn.", nguon: ["c0091", "c0092", "c0095", "c0096"] },
            { ten: "Lệnh bài tam giác khắc 'Thăng Tiên' và 'Lệnh'", loai: "pháp khí bí ẩn", trangThai: "đang giữ", moTa: "Lệnh bài hình tam giác thu được từ tro tàn Chu Nho. Một mặt khắc 'Thăng Tiên', mặt kia khắc 'Lệnh'. Lai lịch và công dụng chưa rõ.", nguon: ["c0093"] },
            { ten: "Tần thị tộc phổ", loai: "sách gia phả", trangThai: "đang giữ", moTa: "Gia phả tộc Tần của Chu Nho (Tần Diệp Lĩnh), thu được từ tro tàn sau khi Chu Nho bị giết tại c93.", nguon: ["c0093"] }
          ]
        }
      },
      uuTien: 1,
      nguon: ["c0001", "c0002", "c0003", "c0004", "c0005", "c0006", "c0007", "c0008", "c0009", "c0010", "c0011", "c0012", "c0013", "c0014", "c0015", "c0016", "c0017", "c0018", "c0019", "c0020", "c0021", "c0022", "c0023", "c0024", "c0025", "c0026", "c0027", "c0028", "c0029", "c0030", "c0031", "c0032", "c0033", "c0034", "c0035", "c0036", "c0037", "c0038", "c0039", "c0040", "c0041", "c0042", "c0043", "c0044", "c0045", "c0046", "c0047", "c0048", "c0049", "c0050", "c0051", "c0052", "c0053", "c0054", "c0055", "c0056", "c0057", "c0058", "c0059", "c0060", "c0061", "c0062", "c0063", "c0064", "c0065", "c0066", "c0067", "c0068", "c0069", "c0070", "c0071", "c0072", "c0073", "c0074", "c0075", "c0076", "c0077", "c0078", "c0079", "c0080", "c0081", "c0082", "c0083", "c0084", "c0085", "c0086", "c0087", "c0088", "c0089", "c0090", "c0091", "c0092", "c0093", "c0094", "c0095", "c0096", "c0097", "c0098", "c0099", "c0100"]
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
        { ten: "Tứ bình bang", trangThai: "de-tu" }
      ],
      canhGioiCaoNhat: "Không rõ — thường nhân/võ lâm",
      trangThai: "song",
      blurb: "Tiểu đầu mục bang Tứ bình bang tại bến đò hẻo lánh của Gia Nguyên Thành, Lam Châu. Mắt lé mi lệch, bộ dạng rách rưới, giỏi nịnh nọt nên leo được lên chức tiểu đầu mục. Dưới tay khoảng chục cửu vạn. Ăn chơi trác táng, gia tài gần cạn. Thù ghét Hắc hùng (xếp top 3 người hận nhất). Hai bang Tứ bình bang và Thiết chưởng hội tuy thù nhau nhưng vẫn phải liên minh chống Độc long bang.",
      vaiTro: "Tiểu đầu mục Tứ bình bang, bến đò Gia Nguyên Thành",
      tinhCach: [
        { text: "Giỏi nịnh nọt nắm lòng người — nhờ đó leo lên được chức tiểu đầu mục dù bộ dạng rách rưới", chuong: 100 }
      ],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 100, importance: "normal", text: "Xuất hiện tại bến đò hẻo lánh Gia Nguyên Thành, cùng đám thủ hạ chửi bới đám Hắc hùng — Thiết chưởng hội; thành thói quen mỗi sáng. Chứng kiến thuyền nhỏ chở Hàn Lập và Khúc Hồn cập bến." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hắc hùng", tag: "doi-thu", quanHe: "Kẻ địch tại bến đò, tiểu đầu mục Thiết chưởng hội" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0100"]
    },
    {
      id: "hac-hung",
      name: "Hắc hùng",
      cn: null,
      aliases: ["Hắc đại hán", "Hắc gia"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thiết chưởng hội", trangThai: "de-tu" }
      ],
      canhGioiCaoNhat: "Không rõ — thường nhân/võ lâm",
      trangThai: "song",
      blurb: "Tiểu đầu mục bang Thiết chưởng hội tại bến đò hẻo lánh của Gia Nguyên Thành, Lam Châu. Cự hán vai to lưng rộng, tên thật mọi người đã quên. Địa vị tương đương Tôn nhị cẩu. Quản nhóm cửu vạn cùng bến đò với phe Tứ bình bang. Đối đầu với Tôn nhị cẩu hằng ngày nhưng hai bang vẫn phải liên minh chống Độc long bang.",
      vaiTro: "Tiểu đầu mục Thiết chưởng hội, bến đò Gia Nguyên Thành",
      tinhCach: [
        { text: "Đối đầu thù ghét Tôn nhị cẩu, bị chế nhạo là 'gấu đen ngu ngốc nhất'; kiên nhẫn không tự hạ mình ăn chửi", chuong: 100 }
      ],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 100, importance: "normal", text: "Xuất hiện tại bến đò hẻo lánh Gia Nguyên Thành, đứng phía đối diện Tôn nhị cẩu — hai nhóm cửu vạn thường chửi bới nhau mỗi sáng. Chứng kiến thuyền nhỏ chở Hàn Lập và Khúc Hồn cập bến." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Tôn nhị cẩu", tag: "doi-thu", quanHe: "Kẻ địch tại bến đò, tiểu đầu mục Tứ bình bang" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0100"]
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].artifacts = {
  updatedAt: "2026-06-11",
  count: 31,
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
      soHuu: ["Mặc đại phu"],
      trangThai: "đang theo dõi Hàn Lập theo lệnh Mặc đại phu",
      blurb: "Con chim nhỏ lông màu vàng thông linh, tai mắt giám thị của Mặc đại phu. Bay nhanh hơn mũi tên bắn từ cung cứng. Mặc đại phu dùng hiệu lệnh tiếng còi dài để triệu hồi; chim ăn 'Hoàng lật hoàn' làm thức ăn khoái khẩu. Có linh tính như người, dùng ánh mắt mỉa mai nhìn thứ gì đó xứng đáng bị khinh.",
      detail: "Lông màu vàng, vô danh trong giới thông thường. Không bị lừa bởi các thủ thuật dụ dỗ, bẫy rập của Hàn Lập — hắn từng thử mọi cách nhưng đều thất bại. Bay rất nhanh, linh hoạt. Nhiệm vụ: theo dõi Hàn Lập trong thời gian lão bế quan, hễ Hàn Lập rời khỏi sơn mạch thì lập tức bay về báo. Hàn Lập biết đây là tai mắt của Mặc đại phu nhưng không nỡ ra tay vì yêu thích nó.",
      nguon: ["c0041", "c0042"]
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
      soHuu: ["Mặc đại phu (trước)", "Hàn Lập (hiện tại)"],
      trangThai: "đang giữ — Hàn Lập",
      blurb: "Chiếc chuông đồng nhỏ với vết máu trên thành chuông. Hàn Lập tìm thấy trong di vật Mặc đại phu. Dùng kết hợp với máu của chủ nhân để khống chế thi nhân — Hàn Lập dùng nó cùng máu của mình để thu phục Khúc Hồn (cự hán thiết nô) làm thuộc hạ phục tùng tuyệt đối.",
      detail: "Chuông đồng nhỏ, trên thành có vết máu cũ. Nguyên lý: chủ nhân nhỏ máu vào chuông, rung chuông để thiết lập khế ước điều khiển thi nhân — thi nhân trở thành thuộc hạ phục tùng tuyệt đối. Hàn Lập dùng lần đầu ở c63 để khống chế Khúc Hồn. Lai lịch và nguồn gốc đầy đủ chưa rõ.",
      nguon: ["c0063"]
    },
    {
      id: "noan-duong-bao-ngoc",
      name: "Noãn dương bảo ngọc",
      cn: null,
      category: "dan-duoc",
      categoryLabel: "Đan dược / Ngọc bảo",
      phamCap: "Chưa xác định",
      soHuu: ["Mặc đại phu (gửi cho vợ làm hồi môn)"],
      trangThai: "ở nhà vợ Mặc đại phu — Hàn Lập chưa lấy được",
      blurb: "Thứ duy nhất giải được kỳ độc thi trung hoàn. Mặc đại phu đã gửi cho vợ làm hồi môn trước khi chết. Theo di thư, Hàn Lập phải tới nhà Mặc đại phu an bài thân nhân mới đổi được noãn dương bảo ngọc.",
      detail: "Được tiết lộ trong di thư Mặc đại phu (c62): là thứ duy nhất giải được kỳ độc thi trung hoàn mà lão đã hạ cho Hàn Lập. Lão gửi viên ngọc này cho vợ làm hồi môn; đặt giao kèo — Hàn Lập tới nhà lão, lo chu toàn cho thân nhân (gả con gái, nửa gia sản), đổi lấy noãn dương bảo ngọc. Tên chính thức và phẩm cấp chưa được mô tả chi tiết hơn.",
      nguon: ["c0062"]
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
      name: "Kiếm phù",
      cn: null,
      category: "phap-khi",
      categoryLabel: "Pháp khí — phù lục",
      phamCap: "Tu tiên (cấp chưa xác định)",
      soHuu: ["Hàn Lập (đoạt từ Chu Nho @c0091–c0092)"],
      trangThai: "đang giữ",
      blurb: "Đạo phù lục vẽ một thanh tiểu kiếm màu xám khắc sống động; tự tản lưu quang nhàn nhạt, hàn khí bức người dù không thúc pháp lực. Khi kích phát hóa luồng sáng lờ mờ có sát thương. Hàn Lập dùng Khống Vật Thuật đoạt ngay giữa trận chiến, cất vào ngực chờ nghiên cứu thêm.",
      detail: "Hình dạng khi thu hồi: một đạo phù lục (lá bùa) vẽ thanh tiểu kiếm màu xám, khắc rất sống động. Dù không thúc pháp lực, tiểu kiếm trên bùa vẫn tự tản lưu quang nhàn nhạt và toả hàn khí bức người — cho thấy nội tại linh lực. Khi kích phát bởi Chu Nho trước đó: hóa luồng sáng mờ mờ, lượn trong không trung và bay nhanh như điện đánh người. Hàn Lập xác nhận ba hạn chế sau khi luyện tập: (1) tiêu hao pháp lực khổng lồ, chỉ dùng được khoảng một khắc; (2) hiệu quả tốt nhất trong 20 trượng, từ 20–30 trượng bắt đầu chậm, ngoài 30 trượng không dùng được; (3) số lần sử dụng/tuổi thọ hữu hạn.",
      nguon: ["c0091", "c0092", "c0093", "c0094", "c0095", "c0096"]
    },
    {
      id: "thang-tien-lenh-bai",
      name: "Thăng Tiên lệnh bài",
      cn: null,
      category: "khac",
      categoryLabel: "Vật phẩm bí ẩn",
      phamCap: "Không rõ",
      soHuu: ["Hàn Lập (đoạt từ Chu Nho @c0093)"],
      trangThai: "đang giữ",
      blurb: "Lệnh bài hình tam giác khắc hai chữ 'Thăng Tiên' và một chữ 'Lệnh'. Thu từ tro tàn Chu Nho sau khi Hàn Lập kết liễu hắn. Ý nghĩa và công năng chưa được tiết lộ trong nguyên tác.",
      detail: "Hình dạng: lệnh bài hình tam giác, khắc chữ 'Thăng Tiên' và 'Lệnh'. Thu được từ đống tro tàn Chu Nho. Ý nghĩa, xuất xứ và công dụng chưa được nguyên tác giải thích.",
      nguon: ["c0093"]
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
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].techniques = {
  updatedAt: "2026-06-11",
  count: 25,
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
      blurb: "Tên thật của 'vô danh khẩu quyết' Mặc đại phu truyền cho Hàn Lập. Yêu cầu người tu còn trẻ và có linh căn. Sinh ra lương khí lạnh (chân khí kỳ dị) bất thường. Đến tầng tư có thể dùng Trường Xuân khí kích thích bí huyệt người khác — là chìa khóa để Mặc đại phu phá giải tà khí xâm cốt của mình.",
      detail: "Phân nhiều tầng. Mặc đại phu tìm được từ kỳ thư thần bí; truyền cho Hàn Lập với tên 'vô danh khẩu quyết', nghiêm cấm tiết lộ. Khi tu, sinh ra luồng lương khí (chân khí lạnh) trong nội thể — khác hẳn nhiệt lưu chân khí nóng của Chính dương kinh. Năng lượng vận hành theo kỳ kinh bát mạch. Yêu cầu người tu còn trẻ và phải có 'linh căn' — Mặc đại phu đã thử mấy trăm đồng tử đều thất bại trước khi chọn được Hàn Lập. Đạt tầng 3: cảm quan mẫn duệ cực độ. Đạt tầng 4: ngũ cảm tăng vọt mang tính chất (thấy sợi tơ nhện, nghe tiếng giun đào đất, cảm nhận vạn vật phạm vi mười trượng), điều khiển được cỗ chân khí kỳ dị, có thể che giấu trước người khác. Công pháp kén người tu — chỉ hợp với linh căn đặc thù.",
      nguon: ["c0006", "c0007", "c0008", "c0009", "c0014", "c0015", "c0028", "c0030"]
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
      nguon: ["c0067", "c0068", "c0088", "c0096"]
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
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].map = {
  updatedAt: "2026-06-11",
  count: 23,
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
      blurb: "Một trong 13 châu của Việt quốc, nằm phía nam; diện tích đứng thứ 8 nhưng sung túc thứ 2 toàn quốc (chỉ sau Tân Châu). Đất phì nhiêu, nhiều thuỷ đạo, là vựa lương thực số một Việt quốc. Cố hương của Mặc đại phu. Châu nơi Mặc Cư Nhân từng xây dựng cơ nghiệp và hiển hách trong võ lâm.",
      detail: "Lam Châu là châu phủ lớn thứ tám trong 13 châu Việt quốc về diện tích nhưng sung túc thứ hai (sau Tân Châu). Nằm ở phía nam, địa thế đất phì nhiêu, nhiều thuỷ đạo — là vựa lương thực số một toàn quốc. Gia Nguyên Thành nằm ở trung bộ Lam Châu, là đệ nhất đại thành của châu nhờ Hương Lỗ đại vận hà và nhiều đường thuỷ bộ giao nhau. Địa bàn hoạt động cũ của Mặc Cư Nhân — hắc bạch lưỡng đạo đều nể sợ; sau khi bị thân tín ám toán, ông buộc phải bỏ cơ nghiệp và biệt tăm.",
      theLucLienQuan: [],
      nguon: ["c0030", "c0100"]
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
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].factions = {
  updatedAt: "2026-06-11",
  count: 11,
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
      diaBan: "Không rõ",
      nhanVatChinh: ["Chu Nho (Tần Diệp Lĩnh — đệ tử tự nhận)"],
      blurb: "Gia tộc tu tiên mà Chu Nho (tên thật Tần Diệp Lĩnh) tự nhận là đệ tử. Lai lịch và quy mô chưa được tiết lộ trong nguyên tác đến chương 100.",
      detail: "Được nhắc qua lời khai của Chu Nho tại c92: hắn tự xưng là 'Tần Diệp Lĩnh đệ tử của Diệp gia', ra tay giúp Dã Lang bang vì quen biết bang chủ. Diệp gia là gia tộc tu tiên nhưng không có thêm thông tin về vị trí, thực lực hay nhân vật cụ thể nào khác.",
      nguon: ["c0092", "c0093"]
    },
    {
      id: "tu-binh-bang",
      name: "Tứ bình bang",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái",
      diaBan: "Bến đò Gia Nguyên Thành, Lam Châu",
      nhanVatChinh: ["Tôn nhị cẩu"],
      blurb: "Bang phái có mặt ở bến đò hẻo lánh Gia Nguyên Thành. Tôn nhị cẩu là tiểu đầu mục cai quản nhóm cửu vạn. Liên minh với Thiết chưởng hội để đối kháng Độc long bang mạnh hơn, dù nội bộ hai bang vẫn thù ghét nhau.",
      detail: "Tại bến đò hẻo lánh Gia Nguyên Thành, Tứ bình bang và Thiết chưởng hội cùng chia sẻ địa bàn — hai nhóm cửu vạn đứng hai phía, thường chửi bới nhau mỗi sáng. Tuy thù nhau nhưng hai bang buộc phải duy trì liên minh để đối kháng Độc long bang — bang mạnh hơn đang hoạt động ở vùng này.",
      nguon: ["c0100"]
    },
    {
      id: "thiet-chuong-hoi",
      name: "Thiết chưởng hội",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái",
      diaBan: "Bến đò Gia Nguyên Thành, Lam Châu",
      nhanVatChinh: ["Hắc hùng"],
      blurb: "Bang phái có mặt ở bến đò hẻo lánh Gia Nguyên Thành. Hắc hùng là tiểu đầu mục cai quản nhóm cửu vạn đối diện phe Tứ bình bang. Liên minh với Tứ bình bang chống Độc long bang dù hai bên thù ghét nhau.",
      detail: "Không phải 'Thiết thương hội' (bang phái tại Kính Châu từ c79) — đây là thế lực riêng tại Gia Nguyên Thành, Lam Châu. Cùng chia sẻ bến đò với Tứ bình bang; hai bang duy trì liên minh chống Độc long bang dù hằng ngày vẫn cãi nhau.",
      nguon: ["c0100"]
    },
    {
      id: "doc-long-bang",
      name: "Độc long bang",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái",
      diaBan: "Gia Nguyên Thành, Lam Châu",
      nhanVatChinh: [],
      blurb: "Bang mạnh hoạt động ở Gia Nguyên Thành — lý do Tứ bình bang và Thiết chưởng hội phải duy trì liên minh dù thù nhau. Chưa xuất hiện trực tiếp đến chương 100.",
      detail: "Được nhắc như thế lực mạnh hơn cả Tứ bình bang lẫn Thiết chưởng hội tại vùng Gia Nguyên Thành. Sự tồn tại của Độc long bang là lý do khiến hai bang nhỏ hơn phải hợp tác dù bình thường thù địch nhau. Chưa có nhân vật hay sự kiện trực tiếp được mô tả đến chương 100.",
      nguon: ["c0100"]
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
      range: "Ch.100 – ...",
      title: "Gia Nguyên Thành",
      summary: "Hàn Lập và Khúc Hồn đặt chân tới Gia Nguyên Thành — cố hương của Mặc đại phu — sau ba tháng đi thuyền. Bắt đầu giai đoạn mới trong địa bàn Lam Châu, Việt quốc.",
      milestones: [
        "Ch.100: Hàn Lập tới Gia Nguyên Thành, Lam Châu — mở đầu Quyển 2"
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
    }
  ]
};
