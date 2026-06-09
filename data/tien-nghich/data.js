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
  count: 31,
  chars: [
    {
      id: "vuong-lam",
      name: "Vương Lâm",
      cn: "",
      aliases: ["Thiết Trụ"],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc", "Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 14 (thực lực xác nhận @c0052/@c0056; Thượng Quan trưởng lão ước đoán @c0051; bề ngoài ngụy trang tầng 3 bằng thuật giấu tu vi)",
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
          }
        ],
        tuVi: "Phàm nhân xuyên suốt Ch.1–20, không thể linh khí nhập thể dù bí mật ngâm Thạch Châu (cuối Ch.20 nguyên tác ghi rõ: \"đến bây giờ vẫn như cũ không thể linh khí nhập thể\"@c0020). Từ Ch.16 trở thành đệ tử nội môn trên danh nghĩa của Tôn Đại Trụ. Đột phá Ngưng Khí tầng 1 @c0025 nhờ Mộng Cảnh thời gian gấp 10 lần; đột phá tầng 2 @c0030, sinh thần thức. Ch.31–40: đạt tầng 3 trong mộng cảnh @c0036; bị chặn ở tầng 4 (cần lĩnh ngộ đại đạo/'chặt đứt phàm trần' @c0037). Đặc dị: tầng 3 không có cực hạn — linh khí vẫn tăng khi người thường bị kẹt. Sau 4 năm hậu sơn, tổng tu luyện thực tế 27 năm (gồm mộng cảnh). Công khai lộ tầng 3 @c0038. Dẫn Lực Thuật luyện hơn 20 năm, đứng đầu Triệu quốc Tu Chân Giới @c0038. Ch.51: đạt tầng 14 Ngưng Khí (thực lực xác nhận; bề ngoài vẫn ngụy trang tầng 3). (Lưu ý: \"Ngưng Khí tầng 5 @c0020\" là của Tôn Đại Trụ — không phải Vương Lâm.)",
        tuViMoc: [
          { chuong: "@c0001", canhGioi: "Phàm nhân", text: "Phàm nhân — quyết chí tu tiên sau khi nhận danh ngạch đề cử từ Tứ thúc." },
          { chuong: "@c0010", canhGioi: "Phàm nhân", text: "Phàm nhân — nhập môn Hằng Nhạc Phái, chính thức trở thành ký danh đệ tử; chưa được truyền tiên pháp. Thạch Châu trước đó đã trị lành vết thương cánh tay (@c0008), công năng khác chưa biểu hiện rõ trong phạm vi Ch.1–10." },
          { chuong: "@c0017", canhGioi: "Phàm nhân (chưa nhập thể)", text: "Nhận công pháp Ngưng Khí tam thiên. Tu luyện cả đêm trong phòng thất bại; sáng ở dược viên cảm nhận được linh khí (cảm giác như côn trùng bò) nhưng CHƯA thực sự nhập thể — vẫn là phàm nhân tới cuối Ch.20." },
          { chuong: "@c0020", canhGioi: "Phàm nhân (chưa nhập thể)", text: "Cuối Ch.20 vẫn chưa thể đưa linh khí nhập thể dù bí mật ngâm Thạch Châu; Thạch Châu đạt 9 đám mây (sắp đủ 10). (Tôn Đại Trụ — không phải VL — mới là Ngưng Khí tầng 5.)" },
          { chuong: "@c0023", canhGioi: "Phàm nhân (chưa nhập thể)", text: "Thạch Châu đủ 10 đám mây → mây biến mất, lộ vài chữ số bí ẩn; châu khai mở công năng KHÔNG GIAN MỘNG CẢNH (thời gian gấp 10 lần thực tại)." },
          { chuong: "@c0025", canhGioi: "Ngưng Khí kỳ tầng 1", text: "ĐỘT PHÁ Ngưng Khí tầng 1 — chính thức bước vào tu tiên; nhờ Mộng Cảnh, 2 tháng tu được ~1 năm. Học công pháp Ngưng Khí tam thiên (Dẫn lực thuật...)." },
          { chuong: "@c0030", canhGioi: "Ngưng Khí kỳ tầng 2", text: "Đột phá Ngưng Khí tầng 2 sau ~1 năm trong Mộng Cảnh; sinh thần thức. Cố ý GIẤU tu vi (khẩu quyết chỉ cấp tới tầng 3)." },
          { chuong: "@c0036", canhGioi: "Ngưng Khí kỳ tầng 3", text: "Đột phá tầng 3 trong mộng cảnh (sau ~6 năm mộng cảnh kể từ tầng 2). Bị chặn ở tầng 4 — 'một cỗ lực lượng thần kỳ' ngăn cản, không phải thiếu linh khí. Đặc dị: tầng 3 của VL không có cực hạn, linh khí vẫn tăng không ngừng trong khi người thường bị kẹt. Thực tế 2 năm hiện thực = ~13 năm mộng cảnh; sau 4 năm hậu sơn tổng cộng tu luyện thực tế 27 năm (@c0037)." },
          { chuong: "@c0051", canhGioi: "Ngưng Khí kỳ tầng 14", text: "Thượng Quan trưởng lão (Trúc Cơ kỳ) không nhìn thấu tu vi VL, chỉ ƯỚC ĐOÁN xấp xỉ tầng 14 @c0051. Tu vi thật tầng 14 được chính VL XÁC NHẬN @c0052 (Tư Đồ Nam khuyên đạt tầng 15 trước khi Trúc Cơ) và CÔNG KHAI khai báo với đồng đạo @c0056. Bề ngoài vẫn ngụy trang tầng 3." }
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
          { ten: "Liễu Mi", quanHe: "Quen biết mới (Huyền Đạo Tông)", ghiChu: "Nữ tử mỹ mạo Huyền Đạo Tông; đánh giá nhầm VL Ngưng Khí tầng 3 (@c0040); VL cảnh giác.", tag: "xa-la" }
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
            { ten: "Khu Vật Thuật", moTa: "Tiên thuật cơ sở để điều khiển phi kiếm; Tôn Đại Trụ dạy sau khi nhận VL làm đệ tử chân chính (@c0038). Học được khi đạt Ngưng Khí tầng 2. Điều khiển phi kiếm thành thục cần tầng 4.", nguon: "@c0038" }
          ],
          danDuoc: [
            { ten: "Đoạt Linh Đan", moTa: "Đan dược phát hàng tháng tại đan phòng chính viện (cùng với hạ phẩm linh thạch mẩu nhỏ); dùng để gia tăng linh khí khi tu luyện Ngưng Khí kỳ (@c0020). Cũng là đơn vị tiền tệ tại giao dịch hội bí mật (@c0032). Môn phái phát 100 viên/năm trong đợt tập huấn hậu sơn (@c0035).", nguon: "@c0020, @c0032, @c0035" }
          ],
          linhThu: [],
          nguyenLieu: [
            { ten: "Linh Khí Tuyết Thủy", moTa: "Nước băng tuyết ngâm Thạch Châu, do Vương Lâm tự chế; hiệu quả cao hơn tuyền thủy nhưng thấp hơn lộ thủy. Thứ tự: lộ thủy > tuyết thủy > tuyền thủy (@c0031). Đã dùng hết sau 2 năm bế quan hậu sơn (@c0036).", nguon: "@c0031" }
          ],
          phapBao: [
            { ten: "Cự Phú", moTa: "Phi kiếm đệ nhất Tu Chân Giới Triệu quốc; khối kim loại dài ~1m, mạ hoàng kim, chuôi khảm 2 khối kim cương lớn, tua dệt sợi vàng. Di vật sư tổ Hằng Nhạc Phái ngàn năm trước; cấm buôn bán (vi phạm bị trục xuất). VL lấy tại Kiếm Linh Các (@c0039), bộc lộ thực lực khi cưỡng qua cấm chế ba tầng một cách thoải mái.", nguon: "@c0039" },
            { ten: "Ngọc phù (Lưu Văn tặng)", moTa: "Pháp bảo phòng thân chứa một kích của cao thủ Kết Đan kỳ. Lưu Văn Cử tặng khi VL xin ra ngoài thăm cha mẹ (@c0058).", nguon: "@c0058" },
            { ten: "Ngọc giản (phi kiếm Trương Cuồng)", moTa: "Phi kiếm của Trương Cuồng — sau khi Trương Cuồng chết, phi kiếm trở về hình dạng ngọc giản; VL thu lấy (@c0059).", nguon: "@c0059" },
            { ten: "Roi trường tiên gỗ đen (Trương Cuồng)", moTa: "Mấy đoạn gỗ màu đen nối thành cây roi dài phát làn khí nguy hiểm; mất điều khiển khi Trương Cuồng chết, VL thu lấy (@c0059).", nguon: "@c0059" }
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
      nguon: ["@c0001", "@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0007", "@c0008", "@c0009", "@c0010", "@c0011", "@c0012", "@c0013", "@c0014", "@c0015", "@c0016", "@c0017", "@c0018", "@c0019", "@c0020", "@c0031", "@c0032", "@c0033", "@c0034", "@c0035", "@c0036", "@c0037", "@c0038", "@c0039", "@c0040", "@c0041", "@c0042", "@c0043", "@c0044", "@c0045", "@c0046", "@c0047", "@c0048", "@c0049", "@c0050", "@c0051", "@c0052", "@c0055", "@c0056", "@c0057", "@c0058", "@c0059", "@c0060"]
    },
    {
      id: "vuong-trac",
      name: "Vương Trác",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Vương Thị Gia Tộc", "Hằng Nhạc Phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 5 đỉnh phong (sắp tầng 6) @c0037",
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
          }
        ],
        tuVi: "Phàm nhân trong Ch.1–10; chính thức được Đạo Hư thượng tiên thu làm đồ đệ truyền thừa. Đến Ch.20 đã đạt Ngưng Khí kỳ tầng 1 sau ba tháng bế quan.",
        tuViMoc: [
          { chuong: "@c0020", canhGioi: "Ngưng Khí kỳ tầng 1", text: "Bị sư phụ bắt bế quan ba tháng, luyện thành Ngưng Khí kỳ tầng 1 (@c0020)." },
          { chuong: "@c0034", canhGioi: "Ngưng Khí kỳ tầng 1 đỉnh phong", text: "Đỉnh phong tầng 1, sắp đột phá tầng 2 — được Tôn Đại Trụ so sánh khi châm biếm Vương Lâm (@c0034)." },
          { chuong: "@c0036", canhGioi: "Ngưng Khí kỳ tầng 3", text: "Đạt tầng 3 sau 2 năm bế quan hậu sơn (@c0036)." },
          { chuong: "@c0037", canhGioi: "Ngưng Khí kỳ tầng 5 đỉnh phong", text: "Sau 4 năm bế quan hậu sơn đạt tầng 5 đỉnh phong, sắp vào tầng 6 (@c0037)." }
        ],
        nhanMach: [
          { ten: "Vương Thiên Sơn", quanHe: "Cha (Đại bá)", ghiChu: "Ngoài mặt quở trách con nhưng trong lòng đắc ý; bênh con khi bị Tứ thúc dọa.", tag: "cha-me" },
          { ten: "Vương Lâm", quanHe: "Em họ", ghiChu: "Khinh miệt, liên tục sỉ nhục và nhạo báng.", tag: "doi-thu" },
          { ten: "Đạo Hư thượng tiên", quanHe: "Sư phụ", ghiChu: "Nội bộ chỉ định từ trước; chính thức thu làm đồ đệ, hứa mười năm thành nhân tài kiệt xuất.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0001", "@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0007", "@c0020", "@c0021"]
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
      canhGioiCaoNhat: "Chưa rõ (vẫn chưa Ngưng Khí tầng 1 @c0030; bị Lữ Vân Kiệt biến thành dược lô @c0043, sắp khí tán thân vong)",
      trangThai: "song (cứu thoát @c0050, thăng nội môn đệ tử)",
      vaiTro: "Bạn đồng hành / đồng tử",
      tinhCach: "Lanh lợi, thực tế, không ngại nịnh nọt để đạt mục đích; có thiện cảm với Vương Lâm.",
      blurb: "Thiếu niên lanh lợi, con của Tam đệ trong Vương gia. Tư chất kém nhưng dâng linh chi 300 năm, được nhận làm dược đồng (đồng tử) Hằng Nhạc Phái. Bị tam sư huynh Lữ Vân Kiệt ép tu Lô Hỏa Khai Đỉnh Đại Pháp, biến thành dược lô luyện Nhân Thọ đan, chỉ còn ~1 năm sống (@c0043). Được Vương Lâm cứu thoát và thăng nội môn đệ tử (@c0050).",
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
          }
        ],
        tuVi: "Phàm nhân (Ch.2–10), đồng tử Hằng Nhạc Phái. Được học tiên pháp cấp thấp với tư cách đồng tử/người hầu, không làm tạp vụ. Chưa đạt Ngưng Khí tầng 1 tính đến @c0030. Sau @c0050: thăng nội môn đệ tử.",
        tuViMoc: [],
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
      nguon: ["@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0021", "@c0030", "@c0043", "@c0050"]
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
      trangThai: "mat-tich",
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
          {
            chuong: "@c0026",
            importance: "major",
            text: "Đột ngột biến mất khỏi Hằng Nhạc Phái sau khi giết Lưu sư huynh — vụ án bỏ ngỏ. Đông môn ghi nhận hắn rời đi không rõ nguyên nhân. Xác nhận bỏ trốn, tung tích không rõ."
          }
        ],
        tuVi: "Phàm nhân, ký danh đệ tử Hằng Nhạc Phái ba năm; chưa được truyền tiên pháp (cần đủ mười năm làm tạp vụ đủ định mức). Cảnh giới: chưa nhập môn tu luyện trong phạm vi Ch.1–20.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Bạn cùng phòng", ghiChu: "Người bạn đầu tiên của Vương Lâm trong phái; trao đổi thông tin và chia sẻ lương thực; người đã (vô tình) tạo nguy hiểm chết người cho Trương Hổ qua dị biến Thạch Châu (@c0014).", tag: "ban-be" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0010", "@c0011", "@c0014", "@c0015", "@c0026"]
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
        tieuSu: "Đệ tử nội môn Hằng Nhạc Phái; tu vi Ngưng Khí tầng 5 (@c0028). Xuất hiện lần đầu tại Ch.27 dưới dạng 'tam sư huynh' bí ẩn ghé thăm phòng Vương Lâm, tên thật chưa được nêu rõ tới Ch.27. Đến Ch.28 xác nhận là Trương sư huynh, vừa đột phá tầng 5 và giao VL quản sự khu tạp vụ.",
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
        tieuSu: "Đệ tử nội môn Hằng Nhạc Phái; biệt danh 'Hoàng Thử lang' được xác nhận tại @c0030. Bị Trương Hổ giết trong mâu thuẫn cá nhân tại Ch.26 — Trương Hổ bỏ trốn qua Đông môn sau đó.",
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
        tieuSu: "Xuất hiện tại Ch.21 trong nhóm đệ tử tại phó viện. Sau 4 năm bế quan hậu sơn: nữ tử họ Từ đạt Ngưng Khí tầng 3 (@c0037); nữ tử họ Chu ở tầng 3 từ trước nhưng 2 năm không tiến, kẹt ở bình cảnh tam tiến tứ — minh chứng cho quy luật người thường bị giới hạn cứng ở tầng 3 (@c0037).",
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
      blurb: "Nhị sư huynh Hằng Nhạc Phái, mặc tử y (đệ tử nòng cốt), tu vi Ngưng Khí tầng 6. Người đổi khẩu quyết tầng 4–9 cho Vương Lâm tại giao dịch hội bí mật; sau đó quản lý hậu sơn trong 4 năm tập huấn. ⚠️ GHI CHÚ: chưa khẳng định trùng với 'Trương sư huynh (Hắc y)' @c0027/@c0028 — giữ tách.",
      tabs: {
        tieuSu: "Nam tử ~28-29 tuổi, mặt lạnh như băng, mặc tử y (đệ tử nòng cốt Hằng Nhạc Phái). Lần đầu xuất hiện tại giao dịch hội bí mật (@c0033) — không dùng Hóa Hình Hóa Thanh Đan, để lộ mặt thật; cả hội cung kính. Đổi khẩu quyết tầng 4-9 cho Vương Lâm rồi công khai nói VL có thể đến hậu sơn nếu có thêm chất lỏng — câu nói nguy hiểm đặt VL vào tầm ngắm. Sau đó giám sát hậu sơn 4 năm: tiếp nhận đệ tử, phát Đoạt Linh Đan, giảng giải bình cảnh tu luyện.",
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
        tieuSu: "Thượng tiên của Hằng Nhạc Phái, có địa vị sư thúc. Nội bộ nhìn trúng Vương Trác từ trước trắc thí. Được nhắc nhiều lần nhưng chưa xuất hiện trực tiếp để mô tả cảnh giới rõ ràng trong phạm vi Ch.1–40. Chú ý: là 'Đạo Hư sư thúc' — không phải Đạo Hư của phái khác.",
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
        tieuSu: "Đệ tử nội môn Hằng Nhạc Phái, thanh niên bạch y ~24-25 tuổi. Phe Vương Trác. Tại hậu sơn, cùng Vương Trác chế nhạo Vương Lâm là 'phế vật', ném bình sai lấy nước.",
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
      blurb: "Chưởng môn Hằng Nhạc Phái. Tên Hoàng Long chân nhân lần đầu xác nhận @c0040. Sở hữu Tử Nhạc Tiên Kiếm chứa Long Hồn — hóa tử long uy hiếp Thiên Túc Ngô Công. Là sư huynh của Tôn Đại Trụ. ⚠️ Các chương trước ghi 'Chưởng môn' chưa có tên (@c0035, @c0039) — nay cập nhật.",
      tabs: {
        tieuSu: "Trạc bốn mươi tuổi, mặc áo lam, tiên phong đạo cốt, ánh mắt như điện. Là sư huynh của Tôn Đại Trụ (Tôn Đại Trụ xưng 'Chưởng môn sư huynh'). Ra lệnh đợt tập huấn 4 năm chuẩn bị cho đại hội Huyền Đạo Tông; dùng pháp thuật dịch chuyển tập thể đệ tử vào hậu sơn. Nghênh đón Huyền Đạo Tông, thúc Tử Nhạc Tiên Kiếm hóa tử long.",
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
        tieuSu: "Mặc tử y Huyền Đạo Tông, phượng nhãn môi anh đào, mỹ mạo khiến Vương Lâm (đã tu luyện 27 năm thực tế) cũng tim đập. Tự tin về mị thuật trời sinh. Ngạc nhiên khi VL lập tức khôi phục thần sắc sau khi nhìn qua; đánh giá nhầm hắn tầng 3.",
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
        tieuSu: "Trong đoàn Huyền Đạo Tông tới Hằng Nhạc Phái. Đứng ra lên tiếng khi trưởng bối Hằng Nhạc Phái chỉ trích 'mị thuật'.",
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
        tieuSu: "Lão giả trong đoàn Huyền Đạo Tông tới Hằng Nhạc Phái. Tán thưởng Tử Nhạc Tiên Kiếm; nhắc kỳ hạn 10 năm. Quen biết Tống sư thúc Hằng Nhạc Phái từ 20 năm trước; cả hai hàn huyên như tri kỷ sau khi căng thẳng qua. Tại tỷ thí tầng 14, chứng kiến VL hạ cả Chu Bằng và Dương Nghị nhưng không thể nhìn thấu tu vi thật — đặt tên 'Cầm Long thủ' để cứu mặt trước đông đảo người xem. Cảnh báo Hoàng Long không có Nguyên Anh lão tổ bảo hộ.",
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
        tieuSu: "Tư Đồ Nam từng là cường giả lục cấp tại Chu Tước Quốc — quốc gia tu chân 6 cấp. Bị truy sát thân hủy, chỉ còn tinh hoa nguyên anh; trốn vào Thạch Châu (viên châu VL nhặt @c0008). Suốt gần 30 năm theo dõi VL, dùng tinh hoa nguyên anh củng cố tu vi VL từ bóng tối. Lần đầu giao tiếp trực tiếp tại Mộng Cảnh (@c0046) khi VL 'nuốt' thần thức Lý Sơn trong Phích Lịch đạn. Tiết lộ: Tu Chân Quốc 5 cấp, Liên Minh Tu Chân, lai lịch Chu Tước Quốc, điều kiện nhận chủ Thạch Châu.",
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
          }
        ],
        tuVi: "Lục cấp (Chu Tước Quốc) — đã thân hủy, chỉ còn tinh hoa nguyên anh sót ít (chỉ còn một lần thuấn di @c0060). Tương đương Nguyên Anh kỳ hoặc cao hơn trong hệ thống Tu Chân Quốc 5 cấp.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đối tượng dẫn dắt / chủ nhân tương lai Thạch Châu", ghiChu: "Theo dõi gần 30 năm, dùng tinh hoa nguyên anh trợ giúp VL; ý đồ ngầm dẫn VL về Ma môn @c0060.", tag: "an-nhan" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0046", "@c0047", "@c0048", "@c0052", "@c0056", "@c0058", "@c0059", "@c0060"]
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
        tieuSu: "Tam sư huynh Hằng Nhạc Phái, xuất hiện lần đầu (danh tính ẩn) @c0002 với tư cách 'trung niên nhân' chủ trì trắc thí tuyển môn. Thu Vương Hạo làm dược đồng nhờ linh chi 300 năm. Được chưởng môn Hoàng Long yêu trọng vì giỏi luyện đan. Bị kẹt Ngưng Khí tầng 6 suốt 25 năm. Lên mưu dùng Vương Hạo làm dược lô luyện Nhân Thọ đan để đổi thọ mệnh. Danh tính 'tam sư huynh' tiết lộ @c0043 qua lời Vương Hạo. Danh tính 'Lữ Vân Kiệt' + đối mặt với VL @c0050.",
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
        tieuSu: "Đại đệ tử Huyền Đạo Tông tham gia tỷ thí tại Thương Tùng Phong. Tu vi thật tầng 13 nhưng bề ngoài che giấu thành tầng 10, gỡ tiên phù lộ tầng 12 — VL dùng thần thức phát hiện ra tầng 13 thật. Bị VL đánh bại 3 lần liên tiếp; càng đánh càng tức giận và không hiểu nổi cơ chế VL thắng.",
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
        tieuSu: "Tham gia tỷ thí sau khi Chu Bằng thua 3 lần. Phát huy tổ hợp Thất Thải Nhan Sắc (dùng nhan sắc gây mê hoặc) + phi kiếm đỏ đồng thời tấn công; bị VL hóa giải và hạ bại.",
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
        tieuSu: "Tham gia tỷ thí tại Thương Tùng Phong; đấu với Triệu Long của Hằng Nhạc Phái và giành chiến thắng bằng Thủy Mạc.",
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
        tieuSu: "Tham gia tỷ thí, đấu với Lữ Tung. Trận đấu bị gián đoạn khi một trung niên nam tử bí ẩn trong đoàn Huyền Đạo Tông bất ngờ bẻ gãy phi kiếm của Lữ Tung.",
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
        tieuSu: "Tham gia tỷ thí, đấu Hứa Mộc; trận gián đoạn vì bị trung niên nam tử bí ẩn can thiệp. Chứng kiến VL thắng liên tiếp, quyết định không thù địch mà chủ động làm quen.",
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
        tieuSu: "Trưởng lão Trúc Cơ Hằng Nhạc Phái. Khi Tôn Đại Trụ tổ chức sự kiện Ch.51, Thượng Quan dùng thần thức quét qua VL và xác nhận thực lực thật xấp xỉ tầng 14 Ngưng Khí. Khi Hằng Nhạc sơn môn thất thủ, hắn là một trong hai trưởng lão (cùng Tống Dục) chọn theo tàn quân trung thành thay vì đầu hàng Huyền Đạo Tông.",
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
        tieuSu: "Lưu Văn Cử (thường gọi tắt Lưu Văn) là Kết Đan kỳ tu sĩ của Hằng Nhạc Phái, tướng mạo hạc phát đồng nhan. Khi Phác Nam Tử chiếm sơn môn, hắn lộ diện cùng lão phu nhân họ Vương. Không đầu hàng Huyền Đạo Tông, dẫn nhóm tàn quân trung thành rút về Tượng Xà sơn (căn cứ cũ của hắn). Can thiệp để lão phu nhân chấp nhận cho VL ra ngoài thăm cha mẹ; tặng ngọc phù Kết Đan kỳ và ngọc giản pháp quyết.",
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
        tieuSu: "Phác Nam Tử là Nguyên Anh kỳ cường giả thuộc Huyền Đạo Tông — xuất hiện đột ngột và một tay phá vỡ Hộ sơn đại trận kiên cố của Hằng Nhạc Phái. Nguyên nhân xuất thủ: Vương Lâm hạ đệ tử của Âu Dương — Huyền Đạo Tông không thể nuốt nhục. Phác Nam Tử đoạt Tử Nhạc Tiên Kiếm giao Âu Dương, tuyên bố mượn Hằng Nhạc sơn mười vạn năm. Đích thân mời VL nhập Huyền Đạo Tông nhưng bị từ chối; gọi VL 'không biết điều'.",
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
        tieuSu: "Lão phu nhân họ Vương (được gọi là 'Vương sư tổ') là Kết Đan kỳ tu sĩ, sư tổ của Hằng Nhạc Phái. Lộ diện cùng Lưu Văn Cử khi Hộ sơn đại trận vỡ. Từ chối đầu hàng Huyền Đạo Tông, dẫn nhóm tàn quân rút về Tượng Xà sơn. Tuyên bố quyết định sống còn: Hằng Nhạc Phái bế quan 100 năm, mở toàn bộ công pháp cho đệ tử, lệnh tất cả tu sĩ thực lực hướng Trúc Cơ.",
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
        tieuSu: "Tham gia tỷ thí, dùng Liên Hoa kiếm khí đấu Liễu Phong; bị Thủy Mạc hóa giải và thua trận.",
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
      tomTat: "VL bao thần thức vào Phích Lịch đạn, phát hiện đạo thần thức Lý Sơn lưu bên trong; nuốt đạo thần thức đó vào thân — từ đó tự mình kích nổ được. Lập tức bị kéo vào Mộng Cảnh: lão quái vật ẩn trong Thạch Châu (Tư Đồ Nam) lần đầu lên tiếng. Tự xưng là lão quái vật, xác nhận tu vi thật VL = 'Linh Động Kỳ viên mãn'; hệ thống Tu Chân Quốc 5 cấp (Ngưng Khí → Trúc Cơ → Kết Đan → Nguyên Anh; 5 cấp là Liên Minh Tu Chân). (@c0046) ⚠️ [Ghi chú R0: Linh Động Kỳ / Anh Biến Kỳ / Hóa Thần Kỳ là cảnh giới cao hơn hệ thống Tu Chân Quốc — chưa thêm vào realms, chờ phê duyệt]"
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
        "Học Khôi Lỗi thuật (ma đạo) từ Tư Đồ Nam; luyện Chu Bằng thành khôi lỗi (Ch.60)"
      ]
    },
    { value: "q02", label: "Quyển 2", range: "Ch.101 – 140", title: "Tái sinh nơi Vực Ngoại",
      summary: "(Chưa nghiên cứu tới — sẽ cập nhật khi đọc.)", milestones: [] }
  ]
};

window.LIB_DATA["tien-nghich"].techniques = {
  updatedAt: "2026-06-10",
  count: 10,
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
    }
  ]
};

// MAP — địa danh Ch.1-60 (neo nguyên tác)
window.LIB_DATA["tien-nghich"].map = {
  updatedAt: "2026-06-10",
  count: 21,
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
      blurb: "Căn cứ cũ của Lưu Văn Cử, cách Hằng Nhạc Phái mấy nghìn dặm. Được chọn làm căn cứ mới của nhóm tàn quân Hằng Nhạc Phái sau khi mất sơn môn (@c0055).", detail: "Tượng Xà sơn là nơi cũ của Lưu Văn Cử — địa điểm hắn chọn làm căn cứ mới sau khi Hằng Nhạc sơn môn thất thủ. Cách Hằng Nhạc Phái mấy nghìn dặm; di chuyển bằng ngọc giản đôi (vòng sáng dịch chuyển) nhanh hơn phi kiếm trong vài ngày (@c0055, @c0057). Nhóm tàn quân về đây bắt đầu bế quan theo quyết định của lão phu nhân họ Vương @c0057.", theLucLienQuan: ["Hằng Nhạc Phái"], nguon: ["@c0055", "@c0057"] }
  ]
};

window.LIB_DATA["tien-nghich"].artifacts = {
  updatedAt: "2026-06-10",
  count: 19,
  artifacts: [
    {
      id: "thach-chau",
      name: "Thạch Châu",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Vượt phàm — thực chất là nơi ẩn náu của cường giả lục cấp Chu Tước Quốc (Tư Đồ Nam) @c0047; điều kiện nhận chủ: ngũ hành + ≥Anh Biến kỳ",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu, cất trong túi trữ vật (từ @c0020); thực ra Tư Đồ Nam ẩn bên trong",
      blurb: "Viên châu xám khắc hoa văn đám mây trắng, pháp bảo trục chính của cả bộ Tiên Nghịch. Nhặt trong xác một con phi điểu ở huyệt động phong nhãn (@c0008). Tiết hạt sương dưới ánh nắng, sương trị lành vết thương. Nước ngâm châu biến thành nước chứa linh khí. Lai lịch thật (@c0047): Tư Đồ Nam — cường giả lục cấp Chu Tước Quốc bị truy sát, ẩn tinh hoa nguyên anh vào châu; dùng tinh hoa nguyên anh trợ giúp VL gần 30 năm. Điều kiện nhận chủ: đủ ngũ hành + tu vi ≥ Anh Biến kỳ.",
      detail: "To bằng nắm tay trẻ con; bề ngoài ban đầu phủ huyết nhục, lau sạch lộ màu xám với hoa văn đám mây trắng, trông rất cổ. Công năng xác nhận tới Ch.50: (1) Tiết hạt sương khi gặp ánh nắng buổi sáng — sương trị lành vết thương thể chất (@c0008–@c0009). (2) Nước ngâm châu có dược tính; hạt sương sáng sớm kết trên châu cho hiệu quả tốt nhất; tiếp theo là nước suối; máu/mồ hôi gần như vô dụng (@c0012). (3) Châu tự hấp thu hơn phân nửa hạt sương — người dùng chỉ giữ được chưa đến một phần mười (@c0012). (4) Cường hóa thể chất khi uống nước ngâm châu thường xuyên (@c0011). (5) Nước ngâm châu biến thành nước chứa linh khí sung túc (Tôn Đại Trụ xác nhận @c0016). (6) Dị biến hút nước mạnh: hút toàn bộ nước/hơi ẩm trong phạm vi rộng kể cả nước trong cơ thể người — suýt giết Trương Hổ bằng đông lạnh (@c0014). (7) Làm héo rũ thảo dược lân cận (Lam Tuyến Thảo, Tử Dạ Hoa) dù cơ chế chưa xác nhận rõ (@c0012–@c0013). (8) Số đám mây khắc trên châu tăng khi hấp thu nước: 5 (@c0008) → 6 → 7 (@c0014) → 9 (@c0020); 10 là mức cuối. (9) KHÔNG GIAN MỘNG CẢNH (@c0023): khi châu đạt đủ 10 đám mây, mây tan — lộ vài chữ số bí ẩn; châu khai mở không gian bên trong. Thời gian trong Mộng Cảnh chạy nhanh gấp 10 lần thực tại; không có linh khí tự nhiên trong đó. Mỗi lần vào cần ≥5 canh giờ liên tục — dùng cách này VL tu được ~1 năm trong 2 tháng thực (@c0024–@c0025). (10) Hiệu quả nước ngâm châu: Lộ thủy (nước lộ sớm) > Tuyết thủy (tuyết nấu tan) > Tuyền thủy (nước suối) — phân cấp xác nhận @c0031. (11) LAI LỊCH THẬT (@c0047): Thạch Châu là nơi ẩn náu của Tư Đồ Nam — cường giả lục cấp Chu Tước Quốc bị truy sát thân hủy; tinh hoa nguyên anh sót lại chui vào châu. Tư Đồ Nam dùng tinh hoa nguyên anh trợ giúp VL củng cố tu vi suốt gần 30 năm. ĐIỀU KIỆN NHẬN CHỦ: đủ ngũ hành linh căn + tu vi ≥ Anh Biến kỳ.",
      nguon: ["@c0008", "@c0009", "@c0010", "@c0011", "@c0012", "@c0014", "@c0016", "@c0020", "@c0023", "@c0024", "@c0025", "@c0031", "@c0046", "@c0047"]
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
    }
  ]
};

window.LIB_DATA["tien-nghich"].factions = {
  updatedAt: "2026-06-10",
  count: 9,
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
    }
  ]
};
