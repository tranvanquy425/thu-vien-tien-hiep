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
  updatedAt: "2026-06-10",
  count: 14,
  chars: [
    {
      id: "han-lap",
      name: "Hàn Lập",
      cn: "韩立",
      aliases: ["Anh ngố"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân — đang tu Vô danh khẩu quyết (tầng 2)",
      trangThai: "song",
      blurb: "Nhân vật chính. Xuất thân nông dân nghèo, trí tuệ vượt trội, tính cẩn thận và ẩn nhẫn. Vào Thất Huyền môn nhờ tam thúc tiến cử, được Mặc đại phu thu làm thân truyền đệ tử vì thể chất kỳ dị. Trong tay đang giữ một cái bình kim loại thần bí.",
      vaiTro: "Nhân vật chính",
      tinhCach: [
        { text: "Thành thật, nhẫn nhịn, không tranh chấp — lời dặn của cha từ nhỏ", chuong: 1 },
        { text: "Tinh ranh, kín đáo, hay quan sát và đánh giá người xung quanh", chuong: 3 },
        { text: "Kiên trì cực độ, dốc hết sức dù cơ thể đã kiệt lực", chuong: 4 },
        { text: "Trọng tình nghĩa, nhớ nhà, thương tiểu muội", chuong: 6 },
        { text: "Cẩn thận đề phòng, nhạy bén với những điều bất thường", chuong: 9 }
      ],
      tabs: {
        diem: [
          { text: "Con thứ tư trong gia đình nông dân bảy miệng ăn, 10 tuổi khi rời nhà", chuong: 1 },
          { text: "Bị cả làng gọi hỗn danh \"Anh ngố\" dù thực ra thông minh nhất làng", chuong: 1 },
          { text: "Tay lạnh như băng — Mặc đại phu nhận xét không giống tay người sống", chuong: 8 },
          { text: "Thể nội sinh ra lương khí (chân khí lạnh) khi tu Vô danh khẩu quyết — khác hẳn nhiệt lưu chân khí của đồng môn", chuong: 7 }
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
          { chuong: 10, importance: "major", text: "Nhặt được cái bình kim loại màu xanh biếc nặng bất thường trên đường mòn trong núi." }
        ],
        tuViMoc: [
          { chuong: 1, canhGioi: "Phàm nhân", text: "Chưa tu luyện, không có một điểm chân khí." },
          { chuong: 6, canhGioi: "Phàm nhân — sơ học Vô danh khẩu quyết", text: "Bắt đầu tu Vô danh khẩu quyết, sinh ra tia lương khí lúc có lúc không." },
          { chuong: 8, canhGioi: "Vô danh khẩu quyết — đang tu tầng 1", text: "Luồng năng lượng nội thể từ bằng sợi tóc tăng lên bằng sợi chỉ; vận hành được một chu thiên qua kỳ kinh bát mạch.", importance: "major" },
          { chuong: 9, canhGioi: "Vô danh khẩu quyết — tầng 2", text: "Luyện thành tầng 2 nhờ dược vật trợ lực; bị nội thương nhẹ khi trùng quan do kinh mạch phá liệt.", importance: "major" }
        ],
        nhanMach: [
          { ten: "Tam thúc (Lão Hàn béo)", tag: "ho-hang", quanHe: "Chú ruột, đệ tử ngoại môn Thất Huyền môn, người tiến cử Hàn Lập" },
          { ten: "Hàn phụ", tag: "cha-me", quanHe: "Cha ruột, nông dân" },
          { ten: "Hàn mẫu", tag: "cha-me", quanHe: "Mẹ ruột" },
          { ten: "Tiểu muội muội", tag: "ho-hang", quanHe: "Em gái út, người Hàn Lập yêu thương nhất" },
          { ten: "Mặc đại phu", tag: "su-mon", quanHe: "Sư phụ thân truyền tại Thất Huyền môn" },
          { ten: "Trương Thiết", tag: "ban-be", quanHe: "Bạn đồng môn thân nhất, cùng làm đệ tử Mặc đại phu" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Bình thần bí", loai: "pháp bảo (chưa xác định)", trangThai: "đang giữ", moTa: "Bình kim loại màu xanh biếc, hoa văn xanh lá, quai tinh xảo ở cổ, nặng bất thường, bên trong có chất lỏng sóng sánh, nắp chưa mở được.", nguon: ["c0010"] }
          ],
          danDuoc: [],
          congPhap: [
            { ten: "Vô danh khẩu quyết", loai: "công pháp tu thân", trangThai: "đang tu (tầng 2)", moTa: "Do Mặc đại phu truyền; sinh ra lương khí lạnh trong nội thể. Nghiêm cấm truyền ra ngoài.", nguon: ["c0006", "c0007", "c0008", "c0009"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      uuTien: 1,
      nguon: ["c0001", "c0002", "c0003", "c0004", "c0005", "c0006", "c0007", "c0008", "c0009", "c0010"]
    },
    {
      id: "mac-dai-phu",
      name: "Mặc đại phu",
      cn: "墨大夫",
      aliases: ["Mặc lão", "Mặc phu"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn — Cung Phụng đường", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Người tu luyện — mức độ thực sự chưa rõ",
      trangThai: "song",
      blurb: "Thầy thuốc bí ẩn của Thất Huyền môn, ở tại Thần thủ cốc. Cứu mạng Vương môn chủ nên được mời nhập môn. Bề ngoài già yếu ho khan nhưng được mọi sư huynh kính trọng hơn cả đường chủ. Mưu cầu trường sinh bất tử; đối đãi Hàn Lập vượt quá tình thầy trò bình thường.",
      vaiTro: "Sư phụ của Hàn Lập",
      tinhCach: [
        { text: "Lạnh lùng, ít nói, vô biểu cảm trong sinh hoạt hằng ngày", chuong: 6 },
        { text: "Khi phát hiện thể chất kỳ dị Hàn Lập, kích động đến mức điên cuồng, suýt mất kiểm soát", chuong: 8 },
        { text: "Nghiêm cấm tiết lộ Vô danh khẩu quyết — trịnh trọng bất thường với công pháp này", chuong: 6 }
      ],
      tabs: {
        diem: [
          { text: "Hơn sáu mươi tuổi, tóc bạc, da nhăn, ho khan liên tục — trông như sắp ngã", chuong: 5 },
          { text: "Vốn không phải đệ tử Thất Huyền môn gốc; được Vương môn chủ mời nhập môn sau khi cứu mạng lão", chuong: 6 },
          { text: "Có một thân công phu nhưng chưa từng để đệ tử thấy thân thủ", chuong: 6 },
          { text: "Ngày ngày ôm khư khư cuốn Trường sinh kinh — mưu cầu sống quá ngàn năm", chuong: 7 }
        ],
        kinhLich: [
          { chuong: 5, importance: "major", text: "Bước ra từ rừng rậm, thiếu nhân thủ, chỉ ngay vào hai ký danh đệ tử Hàn Lập và Trương Thiết bắt về Thần thủ cốc." },
          { chuong: 6, importance: "major", text: "Chính thức nhận Hàn Lập và Trương Thiết làm đệ tử ký danh; truyền Vô danh khẩu quyết với điều kiện tra khảo." },
          { chuong: 8, importance: "major", text: "Kiểm tra và phát hiện thể chất kỳ dị của Hàn Lập; thu làm thân truyền đệ tử. Đột ngột đổi ý nhận cả Trương Thiết với tâm pháp khác." },
          { chuong: 9, importance: "normal", text: "Cấp thạch thất luyện công riêng và dược vật trân quý cho Hàn Lập; truyền Tượng giáp công cho Trương Thiết." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Hàn Lập", tag: "su-mon", quanHe: "Thân truyền đệ tử" },
          { ten: "Trương Thiết", tag: "su-mon", quanHe: "Đệ tử (tâm pháp riêng)" },
          { ten: "Vương môn chủ", tag: "an-nhan", quanHe: "Người mời nhập môn sau khi được Mặc đại phu cứu mạng" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [],
          congPhap: [
            { ten: "Vô danh khẩu quyết", loai: "công pháp", trangThai: "đang truyền dạy", moTa: "Bộ khẩu quyết tu thân dưỡng tính Mặc đại phu xem trọng đặc biệt; truyền cho Hàn Lập.", nguon: ["c0006"] },
            { ten: "Trường sinh kinh", loai: "sách/công pháp", trangThai: "đang nghiên cứu", moTa: "Cuốn sách về tu thân dưỡng tính và kéo dài tuổi thọ; Mặc đại phu ôm khư khư.", nguon: ["c0007"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      uuTien: 2,
      nguon: ["c0005", "c0006", "c0007", "c0008", "c0009", "c0010"]
    },
    {
      id: "truong-thiet",
      name: "Trương Thiết",
      cn: "张铁",
      aliases: ["Trương ca"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Phàm nhân — đang tu Tượng giáp công (tầng 1 đỉnh phong)",
      trangThai: "song",
      blurb: "Bạn thân và đồng môn của Hàn Lập tại Thất Huyền môn. Xuất thân từ nhà hàng ăn, tính chu đáo tốt bụng. Không tu được Vô danh khẩu quyết nhưng được Mặc đại phu truyền Tượng giáp công — môn võ công luyện thể cực hiếm.",
      vaiTro: "Bạn đồng môn thân thiết của Hàn Lập",
      tinhCach: [
        { text: "Chu đáo, tốt bụng — mang bánh bao cho Hàn Lập khi nhớ ra bạn chưa ăn", chuong: 6 },
        { text: "Khổ tu không ngại đau đớn, ngồi dưới thác nước chịu trùng kích để luyện Tượng giáp công", chuong: 9 }
      ],
      tabs: {
        diem: [
          { text: "Nhà bán quán (gia đình làm hàng ăn) nên quen lấy đồ ăn", chuong: 6 },
          { text: "Khổ tu Vô danh khẩu quyết không kém Hàn Lập nhưng thể nội hoàn toàn không có phản ứng", chuong: 8 }
        ],
        kinhLich: [
          { chuong: 5, importance: "normal", text: "Cùng Hàn Lập được Mặc đại phu chọn làm ký danh đệ tử tại Thần thủ cốc." },
          { chuong: 6, importance: "normal", text: "Đưa bánh bao cho Hàn Lập; được Hàn Lập gọi là Trương ca." },
          { chuong: 8, importance: "major", text: "Qua khảo hạch nhờ Mặc đại phu đột ngột đổi ý — đề nghị tâm pháp khác phù hợp với hắn." },
          { chuong: 9, importance: "major", text: "Được truyền Tượng giáp công; chỉ sau hai tháng đã luyện tầng 1 tới đỉnh phong, đang ngồi dưới thác nước chuẩn bị đột phá tầng 2." }
        ],
        tuViMoc: [
          { chuong: 9, canhGioi: "Tượng giáp công — tầng 1 đỉnh phong", text: "Da thịt dày chắc hơn, lực khí bền bỉ hơn; đang ngồi dưới thác để chuẩn bị đột phá tầng 2.", importance: "major" }
        ],
        nhanMach: [
          { ten: "Hàn Lập", tag: "ban-be", quanHe: "Bạn thân đồng môn" },
          { ten: "Mặc đại phu", tag: "su-mon", quanHe: "Sư phụ truyền Tượng giáp công" }
        ],
        tuiDo: {
          phapBao: [],
          danDuoc: [],
          congPhap: [
            { ten: "Tượng giáp công", loai: "công pháp luyện thể", trangThai: "đang tu (tầng 1 đỉnh phong)", moTa: "Do Mặc đại phu truyền; môn võ công ngoại gia chín tầng cực hiếm.", nguon: ["c0009"] }
          ],
          linhThu: [],
          nguyenLieu: [],
          linhThao: [],
          khac: []
        }
      },
      nguon: ["c0005", "c0006", "c0007", "c0008", "c0009", "c0010"]
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
          { chuong: 5, importance: "major", text: "Được lam bào lão giả tiếp nhận vào Thất Tuyệt đường làm hạch tâm đệ tử." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Huyền phu nhân", tag: "ho-hang", quanHe: "Biểu tỷ (chị họ)" },
          { ten: "Mã phó môn chủ", tag: "dong-minh", quanHe: "Biểu tỷ phu (chồng chị họ), phó môn chủ Thất Huyền môn" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0003", "c0004", "c0005"]
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
      name: "Vương môn chủ",
      cn: null,
      aliases: [],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Thất Huyền môn", trangThai: "gan-bo" }
      ],
      canhGioiCaoNhat: "Không rõ — người tu luyện",
      trangThai: "song",
      blurb: "Môn chủ Thất Huyền môn, truyền nhân của Thất tuyệt thương nhân. Vài năm trước bị địch nhân tập kích trọng thương, được Mặc đại phu cứu sống và sau đó mời lão nhập môn.",
      vaiTro: "Môn chủ Thất Huyền môn",
      tinhCach: [],
      tabs: {
        diem: [
          { text: "Truyền nhân Thất tuyệt thương nhân, nắm giữ tuyệt kỹ thương pháp", chuong: 6 }
        ],
        kinhLich: [
          { chuong: 6, importance: "normal", text: "Xuất môn bị địch nhân tập kích trọng thương, được Mặc đại phu cứu; cảm kích mời lão nhập môn và cấp sơn cốc." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Mặc đại phu", tag: "an-nhan", quanHe: "Người cứu mạng, được mời vào môn làm Cung phụng" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0006"]
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
      canhGioiCaoNhat: "Không rõ",
      trangThai: "song",
      blurb: "Phó môn chủ Thất Huyền môn. Vợ là Huyền phu nhân — biểu tỷ Vũ Nham. Nhờ quan hệ này mà Vũ Nham vượt tuổi quy định vẫn được vào Thất Tuyệt đường.",
      vaiTro: "Phó môn chủ Thất Huyền môn",
      tinhCach: [],
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: 5, importance: "normal", text: "Ra tay tương trợ đưa Vũ Nham vào Thất Tuyệt đường dù tuổi vượt yêu cầu." }
        ],
        tuViMoc: [],
        nhanMach: [
          { ten: "Vũ Nham", tag: "ho-hang", quanHe: "Em họ bên vợ (Huyền phu nhân là biểu tỷ của Vũ Nham)" },
          { ten: "Huyền phu nhân", tag: "the-thiep", quanHe: "Vợ" }
        ],
        tuiDo: { phapBao: [], danDuoc: [], congPhap: [], linhThu: [], nguyenLieu: [], linhThao: [], khac: [] }
      },
      nguon: ["c0005"]
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
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].artifacts = {
  updatedAt: "2026-06-10",
  count: 2,
  artifacts: [
    {
      id: "binh-than-bi",
      name: "Bình thần bí",
      cn: null,
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Chưa xác định",
      soHuu: ["Hàn Lập"],
      trangThai: "đang giữ — chưa mở được nắp",
      blurb: "Cái bình kim loại màu xanh biếc Hàn Lập nhặt được dưới lớp lá khô trên đường mòn trong núi Thái Hà sơn. Nặng bất thường so với kích cỡ, bên trong có chất lỏng sóng sánh, nắp chưa vặn mở được.",
      detail: "Bình cỡ đầu nắm tay, chất liệu kim loại hiếm, màu xanh biếc; hoa văn trang trí tô màu xanh lá; có quai tinh xảo ở cổ bình. Trọng lượng nặng bất thường. Bên trong chứa chất lỏng sóng sánh; nắp vặn không mở được. Lai lịch và công năng chưa rõ.",
      nguon: ["c0010"]
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
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].techniques = {
  updatedAt: "2026-06-10",
  count: 5,
  techniques: [
    {
      id: "vo-danh-khau-quyet",
      name: "Vô danh khẩu quyết",
      cn: null,
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      phamCap: "Chưa xác định",
      hePhai: "Mặc đại phu (nguồn gốc không rõ)",
      soHuu: ["Hàn Lập", "Mặc đại phu"],
      blurb: "Bộ khẩu quyết tu thân dưỡng tính Mặc đại phu truyền cho Hàn Lập. Không giúp khắc địch chế thắng, chỉ cường thân kiện thể — nhưng Hàn Lập tu thì sinh ra lương khí lạnh bất thường, còn Trương Thiết tu hoàn toàn không có phản ứng.",
      detail: "Phân nhiều tầng. Khi tu, sinh ra luồng lương khí (chân khí lạnh) trong nội thể — khác hẳn nhiệt lưu chân khí nóng của Chính dương kinh. Năng lượng vận hành theo kỳ kinh bát mạch: đan điền → bách hội → tứ chi → đan điền. Mặc đại phu nghiêm cấm truyền ra ngoài; sẽ tra khảo sau nửa năm. Hàn Lập đã luyện thành tầng 2 (bị nội thương nhẹ khi trùng quan). Công pháp kén người tu — chỉ hợp với căn cốt đặc thù.",
      nguon: ["c0006", "c0007", "c0008", "c0009"]
    },
    {
      id: "tuong-giap-cong",
      name: "Tượng giáp công",
      cn: "象甲功",
      loai: "luyen-the",
      loaiLabel: "Luyện thể công pháp",
      phamCap: "Cao — 9 tầng, tầng 9 đao thương bất nhập",
      hePhai: "Không rõ (gần như thất truyền)",
      soHuu: ["Trương Thiết"],
      blurb: "Môn võ công luyện thể ngoại gia chín tầng, hiếm gặp gần như thất truyền. Mặc đại phu truyền cho Trương Thiết. Ba tầng đầu dễ luyện; từ tầng bốn trở đi thống khổ phi nhân khiến đa số bỏ cuộc. Đỉnh tầng chín như mặc bảo giáp — đao thương bất nhập.",
      detail: "Chín tầng. Ba tầng đầu luyện như công phu phổ thông. Tầng bốn trở đi thống khổ tăng dần — phần lớn người tu bỏ ở đây, tu vi ngừng trệ. Tầng năm, sáu đau khổ tăng gấp bội. Vượt tầng sáu thì về sau thoải mái, chỉ mỗi tháng vài ngày chịu đau sống đi chết lại. Tầng chín: thân như bảo giáp, đao thương bất nhập, thủy hỏa bất cận, chưởng quyền không đả thương được; sức lực như voi, tầng càng cao sức càng lớn, có thể bắt sống ác lang, xé xác hổ báo. Ngoài người sáng tạo (bẩm sinh không biết đau), chưa ai luyện tới tầng chín. Trương Thiết đã luyện tầng 1 tới đỉnh phong.",
      nguon: ["c0009", "c0010"]
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
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].map = {
  updatedAt: "2026-06-10",
  count: 13,
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
      blurb: "Đỉnh núi cao nhất và chính yếu của Thái Hà sơn, nơi đặt tổng đàn Thất Huyền môn. Con đường độc đạo dẫn lên, có mười ba trạm gác.",
      detail: "Chỉ có một con đường độc đạo dẫn lên, hiểm trở, thiết lập mười ba trạm gác cả minh cả ẩn. Đây là trung tâm quyền lực của Thất Huyền môn.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0003"]
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
      blurb: "Tiểu sơn cốc xanh biếc trong địa bàn Thất Huyền môn — nơi ở và làm việc của Mặc đại phu. Có dược vườn lớn bên trái, mấy căn nhà nhỏ bên phải, chỉ một con đường ra vào.",
      detail: "Vương môn chủ cấp cho Mặc đại phu làm trạch phủ. Trong cốc có dược vườn trồng nhiều dược thảo lạ. Trên vách núi trong cốc có gian thạch thất luyện công riêng dựng từ đá hoa cương Bích đào không — Mặc đại phu bức được trưởng lão cấp cho Hàn Lập độc dụng.",
      theLucLienQuan: ["Thất Huyền môn"],
      nguon: ["c0005", "c0009"]
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
      id: "nui-gan-thon",
      name: "Núi gần Sơn Biên tiểu thôn",
      cn: null,
      capDo: "khac",
      parentId: "son-bien-tieu-thon",
      blurb: "Ngọn núi dân làng lên đốn củi và hái hồng tương quả. Nơi Hàn Lập hay lên hái quả cho em gái.",
      detail: "Không có yếu tố tu tiên. Là không gian phàm trần của thôn làng.",
      theLucLienQuan: [],
      nguon: ["c0001"]
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].factions = {
  updatedAt: "2026-06-10",
  count: 4,
  factions: [
    {
      id: "that-huyen-mon",
      name: "Thất Huyền môn",
      cn: "七玄门",
      type: "mon-phai",
      typeLabel: "Môn phái võ lâm",
      diaBan: "Thái Hà sơn, Kính Châu; khống chế hơn chục tiểu trấn vùng Thanh Ngưu trấn",
      nhanVatChinh: ["Vương môn chủ", "Mã phó môn chủ", "Nhạc đường chủ", "Vương hộ pháp", "Mặc đại phu"],
      blurb: "Môn phái võ lâm từng đứng đầu Kính Châu, nay suy tàn về bậc tam lưu tiểu thế lực sau hơn trăm năm. Cứ 5 năm tổ chức khảo thí tuyển đệ tử. Đang xung đột với Dã Lang bang.",
      detail: "Thành lập hơn hai trăm năm trước bởi Thất Tuyệt thượng nhân (Thất Tuyệt thương nhân). Thời thịnh: đứng đầu Kính Châu hơn mười năm, thanh danh lan tới Sổ Châu. Sau khi Thất Tuyệt chân nhân bệnh chết, môn phái suy sụp, bị liên minh các môn phái đẩy khỏi Kính Châu thành, dời về Thái Hà sơn hơn trăm năm trước. Cơ cấu hiện tại: Môn chủ (Vương môn chủ) + ba phó môn chủ; Trưởng lão hội; Nội môn (Bách Đoán đường, Thất Tuyệt đường, Cung Phụng đường, Huyết Nhận đường); Ngoại môn (Phi Điểu đường, Tụ Bảo đường, Tứ Hải đường, Ngoại Nhận đường). Có hơn 3-4 ngàn đệ tử. Gần mười năm liên tục chiêu thu nội đệ tử do xung đột với Dã Lang bang.",
      nguon: ["c0001", "c0002", "c0003", "c0006"]
    },
    {
      id: "da-lang-bang",
      name: "Dã Lang bang",
      cn: null,
      type: "bang-phai",
      typeLabel: "Bang phái",
      diaBan: "Nhiều hương trấn nghèo ở Kính Châu",
      nhanVatChinh: [],
      blurb: "Bang phái gốc mã tặc, hung hăng tàn ác. Khống chế nhiều hương trấn hơn Thất Huyền môn nhưng địa bàn nghèo hơn. Thường khơi mào chiến tranh tranh địa bàn mầu mỡ của Thất Huyền môn.",
      detail: "Tiền thân là đám mã tặc đốt phá cướp bóc ở Kính Châu; bị quan binh đuổi giết, một bộ phận theo hàng quan phủ, phần còn lại lập thành Dã Lang bang. Là bang phái duy nhất đủ sức đối kháng Thất Huyền môn. Khi xung đột, Thất Huyền môn thường ở thế hạ phong.",
      nguon: ["c0002"]
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
    }
  ]
};

window.LIB_DATA["pham-nhan-tu-tien"].volumes = {
  updatedAt: "2026-06-10",
  volumes: [
    {
      value: "q01",
      label: "Quyển 1",
      range: "Ch.1 – 100",
      title: "Thất Huyền Môn",
      summary: "Hàn Lập từ cậu bé nông thôn bước vào con đường tu tiên khi được tiến cử vào Thất Huyền môn. Từ kỳ trắc thí gian khổ đến khi trở thành thân truyền đệ tử của Mặc đại phu bí ẩn — hành trình khởi đầu của một phàm nhân vươn lên nghịch thiên.",
      milestones: [
        "Ch.1: Hàn Lập rời Sơn Biên tiểu thôn theo tam thúc",
        "Ch.3-4: Trắc thí Luyện Cốt Nhai",
        "Ch.5: Trở thành ký danh đệ tử, được Mặc đại phu chọn vào Thần thủ cốc",
        "Ch.6: Nhận Vô danh khẩu quyết",
        "Ch.8: Trở thành thân truyền đệ tử của Mặc đại phu",
        "Ch.9: Đột phá tầng 2 Vô danh khẩu quyết",
        "Ch.10: Nhặt được bình thần bí"
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
    }
  ]
};
