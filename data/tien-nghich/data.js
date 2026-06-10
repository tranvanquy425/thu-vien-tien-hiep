/* DỮ LIỆU THẬT — Tiên Nghịch. Dùng cho CẢ xem local (file://) lẫn deploy.
   Nguồn: Fandom Vũ Trụ Tiên Nghịch (Hệ thống tu luyện + Tiên Di Tộc), Chiến xác nhận.
   Bộ não: web/data/<slug>/data.js là nguồn dữ liệu thực thể của web (thay cho .json + demo). */
window.LIB_DATA = window.LIB_DATA || {};
window.LIB_DATA["tien-nghich"] = window.LIB_DATA["tien-nghich"] || {};

window.LIB_DATA["tien-nghich"].realms = {
  updatedAt: "2026-06-09", chot: true,
  ghiChu: "Tu Đạo là hệ tu luyện CHÍNH của Tiên Nghịch (Vương Lâm đi con đường này), xuyên suốt cả truyện. Tu Tiên và Cổ Tộc là hệ song song, có bảng đối chiếu tương đương. Nguồn: Fandom Vũ Trụ Tiên Nghịch — đã xác nhận khớp truyện gốc.",
  heThong: [
    { id: "tu-dao", ten: "Tu Đạo", chinh: true,
      moTa: "Hệ tu luyện chính, xuyên suốt cả truyện. 4 bước: dựng căn cơ → chữ Niết → chứng đạo bổn nguyên → Đạp Thiên.",
      detail: "Tu đạo là hấp thụ linh khí khắp thiên địa, qua quá trình vận chuyển và ngưng tụ đặc biệt giúp thoát khỏi giới hạn phàm nhân. Bước 1 thuộc chữ 'tu'; Bước 2 là quá độ giữa 'tu' và 'đạo'; Bước 3 chính là chữ 'đạo' (nhưng không phải thiên đạo); Bước 4 siêu thoát. Đây là lộ trình của nhân vật chính Vương Lâm." },
    { id: "tu-tien", ten: "Tu Tiên",
      moTa: "Hệ của tiên nhân giới nội — không tu ý cảnh, dựa vào tiên khí/đan dược/tiên bảo.",
      detail: "Tiên nhân giới nội KHÔNG tu luyện ý cảnh, không cảm ngộ đạo, mà dựa vào thiên tài địa bảo, tiên khí và đan dược để thăng cấp. Mạnh nhờ sở hữu tiên thuật và tiên bảo — đủ sức cùng Cổ Thần tộc phân cao thấp.",
      capBac: [
        { ten: "Tiên Sĩ", tuongDuong: "Anh Biến", moTa: "Tẩy phàm thể, hình thành tiên thể để vận tiên lực — thành tiên nhân chân chính." },
        { ten: "Thượng Tiên", tuongDuong: "Vấn Đỉnh + Âm Hư/Dương Thực", moTa: "Tương đương Vấn Đỉnh và Âm Hư – Dương Thực nhị ý." },
        { ten: "Thiên Tiên", tuongDuong: "Khuy Niết", moTa: "Chuyển tiên lực thành tiên nguyên, dung vào tiên thuật làm sức mạnh tăng vô số." },
        { ten: "Tiên Vương", tuongDuong: "Tịnh Niết", moTa: "Tương đương Tịnh Niết." },
        { ten: "Tiên Quân", tuongDuong: "Toái Niết + Thiên Nhân Suy Kiếp", moTa: "Địa vị rất cao ở tiên giới; mạo phạm là phạm tiên điều, dấy hoạ diệt hồn." },
        { ten: "Tiên Đế", tuongDuong: "Bước 3 (Tứ Không)", moTa: "Khi vào bước thứ ba có thể tự xưng Tiên Đế — cấp bậc đứng đầu tiên giới." }
      ] },
    { id: "co-toc", ten: "Cổ Tộc (Cổ Thần · Cổ Yêu · Cổ Ma)",
      moTa: "Hệ của Cổ Tộc, đo bằng 'sao' (Tinh): Nhất Tinh → Cửu Tinh → 27 sao. Dùng nhiều về cuối truyện.",
      detail: "Hệ tu luyện của Cổ Tộc (gồm Cổ Thần, Cổ Yêu, Cổ Ma), đo cấp bậc bằng 'sao' (Tinh). Đối chiếu sao ↔ Tu Đạo xem ở Bảng đối chiếu. Đầu truyện thiên về Tu Đạo, hệ Cổ Thần được dùng nhiều về cuối truyện." },
    { id: "tien-di-toc", ten: "Tiên Di Tộc / Tiên Tuyển Tộc",
      moTa: "Chủng tộc phụ (nhánh của Phù Văn Tộc) — tu bằng phù văn, đếm cấp theo số lá trên mi tâm.",
      detail: "Tiên Di Tộc thực chất là một nhánh của Phù Văn Tộc đến từ giới ngoại, bị phong ấn dưới lòng đất Tiên Di Chi Địa (Chu Tước Tinh) sau đại chiến với Chu Tước Quốc (Diệp Vô Ưu cùng chín lão quái Vấn Đỉnh hy sinh để bày đại trận phong ấn). Họ KHÔNG tu ý cảnh, mà hấp thu sức mạnh yêu thú rồi khắc phù văn lên thân — càng nhiều phù văn càng mạnh, đồng thời nắm một phần năng lực yêu thú. Hai hướng: Thuật Chú Sư (chú thuật, đánh xa) và Chiến Thú Sĩ (luyện thể, cận chiến). Cấp bậc nhận biết qua SỐ LÁ trên mi tâm (1–13 lá), có thể lên tới bước thứ hai (tác giả chưa khai thác rõ). Thánh địa Tiên Di Chi Địa có 19 tầng, vào càng sâu yêu cầu tu vi càng cao.",
      link: "https://vu-tru-tien-nghich.fandom.com/vi/wiki/Ti%C3%AAn_Di_T%E1%BB%99c",
      capBac: [
        { ten: "1 lá", tuongDuong: "Ngưng Khí, Trúc Cơ" },
        { ten: "2 lá", tuongDuong: "Kết Đan" },
        { ten: "3 lá", tuongDuong: "Nguyên Anh sơ kỳ" },
        { ten: "4 lá", tuongDuong: "Nguyên Anh trung – hậu kỳ" },
        { ten: "5 lá", tuongDuong: "Hoá Thần sơ kỳ" },
        { ten: "6 lá", tuongDuong: "Hoá Thần trung – hậu kỳ" },
        { ten: "7 lá", tuongDuong: "Anh Biến sơ kỳ" },
        { ten: "8 lá", tuongDuong: "Anh Biến trung – hậu kỳ" },
        { ten: "9 lá", tuongDuong: "Vấn Đỉnh sơ kỳ" },
        { ten: "10 lá", tuongDuong: "Vấn Đỉnh trung kỳ" },
        { ten: "11 lá", tuongDuong: "Vấn Đỉnh hậu kỳ" },
        { ten: "12 lá", tuongDuong: "Âm Hư cảnh" },
        { ten: "13 lá", tuongDuong: "Dương Thực cảnh" }
      ] }
  ],
  realms: [
    { id: "ngung-khi", name: "Ngưng Khí", aliases: ["Linh Động Kỳ", "Luyện Khí"], he: "tu-dao", buoc: "Bước 1", capBac: 1,
      blurb: "Hấp thu linh khí trời đất vào thân, cải tạo thể chất.", dacThu: "Phân 15 tầng.",
      detail: "Còn gọi Linh Động Kỳ, phân từ tầng 1 đến tầng 15. Hấp thụ linh khí của trời đất vào thân thể, cải tạo thể chất cho thích hợp việc tu luyện; đã có thể dùng linh khí của bản thân để thi triển một vài thuật pháp.",
      tuongDuong: { tuTien: "", coToc: "Nhất Tinh (1 sao)" }, nguon: [] },
    { id: "truc-co", name: "Trúc Cơ", he: "tu-dao", buoc: "Bước 1", capBac: 2,
      blurb: "Thanh tẩy toàn thân, cải tạo thể chất lần hai — lột xác thành tu sĩ thật.", dacThu: "Sơ → Trung → Hậu kỳ.",
      detail: "Dùng linh lực thanh tẩy toàn thân, cải tạo thể chất lần thứ hai cho thích hợp tu luyện — lột xác trở thành một tu sĩ thật sự.",
      tuongDuong: { tuTien: "", coToc: "Nhất Tinh (1 sao)" }, nguon: [] },
    { id: "ket-dan", name: "Kết Đan", he: "tu-dao", buoc: "Bước 1", capBac: 3,
      blurb: "Ngưng tụ một viên kim đan ở đan điền; có thể bước đi trên hư không.", dacThu: "Sơ → Trung → Hậu → Đỉnh.",
      detail: "Nén linh lực từ dạng khí thành dạng chất lỏng, rồi tiếp tục nén và ngưng tụ thành một viên kim đan ở đan điền. Từ cảnh giới này tu sĩ có thể bước đi trên hư không.",
      tuongDuong: { tuTien: "", coToc: "Nhất Tinh (1 sao)" }, nguon: [] },
    { id: "nguyen-anh", name: "Nguyên Anh", he: "tu-dao", buoc: "Bước 1", capBac: 4,
      blurb: "Kim đan vỡ, hình thành nguyên anh; có thể đoạt xá, thuấn di.", dacThu: "Sơ → Trung → Hậu → Đỉnh.",
      detail: "Hấp thu linh khí đến mức cực hạn, kim đan vỡ vụn và hình thành nguyên anh nhỏ (như đứa trẻ) trong thân. Cho nguyên anh xuất khiếu để đoạt xá (chiếm thân xác khác); đồng thời có thể thuấn di — dịch chuyển tức thời qua vô số khoảng cách.",
      tuongDuong: { tuTien: "", coToc: "Nhị Tinh (2 sao)" }, nguon: [] },
    { id: "hoa-than", name: "Hoá Thần", he: "tu-dao", buoc: "Bước 1", capBac: 5,
      blurb: "Nuôi nguyên anh thành nguyên thần nhờ hợp nhất ý cảnh và thần thức.", dacThu: "Bắt buộc lĩnh ngộ ý cảnh.",
      detail: "Nuôi nguyên anh đến khi trưởng thành; tu sĩ phải sở hữu 'ý cảnh', khi ý cảnh hợp nhất với thần thức thì nguyên anh ngưng kết thành nguyên thần (người lớn) — 'nguyên thần bất diệt, nhục thân vĩnh tồn'. Ý cảnh là lĩnh vực của vạn vật: tự cảm ngộ (đi xa hơn trên đạo) hoặc mượn của người khác (kẻ yếu kém). Tăng tiểu cảnh giới rất khó vì phải tiến cả tu vi lẫn ý cảnh. Có thể tùy ý điều động lực lượng thiên địa, dung ý cảnh vào thần thông để chiến đấu.",
      tuongDuong: { tuTien: "", coToc: "Nhị Tinh (2 sao)" }, nguon: [] },
    { id: "anh-bien", name: "Anh Biến", he: "tu-dao", buoc: "Bước 1", capBac: 6,
      blurb: "Tẩy phàm thể, hình thành tiên thể, bắt đầu vận tiên lực — tương đương Tiên Sĩ.", dacThu: "Bắt đầu vận tiên lực.",
      detail: "Biến ý cảnh thành thực chất, thân thể thay da đổi thịt, xóa bỏ phàm thể và hình thành tiên thể để vận tiên lực (cần hấp thụ rất nhiều tiên ngọc). Nguyên thần cũng thực chất hóa, trở thành 'tráng niên' thực sự. Điểm mạnh là sở hữu tiên lực — dùng tiên lực giúp thuật pháp tăng cường vô số; khi bị thương phải dùng tiên khí để chữa trị. Tương đương Tiên Sĩ bên hệ Tu Tiên.",
      tuongDuong: { tuTien: "Tiên Sĩ", coToc: "Tam Tinh (3 sao)" }, nguon: [] },
    { id: "van-dinh", name: "Vấn Đỉnh", he: "tu-dao", buoc: "Bước 1", capBac: 7,
      blurb: "Đỉnh Nhất Bộ, một ngưỡng lớn về thọ nguyên; hai con đường Thuận và Nghịch Thiên.", dacThu: "Gắn chủ đề 'Nghịch Thiên'.",
      detail: "Muốn đạt Vấn Đỉnh trước phải 'vấn đạo': hấp thụ đủ tiên khí rồi làm ý cảnh viên mãn. Hai con đường — Thuận: quên hết ký ức, xóa sạch tình cảm để ý cảnh viên mãn; Nghịch Thiên: giữ lại tình cảm, đạo tâm kiên định lấy chấp niệm làm chính mà viên mãn ý cảnh — chọn đường này lập tức dẫn tới thiên kiếp, không độ qua thì hình thần câu diệt. Sau đó lấy tiên lực làm tiên hỏa luyện ý cảnh thành 'Vấn Đỉnh chi tinh', hóa thành trái tim của nguyên thần. Tu sĩ Vấn Đỉnh nắm một ít nguyên khí (mầm để vào Bước 2), chiến đấu làm đại địa sụp đổ, thần thức khuếch tán cả tinh cầu, có thể di chuyển qua các tinh cầu. Là đỉnh Bước 1 và một ngưỡng: vượt thì thọ nguyên tăng vô hạn, không vượt thì cạn thọ.",
      tuongDuong: { tuTien: "Thượng Tiên", coToc: "Tam Tinh (3 sao)" }, nguon: [] },
    { id: "am-hu", name: "Âm Hư", he: "tu-dao", buoc: "Quá Độ", capBac: 8,
      blurb: "Quá độ 'Âm Hư – Dương Thực', biến hóa ý cảnh, bắt đầu 'Hoá Nguyên'.", dacThu: "",
      detail: "Âm Hư – Dương Thực nhị cảnh là giai đoạn chuyển hóa rất quan trọng giữa Bước 1 và Bước 2: biến hóa ý cảnh, hấp thụ vô số nguyên lực để nguyên thần thay đổi, thay thế tiên lực thành nguyên lực — gọi là 'Hoá Nguyên'. (Âm Hư ứng với ý Hư.)",
      tuongDuong: { tuTien: "Thượng Tiên", coToc: "Tứ Tinh (4 sao)" }, nguon: [] },
    { id: "duong-thuc", name: "Dương Thực", he: "tu-dao", buoc: "Quá Độ", capBac: 9,
      blurb: "Quá độ 'Âm Hư – Dương Thực' — hoàn tất 'Hoá Nguyên', sẵn sàng vào Nhị Bộ.", dacThu: "",
      detail: "Cùng cặp với Âm Hư trong nhị cảnh chuyển hóa: hoàn tất quá trình 'Hoá Nguyên' (thay tiên lực thành nguyên lực), nguyên thần biến đổi để bước vào Bước 2. (Dương Thực ứng với ý Thực.)",
      tuongDuong: { tuTien: "Thượng Tiên", coToc: "Tứ Tinh (4 sao)" }, nguon: [] },
    { id: "khuy-niet", name: "Khuy Niết", he: "tu-dao", buoc: "Bước 2", capBac: 10,
      blurb: "Chính thức vào Nhị Bộ — chạm rìa quy tắc, hấp thu thiên địa nguyên lực.", dacThu: "Ngộ 'Súc Địa Thành Thốn'.",
      detail: "Chân chính bước vào Bước 2, hoàn thành lần thay da đổi thịt đầu tiên, dễ dàng hấp thu thiên địa nguyên lực. Chạm tới rìa của quy tắc, tiếp xúc quy tắc mờ mịt; nguyên lực biến hóa theo mức độ hiểu quy tắc, nguyên khí nơi nào cũng có thể hóa thành sinh cơ tràn ngập toàn thân. Có thể cảm ngộ 'Súc Địa Thành Thốn' để di chuyển — xác suất ngộ được dựa trên cảm ứng nguyên lực, không phải thiên tư.",
      tuongDuong: { tuTien: "Thiên Tiên", coToc: "Ngũ Tinh (5 sao)" }, nguon: [] },
    { id: "tinh-niet", name: "Tịnh Niết", he: "tu-dao", buoc: "Bước 2", capBac: 11,
      blurb: "Nắm giữ quy tắc; hậu kỳ dung hợp quy tắc với ý cảnh.", dacThu: "Mở ra không gian chứa đồ.",
      detail: "Muốn đạt Tịnh Niết phải hoàn toàn nắm giữ một hoặc nhiều loại quy tắc; mạnh yếu gắn chặt với quy tắc. Thân thể được thiên địa nguyên lực cải tạo để minh ngộ biến hóa của quy tắc; hậu kỳ là sự dung hợp giữa quy tắc và ý cảnh. Có thể hấp thu, ngưng tụ nguyên lực thiên địa để chiến đấu, đồng thời mở ra không gian chứa đựng đồ vật.",
      tuongDuong: { tuTien: "Tiên Vương", coToc: "Ngũ Tinh (5 sao)" }, nguon: [] },
    { id: "toai-niet", name: "Toái Niết", he: "tu-dao", buoc: "Bước 2", capBac: 12,
      blurb: "Dung hợp hoàn toàn ý cảnh và quy tắc; hình thành bổn nguyên lực.", dacThu: "Tự sáng tạo thần thông riêng.",
      detail: "Dung hợp hoàn toàn ý cảnh và quy tắc, thi triển quy tắc dễ như trở bàn tay, tùy ý khống chế thiên địa nguyên lực; có thể nén nguyên lực thành lực lượng quy tắc. Có tư cách tự sáng tạo thần thông chỉ thuộc về bản thân. Thọ nguyên dài đằng đẵng. Khi quy tắc đạt mức nhất định sẽ hình thành 'bổn nguyên lực' — mấu chốt để đột phá Bước 2.",
      tuongDuong: { tuTien: "Tiên Quân", coToc: "Ngũ Tinh (5 sao)" }, nguon: [] },
    { id: "thien-nhan-suy-kiep", name: "Thiên Nhân Suy Kiếp", he: "tu-dao", buoc: "Quá Độ", capBac: 13,
      blurb: "(Phá Không Ngũ Chỉ) Kiếp nạn vô biên bắt buộc của Toái Niết để khai Không Môn.", dacThu: "5 lần suy kiếp.",
      detail: "Thiên đạo không cho sinh linh nào thọ ngang thiên địa; Thiên Nhân Suy Kiếp (Phá Không Ngũ Chỉ) là kiếp nạn vô biên mà tu sĩ Toái Niết bắt buộc trải qua. Mỗi lần qua, tu vi và thực lực tăng mạnh vô số lần, nhưng cực khó — thất bại là hình thần câu diệt. Qua 5 lần suy kiếp, phối hợp hương hỏa và cường hóa bổn nguyên để khai Không Môn vào Bước 3 (hoặc vượt phá Không Môn trước khi suy kiếp giáng để bỏ qua). Hai cách vượt Không Môn: tu hương hỏa, hoặc đại thành cùng lúc nhiều đạo bổn nguyên (đường khó hơn nhưng mạnh hơn nhiều) — Vương Lâm chọn con đường thứ hai.",
      tuongDuong: { tuTien: "Tiên Quân", coToc: "Lục Tinh (6 sao)" }, nguon: [] },
    { id: "khong-niet", name: "Không Niết", he: "tu-dao", buoc: "Bước 3", capBac: 14,
      blurb: "Vượt phá Không Môn, bổn nguyên chứng đạo — bước vào hàng đại năng.", dacThu: "'Súc Thốn Thành Không'; tạo hương hỏa giới.",
      detail: "Hoàn toàn vượt phá Không Môn, dùng bổn nguyên chứng đạo, ngưng tụ bổn nguyên để thăng hoa; thân thể bành trướng vô hạn, không còn ngăn cách với thiên địa. Lần lột xác thứ hai — từ nay phân định ở NGỘ TÍNH, không còn ở tư chất. Có thể tạo 'hương hỏa giới' (thế giới chứa môn đồ hương hỏa) sinh ra hương hỏa lực, chuyển thành niết bàn lực; có tư cách sáng tạo & thi triển đạo thuật. Mỗi bước co rút không gian dưới chân ('Súc Thốn Thành Không'), một chỉ chọc thủng thiên địa, có thể khôi phục vạn vật về quỹ tích ban đầu.",
      tuongDuong: { tuTien: "Tiên Đế", coToc: "Thất Tinh (7 sao)" }, nguon: [] },
    { id: "khong-linh", name: "Không Linh", he: "tu-dao", buoc: "Bước 3", capBac: 15,
      blurb: "Linh hồn thăng hoa thành linh thần; mỗi đại năng sánh ngang một thiên địa.", dacThu: "Tự sinh 'linh lực' riêng.",
      detail: "Linh hồn thăng hoa thành vật linh động, dung hợp nguyên thần thành 'linh thần'; hương hỏa giới dung hợp thành căn cơ thiên địa, môn đồ thành dân chúng sinh ra 'linh lực' riêng cho Không Linh. Phối linh lực thi triển thần thông đạo thuật uy lực kinh thiên động địa. Mỗi đại năng Không Linh sánh ngang một thiên địa — thân thể là một thiên địa riêng. Nếu tu hương hỏa, có thể ép người bái lạy làm nô lệ cung hương hỏa, chiến đấu hút đối thủ vào hương hỏa giới.",
      tuongDuong: { tuTien: "Tiên Đế", coToc: "Bát Tinh (8 sao)" }, nguon: [] },
    { id: "khong-huyen", name: "Không Huyền", he: "tu-dao", buoc: "Bước 3", capBac: 16,
      blurb: "Cần một đạo hư bổn nguyên; lời nói mang quy tắc khiến vạn vật bất động.", dacThu: "Đại viên mãn dẫn động 9 lần Huyền Kiếp.",
      detail: "Cực khó: cần sở hữu một đạo HƯ bổn nguyên (cướp đoạt, tự minh ngộ, hoặc minh ngộ trước khi phá Không Môn). Một cách đặc biệt: huyễn hóa sông núi luân hồi trong hương hỏa giới cho môn đồ tu, khi họ sinh bổn nguyên thì cắn nuốt — dần đại thành hư bổn nguyên. Hiểu đạo lý thiên địa, nguyên thần được bổn nguyên lực lột xác; lời nói mang theo quy tắc, khiến vạn vật bất động. Đại viên mãn hình thành 'lực lượng không', dẫn động chín lần Huyền Kiếp.",
      tuongDuong: { tuTien: "Tiên Đế", coToc: "Cửu Tinh (9 sao)" }, nguon: [] },
    { id: "huyen-kiep", name: "Huyền Kiếp", he: "tu-dao", buoc: "Bước 3", capBac: 17,
      blurb: "Chín lần sinh tử giữa Không Huyền và Không Kiếp; qua đủ 9 lần được xưng 'Tôn'.", dacThu: "Ngoại / nội / hồn kiếp (mỗi loại 3 lần).",
      detail: "Giữa Không Huyền và Không Kiếp tồn tại chín lần sinh tử — vừa là kiếp vừa là cơ duyên; thất bại là hình thần câu diệt. Ba kiếp đầu = ngoại kiếp, ba giữa = nội kiếp, ba cuối = hồn kiếp. Qua liên tục 3 lần nguyên thần tăng gấp đôi; 6 lần tăng gấp đôi nữa; đủ 9 lần tăng lên gấp mấy lần. Qua 8 lần là Huyền Kiếp đỉnh phong; vượt hoàn toàn 9 lần thì được xưng 'Tôn', đạt Không Kiếp.",
      tuongDuong: { tuTien: "", coToc: "Dung luyện tam mạch" }, nguon: [] },
    { id: "khong-kiep", name: "Không Kiếp", he: "tu-dao", buoc: "Bước 3", capBac: 18,
      blurb: "Xưng 'Đại Tôn'; phân Đại Tôn → Kim Tôn → Thiên Tôn → Dược Thiên Tôn.", dacThu: "Uy áp khiến thiên địa biến sắc.",
      detail: "Sau Huyền Kiếp, thân thể tạo vòng xoáy chuyển động, khí tức kinh thiên — xưng ĐẠI TÔN, chỉ cần phát uy áp đã khiến thiên địa biến sắc. Phân tầng: Kim Tôn (hậu kỳ đỉnh phong — cường giả một phương Tiên Cương Đại Lục, lão tổ Cửu Tông Thập Tam Môn), Thiên Tôn (đại viên mãn — dung 2 đến 99 đạo thần thông vào một kích), Dược Thiên Tôn (gần vượt đại viên mãn — dung 100 thần thông, thấu hiểu đại đạo).",
      tuongDuong: { tuTien: "Đại Tôn · Kim Tôn · Thiên Tôn · Dược Thiên Tôn", coToc: "Nhị Thập Thất Tinh (27 sao)" }, nguon: [] },
    { id: "dai-thien-ton", name: "Đại Thiên Tôn", he: "tu-dao", buoc: "Bước 3", capBac: 19,
      blurb: "Đỉnh phong Bước 3; ngưng tụ 'Đại Thiên Tôn chi dương', có khả năng chuyển thế.", dacThu: "Sở hữu tín thuật & tín bảo.",
      detail: "Đỉnh phong của Bước 3. Trước tiên phải ngưng tụ 'Đại Thiên Tôn chi dương' (vào Thái Cổ Thần Cảnh nhận truyền thừa, hoặc tự ngưng tụ — cực khó). Khi thành, có thể đưa 'mặt trời của bản thân' lên trời Tiên Cương Đại Lục. Sở hữu tín thuật và tín bảo vượt mọi pháp bảo khác; tín niệm cường đại biến hư ảo thành thực chất, biến vật không tồn tại thành tồn tại; mượn dùng quy tắc thiên địa. Có khả năng CHUYỂN THẾ để cảm ngộ thiên đạo.",
      tuongDuong: { tuTien: "", coToc: "Độ qua Tam Tổn Thất Kiếp" }, nguon: [] },
    { id: "dap-thien-kieu", name: "Đạp Thiên Cửu Kiều", aliases: ["Bán bộ Đạp Thiên"], he: "tu-dao", buoc: "Quá Độ", capBac: 20,
      blurb: "Bán bộ Đạp Thiên: vượt 9 cây cầu Đạp Thiên + ngộ chân ngã luân hồi.", dacThu: "9 kiều, mỗi kiều một chứng ngộ.",
      detail: "Bước vào Đạp Thiên Kiều là 'bán bộ Đạp Thiên'; mỗi kiều qua, chiến lực và tu vi tăng mạnh, qua đủ chín kiều và ngộ ra chân ngã luân hồi thì đạt Đạp Thiên Cảnh (Bước 4). Có thể khống chế quy tắc thiên địa (chiến đấu làm quy tắc tan rã), cảm nhận vận chuyển thiên địa và quỹ tích thời gian. Chín kiều: Đệ Nhất (dung quy tắc vào thần thức) · Đệ Nhị (Đạp Thiên Nhãn) · Đệ Tam (Vấn Đạo Tâm) · Đệ Tứ (Chứng Đạo) · Đệ Ngũ (Súc Thế) · Đệ Lục–Thất–Bát (Thăng Thiên) · Đệ Cửu (Đạp Thiên Đạo).",
      tuongDuong: { tuTien: "", coToc: "" }, nguon: [] },
    { id: "dap-thien", name: "Đạp Thiên Cảnh", he: "tu-dao", buoc: "Bước 4", capBac: 21,
      blurb: "Đỉnh cao Nghịch Trần Giới — đứng trên thiên đạo, thân bất diệt.", dacThu: "Thao túng toàn bộ quy tắc thiên địa.",
      detail: "Vượt qua hoàn toàn Đạp Thiên Kiều, hiểu được chân ngã trong luân hồi, có tư cách vượt qua và đứng TRÊN thiên đạo, không còn bị thiên đạo ràng buộc. Là đỉnh phong của Nghịch Trần Giới: thao túng toàn bộ quy tắc thiên địa, một bước khiến khung trời sụp đổ, thọ nguyên bất tận, thân thể mãi mãi bất diệt. 'Đạp Thiên Lộ, Không Diệt Đạo, Bất Hủ Hồn, Chúng Sinh Bái!'",
      tuongDuong: { tuTien: "", coToc: "" }, nguon: [] }
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
};

window.LIB_DATA["tien-nghich"].characters = {
  updatedAt: "2026-06-10",
  count: 47,
  chars: [
    {
      id: "vuong-lam",
      name: "Vương Lâm",
      cn: "",
      aliases: ["Thiết Trụ"],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc", "Hằng Nhạc Phái", "Thi Âm Tông (đại đệ tử thứ hai Ngô Vũ, danh nghĩa @c0081)"],
      canhGioiCaoNhat: "Trúc Cơ trung kỳ",
      trangThai: "song",
      vaiTro: "✦ Nhân vật chính",
      tinhCach: "Ý chí kiên cường, nhẫn nhịn và tâm cơ sâu; bề ngoài bình thản, bên trong quyết liệt — bị sỉ nhục không cãi, âm thầm ghi thù; bị loại tư chất vẫn leo thềm đá đến huyết phao mà không bỏ cuộc; ghi nhớ diện mạo mỗi kẻ từng hạ nhục để sau trả thù.",
      blurb: "Nhân vật chính. Thiếu niên 15 tuổi xuất thân bình dân, ý chí kiên định, quyết vào tu tiên dù bị phán tư chất kém. Nhờ ý chí và một viên Thạch Châu bí ẩn nhặt được trong huyệt động, hắn trở thành ký danh đệ tử Hằng Nhạc Phái. Giấu kín Thạch Châu, lặng lẽ chịu đựng lao dịch nặng trong phái.",
      tabs: {
        diem: [
          { text: "Ý chí phi thường — bị phán tư chất kém vẫn không bỏ cuộc, leo thềm đá hai ngày, chân nổi huyết phao đau như kim châm nhưng quyết không dừng.", chuong: "@c0004" },
          { text: "Tâm cơ và nhẫn nhịn — bị Vương Trác sỉ nhục tại tiệc vẫn im lặng, chỉ liếc sâu một cái rồi âm thầm hạ quyết tâm.", chuong: "@c0001" },
          { text: "Ghi thù tất báo — khi bị sỉ nhục trước cả họ, trầm tĩnh nhìn tất cả, nhớ kỹ diện mạo mỗi kẻ; sau khi vào phái tiếp tục ghi mặt các ký danh đệ tử châm chọc để sau trả thù.", chuong: "@c0006" },
          { text: "Thận trọng và kiên nhẫn — giấu kín Thạch Châu ngay từ ngày đầu nhập môn ('hoài bích có tội'), không cho bất kỳ ai biết.", chuong: "@c0010" },
          { text: "Hiếu kỳ và khát vọng tu tiên — lần đầu thấy tiên nhân dù kinh hãi mặt tái nhưng trong lòng càng mong đợi được tu tiên.", chuong: "@c0002" },
          { text: "Mưu trí và bản lĩnh diễn vai — đấu trí thành công với Tôn Đại Trụ, khai man nguồn gốc hồ lô, bảo toàn bí mật Thạch Châu trước trưởng lão có pháp bảo và thần thức.", chuong: "@c0016" },
          { text: "Chịu đựng và tầm nhìn dài hạn — dù bị Tôn Đại Trụ âm mưu kìm hãm, bị đám ký danh đệ tử chế giễu, VL nhẫn nhịn, thầm ghi thù, quyết tâm đợi đủ mạnh mới trả đũa.", chuong: "@c0018" }
        ],
        kinhLich: [
          {
            chuong: "@c0001",
            importance: "normal",
            text: "Được Tứ thúc nhường danh ngạch đề cử Hằng Nhạc Phái; bị anh họ Vương Trác công khai sỉ nhục tại tiệc ('ngươi không bằng miếng thức ăn gia súc'). Âm thầm hạ quyết tâm 'vô luận thế nào cũng phải được tuyển chọn'. Rời thôn theo Tứ thúc lần đầu tiên."
          },
          {
            chuong: "@c0002",
            importance: "minor",
            text: "Lần đầu thấy tiên nhân — kinh hãi mặt tái, nhưng lòng càng khát vọng tu tiên. Cùng Vương Trác, Vương Hạo được bạch y thanh niên độn kiếm quang đưa lên sơn phong Hằng Nhạc Phái dự trắc thí."
          },
          {
            chuong: "@c0003",
            importance: "minor",
            text: "Bị phán 'Không hợp cách' ở vòng trắc thí linh căn. Không gục ngã — thở sâu, ánh mắt kiên định, bước lên thềm đá bắt đầu vòng hai: trắc thí nghị lực (leo thềm đá dốc trong 3 ngày)."
          },
          {
            chuong: "@c0004",
            importance: "normal",
            text: "Trượt toàn bộ hai vòng cuối: leo thềm đá gần ba ngày đến huyết nhục lẫn lộn, hôn mê ngã xuống cách đỉnh chưa đầy mười trượng — trượt nghị lực. Vào Kiếm Linh Các tiến xa nhất nhóm (tới cách cổng ba trượng) nhưng bị lực đạo đẩy bật ra — trượt Kiếm Linh. Trượt cả ba hạng trắc thí."
          },
          {
            chuong: "@c0005",
            importance: "minor",
            text: "Trở về giữa tiệc chúc mừng của Vương gia — không được Hằng Nhạc Phái thu nhận. Quỳ dập đầu xin lỗi cha mẹ; mẹ an ủi đừng làm chuyện dại dột. Tinh thần suy sụp nặng nề."
          },
          {
            chuong: "@c0006",
            importance: "normal",
            text: "Toàn bộ thân thích trở mặt sỉ nhục, đòi lại lễ vật. Vương Lâm trầm tĩnh nhìn tất cả, ghi kỹ diện mạo mỗi kẻ — khoảnh khắc 'khắc cốt ghi thù' then chốt. Tứ thúc bênh vực và dàn xếp kết thúc."
          },
          {
            chuong: "@c0007",
            importance: "major",
            text: "Tuyên thề trước cả họ sẽ bước vào tiên môn. Đêm khuya để lại lưu thư, bỏ nhà lần thứ hai — băng thâm sơn hướng đông một mình. Bị hổ trắng dồn, nhảy vách núi; giữa chừng rơi được lực hút kỳ quái kéo vào huyệt động phong nhãn thiên nhiên. Bị thương cánh tay phải, mắc kẹt."
          },
          {
            chuong: "@c0008",
            importance: "major",
            text: "Mắc kẹt trong huyệt động, ăn thịt sống phi điểu để sống sót. Moi được Thạch Châu màu xám khắc năm đóa mây trắng từ xác chim. Phát hiện châu tiết hạt sương dưới nắng — sương trị lành hoàn toàn cánh tay sưng tấy. Kết luận đây là bảo bối; đây là pháp bảo đầu tiên hắn sở hữu."
          },
          {
            chuong: "@c0009",
            importance: "normal",
            text: "Tụt vách xuống chân núi bằng dây bện từ quần áo — dây đứt giữa chừng, đùi phải đâm trúng đá nhọn lộ xương; tự sơ cứu bằng sương thạch châu. Được cha và đệ tử họ Trương cứu, đưa về Hằng Nhạc Phái; cha mẹ hiểu lầm hắn tự sát, hắn không giải thích."
          },
          {
            chuong: "@c0010",
            importance: "major",
            text: "Chính thức nhập môn Hằng Nhạc Phái với thân phận ký danh đệ tử — thực nhờ Tứ thúc dâng khối tinh thiết bất phàm cho trung niên nhân tiến cử. Nhận áo xám, thẻ bài, phòng phía Bắc. Bị đệ tử áo vàng 'con chồn' giao lao dịch nặng: gánh đủ mười vại nước khổng lồ mỗi ngày (không đủ 7 ngày liên tiếp sẽ bị trục xuất). Quyết giấu kín Thạch Châu. Kết bạn với bạn cùng phòng Trương Hổ."
          },
          {
            chuong: "@c0011",
            importance: "normal",
            text: "Nhận lao dịch gánh 10 vại nước. Bí mật dùng nước suối ngâm Thạch Châu hồi phục cơ bắp sau mỗi buổi gánh; thể chất cường hóa dần, rút thời gian hoàn thành từ sáu ngày xuống còn ba ngày. Giả vẻ mệt mỏi để không bị ai nghi ngờ."
          },
          {
            chuong: "@c0012",
            importance: "normal",
            text: "Bị toàn bộ ký danh đệ tử khinh thường châm chọc; nhẫn nhịn, ghi nhớ diện mạo từng kẻ để sau trả thù. Nghiên cứu Thạch Châu: xác định hạt sương sáng sớm kết trên châu cho hiệu quả tốt nhất; phát hiện châu tự hấp thu hơn phân nửa hạt sương. Cầu kiến Tôn trưởng lão, được cấp kỳ hạn 3 ngày và Thiên Lý Phù (dùng 2 lần) về dự thọ cha."
          },
          {
            chuong: "@c0013",
            importance: "minor",
            text: "Dán tiên phù tăng tốc, một đêm ra khỏi núi rừng; ghé thị trấn mua lễ vật, về thôn dự tiệc thọ cha. Thân thích trước khinh nay nịnh hót — VL thầm hừ, không cảm động."
          },
          {
            chuong: "@c0014",
            importance: "major",
            text: "Đêm mưa giông: Thạch Châu hút toàn bộ nước mưa cả phòng và cả nước trên người Trương Hổ — Trương Hổ suýt đông chết (toàn thân phủ sương, tím tái). Số đám mây trên châu tăng 5 → 6 → 7. Lần đầu nói dối cha mẹ về cuộc sống môn phái, rồi rời nhà trở về Hằng Nhạc Phái."
          },
          {
            chuong: "@c0015",
            importance: "normal",
            text: "Trương Hổ tỉnh, nghi 'hạn quỷ', đồng ý giữ kín. Lưu sư huynh đột ngột đảo ngược thái độ: xu nịnh, giảm việc xuống một vại/ngày, tặng tiên phù — vì biết Tôn trưởng lão đã đích thân tìm VL. Được Tôn trưởng lão đích thân triệu kiến (bất thường), lo lộ bí mật châu."
          },
          {
            chuong: "@c0016",
            importance: "major",
            text: "Tôn trưởng lão dùng pháp bảo Thất Thải Tường Vân + thần thức lục soát phòng, tịch thu hồ lô nước linh khí. Thu VL làm đệ tử chính thức (nội môn) để hợp thức hóa việc chiếm hồ lô. VL đấu trí khai man nguồn gốc hồ lô, bảo toàn bí mật Thạch Châu."
          },
          {
            chuong: "@c0017",
            importance: "major",
            text: "Chính thức thành đệ tử nội môn Tôn Đại Trụ (tên thật Tôn trưởng lão, lần đầu lộ). Nhận túi trữ vật + y phục hồng sắc + công pháp Ngưng Khí tam thiên. Tu luyện cả đêm thất bại trong phòng; sáng ra thành công cảm nhận linh khí nhập thể (như côn trùng bò) ở dược viên — bước đầu vào tu tiên."
          },
          {
            chuong: "@c0018",
            importance: "normal",
            text: "Mặc y phục hồng sắc nội môn, bị ký danh đệ tử ghen ghét chế giễu. Thổ nạp ở sơn tuyền cửa Đông suốt ngày. Cố ý dắt mũi Tôn Đại Trụ giám thị cả ngày để bảo vệ bí mật hồ lô — qua mặt thành công."
          },
          {
            chuong: "@c0019",
            importance: "normal",
            text: "Tôn Đại Trụ ép uống bát thuốc đen, đích thân truyền khí trợ ngưng linh khí — đều thất bại do 'trọc khí' trong người VL hóa giải. Tôn Đại Trụ kết luận sai hồ lô tầm thường rồi từ bỏ, trục xuất VL khỏi chính viện. VL nhận một khối hạ phẩm linh thạch."
          },
          {
            chuong: "@c0020",
            importance: "major",
            text: "Lấy lại Thạch Châu + ba hồ lô sương sớm, cất vào túi trữ vật. Châu tăng từ bảy lên chín đám mây (9/10); VL phán đoán mức cuối là mười. (Tôn Đại Trụ ở Ngưng Khí tầng 5 — không phải VL.) Chạm mặt Vương Trác (nay đệ tử hồng y, Ngưng Khí tầng 1) tại đan phòng — bị nhóm đệ tử hồng y mỉa mai lai lịch."
          },
          { bridge: true, khoang: "@c0021–@c0030", text: "Tu luyện bí mật: đột phá Ngưng Khí tầng 1 (@c0025), tầng 2 (@c0030). Trở thành quản sự khu tạp vụ, thu hối lộ tiên phù; thần thức hình thành (@c0030)." },
          {
            chuong: "@c0033",
            importance: "major",
            text: "Tại giao dịch hội bí mật, đổi Linh Khí Tuyền Thủy lấy khẩu quyết Ngưng Khí kỳ tầng 4–9 từ nhị sư huynh (Trương Cuồng). Câu nói tiết lộ của nhị sư huynh đặt VL vào tầm ngắm nguy hiểm; tẩu thoát bằng cách chồng mấy chục tờ tiên phù. (@c0033)"
          },
          {
            chuong: "@c0036",
            importance: "major",
            text: "Đột phá Ngưng Khí kỳ tầng 3 trong mộng cảnh hậu sơn (2 năm thực = 13 năm mộng). Bị chặn ở tầng 4 — lực lượng thần kỳ ngăn cản. Phát hiện đặc dị: tầng 3 của mình không có cực hạn, linh khí vẫn tăng khi người thường bị kẹt. (@c0036)"
          },
          {
            chuong: "@c0038",
            importance: "major",
            text: "Sau 4 năm hậu sơn (27 năm tu luyện thực tế), được Tôn Đại Trụ chính thức nhận làm đệ tử chân chính duy nhất, dọn vào Dược Viên. Tôn Đại Trụ dạy Khu Vật Thuật; VL được giao lệnh bài đến Kiếm Linh Các chọn phi kiếm. (@c0038)"
          },
          {
            chuong: "@c0039",
            importance: "major",
            text: "Tại Kiếm Linh Các, cưỡng qua cấm chế ba tầng một cách dễ dàng (ngay cả sư bá cũng không làm được); chọn Cự Phú — phi kiếm đệ nhất Triệu quốc, di vật sư tổ ngàn năm. (@c0039)"
          },
          {
            chuong: "@c0040",
            importance: "normal",
            text: "Huyền Đạo Tông tới Hằng Nhạc Phái (cưỡi linh thú Thiên Túc Ngô Công). Gặp Liễu Mi — nữ đệ tử nổi bật Huyền Đạo Tông, tim đập thình thịch nhưng lập tức khóa tâm thần; được Liễu Mi đánh giá nhầm là Ngưng Khí tầng 3. Mở rộng nhãn giới về Tu Chân Giới Triệu quốc và các tông môn. (@c0040)"
          },
          {
            chuong: "@c0041",
            importance: "minor",
            text: "Bị Vương Trác công khai sắp đặt giao việc nguy hiểm (săn mồi nuôi Ngô Công) trước mặt cả hai phái. Ngồi tách riêng, trò chuyện với Nữ tử họ Chu — bày tỏ quan niệm 'Đại đạo vô tình' nhưng tự nhận không dứt được phàm trần vì nhớ công ơn cha mẹ. (@c0041)"
          },
          {
            chuong: "@c0042",
            importance: "minor",
            text: "Một mình thăm dò Ngô Công: bị hút hàn khí nhưng vận linh khí hóa giải dễ dàng, Ngô Công kinh ngạc. Quan sát Ngô Công khạc khí đen làm tan thú nhỏ thành vũng máu; suy ra độc tố tỉ lệ thuận kích thước đầu. (@c0042)"
          },
          {
            chuong: "@c0043",
            importance: "normal",
            text: "Thăm Vương Hạo sau 4 năm; dùng thần thức phát hiện linh khí Vương Hạo lưu động quỷ dị, sắp khí tán thân vong. Đọc công pháp Lô Hỏa Khai Đỉnh Đại Pháp, nhìn ra Lữ Vân Kiệt (tam sư huynh) đang biến Vương Hạo thành dược lô luyện Nhân Thọ đan. Nhớ về phụ thân bị phong hàn nhập thể, nảy ý lấy dịch độc Ngô Công chữa bệnh cho cha. (@c0043)"
          },
          {
            chuong: "@c0044",
            importance: "normal",
            text: "Nhận lời cầu xin của Vương Hạo: sẽ giết Lữ Vân Kiệt báo thù khi tu vi đủ mạnh. Chứng kiến Lý Sơn (Huyền Đạo Tông) bán Phích Lịch đạn gian lận; thần thức phát hiện bí mật — đạn không tự nổ, Lý Sơn ngầm phóng linh khí kích hoạt. Bước vào cảnh giới ngộ đạo sau khi Vương Hạo rời đi; lĩnh ngộ 'cá lớn nuốt cá bé' của Tu Chân Giới. (@c0044)"
          },
          {
            chuong: "@c0045",
            importance: "minor",
            text: "Mua ba viên Phích Lịch đạn từ Lý Sơn bằng linh phù môn phái; biết tỏng đạn do Lý Sơn khống chế nổ nhưng vẫn mua để tương kế tựu kế. (@c0045)"
          },
          {
            chuong: "@c0046",
            importance: "major",
            text: "Phát hiện bên trong Phích Lịch đạn lưu đạo thần thức của Lý Sơn; bao thần thức của mình lên, 'nuốt' đạo thần thức Lý Sơn vào trong, từ đó tự mình kích nổ được. Lần đầu tiên tiếp xúc lão quái vật ẩn trong Thạch Châu (Tư Đồ Nam) — lão xưng 'Linh Động Kỳ viên mãn' là tu vi thật của VL, tiết lộ đã âm thầm trợ giúp và theo dõi VL gần 30 năm. Biết về hệ thống Tu Chân Quốc 5 cấp và Liên Minh Tu Chân. (@c0046)"
          },
          {
            chuong: "@c0047",
            importance: "normal",
            text: "Trong Mộng Cảnh, Tư Đồ Nam tự xưng danh (cường giả Chu Tước quốc lục cấp), kể lai lịch bị truy sát thân hủy chui vào Thạch Châu, tiết lộ đã dùng tinh hoa nguyên anh giúp VL củng cố tu vi suốt mấy chục năm. Điều kiện Thạch Châu nhận chủ: đủ ngũ hành + tu vi ≥ Anh Biến kỳ. Tham dự tỷ thí; bị Ngô Công phun hàn khí, VL vận linh lực hóa giải. (@c0047)"
          },
          {
            chuong: "@c0048",
            importance: "major",
            text: "Được Hoàng Long chân nhân cử lên làm 'con tốt thí'. Lần đầu thực chiến: ba lần liên tiếp đánh bại Chu Bằng (Ngưng Khí tầng 13, đại đệ tử Huyền Đạo tông) bằng Dẫn Lực thuật + Phích Lịch đạn; tiếp tục hạ Dương Nghị (nhị sư huynh Huyền Đạo). Được toàn bộ đệ tử Hằng Nhạc tôn 'đại sư huynh'. Nội tâm xác nhận: thực lực = Linh Động Kỳ viên mãn ≈ Ngưng Khí tầng 14 (theo Tư Đồ Nam); bác bỏ thuyết 'chặt duyên phàm trần'. (@c0048)"
          },
          {
            chuong: "@c0049",
            importance: "normal",
            text: "Đối đầu Âu Dương lão giả: vận Dẫn Lực thuật hóa hai bàn tay hữu hình, vừa đỡ cự kiếm vừa khống chế Ngô Công ép thổ dịch độc màu đen. Thu được dịch độc Thiên Túc Ngô Công (để trị bệnh phong hàn cho phụ thân); dùng bình ngọc nước sông hậu sơn làm vật đổi hóa giải xung đột. Được Hoàng Long nêu làm gương toàn môn. (@c0049)"
          },
          {
            chuong: "@c0050",
            importance: "major",
            text: "Phát hiện Vương Hạo sắp chết trong lò luyện đan của Lữ Vân Kiệt; phá màn ngũ thải lò luyện, cứu Vương Hạo thoát khỏi quỷ môn quan. Bị Hoàng Long chân nhân thẩm vấn riêng về tiên pháp và tu vi thật — tiếp tục giấu, khăng khăng 'không biết mình đạt cấp độ gì'. Lữ Vân Kiệt bị phạt diện bích 20 năm; Vương Hạo được nâng thành nội môn đệ tử. (@c0050)"
          },
          {
            chuong: "@c0051",
            importance: "major",
            text: "Bị Tôn Đại Trụ âm mưu dùng Tam Thi Tuyến Trùng thảo khống chế. Phát giác và phản sát — giết Tôn Đại Trụ (lần đầu tiên giết người, cũng là giết chính sư phụ trên danh nghĩa); thực lực được Thượng Quan trưởng lão đánh giá xấp xỉ tầng 14. (@c0051)"
          },
          {
            chuong: "@c0052",
            importance: "normal",
            text: "Đạt tầng 14 Ngưng Khí; Tư Đồ Nam khuyên nên đạt tầng 15 trước khi Trúc Cơ. Được Kết Đan Tổ sư Hằng Nhạc cho phép lên cấm địa Thương Tùng phong, vào Tàng Kinh Các bí mật; hạt nghịch châu bắt đầu hiển thị mộc nguyên tố. (@c0052)"
          },
          { bridge: true, khoang: "@c0053–@c0054", text: "Hằng Nhạc Phái bị Phác Nam Tử (Nguyên Anh kỳ, Huyền Đạo Tông) tấn công: Hộ sơn đại trận vỡ, sơn môn thất thủ, Tử Nhạc Tiên Kiếm bị đoạt. VL là nguyên nhân gián tiếp vì hắn hạ đệ tử Âu Dương." },
          {
            chuong: "@c0055",
            importance: "major",
            text: "Hằng Nhạc Phái ly tán — VL chọn theo nhóm tàn quân (Lưu Văn Cử + lão phu nhân) thay vì nhập Huyền Đạo Tông dù được Phác Nam Tử đích thân mời. Cùng nhóm rút về Tượng Xà sơn (cơ sở cũ Lưu Văn Cử). (@c0055)"
          },
          { bridge: true, khoang: "@c0056–@c0057", text: "Tàn quân Hằng Nhạc di chuyển về Tượng Xà sơn. VL công khai nhận tu vi tầng 14 với đồng đạo; hình thành nhóm 4 người (cùng Lữ Tung, Trương Đức Khôn, Hoàng Đại Sơn). Hằng Nhạc Phái bế quan 100 năm." },
          {
            chuong: "@c0058",
            importance: "normal",
            text: "Xin ra ngoài thăm cha mẹ; được Lưu Văn đồng ý và tặng ngọc phù (chứa một kích Kết Đan kỳ). Bay về thôn cũ bằng Dẫn Lực thuật — nhà cha mẹ sau 5 năm đã thành tam hợp viện. Ẩn ngoài thôn rải thần thức canh một tháng, đoán trước Huyền Đạo Tông sẽ đến. (@c0058)"
          },
          {
            chuong: "@c0059",
            importance: "major",
            text: "Nghe lén âm mưu Chu Bằng — lần đầu tiên trong đời nảy ý định giết người. Chặn Trương Cuồng tại cổng thôn; dùng Dẫn Lực thuật nhất tâm nhị dụng bóp gãy cổ — giết Trương Cuồng (lần thứ hai giết người). Thu phi kiếm, roi gỗ đen, túi trữ vật; thiêu xác. (@c0059)"
          },
          {
            chuong: "@c0060",
            importance: "major",
            text: "Qua thuấn di của Tư Đồ Nam chặn được Chu Bằng. Chứng kiến tuyệt kỹ âm hàn của Tư Đồ Nam (mượn thân hắn) băng hóa Chu Bằng. Học và bắt đầu thực hiện Khôi Lỗi thuật (ma đạo): tự tay mổ ngực Chu Bằng tế luyện ngũ tạng — bước đầu hoàn thành; nôn mửa sau đó. Chuẩn bị bước 2 tế luyện 3 ngày 3 đêm. (@c0060)"
          },
          {
            chuong: "@c0061",
            importance: "normal",
            text: "Hoàn tất Khôi Lỗi thuật với Chu Bằng (3 ngày tế luyện). Ra lệnh khôi lỗi Chu Bằng trở về Huyền Đạo Tông, âm thầm diệt kẻ bất lợi cho mình và bảo vệ cha mẹ. Dùng độn thuật bay về sơn thôn quê nhà thăm cha mẹ sau 5 năm xa cách — quỳ lạy, ôm cha, khóc cùng mẹ, nói dối Hằng Nhạc Phái đã chuyển địa điểm. Khất chuyện hôn nhân mẹ thúc giục; hứa mấy năm nữa dẫn về người vợ tốt. (@c0061)"
          },
          {
            chuong: "@c0062",
            importance: "minor",
            text: "Ở bên cha mẹ nửa tháng rồi cáo biệt — trong lòng buồn, không biết bao giờ trở về. Tìm hang động trên núi trọc vô danh (có nước bên trong), dùng Dẫn Lực thuật phá đá phong bế cửa, bắt đầu bế quan tu luyện lần 2. Năm đầu vẫn liên lạc với Chu Bằng; sau 4 năm bị Hằng Nhạc Phái lẫn người Hoàng Long chân nhân cho là đã chết. (@c0062)"
          },
          {
            chuong: "@c0063",
            importance: "minor",
            text: "Xuất quan sau 4 năm bế quan. Dùng thần thức (mượn uy lực Nghịch Thiên Châu/Tư Đồ Nam) áp chế ba đệ tử Huyền Đạo Tông — Lịch Hải (tầng 12), Từ Phi, tiểu sư đệ — khiến cả người Ngưng Khí tầng 12 lẫn dã thú quỳ rạp không dám nhúc nhích; tha ba người khi biết nữ tử họ Từ. Cân nhắc 3 con đường Trúc Cơ, không chọn Đoạt Cơ Pháp vì chê quá ác độc. Diện mạo: tóc dài đến lưng, mặt trắng bóc, mắt lấp lánh, khoảng 20 tuổi, ánh mắt lạnh như băng. (@c0063)"
          },
          {
            chuong: "@c0064",
            importance: "major",
            text: "Xác nhận kết quả 4 năm bế quan: NĂM THỨ 2 đạt VIÊN MÃN tầng 15 Ngưng Khí kỳ; 2 năm tiếp dốc sức đột phá Trúc Cơ nhưng thất bại nhiều lần. Tu vi biểu lộ bên ngoài tăng từ tầng 3 lên tầng 8 (do nhiều lần đột phá trong Mộng Cảnh thấm ra thân thể). Dùng phi kiếm lớn từ túi trữ vật đạp kiếm phi hành rời Hằng Nhạc phong hướng Thiên Thủy thành. Bay 10 ngày bị lạc (do Tư Đồ Nam rẽ vào rừng tìm thực vật mộc thuộc tính). Gặp đoàn tiêu Uy Vũ tiêu cục; tự xưng Vương Lâm, lần đầu xuất môn; bị tiêu sư đánh giá là 'tiểu tử không biết võ công'. (@c0064)"
          },
          {
            chuong: "@c0065",
            importance: "minor",
            text: "Đi cùng đoàn tiêu Uy Vũ tiêu cục tới Thiên Thủy thành; bịa cớ 'gặp cướp' giải thích không có hành lý. Dùng thần thức phát hiện hơn mười xe ngựa trống trơn và hai người ẩn nấp trong rừng nhìn đội xe (rồi bỏ qua). Được giới thiệu với Vương tiên sinh — tướng thuật có thực lực (Vương Lâm thấy tia linh lực qua thần thức). Tướng mạo/khí vận của hắn khủng khiếp tới mức khiến Vương tiên sinh xem tướng phun máu và hét 'Ngươi—'. (@c0065)"
          },
          {
            chuong: "@c0066",
            importance: "normal",
            text: "Dùng thần thức định vị 'Đại đương gia' trên cây đại thụ: thanh niên ~20 tuổi, Ngưng Khí tầng 2 đỉnh phong, mặt sẹo dữ tợn — thấy quen mắt. Bị Liễu Tam nghi là gian tế. Khi Liễu Tam đặt hộp gấm (nhân sâm 500 năm) xuống đất, VL dùng pháp lực hút hộp gấm bay vào tay mình, đoạt trước 'Đại đương gia'. (@c0066)"
          },
          {
            chuong: "@c0067",
            importance: "major",
            text: "Nhận ra 'Đại đương gia' là Trương Hổ — bạn cũ 10 năm trước. Hé hoàng chỉ dò phản ứng; Trương Hổ không nhận ra vật → trả lại nhân sâm, nói 'nhận lầm người'. Bạch y trung niên (sư phụ Trương Hổ, Ngưng Khí tầng 15 đại viên mãn, tà đạo hút máu) xuất hiện định hút máu VL. VL cứu Trương Hổ bị hành hạ bằng Dẫn Lực thuật + roi rắn Hắc Mộc Điều. Lần đầu Dẫn Lực thuật bị vỏ kiếm đen vô hiệu hóa. Tu vi biểu lộ bên ngoài bị đối phương nhìn ra là tầng 8. (@c0067)"
          },
          {
            chuong: "@c0068",
            importance: "major",
            text: "Trận ác đấu sinh tử gian nan nhất kể từ khi tu tiên: đối đầu đệ tử Tức Mặc lão nhân (tức bạch y trung niên). Ngọc giản hóa tấm chắn lam bị phi kiếm hư ảnh rách. Kích hoạt ngọc phù cổ xưa (do Lưu Văn Cử tặng — Đan bảo, đã cải tạo thành 9 lần dùng) bung 9 phù văn vàng; vây diệt địch: thân thể và túi trữ vật địch hóa tro bụi. Thu phi kiếm cổ quái làm chiến lợi phẩm. Mồ hôi chảy dài sau trận. (@c0068)"
          },
          {
            chuong: "@c0069",
            importance: "normal",
            text: "Dùng Hóa Thần thuật (xóa ký ức) lên Vương tiên sinh và 6 người tiêu cục thay vì diệt khẩu, ngăn Trương Hổ giết người. Cùng Trương Hổ bay đến đỉnh núi ôn chuyện cũ. Xác nhận bản thân chưa tới Trúc Cơ kỳ. Biết tên sư phụ Trương Hổ là Bạch Triển — đệ tử thứ sáu của Tức Mặc lão nhân (tán tu Kết Đan kỳ). Hỏi về Đằng Gia thành để cân nhắc trú ẩn. (@c0069)"
          },
          {
            chuong: "@c0070",
            importance: "normal",
            text: "Cùng Trương Hổ vào Đằng Gia thành (phía bắc Triệu Quốc); dùng thần thức dò tu vi mọi người ở cửa thành. Bị luồng gió của người Trúc Cơ kỳ (~30 tuổi, mặt âm trầm) thổi nhưng chỉ lùi vài bước, thần sắc bình thường. Thuê phòng tại khách điếm; bắt đầu tế luyện phi kiếm cổ quái trong phòng — phi kiếm có linh tính mạnh kháng cự, VL dùng ngọc phù phóng kim quang chế ngự từng bước; nhận ra cơ chế màu sắc—thuấn di của phi kiếm. (@c0070)"
          },
          {
            chuong: "@c0071",
            importance: "major",
            text: "Tế luyện thành công phi kiếm cổ quái của Bạch Triển bằng Huyết Luyện thuật (do Tư Đồ Nam truyền) — cắn lưỡi phun máu nhiều lần, tổng ba ngày mới xong; phi kiếm trở thành pháp bảo bản mệnh, cất trong miệng, sau huyết luyện có mùi máu nồng. Xác nhận phi kiếm và vỏ kiếm là hai vật riêng biệt; vỏ kiếm tỏa sát khí ngày càng lớn, hút VL vào 'thế giới kỳ lạ' (cài cắm vỏ kiếm bí ẩn). Biết ba ngày sau là hội giao dịch tại Đằng Gia thành."
          },
          {
            chuong: "@c0072",
            importance: "major",
            text: "Tại Đằng Gia thành: mua quyển 'Những nghiên cứu tâm đắc về trận pháp' (10 khối trung phẩm linh thạch). Bị phục kích — bị Đằng Lệ (Trúc Cơ hậu kỳ) truy sát ~5–6 ngày; dùng mưu dây mây xanh (Đằng Điều) trọng thương Đằng Lệ. Dẫn Đằng Lệ vào tầm Thi Mị/Lục Đan tự bạo, liều mạng đánh cuộc để bắt sống Đằng Lệ. Thi triển Đoạt Cơ Đại Pháp: luyện Đằng Lệ (Trúc Cơ hậu kỳ) làm Lô Đỉnh thành 3 quả cầu, rút linh hồn, đoạt một phần ba linh căn. Bị Đằng Hóa Nguyên (Nguyên Anh kỳ, ông nội Đằng Lệ) in lời nguyền định vị hình thoi lên trán (@c0072). Tư Đồ Nam hứa giúp che giấu lời nguyền và gợi mở bí thuật phản phệ (cần Kết Đan kỳ). Tư Đồ Nam lần đầu kính phục VL."
          },
          {
            chuong: "@c0073",
            importance: "major",
            text: "Hoàn tất bước cuối Đoạt Cơ Đại Pháp. Đào hố sâu bằng Dẫn Lực thuật, bắt đầu bế quan lần 3 nhắm mục tiêu Trúc Cơ. Sau 2 năm bế quan: ĐỘT PHÁ TRÚC CƠ KỲ (@c0073); cũng luyện hóa gần xong vỏ kiếm. Tư Đồ Nam ngủ say hơn một năm (tổn hao Nguyên Anh). Dùng pháp quyết tìm cực âm, phát hiện đống hoang tàn thành cổ — chùm sáng phát từ hạt châu đá trên tháp gãy trị lành vết thương. Nhận ra đây là chỗ cực âm để tu Hoàng Tuyền Thăng Khiếu Quyết."
          },
          {
            chuong: "@c0074",
            importance: "normal",
            text: "Xác định đống hoang tàn là Hoàng âm Cực âm chi địa (bề mặt ngũ phẩm phổ thông, sâu vào bát phẩm, thượng giai nhất phẩm). Chọn vị trí ngũ phẩm phổ thông tu luyện. Bày tiểu mê tung trận pháp phòng thủ. Lần đầu thổ nạp âm khí bên ngoài sau khi đoạt xá Đằng Lệ — hấp thu hơn nửa (thay vì một phần bình thường); ngưng được luồng âm hàn khí nhỏ đầu tiên."
          },
          {
            chuong: "@c0075",
            importance: "normal",
            text: "Tu luyện một tháng; phát hiện Nghịch Thiên Châu tại nơi này đọng sương chứa âm khí (không phải linh khí). Tích đủ khí âm hàn chuẩn bị trùng khiếu lần đầu. Phát hiện kẻ lạ kéo xác thú; giăng mồi nhử, giao chiến với Lam phu quái nhân (da xanh, 9 tờ giấy vàng hồi phục thân thể) — đánh trọng thương không giết được. Cuối trận hỏi 'Ngươi là ai?'."
          },
          {
            chuong: "@c0076",
            importance: "normal",
            text: "Thỏa thuận hưu chiến với quái nhân bằng cách vẽ tranh giao tiếp (chia địa bàn). Nhận được pháp bảo huyễn thuật (hạt châu nhỏ) từ quái nhân — huyễn hóa lão nhân bạch y, sức mạnh tỉ lệ thuận linh lực quán nhập. Sau 2 tháng thổ nạp, thực hiện trùng khiếu lần đầu vào huyệt Đan Điền — xuất hiện hắc động trong cơ thể; linh lực và hàn khí dung hợp thành linh lực biến dị."
          },
          {
            chuong: "@c0077",
            importance: "major",
            text: "Tầng 1 Hoàng Tuyền đại thành. Khi trùng khiếu tiếp theo, vô tình mở lối tu luyện mới: thân hóa hắc động hút khí âm hàn phạm vi ngàn trượng mất khống chế. Trùng khiếu thành công tầng 3, ngưng tụ hàn đan (tinh thể xanh) đầu tiên trong đan điền. Cố đột phá tầng 4 (huyệt Khí Hải) thất bại 100 lần. Kết quả: tu vi đạt Trúc Cơ sơ kỳ đỉnh phong; linh lực dung hợp thành âm hàn linh lực gần gấp đôi cũ. Đằng Hóa Nguyên truy đuổi tới nhưng bị thứ mạnh hơn trong đống hoang tàn chặn lại."
          },
          {
            chuong: "@c0078",
            importance: "major",
            text: "Đi sâu 5 ngày vào thành đổ nát, tìm cái hố đường kính ngàn thước (đáy lỗ chỗ như tổ ong) — trầm âm ngũ phẩm vào giờ tý. Nhảy xuống hố, hấp thu khí âm hàn tinh thuần. Trùng khiếu huyệt Khí Hải thành công — huyệt Khí Hải hoàn toàn khai thông; tinh vân và linh lực màu lam xuất hiện. Linh lực thay đổi kết cấu đá thành băng thật. (Toàn cảnh) linh lực dị biến theo hướng Cực cảnh — hệ thống ba cảnh giới linh lực thượng cổ Cực/Đạo/Thủy; nguyên nhân: Hoàng Tuyền Thăng Khiếu Quyết (bản thất bản) + Nghịch Thiên Châu."
          },
          {
            chuong: "@c0079",
            importance: "major",
            text: "Thử sức với quái nhân a Ngốc; đặt tên linh lực biến dị là 'Cực Âm linh lực'. Cùng a Ngốc mở 8 viên thạch châu kích hoạt pho tượng 100 thước; tu luyện 5 ngày trên đầu cự long ở Tuyệt âm thập phẩm. Ngày 3 huyệt Khí Hải tái lập; rạng sáng ngày 5 Hoàng Tuyền tầng 5 đại thành; linh lực chuyển lam đậm (gần Cực cảnh). Gặp Ngô Vũ ẩn trong pho tượng đá; đồng ý tới Thi Âm tông tìm Dạ Tự Tại cứu Ngô Vũ. Truyền tống trận đưa tới sơn môn Thi Âm tông, trận nháy 43 đạo."
          },
          {
            chuong: "@c0080",
            importance: "normal",
            text: "Tiến vào tổng đàn Thi Âm tông dưới mặt đất (cực tây Triệu quốc). Tám đệ tử gác trận quỳ bái do trận nháy 43 đạo. Mạo danh đệ tử Ngô Vũ lão tổ. Gặp chấp sự trưởng lão Mộc Ngung (Trúc Cơ trung kỳ) — xóa nghi ngờ bằng kỹ thuật 'ngưng khói Lam Viêm Ma hỏa thành cầu' (âm hàn linh lực). A Ngốc được nhận ra là thi khôi linh tính cao nhất Âm Tông sau Phi Thiên La Sát. Cuối chương Dạ Tự Tại lão tổ (Nguyên Anh) hiển hiện bóng người qua Lam Viêm Ma hỏa, chất vấn VL."
          },
          {
            chuong: "@c0081",
            importance: "major",
            text: "Dạ Tự Tại chính thức chấp nhận VL là đại đệ tử thứ hai của Ngô Vũ, không yêu cầu nộp một mảnh linh hồn (khác đệ tử thông thường). VL nhận được ngọc giản lam đậm (phẩm chất sư tổ cấp). Biết bốn tông môn ma đạo Triệu quốc (Thiên Đạo Môn, Hợp Hoan Tông, Vô Phong Cốc, Thi Âm Tông) và quy chế: 10 năm/30 năm/100 năm tu tiến — không đạt thành thi khôi. La Sát (ký sinh hữu tri trong Dạ Tự Tại) xuất hiện lần đầu. A Ngốc bị Dạ Tự Tại nhận làm lô đỉnh (giả đan). (@c0081)"
          },
          {
            chuong: "@c0082",
            importance: "normal",
            text: "Học biết Hoàng Tuyền Đạo — công pháp cốt lõi Thi Âm Tông, dùng thi khôi như gia súc cung cấp thân thể cho các tu sĩ ngũ cấp đổi xác. Biết Vực Ngoại chiến trường sắp mở lại sau khi được dọn sạch. Cảnh giới xác nhận: Ngưng Khí → Trúc Cơ → Kết Đan → Nguyên Anh → Hóa Thần → Anh Biến. Thông Thiên Tháp là trung tâm Triệu quốc. (@c0082)"
          },
          {
            chuong: "@c0083",
            importance: "normal",
            text: "Cự Ma tộc liên minh sứ giả xuất hiện (đầu khổng lồ từ hư không). Toàn bộ Triệu quốc biết Nghịch Thiên Châu bị tìm kiếm — phần thưởng: pháp bảo Anh Biến kỳ + 10 Hóa Thần luyện thi + thăng cấp quốc gia. Cự Ma tộc lấy Thất Thải pháp khí từ Thông Thiên Tháp; 7 thế lực nhận 7 lệnh bài, tối đa 3 người vào Vực Ngoại. VL âm thầm nhận ra Nghịch Thiên Châu chính là vật đó — không để lộ. (@c0083)"
          },
          {
            chuong: "@c0084",
            importance: "normal",
            text: "Vào Địa Âm chi địa của Thi Âm Tông tu luyện; phát hiện huyệt động bên dưới có xác người khổng lồ (nam thi khổng lồ) cùng cây xanh tỏa âm hàn — nguồn gốc khí âm hàn đặc biệt của tông. Nghe tiếng nói 'Cứu ta...' từ dưới. Hoàng Tuyền Thăng Khiếu Quyết xác nhận miễn dịch âm hàn. (@c0084)"
          },
          {
            chuong: "@c0085",
            importance: "major",
            text: "Tu vi xác nhận: Trúc Cơ sơ kỳ đỉnh phong, tùy thời đột phá trung kỳ. Nghịch Thiên Châu đạt 3 lá (Mộc giai). Bắt đầu tế luyện lại Vỏ Kiếm Đen (đã đắc thủ của Bạch Triển từ @c0068) bằng hàn hỏa tự chế (dùng Hoàng Tuyền Thăng Khiếu Quyết làm nhiên liệu); làm trận pháp trên vỏ kiếm hiện ra rồi rót Hàn Đan hóa lỏng vào. Hàn Đan: phụ phẩm của Hoàng Tuyền, yếu hơn Kim Đan, tan khi rời thân quá lâu. (@c0085)"
          },
          {
            chuong: "@c0086",
            importance: "major",
            text: "Bị ép nộp một mảnh linh hồn vào ngọc bài — Dạ Tự Tại vi phạm cam kết ban đầu. Bị truyền tống đến Quyết Minh Cốc (Thiên Nam khu vực), trở thành một trong 20+ 'vật dẫn' cho kế hoạch nâng cấp thi khôi lên giả đan. Đỗ Trần (Trúc Cơ hậu kỳ, giả đan) dẫn đoàn. Tiến độ tế luyện Vỏ Kiếm Đen: 4/10 phần. (@c0086)"
          },
          {
            chuong: "@c0087",
            importance: "major",
            text: "Giết gã vệ binh đang giữ ngọc bài linh hồn của mình, thoát hiểm. Thi khôi tàn sát đồng môn; VL thoát khỏi Quyết Minh Cốc. Biết Đằng Hóa Nguyên đã diệt toàn bộ Vương gia (100+ người, kể cả cha mẹ VL). Khải Minh (thầy toán) giúp Đằng Hóa Nguyên truy tung VL bằng Thiên toán chi đạo. Vương Trác sống sót (tầng 11, Huyền Đạo Tông), Vương Hạo sống sót (tầng 7), Tứ thúc được Khải Minh cứu. Đau thương cực điểm → linh lực bạo khởi. (@c0087)"
          },
          {
            chuong: "@c0088",
            importance: "major",
            text: "Tiến vào Cực cảnh trong Quyết Minh Cốc. Nghịch Thiên Châu lần đầu phát HẮCH QUANG (ánh đen). Bên ngoài tu vi nhìn như Trúc Cơ sơ kỳ nhưng thực lực áp đảo. Giết nhiều tu sĩ, biệt danh 'sát nhân ác ma' lan rộng trong Quyết Minh Cốc. Chu Quyền (đệ tử Viên phái, bạch y) xuất hiện. (@c0088)"
          },
          {
            chuong: "@c0089",
            importance: "normal",
            text: "Tư Đồ Nam tỉnh dậy (ngủ 5 ngày trước). Nghe TĐN giải thích Hồn Kỳ — pháp bảo Nguyên Anh kỳ có thể phong ấn hồn phách, khả năng cứu người thân VL; chỉ còn 3 lần thuấn di. Hệ thống Tu Chân Quốc xác nhận: Triệu quốc = tam cấp. TĐN khuyên ra Vực Ngoại chiến trường để đột phá. (@c0089)"
          },
          {
            chuong: "@c0090",
            importance: "normal",
            text: "Phát hiện linh lực bên trong là 'chỉ lam đen mảnh' — nguyên nhân biến dị sâu xa. Chế tạo Mễ Lạp (hạt gạo lam, đá lạnh diện rộng): 1 hạt phủ 300 thước; 2 hạt kết hợp mạnh hơn; 3 hạt kết hợp tự bạo ~1 dặm. Hiện sở hữu 3 hạt Mễ Lạp (2 hạt kép, 1 hạt đơn). Phi kiếm lục sắc thu thêm thuộc tính cực hàn. Kết thúc bằng cờ đỏ: 100+ kiếm quang đang truy đuổi ai đó tiến về phía VL. (@c0090)"
          }
        ],
        tuVi: "Phàm nhân xuyên suốt Ch.1–20, không thể linh khí nhập thể dù bí mật ngâm Thạch Châu (cuối Ch.20 nguyên tác ghi rõ: \"đến bây giờ vẫn như cũ không thể linh khí nhập thể\"@c0020). Từ Ch.16 trở thành đệ tử nội môn trên danh nghĩa của Tôn Đại Trụ. Đột phá Ngưng Khí tầng 1 @c0025 nhờ Mộng Cảnh thời gian gấp 10 lần; đột phá tầng 2 @c0030, sinh thần thức. Ch.31–40: đạt tầng 3 trong mộng cảnh @c0036; bị chặn ở tầng 4 (cần lĩnh ngộ đại đạo/'chặt đứt phàm trần' @c0037). Đặc dị: tầng 3 không có cực hạn — linh khí vẫn tăng khi người thường bị kẹt. Sau 4 năm hậu sơn, tổng tu luyện thực tế 27 năm (gồm mộng cảnh). Công khai lộ tầng 3 @c0038. Dẫn Lực Thuật luyện hơn 20 năm, đứng đầu Triệu quốc Tu Chân Giới @c0038. Ch.51: đạt tầng 14 Ngưng Khí (thực lực xác nhận; bề ngoài vẫn ngụy trang tầng 3). Bế quan lần 2 trên núi trọc 4 năm (@c0062–@c0064): năm thứ 2 đạt VIÊN MÃN tầng 15 Ngưng Khí; 2 năm tiếp cố đột phá Trúc Cơ nhưng thất bại; tu vi biểu lộ bên ngoài tăng từ tầng 3 → tầng 8 (tích lũy từ nhiều lần đột phá Trúc Cơ trong Mộng Cảnh). Xuất quan @c0064, đạp phi kiếm xuất môn hướng Thiên Thủy thành; đến @c0070 đang ở Đằng Gia thành, bắt đầu tế luyện phi kiếm cổ quái.",
        tuViMoc: [
          { chuong: "@c0001", canhGioi: "Phàm nhân", text: "Phàm nhân — quyết chí tu tiên sau khi nhận danh ngạch đề cử từ Tứ thúc." },
          { chuong: "@c0010", canhGioi: "Phàm nhân", text: "Phàm nhân — nhập môn Hằng Nhạc Phái, chính thức trở thành ký danh đệ tử; chưa được truyền tiên pháp. Thạch Châu trước đó đã trị lành vết thương cánh tay (@c0008), công năng khác chưa biểu hiện rõ trong phạm vi Ch.1–10." },
          { chuong: "@c0017", canhGioi: "Phàm nhân (chưa nhập thể)", text: "Nhận công pháp Ngưng Khí tam thiên. Tu luyện cả đêm trong phòng thất bại; sáng ở dược viên cảm nhận được linh khí (cảm giác như côn trùng bò) nhưng CHƯA thực sự nhập thể — vẫn là phàm nhân tới cuối Ch.20." },
          { chuong: "@c0020", canhGioi: "Phàm nhân (chưa nhập thể)", text: "Cuối Ch.20 vẫn chưa thể đưa linh khí nhập thể dù bí mật ngâm Thạch Châu; Thạch Châu đạt 9 đám mây (sắp đủ 10). (Tôn Đại Trụ — không phải VL — mới là Ngưng Khí tầng 5.)" },
          { chuong: "@c0023", canhGioi: "Phàm nhân (chưa nhập thể)", text: "Thạch Châu đủ 10 đám mây → mây biến mất, lộ vài chữ số bí ẩn; châu khai mở công năng KHÔNG GIAN MỘNG CẢNH (thời gian gấp 10 lần thực tại)." },
          { chuong: "@c0025", canhGioi: "Ngưng Khí kỳ tầng 1", text: "ĐỘT PHÁ Ngưng Khí tầng 1 — chính thức bước vào tu tiên; nhờ Mộng Cảnh, 2 tháng tu được ~1 năm. Học công pháp Ngưng Khí tam thiên (Dẫn lực thuật...)." },
          { chuong: "@c0030", canhGioi: "Ngưng Khí kỳ tầng 2", text: "Đột phá Ngưng Khí tầng 2 sau ~1 năm trong Mộng Cảnh; sinh thần thức. Cố ý GIẤU tu vi (khẩu quyết chỉ cấp tới tầng 3)." },
          { chuong: "@c0036", canhGioi: "Ngưng Khí kỳ tầng 3", text: "Đột phá tầng 3 trong mộng cảnh (sau ~6 năm mộng cảnh kể từ tầng 2). Bị chặn ở tầng 4 — 'một cỗ lực lượng thần kỳ' ngăn cản, không phải thiếu linh khí. Đặc dị: tầng 3 của VL không có cực hạn, linh khí vẫn tăng không ngừng trong khi người thường bị kẹt. Thực tế 2 năm hiện thực = ~13 năm mộng cảnh; sau 4 năm hậu sơn tổng cộng tu luyện thực tế 27 năm (@c0037)." },
          { chuong: "@c0051", canhGioi: "Ngưng Khí kỳ tầng 14", text: "Thượng Quan trưởng lão (Trúc Cơ kỳ) không nhìn thấu tu vi VL, chỉ ƯỚC ĐOÁN xấp xỉ tầng 14 @c0051. Tu vi thật tầng 14 được chính VL XÁC NHẬN @c0052 (Tư Đồ Nam khuyên đạt tầng 15 trước khi Trúc Cơ) và CÔNG KHAI khai báo với đồng đạo @c0056. Bề ngoài vẫn ngụy trang tầng 3." },
          { chuong: "@c0064", canhGioi: "Ngưng Khí kỳ tầng 15 viên mãn", text: "Đạt viên mãn tầng 15 trong năm thứ 2 của 4 năm bế quan lần 2 trên núi trọc. Tu vi biểu hiện bên ngoài tăng từ tầng 3 → tầng 8 (tích lũy từ nhiều lần cố đột phá Trúc Cơ trong Mộng Cảnh @c0064). Vẫn ngụy trang tầng 8 @c0067." },
          { chuong: "@c0073", canhGioi: "Trúc Cơ kỳ", text: "ĐỘT PHÁ TRÚC CƠ KỲ sau 2 năm bế quan lần 3 trong lòng đất (rừng sâu). Nền tảng: Đoạt Cơ Đại Pháp trên Đằng Lệ (Trúc Cơ hậu kỳ) + hấp thu một phần ba linh căn Đằng Lệ tích lũy linh lực (@c0072). Tư Đồ Nam ngủ say hơn một năm." },
          { chuong: "@c0077", canhGioi: "Trúc Cơ sơ kỳ đỉnh phong", text: "Hoàng Tuyền Thăng Khiếu Quyết tầng 3 đại thành, ngưng tụ hàn đan (tinh thể xanh) đầu tiên trong đan điền. Âm hàn linh lực gần gấp đôi cũ → đạt Trúc Cơ sơ kỳ đỉnh phong. Vô tình phát hiện lối tu luyện 'hắc động cắn nuốt khí âm hàn' phạm vi ngàn trượng." },
          { chuong: "@c0078", canhGioi: "Cực Âm linh lực (Cực cảnh thượng cổ)", text: "Huyệt Khí Hải khai thông → linh lực màu lam xuất hiện. (Toàn cảnh) linh lực dị biến theo Cực cảnh — một trong 3 cảnh giới linh lực thời thượng cổ (Cực/Đạo/Thủy), tốt nhất trong cùng đẳng cấp nhưng khó đột phá Hóa Thần. Nguyên nhân: Hoàng Tuyền Thăng Khiếu Quyết bản thất bản + Nghịch Thiên Châu. Bản thân VL chưa biết." },
          { chuong: "@c0079", canhGioi: "Trúc Cơ sơ kỳ đỉnh phong (công pháp đại thành)", text: "Hoàng Tuyền Thăng Khiếu Quyết tầng 5 đại thành tại Tuyệt âm thập phẩm (cực hạn Hoàng âm chi địa). Huyệt Khí Hải đột phá tái lập ngày 3; rạng sáng ngày 5 tầng 5 thành. Linh lực chuyển từ lam nhạt → lam đậm (gần Cực cảnh). Đây là cột mốc công pháp (Hoàng Tuyền tầng 5), KHÔNG phải đột phá cảnh giới Trúc Cơ trung kỳ. @c0085 xác nhận rõ VL vẫn là Trúc Cơ sơ kỳ đỉnh phong, tùy thời có thể đột phá trung kỳ." },
          { chuong: "@c0085", canhGioi: "Trúc Cơ sơ kỳ đỉnh phong", text: "Nguyên tác xác nhận minh thị: tu vi VL = Trúc Cơ sơ kỳ đỉnh phong, tùy thời có thể đột phá Trúc Cơ trung kỳ. Nhận thức: Nghịch Thiên Châu phát triển lá thứ 3 (Mộc giai hoàn thành 2 lá → 3 lá). Bắt đầu tế luyện lại Vỏ Kiếm Đen (đã đắc thủ @c0068) bằng hàn hỏa tự chế." }
        ],
        nhanMach: [
          { ten: "Vương Thiên Thủy", quanHe: "Cha", ghiChu: "Thợ mộc, yêu thương con, kỳ vọng cao.", tag: "cha-me" },
          { ten: "Mẹ (Nhị nương)", quanHe: "Mẹ", ghiChu: "Hiền hậu, lo lắng con bị bắt nạt, chuẩn bị hành lý tiễn con.", tag: "cha-me" },
          { ten: "Tứ thúc", quanHe: "Chú (em cha)", ghiChu: "Ân nhân — nhường danh ngạch đề cử, dùng khối tinh thiết bất phàm giúp hắn vào phái.", tag: "an-nhan" },
          { ten: "Vương Trác", quanHe: "Anh họ (con Đại bá)", ghiChu: "Đối thủ, kiêu ngạo, liên tục sỉ nhục Vương Lâm; tái xuất tại đan phòng (@c0020) là đệ tử hồng y, mới luyện Ngưng Khí tầng 1.", tag: "doi-thu" },
          { ten: "Vương Hạo", quanHe: "Họ hàng / bạn đồng hành", ghiChu: "Có thiện cảm với Vương Lâm, định bênh nhưng bị cha ngăn.", tag: "ban-be" },
          { ten: "Trương Hổ", quanHe: "Bạn cùng phòng", ghiChu: "Ký danh đệ tử Hằng Nhạc Phái, bạn đầu tiên của Vương Lâm trong phái; từng đói hai ngày, được Vương Lâm chia khoai lang nên kết thân. Suýt đông chết vì dị biến hạt châu hút nước mưa (@c0014); đồng ý giữ kín (@c0015).", tag: "ban-be" },
          { ten: "Tôn Đại Trụ", quanHe: "Sư phụ (trên danh nghĩa)", ghiChu: "Trưởng lão Hằng Nhạc Phái thu Vương Lâm làm đệ tử nội môn để chiếm hồ lô nước linh khí; hai mặt, âm mưu kìm hãm rồi trục xuất Vương Lâm (@c0016–@c0019).", tag: "su-mon" },
          { ten: "Lưu sư huynh", quanHe: "Sư huynh (ký danh đệ tử họ Lưu)", ghiChu: "Ban đầu chèn ép, giao việc nặng; sau khi biết Tôn trưởng lão tìm Vương Lâm thì đảo ngược hoàn toàn — xu nịnh, giảm việc, tặng tiên phù (@c0013–@c0015).", tag: "ban-be" },
          { ten: "Trương Cuồng", quanHe: "Nhị sư huynh (nguy hiểm)", ghiChu: "Người VL đổi khẩu quyết tầng 4-9 tại giao dịch hội (@c0033); quản hậu sơn trong đợt tập huấn 4 năm (@c0035); VL từng nói dối hắn về nguồn gốc Linh Khí Tuyền Thủy — tiềm ẩn nguy hiểm.", tag: "nguy-hiem" },
          { ten: "Liễu Mi", quanHe: "Quen biết mới (Huyền Đạo Tông)", ghiChu: "Nữ tử mỹ mạo Huyền Đạo Tông; đánh giá nhầm VL Ngưng Khí tầng 3 (@c0040); VL cảnh giác.", tag: "xa-la" },
          { ten: "Đằng Lệ", quanHe: "Thù địch — đã chết", ghiChu: "Trúc Cơ hậu kỳ, cháu Đằng Hóa Nguyên; truy sát VL vì Trương Hổ bị quy tội giết sư. VL bắt sống làm Lô Đỉnh cho Đoạt Cơ Đại Pháp (@c0072); chết khi bị luyện thành 3 quả cầu máu/thịt/xương.", tag: "thu-dich" },
          { ten: "Đằng Hóa Nguyên", quanHe: "Thù địch (đang truy sát)", ghiChu: "Nguyên Anh kỳ, lão tổ Đằng Gia, ông nội Đằng Lệ; in lời nguyền định vị hình thoi lên trán VL @c0072; truy sát VL @c0077 nhưng bị nam tử thây khô đánh đuổi @c0078.", tag: "thu-dich" },
          { ten: "A Ngốc / a Mộc", quanHe: "Đồng hành tạm thời", ghiChu: "Quái nhân da lam, 9 tấm phù vàng cổ quái; thực ra là thi khôi cũ Ngô Vũ thất bại đoạt xá, có Nguyên Anh trung kỳ tiềm ẩn; VL chiêu mộ tạm sau khi ký hòa ước @c0076; a Ngốc tự nguyện theo VL vào Thi Âm tông @c0079.", tag: "dong-hanh" },
          { ten: "Ngô Vũ", quanHe: "Ân nhân / nhiệm vụ", ghiChu: "Lão tổ Thi Âm tông (Nguyên Anh thể suy yếu); bị thi khôi của chính mình truy sát 300 năm; nhờ VL tìm Dạ Tự Tại cứu mình, đổi lại mở truyền tống trận + chỉ Địa Âm chi địa; khắc bí thuật lên lưng VL làm tín vật đệ tử @c0079.", tag: "an-nhan" },
          { ten: "Mộc Ngung", quanHe: "Quen biết (Thi Âm tông)", ghiChu: "Chấp sự trưởng lão Thi Âm tông, Trúc Cơ trung kỳ; đón tiếp VL, gọi là 'sư thúc', bị VL che mắt bằng kỹ thuật ngưng khói Lam Viêm Ma hỏa @c0080.", tag: "xa-la" },
          { ten: "Dạ Tự Tại", quanHe: "Mục tiêu nhiệm vụ", ghiChu: "Lão tổ tối cao Thi Âm tông (Nguyên Anh); sư đệ của Ngô Vũ; sở hữu Phi Thiên La Sát; xuất hiện cuối @c0080 qua Lam Viêm Ma hỏa, chất vấn VL.", tag: "muc-tieu" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Thạch Châu", moTa: "Viên châu xám khắc hoa văn đám mây trắng, to bằng nắm tay trẻ con, trông rất cổ. Nhặt từ trong xác một con phi điểu chết trong huyệt động (@c0008). Tiết hạt sương khi gặp ánh nắng; sương vị ngọt, trị lành vết thương thể chất. Nước ngâm châu cũng có dược tính, kém hơn sương trực tiếp; hạt sương sáng sớm kết trên châu cho hiệu quả tốt nhất (@c0012). Thạch Châu tự hấp thu hơn phân nửa hạt sương — VL chỉ giữ được chưa đến một phần mười (@c0012). Dị biến đêm mưa Ch.14: châu hút toàn bộ nước mưa cả phòng (kể cả nước trên người Trương Hổ, suýt giết Trương Hổ bằng đông lạnh) (@c0014). Số đám mây khắc trên châu tăng dần khi hấp thu nước: 5 → 6 → 7 (Ch.14) → 9 (Ch.20); VL phán đoán 10 là mức cuối cùng (@c0014, @c0020). Nước ngâm châu biến thành nước chứa linh khí sung túc (xác nhận @c0016). Thảo dược quanh vùng (Lam Tuyến Thảo, Tử Dạ Hoa) héo rũ bất thường sau khi châu ở gần — cài cắm nguyên nhân sâu xa (@c0012–@c0013). Mang trong túi trữ vật từ @c0020.", nguon: "@c0008, @c0011, @c0012, @c0014, @c0016, @c0020" },
            { ten: "Hồ Lô (đựng nước linh khí)", moTa: "Hồ lô hoang dại VL tìm trong núi, dùng đựng nước suối ngâm Thạch Châu — nước biến thành chứa linh khí sung túc. Bị Tôn Đại Trụ phát hiện và tịch thu khi lục soát phòng (@c0016). VL sau đó lấy lại được ba hồ lô sương sớm (sương bên trong đông đặc) và cất vào túi trữ vật (@c0020). Linh khí trong hồ lô cũ cạn dần sau ~1 tháng (@c0019).", nguon: "@c0012, @c0016, @c0019, @c0020" },
            { ten: "Thiên Lý Phù", moTa: "Tờ giấy vàng trông như giấy thường, dùng được hai lần, dán ở đùi để tăng tốc độ di chuyển cho phàm nhân; phát bạch quang chói mắt, dã thú thấy tránh xa. Tôn trưởng lão cấp để Vương Lâm về dự thọ cha (@c0012). Lưu sư huynh sau đó tặng thêm một tờ (@c0015).", nguon: "@c0012, @c0015" }
          ],
          congPhap: [
            { ten: "Ngưng Khí tam thiên", moTa: "Công pháp cơ bản nhất Tôn Đại Trụ truyền cho Vương Lâm khi thành đệ tử nội môn; gồm ba tầng, toàn bộ Ngưng Khí kỳ có mười lăm tầng. Bản chất: thổ nạp thiên địa linh khí, tích lũy vào thân, cải biến thể chất làm cơ sở tu luyện. Dấu hiệu linh khí nhập thể: cảm giác như côn trùng bò (@c0017).", nguon: "@c0017" },
            { ten: "Thuật giấu tu vi", moTa: "Ngọc giản mua 5 khỏa linh đan tại giao dịch hội bí mật; ngụy trang tu vi xuống dưới tầng 1, chỉ Trúc Cơ kỳ mới phá được; Vương Lâm mua vì rất hợp với việc giấu mình (@c0032). Cần Ngưng Khí tầng 2 để tu luyện được (@c0032).", nguon: "@c0032, @c0034" },
            { ten: "Khẩu quyết Ngưng Khí kỳ tầng 4–9", moTa: "Ngọc giản ghi khẩu quyết các tầng 4 đến 9; VL đổi từ nhị sư huynh Trương Cuồng bằng toàn bộ Linh Khí Tuyền Thủy còn lại tại giao dịch hội (@c0033). Là chìa khóa để VL đột phá các tầng tiếp theo.", nguon: "@c0033" },
            { ten: "Khu Vật Thuật", moTa: "Tiên thuật cơ sở để điều khiển phi kiếm; Tôn Đại Trụ dạy sau khi nhận VL làm đệ tử chân chính (@c0038). Học được khi đạt Ngưng Khí tầng 2. Điều khiển phi kiếm thành thục cần tầng 4.", nguon: "@c0038" },
            { ten: "Huyết Luyện thuật (Huyết Luyện Pháp)", moTa: "Phương pháp tế luyện pháp bảo do Tư Đồ Nam truyền (@c0071). Cắn lưỡi phun máu tươi, dùng linh lực biến pháp quyết tạo phù văn hút máu dung nhập vào pháp bảo. Ưu: pháp bảo lập tức thành bản mệnh vật. Nhược: pháp bảo bị hao tổn liên lụy tính mạng chủ; mọi pháp bảo qua huyết luyện đều mang mùi máu.", nguon: "@c0071" },
            { ten: "Đoạt Cơ Đại Pháp", moTa: "Pháp ma đạo dùng người sống (Lô Đỉnh) làm lò; hút máu/thịt/xương (3 quả cầu) + rút linh hồn + đoạt linh căn của Lô Đỉnh. Tư Đồ Nam truyền khẩu quyết (@c0072). VL dùng Đằng Lệ (Trúc Cơ hậu kỳ) làm Lô Đỉnh — đoạt một phần ba linh căn thành công (@c0072–@c0073). Hiệu quả: tăng tốc tu luyện Trúc Cơ + cải tạo thể chất.", nguon: "@c0072, @c0073" },
            { ten: "Hoàng Tuyền Thăng Khiếu Quyết", moTa: "Công pháp ma đạo 9 tầng do Tư Đồ Nam truyền, gọi là 'quỷ công'. Cần Cực Âm chi địa làm môi trường; cứ 3 tầng ngưng kết 1 quả hàn đan; 3 quả hàn đan dung hợp → đột phá Kết Đan kỳ trực tiếp. Tam đại khiếu huyệt: Đan Điền, Khí Hải, Tổ Khiếu. Cơ chế 'không phá thì không lập': mỗi tầng đại thành phải phá hủy khiếu huyệt rồi lập lại để lên tầng kế. Tầng 3 đại thành @c0077 (hàn đan thứ nhất hình thành); tầng 5 đại thành @c0079. Bản VL học đã bị thất bản theo thời gian; kết hợp Nghịch Thiên Châu khiến linh lực dị biến Cực cảnh (@c0078).", nguon: "@c0073, @c0074, @c0075, @c0076, @c0077, @c0078, @c0079" }
          ],
          danDuoc: [
            { ten: "Đoạt Linh Đan", moTa: "Đan dược phát hàng tháng tại đan phòng chính viện (cùng với hạ phẩm linh thạch mẩu nhỏ); dùng để gia tăng linh khí khi tu luyện Ngưng Khí kỳ (@c0020). Cũng là đơn vị tiền tệ tại giao dịch hội bí mật (@c0032). Môn phái phát 100 viên/năm trong đợt tập huấn hậu sơn (@c0035).", nguon: "@c0020, @c0032, @c0035" },
            { ten: "Lục Đan (Tạc Đan)", moTa: "Lấy được từ Thi Mị sau khi dùng Thi Mị làm 'vũ khí' diệt Đằng Lệ (@c0072). Đan đặc biệt của ma đạo tứ cấp tu chân quốc; khác kim đan (lục đan vô số lượng); công dụng chính là tự bạo — một viên bằng nửa kích toàn lực Kết Đan kỳ. Từng có kẻ nắm vạn viên Nguyên Anh kỳ ngũ cấp cũng phải kiêng dè.", nguon: "@c0072" }
          ],
          linhThu: [],
          nguyenLieu: [
            { ten: "Linh Khí Tuyết Thủy", moTa: "Nước băng tuyết ngâm Thạch Châu, do Vương Lâm tự chế; hiệu quả cao hơn tuyền thủy nhưng thấp hơn lộ thủy. Thứ tự: lộ thủy > tuyết thủy > tuyền thủy (@c0031). Đã dùng hết sau 2 năm bế quan hậu sơn (@c0036).", nguon: "@c0031" }
          ],
          phapBao: [
            { ten: "Cự Phú", moTa: "Phi kiếm đệ nhất Tu Chân Giới Triệu quốc; khối kim loại dài ~1m, mạ hoàng kim, chuôi khảm 2 khối kim cương lớn, tua dệt sợi vàng. Di vật sư tổ Hằng Nhạc Phái ngàn năm trước; cấm buôn bán (vi phạm bị trục xuất). VL lấy tại Kiếm Linh Các (@c0039), bộc lộ thực lực khi cưỡng qua cấm chế ba tầng một cách thoải mái.", nguon: "@c0039" },
            { ten: "Ngọc phù (Lưu Văn tặng)", moTa: "Pháp bảo phòng thân chứa một kích của cao thủ Kết Đan kỳ. Lưu Văn Cử tặng khi VL xin ra ngoài thăm cha mẹ (@c0058).", nguon: "@c0058" },
            { ten: "Ngọc giản (phi kiếm Trương Cuồng)", moTa: "Phi kiếm của Trương Cuồng — sau khi Trương Cuồng chết, phi kiếm trở về hình dạng ngọc giản; VL thu lấy (@c0059).", nguon: "@c0059" },
            { ten: "Roi trường tiên gỗ đen (Trương Cuồng)", moTa: "Mấy đoạn gỗ màu đen nối thành cây roi dài phát làn khí nguy hiểm; mất điều khiển khi Trương Cuồng chết, VL thu lấy (@c0059).", nguon: "@c0059" },
            { ten: "Roi rắn Hắc Mộc Điều", moTa: "Vũ khí cận chiến VL tự chế trong 4 năm bế quan lần 2, dưới sự chỉ dẫn của Tư Đồ Nam từ vật liệu Hắc Mộc Điều; lần đầu dùng trong trận chiến với bạch y trung niên Bạch Triển (@c0067).", nguon: "@c0067" },
            { ten: "Phi kiếm cổ quái (đoạt từ Bạch Triển)", moTa: "Phi kiếm từng thuộc Bạch Triển — đệ tử thứ sáu của Tức Mặc lão nhân. Đặc tính cổ quái: phun hư ảnh đỏ khi phản công, có khả năng thuấn di tức thời, màu sắc thay đổi theo uy lực, linh tính mạnh kháng cự tế luyện của người mới (@c0067–@c0070). VL đoạt được sau khi diệt Bạch Triển bằng ngọc phù Đan bảo (@c0068); bắt đầu tế luyện tại Đằng Gia thành (@c0070).", nguon: "@c0067, @c0068, @c0070" },
            { ten: "Vỏ kiếm đen (đoạt từ Bạch Triển)", moTa: "Vỏ đựng phi kiếm cổ quái, màu đen. Tư Đồ Nam xác nhận đây mới là bảo bối thật sự (@c0068). Công năng đặc biệt: vô hiệu hóa Dẫn Lực Thuật của Vương Lâm — lần đầu tiên pháp bảo làm được điều này (@c0067–@c0068). Phi kiếm chui vào vỏ càng sâu màu đổi lục→lam→đen→hồng, uy lực càng tăng (@c0075). VL đoạt được cùng lúc với phi kiếm.", nguon: "@c0067, @c0068, @c0071, @c0075" },
            { ten: "Pháp bảo huyễn thuật (hạt châu)", moTa: "Hạt châu nhỏ bằng 1/10 Thạch Châu, dính tro bụi, có nhiều vết nứt; do quái nhân a Ngốc tặng (@c0076). Quán linh lực vào tỏa khói trắng huyễn hóa lão nhân bạch y (mũi ưng, mắt diều hâu) như thật; thực lực lão nhân tỉ lệ thuận linh lực quán nhập (thử: Ngưng Khí t15→Trúc Cơ trung kỳ→mức 'dưới Kết Đan kỳ không đủ tư cách'). Mỗi lần kích hoạt mạnh hạt châu thêm một vết nứt. Công dụng chính: dọa người/ngụy tạo cao thủ.", nguon: "@c0076" }
          ],
          khac: [
            { ten: "Túi trữ vật (ban đầu)", moTa: "Túi nhỏ màu xám, dẹt; tín vật thân phận đệ tử nội môn, đồng thời chứa đồ. Tôn Đại Trụ tặng khi thu VL làm đệ tử (@c0017).", nguon: "@c0017" },
            { ten: "Túi trữ vật (Trương Cuồng)", moTa: "Túi trữ vật của Trương Cuồng; VL thu lấy sau khi giết hắn (@c0059).", nguon: "@c0059" },
            { ten: "Hạ phẩm linh thạch", moTa: "Vật giúp ngưng khí dễ dàng hơn. Tôn Đại Trụ cấp một khối để thổ nạp (@c0019) và hứa thêm nếu đổi hồ lô (@c0017); đan phòng phát hàng tháng mẩu nhỏ (@c0020).", nguon: "@c0017, @c0019, @c0020" },
            { ten: "Y phục hồng sắc", moTa: "Trang phục đặc trưng của đệ tử nội môn Hằng Nhạc Phái. Nhận từ Tôn Đại Trụ khi thành đệ tử (@c0017).", nguon: "@c0017" },
            { ten: "Lệnh bài Dược Viên", moTa: "Lệnh bài tự do ra vào Dược Viên của Tôn Đại Trụ; cấm tự hái thảo dược khi chưa được phép (@c0039).", nguon: "@c0039" }
          ]
        }
      },
      nguon: ["@c0001", "@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0007", "@c0008", "@c0009", "@c0010", "@c0011", "@c0012", "@c0013", "@c0014", "@c0015", "@c0016", "@c0017", "@c0018", "@c0019", "@c0020", "@c0031", "@c0032", "@c0033", "@c0034", "@c0035", "@c0036", "@c0037", "@c0038", "@c0039", "@c0040", "@c0041", "@c0042", "@c0043", "@c0044", "@c0045", "@c0046", "@c0047", "@c0048", "@c0049", "@c0050", "@c0051", "@c0052", "@c0055", "@c0056", "@c0057", "@c0058", "@c0059", "@c0060", "@c0061", "@c0062", "@c0063", "@c0064", "@c0065", "@c0066", "@c0067", "@c0068", "@c0069", "@c0070", "@c0071", "@c0072", "@c0073", "@c0074", "@c0075", "@c0076", "@c0077", "@c0078", "@c0079", "@c0080", "@c0081", "@c0082", "@c0083", "@c0084", "@c0085", "@c0086", "@c0087", "@c0088", "@c0089", "@c0090"]
    },
    {
      id: "vuong-trac",
      name: "Vương Trác",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc", "Hằng Nhạc Phái", "Huyền Đạo Tông (@c0087)"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 11 @c0087",
      trangThai: "song (sống sót sau diệt môn Vương gia @c0087)",
      vaiTro: "Đối thủ (anh họ)",
      tinhCach: "Kiêu căng ngạo mạn, khinh miệt kẻ yếu hơn; lấy thân thế và linh căn làm ưu thế; không kiềm được miệng lưỡi ngay cả khi bị người có thực lực hơn dọa nạt.",
      blurb: "Anh họ kiêu ngạo của Vương Lâm. Có tu tiên linh căn, được Đạo Hư thượng tiên chính thức thu làm đồ đệ truyền thừa; liên tục châm biếm và sỉ nhục Vương Lâm trong suốt giai đoạn Ch.1–7.",
      tabs: {
        diem: [
          { text: "Kiêu ngạo, khinh miệt — công khai sỉ nhục Vương Lâm tại tiệc, mỉa mai người thất bại sau trắc thí tư chất.", chuong: "@c0001" },
          { text: "Có linh căn tu tiên được Đạo Hư xác nhận từ trước — được nhận vào phái một phần nhờ chỗ dựa tiên sư.", chuong: "@c0003" },
          { text: "Được Đạo Hư thượng tiên chính thức thu làm đồ đệ; sư phụ hứa mười năm thành nhân tài kiệt xuất. Liên tục mỉa mai Vương Lâm và Vương Hạo khi về tới gia tộc.", chuong: "@c0005" }
        ],
        kinhLich: [
          {
            chuong: "@c0001",
            importance: "normal",
            text: "Đến dự tiệc chúc mừng cùng Đại bá. Công khai khinh miệt Vương Lâm, khoe mình được Đạo Hư tiên nhân nội bộ chỉ định. Trước khi ra về ghé tai nói nhỏ 'ngươi không bằng miếng thức ăn gia súc'."
          },
          {
            chuong: "@c0002",
            importance: "normal",
            text: "Cùng được bạch y thanh niên đưa lên sơn phong. Thờ ơ, kiêu ngạo ngay cả trước tiên nhân. Được bạch y thanh niên gọi là 'Vương sư đệ', khen là nhân tài được Đạo Hư sư thúc nhìn trúng."
          },
          {
            chuong: "@c0003",
            importance: "normal",
            text: "Đạt vòng trắc thí tư chất — qua bên phải nhờ linh căn và Đạo Hư sư thúc tiến cử. Tiếp tục khinh miệt, mỉa mai những người trượt, trong đó có Vương Lâm."
          },
          {
            chuong: "@c0004",
            importance: "normal",
            text: "Trên đường đưa về Vương gia, khoe với cả đoàn: sư phụ Đạo Hư nói chỉ đợi hắn về nhà xử lý xong việc thế tục là truyền pháp thuật tu tiên. Gọi biệt danh 'Thiết Trụ' nhạo báng Vương Lâm."
          },
          {
            chuong: "@c0005",
            importance: "major",
            text: "Về tới Vương thị gia tộc giữa tiệc mừng, chính thức xác nhận được Đạo Hư thượng tiên thu làm đồ đệ; sư phụ hứa trong mười năm hắn sẽ thành nhân tài kiệt xuất trong hàng đệ tử Hằng Nhạc Phái. Cha (Vương Thiên Sơn) mừng rỡ. Liên tục châm chọc Vương Lâm và Vương Hạo."
          },
          {
            chuong: "@c0006",
            importance: "normal",
            text: "Đắc ý sỉ nhục Vương Lâm cùng cả họ; gọi nhà Vương Lâm là 'tính cách con lừa, thô lỗ'. Bị Tứ thúc dọa sẽ phế hắn đi; cha phải đứng ra bênh và kéo con ra sau lưng."
          },
          {
            chuong: "@c0007",
            importance: "normal",
            text: "Tái xuất ngắn trong cảnh thân thích họp mặt; tiếp tục châm biếm. Bị Tứ thúc dọa thêm lần nữa, bị cha kéo đi."
          },
          { bridge: true, khoang: "@c0008–@c0010", text: "Không xuất hiện trực tiếp trong giai đoạn này; Vương Lâm đã rời gia tộc." },
          { bridge: true, khoang: "@c0011–@c0019", text: "Không xuất hiện trực tiếp; đang tu luyện trong môn phái dưới sự dẫn dắt của Đạo Hư sư phụ." },
          {
            chuong: "@c0020",
            importance: "normal",
            text: "Tái xuất tại đan phòng chính viện là đệ tử hồng y Hằng Nhạc Phái. Đã bế quan ba tháng theo lệnh sư phụ, luyện thành Ngưng Khí tầng 1; khoác lác chuyện hái hoa/giết đại xà cho 'Trương sư tỷ', bị 'Chu sư tỷ' bóc mẽ. Kinh ngạc và mỉa mai khi thấy Vương Lâm cũng vào được nội môn."
          },
          {
            chuong: "@c0021",
            importance: "normal",
            text: "Đề nghị tỉ võ công khai với Vương Lâm trước mặt đám đệ tử hồng y, đe dọa sẽ tính toán ân oán gia tộc. Lộ rõ thù hằn cá nhân cùng áp lực gia tộc lên VL."
          },
          {
            chuong: "@c0034",
            importance: "minor",
            text: "Được nhắc qua — sư phụ là Đạo Hư sư thúc; tu tới đỉnh phong Ngưng Khí tầng 1, sắp đột phá tầng 2; trở thành 'tân nhân vương' tỷ thí cuối năm. (@c0034)"
          },
          {
            chuong: "@c0036",
            importance: "normal",
            text: "Đạt Ngưng Khí kỳ tầng 3 (sau 4 năm bế quan hậu sơn); cùng Tôn Hạo chế nhạo Vương Lâm 'phế vật', bị Trương Cuồng quát mắng (@c0036)."
          },
          {
            chuong: "@c0037",
            importance: "minor",
            text: "Sau 4 năm bế quan hậu sơn đạt Ngưng Khí kỳ tầng 5 đỉnh phong, sắp bước vào tầng 6 (@c0037)."
          },
          {
            chuong: "@c0055",
            importance: "normal",
            text: "Khi Hằng Nhạc Phái ly tán sau khi mất sơn môn, Vương Trác chọn ở lại (không theo nhóm tàn quân của Lưu Văn Cử). (@c0055)"
          },
          {
            chuong: "@c0087",
            importance: "major",
            text: "Đằng Hóa Nguyên tàn sát toàn bộ Vương gia (100+ người); Vương Trác sống sót — đã là đệ tử Huyền Đạo Tông, Ngưng Khí tầng 11. (@c0087)"
          }
        ],
        tuVi: "Phàm nhân trong Ch.1–10; chính thức được Đạo Hư thượng tiên thu làm đồ đệ truyền thừa. Đến Ch.20 đã đạt Ngưng Khí kỳ tầng 1 sau ba tháng bế quan. Tầng 11 @c0087.",
        tuViMoc: [
          { chuong: "@c0020", canhGioi: "Ngưng Khí kỳ tầng 1", text: "Bị sư phụ bắt bế quan ba tháng, luyện thành Ngưng Khí kỳ tầng 1 (@c0020)." },
          { chuong: "@c0034", canhGioi: "Ngưng Khí kỳ tầng 1 đỉnh phong", text: "Đỉnh phong tầng 1, sắp đột phá tầng 2 — được Tôn Đại Trụ so sánh khi châm biếm Vương Lâm (@c0034)." },
          { chuong: "@c0036", canhGioi: "Ngưng Khí kỳ tầng 3", text: "Đạt tầng 3 sau 2 năm bế quan hậu sơn (@c0036)." },
          { chuong: "@c0037", canhGioi: "Ngưng Khí kỳ tầng 5 đỉnh phong", text: "Sau 4 năm bế quan hậu sơn đạt tầng 5 đỉnh phong, sắp vào tầng 6 (@c0037)." },
          { chuong: "@c0087", canhGioi: "Ngưng Khí kỳ tầng 11", text: "Đệ tử Huyền Đạo Tông; sống sót sau vụ Đằng Hóa Nguyên tàn sát Vương gia @c0087." }
        ],
        nhanMach: [
          { ten: "Vương Thiên Sơn", quanHe: "Cha (Đại bá)", ghiChu: "Ngoài mặt quở trách con nhưng trong lòng đắc ý; bênh con khi bị Tứ thúc dọa.", tag: "cha-me" },
          { ten: "Vương Lâm", quanHe: "Em họ", ghiChu: "Khinh miệt, liên tục sỉ nhục và nhạo báng. Vương gia bị diệt @c0087, Vương Trác sống sót.", tag: "doi-thu" },
          { ten: "Đạo Hư thượng tiên", quanHe: "Sư phụ", ghiChu: "Nội bộ chỉ định từ trước; chính thức thu làm đồ đệ, hứa mười năm thành nhân tài kiệt xuất.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0001", "@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0007", "@c0020", "@c0021", "@c0055", "@c0087"]
    },
    {
      id: "tu-thuc",
      name: "Tứ thúc",
      cn: "",
      aliases: ["Lão Tứ"],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc"],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      vaiTro: "Ân nhân",
      tinhCach: "Trọng ân nghĩa, hành động bằng tình cảm thật sự; nhường lợi lớn để báo đáp mà không tính toán (Ch.1–2).",
      blurb: "Chú thứ tư của Vương Lâm, ân nhân chủ chốt. Nhường suất đề cử quý báu của gia tộc để cho Vương Lâm có cơ hội tu tiên.",
      tabs: {
        diem: [
          { text: "Ân nhân quyết định — nhường suất đề cử quý báu của gia tộc cho Vương Lâm để báo ân Nhị nương, mở ra cơ duyên tu tiên cho nhân vật chính.", chuong: "@c0001" }
        ],
        kinhLich: [
          {
            chuong: "@c0001",
            importance: "major",
            text: "Đến thăm nhà, tặng sách, thông báo danh ngạch đề cử Hằng Nhạc Phái và nhường suất cho Vương Lâm vì muốn báo ân Nhị nương. Nửa tháng sau quay lại đón Vương Lâm."
          },
          {
            chuong: "@c0002",
            importance: "normal",
            text: "Dẫn Vương Lâm vào sân tập kết của Vương gia, dặn dò phải tranh phần hơn cho cha. Đứng tiễn, lẩm bẩm cầu nguyện khi nhìn Vương Lâm bị tiên nhân đưa đi."
          }
        ],
        tuVi: "Phàm nhân (Ch.1–2). Không tham gia tu tiên.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Cháu (con Nhị ca)", ghiChu: "Người hắn nhường suất đề cử, kỳ vọng được tuyển chọn.", tag: "ho-hang" },
          { ten: "Vương Thiên Thủy (Nhị ca)", quanHe: "Anh ruột", ghiChu: "Quan hệ không quá gần do bị bức rời gia tộc, nhưng vẫn có tình.", tag: "ho-hang" },
          { ten: "Mẹ Vương Lâm (Nhị nương)", quanHe: "Chị dâu", ghiChu: "Người từng chiếu cố ông lúc nhỏ — động lực báo ân.", tag: "an-nhan" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0001", "@c0002"]
    },
    {
      id: "vuong-hao",
      name: "Vương Hạo",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc", "Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 7 @c0087",
      trangThai: "song (sống sót sau diệt môn Vương gia @c0087)",
      vaiTro: "Bạn đồng hành / đồng tử",
      tinhCach: "Lanh lợi, thực tế, không ngại nịnh nọt để đạt mục đích; có thiện cảm với Vương Lâm.",
      blurb: "Thiếu niên lanh lợi, con của Tam đệ trong Vương gia. Tư chất kém nhưng dâng linh chi 300 năm, được nhận làm dược đồng (đồng tử) Hằng Nhạc Phái. Bị tam sư huynh Lữ Vân Kiệt ép tu Lô Hỏa Khai Đỉnh Đại Pháp, biến thành dược lô luyện Nhân Thọ đan, chỉ còn ~1 năm sống (@c0043). Được Vương Lâm cứu thoát và thăng nội môn đệ tử (@c0050).",
      tabs: {
        diem: [
          { text: "Lanh lợi và thực tế — dâng linh chi 300 năm, nịnh tiên sư không ngại xấu hổ để đổi lấy suất vào môn phái.", chuong: "@c0003" },
          { text: "Thiện cảm với Vương Lâm — định bênh khi cả họ sỉ nhục nhưng bị cha ngăn; áy náy nhìn Thiết Trụ bị hạ nhục.", chuong: "@c0006" }
        ],
        kinhLich: [
          {
            chuong: "@c0002",
            importance: "normal",
            text: "Tự giới thiệu tên Vương Hạo với Vương Lâm trong sân tập kết. Ánh mắt cuồng nhiệt khi thấy tiên cảnh Hằng Nhạc Phái. Mang vật lạ giấu trong nội y (hộp ngọc)."
          },
          {
            chuong: "@c0003",
            importance: "major",
            text: "Bị phán tư chất 'kém chút, không'. Dâng hộp ngọc chứa linh chi 300 năm làm lễ vật. Được trung niên nhân (Tam sư huynh) nhận làm dược đồng luyện đan, hứa cho tu luyện một loại tiên thuật."
          },
          {
            chuong: "@c0004",
            importance: "minor",
            text: "Trên đường đưa về nhà tộc, bĩu môi mỉa mai Vương Trác có vẻ tiểu nhân đắc chí, khoe lại 'ta còn có thể luyện đan'."
          },
          {
            chuong: "@c0005",
            importance: "minor",
            text: "Về tới Vương thị gia tộc. Vương Trác mỉa mai rằng cậu nhờ nịnh nọt/tặng lễ mới đạt tư cách dược đồng; Vương Hạo phản pháo lại."
          },
          {
            chuong: "@c0006",
            importance: "normal",
            text: "Lộ vẻ không đành lòng khi cả họ sỉ nhục Vương Lâm; mở lời 'Thiết Trụ hắn...' thì bị cha trừng mắt ngăn lại, phải im lặng. Chi tiết tính cách: có thiện cảm/áy náy với Vương Lâm."
          },
          { bridge: true, khoang: "@c0007–@c0010", text: "Không xuất hiện trực tiếp — đang làm đồng tử trong Hằng Nhạc Phái." },
          {
            chuong: "@c0021",
            importance: "major",
            text: "Gặp lại Vương Lâm khi phát linh đan; lén kéo VL ra ngoài hàn huyên, lén nhét 3 viên linh đan vào tay VL, gọi VL là 'Thiết Trụ ca'. Sau đó bưng khay phát linh thạch + dược hoàn chính thức cho đám đệ tử hồng y."
          },
          {
            chuong: "@c0030",
            importance: "normal",
            text: "Tới tìm VL giữa mùa đông, viện cớ mang đồ bỏ quên. Mục đích thật: ngỏ mượn Tham Thân tiên phù của VL. Xác nhận bản thân TỚI CHƯA đạt Ngưng Khí tầng 1 dù có linh đan hỗ trợ."
          },
          {
            chuong: "@c0043",
            importance: "major",
            text: "Bị tam sư huynh Lữ Vân Kiệt lừa uống Tạo Hóa Đan rồi ép tu Lô Hỏa Khai Đỉnh Đại Pháp — bị biến thành dược lô luyện đan. Linh khí trong người lưu động quỷ dị, sắp khí tán thân vong, thọ mệnh chỉ còn ~1 năm. Cầu xin Vương Lâm báo thù Lữ Vân Kiệt. (@c0043)"
          },
          {
            chuong: "@c0050",
            importance: "major",
            text: "Được Vương Lâm phá màn ngũ thải lò luyện của Lữ Vân Kiệt, cứu thoát khỏi quỷ môn quan. Hồng Kiểm lão giả xác nhận Lô Hỏa Khai Đỉnh có thật. Lữ Vân Kiệt bị phạt diện bích 20 năm; Vương Hạo được thăng thành nội môn đệ tử. (@c0050)"
          },
          {
            chuong: "@c0087",
            importance: "major",
            text: "Đằng Hóa Nguyên tàn sát toàn bộ Vương gia (100+ người); Vương Hạo sống sót — Ngưng Khí tầng 7. (@c0087)"
          }
        ],
        tuVi: "Phàm nhân (Ch.2–10), đồng tử Hằng Nhạc Phái. Được học tiên pháp cấp thấp với tư cách đồng tử/người hầu, không làm tạp vụ. Chưa đạt Ngưng Khí tầng 1 tính đến @c0030. Sau @c0050: thăng nội môn đệ tử. Ngưng Khí tầng 7 @c0087.",
        tuViMoc: [
          { chuong: "@c0087", canhGioi: "Ngưng Khí kỳ tầng 7", text: "Sống sót sau vụ Đằng Hóa Nguyên tàn sát Vương gia @c0087." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Họ hàng / ân nhân", ghiChu: "Có thiện cảm thật sự; định bênh khi bị sỉ nhục nhưng bị cha ngăn. Vương Lâm cứu khỏi lò luyện đan @c0050.", tag: "an-nhan" },
          { ten: "Lữ Vân Kiệt", quanHe: "Kẻ hại mình", ghiChu: "Tam sư huynh, lừa biến thành dược lô; bị Hoàng Long phạt diện bích @c0050.", tag: "thu-dich" },
          { ten: "Trung niên nhân (Tam sư huynh)", quanHe: "Chủ nhân / tiên sư (ban đầu)", ghiChu: "Thu Vương Hạo làm dược đồng nhờ linh chi; sau xác định đây chính là Lữ Vân Kiệt.", tag: "su-mon" }
        ],
        tuiDo: {
          phapBao: [],
          congPhap: [],
          danDuoc: [],
          linhThu: [],
          khac: [
            { ten: "Hộp ngọc (ngọc hạp)", moTa: "Vật do người tu chân phong ấn, cha Vương Hạo nhặt trong núi; bên trong chứa linh chi 300 năm. Đã dâng cho trung niên nhân (@c0003)." }
          ]
        }
      },
      nguon: ["@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0021", "@c0030", "@c0043", "@c0050", "@c0087"]
    },
    {
      id: "vuong-thien-thuy",
      name: "Vương Thiên Thủy",
      cn: "",
      aliases: ["Nhị ca", "Lão Nhị"],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc"],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      vaiTro: "Phụ thân",
      tinhCach: "Yêu thương con sâu sắc, tình cảm gia đình là trụ cột; chịu đựng bất công trong lặng lẽ nhưng có thể bùng nộ khi bị dồn cùng.",
      blurb: "Cha của Vương Lâm. Thợ mộc, con thứ vợ lẻ bị gia tộc bức rời đi; yêu thương con, đặt trọn kỳ vọng vào Vương Lâm. Tên xác nhận từ Ch.6.",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0001",
            importance: "normal",
            text: "Cảm động quỳ tạ Tứ thúc khi nghe tin Vương Lâm được nhường suất đề cử. Mở tiệc lớn. Dặn Vương Lâm nhớ ân Tứ thúc. Rơi lệ tiễn con."
          },
          {
            chuong: "@c0005",
            importance: "normal",
            text: "Vui mừng đón đoàn về, tưởng con thành tiên nhân. Khi biết con trượt cả ba hạng trắc thí, 'như già đi hơn mười tuổi, ngồi phịch xuống ghế'. An ủi con đừng làm chuyện dại dột."
          },
          {
            chuong: "@c0006",
            importance: "normal",
            text: "Tên xác nhận: tự xưng 'Vương Thiên Thủy' khi quát thẳng Vương Thiên Sơn, tố cáo đại ca cướp phần gia sản ông nội lưu lại. Vớ băng ghế định đánh nhau, bị Tứ thúc ngăn."
          },
          {
            chuong: "@c0007",
            importance: "normal",
            text: "Trên xe ngựa về nhà, an ủi con: bản thân từng bị đuổi ra gia môn còn chán nản hơn nhưng vẫn kiên trì; khuyên con về nhà đọc sách hoặc theo Tứ thúc ra ngoài. Can ngăn Tứ thúc khỏi xung đột với Vương Thiên Sơn."
          },
          {
            chuong: "@c0009",
            importance: "normal",
            text: "Thương tâm rơi lệ, ôm con khóc khi tìm thấy Vương Lâm dưới chân vách núi. Hiểu lầm con muốn tự sát. Theo đệ tử Hằng Nhạc Phái đến phái để chăm con."
          },
          {
            chuong: "@c0010",
            importance: "minor",
            text: "Vui mừng tiễn con vào phái sau khi Vương Lâm được nhận làm ký danh đệ tử; để lại khoai lang cho con rồi xuống núi."
          },
          { bridge: true, khoang: "@c0011+", text: "Không xuất hiện trực tiếp trong phạm vi đã đọc (Ch.1–10) — đang ở nhà." }
        ],
        tuVi: "Phàm nhân (Ch.1–10). Không liên quan tu tiên.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Con trai", ghiChu: "Đặt trọn kỳ vọng vào con; vui mừng và lo lắng xuyên suốt.", tag: "cha-me" },
          { ten: "Tứ thúc", quanHe: "Em ruột", ghiChu: "Mang ơn vì nhường suất tu tiên và sau đó giúp con vào phái.", tag: "ho-hang" },
          { ten: "Vương Thiên Sơn", quanHe: "Anh ruột (Đại ca)", ghiChu: "Quan hệ thù địch — từng cùng gia tộc bức rời đi, cướp gia sản.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0001", "@c0005", "@c0006", "@c0007", "@c0009", "@c0010"]
    },
    {
      id: "me-vuong-lam",
      name: "Mẹ Vương Lâm",
      cn: "",
      aliases: ["Nhị nương", "Nhị tẩu"],
      gioiTinh: "nu",
      theLuc: ["Vương Thị Gia Tộc"],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      vaiTro: "Mẫu thân",
      tinhCach: "Hiền hậu, lo lắng cho con; hành động nhân hậu từ trước đặt nền ân nghĩa cho toàn gia đình (Ch.1).",
      blurb: "Mẹ của Vương Lâm. Hiền hậu, từng chiếu cố Tứ thúc lúc nhỏ — là lý do Tứ thúc nhường suất đề cử để báo ân.",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0001",
            importance: "normal",
            text: "Cùng chồng quỳ tạ Tứ thúc. Chuẩn bị hành lý và khoai lang nướng cho Vương Lâm. Rơi lệ tiễn con. Được nhắc là người từng chiếu cố Tứ thúc lúc nhỏ — nguồn gốc ân nghĩa."
          }
        ],
        tuVi: "Phàm nhân (Ch.1). Không liên quan tu tiên.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Con trai", ghiChu: "Lo lắng, thương yêu.", tag: "cha-me" },
          { ten: "Tứ thúc", quanHe: "Em chồng", ghiChu: "Người bà từng chiếu cố — lý do ân nghĩa nhường suất.", tag: "ho-hang" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0001"]
    },
    {
      id: "dai-ba",
      name: "Vương Thiên Sơn",
      cn: "",
      aliases: ["Đại bá", "Đại ca (của cha Vương Lâm)"],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc"],
      canhGioiCaoNhat: "Phàm nhân",
      trangThai: "song",
      vaiTro: "Họ hàng (bác cả / phản diện nội tộc)",
      tinhCach: "Giả tạo, bề ngoài xã giao nhưng trong lòng khinh thường nhánh Nhị đệ; cầm đầu sỉ nhục, cướp gia sản.",
      blurb: "Bác cả của Vương Lâm, cha của Vương Trác. Kẻ cầm đầu việc sỉ nhục Vương Lâm và chiếm đoạt gia sản cha Vương Lâm. Ngoài mặt chúc mừng nhưng trong lòng đắc ý.",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0001",
            importance: "minor",
            text: "Đến dự tiệc cùng Vương Trác. Ngoài mặt quở trách con vì sỉ nhục Vương Lâm, nhưng trong lòng đắc ý và khinh thường."
          },
          {
            chuong: "@c0002",
            importance: "minor",
            text: "Đứng trong sân, dặn Vương Lâm làm theo 'ca ca' Vương Trác. Cung kính bẩm với tiên nhân, vui mừng kéo Vương Trác ra khi tiên nhân hỏi tên."
          },
          {
            chuong: "@c0006",
            importance: "normal",
            text: "Cầm đầu sỉ nhục sau khi Vương Lâm trượt tuyển. Bị Vương Thiên Thủy tố cáo cướp gia sản, phản pháo: 'thượng bất chính hạ tắc loạn'. Kiêng kị bằng hữu giang hồ của Tứ thúc nên ậm ừ rút lui."
          },
          {
            chuong: "@c0007",
            importance: "minor",
            text: "Bênh Vương Trác khi bị Tứ thúc dọa phế, đối đầu Tứ thúc: 'Lão Tứ, ngươi dám!'"
          }
        ],
        tuVi: "Phàm nhân (Ch.1–7). Không liên quan tu tiên.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Trác", quanHe: "Con trai", ghiChu: "Đắc ý vì con được tiên sư chỉ định.", tag: "cha-me" },
          { ten: "Vương Thiên Thủy", quanHe: "Em ruột", ghiChu: "Quan hệ thù địch; từng cướp gia sản.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0001", "@c0002", "@c0006", "@c0007"]
    },
    {
      id: "truong-ho",
      name: "Trương Hổ",
      cn: "",
      aliases: ["Đại đương gia"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái (cũ)", "Độc lập — đầu lĩnh nhóm hắc y"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 2 đỉnh phong (@c0066); tầng 3 ước đoán qua so sánh với đệ tử Đằng Gia @c0070",
      trangThai: "song",
      vaiTro: "Bạn cũ của Vương Lâm / đầu lĩnh nhóm cướp",
      tinhCach: "Bộc trực, biết ơn, hay chửi thề; chịu khổ lâu năm nhưng vẫn nhiệt tình giúp người mới; thực tế và am hiểu quy củ môn phái. Dưới uy lực của sư phụ độc ác vẫn giữ tính cách thật, lập tức đứng về phía Vương Lâm khi nhận ra bạn cũ.",
      blurb: "Bạn cùng phòng đầu tiên của Vương Lâm tại Hằng Nhạc Phái. Sau khi bỏ trốn, bị bắt và bị sư phụ tà đạo Bạch Triển kiểm soát bằng độc. Tái ngộ Vương Lâm trong trận cướp đoàn tiêu ở @c0066–@c0069; sau khi Bạch Triển chết bởi tay Vương Lâm, tự do theo hắn tới Đằng Gia thành.",
      tabs: {
        diem: [
          { text: "Người bạn đầu tiên của Vương Lâm trong phái — cho khoai lang, cảnh báo về 'con chồn', chia sẻ kiến thức quy củ môn phái không giấu diếm.", chuong: "@c0010" }
        ],
        kinhLich: [
          {
            chuong: "@c0010",
            importance: "normal",
            text: "Lần đầu xuất hiện — ký danh đệ tử áo xám gầy yếu, bạn cùng phòng của Vương Lâm. Đói hai ngày; Vương Lâm cho khoai lang, kết thân. Nhận ra Vương Lâm là 'kẻ dựa tự sát mà vào phái', ngượng nhưng bội phục. Cảnh báo về 'con chồn' tạp vụ tâm địa gian xảo, sẽ không nhìn ký danh đệ tử như con người."
          },
          {
            chuong: "@c0011",
            importance: "normal",
            text: "Làm việc đốn củi đã ba năm; hằng ngày về phòng với vẻ mệt mỏi quá độ. Để lại mấy củ khoai lang cho Vương Lâm (khoai dại trong núi bị người khác chiếm), giải thích quy chế ba tầng đệ tử và khái niệm linh căn. Sau đó ngập ngừng xin lại hai củ khoai lang, ăn xong ngủ say."
          },
          {
            chuong: "@c0014",
            importance: "major",
            text: "Đêm mưa giông: Thạch Châu hút toàn bộ nước trong phòng kể cả nước trên người hắn — toàn thân phủ sương trắng xóa, quần áo ướt đẫm, sắc mặt tím tái, gần như ngừng thở (suýt đông chết). Sau khi châu hút hết nước, hô hấp hồi phục. Sáng hôm sau té khỏi giường, kêu khát nước. Không biết nguyên nhân thật."
          },
          {
            chuong: "@c0015",
            importance: "normal",
            text: "Tỉnh dậy phát hiện siêu ấm nước cạn khô, đệm chăn khô ráo nhăn nhúm, nghi 'hạn quỷ'; đồng ý giữ kín theo lời Vương Lâm. Trong phòng đang ngủ say khi Tôn trưởng lão đến lục soát phòng (@c0013 — Tôn đến, không gặp VL nhưng thấy Trương Hổ ngủ)."
          },
          {
            chuong: "@c0026",
            importance: "major",
            text: "Đột ngột biến mất khỏi Hằng Nhạc Phái sau khi giết Lưu sư huynh — vụ án bỏ ngỏ. Đông môn ghi nhận hắn rời đi không rõ nguyên nhân. Xác nhận bỏ trốn, tung tích không rõ."
          },
          {
            chuong: "@c0066",
            importance: "normal",
            text: "Tái xuất với danh 'Đại đương gia' — thiếu niên ~20 tuổi, vết sẹo trên mặt, Ngưng Khí tầng 2 đỉnh phong. Dẫn đầu nhóm hắc y phục kích đoàn tiêu Uy Vũ để cướp hộp gấm đựng nhân sâm 500 năm; dùng Hỏa Cầu thuật. Vương Lâm thấy quen mắt nhưng chưa khẳng định danh tính. (@c0066)"
          },
          {
            chuong: "@c0067",
            importance: "major",
            text: "Vương Lâm xác nhận là cố nhân 10 năm trước. Sư phụ Bạch Triển (Ngưng Khí tầng 15 đại viên mãn, tà đạo hút máu) xuất hiện thoáng qua và lập tức tra tấn Trương Hổ để kiểm soát. VL can thiệp bảo vệ Trương Hổ, đại chiến Bạch Triển. Trương Hổ bị hành hạ nhưng không bị giết. (@c0067)"
          },
          {
            chuong: "@c0069",
            importance: "major",
            text: "Sau khi Bạch Triển chết vì ngọc phù Đan bảo của Vương Lâm (@c0068), Trương Hổ nhổ độc tiêu từ người dậy, diệt sạch nhóm hắc y còn sót lại bằng hỏa cầu + hút kim sắc huyết châu vào người. Kể cho VL nghe toàn bộ lý do bỏ trốn, quá trình bị Bạch Triển khống chế bằng độc trùng, thân thế nhóm cướp. Giới thiệu Đằng Gia thành. Thực sự tự do sau 4 năm sống dưới trướng tà sư. (@c0069)"
          },
          {
            chuong: "@c0070",
            importance: "normal",
            text: "Cùng Vương Lâm vào Đằng Gia thành — Ngưng Khí tầng 3 (ước đoán từ so sánh với 2 đệ tử Đằng Gia tầng 3 tại cổng thành). Bị luồng gió của Trúc Cơ kỳ bên trong thổi bay, ngã lăn đất. (@c0070)"
          }
        ],
        tuViMoc: [
          { chuong: "@c0010", canhGioi: "Phàm nhân", text: "Phàm nhân — ký danh đệ tử Hằng Nhạc Phái, làm lao dịch; chưa tu tiên. Bỏ trốn khỏi phái sau @c0026 (sau khi giết Lưu sư huynh)." },
          { chuong: "@c0066", canhGioi: "Ngưng Khí kỳ tầng 2 đỉnh phong", text: "Tái xuất với danh 'Đại đương gia', đầu lĩnh nhóm hắc y; bị sư phụ tà đạo Bạch Triển khống chế bằng độc trùng ~4 năm. Dùng Hỏa Cầu thuật." },
          { chuong: "@c0070", canhGioi: "Ngưng Khí kỳ tầng 3 (ước đoán)", text: "Vào Đằng Gia thành cùng Vương Lâm; tu vi ước đoán tầng 3 qua so sánh với 2 đệ tử Đằng Gia tại cổng thành. Đã tự do hoàn toàn từ @c0069 sau khi Bạch Triển chết." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Bạn cũ / bạn đồng hành", ghiChu: "Người bạn đầu tiên của Vương Lâm trong phái; VL nhận ra và bảo vệ Trương Hổ khi sư phụ hành hạ (@c0067); sau khi Bạch Triển chết cùng đi tới Đằng Gia thành (@c0070).", tag: "ban-be" },
          { ten: "Bạch Triển", quanHe: "Sư phụ (ép buộc)", ghiChu: "Tà đạo Ngưng Khí tầng 15 đại viên mãn; khống chế Trương Hổ bằng độc trùng ~4 năm; chết bởi ngọc phù Đan bảo của Vương Lâm @c0068.", tag: "nguy-hiem" }
        ],
        tuiDo: {
          phapBao: [],
          congPhap: [
            { ten: "Hỏa Cầu thuật", moTa: "Tiên thuật bắn cầu lửa; Trương Hổ dùng trong trận phục kích đoàn tiêu @c0066 và diệt nhóm hắc y còn sống @c0069.", nguon: "@c0066, @c0069" }
          ],
          danDuoc: [],
          linhThu: [],
          khac: [
            { ten: "Kim sắc huyết châu", moTa: "Huyết châu màu vàng kim từ tà thuật hút máu của Bạch Triển; Trương Hổ hấp thu vào người sau khi Bạch Triển chết @c0069 — tác dụng chưa rõ.", nguon: "@c0069" }
          ]
        }
      },
      nguon: ["@c0010", "@c0011", "@c0014", "@c0015", "@c0026", "@c0066", "@c0067", "@c0068", "@c0069", "@c0070"]
    },
    {
      id: "ton-dai-tru",
      name: "Tôn Đại Trụ",
      cn: "",
      aliases: ["Tôn trưởng lão", "Trưởng lão họ Tôn"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 5 @c0020",
      trangThai: "tu-vong",
      vaiTro: "Phản diện giai đoạn đầu / sư phụ trên danh nghĩa của Vương Lâm",
      tinhCach: "Tham lam, hai mặt, ngoan độc; vì lợi mà thu đồ đệ, sẵn sàng âm mưu kìm hãm và định dùng Sưu Hồn thuật; địa vị trong môn phái thực ra 'mạt lưu' trong hàng Nhị đại đệ tử.",
      blurb: "Trưởng lão Hằng Nhạc Phái phụ trách vườn dược và cho phép ký danh đệ tử về thăm nhà. Phát hiện thảo dược héo bất thường, truy ra Vương Lâm, tịch thu hồ lô nước linh khí rồi thu VL làm đệ tử nội môn để hợp thức hóa việc chiếm hồ lô và moi thêm bí mật. Âm mưu kìm hãm VL dưới Ngưng Khí tầng 3, rồi từ bỏ và trục xuất sau khi thất bại.",
      tabs: {
        diem: [
          { text: "Tham lam che mặt — vì thèm hồ lô nước linh khí mà thu một ký danh đệ tử tư chất kém vào nội môn, bất chấp tiếng chế giễu của sư huynh đệ.", chuong: "@c0016" },
          { text: "Ngoan độc hai mặt — bề ngoài hòa ái với đệ tử, bên trong âm mưu bỏ dược vật gây trọc khí vào đồ ăn để kìm hãm tu luyện, định dùng Sưu Hồn thuật khi VL đạt Ngưng Khí tầng 1.", chuong: "@c0018, @c0019" },
          { text: "Kết luận sai chết người — sau hàng loạt thí nghiệm thất bại, đoán sai hồ lô tầm thường, buông tha Vương Lâm và bỏ qua bí mật Thạch Châu.", chuong: "@c0019" }
        ],
        kinhLich: [
          {
            chuong: "@c0012",
            importance: "normal",
            text: "Phát hiện Lam Tuyến Thảo gần cổng vườn dược héo rũ bất thường ngay sau khi Vương Lâm rời đi; sững người, khởi đầu mạch điều tra."
          },
          {
            chuong: "@c0013",
            importance: "normal",
            text: "Phát hiện cả Tử Dạ Hoa cũng héo (mất nước dù bùn ẩm). Mở cuộc điều tra: bay bằng đám mây bảy màu đến phòng tạp vụ, quát họ Lưu như sấm, hỏi về Vương Lâm. Đến phòng Vương Lâm không gặp (VL đã về quê), hoãn chờ VL trở về."
          },
          {
            chuong: "@c0015",
            importance: "normal",
            text: "Sốt sắng triệu kiến Vương Lâm ngay khi hắn trở về; lộ diện trực tiếp lần đầu — lão già nhiều nếp nhăn, ánh mắt sáng ngời, vẻ lãnh đạm."
          },
          {
            chuong: "@c0016",
            importance: "major",
            text: "Dùng Thất Thải Tường Vân + thần thức lục soát phòng Vương Lâm, tịch thu hồ lô nước linh khí (linh khí cực sung túc). Thu VL làm đệ tử nội môn để hợp thức hóa việc chiếm hồ lô, nghi hồ lô liên quan thảo dược héo."
          },
          {
            chuong: "@c0017",
            importance: "normal",
            text: "Lần đầu lộ tên thật Tôn Đại Trụ. Chính thức thu VL, tặng túi trữ vật và công pháp Ngưng Khí tam thiên. Phô thực lực (tử quang nghiền nát đá). Hứa hạ phẩm linh thạch đổi hồ lô — bị VL dắt mũi."
          },
          {
            chuong: "@c0018",
            importance: "normal",
            text: "Lén giám thị Vương Lâm cả ngày, bị qua mặt. Lộ bản chất ngoan độc trong độc thoại: âm mưu bỏ dược vật gây trọc khí vào đồ ăn VL để kìm hãm VL dưới Ngưng Khí tầng 3."
          },
          {
            chuong: "@c0019",
            importance: "normal",
            text: "Ép Vương Lâm uống bát thuốc đen, đích thân truyền khí trợ ngưng linh khí — đều thất bại do trọc khí hóa giải. Kết luận sai hồ lô tầm thường, từ bỏ ý định moi bí mật, trục xuất VL khỏi chính viện. Tiết lộ kế hoạch Sưu Hồn thuật (bị treo lại vô thời hạn)."
          },
          {
            chuong: "@c0020",
            importance: "minor",
            text: "Tu vi được xác nhận: Ngưng Khí kỳ tầng 5. Giám thị Vương Lâm thêm mười ngày rồi chán nản từ bỏ hoàn toàn."
          },
          {
            chuong: "@c0034",
            importance: "minor",
            text: "Cự tuyệt đề nghị xin rời núi của Vương Lâm, tiết lộ sự kiện đại hội giao lưu Huyền Đạo Tông sau 4 năm — toàn đệ tử nội môn phải chuẩn bị tập huấn."
          },
          {
            chuong: "@c0038",
            importance: "major",
            text: "Kinh ngạc khi Vương Lâm báo cáo đã đạt Ngưng Khí tầng 3; lập tức bỏ ý định Sưu Hồn thuật đã ấp ủ từ lâu. Chính thức nhận Vương Lâm làm đệ tử chân chính duy nhất cả đời — phá lệ cá nhân. Dạy Khu Vật Thuật, giới thiệu phi kiếm bảy màu Tiểu Kiếm thất thải, giao lệnh bài để VL vào Kiếm Linh Các chọn phi kiếm."
          },
          {
            chuong: "@c0039",
            importance: "minor",
            text: "Kinh ngạc khi nghe VL chọn Cự Phú — phi kiếm đệ nhất Triệu quốc, di vật sư tổ ngàn năm. Khen Vương Lâm có đảm lược."
          },
          {
            chuong: "@c0051",
            importance: "major",
            text: "Âm mưu dùng Tam Thi Tuyến Trùng thảo (không màu không mùi, khống chế 100% người dưới Trúc Cơ) biến VL thành con rối. Bị VL phát giác và phản sát; chết tại đây — xác bị vứt xuống khe núi. (@c0051)"
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 5 (xác nhận @c0020). Là Nhị đại đệ tử Hằng Nhạc Phái — danh xưng 'trưởng lão' chỉ với ký danh đệ tử; nội môn gọi là 'sư thúc'. Địa vị thực tế thấp trong hàng Nhị đại, bị giao việc không quan trọng.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đệ tử chân chính (chính thức từ @c0038)", ghiChu: "Ban đầu thu làm đệ tử để chiếm hồ lô; âm mưu kìm hãm và tính dùng Sưu Hồn thuật (@c0016–@c0019). @c0038: thấy VL đạt tầng 3, bỏ hẳn ý định Sưu Hồn, chính thức thu làm đệ tử chân chính duy nhất cả đời. Bị VL giết @c0051.", tag: "de-tu" },
          { ten: "Lưu sư huynh", quanHe: "Thuộc hạ (ký danh đệ tử)", ghiChu: "Phụ trách phòng tạp vụ dưới quyền lão; hoảng sợ khi Tôn đích thân tới hỏi (@c0013).", tag: "thu-ha" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Thất Thải Tường Vân (Tiểu Kiếm thất thải)", moTa: "Phi kiếm bảy màu bảy thải của Tôn Đại Trụ — vân/mây bảy màu lóng lánh, tốc độ cực nhanh. Dùng để di chuyển và áp chế khi lục soát phòng Vương Lâm (@c0016). Tôn khoe với VL @c0038.", nguon: "@c0016, @c0038" }
          ],
          congPhap: [
            { ten: "Khu Vật Thuật", moTa: "Thần thông khu khiển phi kiếm từ xa; Tôn Đại Trụ dạy Vương Lâm @c0038.", nguon: "@c0038" },
            { ten: "Sưu Hồn thuật (bị ẩn)", moTa: "Bí thuật nguy hiểm: moi hồn tra tấn, người bị dùng dễ tử vong hoặc si ngốc cả đời, người thi triển cũng tụt tu vi. Tôn Đại Trụ từng có kế hoạch dùng lên VL nhưng bỏ sau @c0038.", nguon: "@c0019, @c0038" }
          ],
          danDuoc: [],
          linhThu: [],
          khac: [
            { ten: "Hồ lô tịch thu", moTa: "Hồ lô nước linh khí (do Vương Lâm dùng Thạch Châu ngâm tạo ra) mà Tôn Đại Trụ lấy đi; linh khí cạn dần trong ~1 tháng (@c0019).", nguon: "@c0016, @c0019" },
            { ten: "Bát thuốc đen tuyền", moTa: "Dược dịch tự chế từ lượng lớn dược liệu trân quý để cưỡng ép trợ Vương Lâm ngưng linh khí — thất bại (@c0019).", nguon: "@c0019" },
            { ten: "Lam Tuyến Thảo, Tử Dạ Hoa", moTa: "Thảo dược trong vườn dược của Tôn Đại Trụ; héo rũ bất thường sau khi Vương Lâm mang Thạch Châu qua (@c0012–@c0013).", nguon: "@c0012, @c0013" }
          ]
        }
      },
      nguon: ["@c0012", "@c0013", "@c0015", "@c0016", "@c0017", "@c0018", "@c0019", "@c0020", "@c0034", "@c0038", "@c0039", "@c0051"]
    },
    {
      id: "truong-su-huynh-hac-y",
      name: "Trương sư huynh (hắc y)",
      cn: "",
      aliases: ["tam sư huynh (tạm gọi)"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 5 @c0028",
      trangThai: "song",
      vaiTro: "phu",
      tinhCach: "Bí ẩn, thực dụng; không giải thích nhiều khi giao việc",
      blurb: "Đệ tử nội môn Hằng Nhạc Phái mặc hắc y, vừa đột phá Ngưng Khí tầng 5 tại Ch.28. Giao cho Vương Lâm chức quản sự khu tạp vụ mà không giải thích lý do.",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0027",
            importance: "normal",
            text: "Xuất hiện bí ẩn tại phòng Vương Lâm trong bộ hắc y — danh tính chưa rõ ('tam sư huynh' theo cách xưng hô). Không nêu mục đích rõ ràng."
          },
          {
            chuong: "@c0028",
            importance: "major",
            text: "Xác nhận là Trương sư huynh — vừa đột phá Ngưng Khí tầng 5. Giao cho Vương Lâm chức quản sự khu tạp vụ Hằng Nhạc Phái, phụ trách 100 đệ tử ký danh; nâng hạn mức nước từ 500 lên 1000 cân/ngày."
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 5 (@c0028).",
        tuViMoc: [
          { chuong: "@c0028", canhGioi: "Ngưng Khí kỳ tầng 5", text: "Vừa đột phá tầng 5 — xác nhận khi giao việc cho Vương Lâm." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0027", "@c0028"]
    },
    {
      id: "luu-su-huynh",
      name: "Lưu sư huynh",
      cn: "",
      aliases: ["Hoàng Thử lang"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Chưa xác nhận rõ (đệ tử nội môn Hằng Nhạc Phái)",
      trangThai: "tu-vong",
      vaiTro: "phu",
      tinhCach: "Chưa được mô tả đủ trước khi tử vong",
      blurb: "Đệ tử nội môn Hằng Nhạc Phái, biệt danh 'Hoàng Thử lang' (@c0030). Bị Trương Hổ giết tại Ch.26; vụ án bỏ ngỏ.",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0026",
            importance: "major",
            text: "Bị Trương Hổ giết vì mâu thuẫn cá nhân. Trương Hổ bỏ trốn ngay sau đó qua Đông môn. Vụ án bỏ ngỏ trong môn phái."
          }
        ],
        tuVi: "Tu vi cụ thể chưa được xác nhận trong nguyên tác tới Ch.30.",
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0026", "@c0030"]
    },
    {
      id: "nu-tu-chu-tu",
      name: "Nữ tử họ Chu & họ Từ",
      cn: "",
      aliases: ["Chu sư tỷ (phó viện)", "Từ sư tỷ"],
      gioiTinh: "nu",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 3 (cả hai, xác nhận @c0037); Chu sư tỷ kẹt ở tầng 3, không tiến trong 2 năm @c0037",
      trangThai: "song",
      vaiTro: "phu",
      tinhCach: "Chưa được mô tả đủ",
      blurb: "Hai nữ đệ tử Hằng Nhạc Phái. Chu sư tỷ là người Vương Trác theo đuổi; bị kẹt ở Ngưng Khí tầng 3 suốt 2 năm — bình cảnh 'tam tiến tứ' (@c0037).",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0021",
            importance: "normal",
            text: "Chứng kiến cảnh Vương Trác đề nghị tỉ võ và đe dọa Vương Lâm trước đám đệ tử tại phó viện."
          },
          {
            chuong: "@c0037",
            importance: "minor",
            text: "Chu sư tỷ hỏi Trương Cuồng về bình cảnh tam tiến tứ, tự nhận đang ở Ngưng Khí tầng 3; là người Vương Trác theo đuổi. Sau 2 năm vẫn kẹt ở tầng 3, linh khí không tăng nửa điểm — ví dụ điển hình bình cảnh người thường. Từ sư tỷ sau 4 năm đạt Ngưng Khí tầng 3."
          },
          {
            chuong: "@c0041",
            importance: "minor",
            text: "Trong đợt Huyền Đạo Tông tới Hằng Nhạc Phái, Nữ tử họ Chu (Chu sư tỷ) chủ động ngồi bên Vương Lâm trò chuyện. Khi VL nói đến 'Đại đạo vô tình', cô thừa nhận bản thân cũng không thể dứt bỏ tình thân gia đình. (@c0041)"
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 3 (xác nhận @c0037).",
        tuViMoc: [
          { chuong: "@c0037", canhGioi: "Ngưng Khí kỳ tầng 3", text: "Cả hai xác nhận ở tầng 3 sau 4 năm hậu sơn; Chu sư tỷ kẹt, Từ sư tỷ mới đạt." }
        ],
        nhanMach: [
          { ten: "Vương Trác", quanHe: "Người theo đuổi (Chu sư tỷ)", ghiChu: "Vương Trác đang khổ sở theo đuổi Chu sư tỷ (@c0037).", tag: "xa-la" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0021", "@c0037", "@c0041"]
    },
    {
      id: "truong-cuong",
      name: "Trương Cuồng",
      cn: "",
      aliases: ["Nhị sư huynh", "Nam tử tử y"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái (cũ)", "Huyền Đạo Tông"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 6 @c0035/@c0037",
      trangThai: "tu-vong",
      vaiTro: "Nhị sư huynh Hằng Nhạc Phái (cũ); sau chuyển sang Huyền Đạo Tông",
      tinhCach: "Lạnh lùng, thực dụng, sắc bén; thực ra có phần hào phóng nhưng bộ mặt thật tàn khốc khi quyền lợi bị đụng chạm. Khuyên nhủ Vương Lâm về nghị lực nhưng trước đó đã công khai gây nguy hiểm cho VL tại giao dịch hội.",
      blurb: "Nhị sư huynh Hằng Nhạc Phái, mặc tử y (đệ tử nòng cốt), tu vi Ngưng Khí tầng 6. Người đổi khẩu quyết tầng 4–9 cho Vương Lâm tại giao dịch hội bí mật; sau đó quản lý hậu sơn trong 4 năm tập huấn.",
      tabs: {
        diem: [
          { text: "Nguy hiểm ẩn — công khai tiết lộ VL có 'chất lỏng thần bí' trước cả hội, đặt VL vào tầm ngắm dù bề ngoài ra vẻ hào phóng.", chuong: "@c0033" },
          { text: "Tinh tế — lặng lẽ tiếp cận VL bên sông linh khí mà thần thức VL không phát hiện; dò xét kỹ trước khi tin lời giải thích (@c0037).", chuong: "@c0037" }
        ],
        kinhLich: [
          {
            chuong: "@c0033",
            importance: "major",
            text: "Tại giao dịch hội bí mật, không che mặt, được cả hội cung kính. Đổi khẩu quyết tầng 4-9 lấy toàn bộ Linh Khí Tuyền Thủy còn lại của VL. Công khai mời VL đến hậu sơn nếu có thêm chất lỏng — đặt VL vào nguy hiểm."
          },
          {
            chuong: "@c0035",
            importance: "major",
            text: "Quản lý hậu sơn (sơn cốc tu luyện), mặc tử y. Xác nhận tu vi tầng 6. Tiếp nhận đệ tử, phát Đoạt Linh Đan 100 viên/người/năm; hỏi han VL, 'tiễn' hắn vào huyệt động."
          },
          {
            chuong: "@c0037",
            importance: "normal",
            text: "Chủ trì buổi giảng giải 2 bình cảnh Ngưng Khí kỳ (tam tiến tứ cần lĩnh ngộ đại đạo; ngũ tiến lục hao linh khí lớn). Lặng lẽ tiếp cận dò xét VL bên sông linh khí — không bị thần thức VL phát hiện; tạm tin lời giải thích."
          },
          {
            chuong: "@c0048",
            importance: "minor",
            text: "Liễu Mi tiết lộ bí mật của Trương Cuồng trước tỷ thí: hắn dùng Linh Tuyền thủy để duy trì diện mạo trẻ trung (bí mật giữ nhan). (@c0048)"
          },
          {
            chuong: "@c0058",
            importance: "normal",
            text: "Chuyển sang Huyền Đạo Tông sau khi Hằng Nhạc mất sơn môn. Dẫn Chu Bằng về thôn tìm cha mẹ VL để trả thù — tự tìm ra địa chỉ qua danh sách đệ tử Hằng Nhạc (vì Vương Trác không khai). Tham lam, muốn đoạt pháp bảo VL. Khẳng định dịch thể là nguyên nhân VL trở nên mạnh — đã đưa mẫu cho Chu Bằng. (@c0058)"
          },
          {
            chuong: "@c0059",
            importance: "major",
            text: "Bị VL chặn ở cổng thôn khi định thi hành lệnh Chu Bằng giết cha mẹ VL. Quỳ đổ tội rồi bất ngờ phóng ngọc phù hóa phi kiếm + cây roi gỗ đen đánh VL rồi bỏ chạy. Bị VL dùng Dẫn Lực thuật nhất tâm nhị dụng bóp gãy cổ — chết tại chỗ. Xác bị thiêu bằng hỏa cầu. (@c0059)"
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 6 (@c0035, @c0037). Mặc tử y — đệ tử nòng cốt Hằng Nhạc Phái, cấp cao nhất.",
        tuViMoc: [
          { chuong: "@c0035", canhGioi: "Ngưng Khí kỳ tầng 6", text: "Xác nhận tu vi khi quản hậu sơn; nghe đồn đã tầng 6 (@c0035); xác nhận lại @c0037." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Hạ cấp (quan hệ nguy hiểm ngầm)", ghiChu: "Đổi khẩu quyết cho VL; công khai gây nguy hiểm; VL biết bộ mặt thật nên không để bụng ân huệ nhỏ.", tag: "nguy-hiem" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0033", "@c0035", "@c0037", "@c0048", "@c0058", "@c0059"]
    },
    {
      id: "dao-hu",
      name: "Đạo Hư",
      cn: "",
      aliases: ["Đạo Hư thượng tiên", "Đạo Hư sư thúc"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Chưa nêu rõ trong nguyên tác (@c0034); là sư thúc của môn phái, cao hơn Tôn Đại Trụ",
      trangThai: "song",
      vaiTro: "Sư phụ của Vương Trác",
      tinhCach: "Chưa được mô tả trực tiếp; được Hằng Nhạc Phái kính trọng.",
      blurb: "Sư thúc Hằng Nhạc Phái, sư phụ của Vương Trác. Nội bộ chỉ định Vương Trác làm đệ tử truyền thừa từ trước trắc thí. Hứa trong mười năm Vương Trác sẽ thành nhân tài kiệt xuất (@c0005).",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0003", importance: "minor", text: "Được nhắc là đã nội bộ chỉ định Vương Trác làm đệ tử truyền thừa; Vương Trác đạt trắc thí nhờ một phần tiến cử của Đạo Hư." },
          { chuong: "@c0005", importance: "normal", text: "Chính thức thu Vương Trác làm đồ đệ sau trắc thí; hứa mười năm thành nhân tài kiệt xuất." },
          { chuong: "@c0034", importance: "minor", text: "Được Tôn Đại Trụ nhắc đến khi so sánh Vương Trác (đệ tử của Đạo Hư sư thúc) với Vương Lâm (@c0034)." }
        ],
        tuVi: "Chưa nêu rõ trong nguyên tác tới Ch.40. Là sư thúc Hằng Nhạc Phái — địa vị cao hơn Tôn Đại Trụ. Cảnh giới ẩn → ghi nhận trong ghiChu.",
        ghiChu: "Cảnh giới chưa xác nhận qua nguyên tác. Là sư thúc cấp cao của Hằng Nhạc Phái.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Trác", quanHe: "Đệ tử truyền thừa", ghiChu: "Nhìn trúng và thu Vương Trác từ trước; hứa mười năm thành nhân tài.", tag: "de-tu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0003", "@c0005", "@c0034"]
    },
    {
      id: "ton-hao",
      name: "Tôn Hạo",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 4 đỉnh phong (sắp đột phá) @c0036",
      trangThai: "song",
      vaiTro: "phu",
      tinhCach: "Ngạo mạn, khinh thường kẻ yếu hơn; đi cùng Vương Trác chế nhạo Vương Lâm.",
      blurb: "Đệ tử bạch y Hằng Nhạc Phái, ~24-25 tuổi. Đỉnh phong Ngưng Khí tầng 4, sắp đột phá. Ném bình sai Vương Lâm lấy nước, dọa giáo huấn — bị Trương Cuồng quát mắng (@c0036).",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0036", importance: "minor", text: "Ném bình xuống chân Vương Lâm, sai lấy nước, dọa giáo huấn viện lý do nhị sư huynh cho phép đánh nhau trong hậu sơn; bị Trương Cuồng bay xuống quát mắng, không dám nói gì." },
          { chuong: "@c0042", importance: "minor", text: "Chứng kiến Vương Lâm vào kiểm tra Ngô Công một mình; công khai mỉa mai — gọi là 'ngu' khi dám một mình vào với Ngô Công. (@c0042)" },
          { chuong: "@c0047", importance: "normal", text: "Xuất trận tỷ thí tại Thương Tùng Phong; đấu với Lý Sơn (Huyền Đạo Tông). Bị Lý Sơn dùng Phích Lịch đạn đánh bại (đạn kích hoạt bởi Lý Sơn ngầm gửi linh khí). Bại trận. (@c0047)" }
        ],
        tuVi: "Ngưng Khí kỳ tầng 4 đỉnh phong (@c0036).",
        tuViMoc: [
          { chuong: "@c0036", canhGioi: "Ngưng Khí kỳ tầng 4 đỉnh phong", text: "Xác nhận qua thần thức Vương Lâm quét qua (@c0036)." }
        ],
        nhanMach: [
          { ten: "Vương Trác", quanHe: "Đồng phe", ghiChu: "Cùng chế nhạo Vương Lâm tại hậu sơn.", tag: "dong-phe" },
          { ten: "Lý Sơn", quanHe: "Đối thủ", ghiChu: "Đánh bại Tôn Hạo tại tỷ thí bằng Phích Lịch đạn @c0047.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0036", "@c0042", "@c0047"]
    },
    {
      id: "hoang-long-chan-nhan",
      name: "Hoàng Long chân nhân",
      cn: "",
      aliases: ["Chưởng môn Hằng Nhạc Phái", "Nam tử áo lam"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Chưa nêu rõ; là chưởng môn Hằng Nhạc Phái, trình độ cao; sở hữu Tử Nhạc Tiên Kiếm chứa Long Hồn @c0040",
      trangThai: "song",
      vaiTro: "Chưởng môn Hằng Nhạc Phái",
      tinhCach: "Trầm mặc, uy quyền; lạnh nhạt nhưng biết giữ thể diện môn phái; điềm tĩnh trước áp lực Huyền Đạo Tông.",
      blurb: "Chưởng môn Hằng Nhạc Phái. Tên Hoàng Long chân nhân lần đầu xác nhận @c0040. Sở hữu Tử Nhạc Tiên Kiếm chứa Long Hồn — hóa tử long uy hiếp Thiên Túc Ngô Công. Là sư huynh của Tôn Đại Trụ.",
      tabs: {
        diem: [
          { text: "Điềm tĩnh mà uy mãnh — dùng Tử Nhạc Tiên Kiếm hóa tử long khi Huyền Đạo Tông dùng Thiên Túc Ngô Công ra oai.", chuong: "@c0040" }
        ],
        kinhLich: [
          { chuong: "@c0035", importance: "major", text: "Chủ trì đại điện, tuyên bố đợt tập huấn 4 năm; xuất 1 vạn linh đan; dùng pháp thuật dịch chuyển tập thể đệ tử vào hậu sơn. (Tên chưa xác nhận chương này.)" },
          { chuong: "@c0038", importance: "normal", text: "Kết thúc đợt tập huấn tại đại điện; lệnh đệ tử tầng 5+ ở lại, còn lại giải tán; thông báo Huyền Đạo Tông tới sau 3 ngày." },
          { chuong: "@c0039", importance: "minor", text: "Đứng đầu đoàn nghênh đón Huyền Đạo Tông. (Tên chưa xác nhận chương này.)" },
          { chuong: "@c0040", importance: "major", text: "Tên Hoàng Long chân nhân lần đầu xác nhận. Thúc Tử Nhạc Tiên Kiếm hóa tử long uy hiếp Thiên Túc Ngô Công; thỏa thuận điều kiện tỷ thí 10 năm với Âu Dương (nếu thua trả pháp bảo + 100 phi kiếm; nếu thắng nhận bí pháp khống chế linh thú)." },
          { chuong: "@c0049", importance: "normal", text: "Sau màn Vương Lâm đánh Ngô Công lấy dịch độc, nêu tên VL làm gương cho toàn môn; cảnh báo (qua Âu Dương): Tu Chân Quốc Triệu không có Nguyên Anh lão tổ, bị xâm phạm không ai hậu thuẫn. (@c0049)" },
          { chuong: "@c0050", importance: "normal", text: "Thẩm vấn Vương Lâm riêng về tiên pháp và tu vi thật sau khi VL cứu Vương Hạo. VL tiếp tục chối quanh, khăng khăng 'không biết'. Chứng kiến xử lý vụ Lữ Vân Kiệt: phạt diện bích 20 năm; nâng Vương Hạo thành nội môn đệ tử. (@c0050)" },
          { chuong: "@c0054", importance: "major", text: "Tử Nhạc Tiên Kiếm bị Phác Nam Tử đoạt lấy và giao cho Âu Dương sử dụng khi Huyền Đạo Tông chiếm Hằng Nhạc sơn môn. Hộ sơn đại trận thất bại toàn diện. (@c0054)" },
          { chuong: "@c0055", importance: "normal", text: "Chọn theo nhóm tàn quân Hằng Nhạc (Lưu Văn Cử + lão phu nhân) rút về Tượng Xà sơn; ai điếu Tử Nhạc Tiên Kiếm ('kiếm còn người còn'). (@c0055, @c0056)" }
        ],
        tuVi: "Cảnh giới chưa nêu rõ trong nguyên tác tới Ch.57. Là chưởng môn — cao nhất Hằng Nhạc Phái trong truyện tới giờ.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Tôn Đại Trụ", quanHe: "Sư đệ", ghiChu: "Tôn Đại Trụ xưng 'Chưởng môn sư huynh' (@c0035).", tag: "su-mon" },
          { ten: "Âu Dương", quanHe: "Đối tác tỷ thí", ghiChu: "Trưởng lão Huyền Đạo Tông; thỏa thuận điều kiện tỷ thí 10 năm (@c0040).", tag: "doi-thu" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Tử Nhạc Tiên Kiếm", moTa: "Phi kiếm màu tím, tương truyền chứa Long Hồn; thúc động hóa thành cự long màu tím (tử long) uy hiếp linh thú đối phương (@c0040). Bị đoạt @c0054.", nguon: "@c0040" }
          ],
          congPhap: [], danDuoc: [], linhThu: [], khac: []
        }
      },
      nguon: ["@c0035", "@c0038", "@c0039", "@c0040", "@c0049", "@c0050", "@c0054", "@c0055", "@c0056"]
    },
    {
      id: "lieu-mi",
      name: "Liễu Mi",
      cn: "",
      aliases: [],
      gioiTinh: "nu",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Chưa xác nhận; dùng tiên pháp giấu tu vi (sương mù che chân tu vi) @c0040",
      trangThai: "song",
      vaiTro: "Nội môn đệ tử nổi bật Huyền Đạo Tông",
      tinhCach: "Tự tin về mị lực trời sinh; sắc sảo quan sát; chủ động để ý nhân vật lạ.",
      blurb: "Nữ đệ tử nổi bật nhất Huyền Đạo Tông, mỹ mạo tuyệt luân. Đánh giá nhầm Vương Lâm chỉ là Ngưng Khí tầng 3 (@c0040). Gặp VL lần đầu khi Huyền Đạo Tông tới Hằng Nhạc Phái; VL cảnh giác.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0040", importance: "normal", text: "Tới Hằng Nhạc Phái cùng đoàn Huyền Đạo Tông. Chú ý Vương Lâm, mỉm cười; VL gật đầu rồi rút lui. Tự tin về mị lực nhưng thất bại với VL. Đánh giá nhầm VL chỉ là Ngưng Khí tầng 3." },
          { chuong: "@c0047", importance: "normal", text: "Xuất trận tỷ thí tại Thương Tùng Phong, dùng Thủy Mạc đánh bại Triệu Long (đệ tử Hằng Nhạc Phái). (@c0047)" },
          { chuong: "@c0048", importance: "minor", text: "Tiết lộ bí mật Trương Cuồng (Nhị sư huynh dùng Linh Tuyền thủy giữ nhan) cho Vương Lâm biết trước tỷ thí. (@c0048)" }
        ],
        tuVi: "Chưa xác nhận; che giấu tu vi bằng tiên pháp cao minh (@c0040). Mặc tử y — đệ tử nòng cốt.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đối tượng để ý", ghiChu: "Ngạc nhiên VL không bị mê hoặc; đánh giá nhầm tu vi.", tag: "xa-la" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0040", "@c0047", "@c0048"]
    },
    {
      id: "tan-co-loi",
      name: "Tần Cổ Lôi",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Chưa xác nhận; là lão giả/trưởng lão @c0040",
      trangThai: "song",
      vaiTro: "Trưởng lão Huyền Đạo Tông",
      tinhCach: "Tự cao, chê bai đối thủ công khai.",
      blurb: "Lão giả/trưởng lão Huyền Đạo Tông. Bác bỏ cáo buộc 'mị thuật', giải thích sức hấp dẫn trời sinh của đệ tử mình; chê linh căn đệ tử Hằng Nhạc Phái ngũ hành lẫn lộn (@c0040).",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0040", importance: "minor", text: "Bác bỏ cáo buộc mị thuật của Hằng Nhạc Phái; chê linh căn đệ tử Hằng Nhạc kém (ngũ hành lẫn lộn)." }
        ],
        tuVi: "Chưa xác nhận (@c0040).",
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0040"]
    },
    {
      id: "au-duong",
      name: "Âu Dương",
      cn: "",
      aliases: ["Âu Dương lão nhân"],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Ngưng Khí tầng 14 (xác nhận @c0048 — VL không xuyên qua được tu vi của Âu Dương)",
      trangThai: "song",
      vaiTro: "Trưởng lão Huyền Đạo Tông, đại diện ra điều kiện",
      tinhCach: "Ngoài mặt lịch thiệp, bên trong kiên quyết với quyền lợi môn phái; thực dụng, đặt tên 'Cầm Long thủ' để cứu thể diện trước đám đông; có giao tình cũ với Hằng Nhạc Phái.",
      blurb: "Trưởng lão Huyền Đạo Tông, tu vi Ngưng Khí tầng 14. Ra điều kiện tỷ thí 10 năm với Hoàng Long chân nhân (@c0040). Tại tỷ thí, chứng kiến VL đánh bại liên tiếp đại đệ tử Chu Bằng và nhị sư huynh Dương Nghị; cảm nhận không thể nhìn thấu tu vi thật của VL, đặt tên 'Cầm Long thủ' (tên bịa, không có thật) để cứu thể diện (@c0048).",
      tabs: {
        diem: [
          { text: "Đặt tên 'Cầm Long thủ' — tên tự bịa, không có trong tiên pháp nào, chỉ nhằm cứu thể diện trước đám đông khi không giải thích được tu vi VL.", chuong: "@c0048" }
        ],
        kinhLich: [
          { chuong: "@c0040", importance: "normal", text: "Đại diện Huyền Đạo Tông thỏa thuận điều kiện tỷ thí; tán thưởng Tử Nhạc Tiên Kiếm; nhận Tống sư thúc làm bạn cũ, hàn huyên về rượu ngon." },
          { chuong: "@c0048", importance: "major", text: "Giám sát tỷ thí. Chứng kiến VL (lộ tầng 3) hạ Chu Bằng (tầng 13) ba lần và Dương Nghị; không nhìn xuyên được tu vi VL. Đặt tên 'Cầm Long thủ' để hội trường nghe (tên giả, không có thật — nhằm cứu thể diện môn phái). Bị Tư Đồ Nam bình luận 'không tầm thường'. (@c0048)" },
          { chuong: "@c0049", importance: "normal", text: "Đối đầu trực tiếp với VL trong cảnh VL đánh Ngô Công lấy dịch độc. Bị VL vừa đỡ cự kiếm vừa khống chế Ngô Công bằng Dẫn Lực thuật; nhận nước sông đổi dịch độc. Cảnh báo VL tu vi thật có thể khiến bị thù hận từ các tông phái lớn hơn. (@c0049)" }
        ],
        tuVi: "Ngưng Khí tầng 14 (@c0048 — thần thức VL không xuyên qua được; Tư Đồ Nam nhận xét 'không tầm thường').",
        tuViMoc: [
          { chuong: "@c0048", canhGioi: "Ngưng Khí kỳ tầng 14", text: "VL dùng thần thức quét nhưng không thấy được tu vi thật Âu Dương; suy ra tầng 14." }
        ],
        nhanMach: [
          { ten: "Tống sư thúc (Hằng Nhạc Phái)", quanHe: "Bạn cũ 20 năm", ghiChu: "Hai người quen nhau từ 20 năm trước; hàn huyên vui vẻ sau tỷ thí (@c0040).", tag: "ban-be" },
          { ten: "Vương Lâm", quanHe: "Đối tượng theo dõi", ghiChu: "Không thể nhìn thấu tu vi VL; cảnh báo VL về hậu quả lộ thực lực @c0049.", tag: "xa-la" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0040", "@c0048", "@c0049"]
    },
    {
      id: "tu-do-nam",
      name: "Tư Đồ Nam",
      cn: "",
      aliases: ["Lão quái vật"],
      gioiTinh: "nam",
      theLuc: ["Chu Tước Quốc (diệt)", "Thạch Châu"],
      canhGioiCaoNhat: "Lục cấp (Chu Tước Quốc hệ thống) @c0047; tinh hoa nguyên anh còn sót @c0047",
      trangThai: "sống sót trong Thạch Châu (thân hủy, chỉ còn thần thức + tinh hoa nguyên anh)",
      vaiTro: "Thế lực ẩn — người bảo hộ Vương Lâm từ bóng tối",
      tinhCach: "Bí ẩn, thận trọng cực kỳ, ẩn mình hàng chục năm; thẳng thắn khi đã quyết tiết lộ; âm mưu lâu dài vì điều kiện nhận chủ rất cao.",
      blurb: "Cường giả Chu Tước Quốc lục cấp, bị truy sát thân hủy, thần thức ẩn trong Thạch Châu. Âm thầm dùng tinh hoa nguyên anh trợ giúp Vương Lâm gần 30 năm. Tiết lộ bản thân tại Mộng Cảnh @c0046–@c0047. Điều kiện Thạch Châu nhận chủ: đủ ngũ hành linh căn + tu vi ≥ Anh Biến kỳ. (@c0047)",
      tabs: {
        diem: [
          { text: "Sự thật bên trong Thạch Châu — không phải vật bình thường, mà là nơi ẩn náu của cường giả lục cấp bị truy sát.", chuong: "@c0047" },
          { text: "Đánh giá VL = 'Linh Động Kỳ viên mãn' — tu vi thật của VL không phải tầng 3 mà xấp xỉ tầng 14 Ngưng Khí.", chuong: "@c0046" }
        ],
        kinhLich: [
          {
            chuong: "@c0046",
            importance: "major",
            text: "Xuất hiện lần đầu trong Mộng Cảnh khi VL 'nuốt' thần thức Lý Sơn. Tự xưng là 'lão quái vật' ẩn trong Thạch Châu. Xác nhận tu vi thật của VL = 'Linh Động Kỳ viên mãn'. Tiết lộ hệ thống Tu Chân Quốc 5 cấp và Liên Minh Tu Chân. (@c0046)"
          },
          {
            chuong: "@c0047",
            importance: "major",
            text: "Tiết lộ danh tính: cường giả Chu Tước Quốc lục cấp. Bị truy sát thân hủy, dùng tinh hoa nguyên anh ẩn vào Thạch Châu — nay chỉ còn tinh hoa nguyên anh sót lại. Từng dùng tinh hoa nguyên anh trợ giúp VL củng cố tu vi suốt gần 30 năm. Điều kiện nhận chủ Thạch Châu: đủ ngũ hành linh căn + tu vi ≥ Anh Biến kỳ. Bình luận các trận tỷ thí, nhận xét Âu Dương 'không tầm thường'. (@c0047)"
          },
          {
            chuong: "@c0048",
            importance: "normal",
            text: "Theo dõi màn VL thi đấu tỷ thí; bác bỏ thuyết 'chặt dứt phàm trần'; khẳng định VL thực lực ≈ tầng 14 Ngưng Khí (Linh Động Kỳ viên mãn); giải thích vì sao Thiên Nghịch Châu hiển thị tầng 3 (vì VL đang vận thuật giấu tu vi). (@c0048)"
          },
          {
            chuong: "@c0052",
            importance: "normal",
            text: "Khuyên VL nên đạt tầng 15 Ngưng Khí trước khi Trúc Cơ; hứa sau khi VL Trúc Cơ sẽ truyền Hoàng Tuyền thăng khiếu quyết (công pháp đỉnh lục cấp tu chân quốc, cần môi trường chí âm chí hàn). Mỉa mai Kết Đan Tổ sư Hằng Nhạc. (@c0052)"
          },
          {
            chuong: "@c0056",
            importance: "minor",
            text: "Lần đầu giới thiệu cho VL về Khôi Lỗi thuật như một phương pháp khống chế kẻ địch. (@c0056)"
          },
          {
            chuong: "@c0058",
            importance: "minor",
            text: "Nói chuyện với VL trong đầu khi bay đi; phân tích: khi Mộc thuộc tính viên mãn, Nghịch Châu sẽ tăng tốc thời gian từ gấp 10 lên có thể gấp 100 lần. (@c0058)"
          },
          {
            chuong: "@c0059",
            importance: "normal",
            text: "Kích động xúi VL giết sạch, mơ tưởng diệt cả Huyền Đạo Tông; khoe quá khứ thích làm vậy. Khi VL hỏi cách đuổi kịp Chu Bằng, đáp 'Có. Nhưng…' rồi cố tình kéo dài. (@c0059)"
          },
          {
            chuong: "@c0060",
            importance: "major",
            text: "Tiết lộ tinh hoa Nguyên Anh chỉ còn đủ một lần thuấn di trước khi tiêu biến (chưa tới Anh Biến kỳ). Thực hiện thuấn di đưa VL chặn đầu Chu Bằng. Mượn thân VL thi triển tuyệt kỹ âm hàn (quang cầu lam, làn sóng băng) băng hóa cự mãng + Chu Bằng. Dạy VL Khôi Lỗi thuật (ma đạo) — cố tình giấu nguồn gốc; ý đồ: từng bước tiêm nhiễm VL về phía Ma môn. Tác giả tiết lộ lão thực chất thuộc Ma môn ('trở thành người của Ma môn chúng ta'). (@c0060)"
          },
          {
            chuong: "@c0084",
            importance: "minor",
            text: "Vẫn đang ngủ (ngủ đông / ẩn) trong Thạch Châu khi VL khám phá huyệt động dưới Địa Âm chi địa và phát hiện xác người khổng lồ bên cạnh cây tỏa âm hàn. (@c0084)"
          },
          {
            chuong: "@c0089",
            importance: "major",
            text: "Tỉnh dậy sau 5 ngày VL ở trong Quyết Minh Cốc. Giải thích Hồn Kỳ (pháp bảo Nguyên Anh kỳ phong ấn hồn phách, chỉ còn 3 thuấn di nữa trước khi hồn phách tiêu tán). Khuyên VL ra khỏi Vực Ngoại để tu luyện — Vực Ngoại bên ngoài Quyết Minh Cốc vừa mới được dọn sạch, có gia tốc thời gian. (@c0089)",
            bridge: true
          },
          {
            chuong: "@c0090",
            importance: "minor",
            text: "Không giải thích được hiện tượng biến dị linh lực của VL — linh lực lam đen theo mảnh (khác biệt sau khi VL hấp thụ linh khí từ xác người khổng lồ). (@c0090)"
          }
        ],
        tuVi: "Lục cấp (Chu Tước Quốc) — đã thân hủy, chỉ còn tinh hoa nguyên anh sót ít (chỉ còn một lần thuấn di @c0060). Đến @c0089: còn 3 thuấn di (dưới dạng Hồn Kỳ). Tương đương Nguyên Anh kỳ hoặc cao hơn trong hệ thống Tu Chân Quốc 5 cấp.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đối tượng dẫn dắt / chủ nhân tương lai Thạch Châu", ghiChu: "Theo dõi gần 30 năm, dùng tinh hoa nguyên anh trợ giúp VL; ý đồ ngầm dẫn VL về Ma môn @c0060.", tag: "an-nhan" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0046", "@c0047", "@c0048", "@c0052", "@c0056", "@c0058", "@c0059", "@c0060", "@c0084", "@c0089", "@c0090"]
    },
    {
      id: "lu-van-kiet",
      name: "Lữ Vân Kiệt",
      cn: "",
      aliases: ["Tam sư huynh", "Trung niên nhân (tiết lộ danh tính @c0050)"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 6 @c0044",
      trangThai: "song (bị phạt diện bích 20 năm @c0050)",
      vaiTro: "Tam sư huynh Hằng Nhạc Phái, kẻ phản diện nội bộ",
      tinhCach: "Tham lam, tâm địa hiểm ác, giỏi luyện đan và được chưởng môn yêu; bị kẹt tầng 6 suốt 25 năm, bất chấp mọi thủ đoạn để đột phá.",
      blurb: "Tam sư huynh Hằng Nhạc Phái, tầng 6, giỏi luyện đan. Bị kẹt tầng 6 suốt 25 năm không tiến nổi (@c0044). Lừa Vương Hạo uống Tạo Hóa Đan, ép tu Lô Hỏa Khai Đỉnh Đại Pháp biến thành dược lô luyện Nhân Thọ đan. Bị Vương Lâm vạch trần và Hoàng Long phạt diện bích 20 năm (@c0050).",
      tabs: {
        diem: [
          { text: "Bị kẹt tầng 6 suốt 25 năm — không thể tiến, bất chấp mọi thủ đoạn kể cả dùng người làm dược lô.", chuong: "@c0044" }
        ],
        kinhLich: [
          { chuong: "@c0002", importance: "minor", text: "Xuất hiện (danh tính ẩn = 'trung niên nhân') chủ trì trắc thí tuyển môn. Nhận Vương Hạo làm dược đồng nhờ linh chi 300 năm." },
          {
            chuong: "@c0043",
            importance: "major",
            text: "Lộ diện tội ác: Vương Hạo tiết lộ 'tam sư huynh' đã lừa hắn uống Tạo Hóa Đan rồi ép tu Lô Hỏa Khai Đỉnh Đại Pháp, biến Vương Hạo thành dược lô để luyện Nhân Thọ đan; thọ mệnh Vương Hạo chỉ còn ~1 năm. (@c0043)"
          },
          {
            chuong: "@c0044",
            importance: "normal",
            text: "Được xác nhận là tam sư huynh, tầng 6, giỏi luyện đan, được chưởng môn yêu. Bị kẹt tầng 6 suốt 25 năm không tiến. (@c0044)"
          },
          {
            chuong: "@c0050",
            importance: "major",
            text: "Lần đầu lộ mặt thật với VL (xưng danh Lữ Vân Kiệt). Cầu xin VL tha thứ, nhận tội với Hoàng Long. Bị Hoàng Long phạt diện bích 20 năm; Hồng Kiểm lão giả xác nhận công pháp Lô Hỏa Khai Đỉnh có thật. (@c0050)"
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 6 (@c0044). Kẹt tầng 6 suốt 25 năm.",
        tuViMoc: [
          { chuong: "@c0044", canhGioi: "Ngưng Khí kỳ tầng 6", text: "Được Vương Hạo xác nhận là tầng 6, kẹt 25 năm." }
        ],
        nhanMach: [
          { ten: "Vương Hạo", quanHe: "Nạn nhân / dược lô", ghiChu: "Lừa biến thành dược lô luyện đan; bị VL cứu và Hoàng Long trừng trị @c0050.", tag: "thu-dich" },
          { ten: "Vương Lâm", quanHe: "Kẻ vạch trần", ghiChu: "VL phá lò luyện, cứu Vương Hạo; Lữ Vân Kiệt cầu xin @c0050.", tag: "thu-dich" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0002", "@c0043", "@c0044", "@c0050"]
    },
    {
      id: "chu-bang",
      name: "Chu Bằng",
      cn: "",
      aliases: ["Đại đệ tử Huyền Đạo Tông"],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 13 (thật) — bề ngoài hiện tầng 10, gỡ tiên phù lộ tầng 12 @c0048",
      trangThai: "đang bị luyện thành khôi lỗi (ma đạo) @c0060",
      vaiTro: "Đại đệ tử Huyền Đạo Tông, kẻ thù cá nhân của Vương Lâm",
      tinhCach: "Tự cao, kiêu ngạo, ác độc; sau khi thua 3 lần trước VL, mặt và thân bị bụi đen ô nhiễm; hận VL tới tột cùng, âm mưu diệt cả gia đình để báo thù.",
      blurb: "Đại đệ tử Huyền Đạo Tông, tu vi thật Ngưng Khí tầng 13. Thua VL 3 lần tại tỷ thí (@c0048), sau đó bị ô nhiễm (mặt đen, mùi thối). Âm mưu giết cha mẹ VL luyện hồn kỳ; bị Tư Đồ Nam băng hóa tại @c0060, đang bị VL luyện thành khôi lỗi ma đạo.",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0048",
            importance: "major",
            text: "Xuất trận tỷ thí, xem VL (lộ tầng 3) là chuột bé. Bị VL dùng Dẫn Lực thuật đỡ phi kiếm + Phích Lịch đạn kích nổ đánh bại 3 lần liên tiếp; mỗi lần bại trận càng bối rối hơn. (@c0048)"
          },
          {
            chuong: "@c0058",
            importance: "normal",
            text: "Mặc hắc bào che thân vì người dính bụi đen không tẩy sạch và mùi thối không dứt (khuôn mặt đen thui). Dẫn Trương Cuồng về thôn VL tìm cha mẹ báo thù. Hỏi Trương Cuồng có tiết lộ bí mật dịch thể cho ai chưa — ngầm có ý diệt khẩu. (@c0058)"
          },
          {
            chuong: "@c0059",
            importance: "major",
            text: "Ra lệnh Trương Cuồng giết cha mẹ VL để luyện hồn kỳ dụ VL ra mặt; tin VL chưa Trúc Cơ thì có thể thu hồn phách. Cảm nhận Trương Cuồng chết, bỏ chạy. Bị VL truy sát; né được trảo Dẫn Lực thuật (biết 'Cầm Long thủ'); phi kiếm bị quét lảo đảo nhưng còn chạy được. (@c0059)"
          },
          {
            chuong: "@c0060",
            importance: "major",
            text: "Triệu hồi cự mãng xanh + dùng chuông đen điều khiển chống VL. Bị Tư Đồ Nam (qua thân VL) thi triển tuyệt kỹ âm hàn: làn sóng băng đông cứng cự mãng, phi kiếm và toàn thân Chu Bằng; tâm thần trọng thương, gần chết. Bị VL mang vào động vắng, mổ ngực lấy ngũ tạng tế luyện Khôi Lỗi thuật — đang bị luyện thành khôi lỗi. (@c0060)"
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 13 thật (@c0048 — thần thức VL xác nhận; bề ngoài hiện tầng 10, gỡ tiên phù lộ tầng 12).",
        tuViMoc: [
          { chuong: "@c0048", canhGioi: "Ngưng Khí kỳ tầng 13", text: "Thần thức VL xác nhận tầng 13 thật; bề ngoài hiện tầng 10, gỡ tiên phù lộ tầng 12." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Kẻ thù cá nhân", ghiChu: "Thua 3 lần @c0048; bị VL luyện thành khôi lỗi @c0060.", tag: "doi-thu" },
          { ten: "Trương Cuồng", quanHe: "Đồng phe (Huyền Đạo Tông)", ghiChu: "Dẫn TC về truy lùng gia đình VL; có ý diệt khẩu TC @c0058.", tag: "dong-phe" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Chuông màu đen", loai: "phap-bao", trangThai: "da-dung", moTa: "Pháp bảo điều khiển cự mãng — gõ lên tiếng chuông thanh thúy khiến rắn phóng to và tấn công; bị băng hóa cùng thân chủ @c0060.", nguon: "@c0060" },
            { ten: "Phi kiếm Chu Bằng", loai: "phi-kiem", trangThai: "da-dung", moTa: "Phi kiếm di chuyển dưới chân Chu Bằng; bị băng hóa @c0060.", nguon: "@c0060" }
          ],
          congPhap: [], danDuoc: [], linhThu: [], khac: []
        }
      },
      nguon: ["@c0048", "@c0058", "@c0059", "@c0060"]
    },
    {
      id: "duong-nghi",
      name: "Dương Nghị",
      cn: "",
      aliases: ["Nhị sư huynh Huyền Đạo Tông"],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Chưa xác nhận cụ thể; nhị sư huynh Huyền Đạo, cao hơn Chu Bằng",
      trangThai: "song (thua VL @c0048)",
      vaiTro: "Nhị sư huynh Huyền Đạo Tông",
      tinhCach: "Tính toán, dùng mỹ nhân kế + phi kiếm tấn công đồng thời; thất bại rồi im lặng.",
      blurb: "Nhị sư huynh Huyền Đạo Tông. Dùng Thất Thải Nhan Sắc (mỹ nhân kế) + phi kiếm đỏ phối hợp tấn công VL tại tỷ thí; bị VL đánh bại. (@c0048)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0048",
            importance: "normal",
            text: "Dùng Thất Thải Nhan Sắc (mỹ nhân kế gây mê hoặc) kết hợp phi kiếm đỏ tấn công VL. Bị VL đánh bại. (@c0048)"
          }
        ],
        tuVi: "Chưa xác nhận cụ thể (@c0048).",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đối thủ", ghiChu: "Thua VL tại tỷ thí @c0048.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0048"]
    },
    {
      id: "lieu-phong",
      name: "Liễu Phong",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Chưa xác nhận cụ thể; đủ sức dùng Thủy Mạc tại tỷ thí @c0047",
      trangThai: "song",
      vaiTro: "Đệ tử Huyền Đạo Tông tham gia tỷ thí",
      tinhCach: "Chưa được mô tả chi tiết.",
      blurb: "Đệ tử Huyền Đạo Tông. Dùng công pháp Thủy Mạc đánh bại Triệu Long (đệ tử Hằng Nhạc Phái) trong trận đầu tỷ thí tại Thương Tùng Phong. (@c0047)",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0047", importance: "minor", text: "Dùng Thủy Mạc đánh bại Triệu Long trong trận mở màn tỷ thí. (@c0047)" }
        ],
        tuVi: "Chưa xác nhận (@c0047).",
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0047"]
    },
    {
      id: "hua-moc",
      name: "Hứa Mộc",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Chưa xác nhận cụ thể @c0047",
      trangThai: "song",
      vaiTro: "Đệ tử Hằng Nhạc Phái tham gia tỷ thí",
      tinhCach: "Chưa được mô tả chi tiết.",
      blurb: "Đệ tử Hằng Nhạc Phái. Đấu với Lữ Tung (Huyền Đạo Tông) trong tỷ thí tại Thương Tùng Phong; trận đấu gián đoạn do trung niên nam tử bí ẩn Huyền Đạo Tông can thiệp bẻ gãy phi kiếm Lữ Tung. (@c0047)",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0047", importance: "minor", text: "Đấu tỷ thí với Lữ Tung; trận dừng lại vì trung niên nam tử bí ẩn Huyền Đạo Tông bẻ gãy phi kiếm Lữ Tung. (@c0047)" }
        ],
        tuVi: "Chưa xác nhận (@c0047).",
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0047"]
    },
    {
      id: "lu-tung",
      name: "Lữ Tung",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Chưa xác nhận cụ thể @c0047",
      trangThai: "song",
      vaiTro: "Đệ tử Huyền Đạo Tông tham gia tỷ thí",
      tinhCach: "Thực dụng, biết nhìn người — sau khi chứng kiến VL thắng, chọn kết giao thay vì gây thù.",
      blurb: "Đệ tử Huyền Đạo Tông. Đấu Hứa Mộc trong tỷ thí; phi kiếm bị trung niên nam tử bí ẩn bẻ gãy, trận gián đoạn. Sau khi thấy VL hạ Chu Bằng và Dương Nghị, từ bỏ ý gây thù, chủ động kết giao với VL. (@c0047–@c0048)",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0047", importance: "minor", text: "Đấu tỷ thí với Hứa Mộc; phi kiếm bị trung niên nam tử bí ẩn trong đoàn Huyền Đạo Tông bẻ gãy. (@c0047)" },
          { chuong: "@c0048", importance: "minor", text: "Chứng kiến VL hạ Chu Bằng và Dương Nghị; quyết định chủ động kết giao với VL thay vì đối địch. (@c0048)" }
        ],
        tuVi: "Chưa xác nhận (@c0047).",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Quen biết mới (chủ động kết giao)", ghiChu: "Lữ Tung chọn kết giao sau khi thấy thực lực VL @c0048.", tag: "ban-be" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0047", "@c0048"]
    },
    {
      id: "thuong-quan-truong-lao",
      name: "Thượng Quan trưởng lão",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Trúc Cơ kỳ @c0051",
      trangThai: "song",
      vaiTro: "Trưởng lão Trúc Cơ Hằng Nhạc Phái",
      tinhCach: "Lạnh lùng, quan sát tinh tường; một trong số ít trưởng lão trung thành theo tàn quân Hằng Nhạc.",
      blurb: "Một trong mười Trúc Cơ trưởng lão Hằng Nhạc Phái. Dùng thần thức đánh giá thực lực thật của Vương Lâm xấp xỉ tầng 14 Ngưng Khí. Là một trong hai trưởng lão (cùng Tống Dục) chọn theo nhóm tàn quân Lưu Văn Cử rút về Tượng Xà sơn.",
      tabs: {
        diem: [
          { text: "Tinh tường — dùng thần thức đánh giá chính xác thực lực thật của VL xấp xỉ tầng 14, vượt xa bề ngoài tầng 3.", chuong: "@c0051" }
        ],
        kinhLich: [
          { chuong: "@c0051", importance: "normal", text: "Dùng thần thức đánh giá VL, xác nhận thực lực thật xấp xỉ tầng 14 Ngưng Khí. (@c0051)" },
          { chuong: "@c0055", importance: "normal", text: "Chọn theo tàn quân Hằng Nhạc (Lưu Văn Cử + lão phu nhân) thay vì đầu hàng Huyền Đạo Tông; là một trong hai Trúc Cơ trưởng lão trung thành. (@c0055)" },
          { chuong: "@c0057", importance: "minor", text: "Được giao cùng VL và Tống Dục 'cân bằng bốn phía' trong quá trình di chuyển về Tượng Xà sơn. (@c0057)" }
        ],
        tuVi: "Trúc Cơ kỳ (@c0051).",
        tuViMoc: [
          { chuong: "@c0051", canhGioi: "Trúc Cơ kỳ", text: "Được xác nhận là Trúc Cơ trưởng lão khi đánh giá VL @c0051." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đồng hành (tàn quân Hằng Nhạc)", ghiChu: "Đánh giá thực lực thật VL @c0051; cùng di chuyển về Tượng Xà sơn.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0051", "@c0055", "@c0057"]
    },
    {
      id: "luu-van-cu",
      name: "Lưu Văn Cử",
      cn: "",
      aliases: ["Lưu Văn"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Kết Đan kỳ @c0054",
      trangThai: "song",
      vaiTro: "Trụ cột Kết Đan kỳ Hằng Nhạc Phái",
      tinhCach: "Điềm tĩnh, ôn hòa; biết cân nhắc tình huống; không theo Huyền Đạo Tông dù mất sơn môn.",
      blurb: "Kết Đan kỳ tu sĩ, trụ cột của Hằng Nhạc Phái. Hạc phát đồng nhan (tóc trắng mặt trẻ trung). Dẫn đầu nhóm tàn quân về Tượng Xà sơn — căn cứ cũ của hắn, cách mấy nghìn dặm. Tặng VL ngọc phù Kết Đan kỳ làm phòng thân khi cho phép hắn ra ngoài thăm cha mẹ.",
      tabs: {
        diem: [
          { text: "Điềm tĩnh, tình người — can lão phu nhân, hỏi rõ lý do VL muốn ra ngoài, đồng ý và chu đáo tặng ngọc phù bảo vệ tính mạng.", chuong: "@c0058" }
        ],
        kinhLich: [
          { chuong: "@c0054", importance: "major", text: "Lộ diện chính thức bên cạnh lão phu nhân khi Hộ sơn đại trận vỡ và Phác Nam Tử chiếm sơn môn. (@c0054)" },
          { chuong: "@c0055", importance: "major", text: "Dẫn nhóm tàn quân trung thành rút về Tượng Xà sơn — căn cứ cũ của hắn, cách mấy nghìn dặm; chỉ định VL có chỗ tu luyện riêng. (@c0055, @c0057)" },
          { chuong: "@c0058", importance: "normal", text: "Can lão phu nhân cho VL ra ngoài thăm cha mẹ; tặng ngọc phù chứa một kích Kết Đan kỳ + ngọc giản pháp quyết mở cửa để VL phòng thân. (@c0058)" }
        ],
        tuVi: "Kết Đan kỳ (@c0054).",
        tuViMoc: [
          { chuong: "@c0054", canhGioi: "Kết Đan kỳ", text: "Xác nhận lần đầu khi lộ diện tại sự kiện Phác Nam Tử tấn công @c0054." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đệ tử tàn quân Hằng Nhạc", ghiChu: "Chỉ định chỗ tu luyện riêng; tặng ngọc phù bảo vệ tính mạng @c0058.", tag: "ho-tro" },
          { ten: "Lão phu nhân họ Vương", quanHe: "Đồng liêu Kết Đan kỳ", ghiChu: "Cùng dẫn tàn quân Hằng Nhạc.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0054", "@c0055", "@c0057", "@c0058"]
    },
    {
      id: "pac-nam-tu",
      name: "Phác Nam Tử",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Nguyên Anh kỳ @c0053",
      trangThai: "song",
      vaiTro: "Cường giả Nguyên Anh kỳ Huyền Đạo Tông",
      tinhCach: "Lạnh lùng, ngạo mạn; không xem Hằng Nhạc Phái ngang hàng; gọi VL 'không biết điều' khi từ chối.",
      blurb: "Nguyên Anh kỳ cường giả Huyền Đạo Tông. Một tay phá vỡ Hộ sơn đại trận Hằng Nhạc Phái; đoạt Tử Nhạc Tiên Kiếm; tuyên bố 'mượn' Hằng Nhạc sơn mười vạn năm. Âu Dương phục tùng hắn tuyệt đối.",
      tabs: {
        diem: [
          { text: "Vượt cấp tuyệt đối — Nguyên Anh kỳ phá vỡ Hộ sơn đại trận Hằng Nhạc một mình, đánh gục toàn bộ Trúc Cơ trưởng lão.", chuong: "@c0053" }
        ],
        kinhLich: [
          { chuong: "@c0053", importance: "major", text: "Tấn công bất ngờ Hằng Nhạc Phái; dùng Hắc sơn (cự phong pháp bảo) áp chế; kích hoạt Hộ sơn đại trận. (@c0053)" },
          { chuong: "@c0054", importance: "major", text: "Hộ sơn đại trận vỡ hoàn toàn. Đoạt Tử Nhạc Tiên Kiếm từ Hoàng Long giao Âu Dương; tuyên bố 'mượn' Hằng Nhạc sơn mười vạn năm. Nhắc Hằng Nhạc Nguyên Anh lão tổ đã chết tại 'Vực ngoại Tu chân tinh'. (@c0054)" },
          { chuong: "@c0055", importance: "normal", text: "Đích thân mời Vương Lâm nhập Huyền Đạo Tông; bị từ chối. Gọi VL 'không biết điều'. Cùng Âu Dương sau đó truy đuổi nhóm tàn quân Hằng Nhạc. (@c0055, @c0057)" }
        ],
        tuVi: "Nguyên Anh kỳ (@c0053).",
        tuViMoc: [
          { chuong: "@c0053", canhGioi: "Nguyên Anh kỳ", text: "Xác nhận khi xuất thủ phá Hộ sơn đại trận @c0053." }
        ],
        nhanMach: [
          { ten: "Âu Dương", quanHe: "Cấp dưới / phụ tá", ghiChu: "Âu Dương phục tùng Phác Nam Tử tuyệt đối.", tag: "thu-ha" },
          { ten: "Vương Lâm", quanHe: "Đối kháng gián tiếp / từ chối chiêu mộ", ghiChu: "Phác Nam Tử mời nhập Huyền Đạo, bị VL từ chối @c0055.", tag: "doi-thu" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Hắc sơn (cự phong)", loai: "phap-bao", trangThai: "da-dung", moTa: "Pháp bảo cỡ núi khổng lồ màu đen dùng để áp chế Hằng Nhạc Phái @c0053.", nguon: "@c0053" }
          ],
          congPhap: [], danDuoc: [], linhThu: [], khac: []
        }
      },
      nguon: ["@c0053", "@c0054", "@c0055", "@c0057"]
    },
    {
      id: "lao-phu-nhan-ho-vuong",
      name: "Lão phu nhân họ Vương",
      cn: "",
      aliases: ["Vương sư tổ"],
      gioiTinh: "nu",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Kết Đan kỳ @c0054",
      trangThai: "song",
      vaiTro: "Sư tổ Kết Đan kỳ Hằng Nhạc Phái",
      tinhCach: "Nghiêm nghị, thận trọng; ưu tiên an toàn môn phái và đệ tử; ít nói nhưng quyền uy tuyệt đối.",
      blurb: "Sư tổ Kết Đan kỳ Hằng Nhạc Phái. Lộ diện cùng Lưu Văn Cử khi sơn môn thất thủ. Tuyên bố Hằng Nhạc Phái bế quan 100 năm; mở toàn bộ công pháp cho mọi đệ tử; ra lệnh Hoàng Long nhóm lập tức hướng Trúc Cơ.",
      tabs: {
        diem: [
          { text: "Quyết đoán khi khủng hoảng — sau khi mất sơn môn, ngay lập tức tuyên bố bế quan 100 năm và mở toàn bộ công pháp bí truyền.", chuong: "@c0057" }
        ],
        kinhLich: [
          { chuong: "@c0054", importance: "major", text: "Lộ diện chính thức cùng Lưu Văn Cử khi Hộ sơn đại trận vỡ trước Phác Nam Tử. (@c0054)" },
          { chuong: "@c0055", importance: "major", text: "Dẫn nhóm tàn quân trung thành rút về Tượng Xà sơn; 8/10 Trúc Cơ trưởng lão ở lại theo Huyền Đạo Tông, chỉ Thượng Quan + Tống Dục theo. (@c0055)" },
          { chuong: "@c0057", importance: "major", text: "Tuyên bố Hằng Nhạc Phái bế quan 100 năm; mở toàn bộ công pháp bí truyền cho mọi đệ tử; lệnh Hoàng Long nhóm lập tức bế quan hướng Trúc Cơ. Lữ Tung được giao quản lý tu luyện. (@c0057)" },
          { chuong: "@c0058", importance: "minor", text: "Từ chối VL xin ra ngoài thăm cha mẹ (lo nguy hiểm); bị Lưu Văn can, cuối cùng để VL đi. (@c0058)" }
        ],
        tuVi: "Kết Đan kỳ (@c0054).",
        tuViMoc: [
          { chuong: "@c0054", canhGioi: "Kết Đan kỳ", text: "Xác nhận lần đầu khi lộ diện @c0054." }
        ],
        nhanMach: [
          { ten: "Lưu Văn Cử", quanHe: "Đồng liêu Kết Đan kỳ", ghiChu: "Cùng dẫn tàn quân Hằng Nhạc; Lưu Văn thường can bà.", tag: "dong-hanh" },
          { ten: "Vương Lâm", quanHe: "Đệ tử tàn quân", ghiChu: "Từ chối cho hắn ra ngoài, sau bị Lưu Văn can mới đồng ý @c0058.", tag: "de-tu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0054", "@c0055", "@c0057", "@c0058"]
    },
    {
      id: "trieu-long",
      name: "Triệu Long",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 6 @c0047",
      trangThai: "song (thua Liễu Phong @c0047)",
      vaiTro: "Đệ tử Hằng Nhạc Phái tham gia tỷ thí",
      tinhCach: "Chưa được mô tả chi tiết.",
      blurb: "Đệ tử Hằng Nhạc Phái. Dùng Liên Hoa kiếm khí đấu với Liễu Phong (Huyền Đạo Tông) trong tỷ thí tại Thương Tùng Phong; thua trước Thủy Mạc. (@c0047)",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0047", importance: "minor", text: "Dùng Liên Hoa kiếm khí đấu Liễu Phong trong tỷ thí; thua trước Thủy Mạc. (@c0047)" }
        ],
        tuVi: "Ngưng Khí kỳ tầng 6 (@c0047).",
        tuViMoc: [
          { chuong: "@c0047", canhGioi: "Ngưng Khí kỳ tầng 6", text: "Đệ tử nội môn trầm mặc ít nói, một trong số ít đạt tầng 6 sau tập huấn; Liên Hoa kiếm khí bậc trung." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0047"]
    },
    {
      id: "bach-trien",
      name: "Bạch Triển",
      cn: "",
      aliases: ["bạch y trung niên"],
      gioiTinh: "nam",
      theLuc: ["Tà đạo — đệ tử Tức Mặc lão nhân"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 15 đại viên mãn (@c0067)",
      trangThai: "tu-vong",
      vaiTro: "Phản diện giai đoạn Ch.67–68 / sư phụ cưỡng ép của Trương Hổ",
      tinhCach: "Tàn độc, lạnh lùng; chuyên hút máu người thành huyết châu để bổ thân; kiểm soát đệ tử bằng độc trùng.",
      blurb: "Đệ tử thứ sáu của Tức Mặc lão nhân (tán tu Kết Đan kỳ). Tu tà đạo hút máu — giết người thu huyết khí đúc huyết châu. Bắt Trương Hổ làm đệ tử cưỡng ép bằng độc. Chết dưới ngọc phù Đan bảo của Vương Lâm @c0068.",
      tabs: {
        diem: [
          { text: "Tu vi tầng 15 đại viên mãn, có phi kiếm cổ quái và vỏ kiếm đen — vỏ kiếm có thể vô hiệu hóa Dẫn Lực Thuật của Vương Lâm, lần đầu tiên pháp bảo nào làm được điều này.", chuong: "@c0067" },
          { text: "Kiểm soát Trương Hổ bằng độc trùng ~4 năm; dùng Trương Hổ làm công cụ cướp đoạt.", chuong: "@c0067, @c0069" }
        ],
        kinhLich: [
          {
            chuong: "@c0067",
            importance: "major",
            text: "Xuất hiện từ đám mây đen, Ngưng Khí tầng 15 đại viên mãn. Giết các thành viên đoàn tiêu bằng tà thuật hút máu, đúc huyết châu. Tra tấn Trương Hổ trước mặt Vương Lâm. Phi kiếm có vỏ kiếm đen vô hiệu hóa Dẫn Lực Thuật của VL lần đầu tiên. (@c0067)"
          },
          {
            chuong: "@c0068",
            importance: "major",
            text: "Tiếp tục đại chiến với Vương Lâm. Bị diệt bởi ngọc phù Đan bảo (9 phù văn vàng) — thân thể và túi trữ vật hóa tro bụi. VL thu phi kiếm cổ quái và vỏ kiếm đen. (@c0068)"
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 15 đại viên mãn — đỉnh Ngưng Khí kỳ (@c0067). Tà đạo hút máu. Chết @c0068.",
        tuViMoc: [
          { chuong: "@c0067", canhGioi: "Ngưng Khí kỳ tầng 15 đại viên mãn", text: "Tầng cao nhất Ngưng Khí kỳ. Xuất hiện với áp lực tu vi áp đảo toàn bộ nhân vật khác trong trận." }
        ],
        nhanMach: [
          { ten: "Tức Mặc lão nhân", quanHe: "Sư phụ", ghiChu: "Tán tu Kết Đan kỳ; Bạch Triển là đệ tử thứ sáu. Sau khi Bạch Triển chết, Tức Mặc lão nhân dự kiến sẽ điều tra @c0069.", tag: "su-mon" },
          { ten: "Trương Hổ", quanHe: "Đệ tử (ép buộc)", ghiChu: "Khống chế bằng độc trùng ~4 năm; Trương Hổ thoát khỏi ràng buộc sau khi Bạch Triển chết @c0069.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0067", "@c0068", "@c0069"]
    },
    {
      id: "tu-phi",
      name: "Từ Phi",
      cn: "",
      aliases: [],
      gioiTinh: "nu",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 7 (@c0062); tầng 4 bốn năm trước khi Vương Lâm bế quan",
      trangThai: "song",
      vaiTro: "Nhân vật phụ — đệ tử Huyền Đạo Tông",
      tinhCach: "Từng có cảm tình với 'Vương Trác' (tức Vương Lâm giả danh); nhút nhát trước thần thức áp đảo của VL.",
      blurb: "Đệ tử Huyền Đạo Tông, tầng 7 Ngưng Khí. Họ 'Từ' của cô khiến Tư Đồ Nam (trong Nghịch Thiên Châu) bất ngờ — ngụ ý mối liên hệ ẩn chưa giải thích. Từng có cảm tình với 'Vương Trác' là bí danh của Vương Lâm.",
      tabs: {
        diem: [
          { text: "Họ 'Từ' của cô gây phản ứng mạnh với Tư Đồ Nam ẩn trong Nghịch Thiên Châu — mối liên hệ chưa được giải thích, cần theo dõi.", chuong: "@c0063" }
        ],
        kinhLich: [
          {
            chuong: "@c0062",
            importance: "minor",
            text: "Cùng Lịch Hải (Tam sư huynh) và tiểu sư đệ đến khu vực núi trọc nơi Vương Lâm đang bế quan. Tầng 7 Ngưng Khí (@c0062); trước đó 4 năm chỉ là tầng 4. Được miêu tả là từng có cảm tình với 'Vương Trác'. (@c0062)"
          },
          {
            chuong: "@c0063",
            importance: "minor",
            text: "Cùng Lịch Hải bị thần thức của Vương Lâm áp chế, không dám động đậy. Họ 'Từ' của cô khiến Tư Đồ Nam (ký ký trong Nghịch Thiên Châu) bất ngờ ra mặt — hiếm khi Tư Đồ Nam phản ứng như vậy. Ba người được thả đi. (@c0063)"
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 4 (4 năm trước @c0062) → tầng 7 (@c0062). Huyền Đạo Tông.",
        tuViMoc: [
          { chuong: "@c0062", canhGioi: "Ngưng Khí kỳ tầng 7", text: "Tầng 7 tại thời điểm gặp Vương Lâm; tầng 4 bốn năm trước — tiến 3 tầng trong 4 năm." }
        ],
        nhanMach: [
          { ten: "Lịch Hải", quanHe: "Tam sư huynh", ghiChu: "Đi cùng trong chuyến thăm núi trọc.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0062", "@c0063"]
    },
    {
      id: "lich-hai",
      name: "Lịch Hải",
      cn: "",
      aliases: ["Tam sư huynh"],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 12 (@c0063)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ — đệ tử Huyền Đạo Tông",
      tinhCach: "Nhút nhát khi gặp nguy, ưu tiên bảo mạng; được gọi là 'Tam sư huynh' nên có vị trí trong môn phái.",
      blurb: "Đệ tử Huyền Đạo Tông, Ngưng Khí tầng 12. 'Tam sư huynh' của Từ Phi. Bị thần thức của Vương Lâm áp chế đến không dám nhúc nhích dù là tầng 12.",
      tabs: {
        diem: [
          { text: "Ngưng Khí tầng 12 nhưng bị thần thức (nhờ Nghịch Thiên Châu) của Vương Lâm áp đảo hoàn toàn — minh họa sức mạnh đặc dị của VL.", chuong: "@c0063" }
        ],
        kinhLich: [
          {
            chuong: "@c0062",
            importance: "minor",
            text: "Đến khu vực núi trọc cùng Từ Phi và tiểu sư đệ. Được xác nhận tầng 12 Ngưng Khí, Tam sư huynh. (@c0062)"
          },
          {
            chuong: "@c0063",
            importance: "minor",
            text: "Bị thần thức VL áp chế, quỳ xuống bất động cùng cả dã thú xung quanh. Không dám phản kháng. Ba người được thả sau khi VL nhận ra họ Từ của Từ Phi. (@c0063)"
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 12 (@c0063). Huyền Đạo Tông.",
        tuViMoc: [
          { chuong: "@c0063", canhGioi: "Ngưng Khí kỳ tầng 12", text: "Tầng 12 xác nhận khi gặp Vương Lâm; Tam sư huynh trong nhóm." }
        ],
        nhanMach: [
          { ten: "Từ Phi", quanHe: "Sư muội", ghiChu: "Đi cùng trong chuyến thăm núi trọc.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0062", "@c0063"]
    },
    {
      id: "lieu-tam",
      name: "Liễu Tam",
      cn: "",
      aliases: ["đại tiêu đầu Uy Vũ"],
      gioiTinh: "nam",
      theLuc: ["Uy Vũ tiêu cục"],
      canhGioiCaoNhat: "Phàm nhân (võ sĩ — Khai Sơn chưởng lô hỏa thuần thanh @c0064)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ — đại tiêu đầu tiêu cục",
      tinhCach: "Hào sảng, am hiểu giang hồ, biết người biết việc; có quan hệ rộng trong giới bất chính.",
      blurb: "Đại tiêu đầu Uy Vũ tiêu cục. Khai Sơn chưởng lô hỏa thuần thanh (võ công đỉnh phong người thường). Đã từng nghi Vương Lâm là gian tế nhưng chấp nhận hắn vào đội.",
      tabs: {
        diem: [
          { text: "Khai Sơn chưởng lô hỏa thuần thanh — võ công đỉnh phong nhân gian; hiểu biết rộng về giới tiêu cục và giang hồ.", chuong: "@c0064" }
        ],
        kinhLich: [
          {
            chuong: "@c0064",
            importance: "minor",
            text: "Gặp Vương Lâm trên đường tới Thiên Thủy thành. Nghi VL là gian tế vì không có hành lý. Chấp nhận cho đi cùng sau khi VL bịa cớ 'bị cướp'. Dẫn đoàn tiêu hướng Thiên Thủy thành. (@c0064)"
          },
          {
            chuong: "@c0066",
            importance: "minor",
            text: "Đặt hộp gấm (nhân sâm 500 năm) xuống đất khi đàm phán với 'Đại đương gia'; hộp bị VL hút mất bằng pháp lực. (@c0066)"
          }
        ],
        tuVi: "Phàm nhân — võ sĩ bậc cao (Khai Sơn chưởng lô hỏa thuần thanh). Không tu tiên.",
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0064", "@c0066"]
    },
    {
      id: "vuong-tien-sinh",
      name: "Vương tiên sinh",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Uy Vũ tiêu cục"],
      canhGioiCaoNhat: "Phàm nhân (tướng thuật có linh lực thật @c0065)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ — thuật sĩ tướng số",
      tinhCach: "Nghiêm túc, có thực lực thật sự; uy tín nghề nghiệp khiến khi phun máu người ta tin đây là điềm thật.",
      blurb: "Thầy tướng của Uy Vũ tiêu cục có linh lực thật. Vương Lâm thấy qua thần thức tia linh lực trong mắt ông. Xem tướng Vương Lâm, phun máu và hét lên — hàm ý khí vận của VL vượt sức chịu đựng của thuật tướng.",
      tabs: {
        diem: [
          { text: "Thuật tướng có linh lực thật — Vương Lâm thấy qua thần thức tia linh lực chạy qua mắt ông khi xem tướng; không phải thuật sĩ lừa đảo.", chuong: "@c0065" },
          { text: "Xem tướng Vương Lâm: phun máu, hét 'Ngươi—' rồi không hoàn thành câu — khí vận VL khủng khiếp ngoài sức tưởng tượng.", chuong: "@c0065" }
        ],
        kinhLich: [
          {
            chuong: "@c0065",
            importance: "minor",
            text: "Được giới thiệu với Vương Lâm. Xem tướng VL — phun máu, hét lên 'Ngươi—' không nói được tiếp. Bị xóa ký ức về sự kiện @c0067 bởi Hóa Thần thuật của VL @c0069. (@c0065)"
          }
        ],
        tuVi: "Phàm nhân với linh lực tự nhiên — không phải tu sĩ, nhưng có năng lực tướng thuật thật sự (@c0065).",
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0065", "@c0069"]
    },
    {
      id: "dang-le",
      name: "Đằng Lệ",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đằng Gia"],
      canhGioiCaoNhat: "Trúc Cơ hậu kỳ (@c0072)",
      trangThai: "tu-vong",
      vaiTro: "Phản diện giai đoạn Ch.72 / cháu lão tổ Đằng Hóa Nguyên",
      tinhCach: "Ngạo mạn, tham lam (tham bảo bối thuấn di của VL mà quyết giết); có thực lực và kinh nghiệm chiến đấu đáng nể.",
      blurb: "Trúc Cơ hậu kỳ, cháu của lão tổ Nguyên Anh kỳ Đằng Hóa Nguyên; bạn tri kỷ Trần Trung. Bày bẫy bắt Vương Lâm tại Đằng Gia Thành, truy sát hơn năm ngày, bị Vương Lâm dụ vào tầm Thi Mị/Lục Đan tự bạo rồi bắt sống. Bị luyện làm Lô Đỉnh cho Đoạt Cơ Đại Pháp — chết @c0072.",
      tabs: {
        diem: [
          { text: "Sở hữu nội giáp vàng (ông nội để lại) vô hiệu hóa nhiều đòn tấn công; phi kiếm hồng là nguyên bảo phóng đại thành cự kiếm + tử sắc lôi cầu.", chuong: "@c0072" },
          { text: "Là Trúc Cơ hậu kỳ đầu tiên Vương Lâm hạ được trong tình cảnh đơn thương độc mã nhờ mưu kế chứ không phải thực lực.", chuong: "@c0072" }
        ],
        kinhLich: [
          {
            chuong: "@c0072",
            importance: "major",
            text: "Bày bẫy bắt Vương Lâm tại Đằng Gia Thành; truy sát hơn 5–6 ngày xuyên rừng. Bị mưu kế dây mây xanh (Đằng Điều) khiến nội giáp và pháp bảo hao mòn nghiêm trọng, buộc dùng nguyên bảo bảo mệnh của lão thái gia. Bị dụ vào tầm Thi Mị/Lục Đan tự bạo; Vương Lâm liều mạng dùng Lục Kiếm xuyên nội giáp + Tư Đồ Nam đóng băng bắt sống. Bị thi triển Đoạt Cơ Đại Pháp: thân thể luyện thành ba quả cầu máu/thịt/xương, linh hồn bị luyện hóa thành cầu tím, linh căn bị đoạt một phần ba. CHẾT. (@c0072)"
          }
        ],
        tuVi: "Trúc Cơ hậu kỳ (@c0072). Chết @c0072.",
        tuViMoc: [
          { chuong: "@c0072", canhGioi: "Trúc Cơ hậu kỳ", text: "Xác nhận khi Tư Đồ Nam đánh giá lò đỉnh cho Đoạt Cơ Đại Pháp; bạn tri kỷ Trần Trung (đại đệ tử Tức Mặc Lão Nhân)." }
        ],
        nhanMach: [
          { ten: "Đằng Hóa Nguyên", quanHe: "Ông nội (lão tổ Nguyên Anh kỳ)", ghiChu: "Lưu thần thức trong linh hồn Đằng Lệ; sau khi cháu chết, lập trận lời nguyền in lên Vương Lâm thề báo thù @c0072.", tag: "than-toc" },
          { ten: "Vương Lâm", quanHe: "Kẻ thù / kẻ hạ sát", ghiChu: "Đằng Lệ truy sát, bị VL bắt sống, chết làm Lô Đỉnh @c0072.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0072"]
    },
    {
      id: "dang-hoa-nguyen",
      name: "Đằng Hóa Nguyên",
      cn: "",
      aliases: ["lão thái gia Đằng Gia", "ông già mặc đồ đen"],
      gioiTinh: "nam",
      theLuc: ["Đằng Gia"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (@c0072); có hồn kỳ cấp Nguyên Anh @c0089",
      trangThai: "song (đang chờ ngoài Quyết Minh Cốc @c0087–@c0089)",
      vaiTro: "Phản diện dài hạn — lão tổ Đằng Gia truy thù Vương Lâm",
      tinhCach: "Yêu quý cháu (Đằng Lệ) đến mức lưu thần thức trong linh hồn cháu; sau khi cháu chết thề báo thù quyết liệt.",
      blurb: "Lão tổ Nguyên Anh kỳ Đằng Gia, ông nội Đằng Lệ. Lần đầu xuất hiện @c0072 khi hóa thân cảm nhận cháu bị luyện hóa; lập trận lời nguyền định vị hình thoi in lên trán Vương Lâm. Đích thân truy sát @c0077, bị nam tử thây khô (Nguyên Anh trung kỳ) đánh đuổi @c0078.",
      tabs: {
        diem: [
          { text: "Lập trận lời nguyền định vị bằng máu + thần thức — hao tổn lớn khí Nguyên Anh; là mối nguy dài hạn treo trên đầu Vương Lâm.", chuong: "@c0072" },
          { text: "Nguyên Anh kỳ tu sĩ nhưng không chống lại được Nguyên Anh trung kỳ — bị thương phun máu và bỏ chạy @c0078.", chuong: "@c0078" }
        ],
        kinhLich: [
          {
            chuong: "@c0072",
            importance: "major",
            text: "Hóa thân (phân thân sương vàng tầm xa) xuất hiện khi Đằng Lệ bị luyện hóa, do thần thức lưu trong linh hồn cháu kích hoạt. Hóa thân không có lực, chỉ truyền tiếng nói. Cảm nhận cháu chết, vỗ ngực phun máu đen lập trận lời nguyền phức tạp bằng máu + thần thức (hao tổn lớn Nguyên Anh); trận ngưng tụ đồ án hình thoi in lên trán Vương Lâm — là trận định vị, không công kích. (@c0072)"
          },
          {
            chuong: "@c0077",
            importance: "major",
            text: "Theo trớ chú lần ra kẻ thù đang ở dưới đám cây cối, bầu trời tối sầm, hơi thở 'hủy thiên diệt địa'. Cảm nhận trong đám cây có 'thứ rất mạnh' nên dè dặt, cuối cùng vẫn cắn răng xông vào. (@c0077)"
          },
          {
            chuong: "@c0078",
            importance: "major",
            text: "Tiếp cận Vương Lâm thì bị nam tử thây khô (Nguyên Anh trung kỳ) trong hắc vụ tấn công và quát đuổi. Dùng tấm da thú phòng thân độn thoát, bị bàn tay to sượt qua, phun một bụm máu, sắc mặt tái nhợt và bỏ chạy. (@c0078)"
          },
          {
            chuong: "@c0087",
            importance: "major",
            text: "Đích thân tiêu diệt toàn bộ Vương gia (100+ người) để thực hiện lời nguyền báo thù Vương Lâm. Dùng hồn kỳ (pháp bảo Nguyên Anh kỳ) làm vũ khí. Sau khi xong việc đứng chờ bên ngoài Quyết Minh Cốc — kết đan+ bị phong ấn không vào trong được. (@c0087)",
            bridge: true
          },
          {
            chuong: "@c0088",
            importance: "normal",
            text: "Vẫn chờ bên ngoài Quyết Minh Cốc. Nguyên nhân không vào được: đại trận phong ấn Kết Đan kỳ trở lên. (@c0088)"
          },
          {
            chuong: "@c0089",
            importance: "normal",
            text: "Vẫn canh bên ngoài Quyết Minh Cốc chờ Vương Lâm ra. Tư Đồ Nam nhắc đến hồn kỳ trong tay Đằng Hóa Nguyên. (@c0089)"
          }
        ],
        tuVi: "Nguyên Anh kỳ (@c0072). Yếu hơn Nguyên Anh trung kỳ (@c0078). Sở hữu hồn kỳ (pháp bảo Nguyên Anh kỳ) @c0089.",
        tuViMoc: [
          { chuong: "@c0072", canhGioi: "Nguyên Anh kỳ", text: "Xác nhận khi Đằng Lệ đe dọa 'ông nội là cao thủ Nguyên Anh kỳ' và hóa thân xuất hiện @c0072. Lập trận lời nguyền hao tổn lớn Nguyên Anh — Nguyên Anh rút nhỏ thấy rõ." }
        ],
        nhanMach: [
          { ten: "Đằng Lệ", quanHe: "Cháu nội", ghiChu: "Yêu quý đến mức lưu thần thức trong linh hồn cháu; cháu chết → thề báo thù Vương Lâm @c0072.", tag: "than-toc" },
          { ten: "Vương Lâm", quanHe: "Kẻ thù (thề báo thù)", ghiChu: "Lời nguyền định vị in trên trán VL @c0072; truy sát @c0077; bị gián đoạn @c0078; diệt Vương gia @c0087; đang chờ VL ra khỏi Quyết Minh Cốc @c0087–89.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0072", "@c0077", "@c0078", "@c0087", "@c0088", "@c0089"]
    },
    {
      id: "a-ngoc",
      name: "A Ngốc",
      cn: "",
      aliases: ["a Mộc", "quái nhân da lam"],
      gioiTinh: "nam",
      theLuc: ["Thi Âm tông (liên hệ Ngô Vũ)"],
      canhGioiCaoNhat: "Nguyên Anh trung kỳ tiềm ẩn (do nửa tinh khí Nguyên Anh Ngô Vũ để lại @c0079)",
      trangThai: "song",
      vaiTro: "Thi khôi cũ Ngô Vũ, đồng hành Vương Lâm từ @c0079",
      tinhCach: "Trí tuệ như trẻ thơ (chỉ thốt từng chữ: 'Kính', 'Cực'), nhưng bản năng chiến đấu cực mạnh; nhe răng dọa người.",
      blurb: "Quái nhân da lam, khắc đầy ký hiệu cổ quái, mang chín tấm phù vàng trên người — mỗi tấm kéo xuống tăng gấp đôi thực lực, có thể trị thương tức thì. Thực chất là thi khôi cũ Ngô Vũ từng định đoạt xá nhưng thất bại: 'lực lượng hủy thiên diệt địa' trong cơ thể khiến đoạt xá không thành; Ngô Vũ để lại nửa tinh khí Nguyên Anh trung kỳ trong thân thể hắn, khiến hắn tỉnh dậy với tiềm năng khổng lồ và cảm giác thân thiết nương tựa Ngô Vũ. (@c0079–@c0080)",
      tabs: {
        diem: [
          { text: "Chín tấm phù vàng cổ quái — mỗi tấm kéo xuống tăng gấp đôi thực lực; có thể kéo tất cả chín tấm cùng lúc (chín loại khí hiện quanh thân @c0079).", chuong: "@c0079" },
          { text: "Linh tính dồi dào nhất trong các thi khôi từng thấy tại Thi Âm tông — chỉ thấp hơn Phi Thiên La Sát (@c0080).", chuong: "@c0080" },
          { text: "Nhìn chằm chằm phù văn trên cọc gỗ Thi Âm tông 'như đang suy nghĩ tới một người nào đó' — cài cắm chưa giải @c0080.", chuong: "@c0080" }
        ],
        kinhLich: [
          {
            chuong: "@c0077",
            importance: "minor",
            text: "Sinh vật da lam đang cắn nuốt thi thể quái thú trong đống đổ nát; bị hiện tượng hút khí âm hàn của Vương Lâm làm sợ hãi, định lại gần nhưng dừng ở cách ~3000 trượng. (@c0077)"
          },
          {
            chuong: "@c0078",
            importance: "minor",
            text: "Lảng vảng quan sát Vương Lâm với vẻ chần chừ; cuối chương lao tới chỗ VL như tia chớp. (@c0078)"
          },
          {
            chuong: "@c0079",
            importance: "major",
            text: "Thử sức với Vương Lâm: kéo phù vàng xuống, dùng quyền pháp ẩn lực đạo cổ quái khiến VL lùi ba thước. Dẫn VL đến pho tượng nam tử cự long (4 ngày đường), mở 8 viên thạch châu kích hoạt pho tượng. Cứu VL khỏi vòng sáng khi thi khôi nam tử thây khô tới, kéo VL vào bên trong pho tượng. Do dự rồi theo VL lao vào truyền tống trận tới Thi Âm tông. (@c0079)"
          },
          {
            chuong: "@c0080",
            importance: "normal",
            text: "Cùng VL xuất hiện trong truyền tống trận Thi Âm tông; khiến tám đệ tử gác trận kinh ngạc vì linh tính dồi dào. Được Mộc Ngung và thanh niên gác trận nhận xét chỉ thấp hơn Phi Thiên La Sát. Nhe răng dọa thanh niên gác trận khi bị nhìn lâu. (@c0080)"
          },
          {
            chuong: "@c0081",
            importance: "normal",
            text: "Dạ Tự Tại nhận a Ngốc làm lô đỉnh (thi khôi giả đan); La Sát có kế hoạch nâng a Ngốc lên Kết Đan kỳ bằng nghi thức giả đan. (@c0081)"
          },
          {
            chuong: "@c0082",
            importance: "minor",
            text: "Vẫn ở Thi Âm tông dưới sự giám sát của Dạ Tự Tại / La Sát. (@c0082)"
          },
          {
            chuong: "@c0086",
            importance: "normal",
            text: "La Sát vẫn giữ kế hoạch nâng a Ngốc lên Kết Đan. A Ngốc ở lại Thi Âm tông khi VL bị gửi đến Quyết Minh Cốc cùng 20 vật dẫn. (@c0086)"
          }
        ],
        tuVi: "Thi khôi với lực lượng hủy thiên diệt địa (nửa tinh khí Nguyên Anh trung kỳ Ngô Vũ); quyền pháp ẩn lực đạo cổ quái 'không phải linh lực' (@c0079). Mục tiêu: nâng lên Kết Đan kỳ bởi La Sát @c0081–@c0086.",
        tuViMoc: [
          { chuong: "@c0079", canhGioi: "Thi khôi Nguyên Anh trung kỳ tiềm ẩn", text: "Ngô Vũ xác nhận đây là thi khôi cũ của mình; nửa tinh khí Nguyên Anh trung kỳ trong cơ thể khiến Ngô Vũ không đoạt xá được ('lực lượng hủy thiên diệt địa')." }
        ],
        nhanMach: [
          { ten: "Ngô Vũ", quanHe: "Chủ nhân cũ (đoạt xá thất bại)", ghiChu: "Ngô Vũ để lại nửa tinh khí Nguyên Anh trong thân a Ngốc → tỉnh dậy sinh cảm giác thân thiết với Ngô Vũ @c0079.", tag: "dong-hanh" },
          { ten: "Vương Lâm", quanHe: "Đồng hành (từ @c0079)", ghiChu: "VL thực chất đang 'sở hữu' a Ngốc dù không chính thức tế luyện.", tag: "dong-hanh" },
          { ten: "Dạ Tự Tại / La Sát", quanHe: "Chủ nhân hiện tại (kế hoạch lô đỉnh giả đan)", ghiChu: "Bị nhận làm lô đỉnh thi khôi giả đan @c0081; La Sát kế hoạch nâng a Ngốc lên Kết Đan.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0077", "@c0078", "@c0079", "@c0080", "@c0081", "@c0082", "@c0086"]
    },
    {
      id: "ngo-vu",
      name: "Ngô Vũ",
      cn: "",
      aliases: ["lão tổ Ngô Vũ", "người đồng tử cao một thước"],
      gioiTinh: "nam",
      theLuc: ["Thi Âm tông"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (suy yếu sau mấy trăm năm) (@c0079)",
      trangThai: "song (ẩn trong pho tượng đá)",
      vaiTro: "Lão tổ Thi Âm tông bị mắc kẹt; nhờ Vương Lâm tìm Dạ Tự Tại",
      tinhCach: "Thận trọng, khôn ngoan khi yếu thế; lấy Nguyên Anh ra thề để trấn an Vương Lâm; lai lịch phức tạp (có thể chưa nói hết sự thật).",
      blurb: "Lão tổ Thi Âm tông, sư huynh của Dạ Tự Tại. Ba trăm năm trước mang thi khôi (a Ngốc) tới Hoàng Âm chi địa định đột phá Nguyên Anh, thất bại; thi khôi thoát khống chế, đắc cơ duyên đột phá Nguyên Anh trung kỳ. Buộc Nguyên Anh ly thể ẩn vào pho tượng đá, bị thân thể cũ (nay là nam tử thây khô) truy sát suốt mấy trăm năm. Nhờ Vương Lâm tìm Dạ Tự Tại cứu mình. (@c0079)",
      tabs: {
        diem: [
          { text: "Đã phí một cơ hội đoạt xá trên a Ngốc — nay không đoạt xá được nữa (trừ khi đạt Nguyên Anh trung kỳ).", chuong: "@c0079" },
          { text: "Mở truyền tống trận bằng tinh khí Nguyên Anh cuối cùng — hao tổn lớn để cứu mình khỏi tình thế ngặt nghèo.", chuong: "@c0079" }
        ],
        kinhLich: [
          {
            chuong: "@c0079",
            importance: "major",
            text: "Hiện ra dưới dạng người đồng tử cao một thước, thần thái suy yếu, ánh sáng ảm đạm trong pho tượng đá. Kể lai lịch (ba trăm năm bị thân thể cũ truy sát, ẩn trong pho tượng). Lấy Nguyên Anh ra thề không lừa dối. Khẩn cầu VL tìm sư huynh Dạ Tự Tại. Mở truyền tống trận hình ngũ giác vàng đưa VL + a Ngốc về Thi Âm tông. (@c0079)"
          },
          {
            chuong: "@c0081",
            importance: "minor",
            text: "Được nhắc đến gián tiếp: VL được Dạ Tự Tại nhận là đại đệ tử thứ hai — qua đó Ngô Vũ là cơ sở danh nghĩa để VL vào Thi Âm tông. (@c0081)"
          },
          {
            chuong: "@c0086",
            importance: "minor",
            text: "Vẫn trong pho tượng đá — được nhắc gián tiếp khi La Sát quyết định cử VL (đại đệ tử thứ hai) đến Quyết Minh Cốc. (@c0086)"
          }
        ],
        tuVi: "Nguyên Anh kỳ, suy yếu sau mấy trăm năm (chỉ còn Nguyên Anh thể cao một thước @c0079).",
        tuViMoc: [
          { chuong: "@c0079", canhGioi: "Nguyên Anh kỳ (suy yếu)", text: "Nguyên Anh li thể ẩn trong pho tượng đá; chỉ cao chừng một thước (suy yếu sau mấy trăm năm hao tổn)." }
        ],
        nhanMach: [
          { ten: "Dạ Tự Tại", quanHe: "Sư huynh Thi Âm tông", ghiChu: "Ngô Vũ nhờ VL tìm sư huynh cứu mình @c0079.", tag: "su-mon" },
          { ten: "A Ngốc", quanHe: "Thi khôi cũ (đoạt xá thất bại)", ghiChu: "Để lại nửa tinh khí Nguyên Anh trong thân a Ngốc @c0079.", tag: "dong-hanh" },
          { ten: "Vương Lâm", quanHe: "Người được nhờ cứu", ghiChu: "Khắc bí thuật lên lưng VL để VL danh chính ngôn thuận vào Thi Âm tông @c0079.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0079", "@c0081", "@c0086"]
    },
    {
      id: "moc-ngung",
      name: "Mộc Ngung",
      cn: "",
      aliases: ["Mộc Nhũng", "chấp sự trưởng lão"],
      gioiTinh: "nam",
      theLuc: ["Thi Âm tông"],
      canhGioiCaoNhat: "Trúc Cơ trung kỳ (@c0080)",
      trangThai: "song",
      vaiTro: "Chấp sự trưởng lão Thi Âm tông Triệu quốc",
      tinhCach: "Thực dụng, biết nhìn thực lực; cung kính ngay khi nghe tên Ngô Vũ; tia hoài nghi bị Vương Lâm xóa sạch bằng kỹ thuật ngưng khói.",
      blurb: "Chấp sự trưởng lão Thi Âm tông Triệu quốc, Trúc Cơ trung kỳ. Tu luyện bằng cách hấp thụ khí xanh biếc từ hỏa cầu Lam Viêm Ma hỏa qua thất khiếu. Tiếp đón Vương Lâm, gọi 'sư thúc về tông' khi nghe tên Ngô Vũ; dùng ngọc giản liên lạc gọi Dạ Tự Tại lão tổ. (@c0080)",
      tabs: {
        diem: [
          { text: "Nhận xét a Ngốc chỉ thấp hơn Phi Thiên La Sát của 'Dạ lão tổ' — xác nhận Dạ Tự Tại sở hữu Phi Thiên La Sát.", chuong: "@c0080" }
        ],
        kinhLich: [
          {
            chuong: "@c0080",
            importance: "major",
            text: "Đang ngồi tu luyện hấp thụ Lam Viêm Ma hỏa trong huyệt động cột đá; tiếp đón Vương Lâm do thanh niên gác trận dẫn tới. Khi nghe VL xưng đệ tử Ngô Vũ lập tức đứng bật dậy, xưng mình là Mộc Ngung, gọi VL là 'sư thúc'. Dùng ngọc giản liên lạc Dạ lão tổ. Khen kỹ thuật 'ngưng khói thành thật' của VL — tia hoài nghi cuối cùng bị triệt tiêu. Quỳ rạp khi Dạ Tự Tại xuất hiện cuối chương. (@c0080)"
          },
          {
            chuong: "@c0081",
            importance: "minor",
            text: "Chứng kiến VL được Dạ Tự Tại chính thức nhận làm đại đệ tử thứ hai. Xác nhận bản thân đã đột phá ba năm trước. (@c0081)"
          },
          {
            chuong: "@c0084",
            importance: "minor",
            text: "Dẫn VL xuống Địa Âm chi địa (huyệt động âm hàn sâu nhất của Thi Âm tông) để VL tu luyện Hoàng Tuyền Thăng Khiếu Quyết. (@c0084)"
          },
          {
            chuong: "@c0086",
            importance: "minor",
            text: "Chứng kiến La Sát (qua thân Dạ Tự Tại) cử VL đi Quyết Minh Cốc cùng nhóm 20 vật dẫn dẫn đường bởi Đổ Trần. (@c0086)"
          }
        ],
        tuVi: "Trúc Cơ trung kỳ (@c0080). Đột phá ba năm trước @c0081.",
        tuViMoc: [
          { chuong: "@c0080", canhGioi: "Trúc Cơ trung kỳ", text: "VL đảo thần thức xác định Mộc Ngung Trúc Cơ trung kỳ khi gặp mặt @c0080." }
        ],
        nhanMach: [
          { ten: "Dạ Tự Tại", quanHe: "Lão tổ cấp trên", ghiChu: "Quỳ rạp khi Dạ Tự Tại xuất hiện; liên lạc qua ngọc giản @c0080.", tag: "su-mon" },
          { ten: "Vương Lâm", quanHe: "Khách/sư thúc (giả)", ghiChu: "Gọi VL là 'sư thúc' khi biết VL là đệ tử Ngô Vũ @c0080; dẫn VL xuống Địa Âm chi địa @c0084.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0080", "@c0081", "@c0084", "@c0086"]
    },
    {
      id: "da-tu-tai",
      name: "Dạ Tự Tại",
      cn: "",
      aliases: ["Dạ lão tổ"],
      gioiTinh: "nam",
      theLuc: ["Thi Âm tông"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (@c0079–@c0080); thọ mệnh còn <3 tháng @c0081",
      trangThai: "song (thân thể do La Sát ký sinh điều khiển; thọ mệnh cực ngắn @c0081)",
      vaiTro: "Lão tổ tối cao Thi Âm tông Triệu quốc (thân xác bị La Sát ký sinh)",
      tinhCach: "Uy áp khổng lồ (cả tông quỳ bái); giọng lạnh lẽo khi thẩm vấn Vương Lâm; sư đệ Ngô Vũ. Sau @c0081 thực chất là La Sát điều khiển thân xác.",
      blurb: "Lão tổ tối cao Thi Âm tông Triệu quốc, tu vi Nguyên Anh — suy ra từ uy áp khổng lồ + quy chế trận pháp (41+ đạo ánh sáng đại biểu Nguyên Anh lão tổ). Sư đệ Ngô Vũ (gọi 'Ngô Vũ sư đệ'). Sở hữu Phi Thiên La Sát (thi khôi đỉnh cấp) và đã tế luyện Lam Viêm Ma hỏa. Xuất hiện cuối @c0080 dưới dạng bóng người hư ảo qua hỏa cầu, chất vấn Vương Lâm. Từ @c0081: thân thể thực chất bị La Sát (ký sinh hữu tri cổ xưa) kiểm soát; thọ mệnh còn <3 tháng. (@c0079–@c0086)",
      tabs: {
        diem: [
          { text: "Uy áp xuất hiện khiến cả Vương Lâm (Trúc Cơ trung kỳ) phải sợ hãi, đồng tử rút lại — cách biệt tu vi rất lớn.", chuong: "@c0080" },
          { text: "Thân thể bị La Sát (ký sinh hữu tri cổ xưa) kiểm soát hoàn toàn từ nội tâm; thọ mệnh <3 tháng @c0081 — Dạ Tự Tại chỉ còn là vỏ bọc.", chuong: "@c0081" }
        ],
        kinhLich: [
          {
            chuong: "@c0079",
            importance: "minor",
            text: "Ngô Vũ nhắc đến Dạ Tự Tại là sư huynh tại Thi Âm tông, nhờ Vương Lâm tìm để cứu mình. (@c0079)"
          },
          {
            chuong: "@c0080",
            importance: "major",
            text: "Được Mộc Ngung liên lạc qua ngọc giản. Xuất hiện dưới dạng bóng người hư ảo từ bốn hỏa cầu Lam Viêm Ma hỏa tối sầm tỏa khói xanh; uy áp khổng lồ khiến Mộc Ngung quỳ rạp, Vương Lâm sợ hãi. Cất giọng lạnh lẽo hỏi 'Ngươi chính là đệ tử của Ngô Vũ sư đệ?' — chương dừng tại đây. (@c0080)"
          },
          {
            chuong: "@c0081",
            importance: "major",
            text: "Chính thức nhận VL làm đại đệ tử thứ hai. Trao ngọc giản lam đậm Thi Âm tông cho VL. Tiết lộ: thân thể bị La Sát ký sinh hoàn toàn; thọ mệnh còn <3 tháng. Nhận a Ngốc làm lô đỉnh thi khôi giả đan. Kế hoạch: dùng VL + 20 người làm vật dẫn nâng thi khôi giả đan lên Kết Đan kỳ. (@c0081)",
            bridge: true
          },
          {
            chuong: "@c0082",
            importance: "normal",
            text: "Giới thiệu VL về Hoàng Tuyền Đạo (công pháp cốt lõi Thi Âm tông); hướng dẫn VL luyện tập trong huyệt động Địa Âm chi địa. (@c0082)"
          },
          {
            chuong: "@c0086",
            importance: "major",
            text: "La Sát (qua thân Dạ Tự Tại) quyết định cử VL đến Quyết Minh Cốc cùng 20 vật dẫn, dưới sự dẫn dắt của Đổ Trần (Trúc Cơ hậu kỳ, có giả đan). (@c0086)"
          }
        ],
        tuVi: "Nguyên Anh kỳ (@c0079–@c0080). Thân thể bị La Sát ký sinh; thọ mệnh <3 tháng @c0081. Sở hữu Phi Thiên La Sát và Lam Viêm Ma hỏa (tế luyện từ kim đan cao thủ Kết Đan kỳ Chánh Đạo Liên Minh).",
        tuViMoc: [
          { chuong: "@c0080", canhGioi: "Nguyên Anh kỳ", text: "Suy ra từ: quy chế trận pháp (41+ đạo ánh sáng = địa vị Nguyên Anh lão tổ); uy áp khổng lồ khiến Trúc Cơ trung kỳ quỳ rạp và Trúc Cơ trung kỳ VL sợ hãi @c0080." }
        ],
        nhanMach: [
          { ten: "Ngô Vũ", quanHe: "Sư huynh (tại Thi Âm tông)", ghiChu: "Dạ Tự Tại gọi 'Ngô Vũ sư đệ' @c0080; Ngô Vũ nhờ VL tìm Dạ Tự Tại cứu mình @c0079.", tag: "su-mon" },
          { ten: "Vương Lâm", quanHe: "Đại đệ tử thứ hai (danh nghĩa); vật dẫn (thực chất)", ghiChu: "Nhận VL làm đệ tử @c0081; cử VL đến Quyết Minh Cốc @c0086. Thực chất La Sát dùng VL làm vật dẫn nâng thi khôi giả đan.", tag: "su-mon" },
          { ten: "La Sát", quanHe: "Ký sinh kiểm soát thân thể", ghiChu: "La Sát là ký sinh hữu tri cổ xưa hoàn toàn kiểm soát Dạ Tự Tại từ nội tâm @c0081.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0079", "@c0080", "@c0081", "@c0082", "@c0086"]
    },
    {
      id: "nam-tu-thay-kho",
      name: "Nam tử thây khô",
      cn: "",
      aliases: ["thi khôi Ngô Vũ", "thi mị Nguyên Anh trung kỳ", "thân thể cũ Ngô Vũ"],
      gioiTinh: "nam",
      theLuc: [],
      canhGioiCaoNhat: "Nguyên Anh trung kỳ (@c0078–@c0079)",
      trangThai: "song (truy sát Ngô Vũ)",
      vaiTro: "Thân thể cũ Ngô Vũ đã tự sinh thần trí; truy sát Nguyên Anh Ngô Vũ để đoạt tự do",
      tinhCach: "Lạnh lùng, kiên nhẫn; nói cổ ngữ để điều khiển pho tượng; không truy đuổi Đằng Hóa Nguyên sau khi đánh đuổi.",
      blurb: "Thân thể cũ của lão tổ Ngô Vũ — ba trăm năm trước bị Ngô Vũ bỏ lại khi Nguyên Anh ly thể chạy thoát; thân thể nảy sinh thần trí, đắc cơ duyên đột phá Nguyên Anh trung kỳ (vượt qua Ngô Vũ). Bị ràng buộc không được rời Ngô Vũ quá trăm dặm (nếu không sẽ tan); mỗi lần hoạt động phải nghỉ ~trăm năm. Đánh đuổi Đằng Hóa Nguyên @c0078; phá pho tượng tìm Ngô Vũ @c0079 nhưng để VL + Ngô Vũ + a Ngốc kịp truyền tống đi. (@c0078–@c0079)",
      tabs: {
        diem: [
          { text: "Nguyên Anh trung kỳ — mạnh hơn Đằng Hóa Nguyên (Nguyên Anh kỳ sơ/trung); đánh đuổi lão tổ Đằng Gia chỉ bằng một bàn tay to @c0078.", chuong: "@c0078" },
          { text: "Ràng buộc đặc biệt: không rời Ngô Vũ quá trăm dặm; mỗi lần hoạt động phải nghỉ ~trăm năm — 'kỳ hạn trăm năm' được nhắc ở @c0077.", chuong: "@c0077" }
        ],
        kinhLich: [
          {
            chuong: "@c0077",
            importance: "normal",
            text: "Xuất hiện gián tiếp: bàn tay khô héo lóe hắc quang ngưng tụ lôi cầu tím từ quan tài hở góc; nói 'kỳ hạn trăm năm sắp tới — chủ nhân của ta, ngươi không chạy thoát được nữa đâu'. (@c0077)"
          },
          {
            chuong: "@c0078",
            importance: "major",
            text: "Hiện ra từ làn hắc vụ, đánh đuổi Đằng Hóa Nguyên (dùng cánh tay khô héo hóa bàn tay to + phong ấn không gian); bắt thi mị ép tìm Nguyên Anh của chủ nhân (Ngô Vũ). (@c0078)"
          },
          {
            chuong: "@c0079",
            importance: "major",
            text: "Từ quan tài bay tới, nói cổ ngữ ngăn pho tượng chui xuống đất; tuyên bố 'Chủ nhân! Lần này xem ngươi chạy trốn đi đâu.' Phá vỡ pho tượng nhưng để Ngô Vũ + VL + a Ngốc kịp truyền tống đi. (@c0079)"
          }
        ],
        tuVi: "Nguyên Anh trung kỳ (@c0078). Mạnh hơn Nguyên Anh kỳ Đằng Hóa Nguyên.",
        tuViMoc: [
          { chuong: "@c0078", canhGioi: "Nguyên Anh trung kỳ", text: "Đằng Hóa Nguyên đảo thần thức phát hiện tu vi đối phương là Nguyên Anh trung kỳ — cảnh giới lão không thể chống lại @c0078." }
        ],
        nhanMach: [
          { ten: "Ngô Vũ", quanHe: "Chủ nhân cũ (đang truy sát để nuốt Nguyên Anh)", ghiChu: "Thân thể cũ Ngô Vũ; truy sát để chiếm Nguyên Anh → đoạt tự do @c0079.", tag: "doi-thu" },
          { ten: "Đằng Hóa Nguyên", quanHe: "Bị đánh đuổi @c0078", ghiChu: "Đánh thương ĐHN, không đuổi theo sau khi lão bỏ chạy.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0077", "@c0078", "@c0079"]
    },
    {
      id: "la-sat",
      name: "La Sát",
      cn: "",
      aliases: ["ký sinh trong Dạ Tự Tại"],
      gioiTinh: "nam",
      theLuc: ["Thi Âm tông (qua thân Dạ Tự Tại)"],
      canhGioiCaoNhat: "Không rõ (cổ xưa, hữu tri — ký sinh trong Nguyên Anh kỳ tu sĩ @c0081)",
      trangThai: "song (ký sinh trong thân xác Dạ Tự Tại)",
      vaiTro: "Thực thể bí ẩn kiểm soát Thi Âm tông từ bóng tối",
      tinhCach: "Lạnh lùng, tính toán xa; xây dựng kế hoạch lâu dài; dùng người như công cụ.",
      blurb: "Ký sinh hữu tri cổ xưa đang chiếm thân xác Dạ Tự Tại (lão tổ Nguyên Anh kỳ Thi Âm tông). Thọ mệnh Dạ Tự Tại còn <3 tháng @c0081. Kế hoạch: dùng VL + 20 người làm vật dẫn nâng thi khôi giả đan lên Kết Đan; kế hoạch dài hạn nâng a Ngốc lên Kết Đan kỳ. Sở hữu Phi Thiên La Sát (pháp bảo đỉnh cấp thi khôi). (@c0081–@c0086)",
      tabs: {
        diem: [
          { text: "Ký sinh hữu tri — không phải tu sĩ bình thường; kiểm soát Dạ Tự Tại từ bên trong, tất cả hành động 'Dạ Tự Tại' từ @c0081 thực chất là La Sát thực hiện.", chuong: "@c0081" }
        ],
        kinhLich: [
          {
            chuong: "@c0081",
            importance: "major",
            text: "Bản chất thật tiết lộ: La Sát là ký sinh hữu tri cổ xưa trong thân Dạ Tự Tại. Thọ mệnh Dạ Tự Tại <3 tháng. Nhận VL làm đại đệ tử thứ hai; nhận a Ngốc làm lô đỉnh thi khôi giả đan. Kế hoạch: VL + 20 người làm vật dẫn nâng thi khôi giả đan. Trao ngọc giản Thi Âm tông cho VL. (@c0081)",
            bridge: true
          },
          {
            chuong: "@c0086",
            importance: "major",
            text: "Cử VL đến Quyết Minh Cốc cùng 20 vật dẫn, dẫn đường bởi Đổ Trần (Trúc Cơ hậu kỳ có giả đan). Vẫn giữ kế hoạch nâng a Ngốc lên Kết Đan kỳ. (@c0086)"
          }
        ],
        tuVi: "Không rõ (cổ xưa, hữu tri); đang ký sinh Nguyên Anh kỳ tu sĩ @c0081.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Dạ Tự Tại", quanHe: "Vật chủ ký sinh", ghiChu: "Chiếm thân xác Dạ Tự Tại; Dạ Tự Tại thọ mệnh <3 tháng @c0081.", tag: "doi-thu" },
          { ten: "Vương Lâm", quanHe: "Vật dẫn / đại đệ tử thứ hai (danh nghĩa)", ghiChu: "Dùng VL làm vật dẫn nâng thi khôi giả đan @c0081; cử VL đến Quyết Minh Cốc @c0086.", tag: "doi-thu" },
          { ten: "A Ngốc", quanHe: "Lô đỉnh thi khôi (kế hoạch)", ghiChu: "Kế hoạch nâng a Ngốc lên Kết Đan kỳ @c0081–@c0086.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0081", "@c0086"]
    },
    {
      id: "do-tran",
      name: "Đổ Trần",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Thi Âm tông"],
      canhGioiCaoNhat: "Trúc Cơ hậu kỳ, có giả đan (@c0086)",
      trangThai: "song",
      vaiTro: "Đệ tử cao cấp Thi Âm tông, dẫn đường nhóm vật dẫn vào Quyết Minh Cốc",
      tinhCach: "Phục lệnh La Sát; thực dụng, không có cảm xúc với vật dẫn đi cùng.",
      blurb: "Trúc Cơ hậu kỳ có giả đan, đệ tử cao cấp Thi Âm tông. Được La Sát (qua thân Dạ Tự Tại) phái dẫn nhóm 20 vật dẫn + VL vào Quyết Minh Cốc. (@c0086)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0086",
            importance: "major",
            text: "Được phái dẫn nhóm 20 vật dẫn và VL tiến vào Quyết Minh Cốc. Tu vi Trúc Cơ hậu kỳ có giả đan — đủ để vào trong mà không bị trận phong ấn chặn? (Trận phong ấn Kết Đan+ — Đổ Trần có giả đan nhưng chưa Kết Đan thật, nên vẫn vào được.) (@c0086)"
          }
        ],
        tuVi: "Trúc Cơ hậu kỳ, có giả đan (@c0086).",
        tuViMoc: [
          { chuong: "@c0086", canhGioi: "Trúc Cơ hậu kỳ (giả đan)", text: "Được nhắc rõ tu vi khi La Sát phái dẫn nhóm vật dẫn @c0086." }
        ],
        nhanMach: [
          { ten: "La Sát / Dạ Tự Tại", quanHe: "Thượng cấp", ghiChu: "Nhận lệnh từ La Sát dẫn nhóm vật dẫn vào Quyết Minh Cốc @c0086.", tag: "su-mon" },
          { ten: "Vương Lâm", quanHe: "Thành viên đoàn / đối tượng áp giải", ghiChu: "VL đi cùng nhưng không bị coi là tù nhân @c0086.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0086"]
    },
    {
      id: "khai-minh",
      name: "Khải Minh",
      cn: "",
      aliases: ["thầy toán"],
      gioiTinh: "nam",
      theLuc: ["đồng minh Đằng Hóa Nguyên"],
      canhGioiCaoNhat: "Chưa rõ (sở hữu gương cổ, thiên toán chi đạo @c0087)",
      trangThai: "song",
      vaiTro: "Đồng minh Đằng Hóa Nguyên; thầy toán cứu Tứ thúc Vương Lâm",
      tinhCach: "Tinh thông thiên toán; hành động nhanh gọn — tới cứu người, hoàn thành rồi đi.",
      blurb: "Thầy toán sở hữu gương cổ và thuật Thiên toán chi đạo. Đồng minh Đằng Hóa Nguyên, được phái đến cứu Tứ thúc của Vương Lâm (bị bắt làm con tin) sau khi ĐHN tiêu diệt Vương gia. (@c0087)",
      tabs: {
        diem: [
          { text: "Sở hữu gương cổ — pháp bảo phụ trợ Thiên toán chi đạo; chưa rõ cụ thể tác dụng.", chuong: "@c0087" }
        ],
        kinhLich: [
          {
            chuong: "@c0087",
            importance: "major",
            text: "Xuất hiện theo lệnh Đằng Hóa Nguyên, dùng Thiên toán chi đạo + gương cổ cứu Tứ thúc Vương Lâm (đang bị giữ làm con tin). (@c0087)"
          }
        ],
        tuVi: "Chưa xác nhận (@c0087).",
        tuViMoc: [],
        nhanMach: [
          { ten: "Đằng Hóa Nguyên", quanHe: "Người sai phái", ghiChu: "Phục vụ Đằng Hóa Nguyên như đồng minh/thủ hạ @c0087.", tag: "dong-minh" },
          { ten: "Tứ thúc Vương Lâm", quanHe: "Người được cứu", ghiChu: "Cứu Tứ thúc thoát con tin @c0087.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0087"]
    },
    {
      id: "chu-quyen",
      name: "Chu Quyền",
      cn: "",
      aliases: ["bạch y thanh niên", "đệ tử Viên phái"],
      gioiTinh: "nam",
      theLuc: ["Viên phái"],
      canhGioiCaoNhat: "Trúc Cơ kỳ (suy ra — có thể vào Quyết Minh Cốc @c0088)",
      trangThai: "song",
      vaiTro: "Đệ tử Viên phái (chính đạo), tu luyện trong Quyết Minh Cốc",
      tinhCach: "Bình thản, độc lập; tu luyện một mình trong Quyết Minh Cốc.",
      blurb: "Thanh niên áo trắng thuộc chính đạo, đệ tử Viên phái, tu luyện trong Quyết Minh Cốc. Gặp Vương Lâm trong cốc @c0088. (@c0088)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0088",
            importance: "normal",
            text: "Gặp Vương Lâm trong Quyết Minh Cốc; thanh niên áo trắng, là đệ tử Viên phái (chính đạo). Đang tu luyện độc lập trong cốc. (@c0088)"
          }
        ],
        tuVi: "Trúc Cơ kỳ (suy ra từ điều kiện vào Quyết Minh Cốc @c0088).",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Gặp gỡ trong cốc", ghiChu: "Gặp VL trong Quyết Minh Cốc @c0088.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0088"]
    }
  ]
};

window.LIB_DATA["tien-nghich"].cotTruyen = {
  q01: [
    {
      chuong: 1,
      tieuDe: "Ly Hương",
      tomTat: "Vương Lâm — thiếu niên 15 tuổi ở sơn thôn, được coi là thần đồng — nhận được cơ hội bất ngờ khi Tứ thúc nhường suất đề cử của Vương thị gia tộc để hắn dự tuyển Hằng Nhạc Phái. Buổi tiệc mừng thu hút cả gia tộc họ Vương, trong đó anh họ Vương Trác kiêu ngạo công khai sỉ nhục Vương Lâm và khoe mình đã được tiên sư nội bộ chỉ định. Không cãi lại, Vương Lâm âm thầm hạ quyết tâm 'vô luận thế nào cũng phải được tuyển chọn'. Nửa tháng sau, hắn lần đầu rời thôn theo Tứ thúc, cha mẹ rơi lệ tiễn đưa — khởi đầu hành trình tu tiên. (@c0001)"
    },
    {
      chuong: 2,
      tieuDe: "Tiên Nhân",
      tomTat: "Vương Lâm cùng Vương Trác và thiếu niên lanh lợi Vương Hạo được bạch y thanh niên Hằng Nhạc Phái dùng kiếm quang độn bay lên sơn phong tiên cảnh. Vương Lâm lần đầu thấy tiên nhân, kinh hãi mặt tái nhưng lòng càng khát vọng tu tiên. Tại sơn phong Hằng Nhạc Phái — môn phái tu chân từng huy hoàng với mấy vị Nguyên Anh kỳ nay đã suy thoái — trung niên nhân (Tam sư huynh) chủ trì buổi trắc thí tuyển chọn. Tổng cộng 48 thiếu niên tề tựu; vòng một là kiểm tra linh căn: người đầu tiên bị gọi lập tức bị phán 'Không hợp cách'. (@c0002)"
    },
    {
      chuong: 3,
      tieuDe: "Trắc Thí",
      tomTat: "Vòng trắc thí tư chất tiếp diễn: Vương Trác đạt nhờ linh căn và sự tiến cử của Đạo Hư sư thúc; Vương Hạo tư chất kém nhưng dâng hộp ngọc chứa linh chi 300 năm nên được nhận làm dược đồng luyện đan; Vương Lâm bị phán thẳng 'Không hợp cách', rơi vào tuyệt vọng. Chỉ có 3 trong 48 thiếu niên đạt tư chất. Khi tưởng như hết đường, trung niên nhân mở vòng hai: trắc thí nghị lực — leo thềm đá dốc lên đỉnh núi trong 3 ngày, ai tới đỉnh thì được làm ký danh đệ tử. 39 người bắt đầu leo, tốc độ mỗi người mỗi khác. Vương Lâm thở sâu, ánh mắt kiên định, không do dự bước lên thềm đá bắt đầu leo. (@c0003)"
    },
    {
      chuong: 4,
      tieuDe: "Vô Tình",
      tomTat: "Vương Lâm leo thềm đá suốt gần ba ngày — huyết nhục lẫn lộn, hôn mê ngã xuống chỉ còn cách đỉnh chưa đầy mười trượng — trượt trắc thí nghị lực. Hắc y trung niên nhân tuyên hết giờ với vẻ vô tình. Trong nhóm 11 người kiên trì đến cuối, Vương Lâm được thử Kiếm Linh Các: hắn tiến xa nhất — vượt qua mốc năm trượng mà sáu người trước bị chặn, bước tới cách cổng ba trượng, khiến chủ khảo thanh niên áo trắng lộ hứng thú và hứa sẽ được nhận thẳng làm đệ tử chính thức nếu vào được. Nhưng rốt cục lực đạo khổng lồ đẩy bật hắn ra — trượt Kiếm Linh. Mười một người đều trượt. Trên đường về, Vương Trác nhạo báng Vương Lâm bằng biệt danh 'Thiết Trụ'; Vương Lâm nén nhục, chỉ xin được đưa về với cha mẹ. (@c0004)"
    },
    {
      chuong: 5,
      tieuDe: "Đường Về",
      tomTat: "Ba thiếu niên được đệ tử Hằng Nhạc Phái đưa về bằng kiếm quang. Tại Vương thị gia tộc, một bữa tiệc chúc mừng lớn đang chờ — toàn bộ thân thích tề tựu, tâng bốc cha Vương Lâm không ngừng vì tưởng con sẽ thành tiên nhân. Khi đoàn xuất hiện, Vương Trác đắc ý khoe được Đạo Hư thượng tiên thu làm đồ đệ; Vương Hạo được nhận làm dược đồng. Vương Lâm im lặng — không được Hằng Nhạc Phái thu nhận. Hắn quỳ dập đầu xin lỗi cha mẹ, cắn môi chảy máu; mẹ ôm con khóc, dặn đừng làm chuyện dại dột. Đệ tử Hằng Nhạc Phái nói lời 'Đại đạo vô tình', hẹn ba ngày sau quay lại đón người được chọn, rồi hóa kiếm quang rời đi. (@c0005)"
    },
    {
      chuong: 6,
      tieuDe: "Lợi Thế",
      tomTat: "Ngay sau khi Vương Lâm trượt tuyển bị công khai, toàn bộ thân thích Vương gia trở mặt — sỉ nhục, đòi lại lễ vật, hủy thông gia, chê tên 'Thiết Trụ' nghe ngu ngốc. Vương Lâm trầm tĩnh nhìn từng người, ghi kỹ diện mạo mỗi thân thích; đây là khoảnh khắc tâm tính then chốt. Cha Vương Lâm (Vương Thiên Thủy) bùng nộ tố cáo Vương Thiên Sơn cướp gia sản, suýt hổn chiến; Tứ thúc ngăn lại rồi đe dọa Vương Thiên Sơn bằng thế lực giang hồ. Vương Hạo có thiện cảm, định bênh nhưng bị cha ngăn. Tứ thúc dàn xếp xong, đề nghị đưa Vương Lâm ra phàm nhân môn phái giang hồ lịch lãm nếu không muốn đọc sách. (@c0006)"
    },
    {
      chuong: 7,
      tieuDe: "Lưu Thư",
      tomTat: "Vương Lâm tuyên thề trước cả họ sẽ bước vào tiên nhân môn phái; Tứ thúc dọa phế Vương Trác, suýt xung đột với Vương Thiên Sơn. Đêm khuya, Vương Lâm lén để lại lưu thư cho cha mẹ, bỏ nhà lần thứ hai — băng thâm sơn hướng đông quay lại Hằng Nhạc Phái. Sau một tuần đi sâu trong núi, hắn bị hổ trắng dồn nên nhảy vách núi, vĩnh biệt cha mẹ trong lòng. Giữa chừng rơi, một cỗ lực hút khổng lồ từ huyệt động trên vách kéo hắn vào — cứu hắn khỏi cái chết. Huyệt động bí ẩn này đầy hài cốt chim thú, và trên vách có một lỗ đen bằng nắm tay định kỳ phát ra lực hút khổng lồ. Vương Lâm bắt đầu đo chu kỳ: hút khoảng một canh giờ, ngưng nửa canh giờ. (@c0007)"
    },
    {
      chuong: 8,
      tieuDe: "Thạch Châu",
      tomTat: "Bị kẹt trong huyệt động với cánh tay phải sưng tê liệt và không thể trốn thoát, Vương Lâm ăn thịt sống phi điểu chết trong động để sống sót. Trong xác chim, hắn moi được một vật tưởng là nội đan đỏ — lau sạch hóa ra là Thạch Châu màu xám khắc năm đóa mây trắng, trông rất cổ. Sáng hôm sau phát hiện thạch châu tiết hạt sương dưới nắng; sương vị ngọt, bôi lên chỗ sưng thì vết thương xẹp hẳn, cánh tay hồi phục. Vương Lâm kết luận đây là bảo bối. Lực hút kỳ quái trong động đến từ hắc động trên vách, không phải thạch châu. (@c0008)"
    },
    {
      chuong: 9,
      tieuDe: "Hạ Nhai",
      tomTat: "Vương Lâm tụt vách xuống chân núi (xé quần áo bện dây, dây đứt), đùi phải đâm trúng đá nhọn lộ xương; tự sơ cứu bằng sương thạch châu. Đang kiệt sức thì nghe tiếng gọi của cha — đệ tử Hằng Nhạc Phái họ Trương và cha Vương Lâm đang tìm hắn. Đệ tử họ Trương leo lên xem huyệt động, xác nhận lực hút là 'phong nhãn thiên nhiên hình thành', kết luận đứa nhỏ muốn tự sát nhưng bị phong nhãn cứu. Tại đại điện Hằng Nhạc Phái, các trưởng lão (Mã trưởng lão, cẩm bào lão giả, trung niên nhân) tranh luận số phận Vương Lâm; lão giả mặt đầy nếp nhăn cuối cùng đề xuất phá lệ thu hắn làm ký danh đệ tử để tránh tiếng 'bức tử' — chương kết tại đây. (@c0009)"
    },
    {
      chuong: 10,
      tieuDe: "Nhập Môn",
      tomTat: "Vương Lâm chính thức nhập môn Hằng Nhạc Phái với thân phận ký danh đệ tử — thực ra nhờ Tứ thúc dâng khối tinh thiết bất phàm mua từ thợ rèn cho trung niên nhân tiến cử. Tiễn cha mẹ xuống núi, hắn bị hoàng y thanh niên ('con chồn' — đệ tử tạp vụ áo vàng, chưa rõ tên) ra lệnh gánh đầy mười vại nước khổng lồ mỗi ngày; không hoàn thành bảy ngày liên tiếp sẽ bị trục xuất. Nhận áo xám, thẻ bài, phòng ở phía Bắc. Hắn quyết giấu kín Thạch Châu ('hoài bích có tội'). Tối đến gặp bạn cùng phòng Trương Hổ — thiếu niên đói hai ngày; Vương Lâm cho khoai lang, Trương Hổ cảnh báo về 'con chồn' tạp vụ tâm địa gian xảo. (@c0011: Trương Hổ giảng thêm quy chế ba tầng đệ tử và khái niệm linh căn)"
    },
    {
      chuong: 11,
      tieuDe: "Trương Hổ",
      tomTat: "Trương Hổ — ký danh đệ tử đốn củi ba năm, nghèo khổ nhưng tốt bụng — giải thích quy chế ba tầng đệ tử Hằng Nhạc Phái (ký danh / đồng tử / nội môn) và khái niệm linh căn quyết định tốc độ tu luyện. Vương Lâm bí mật dùng nước ngâm Thạch Châu hồi phục cơ bắp sau mỗi buổi gánh nước nặng — thể chất cường hóa dần; rút thời gian hoàn thành mười vại từ sáu ngày xuống ba ngày, cố ý giả vờ mệt mỏi để không ai nghi. Đây là lần đầu Thạch Châu bộc lộ công năng cường hóa thể chất khi ngâm nước. (@c0011)"
    },
    {
      chuong: 12,
      tieuDe: "Tiên Phù",
      tomTat: "Sau một tháng nhập môn, Vương Lâm bị toàn bộ ký danh đệ tử khinh thường châm chọc; nhẫn nhịn, ghi nhớ diện mạo từng kẻ để sau trả thù. Nghiên cứu Thạch Châu: xác định hạt sương sáng sớm kết ngay trên châu cho hiệu quả tốt nhất; phát hiện châu tự hấp thu hơn phân nửa hạt sương — bí mật ngày càng sâu. Cầu kiến Tôn trưởng lão tại chính viện (nơi có vườn dược cấm chế), được cấp kỳ hạn ba ngày và Thiên Lý Phù về dự thọ cha. Ngay sau khi Vương Lâm rời đi, Tôn trưởng lão phát hiện Lam Tuyến Thảo gần cổng vườn dược héo rũ — khởi đầu mạch điều tra. (@c0012)"
    },
    {
      chuong: 13,
      tieuDe: "Trưởng Lão",
      tomTat: "Tôn trưởng lão phát hiện cả Tử Dạ Hoa cũng héo dù bùn đất ẩm ướt — thảo dược mất toàn bộ nước một cách bí ẩn. Hắn mở cuộc điều tra: bay bằng đám mây bảy màu, quát đệ tử họ Lưu như sấm, tới phòng Vương Lâm không gặp (VL đã về quê), hoãn chờ trở về. Vương Lâm phóng tiên phù, một đêm ra khỏi núi, ghé thị trấn mua lễ vật rồi về thôn dự tiệc thọ cha. Thân thích trước khinh bỉ nay nịnh hót vây quanh — Vương Lâm thầm hừ không cảm động; đoàn tụ ấm áp với cha mẹ. (@c0013)"
    },
    {
      chuong: 14,
      tieuDe: "Dị Biến",
      tomTat: "Đêm mưa giông lớn tại nhà cha mẹ, Thạch Châu kích hoạt dị biến: hút toàn bộ nước mưa trong phòng lẫn nước trên người Trương Hổ — Trương Hổ toàn thân phủ sương trắng, tím tái, gần như ngừng thở, suýt đông chết. Số đám mây trên châu tăng 5 → 6 → 7 trong một đêm. Vương Lâm hốt hoảng nhưng kịp dừng lại — châu hút hết nước, Trương Hổ hồi phục. Đây là lần đầu sức hút nước của châu bộc lộ mức nguy hiểm. Vương Lâm lần đầu nói dối cha mẹ về cuộc sống môn phái, rồi trở về Hằng Nhạc Phái. (@c0014)"
    },
    {
      chuong: 15,
      tieuDe: "Hoài Nghi",
      tomTat: "Sáng sau cơn mưa, Trương Hổ tỉnh dậy nghi 'hạn quỷ' và đồng ý giữ kín. Đệ tử họ Lưu (Lưu sư huynh) đột ngột đảo ngược thái độ: xu nịnh, giảm việc VL xuống một vại/ngày, tặng tiên phù — vì biết Tôn trưởng lão đã đích thân tìm ký danh đệ tử (sự kiện bất khả tư nghị). Vương Lâm vào chính viện báo cáo, được Tôn trưởng lão sốt sắng triệu kiến ngay — lo lắng bí mật hạt châu bị lộ; cuối chương đối diện lần đầu với lão già nhiều nếp nhăn, ánh mắt sáng ngời. (@c0015)"
    },
    {
      chuong: 16,
      tieuDe: "Đệ Tử",
      tomTat: "Tôn trưởng lão dùng pháp bảo Thất Thải Tường Vân + thần thức lục soát phòng Vương Lâm, tịch thu hồ lô nước linh khí. Vương Lâm đấu trí xuất sắc: khai man nguồn gốc hồ lô, bảo toàn bí mật Thạch Châu. Tôn trưởng lão muốn thu VL làm thư đồng nhưng bị từ chối, đành nâng lên thu làm đệ tử nội môn để hợp thức hóa việc chiếm hồ lô và moi thêm. VL thầm vui mừng — cơ hội tu luyện chính thức đã đến. Chưởng môn công bố tin tức thu đệ tử; bạch y thanh niên gác cổng mỉa mai 'rác rưởi sư phụ thu rác rưởi đệ tử'. (@c0016)"
    },
    {
      chuong: 17,
      tieuDe: "Tu Tiên",
      tomTat: "Tôn Đại Trụ — tên thật của Tôn trưởng lão, lần đầu lộ trong chương này — chính thức tuyên bố thu Vương Lâm làm đệ tử nội môn, tặng túi trữ vật + y phục hồng sắc + công pháp Ngưng Khí tam thiên. Phô thực lực bằng tia tử quang nghiền nát đá để răn đe. Vương Lâm tu luyện cả đêm thất bại trong phòng (lối hô hấp trái thường không cảm nhận linh khí); nhưng sáng ra thổ nạp ở dược viên (linh khí dày đặc), lần đầu cảm nhận được linh khí nhập thể như côn trùng bò — bước đầu vào tu tiên. Tôn Đại Trụ hứa hạ phẩm linh thạch đổi hồ lô; Vương Lâm dắt mũi lão. (@c0017)"
    },
    {
      chuong: 18,
      tieuDe: "Hồ Lô",
      tomTat: "Vương Lâm mặc y phục hồng sắc đi qua khu ký danh đệ tử, bị ghen ghét chế giễu — thầm thề trả thù khi đủ mạnh. Thổ nạp ở sơn tuyền cửa Đông, hiểu bản chất Ngưng Khí kỳ (linh khí nhập thể cải biến thể chất, nền cho Trúc Cơ). Tôn Đại Trụ lén giám thị cả ngày nhưng bị qua mặt — VL cố ý chờ 'hồ lô trôi từ thượng du'. Lộ bản chất ngoan độc trong độc thoại: âm mưu bỏ dược vật gây trọc khí vào đồ ăn VL để kìm hãm tu luyện dưới Ngưng Khí tầng 3. Cuối ngày VL dâng hồ lô dại tươi — Tôn Đại Trụ tức nghẹn vì bị chơi khăm. (@c0018)"
    },
    {
      chuong: 19,
      tieuDe: "Trục Môn",
      tomTat: "Tôn Đại Trụ thử mọi cách trợ ngưng linh khí cho Vương Lâm (bát thuốc đen, đích thân truyền khí, thêm linh thạch) đều thất bại — trọc khí từ cơ thể VL (do dược vật Tôn từng bỏ vào đồ ăn) hóa giải linh khí ngay trong gang tấc. Tôn Đại Trụ tiết lộ kế hoạch dùng Sưu Hồn thuật khi VL đạt Ngưng Khí tầng 1 (một tiên thuật độc ác khiến 8–9 phần tử vong, hoặc si ngốc cả đời). Cuối cùng Tôn kết luận sai rằng hồ lô tầm thường, từ bỏ, trục xuất VL khỏi chính viện — vô tình để VL thoát khỏi vòng kiểm soát. (@c0019)"
    },
    {
      chuong: 20,
      tieuDe: "Cửu Vân",
      tomTat: "Vương Lâm chuyển ra phó viện, lấy lại Thạch Châu + ba hồ lô sương sớm, cất vào túi trữ vật. Phát hiện đám mây trên châu đã tăng từ bảy lên chín; phán đoán mười là mức cuối cùng, dự định dùng ba hồ lô sương sớm để ép đám mây thứ mười. Vương Lâm nắm rõ hệ thống tu tiên năm cấp (Ngưng Khí → Trúc Cơ → Kết Đan → Nguyên Anh → Hóa Thần) và cơ cấu sức mạnh Hằng Nhạc Phái. Chạm mặt Vương Trác tại đan phòng — nay là đệ tử hồng y, mới luyện xong Ngưng Khí tầng 1; bị nhóm đệ tử hồng y mỉa mai lai lịch. Đến hết Ch.20, Vương Lâm vẫn CHƯA thể đưa linh khí nhập thể (chưa vào Ngưng Khí tầng 1) dù bí mật ngâm Thạch Châu; Thạch Châu mới đạt 9/10 đám mây. Tôn Đại Trụ — không phải Vương Lâm — mới là người ở Ngưng Khí kỳ tầng 5. Hai nhân vật nữ mới: Chu sư tỷ (am hiểu thảo dược, bóc mẽ khoác lác của Vương Trác) và Trương sư tỷ (đối tượng Vương Trác theo đuổi). (@c0020)"
    },
    {
      chuong: 21,
      tieuDe: "Linh Đan",
      tomTat: "Vương Lâm chuyển sang phó viện; Vương Hạo bất ngờ xuất hiện trong buổi phát linh đan, lén kéo VL ra hàn huyên và nhét 3 viên linh đan vào tay, gọi thân thiết là 'Thiết Trụ ca'. Vương Trác đề nghị tỉ võ công khai để rửa thù gia tộc, đe dọa trước đám đệ tử hồng y; nhóm nữ tử họ Chu và họ Từ chứng kiến. (@c0021)"
    },
    {
      chuong: 22,
      tieuDe: "Tán Công",
      tomTat: "Vương Lâm tự ngộ ra phương pháp 'Tán Công': dùng ngược Ngưng Khí tam thiên để ép linh khí hóa Hoá Linh Thảo trở lại dạng tinh nguyên chất hơn, giải quyết vấn đề chất lượng linh khí kém. Bước đột phá quan trọng về tư duy tu luyện. (@c0022)"
    },
    {
      chuong: 23,
      tieuDe: "Thập Vân",
      tomTat: "Thạch Châu tích đủ 10 đám mây — mây tan biến, châu lộ ra vài chữ số bí ẩn. Vương Lâm lần đầu khai mở KHÔNG GIAN MỘNG CẢNH bên trong châu: thời gian chạy nhanh gấp 10 lần thực tại, không có linh khí tự nhiên. (@c0023)"
    },
    {
      chuong: 24,
      tieuDe: "Tu Luyện",
      tomTat: "Vương Lâm kiên trì luyện thể và luyện khí trong Mộng Cảnh; xác nhận quy luật thời gian x10 và mỗi lần vào cần ≥5 canh giờ. Phát hiện sơn tuyền phía núi sau — địa điểm tu luyện yên tĩnh; thể chất dần mạnh lên, sắp tiến đến ngưỡng đột phá. (@c0024)"
    },
    {
      chuong: 25,
      tieuDe: "Ngưng Khí",
      tomTat: "Vương Lâm đột phá NGƯNG KHÍ TẦNG 1 — chính thức bước vào hàng tu tiên. Học thêm ba pháp thuật: Dẫn lực thuật, Hỏa diễm cầu, Địa liệt thuật. Xác nhận Ngưng Khí kỳ có 15 tầng tổng cộng; cố ý giấu tu vi. Vào Tàng kinh các tìm thêm pháp thuật. (@c0025)"
    },
    {
      chuong: 26,
      tieuDe: "Sát Ý",
      tomTat: "Trương Hổ giết Lưu sư huynh (biệt danh 'Hoàng Thử lang') vì mâu thuẫn cá nhân rồi bỏ trốn qua Đông môn — vụ án bỏ ngỏ. Vương Lâm tình cờ nhặt được một cuộn giấy vàng bí ẩn tại hiện trường. Học thêm Khu Vật thuật; ghé Kiếm Linh các. (@c0026)"
    },
    {
      chuong: 27,
      tieuDe: "Tới Chơi",
      tomTat: "Vương Lâm khổ luyện Dẫn lực thuật trong và ngoài Mộng Cảnh. Một hắc y sư huynh bí ẩn tới thăm phòng VL — danh tính chưa rõ ('tam sư huynh' theo cách xưng hô). Xác nhận lại Ngưng Khí kỳ có 15 tầng, mỗi tầng cần khẩu quyết riêng. (@c0027)"
    },
    {
      chuong: 28,
      tieuDe: "Tạp Vụ",
      tomTat: "Hắc y sư huynh — Trương sư huynh, vừa đột phá Ngưng Khí tầng 5 — giao VL chức quản sự khu tạp vụ Hằng Nhạc Phái, phụ trách 100 đệ tử ký danh. Hạn mức nước tăng 500→1000 cân/ngày; VL được phòng riêng trên vách núi. (@c0028)"
    },
    {
      chuong: 29,
      tieuDe: "Dâng Tới Tận Cửa",
      tomTat: "Đệ tử ký danh thi nhau đút lót Vương Lâm bằng Tham Thân tiên phù để được ưu tiên ký danh. VL lập danh sách chờ và thu phù; hai tháng quản lý khu tạp vụ trôi qua ổn định. (@c0029)"
    },
    {
      chuong: 30,
      tieuDe: "Vương Hạo",
      tomTat: "Vương Lâm đột phá NGƯNG KHÍ TẦNG 2 trong Mộng Cảnh, sinh thần thức — cố ý giấu vì khẩu quyết chỉ được cấp tới tầng 3. Đệ tử gọi VL là 'Hắc Tâm vương' vì quản lý nghiêm. Vương Hạo đến thăm cuối đông, mượn Tham Thân tiên phù — xác nhận bản thân vẫn chưa đạt Ngưng Khí tầng 1. Tiết lộ tỉ võ 10 năm/lần sắp đến. (@c0030)"
    },
    {
      chuong: 31,
      tieuDe: "Tuyết Thủy",
      tomTat: "Vương Hạo tiết lộ giao dịch hội bí mật của đệ tử nội môn sắp diễn ra — 'vé' là viên Hóa Hình Hóa Thanh Đan giá 200 tấm tiên phù, ngụy trang thân phận trước mắt người dưới Trúc Cơ. VL đưa 400 tấm tiên phù cho Vương Hạo và quyết định tham gia, nhắm đến khẩu quyết Ngưng Khí phần sau. Đêm tuyết rơi, VL phát hiện hiệu quả Linh Khí Tuyền Thủy giảm sút ở tầng 2; thí nghiệm gom tuyết nấu tan thành Linh Khí Tuyết Thủy — kết luận tuyết thủy mạnh hơn tuyền thủy, kém lộ thủy; đổ đầy nửa số hồ lô. (@c0031)"
    },
    {
      chuong: 32,
      tieuDe: "Giao Dịch",
      tomTat: "Đêm tuyết giá, Vương Hạo dẫn VL theo con đường nhỏ vào núi sâu dự giao dịch hội bí mật — mỗi người uống Hóa Hình Hóa Thanh Đan che thân phận. Tại hội hơn mười đệ tử ẩn dáng trao đổi phi kiếm, đan dược, pháp bảo. VL mua thuật giấu tu vi (5 khỏa linh đan) — người khác chê vô dụng nhưng VL thấy rất hợp. Tạo Hóa Đan (dùng 2 tháng tăng tốc hấp thu linh khí gấp mấy lần) được rao bán; cuộc đấu giá sôi nổi chưa ngã ngũ. (@c0032)"
    },
    {
      chuong: 33,
      tieuDe: "Khẩu Quyết",
      tomTat: "Giao dịch hội tiếp tục; Tạo Hóa Đan bị đẩy giá lên 2000 viên Đoạt Linh Đan — không ai mua nổi. VL xuất Linh Khí Tuyền Thủy (100 giọt) đổi khẩu quyết Ngưng Khí tầng 4–9; nhị sư huynh Trương Cuồng (~28-29 tuổi, mặc tử y, không che mặt) bước ra đổi ngọc giản khẩu quyết tầng 4–9 lấy toàn bộ chất lỏng còn lại. Nhưng câu 'đến hậu sơn tìm ta' của nhị sư huynh công khai trước cả hội đặt VL vào tầm ngắm; VL tẩu thoát bằng cách chồng mấy chục tấm tiên phù phóng nhanh như kiếm. (@c0033)"
    },
    {
      chuong: 34,
      tieuDe: "Tập Huấn",
      tomTat: "Không khí môn phái căng thẳng trước tỷ thí cuối năm — phần thưởng đỉnh là Song Nguyệt Hoàn (pháp bảo vừa công vừa thủ, di vật 300 năm). VL không tham gia, luyện Dẫn Lực Thuật và thuật giấu tu vi. Tôn Đại Trụ cự tuyệt xin rời núi của VL, tiết lộ 4 năm sau có đại hội giao lưu Huyền Đạo Tông — toàn đệ tử nội môn sẽ tập huấn. Vương Trác trở thành 'tân nhân vương' tỷ thí. Tôn Đại Trụ lôi VL vào đại điện bằng vũ lực — nơi chưởng môn và hơn mười lão giả tập kết. (@c0034)"
    },
    {
      chuong: 35,
      tieuDe: "Hậu Sơn",
      tomTat: "Chưởng môn Hằng Nhạc Phái dùng pháp thuật dịch chuyển tập thể hơn bốn mươi nội môn đệ tử vào Hậu Sơn — không gian sơn cốc linh khí nồng đậm do thủy tổ Nguyên Anh Kỳ ngàn năm trước mở, có vách đá chi chít động phủ. Nhị sư huynh Trương Cuồng (tử y, tầng 6) quản lý; phát 100 viên Đoạt Linh Đan/người/năm. VL nhận ra đây chính là nhị sư huynh từng giao dịch tuyền thủy — cảnh giác vì đã nói dối; nhờ từng uống Hóa Hình Hóa Thanh Đan che mặt nên không bị nhận ra. Được Trương Cuồng 'tiễn' vào một huyệt động kín đáo — đúng như VL mong muốn. (@c0035)"
    },
    {
      chuong: 36,
      tieuDe: "Thị Phi",
      tomTat: "VL bế quan đầu trong động phủ hậu sơn, dùng hạt châu; 2 năm thực = gần 13 năm mộng cảnh. Trong mộng cảnh đột phá tầng 3 thành công; nhưng bị 'một cỗ lực lượng thần kỳ' ngăn cản không đột phá nổi lên tầng 4. Phát hiện đặc dị: tầng 3 không có cực hạn — linh khí vẫn tăng. Linh Khí Tuyết Thủy dùng hết; còn 1 hồ lô lộ thủy cuối không dám dùng (từng suýt chết). Dẫn Lực Thuật luyện tới lô hỏa thuần thanh. Ra khỏi bế quan, VL giả lộ tầng 1; bị Vương Trác (tầng 3) và Tôn Hạo (đỉnh phong tầng 4) chế nhạo — Trương Cuồng bay xuống quát mắng, bênh VL. VL hỏi về lý do không thể đột phá tầng 4. (@c0036)"
    },
    {
      chuong: 37,
      tieuDe: "+4 Năm",
      tomTat: "Trương Cuồng giảng hai bình cảnh Ngưng Khí: tam tiến tứ (cần lĩnh ngộ đại đạo/'chặt đứt phàm trần'); ngũ tiến lục (hao linh khí lớn). VL chấn động trong lòng. VL bị Trương Cuồng bắt gặp khi múc nước sông linh khí với nhiều hồ lô; khéo léo viện cớ qua mặt. VL trầm tư: không thể chặt đứt thân tình, bỏ ý niệm đột phá ngắn hạn, an tâm củng cố tầng 3. Hết 4 năm bế quan: Vương Trác tầng 5 đỉnh phong; Trương Cuồng tầng 6; Từ sư tỷ tầng 3; Chu sư tỷ kẹt tầng 3. VL mơ hồ cảm nhận cách tu luyện của mình khác biệt. (@c0037)"
    },
    {
      chuong: 38,
      tieuDe: "Quang Ban",
      tomTat: "Chưởng môn kết thúc 4 năm tập huấn tại đại điện — đệ tử tầng 5+ ở lại, còn lại giải tán; Huyền Đạo Tông đến sau 3 ngày. VL đến báo cáo Tôn Đại Trụ — Tôn kinh ngạc thấy VL đạt tầng 3, bỏ ý định sưu hồn cũ, chính thức nhận VL làm đệ tử chân chính duy nhất cả đời, giao VL ở Dược Viên. Tôn khoe Khu Vật Thuật và phi kiếm bảy màu; tiết lộ VL có thể luyện Khu Vật Thuật; ném lệnh bài cho VL đến Kiếm Linh Các chọn phi kiếm. (@c0038)"
    },
    {
      chuong: 39,
      tieuDe: "Cự Phú",
      tomTat: "VL đến Kiếm Linh Các bằng lệnh bài Tôn Đại Trụ — lệ thường cần tầng 4 mới vào. Gã bạch y mập trông coi quên gỡ cấm chế; VL cưỡng qua cấm chế ba tầng dễ dàng (gã mập cưỡng theo bị đánh văng, hộc máu — kiếm khí tự chọn người xứng). Trong phòng, VL chọn 'Cự Phú' — phi kiếm đệ nhất Triệu quốc: khối kim loại mạ hoàng kim, khảm 2 kim cương, di vật sư tổ ngàn năm, cấm buôn bán. Gã mập kinh sợ đổi thái độ. Tôn Đại Trụ kinh ngạc, khen có đảm lược. Ba ngày sau, Huyền Đạo Tông đến cưỡi Thiên Túc Ngô Công khổng lồ gây khiếp đảm. (@c0039)"
    },
    {
      chuong: 40,
      tieuDe: "Khách Đến",
      tomTat: "Hoàng Long chân nhân thúc Tử Nhạc Tiên Kiếm hóa tử long uy hiếp Thiên Túc Ngô Công — hai bên cân bằng. Trưởng lão Âu Dương (Huyền Đạo Tông) nhắc kỳ hạn 10 năm: Huyền Đạo Tông thắng đòi trả pháp bảo + 100 phi kiếm; thua giao bí pháp khống chế linh thú. Hơn 10 đệ tử Huyền Đạo Tông đều mặc tử y ra oai, tuấn mỹ, có thuật giấu tu vi cao minh. Liễu Mi — nữ tử nổi bật nhất — để ý VL; VL tim đập nhưng lập tức khóa tâm thần, cảnh giác. Liễu Mi đánh giá nhầm VL chỉ tầng 3. Trưởng lão hai phái hàn huyên; VL nghe kể chuyện các tông môn Triệu quốc lần đầu có ấn tượng tổng quan. VL phát hiện một nam tử trung niên bí ẩn được cả đoàn Huyền Đạo Tông kính nể ngầm. (@c0040)"
    },
    {
      chuong: 41,
      tieuDe: "Ngô Công",
      tomTat: "Vương Trác công khai phân công Vương Lâm nhiệm vụ nguy hiểm: săn mồi nuôi Thiên Túc Ngô Công (con rết khổng lồ linh thú Huyền Đạo Tông) — nhục nhã trước cả hai phái. VL tách ra, Nữ tử họ Chu (Chu sư tỷ) ngồi bên hàn huyên; VL nói 'Đại đạo vô tình', cô thừa nhận bản thân cũng không dứt được tình thân. Đêm khuya VL lẻn lại chuồng Ngô Công một mình — bị Ngô Công phun hàn khí nhưng VL vận linh lực hóa giải dễ dàng, Ngô Công kinh ngạc. (@c0041)"
    },
    {
      chuong: 42,
      tieuDe: "Dịch Độc",
      tomTat: "VL tiếp tục quan sát Ngô Công. Rết phun hàn khí + khạc khí đen độc hại lên một con thú nhỏ — thú tan thành vũng máu. VL suy ra: độc tính Ngô Công tỉ lệ thuận với kích thước đầu. Tôn Hạo chứng kiến VL vào một mình, mỉa mai 'ngu'. Vương Lâm không trả lời, tiếp tục lên kế hoạch lấy dịch độc trị bệnh phong hàn cho phụ thân. (@c0042)"
    },
    {
      chuong: 43,
      tieuDe: "Dược Lô",
      tomTat: "VL gặp Vương Hạo sau 4 năm xa cách; thần thức quét thấy linh khí trong người Vương Hạo lưu động quỷ dị — sắp khí tán thân vong. Vương Hạo tiết lộ: bị tam sư huynh (Lữ Vân Kiệt) lừa uống Tạo Hóa Đan, ép tu Lô Hỏa Khai Đỉnh Đại Pháp — bị biến thành dược lô để luyện Nhân Thọ đan; chỉ còn ~1 năm sống. Lữ Vân Kiệt là tầng 6, giỏi luyện đan, được chưởng môn yêu; kẹt tầng 6 suốt 25 năm. VL nghe, nhớ phụ thân bị phong hàn, quyết lấy dịch độc Ngô Công. (@c0043)"
    },
    {
      chuong: 44,
      tieuDe: "Ngộ Đạo",
      tomTat: "VL nhận lời cứu Vương Hạo (sẽ giết Lữ Vân Kiệt khi tu vi đủ mạnh). Chứng kiến Lý Sơn (Huyền Đạo Tông) bán Phích Lịch đạn tại chợ; thần thức phát hiện bí mật — đạn không tự nổ, Lý Sơn ngầm kích hoạt bằng linh khí ba động. Sau khi Vương Hạo rời đi, VL bước vào cảnh giới ngộ đạo: lĩnh ngộ quy luật 'cá lớn nuốt cá bé' của Tu Chân Giới — không cần lĩnh ngộ huyền diệu, chỉ cần sức mạnh là đủ. (@c0044)"
    },
    {
      chuong: 45,
      tieuDe: "Phích Lịch Đạn",
      tomTat: "VL quyết định tương kế tựu kế: mua 3 viên Phích Lịch đạn từ Lý Sơn bằng linh phù môn phái; biết tỏng đạn do Lý Sơn khống chế nổ nhưng vẫn mua, có kế hoạch riêng. Lý Sơn thoả mãn vì nghĩ VL chỉ là quân cờ tầng 3 dễ dùng. (@c0045)"
    },
    {
      chuong: 46,
      tieuDe: "Mộng Cảnh",
      tomTat: "VL bao thần thức vào Phích Lịch đạn, phát hiện đạo thần thức Lý Sơn lưu bên trong; nuốt đạo thần thức đó vào thân — từ đó tự mình kích nổ được. Lập tức bị kéo vào Mộng Cảnh: lão quái vật ẩn trong Thạch Châu (Tư Đồ Nam) lần đầu lên tiếng. Tự xưng là lão quái vật, xác nhận tu vi thật VL = 'Linh Động Kỳ viên mãn'; hệ thống Tu Chân Quốc 5 cấp (Ngưng Khí → Trúc Cơ → Kết Đan → Nguyên Anh; 5 cấp là Liên Minh Tu Chân). (@c0046)"
    },
    {
      chuong: 47,
      tieuDe: "Tỷ Thí Khai Mạc",
      tomTat: "Tư Đồ Nam tiết lộ danh tính: cường giả lục cấp Chu Tước Quốc; bị truy sát thân hủy, ẩn vào Thạch Châu; dùng tinh hoa nguyên anh trợ giúp VL gần 30 năm. Điều kiện Thạch Châu nhận chủ: ngũ hành linh căn đủ + ≥ Anh Biến kỳ. Tỷ thí chính thức khai màn tại Thương Tùng Phong: trận 1 — Liễu Phong (Huyền Đạo, Thủy Mạc) thắng Triệu Long (Hằng Nhạc, Liên Hoa kiếm khí); trận 2 — Tôn Hạo (Hằng Nhạc) thua Lý Sơn (Phích Lịch đạn kích hoạt); trận 3 — Hứa Mộc (Hằng Nhạc) vs Lữ Tung (Huyền Đạo) bị gián đoạn vì trung niên nam tử bí ẩn trong đoàn Huyền Đạo bẻ gãy phi kiếm Lữ Tung. (@c0047)"
    },
    {
      chuong: 48,
      tieuDe: "Liên Thắng",
      tomTat: "VL được Hoàng Long cử vào trận thay người. Ba lần liên tiếp hạ Chu Bằng (đại đệ tử Huyền Đạo, tầng 13 thật (bề ngoài tầng 10, gỡ phù tầng 12)) bằng Dẫn Lực thuật + Phích Lịch đạn. Tiếp tục hạ Dương Nghị (nhị sư huynh Huyền Đạo, dùng Thất Thải Nhan Sắc + phi kiếm đỏ). Toàn bộ Hằng Nhạc tôn VL 'đại sư huynh'. Âu Dương không thể nhìn xuyên tu vi VL; đặt tên 'Cầm Long thủ' để cứu mặt (tên bịa, không có trong tiên pháp nào). Liễu Mi tiết lộ bí mật Trương Cuồng dùng Linh Tuyền thủy giữ nhan. Lữ Tung quyết định kết giao VL. Tư Đồ Nam bình: thực lực VL = Linh Động Kỳ viên mãn ≈ tầng 14; bác thuyết 'chặt đứt phàm trần'. Nội bộ Huyền Đạo: tam sư huynh Lữ Vân Kiệt âm mưu giết Vương Hạo để bịt đầu mối. (@c0048)"
    },
    {
      chuong: 49,
      tieuDe: "Dịch Độc Thiên Túc",
      tomTat: "VL đối đầu trực tiếp Âu Dương lão giả trước đám đông để lấy dịch độc Ngô Công: vận Dẫn Lực thuật hóa hai bàn tay hữu hình, vừa đỡ cự kiếm vừa khống chế Ngô Công ép thổ dịch độc màu đen vào bình ngọc. Thu dịch độc xong, dùng bình ngọc nước sông hậu sơn làm vật đổi hóa giải xung đột; Huyền Đạo Tông chấp nhận, Ngô Công được trả. Âu Dương cảnh báo: lộ thực lực sẽ bị các tông lớn nhòm ngó, Tu Chân Quốc Triệu không có Nguyên Anh lão tổ hậu thuẫn. Hoàng Long nêu tên VL làm gương toàn môn. (@c0049)"
    },
    {
      chuong: 50,
      tieuDe: "Giải Cứu",
      tomTat: "VL phát hiện Vương Hạo sắp chết trong lò luyện đan của Lữ Vân Kiệt (màn ngũ thải); phá màn, cứu Vương Hạo thoát quỷ môn quan. Hồng Kiểm lão giả (xuất hiện lần đầu) xác nhận Lô Hỏa Khai Đỉnh Đại Pháp có thật. Lữ Vân Kiệt lần đầu lộ mặt thật xưng danh, cầu xin, nhận tội. Hoàng Long phạt Lữ Vân Kiệt diện bích 20 năm; nâng Vương Hạo thành nội môn đệ tử. Hoàng Long thẩm vấn riêng VL về tiên pháp và tu vi — VL tiếp tục giấu, khăng khăng 'không biết'. (@c0050)"
    },
    {
      chuong: 51,
      tieuDe: "Lần Đầu Giết Người",
      tomTat: "Tôn Đại Trụ dùng Tam Thi Tuyến Trùng thảo (thảo dược không màu không mùi, khống chế 100% người dưới Trúc Cơ) âm mưu biến VL thành con rối vĩnh viễn. Thượng Quan trưởng lão — một trong mười trưởng lão Trúc Cơ của Hằng Nhạc Phái — dùng thần thức đánh giá, xác định thực lực thật của VL xấp xỉ tầng 14 Ngưng Khí. VL phản kháng, giết Tôn Đại Trụ (tầng 5 Ngưng Khí) — đây là lần đầu tiên trong đời hắn giết người, cũng là kết thúc mối quan hệ sư đồ trên danh nghĩa. Xác Tôn Đại Trụ bị vứt xuống khe núi. (@c0051)"
    },
    {
      chuong: 52,
      tieuDe: "Cấm Địa Thương Tùng",
      tomTat: "VL đạt tầng 14 Ngưng Khí; Tư Đồ Nam khuyên nên đạt tầng 15 trước khi Trúc Cơ, hứa sau khi Trúc Cơ sẽ truyền Hoàng Tuyền thăng khiếu quyết — công pháp đỉnh của hệ thống lục cấp tu chân quốc, cần môi trường chí âm chí hàn. Hạt nghịch châu sau khi hoàn thành thủy nguyên tố nay hiển thị hình lá (mộc nguyên tố). Tổ sư Hằng Nhạc Phái (Kết Đan kỳ, chưa nêu tên) triệu VL lên cấm địa Thương Tùng phong — khu vực có Tàng Kinh Các bí mật và là nơi cư trú của Trúc Cơ trưởng lão lẫn Kết Đan Tổ sư; nhập bằng tử sắc ngọc bội. Tư Đồ Nam mỉa mai Kết Đan Tổ sư (từng danh chấn thiên hạ). (@c0052)"
    },
    {
      chuong: 53,
      tieuDe: "Phác Nam Tử",
      tomTat: "Tàng Kinh Các cấm địa có 4 tầng: tầng 1 pháp thuật Ngưng Khí, tầng 2 công pháp Trúc Cơ (gồm Hỏa vân thuật, Địa độn thuật, Phong nhận phá, Cửu thiên hóa lôi thuật, Hoán tiên thuật — Tư Đồ Nam chê là hạ phẩm). Đang xem thì Phác Nam Tử (Nguyên Anh kỳ, Huyền Đạo Tông) đột ngột tấn công Hằng Nhạc Phái: Hộ sơn đại trận kích hoạt; một trưởng lão Trúc Cơ ngã xuống thất khiếu chảy máu khi bạch ngọc vỡ. (@c0053)"
    },
    {
      chuong: 54,
      tieuDe: "Mất Sơn Môn",
      tomTat: "Hộ sơn đại trận hoàn toàn sụp đổ — tám bạch ngọc đều vỡ. Lưu Văn Cử (hạc phát đồng nhan, Kết Đan kỳ, trụ cột Hằng Nhạc Phái) và lão phu nhân họ Vương (Kết Đan kỳ, sư tổ Hằng Nhạc) lần đầu xuất hiện chính thức. Phác Nam Tử dùng Hắc sơn (cự phong pháp bảo) áp chế; đoạt Tử Nhạc Tiên Kiếm của Hoàng Long giao cho Âu Dương sử dụng — khi kiếm được tung ra, một cự long tử sắc xuất hiện. Phác Nam Tử tuyên bố 'mượn' Hằng Nhạc sơn mười vạn năm; Hằng Nhạc lão tổ Nguyên Anh đã tử trận 'tại Vực ngoại Tu chân tinh'. VL là nguyên nhân gián tiếp vụ này vì hắn hạ đệ tử Âu Dương. (@c0054)"
    },
    {
      chuong: 55,
      tieuDe: "Phân Chia Đường",
      tomTat: "Hằng Nhạc Phái ly tán: 8/10 Trúc Cơ trưởng lão ở lại theo Huyền Đạo Tông; chỉ có Thượng Quan và Tống Dục theo Lưu Văn Cử + lão phu nhân họ Vương dẫn tàn quân rút lui. Hoàng Long, Đạo Hư, Hồng Kiểm chọn đi cùng nhóm Hằng Nhạc tàn quân. VL từ chối đề nghị của Phác Nam Tử nhập Huyền Đạo Tông; Phác Nam Tử gọi hắn 'không biết điều'. Điểm đến mới: Tượng Xà sơn — căn cứ cũ của Lưu Văn Cử, cách mấy nghìn dặm. Vương Trác ở lại (không theo Hằng Nhạc); Vương Hạo chọn ở lại vì cha. (@c0055)"
    },
    {
      chuong: 56,
      tieuDe: "Tang Môn",
      tomTat: "Đêm đầu tiên trên núi hoang, tinh thần toàn nhóm tàn quân Hằng Nhạc ở đáy. Hoàng Long ai điếu Tử Nhạc Tiên Kiếm; lão già họ Mã an ủi. VL lần đầu công khai nhận tu vi tầng 14 Ngưng Khí với đồng đạo. Trương Đức Khôn (tầng 6, mặc đồ đen) và Lữ Tung (tầng 8, không thể về Huyền Đạo vì nhiều kẻ thù) tự giới thiệu. Hoàng Đại Sơn (tầng 5, người mập Kiếm Linh các) xin chiếu cố. Nhóm bốn người hình thành: VL (đại sư huynh), Lữ Tung, Trương Đức Khôn, Hoàng Đại Sơn. Tư Đồ Nam lần đầu giới thiệu Khôi Lỗi thuật như phương pháp khống chế kẻ địch. (@c0056)"
    },
    {
      chuong: 57,
      tieuDe: "Trên Đường",
      tomTat: "Nhóm tàn quân Hằng Nhạc di chuyển về Tượng Xà sơn bằng ngọc giản đôi (vòng sáng dịch chuyển, nhanh hơn phi kiếm). VL được giao cân bằng bốn phía cùng Thượng Quan và Tống Dục. Âu Dương + Phác Nam Tử truy đuổi bằng đám mây sâu khổng lồ nhưng không kịp. Lão phu nhân họ Vương tuyên bố Hằng Nhạc Phái bế quan 100 năm; mở toàn bộ công pháp cho mọi đệ tử; ra lệnh Hoàng Long nhóm lập tức bế quan hướng Trúc Cơ. Lữ Tung được giao quản lý tu luyện; VL được Lưu Văn chỉ định riêng một chỗ tu luyện. Hạt nghịch châu âm hàn giúp VL ổn định trong chuyến đi. (@c0057)"
    },
    {
      chuong: 58,
      tieuDe: "Âm Mưu",
      tomTat: "Sau khi an định tại Tượng Xà sơn, VL xin ra ngoài thăm cha mẹ; lão phu nhân từ chối nhưng Lưu Văn can thiệp, đồng ý và tặng một ngọc phù chứa một kích Kết Đan kỳ để phòng thân, cùng ngọc giản pháp quyết mở cửa. VL dùng Dẫn Lực thuật bao thân hóa cầu vồng bay — một ngày đến vùng Hằng Nhạc cũ. Nhà cha mẹ sau 5 năm đã thành tam hợp viện (dán chữ Phúc). VL ẩn trong cây ngoài thôn rải thần thức canh một tháng. Đúng dự đoán: Chu Bằng (mặc hắc bào che mùi thối, mặt đen) dẫn Trương Cuồng (nay đệ tử Huyền Đạo) tới tìm cha mẹ VL — dựa vào danh sách đệ tử Hằng Nhạc (Vương Trác không khai địa chỉ). Chu Bằng hỏi Trương Cuồng đã tiết lộ chuyện dịch thể cho ai chưa — ngầm lộ ý diệt khẩu. (@c0058)"
    },
    {
      chuong: 59,
      tieuDe: "Trảm Sát",
      tomTat: "Chu Bằng ra lệnh Trương Cuồng giết cha mẹ VL để thu hồn phách luyện hồn kỳ — dụ VL ra mặt. VL nghe lén, lần đầu tiên nảy ý định giết người. Trương Cuồng bị VL chặn ở cổng thôn — VL dùng Dẫn Lực thuật nhất tâm nhị dụng vừa khống chế phi kiếm vừa bóp gãy cổ Trương Cuồng; đây là mạng người đầu tiên VL giết. Thu phi kiếm (ngọc giản Trương Cuồng), roi trường tiên gỗ đen, túi trữ vật Trương Cuồng; thiêu xác bằng hỏa cầu. Truy đuổi Chu Bằng: dùng Dẫn Lực thuật hóa trảo — Chu Bằng biết 'Cầm Long thủ' nên né được; Dẫn Lực thuật có phạm vi giới hạn, VL lo không đuổi kịp. Hỏi Tư Đồ Nam, lão đáp 'Có. Nhưng…' (@c0059)"
    },
    {
      chuong: 60,
      tieuDe: "Khôi Lỗi Thuật",
      tomTat: "Tư Đồ Nam dùng tinh hoa Nguyên Anh thực hiện thuấn di (dịch chuyển tức thời; chỉ còn dùng được một lần nữa trước Anh Biến kỳ) đưa VL xuất hiện ngay trước mặt Chu Bằng. Tư Đồ Nam mượn thân VL thi triển tuyệt kỹ âm hàn thành danh: quang cầu lam phát nổ, làn sóng băng lan bốn phía, đông cứng cự mãng xanh lẫn Chu Bằng và phi kiếm; Chu Bằng tâm thần trọng thương, gần chết. VL đưa Chu Bằng vào động vắng; hỏi về Khôi Lỗi thuật. Tư Đồ Nam dạy các bước: (1) tìm động yên tĩnh; (2) mổ ngực đối tượng gần chết, lấy ngũ tạng tế luyện; (3) dùng thần thức phủ thi thể, tế luyện 3 ngày 3 đêm. Tác giả tiết lộ: Khôi Lỗi thuật là công pháp MA ĐẠO; Tư Đồ Nam cố ý từng bước tiêm nhiễm tâm tính VL hướng tới Ma môn. VL cắn răng hoàn thành bước một rồi nôn mửa; chuẩn bị vào bước hai. (@c0060)"
    },
    {
      chuong: 61,
      tieuDe: "Khôi Lỗi Hoàn Thành",
      tomTat: "Vương Lâm hoàn tất Khôi Lỗi thuật với Chu Bằng sau ba ngày tế luyện ngũ tạng. Ra lệnh cho 'khôi lỗi' Chu Bằng quay về Huyền Đạo Tông: âm thầm tiêu diệt những kẻ bất lợi cho Vương Lâm, đặc biệt bảo vệ cha mẹ hắn ở sơn thôn. Xong việc, Vương Lâm một mình dùng độn thuật bay về sơn thôn quê nhà thăm cha mẹ sau 5 năm xa cách. Gặp lại cha mẹ: quỳ lạy, ôm cha, cùng mẹ khóc. Nói dối Hằng Nhạc Phái đã chuyển địa điểm. Khi mẹ thúc giục chuyện hôn nhân, hắn khất lại, hứa mấy năm nữa dẫn về người vợ tốt. Ở lại nửa tháng, trong lòng ấm nhưng biết sắp phải lên đường — không biết bao giờ mới trở về. (@c0061)"
    },
    {
      chuong: 62,
      tieuDe: "Bế Quan Lần Hai",
      tomTat: "Vương Lâm cáo biệt cha mẹ, lòng buồn bã. Tìm núi trọc vô danh cách xa người — bên trong hang động có mạch nước, địa thế ẩn khuất. Dùng Dẫn Lực thuật phá đá phong bế cửa hang, bắt đầu bế quan tu luyện lần thứ hai với mục tiêu đạt Ngưng Khí tầng 15 rồi mới cố Trúc Cơ. Năm đầu vẫn liên lạc gián tiếp với Chu Bằng qua khôi lỗi. Bốn năm sau: Hằng Nhạc phong và người của Hoàng Long chân nhân đều cho rằng Vương Lâm đã chết. Lữ Tung trở thành đệ nhất trong đám ký danh đệ tử. Ba đệ tử Huyền Đạo Tông (Lịch Hải tầng 12, Từ Phi tầng 7, tiểu sư đệ) vô tình đi ngang khu vực núi trọc — Nghịch Thiên Châu cần vật liệu mộc thuộc tính. (@c0062)"
    },
    {
      chuong: 63,
      tieuDe: "Ba Đệ Tử Huyền Đạo Tông",
      tomTat: "Ba đệ tử Huyền Đạo Tông tiến vào khu vực núi trọc. Vương Lâm mượn uy lực Nghịch Thiên Châu (Tư Đồ Nam) phóng thần thức ra bao phủ vùng đất rộng — áp lực kinh thiên, toàn bộ dã thú lẫn ba tu sĩ đều quỳ bất động, không dám nhúc nhích. Lịch Hải tầng 12 sắc mặt tái nhợt hoàn toàn bất lực. Tư Đồ Nam đích thân nhìn qua và bất ngờ khi thấy Từ Phi họ 'Từ' — phản ứng hiếm có. Vương Lâm hé lộ danh tính Hằng Nhạc Phái cho họ biết tu vi mình 'viên mãn từ lâu' rồi thả ba người. Chương cũng phân tích ba con đường Trúc Cơ: tu vi viên mãn tự nhiên đột phá, dùng Trúc Cơ đan, và Đoạt Cơ Pháp (VL từ chối con đường ác độc này). (@c0063)"
    },
    {
      chuong: 64,
      tieuDe: "Xuất Quan — Tầng 15 Viên Mãn",
      tomTat: "Vương Lâm kết thúc 4 năm bế quan: năm thứ hai đã đạt viên mãn tầng 15 Ngưng Khí, hai năm còn lại dốc sức đột phá Trúc Cơ nhưng thất bại nhiều lần. Tu vi bên ngoài biểu lộ tăng từ tầng 3 lên tầng 8 (tích lũy từ nhiều lần đột phá Trúc Cơ trong Mộng Cảnh). Lấy phi kiếm lớn từ túi trữ vật, đạp kiếm phi hành xuất môn hướng Thiên Thủy thành — thành lớn nhất phía bắc Triệu Quốc, cách Hằng Nhạc phong 1000 dặm. Tư Đồ Nam rẽ vào rừng để tìm thực vật mộc thuộc tính cho Nghịch Thiên Châu, khiến VL bay lạc 10 ngày. Tình cờ gặp đoàn tiêu Uy Vũ tiêu cục do Liễu Tam (đại tiêu đầu, Khai Sơn chưởng lô hỏa thuần thanh) dẫn đầu. VL tự xưng 'Vương Lâm, lần đầu xuất môn'; bị đánh giá là 'tiểu tử không biết võ công' và nghi là gian tế trước khi được nhận vào đoàn. (@c0064)"
    },
    {
      chuong: 65,
      tieuDe: "Vương Tiên Sinh",
      tomTat: "Vương Lâm đi cùng đoàn tiêu Uy Vũ tiêu cục tiến về Thiên Thủy thành — nơi sắp có đại hội khảo thí lớn. Hắn bịa cớ 'bị cướp' để giải thích không có hành lý; thần thức bí mật phát hiện hơn mười xe ngựa trống trơn và hai người mai phục trong rừng quan sát đoàn (thả cho đoàn qua mà không tấn công). Được giới thiệu với Vương tiên sinh — thầy xem tướng của tiêu cục. VL thấy qua thần thức tia linh lực chạy qua mắt ông: có thực lực thật, không phải lừa đảo. Khi Vương tiên sinh xem tướng cho VL, vừa nhìn mặt liền phun máu và hét 'Ngươi—' không nói được tiếp — khí vận của Vương Lâm khủng khiếp vượt tầm tưởng tượng của người xem tướng. Chương cũng xác nhận toàn bộ thành viên đoàn đều có vết đen trên trán — điềm họa sắp ập đến. (@c0065)"
    },
    {
      chuong: 66,
      tieuDe: "Đại Đương Gia",
      tomTat: "Đêm tối, đoàn tiêu bị phục kích. 'Đại đương gia' — thiếu niên khoảng 20 tuổi, mặt sẹo dữ tợn, Ngưng Khí tầng 2 đỉnh phong — dẫn nhóm hắc y phong tỏa đoàn. Yêu cầu giao nộp hộp gấm đựng nhân sâm 500 năm. Liễu Tam đặt hộp xuống đất để đàm phán; đúng lúc đó Vương Lâm dùng pháp lực hút hộp gấm bay thẳng vào tay mình — đoạt trước tên cướp. Vương Lâm thấy mặt 'Đại đương gia' rất quen. Hắn thử đưa hoàng chỉ ra — 'Đại đương gia' không nhận ra vật đó, khẳng định đây không phải người đang tìm. Vương Lâm trả lại nhân sâm, nói 'nhận lầm người'. (@c0066)"
    },
    {
      chuong: 67,
      tieuDe: "Bạch Y Trung Niên",
      tomTat: "Vương Lâm nhận ra 'Đại đương gia' chính là Trương Hổ — bạn cũ từ Hằng Nhạc Phái 10 năm trước. Nhưng chưa kịp đoàn tụ, từ đám mây đen xuất hiện bạch y trung niên — Ngưng Khí tầng 15 đại viên mãn, tu tà đạo hút máu. Hắn lạnh lùng giết các thành viên đoàn tiêu, dùng thuật hút máu đúc huyết châu. Nhận ra Trương Hổ dám che chắn cho người lạ, bạch y trung niên tra tấn Trương Hổ trước mặt VL. Vương Lâm can thiệp: dùng Dẫn Lực thuật + roi rắn Hắc Mộc Điều (tự chế trong 4 năm bế quan). Bất ngờ lớn: vỏ kiếm đen của bạch y trung niên vô hiệu hóa Dẫn Lực Thuật của VL — lần đầu tiên trong lịch sử tu luyện của hắn một pháp bảo làm được điều này. Phi kiếm địch phun hư ảnh đỏ, có khả năng dịch chuyển tức thời. Trận chiến bất phân thắng bại. (@c0067)"
    },
    {
      chuong: 68,
      tieuDe: "Ngọc Phù Đan Bảo",
      tomTat: "Trận chiến với bạch y trung niên (đệ tử Tức Mặc lão nhân) tiếp diễn. Ngọc giản tạo tấm chắn lam bị phi kiếm địch chọc thủng. Vương Lâm kích hoạt ngọc phù cổ xưa do Lưu Văn Cử tặng — thực chất là Đan bảo (pháp bảo Kết Đan kỳ), đã cải tạo thành 9 lần dùng trong suốt 4 năm bế quan. Chín phù văn vàng rực bung ra bao vây địch; thân thể và túi trữ vật của bạch y trung niên hóa thành tro bụi. Vương Lâm thu phi kiếm cổ quái. Tư Đồ Nam xác nhận: vỏ kiếm đen mới là bảo bối thật sự, phi kiếm chỉ là thứ yếu. Vương Lâm mồ hôi chảy dài — trận chiến sinh tử tiêu hao lớn nhất kể từ khi tu tiên. (@c0068)"
    },
    {
      chuong: 69,
      tieuDe: "Hóa Thần Thuật",
      tomTat: "Vương Lâm dùng Hóa Thần thuật (học từ một ngọc giản từng đổi được tại một hội giao dịch ở Hằng Nhạc Phái — VL chỉ mơ hồ nhớ, @c0069) xóa ký ức về vụ chiến đấu của Vương tiên sinh và 6 người tiêu cục còn sống — chọn tha mạng thay vì diệt khẩu. Trương Hổ nhổ độc tiêu ra, diệt nốt nhóm hắc y sống sót bằng hỏa cầu, hút kim sắc huyết châu vào người. Hai người lên đỉnh núi gần đó, Trương Hổ kể toàn bộ câu chuyện: bỏ trốn khỏi Hằng Nhạc Phái sau khi giết Lưu sư huynh, bị Bạch Triển (đệ tử thứ sáu Tức Mặc lão nhân) bắt và khống chế bằng độc trùng 4 năm. Được biết: Hằng Nhạc phái 'danh tồn thật vong' — Huyền Đạo Tông thực chất đã thâu tóm từ 4 năm trước. Tức Mặc lão nhân là tán tu Kết Đan kỳ, sẽ điều tra cái chết của Bạch Triển. Trương Hổ giới thiệu Đằng Gia thành là nơi ẩn náu tốt. (@c0069)"
    },
    {
      chuong: 70,
      tieuDe: "Đằng Gia Thành",
      tomTat: "Trương Hổ giải thích chi tiết về Đằng Gia thành: gia tộc lâu đời ~500 năm ở phía bắc Triệu Quốc, là khách khanh của Vô Phong Cốc, trong thành có tin đồn có bậc Nguyên Anh kỳ. Để vào cổng phải nộp 1 hạ phẩm linh thạch; mỗi tháng nộp 1 trung phẩm linh thạch. Luật nghiêm: cấm đánh nhau và phi hành trong thành (do Đằng Hình Sâm cưỡng chế thực thi). Vương Lâm và Trương Hổ nộp phí, vào thành. Ngay cổng thành, một người Trúc Cơ kỳ (~30 tuổi, mặt âm trầm) thổi gió — Trương Hổ ngã lăn, VL chỉ lùi vài bước, thần sắc bình thản. Thuê phòng tại khách điếm. VL bắt đầu tế luyện phi kiếm cổ quái trong phòng: phi kiếm linh tính mạnh, kháng cự dữ dội; VL dùng ngọc phù phóng kim quang từng bước chế ngự, dần nhận ra cơ chế màu sắc–thuấn di. (@c0070)"
    },
    {
      chuong: 71,
      tieuDe: "Huyết Luyện Pháp",
      tomTat: "Vương Lâm dùng thần thức tế luyện phi kiếm cổ quái: phi kiếm mang 'hơi thở yêu dị' khiến người dễ chìm đắm; trải qua nhiều đêm thức tỉnh, VL cuối cùng kết nối được ký hiệu yêu quái trên thân kiếm với ý niệm mình, phi kiếm chính thức trở thành bản mệnh pháp bảo, màu sắc đổi từ vàng ố sang đen nhánh. Tư Đồ Nam dạy VL Huyết Luyện thuật (bi thuật ma đạo): cắn ngón tay nhỏ giọt máu lên pháp bảo, huyết khí dung nhập mang pháp lực mạnh hơn, uy lực lục kiếm tăng vọt. VL còn học cách điều khiển phi kiếm xuất nhập vỏ kiếm đen — mỗi lần xuất kiếm màu sắc biến động từ đen sang các màu khác tùy trạng thái linh lực. (@c0071)"
    },
    {
      chuong: 72,
      tieuDe: "Đoạt Cơ",
      tomTat: "VL mua quyển 'Những nghiên cứu tâm đắc về trận pháp' (10 khối trung phẩm linh thạch — hết túi) tại chợ Đằng Gia Thành. Đêm đó bị Đằng Lệ (Trúc Cơ hậu kỳ, cháu lão tổ Đằng Hóa Nguyên) bày bẫy bắt; VL thoát ra cổng thành. Cuộc truy sát hơn 5–6 ngày xuyên rừng: VL bày kế dây mây xanh (Đằng Điều) trọng thương Đằng Lệ, rồi dụ hắn vào tầm Thi Mị/Lục Đan tự bạo. VL liều mạng đánh cuộc — dùng Lục Kiếm xuyên nội giáp + Tư Đồ Nam đóng băng bắt sống Đằng Lệ. Thi triển Đoạt Cơ Đại Pháp: luyện Đằng Lệ thành 3 quả cầu máu/thịt/xương, rút linh hồn, đoạt một phần ba linh căn. Hóa thân lão tổ Đằng Hóa Nguyên (Nguyên Anh kỳ) xuất hiện cảm nhận cháu chết, lập trận lời nguyền định vị hình thoi in lên trán VL thề báo thù. (@c0072)"
    },
    {
      chuong: 73,
      tieuDe: "Đống Hoang Tàn Trong Rừng",
      tomTat: "Sau khi đoạt linh căn Đằng Lệ, Vương Lâm tìm vào sâu thâm sơn ẩn náu bế quan. Vùng đống đổ nát thành cổ trong rừng — quanh năm sương mù, khí âm hàn dày đặc. VL bắt đầu bế quan lần 3 luyện Hoàng Tuyền Thăng Khiếu Quyết do Tư Đồ Nam truyền (công pháp âm hàn ma đạo). Sau 2 năm bế quan, đột phá lên Trúc Cơ kỳ nhờ nền tảng Đoạt Cơ Đại Pháp và linh căn bổ sung từ Đằng Lệ. (@c0073)"
    },
    {
      chuong: 74,
      tieuDe: "Hoàng Tuyền Hàn Đan",
      tomTat: "Vương Lâm tiếp tục tu luyện Hoàng Tuyền Thăng Khiếu Quyết trong vùng đống đổ nát. Hấp thu khí âm hàn trùng khiếu các huyệt; quá trình tu luyện phức tạp nhiều biến hóa (công pháp biệt danh 'quỷ công'). VL ngưng tụ được Hoàng Tuyền Hàn Đan (tinh thể màu xanh trong đan điền, có xúc tua khuếch tán toàn thân) — mốc quan trọng của công pháp. (@c0074)"
    },
    {
      chuong: 75,
      tieuDe: "Lam Phu Quái Nhân",
      tomTat: "Vùng đống đổ nát thành cổ xuất hiện một quái nhân da tay màu lam, khắc đầy ký hiệu cổ quái, mang chín tấm phù vàng. Hai người gặp nhau: quái nhân (sau gọi là a Ngốc) dẫn VL đến nhiều nơi trong thành, qua đó VL biết được khu vực có cụm kiến trúc hình tháp với khí âm hàn phẩm chất cực cao. VL cũng phát hiện vỏ kiếm đen (bản mệnh pháp bảo mới nhặt) có phản ứng đặc biệt khi tiếp xúc khí âm hàn — màu sắc đổi từ lục sang lam rồi đen rồi hồng tùy mức độ linh lực. (@c0075)"
    },
    {
      chuong: 76,
      tieuDe: "Pháp Bảo Kinh Nhân",
      tomTat: "Thám hiểm sâu hơn vào đống đổ nát, một hắc động (vùng tối bí ẩn) xuất hiện. A Ngốc tặng Vương Lâm một pháp bảo huyễn thuật dạng hạt châu nhỏ — khi kích hoạt tạo ảo giác đánh lạc hướng thần thức địch thủ. VL nhận ra quái nhân này có thiện chí, bắt đầu tin tưởng hơn. Lục kiếm sau khi dung hợp huyết luyện pháp trở nên linh mẫn hơn, phản ứng với hắc động. (@c0076)"
    },
    {
      chuong: 77,
      tieuDe: "Sơ Lộ Dấu Vết",
      tomTat: "VL tu luyện Hoàng Tuyền Thăng Khiếu Quyết tầng 1 thành công; vô tình mở ra lối tu luyện mới — thân thể hóa hắc động cắn nuốt khí âm hàn trong phạm vi ngàn trượng. Ngưng tụ hàn đan (tinh thể xanh có xúc tua) sau tầng 3; cố trùng khiếu tầng 4 (huyệt Khí Hải) thất bại 100 lần. Hấp thu khí âm hàn cả đêm → đạt Trúc Cơ sơ kỳ đỉnh phong. Hai mối nguy hé lộ: (1) Đằng Hóa Nguyên theo trớ chú báo thù lần ra khu vực VL, cắn răng xông vào dù e dè 'thứ rất mạnh' trong đám cây; (2) Bàn tay khô héo từ quan tài hở góc ngưng tụ lôi cầu tím nói 'kỳ hạn trăm năm sắp tới, chủ nhân không chạy thoát'. (@c0077)"
    },
    {
      chuong: 78,
      tieuDe: "Cực Âm Linh Lực",
      tomTat: "Đằng Hóa Nguyên tiếp cận VL thì bị nam tử thây khô (Nguyên Anh trung kỳ — thân thể cũ Ngô Vũ) trong hắc vụ đánh đuổi; lão phun máu bỏ chạy. VL đi sâu vào thành đổ nát 4–5 ngày dùng quang cầu dò phẩm chất khí âm hàn; tìm được cái hố lớn (đường kính ~ngàn thước) ở trung tâm — trầm âm ngũ phẩm lúc giữa giờ tý. Trùng khiếu thành công huyệt Khí Hải; tinh vân hình thành, linh lực chuyển màu lam. (Toàn cảnh) Linh lực VL dị biến theo hướng Cực cảnh — một trong ba cảnh giới linh lực thượng cổ thất truyền (Cực/Đạo/Thủy); Nghịch Thiên châu + Hoàng Tuyền Thăng Khiếu Quyết (bản thất bản) là nguyên nhân. (@c0078)"
    },
    {
      chuong: 79,
      tieuDe: "Thi Âm Tông",
      tomTat: "VL thử sức với a Ngốc (quyền pháp ẩn lực đạo cổ quái, lùi VL ba thước); đặt tên linh lực biến dị là 'Cực Âm linh lực'. Theo a Ngốc 4 ngày đến trung tâm thành đổ nát; cùng mở 8 viên thạch châu triệu pho tượng nam tử cự long. Tu luyện 5 ngày trên đầu cự long tại Tuyệt âm thập phẩm (cực hạn Hoàng âm chi địa) — Hoàng Tuyền Thăng Khiếu Quyết tầng 5 đại thành, đạt Trúc Cơ trung kỳ. Nam tử thây khô (Nguyên Anh trung kỳ) tới, a Ngốc cứu VL vào trong pho tượng. Gặp Ngô Vũ (lão tổ Thi Âm tông, Nguyên Anh thể suy yếu ẩn trong pho tượng đá) — a Ngốc là thi khôi cũ Ngô Vũ từng đoạt xá thất bại. Ngô Vũ nhờ VL tìm sư huynh Dạ Tự Tại, đổi lại mở truyền tống trận + cho biết Địa Âm chi địa trong Thi Âm tông. VL lao vào truyền tống trận, a Ngốc theo sau. (@c0079)"
    },
    {
      chuong: 80,
      tieuDe: "Tiến Vào Tông",
      tomTat: "VL + a Ngốc xuất hiện trong trận tiếp dẫn Thi Âm tông Triệu quốc — trận mở 43 đạo ánh sáng (đại biểu địa vị Nguyên Anh lão tổ), tám đệ tử gác trận quỳ bái. Thanh niên gác trận dẫn VL gặp chấp sự trưởng lão Mộc Ngung (Trúc Cơ trung kỳ). VL mạo nhận thân phận đệ tử Ngô Vũ; Mộc Ngung lập tức cung kính, gọi 'sư thúc về tông'. VL xóa hoài nghi bằng kỹ thuật 'ngưng khói thành thật' (ngưng Lam Viêm Ma hỏa thành tiểu cầu bằng âm hàn linh lực). Mộc Ngung liên lạc Dạ Tự Tại qua ngọc giản; bóng người hư ảo Dạ Tự Tại (Nguyên Anh, lão tổ tối cao) xuất hiện với uy áp khổng lồ, lạnh lùng hỏi 'Ngươi chính là đệ tử của Ngô Vũ sư đệ?' — chương dừng. (@c0080)"
    },
    {
      chuong: 81,
      tieuDe: "Lô Đỉnh",
      tomTat: "Dạ Tự Tại (thực chất La Sát ký sinh) chính thức nhận VL làm đại đệ tử thứ hai; trao ngọc giản lam đậm Thi Âm tông. Tiết lộ: thân thể Dạ Tự Tại bị La Sát ký sinh hoàn toàn, thọ mệnh còn <3 tháng. Kế hoạch: dùng VL + 20 người làm vật dẫn nâng thi khôi giả đan lên Kết Đan. Nhận a Ngốc làm lô đỉnh thi khôi giả đan, kế hoạch riêng nâng a Ngốc lên Kết Đan kỳ. Mộc Ngung xác nhận đã đột phá ba năm trước. Bối cảnh Thi Âm tông: cung cấp thân thể cho tu sĩ ngũ cấp đổi xác; Hoàng Tuyền Đạo là công pháp cốt lõi; bốn tông tà đạo. (@c0081)"
    },
    {
      chuong: 82,
      tieuDe: "Đại Biến",
      tomTat: "La Sát (qua thân Dạ Tự Tại) giới thiệu VL về Hoàng Tuyền Đạo — công pháp cốt lõi Thi Âm tông, vận lam hỏa. VL bắt đầu làm quen với Thi Âm tông; a Ngốc tiếp tục ở lại dưới giám sát. Đề cập Thông Thiên Tháp — công trình trung tâm Triệu quốc; Cự Ma tộc (liên minh các sứ giả đầu khổng lồ) xuất hiện lấy Thất Thải pháp khí từ Thông Thiên Tháp. (@c0082)"
    },
    {
      chuong: 83,
      tieuDe: "Vực Ngoại Chiến Trường",
      tomTat: "Cự Ma tộc (liên minh sứ giả đầu khổng lồ) đang hoạt động ở Triệu quốc — tìm Nghịch Thiên Châu (tức Thạch Châu của VL). Đã lấy Thất Thải pháp khí từ Thông Thiên Tháp; mục tiêu tiếp theo liên quan đến Nghịch Thiên Châu. VL ý thức được mối nguy mới; Vực Ngoại được nhắc đến là khu vực có max 3 người vào, vừa được dọn sạch. (@c0083)"
    },
    {
      chuong: 84,
      tieuDe: "Thạch Châu Biến",
      tomTat: "Mộc Ngung dẫn VL xuống huyệt động Địa Âm chi địa — tầng sâu nhất, âm hàn cực đỉnh, môi trường lý tưởng để tu luyện Hoàng Tuyền Thăng Khiếu Quyết. VL phát hiện xác người khổng lồ trong huyệt động, bên cạnh là cây tỏa âm hàn cổ đại (cây chứa linh khí dị thường). Tư Đồ Nam đang ngủ trong Thạch Châu. VL tiếp xúc xác người khổng lồ — hấp thụ linh khí kỳ lạ. (@c0084)"
    },
    {
      chuong: 85,
      tieuDe: "Tế Luyện Vỏ Kiếm",
      tomTat: "Nguyên tác xác nhận rõ tu vi VL = Trúc Cơ sơ kỳ đỉnh phong, tùy thời có thể đột phá Trúc Cơ trung kỳ. Nghịch Thiên Châu phát triển lá thứ 3 — Mộc giai. VL bắt đầu tế luyện lại Vỏ Kiếm Đen (đã đắc thủ của Bạch Triển @c0068) bằng hàn hỏa tự chế trong Địa Âm chi địa: làm trận pháp trên vỏ kiếm hiện ra, rót Hàn Đan hóa lỏng vào. (@c0085)"
    },
    {
      chuong: 86,
      tieuDe: "Ngọc Giản Hồn Phách",
      tomTat: "La Sát (qua thân Dạ Tự Tại) quyết định cử VL đến Quyết Minh Cốc — vùng đất có trận phong ấn Kết Đan kỳ trở lên, dùng làm nơi nâng thi khôi giả đan. Đổ Trần (Trúc Cơ hậu kỳ, giả đan) dẫn đoàn 20 vật dẫn + VL tiến vào. A Ngốc ở lại Thi Âm tông. VL mang theo Vỏ Kiếm Đen (đang tế luyện 4/10), Nghịch Thiên Châu (3 lá Mộc giai). (@c0086)"
    },
    {
      chuong: 87,
      tieuDe: "Điệu Kiếp",
      tomTat: "Đằng Hóa Nguyên thực hiện lời nguyền: tàn sát toàn bộ Vương gia (100+ người) bằng hồn kỳ (pháp bảo Nguyên Anh kỳ). Vương Trác (Ngưng Khí tầng 11) và Vương Hạo (Ngưng Khí tầng 7) sống sót; Vương Trác gia nhập Huyền Đạo Tông. Khải Minh (thầy toán, đồng minh ĐHN) cứu Tứ thúc Vương Lâm thoát con tin. Sau đó Đằng Hóa Nguyên đứng chờ bên ngoài Quyết Minh Cốc — kết đan+ không vào được vì trận phong ấn. (@c0087)"
    },
    {
      chuong: 88,
      tieuDe: "Cực Cảnh Lâm Thế",
      tomTat: "Bên trong Quyết Minh Cốc: VL gặp Chu Quyền (bạch y thanh niên chính đạo, đệ tử Viên phái). Nghịch Thiên Châu lần đầu phát hắc quang — dấu hiệu Mộc giai 3 lá hoạt động. VL vào Cực cảnh, đồ sát vô số tu sĩ. Đằng Hóa Nguyên vẫn canh bên ngoài. (@c0088)"
    },
    {
      chuong: 89,
      tieuDe: "Lô Đỉnh",
      tomTat: "Tư Đồ Nam tỉnh dậy sau 5 ngày VL ở trong cốc. Giải thích về Hồn Kỳ (pháp bảo Nguyên Anh kỳ, phong ấn hồn phách — chỉ còn 3 thuấn di trước khi hồn phách tiêu tán). Khuyên VL ra Vực Ngoại: vùng ngoài Quyết Minh Cốc vừa dọn sạch, có gia tốc thời gian. Đằng Hóa Nguyên vẫn chờ ngoài cốc với hồn kỳ trong tay. (@c0089)"
    },
    {
      chuong: 90,
      tieuDe: "Mễ Lạp Chi Quang",
      tomTat: "VL phát hiện linh lực có biến dị: lam đen theo mảnh — hệ quả từ hấp thụ linh khí xác người khổng lồ @c0084. Tư Đồ Nam không giải thích được hiện tượng. VL chế tạo mê lạp (hạt gạo lam tự chế): 1 hạt đơn tầm 300 thước, 2 hạt kép mạnh hơn, 3 hạt tự bạo ~1 dặm; hiện có 3 hạt (2 kép, 1 đơn). Quyết Minh Cốc còn có alias 'Quang Minh Cốc' @c0090. (@c0090)"
    }
  ]
};

// QUYỂN thật (ranh giới theo nguyên tác; tham chiếu web cũ). Tóm tắt theo tiến độ đọc thật.
window.LIB_DATA["tien-nghich"].volumes = {
  updatedAt: "2026-06-10",
  volumes: [
    { value: "q01", label: "Quyển 1", range: "Ch.1 – 100", title: "Phàm nhân khởi đầu",
      summary: "Khởi đầu hành trình của Vương Lâm — thiếu niên thôn quê tư chất kém, nhờ ý chí phi thường và cơ duyên nhặt được Thạch Châu mà bước vào con đường tu tiên. Bị tiên môn từ chối ba lần, chịu cả họ sỉ nhục, bỏ nhà băng thâm sơn lần thứ hai — rơi vào huyệt động phong nhãn, nhặt được Thạch Châu bí ẩn. Được phá lệ thu làm ký danh đệ tử, phải gánh mười vại nước nặng nhọc. Bí mật dùng Thạch Châu cường hóa thể chất, bị trưởng lão họ Tôn điều tra, rồi được thu làm đệ tử nội môn (danh nghĩa). Thạch Châu dần bộc lộ bản chất: hút nước mạnh bạo, nước ngâm châu biến thành linh khí, số đám mây tăng 5→9. Vương Lâm lần đầu bước vào tu tiên, đột phá Ngưng Khí tầng 1 @c0025 và tầng 2 @c0030, tầng 3 @c0036 nhờ Mộng Cảnh Thạch Châu. Tham gia tỷ thí với Huyền Đạo Tông (Ch.47–49): thắng liên tiếp Chu Bằng (3 lần) + Dương Nghị; lấy dịch độc Thiên Túc Ngô Công về trị bệnh cha. Cứu Vương Hạo thoát lò luyện đan; Lữ Vân Kiệt bị phạt diện bích 20 năm (Ch.50). Thực lực thật = Linh Động Kỳ viên mãn (@c0046–@c0048) — vẫn bí mật che giấu. (Wiki nghiên cứu tới Ch.60.)",
      milestones: [
        "Trượt cả ba hạng trắc thí Hằng Nhạc Phái (Ch.4)",
        "Bỏ nhà lần hai, rơi vào huyệt động phong nhãn (Ch.7)",
        "Nhặt được Thạch Châu — pháp bảo khởi nguồn, sương trị lành cánh tay (Ch.8)",
        "Được phá lệ thu làm ký danh đệ tử Hằng Nhạc Phái nhờ khối tinh thiết của Tứ thúc (Ch.10)",
        "Thạch Châu lộ dị biến hút nước: đám mây 5→7, suýt giết Trương Hổ (Ch.14)",
        "Tôn Đại Trụ tịch thu hồ lô, thu VL làm đệ tử nội môn (Ch.16)",
        "Lần đầu cảm nhận linh khí nhập thể ở dược viên — bước vào tu tiên (Ch.17)",
        "Thạch Châu đạt 9/10 đám mây; Tôn Đại Trụ (không phải VL) là Ngưng Khí tầng 5 (Ch.20)",
        "Thạch Châu khai mở Không gian Mộng Cảnh (thời gian x10) khi đủ 10 đám mây (Ch.23)",
        "Đột phá Ngưng Khí tầng 1 — chính thức thành tu tiên (Ch.25)",
        "Trương Hổ giết Lưu sư huynh bỏ trốn; VL nhặt cuộn giấy vàng bí ẩn (Ch.26)",
        "Vương Lâm trở thành quản sự khu tạp vụ Hằng Nhạc Phái (Ch.28)",
        "Đột phá Ngưng Khí tầng 2, sinh thần thức; biệt danh 'Hắc Tâm vương' (Ch.30)",
        "Đột phá Ngưng Khí tầng 3 trong Mộng Cảnh; bị chặn ở tầng 4 (Ch.36)",
        "Lấy phi kiếm Cự Phú — đệ nhất phi kiếm Triệu quốc (Ch.39)",
        "Huyền Đạo Tông tới, gặp Liễu Mi; lộ tầng 3 (Ch.40)",
        "Tư Đồ Nam tiết lộ: tu vi thật VL = Linh Động Kỳ viên mãn, ẩn trong Thạch Châu ~30 năm (Ch.46–47)",
        "Tỷ thí: hạ Chu Bằng 3 lần + Dương Nghị; toàn môn tôn 'đại sư huynh' (Ch.48)",
        "Lấy dịch độc Thiên Túc Ngô Công — trị bệnh phong hàn cho cha (Ch.49)",
        "Cứu Vương Hạo thoát lò luyện đan; Lữ Vân Kiệt bị diện bích 20 năm (Ch.50)",
        "Giết Tôn Đại Trụ — lần đầu giết người, thực lực lộ ~tầng 14 (đánh giá Thượng Quan trưởng lão) (Ch.51)",
        "Hằng Nhạc Phái mất sơn môn trước tay Phác Nam Tử (Nguyên Anh kỳ, Huyền Đạo Tông) (Ch.53–54)",
        "Rời Hằng Nhạc, dẫn nhóm tàn quân tới Tượng Xà sơn — Hằng Nhạc Phái bế quan 100 năm (Ch.55–57)",
        "Giết Trương Cuồng tại cổng thôn để bảo vệ cha mẹ (Ch.59)",
        "Học Khôi Lỗi thuật (ma đạo) từ Tư Đồ Nam; luyện Chu Bằng thành khôi lỗi (Ch.60)",
        "Trúc Cơ thành công; Hoàng Tuyền Thăng Khiếu Quyết tầng 5 đại thành — Trúc Cơ sơ kỳ đỉnh phong (Ch.73–79)",
        "La Sát (ký sinh Dạ Tự Tại) nhận VL làm đại đệ tử thứ hai Thi Âm tông; tiết lộ kế hoạch vật dẫn (Ch.81)",
        "Phát hiện xác người khổng lồ + cây tỏa âm hàn trong Địa Âm chi địa; hấp thụ linh khí dị thường (Ch.84)",
        "Nghịch Thiên Châu phát triển lá 3 (Mộc giai); tế luyện lại Vỏ Kiếm Đen bằng hàn hỏa (Ch.85)",
        "Vào Quyết Minh Cốc cùng 20 vật dẫn do Đổ Trần dẫn dắt (Ch.86)",
        "Đằng Hóa Nguyên diệt toàn bộ Vương gia (100+ người); Vương Trác + Vương Hạo sống sót (Ch.87)",
        "Linh lực dị biến lam đen; chế tạo mê lạp — 3 hạt (2 kép, 1 đơn), 3 hạt tự bạo ~1 dặm (Ch.90)"
      ]
    },
    { value: "q02", label: "Quyển 2", range: "Ch.101 – 140", title: "Tái sinh nơi Vực Ngoại",
      summary: "(Chưa nghiên cứu tới — sẽ cập nhật khi đọc.)", milestones: [] }
  ]
};

window.LIB_DATA["tien-nghich"].techniques = {
  updatedAt: "2026-06-10",
  count: 16,
  techniques: [
    {
      id: "ngung-khi-tam-thien",
      name: "Ngưng Khí tam thiên",
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      he: "Hằng Nhạc Phái",
      capBac: "Nhập môn (Ngưng Khí kỳ)",
      nguoiDung: ["vuong-lam"],
      blurb: "Công pháp cơ bản nhất Hằng Nhạc Phái cấp cho đệ tử nội môn; Ngưng Khí kỳ có 15 tầng tổng cộng, mỗi tầng cần khẩu quyết riêng. Phiên bản được cấp chỉ tới tầng 3. Kèm theo 4 pháp thuật: Dẫn lực thuật, Hỏa diễm cầu, Địa liệt thuật, Khu Vật thuật.",
      detail: "Ngưng Khí = thổ nạp thiên địa linh khí, tích lũy vào thân, cải biến thể chất phàm tạo cơ sở tu luyện. Phương thức hô hấp trái thường ('một dài ba ngắn') để hấp thụ linh khí nhanh nhất. Dấu hiệu linh khí nhập thể: cảm giác như côn trùng bò khắp người. Linh căn sung túc → hấp nạp nhanh; tư chất bình thường → có thể cả đời không qua ba tầng. Ngưng Khí kỳ gồm 15 tầng tổng cộng — mỗi tầng cần khẩu quyết riêng (@c0025, @c0027). Phiên bản Tôn Đại Trụ cấp cho VL chỉ tới tầng 3; VL phải tìm thêm khẩu quyết các tầng cao hơn (@c0027). VL đổi được khẩu quyết tầng 4–9 từ Trương Cuồng (đổi Linh Khí Tuyền Thủy @c0033). Pháp thuật trong công pháp (xác nhận tới Ch.40): Dẫn lực thuật (VL chủ yếu luyện — @c0025, @c0027, @c0036, @c0038), Hỏa diễm cầu (@c0025), Địa liệt thuật (@c0025), Khu Vật thuật (@c0026, @c0038). Tôn Đại Trụ truyền cho Vương Lâm khi thu làm đệ tử nội môn.",
      nguon: ["@c0017", "@c0025", "@c0026", "@c0027", "@c0033", "@c0036", "@c0038"]
    },
    {
      id: "dan-luc-thuat",
      name: "Dẫn Lực Thuật",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật",
      he: "Hằng Nhạc Phái",
      capBac: "Cơ bản (Ngưng Khí kỳ trở lên)",
      nguoiDung: ["vuong-lam"],
      blurb: "Pháp thuật dẫn và điều khiển lực — Vương Lâm luyện chuyên sâu nhất. Sau 20+ năm tu trong Mộng Cảnh, Dẫn Lực Thuật của VL đứng đầu Tu Chân Giới Triệu quốc (@c0038). Tới @c0049 đã hóa thành 'hai bàn tay hữu hình' đủ sức khống chế linh thú lớn. Hạn chế: có phạm vi tác dụng giới hạn — ra ngoài phạm vi thì hiệu quả giảm mạnh (@c0059).",
      detail: "Dẫn Lực Thuật là một trong các pháp thuật cơ bản của Hằng Nhạc Phái (kèm trong Ngưng Khí tam thiên @c0025). Vương Lâm đặc biệt chuyên tâm luyện pháp thuật này — luyện cả trong và ngoài Mộng Cảnh. Sau hơn 20 năm tu luyện cộng dồn (Mộng Cảnh + thực tế), Dẫn Lực Thuật của VL đạt trình độ đứng đầu Tu Chân Giới Triệu quốc (@c0038). Đến @c0036, VL luyện Dẫn Lực Thuật tới cảnh giới 'lô hỏa thuần thanh'. Tôn Đại Trụ dùng kết quả này như bằng chứng để nhận VL làm đệ tử chân chính (@c0038). Tại @c0048–@c0049, VL biểu diễn Dẫn Lực Thuật hóa thành hai bàn tay hữu hình (nhìn thấy được) — đỡ cự kiếm tầng 14 và ép khống chế Thiên Túc Ngô Công đồng thời. Giới hạn phạm vi được xác nhận @c0059: khi Chu Bằng bỏ chạy ra ngoài phạm vi, hiệu quả giảm mạnh, VL gần như không đuổi kịp. Chu Bằng gọi chiêu hóa trảo của thuật này là 'Cầm Long thủ' @c0059.",
      nguon: ["@c0025", "@c0027", "@c0036", "@c0038", "@c0048", "@c0049", "@c0059"]
    },
    {
      id: "khu-vat-thuat",
      name: "Khu Vật Thuật",
      loai: "than-thong",
      loaiLabel: "Thần thông — Khu khiển phi kiếm",
      he: "Hằng Nhạc Phái",
      capBac: "Trung (cần tu vi đủ và phi kiếm phù hợp)",
      nguoiDung: ["vuong-lam", "ton-dai-tru"],
      blurb: "Thần thông khu khiển phi kiếm từ xa — điều khiển phi kiếm tấn công và di chuyển mà không cần cầm tay. Tôn Đại Trụ dạy Vương Lâm @c0038 sau khi chính thức nhận làm đệ tử chân chính.",
      detail: "Khu Vật Thuật cho phép người tu luyện điều khiển phi kiếm (hoặc vật phẩm khác) bay tự do từ xa. Tôn Đại Trụ dùng để điều khiển Tiểu Kiếm thất thải (@c0016, @c0038). Tôn Đại Trụ dạy Vương Lâm sau khi xác nhận VL đạt tầng 3 và thu làm đệ tử chân chính @c0038. Khu Vật Thuật từng xuất hiện trong danh sách pháp thuật Hằng Nhạc Phái tại @c0026; VL bắt đầu luyện nghiêm túc từ @c0038 sau khi được truyền đích thân.",
      nguon: ["@c0026", "@c0038"]
    },
    {
      id: "thuat-giau-tu-vi",
      name: "Thuật giấu tu vi",
      loai: "bi-thuat",
      loaiLabel: "Bí thuật",
      he: "Không rõ nguồn gốc (mua từ giao dịch hội)",
      capBac: "Hạ phẩm (giá 5 khỏa linh đan)",
      nguoiDung: ["vuong-lam"],
      blurb: "Bí thuật che giấu tu vi, ngụy trang cảnh giới trước mắt người khác. Vương Lâm mua từ giao dịch hội bí mật @c0032 — bị người khác chê vô dụng, nhưng VL thấy cực kỳ hữu ích do cần che giấu thực lực suốt thời gian dài. Luyện thành thục đến mức giả tầng 1 @c0034.",
      detail: "Thuật giấu tu vi ghi trên ngọc giản; Vương Lâm mua từ giao dịch hội bí mật của nội môn đệ tử Hằng Nhạc Phái với giá 5 khỏa linh đan (@c0032). Mọi người tại hội cho rằng pháp thuật này vô dụng; VL nhận ngay lập tức vì nhận ra giá trị với hoàn cảnh cá nhân. Sau khi luyện thành, VL giả mạo tu vi tầng 1 trước mặt toàn thể đệ tử @c0034 — kể cả khi thực tế đã ở tầng 2 (bí mật). Dùng liên tục để che giấu đột phá tầng 3 cho đến khi công khai tại @c0038.",
      nguon: ["@c0032", "@c0034"]
    },
    {
      id: "suu-hon-thuat",
      name: "Sưu Hồn thuật",
      loai: "bi-thuat",
      loaiLabel: "Bí thuật — Nguy hiểm",
      he: "Không rõ (cá nhân Tôn Đại Trụ)",
      capBac: "Cao — nguy hiểm cả người dùng lẫn đối tượng",
      nguoiDung: ["ton-dai-tru"],
      blurb: "Bí thuật cực độc: tra tấn linh hồn để moi ký ức/bí mật. Đối tượng bị dùng lên: 8–9 phần tử vong, còn lại trở nên si ngốc. Người thi triển cũng bị tụt tu vi mạnh. Tôn Đại Trụ từng có kế hoạch dùng lên Vương Lâm nhưng bỏ sau @c0038.",
      detail: "Sưu Hồn thuật là pháp thuật cực kỳ nguy hiểm — moi hồn/tra hồn để lấy ký ức và bí mật. Hệ quả cho đối tượng: 8–9 phần mười tử vong ngay; số sống sót phần lớn trở thành si ngốc cả đời (@c0019). Hệ quả cho người thi triển: tụt tu vi đáng kể sau mỗi lần dùng (@c0038). Tôn Đại Trụ ấp ủ kế hoạch dùng lên Vương Lâm từ @c0019 (đợi VL đạt tầng 1 để hỏi bí mật hồ lô); nhưng đến @c0038 khi thấy VL đã đạt tầng 3, Tôn bỏ hoàn toàn ý định này.",
      nguon: ["@c0019", "@c0038"]
    },
    {
      id: "lo-hoa-khai-dinh",
      name: "Lô Hỏa Khai Đỉnh Đại Pháp",
      loai: "cong-phap",
      loaiLabel: "Công pháp — Tà đạo",
      he: "Không rõ nguồn gốc (Lữ Vân Kiệt tự sử dụng)",
      capBac: "Cao — cần nhân lực ngoài làm dược lô",
      nguoiDung: ["lu-van-kiet"],
      blurb: "Công pháp tà đạo luyện Nhân Thọ đan: dùng người khác làm 'dược lô' — ép người tu công pháp này để tích năng lượng rồi thu về luyện đan đổi thọ mệnh. Đối tượng làm dược lô chỉ còn ~1 năm sống. Hồng Kiểm lão giả xác nhận tên công pháp này có thật @c0050.",
      detail: "Lữ Vân Kiệt dùng kế hoạch: lừa Vương Hạo uống Tạo Hóa Đan rồi ép tu Lô Hỏa Khai Đỉnh Đại Pháp (@c0043). Vương Hạo bị biến thành dược lô: linh khí trong người lưu động quỷ dị, thọ mệnh chỉ còn ~1 năm. Mục đích: luyện Nhân Thọ đan để Lữ Vân Kiệt đổi thêm thọ mệnh (bị kẹt tầng 6 suốt 25 năm). Hồng Kiểm lão giả Hằng Nhạc Phái xác nhận tên công pháp này là thật @c0050.",
      nguon: ["@c0043", "@c0050"]
    },
    {
      id: "thuy-mac",
      name: "Thủy Mạc",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — Thủy hệ",
      he: "Huyền Đạo Tông",
      capBac: "Chưa xác định",
      nguoiDung: ["lieu-phong"],
      blurb: "Pháp thuật thủy hệ của đệ tử Huyền Đạo Tông Liễu Phong. Dùng để đánh bại Triệu Long (Liên Hoa kiếm khí) trong trận mở màn tỷ thí tại Thương Tùng Phong. (@c0047)",
      detail: "Liễu Phong (đệ tử Huyền Đạo Tông) dùng Thủy Mạc trong tỷ thí (@c0047); hóa giải và vượt qua Liên Hoa kiếm khí của Triệu Long. Chi tiết cơ chế không được mô tả thêm.",
      nguon: ["@c0047"]
    },
    {
      id: "lien-hoa-kiem-khi",
      name: "Liên Hoa Kiếm Khí",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — Kiếm khí",
      he: "Hằng Nhạc Phái",
      capBac: "Chưa xác định",
      nguoiDung: ["trieu-long"],
      blurb: "Pháp thuật kiếm khí của đệ tử Hằng Nhạc Phái Triệu Long. Dùng trong tỷ thí tại Thương Tùng Phong; thua trước Thủy Mạc của Liễu Phong. (@c0047)",
      detail: "Triệu Long (đệ tử Hằng Nhạc Phái) dùng Liên Hoa kiếm khí trong tỷ thí (@c0047); bị Thủy Mạc hóa giải. Chi tiết cơ chế không được mô tả thêm.",
      nguon: ["@c0047"]
    },
    {
      id: "that-thai-nhan-sac",
      name: "Thất Thải Nhan Sắc",
      loai: "bi-thuat",
      loaiLabel: "Bí thuật — Mê hoặc",
      he: "Huyền Đạo Tông",
      capBac: "Chưa xác định",
      nguoiDung: ["duong-nghi"],
      blurb: "Bí thuật mê hoặc của nhị sư huynh Huyền Đạo Tông Dương Nghị — dùng nhan sắc/sắc khí để làm đối thủ mất bình tĩnh hoặc mê hoặc. Phối hợp với phi kiếm đỏ tấn công đồng thời tại tỷ thí; bị VL hóa giải và hạ bại. (@c0048)",
      detail: "Dương Nghị (nhị sư huynh Huyền Đạo Tông) phát huy Thất Thải Nhan Sắc kết hợp phi kiếm đỏ trong trận đấu với VL (@c0048). VL hóa giải tổ hợp này và hạ bại Dương Nghị. Chi tiết cụ thể về cơ chế không được mô tả thêm.",
      nguon: ["@c0048"]
    },
    {
      id: "khoi-loi-thuat",
      name: "Khôi Lỗi Thuật",
      loai: "cong-phap",
      loaiLabel: "Công pháp — Ma đạo",
      he: "Ma môn (tác giả xác nhận @c0060)",
      capBac: "Chưa xác định (quy trình phức tạp, cần gần chết thể xác người mục tiêu)",
      nguoiDung: ["vuong-lam"],
      blurb: "Công pháp ma đạo tạo ra khôi lỗi (con rối/xác sống điều khiển được). Tư Đồ Nam dạy VL. Tác giả xác nhận thuộc ma đạo; Tư Đồ Nam cố tình giấu điều này. Chu Bằng đang bị luyện thành khôi lỗi đầu tiên (@c0060).",
      detail: "Khôi Lỗi Thuật do Tư Đồ Nam dạy VL @c0056 (giới thiệu) và @c0060 (dạy chi tiết). Quy trình: (1) tìm động yên tĩnh; (2) khi mục tiêu gần chết, mổ ngực lấy ngũ tạng ra tế luyện (đánh pháp quyết + dùng thần thức quan sát); (3) bước quan trọng nhất: dùng thần thức phủ thi thể, tế luyện 3 ngày 3 đêm với một số pháp quyết — sau đó khôi lỗi hoàn thành. Tác giả (góc toàn cảnh) xác nhận đây là công pháp MA ĐẠO @c0060; Tư Đồ Nam cố tình giấu nguồn gốc để từng bước tiêm nhiễm tâm tính VL hướng về Ma môn. Tư Đồ Nam cũng thừa nhận thực tế thuật 'không phức tạp như vậy' — bước mổ ngũ tạng được lão thêm thắt để rèn chai sạn tâm tính VL @c0060.",
      nguon: ["@c0056", "@c0060"]
    },
    {
      id: "hoa-than-thuat",
      name: "Hóa Thần Thuật",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật — Thần thức",
      he: "Chưa xác định (ngọc giản từ giao dịch hội Hằng Nhạc)",
      capBac: "Chưa xác định",
      nguoiDung: ["vuong-lam"],
      blurb: "Pháp thuật xóa ký ức mục tiêu. Vương Lâm học từ một ngọc giản từng đổi được tại một hội giao dịch ở Hằng Nhạc Phái (VL chỉ mơ hồ nhớ, @c0069); lần đầu dùng thực chiến tại @c0069 xóa ký ức 7 người sống sót sau trận Bạch Triển — chọn tha mạng thay vì diệt khẩu.",
      detail: "Vương Lâm có được ngọc giản ghi Hóa Thần Thuật từ một lần đổi tại hội giao dịch ở Hằng Nhạc Phái — bản thân VL chỉ mơ hồ nhớ (@c0069). Cơ chế: xóa một phần hoặc toàn bộ ký ức của mục tiêu — không giết người. Phạm vi dùng được: @c0069 áp dụng cho 7 người cùng một lúc (Vương tiên sinh + 6 người tiêu cục). Điều kiện chính xác (tu vi mục tiêu, tầm với, số người) chưa được mô tả rõ trong nguyên tác tới Ch.70.",
      nguon: ["@c0069"]
    },
    {
      id: "huyet-luyen-thuat",
      name: "Huyết Luyện thuật",
      cn: "",
      loai: "bi-thuat",
      loaiLabel: "Bí thuật — Ma đạo",
      phamCap: "Chưa phân hạng",
      hePhai: "Ma đạo",
      soHuu: ["vuong-lam"],
      blurb: "Bí thuật ma đạo: cắn ngón tay nhỏ giọt máu lên pháp bảo, huyết khí dung nhập mang pháp lực, uy lực pháp bảo tăng vọt. Tư Đồ Nam dạy Vương Lâm để tế luyện phi kiếm cổ quái thành bản mệnh pháp bảo.",
      detail: "Vương Lâm học Huyết Luyện thuật từ Tư Đồ Nam @c0071, dùng để hoàn thành tế luyện phi kiếm cổ quái thành bản mệnh phi kiếm. Cơ chế: huyết khí của người tế luyện dung nhập pháp bảo, tạo liên kết mạnh hơn so với chỉ dùng thần thức đơn thuần. Kết quả: phi kiếm đổi màu từ vàng ố sang đen nhánh, chính thức thành bản mệnh pháp bảo.",
      nguon: ["@c0071"]
    },
    {
      id: "doat-co-dai-phap",
      name: "Đoạt Cơ Đại Pháp",
      cn: "",
      loai: "bi-thuat",
      loaiLabel: "Bí thuật — Ma đạo",
      phamCap: "Chưa phân hạng",
      hePhai: "Ma đạo",
      soHuu: ["vuong-lam"],
      blurb: "Pháp ma đạo dùng người sống (Lô Đỉnh) làm lò: hút máu/thịt/xương thành 3 quả cầu, rút linh hồn, đoạt linh căn. Lô Đỉnh Trúc Cơ hậu kỳ trở lên giúp người thi triển tăng tốc tu luyện Trúc Cơ và cải tạo thể chất. Tư Đồ Nam truyền khẩu quyết; Vương Lâm dùng Đằng Lệ (Trúc Cơ hậu kỳ) làm Lô Đỉnh @c0072.",
      detail: "Tư Đồ Nam truyền Đoạt Cơ Đại Pháp cho Vương Lâm @c0072. Quy trình: (1) lùa linh vụ vào cơ thể Lô Đỉnh; (2) vẽ ký hiệu cổ quái bằng máu khắc ngực → máu tụ thành quả cầu; (3) vẽ ký hiệu khắc trán → thịt tụ thành quả cầu; (4) tiếp tục → xương vỡ thành quả cầu; (5) rút linh hồn thành tiểu nhân nguyên thần; (6) dùng dây linh khí kéo tiểu nhân ra, ánh vàng hộ thân tiêu → rút linh căn. Lưu ý: không để Lô Đỉnh chết trước khi hoàn thành. Kết quả: VL đoạt được một phần ba linh căn Đằng Lệ, tốc độ tu luyện Trúc Cơ tăng nhanh hơn người khác. Phiên bản nhẹ hơn Đoạt Đan Đại Pháp (tàn nhẫn hơn, đổi bằng tuổi thọ, xác suất <1%).",
      nguon: ["@c0072", "@c0073"]
    },
    {
      id: "hoang-tuyen-thang-khieu-quyet",
      name: "Hoàng Tuyền Thăng Khiếu Quyết",
      cn: "",
      loai: "cong-phap",
      loaiLabel: "Công pháp — Ma đạo",
      phamCap: "Chưa phân hạng (6 cấp trùng khiếu đã biết: Đan Điền, Khí Hải, Tổ Khiếu + 3 tầng)",
      hePhai: "Ma đạo (bản thất bản theo thời gian)",
      soHuu: ["vuong-lam"],
      blurb: "Công pháp âm hàn ma đạo do Tư Đồ Nam truyền, biệt danh 'quỷ công' vì vô số biến hóa bất định. Tu luyện bằng trùng khiếu huyệt đạo trong cực âm chi địa. Phẩm chất cực âm chi địa càng cao → xác suất trùng khiếu thành công càng lớn. Tầng 1/4/7 khó nhất (đột phá Đan Điền / Khí Hải / Tổ Khiếu). Vô ý khiến linh lực VL dị biến hướng Cực cảnh thượng cổ.",
      detail: "Tư Đồ Nam truyền Hoàng Tuyền Thăng Khiếu Quyết cho Vương Lâm @c0073 (hoặc trước đó). Bản VL học đã thất bản theo thời gian, phần lớn được hậu nhân sửa sang lại @c0078. Đây là công pháp ít người tu tới mức xuất ra cực cảnh linh lực. Cơ chế: hấp thu khí âm hàn từ cực âm chi địa để 'trùng khiếu' (đột phá huyệt đạo), khí âm hàn dung hợp với linh lực thành âm hàn linh lực. Tiến độ VL: tầng 1 @c0077 (đan điền); tầng 3 @c0077 (ngưng tụ hàn đan); tầng 4 @c0078 (huyệt Khí Hải); tầng 5 đại thành @c0079 (Tuyệt âm thập phẩm, huyệt Khí Hải tái lập). Cần Địa Âm chi địa để tiếp tục sau tầng 5. @c0081–@c0085: VL tu tại Thi Âm tông Địa Âm chi địa — giai đoạn công pháp đại thành + kết hợp Hoàng Tuyền Đạo Thi Âm tông. @c0085 xác nhận tầng 5 đại thành, tu vi = Trúc Cơ sơ kỳ đỉnh phong.",
      nguon: ["@c0073", "@c0074", "@c0075", "@c0076", "@c0077", "@c0078", "@c0079", "@c0081", "@c0082", "@c0083", "@c0084", "@c0085"]
    },
    {
      id: "hoang-tuyen-dao",
      name: "Hoàng Tuyền Đạo",
      cn: "",
      loai: "cong-phap",
      loaiLabel: "Công pháp — Tà đạo",
      phamCap: "Chưa phân hạng (công pháp cốt lõi Thi Âm tông)",
      hePhai: "Thi Âm tông",
      soHuu: ["moc-ngung", "da-tu-tai"],
      blurb: "Công pháp cốt lõi của Thi Âm tông Triệu quốc. Tu luyện bằng cách hấp thụ khí xanh biếc từ Lam Viêm Ma hỏa qua thất khiếu — Mộc Ngung dùng phương pháp này @c0080. La Sát (qua thân Dạ Tự Tại) giới thiệu với Vương Lâm @c0082.",
      detail: "Hoàng Tuyền Đạo là nền tảng tu luyện Thi Âm tông. Thấy được tại @c0080 qua cảnh Mộc Ngung ngồi hấp thụ khí xanh biếc từ hỏa cầu Lam Viêm Ma hỏa qua thất khiếu. @c0082: La Sát giới thiệu với VL — không rõ VL có tu luyện thực sự hay chỉ được giới thiệu. Mối quan hệ với Hoàng Tuyền Thăng Khiếu Quyết (ma đạo Tư Đồ Nam truyền) chưa rõ — cùng tên 'Hoàng Tuyền' nhưng có thể khác nhau hoàn toàn.",
      nguon: ["@c0080", "@c0082"]
    },
    {
      id: "thien-toan-chi-dao",
      name: "Thiên Toán Chi Đạo",
      cn: "",
      loai: "bi-thuat",
      loaiLabel: "Bí thuật — Thần toán",
      phamCap: "Chưa phân hạng",
      hePhai: "Không rõ (sở hữu Khải Minh)",
      soHuu: ["khai-minh"],
      blurb: "Thuật thần toán của Khải Minh, kết hợp với gương cổ (pháp bảo). Dùng để định vị và cứu Tứ thúc Vương Lâm thoát khỏi tình thế con tin @c0087.",
      detail: "Khải Minh — đồng minh Đằng Hóa Nguyên — sử dụng Thiên toán chi đạo kết hợp gương cổ để cứu Tứ thúc VL @c0087. Không rõ cơ chế cụ thể; gương cổ là pháp bảo phụ trợ. Khải Minh được gọi là 'thầy toán' — nghề nghiệp/chuyên môn chính của nhân vật.",
      nguon: ["@c0087"]
    }
  ]
};

// MAP — địa danh Ch.1-80 (neo nguyên tác)
window.LIB_DATA["tien-nghich"].map = {
  updatedAt: "2026-06-10",
  count: 30,
  nodes: [
    { id: "trieu-quoc", name: "Triệu Quốc", cn: "", capDo: "quoc-gia", parentId: null,
      blurb: "Quốc gia nơi Vương Lâm sinh ra; vừa có dân phàm vừa có thế lực tu chân.", detail: "Bối cảnh đầu truyện. Trong Triệu quốc có cả vùng phàm tục (thôn, thị trấn, huyện) lẫn môn phái tu chân như Hằng Nhạc Phái.", theLucLienQuan: ["Hằng Nhạc Phái", "Vương thị gia tộc"], nguon: ["@c0002"] },
    { id: "son-phong-hang-nhac", name: "Sơn phong Hằng Nhạc Phái", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Sơn môn của Hằng Nhạc Phái — môn phái tu chân nơi Vương Lâm dự tuyển.", detail: "Tiên cảnh trên núi cao: đại điện trên đỉnh, hai sơn phong nối nhau bằng cầu đá; nơi tổ chức trắc thí tuyển đệ tử (linh căn + nghị lực leo thềm đá). Môn phái từng có Nguyên Anh kỳ, nay suy thoái.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0002", "@c0003"] },
    { id: "thi-tran-vuong-thi", name: "Thị trấn họ Vương", cn: "", capDo: "thanh", parentId: "trieu-quoc",
      blurb: "Nơi Vương thị gia tộc làm ăn (nghề mộc), có danh tiếng vùng.", detail: "Gia tộc họ Vương là vọng tộc địa phương, đủ tư cách được tiến cử đệ tử cho Hằng Nhạc Phái.", theLucLienQuan: ["Vương thị gia tộc"], nguon: ["@c0001"] },
    { id: "son-thon-vuong-lam", name: "Sơn thôn của Vương Lâm", cn: "", capDo: "khac", parentId: "thi-tran-vuong-thi",
      blurb: "Thôn quê nơi Vương Lâm (Thiết Trụ) sinh ra và lớn lên.", detail: "Cha Vương Lâm là con thứ vợ lẻ, rời thị trấn về định cư tại thôn làm thợ mộc. Khởi điểm hành trình (Ch.1).", theLucLienQuan: [], nguon: ["@c0001"] },
    { id: "huyet-dong-phong-nhan", name: "Huyệt động phong nhãn thiên nhiên", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Huyệt động trên vách núi đối diện sơn môn Hằng Nhạc Phái, nơi Vương Lâm rơi vào và nhặt được Thạch Châu.", detail: "Huyệt động thiên nhiên không lớn trên vách núi, cửa đón nắng. Bên trong đầy hài cốt chim thú bị lực hút giết. Trên vách sau có lỗ đen bằng nắm tay tối như mực — phát ra lực hút khổng lồ theo chu kỳ (hút khoảng một canh giờ, ngưng nửa canh giờ, lặp lại). Đệ tử Hằng Nhạc Phái xác nhận đây là 'phong nhãn thiên nhiên hình thành'. Vương Lâm nhặt được Thạch Châu tại đây.", theLucLienQuan: [], nguon: ["@c0007", "@c0008", "@c0009"] },
    { id: "chinh-vien-hang-nhac", name: "Chính viện Hằng Nhạc Phái", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Khu trung tâm của môn phái — nơi ở của nội môn đệ tử và trưởng lão; có vườn dược của Tôn Đại Trụ và đan phòng phát linh thạch hàng tháng.", detail: "Chính viện là khu quan trọng nhất, dành cho nội môn đệ tử và Nhị đại trưởng lão. Có vườn dược của Tôn Đại Trụ (mùi thuốc nồng đậm, được cấm chế giữ kín — cách một cánh cổng bên ngoài không ngửi thấy); nơi trồng Lam Tuyến Thảo và Tử Dạ Hoa. Đan phòng nằm ở đông môn nội viện — nơi phát linh thạch và Đoạt Linh Đan hàng tháng (mùng mười). Nội môn đệ tử theo 5 phó viện + 1 chính viện; ký danh đệ tử ở các viện phụ.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0012", "@c0016", "@c0017", "@c0020"] },
    { id: "son-tuyen-cua-dong", name: "Sơn tuyền cửa Đông (Hằng Nhạc Phái)", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Suối núi gần cửa Đông của môn phái — nơi Vương Lâm gánh nước và thổ nạp tu luyện; linh khí sung túc hơn trong phòng.", detail: "Cửa Đông là lối ra phía đông của môn phái, theo đường nhỏ đến sơn tuyền (suối giữa núi). Phong cảnh xinh đẹp, tiếng nước ào ào. Vương Lâm dùng làm chỗ thổ nạp hàng ngày (linh khí sung túc hơn trong phòng, dù không bằng vườn dược) và là nơi giả vờ 'chờ hồ lô trôi xuống' để đánh lừa Tôn Đại Trụ giám thị.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0011", "@c0017", "@c0018"] },
    { id: "tang-kinh-cac", name: "Tàng kinh các (Hằng Nhạc Phái)", cn: "", capDo: "cong-trinh", parentId: "chinh-vien-hang-nhac",
      blurb: "Nơi lưu trữ kinh thư, pháp thuật của Hằng Nhạc Phái; đệ tử nội môn có quyền vào tra cứu pháp thuật phù hợp với tu vi.", detail: "Vương Lâm ghé Tàng kinh các lần đầu sau khi đột phá Ngưng Khí tầng 1, tìm kiếm thêm pháp thuật để học (@c0025). Địa điểm trong khu chính viện.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0025"] },
    { id: "kiem-linh-cac", name: "Kiếm Linh các (Hằng Nhạc Phái)", cn: "", capDo: "cong-trinh", parentId: "chinh-vien-hang-nhac",
      blurb: "Nơi cất giữ phi kiếm của Hằng Nhạc Phái; cấm chế ba tầng kiên cố, thông thường yêu cầu tu vi Ngưng Khí tầng 4 trở lên mới được vào. Chứa phi kiếm di vật sư tổ quý giá, trong đó có Cự Phú — đệ nhất phi kiếm Triệu quốc.", detail: "Kiếm Linh Các là kho cất phi kiếm của Hằng Nhạc Phái. Tôn Đại Trụ dùng lệnh bài cá nhân để đưa VL vào lần đầu @c0038. Thông thường quy định cần Ngưng Khí tầng 4 trở lên mới được vào @c0039. Cấm chế ba tầng lồng vào nhau — gã mập bạch y trông coi quên gỡ: VL vào, kiếm khí nhận ra người xứng đáng, gã theo vào bị đánh văng hộc máu @c0039. Bên trong là đại sảnh lớn chứa hàng loạt phi kiếm, trong đó nổi bật Cự Phú (di vật sư tổ ngàn năm, cấm bán). VL lần đầu ghé @c0026 nhưng chi tiết chuyến đó không được nguyên tác mô tả rõ.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0026", "@c0038", "@c0039"] },
    { id: "khu-tap-vu-hang-nhac", name: "Khu tạp vụ Hằng Nhạc Phái", cn: "", capDo: "khu-vuc", parentId: "son-phong-hang-nhac",
      blurb: "Khu vực quản lý công việc hằng ngày của Hằng Nhạc Phái, do đệ tử ký danh vận hành; Vương Lâm được giao làm quản sự khu này từ @c0028.", detail: "Khu tạp vụ quản lý ~100 đệ tử ký danh, chịu trách nhiệm công việc hậu cần hàng ngày. Vương Lâm được Trương sư huynh giao chức quản sự (@c0028); tăng hạn mức nước từ 500 lên 1000 cân/ngày. VL được ở phòng riêng trên vách núi (@c0028). Đệ tử đặt biệt danh VL là 'Hắc Tâm vương' vì quản lý nghiêm (@c0030).", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0028", "@c0029", "@c0030"] },
    { id: "dong-mon-hang-nhac", name: "Đông môn Hằng Nhạc Phái", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Lối ra phía Đông của Hằng Nhạc Phái — Trương Hổ bỏ trốn qua đây sau khi giết Lưu sư huynh (@c0026).", detail: "Cổng phía Đông của môn phái; ghi nhận Trương Hổ rời đi qua đây sau vụ giết Lưu sư huynh (@c0026). Cũng là hướng VL đến sơn tuyền tu luyện (@c0017–@c0018).", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0026"] },
    { id: "son-tuyen-nui-sau", name: "Sơn tuyền núi sau (Hằng Nhạc Phái)", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Suối núi phía sau Hằng Nhạc Phái — nơi Vương Lâm phát hiện để tu luyện bí mật, yên tĩnh và ít người qua lại hơn sơn tuyền cửa Đông.", detail: "Vương Lâm phát hiện khu sơn tuyền phía núi sau khi đang tìm địa điểm tu luyện yên tĩnh (@c0024). Ít người qua lại hơn khu cửa Đông, thích hợp tu luyện bí mật. Tại đây VL thu thập thêm nước linh khí vào nhiều hồ lô; Trương Cuồng bắt gặp và VL phải bịa lý do qua mặt (@c0037).", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0024", "@c0037"] },
    { id: "hau-son-hang-nhac", name: "Hậu Sơn (Hằng Nhạc Phái)", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Không gian sơn cốc bí mật bên trong Hằng Nhạc Phái — không phải núi thật mà là động phủ do thủy tổ Nguyên Anh Kỳ mở ra ngàn năm trước. Linh khí nồng đậm, vách đá chi chít động phủ tu luyện.", detail: "Hậu Sơn không phải địa lý thực (không phải phần sau núi) mà là một không gian đặc biệt do thủy tổ Nguyên Anh Kỳ của Hằng Nhạc Phái tạo ra từ khoảng 1000 năm trước (@c0035). Chưởng môn Hằng Nhạc Phái dùng pháp thuật dịch chuyển tập thể đưa hơn bốn mươi nội môn đệ tử vào đây để bế quan 4 năm chuẩn bị cho đại hội Huyền Đạo Tông (@c0034–@c0035). Bên trong: sơn cốc với vách đá chi chít huyệt động tu luyện, linh khí sung túc, có sông linh khí chảy qua. Nhị sư huynh Trương Cuồng phụ trách quản lý và phân phối Đoạt Linh Đan (100 viên/người/năm) @c0035.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0034", "@c0035", "@c0037"] },
    { id: "duoc-vien", name: "Dược Viên (Tôn Đại Trụ)", cn: "", capDo: "khac", parentId: "chinh-vien-hang-nhac",
      blurb: "Vườn dược của Tôn Đại Trụ trong chính viện Hằng Nhạc Phái — linh khí cực nồng đậm, cấm chế nghiêm ngặt. Từ @c0038 Tôn Đại Trụ giao cho Vương Lâm ở đây để tiện quản lý.", detail: "Vườn dược của Tôn Đại Trụ nằm trong chính viện, cách ngoài một cánh cổng (ngoài cổng không ngửi được mùi thuốc). Bên trong linh khí cực nồng đậm — Vương Lâm tu luyện ở đây lần đầu ở @c0017, cảm nhận linh khí tốt hơn hẳn. Trồng nhiều thảo dược quý: Lam Tuyến Thảo, Tử Dạ Hoa (@c0012–@c0013). Sau @c0038, Tôn Đại Trụ chính thức giao VL cư trú và quản lý ở Dược Viên — nơi VL dùng lệnh bài đến Kiếm Linh Các @c0039.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0012", "@c0017", "@c0038", "@c0039"] },
    { id: "giao-dich-hoi", name: "Giao dịch hội bí mật (núi sâu)", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Chợ đen bí mật của đệ tử nội môn Hằng Nhạc Phái — tổ chức nơi núi sâu, 'vé vào' là viên Hóa Hình Hóa Thanh Đan. Nơi trao đổi phi kiếm, đan dược, pháp bảo và bí thuật ngoài quy định môn phái.", detail: "Giao dịch hội được tổ chức bí mật trong núi sâu, chỉ đệ tử nội môn được mời; mỗi người phải uống Hóa Hình Hóa Thanh Đan để che thân phận (giá 200 tờ tiên phù/viên). Hơn mười đệ tử ẩn dáng trao đổi đủ loại: phi kiếm, đan dược, pháp bảo, bí thuật @c0032. Vương Lâm và Vương Hạo tham gia lần đầu @c0032. Các giao dịch nổi bật: VL mua thuật giấu tu vi (5 khỏa linh đan @c0032); Tạo Hóa Đan bị đẩy giá 2000 Đoạt Linh Đan không ai mua @c0033; Trương Cuồng (nhị sư huynh, tử y) đổi khẩu quyết tầng 4–9 lấy Linh Khí Tuyền Thủy @c0033.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0031", "@c0032", "@c0033"] },
    { id: "thuong-tung-phong", name: "Thương Tùng Phong", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Đỉnh Thương Tùng — địa điểm tổ chức tỷ thí giữa Hằng Nhạc Phái và Huyền Đạo Tông (Ch.47–49). Bãi đấu ngoài trời trên đỉnh phong.", detail: "Tỷ thí 10 năm giữa Hằng Nhạc Phái và Huyền Đạo Tông diễn ra tại Thương Tùng Phong (@c0047). Các trận đấu được đánh dấu: Liễu Phong vs Triệu Long, Tôn Hạo vs Lý Sơn, Hứa Mộc vs Lữ Tung (gián đoạn), và đặc biệt VL vs Chu Bằng (3 lần) + VL vs Dương Nghị (@c0048). Sau đó VL đối đầu Âu Dương ngay tại khu vực này để lấy dịch độc Ngô Công (@c0049).", theLucLienQuan: ["Hằng Nhạc Phái", "Huyền Đạo Tông"], nguon: ["@c0047", "@c0048", "@c0049"] },
    { id: "hang-nhac-phong", name: "Hằng Nhạc Phong", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Đỉnh Hằng Nhạc — phong đỉnh trung tâm (hoặc nơi tiếp đón khách) của Hằng Nhạc Phái, nơi Huyền Đạo Tông cắm trại và thả nuôi Thiên Túc Ngô Công (linh thú rết khổng lồ) trong đợt đến thăm (Ch.40–50).", detail: "Thiên Túc Ngô Công được đặt tại khu này khi Huyền Đạo Tông đến (@c0040–@c0042). VL được giao nhiệm vụ săn mồi nuôi rết tại đây (@c0041). Đây cũng là nơi VL quan sát cơ chế độc của Ngô Công (@c0042).", theLucLienQuan: ["Hằng Nhạc Phái", "Huyền Đạo Tông"], nguon: ["@c0040", "@c0041", "@c0042", "@c0049"] },
    { id: "chu-tuoc-quoc-map", name: "Chu Tước Quốc", cn: "", capDo: "quoc-gia", parentId: null,
      blurb: "Quốc gia tu chân 6 cấp — quê hương của Tư Đồ Nam (cường giả lục cấp). Nước này đã tan rã/tiêu diệt (Tư Đồ Nam bị truy sát, thân hủy). Chi tiết vị trí địa lý chưa xác định trong nguyên tác tới Ch.50.", detail: "Chu Tước Quốc là quốc gia tu chân cấp 6 — cao hơn hẳn Tu Chân Quốc 5 cấp như Triệu quốc (@c0047). Tư Đồ Nam từng là cường giả lục cấp tại đây; bị truy sát toàn bộ, thân hủy, chỉ còn tinh hoa nguyên anh chui vào Thạch Châu. Liên quan: Thanh Long Quốc có Nguyên Anh kỳ từng khống chế Triệu quốc 500 năm trước (@c0047). Vị trí địa lý tương đối chưa rõ.", theLucLienQuan: ["Chu Tước Quốc"], nguon: ["@c0047"] },
    { id: "khe-nui-vut-xac", name: "Khe núi (xử lý xác Tôn Đại Trụ)", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Khe núi sâu gần sơn môn Hằng Nhạc Phái — nơi VL vứt xác Tôn Đại Trụ sau khi giết sư phụ. (@c0051)", detail: "Sau khi giết Tôn Đại Trụ, VL xử lý xác bằng cách vứt xuống khe núi sâu này để tránh bị phát hiện (@c0051). Vị trí chính xác trong khuôn viên Hằng Nhạc Phái, chi tiết địa lý không được nguyên tác mô tả thêm.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0051"] },
    { id: "cam-dia-thuong-tung-phong", name: "Cấm địa Thương Tùng Phong (Tàng Kinh Các bí mật)", cn: "", capDo: "khac", parentId: "son-phong-hang-nhac",
      blurb: "Khu cấm địa cao nhất Hằng Nhạc Phái tại Thương Tùng Phong — nơi cư trú của Trúc Cơ trưởng lão và Kết Đan Tổ sư; chứa Tàng Kinh Các bí mật. Phân biệt với Thương Tùng Phong tỷ thí (địa điểm tổ chức tỷ thí cùng tên nhưng khu vực công khai hơn).", detail: "Cấm địa Thương Tùng Phong là khu vực bí mật, cao hơn về cả địa lý lẫn quyền hạn so với khu tổ chức tỷ thí. Chỉ vào được bằng tử sắc ngọc bội đặc biệt (@c0052). Tàng Kinh Các bí mật tại đây có 4 tầng (tầng 1: Ngưng Khí kỳ pháp thuật; tầng 2: Trúc Cơ kỳ công pháp gồm Hỏa vân thuật, Địa độn thuật, Phong nhận phá, Cửu thiên hóa lôi thuật, Hoán tiên thuật; tầng 3–4 chưa được mô tả) @c0053. Kết Đan Tổ sư Hằng Nhạc Phái cũng cư trú tại đây @c0052.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0052", "@c0053"] },
    { id: "tuong-xa-son", name: "Tượng Xà sơn", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Căn cứ cũ của Lưu Văn Cử, cách Hằng Nhạc Phái mấy nghìn dặm. Được chọn làm căn cứ mới của nhóm tàn quân Hằng Nhạc Phái sau khi mất sơn môn (@c0055).", detail: "Tượng Xà sơn là nơi cũ của Lưu Văn Cử — địa điểm hắn chọn làm căn cứ mới sau khi Hằng Nhạc sơn môn thất thủ. Cách Hằng Nhạc Phái mấy nghìn dặm; di chuyển bằng ngọc giản đôi (vòng sáng dịch chuyển) nhanh hơn phi kiếm trong vài ngày (@c0055, @c0057). Nhóm tàn quân về đây bắt đầu bế quan theo quyết định của lão phu nhân họ Vương @c0057.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0055", "@c0057"] },
    { id: "nui-troc-be-quan-lan-2", name: "Núi trọc vô danh (hang bế quan lần 2)", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Núi trọc vô danh nơi Vương Lâm ẩn cư bế quan lần 2 trong 4 năm (@c0062–@c0064). Hang động có mạch nước bên trong, địa thế ẩn khuất xa người ở. Cách Hằng Nhạc phong không quá xa.", detail: "Vương Lâm tự tìm và chọn hang động trên núi trọc vô danh — tiêu chí: trong hang có mạch nước (để tự túc), địa thế ẩn khuất. Dùng Dẫn Lực thuật phá đá phong bế cửa hang trước khi vào bế quan (@c0062). Trong 4 năm bế quan tại đây: năm thứ 2 đạt viên mãn tầng 15 Ngưng Khí; 2 năm tiếp thất bại đột phá Trúc Cơ. Tư Đồ Nam hướng dẫn chế tác roi rắn Hắc Mộc Điều trong thời gian này. Ba đệ tử Huyền Đạo Tông vô tình vào khu vực (@c0062–@c0063) nhưng không biết hang bế quan của VL. VL rời đi @c0064.", theLucLienQuan: ["vuong-lam"], nguon: ["@c0062", "@c0063", "@c0064"] },
    { id: "thien-thuy-thanh", name: "Thiên Thủy thành", cn: "", capDo: "thanh-thi", parentId: "trieu-quoc",
      blurb: "Thành thị lớn nhất phía bắc Triệu Quốc. Cách Hằng Nhạc phong khoảng 1000 dặm về phía tây bắc. Vương Lâm đặt mục tiêu đến đây sau khi xuất môn @c0064; thành đang chuẩn bị đại hội khảo thí lớn (@c0065).", detail: "Thiên Thủy thành được mô tả là thành lớn nhất phía bắc Triệu Quốc (@c0064). Hằng Nhạc phong nằm ở vùng tây bắc Triệu quốc; Thiên Thủy thành cách đó khoảng 1000 dặm (@c0064). Đang chuẩn bị cho sự kiện đại hội khảo thí lớn khi VL đến gần (@c0065). Đoàn tiêu Uy Vũ tiêu cục đang hướng về đây (@c0064). Trận phục kích của nhóm Trương Hổ xảy ra trên đường đến thành này (@c0066–@c0068). Chi tiết thành phố không được mô tả thêm trong phạm vi Ch.61–70.", theLucLienQuan: [], nguon: ["@c0064", "@c0065"] },
    { id: "dang-gia-thanh", name: "Đằng Gia thành", cn: "", capDo: "thanh-thi", parentId: "trieu-quoc",
      blurb: "Thành trì của gia tộc Đằng Gia ở phía bắc Triệu Quốc — gia tộc ~500 năm tuổi là khách khanh của Vô Phong Cốc. Phí vào cổng: 1 hạ phẩm linh thạch; phí mỗi tháng: 1 trung phẩm linh thạch. Cấm đánh nhau và phi hành trong thành. Tin đồn có bậc Nguyên Anh kỳ trong thành.", detail: "Đằng Gia thành nằm ở phía bắc Triệu Quốc (@c0069–@c0070). Gia tộc Đằng Gia ~500 năm, là khách khanh của Vô Phong Cốc (thế lực lớn). Luật vào thành: 1 hạ phẩm linh thạch/lần; 1 trung phẩm linh thạch/tháng @c0070. Luật nội bộ nghiêm: cấm đánh nhau và phi hành — Đằng Hình Sâm phụ trách cưỡng chế @c0070. Người Trúc Cơ kỳ (~30 tuổi, mặt âm trầm) có mặt tại cổng thành; hai đệ tử Đằng gia gác cổng ở Ngưng Khí tầng 3 @c0070. Tin đồn có bậc Nguyên Anh kỳ trong thành @c0070. Vương Lâm bắt đầu tế luyện phi kiếm trong phòng khách điếm @c0070.", theLucLienQuan: ["dang-gia"], nguon: ["@c0069", "@c0070"] },
    { id: "dong-hoang-tan-thanh-co", name: "Đống hoang tàn thành cổ", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Ngôi thành cổ đổ nát trong rừng sương mù thâm sơn — quanh năm sương phủ, khí âm hàn đặc (Hoàng Âm chi địa). Vương Lâm ẩn cư bế quan lần 3 và tu luyện Hoàng Tuyền Thăng Khiếu Quyết tại đây Ch.73–79.", detail: "Thành cổ nằm sâu trong rừng phía Tây thâm sơn, quanh năm sương mù dày. Bên trong có cổ thụ ngàn năm, rắn rết độc, mãnh thú mạnh; khí âm hàn nồng đậm — Hoàng Âm chi địa. Đằng Hóa Nguyên từng dặn cháu không được vào rừng này @c0072. Trung tâm thành có pho tượng nam tử cự long cao trăm thước (nơi Ngô Vũ ẩn), với 8 viên thạch châu rải quanh thành để triệu pho tượng @c0079. Có một hố lớn đường kính ~ngàn thước tại chiểu trạch trung tâm — nơi khí âm hàn đạt trầm âm ngũ phẩm vào giữa giờ tý, là điểm tu luyện đỉnh trong khu vực @c0078. Nơi Vương Lâm đạt Trúc Cơ trung kỳ.", theLucLienQuan: ["vuong-lam", "ngo-vu"], nguon: ["@c0072", "@c0073", "@c0077", "@c0078", "@c0079"] },
    { id: "thi-am-tong-son-mon", name: "Thi Âm tông sơn môn", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Sơn môn ngầm của Thi Âm tông — cực tây Triệu quốc, dưới lòng đất bên trong chiểu trạch giữa bình nguyên quanh năm khí âm hàn bao phủ. Bên ngoài trống trải không lộ dấu vết.", detail: "Thi Âm tông Triệu quốc đặt sơn môn ngầm: trung tâm bình nguyên cực tây có sương mù bao phủ → trong sương là chiểu trạch rộng → dưới chiểu trạch là động khổng lồ với vô số nhánh thông đạo và động nhỏ chằng chịt dưới toàn bình nguyên @c0079. Động chính rộng bằng mấy đại điện Hằng Nhạc phái; có 8 cột gỗ tím dựng thành pháp trận tỏa sáng vàng (trận tiếp dẫn); trên mỗi cột có một đệ tử ngồi gác, sau lưng một quan tài @c0079. Huyệt động cột đá (nơi Mộc Ngung tu luyện): 5 cột đá mỗi cột một hỏa cầu Lam Viêm Ma hỏa @c0080. Trong sơn môn có Địa Âm chi địa — chỗ bế quan Ngô Vũ từng nhắc @c0079.", theLucLienQuan: ["thi-am-tong"], nguon: ["@c0079", "@c0080"] },
    { id: "huyet-dong-thi-am-tong", name: "Địa Âm chi địa (Thi Âm tông)", cn: "", capDo: "khac", parentId: "thi-am-tong-son-mon",
      blurb: "Huyệt động sâu nhất trong sơn môn Thi Âm tông — khí âm hàn cực đỉnh, là môi trường lý tưởng để tu luyện Hoàng Tuyền Thăng Khiếu Quyết. Chứa xác người khổng lồ bên cạnh cây tỏa âm hàn cổ đại.", detail: "Mộc Ngung dẫn VL xuống Địa Âm chi địa @c0084 để tu luyện Hoàng Tuyền Thăng Khiếu Quyết. Bên trong có xác người khổng lồ (cổ đại, không rõ danh tính) và cây tỏa âm hàn cổ đại; linh khí kỳ lạ từ xác người khổng lồ khiến linh lực VL dị biến lam đen @c0084, @c0090. Tư Đồ Nam không giải thích được hiện tượng này.", theLucLienQuan: ["thi-am-tong"], nguon: ["@c0084", "@c0090"] },
    { id: "quyet-minh-coc", name: "Quyết Minh Cốc", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Vùng đất đặc biệt tại Thiên Nam — có đại trận phong ấn Kết Đan kỳ trở lên không thể vào trong. La Sát dùng làm địa điểm nghi thức nâng thi khôi giả đan. Alias: 'Quang Minh Cốc' @c0090.", detail: "Quyết Minh Cốc nằm ở Thiên Nam khu vực — đại trận bảo vệ phong ấn tất cả tu sĩ Kết Đan kỳ trở lên không thể vào @c0086. Người Trúc Cơ kỳ vẫn vào được (do đó Đổ Trần với giả đan vào được). Đằng Hóa Nguyên canh bên ngoài @c0087–@c0089 không vào được. Bên trong có nhiều tu sĩ Trúc Cơ kỳ từ nhiều thế lực, trong đó có Chu Quyên (đệ tử Viên phái). La Sát dùng cốc này làm địa điểm nghi thức cần 20 vật dẫn để nâng thi khôi giả đan @c0086. Alias 'Quang Minh Cốc' được nhắc @c0090.", theLucLienQuan: ["thi-am-tong"], nguon: ["@c0086", "@c0087", "@c0088", "@c0089", "@c0090"] },
    { id: "thong-thien-thap", name: "Thông Thiên Tháp", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Công trình trung tâm Triệu quốc. Nơi Cự Ma tộc lấy Thất Thải pháp khí @c0083.", detail: "Thông Thiên Tháp được nhắc đến như công trình quan trọng tại trung tâm Triệu quốc @c0082. Cự Ma tộc (liên minh sứ giả đầu khổng lồ) lấy Thất Thải pháp khí từ đây @c0083; không rõ tháp do ai xây, mục đích gốc là gì.", theLucLienQuan: [], nguon: ["@c0082", "@c0083"] },
    { id: "vuc-ngoai-chien-truong", name: "Vực Ngoại chiến trường", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Khu vực Vực Ngoại vừa được dọn sạch @c0082, max 3 người được vào cùng lúc @c0083. Tư Đồ Nam khuyên VL ra đây tu luyện sau khi rời Quyết Minh Cốc @c0089; có gia tốc thời gian.", detail: "Vực Ngoại được Tư Đồ Nam nhắc đến như địa điểm tu luyện chiến lược @c0089 — vừa được dọn sạch, có gia tốc thời gian (giống Mộng Cảnh?). Giới hạn 3 người vào cùng lúc @c0083. Đây là địch đến tiếp theo của VL sau khi rời Quyết Minh Cốc.", theLucLienQuan: [], nguon: ["@c0082", "@c0083", "@c0089"] }
  ]
};

window.LIB_DATA["tien-nghich"].artifacts = {
  updatedAt: "2026-06-10",
  count: 31,
  artifacts: [
    {
      id: "thach-chau",
      name: "Thạch Châu",
      cn: "",
      aliases: ["Nghịch Thiên Châu"],
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Vượt phàm — thực chất là nơi ẩn náu của cường giả lục cấp Chu Tước Quốc (Tư Đồ Nam) @c0047; điều kiện nhận chủ: ngũ hành + ≥Anh Biến kỳ",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu, cất trong túi trữ vật (từ @c0020); thực ra Tư Đồ Nam ẩn bên trong; Mộc giai 3 lá @c0085",
      blurb: "Viên châu xám khắc hoa văn đám mây trắng, pháp bảo trục chính của cả bộ Tiên Nghịch. Alias: Nghịch Thiên Châu. Nhặt trong xác một con phi điểu ở huyệt động phong nhãn (@c0008). Tiết hạt sương dưới ánh nắng, sương trị lành vết thương. Nước ngâm châu biến thành nước chứa linh khí. Lai lịch thật (@c0047): Tư Đồ Nam — cường giả lục cấp Chu Tước Quốc bị truy sát, ẩn tinh hoa nguyên anh vào châu; dùng tinh hoa nguyên anh trợ giúp VL gần 30 năm. Điều kiện nhận chủ: đủ ngũ hành + tu vi ≥ Anh Biến kỳ. @c0085: Mộc giai hoàn thành 3 lá; @c0088: lần đầu phát hắc quang.",
      detail: "To bằng nắm tay trẻ con; bề ngoài ban đầu phủ huyết nhục, lau sạch lộ màu xám với hoa văn đám mây trắng, trông rất cổ. Công năng xác nhận tới Ch.50: (1) Tiết hạt sương khi gặp ánh nắng buổi sáng — sương trị lành vết thương thể chất (@c0008–@c0009). (2) Nước ngâm châu có dược tính; hạt sương sáng sớm kết trên châu cho hiệu quả tốt nhất; tiếp theo là nước suối; máu/mồ hôi gần như vô dụng (@c0012). (3) Châu tự hấp thu hơn phân nửa hạt sương — người dùng chỉ giữ được chưa đến một phần mười (@c0012). (4) Cường hóa thể chất khi uống nước ngâm châu thường xuyên (@c0011). (5) Nước ngâm châu biến thành nước chứa linh khí sung túc (Tôn Đại Trụ xác nhận @c0016). (6) Dị biến hút nước mạnh: hút toàn bộ nước/hơi ẩm trong phạm vi rộng kể cả nước trong cơ thể người — suýt giết Trương Hổ bằng đông lạnh (@c0014). (7) Làm héo rũ thảo dược lân cận (Lam Tuyến Thảo, Tử Dạ Hoa) dù cơ chế chưa xác nhận rõ (@c0012–@c0013). (8) Số đám mây khắc trên châu tăng khi hấp thu nước: 5 (@c0008) → 6 → 7 (@c0014) → 9 (@c0020); 10 là mức cuối. (9) KHÔNG GIAN MỘNG CẢNH (@c0023): khi châu đạt đủ 10 đám mây, mây tan — lộ vài chữ số bí ẩn; châu khai mở không gian bên trong. Thời gian trong Mộng Cảnh chạy nhanh gấp 10 lần thực tại; không có linh khí tự nhiên trong đó. Mỗi lần vào cần ≥5 canh giờ liên tục — dùng cách này VL tu được ~1 năm trong 2 tháng thực (@c0024–@c0025). (10) Hiệu quả nước ngâm châu: Lộ thủy (nước lộ sớm) > Tuyết thủy (tuyết nấu tan) > Tuyền thủy (nước suối) — phân cấp xác nhận @c0031. (11) LAI LỊCH THẬT (@c0047): Thạch Châu là nơi ẩn náu của Tư Đồ Nam — cường giả lục cấp Chu Tước Quốc bị truy sát thân hủy; tinh hoa nguyên anh sót lại chui vào châu. Tư Đồ Nam dùng tinh hoa nguyên anh trợ giúp VL củng cố tu vi suốt gần 30 năm. ĐIỀU KIỆN NHẬN CHỦ: đủ ngũ hành linh căn + tu vi ≥ Anh Biến kỳ. (12) MỘC GIAI (@c0085): Châu phát triển 3 lá Mộc giai (trước đó đã có 2 lá). (13) HẮC QUANG (@c0088): Lần đầu phát hắc quang bên trong Quyết Minh Cốc — dấu hiệu Mộc giai 3 lá hoạt động. Cự Ma tộc đang tìm kiếm 'Nghịch Thiên Châu' @c0083.",
      nguon: ["@c0008", "@c0009", "@c0010", "@c0011", "@c0012", "@c0014", "@c0016", "@c0020", "@c0023", "@c0024", "@c0025", "@c0031", "@c0046", "@c0047", "@c0083", "@c0085", "@c0088"]
    },
    {
      id: "that-thai-tuong-van",
      name: "Thất Thải Tường Vân",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Chưa xác định",
      soHuu: ["ton-dai-tru"],
      trangThai: "Tôn Đại Trụ đang sở hữu",
      blurb: "Pháp bảo bay của Tôn Đại Trụ — vân mây bảy màu, tốc độ cực nhanh khiến phàm nhân không thở nổi. Dùng để di chuyển và lục soát phòng Vương Lâm.",
      detail: "Vân/mây bảy màu lóng lánh, tốc độ di chuyển cực nhanh. Khi Vương Lâm (phàm nhân) đứng trên đó di chuyển thì hít thở không nổi. Tôn Đại Trụ dùng để đến phòng Vương Lâm và kết hợp thần thức lục soát tịch thu đồ vật (@c0016). Trước đó hắn bay bằng 'đám mây bảy màu' để di chuyển trong tông môn (@c0013).",
      nguon: ["@c0013", "@c0016"]
    },
    {
      id: "ho-lo-nuoc-linh-khi",
      name: "Hồ Lô (nước linh khí)",
      cn: "",
      category: "vat-chua",
      categoryLabel: "Vật chứa",
      phamCap: "Phàm vật (hồ lô hoang dại) nhưng nội dung bên trong có giá trị tu luyện",
      soHuu: ["vuong-lam"],
      trangThai: "VL còn ba hồ lô sương sớm (sương đông đặc) trong túi trữ vật (@c0020); hồ lô bị tịch thu (@c0016) đã cạn linh khí",
      blurb: "Hồ lô hoang dại Vương Lâm tìm trong núi, dùng đựng nước suối ngâm Thạch Châu tạo thành nước chứa linh khí sung túc. Bị Tôn Đại Trụ phát hiện và tịch thu; VL sau lấy lại ba hồ lô đựng sương sớm.",
      detail: "Vương Lâm tìm hồ lô hoang dại trong núi để đựng và phân loại các loại hạt sương/nước suối ngâm châu. Nước suối ngâm Thạch Châu bên trong chứa linh khí cực sung túc — phàm nhân uống không hấp thụ được linh khí nhưng tinh thần thoải mái; nếu dùng luyện đan dược thì hiệu quả rất tốt (@c0016). Tôn Đại Trụ ngửi nước trong hồ lô thì 'sắc mặt đại biến', tra hỏi gắt nguồn gốc (@c0016). Linh khí trong hồ lô bị tịch thu cạn dần và mất hết trong ~1 tháng (@c0019). Ba hồ lô sương sớm VL lấy lại: sương bên trong đã đông đặc; VL dự định dùng để ép đám mây thứ mười trên châu (@c0020).",
      nguon: ["@c0012", "@c0016", "@c0019", "@c0020"]
    },
    {
      id: "thien-ly-phu",
      name: "Thiên Lý Phù",
      cn: "",
      category: "tien-phu",
      categoryLabel: "Tiên phù",
      phamCap: "Hạ phẩm (rất thấp kém trong hệ tu tiên)",
      soHuu: ["vuong-lam"],
      trangThai: "VL đã dùng hết trong phạm vi Ch.12–14; Lưu sư huynh tặng thêm một tờ (@c0015)",
      blurb: "Tiên phù di chuyển cấp thấp nhất: dán ở đùi để tăng tốc độ cho phàm nhân, phát bạch quang chói mắt, dã thú thấy tránh xa. Tôn trưởng lão cấp cho ký danh đệ tử về thăm nhà.",
      detail: "Tờ giấy vàng trông như giấy thường, dùng được hai lần, dán ở đùi. Khi kích hoạt: dòng khí nóng hầm hập từ phù tụ ở hai chân, bạch quang lóng lánh chói mắt; từ xa nhìn như tiên nhân. Dã thú nhìn thấy bạch quang đều rời xa. Tốc độ đủ để vượt núi rừng trong một đêm (@c0013). Ưu điểm là dùng đơn giản; hạ phẩm nên một số nội môn đệ tử tích góp để giao dịch bên ngoài (@c0012).",
      nguon: ["@c0012", "@c0013", "@c0015"]
    },
    {
      id: "tham-than-tien-phu",
      name: "Tham Thân tiên phù",
      cn: "",
      category: "tien-phu",
      categoryLabel: "Tiên phù",
      phamCap: "Hạ phẩm (tiêu hao dùng một lần)",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm thu được nhiều từ đệ tử ký danh (@c0029); cho Vương Hạo mượn một tờ (@c0030)",
      blurb: "Tiên phù hỗ trợ tu luyện; được đệ tử ký danh dùng làm vật đút lót quản sự khu tạp vụ để đổi lấy suất ký danh ưu tiên.",
      detail: "Loại phù hỗ trợ tu luyện thể thất thường được dùng ở cấp độ ký danh đệ tử Hằng Nhạc Phái. Các đệ tử ký danh dùng để đút lót Vương Lâm đổi lấy vị trí ưu tiên trong danh sách ký danh (@c0029). Vương Hạo sau đó đến mượn một tờ từ VL để hỗ trợ tu luyện đột phá Ngưng Khí tầng 1 (@c0030). Chi tiết hiệu quả cụ thể chưa được nguyên tác mô tả rõ.",
      nguon: ["@c0029", "@c0030"]
    },
    {
      id: "cuon-giay-vang",
      name: "Cuộn giấy vàng bí ẩn",
      cn: "",
      category: "khac",
      categoryLabel: "Bí ẩn",
      phamCap: "Chưa xác định",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu (@c0026); nội dung chưa được giải mã (@c0027)",
      blurb: "Cuộn giấy vàng VL nhặt được tại hiện trường vụ Trương Hổ giết Lưu sư huynh. Lai lịch và nội dung bí ẩn, chưa hé lộ.",
      detail: "Vương Lâm tình cờ nhặt được cuộn giấy này tại hiện trường vụ Trương Hổ giết Lưu sư huynh rồi bỏ trốn (@c0026). VL giữ cuộn giấy nhưng tới Ch.27 chưa rõ nội dung bên trong (@c0027). Lai lịch thật và tác dụng chưa được nguyên tác giải thích.",
      nguon: ["@c0026", "@c0027"]
    },
    {
      id: "cu-phu",
      name: "Cự Phú",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Phi kiếm",
      phamCap: "Di vật sư tổ (cấp cao, cấm buôn bán)",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu (lấy từ Kiếm Linh Các @c0039)",
      blurb: "Phi kiếm đệ nhất Triệu quốc — khối kim loại to bằng cẳng tay, mạ hoàng kim, khảm 2 viên kim cương to bằng hạt đậu ở tay cầm, tua bằng vàng. Di vật sư tổ Hằng Nhạc Phái ngàn năm, cấm buôn bán.",
      detail: "Cự Phú là phi kiếm đệ nhất trong số phi kiếm của Hằng Nhạc Phái, cất trong Kiếm Linh Các ngàn năm nay. Hình dáng: khối kim loại to bằng cẳng tay người lớn, dài khoảng một xích; mạ hoàng kim bóng loáng, tay cầm khảm 2 viên kim cương to bằng hạt đậu, đuôi chuôi kết tua vàng. Di vật sư tổ Hằng Nhạc Phái (thủy tổ), quy định cấm buôn bán. Kiếm khí của Cự Phú 'tự chọn người xứng đáng' — gã mập trông coi theo VL vào cấm chế bị đánh văng hộc máu, trong khi VL vào hoàn toàn tự nhiên (@c0039). Tôn Đại Trụ kinh ngạc vì VL dám chọn vật này, khen có đảm lược (@c0039).",
      nguon: ["@c0039"]
    },
    {
      id: "song-nguyet-hoan",
      name: "Song Nguyệt Hoàn",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Di vật tiền bối 300 năm (cấp cao)",
      soHuu: [],
      trangThai: "Giải thưởng giải nhất tỷ thí cuối năm Hằng Nhạc Phái (@c0034); người giành được chưa xác định trong nghiên cứu tới Ch.40",
      blurb: "Trọng bảo giải nhất tỷ thí cuối năm Hằng Nhạc Phái — di vật tiền bối 300 năm, vừa công vừa thủ. Tiết lộ @c0034 khi chưởng môn công bố kế hoạch tập huấn chuẩn bị cho đại hội Huyền Đạo Tông.",
      detail: "Song Nguyệt Hoàn là pháp bảo hai chức năng: tấn công và phòng thủ. Di vật tiền bối 300 năm trước. Được đặt làm giải nhất cuộc tỷ thí nội bộ cuối năm của Hằng Nhạc Phái — cuộc tỷ thí mà Trương sư huynh (hắc y, tầng 5) giành chiến thắng theo ghi nhận @c0034. Chi tiết cơ chế sử dụng chưa được nguyên tác mô tả.",
      nguon: ["@c0034"]
    },
    {
      id: "tu-nhac-tien-kiem",
      name: "Tử Nhạc Tiên Kiếm",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Tiên kiếm",
      phamCap: "Cấp chưởng môn (Nguyên Anh kỳ hoặc tương đương)",
      soHuu: ["hoang-long-chan-nhan"],
      trangThai: "Bị Phác Nam Tử đoạt, giao cho Âu Dương @c0054; Hoàng Long ai điếu 'kiếm còn người còn' @c0056",
      blurb: "Bảo kiếm của Hoàng Long chân nhân — chưởng môn Hằng Nhạc Phái. Chứa Long Hồn bên trong, khi thi triển hóa thành tử long uy mãnh. Bị Phác Nam Tử đoạt lấy khi Hằng Nhạc sơn môn thất thủ @c0054.",
      detail: "Tử Nhạc Tiên Kiếm là bảo kiếm của Hoàng Long chân nhân, chưởng môn Hằng Nhạc Phái. Khi kích hoạt, Long Hồn bên trong hóa thành tử long dài vài trượng — đủ sức uy hiếp và cân bằng với Thiên Túc Ngô Công (rết khổng lồ ~100m, hộ sơn linh thú Huyền Đạo Tông) @c0040. Khi Phác Nam Tử (Nguyên Anh kỳ, Huyền Đạo Tông) tấn công Hằng Nhạc, kiếm bị đoạt và giao cho Âu Dương — khi được tung ra, một cự long tử sắc xuất hiện @c0054. Hoàng Long ai điếu 'kiếm còn người còn' @c0056.",
      nguon: ["@c0040", "@c0054", "@c0056"]
    },
    {
      id: "tieu-kiem-that-thai",
      name: "Tiểu Kiếm thất thải",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Phi kiếm",
      phamCap: "Thất thải (7 màu — cấp cao trong phi kiếm)",
      soHuu: ["ton-dai-tru"],
      trangThai: "Tôn Đại Trụ đang sở hữu (@c0038)",
      blurb: "Phi kiếm bảy màu bảy thải của Tôn Đại Trụ. Lóng lánh bảy sắc, bay nhanh đến mức người phàm không thở nổi. Tôn Đại Trụ dùng để di chuyển và giới thiệu với Vương Lâm khi nhận làm đệ tử chân chính.",
      detail: "Tiểu Kiếm thất thải là pháp bảo phi kiếm cá nhân của Tôn Đại Trụ, tức chính là 'đám mây bảy màu' mà lão hay sử dụng để bay. Tôn Đại Trụ giới thiệu với Vương Lâm và khoe uy lực @c0038. Đây cũng chính là Thất Thải Tường Vân mà nguyên tác từng đề cập ở @c0013–@c0016 khi Tôn di chuyển trong môn phái.",
      nguon: ["@c0013", "@c0016", "@c0038"]
    },
    {
      id: "thien-tuc-ngo-cong",
      name: "Thiên Túc Ngô Công",
      cn: "",
      category: "linh-thu",
      categoryLabel: "Linh thú",
      phamCap: "Hộ sơn linh thú (cấp Kết Đan hoặc cao hơn)",
      soHuu: ["huyen-dao-tong"],
      trangThai: "Huyền Đạo Tông sử dụng; VL đã lấy dịch độc @c0049 và Ngô Công được trả lại",
      blurb: "Linh thú hộ sơn của Huyền Đạo Tông — rết khổng lồ trăm chân, thân dài hàng trượng, xuất hiện khi đoàn Huyền Đạo Tông đến Hằng Nhạc Phái gây khiếp đảm toàn môn. Bị Tử Nhạc Tiên Kiếm uy hiếp (@c0040). Dịch độc màu đen của nó mạnh theo tỉ lệ kích thước đầu (@c0042); VL lấy được dịch độc tại Ch.49 để trị bệnh phong hàn cho phụ thân.",
      detail: "Thiên Túc Ngô Công là linh thú hộ sơn của Huyền Đạo Tông. Hình dáng: rết khổng lồ trăm chân, thân dài ước tính cỡ trăm trượng; xuất hiện theo đoàn khách Huyền Đạo Tông đến Hằng Nhạc Phái @c0039. Hoàng Long chân nhân thi triển Tử Nhạc Tiên Kiếm hóa tử long để uy hiếp — hai bên cân bằng @c0040. Bí pháp khống chế là vật trao đổi trong cược tỷ thí @c0040. VL một mình vào chuồng Ngô Công @c0041: bị Ngô Công phun hàn khí nhưng VL vận linh lực hóa giải dễ dàng; Ngô Công kinh ngạc. VL quan sát cơ chế độc @c0042: Ngô Công phun hàn khí + khạc khí đen độc hại; độc tỉ lệ thuận kích thước đầu; khí đen làm tan thú nhỏ thành vũng máu. Ch.49: VL vận Dẫn Lực thuật hóa hai bàn tay hữu hình, khống chế Ngô Công ép thổ dịch độc màu đen vào bình ngọc; Ngô Công bị kiểm soát dù Âu Dương can thiệp. VL thu dịch độc, đổi bình nước sông hóa giải xung đột (@c0049).",
      nguon: ["@c0039", "@c0040", "@c0041", "@c0042", "@c0049"]
    },
    {
      id: "tao-hoa-dan",
      name: "Tạo Hóa Đan",
      cn: "",
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Trân quý (giá 2000 viên Đoạt Linh Đan — không ai mua nổi @c0033)",
      soHuu: [],
      trangThai: "Lưu thông trong giới tu chân; từng rao bán ở giao dịch hội @c0032",
      blurb: "Đan dược tăng tốc hấp thu linh khí: dùng liên tục 2 tháng, linh khí hấp thu gấp vài lần bình thường. Được rao bán tại giao dịch hội bí mật của nội môn đệ tử Hằng Nhạc Phái — giá 2000 Đoạt Linh Đan, không ai mua nổi.",
      detail: "Tạo Hóa Đan: uống liên tục 2 tháng, trong thời gian đó tốc độ hấp thu linh khí tăng vài lần so với bình thường (@c0032). Giá trị rất cao — tại giao dịch hội đẩy lên 2000 viên Đoạt Linh Đan, toàn bộ người tham dự không ai có đủ (@c0033). Cơ chế hoạt động và nguồn gốc chưa được nguyên tác mô tả chi tiết. Liên quan đến hệ thống thăng cấp đặc biệt: hắc y được thưởng +1 viên, tử y được thưởng +2 viên khi thăng cấp @c0032.",
      nguon: ["@c0032", "@c0033"]
    },
    {
      id: "hoa-hinh-hoa-thanh-dan",
      name: "Hóa Hình Hóa Thanh Đan",
      cn: "",
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Hạ phẩm (giá 200 tờ tiên phù)",
      soHuu: [],
      trangThai: "Lưu thông; Vương Hạo mua 2 viên dùng làm vé vào giao dịch hội @c0031–@c0032",
      blurb: "Đan dược che giấu thân phận: uống vào thay đổi hình dáng và âm thanh, che giấu trước mắt người dưới Trúc Cơ. Người Trúc Cơ kỳ trở lên vẫn có thể nhìn xuyên qua.",
      detail: "Hóa Hình Hóa Thanh Đan dùng để thay đổi diện mạo và giọng nói tạm thời — che giấu thân phận khỏi những người tu vi dưới Trúc Cơ. Người đạt Trúc Cơ kỳ trở lên vẫn nhìn thấu được (@c0031). Giá tiêu chuẩn: 200 tờ tiên phù/viên; Vương Hạo mua 2 viên làm 'vé' vào giao dịch hội (@c0031). VL và Vương Hạo đều uống trước khi vào hội @c0032. Nhờ đó VL không bị Trương Cuồng nhận mặt tại giao dịch hội @c0033–@c0035.",
      nguon: ["@c0031", "@c0032"]
    },
    {
      id: "doat-linh-dan",
      name: "Đoạt Linh Đan",
      cn: "",
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Phổ thông (đơn vị tiêu chuẩn giao dịch trong Hằng Nhạc Phái)",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm nhận định kỳ; Trương Cuồng phát 100 viên/người/năm tại Hậu Sơn @c0035",
      blurb: "Đan dược hỗ trợ tu luyện phổ thông, đồng thời là đơn vị tiêu chuẩn trong giao dịch nội bộ Hằng Nhạc Phái. Phát định kỳ cho đệ tử nội môn; tại Hậu Sơn Trương Cuồng phát 100 viên/người/năm.",
      detail: "Đoạt Linh Đan là đan dược hỗ trợ tu luyện cơ bản của Hằng Nhạc Phái. Ngoài công dụng tu luyện, nó còn là đơn vị đo giá trị chuẩn trong các giao dịch nội bộ tu chân giới (@c0032). Tôn Đại Trụ cấp cho VL định kỳ (số lượng không xác định). Tại Hậu Sơn trong 4 năm tập huấn: Trương Cuồng phát 50 lọ × 100 viên/người, tức 100 viên/người/năm (@c0035). VL sử dụng loại này thường xuyên trong tu luyện.",
      nguon: ["@c0017", "@c0032", "@c0035"]
    },
    {
      id: "phich-lich-dan",
      name: "Phích Lịch Đạn",
      cn: "",
      category: "dan-duoc",
      categoryLabel: "Đan dược — Vũ khí",
      phamCap: "Hạ phẩm (có thể mua tại chợ; Lý Sơn bán công khai @c0044)",
      soHuu: ["ly-son", "vuong-lam"],
      trangThai: "VL mua 3 viên @c0045; đã dùng một số trong tỷ thí @c0048",
      blurb: "Đạn nổ bán công khai tại chợ của Lý Sơn (Huyền Đạo Tông). Thực chất là đạn gian: không tự nổ — chỉ nổ khi Lý Sơn ngầm phóng linh khí ba động kích hoạt. VL phát hiện bí mật này qua thần thức (@c0044–@c0045), nuốt đạo thần thức Lý Sơn bên trong để tự mình kích nổ (@c0046).",
      detail: "Phích Lịch Đạn ngoài mặt rao bán như vũ khí nổ thông thường. Bí mật: bên trong mỗi viên có đạo thần thức của Lý Sơn; Lý Sơn phóng linh khí ba động từ xa mới kích hoạt nổ — không có Lý Sơn can thiệp thì đạn không nổ (@c0044). VL dùng thần thức phát hiện cơ chế này (@c0044). Mua 3 viên từ Lý Sơn (@c0045). Sau đó VL bao thần thức vào đạn, phát hiện đạo thần thức Lý Sơn bên trong, nuốt đạo thần thức đó — từ đó VL tự kích nổ được (@c0046). Dùng trong tỷ thí hạ Chu Bằng 3 lần và Dương Nghị (@c0048).",
      nguon: ["@c0044", "@c0045", "@c0046", "@c0048"]
    },
    {
      id: "dich-doc-ngo-cong",
      name: "Dịch Độc Thiên Túc Ngô Công",
      cn: "",
      category: "nguyen-lieu",
      categoryLabel: "Nguyên liệu đặc biệt",
      phamCap: "Quý hiếm — lấy trực tiếp từ linh thú cấp cao",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm thu được vào bình ngọc @c0049",
      blurb: "Dịch độc màu đen do Thiên Túc Ngô Công khạc ra — tan thú nhỏ thành vũng máu. Độc tỉ lệ thuận kích thước đầu (@c0042). VL lấy để trị bệnh phong hàn nhập thể cho phụ thân (@c0043, @c0049). Thu được bằng cách ép Ngô Công bằng Dẫn Lực thuật, bỏ vào bình ngọc.",
      detail: "Ngô Công khạc khí đen sau khi phun hàn khí — khí đen làm tan con thú nhỏ thành vũng máu (@c0042). Độc tố tỉ lệ thuận kích thước đầu Ngô Công (@c0042). VL muốn lấy dịch độc này khi nghe Vương Hạo kể về bệnh phong hàn nhập thể của phụ thân (@c0043). Ch.49: VL vận Dẫn Lực thuật hóa hai bàn tay hữu hình, khống chế Ngô Công ép thổ dịch độc màu đen vào bình ngọc; thu được trước sự can thiệp của Âu Dương (@c0049). Công dụng trị phong hàn chưa được xác nhận trong nguyên tác (là mục đích của VL).",
      nguon: ["@c0042", "@c0043", "@c0049"]
    },
    {
      id: "nhan-tho-dan",
      name: "Nhân Thọ Đan",
      cn: "",
      category: "dan-duoc",
      categoryLabel: "Đan dược — Tà đạo",
      phamCap: "Bí ẩn (luyện bằng dược lô người sống)",
      soHuu: ["lu-van-kiet"],
      trangThai: "Lữ Vân Kiệt đang luyện; Vương Hạo được cứu trước khi hoàn thành @c0050",
      blurb: "Đan dược tà đạo — luyện bằng cách dùng người làm dược lô (ép tu Lô Hỏa Khai Đỉnh Đại Pháp). Mục đích: đổi thêm thọ mệnh cho người tu luyện bị kẹt cảnh giới. Lữ Vân Kiệt luyện để kéo dài thọ mệnh do bị kẹt tầng 6 suốt 25 năm. (@c0043)",
      detail: "Nhân Thọ Đan cần nguyên liệu đặc biệt: người làm dược lô tu Lô Hỏa Khai Đỉnh Đại Pháp — tích năng lượng sống rồi bị thu hết. Người làm dược lô chỉ còn ~1 năm sống (@c0043). Lữ Vân Kiệt bị kẹt tầng 6 suốt 25 năm, lên kế hoạch dùng Vương Hạo làm dược lô. Vương Hạo được VL cứu trước khi quá trình hoàn tất (@c0050). Hồng Kiểm lão giả xác nhận Lô Hỏa Khai Đỉnh là thật (@c0050). Công dụng Nhân Thọ Đan chưa được mô tả chi tiết — chỉ biết dùng để kéo dài thọ mệnh.",
      nguon: ["@c0043", "@c0050"]
    },
    {
      id: "tam-thi-tuyen-trung-thao",
      name: "Tam Thi Tuyến Trùng thảo",
      cn: "",
      category: "nguyen-lieu",
      categoryLabel: "Nguyên liệu — Thảo dược độc",
      phamCap: "Đặc dị (không màu không mùi, 100% khống chế người dưới Trúc Cơ)",
      soHuu: ["ton-dai-tru"],
      trangThai: "Tôn Đại Trụ dùng để âm mưu khống chế VL @c0051; bị phá giác, Tôn Đại Trụ chết",
      blurb: "Thảo dược đặc biệt không màu không mùi, tỷ lệ khống chế 100% đối với người dưới Trúc Cơ kỳ. Nguyên liệu để luyện Khôi Lỗi. Tôn Đại Trụ dùng để âm mưu biến VL thành con rối vĩnh viễn; bị phát giác, dẫn đến Tôn Đại Trụ bị giết. (@c0051)",
      detail: "Tam Thi Tuyến Trùng thảo là thảo dược cực kỳ đặc biệt: không màu, không mùi, khiến người khó phát hiện. Tỷ lệ khống chế người dưới Trúc Cơ kỳ đạt 100% — người bị dùng sẽ mất ý thức tự chủ, bị điều khiển vĩnh viễn. Đây cũng là nguyên liệu để luyện Khôi Lỗi (@c0051). Tôn Đại Trụ dùng thảo dược này âm mưu biến VL thành con rối, nhưng bị VL phát giác — dẫn đến trận phản sát, Tôn chết (@c0051).",
      nguon: ["@c0051"]
    },
    {
      id: "hoa-linh-thao",
      name: "Hóa Linh thảo",
      cn: "",
      category: "nguyen-lieu",
      categoryLabel: "Nguyên liệu — Thảo dược",
      phamCap: "Chưa xác định",
      soHuu: ["ton-dai-tru"],
      trangThai: "Tôn Đại Trụ dùng để tán công VL (ức chế tu vi) @c0051",
      blurb: "Thảo dược có tác dụng làm phân tán linh khí — gây 'tán công', ức chế khả năng tu luyện của đối tượng. Tôn Đại Trụ dùng để kìm hãm VL trước khi tiến hành kế hoạch Tam Thi Tuyến Trùng thảo. (@c0051)",
      detail: "Hóa Linh thảo khiến linh khí trong người đối tượng phân tán, không tập trung được — hiệu quả tu luyện và vận công bị suy giảm đáng kể. Tôn Đại Trụ dùng để ức chế VL kết hợp với âm mưu Tam Thi Tuyến Trùng thảo (@c0051). Chi tiết cơ chế và nguồn gốc chưa được nguyên tác mô tả thêm.",
      nguon: ["@c0051"]
    },
    {
      id: "phi-kiem-co-quai",
      name: "Phi kiếm cổ quái (của Bạch Triển)",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Chưa xác định (cấp cao — nguyên sở hữu của đệ tử Kết Đan kỳ; có linh tính mạnh)",
      soHuu: ["bach-trien", "vuong-lam"],
      trangThai: "Tế luyện thành công bản mệnh pháp bảo @c0071; Vương Lâm đang sở hữu",
      blurb: "Phi kiếm cổ quái nguyên của Bạch Triển. Đặc tính dị thường: phun hư ảnh đỏ khi phản công, thuấn di tức thời, màu sắc biến đổi theo uy lực. Linh tính mạnh kháng cự tế luyện của chủ mới. Vương Lâm đoạt được sau khi diệt Bạch Triển (@c0068); tế luyện thành công bản mệnh phi kiếm bằng Huyết Luyện thuật @c0071.",
      detail: "Phi kiếm ngoại hình cổ quái — chưa mô tả rõ hình dạng cụ thể. Khi chiến đấu: có thể phun ra hư ảnh đỏ để phản công độc lập; có khả năng thuấn di tức thời (dịch chuyển bất ngờ); màu sắc biến đổi theo mức uy lực sử dụng (@c0067). Linh tính rất mạnh — kháng cự tế luyện của Vương Lâm dữ dội tại Đằng Gia thành (@c0070). Cơ chế màu sắc và thuấn di có liên hệ với nhau (VL mới phát hiện @c0070). Tư Đồ Nam đánh giá vỏ kiếm đen mới là bảo bối chính, phi kiếm chỉ là thứ yếu (@c0068). @c0071: VL dùng Huyết Luyện thuật nhỏ máu lên kiếm, vượt qua kháng cự, phi kiếm đổi màu đen nhánh và chính thức thành bản mệnh pháp bảo.",
      nguon: ["@c0067", "@c0068", "@c0070", "@c0071"]
    },
    {
      id: "vo-kiem-den",
      name: "Vỏ kiếm đen (bảo bối thật của Bạch Triển)",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Vượt phàm — Tư Đồ Nam xác nhận đây là bảo bối thật sự (phi kiếm chỉ thứ yếu) @c0068",
      soHuu: ["bach-trien", "vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu từ @c0068; đang tế luyện lại bằng hàn hỏa tự chế tại Địa Âm chi địa @c0085–@c0086 — tiến độ 4/10 phần",
      blurb: "Vỏ đựng phi kiếm cổ quái, màu đen. Tư Đồ Nam xác nhận đây là bảo bối thật sự, không phải phi kiếm. Công năng đặc biệt: vô hiệu hóa hoàn toàn Dẫn Lực Thuật của Vương Lâm — lần đầu tiên một pháp bảo làm được điều này (@c0067). Màu vỏ biến đổi khi phi kiếm xuất nhập: lục → lam → đen → hồng tùy trạng thái linh lực của phi kiếm bên trong (@c0075). @c0085: VL bắt đầu đúc lại bằng hàn hỏa tự chế tại Địa Âm chi địa; tiến độ 4/10 phần.",
      detail: "Vỏ kiếm màu đen, không có chi tiết thêm về hình dạng ban đầu. Khi Bạch Triển đút phi kiếm vào vỏ, Dẫn Lực Thuật của VL — vốn từng chưa bao giờ bị phá — hoàn toàn vô hiệu (@c0067). Tư Đồ Nam, sau khi Bạch Triển chết và VL thu cả hai, nói rõ: 'vỏ kiếm mới là bảo bối thật' (@c0068). Cơ chế vô hiệu hóa Dẫn Lực Thuật chưa được giải thích thêm. @c0071: phi kiếm tế luyện thành bản mệnh, kết nối với vỏ sâu hơn. @c0075: quan sát thấy màu vỏ biến đổi theo trạng thái linh lực phi kiếm — lục (bình thường) → lam (linh lực tăng) → đen (sung mãn) → hồng (kích hoạt tối đa). VL đang sở hữu cùng phi kiếm. @c0085–@c0086: VL dùng hàn hỏa tự chế trong Địa Âm chi địa để đúc lại vỏ kiếm; tiến độ 4/10 phần khi rời Thi Âm tông.",
      nguon: ["@c0067", "@c0068", "@c0071", "@c0075", "@c0085", "@c0086"]
    },
    {
      id: "roi-ran-hac-moc-dieu",
      name: "Roi rắn Hắc Mộc Điều",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo (tự chế)",
      phamCap: "Chưa xác định",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu",
      blurb: "Vũ khí cận chiến tự chế từ Hắc Mộc Điều trong 4 năm bế quan lần 2 — dưới sự chỉ dẫn của Tư Đồ Nam (từ Nghịch Thiên Châu). Lần đầu dùng trong trận chiến với Bạch Triển (@c0067).",
      detail: "Vật liệu: Hắc Mộc Điều (loại mộc vật mang đặc tính tà?). Tư Đồ Nam hướng dẫn VL chế tác trong suốt 4 năm bế quan lần 2. Hình dạng roi rắn — linh hoạt. Chi tiết công năng chưa được mô tả rõ ngoài việc được VL dùng như vũ khí cận chiến khi Dẫn Lực Thuật bị vô hiệu hóa bởi vỏ kiếm đen (@c0067).",
      nguon: ["@c0067"]
    },
    {
      id: "nhan-sam-500-nam",
      name: "Nhân sâm 500 năm",
      cn: "",
      category: "nguyen-lieu",
      categoryLabel: "Nguyên liệu — Dược thảo",
      phamCap: "Linh dược quý (500 năm linh khí)",
      soHuu: ["uy-vu-tieu-cuc"],
      trangThai: "Đoàn tiêu Uy Vũ tiêu cục vận chuyển đến Thiên Thủy thành @c0064–@c0066; Vương Lâm tạm đoạt rồi trả lại @c0066",
      blurb: "Nhân sâm linh dược 500 năm tuổi — đặt trong hộp gấm, mục tiêu của vụ phục kích do Trương Hổ ('Đại đương gia') dẫn đầu. Vương Lâm tạm đoạt hộp bằng pháp lực rồi nhận ra sai người và trả lại (@c0066).",
      detail: "Nhân sâm 500 năm được đặt trong hộp gấm, đoàn tiêu Uy Vũ chuyên chở về Thiên Thủy thành (@c0064). Trong trận phục kích, 'Đại đương gia' (Trương Hổ) yêu cầu nộp hộp; Liễu Tam đặt xuống đất đàm phán. VL dùng pháp lực hút hộp vào tay mình trước khi Trương Hổ lấy được (@c0066). Sau khi nhận ra không phải người đang tìm, VL trả lại nguyên vẹn (@c0066). Giá trị thực tế và công dụng chưa được mô tả trong văn.",
      nguon: ["@c0064", "@c0066"]
    },
    {
      id: "phap-bao-huyen-thuat-hat-chau",
      name: "Pháp bảo huyễn thuật (hạt châu nhỏ)",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Huyễn thuật",
      phamCap: "Chưa xác định",
      soHuu: ["a-ngoc", "vuong-lam"],
      trangThai: "A Ngốc tặng Vương Lâm @c0076; VL đang sở hữu",
      blurb: "Hạt châu nhỏ là pháp bảo huyễn thuật — khi kích hoạt tạo ảo giác đánh lạc hướng thần thức địch thủ. A Ngốc (quái nhân da lam) tặng Vương Lâm trong quá trình thám hiểm đống đổ nát thành cổ (@c0076).",
      detail: "Hạt châu nhỏ do a Ngốc tặng Vương Lâm @c0076. Tạo ảo giác làm rối loạn thần thức đối thủ — loại pháp bảo huyễn thuật ít gặp. Chi tiết cụ thể về phạm vi, thời gian tác dụng và cách kích hoạt chưa được mô tả đầy đủ trong nguyên tác tới Ch.80.",
      nguon: ["@c0076"]
    },
    {
      id: "han-dan",
      name: "Hàn Đan",
      cn: "",
      category: "dan-duoc",
      categoryLabel: "Linh vật nội tại — Hàn đan",
      phamCap: "Tinh thể ngưng kết nội tại (không phải đan dược ngoại dụng)",
      soHuu: ["vuong-lam"],
      trangThai: "Hình thành trong đan điền Vương Lâm @c0077; tiếp tục phát triển",
      blurb: "Tinh thể màu xanh ngưng kết trong đan điền Vương Lâm sau khi Hoàng Tuyền Thăng Khiếu Quyết tầng 3 thành công, có vô số xúc tua khuếch tán toàn thân hấp thu khí âm hàn (@c0077). Là mốc quan trọng của quá trình tu luyện công pháp.",
      detail: "Hàn Đan xuất hiện @c0077 sau khi VL trùng khiếu tầng 3 Hoàng Tuyền Thăng Khiếu Quyết thành công: đan điền bị phá hủy, hóa thành tia sáng màu lam, tinh thể ngưng kết càng lúc càng đậm thành màu xanh. Hàn đan có vô số xúc tua khuếch tán khắp cơ thể — cơ chế hấp thu khí âm hàn thụ động liên tục. Khi hàn đan xuất hiện, linh lực biến dị của VL nhanh chóng chuyển biến, khí âm hàn nồng hậu hơn. VL ngưng kết quả hàn đan thứ hai sau @c0079 (Hoàng Tuyền tầng 5 đại thành).",
      nguon: ["@c0077", "@c0079"]
    },
    {
      id: "luc-dan-tac-dan",
      name: "Lục Đan (Tạc Đan)",
      cn: "",
      category: "dan-duoc",
      categoryLabel: "Đan dược — Ma đạo tứ cấp tu chân quốc",
      phamCap: "Đan dược tứ cấp tu chân quốc (vượt trội đan dược thông thường)",
      soHuu: ["thi-mi", "vuong-lam"],
      trangThai: "VL thu được từ Thi Mị sau trận @c0072; đang sở hữu",
      blurb: "Phương thức kết đan đặc biệt của giới ma đạo tứ cấp tu chân quốc — khác kim đan chính thống (kim đan chỉ có một, lục đan vô hạn số lượng). Công dụng chính: tự bạo — một viên nổ tung bằng nửa kích toàn lực Kết Đan kỳ. Người nắm cả vạn viên khiến Nguyên Anh kỳ ngũ cấp cũng phải kiêng dè. (@c0072)",
      detail: "Lục Đan còn gọi Tạc Đan — xuất hiện @c0072 khi VL và Tư Đồ Nam gặp xác Thi Mị đang hấp thu linh lực bốn phương. Hạt châu màu lục lơ lửng trên đầu Thi Mị, tạo lốc xoáy linh lực. Tư Đồ Nam giải thích: khác kim đan (duy nhất một), lục đan có thể vô số viên; công dụng lớn nhất là tự bạo (uy lực một viên = nửa kích toàn lực Kết Đan kỳ). Người buôn lậu từng nắm cả vạn viên — dù chỉ Kết Đan kỳ, Nguyên Anh kỳ ngũ cấp cũng không dám trêu. VL thu được lục đan sau khi Thi Mị tự bạo và bị tiêu diệt một phần trong trận @c0072.",
      nguon: ["@c0072"]
    },
    {
      id: "phi-thien-la-sat",
      name: "Phi Thiên La Sát",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Thi khôi đỉnh cấp",
      phamCap: "Đỉnh cấp — linh tính dồi dào nhất Thi Âm tông",
      soHuu: ["da-tu-tai"],
      trangThai: "Dạ Tự Tại đang sở hữu (Thi Âm tông Triệu quốc)",
      blurb: "Thi khôi pháp bảo đỉnh cấp của Thi Âm tông; chuẩn so sánh khi đánh giá thi khôi linh tính cao. Nguyên tác @c0080 nhắc đến bằng hai tên chủ khác nhau: thanh niên gác trận gọi 'Phi Thiên La Sát của Thủy lão tổ', trong khi Mộc Ngung gọi 'Phi Thiên La Sát của Dạ lão tổ' — khả năng cao là cùng một vật và chủ nhân là Dạ Tự Tại.",
      detail: "Phi Thiên La Sát được nhắc đến @c0080 khi thanh niên gác trận kinh ngạc trước linh tính dồi dào của a Ngốc: 'chỉ có Phi Thiên La Sát của Thủy lão tổ mới sánh được'. Sau đó Mộc Ngung bình luận: 'thi khôi Ngô Vũ chỉ thấp hơn Phi Thiên La Sát của Dạ lão tổ'. Hai lần nhắc dùng tên lão tổ khác nhau ('Thủy' vs 'Dạ') — bản dịch có thể không nhất quán; nhiều khả năng đều chỉ cùng một thi khôi thuộc Dạ Tự Tại lão tổ (được nhắc hai lần). Chi tiết về hình thức và công năng chưa được mô tả trong nguyên tác tới Ch.80.",
      nguon: ["@c0080"]
    },
    {
      id: "ngoc-gian-thi-am-tong",
      name: "Ngọc giản Thi Âm tông",
      cn: "",
      category: "thong-tin-lien-lac",
      categoryLabel: "Thông tin — Liên lạc",
      phamCap: "Chưa xác định (pháp bảo liên lạc nội bộ tông phái)",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu từ @c0081",
      blurb: "Ngọc giản màu lam đậm do Dạ Tự Tại (La Sát) trao cho Vương Lâm khi nhận làm đại đệ tử thứ hai. Dùng để liên lạc nội bộ và xác nhận danh tính đệ tử Thi Âm tông. (@c0081)",
      detail: "Dạ Tự Tại (thực chất La Sát điều khiển) trao ngọc giản lam đậm cho VL tại @c0081 sau khi nhận VL làm đại đệ tử thứ hai. Mộc Ngung từng dùng loại ngọc giản liên lạc tương tự để gọi Dạ Tự Tại @c0080. VL mang theo vào Quyết Minh Cốc.",
      nguon: ["@c0081"]
    },
    {
      id: "hon-ky",
      name: "Hồn Kỳ",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Nguyên Anh kỳ",
      phamCap: "Nguyên Anh kỳ cấp",
      soHuu: ["dang-hoa-nguyen"],
      trangThai: "Đằng Hóa Nguyên đang sở hữu và sử dụng; Tư Đồ Nam còn 3 thuấn di @c0089",
      blurb: "Pháp bảo Nguyên Anh kỳ có công năng phong ấn hồn phách; dùng cho thuấn di (di chuyển tức thì). Tư Đồ Nam ẩn hồn phách trong Hồn Kỳ — chỉ còn 3 lần thuấn di trước khi hồn phách tiêu tán @c0089. Đằng Hóa Nguyên cũng sử dụng Hồn Kỳ trong cuộc tàn sát Vương gia @c0087.",
      detail: "Hồn Kỳ xuất hiện lần đầu qua lời Tư Đồ Nam giải thích @c0089: pháp bảo Nguyên Anh kỳ, phong ấn hồn phách, cho phép thuấn di. Tư Đồ Nam dùng Hồn Kỳ như hình thức ẩn hồn phách cuối cùng sau khi tinh hoa nguyên anh gần cạn. Còn 3 lần thuấn di. Đằng Hóa Nguyên sử dụng Hồn Kỳ khi tàn sát Vương gia @c0087 — không rõ cùng một vật hay hai vật khác nhau.",
      nguon: ["@c0087", "@c0089"]
    },
    {
      id: "me-lap",
      name: "Mê Lạp",
      cn: "",
      category: "vu-khi-tu-che",
      categoryLabel: "Vũ khí tự chế — Nổ",
      phamCap: "Tự chế (hàng VL tự làm từ linh lực lam)",
      soHuu: ["vuong-lam"],
      trangThai: "VL có 3 hạt (2 kép, 1 đơn) tính đến @c0090",
      blurb: "Hạt gạo lam tự chế của Vương Lâm — vũ khí nổ kết từ linh lực lam. 1 hạt đơn: phạm vi ~300 thước; 2 hạt kép kết hợp: mạnh hơn đáng kể; 3 hạt tự bạo cùng lúc: ~1 dặm. (@c0090)",
      detail: "VL tự chế mê lạp từ linh lực lam (có thể liên quan đến linh lực lam đen dị biến @c0090). Hạt đơn: phạm vi ~300 thước. Hai hạt kép kết hợp: mạnh hơn một hạt đơn đáng kể. Ba hạt tự bạo cùng lúc: sức nổ ~1 dặm. VL hiện có 3 hạt (2 kép + 1 đơn) @c0090.",
      nguon: ["@c0090"]
    },
    {
      id: "lam-viem-ma-hoa",
      name: "Lam Viêm Ma Hỏa",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Dị hỏa",
      phamCap: "Dị hỏa (tế luyện từ kim đan Kết Đan kỳ Chánh Đạo Liên Minh)",
      soHuu: ["da-tu-tai"],
      trangThai: "Dạ Tự Tại đang sở hữu; đặt trong huyệt động cột đá Thi Âm tông (5 hỏa cầu @c0080); Mộc Ngung tu luyện bằng khí xanh biếc từ hỏa cầu này @c0080",
      blurb: "Dị hỏa màu lam xanh biếc của Thi Âm tông. Tế luyện từ kim đan cao thủ Kết Đan kỳ Chánh Đạo Liên Minh. Đặt thành 5 hỏa cầu trong huyệt động cột đá để đệ tử tu luyện hấp thụ qua thất khiếu. Khi Dạ Tự Tại xuất hiện, 4 hỏa cầu tối sầm tỏa khói xanh. (@c0080)",
      detail: "Lam Viêm Ma Hỏa được nhắc lần đầu @c0080: Mộc Ngung đang ngồi hấp thụ khí xanh biếc từ hỏa cầu Lam Viêm Ma Hỏa qua thất khiếu trong huyệt động cột đá. Khi Dạ Tự Tại xuất hiện, 4 hỏa cầu tối sầm và tỏa khói xanh — bóng người hư ảo Dạ Tự Tại hiện ra từ hỏa cầu. Tư Đồ Nam @c0052 nhắc về dị hỏa cực kỳ bí ẩn Thi Âm tông (bối cảnh khác nhưng có thể đây là cùng một vật). Chánh Đạo Liên Minh đã bị Thi Âm tông đoạt lấy dị hỏa từ kim đan cao thủ Kết Đan — cơ chế thu thập dã man của tông phái tà đạo.",
      nguon: ["@c0052", "@c0080"]
    }
  ]
};

window.LIB_DATA["tien-nghich"].factions = {
  updatedAt: "2026-06-10",
  count: 12,
  factions: [
    {
      id: "hang-nhac-phai",
      name: "Hằng Nhạc Phái",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Triệu quốc (sơn môn bị Huyền Đạo Tông chiếm @c0054; tàn quân tại Tượng Xà sơn)",
      capDo: "Địa phương (Triệu quốc)",
      lanhDao: "Lão phu nhân họ Vương + Lưu Văn Cử (Kết Đan kỳ, lãnh đạo tàn quân); Hoàng Long chân nhân (chưởng môn @c0040)",
      trangThai: "Mất sơn môn @c0054; bế quan 100 năm (tuyên bố @c0057); tàn quân tại Tượng Xà sơn",
      blurb: "Môn phái tu chân chính của cốt truyện — nơi Vương Lâm tu luyện. Mất sơn môn vào tay Huyền Đạo Tông @c0054 (Phác Nam Tử Nguyên Anh kỳ phá Hộ sơn đại trận; một Trúc Cơ trưởng lão bị thương nặng @c0053). Nhóm tàn quân trung thành (Lưu Văn Cử + lão phu nhân + Hoàng Long + Đạo Hư + Hồng Kiểm + Thượng Quan + Tống Dục + VL...) rút về Tượng Xà sơn; tuyên bố bế quan 100 năm @c0057.",
      detail: "Hằng Nhạc Phái là tông môn tu chân tại Triệu quốc, nơi Vương Lâm nhập môn từ đầu truyện. Cơ cấu: chưởng môn (Hoàng Long chân nhân @c0040) + hàng Nhị đại đệ tử (trưởng lão) + nội môn đệ tử (hồng y) + đồng tử + ký danh đệ tử (xám). Hậu Sơn là không gian tu luyện bí mật do tổ sư Nguyên Anh Kỳ mở ngàn năm trước @c0035. Pháp bảo đặc trưng: Kiếm Linh Các (cất phi kiếm), Tử Nhạc Tiên Kiếm (chưởng môn). Quan hệ với Huyền Đạo Tông: tỷ thí giao lưu 20 năm/lần, Hằng Nhạc thua liên tục 100 năm gần đây @c0034. Ch.53–54: Phác Nam Tử (Nguyên Anh kỳ, Huyền Đạo Tông) đột kích; một Trúc Cơ trưởng lão bị thương nặng @c0053; Hộ sơn đại trận vỡ hoàn toàn, Tử Nhạc Tiên Kiếm bị đoạt, sơn môn thất thủ @c0054. 8/10 Trúc Cơ trưởng lão đầu hàng Huyền Đạo Tông @c0055. Lão phu nhân tuyên bố bế quan 100 năm, mở toàn bộ công pháp cho đệ tử @c0057.",
      thanhVien: ["vuong-lam", "ton-dai-tru", "hoang-long-chan-nhan", "truong-cuong", "ton-hao", "dao-hu", "vuong-trac", "vuong-hao", "lu-van-kiet", "hua-moc", "trieu-long", "lu-tung", "thuong-quan-truong-lao", "luu-van-cu", "lao-phu-nhan-ho-vuong"],
      nguon: ["@c0002", "@c0034", "@c0035", "@c0038", "@c0040", "@c0047", "@c0048", "@c0049", "@c0050", "@c0053", "@c0054", "@c0055", "@c0057"]
    },
    {
      id: "huyen-dao-tong",
      name: "Huyền Đạo Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Triệu quốc; đã chiếm sơn môn Hằng Nhạc Phái @c0054",
      capDo: "Địa phương (Triệu quốc) — mạnh hơn Hằng Nhạc Phái; có Nguyên Anh kỳ (Phác Nam Tử @c0053)",
      lanhDao: "Trưởng lão Tần Cổ Lôi, Âu Dương (đại diện tỷ thí @c0040); Phác Nam Tử (Nguyên Anh kỳ @c0053); chưởng môn chưa nêu tên",
      trangThai: "Đang hoạt động; đã chiếm Hằng Nhạc sơn môn @c0054; đang truy đuổi tàn quân Hằng Nhạc",
      blurb: "Tông môn lớn hơn Hằng Nhạc Phái trong Triệu quốc. Đệ tử mặc tử y, tuấn mỹ, có thuật giấu tu vi cao minh. Đã chiếm sơn môn Hằng Nhạc Phái @c0054 qua Phác Nam Tử (Nguyên Anh kỳ); đang truy đuổi nhóm tàn quân. Trương Cuồng gia nhập Huyền Đạo Tông sau khi Hằng Nhạc tan rã @c0058.",
      detail: "Huyền Đạo Tông là một trong các tông môn Tu Chân Giới Triệu quốc, thực lực cao hơn Hằng Nhạc Phái. Giao lưu tỷ thí với Hằng Nhạc 20 năm/lần @c0034. Đặc trưng: đệ tử đều mặc tử y, đẹp trai/đẹp gái, có thuật giấu tu vi cao (@c0040). Hộ sơn linh thú: Thiên Túc Ngô Công @c0039–@c0040. Tỷ thí: Huyền Đạo thắng 2/3 đầu; VL thắng Chu Bằng + Dương Nghị (@c0047–@c0048). Ch.53–54: Phác Nam Tử (Nguyên Anh kỳ) xuất thủ phá Hộ sơn đại trận Hằng Nhạc, đoạt Tử Nhạc Tiên Kiếm, chiếm sơn môn; 8/10 Trúc Cơ trưởng lão Hằng Nhạc đầu hàng @c0055. Tiếp tục truy đuổi nhóm tàn quân nhưng không kịp @c0057.",
      thanhVien: ["tan-co-loi", "au-duong", "lieu-mi", "chu-bang", "duong-nghi", "lieu-phong", "lu-tung", "truong-cuong", "pac-nam-tu"],
      nguon: ["@c0034", "@c0038", "@c0039", "@c0040", "@c0047", "@c0048", "@c0049", "@c0053", "@c0054", "@c0055", "@c0057", "@c0058"]
    },
    {
      id: "kiem-linh-cac-tl",
      name: "Kiếm Linh Các",
      cn: "",
      loai: "noi-bo",
      loaiLabel: "Cơ sở nội bộ (Hằng Nhạc Phái)",
      viTri: "Chính viện Hằng Nhạc Phái",
      capDo: "Cơ sở tông môn",
      lanhDao: "Bạch y mập (trông coi @c0039; tên chưa rõ)",
      trangThai: "Đang hoạt động",
      blurb: "Nơi cất giữ phi kiếm của Hằng Nhạc Phái trong chính viện; cấm chế ba tầng kiên cố; yêu cầu tu vi tầng 4 trở lên. Chứa phi kiếm di vật sư tổ ngàn năm như Cự Phú.",
      detail: "Kiếm Linh Các là kho phi kiếm nội bộ Hằng Nhạc Phái. Quy định: cần Ngưng Khí tầng 4+ mới được phép vào; tuy nhiên có thể vào bằng lệnh bài trưởng lão @c0038–@c0039. Cấm chế ba tầng lồng nhau — 'kiếm khí tự chọn người xứng'; gã trông coi theo VL vào bị kiếm khí đánh văng hộc máu @c0039. Lần đầu đề cập @c0032 khi giao dịch hội nhắc đến; VL ghé lần đầu @c0026 (chưa có chi tiết); chính thức được Tôn cho lệnh bài vào chọn phi kiếm @c0038–@c0039.",
      thanhVien: [],
      nguon: ["@c0026", "@c0032", "@c0038", "@c0039"]
    },
    {
      id: "trieu-quoc-tu-chan-gioi",
      name: "Tu Chân Giới Triệu quốc",
      cn: "",
      loai: "khu-vuc",
      loaiLabel: "Khu vực tu chân",
      viTri: "Triệu quốc",
      capDo: "Khu vực địa lý — tập hợp nhiều tông môn",
      lanhDao: "Không rõ (nhiều tông môn độc lập)",
      trangThai: "Đang hoạt động",
      blurb: "Tổng thể giới tu chân trong Triệu quốc — gồm ít nhất 6 tông môn lớn. Hằng Nhạc Phái và Huyền Đạo Tông là hai tông môn được đề cập sớm nhất; các tông khác: Vô Phong Cốc, Phiêu Miểu Tông, Thiên Đạo Môn, Hợp Hoan Tông (@c0040).",
      detail: "Tu Chân Giới Triệu quốc là bối cảnh rộng hơn của câu chuyện giai đoạn đầu — gồm nhiều tông môn tu chân cùng tồn tại. Vương Lâm lần đầu nghe nhắc đến bức tranh tổng thể khi nghe trưởng lão hai phái đàm đạo @c0040. Các tông môn xác nhận tồn tại tới Ch.40: Hằng Nhạc Phái, Huyền Đạo Tông, Vô Phong Cốc, Phiêu Miểu Tông (có Vô Vi chân nhân Kết Đan kỳ), Thiên Đạo Môn, Hợp Hoan Tông @c0040. Dẫn Lực Thuật của Vương Lâm được nhận xét là đứng đầu Tu Chân Giới Triệu quốc @c0038.",
      thanhVien: [],
      nguon: ["@c0038", "@c0040"]
    },
    {
      id: "vo-phong-coc",
      name: "Vô Phong Cốc",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Triệu quốc",
      capDo: "Địa phương (Triệu quốc)",
      lanhDao: "Chưa rõ",
      trangThai: "Đang hoạt động",
      blurb: "Một trong các tông môn tu chân Triệu quốc — đề cập lần đầu khi các trưởng lão hàn huyên tại @c0040. Chi tiết chưa được nguyên tác mô tả.",
      detail: "Vô Phong Cốc là một trong ít nhất 6 tông môn tu chân tại Triệu quốc, đề cập cùng với Phiêu Miểu Tông, Thiên Đạo Môn, Hợp Hoan Tông trong hội thoại giữa các trưởng lão @c0040. Quan hệ cụ thể và nhân vật thuộc tông này chưa được nguyên tác mô tả đến Ch.40.",
      thanhVien: [],
      nguon: ["@c0040"]
    },
    {
      id: "phieu-mieu-tong",
      name: "Phiêu Miểu Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Triệu quốc",
      capDo: "Địa phương (Triệu quốc) — có Kết Đan kỳ tu sĩ",
      lanhDao: "Chưa rõ",
      thaiThuongTruongLao: "Vô Vi chân nhân (Kết Đan kỳ @c0040)",
      trangThai: "Đang hoạt động",
      blurb: "Một trong các tông môn tu chân Triệu quốc; đáng chú ý vì có Vô Vi chân nhân — thái thượng trưởng lão ở Kết Đan kỳ (cao hơn Trúc Cơ, dưới Nguyên Anh) — thực lực đáng kể trong Triệu quốc @c0040. Chi tiết tông môn chưa được mô tả đến Ch.40.",
      detail: "Phiêu Miểu Tông có Vô Vi chân nhân ở Kết Đan kỳ — cho thấy tông này có thực lực đáng kể. Đề cập trong hội thoại trưởng lão @c0040 cùng với Vô Phong Cốc, Thiên Đạo Môn, Hợp Hoan Tông. Chi tiết tổ chức và nhân vật khác chưa được nguyên tác mô tả đến Ch.40.",
      thanhVien: [],
      nguon: ["@c0040"]
    },
    {
      id: "chu-tuoc-quoc",
      name: "Chu Tước Quốc",
      cn: "",
      loai: "quoc-gia-tu-chan",
      loaiLabel: "Quốc gia tu chân",
      viTri: "Chưa xác định (ngoài phạm vi Triệu quốc)",
      capDo: "Lục cấp — cao hơn Tu Chân Quốc 5 cấp",
      lanhDao: "Không rõ (đã tan rã hoặc bị tiêu diệt)",
      trangThai: "Không còn tồn tại (Tư Đồ Nam bị truy sát — ngụ ý đã diệt @c0047)",
      blurb: "Quốc gia tu chân cấp 6 — quê hương của Tư Đồ Nam. Hệ thống cảnh giới cao hơn Tu Chân Quốc 5 cấp thông thường. Tư Đồ Nam từng là cường giả lục cấp tại đây; bị truy sát thân hủy, chỉ còn tinh hoa nguyên anh ẩn trong Thạch Châu. (@c0047)",
      detail: "Chu Tước Quốc là quốc gia tu chân với hệ thống 6 cấp — cao hơn hệ thống Tu Chân Quốc thông thường của Triệu quốc (5 cấp). Tư Đồ Nam từng là cường giả lục cấp — tức là cảnh giới đỉnh của quốc gia này. Bị truy sát toàn diện, thân hủy, chỉ còn tinh hoa nguyên anh chui vào Thạch Châu (@c0047). Trạng thái quốc gia sau đó không được nêu rõ — có thể đã tan rã. Vị trí địa lý chưa xác định trong nguyên tác tới Ch.50.",
      thanhVien: ["tu-do-nam"],
      nguon: ["@c0047"]
    },
    {
      id: "thanh-long-quoc",
      name: "Thanh Long Quốc",
      cn: "",
      loai: "quoc-gia-tu-chan",
      loaiLabel: "Quốc gia tu chân",
      viTri: "Không rõ (có thể liền kề Triệu quốc)",
      capDo: "Có Nguyên Anh kỳ tu sĩ (xác nhận @c0047)",
      lanhDao: "Không rõ",
      trangThai: "Chưa rõ trạng thái hiện tại",
      blurb: "Quốc gia tu chân có Nguyên Anh kỳ tu sĩ. 500 năm trước, Thanh Long Quốc cử Nguyên Anh kỳ đến cai quản Triệu quốc — cho thấy tương quan thực lực giữa hai quốc (@c0047). Chi tiết thêm chưa được nguyên tác mô tả đến Ch.50.",
      detail: "Thanh Long Quốc được Tư Đồ Nam nhắc đến: 500 năm trước Thanh Long Quốc cử Nguyên Anh kỳ cai quản Triệu quốc (@c0047). Điều này cho thấy Tu Chân Quốc Triệu về thực lực thấp hơn — không có Nguyên Anh lão tổ ở mức đó (Âu Dương cũng cảnh báo VL về điều này @c0049). Không có thêm thông tin về Thanh Long Quốc trong Ch.1–50.",
      thanhVien: [],
      nguon: ["@c0047"]
    },
    {
      id: "lien-minh-tu-chan",
      name: "Liên Minh Tu Chân",
      cn: "",
      loai: "lien-minh",
      loaiLabel: "Liên minh tu chân quốc tế",
      viTri: "Trên phạm vi nhiều quốc gia",
      capDo: "Tổ chức cấp cao — trên Tu Chân Quốc 5 cấp",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động",
      blurb: "Liên minh của các Tu Chân Quốc 5 cấp — tổ chức siêu quốc gia. Tư Đồ Nam đề cập khi giải thích hệ thống Tu Chân Giới (@c0046). Chi tiết cơ cấu và thành viên chưa được nguyên tác mô tả đến Ch.50.",
      detail: "Liên Minh Tu Chân là cấp độ tổ chức cao hơn các Tu Chân Quốc 5 cấp đơn lẻ — được Tư Đồ Nam nhắc đến khi giải thích bức tranh Tu Chân Giới tổng thể (@c0046). Hệ thống: Tu Chân Quốc 5 cấp → Liên Minh Tu Chân. Triệu quốc (nơi Vương Lâm đang ở) là một Tu Chân Quốc 5 cấp — không có Nguyên Anh lão tổ bảo hộ (@c0046, @c0049). Chi tiết thêm chưa được nguyên tác mô tả đến Ch.50.",
      thanhVien: [],
      nguon: ["@c0046"]
    },
    {
      id: "dang-gia",
      name: "Đằng Gia",
      cn: "",
      loai: "gia-toc",
      loaiLabel: "Gia tộc tu chân",
      viTri: "Phía bắc Triệu Quốc — Đằng Gia thành",
      capDo: "Địa phương (phía bắc Triệu quốc); lão tổ Nguyên Anh kỳ",
      lanhDao: "Đằng Hóa Nguyên (lão tổ Nguyên Anh kỳ @c0072); Đằng Hình Sâm (cưỡng chế nội quy @c0070)",
      trangThai: "Đang hoạt động; Đằng Hóa Nguyên truy thù Vương Lâm @c0077–@c0078",
      blurb: "Gia tộc tu chân ~500 năm tại phía bắc Triệu Quốc. Khách khanh của Vô Phong Cốc. Lão tổ là Đằng Hóa Nguyên (Nguyên Anh kỳ). Vận hành Đằng Gia thành; luật nội bộ nghiêm. Đằng Lệ (Trúc Cơ hậu kỳ, cháu Đằng Hóa Nguyên) chết làm Lô Đỉnh @c0072; Đằng Hóa Nguyên lập trận lời nguyền truy thù Vương Lâm.",
      detail: "Đằng Gia là gia tộc tu chân ~500 năm tại phía bắc Triệu Quốc (@c0069–@c0070). Là khách khanh của Vô Phong Cốc — một thế lực lớn hơn (@c0070). Vận hành Đằng Gia thành: thu phí 1 hạ phẩm linh thạch/lần vào cổng; 1 trung phẩm linh thạch/tháng lưu trú. Cấm đánh nhau và phi hành trong thành — Đằng Hình Sâm phụ trách cưỡng chế @c0070. Lão thái gia Đằng Hóa Nguyên (Nguyên Anh kỳ) xác nhận @c0072: cháu là Đằng Lệ (Trúc Cơ hậu kỳ) bị Vương Lâm giết làm Lô Đỉnh. Đằng Hóa Nguyên lập trận lời nguyền định vị in lên VL @c0072; đích thân truy sát @c0077; bị nam tử thây khô đánh đuổi @c0078.",
      thanhVien: ["Đằng Hình Sâm", "Đằng Lệ", "Đằng Hóa Nguyên"],
      nguon: ["@c0069", "@c0070", "@c0072", "@c0077", "@c0078"]
    },
    {
      id: "thi-am-tong",
      name: "Thi Âm tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn ma đạo",
      viTri: "Cực tây Triệu quốc — sơn môn ngầm dưới chiểu trạch",
      capDo: "Ma đạo Triệu quốc — thần bí khó lường; kém Thiên Đạo môn nhưng ẩn tích hơn",
      lanhDao: "Dạ Tự Tại (lão tổ tối cao, Nguyên Anh kỳ @c0079–@c0080; thực chất La Sát ký sinh @c0081); Ngô Vũ (lão tổ mất tích mấy trăm năm @c0079)",
      trangThai: "Đang hoạt động; Vương Lâm vừa gia nhập với danh nghĩa đệ tử Ngô Vũ @c0080; thực chất bị La Sát kiểm soát @c0081",
      blurb: "Tông môn ma đạo thần bí tại Triệu quốc — không ai biết số đệ tử, vị trí, số Nguyên Anh kỳ; từng có lời đồn bị diệt môn. Sơn môn ngầm dưới bình nguyên cực tây. Công pháp đặc biệt: mỗi đệ tử tế luyện một thi khôi cả đời; tu vi thi khôi tăng theo bản thân. Cơ chế bổ sung @c0081: cung cấp thân thể cho tu sĩ ngũ cấp đổi xác. Hoàng Tuyền Đạo là công pháp cốt lõi. Một trong bốn tông tà đạo tại Triệu quốc.",
      detail: "Thi Âm tông tại Triệu quốc đóng vai trò trạm trung chuyển cho các tu chân quốc đẳng cấp 1–5: đệ tử Âm Tông tấn cấp đều qua nhánh này @c0080. Thực lực kém Thiên Đạo môn (ma đạo đệ nhất tông) nhưng thần bí hơn — không ai biết số đệ tử, vị trí, cao thủ Nguyên Anh kỳ bao nhiêu @c0079. Công pháp thi khôi: mỗi đệ tử cả đời chỉ tế luyện một thi thể; thành công thì thi khôi gắn bó cả đời, tu vi tăng theo bản thân; có công pháp khống chế chống phản bội @c0079. Sơn môn: bình nguyên cực tây có sương mù → chiểu trạch rộng → động khổng lồ với vô số thông đạo và động nhỏ dưới đất. Động chính: 8 cột gỗ tím + trận tiếp dẫn đo tu vi; huyệt động cột đá: 5 cột đá mỗi cột một hỏa cầu Lam Viêm Ma hỏa @c0079–@c0080. Bên trong có Địa Âm chi địa — chỗ bế quan quý giá. @c0081: cơ chế cung cấp thân thể cho tu sĩ ngũ cấp đổi xác tiết lộ; Hoàng Tuyền Đạo = công pháp cốt lõi; là 1 trong 4 tông tà đạo Triệu quốc. @c0082: giới thiệu thêm về Hoàng Tuyền Đạo.",
      thanhVien: ["Dạ Tự Tại", "Ngô Vũ", "Mộc Ngung"],
      nguon: ["@c0079", "@c0080", "@c0081", "@c0082"]
    },
    {
      id: "cu-ma-toc",
      name: "Cự Ma Tộc",
      cn: "",
      loai: "the-luc-ngoai",
      loaiLabel: "Thế lực bên ngoài Tu Chân Quốc",
      viTri: "Không rõ (đang hoạt động tại Triệu quốc @c0083)",
      capDo: "Cường đại — sứ giả đầu khổng lồ, đã lấy được Thất Thải pháp khí từ Thông Thiên Tháp",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động tại Triệu quốc; tìm kiếm Nghịch Thiên Châu (Thạch Châu của VL) @c0083",
      blurb: "Liên minh sứ giả đầu khổng lồ — thế lực bí ẩn hoạt động bên ngoài hệ thống Tu Chân Quốc. Đã lấy Thất Thải pháp khí từ Thông Thiên Tháp (trung tâm Triệu quốc) @c0083. Đang tìm Nghịch Thiên Châu — alias của Thạch Châu Vương Lâm đang giữ. (@c0083)",
      detail: "Cự Ma tộc xuất hiện tại Triệu quốc @c0082–@c0083 với hành động rõ ràng: lấy Thất Thải pháp khí từ Thông Thiên Tháp @c0083. Mục tiêu tiếp theo là tìm Nghịch Thiên Châu — alias của Thạch Châu VL đang giữ. Đặc điểm: sứ giả đầu khổng lồ (hình thái đặc biệt). Không rõ nguồn gốc hay mục đích cuối cùng.",
      thanhVien: [],
      nguon: ["@c0082", "@c0083"]
    }
  ]
};
