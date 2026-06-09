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
  count: 9,
  chars: [
    {
      id: "vuong-lam",
      name: "Vương Lâm",
      cn: "",
      aliases: ["Thiết Trụ"],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc", "Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 5 (đệ tử nội môn Hằng Nhạc Phái)",
      trangThai: "song",
      vaiTro: "✦ Nhân vật chính",
      tinhCach: "Ý chí kiên cường, nhẫn nhịn và tâm cơ sâu; bề ngoài bình thản, bên trong quyết liệt — bị sỉ nhục không cãi, âm thầm ghi thù; bị loại tư chất vẫn leo thềm đá đến huyết phao mà không bỏ cuộc; ghi nhớ diện mạo mỗi kẻ từng hạ nhục để sau trả thù.",
      blurb: "Nhân vật chính. Thiếu niên 15 tuổi xuất thân bình dân, ý chí kiên định, quyết vào tu tiên dù bị phán tư chất kém. Nhờ ý chí và một viên Thạch Châu bí ẩn nhặt được trong huyệt động, hắn trở thành ký danh đệ tử Hằng Nhạc Phái. Giấu kín Thạch Châu, lặng lẽ chịu đựng lao dịch nặng trong phái.",
      tabs: {
        tieuSu: "Vương Lâm (tên mụ Thiết Trụ) là con trai của Vương Thiên Thủy — người thợ mộc bị gia tộc họ Vương bức rời đi, nay định cư tại một sơn thôn nhỏ. Từ nhỏ Vương Lâm thông minh, ham đọc sách, được cả thôn xem là thần đồng; cha mẹ kỳ vọng hắn thi đỗ kỳ thi huyện. Cơ duyên đổi hướng khi Tứ thúc (em cha) nhường suất đề cử của Vương thị gia tộc cho hắn đi dự tuyển đệ tử Hằng Nhạc Phái. Tại buổi trắc thí, Vương Lâm bị phán 'Không hợp cách' ở vòng tư chất, nhưng không gục ngã: hắn leo thềm đá dốc để qua vòng nghị lực, leo suốt hai ngày đến huyết nhục lẫn lộn nhưng hôn mê ngã xuống khi chưa đầy mười trượng. Tiếp tục thử Kiếm Linh Các — tiến xa nhất trong nhóm 11 người nhưng vẫn bị lực đạo đẩy ra. Trượt cả ba vòng, bị đưa về nhà. Chịu cả họ sỉ nhục, hắn ghi tạc diện mạo từng kẻ, thề nhất định bước vào tiên môn. Đêm khuya lén bỏ nhà lần hai, băng thâm sơn, bị hổ trắng dồn nên nhảy vách núi — được lực hút kỳ quái của một huyệt động cứu sống. Trong huyệt động hắn nhặt được Thạch Châu — viên châu xám khắc năm đóa mây trắng tiết ra sương chữa lành vết thương. Nhờ Tứ thúc dâng khối tinh thiết bất phàm, Hằng Nhạc Phái phá lệ thu hắn làm ký danh đệ tử. Trong phái bị giao lao dịch nặng (nấu nước mười vại lớn mỗi ngày). Hắn giấu kín Thạch Châu không cho ai biết; kết bạn với bạn cùng phòng Trương Hổ.",
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
            text: "Lấy lại Thạch Châu + ba hồ lô sương sớm, cất vào túi trữ vật. Châu tăng từ bảy lên chín đám mây; VL phán đoán mức cuối là mười. Tôn Đại Trụ xác nhận tu vi đạt Ngưng Khí tầng 5. Chạm mặt Vương Trác (nay đệ tử hồng y, Ngưng Khí tầng 1) tại đan phòng — bị nhóm đệ tử hồng y mỉa mai lai lịch."
          },
        ],
        tuVi: "Phàm nhân xuyên suốt Ch.1–10, chưa bắt đầu tu luyện tiên pháp nào. Từ Ch.16 trở thành đệ tử nội môn của Tôn Đại Trụ. Tại Ch.17, lần đầu cảm nhận được linh khí nhập thể (cảm giác như côn trùng bò) ở dược viên — bước đầu vào tu tiên. Đến Ch.20, Tôn Đại Trụ xác nhận tu vi đã đạt Ngưng Khí kỳ tầng 5 — tốc độ bất thường nhờ bí mật Thạch Châu.",
        tuViMoc: [
          { chuong: "@c0001", canhGioi: "Phàm nhân", text: "Phàm nhân — quyết chí tu tiên sau khi nhận danh ngạch đề cử từ Tứ thúc." },
          { chuong: "@c0010", canhGioi: "Phàm nhân", text: "Phàm nhân — nhập môn Hằng Nhạc Phái, chính thức trở thành ký danh đệ tử; chưa được truyền tiên pháp. Thạch Châu trước đó đã trị lành vết thương cánh tay (@c0008), công năng khác chưa biểu hiện rõ trong phạm vi Ch.1–10." },
          { chuong: "@c0017", canhGioi: "Ngưng Khí kỳ (nhập môn)", text: "Lần đầu cảm nhận linh khí nhập thể ở dược viên — bước đầu vào tu tiên sau khi nhận công pháp Ngưng Khí tam thiên. Tu luyện cả đêm trong phòng thất bại, nhưng sáng ra thành công ở dược viên (cảm giác như côn trùng bò)." },
          { chuong: "@c0020", canhGioi: "Ngưng Khí kỳ tầng 5", text: "Tôn Đại Trụ xác nhận Vương Lâm đã đạt Ngưng Khí kỳ tầng 5 — tốc độ tu luyện bất thường do bí mật Thạch Châu (nước ngâm châu chứa linh khí)." }
        ],
        nhanMach: [
          { ten: "Vương Thiên Thủy", quanHe: "Cha", ghiChu: "Thợ mộc, yêu thương con, kỳ vọng cao.", tag: "cha-me" },
          { ten: "Mẹ (Nhị nương)", quanHe: "Mẹ", ghiChu: "Hiền hậu, lo lắng con bị bắt nạt, chuẩn bị hành lý tiễn con.", tag: "cha-me" },
          { ten: "Tứ thúc", quanHe: "Chú (em cha)", ghiChu: "Ân nhân — nhường danh ngạch đề cử, dùng khối tinh thiết bất phàm giúp hắn vào phái.", tag: "an-nhan" },
          { ten: "Vương Trác", quanHe: "Anh họ (con Đại bá)", ghiChu: "Đối thủ, kiêu ngạo, liên tục sỉ nhục Vương Lâm; tái xuất tại đan phòng (@c0020) là đệ tử hồng y, mới luyện Ngưng Khí tầng 1.", tag: "doi-thu" },
          { ten: "Vương Hạo", quanHe: "Họ hàng / bạn đồng hành", ghiChu: "Có thiện cảm với Vương Lâm, định bênh nhưng bị cha ngăn.", tag: "ban-be" },
          { ten: "Trương Hổ", quanHe: "Bạn cùng phòng", ghiChu: "Ký danh đệ tử Hằng Nhạc Phái, bạn đầu tiên của Vương Lâm trong phái; từng đói hai ngày, được Vương Lâm chia khoai lang nên kết thân. Suýt đông chết vì dị biến hạt châu hút nước mưa (@c0014); đồng ý giữ kín (@c0015).", tag: "ban-be" },
          { ten: "Tôn Đại Trụ", quanHe: "Sư phụ (trên danh nghĩa)", ghiChu: "Trưởng lão Hằng Nhạc Phái thu Vương Lâm làm đệ tử nội môn để chiếm hồ lô nước linh khí; hai mặt, âm mưu kìm hãm rồi trục xuất Vương Lâm (@c0016–@c0019).", tag: "su-mon" },
          { ten: "Lưu sư huynh", quanHe: "Sư huynh (ký danh đệ tử họ Lưu)", ghiChu: "Ban đầu chèn ép, giao việc nặng; sau khi biết Tôn trưởng lão tìm Vương Lâm thì đảo ngược hoàn toàn — xu nịnh, giảm việc, tặng tiên phù (@c0013–@c0015).", tag: "ban-be" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Thạch Châu", moTa: "Viên châu xám khắc hoa văn đám mây trắng, to bằng nắm tay trẻ con, trông rất cổ. Nhặt từ trong xác một con phi điểu chết trong huyệt động (@c0008). Tiết hạt sương khi gặp ánh nắng; sương vị ngọt, trị lành vết thương thể chất. Nước ngâm châu cũng có dược tính, kém hơn sương trực tiếp; hạt sương sáng sớm kết trên châu cho hiệu quả tốt nhất (@c0012). Thạch Châu tự hấp thu hơn phân nửa hạt sương — VL chỉ giữ được chưa đến một phần mười (@c0012). Dị biến đêm mưa Ch.14: châu hút toàn bộ nước mưa cả phòng (kể cả nước trên người Trương Hổ, suýt giết Trương Hổ bằng đông lạnh) (@c0014). Số đám mây khắc trên châu tăng dần khi hấp thu nước: 5 → 6 → 7 (Ch.14) → 9 (Ch.20); VL phán đoán 10 là mức cuối cùng (@c0014, @c0020). Nước ngâm châu biến thành nước chứa linh khí sung túc (xác nhận @c0016). Thảo dược quanh vùng (Lam Tuyến Thảo, Tử Dạ Hoa) héo rũ bất thường sau khi châu ở gần — cài cắm nguyên nhân sâu xa (@c0012–@c0013). Mang trong túi trữ vật từ @c0020.", nguon: "@c0008, @c0011, @c0012, @c0014, @c0016, @c0020" },
            { ten: "Hồ Lô (đựng nước linh khí)", moTa: "Hồ lô hoang dại VL tìm trong núi, dùng đựng nước suối ngâm Thạch Châu — nước biến thành chứa linh khí sung túc. Bị Tôn Đại Trụ phát hiện và tịch thu khi lục soát phòng (@c0016). VL sau đó lấy lại được ba hồ lô sương sớm (sương bên trong đông đặc) và cất vào túi trữ vật (@c0020). Linh khí trong hồ lô cũ cạn dần sau ~1 tháng (@c0019).", nguon: "@c0012, @c0016, @c0019, @c0020" },
            { ten: "Thiên Lý Phù", moTa: "Tờ giấy vàng trông như giấy thường, dùng được hai lần, dán ở đùi để tăng tốc độ di chuyển cho phàm nhân; phát bạch quang chói mắt, dã thú thấy tránh xa. Tôn trưởng lão cấp để Vương Lâm về dự thọ cha (@c0012). Lưu sư huynh sau đó tặng thêm một tờ (@c0015).", nguon: "@c0012, @c0015" }
          ],
          congPhap: [
            { ten: "Ngưng Khí tam thiên", moTa: "Công pháp cơ bản nhất Tôn Đại Trụ truyền cho Vương Lâm khi thành đệ tử nội môn; gồm ba tầng, toàn bộ Ngưng Khí kỳ có mười lăm tầng. Bản chất: thổ nạp thiên địa linh khí, tích lũy vào thân, cải biến thể chất làm cơ sở tu luyện. Dấu hiệu linh khí nhập thể: cảm giác như côn trùng bò (@c0017).", nguon: "@c0017" }
          ],
          danDuoc: [
            { ten: "Đoạt Linh Đan", moTa: "Đan dược phát hàng tháng tại đan phòng chính viện (cùng với hạ phẩm linh thạch mẩu nhỏ); dùng để gia tăng linh khí khi tu luyện Ngưng Khí kỳ (@c0020).", nguon: "@c0020" }
          ],
          linhThu: [],
          khac: [
            { ten: "Túi trữ vật", moTa: "Túi nhỏ màu xám, dẹt; tín vật thân phận đệ tử nội môn, đồng thời chứa đồ. Tôn Đại Trụ tặng khi thu VL làm đệ tử (@c0017).", nguon: "@c0017" },
            { ten: "Hạ phẩm linh thạch", moTa: "Vật giúp ngưng khí dễ dàng hơn. Tôn Đại Trụ cấp một khối để thổ nạp (@c0019) và hứa thêm nếu đổi hồ lô (@c0017); đan phòng phát hàng tháng mẩu nhỏ (@c0020).", nguon: "@c0017, @c0019, @c0020" },
            { ten: "Y phục hồng sắc", moTa: "Trang phục đặc trưng của đệ tử nội môn Hằng Nhạc Phái. Nhận từ Tôn Đại Trụ khi thành đệ tử (@c0017).", nguon: "@c0017" }
          ]
        }
      },
      nguon: ["@c0001", "@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0007", "@c0008", "@c0009", "@c0010", "@c0011", "@c0012", "@c0013", "@c0014", "@c0015", "@c0016", "@c0017", "@c0018", "@c0019", "@c0020"]
    },
    {
      id: "vuong-trac",
      name: "Vương Trác",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc", "Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 1 (đệ tử nội môn Hằng Nhạc Phái) @c0020",
      trangThai: "song",
      vaiTro: "Đối thủ (anh họ)",
      tinhCach: "Kiêu căng ngạo mạn, khinh miệt kẻ yếu hơn; lấy thân thế và linh căn làm ưu thế; không kiềm được miệng lưỡi ngay cả khi bị người có thực lực hơn dọa nạt.",
      blurb: "Anh họ kiêu ngạo của Vương Lâm. Có tu tiên linh căn, được Đạo Hư thượng tiên chính thức thu làm đồ đệ truyền thừa; liên tục châm biếm và sỉ nhục Vương Lâm trong suốt giai đoạn Ch.1–7.",
      tabs: {
        tieuSu: "Vương Trác là con của Vương Thiên Sơn (Đại bá — bác cả, anh của cha Vương Lâm), thiếu niên 16-17 tuổi, tướng mạo tuấn tú mày kiếm mắt sáng. Hắn có tu tiên linh căn và được Đạo Hư thượng tiên của Hằng Nhạc Phái nhìn trúng từ trước, nội bộ chỉ định làm đệ tử truyền thừa. Sau khi vượt trắc thí tư chất (nhờ cả thực lực lẫn tiến cử của Đạo Hư sư thúc), hắn chính thức được Đạo Hư thu làm đồ đệ và được hứa trong mười năm sẽ thành nhân tài kiệt xuất trong hàng đệ tử Hằng Nhạc Phái. Trên đường về và sau khi về tới gia tộc, hắn liên tục khoe khoang, khinh miệt và châm biếm Vương Lâm; kể cả khi bị Tứ thúc dọa sẽ phế hắn vì tội ngạo mạn, hắn vẫn không nhịn được, cần cha kéo ra che chắn.",
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
          }
        ],
        tuVi: "Phàm nhân trong Ch.1–10; chính thức được Đạo Hư thượng tiên thu làm đồ đệ truyền thừa. Đến Ch.20 đã đạt Ngưng Khí kỳ tầng 1 sau ba tháng bế quan.",
        tuViMoc: [
          { chuong: "@c0020", canhGioi: "Ngưng Khí kỳ tầng 1", text: "Bị sư phụ bắt bế quan ba tháng, luyện thành Ngưng Khí kỳ tầng 1 (@c0020)." }
        ],
        nhanMach: [
          { ten: "Vương Thiên Sơn", quanHe: "Cha (Đại bá)", ghiChu: "Ngoài mặt quở trách con nhưng trong lòng đắc ý; bênh con khi bị Tứ thúc dọa.", tag: "cha-me" },
          { ten: "Vương Lâm", quanHe: "Em họ", ghiChu: "Khinh miệt, liên tục sỉ nhục và nhạo báng.", tag: "doi-thu" },
          { ten: "Đạo Hư thượng tiên", quanHe: "Sư phụ", ghiChu: "Nội bộ chỉ định từ trước; chính thức thu làm đồ đệ, hứa mười năm thành nhân tài kiệt xuất.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0001", "@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0007", "@c0020"]
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
        tieuSu: "Tứ thúc (Lão Tứ) là em của cha Vương Lâm, trung niên hán tử cường tráng, ánh mắt sáng ngời. Ông có địa vị và tiền đồ hơn cha Vương Lâm trong gia tộc. Ông đến thăm nhà Vương Lâm, mang theo hai quyển sách tặng, rồi báo tin về danh ngạch đề cử Hằng Nhạc Phái và quyết định nhường suất của mình cho Vương Lâm — lý do: Nhị nương (mẹ Vương Lâm) từng chiếu cố ông lúc nhỏ nên ông muốn báo đáp. Ông tự tay dẫn Vương Lâm đến điểm tập kết trắc thí, dặn dò cẩn thận, và đứng nhìn theo khi Vương Lâm bị kẹp nách bay đi.",
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
      canhGioiCaoNhat: "Phàm nhân (học tiên pháp cấp thấp với tư cách đồng tử)",
      trangThai: "song",
      vaiTro: "Bạn đồng hành / đồng tử",
      tinhCach: "Lanh lợi, thực tế, không ngại nịnh nọt để đạt mục đích; có thiện cảm với Vương Lâm.",
      blurb: "Thiếu niên lanh lợi, con của Tam đệ trong Vương gia. Tư chất kém nhưng dâng linh chi 300 năm, được nhận làm dược đồng (đồng tử) Hằng Nhạc Phái. Có thiện cảm với Vương Lâm dù không dám bày tỏ công khai.",
      tabs: {
        tieuSu: "Vương Hạo là con của Tam đệ (tức Tam thúc của Vương Lâm), thiếu niên da hơi đen, khỏe mạnh, mắt lanh lợi — một trong ba đại diện Vương gia dự trắc thí. Hắn tự giới thiệu với Vương Lâm và tỏ ra thân thiện. Cha hắn từng tình cờ nhặt được một hộp ngọc trong núi; Vương Hạo mang theo vật này. Tại trắc thí, tư chất Vương Hạo bị phán 'kém chút, không'. Hắn lập tức nịnh nọt tiên sư và dâng hộp ngọc — bên trong chứa gốc linh chi 300 năm. Trung niên nhân thu hắn làm tiểu đồng luyện đan (đồng tử), được học tiên pháp cấp thấp. Sau khi Vương Lâm bị cả họ sỉ nhục, Vương Hạo lộ vẻ áy náy, mở lời định bênh nhưng bị cha trừng mắt ngăn lại — chi tiết hé lộ thiện cảm thật sự với Vương Lâm. Theo lời Trương Hổ, đồng tử kiểu Vương Hạo có tư chất bình thường, cả đời khó có tiền đồ lớn, chỉ hầu hạ suốt đời.",
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
          { bridge: true, khoang: "@c0007–@c0010", text: "Không xuất hiện trực tiếp — đang làm đồng tử trong Hằng Nhạc Phái." }
        ],
        tuVi: "Phàm nhân (Ch.2–10), đồng tử Hằng Nhạc Phái. Được học tiên pháp cấp thấp với tư cách đồng tử/người hầu, không làm tạp vụ. Cảnh giới cụ thể chưa nêu rõ trong phạm vi Ch.1–10.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Họ hàng / bạn đồng hành", ghiChu: "Có thiện cảm thật sự; định bênh khi bị sỉ nhục nhưng bị cha ngăn.", tag: "ban-be" },
          { ten: "Trung niên nhân (Tam sư huynh)", quanHe: "Chủ nhân / tiên sư", ghiChu: "Thu Vương Hạo làm dược đồng nhờ linh chi.", tag: "su-mon" }
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
      nguon: ["@c0002", "@c0003", "@c0004", "@c0005", "@c0006"]
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
        tieuSu: "Vương Thiên Thủy (xác nhận tên tự xưng @c0006) là con thứ vợ lẻ trong Vương thị gia tộc, từng bị gia tộc bức rời đi, trong đó có Vương Thiên Sơn (Đại ca) từng cướp phần gia sản ông nội lưu lại. Ông định cư tại sơn thôn nhỏ, làm nghề thợ mộc. Tình cảm gia đình sâu đậm: cảm động rơi lệ khi con được đề cử tu tiên; lo lắng tột độ khi con trượt tuyển và sau đó bỏ nhà đi. Cùng Tứ thúc và cha mẹ đi tìm con, theo đệ tử Hằng Nhạc Phái vào thâm sơn cứu con.",
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
        tieuSu: "Mẹ Vương Lâm (gọi là Nhị nương / Nhị tẩu) là người hiền hậu. Từng chiếu cố Tứ thúc lúc còn nhỏ — đây là lý do Tứ thúc quyết định báo ân bằng cách nhường suất đề cử Hằng Nhạc Phái cho Vương Lâm. Khi Vương Lâm lên đường, bà lo lắng con bị bắt nạt và chuẩn bị bọc quần áo mới cùng khoai lang nướng cho con. Bà rơi lệ tiễn đưa.",
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
        tieuSu: "Vương Thiên Sơn (Đại bá, lão giả hơn 50 tuổi) là anh cả của cha Vương Lâm, cha của Vương Trác. Ông đại diện cho nhánh gia tộc từng cướp phần gia sản ông nội lưu lại cho Vương Thiên Thủy. Tại tiệc, ngoài mặt quở trách Vương Trác nhưng thực ra trong lòng đắc ý. Khi Vương Lâm trượt tuyển, ông cầm đầu sỉ nhục cả nhà; bị Vương Thiên Thủy tố cáo và Tứ thúc đe dọa.",
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
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Phàm nhân (ký danh đệ tử, chưa được truyền tiên pháp trong phạm vi Ch.1–20)",
      trangThai: "song",
      vaiTro: "Bạn cùng phòng / người bạn đầu tiên trong phái",
      tinhCach: "Bộc trực, biết ơn, hay chửi thề; chịu khổ lâu năm nhưng vẫn nhiệt tình giúp người mới; thực tế và am hiểu quy củ môn phái.",
      blurb: "Ký danh đệ tử Hằng Nhạc Phái, bạn cùng phòng đầu tiên của Vương Lâm. Từng đói hai ngày, được Vương Lâm chia khoai lang nên kết thân; cảnh báo Vương Lâm về 'con chồn' tạp vụ áo vàng.",
      tabs: {
        tieuSu: "Trương Hổ là ký danh đệ tử Hằng Nhạc Phái, thiếu niên gầy yếu làm lao dịch trong phái. Anh là bạn cùng phòng của Vương Lâm tại dãy phòng phía Bắc. Lần đầu gặp, anh đang đói hai ngày; Vương Lâm chia khoai lang, anh ăn ngấu nghiến, cảm ơn và kết bạn. Tính bộc trực, hay chửi thề, biết ơn. Anh cảnh báo Vương Lâm về 'con chồn' tạp vụ (hoàng y thanh niên) tâm địa gian xảo, không nhìn ký danh đệ tử như con người.",
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
        ],
        tuVi: "Phàm nhân, ký danh đệ tử Hằng Nhạc Phái ba năm; chưa được truyền tiên pháp (cần đủ mười năm làm tạp vụ đủ định mức). Cảnh giới: chưa nhập môn tu luyện trong phạm vi Ch.1–20.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Bạn cùng phòng", ghiChu: "Người bạn đầu tiên của Vương Lâm trong phái; trao đổi thông tin và chia sẻ lương thực; người đã (vô tình) tạo nguy hiểm chết người cho Trương Hổ qua dị biến Thạch Châu (@c0014).", tag: "ban-be" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0010", "@c0011", "@c0014", "@c0015"]
    },
    {
      id: "ton-dai-tru",
      name: "Tôn Đại Trụ",
      cn: "",
      aliases: ["Tôn trưởng lão", "Trưởng lão họ Tôn"],
      gioiTinh: "nam",
      theLuc: ["Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Chưa nêu rõ trong nguyên tác (trưởng lão Hằng Nhạc, tu vi cao hơn đệ tử nội môn — có thần thức và pháp bảo Thất Thải Tường Vân; @c0020 xác nhận hắn ở Ngưng Khí kỳ tầng 5)",
      trangThai: "song",
      vaiTro: "Phản diện giai đoạn đầu / sư phụ trên danh nghĩa của Vương Lâm",
      tinhCach: "Tham lam, hai mặt, ngoan độc; vì lợi mà thu đồ đệ, sẵn sàng âm mưu kìm hãm và định dùng Sưu Hồn thuật; địa vị trong môn phái thực ra 'mạt lưu' trong hàng Nhị đại đệ tử.",
      blurb: "Trưởng lão Hằng Nhạc Phái phụ trách vườn dược và cho phép ký danh đệ tử về thăm nhà. Phát hiện thảo dược héo bất thường, truy ra Vương Lâm, tịch thu hồ lô nước linh khí rồi thu VL làm đệ tử nội môn để hợp thức hóa việc chiếm hồ lô và moi thêm bí mật. Âm mưu kìm hãm VL dưới Ngưng Khí tầng 3, rồi từ bỏ và trục xuất sau khi thất bại.",
      tabs: {
        tieuSu: "Tôn Đại Trụ là Nhị đại đệ tử của Hằng Nhạc Phái, thực chất địa vị 'mạt lưu' trong thế hệ Nhị đại — bị sư huynh đệ coi thường, bị giao việc không quan trọng là phụ trách vườn dược và cho phép ký danh đệ tử về thăm nhà; nội môn đệ tử gọi hắn là 'sư thúc'. Đam mê luyện đan để tăng tu vi, khi phát hiện hồ lô nước linh khí của Vương Lâm lập tức tham nhỏ nước miếng. Thu Vương Lâm làm đệ tử nội môn không phải vì trân trọng nhân tài mà để hợp thức hóa việc chiếm hồ lô. Sau khi thất bại trong việc trợ ngưng linh khí cho VL, kết luận sai hồ lô tầm thường, trục xuất VL.",
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
          }
        ],
        tuVi: "Ngưng Khí kỳ tầng 5 (xác nhận @c0020). Là Nhị đại đệ tử Hằng Nhạc Phái — danh xưng 'trưởng lão' chỉ với ký danh đệ tử; nội môn gọi là 'sư thúc'. Địa vị thực tế thấp trong hàng Nhị đại, bị giao việc không quan trọng.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đệ tử (trên danh nghĩa)", ghiChu: "Thu làm đệ tử để chiếm hồ lô; âm mưu kìm hãm và tính dùng Sưu Hồn thuật (@c0016–@c0019).", tag: "de-tu" },
          { ten: "Lưu sư huynh", quanHe: "Thuộc hạ (ký danh đệ tử)", ghiChu: "Phụ trách phòng tạp vụ dưới quyền lão; hoảng sợ khi Tôn đích thân tới hỏi (@c0013).", tag: "thu-ha" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Thất Thải Tường Vân", moTa: "Pháp bảo bay của Tôn Đại Trụ — vân/mây bảy màu, tốc độ cực nhanh khiến phàm nhân không thở nổi. Dùng để di chuyển và áp chế khi lục soát phòng Vương Lâm (@c0016).", nguon: "@c0016" }
          ],
          congPhap: [],
          danDuoc: [],
          linhThu: [],
          khac: [
            { ten: "Hồ lô tịch thu", moTa: "Hồ lô nước linh khí (do Vương Lâm dùng Thạch Châu ngâm tạo ra) mà Tôn Đại Trụ lấy đi; linh khí cạn dần trong ~1 tháng (@c0019).", nguon: "@c0016, @c0019" },
            { ten: "Bát thuốc đen tuyền", moTa: "Dược dịch tự chế từ lượng lớn dược liệu trân quý để cưỡng ép trợ Vương Lâm ngưng linh khí — thất bại (@c0019).", nguon: "@c0019" },
            { ten: "Lam Tuyến Thảo, Tử Dạ Hoa", moTa: "Thảo dược trong vườn dược của Tôn Đại Trụ; héo rũ bất thường sau khi Vương Lâm mang Thạch Châu qua (@c0012–@c0013).", nguon: "@c0012, @c0013" }
          ]
        }
      },
      nguon: ["@c0012", "@c0013", "@c0015", "@c0016", "@c0017", "@c0018", "@c0019", "@c0020"]
    },
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
      tomTat: "Bị kẹt trong huyệt động với cánh tay phải sưng tê liệt và không thể trốn thoát, Vương Lâm ăn thịt sống phi điểu chết trong động để sống sót. Trong xác chim, hắn moi được một vật tưởng là nội đan đỏ — lau sạch hóa ra là Thạch Châu màu xám khắc năm đóa mây trắng, trông rất cổ. Sáng hôm sau phát hiện thạch châu tiết hạt sương dưới nắng; sương vị ngọt, bôi lên chỗ sưng thì vết thương xẹp hẳn, cánh tay hồi phục. Vương Lâm kết luận đây là bảo bối. Lưu ý: lực hút kỳ quái trong động là của hắc động trên vách — KHÔNG phải thạch châu; thạch châu chưa có biểu hiện 'hút sinh cơ' trong chương này. (@c0008)"
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
      tomTat: "Vương Lâm chuyển ra phó viện, lấy lại Thạch Châu + ba hồ lô sương sớm, cất vào túi trữ vật. Phát hiện đám mây trên châu đã tăng từ bảy lên chín; phán đoán mười là mức cuối cùng, dự định dùng ba hồ lô sương sớm để ép đám mây thứ mười. Vương Lâm nắm rõ hệ thống tu tiên năm cấp (Ngưng Khí → Trúc Cơ → Kết Đan → Nguyên Anh → Hóa Thần) và cơ cấu sức mạnh Hằng Nhạc Phái. Chạm mặt Vương Trác tại đan phòng — nay là đệ tử hồng y, mới luyện xong Ngưng Khí tầng 1; bị nhóm đệ tử hồng y mỉa mai lai lịch. Tôn Đại Trụ xác nhận tu vi VL đạt Ngưng Khí tầng 5 — tốc độ bất thường nhờ bí mật Thạch Châu. Hai nhân vật nữ mới: Chu sư tỷ (am hiểu thảo dược, bóc mẽ khoác lác của Vương Trác) và Trương sư tỷ (đối tượng Vương Trác theo đuổi). (@c0020)"
    },
  ]
};

// QUYỂN thật (ranh giới theo nguyên tác; tham chiếu web cũ). Tóm tắt theo tiến độ đọc thật.
window.LIB_DATA["tien-nghich"].volumes = {
  updatedAt: "2026-06-09",
  volumes: [
    { value: "q01", label: "Quyển 1", range: "Ch.1 – 100", title: "Phàm nhân khởi đầu",
      summary: "Khởi đầu hành trình của Vương Lâm — thiếu niên thôn quê tư chất kém, nhờ ý chí phi thường và cơ duyên nhặt được Thạch Châu mà bước vào con đường tu tiên. Bị tiên môn từ chối ba lần, chịu cả họ sỉ nhục, bỏ nhà băng thâm sơn lần thứ hai — rơi vào huyệt động phong nhãn, nhặt được Thạch Châu bí ẩn. Được phá lệ thu làm ký danh đệ tử, phải gánh mười vại nước nặng nhọc. Bí mật dùng Thạch Châu cường hóa thể chất, bị trưởng lão họ Tôn điều tra, rồi được thu làm đệ tử nội môn (danh nghĩa). Thạch Châu dần bộc lộ bản chất: hút nước mạnh bạo, nước ngâm châu biến thành linh khí, số đám mây tăng 5→9. Vương Lâm lần đầu bước vào tu tiên, đạt Ngưng Khí tầng 5 nhờ bí mật châu. (Wiki nghiên cứu tới Ch.20.)",
      milestones: [
        "Trượt cả ba hạng trắc thí Hằng Nhạc Phái (Ch.4)",
        "Bỏ nhà lần hai, rơi vào huyệt động phong nhãn (Ch.7)",
        "Nhặt được Thạch Châu — pháp bảo khởi nguồn, sương trị lành cánh tay (Ch.8)",
        "Được phá lệ thu làm ký danh đệ tử Hằng Nhạc Phái nhờ khối tinh thiết của Tứ thúc (Ch.10)",
        "Thạch Châu lộ dị biến hút nước: đám mây 5→7, suýt giết Trương Hổ (Ch.14)",
        "Tôn Đại Trụ tịch thu hồ lô, thu VL làm đệ tử nội môn (Ch.16)",
        "Lần đầu cảm nhận linh khí nhập thể ở dược viên — bước vào tu tiên (Ch.17)",
        "Đạt Ngưng Khí kỳ tầng 5; đám mây Thạch Châu tăng 9/10 (Ch.20)"
      ]
    },
    { value: "q02", label: "Quyển 2", range: "Ch.101 – 140", title: "Tái sinh nơi Vực Ngoại",
      summary: "(Chưa nghiên cứu tới — sẽ cập nhật khi đọc.)", milestones: [] }
  ]
};

window.LIB_DATA["tien-nghich"].techniques = {
  updatedAt: "2026-06-10",
  count: 1,
  techniques: [
    {
      id: "ngung-khi-tam-thien",
      name: "Ngưng Khí tam thiên",
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      he: "Hằng Nhạc Phái",
      capBac: "Nhập môn (Ngưng Khí kỳ)",
      nguoiDung: ["vuong-lam"],
      blurb: "Công pháp cơ bản nhất Hằng Nhạc Phái cấp cho đệ tử nội môn; gồm ba tầng đầu của Ngưng Khí kỳ (toàn bộ Ngưng Khí có mười lăm tầng). Cơ sở để bước vào tu tiên.",
      detail: "Ngưng Khí = thổ nạp thiên địa linh khí, tích lũy vào thân, cải biến thể chất phàm tạo cơ sở tu luyện. Phương thức hô hấp trái thường ('một dài ba ngắn') để hấp thụ linh khí nhanh nhất. Dấu hiệu linh khí nhập thể: cảm giác như côn trùng bò khắp người. Linh căn sung túc → hấp nạp nhanh; tư chất bình thường → có thể cả đời không qua ba tầng. Chỉ tu tới tầng ba mới được xem tâm pháp phía sau. Tôn Đại Trụ truyền cho Vương Lâm khi thu làm đệ tử nội môn.",
      nguon: ["@c0017"]
    }
  ]
};

// MAP — địa danh Ch.1-3 (neo nguyên tác)
window.LIB_DATA["tien-nghich"].map = {
  updatedAt: "2026-06-09",
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
      blurb: "Suối núi gần cửa Đông của môn phái — nơi Vương Lâm gánh nước và thổ nạp tu luyện; linh khí sung túc hơn trong phòng.", detail: "Cửa Đông là lối ra phía đông của môn phái, theo đường nhỏ đến sơn tuyền (suối giữa núi). Phong cảnh xinh đẹp, tiếng nước ào ào. Vương Lâm dùng làm chỗ thổ nạp hàng ngày (linh khí sung túc hơn trong phòng, dù không bằng vườn dược) và là nơi giả vờ 'chờ hồ lô trôi xuống' để đánh lừa Tôn Đại Trụ giám thị.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0011", "@c0017", "@c0018"] }
  ]
};

window.LIB_DATA["tien-nghich"].artifacts = {
  updatedAt: "2026-06-10",
  count: 4,
  artifacts: [
    {
      id: "thach-chau",
      name: "Thạch Châu",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Chưa xác định (vượt tầm phàm nhân, lai lịch bí ẩn)",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu, cất trong túi trữ vật (từ @c0020)",
      blurb: "Viên châu xám khắc hoa văn đám mây trắng, pháp bảo trục chính của cả bộ Tiên Nghịch. Nhặt trong xác một con phi điểu ở huyệt động phong nhãn (@c0008). Tiết hạt sương dưới ánh nắng, sương trị lành vết thương. Nước ngâm châu biến thành nước chứa linh khí. Có năng lực hút nước/sinh cơ mạnh bạo. Số đám mây trên châu tăng dần (5→9), phán đoán mức cuối là 10.",
      detail: "To bằng nắm tay trẻ con; bề ngoài ban đầu phủ huyết nhục, lau sạch lộ màu xám với hoa văn đám mây trắng, trông rất cổ. Công năng xác nhận tới Ch.20: (1) Tiết hạt sương khi gặp ánh nắng buổi sáng — sương trị lành vết thương thể chất (@c0008–@c0009). (2) Nước ngâm châu có dược tính; hạt sương sáng sớm kết trên châu cho hiệu quả tốt nhất; tiếp theo là nước suối; máu/mồ hôi gần như vô dụng (@c0012). (3) Châu tự hấp thu hơn phân nửa hạt sương — người dùng chỉ giữ được chưa đến một phần mười (@c0012). (4) Cường hóa thể chất khi uống nước ngâm châu thường xuyên (@c0011). (5) Nước ngâm châu biến thành nước chứa linh khí sung túc (Tôn Đại Trụ xác nhận @c0016). (6) Dị biến hút nước mạnh: hút toàn bộ nước/hơi ẩm trong phạm vi rộng kể cả nước trong cơ thể người — suýt giết Trương Hổ bằng đông lạnh (@c0014). (7) Làm héo rũ thảo dược lân cận (Lam Tuyến Thảo, Tử Dạ Hoa) dù cơ chế chưa xác nhận rõ (@c0012–@c0013). (8) Số đám mây khắc trên châu tăng khi hấp thu nước: 5 (@c0008) → 6 → 7 (@c0014) → 9 (@c0020); Vương Lâm phán đoán 10 là mức cuối. Lực hút kỳ quái trong huyệt động là của hắc động trên vách — KHÔNG phải thạch châu (@c0008). Lai lịch sâu hơn chưa hé lộ.",
      nguon: ["@c0008", "@c0009", "@c0010", "@c0011", "@c0012", "@c0014", "@c0016", "@c0020"]
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
    }
  ]
};
