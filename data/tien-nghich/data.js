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
      detail: "Còn gọi Linh Động Kỳ (tên gọi vùng ở các Tu Chân Quốc cấp cao — chỉ là tên khác của Ngưng Khí, không phải cảnh giới riêng), phân từ tầng 1 đến tầng 15. Hấp thụ linh khí của trời đất vào thân thể, cải tạo thể chất cho thích hợp việc tu luyện; đã có thể dùng linh khí của bản thân để thi triển một vài thuật pháp.",
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

window.LIB_DATA["tien-nghich"].linhLuc = {
  updatedAt: "2026-06-10",
  ten: "Cảnh Giới Linh Lực",
  ghiChu: "Ngoài cảnh giới tu vi (Tu Đạo) còn có một hệ riêng gọi là cảnh giới linh lực — phẩm chất đặc biệt của bản thân linh lực, KHÔNG phải cảnh giới tu luyện và không phải ai cũng có. Chỉ do cơ duyên vô ý mà hình thành; một khi đã thành thì cả đời không đổi, trừ khi tán công tu luyện lại từ đầu. Ba cảnh không liên quan đến nhau, mỗi người chỉ đi theo một trong ba. Sau khi thời thượng cổ biến mất, kiến thức về ba cảnh giới linh lực đã thất truyền — tu sĩ ngày nay chỉ chú trọng tu vi mà bỏ quên cảnh giới linh lực. (@c0078)",
  capBac: [
    { id: "cuc-canh", ten: "Cực cảnh",
      blurb: "Linh lực công kích mạnh nhất — cùng đẳng cấp không ai địch nổi; nhưng thuộc tính đơn nhất nên khó đột phá Hóa Thần ('tử').",
      detail: "Linh lực mang lực công kích cao nhất trong ba cảnh; ở cùng một đẳng cấp tu vi thì không ai chống đỡ nổi. Tu tới Nguyên Anh hậu kỳ đỉnh phong là đệ nhất nhân dưới Hóa Thần kỳ — bản thân linh lực chính là pháp bảo mạnh nhất, không cần dùng tới pháp bảo. Khuyết điểm trí mạng: thuộc tính linh lực chỉ đi theo một con đường cực đoan, không thể dung hợp thuộc tính khác, vì vậy rất khó đột phá Hóa Thần kỳ — nên gọi là 'tử'.",
      nguon: ["@c0078"] },
    { id: "dao-canh", ten: "Đạo cảnh",
      blurb: "Đạt cảnh này thì con đường lên Hóa Thần kỳ ngay trước mắt — giấc mộng lớn nhất của tu sĩ thượng cổ.",
      detail: "Cảnh giới mà mọi người tu luyện đều mơ tưởng. Truyền thuyết kể rằng một khi thuộc tính linh lực đạt tới Đạo cảnh thì con đường đột phá Hóa Thần kỳ đã ở ngay trước mắt — đây là giấc mộng lớn nhất của người tu luyện thời thượng cổ.",
      nguon: ["@c0078"] },
    { id: "thuy-canh", ten: "Thủy cảnh",
      blurb: "Đối lập Cực cảnh ('Cực là tử thì Thủy là sinh'); cao nhất — ngay cao thủ Hóa Thần cũng khó gặp.",
      detail: "Nếu Cực cảnh là 'tử' thì Thủy cảnh là 'sinh' — hai cảnh đối lập nhau. Đây là cảnh giới linh lực cao nhất, không phải thứ người tu luyện dưới Hóa Thần kỳ có thể mơ tưởng; ngay cả với cao thủ Hóa Thần kỳ thì Thủy cảnh cũng vô cùng khó gặp.",
      nguon: ["@c0078"] }
  ],
  thucThe: [
    { ten: "Cực Âm Linh Lực (Vương Lâm)", thuoc: "cuc-canh",
      detail: "Linh lực của Vương Lâm dị biến theo hướng Cực cảnh — do tu Hoàng Tuyền Thăng Khiếu Quyết tại cực âm chi địa cộng hưởng với Nghịch Thiên Châu. Đan điền cắn nuốt âm hàn lực, ngưng thành tinh vân ở huyệt Khí Hải và linh lực màu lam; điểm vào vật thể khiến đóng băng tới tận kết cấu bên trong. Ban đầu chính Vương Lâm cũng chưa biết mình đã chạm Cực cảnh.",
      nguon: ["@c0078", "@c0079"] },
    { ten: "Thần Thức Cực Cảnh (Vương Lâm)", thuoc: "cuc-canh",
      detail: "Sau khi linh lực cạn kiệt trong Vực Ngoại, ý Cực cảnh chuyển dung hợp vào thần thức của Vương Lâm — hình thành 'Thần Thức Cực Cảnh' (cực thức). Sức mạnh: thần thức có thể tiêu diệt mọi sinh vật cùng cấp bất kể sơ kỳ/trung kỳ/hậu kỳ. Giới hạn cứng do pháp tắc Vực Ngoại áp đặt: Nguyên Anh hậu kỳ là tuyệt đỉnh — đột phá lên Hóa Thần sẽ bị pháp tắc hủy diệt. Đây là loại Cực cảnh duy nhất ghi nhận trong nguyên tác: Cực cảnh ấn lên thần thức, không phải lên linh lực. (@c0108)",
      nguon: ["@c0108"] }
  ]
};

window.LIB_DATA["tien-nghich"].characters = {
  updatedAt: "2026-06-10",
  count: 87,
  chars: [
    {
      id: "vuong-lam",
      name: "Vương Lâm",
      cn: "",
      aliases: ["Thiết Trụ"],
      gioiTinh: "nam",
      theLuc: [
        { ten: "Vương Thị Gia Tộc", trangThai: "da-roi" },
        { ten: "Hằng Nhạc Phái", trangThai: "da-roi" },
        { ten: "Thi Âm Tông", trangThai: "da-roi" },
        { ten: "Chiến Thần Điện", trangThai: "gia-mao" },
        { ten: "Đấu Tà phái", trangThai: "da-roi" }
      ],
      canhGioiCaoNhat: "Kết Đan sơ kỳ (@c0127/@c0129); Thần Thức Cực Cảnh (@c0108)",
      trangThai: "song",
      vaiTro: "Nhân vật chính",
      tinhCach: [
        { text: "Ý chí sắt đá, không bỏ cuộc — bị phán tư chất kém vẫn leo thềm đá đến huyết nhục lẫn lộn, quyết không dừng.", chuong: "@c0004" },
        { text: "Nhẫn nhịn và ghi thù tất báo — bị sỉ nhục thì im lặng, khắc cốt diện mạo từng kẻ để sau thanh toán.", chuong: "@c0006" },
        { text: "Tâm cơ sâu, giỏi diễn vai và giấu mình — luôn ngụy trang tu vi thật, đấu trí qua mặt cả trưởng lão có pháp bảo lẫn thần thức.", chuong: "@c0016" },
        { text: "Cực kỳ thận trọng, đa nghi — ép kẻ khác uống trước thứ nghi độc, sẵn sàng bỏ chạy ngay khi thấy bất thường.", chuong: "@c0051" },
        { text: "Quyết liệt và tàn nhẫn khi cần — ra tay là diệt tận gốc để trừ hậu họa, 'đã giết một thì giết thêm mười cũng chẳng sao'.", chuong: "@c0130" },
        { text: "Chấp nhận nhuốm ma đạo — sau cái chết người thân, dứt khoát 'Thành ma thì sao', học và dùng thuật ma đạo tàn độc không do dự.", chuong: "@c0117" },
        { text: "Thực dụng và lạnh lùng trong quan hệ — coi người đồng hành như công cụ (Lý Mộ Uyển như 'lò luyện đan'), khống chế thuộc hạ bằng bản mệnh tinh huyết.", chuong: "@c0130" },
        { text: "Trọng tình thâm với cha mẹ và ân nhân — giữ hồn phách phụ mẫu trong thân khi tự nổ, quỳ khóc trước Nguyên Anh Tư Đồ Nam, là điểm 'không thể vô tình' duy nhất.", chuong: "@c0110" },
        { text: "Mưu trí biết người biết ta — gặp đối thủ vượt cảnh giới thì mặc cả nâng giá thay vì liều, đổi Tử Chú thuật lấy Lập Anh đan với Bát Cực Ma Quân.", chuong: "@c0140" }
      ],
      blurb: "Nhân vật chính. Từ thiếu niên bị phán tư chất kém, bằng ý chí sắt đá và Nghịch Thiên Châu bí ẩn, trở thành Kết Đan kỳ tu sĩ nhuốm ma đạo — đệ nhất nhân dưới Nguyên Anh kỳ; mất thân ở Vực Ngoại rồi đoạt xá thân Mã Lương, ngộ Thần Thức Cực Cảnh, lưu lạc Hỏa Phần quốc và Tu Ma Hải, mang thù diệt tộc với Đằng Hóa Nguyên.",
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
          { bridge: true, khoang: "@c0001–@c0006", text: "Được Tứ thúc nhường danh ngạch đề cử Hằng Nhạc Phái; bị anh họ Vương Trác sỉ nhục công khai tại tiệc, âm thầm hạ quyết tâm phải được tuyển. Lên phái dự trắc thí nhưng trượt cả ba hạng (linh căn không hợp cách, leo thềm đá, Kiếm Linh Các). Về nhà cả họ trở mặt đòi lại lễ vật — VL khắc cốt ghi thù từng diện mạo, Tứ thúc dàn xếp." },
          {
            chuong: "@c0007",
            importance: "normal",
            tieuDe: "Bỏ nhà — rơi vào huyệt động",
            text: "Tuyên thề sẽ bước vào tiên môn rồi để lại lưu thư bỏ nhà lần thứ hai, một mình băng thâm sơn. Bị hổ trắng dồn, nhảy vách núi thì bị lực hút kỳ quái kéo vào huyệt động phong nhãn thiên nhiên, thương cánh tay phải và mắc kẹt — khởi đầu chuỗi kỳ ngộ."
          },
          {
            chuong: "@c0008",
            importance: "major",
            tieuDe: "Nhặt Nghịch Thiên Châu",
            text: "Mắc kẹt trong huyệt động, ăn thịt sống phi điểu để sống sót. Moi được Thạch Châu màu xám khắc năm đóa mây trắng từ xác chim. Phát hiện châu tiết hạt sương dưới nắng — sương trị lành hoàn toàn cánh tay sưng tấy. Kết luận đây là bảo bối; đây là pháp bảo đầu tiên hắn sở hữu, về sau lộ ra là Nghịch Thiên Châu — chí bảo định hình cả hành trình."
          },
          { bridge: true, khoang: "@c0009–@c0020", text: "Được cha và đệ tử họ Trương cứu về Hằng Nhạc Phái, nhập môn ký danh đệ tử, bị giao lao dịch gánh nước; bí mật ngâm Thạch Châu cường hóa thể chất, kết bạn cùng phòng Trương Hổ. Châu hút cả nước mưa suýt đông chết Trương Hổ, số mây tăng dần 5→9. Tôn Đại Trụ lục soát tịch thu hồ lô linh khí rồi thu VL làm đệ tử nội môn để hợp thức hóa; VL khai man bảo toàn bí mật châu. Nhận công pháp Ngưng Khí tam thiên nhưng tới cuối Ch.20 VẪN chưa thể linh khí nhập thể (vẫn phàm nhân)." },
          { bridge: true, khoang: "@c0021–@c0032", text: "Thạch Châu đủ 10 đám mây, khai mở không gian Mộng Cảnh (thời gian gấp 10 lần thực) — nền tảng mọi đột phá sau này. Tu luyện bí mật: đột phá Ngưng Khí tầng 1 (@c0025), tầng 2 sinh thần thức (@c0030). Làm quản sự thu hối lộ tiên phù, mua ngọc giản thuật giấu tu vi tại giao dịch hội bí mật." },
          {
            chuong: "@c0033",
            importance: "normal",
            tieuDe: "Đoạt khẩu quyết Ngưng Khí tầng 4–9",
            text: "Tại giao dịch hội bí mật, đổi Linh Khí Tuyền Thủy lấy khẩu quyết Ngưng Khí tầng 4–9 từ nhị sư huynh Trương Cuồng — mở đường tu lên các tầng cao. Lời nhị sư huynh đặt VL vào tầm ngắm nguy hiểm; tẩu thoát bằng cách chồng mấy chục tờ tiên phù."
          },
          { bridge: true, khoang: "@c0034–@c0040", text: "Vào đợt tập huấn hậu sơn (Trương Cuồng quản): đột phá Ngưng Khí tầng 3 trong mộng cảnh (@c0036), phát hiện đặc dị tầng 3 không có cực hạn. Sau 4 năm hậu sơn được Tôn Đại Trụ nhận làm đệ tử chân chính duy nhất, dọn vào Dược Viên, học Khu Vật Thuật; đến Kiếm Linh Các cưỡng qua ba tầng cấm chế chọn phi kiếm đệ nhất Triệu quốc Cự Phú. Huyền Đạo Tông tới giao lưu — lần đầu gặp Liễu Mi, mở rộng nhãn giới về Tu Chân Giới." },
          { bridge: true, khoang: "@c0041–@c0045", text: "Đợt giao lưu hai phái: bị Vương Trác sắp đặt việc nguy hiểm nuôi linh thú Ngô Công; suy ra cơ chế độc tố. Phát hiện Vương Hạo sắp khí tán thân vong vì bị Lữ Vân Kiệt biến thành dược lô, nhận lời báo thù. Nảy ý lấy dịch độc Ngô Công chữa phong hàn cho cha; mua ba viên Phích Lịch đạn của Lý Sơn (biết tỏng do Lý Sơn ngầm khống chế nổ) để tương kế tựu kế." },
          {
            chuong: "@c0046",
            importance: "normal",
            tieuDe: "Gặp Tư Đồ Nam trong Thạch Châu",
            text: "Nuốt đạo thần thức Lý Sơn ẩn trong Phích Lịch đạn, từ đó tự kích nổ được. Lần đầu tiếp xúc lão quái vật ẩn trong Thạch Châu — Tư Đồ Nam — kẻ đã âm thầm trợ giúp, theo dõi VL gần 30 năm và sẽ đồng hành cả hành trình; lão xác nhận tu vi thật của VL ngang Linh Động Kỳ viên mãn."
          },
          { bridge: true, khoang: "@c0047–@c0050", text: "Tư Đồ Nam tự xưng danh (cường giả Chu Tước quốc lục cấp bị truy sát thân hủy chui vào châu), nêu điều kiện Thạch Châu nhận chủ. VL được Hoàng Long chân nhân cử làm tốt thí: lần đầu thực chiến ba lần liên tiếp đánh bại Chu Bằng và hạ Dương Nghị (Huyền Đạo Tông), được tôn 'đại sư huynh'. Khống chế Ngô Công ép dịch độc chữa cho cha, cứu Vương Hạo khỏi lò luyện đan; Lữ Vân Kiệt bị phạt diện bích 20 năm." },
          {
            chuong: "@c0051",
            importance: "normal",
            tieuDe: "Giết sư phụ Tôn Đại Trụ",
            text: "Bị Tôn Đại Trụ âm mưu dùng Tam Thi Tuyến Trùng thảo khống chế. VL phát giác và phản sát — giết Tôn Đại Trụ, lần đầu tiên trong đời giết người, cũng là giết chính sư phụ trên danh nghĩa. Thực lực được Thượng Quan trưởng lão ước đoán xấp xỉ tầng 14."
          },
          { bridge: true, khoang: "@c0052–@c0058", text: "Đạt tầng 14 Ngưng Khí, được lên cấm địa Thương Tùng phong vào Tàng Kinh Các (hạt nghịch châu hiện mộc nguyên tố). Hằng Nhạc Phái bị Phác Nam Tử (Nguyên Anh kỳ, Huyền Đạo Tông) đánh vỡ hộ sơn đại trận, sơn môn thất thủ — VL là nguyên nhân gián tiếp. Phái ly tán, VL chọn theo nhóm tàn quân Lưu Văn Cử về Tượng Xà sơn thay vì nhập Huyền Đạo Tông; xin ra ngoài thăm cha mẹ (Lưu Văn Cử tặng ngọc phù chứa một kích Kết Đan kỳ)." },
          { bridge: true, khoang: "@c0059–@c0063", text: "Tại cổng thôn cũ, nghe lén âm mưu Chu Bằng rồi bóp gãy cổ giết Trương Cuồng (lần thứ hai giết người), thu phi kiếm và roi gỗ đen. Nhờ thuấn di Tư Đồ Nam chặn Chu Bằng, băng hóa hắn; lần đầu thực hiện Khôi Lỗi thuật ma đạo (mổ ngực tế luyện ngũ tạng) — bước đầu nhuốm ma đạo. Thăm cha mẹ rồi vào hang núi trọc bế quan lần 2, cân nhắc ba con đường Trúc Cơ." },
          { bridge: true, khoang: "@c0064–@c0067", text: "Xuất quan sau 4 năm: năm thứ 2 đạt viên mãn tầng 15 Ngưng Khí, tu vi biểu lộ bên ngoài tăng từ tầng 3 lên tầng 8. Đạp kiếm rời Hằng Nhạc phong, lần đầu xuất môn theo đoàn tiêu Uy Vũ tới Thiên Thủy thành; khí vận khủng khiếp khiến Vương tiên sinh xem tướng phun máu. Nhận ra 'Đại đương gia' là Trương Hổ — bạn cũ 10 năm trước; cứu Trương Hổ khỏi sư phụ tà đạo hút máu, lần đầu Dẫn Lực thuật bị vỏ kiếm đen vô hiệu hóa." },
          {
            chuong: "@c0068",
            importance: "normal",
            tieuDe: "Đoạt phi kiếm cổ quái + vỏ kiếm đen",
            text: "Trận ác đấu sinh tử gian nan nhất kể từ khi tu tiên: đối đầu Bạch Triển (tán tu Kết Đan kỳ). Kích hoạt ngọc phù cổ xưa Lưu Văn Cử tặng bung 9 phù văn vàng, vây diệt địch hóa tro bụi. Đoạt phi kiếm cổ quái + vỏ kiếm đen làm chiến lợi phẩm — hai pháp bảo trục theo VL về sau."
          },
          { bridge: true, khoang: "@c0069–@c0071", text: "Xóa ký ức Vương tiên sinh và tiêu cục thay vì diệt khẩu, ôn chuyện với Trương Hổ. Cùng Trương Hổ vào Đằng Gia thành; tế luyện thành công phi kiếm cổ quái bằng Huyết Luyện thuật (Tư Đồ Nam truyền) — phi kiếm thành pháp bảo bản mệnh cất trong miệng. Xác nhận phi kiếm và vỏ kiếm là hai vật riêng biệt; vỏ kiếm tỏa sát khí ngày càng lớn." },
          {
            chuong: "@c0072",
            importance: "normal",
            tieuDe: "Đoạt Cơ Đại Pháp — bị ĐHN in lời nguyền",
            text: "Bị Đằng Lệ (Trúc Cơ hậu kỳ) truy sát; VL dùng mưu trọng thương rồi bắt sống, thi triển Đoạt Cơ Đại Pháp luyện Đằng Lệ làm Lô Đỉnh, đoạt một phần ba linh căn để đột phá Trúc Cơ. Bị Đằng Hóa Nguyên (Nguyên Anh kỳ, ông nội Đằng Lệ) in lời nguyền định vị lên trán — gieo mối thù lớn trục xuyên suốt cả bộ."
          },
          {
            chuong: "@c0073",
            importance: "major",
            tieuDe: "Đột phá Trúc Cơ kỳ",
            text: "Hoàn tất Đoạt Cơ Đại Pháp; bế quan lần 3 nhắm Trúc Cơ. Sau 2 năm: ĐỘT PHÁ TRÚC CƠ KỲ; cũng luyện hóa gần xong vỏ kiếm. Tư Đồ Nam ngủ say hơn một năm. Dùng pháp quyết tìm cực âm, phát hiện đống hoang tàn thành cổ — nhận ra đây là chỗ cực âm để tu Hoàng Tuyền Thăng Khiếu Quyết."
          },
          { bridge: true, khoang: "@c0074–@c0077", text: "Xác định đống hoang tàn là Hoàng âm Cực âm chi địa; thổ nạp âm khí, hưu chiến với Lam phu quái nhân (a Ngốc) bằng cách chia địa bàn, nhận pháp bảo huyễn thuật. Trùng khiếu huyệt Đan Điền, Hoàng Tuyền tầng 3 đại thành ngưng hàn đan đầu tiên → Trúc Cơ sơ kỳ đỉnh phong, âm hàn linh lực gần gấp đôi; vô tình mở lối 'thân hóa hắc động' hút khí âm hàn. Đằng Hóa Nguyên truy tới nhưng bị thứ mạnh hơn trong đống hoang tàn chặn lại." },
          {
            chuong: "@c0078",
            importance: "major",
            tieuDe: "Hình thành Cực Âm linh lực",
            text: "Đi sâu vào thành đổ nát, nhảy xuống hố trầm âm ngũ phẩm, hấp thu khí âm hàn tinh thuần. Trùng khiếu huyệt Khí Hải thành công — huyệt Khí Hải khai thông; linh lực biến băng đá thành băng thật. Linh lực dị biến theo hướng Cực cảnh — một trong ba hệ linh lực thượng cổ Cực/Đạo/Thủy; nguyên nhân: Hoàng Tuyền Thăng Khiếu Quyết bản thất bản + Nghịch Thiên Châu."
          },
          { bridge: true, khoang: "@c0079–@c0080", text: "Đặt tên linh lực biến dị là 'Cực Âm linh lực'; Hoàng Tuyền tầng 5 đại thành, linh lực chuyển lam đậm. Gặp Ngô Vũ ẩn trong pho tượng đá, đồng ý tới Thi Âm tông tìm Dạ Tự Tại cứu Ngô Vũ; được truyền tống vào tổng đàn Thi Âm tông dưới lòng đất, mạo danh đệ tử Ngô Vũ. Biết về Vực Ngoại chiến trường sắp mở và việc Cự Ma tộc đặt giải tìm Nghịch Thiên Châu (chính vật mình giữ)." },
          {
            chuong: "@c0081",
            importance: "normal",
            tieuDe: "Bái nhập Thi Âm tông (đệ tử Ngô Vũ)",
            text: "Dạ Tự Tại chính thức nhận VL làm đại đệ tử thứ hai của Ngô Vũ — gia nhập một trong bốn tông ma đạo Triệu quốc, không phải nộp mảnh linh hồn như đệ tử thường. Nhận ngọc giản phẩm sư tổ; La Sát (ký sinh trong Dạ Tự Tại) xuất hiện lần đầu."
          },
          { bridge: true, khoang: "@c0085–@c0086", text: "Nguyên tác minh thị tu vi Trúc Cơ sơ kỳ đỉnh phong, tùy thời đột phá trung kỳ; Nghịch Thiên Châu đạt 3 lá Mộc giai. Bắt đầu tế luyện lại Vỏ Kiếm Đen bằng hàn hỏa tự chế. Bị Dạ Tự Tại bội ước ép nộp một mảnh linh hồn, truyền tống đến Quyết Minh Cốc làm một trong 20+ 'vật dẫn' cho kế hoạch nâng thi khôi lên giả đan." },
          {
            chuong: "@c0087",
            importance: "major",
            tieuDe: "Mất cha mẹ — Vương gia bị diệt tộc",
            text: "Giết gã vệ binh đang giữ ngọc bài linh hồn của mình, thoát khỏi Quyết Minh Cốc. Biết Đằng Hóa Nguyên đã diệt toàn bộ Vương gia (100+ người, kể cả cha mẹ VL); Vương Trác và Vương Hạo sống sót, Tứ thúc được Khải Minh cứu. Đau thương cực điểm → linh lực bạo khởi — định hình động cơ phục thù của cả nửa sau hành trình."
          },
          { bridge: true, khoang: "@c0088–@c0099", text: "Tiến vào Cực cảnh trong Quyết Minh Cốc, Nghịch Thiên Châu lần đầu phát hắc quang, biệt danh 'sát nhân ác ma' lan rộng. Tư Đồ Nam tỉnh, giải thích Hồn Kỳ (pháp bảo Nguyên Anh kỳ có thể phong ấn hồn phách — khả năng cứu người thân) và khuyên ra Vực Ngoại đột phá. Thu đủ 5 lệnh bài tư cách Vực Ngoại (Liễu Mi lặng lẽ trao một); đột phá Trúc Cơ trung kỳ (@c0096). Giả làm đệ tử Huyền Đạo Tông, dùng pháp bảo phô diễn tu vi giả công khai khiêu chiến Đằng Hóa Nguyên." },
          {
            chuong: "@c0100",
            importance: "major",
            tieuDe: "Tự nổ thân — xuyên vào Vực Ngoại",
            text: "Quyết chiến Đằng Hóa Nguyên: ĐHN lấy hồn phách phụ mẫu VL (phong trong Hồn Kỳ) tra tấn tinh thần, hủy túi trữ vật và lệnh bài tư cách; ba vạn tinh hồn nuốt dần tứ chi VL (suốt quá trình VL dùng băng tinh bảo vệ hồn phách phụ mẫu trong thân). Cuối cùng VL tự nổ thân thể, phóng hồn phách phụ mẫu cùng bản thân xuyên vào thông đạo Vực Ngoại chiến trường — khép lại Quyển 1."
          },
          { bridge: true, khoang: "@c0101–@c0102", text: "Quyển 2 mở: danh tiếng VL chấn động Triệu quốc sau khi dám đấu Nguyên Anh kỳ. Hắn tỉnh lại trong khe nứt không gian Vực Ngoại dưới dạng linh hồn chi hỏa; Nghịch Thiên Châu dung hợp vĩnh viễn vào hồn phách. Ký thác vào xác Cự Ma tộc cổ đại, tiêu diệt sinh vật khói rèn thần thức, phục hồi ký ức; phát hiện Tư Đồ Nam chưa chết, vẫn giữ hồn phách cha mẹ VL bên trong Nguyên Anh." },
          {
            chuong: "@c0103",
            importance: "major",
            tieuDe: "Đoạt xá thân Mã Lương",
            text: "Đoạt xá Mã Lương — ba năm ám bố chiến trường bằng thần thức vô chủ khiến không gian sớm sụp đổ. Đúng lúc Mã Lương (đệ tử Chiến Thần Điện) bị Cát Dương giết, VL thâm nhập thân xác Mã Lương bằng một luồng thần thức khổng lồ, chữa lành vết thương, mở mắt. Tuyên bố 'trở về' và gọi tên Đằng Hóa Nguyên."
          },
          { bridge: true, khoang: "@c0104–@c0107", text: "Trong thân Mã Lương (linh lực đã cạn), VL khống chế cục diện chiến trường loạn du hồn bằng thần thức; cứu rồi thu phục Chu Tử Hồng, Lâm Đào, Dương Hùng bằng bản mệnh tinh huyết. Thu túi trữ vật của Hứa Hạo + Cát Dương (hơn 2000 trung phẩm linh thạch). Phát hiện sợi tơ đen — cơ chế pháp tắc ở ranh giới truyền tống trận; thiết lập Qui Giáp Huyền Diệt trận chuẩn bị vượt trận." },
          {
            chuong: "@c0108",
            importance: "major",
            tieuDe: "Ngộ Thần Thức Cực Cảnh",
            text: "Ngộ Thần Thức Cực Cảnh — một mình vượt truyền tống trận trong 3 giây quyết định. Thần thức bị pháp tắc nghiền nát và tái tạo hàng vạn lần, ý Cực cảnh dung hợp vào thần thức hình thành cực thức; một sợi chỉ thuần khiết cực thức chặn bàn tay đen khổng lồ đúng lúc 3 giây kết thúc. Hệ quả: linh lực suy yếu vĩnh viễn; thần thức tiêu diệt mọi sinh linh cùng cấp, giới hạn Nguyên Anh hậu kỳ."
          },
          { bridge: true, khoang: "@c0109–@c0111", text: "Được truyền tống về Hỏa Phần quốc (quê Mã Lương, cạnh Tu Ma Hải), tỏa hàn ý khiến trưởng lão Kết Đan không dám truy, từ chối tái gia nhập Chiến Thần Điện. Bế quan trong hang núi lửa, vào Mộng Cảnh thấy Nguyên Anh Tư Đồ Nam thu nhỏ cùng hai hồn phách cha mẹ — khóc quỳ lạy. Kết quả bế quan: khôi phục từ Ngưng Khí t.15 lên Trúc Cơ trung kỳ, thân Mã Lương hoàn toàn thuần hóa, băng ý ngày càng mạnh." },
          { bridge: true, khoang: "@c0112–@c0116", text: "Tại Phần Kim sơn mạch tự chế MA ĐẦU đầu tiên từ Hứa Lập Quốc (cất Thiết Phiến), Nghịch Thiên Châu hấp thu Phần Kim Quả lá 3→lá 5; thu hồi tinh huyết Dương Hùng phản bội. Bị Tôn Hữu Tài dẫn vào bẫy, niệm 'Diệt' bằng Thần Thức Cực Cảnh giết Tứ sư huynh hắc y (Tà Ma Tông). Bị bầy hỏa thú kéo vào hang sâu; Nghịch Thiên Châu tự phá thức hải nuốt hỏa đoàn (Hỏa Linh Thú tổ) → hỏa thuộc tính đại viên mãn, châu đổi sang hoa văn lửa." },
          {
            chuong: "@c0117",
            importance: "normal",
            tieuDe: "Chấp nhận con đường ma đạo",
            text: "Thu phục Ma Đầu (nay Trúc Cơ hậu kỳ đỉnh giả đan). Bước ngoặt tư tưởng: chấp nhận con đường ma đạo — 'Thành ma thì sao'. Từ túi trữ vật Tôn Hữu Tài thu được Đại Tự Tại Tu La thuật (ma đạo Tà Ma Tông) và Ngụy Thổ Độn thuật; tế luyện phi kiếm đen mới."
          },
          { bridge: true, khoang: "@c0118–@c0121", text: "Thổ Độn tới Chiến Thần Điện, được Phượng Loan lão tổ (Nguyên Anh sơ kỳ) thu làm ký danh đệ tử; Dương Sâm tặng ngọc phù bảo mệnh Nguyên Anh. 19 lão Nguyên Anh kích hoạt Tỏa Quốc Đại Trận phong tỏa Hỏa Phần quốc, Hỏa Phần Minh (4 tông liên minh) thành lập, đại quân vượt sang Tuyên Vũ quốc. VL tham chiến đại đội thứ mười để đoạt Thiên Ly đan (đảm bảo kết đan), được Phượng Loan trao bản đồ ba phần; một mình lén giết mười hai Trúc Cơ kỳ Tuyên Vũ quốc." },
          {
            chuong: "@c0122",
            importance: "normal",
            tieuDe: "Đột phá Trúc Cơ hậu kỳ đại viên mãn — đoạt Kim Đan",
            text: "Lập Phệ Huyết Thiên Ma trận dụ giết một Kết Đan kỳ Tuyên Vũ quốc rồi đoạt Kim Đan; nuốt Kim Đan (Tư Đồ Nam hỗ trợ tiêu hóa) → đột phá Trúc Cơ hậu kỳ đại viên mãn — bước cuối trước Kết Đan. Đối ngoại ngụy báo 'Giả Đan cảnh giới' nhờ Thông Phệ đại pháp."
          },
          { bridge: true, khoang: "@c0123–@c0126", text: "Cứu Lý Mộ Uyển (đan sư Lạc Hà Môn bị Song Tu Môn truy sát) vì nàng có Thiên Ly đan bán thành phẩm và biết luyện đan, mang nàng lánh vào Tu Ma Hải. Lập động phủ (Lý Mộ Uyển bố Cửu Ly Thi Cốt trận), thu phục Tang Mộc Nhai làm nguồn tin; kéo thi giao long về nâng trận, thu giao đan/da/gân/cốt. Bế quan Hoàng Tuyền Thăng Khiếu Quyết ngưng đủ ba viên hàn đan, bắt đầu dung hợp tam đan." },
          {
            chuong: "@c0127",
            importance: "major",
            tieuDe: "Đột phá Kết Đan kỳ",
            text: "ĐỘT PHÁ KẾT ĐAN KỲ — mốc trọng đại của bộ. Trải ba năm ở đáy Cốt Hải tu thành 'hoàng tuyền chi cảnh' để dung hợp ba hàn đan thành đan phôi, nhờ Thiên Ly đan trùng kích thành kim đan. Theo luyện khí thuật Chiến Thần Điện đúc Phiên Ưng Lô cửu phẩm + Thủy Tinh phi kiếm; bị 10 Kết Đan kỳ Đấu Tà phái (Tiễn Khôn dẫn) truy sát. Tự xưng 'đệ nhất nhân dưới Nguyên Anh kỳ'."
          },
          { bridge: true, khoang: "@c0128", text: "Mang Lý Mộ Uyển truy sát đám Đấu Tà phái, dùng giao long cân và tinh quang giết chín trưởng lão Tổng bộ trong một nén nhang. Đại trưởng lão Tiễn Khôn chạy về Ngũ Đinh phong cầu cứu, cùng đường lấy Vạn Ma Bách Nhật Tru Sát Lệnh ra dọa rồi cầu hòa." },
          {
            chuong: "@c0129",
            importance: "normal",
            tieuDe: "Giết Tiễn Khôn — chữ Diệt truy sát toàn Tu Ma Hải",
            text: "Niệm 'Tử' giết Tiễn Khôn; lệnh bài vỡ kết thành chữ 'Diệt' treo trên đầu VL — bị truy sát toàn Tu Ma Hải trong trăm ngày. Đan phôi chuyển thành kim đan, xác nhận Kết Đan sơ kỳ. Áp đảo Hắc y Ma quân Thượng Quan Mặc, thề diệt Đằng Hóa Nguyên và Đằng tộc sau khi đạt Nguyên Anh."
          },
          { bridge: true, khoang: "@c0130–@c0133", text: "Nuốt bản mệnh tinh huyết Thượng Quan Mặc tạo ràng buộc sống-chết, quyết tận diệt Đấu Tà phái. Lần đầu tàn sát phạm vi lớn bằng Cực cảnh thần thức + phi kiếm tinh quang quanh Nam Đẩu thành, long cân trói hơn nghìn thi thể — chính thức dựng sát danh (chữ Tru đỏ máu). Phá Đấu Long Đại Trận của Giải Đông Lai, dụ sát chưởng môn; giao chức chưởng giáo Đấu Tà phái cho Thượng Quan Mặc rồi bế quan, tái ngộ Tư Đồ Nam hứa đưa lão ra ngoài khi đạt Anh Biến kỳ." },
          { bridge: true, khoang: "@c0134–@c0137", text: "Ma đầu trong Long Cân lộ đã đột phá Kết Đan và khôi phục trí nhớ, bị VL áp chế buộc nhả 43 linh hồn để gia cường thần thức; phát hiện Họa trục — cuộn tranh phong ấn linh thú mắt tam giác tà dị (cài cắm). Lão nhân thanh bào (Nguyên Anh kỳ) truy sát qua dấu tinh huyết Thượng Quan Mặc. VL chia tay Lý Mộ Uyển sau bốn năm đồng hành (trả tinh huyết kèm thần thức hộ thể), chui vào Mộng Cảnh né Vạn Ma Bách Nhật Tru Sát lệnh, truy binh mất dấu." },
          { bridge: true, khoang: "@c0138–@c0139", text: "Trong Mộng Cảnh ngưng tụ một viên tu đan để dành cho Kết Anh. Rời Mộng Cảnh, bị Bát Cực Ma Quân (Nguyên Anh kỳ) truy tại Hỏa Phần Minh — lão phá hộ sơn đại trận chỉ một cái ấn tay. Lần đầu dùng Tử Chú thuật phản kích Nguyên Anh kỳ khiến lão khựng sát na; ngọc phù Dương Sâm vỡ khi chặn trùy tử bảy màu, VL bị thương. Nhắm đoạt Thần Đạo thuật nguyên thủy Chiến Thần Điện để tăng tỷ lệ Kết Anh; lão giả đề nghị đàm phán." },
          {
            chuong: "@c0140",
            importance: "normal",
            tieuDe: "Hiệp nghị Bát Cực Ma Quân — xem Thần Đạo thuật",
            text: "Đạt hiệp nghị với Bát Cực Ma Quân: VL dùng Tử Chú thuật hộ tống lão vào địa phương bí ẩn sắp mở, đổi lấy Lập Anh đan + bảo vật. Mượn khí thế lão, VL vào xem Thần Đạo thuật nguyên thủy tại thạch phủ Chiến Thần Điện — chìa khóa tăng tỷ lệ Kết Anh sắp tới."
          }
        ],
        tuVi: "Phàm nhân xuyên suốt Ch.1–20, không thể linh khí nhập thể dù bí mật ngâm Thạch Châu (cuối Ch.20 nguyên tác ghi rõ: \"đến bây giờ vẫn như cũ không thể linh khí nhập thể\"@c0020). Từ Ch.16 trở thành đệ tử nội môn trên danh nghĩa của Tôn Đại Trụ. Đột phá Ngưng Khí tầng 1 @c0025 nhờ Mộng Cảnh thời gian gấp 10 lần; đột phá tầng 2 @c0030, sinh thần thức. Ch.31–40: đạt tầng 3 trong mộng cảnh @c0036; bị chặn ở tầng 4 (cần lĩnh ngộ đại đạo/'chặt đứt phàm trần' @c0037). Đặc dị: tầng 3 không có cực hạn — linh khí vẫn tăng khi người thường bị kẹt. Sau 4 năm hậu sơn, tổng tu luyện thực tế 27 năm (gồm mộng cảnh). Công khai lộ tầng 3 @c0038. Dẫn Lực Thuật luyện hơn 20 năm, đứng đầu Triệu quốc Tu Chân Giới @c0038. Ch.51: đạt tầng 14 Ngưng Khí (thực lực xác nhận; bề ngoài vẫn ngụy trang tầng 3). Bế quan lần 2 trên núi trọc 4 năm (@c0062–@c0064): năm thứ 2 đạt VIÊN MÃN tầng 15 Ngưng Khí; 2 năm tiếp cố đột phá Trúc Cơ nhưng thất bại; tu vi biểu lộ bên ngoài tăng từ tầng 3 → tầng 8 (tích lũy từ nhiều lần đột phá Trúc Cơ trong Mộng Cảnh). Xuất quan @c0064, đạp phi kiếm xuất môn hướng Thiên Thủy thành; đến @c0070 đang ở Đằng Gia thành, bắt đầu tế luyện phi kiếm cổ quái.",
        tuViMoc: [
          { chuong: "@c0001", canhGioi: "Phàm nhân", text: "Phàm nhân — quyết chí tu tiên sau khi nhận danh ngạch đề cử từ Tứ thúc.", tieu: [
            { chuong: "@c0010", canhGioi: "Phàm nhân", text: "Nhập môn Hằng Nhạc Phái, chính thức trở thành ký danh đệ tử; chưa được truyền tiên pháp. Thạch Châu trước đó đã trị lành vết thương cánh tay, công năng khác chưa biểu hiện rõ." },
            { chuong: "@c0017", canhGioi: "Phàm nhân (chưa nhập thể)", text: "Nhận công pháp Ngưng Khí tam thiên. Tu luyện cả đêm trong phòng thất bại; sáng ở dược viên cảm nhận được linh khí (cảm giác như côn trùng bò) nhưng CHƯA thực sự nhập thể — vẫn là phàm nhân." },
            { chuong: "@c0020", canhGioi: "Phàm nhân (chưa nhập thể)", text: "Vẫn chưa thể đưa linh khí nhập thể dù bí mật ngâm Thạch Châu; Thạch Châu đạt 9 đám mây (sắp đủ 10). (Tôn Đại Trụ — không phải VL — mới là Ngưng Khí tầng 5.)" }
          ] },
          { chuong: "@c0023", canhGioi: "Khai Mộng Cảnh", heKhac: "Hệ linh lực — Nghịch Thiên Châu", text: "Thuộc hệ linh lực, không phải tu vi chính. Nghịch Thiên Châu đủ 10 đám mây → mây biến mất, lộ vài chữ số bí ẩn; châu khai mở không gian Mộng Cảnh bên trong (thời gian gấp 10 lần thực tại) — nền tảng cho mọi đột phá tu vi sau này." },
          { chuong: "@c0025", canhGioi: "Ngưng Khí kỳ", text: "ĐỘT PHÁ Ngưng Khí tầng 1 — chính thức bước vào tu tiên; nhờ Mộng Cảnh, 2 tháng tu được ~1 năm. Học công pháp Ngưng Khí tam thiên (Dẫn lực thuật...).", tieu: [
            { chuong: "@c0030", canhGioi: "Ngưng Khí kỳ tầng 2", text: "Đột phá Ngưng Khí tầng 2 sau ~1 năm trong Mộng Cảnh; sinh thần thức. Cố ý GIẤU tu vi (khẩu quyết chỉ cấp tới tầng 3)." },
            { chuong: "@c0036", canhGioi: "Ngưng Khí kỳ tầng 3", text: "Đột phá tầng 3 trong mộng cảnh; bị chặn ở tầng 4 nhưng đặc dị là tầng 3 của VL không có cực hạn (linh khí vẫn tăng khi người thường bị kẹt)." },
            { chuong: "@c0051", canhGioi: "Ngưng Khí kỳ tầng 14", text: "Thượng Quan trưởng lão (Trúc Cơ kỳ) không nhìn thấu tu vi VL, chỉ ước đoán xấp xỉ tầng 14. Tu vi thật tầng 14 được chính VL xác nhận (Tư Đồ Nam khuyên đạt tầng 15 trước khi Trúc Cơ) và công khai khai báo với đồng đạo. Bề ngoài vẫn ngụy trang tầng 3." },
            { chuong: "@c0064", canhGioi: "Ngưng Khí kỳ tầng 15 viên mãn", text: "Đạt viên mãn tầng 15 trong năm thứ 2 của 4 năm bế quan lần 2 trên núi trọc. Tu vi biểu hiện bên ngoài tăng từ tầng 3 → tầng 8 (tích lũy từ nhiều lần cố đột phá Trúc Cơ trong Mộng Cảnh). Vẫn ngụy trang tầng 8." }
          ] },
          { chuong: "@c0073", canhGioi: "Trúc Cơ kỳ", text: "ĐỘT PHÁ TRÚC CƠ KỲ sau 2 năm bế quan lần 3 trong lòng đất (rừng sâu). Nền tảng: Đoạt Cơ Đại Pháp trên Đằng Lệ (Trúc Cơ hậu kỳ) + hấp thu một phần ba linh căn Đằng Lệ tích lũy linh lực. Tư Đồ Nam ngủ say hơn một năm.", tieu: [
            { chuong: "@c0077", canhGioi: "Trúc Cơ sơ kỳ đỉnh phong", text: "Hoàng Tuyền Thăng Khiếu Quyết tầng 3 đại thành, ngưng tụ hàn đan (tinh thể xanh) đầu tiên trong đan điền. Âm hàn linh lực gần gấp đôi cũ → đạt Trúc Cơ sơ kỳ đỉnh phong. Vô tình phát hiện lối tu luyện 'hắc động cắn nuốt khí âm hàn' phạm vi ngàn trượng." },
            { chuong: "@c0079", canhGioi: "Trúc Cơ sơ kỳ đỉnh phong — Hoàng Tuyền tầng 5", text: "Hoàng Tuyền Thăng Khiếu Quyết tầng 5 đại thành, linh lực chuyển lam đậm (gần Cực cảnh); là cột mốc công pháp, không phải đột phá cảnh giới." },
            { chuong: "@c0085", canhGioi: "Trúc Cơ sơ kỳ đỉnh phong", text: "Nguyên tác xác nhận minh thị tu vi Trúc Cơ sơ kỳ đỉnh phong, tùy thời đột phá trung kỳ; Nghịch Thiên Châu đạt 3 lá Mộc giai." },
            { chuong: "@c0096", canhGioi: "Trúc Cơ trung kỳ", text: "ĐỘT PHÁ TRÚC CƠ TRUNG KỲ tại vị trí Tư Đồ Nam chỉ định trong Quyết Minh Cốc — bước đột phá VL chủ động chuẩn bị để lấy tư cách vào Vực Ngoại chiến trường." },
            { chuong: "@c0110", canhGioi: "Trúc Cơ trung kỳ (khôi phục)", text: "Khôi phục Trúc Cơ trung kỳ trong Mộng Cảnh bế quan tại hang núi lửa Hỏa Phần (1 năm thực = 7 năm Mộng Cảnh): khôi phục Ngưng Khí t.15 → Trúc Cơ sơ kỳ → Trúc Cơ trung kỳ. Thân Mã Lương hoàn toàn thuần hóa." },
            { chuong: "@c0122", canhGioi: "Trúc Cơ hậu kỳ đại viên mãn", text: "Nuốt Kim Đan (đoạt từ Kết Đan kỳ Tuyên Vũ quốc), nhờ Tư Đồ Nam hỗ trợ tiêu hóa trong Nghịch Thiên Châu → đột phá Trúc Cơ hậu kỳ đại viên mãn. Đối ngoại ngụy báo 'Giả Đan cảnh giới' nhờ Thông Phệ đại pháp." }
          ] },
          { chuong: "@c0078", canhGioi: "Cực Âm linh lực (Cực cảnh thượng cổ)", heKhac: "Hệ linh lực thượng cổ", text: "Thuộc hệ linh lực, không phải tu vi chính. Huyệt Khí Hải khai thông → linh lực dị biến theo hướng Cực cảnh — một trong 3 hệ linh lực thời thượng cổ (Cực/Đạo/Thủy), tốt nhất trong cùng đẳng cấp nhưng khó đột phá Hóa Thần. Nguyên nhân: Hoàng Tuyền Thăng Khiếu Quyết bản thất bản + Nghịch Thiên Châu." },
          { chuong: "@c0100", canhGioi: "Tự nổ thân — linh hồn chi hỏa", buocNgoat: true, text: "Tự nổ thân thể xuyên vào thông đạo Vực Ngoại — kết thúc Quyển 1. Linh lực Trúc Cơ trung kỳ mất hoàn toàn; tồn tại dưới dạng linh hồn thuần túy trong khe nứt không gian." },
          { chuong: "@c0103", canhGioi: "Đoạt xá thân Mã Lương", buocNgoat: true, text: "Nhập vào thân xác Mã Lương — Trúc Cơ kỳ tu sĩ Chiến Thần Điện; linh lực Mã Lương đã cạn kiệt hoàn toàn, VL mang thân mới không có linh lực." },
          { chuong: "@c0108", canhGioi: "Thần Thức Cực Cảnh", heKhac: "Hệ thần thức", text: "Thuộc hệ thần thức, không phải tu vi chính. Ý Cực cảnh dung hợp vào thần thức trong 3 giây chịu đựng pháp tắc sợi tơ đen. Hệ quả: linh lực của thân Mã Lương suy yếu vĩnh viễn; bù lại thần thức đạt cực cảnh — tiêu diệt mọi sinh linh cùng cấp. Giới hạn: Nguyên Anh hậu kỳ." },
          { chuong: "@c0116", canhGioi: "Nghịch Thiên Châu — Hỏa đại viên mãn", heKhac: "Hệ linh lực", text: "Thuộc hệ linh lực, không phải tu vi chính. Nghịch Thiên Châu tự phá ra, nuốt hỏa đoàn (Hỏa Linh Thú tổ); bề ngoài châu đổi từ hoa văn lá sang hoa văn lửa; hấp thu 10 cụm hỏa diễm → hỏa thuộc tính đại viên mãn." },
          { chuong: "@c0127", canhGioi: "Kết Đan kỳ", text: "ĐỘT PHÁ KẾT ĐAN KỲ — mốc trọng đại của bộ. Tu thành 'hoàng tuyền chi cảnh' (toàn thân hóa cực âm khí) ở đáy Cốt Hải để dung hợp ba hàn đan thành đan phôi, rồi nhờ Thiên Ly đan trùng kích thành kim đan. Hoàng Tuyền Thăng Khiếu Quyết đại thành. Tự xưng 'đệ nhất nhân dưới Nguyên Anh kỳ'.", tieu: [
            { chuong: "@c0129", canhGioi: "Kết Đan sơ kỳ", text: "Đan phôi chuyển hóa hoàn toàn thành kim đan to bằng nắm tay — xác nhận Kết Đan sơ kỳ; tu vi hơn Trúc Cơ kỳ khoảng trăm lần. Uy lực thực chiến được đánh giá ngang/hơn Nguyên Anh kỳ (Tử Chú thuật + Cực cảnh thần thức)." }
          ] }
        ],
        nhanMach: [
          { ten: "Vương Thiên Thủy", quanHe: "Cha", ghiChu: "Thợ mộc, yêu thương con, kỳ vọng cao.", tag: "cha-me", uuTien: 95 },
          { ten: "Mẹ (Nhị nương)", quanHe: "Mẹ", ghiChu: "Hiền hậu, lo lắng con bị bắt nạt, chuẩn bị hành lý tiễn con.", tag: "cha-me", uuTien: 95 },
          { ten: "Tứ thúc", quanHe: "Chú (em cha)", ghiChu: "Ân nhân — nhường danh ngạch đề cử, dùng khối tinh thiết bất phàm giúp hắn vào phái.", tag: "an-nhan", uuTien: 60 },
          { ten: "Vương Trác", quanHe: "Anh họ (con Đại bá)", ghiChu: "Đối thủ, kiêu ngạo, liên tục sỉ nhục Vương Lâm; tái xuất tại đan phòng (@c0020) là đệ tử hồng y, mới luyện Ngưng Khí tầng 1.", tag: "doi-thu", uuTien: 50 },
          { ten: "Vương Hạo", quanHe: "Họ hàng / bạn đồng hành", ghiChu: "Có thiện cảm với Vương Lâm, định bênh nhưng bị cha ngăn.", tag: "ban-be", uuTien: 62 },
          { ten: "Trương Hổ", quanHe: "Bạn cùng phòng", ghiChu: "Ký danh đệ tử Hằng Nhạc Phái, bạn đầu tiên của Vương Lâm trong phái; từng đói hai ngày, được Vương Lâm chia khoai lang nên kết thân. Suýt đông chết vì dị biến hạt châu hút nước mưa (@c0014); đồng ý giữ kín (@c0015).", tag: "ban-be", uuTien: 80 },
          { ten: "Tôn Đại Trụ", quanHe: "Sư phụ (trên danh nghĩa)", ghiChu: "Trưởng lão Hằng Nhạc Phái thu Vương Lâm làm đệ tử nội môn để chiếm hồ lô nước linh khí; hai mặt, âm mưu kìm hãm rồi trục xuất Vương Lâm (@c0016–@c0019).", tag: "su-mon" },
          { ten: "Lưu sư huynh", quanHe: "Sư huynh (ký danh đệ tử họ Lưu)", ghiChu: "Ban đầu chèn ép, giao việc nặng; sau khi biết Tôn trưởng lão tìm Vương Lâm thì đảo ngược hoàn toàn — xu nịnh, giảm việc, tặng tiên phù (@c0013–@c0015).", tag: "ban-be" },
          { ten: "Trương Cuồng", quanHe: "Nhị sư huynh (nguy hiểm)", ghiChu: "Người VL đổi khẩu quyết tầng 4-9 tại giao dịch hội (@c0033); quản hậu sơn trong đợt tập huấn 4 năm (@c0035); VL từng nói dối hắn về nguồn gốc Linh Khí Tuyền Thủy — tiềm ẩn nguy hiểm.", tag: "nguy-hiem" },
          { ten: "Liễu Mi", quanHe: "Quen biết mới (Huyền Đạo Tông)", ghiChu: "Nữ tử mỹ mạo Huyền Đạo Tông; đánh giá nhầm VL Ngưng Khí tầng 3 (@c0040); VL cảnh giác.", tag: "xa-la" },
          { ten: "Đằng Lệ", quanHe: "Thù địch — đã chết", ghiChu: "Trúc Cơ hậu kỳ, cháu Đằng Hóa Nguyên; truy sát VL vì Trương Hổ bị quy tội giết sư. VL bắt sống làm Lô Đỉnh cho Đoạt Cơ Đại Pháp (@c0072); chết khi bị luyện thành 3 quả cầu máu/thịt/xương.", tag: "thu-dich" },
          { ten: "Đằng Hóa Nguyên", quanHe: "Thù địch (đang truy sát)", ghiChu: "Nguyên Anh kỳ, lão tổ Đằng Gia, ông nội Đằng Lệ; in lời nguyền định vị hình thoi lên trán VL @c0072; truy sát VL @c0077 nhưng bị nam tử thây khô đánh đuổi @c0078.", tag: "thu-dich", uuTien: 75 },
          { ten: "A Ngốc / a Mộc", quanHe: "Đồng hành tạm thời", ghiChu: "Quái nhân da lam, 9 tấm phù vàng cổ quái; thực ra là thi khôi cũ Ngô Vũ thất bại đoạt xá, có Nguyên Anh trung kỳ tiềm ẩn; VL chiêu mộ tạm sau khi ký hòa ước @c0076; a Ngốc tự nguyện theo VL vào Thi Âm tông @c0079.", tag: "dong-hanh" },
          { ten: "Ngô Vũ", quanHe: "Ân nhân / nhiệm vụ", ghiChu: "Lão tổ Thi Âm tông (Nguyên Anh thể suy yếu); bị thi khôi của chính mình truy sát 300 năm; nhờ VL tìm Dạ Tự Tại cứu mình, đổi lại mở truyền tống trận + chỉ Địa Âm chi địa; khắc bí thuật lên lưng VL làm tín vật đệ tử @c0079.", tag: "an-nhan" },
          { ten: "Mộc Ngung", quanHe: "Quen biết (Thi Âm tông)", ghiChu: "Chấp sự trưởng lão Thi Âm tông, Trúc Cơ trung kỳ; đón tiếp VL, gọi là 'sư thúc', bị VL che mắt bằng kỹ thuật ngưng khói Lam Viêm Ma hỏa @c0080.", tag: "xa-la" },
          { ten: "Dạ Tự Tại", quanHe: "Mục tiêu nhiệm vụ", ghiChu: "Lão tổ tối cao Thi Âm tông (Nguyên Anh); sư đệ của Ngô Vũ; sở hữu Phi Thiên La Sát; xuất hiện cuối @c0080 qua Lam Viêm Ma hỏa, chất vấn VL.", tag: "muc-tieu" },
          { ten: "Phượng Loan", quanHe: "Sư tổ ký danh (Chiến Thần Điện)", ghiChu: "Nguyên Anh sơ kỳ, mẫu thân Chu Tử Hồng; thu VL làm ký danh đệ tử, trao bản đồ Hỏa Phần quốc kèm giao kèo giết người, muốn ngăn VL đoạt xá (@c0119–@c0121).", tag: "su-mon", uuTien: 65 },
          { ten: "Chu Tử Hồng", quanHe: "Cố nhân (ân tình)", ghiChu: "Con gái Phượng Loan; được VL trả lại bản mệnh tinh phách; đổi bản đồ lấy việc VL hứa giết Từ Tư và Chu An (@c0123).", tag: "dong-minh", uuTien: 70 },
          { ten: "Lý Mộ Uyển", quanHe: "Đan sư đồng hành (bị khống chế)", ghiChu: "Đệ tử Lạc Hà Môn, thiên tài luyện đan-trận; được VL cứu, giao bản mệnh tinh huyết, làm 'lò luyện đan di động'; luyện Thiên Ly đan giúp VL kết đan (@c0123–@c0130). Cũng viết Lý Mộc Uyển.", tag: "dong-minh", uuTien: 88 },
          { ten: "Tang Mộc Nhai", quanHe: "Thuộc hạ (bị thu phục)", ghiChu: "Đệ tử Đấu Tà phái, sở trường dùng độc; bị VL trấn áp, linh hồn phong ấn trong Diện Hồn kỳ làm nguồn tin về Tu Ma Hải (@c0124–@c0125).", tag: "khac", uuTien: 52 },
          { ten: "Thượng Quan Mặc", quanHe: "Thuộc hạ (ràng buộc tinh huyết)", ghiChu: "Hắc y Ma quân, Kết Đan trung kỳ đỉnh; bị VL áp đảo, dâng bản mệnh tinh huyết → ràng buộc sống-chết hai chiều, theo hầu VL (@c0129–@c0130).", tag: "khac", uuTien: 78 },
          { ten: "Tiễn Khôn", quanHe: "Thù địch — đã chết", ghiChu: "Đại trưởng lão Đấu Tà phái (Kết Đan trung kỳ); cầm đầu mười Kết Đan kỳ truy sát VL; bị VL niệm Tử Chú thuật giết, lệnh bài vỡ kết thành chữ 'Diệt' (@c0128–@c0129).", tag: "thu-dich" },
          { ten: "Tư Đồ Nam", quanHe: "Sư phụ thật sự (ẩn trong Nghịch Thiên Châu)", ghiChu: "Nguyên Anh kỳ cường giả Chu Tước Quốc lục cấp, bị truy sát thân hủy ẩn vào Nghịch Thiên Châu; âm thầm trợ giúp VL gần 30 năm, dạy ma đạo và Khôi Lỗi thuật; đang giữ hồn phách cha mẹ VL bên trong Nguyên Anh (@c0046, @c0089, @c0102, @c0110).", tag: "su-mon", uuTien: 100 },
          { ten: "Bát Cực Ma Quân", quanHe: "Đối tác-uy hiếp (hiệp nghị Ch.140)", ghiChu: "Nguyên Anh/Hóa Thần kỳ; truy sát VL vì Tử Chú thuật; đạt hiệp nghị Ch.140 — VL hộ tống lão vào địa phương bí ẩn, đổi lấy Lập Anh đan + bảo vật (@c0138–@c0140).", tag: "dong-minh", uuTien: 58 }
        ],
        tuiDo: {
          congPhap: [
            { ten: "Ngưng Khí tam thiên", moTa: "Công pháp cơ bản nhất Tôn Đại Trụ truyền cho Vương Lâm khi thành đệ tử nội môn; gồm ba tầng, toàn bộ Ngưng Khí kỳ có mười lăm tầng. Bản chất: thổ nạp thiên địa linh khí, tích lũy vào thân, cải biến thể chất làm cơ sở tu luyện. Dấu hiệu linh khí nhập thể: cảm giác như côn trùng bò (@c0017).", nguon: "@c0017" },
            { ten: "Thuật giấu tu vi", moTa: "Ngọc giản mua 5 khỏa linh đan tại giao dịch hội bí mật; ngụy trang tu vi xuống dưới tầng 1, chỉ Trúc Cơ kỳ mới phá được; Vương Lâm mua vì rất hợp với việc giấu mình (@c0032). Cần Ngưng Khí tầng 2 để tu luyện được (@c0032).", nguon: "@c0032, @c0034" },
            { ten: "Khẩu quyết Ngưng Khí kỳ tầng 4–9", moTa: "Ngọc giản ghi khẩu quyết các tầng 4 đến 9; VL đổi từ nhị sư huynh Trương Cuồng bằng toàn bộ Linh Khí Tuyền Thủy còn lại tại giao dịch hội (@c0033). Là chìa khóa để VL đột phá các tầng tiếp theo.", nguon: "@c0033" },
            { ten: "Khu Vật Thuật", moTa: "Tiên thuật cơ sở để điều khiển phi kiếm; Tôn Đại Trụ dạy sau khi nhận VL làm đệ tử chân chính (@c0038). Học được khi đạt Ngưng Khí tầng 2. Điều khiển phi kiếm thành thục cần tầng 4.", nguon: "@c0038" },
            { ten: "Huyết Luyện thuật (Huyết Luyện Pháp)", moTa: "Phương pháp tế luyện pháp bảo do Tư Đồ Nam truyền (@c0071). Cắn lưỡi phun máu tươi, dùng linh lực biến pháp quyết tạo phù văn hút máu dung nhập vào pháp bảo. Ưu: pháp bảo lập tức thành bản mệnh vật. Nhược: pháp bảo bị hao tổn liên lụy tính mạng chủ; mọi pháp bảo qua huyết luyện đều mang mùi máu.", nguon: "@c0071" },
            { ten: "Khôi Lỗi thuật", moTa: "Thuật ma đạo do Tư Đồ Nam truyền: mổ ngực lấy ngũ tạng kẻ địch tế luyện ba ngày, biến xác thành khôi lỗi (con rối) chịu sai khiến. VL luyện Chu Bằng thành khôi lỗi, sai về Huyền Đạo Tông âm thầm diệt kẻ bất lợi (@c0060, @c0061) — bước đầu nhuốm ma đạo.", nguon: "@c0056, @c0060, @c0061" },
            { ten: "Đoạt Cơ Đại Pháp", moTa: "Pháp ma đạo dùng người sống (Lô Đỉnh) làm lò; hút máu/thịt/xương (3 quả cầu) + rút linh hồn + đoạt linh căn của Lô Đỉnh. Tư Đồ Nam truyền khẩu quyết (@c0072). VL dùng Đằng Lệ (Trúc Cơ hậu kỳ) làm Lô Đỉnh — đoạt một phần ba linh căn thành công (@c0072–@c0073). Hiệu quả: tăng tốc tu luyện Trúc Cơ + cải tạo thể chất.", nguon: "@c0072, @c0073" },
            { ten: "Hoàng Tuyền Thăng Khiếu Quyết", uuTien: 86, moTa: "Công pháp ma đạo 9 tầng do Tư Đồ Nam truyền, gọi là 'quỷ công'. Cần Cực Âm chi địa làm môi trường; cứ 3 tầng ngưng kết 1 quả hàn đan; 3 quả hàn đan dung hợp → đột phá Kết Đan kỳ trực tiếp. Tam đại khiếu huyệt: Đan Điền, Khí Hải, Tổ Khiếu. Cơ chế 'không phá thì không lập': mỗi tầng đại thành phải phá hủy khiếu huyệt rồi lập lại để lên tầng kế. Tầng 3 đại thành @c0077 (hàn đan thứ nhất hình thành); tầng 5 đại thành @c0079. Bản VL học đã bị thất bản theo thời gian; kết hợp Nghịch Thiên Châu khiến linh lực dị biến Cực cảnh (@c0078).", nguon: "@c0073, @c0074, @c0075, @c0076, @c0077, @c0078, @c0079" },
            { ten: "Đại Tự Tại Tu La thuật", moTa: "Công pháp ma đạo 6 tầng của Tà Ma Tông; cơ chế luyện Tu La chi hồn thay thế Nguyên Anh. Thu từ túi trữ vật Tôn Hữu Tài sau khi hắn tự thiêu (@c0117).", nguon: "@c0117" },
            { ten: "Ngụy Thổ Độn thuật", moTa: "Biến thể Thổ Độn thuật, cho phép dịch chuyển tức thời trong phạm vi 3 trượng. Thu từ túi trữ vật Tôn Hữu Tài (@c0117).", nguon: "@c0117" },
            { ten: "Tử Chú thuật", uuTien: 84, moTa: "Thần thông ma đạo thượng cổ ghi trong Tàng Kinh Các Lạc Hà Môn, cực khó tu (tam khí âm-tử-sát hợp nhất, cửu tử nhất sinh). Luyện thành thì chỉ cần niệm một chữ 'Tử' là đối tượng thất khiếu chảy máu, thần thức phá liệt mà chết. VL dùng giết ba tu sĩ Đấu Tà phái (@c0124), Tiễn Khôn (@c0129); uy lực được đánh giá không kém Nguyên Anh kỳ (khiến ngọc phù chống-Nguyên-Anh-kỳ tự vỡ).", nguon: "@c0124, @c0129" },
            { ten: "Luyện khí thuật Chiến Thần Điện", moTa: "Khí thuật ba quá trình Điều - Dung - Hợp, vật dẫn cốt lõi là Phiên Ưng Lô (phân thập phẩm). VL học từ Chiến Thần Điện; dùng đúc Phiên Ưng Lô cửu phẩm từ sọ hoang thú và luyện Thủy Tinh phi kiếm mới cho kiếm linh (@c0127).", nguon: "@c0117, @c0124, @c0127" },
            { ten: "Hoàng tuyền băng diễm (hoàng tuyền chi viêm)", moTa: "Tinh túy của Hoàng Tuyền Thăng Khiếu Quyết khi đại thành — ngọn lửa lam ba tấc tỏa hàn khí (không phải nhiệt), uy lực hủy diệt, thiêu rã được cả tu sĩ Kết Đan kỳ. Mỗi lần dùng hao mòn đan phôi/kim đan nên VL dè dặt (@c0127).", nguon: "@c0127" }
          ],
          danDuoc: [
            { ten: "Đoạt Linh Đan", moTa: "Đan dược phát hàng tháng tại đan phòng chính viện (cùng với hạ phẩm linh thạch mẩu nhỏ); dùng để gia tăng linh khí khi tu luyện Ngưng Khí kỳ (@c0020). Cũng là đơn vị tiền tệ tại giao dịch hội bí mật (@c0032). Môn phái phát 100 viên/năm trong đợt tập huấn hậu sơn (@c0035).", nguon: "@c0020, @c0032, @c0035" },
            { ten: "Lục Đan (Tạc Đan)", moTa: "Lấy được từ Thi Mị sau khi dùng Thi Mị làm 'vũ khí' diệt Đằng Lệ (@c0072). Đan đặc biệt của ma đạo tứ cấp tu chân quốc; khác kim đan (lục đan vô số lượng); công dụng chính là tự bạo — một viên bằng nửa kích toàn lực Kết Đan kỳ. Từng có kẻ nắm vạn viên Nguyên Anh kỳ ngũ cấp cũng phải kiêng dè.", nguon: "@c0072" },
            { ten: "Thiên Ly đan", moTa: "Trân phẩm linh đan tăng tỷ lệ kết đan; cả Hỏa Phần quốc còn không quá ba mươi viên. VL có một viên bán thành phẩm của Lý Mộ Uyển (@c0123); nàng dùng Ma Huyết đằng luyện thành thành phẩm giúp VL trùng kích kết đan thành công (@c0127).", nguon: "@c0123, @c0126, @c0127" },
            { ten: "Giao đan (nội đan giao long)", moTa: "Nội đan của con giao long (trung phẩm linh thú) VL kéo về từ Thi Cốc; Lý Mộ Uyển giao lại cho VL giữ để dành luyện chế đan dược (@c0125, @c0126).", nguon: "@c0125, @c0126" },
            { ten: "Kim đan chiến lợi phẩm (Đấu Tà phái)", moTa: "Kết tinh tu vi của các Kết Đan kỳ Đấu Tà phái bị VL giết (Côn Tang, đại đầu tu sĩ...); VL thu vào túi trữ vật khi truy sát (@c0127, @c0128).", nguon: "@c0127, @c0128" },
            { ten: "Tu đan Kết Đan kỳ (dành cho Kết Anh)", moTa: "Viên đan ngưng tụ từ toàn bộ tu vi Kết Đan kỳ do cơ chế Vạn Ma Bách Nhật Tru Sát lệnh tạo ra; VL thu vào túi trữ vật, để dành dùng khi Kết Anh để tăng tỷ lệ thành công (@c0138).", nguon: "@c0138" },
            { ten: "Lập Anh đan (Bát Cực Ma Quân trao)", moTa: "Đan dược tăng tỷ lệ thành công khi Kết Anh; cực hiếm ở tam cấp tu chân quốc. VL nhận từ Bát Cực Ma Quân theo hiệp nghị đổi lấy việc hộ tống lão vào địa phương bí ẩn sắp mở (@c0140).", nguon: "@c0140" }
          ],
          linhThu: [],
          nguyenLieu: [
            { ten: "Linh Khí Tuyết Thủy", moTa: "Nước băng tuyết ngâm Thạch Châu, do Vương Lâm tự chế; hiệu quả cao hơn tuyền thủy nhưng thấp hơn lộ thủy. Thứ tự: lộ thủy > tuyết thủy > tuyền thủy (@c0031). Đã dùng hết sau 2 năm bế quan hậu sơn (@c0036).", nguon: "@c0031" },
            { ten: "Phần Kim Quả", moTa: "Linh quả hỏa thuộc tính mọc ở Phần Kim sơn mạch (Hỏa Phần quốc); VL thu hoạch toàn vùng để Nghịch Thiên Châu hấp thu — giúp châu hình thành lá thứ 3 và xuất hiện lá thứ 5 (@c0111, @c0112).", nguon: "@c0111, @c0112" },
            { ten: "Cốt tủy + giao cân giao long", moTa: "Vật liệu thô từ con giao long (trung phẩm linh thú) VL kéo về từ Thi Cốc: cốt tủy quý hiếm để dành luyện chế, giao cân (gân) sau tế luyện hóa thành Long cân. Lý Mộ Uyển giao lại cho VL giữ (@c0125, @c0126).", nguon: "@c0125, @c0126" },
            { ten: "Da giao long (giao long bì)", moTa: "Da con giao long Lý Mộ Uyển chế thành hai bộ nội giáp phòng ngự mạnh (tự khôi phục); VL mặc một bộ, một đoạn da dài hơn nghìn trượng đem đổi lấy Bách Thú Linh Lô (@c0126, @c0127).", nguon: "@c0126, @c0127" },
            { ten: "Hạ phẩm linh thạch", moTa: "Vật giúp ngưng khí dễ dàng hơn. Tôn Đại Trụ cấp một khối để thổ nạp (@c0019) và hứa thêm nếu đổi hồ lô (@c0017); đan phòng phát hàng tháng mẩu nhỏ (@c0020).", nguon: "@c0017, @c0019, @c0020" },
            { ten: "Trung phẩm linh thạch (hơn 2000, từ Hứa + Cát)", moTa: "Linh thạch tích lũy gần 50 năm của Hứa Hạo và Cát Dương; VL thu từ du hồn sau khi cả hai xác nhận tử vong — nguồn tài nguyên chính để thiết lập Qui Giáp Huyền Diệt trận (@c0107).", nguon: "@c0107" }
          ],
          phapBao: [
            { ten: "Hồ Lô (đựng nước linh khí)", moTa: "Hồ lô hoang dại VL tìm trong núi, dùng đựng nước suối ngâm Nghịch Thiên Châu (Thạch Châu) — nước biến thành chứa linh khí sung túc. Bị Tôn Đại Trụ phát hiện và tịch thu khi lục soát phòng (@c0016). VL sau đó lấy lại được ba hồ lô sương sớm (sương bên trong đông đặc) và cất vào túi trữ vật (@c0020). Linh khí trong hồ lô cũ cạn dần sau ~1 tháng (@c0019).", nguon: "@c0012, @c0016, @c0019, @c0020" },
            { ten: "Thiên Lý Phù", moTa: "Tờ giấy vàng trông như giấy thường, dùng được hai lần, dán ở đùi để tăng tốc độ di chuyển cho phàm nhân; phát bạch quang chói mắt, dã thú thấy tránh xa. Tôn trưởng lão cấp để Vương Lâm về dự thọ cha (@c0012). Lưu sư huynh sau đó tặng thêm một tờ (@c0015).", nguon: "@c0012, @c0015" },
            { ten: "Cự Phú", moTa: "Phi kiếm đệ nhất Tu Chân Giới Triệu quốc; khối kim loại dài ~1m, mạ hoàng kim, chuôi khảm 2 khối kim cương lớn, tua dệt sợi vàng. Di vật sư tổ Hằng Nhạc Phái ngàn năm trước; cấm buôn bán (vi phạm bị trục xuất). VL lấy tại Kiếm Linh Các (@c0039), bộc lộ thực lực khi cưỡng qua cấm chế ba tầng một cách thoải mái.", nguon: "@c0039", uuTien: 55 },
            { ten: "Ngọc phù (Lưu Văn tặng)", moTa: "Pháp bảo phòng thân chứa một kích của cao thủ Kết Đan kỳ. Lưu Văn Cử tặng khi VL xin ra ngoài thăm cha mẹ (@c0058).", nguon: "@c0058" },
            { ten: "Ngọc giản (phi kiếm Trương Cuồng)", moTa: "Phi kiếm của Trương Cuồng — sau khi Trương Cuồng chết, phi kiếm trở về hình dạng ngọc giản; VL thu lấy (@c0059).", nguon: "@c0059" },
            { ten: "Roi trường tiên gỗ đen (Trương Cuồng)", moTa: "Mấy đoạn gỗ màu đen nối thành cây roi dài phát làn khí nguy hiểm; mất điều khiển khi Trương Cuồng chết, VL thu lấy (@c0059).", nguon: "@c0059" },
            { ten: "Roi rắn Hắc Mộc Điều", moTa: "Vũ khí cận chiến VL tự chế trong 4 năm bế quan lần 2, dưới sự chỉ dẫn của Tư Đồ Nam từ vật liệu Hắc Mộc Điều; lần đầu dùng trong trận chiến với bạch y trung niên Bạch Triển (@c0067).", nguon: "@c0067" },
            { ten: "Phi kiếm cổ quái (đoạt từ Bạch Triển)", uuTien: 92, moTa: "Phi kiếm từng thuộc Bạch Triển — đệ tử thứ sáu của Tức Mặc lão nhân. Đặc tính cổ quái: phun hư ảnh đỏ khi phản công, có khả năng thuấn di tức thời, màu sắc thay đổi theo uy lực, linh tính mạnh kháng cự tế luyện của người mới (@c0067–@c0070). VL đoạt được sau khi diệt Bạch Triển bằng ngọc phù Đan bảo (@c0068); bắt đầu tế luyện tại Đằng Gia thành (@c0070). Tế luyện lại lần 2 tại Quyết Minh Cốc @c0094: huyết luyện bằng tinh huyết + âm hàn dịch thể từ hồ lô, kết quả phi kiếm thu nhỏ còn một nửa kích thước, xuất hiện vân huyết sắc, tỉ lệ chuôi từ 1/5 → 1/15 — tốc độ và thuấn di tăng mạnh, đủ đe dọa Kết Đan kỳ chưa có phòng ngự.", nguon: "@c0067, @c0068, @c0070, @c0094" },
            { ten: "Vỏ kiếm đen (đoạt từ Bạch Triển)", uuTien: 88, moTa: "Vỏ đựng phi kiếm cổ quái, màu đen. Tư Đồ Nam xác nhận đây mới là bảo bối thật sự (@c0068). Công năng đặc biệt: vô hiệu hóa Dẫn Lực Thuật của Vương Lâm — lần đầu tiên pháp bảo làm được điều này (@c0067–@c0068). Phi kiếm chui vào vỏ càng sâu màu đổi lục→lam→đen→hồng, uy lực càng tăng (@c0075). VL đoạt được cùng lúc với phi kiếm.", nguon: "@c0067, @c0068, @c0071, @c0075" },
            { ten: "Pháp bảo huyễn thuật (hạt châu)", moTa: "Hạt châu nhỏ bằng 1/10 Thạch Châu, dính tro bụi, có nhiều vết nứt; do quái nhân a Ngốc tặng (@c0076). Quán linh lực vào tỏa khói trắng huyễn hóa lão nhân bạch y (mũi ưng, mắt diều hâu) như thật; thực lực lão nhân tỉ lệ thuận linh lực quán nhập (thử: Ngưng Khí t15→Trúc Cơ trung kỳ→mức 'dưới Kết Đan kỳ không đủ tư cách'). Mỗi lần kích hoạt mạnh hạt châu thêm một vết nứt. Công dụng chính: dọa người/ngụy tạo cao thủ. Sau 2 tháng bế quan nghiên cứu @c0094–@c0099, VL phát hiện thêm công năng mở rộng: có thể hóa hình người (tướng mạo tùy chỉnh), hóa cự long, và nguyên thần bên trong có khả năng tự động hút/rút trớ chú — VL dùng làm nghi binh cự long đánh lừa Đằng Hóa Nguyên @c0099.", nguon: "@c0076, @c0094, @c0099" },
            { ten: "Ma Đầu (tự chế từ Hứa Lập Quốc)", uuTien: 78, moTa: "Ma Đầu do VL tự tạo: bắt sống Hứa Lập Quốc (Thiên Cương Tông, mượn thân Trúc Cơ Thi Âm Tông), hủy ý thức rồi ép phần nguyên thần còn lại liên tục tiêu thụ hồn dã thú cho đến khi hào quang ám hồng hình thành — Ma Đầu Trúc Cơ hậu kỳ đỉnh giả đan. Lưu giữ trong Thiết Phiến rồi ký thân vào phi kiếm đen mới (@c0112, @c0117).", nguon: "@c0112, @c0117" },
            { ten: "Phi kiếm đen mới (tiểu kiếm ký thân)", moTa: "Phi kiếm đen tế luyện từ phi kiếm cổ quái cũ: VL để tiểu kiếm 'ký thân' lên phi kiếm đen của Tứ sư huynh — phá Thiết Phiến thành thiết thủy rồi hình thành phi kiếm đen mới. Kiếm linh chỉ 'ký thân' chưa tế luyện thật sự nên phi kiếm biến dạng sau khi đánh 2 hỏa thú (@c0117, @c0118).", nguon: "@c0117, @c0118" },
            { ten: "Thủy Tinh phi kiếm", uuTien: 92, moTa: "Phi kiếm mới VL luyện cho kiếm linh theo luyện khí thuật Chiến Thần Điện — trong suốt như thủy tinh, cực sắc bén, hiếm có; nuốt vào người để điều khiển. Thay cho phôi thể cũ đã hỏng của phi kiếm đen; một đạo tinh quang của nó phóng xa trăm dặm xuyên ngực địch (@c0127, @c0128).", nguon: "@c0127, @c0128" },
            { ten: "Long cân (giao long cân)", moTa: "Gân con giao long sau khi tế luyện hóa kim hoàng sắc; trú thể mới của ma đầu. Có thể phóng to/thu nhỏ, tự phân thành nhiều nhánh, đầu cuối bung dây kim sắc trói buộc; VL dùng cuốn kéo hàng loạt thi thể Kết Đan kỳ (@c0127–@c0130).", nguon: "@c0126, @c0127, @c0128, @c0130" },
            { ten: "Phiên Ưng Lô cửu phẩm", uuTien: 60, moTa: "Lô luyện khí cốt lõi của luyện khí thuật Chiến Thần Điện (phân thập phẩm). VL đúc từ sọ một hoang thú hiếm tìm trong Cốt Hải — cửu phẩm cực hiếm (điện chủ Luyện Khí điện chỉ có lô lục phẩm) (@c0127).", nguon: "@c0127" },
            { ten: "Bách Thú Linh Lô (ngũ phẩm)", moTa: "Đan lô luyện từ 99 hạ phẩm nội đan linh thú, có thể hấp đan khí linh thú tăng phẩm đan; giá 10 vạn thượng phẩm linh thạch. VL đổi bằng giao long bì giáp tại Luyện Khí Các Nam Đẩu thành để Lý Mộ Uyển luyện Thiên Ly đan thành phẩm (@c0127).", nguon: "@c0127" },
            { ten: "Diện Hồn kỳ", moTa: "Tiểu kỳ phong ấn hơn trăm linh hồn tu sĩ Tu Ma Hải (gồm Tang Mộc Nhai); VL dùng làm nguồn tin và nuôi ma đầu (@c0125, @c0126).", nguon: "@c0125" },
            { ten: "Nội giáp giao long", moTa: "Một bộ nội giáp phòng ngự mạnh (tự khôi phục) Lý Mộ Uyển chế từ da giao long; VL mặc trên người làm phòng cụ (@c0126).", nguon: "@c0126" },
            { ten: "Hai mảnh ngọc phù (di vật sư phụ Thượng Quan Mặc)", moTa: "Pháp bảo phòng thân duy nhất sư phụ Thượng Quan Mặc lưu lại, chống được một kích toàn lực của cao thủ Nguyên Anh kỳ; tự vỡ thành hai mảnh khi đỡ Tử Chú thuật, bị VL thu (@c0129).", nguon: "@c0129" },
            { ten: "Ngọc phù bảo mệnh Nguyên Anh (Dương Sâm tặng)", trangThai: "da-dung", moTa: "Ngọc phù bảo mệnh cấp Nguyên Anh do Dương Sâm (Nguyên Anh trung kỳ, đạo lữ Phượng Loan) trao khi VL được Phượng Loan thu làm ký danh đệ tử (@c0119). Vỡ khi chặn trùy tử bảy màu của Bát Cực Ma Quân (@c0139).", nguon: "@c0119, @c0139" },
            { ten: "Họa trục (cuộn tranh phong ấn)", moTa: "Cuộn tranh cổ đoạt được từ một tu sĩ Kết Đan kỳ (đã chết); bên trong phong ấn một linh thú tà dị với đôi mắt tam giác. Cực cảnh thần thức không khống chế được vì cuộn tranh chỉ có công năng phong ấn (@c0134).", nguon: "@c0134" },
            { ten: "Ngọc phù Đấu Long trận cải biến (Lý Mộ Uyển tặng)", moTa: "Ngọc giản Lý Mộ Uyển tặng lúc chia tay, ghi trận pháp dựa trên Đấu Long trận Đấu Tà phái cải biến, tăng uy lực về hướng phòng ngự — dùng khi bế quan gặp nguy (@c0137).", nguon: "@c0137" }
          ],
          khac: [
            { ten: "Túi trữ vật (ban đầu)", moTa: "Túi nhỏ màu xám, dẹt; tín vật thân phận đệ tử nội môn, đồng thời chứa đồ. Tôn Đại Trụ tặng khi thu VL làm đệ tử (@c0017).", nguon: "@c0017" },
            { ten: "Túi trữ vật (Trương Cuồng)", moTa: "Túi trữ vật của Trương Cuồng; VL thu lấy sau khi giết hắn (@c0059).", nguon: "@c0059" },
            { ten: "Y phục hồng sắc", moTa: "Trang phục đặc trưng của đệ tử nội môn Hằng Nhạc Phái. Nhận từ Tôn Đại Trụ khi thành đệ tử (@c0017).", nguon: "@c0017" },
            { ten: "Lệnh bài Dược Viên", moTa: "Lệnh bài tự do ra vào Dược Viên của Tôn Đại Trụ; cấm tự hái thảo dược khi chưa được phép (@c0039).", nguon: "@c0039" },
            { ten: "Ngọc phù chiến trường ngoại vực (Mã Lương)", moTa: "Ngọc phù xác nhận tư cách tham gia chiến trường ngoại vực — lấy từ túi trữ vật Mã Lương sau khi đoạt xá. Đặc trưng ngoại vực: dung nhan bảo toàn bên trong. (@c0107)", nguon: "@c0107" }
          ]
        }
      },
      nguon: ["@c0001", "@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0007", "@c0008", "@c0009", "@c0010", "@c0011", "@c0012", "@c0013", "@c0014", "@c0015", "@c0016", "@c0017", "@c0018", "@c0019", "@c0020", "@c0031", "@c0032", "@c0033", "@c0034", "@c0035", "@c0036", "@c0037", "@c0038", "@c0039", "@c0040", "@c0041", "@c0042", "@c0043", "@c0044", "@c0045", "@c0046", "@c0047", "@c0048", "@c0049", "@c0050", "@c0051", "@c0052", "@c0055", "@c0056", "@c0057", "@c0058", "@c0059", "@c0060", "@c0061", "@c0062", "@c0063", "@c0064", "@c0065", "@c0066", "@c0067", "@c0068", "@c0069", "@c0070", "@c0071", "@c0072", "@c0073", "@c0074", "@c0075", "@c0076", "@c0077", "@c0078", "@c0079", "@c0080", "@c0081", "@c0082", "@c0083", "@c0084", "@c0085", "@c0086", "@c0087", "@c0088", "@c0089", "@c0090", "@c0091", "@c0092", "@c0093", "@c0094", "@c0096", "@c0098", "@c0099", "@c0100", "@c0102", "@c0103", "@c0104", "@c0105", "@c0106", "@c0107", "@c0108", "@c0109", "@c0110", "@c0111", "@c0112", "@c0113", "@c0114", "@c0115", "@c0116", "@c0117", "@c0118", "@c0119", "@c0120", "@c0121", "@c0122", "@c0123", "@c0124", "@c0125", "@c0126", "@c0127", "@c0128", "@c0129", "@c0130", "@c0131", "@c0132", "@c0133", "@c0134", "@c0135", "@c0136", "@c0137", "@c0138", "@c0139", "@c0140"]
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
      theLuc: ["Vương Thị Gia Tộc", "Hằng Nhạc Phái", "Huyền Đạo Tông (đệ tử Phác Nam Tử @c0101)"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng 7 @c0087",
      trangThai: "song (đệ tử Phác Nam Tử, Huyền Đạo Tông @c0101)",
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
          },
          {
            chuong: "@c0101",
            importance: "normal",
            text: "Sau trận Quyết Minh Cốc, Liễu Mi cầu xin Phác Nam Tử thu Vương Hạo làm đệ tử để gián tiếp giúp Vương Lâm. Phác Nam Tử chấp thuận — Vương Hạo chính thức trở thành đệ tử Phác Nam Tử (Huyền Đạo Tông). Cùng Vương Trác lập chí giết Đằng Hóa Nguyên báo thù. (@c0101)"
          }
        ],
        tuVi: "Phàm nhân (Ch.2–10), đồng tử Hằng Nhạc Phái. Được học tiên pháp cấp thấp với tư cách đồng tử/người hầu, không làm tạp vụ. Chưa đạt Ngưng Khí tầng 1 tính đến @c0030. Sau @c0050: thăng nội môn đệ tử. Ngưng Khí tầng 7 @c0087. Trở thành đệ tử Phác Nam Tử (Huyền Đạo Tông) @c0101.",
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
      nguon: ["@c0002", "@c0003", "@c0004", "@c0005", "@c0006", "@c0021", "@c0030", "@c0043", "@c0050", "@c0087", "@c0101"]
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
      canhGioiCaoNhat: "Trúc Cơ kỳ (nhờ Phác Nam Tử @c0093)",
      trangThai: "song",
      vaiTro: "Nội môn đệ tử nổi bật Huyền Đạo Tông",
      tinhCach: "Tự tin về mị lực trời sinh; sắc sảo quan sát; chủ động để ý nhân vật lạ. Biết điều — lặng lẽ trao lệnh bài cho VL không cần giải thích.",
      blurb: "Nữ đệ tử nổi bật nhất Huyền Đạo Tông, mỹ mạo tuyệt luân. Đánh giá nhầm Vương Lâm chỉ là Ngưng Khí tầng 3 (@c0040). Đột phá Trúc Cơ nhờ Phác Nam Tử — tu vi được xác nhận @c0093. Lặng lẽ trao lệnh bài cho VL tại điểm tập kết Huyền Đạo Tông.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0040", importance: "normal", text: "Tới Hằng Nhạc Phái cùng đoàn Huyền Đạo Tông. Chú ý Vương Lâm, mỉm cười; VL gật đầu rồi rút lui. Tự tin về mị lực nhưng thất bại với VL. Đánh giá nhầm VL chỉ là Ngưng Khí tầng 3." },
          { chuong: "@c0047", importance: "normal", text: "Xuất trận tỷ thí tại Thương Tùng Phong, dùng Thủy Mạc đánh bại Triệu Long (đệ tử Hằng Nhạc Phái). (@c0047)" },
          { chuong: "@c0048", importance: "minor", text: "Tiết lộ bí mật Trương Cuồng (Nhị sư huynh dùng Linh Tuyền thủy giữ nhan) cho Vương Lâm biết trước tỷ thí. (@c0048)" },
          {
            chuong: "@c0093",
            importance: "normal",
            text: "Tại điểm tập kết Huyền Đạo Tông, lặng lẽ ném lệnh bài cho VL không nói một tiếng, thở dài sau khi VL đi. Tu vi Trúc Cơ kỳ được Phác Nam Tử xác nhận. (@c0093)"
          }
        ],
        tuVi: "Trúc Cơ kỳ (nhờ Phác Nam Tử, xác nhận @c0093). Trước đó che giấu tu vi bằng tiên pháp (@c0040).",
        tuViMoc: [
          { chuong: "@c0093", canhGioi: "Trúc Cơ kỳ", text: "Tu vi Trúc Cơ kỳ được Phác Nam Tử xác nhận khi VL ép Lý Sơn dẫn đến điểm tập kết (@c0093)." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đối tượng để ý / giao lệnh bài", ghiChu: "Ngạc nhiên VL không bị mê hoặc @c0040; lặng lẽ trao lệnh bài @c0093.", tag: "xa-la" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0040", "@c0047", "@c0048", "@c0093"]
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
      trangThai: "sống sót — chưa chết; đang ngủ sâu trong Nguyên Anh, giữ hồn phách cha mẹ VL; Nguyên Anh thu nhỏ còn 1/10 @c0110",
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
          },
          {
            chuong: "@c0095",
            importance: "major",
            text: "Kể lại lai lịch: vốn là đệ nhất cao thủ tinh cầu lục cấp tu chân quốc; bị kẻ địch từ thất cấp tu chân quốc ép bỏ thân xác, dùng quỷ hồn thuật ghi lại ký ức vào ngọc giản Thi Âm tông. Giải thích về hệ thống cấp bậc tu chân quốc và các thế lực ngoài tầm Triệu quốc. (@c0095)"
          },
          {
            chuong: "@c0096",
            importance: "major",
            text: "Giải thích Anh Biến kỳ (cảnh giới trên Hóa Thần) và đặc điểm của nó. Chỉ vị trí đặc biệt để VL đột phá Trúc Cơ trung kỳ — đây là điều kiện để phục hồi thần thức TĐN. Mộng Cảnh không gian tiến hóa khi Thủy thuộc tính viên mãn. (@c0096)"
          },
          {
            chuong: "@c0102",
            importance: "major",
            text: "VL (linh hồn chi hỏa trong khe nứt) phát hiện Tư Đồ Nam chưa chết — không phải thần trụ trong Nghịch Thiên Châu. TĐN đang ngủ sâu, bên trong Nguyên Anh lưu giữ hồn phách của cha mẹ VL. (@c0102)"
          },
          {
            chuong: "@c0110",
            importance: "major",
            text: "VL vào Mộng Cảnh qua Nghịch Thiên Châu lần đầu sau khi thoát khỏi Vực Ngoại. Nhìn thấy Nguyên Anh của TĐN đã thu nhỏ còn 1/10 kích thước bình thường, mờ tối. Hai ánh sáng mờ nhạt bên trong là hồn phách cha mẹ VL. VL khóc và quỳ lạy trước TĐN. (@c0110)"
          }
        ],
        tuVi: "Lục cấp (Chu Tước Quốc) — đã thân hủy, chỉ còn tinh hoa nguyên anh sót ít (chỉ còn một lần thuấn di @c0060). Đến @c0089: còn 3 thuấn di (dưới dạng Hồn Kỳ). Tương đương Nguyên Anh kỳ hoặc cao hơn trong hệ thống Tu Chân Quốc 5 cấp. Từng là đệ nhất cao thủ tinh cầu lục cấp tu chân quốc @c0095. Trạng thái hiện tại: ngủ sâu trong Nguyên Anh thu nhỏ còn 1/10, giữ hồn phách cha mẹ VL @c0102, @c0110.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Đối tượng dẫn dắt / chủ nhân tương lai Thạch Châu", ghiChu: "Theo dõi gần 30 năm, dùng tinh hoa nguyên anh trợ giúp VL; ý đồ ngầm dẫn VL về Ma môn @c0060.", tag: "an-nhan" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0046", "@c0047", "@c0048", "@c0052", "@c0056", "@c0058", "@c0059", "@c0060", "@c0084", "@c0089", "@c0090", "@c0095", "@c0096", "@c0102", "@c0110"]
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
      canhGioiCaoNhat: "Trúc Cơ sơ kỳ (@c0093, mới đột phá hơn 1 năm)",
      trangThai: "song",
      vaiTro: "Đệ tử Huyền Đạo Tông",
      tinhCach: "Chưa được mô tả chi tiết.",
      blurb: "Đệ tử Huyền Đạo Tông. Dùng công pháp Thủy Mạc đánh bại Triệu Long trong tỷ thí @c0047. Đột phá Trúc Cơ sơ kỳ (mới hơn 1 năm) — gọi VL là 'Vương sư huynh' tại điểm tập kết Huyền Đạo Tông @c0093.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0047", importance: "minor", text: "Dùng Thủy Mạc đánh bại Triệu Long trong trận mở màn tỷ thí. (@c0047)" },
          {
            chuong: "@c0093",
            importance: "normal",
            text: "Hiện diện tại điểm tập kết Huyền Đạo Tông khi VL đến cùng Lý Sơn. Gọi VL là 'Vương sư huynh'; tu vi Trúc Cơ sơ kỳ, mới đột phá hơn 1 năm. Chứng kiến VL giết lão Mã (Trúc Cơ trung kỳ) bằng một chiêu. (@c0093)"
          }
        ],
        tuVi: "Trúc Cơ sơ kỳ (@c0093, mới đột phá hơn 1 năm).",
        tuViMoc: [
          { chuong: "@c0093", canhGioi: "Trúc Cơ sơ kỳ", text: "Tu vi xác nhận tại điểm tập kết Huyền Đạo Tông @c0093; mới đột phá hơn 1 năm." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Sư huynh (gọi xưng)", ghiChu: "Gọi VL là 'Vương sư huynh' khi gặp ở điểm tập kết @c0093.", tag: "ban-be" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0047", "@c0093"]
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
      blurb: "Đệ tử Huyền Đạo Tông, tầng 7 Ngưng Khí. Họ 'Từ' của cô khiến Tư Đồ Nam (ẩn trong Nghịch Thiên Châu) bất ngờ. Từng có cảm tình với 'Vương Trác' là bí danh của Vương Lâm.",
      tabs: {
        diem: [
          { text: "Họ 'Từ' của cô gây phản ứng mạnh nơi Tư Đồ Nam ẩn trong Nghịch Thiên Châu.", chuong: "@c0063" }
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
      trangThai: "song (bế quan tại Đằng Gia thành sau trận Quyết Minh Cốc, thề Nguyên Anh hậu kỳ mới xuất quan @c0101)",
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
          },
          {
            chuong: "@c0096",
            importance: "normal",
            text: "Thông đạo Vực Ngoại mở; ĐHN hồi hộp phấn khích đứng chờ ở cốc khẩu cùng đám tu sĩ Triệu quốc — sắp được vào Vực Ngoại chiến trường. (@c0096)"
          },
          {
            chuong: "@c0097",
            importance: "normal",
            text: "Linh giác cảm nhận trớ chú đang tiếp cận; thân phận khách khanh lão tổ Vô Phong Cốc được xác nhận. (@c0097)"
          },
          {
            chuong: "@c0098",
            importance: "normal",
            text: "Bị VL giả Nguyên Anh trung kỳ công khai khiêu chiến trước đám đông; vươn tay chộp ngay, bị thuấn di né. Nhận ra VL dùng chiêu thuấn di — khả năng của Nguyên Anh kỳ trở lên, sinh nghi ngờ. (@c0098)"
          },
          {
            chuong: "@c0099",
            importance: "normal",
            text: "Dùng Hồn Phiên (đại kỳ 7 thước, chứa 3 vạn tinh hồn) tấn công pháp bảo cự long A Ngốc. Nhận ra A Ngốc là nghi binh; mở kích hoạt Vực Ngoại thông đạo. (@c0099)"
          },
          {
            chuong: "@c0100",
            importance: "major",
            text: "Phóng Nguyên Anh ra ngoài xác, dùng trớ chú lưới máu giam chân VL; lấy hồn phách phụ mẫu VL (phong trong Hồn Kỳ) tra tấn tinh thần. Hủy túi trữ vật VL kể cả lệnh bài tư cách. Bị VL tự chặt tay phải đoạt ngược túi trữ vật bằng Dẫn Lực Thuật. Cho ba vạn tinh hồn nuốt dần chân tay VL; bị sốc khi VL tự nổ thân thể phóng vào thông đạo Vực Ngoại; sắc mặt biến đổi, không kịp ngăn. (@c0100)"
          },
          {
            chuong: "@c0101",
            importance: "normal",
            text: "Sau trận Quyết Minh Cốc, về Đằng Gia thành bế quan — thề không đạt Nguyên Anh hậu kỳ không xuất quan. Vẫn mang cảm giác sợ hãi sau khi đối đầu VL, không biết VL đã chết hay chưa. (@c0101)"
          }
        ],
        tuVi: "Nguyên Anh sơ kỳ (@c0072, yếu hơn Nguyên Anh trung kỳ @c0078). Sở hữu hồn kỳ cấp Nguyên Anh @c0089; đang hướng tới Nguyên Anh trung kỳ @c0097; bế quan thề Nguyên Anh hậu kỳ @c0101.",
        tuViMoc: [
          { chuong: "@c0072", canhGioi: "Nguyên Anh kỳ", text: "Xác nhận khi Đằng Lệ đe dọa 'ông nội là cao thủ Nguyên Anh kỳ' và hóa thân xuất hiện @c0072. Lập trận lời nguyền hao tổn lớn Nguyên Anh — Nguyên Anh rút nhỏ thấy rõ." }
        ],
        nhanMach: [
          { ten: "Đằng Lệ", quanHe: "Cháu nội", ghiChu: "Yêu quý đến mức lưu thần thức trong linh hồn cháu; cháu chết → thề báo thù Vương Lâm @c0072.", tag: "than-toc" },
          { ten: "Vương Lâm", quanHe: "Kẻ thù (thề báo thù)", ghiChu: "Lời nguyền định vị in trên trán VL @c0072; truy sát @c0077; bị gián đoạn @c0078; diệt Vương gia @c0087; đang chờ VL ra @c0087–89; dùng hồn phách phụ mẫu tra tấn, bị VL tự nổ thân @c0100.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0072", "@c0077", "@c0078", "@c0087", "@c0088", "@c0089", "@c0096", "@c0097", "@c0098", "@c0099", "@c0100", "@c0101"]
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
          { text: "Nhìn chằm chằm phù văn trên cọc gỗ Thi Âm tông 'như đang suy nghĩ tới một người nào đó'.", chuong: "@c0080" }
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
    },
    {
      id: "lam-dich",
      name: "Lâm Dịch",
      cn: "",
      aliases: ["Sứ giả Thông Thiên tháp"],
      gioiTinh: "nam",
      theLuc: ["Thông Thiên tháp"],
      canhGioiCaoNhat: "Cao hơn Nguyên Anh kỳ (toàn bộ Nguyên Anh kỳ hiện diện đều cúi đầu chào @c0097)",
      trangThai: "song",
      vaiTro: "Phụ — sứ giả Thông Thiên tháp phụ trách Triệu quốc",
      tinhCach: "Tươi cười thường trực; uy quyền ngầm khiến toàn bộ Nguyên Anh kỳ kính cẩn; tinh tế nhận ra xuất xứ pháp bảo ngũ cấp tu chân quốc.",
      blurb: "Đại diện Thông Thiên tháp tại Triệu quốc, thân béo tròn như quả bóng. Xuất hiện cùng Phác Nam Tử, Hư Mi chân nhân, lão nhân Thiên Đạo môn. Toàn bộ Nguyên Anh kỳ tại hiện trường cúi đầu chào. Nhận ra Thiên Huyễn Biến là pháp bảo ngũ cấp tu chân quốc xuất xứ Huyễn thành @c0098. Biến sắc khi VL tự nổ thân vào thông đạo; câu cuối 'Là—' bị ngắt @c0100.",
      tabs: {
        diem: [
          { text: "Thân béo tròn như quả bóng; tươi cười không dứt; dáng vẻ bình thường nhưng toàn Nguyên Anh kỳ đều kính cẩn cúi đầu.", chuong: "@c0097" },
          { text: "Nhận ra Thiên Huyễn Biến của VL là pháp bảo ngũ cấp tu chân quốc từ Huyễn thành — xác nhận Lam Băng Thiểm xuất xứ Hoàng Tuyền Tông @c0098–@c0100.", chuong: "@c0098" }
        ],
        kinhLich: [
          {
            chuong: "@c0097",
            importance: "major",
            text: "Xuất hiện tại cốc khẩu Quyết Minh Cốc cùng đoàn tùy tùng. Toàn bộ Nguyên Anh kỳ hiện diện cúi đầu chào — thực lực vượt Nguyên Anh. Đi cùng Phác Nam Tử, Hư Mi chân nhân (tóc bạc, đệ nhất Phiêu Miễu tông), lão nhân Thiên Đạo môn. (@c0097)"
          },
          {
            chuong: "@c0098",
            importance: "normal",
            text: "Nhận ra Thiên Huyễn Biến VL dùng là pháp bảo từ ngũ cấp tu chân quốc, xuất xứ Huyễn thành. Xác nhận khi VL phô diễn tu vi giả leo thang trước đám đông. (@c0098)"
          },
          {
            chuong: "@c0100",
            importance: "normal",
            text: "Biến sắc khi VL tự nổ thân thể và phóng vào thông đạo Vực Ngoại; cùng người khổng lồ định truy đuổi nhưng bị lực đẩy ngăn lại. Nói câu cuối 'Là—' bị ngắt — ngụ ý nhận ra VL là ai. (@c0100)"
          }
        ],
        tuVi: "Vượt Nguyên Anh kỳ (toàn bộ Nguyên Anh kỳ cúi đầu @c0097). Cụ thể chưa xác nhận.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Phác Nam Tử", quanHe: "Đồng hành", ghiChu: "Cùng đi đến cốc khẩu @c0097.", tag: "dong-hanh" },
          { ten: "Hư Mi chân nhân", quanHe: "Đồng hành", ghiChu: "Đi cùng @c0097.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0097", "@c0098", "@c0100"]
    },
    {
      id: "hu-mi-chan-nhan",
      name: "Hư Mi chân nhân",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Phiêu Miễu tông"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (đệ nhất Phiêu Miễu tông @c0097)",
      trangThai: "song",
      vaiTro: "Phụ — đệ nhất cao thủ Phiêu Miễu tông",
      tinhCach: "Chưa mô tả chi tiết.",
      blurb: "Đệ nhất cao thủ Phiêu Miễu tông, tóc bạc. Theo Lâm Dịch đến cốc khẩu Quyết Minh Cốc; nhận diện Thi Âm tông nhân khôi (mắt đỏ, âm hàn). (@c0097)",
      tabs: {
        diem: [
          { text: "Nhận diện 5 người Thi Âm tông nhân khôi trong đám đông — tóc bạc, kinh nghiệm sâu.", chuong: "@c0097" }
        ],
        kinhLich: [
          {
            chuong: "@c0097",
            importance: "normal",
            text: "Theo Lâm Dịch đến cốc khẩu Quyết Minh Cốc. Nhận diện và chỉ ra 5 người Thi Âm tông nhân khôi (mắt đỏ hồng, âm hàn bao thân) trong đám đông tu sĩ. (@c0097)"
          }
        ],
        tuVi: "Nguyên Anh kỳ, đệ nhất cao thủ Phiêu Miễu tông (@c0097).",
        tuViMoc: [
          { chuong: "@c0097", canhGioi: "Nguyên Anh kỳ", text: "Xác nhận là đệ nhất Phiêu Miễu tông @c0097." }
        ],
        nhanMach: [
          { ten: "Tân Hải", quanHe: "Đồng tông (lão tổ khác)", ghiChu: "Cùng tông Phiêu Miễu; Tân Hải là lão tổ, Hư Mi là đệ nhất cao thủ @c0096–97.", tag: "dong-tong" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0097"]
    },
    {
      id: "tan-hai",
      name: "Tân Hải",
      cn: "",
      aliases: ["lão tổ Phiêu Miễu tông"],
      gioiTinh: "nam",
      theLuc: ["Phiêu Miễu tông"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (lão tổ @c0096)",
      trangThai: "song",
      vaiTro: "Phụ — lão tổ Phiêu Miễu tông",
      tinhCach: "Đau lòng mất đệ tử; thề báo thù kẻ giết người.",
      blurb: "Lão tổ Nguyên Anh kỳ Phiêu Miễu tông. Dẫn 25 đệ tử vào Quyết Minh Cốc, chỉ còn 8 người ra; thề truy tìm và báo thù kẻ giết 17 đệ tử. (@c0096–@c0097)",
      tabs: {
        diem: [
          { text: "Mất 17 trên 25 đệ tử mang vào Quyết Minh Cốc — tổn thất nặng nhất trong các đại tông phái.", chuong: "@c0096" }
        ],
        kinhLich: [
          {
            chuong: "@c0096",
            importance: "normal",
            text: "Ra khỏi Quyết Minh Cốc với chỉ 8 đệ tử còn sống (vào với 25 người). Đau lòng thề báo thù kẻ giết 17 đệ tử còn lại — chưa biết thủ phạm là VL. (@c0096)"
          },
          {
            chuong: "@c0097",
            importance: "minor",
            text: "Hỏi về Hư Mi chân nhân trong đoàn Lâm Dịch; diện mạo vẫn đầy thù hận sau mất mát trong cốc. (@c0097)"
          }
        ],
        tuVi: "Nguyên Anh kỳ (@c0096).",
        tuViMoc: [
          { chuong: "@c0096", canhGioi: "Nguyên Anh kỳ", text: "Xác nhận là lão tổ Phiêu Miễu tông @c0096." }
        ],
        nhanMach: [
          { ten: "Hư Mi chân nhân", quanHe: "Đồng tông (đệ nhất cao thủ)", ghiChu: "Cùng Phiêu Miễu tông @c0096–97.", tag: "dong-tong" },
          { ten: "Vương Lâm", quanHe: "Kẻ thù (chưa biết)", ghiChu: "Thề báo thù kẻ giết 17 đệ tử — thực ra là VL @c0096.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0096", "@c0097"]
    },
    {
      id: "lao-ma",
      name: "Lão Mã",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Huyền Đạo Tông"],
      canhGioiCaoNhat: "Trúc Cơ trung kỳ (@c0093)",
      trangThai: "tu-vong",
      vaiTro: "Phụ — đệ tử Huyền Đạo Tông",
      tinhCach: "Hung hăng, ra tay trước khi suy nghĩ.",
      blurb: "Tu sĩ Trúc Cơ trung kỳ Huyền Đạo Tông. Ra tay khi VL xuất hiện tại điểm tập kết — bị VL giết bằng một chiêu băng hóa. Chết @c0093.",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0093",
            importance: "normal",
            text: "Tại điểm tập kết Huyền Đạo Tông, thấy VL xuất hiện liền ra tay tấn công. Bị Vương Lâm dùng Cực cảnh linh lực băng hóa tức thời — chết bằng một chiêu. Liễu Phong và đám đệ tử Huyền Đạo Tông kinh ngạc chứng kiến. (@c0093)"
          }
        ],
        tuVi: "Trúc Cơ trung kỳ (@c0093). Chết @c0093.",
        tuViMoc: [
          { chuong: "@c0093", canhGioi: "Trúc Cơ trung kỳ", text: "Tu vi xác nhận khi xuất hiện tại điểm tập kết; bị giết ngay lập tức." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Kẻ hạ sát", ghiChu: "Tấn công VL và bị giết bằng một chiêu @c0093.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0093"]
    },
    {
      id: "thuong-quan-van",
      name: "Thượng Quan Vân",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Chưa xác định rõ"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (lão tổ hiện diện tại cốc khẩu @c0096)",
      trangThai: "song",
      vaiTro: "Phụ — lão tổ Nguyên Anh kỳ tại cốc khẩu",
      tinhCach: "Chưa mô tả chi tiết.",
      blurb: "Lão tổ Nguyên Anh kỳ, xuất hiện tại cốc khẩu Quyết Minh Cốc @c0096–97, đứng cạnh lão tổ Tân Hải. Là thực thể RIÊNG — khác hẳn 'Thượng Quan trưởng lão' (Trúc Cơ kỳ, Hằng Nhạc Phái @c0051).",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0096",
            importance: "minor",
            text: "Xuất hiện tại cốc khẩu Quyết Minh Cốc sau khi thông đạo mở. (@c0096)"
          }
        ],
        tuVi: "Nguyên Anh kỳ, xác nhận là lão tổ @c0096.",
        tuViMoc: [
          { chuong: "@c0096", canhGioi: "Nguyên Anh kỳ", text: "Hiện diện như lão tổ tại cốc khẩu @c0096." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0096", "@c0097"]
    },
    {
      id: "nguoi-khong-lo",
      name: "Người Khổng Lồ (thực thể Vực Ngoại)",
      cn: "",
      aliases: ["người khổng lồ sọ đầu lâu"],
      gioiTinh: "khong-ro",
      theLuc: ["Thông Thiên tháp (liên hệ)"],
      canhGioiCaoNhat: "Không xác định — vượt Nguyên Anh kỳ (ép lùi Lâm Dịch @c0100)",
      trangThai: "hiện-dien",
      vaiTro: "Phụ bí ẩn — thực thể canh giữ/kích hoạt thông đạo Vực Ngoại",
      tinhCach: "Bí ẩn — không lời thoại được ghi nhận.",
      blurb: "Thực thể khổng lồ hình sọ người xuất hiện khi Đằng Hóa Nguyên kích hoạt thông đạo Vực Ngoại. Mở ra không gian thông đạo. Biến sắc khi VL tự nổ thân xuyên vào — cùng Lâm Dịch định truy đuổi nhưng bị lực đẩy ngăn lại. (@c0099–@c0100)",
      tabs: {
        diem: [
          { text: "Thực lực ép Lâm Dịch không thể theo vào thông đạo — vượt hoặc ngang Lâm Dịch về quyền hạn với thông đạo Vực Ngoại.", chuong: "@c0100" }
        ],
        kinhLich: [
          {
            chuong: "@c0099",
            importance: "normal",
            text: "Xuất hiện khi Đằng Hóa Nguyên dùng Hồn Phiên kích hoạt Vực Ngoại thông đạo. Hình người khổng lồ sọ đầu lâu; mở ra cổng thông đạo. (@c0099)"
          },
          {
            chuong: "@c0100",
            importance: "normal",
            text: "Biến sắc khi VL tự nổ thân xuyên vào thông đạo. Định truy đuổi cùng Lâm Dịch nhưng bị lực đẩy ngăn lại. (@c0100)"
          }
        ],
        tuVi: "Không xác định. Thực lực đủ để ngăn Lâm Dịch (vượt Nguyên Anh kỳ) @c0100.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Lâm Dịch", quanHe: "Cùng hiện diện / bị ngăn chặn", ghiChu: "Cùng biến sắc và định truy đuổi VL @c0100.", tag: "lien-he" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0099", "@c0100"]
    },
    {
      id: "ma-luong",
      name: "Mã Lương",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc", "Chiến Thần Điện — ký danh đệ tử Phượng Loan lão tổ @c0119"],
      canhGioiCaoNhat: "Trúc Cơ kỳ (cụ thể không rõ; có thể đoán từ môi trường chiến trường ngoại vực max Trúc Cơ hậu kỳ)",
      trangThai: "tu-vong (bị Cát Dương giết @c0103; thân xác bị Vương Lâm đoạt xá)",
      vaiTro: "Nhân vật phụ — thân xác mới của Vương Lâm",
      tinhCach: "Nhiều kinh nghiệm (hơn 30 năm ở chiến trường), si mê tiểu sư muội; lo lắng cho sư muội, sợ bị đại sư huynh chiếm.",
      blurb: "Đệ tử Chiến Thần Điện từ Hỏa Phần Quốc — hơn 30 năm ở chiến trường ngoại vực, trắng bệch, nhiều kinh nghiệm. Đuổi theo hạt châu Cự Ma tộc bằng con thoi đỏ ba ngày không kịp; bị Cát Dương giết. Thân xác trở thành vật chủ Vương Lâm đoạt xá @c0103. (@c0101, @c0103)",
      tabs: {
        diem: [
          { text: "Hơn 30 năm sống sót ở chiến trường ngoại vực — kinh nghiệm phong phú; mặt trắng bệch đặc trưng.", chuong: "@c0101" },
          { text: "Con thoi đỏ là pháp bảo phi hành tốt nhất hắn có — bị cường giả Cự Ma tộc Anh Biến kỳ tước đoạt sau khi đuổi 3 ngày không kịp.", chuong: "@c0101" }
        ],
        kinhLich: [
          {
            chuong: "@c0101",
            importance: "normal",
            text: "Đang đào bộ giáp từ xác người khổng lồ Cự Ma tộc thì một đạo ánh sáng chứa hạt châu lao qua; bỏ giáp, cầm con thoi đỏ đuổi theo ba ngày không kịp. Vùng xa lạ xuất hiện vô số vệt trắng — dấu hiệu vết rách không gian — hạt châu chui vào vết rách biến mất. Bị cường giả Cự Ma tộc Anh Biến kỳ vỗ vai lạnh toát, hút lấy con thoi đỏ rồi bỏ đi. (@c0101)"
          },
          {
            chuong: "@c0103",
            importance: "major",
            text: "Đang đuổi phi kiếm tử quang tự bay thì bị Hứa Hạo và Cát Dương phục kích. Dâng cả túi trữ vật cầu sống; Hứa Hạo tha nhưng Cát Dương phóng phi kiếm xuyên ngực giết chết. Thi thể trở thành vật chủ — một luồng thần thức khổng lồ của VL nhập vào, chữa lành vết thương, mở mắt. Mã Lương chính thức chết. (@c0103)"
          },
          {
            chuong: "@c0111",
            importance: "normal",
            text: "(VL trong thân Mã Lương) Rời hang bế quan, đến Phần Kim sơn mạch. Phát hiện và tiêu diệt ba tay sai Thi Âm Tông theo dõi khu vực. (@c0111)"
          },
          {
            chuong: "@c0113",
            importance: "normal",
            text: "(VL trong thân Mã Lương) Dùng tên Mã Lương gặp Lý Kỳ Khánh (Lạc Hà Môn) và Tôn Hữu Tài (Tà Ma Tông). Trên đường đến Chiến Thần Điện. (@c0113)"
          },
          {
            chuong: "@c0119",
            importance: "major",
            text: "(VL trong thân Mã Lương) Được Phượng Loan lão tổ Nguyên Anh sơ kỳ (Chiến Thần Điện) chính thức thu làm ký danh đệ tử — mối quan hệ bảo hộ quan trọng tại Hỏa Phần quốc. Dương Sâm (Nguyên Anh trung kỳ, đạo lữ Phượng Loan) tặng ngọc phù bảo mệnh. (@c0119)"
          }
        ],
        tuVi: "Trúc Cơ kỳ (cụ thể không rõ). Mặt trắng bệch đặc trưng tu sĩ chiến trường ngoại vực. Linh lực cạn kiệt hoàn toàn tại thời điểm VL đoạt xá @c0104.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Tiểu sư muội (Từ Tư)", quanHe: "Hôn thê (cũ)", ghiChu: "Mã Lương si mê tiểu sư muội, lo nàng bị đại sư huynh chiếm; Từ Tư thực ra muốn Mã Lương chết @c0109.", tag: "than-thiet" },
          { ten: "Hoắc Hồng Phi", quanHe: "Trưởng lão / cấp trên", ghiChu: "Trưởng lão Kết Đan sơ kỳ Chiến Thần Điện, đón đoàn về @c0109.", tag: "su-mon" },
          { ten: "Phượng Loan", quanHe: "Sư tổ (ký danh)", ghiChu: "Nguyên Anh sơ kỳ, Chiến Thần Điện — thu VL (trong thân Mã Lương) làm ký danh đệ tử @c0119.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0101", "@c0103", "@c0104", "@c0111", "@c0113", "@c0119"]
    },
    {
      id: "cường-gia-cu-ma-toc",
      name: "Cường giả Cự Ma Tộc (Anh Biến kỳ)",
      cn: "",
      aliases: ["trung niên hán tử", "hán tử đồ án cây búa"],
      gioiTinh: "nam",
      theLuc: ["Cự Ma Tộc"],
      canhGioiCaoNhat: "Anh Biến kỳ (tùy ý thay đổi kích thước thân thể — đặc trưng Cự Ma tộc Anh Biến kỳ @c0101)",
      trangThai: "hiện-dien",
      vaiTro: "Phụ đối nghịch — thế lực ngũ cấp xâm nhập chiến trường",
      tinhCach: "Ngang ngược, nổi tiếng chuyên chiếm đoạt đồ vật kẻ khác; không dùng lực nếu đe dọa miệng đã đủ.",
      blurb: "Cường giả Cự Ma tộc Anh Biến kỳ — mi tâm khắc đồ án cây búa, dáng người thường (dấu hiệu đạt Anh Biến kỳ). Theo hạt châu từ Triệu quốc sang chiến trường ngoại vực nhưng thất bại. Tước đoạt con thoi đỏ Mã Lương. Nổi tiếng chuyên chiếm đoạt đồ vật ở ngũ cấp tu chân quốc. (@c0101)",
      tabs: {
        diem: [
          { text: "Đạt Anh Biến kỳ — tùy ý thay đổi kích thước thân thể (đặc trưng bẩm sinh của Cự Ma tộc ở cảnh giới này).", chuong: "@c0101" }
        ],
        kinhLich: [
          {
            chuong: "@c0101",
            importance: "normal",
            text: "Đuổi hạt châu từ Triệu quốc sang chiến trường ngoại vực nhưng hạt châu chui vào vết rách không gian biến mất. Gặp Mã Lương, hút lấy con thoi đỏ tuyên bố 'vật này từ nay thuộc về lão tử'. Bỏ đi trong căm tức. Nổi danh ở ngũ cấp tu chân quốc với tính chuyên chiếm đoạt; Mã Lương (tam cấp) không biết danh. (@c0101)"
          }
        ],
        tuVi: "Anh Biến kỳ — đặc trưng Cự Ma tộc: trời sinh linh lực, tùy ý thay đổi kích thước thân thể khi đạt Anh Biến kỳ @c0101.",
        tuViMoc: [
          { chuong: "@c0101", canhGioi: "Anh Biến kỳ", text: "Xác nhận qua khả năng tùy ý thu nhỏ về kích thước người thường @c0101." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0101"]
    },
    {
      id: "chu-tu-hong",
      name: "Chu Tử Hồng",
      cn: "",
      aliases: ["sư muội"],
      gioiTinh: "nu",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Trúc Cơ hậu kỳ (sau đợt Vực Ngoại @c0109)",
      trangThai: "song (nô tài của Vương Lâm — bản mệnh tinh huyết @c0106)",
      vaiTro: "Nhân vật phụ — nô tài Vương Lâm",
      tinhCach: "Bình tĩnh, gan dạ, không chịu thua kém; trực tiếp khi cần — dám hỏi thẳng VL Mã Lương đã chết chưa. Từng thề không tới Kết Đan Kỳ không kết đôi.",
      blurb: "Đệ tử Hoắc Hồng Phi (Chiến Thần Điện), dung mạo đẹp. Khăng khăng xin vào Vực Ngoại chiến trường; sống sót và đạt Trúc Cơ hậu kỳ. Được VL cứu khỏi du hồn @c0105; nhận ra VL đoạt xá, bình tĩnh hỏi thẳng rồi quy phục, dâng bản mệnh tinh huyết @c0106. (@c0104–@c0109)",
      tabs: {
        diem: [
          { text: "Gan dạ và trực tiếp — dám hỏi thẳng kẻ lạ mặt bí ẩn 'Mã Lương sống hay chết?', nghe xong thở phào rồi quy phục.", chuong: "@c0106" }
        ],
        kinhLich: [
          {
            chuong: "@c0104",
            importance: "normal",
            text: "Cùng hai đồng môn đang bị du hồn truy đuổi trong chiến trường khi VL (thân Mã Lương) xuất hiện. (@c0104)"
          },
          {
            chuong: "@c0105",
            importance: "normal",
            text: "Được VL cứu bằng một tiếng quát thần thức khiến du hồn giải tán. (@c0105)"
          },
          {
            chuong: "@c0106",
            importance: "major",
            text: "Nhận ra VL đoạt xá; bình tĩnh hỏi thẳng 'Mã Lương sống hay chết?'. VL đáp 'Chết'. Nàng thở phào, tin lời thật, rồi dâng bản mệnh tinh huyết quy phục. Ba điểm sáng (kể cả của nàng) neo trong thần thức VL. (@c0106)"
          },
          {
            chuong: "@c0109",
            importance: "normal",
            text: "Được truyền tống về Hỏa Phần Quốc trước VL. Ra mắt Hoắc Hồng Phi. Đạt Trúc Cơ hậu kỳ sau đợt Vực Ngoại. Che giấu chuyện đã giao bản mệnh tinh huyết cho VL. (@c0109)"
          },
          {
            chuong: "@c0113",
            importance: "normal",
            text: "VL (thân Mã Lương) thả nàng, trả lại bản mệnh tinh huyết của nàng về cho sư tổ bào y lam Nguyên Anh — VL không còn kiểm soát sinh tử Chu Tử Hồng từ đây. (@c0113)"
          },
          {
            chuong: "@c0119",
            importance: "normal",
            text: "Ở tuyến khác: sư tổ Phượng Loan (bào y lam Nguyên Anh sơ kỳ) gặp VL và thu VL làm ký danh đệ tử — Chu Tử Hồng có thêm liên hệ với VL qua tuyến sư môn này. (@c0119)"
          },
          {
            chuong: "@c0123",
            importance: "normal",
            text: "Được Dương Hùng gọi tới gặp VL; thừa nhận Phượng Loan lão tổ chính là mẫu thân của nàng. Đổi việc lấy tấm bản đồ giúp VL lấy điều kiện hắn giết Từ Tư và Chu An; ném ngọc giản bản đồ cho VL rồi rời đi, thầm nói đây là việc cuối cùng nàng giúp 'Mã Lương'. (@c0123)"
          }
        ],
        tuVi: "Kết Đan kỳ (mục tiêu, thề không kết đôi trước đó @c0106). Đạt Trúc Cơ hậu kỳ sau đợt Vực Ngoại @c0109.",
        tuViMoc: [
          { chuong: "@c0109", canhGioi: "Trúc Cơ hậu kỳ", text: "Xác nhận sau khi trở về từ Vực Ngoại @c0109." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Chủ nhân (bản mệnh tinh huyết)", ghiChu: "VL nắm giữ bản mệnh tinh huyết; trả lại cho sư tổ Phượng Loan @c0113 — VL không còn kiểm soát Chu Tử Hồng.", tag: "thu-phuc" },
          { ten: "Hoắc Hồng Phi", quanHe: "Sư phụ", ghiChu: "Trưởng lão Kết Đan sơ kỳ Chiến Thần Điện @c0109.", tag: "su-mon" },
          { ten: "Phượng Loan", quanHe: "Mẫu thân", ghiChu: "Nguyên Anh sơ kỳ, Chiến Thần Điện; Chu Tử Hồng thừa nhận Phượng Loan là mẫu thân của nàng @c0123. Nhận lại bản mệnh tinh huyết từ VL @c0113; thu VL làm ký danh đệ tử @c0119.", tag: "cha-me" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0104", "@c0105", "@c0106", "@c0109", "@c0113", "@c0119", "@c0123"]
    },
    {
      id: "lam-dao",
      name: "Lâm Đào",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Dưới Trúc Cơ hậu kỳ một bậc, chuẩn bị đột phá @c0109",
      trangThai: "song (nô tài của Vương Lâm — bản mệnh tinh huyết @c0106)",
      vaiTro: "Nhân vật phụ — nô tài Vương Lâm",
      tinhCach: "Đa nghi, nhanh trí, thực dụng — nhận ra đoạt xá trước, quyết định khuất phục ngay để giữ mạng mà không do dự.",
      blurb: "Đệ tử Chiến Thần Điện, thông minh và dứt khoát nhất trong ba nô tài. Nhận ra VL đoạt xá, tự tay quỳ xin quy phục và dâng bản mệnh tinh huyết đầu tiên @c0106. Hiểu theo VL là con đường sống duy nhất. (@c0105–@c0109)",
      tabs: {
        diem: [
          { text: "Đa nghi và thực dụng — người đầu tiên nhận ra đoạt xá, không do dự khuất phục ngay, còn chĩa phi kiếm vào đồng môn để tỏ lòng nô tài.", chuong: "@c0106" }
        ],
        kinhLich: [
          {
            chuong: "@c0105",
            importance: "normal",
            text: "VL ra lệnh cho du hồn giết Lâm Đào — thử lòng. Lâm Đào nhận ra thực trạng và không bỏ chạy. (@c0105)"
          },
          {
            chuong: "@c0106",
            importance: "major",
            text: "Đoán ra đoạt xá, không dám hé răng. Tự xưng không có giao tình với Mã Lương. Quỳ xin làm nô tài, dâng bản mệnh tinh huyết đầu tiên. Sau khi quy hàng còn chủ động chĩa phi kiếm vào Dương Hùng để tỏ thái độ. (@c0106)"
          },
          {
            chuong: "@c0109",
            importance: "minor",
            text: "Được truyền tống về Hỏa Phần Quốc trước VL. Tu vi dưới Trúc Cơ hậu kỳ một bậc, chuẩn bị đột phá. Tiết lộ 'Mã Lương còn ở phía sau, nhường ba người về trước' với Hoắc Hồng Phi. (@c0109)"
          },
          {
            chuong: "@c0112",
            importance: "minor",
            text: "VL hẹn gặp cả ba nô bộc trong 10 ngày; Lâm Đào trong nhóm được thả. (@c0112)"
          },
          {
            chuong: "@c0119",
            importance: "major",
            text: "Bị Phượng Loan lão tổ bắt quả tang sao chép địa đồ bí mật — lộ hành vi gián điệp. Bị Phượng Loan giữ lại xử lý. (@c0119)"
          }
        ],
        tuVi: "Gần Trúc Cơ hậu kỳ — một bậc dưới, chuẩn bị đột phá @c0109.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Chủ nhân (bản mệnh tinh huyết)", ghiChu: "VL nắm giữ bản mệnh tinh huyết @c0106.", tag: "thu-phuc" },
          { ten: "Phượng Loan", quanHe: "Người bắt giữ", ghiChu: "Phượng Loan bắt Lâm Đào khi sao chép địa đồ @c0119.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0105", "@c0106", "@c0109", "@c0112", "@c0119"]
    },
    {
      id: "duong-hung",
      name: "Dương Hùng",
      cn: "",
      aliases: ["sư huynh họ Dương"],
      gioiTinh: "nam",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Trúc Cơ hậu kỳ (sau đợt Vực Ngoại @c0109)",
      trangThai: "song (nô tài của Vương Lâm — bản mệnh tinh huyết @c0106)",
      vaiTro: "Nhân vật phụ — nô tài Vương Lâm",
      tinhCach: "Đệ tử đắc ý của Điện chủ; đoán ra đoạt xá, cười khổ quy hàng, không dám kháng cự. Sợ VL đoạt thân mình.",
      blurb: "Sư huynh trong nhóm, đệ tử đắc ý của Điện chủ Chiến Thần Điện. Đoán ra VL đoạt xá, cười khổ rồi dâng bản mệnh tinh huyết quy phục. Đạt Trúc Cơ hậu kỳ sau đợt Vực Ngoại. Người bịa chuyện đan dược trú nhan để che giấu khi về Hỏa Phần. (@c0106–@c0109)",
      tabs: {
        diem: [
          { text: "Đệ tử đắc ý của Điện chủ — thực lực và địa vị cao hơn Lâm Đào và Chu Tử Hồng; vẫn cười khổ quy hàng khi thấy không có lối thoát.", chuong: "@c0106" }
        ],
        kinhLich: [
          {
            chuong: "@c0106",
            importance: "major",
            text: "Đoán ra đoạt xá, sợ VL đoạt thân mình. Cười khổ, dâng bản mệnh tinh huyết quy phục. An ủi Chu Tử Hồng. (@c0106)"
          },
          {
            chuong: "@c0109",
            importance: "normal",
            text: "Được truyền tống về trước VL. Đạt Trúc Cơ hậu kỳ. Bịa chuyện đan dược trú nhan khi Từ Tư đòi hỏi giải thích vì sao không già sau 50 năm. (@c0109)"
          },
          {
            chuong: "@c0112",
            importance: "major",
            text: "VL phát hiện Dương Hùng đang ôm ngọc phù chuẩn bị báo cáo cho Chiến Thần Điện về sự thật VL đoạt xá. VL lập tức thu hồi bản mệnh tinh huyết của Dương Hùng — trừng phạt phản bội. (@c0112)"
          },
          {
            chuong: "@c0119",
            importance: "normal",
            text: "Dẫn VL vào gặp Phượng Loan lão tổ, xác nhận danh tính VL với Phượng Loan. (@c0119)"
          },
          {
            chuong: "@c0123",
            importance: "normal",
            text: "Bị VL khống chế, dùng ngọc giản gọi Chu Tử Hồng tới gặp VL; đổi lại VL phóng thích bản mệnh tinh huyết cho Dương Hùng — hắn nhận lấy, xấu hổ không dám nhìn Chu Tử Hồng rồi rời đi. (@c0123)"
          }
        ],
        tuVi: "Trúc Cơ hậu kỳ @c0109.",
        tuViMoc: [
          { chuong: "@c0109", canhGioi: "Trúc Cơ hậu kỳ", text: "Xác nhận sau khi trở về từ Vực Ngoại @c0109." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Cố nhân (đã được giải khống chế)", ghiChu: "VL từng nắm rồi thu hồi bản mệnh tinh huyết @c0112; sau phóng thích lại cho Dương Hùng để đổi việc gọi Chu Tử Hồng @c0123.", tag: "thu-phuc" },
          { ten: "Điện chủ Chiến Thần Điện", quanHe: "Sư phụ / trưởng bối", ghiChu: "Đệ tử đắc ý của Điện chủ @c0109.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0106", "@c0109", "@c0112", "@c0119", "@c0123"]
    },
    {
      id: "hua-hao",
      name: "Hứa Hạo",
      cn: "",
      aliases: ["đại đệ tử thứ sáu Linh Vũ Tông"],
      gioiTinh: "nam",
      theLuc: ["Linh Vũ Tông", "Cự Lộc Quốc"],
      canhGioiCaoNhat: "Trúc Cơ hậu kỳ (@c0103)",
      trangThai: "tu-vong (xác nhận tử vong tại chiến trường ngoại vực @c0105)",
      vaiTro: "Nhân vật phụ — đối thủ/sát thủ chiến trường",
      tinhCach: "Sát thủ 'giết người đoạt bảo' — thanh danh xấu; thực dụng; có thỏa thuận với đồng đảng.",
      blurb: "Đại đệ tử thứ sáu Linh Vũ Tông (Cự Lộc Quốc, tam cấp tu chân quốc), Trúc Cơ hậu kỳ. Có danh tiếng 'sát thủ giết người đoạt bảo' cùng đồng đảng Cát Dương. Ba năm trước nhặt thần thức vô chủ (thật ra của VL) đầu tiên. Bị phục kích cùng Mã Lương; tha mạng Mã Lương sau khi nhận túi trữ vật. Tử vong tại chiến trường — xác nhận @c0105. (@c0103, @c0105)",
      tabs: {
        diem: [
          { text: "Nhặt thần thức vô chủ đầu tiên (của VL) cùng Cát Dương ba năm trước — châm ngòi cho chuỗi hỗn loạn chiến trường.", chuong: "@c0103" }
        ],
        kinhLich: [
          {
            chuong: "@c0103",
            importance: "major",
            text: "Nhận tin từ Cát Dương qua ngọc giản, cùng phục kích Mã Lương để cướp phi kiếm tử quang. Tha mạng Mã Lương sau khi nhận túi trữ vật (thỏa thuận 'túi đến tay ai là của đó' với Cát Dương). Cát Dương vẫn giết Mã Lương. (@c0103)"
          },
          {
            chuong: "@c0105",
            importance: "normal",
            text: "Ba thôn hồn (theo lệnh VL) đi tìm Hứa Hạo — xác nhận đã tử vong. Túi trữ vật của hắn bị du hồn hai sừng nắm giữ; VL thu lại. (@c0105)"
          }
        ],
        tuVi: "Trúc Cơ hậu kỳ @c0103.",
        tuViMoc: [
          { chuong: "@c0103", canhGioi: "Trúc Cơ hậu kỳ", text: "Xác nhận trong phần giới thiệu @c0103." }
        ],
        nhanMach: [
          { ten: "Cát Dương", quanHe: "Đồng đảng", ghiChu: "Thường liên thủ giết người đoạt bảo; có thỏa thuận về túi trữ vật.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0103", "@c0105", "@c0107"]
    },
    {
      id: "cat-duong",
      name: "Cát Dương",
      cn: "",
      aliases: ["Cát Đằng (dị bản — chưa xác nhận)"],
      gioiTinh: "nam",
      theLuc: ["Không rõ tông môn"],
      canhGioiCaoNhat: "Trúc Cơ hậu kỳ (@c0103)",
      trangThai: "tu-vong (xác nhận tử vong tại chiến trường ngoại vực @c0105)",
      vaiTro: "Nhân vật phụ — đối thủ/sát thủ chiến trường",
      tinhCach: "Lạnh lùng, tàn nhẫn — giết Mã Lương dù Hứa Hạo đã tha, vì hận túi trữ vật không vào tay mình.",
      blurb: "Đồng đảng Hứa Hạo tại chiến trường ngoại vực, Trúc Cơ hậu kỳ. Mặc đồ đen, liên thủ giết người đoạt bảo. Giết Mã Lương dù Hứa Hạo tha — vì thỏa thuận túi đến tay ai là của đó không có lợi cho hắn. Tử vong tại chiến trường @c0105. Tên hắn xuất hiện dưới hai dạng 'Cát Đằng' và 'Cát Dương'. (@c0103, @c0105)",
      tabs: {
        diem: [
          { text: "Giết Mã Lương dù Hứa Hạo đã tha — động cơ: hận vì túi trữ vật rơi vào tay Hứa Hạo, không vào tay mình.", chuong: "@c0103" }
        ],
        kinhLich: [
          {
            chuong: "@c0103",
            importance: "major",
            text: "Phục kích cùng Hứa Hạo. Trao tin qua ngọc giản. Sau khi Hứa Hạo nhận túi và tha Mã Lương, hắn phóng phi kiếm xuyên ngực Mã Lương: 'Ta chưa nói tha ngươi.' Nguyên nhân: thỏa thuận 'túi đến tay ai của đó' — túi rơi vào tay Hứa Hạo, hắn không được gì. (@c0103)"
          },
          {
            chuong: "@c0105",
            importance: "normal",
            text: "Ba thôn hồn đi tìm Cát Dương theo lệnh VL — xác nhận đã tử vong. Túi trữ vật bị du hồn nắm giữ; VL thu lại. (@c0105)"
          }
        ],
        tuVi: "Trúc Cơ hậu kỳ @c0103.",
        tuViMoc: [
          { chuong: "@c0103", canhGioi: "Trúc Cơ hậu kỳ", text: "Xác nhận trong phần giới thiệu @c0103." }
        ],
        nhanMach: [
          { ten: "Hứa Hạo", quanHe: "Đồng đảng", ghiChu: "Thường liên thủ; mâu thuẫn về túi trữ vật dẫn đến Cát Dương giết Mã Lương @c0103.", tag: "dong-hanh" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0103", "@c0105", "@c0107"]
    },
    {
      id: "hoac-hong-phi",
      name: "Hoắc Hồng Phi",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Kết Đan sơ kỳ (@c0109)",
      trangThai: "song (đang hoạt động tại Chiến Thần Điện)",
      vaiTro: "Nhân vật phụ — trưởng lão Chiến Thần Điện",
      tinhCach: "Thận trọng — cảm nhận được khí tức kỳ lạ từ VL và không dám truy đuổi dù có thực lực cao hơn về mặt linh lực.",
      blurb: "Trưởng lão Kết Đan sơ kỳ Chiến Thần Điện, sư phụ Chu Tử Hồng, hơn 200 tuổi nhưng nhờ tu Thần Đạo Thuật trông như trung niên ~40. Đón đoàn về sau Vực Ngoại. Cảm nhận hàn ý từ linh hồn VL, co rút đồng tử, không dám truy đuổi. Định báo Điện chủ xử lý. (@c0109)",
      tabs: {
        diem: [
          { text: "Tu Thần Đạo Thuật — Kết Đan sơ kỳ nhưng trông như ~40 tuổi dù hơn 200 tuổi thật; công pháp trú nhan đặc biệt.", chuong: "@c0109" },
          { text: "Kiêng kị VL — cảm nhận hàn ý từ linh hồn/thần thức cực cảnh khiến đồng tử co rút, từ bỏ truy đuổi.", chuong: "@c0109" }
        ],
        kinhLich: [
          {
            chuong: "@c0109",
            importance: "major",
            text: "Đón nhóm Chu Tử Hồng về truyền tống trận trên đỉnh núi lửa. Mắng Từ Tư. Khi VL (giả Mã Lương) bước ra tỏa hàn ý lạnh giá, Hoắc Hồng Phi co rút đồng tử — kiêng kị, không dám giữ lại hay truy đuổi. Định báo Điện chủ và mời Loan Phương sư tổ xuất quan tra hỏi. (@c0109)"
          }
        ],
        tuVi: "Kết Đan sơ kỳ @c0109.",
        tuViMoc: [
          { chuong: "@c0109", canhGioi: "Kết Đan sơ kỳ", text: "Xác nhận @c0109." }
        ],
        nhanMach: [
          { ten: "Chu Tử Hồng", quanHe: "Đệ tử", ghiChu: "Từng cấp pháp bảo quý cho Chu Tử Hồng khi vào Vực Ngoại @c0109.", tag: "su-mon" },
          { ten: "Từ Tư", quanHe: "Cấp dưới / người quen", ghiChu: "Quát mắng Từ Tư khi nàng thất thanh @c0109.", tag: "dong-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0109"]
    },
    {
      id: "tu-tu",
      name: "Từ Tư",
      cn: "",
      aliases: ["tiểu sư muội (theo Mã Lương)"],
      gioiTinh: "nu",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Không rõ (tu Chiến Thần Quyết — công pháp trú nhan @c0103)",
      trangThai: "song (đang sống tại Hỏa Phần Quốc)",
      vaiTro: "Nhân vật phụ — hôn thê cũ Mã Lương",
      tinhCach: "Đã bỏ tình cảm với Mã Lương — muốn hắn chết, có tình lang mới; bẽ bàng khi biết Mã Lương còn sống.",
      blurb: "Thiếu phụ xinh đẹp (mắt phượng, mặt trái xoan), hôn thê cũ Mã Lương. Tu Chiến Thần Quyết — sau 50 năm vẫn trông như ~30. Muốn Mã Lương đã chết, biến sắc thất thanh khi biết hắn sống. Có tình lang mới. (@c0103, @c0109, @c0110)",
      tabs: {
        diem: [
          { text: "Biến sắc thất thanh 'Mã Lương hắn còn không chết?' — thái độ rõ ràng muốn Mã Lương đã chết.", chuong: "@c0109" }
        ],
        kinhLich: [
          {
            chuong: "@c0103",
            importance: "minor",
            text: "Được nhắc gián tiếp qua ký ức Mã Lương: tu Chiến Thần quyết (giữ nhan sắc), sau 50 năm nhìn như ~30 tuổi; Mã Lương si mê, lo đại sư huynh chiếm. (@c0103)"
          },
          {
            chuong: "@c0109",
            importance: "normal",
            text: "Có mặt tại truyền tống trận cùng người đàn ông mới (tình lang hiện tại). Đòi hỏi đan dược trú nhan từ nhóm về; Chu Tử Hồng đẩy sang 'hỏi Mã Lương'. Biết Mã Lương còn sống — biến sắc thất thanh. Bị Hoắc Hồng Phi quát. (@c0109)"
          },
          {
            chuong: "@c0110",
            importance: "normal",
            text: "Nhớ lại quá khứ với Mã Lương: hai người đính hôn từ thuở ấu thơ, cùng vào Chiến Thần Điện, nàng từng hứa sẽ làm lữ tu bạn lữ nếu Mã Lương trở về. Nhưng 50 năm trôi qua — nàng đã thay lòng. (@c0110)"
          },
          {
            chuong: "@c0119",
            importance: "major",
            text: "Tập kích VL bằng hắc châm. VL chộp lấy, xóa ký ấn tinh thần của nàng — nàng ộc máu. VL bí mật cắm vào hắc châm một ký ấn trì hoãn: nếu không được giải trong 1 tháng, nàng sẽ chết. (@c0119)"
          },
          {
            chuong: "@c0123",
            importance: "normal",
            text: "Bị Chu Tử Hồng đặt vào danh sách hai người VL phải giết (cùng Chu An) để đổi lấy tấm bản đồ. VL tìm tới thì thấy nàng đang ở chỗ hẻo lánh sau núi cùng Chu An; hắn lưu một tia thần thức trên Chu An rồi rời đi. (@c0123)"
          }
        ],
        tuVi: "Không rõ cụ thể; tu Chiến Thần Quyết — công pháp đặc biệt giữ dung nhan @c0103.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Mã Lương (Vương Lâm)", quanHe: "Hôn thê cũ (đã thay lòng)", ghiChu: "Từng đính hôn, hứa làm lữ tu bạn; nay muốn Mã Lương đã chết và có tình lang mới @c0109. Tập kích VL bằng hắc châm @c0119 — bị VL cắm ký ấn chết chậm; nằm trong danh sách VL phải giết theo giao kèo với Chu Tử Hồng @c0123.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0103", "@c0109", "@c0110", "@c0119", "@c0123"]
    },
    {
      id: "ba-thon-hon",
      name: "Ba Thôn Hồn",
      cn: "",
      aliases: ["ba người hàng xóm", "hàng xóm"],
      gioiTinh: "khong-ro",
      theLuc: ["Khe nứt không gian (Vực Ngoại)"],
      canhGioiCaoNhat: "Thôn hồn (cấp trên du hồn)",
      trangThai: "hiện-dien (trong thần thức Vương Lâm @c0102–@c0106)",
      vaiTro: "Nhân vật phụ bí ẩn — nguồn thông tin về thế giới khe nứt",
      tinhCach: "Nhẫn nhịn, cẩn thận — tự nhận là 'hàng xóm'; trao đổi thông tin thực dụng với VL vì lợi ích chung; mục tiêu cuối cùng là trở về không gian tịch diệt.",
      blurb: "Ba thực thể thôn hồn trú trong thần thức VL khi VL còn ở khe nứt không gian. Giải thích bản chất du hồn, không gian sinh linh, chiến trường ngoại vực, và cảnh báo VL cuối cùng phải trở về không gian tịch diệt. Đi tìm Hứa Hạo và Cát Dương theo lệnh VL @c0105. (@c0102–@c0106)",
      tabs: {
        diem: [
          { text: "Cảnh báo VL: cuối cùng vẫn phải trở về không gian tịch diệt cùng thôn hồn — đây là sứ mệnh không thể tránh. (@c0106)", chuong: "@c0106" }
        ],
        kinhLich: [
          {
            chuong: "@c0102",
            importance: "normal",
            text: "VL gặp ba thôn hồn (lúc VL đang trong khe nứt không gian). Đây là các thực thể VL sau đó gọi là 'hàng xóm'. (@c0102)"
          },
          {
            chuong: "@c0105",
            importance: "normal",
            text: "Được VL sai đi tìm Hứa Hạo và Cát Dương; trở về báo cả hai đã tử vong. (@c0105)"
          },
          {
            chuong: "@c0106",
            importance: "major",
            text: "Giải thích cho VL hệ sinh thái khe nứt: du hồn = nô lệ/thức ăn của thôn hồn; 'ma đầu' = du hồn trong không gian sinh linh; chiến trường ngoại vực = vùng đệm giữa không gian sinh linh và không gian tịch diệt. Cảnh báo VL cuối cùng phải trở về tịch diệt — VL ngơ ngác thất thần. (@c0106)"
          }
        ],
        tuVi: "Thôn hồn — cấp trên du hồn trong hệ sinh thái khe nứt @c0106.",
        tuViMoc: [],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Chủ nhân tạm thời / 'hàng xóm'", ghiChu: "Trú trong thần thức VL; trao đổi thông tin; cùng qua truyền tống trận @c0106.", tag: "lien-he" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0102", "@c0105", "@c0106"]
    },
    {
      id: "hua-lap-quoc",
      name: "Hứa Lập Quốc",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Thiên Cương Tông"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (thân cũ đã mất; mượn thân Trúc Cơ Thi Âm Tông để hồi phục @c0111)",
      trangThai: "tu-vong (VL hủy ý thức, ép nguyên thần tạo Ma Đầu @c0112)",
      vaiTro: "Nhân vật phụ — bị VL tạo thành Ma Đầu",
      tinhCach: "Thiện tính không rõ; vốn là cường giả Nguyên Anh đến từ Thiên Cương Tông (tứ cấp tu chân quốc), mất thân nên phải dùng thân Thi Âm Tông mượn để hồi phục.",
      blurb: "Tu sĩ Thiên Cương Tông (tứ cấp tu chân quốc), vốn là Nguyên Anh kỳ nhưng mất thân, phải mượn thân Trúc Cơ của Thi Âm Tông để hồi phục. Nằm vùng tại Phần Kim sơn mạch. Bị VL bắt sống, hủy ý thức, ép nguyên thần ăn hồn dã thú cho đến khi tạo thành Ma Đầu Trúc Cơ hậu kỳ đỉnh giả đan. (@c0111, @c0112)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0111",
            importance: "normal",
            text: "Lộ diện tại Phần Kim sơn mạch sau khi VL diệt ba tay sai Thi Âm Tông. Vốn là Nguyên Anh kỳ Thiên Cương Tông — hiện đang mượn thân Trúc Cơ của Thi Âm Tông để hồi phục. (@c0111)"
          },
          {
            chuong: "@c0112",
            importance: "major",
            text: "Bị VL bắt sống. VL hủy ý thức của hắn rồi ép phần nguyên thần còn lại liên tục tiêu thụ hồn dã thú. Khi hào quang ám hồng hình thành, Ma Đầu ra đời — tu vi Trúc Cơ hậu kỳ đỉnh giả đan. Hứa Lập Quốc chính thức kết thúc tồn tại. (@c0112)"
          }
        ],
        tuVi: "Nguyên Anh kỳ (thân cũ). Hiện trong thân Trúc Cơ hậu kỳ mượn của Thi Âm Tông @c0111.",
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0111", "@c0112"]
    },
    {
      id: "ton-huu-tai",
      name: "Tôn Hữu Tài",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Tà Ma Tông", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Trúc Cơ hậu kỳ (@c0113)",
      trangThai: "tu-vong (tự thiêu trong dung nham @c0115)",
      vaiTro: "Nhân vật phụ — đối thủ",
      tinhCach: "Thực dụng, xảo quyệt — bám theo người lạ để tìm cơ hội tấn công; bỏ trốn ngay khi thấy bất lợi.",
      blurb: "Tu sĩ Tà Ma Tông, Trúc Cơ hậu kỳ. Bám theo VL (Mã Lương) từ @c0113, dẫn VL vào bẫy tại @c0114. Sau khi Tứ sư huynh bị giết, dùng độn thổ tẩu thoát; bị VL truy đến miệng núi lửa — tự thiêu trong dung nham. VL thu được túi trữ vật chứa ba ngọc giản quan trọng. (@c0113–@c0115)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0113",
            importance: "normal",
            text: "Bám theo nhóm VL + Lý Kỳ Khánh; vờ thân thiện, thực ra đang lên kế hoạch tập kích. (@c0113)"
          },
          {
            chuong: "@c0114",
            importance: "major",
            text: "Dẫn VL vào khu vực biệt lập, để Tứ sư huynh hắc y ra tay. Khi VL giết Tứ sư huynh chỉ bằng một chữ 'Diệt', lập tức độn thổ bỏ chạy. (@c0114)"
          },
          {
            chuong: "@c0115",
            importance: "major",
            text: "Chạy vào miệng núi lửa, tự thiêu trong dung nham để trốn thoát. VL kịp thu túi trữ vật trước khi hắn chết. (@c0115)"
          }
        ],
        tuVi: "Trúc Cơ hậu kỳ @c0113.",
        tuViMoc: [
          { chuong: "@c0113", canhGioi: "Trúc Cơ hậu kỳ", text: "Xác nhận khi gặp VL @c0113." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0113", "@c0114", "@c0115"]
    },
    {
      id: "tu-su-huynh-hac-y",
      name: "Tứ sư huynh hắc y",
      cn: "",
      aliases: ["Tứ sư huynh"],
      gioiTinh: "nam",
      theLuc: ["Tà Ma Tông", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Trúc Cơ Đại viên mãn giả đan (@c0114)",
      trangThai: "tu-vong (bị VL giết bằng Thần Thức Cực Cảnh @c0114)",
      vaiTro: "Nhân vật phụ — đối thủ",
      tinhCach: "Không rõ — xuất hiện ngắn, lập tức bị hạ.",
      blurb: "Đệ tử Tà Ma Tông, Trúc Cơ Đại viên mãn giả đan. Cùng Tôn Hữu Tài giăng bẫy bắt VL làm khôi lỗi. Thi triển Quỷ Hỏa Khô Lâu nhưng bị VL thốt một chữ 'Diệt' (Thần Thức Cực Cảnh) — chết ngay tức thì. VL thu phi kiếm đen của hắn. (@c0114)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0114",
            importance: "major",
            text: "Phục kích VL tại khu vực bẫy do Tôn Hữu Tài dẫn đến, thi triển Quỷ Hỏa Khô Lâu. VL thốt chữ 'Diệt' — Thần Thức Cực Cảnh tiêu diệt tức thì. VL thu phi kiếm đen. (@c0114)"
          }
        ],
        tuVi: "Trúc Cơ Đại viên mãn giả đan @c0114.",
        tuViMoc: [
          { chuong: "@c0114", canhGioi: "Trúc Cơ Đại viên mãn giả đan", text: "Xác nhận khi xuất hiện @c0114." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0114"]
    },
    {
      id: "phuong-loan",
      name: "Phượng Loan",
      cn: "",
      aliases: ["bào y lam (mỹ phụ)", "Phượng Loan lão tổ"],
      gioiTinh: "nu",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Nguyên Anh sơ kỳ (@c0119)",
      trangThai: "song",
      vaiTro: "Nhân vật quan trọng — sư tổ bảo hộ VL",
      tinhCach: "Quyết đoán, có thực lực và địa vị cao trong Chiến Thần Điện; sẵn sàng bảo vệ đệ tử, chặn cả Nguyên Anh đồng cấp.",
      blurb: "Lão tổ Nguyên Anh sơ kỳ Chiến Thần Điện, đạo lữ song tu của Dương Sâm; là sư tổ và người thân của Chu Tử Hồng ('Hồng nhi'). Lần đầu xuất hiện là thiếu phụ tới nhận lại bản mệnh tinh huyết Chu Tử Hồng từ VL (thân Mã Lương) @c0113. Chính thức lộ danh và thu VL làm ký danh đệ tử @c0119 — chặn Chu Cẩn bằng Ngũ thải phượng xa để đáp ơn VL cứu Hồng nhi. (@c0113, @c0117, @c0119)",
      tabs: {
        diem: [
          { text: "Tiết lộ điểm yếu hỏa linh thú = hàn thuộc tính trong cuộc họp Nguyên Anh — thông tin then chốt giúp 4 tông lên kế hoạch.", chuong: "@c0117" }
        ],
        kinhLich: [
          {
            chuong: "@c0113",
            importance: "normal",
            text: "Xuất hiện (chưa nêu tên, là thiếu phụ cung trang) nhận lại bản mệnh tinh huyết Chu Tử Hồng từ VL (thân Mã Lương), hứa che giấu việc VL đoạt xá để đáp ơn cứu 'Hồng nhi'. (@c0113)"
          },
          {
            chuong: "@c0117",
            importance: "normal",
            text: "Tại cuộc họp 6 lão Nguyên Anh 4 tông, tiết lộ thông tin cốt lõi: điểm yếu của hỏa linh thú là hàn thuộc tính pháp thuật. (@c0117)"
          },
          {
            chuong: "@c0119",
            importance: "major",
            text: "Lộ danh là Phượng Loan. Bắt Lâm Đào khi sao chép địa đồ. Chu Cẩn (Nguyên Anh sơ kỳ) xông ra định giết VL — Phượng Loan chặn bằng Ngũ thải phượng xa. Chính thức thu VL làm ký danh đệ tử — bảo hộ VL dưới danh nghĩa sư môn Chiến Thần Điện. (@c0119)"
          },
          {
            chuong: "@c0121",
            importance: "normal",
            text: "Trước khi VL xuất chinh, gọi hắn tới lầu các, dò hỏi vì sao tu vi chỉ thể hiện Trúc Cơ trung kỳ. Trao ngọc giản bản đồ Hỏa Phần quốc (ba phần) kèm giao kèo: giết 50 Trúc Cơ → thêm một phần, giết 150 → phần cuối. Vì ơn cứu Hồng nhi nên có nhân tình, muốn ngăn VL đoạt xá. (@c0121)"
          }
        ],
        tuVi: "Nguyên Anh sơ kỳ @c0113.",
        tuViMoc: [
          { chuong: "@c0119", canhGioi: "Nguyên Anh sơ kỳ", text: "Xác nhận Nguyên Anh sơ kỳ khi lộ danh trên ngũ thải phượng xa @c0119 (tương đương Chu Cẩn)." }
        ],
        nhanMach: [
          { ten: "Dương Sâm", quanHe: "Đạo lữ song tu", ghiChu: "Nguyên Anh trung kỳ, Chiến Thần Điện @c0119.", tag: "than-thiet" },
          { ten: "Chu Tử Hồng", quanHe: "Sư tổ / người thân", ghiChu: "Sư tổ và người thân của Chu Tử Hồng ('Hồng nhi'); nhận VL ký danh để đáp ơn cứu Hồng nhi @c0119.", tag: "su-mon" },
          { ten: "Vương Lâm", quanHe: "Ký danh đệ tử", ghiChu: "Thu VL làm ký danh đệ tử @c0119.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0113", "@c0117", "@c0119", "@c0121"]
    },
    {
      id: "duong-sam",
      name: "Dương Sâm",
      cn: "",
      aliases: ["trung niên văn sĩ"],
      gioiTinh: "nam",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Nguyên Anh trung kỳ (@c0119); đỉnh kỳ @c0120",
      trangThai: "song",
      vaiTro: "Nhân vật quan trọng — đạo lữ Phượng Loan",
      tinhCach: "Lịch sự, trọng lễ — đích thân cúi chào VL sau khi Phượng Loan thu VL làm đệ tử; hào phóng tặng ngọc phù bảo mệnh quý giá.",
      blurb: "Lão tổ Nguyên Anh trung kỳ đỉnh Chiến Thần Điện, đạo lữ song tu của Phượng Loan. Lần đầu xuất hiện @c0119: cúi chào VL và tặng ngọc phù bảo mệnh cấp Nguyên Anh. Tại @c0120: đích thân dẫn quân vào Tuyên Vũ quốc và giết lão bà Nguyên Anh sơ kỳ của địch. (@c0119, @c0120)",
      tabs: {
        diem: [
          { text: "Cúi chào VL — đệ tử ký danh của vợ — ngay lần đầu gặp, thể hiện phong cách trọng lễ và tôn trọng quyết định của đạo lữ.", chuong: "@c0119" }
        ],
        kinhLich: [
          {
            chuong: "@c0119",
            importance: "major",
            text: "Xuất hiện cùng Phượng Loan. Cúi chào VL, tặng ngọc phù bảo mệnh cấp Nguyên Anh — bảo vật quý phụ trợ phòng thân. (@c0119)"
          },
          {
            chuong: "@c0120",
            importance: "normal",
            text: "Đích thân dẫn đại quân vào Tuyên Vũ quốc. Giết lão bà (Nguyên Anh sơ kỳ) của Tuyên Vũ quốc trong đợt tấn công đầu tiên. (@c0120)"
          }
        ],
        tuVi: "Nguyên Anh trung kỳ đỉnh @c0120.",
        tuViMoc: [
          { chuong: "@c0119", canhGioi: "Nguyên Anh trung kỳ", text: "Xác nhận khi xuất hiện @c0119." },
          { chuong: "@c0120", canhGioi: "Nguyên Anh trung kỳ đỉnh", text: "Xác nhận cụ thể hơn @c0120." }
        ],
        nhanMach: [
          { ten: "Phượng Loan", quanHe: "Đạo lữ song tu", ghiChu: "Nguyên Anh sơ kỳ, Chiến Thần Điện @c0119.", tag: "than-thiet" },
          { ten: "Vương Lâm", quanHe: "Đệ tử ký danh của đạo lữ", ghiChu: "Cúi chào và tặng ngọc phù bảo mệnh @c0119.", tag: "ban-be" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0119", "@c0120"]
    },
    {
      id: "chu-can",
      name: "Chu Cẩn",
      cn: "",
      aliases: ["trung niên văn sĩ"],
      gioiTinh: "nam",
      theLuc: ["Chiến Thần Điện", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Nguyên Anh sơ kỳ (@c0119)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ — quan viên quân vụ cùng phe Phượng Loan",
      tinhCach: "Nghiêm khắc, đa nghi — tra hỏi gắt gao việc tu vi tăng nhanh bất thường; ban đầu thù địch VL rồi chuyển sang phối hợp dưới trướng Phượng Loan.",
      blurb: "Tu sĩ Nguyên Anh sơ kỳ Hỏa Phần quốc, dáng trung niên văn sĩ, cùng phe Phượng Loan trong Chiến Thần Điện. Từng xông ra định giết VL @c0119 (bị Phượng Loan chặn), sau đó phụ trách chấm chiến công và tra hỏi VL về việc tăng tu vi @c0122.",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0119",
            importance: "minor",
            text: "Nhân lúc hỗn loạn, xông ra định tấn công và giết VL. Bị Phượng Loan can thiệp bằng Ngũ thải phượng xa, buộc phải dừng. (@c0119)"
          },
          {
            chuong: "@c0122",
            importance: "normal",
            text: "Tại Thiên Điện, chấm chiến công cho VL (61 Trúc Cơ + 1 Kết Đan), nghiêm khắc tra hỏi vì sao VL tăng tu vi nhanh và giết được Kết Đan kỳ; dò ra dư linh lực Kim Đan nên tin lời ngụy báo. Báo tin Tuyên Vũ quốc đã liên hợp, sắp đại chiến. (@c0122)"
          }
        ],
        tuVi: "Nguyên Anh sơ kỳ @c0119.",
        tuViMoc: [
          { chuong: "@c0119", canhGioi: "Nguyên Anh sơ kỳ", text: "Xác nhận khi xuất hiện @c0119." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0119", "@c0122"]
    },
    {
      id: "dieu-linh",
      name: "Diệu Linh",
      cn: "",
      aliases: [],
      gioiTinh: "khong-ro",
      theLuc: ["Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (@c0118)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ",
      tinhCach: "Thận trọng — chặn VL hỏi thăm thay vì tấn công trực tiếp.",
      blurb: "Tu sĩ Nguyên Anh kỳ Hỏa Phần quốc. Chặn đường VL trong trận đại quân 10.000 tu sĩ để thẩm vấn. (@c0118)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0118",
            importance: "minor",
            text: "Chặn VL giữa đại quân hơn 10.000 tu sĩ, hỏi thăm danh tính và mục đích. (@c0118)"
          }
        ],
        tuVi: "Nguyên Anh kỳ @c0118.",
        tuViMoc: [
          { chuong: "@c0118", canhGioi: "Nguyên Anh kỳ", text: "Xác nhận khi xuất hiện @c0118." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0118"]
    },
    {
      id: "ly-ky-khanh",
      name: "Lý Kỳ Khánh",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Lạc Hà Môn", "Hỏa Phần Quốc"],
      canhGioiCaoNhat: "Trúc Cơ hậu kỳ giả đan (@c0113)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ",
      tinhCach: "Nhiệt tình, thiện ý — mời người mới tham dự đại hội phương thị.",
      blurb: "Tu sĩ nam Lạc Hà Môn, mặt trắng như ngọc, trường bào tím, phi kiếm xanh biếc; Trúc Cơ hậu kỳ đã tiến giả đan. Cùng sư muội Uyển Nhi truy tìm một kẻ giỏi thuật dịch dung, thoạt nhầm VL (tên Mã Lương) là kẻ đó rồi giải hiềm; mời VL tham dự Khê Cốc phường thị đại hội. (@c0113)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0113",
            importance: "minor",
            text: "Cùng sư muội Uyển Nhi truy tìm kẻ giỏi thuật dịch dung; thoạt nhầm VL (Mã Lương) là kẻ đó, được Uyển Nhi phân biệt qua khí chất nên giải hiềm. Mời VL tham dự Khê Cốc phường thị đại hội. (@c0113)"
          }
        ],
        tuVi: "Trúc Cơ hậu kỳ giả đan @c0113.",
        tuViMoc: [
          { chuong: "@c0113", canhGioi: "Trúc Cơ hậu kỳ giả đan", text: "Xác nhận khi xuất hiện @c0113." }
        ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0113"]
    },
    {
      id: "hoa-linh-thu-to",
      name: "Hỏa Linh Thú tổ",
      cn: "",
      aliases: ["Thú tổ hỏa linh"],
      gioiTinh: "khong-ro",
      theLuc: [],
      canhGioiCaoNhat: "Không xác định (dã thú thần thú sơn mạch @c0116)",
      trangThai: "bi-thu-phuc (bị Nghịch Thiên Châu hấp thu nguyên anh hỏa thuộc tính @c0116)",
      vaiTro: "Nhân vật phụ — nguồn năng lượng",
      tinhCach: "Hung hãn, cai trị bầy hỏa linh thú trong miệng núi lửa Phần Kim sơn mạch.",
      blurb: "Thú tổ của bầy hỏa linh thú tại Phần Kim sơn mạch. Khi Nghịch Thiên Châu đột phá, hấp thu nguyên anh hỏa thuộc tính của Thú tổ — đây là sự kiện then chốt giúp Nghịch Thiên Châu đạt hỏa thuộc tính Đại viên mãn. (@c0116)",
      tabs: {
        diem: [],
        kinhLich: [
          {
            chuong: "@c0116",
            importance: "major",
            text: "Nghịch Thiên Châu tự phá ra khỏi huyệt đạo VL, hấp thu nguyên anh hỏa thuộc tính của Thú tổ. Sau khi hấp thu xong, bầy hỏa linh thú vỡ tán, các hỏa linh thú nhỏ hoảng loạn. (@c0116)"
          }
        ],
        tuVi: "Không xác định @c0116.",
        tuViMoc: [],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0116"]
    },
    {
      id: "ly-mo-uyen",
      name: "Lý Mộ Uyển",
      cn: "",
      aliases: ["Lý Mộc Uyển"],
      gioiTinh: "nu",
      theLuc: ["Lạc Hà Môn"],
      canhGioiCaoNhat: "Trúc Cơ trung kỳ (@c0124)",
      trangThai: "song",
      vaiTro: "Đan sư đồng hành của Vương Lâm",
      tinhCach: "Thông minh, kiêu hãnh nhưng biết nhìn thời thế; ban đầu coi thường Vương Lâm rồi nhanh chóng kính sợ; thận trọng giữ mình, thẳng thắn nói thật khi đã chịu ràng buộc.",
      blurb: "Đệ tử Lạc Hà Môn, thiên tài luyện đan và trận pháp, em gái Lý Kỳ Khánh. Bị Song Tu Môn truy sát vì có Thiên Ly đan, được Vương Lâm cứu rồi đi theo làm 'lò luyện đan di động'; giao bản mệnh tinh huyết và luyện thành Thiên Ly đan giúp Vương Lâm kết đan.",
      tabs: {
        diem: [
          { text: "Thiên tài luyện đan-trận của Lạc Hà Môn — thuộc gần hết đan phương của môn, ghi nhớ nhiều đan phương thượng cổ, biết bố Cửu Ly Thi Cốt trận.", chuong: "@c0124" },
          { text: "Biết nhìn thời thế — sau khi chứng kiến Vương Lâm giết người không gợn sóng, dứt khoát bỏ ý phản kháng, giao bản mệnh tinh huyết để được tin dùng.", chuong: "@c0124" }
        ],
        kinhLich: [
          { chuong: "@c0123", importance: "normal", text: "Bị một trưởng lão Song Tu Môn (Kết Đan trung kỳ) truy sát để cướp Thiên Ly đan; tiểu đội 13 người đã bị giết. Được Vương Lâm cứu, mang theo lánh vào Tu Ma Hải." },
          { chuong: "@c0124", importance: "major", text: "Chứng kiến Vương Lâm dùng Tử Chú thuật giết ba tu sĩ Đấu Tà phái; nhận ra hắn chính là kẻ khiến hơn nửa Trúc Cơ kỳ Tuyên Vũ quốc tử trận. Bố Cửu Ly Thi Cốt trận cho động phủ và giao bản mệnh tinh huyết, đổi lấy việc luyện đủ đan cho Vương Lâm trước khi hắn kết đan, sau đó được đưa rời Tu Ma Hải." },
          { chuong: "@c0126", importance: "normal", text: "Lột da giao long chế hai bộ nội giáp, dùng giao long cốt nâng trận thành Cửu Ly Giao Long trận; lập phòng luyện đan, trồng linh thảo trong động phủ." },
          { chuong: "@c0127", importance: "major", text: "Khi động phủ bị mười Kết Đan kỳ Đấu Tà phái công phá, dùng Bách Thú Linh Lô và Ma Huyết đằng luyện thành công Thiên Ly đan (lần hai), kịp giúp Vương Lâm kết đan." },
          { chuong: "@c0130", importance: "minor", text: "Theo Vương Lâm trong cuộc truy diệt Đấu Tà phái; nhận ra hắn là 'người vô tình' nhưng vẫn thấy yên lòng bên hắn. Vương Lâm hứa đưa nàng tới Hỏa Phần Minh sau khi xong việc." },
          { chuong: "@c0135", importance: "normal", text: "Trong bốn năm đồng hành tại Tu Ma Hải, đã khắc 18.974 ngọc giản luyện đan — bộ sưu tập đan phương khổng lồ. Vương Lâm quyết định đưa nàng rời Tu Ma Hải." },
          { chuong: "@c0136", importance: "minor", text: "Được Vương Lâm mang chạy trốn lão nhân thanh bào trong Tu Ma Hải, lặn biển và vọt lên không." },
          { chuong: "@c0137", importance: "major", text: "Chia tay Vương Lâm sau bốn năm đồng hành: nhận lại bản mệnh tinh huyết (kèm thần thức hộ thể của VL); tặng hơn mười bình đan dược, ngọc giản ghi đan phương và ngọc phù Đấu Long trận cải biến; nhận lại Bách Thú Linh Lô. Tiết lộ hai người chưa từng biết tên thật của nhau, rồi đạp kiếm quang bay về Hỏa Phần Minh." }
        ],
        tuVi: "Trúc Cơ trung kỳ — không phải tu sĩ chiến đấu, sở trường là luyện đan và bố trận (@c0124).",
        tuViMoc: [
          { chuong: "@c0124", canhGioi: "Trúc Cơ trung kỳ", text: "Tu vi Trúc Cơ trung kỳ; giá trị nằm ở tài luyện đan-trận chứ không ở chiến lực." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Ân nhân / chủ (bị nắm tinh huyết)", ghiChu: "Cứu mạng nàng, nắm bản mệnh tinh huyết; nàng làm lò luyện đan cho hắn. Sau bốn năm, VL trả tinh huyết và chia tay (@c0137).", tag: "an-nhan" },
          { ten: "Lý Kỳ Khánh", quanHe: "Ca ca", ghiChu: "Đệ tử Lạc Hà Môn, từng bảo vệ nàng; kể cho nàng về đại đội thứ mười của Hỏa Phần quốc.", tag: "ho-hang" }
        ],
        tuiDo: {
          phapBao: [ { ten: "Đan lô tùy thân (nhị phẩm)", moTa: "Lô luyện đan mang theo, đủ cho đan thường nhưng không đủ luyện Thiên Ly đan an toàn.", nguon: "@c0124, @c0126" } ],
          congPhap: [], danDuoc: [ { ten: "Thiên Ly đan (bán thành phẩm)", moTa: "Một viên bán thành phẩm nàng giữ; Lạc Hà Môn chỉ làm bán thành phẩm, tế luyện nửa canh giờ là hoàn thiện, phải dùng trong một năm.", nguon: "@c0123" } ],
          linhThu: [], khac: []
        }
      },
      nguon: ["@c0123", "@c0124", "@c0125", "@c0126", "@c0127", "@c0128", "@c0129", "@c0130", "@c0135", "@c0136", "@c0137"]
    },
    {
      id: "tang-moc-nhai",
      name: "Tang Mộc Nhai",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đấu Tà phái"],
      canhGioiCaoNhat: "Ngưng Khí kỳ tầng mười lăm (@c0124)",
      trangThai: "song (linh hồn bị phong ấn)",
      vaiTro: "Nguồn tin / thuộc hạ bị thu phục",
      tinhCach: "Tà dị, giảo hoạt, vong ân bội nghĩa — sở trường dùng độc; gặp kẻ mạnh hơn lập tức đổi mặt quy phục.",
      blurb: "Đệ tử Đấu Tà phái lớn lên trong Tu Ma Hải, luyện song ma chi nhãn, chuyên dùng độc. Đã hạ độc giết sư huynh để 'đoạt cơ' (được sư phụ đồng ý) thì gặp Vương Lâm; bị trấn áp, linh hồn phong ấn trong Diện Hồn kỳ làm nguồn tin về Tu Ma Hải.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0124", importance: "normal", text: "Dùng độc cốt (làm từ xương Nha Huyền thú) và mười sáu loại kịch độc giết sư huynh để đoạt cơ; vừa định mang xác đi thì gặp Vương Lâm, khiếp sợ trước cảnh giới của hắn nên quy phục, ném thú cốt." },
          { chuong: "@c0125", importance: "normal", text: "Bị Vương Lâm phong ấn linh hồn vào Diện Hồn kỳ; khai báo tin tức về Tu Ma Hải, Đấu Tà phái, Thi Cốc và chỉ đường cho Vương Lâm." }
        ],
        tuVi: "Ngưng Khí kỳ tầng mười lăm (@c0124).",
        tuViMoc: [ { chuong: "@c0124", canhGioi: "Ngưng Khí kỳ tầng mười lăm", text: "Tu vi tầng mười lăm Ngưng Khí khi gặp Vương Lâm." } ],
        nhanMach: [
          { ten: "Lưu Sâm", quanHe: "Sư tổ", ghiChu: "Chưởng môn Đấu Tà phái (Kết Đan trung kỳ đỉnh phong).", tag: "su-mon" },
          { ten: "Vương Lâm", quanHe: "Người trấn áp", ghiChu: "Trấn áp và phong ấn linh hồn hắn làm nguồn tin.", tag: "doi-thu" }
        ],
        tuiDo: { phapBao: [ { ten: "Độc cốt (xương Nha Huyền thú)", moTa: "Đoạn thú cốt đen thổi ra khói độc; hữu hiệu với Trúc Cơ kỳ, gần vô dụng với Kết Đan kỳ. Cuối cùng ném cho Vương Lâm.", nguon: "@c0124, @c0125" } ], congPhap: [ { ten: "Song ma chi nhãn", moTa: "Cặp mắt ma luyện được, giúp cảm nhận sự lãnh khốc của đại ma.", nguon: "@c0124" } ], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0124", "@c0125", "@c0126"]
    },
    {
      id: "truong-tu-luc",
      name: "Trương Tự Lực",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Tà Ma Tông", "Hỏa Phần Minh"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (@c0121)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ (đội trưởng)",
      tinhCach: "Kiêu ngạo, khinh thường thuộc hạ; bất mãn với vị trí được phân.",
      blurb: "Tu sĩ Nguyên Anh kỳ của Tà Ma Tông, đội trưởng tiểu đội tám trong đại đội thứ mười của Hỏa Phần Minh. Khinh thường thuộc hạ, chỉ coi trọng năm Trúc Cơ kỳ; kinh ngạc và kiêng kỵ trước sức mạnh Vương Lâm.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0121", importance: "minor", text: "Dẫn tiểu đội tám chống đỡ tu sĩ Tuyên Vũ quốc; bị tám người lập kiếm trận vây khốn. Chứng kiến Vương Lâm chớp mắt giết bảy Trúc Cơ kỳ thì kinh nghi, đoán hắn ẩn tàng tu vi; cuối cùng quay đầu chạy khi thấy trăm kiếm quang kéo tới." }
        ],
        tuVi: "Nguyên Anh kỳ (@c0121).",
        tuViMoc: [ { chuong: "@c0121", canhGioi: "Nguyên Anh kỳ", text: "Đội trưởng Nguyên Anh kỳ của tiểu đội tám." } ],
        nhanMach: [],
        tuiDo: { phapBao: [ { ten: "Kim đan (bản mệnh)", moTa: "Viên kim đan linh khí nồng đậm ấn xuất từ ngực, điều khiển phá không đánh trúng địch.", nguon: "@c0121" } ], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0121"]
    },
    {
      id: "luu-sam",
      name: "Lưu Sâm",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đấu Tà phái"],
      canhGioiCaoNhat: "Kết Đan trung kỳ đỉnh phong (@c0125)",
      trangThai: "song",
      vaiTro: "Chưởng môn Đấu Tà phái",
      tinhCach: "Chưa khắc họa trực tiếp (mới nhắc tên).",
      blurb: "Chưởng môn Đấu Tà phái, sư tổ của Tang Mộc Nhai, tu vi Kết Đan trung kỳ đỉnh phong, có chút danh khí ở Tu Ma Hải. Tới chương 130 mới được nhắc qua lời khai, chưa xuất hiện trực tiếp.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0125", importance: "minor", text: "Được nhắc tới là người tu vi cao nhất Đấu Tà phái (Kết Đan trung kỳ đỉnh phong), sư tổ Tang Mộc Nhai." }
        ],
        tuVi: "Kết Đan trung kỳ đỉnh phong (@c0125).",
        tuViMoc: [ { chuong: "@c0125", canhGioi: "Kết Đan trung kỳ đỉnh phong", text: "Tu vi cao nhất Đấu Tà phái theo lời khai." } ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0125", "@c0129"]
    },
    {
      id: "tien-khon",
      name: "Tiễn Khôn",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đấu Tà phái"],
      canhGioiCaoNhat: "Kết Đan trung kỳ (@c0127)",
      trangThai: "tu-vong",
      vaiTro: "Phản diện (Đại trưởng lão)",
      tinhCach: "Kiêu ngạo khi thắng thế, hèn nhát và xảo trá khi thất thế.",
      blurb: "Đại trưởng lão Đấu Tà phái, Kết Đan trung kỳ, sở hữu pháp bảo Đại Duyệt Tuyệt Phù. Cầm đầu mười Kết Đan kỳ truy sát Vương Lâm; là kẻ chạy đầu tiên khi Vương Lâm kết đan thành công. Cùng đường lấy Vạn Ma Bách Nhật Tru Sát Lệnh ra dọa rồi bị Vương Lâm niệm Tử Chú thuật giết.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0127", importance: "normal", text: "Dẫn đầu mười Kết Đan kỳ Đấu Tà phái truy sát Vương Lâm vì Bách Thú Linh Lô; khi Vương Lâm kết đan thành công thì khiếp sợ bỏ chạy đầu tiên." },
          { chuong: "@c0128", importance: "normal", text: "Chạy về phân bộ Ngũ Đinh phong cầu cứu; cùng đường lấy Vạn Ma Bách Nhật Tru Sát Lệnh ra dọa và cầu hòa, hứa dẫn tiến Vương Lâm làm Đại trưởng lão." },
          { chuong: "@c0129", importance: "major", text: "Bị Vương Lâm niệm một chữ 'Tử' giết chết (thất khiếu chảy máu, thần thức phá liệt); lệnh bài vỡ kết thành chữ 'Diệt' treo trên đầu Vương Lâm." }
        ],
        tuVi: "Kết Đan trung kỳ (@c0127).",
        tuViMoc: [ { chuong: "@c0127", canhGioi: "Kết Đan trung kỳ", text: "Đại trưởng lão Đấu Tà phái, Kết Đan trung kỳ." } ],
        nhanMach: [ { ten: "Vương Lâm", quanHe: "Kẻ truy sát rồi bị giết bởi", ghiChu: "Truy sát Vương Lâm; bị Tử Chú thuật giết.", tag: "doi-thu" } ],
        tuiDo: { phapBao: [ { ten: "Đại Duyệt Tuyệt Phù", moTa: "Pháp bảo của Tiễn Khôn dùng trong truy sát.", nguon: "@c0127" }, { ten: "Vạn Ma Bách Nhật Tru Sát Lệnh", moTa: "Lệnh bài thượng cổ Tiễn Khôn tế luyện; khi hắn chết, lệnh bài vỡ kích hoạt chữ 'Diệt' truy sát Vương Lâm.", trangThai: "hong", nguon: "@c0128, @c0129" } ], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0127", "@c0128", "@c0129"]
    },
    {
      id: "con-tang",
      name: "Côn Tang",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đấu Tà phái"],
      canhGioiCaoNhat: "Kết Đan kỳ (@c0127)",
      trangThai: "tu-vong",
      vaiTro: "Phản diện phụ (trưởng lão)",
      tinhCach: "Tham lam, liều lĩnh vì pháp bảo.",
      blurb: "Trưởng lão Kết Đan kỳ Đấu Tà phái, sở hữu Cổ Kính (định vị) và Hắc Thạch Ấn. Cùng truy sát Vương Lâm vì Bách Thú Linh Lô; bị Vương Lâm phóng tinh quang xuyên ngực giết, Kim đan bị thu.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0127", importance: "minor", text: "Dùng Cổ Kính định vị và Hắc Thạch Ấn công phá Cửu Ly Thi Cốt trận; cùng Phác Lâm đoạt Bách Thú Linh Lô." },
          { chuong: "@c0128", importance: "normal", text: "Bỏ chạy, dùng bí thuật tự tổn thân tăng tốc nhưng vẫn bị Vương Lâm phóng tinh quang xuyên ngực giết — người thứ ba bị giết; Kim đan bị thu." }
        ],
        tuVi: "Kết Đan kỳ (@c0127).",
        tuViMoc: [ { chuong: "@c0127", canhGioi: "Kết Đan kỳ", text: "Trưởng lão Kết Đan kỳ Đấu Tà phái." } ],
        nhanMach: [],
        tuiDo: { phapBao: [ { ten: "Cổ Kính", moTa: "Pháp bảo định vị mục tiêu.", nguon: "@c0127" }, { ten: "Hắc Thạch Ấn (Vạn Phong Ấn)", moTa: "Pháp bảo hóa cự phong, dùng công phá trận pháp.", nguon: "@c0127" } ], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0127", "@c0128"]
    },
    {
      id: "tran-hai",
      name: "Trần Hải",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đấu Tà phái"],
      canhGioiCaoNhat: "Kết Đan kỳ (@c0128)",
      trangThai: "tu-vong",
      vaiTro: "Phản diện phụ (trưởng lão)",
      tinhCach: "Lão luyện, giỏi ẩn nấp.",
      blurb: "Trưởng lão Kết Đan kỳ Đấu Tà phái. Khi bị truy sát đã đào hố tự chôn ẩn tức để trốn (cách từng dùng thời Trúc Cơ kỳ) nhưng vẫn bị Vương Lâm giết — người thứ tư.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0128", importance: "minor", text: "Đào hố tự chôn, thu liễm hơi thở để trốn Vương Lâm nhưng vẫn bị giết, thất khiếu chảy máu, kim tuyến lôi xác lên." }
        ],
        tuVi: "Kết Đan kỳ (@c0128).",
        tuViMoc: [ { chuong: "@c0128", canhGioi: "Kết Đan kỳ", text: "Trưởng lão Kết Đan kỳ Đấu Tà phái." } ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0128"]
    },
    {
      id: "moc-nam",
      name: "Mộc Nam",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đấu Tà phái"],
      canhGioiCaoNhat: "Kết Đan kỳ (@c0128)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ (trưởng lão phân bộ)",
      tinhCach: "Khôn ngoan biết sợ — gặp kẻ mạnh thì khúm núm để giữ mạng.",
      blurb: "Trưởng lão Kết Đan kỳ tọa trấn phân bộ Đấu Tà phái tại Ngũ Đinh phong, huynh đệ với Mộc Bắc. Nhận ra Vương Lâm áp đảo nên cung kính không dám cản, bị ép dẫn đường tới Tổng bộ Đấu Tà phái.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0128", importance: "minor", text: "Cùng Mộc Bắc tọa trấn Ngũ Đinh phong; nhận ra chín thi thể Vương Lâm kéo theo là chín trưởng lão Tổng bộ nên khúm núm tham kiến, không dám ngăn." },
          { chuong: "@c0129", importance: "minor", text: "Bị Vương Lâm ép dẫn đường tới Tổng bộ Đấu Tà phái; cung cấp tin tức về tu vi chưởng môn và việc không có Nguyên Anh kỳ trong vùng." }
        ],
        tuVi: "Kết Đan kỳ (@c0128).",
        tuViMoc: [ { chuong: "@c0128", canhGioi: "Kết Đan kỳ", text: "Trưởng lão Kết Đan kỳ tọa trấn Ngũ Đinh phong." } ],
        nhanMach: [ { ten: "Mộc Bắc", quanHe: "Huynh đệ", ghiChu: "Cùng tọa trấn phân bộ Ngũ Đinh phong.", tag: "ho-hang" } ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0128", "@c0129", "@c0130"]
    },
    {
      id: "moc-bac",
      name: "Mộc Bắc",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đấu Tà phái"],
      canhGioiCaoNhat: "Kết Đan kỳ (@c0128)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ (trưởng lão phân bộ)",
      tinhCach: "Khôn ngoan biết sợ, tương tự Mộc Nam.",
      blurb: "Trưởng lão Kết Đan kỳ tọa trấn phân bộ Đấu Tà phái tại Ngũ Đinh phong, huynh đệ với Mộc Nam. Cùng bị ép dẫn đường tới Tổng bộ; cung cấp thông tin tu vi chưởng môn Đấu Tà phái.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0128", importance: "minor", text: "Cùng Mộc Nam khúm núm tham kiến Vương Lâm khi thấy uy thế của hắn, không dám cản." },
          { chuong: "@c0129", importance: "minor", text: "Cho biết chưởng môn Đấu Tà phái đạt Kết Đan trung kỳ đỉnh; bị ép dẫn đường tới Tổng bộ." }
        ],
        tuVi: "Kết Đan kỳ (@c0128).",
        tuViMoc: [ { chuong: "@c0128", canhGioi: "Kết Đan kỳ", text: "Trưởng lão Kết Đan kỳ tọa trấn Ngũ Đinh phong." } ],
        nhanMach: [ { ten: "Mộc Nam", quanHe: "Huynh đệ", ghiChu: "Cùng tọa trấn phân bộ Ngũ Đinh phong.", tag: "ho-hang" } ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0128", "@c0129", "@c0130"]
    },
    {
      id: "thuong-quan-mac",
      name: "Thượng Quan Mặc",
      cn: "",
      aliases: ["Hắc y Ma quân"],
      gioiTinh: "nam",
      theLuc: ["Hắc y Ma quân (tán tu ngoại vi Tu Ma Hải)", "Đấu Tà phái (chưởng giáo @c0133)"],
      canhGioiCaoNhat: "Kết Đan trung kỳ đỉnh (@c0129)",
      trangThai: "song (chưởng giáo Đấu Tà phái; bản mệnh tinh huyết bị lão nhân thanh bào bức bách @c0136)",
      vaiTro: "Thuộc hạ (bị thu phục)",
      tinhCach: "Ngạo mạn khi thị uy, hèn và biết thời thế khi gặp kẻ mạnh hơn; thực dụng, chịu khuất phục để bảo mạng.",
      blurb: "Tu sĩ trung tuổi danh hiệu Hắc y Ma quân, Kết Đan trung kỳ đỉnh, hoạt động ngoại vi Tu Ma Hải, mạnh hơn Đại trưởng lão Đấu Tà phái. Định giết Vương Lâm để đoạt Vạn Ma Bách Nhật Tru Sát Lệnh nhưng bị áp đảo; dâng bản mệnh tinh huyết để bảo mạng, từ đó bị Vương Lâm ràng buộc sống-chết và theo hầu. Sau khi Giải Đông Lai chết, được Vương Lâm bổ nhiệm làm chưởng giáo Đấu Tà phái.",
      tabs: {
        diem: [
          { text: "Biết thời thế để sống — từ ngạo mạn 'dạy' Vương Lâm chuyển sang quỳ xin tha, xin bái sư, rồi dâng bản mệnh tinh huyết khi nhận ra không thể địch lại.", chuong: "@c0129" },
          { text: "Thừa lệnh Vương Lâm thị uy toàn bộ Nam Đẩu thành, giết Âu Dương lão nhân trước mắt chúng tu sĩ.", chuong: "@c0131" }
        ],
        kinhLich: [
          { chuong: "@c0129", importance: "normal", text: "Xuất hiện định giết Vương Lâm đoạt lệnh bài; bị Tử Chú thuật áp đảo (ngọc phù di vật sư phụ chống được một kích Nguyên Anh kỳ phải tự vỡ); quỳ xin tha, cuối chương dâng bản mệnh tinh huyết để liều mạng." },
          { chuong: "@c0130", importance: "normal", text: "Bị Vương Lâm nuốt bản mệnh tinh huyết tạo ràng buộc sống-chết hai chiều; theo hầu Vương Lâm, thị uy đám tu sĩ cản đường." },
          { chuong: "@c0131", importance: "normal", text: "Thừa lệnh giết Âu Dương lão nhân — hành động thị uy cùng Mộc Nam/Mộc Bắc trước hàng nghìn tu sĩ quy tụ vì chữ 'Tru'." },
          { chuong: "@c0132", importance: "minor", text: "Theo hộ vệ Vương Lâm tiến về đại bản doanh Đấu Tà phái, đối diện Đấu Long Đại Trận hơn 13.000 đệ tử." },
          { chuong: "@c0133", importance: "major", text: "Sau khi Giải Đông Lai chết, được Vương Lâm bổ nhiệm làm chưởng giáo Đấu Tà phái — nắm quyền thay thế chưởng môn cũ." },
          { chuong: "@c0136", importance: "major", text: "Lão nhân thanh bào (Nguyên Anh kỳ) tìm tới, bức một giọt bản mệnh tinh huyết từ mi tâm để dò ra dấu Vương Lâm — bị xâm phạm thân thể cực kỳ nguy hiểm." }
        ],
        tuVi: "Kết Đan trung kỳ đỉnh (@c0129).",
        tuViMoc: [ { chuong: "@c0129", canhGioi: "Kết Đan trung kỳ đỉnh", text: "Mạnh hơn Đại trưởng lão Đấu Tà phái, được chưởng môn kính ba phần." } ],
        nhanMach: [ { ten: "Vương Lâm", quanHe: "Chủ (ràng buộc tinh huyết)", ghiChu: "Áp đảo và nuốt bản mệnh tinh huyết của hắn, khiến hắn theo hầu.", tag: "su-mon" } ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [ { ten: "Bản mệnh tinh huyết (đã dâng)", moTa: "Màu kim hoàng, dâng cho Vương Lâm để bảo mạng; bị Vương Lâm nuốt, tu vi tổn hại, từ đó bị ràng buộc sống-chết.", trangThai: "mat", nguon: "@c0129, @c0130" } ] }
      },
      nguon: ["@c0129", "@c0130", "@c0131", "@c0132", "@c0133", "@c0136"]
    },
    {
      id: "giai-dong-lai",
      name: "Giải Đông Lai",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Đấu Tà phái"],
      canhGioiCaoNhat: "Kết Đan trung kỳ (@c0133)",
      trangThai: "tu (chết @c0133 — hóa tro khi kiếm hoàn phản bị phá)",
      vaiTro: "Chưởng môn Đấu Tà phái",
      tinhCach: "Bình tĩnh, kiên định, sẵn sàng hy sinh bản thân vì môn phái; dùng kế hiến thân dụ địch — đây là lựa chọn chủ động, không phải liều mạng thất vọng.",
      blurb: "Chưởng môn Đấu Tà phái, Kết Đan trung kỳ, kiếm tu. Khi Vương Lâm dẫn quân diệt môn phái, Giải Đông Lai dùng Đấu Long Đại Trận tập hợp sức mạnh 13.562 đệ tử để đàm phán; thất bại, bèn giả thua dâng chưởng giáo lệnh để dẫn dụ Vương Lâm vào tầm sát của kiếm hoàn và kiếm đan — kế không thành, hóa tro chết.",
      tabs: {
        diem: [
          { text: "Kiếm tu Kết Đan trung kỳ — kiếm hoàn và kiếm đan là chiêu tử thương dụ địch cuối cùng, thể hiện bản lĩnh kiếm tu thuần túy.", chuong: "@c0133" }
        ],
        kinhLich: [
          { chuong: "@c0132", importance: "major", text: "Khi Vương Lâm dẫn quân tiến tới đại bản doanh, triển khai Đấu Long Đại Trận — dồn thần thức toàn bộ 13.562 đệ tử, tu vi tạm thời gần sơ Nguyên Anh. Ra điều kiện: nếu phá được trận thì toàn phái quy phục." },
          { chuong: "@c0133", importance: "major", text: "Giả thua, trao chưởng giáo lệnh để dụ Vương Lâm vào gần — bất ngờ tung kiếm hoàn và kiếm đan đánh sát tử. Kiếm hoàn bị phá, kiếm đan phản bật; Giải Đông Lai hóa tro chết. Đấu Tà phái đầu hàng, Thượng Quan Mặc được bổ nhiệm chưởng giáo mới." }
        ],
        tuVi: "Kết Đan trung kỳ, kiếm tu (@c0133).",
        tuViMoc: [ { chuong: "@c0132", canhGioi: "Kết Đan trung kỳ (gần sơ Nguyên Anh tạm thời qua Đấu Long Đại Trận)", text: "Khi Đấu Long Đại Trận kích hoạt, tu vi tạm thời nâng lên gần sơ Nguyên Anh nhờ hội tụ thần thức 13.562 đệ tử." } ],
        nhanMach: [
          { ten: "Thượng Quan Mặc", quanHe: "Người kế nhiệm", ghiChu: "Được Vương Lâm chỉ định thay thế Giải Đông Lai làm chưởng giáo Đấu Tà phái sau khi lão chết.", tag: "khac" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0132", "@c0133"]
    },
    {
      id: "bat-cuc-ma-quan",
      name: "Bát Cực Ma Quân",
      cn: "",
      aliases: ["Lão nhân thanh bào", "Thanh sam lão giả"],
      gioiTinh: "nam",
      theLuc: ["Thất Mai thành (nghi)"],
      canhGioiCaoNhat: "Nguyên Anh hậu kỳ đại viên mãn (nghi Hóa Thần @c0137)",
      trangThai: "song",
      vaiTro: "Kẻ truy sát / đồng minh cưỡng ép",
      tinhCach: "Lạnh lùng, quyết đoán; không giết bừa bãi để tránh can thiệp từ tứ cấp tu chân quốc; thực dụng — chuyển sang đàm phán ngay khi thấy dùng vũ lực không hiệu quả.",
      blurb: "Cường giả tu vi Nguyên Anh hậu kỳ đại viên mãn, nghi đã tiến vào Hóa Thần kỳ, từ Tu Ma Hải nội hải. Truy sát Vương Lâm suốt ba năm để chiếm Tử Chú thuật nhằm phục vụ một kế hoạch lớn liên quan tới địa phương bí ẩn sắp mở. Sau khi Tử Chú thuật hấp thu bởi Bát Trảo Thần Thức trong ý thức hải khiến lão khựng người, đề nghị đàm phán và đạt hiệp nghị với Vương Lâm.",
      tabs: {
        diem: [
          { text: "Phá hộ sơn đại trận của Hỏa Phần Minh chỉ bằng một cái ấn tay; trấn áp Nguyên Anh kỳ Tà Ma tông bằng một chữ 'Biến!'.", chuong: "@c0138" },
          { text: "Bát Trảo Thần Thức trong ý thức hải hấp thu tia chớp Tử Chú — cơ chế phòng thủ đặc biệt khiến lão chỉ khựng người chứ không chết.", chuong: "@c0139" }
        ],
        kinhLich: [
          { chuong: "@c0135", importance: "minor", text: "Xuất hiện tại trà lâu Nam Đẩu thành (bào xanh, mũi ưng, bảy đóa mai vàng trên vạt áo), tra hỏi về Vương Lâm và Tử Chú thuật." },
          { chuong: "@c0136", importance: "major", text: "Chính thức truy sát: bức một giọt bản mệnh tinh huyết từ mi tâm Thượng Quan Mặc để lần dấu Vương Lâm. Đuổi sát nhưng VL lặn biển thoát." },
          { chuong: "@c0137", importance: "normal", text: "Kẹp được phi kiếm VL bằng hai ngón tay, bị một đạo công kích sượt qua mặt gây thương nhỏ; nếm máu của mình. Quét tay đẩy bay Phượng Loan – Dương Sâm – Trâu Bân ngàn trượng. Sau khi VL biến vào Mộng Cảnh, triển khai thần thức không tìm ra dấu." },
          { chuong: "@c0138", importance: "major", text: "Lộ danh xưng Bát Cực Ma Quân; tuyên bố sẽ luyện hóa toàn Tuyên Vũ quốc nếu trong ba năm không bắt được VL. Phá hộ sơn đại trận Hỏa Phần Minh bằng một ấn tay; phân bốn thân lùng sục toàn quốc — không tìm ra." },
          { chuong: "@c0139", importance: "major", text: "Dùng Thổ Hành Chu đuổi VL dưới lòng đất; thả Thanh Ban Mãng thử Tử Chú thuật. Bị VL tấn công bằng Tử Chú — Bát Trảo Thần Thức hấp thu nhưng vẫn run rẩy khựng người. Sau khi VL bị thương, lão đề nghị đàm phán." },
          { chuong: "@c0140", importance: "major", text: "Đạt hiệp nghị với Vương Lâm: VL hộ tống vào địa phương bí ẩn sắp mở, đổi lấy Lập Anh đan + bảo vật. Đặt phù văn phòng đào tẩu vào người VL. Dùng khí thế ép Chiến Thần Điện mở thạch phủ Thần Đạo thuật cho VL xem." }
        ],
        tuVi: "Nguyên Anh hậu kỳ đại viên mãn, nghi đã bước vào Hóa Thần kỳ (giả thần cảnh giới) (@c0137, @c0140).",
        tuViMoc: [ { chuong: "@c0135", canhGioi: "Nguyên Anh kỳ", text: "Tu vi ước đoán ban đầu là Nguyên Anh kỳ." }, { chuong: "@c0137", canhGioi: "Nguyên Anh hậu kỳ (nghi Hóa Thần)", text: "Trâu Bân (Chiến Thần Điện lão tổ từng du ngoạn nội hải) xác nhận lão là người Thất Mai chi địa, nghi đã đạt Hóa Thần kỳ." } ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Mục tiêu truy sát / đồng minh cưỡng ép", ghiChu: "Truy ba năm để chiếm Tử Chú thuật; cuối cùng ký hiệp nghị đồng hành vào địa phương bí ẩn.", tag: "doi-thu" }
        ],
        tuiDo: {
          phapBao: [
            { ten: "Thổ Hành Chu", moTa: "Thuyền gỗ đen di chuyển dưới lòng đất theo Độn Thổ thuật đẳng cấp cao; lão đi mượn để truy đuổi Vương Lâm trong chương 139.", nguon: "@c0138, @c0139" },
            { ten: "Trùy tử bảy màu (hình con thoi trong suốt)", moTa: "Pháp bảo tấn công phóng dưới lòng đất, quang mang bảy màu; chặn được ngọc phù cấp Nguyên Anh của Dương Sâm và gây nổ trăm trượng.", nguon: "@c0139" },
            { ten: "Thanh Ban Mãng", moTa: "Mãng xà dài ba trượng, thả ra làm mục tiêu thử Tử Chú thuật và lập xà trận; bị phi kiếm Vương Lâm chém đứt.", nguon: "@c0139" }
          ],
          congPhap: [], danDuoc: [], linhThu: [], khac: []
        }
      },
      nguon: ["@c0135", "@c0136", "@c0137", "@c0138", "@c0139", "@c0140"]
    },
    {
      id: "au-duong-lao-nhan",
      name: "Âu Dương lão nhân",
      cn: "",
      aliases: [],
      gioiTinh: "nam",
      theLuc: ["Tán tu (ngoại vi Tu Ma Hải)"],
      canhGioiCaoNhat: "Kết Đan kỳ (@c0131)",
      trangThai: "tu (chết @c0131 — bị Thượng Quan Mặc giết)",
      vaiTro: "Nhân vật phụ",
      tinhCach: "Không rõ tính cách chi tiết; xuất hiện ngắn.",
      blurb: "Tán tu Kết Đan kỳ hoạt động ngoại vi Tu Ma Hải. Bị Thượng Quan Mặc giết theo lệnh Vương Lâm trong cuộc thị uy tại Nam Đẩu thành.",
      tabs: {
        diem: [],
        kinhLich: [
          { chuong: "@c0131", importance: "minor", text: "Bị Thượng Quan Mặc hạ sát trước mắt hàng nghìn tu sĩ quy tụ vì chữ 'Tru', trong khuôn khổ cuộc thị uy của Vương Lâm tại Nam Đẩu thành." }
        ],
        tuVi: "Kết Đan kỳ (@c0131).",
        tuViMoc: [ { chuong: "@c0131", canhGioi: "Kết Đan kỳ", text: "Tu vi Kết Đan kỳ khi bị giết." } ],
        nhanMach: [],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0131"]
    },
    {
      id: "lao-gia-mat-do",
      name: "Lão giả mặt đỏ",
      cn: "",
      aliases: ["Trâu Bân"],
      gioiTinh: "nam",
      theLuc: ["Chiến Thần Điện"],
      canhGioiCaoNhat: "Nguyên Anh kỳ (@c0137)",
      trangThai: "song",
      vaiTro: "Nhân vật phụ (Chiến Thần Điện)",
      tinhCach: "Thực tế, bảo vệ lợi ích tông môn; chịu nhún khi gặp kẻ mạnh hơn (Bát Cực Ma Quân), nhưng đặt điều kiện rõ ràng với Vương Lâm.",
      blurb: "Lão tổ Chiến Thần Điện, tên Trâu Bân, tu vi Nguyên Anh kỳ, mắt to với ngọn lửa trong đồng tử. Ba trăm năm trước từng du ngoạn Tu Ma Hải nên nhận ra dấu hiệu bảy đóa mai vàng của Thất Mai chi địa. Canh giữ thạch phủ chứa Thần Đạo thuật; ra điều kiện cho Vương Lâm xem công pháp phải thề không lôi Chiến Thần Điện vào rắc rối.",
      tabs: {
        diem: [
          { text: "Người duy nhất trong nhóm nhận ra dấu hiệu bảy đóa mai vàng — ám chỉ Thất Mai chi địa nội hải Tu Ma Hải, thế lực cực mạnh.", chuong: "@c0137" }
        ],
        kinhLich: [
          { chuong: "@c0137", importance: "normal", text: "Cùng Phượng Loan và Dương Sâm tới Hỏa Phần quốc truy tìm Vương Lâm; nhận ra bảy đóa mai vàng của lão nhân thanh bào là dấu Thất Mai chi địa. Bị lão nhân quét tay đẩy bay ngàn trượng, Nguyên Anh suýt ly thể." },
          { chuong: "@c0140", importance: "normal", text: "Canh giữ thạch phủ Thần Đạo thuật; dẫn Vương Lâm tới trước cửa và yêu cầu VL phát lời thề không kéo Chiến Thần Điện vào phiền toái mới chịu mở thạch phủ." }
        ],
        tuVi: "Nguyên Anh kỳ (@c0137).",
        tuViMoc: [ { chuong: "@c0137", canhGioi: "Nguyên Anh kỳ", text: "Tu vi Nguyên Anh kỳ, tương đương Dương Sâm; bị lão nhân thanh bào đẩy bay ngàn trượng." } ],
        nhanMach: [
          { ten: "Phượng Loan", quanHe: "Đồng môn (Chiến Thần Điện)", ghiChu: "Cùng thực hiện nhiệm vụ truy tìm Vương Lâm.", tag: "khac" },
          { ten: "Vương Lâm", quanHe: "Người xin học Thần Đạo thuật", ghiChu: "Ra điều kiện VL thề bảo vệ lợi ích Chiến Thần Điện trước khi mở thạch phủ.", tag: "khac" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0137", "@c0140"]
    },
    {
      id: "ma-dau-long-can",
      name: "Ma đầu (Long Cân)",
      cn: "",
      aliases: ["Ma đầu trú thể Long Cân"],
      gioiTinh: "nam",
      theLuc: [],
      canhGioiCaoNhat: "Kết Đan kỳ (@c0134)",
      trangThai: "song (bị Vương Lâm khống chế; trú thể là Long Cân)",
      vaiTro: "Pháp khí linh thể (bị thu phục)",
      tinhCach: "Xảo quyệt, che giấu thực lực và trí nhớ đã khôi phục; bại lộ khi bị VL dùng thôn hồn áp chế.",
      blurb: "Ma đầu Trúc Cơ hậu kỳ đỉnh do Vương Lâm tạo từ Hứa Lập Quốc, sau đó trú vào Long Cân (gân giao long). Trong quá trình ở trong Long Cân, bí mật đột phá lên Kết Đan kỳ và khôi phục trí nhớ — che giấu cả hai điều này cho đến khi bị Vương Lâm ép buộc nhả hồn phách và khai báo.",
      tabs: {
        diem: [
          { text: "Bí mật đột phá Kết Đan kỳ trong Long Cân mà không để Vương Lâm hay biết — xảo quyệt ẩn thực lực.", chuong: "@c0134" }
        ],
        kinhLich: [
          { chuong: "@c0112", importance: "normal", text: "Được Vương Lâm tạo ra: bắt sống Hứa Lập Quốc, hủy ý thức, ép nguyên thần ăn hồn dã thú đến khi hào quang ám hồng hình thành — Ma Đầu Trúc Cơ hậu kỳ đỉnh giả đan. Lưu trong Thiết Phiến." },
          { chuong: "@c0117", importance: "minor", text: "Được ký thân vào phi kiếm đen mới của Vương Lâm." },
          { chuong: "@c0127", importance: "normal", text: "Chuyển trú thể sang Long Cân (gân giao long tế luyện) theo lệnh Vương Lâm." },
          { chuong: "@c0134", importance: "major", text: "Bị Vương Lâm phát hiện đã đột phá Kết Đan kỳ và khôi phục trí nhớ — hai bí mật che giấu lâu nay bị lộ. Bị áp chế bằng thôn hồn, buộc nhả hồn phách." },
          { chuong: "@c0135", importance: "normal", text: "Bị Vương Lâm ép nhả 43 linh hồn tích lũy; VL dùng Cực cảnh thần thức nuốt để gia cường thần thức." }
        ],
        tuVi: "Ban đầu Trúc Cơ hậu kỳ đỉnh giả đan; bí mật đột phá lên Kết Đan kỳ trong Long Cân (@c0134).",
        tuViMoc: [
          { chuong: "@c0112", canhGioi: "Trúc Cơ hậu kỳ đỉnh giả đan", text: "Được tạo ra ở mức Trúc Cơ hậu kỳ đỉnh giả đan từ nguyên thần Hứa Lập Quốc." },
          { chuong: "@c0134", canhGioi: "Kết Đan kỳ", text: "Đột phá Kết Đan kỳ trong Long Cân — bị Vương Lâm phát hiện và áp chế." }
        ],
        nhanMach: [
          { ten: "Vương Lâm", quanHe: "Chủ tạo ra / khống chế", ghiChu: "Tạo ra từ Hứa Lập Quốc, dùng làm pháp khí linh thể trú trong Long Cân.", tag: "su-mon" }
        ],
        tuiDo: { phapBao: [], congPhap: [], danDuoc: [], linhThu: [], khac: [] }
      },
      nguon: ["@c0112", "@c0117", "@c0127", "@c0134", "@c0135"]
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
    },
    {
      chuong: 91,
      tieuDe: "Cố Nhân",
      tomTat: "VL bước ra cửa động bắt gặp Lý Sơn (Huyền Đạo Tông, Ngưng Khí t14) bị đám đông vây đòi lệnh bài. Dùng Dẫn Lực Thuật + lục sắc phi kiếm + Cực cảnh linh lực ra tay, hạ gục hai tu sĩ Trúc Cơ kỳ tức thì — đám đông kinh sợ tản ra. Nhận ra Lý Sơn là cố nhân từ thời Huyền Đạo Tông. Tự xưng tu vi 'Trúc Cơ' (che giấu Cực cảnh thực lực). Tổng lệnh bài đang giữ: 2. (@c0091)"
    },
    {
      chuong: 92,
      tieuDe: "Vô Đề",
      tomTat: "Lão nhân giả đan Vô Phong Cốc cầm Thiên Lôi Phong Hỏa tán xuất hiện. VL kích nổ Mễ Lạp từ túi trữ vật — sóng băng lam đóng băng hóa tượng toàn bộ lão nhân và 17 đệ tử Vô Phong Cốc. Ép nữ đệ tử Hợp Hoan Tông (Vương Dĩnh) khai thông tin: tổng 7 lệnh bài, chỉ 3 danh ngạch vào Vực Ngoại chiến trường; khi thông đạo mở mà còn quá 3 lệnh bài chưa bị hủy thì Triệu quốc mất tư cách. VL thu được thêm 2 lệnh bài — tổng 4. (@c0092)"
    },
    {
      chuong: 93,
      tieuDe: "Liễu Mi",
      tomTat: "VL ép Lý Sơn dẫn đến điểm tập kết Huyền Đạo Tông. Liễu Mi (Trúc Cơ kỳ, nhờ Phác Nam Tử) lặng lẽ ném lệnh bài ra không nói một tiếng; thở dài sau khi VL đi. Lão Mã (Trúc Cơ trung kỳ, Huyền Đạo Tông) ra tay tấn công — bị VL giết bằng một chiêu băng hóa. Liễu Phong (Trúc Cơ sơ kỳ, mới đột phá hơn 1 năm) chứng kiến. VL thu đủ 5 lệnh bài; bóp nát 4, giữ 1; trở về bế quan. (@c0093)"
    },
    {
      chuong: 94,
      tieuDe: "Chương 94",
      tomTat: "Bế quan tế luyện lại phi kiếm cổ quái: huyết luyện bằng cắt lưỡi + tinh huyết + âm hàn dịch thể từ hồ lô, mất một tháng. Kết quả: phi kiếm thu nhỏ còn một nửa, thêm vân huyết sắc, chuôi từ 1/5 → 1/15 — tốc độ và thuấn di tăng mạnh. Nghiên cứu pháp bảo hạt châu A Ngốc trong tháng còn lại, phát hiện thêm công năng mới. (@c0094)"
    },
    {
      chuong: 95,
      tieuDe: "Chương 95",
      tomTat: "Tư Đồ Nam kể lại lai lịch: vốn là đệ nhất cao thủ tinh cầu lục cấp tu chân quốc; bị kẻ địch từ thất cấp tu chân quốc ép bỏ thân, dùng quỷ hồn thuật ghi ký ức vào ngọc giản Thi Âm tông. Giải thích hệ thống tu chân quốc đa cấp và các thế lực vượt tầm Triệu quốc. VL lên kế hoạch dùng Quy Hồn thuật (từ Thi Âm tông ngọc giản) trong trận chiến với Đằng Hóa Nguyên. (@c0095)"
    },
    {
      chuong: 96,
      tieuDe: "Chương 96",
      tomTat: "Tư Đồ Nam giải thích Anh Biến kỳ và chỉ vị trí đặc biệt để VL đột phá Trúc Cơ trung kỳ — đây là điều kiện phục hồi thần thức TĐN. Mộng Cảnh tiến hóa khi Thủy thuộc tính viên mãn. VL ĐỘT PHÁ TRÚC CƠ TRUNG KỲ. Thông đạo Vực Ngoại mở; tu sĩ tứ phương kéo đến cốc khẩu Quyết Minh Cốc. Tân Hải (lão tổ Phiêu Miễu tông) ra với chỉ 8 trên 25 đệ tử, thề báo thù. Thượng Quan Vân xuất hiện. Đằng Hóa Nguyên hồi hộp đứng chờ. Tịch Diệt tông không lấy được lệnh bài vì lão tổ tọa hóa. 8 đại tông phái chính-ma lưỡng đạo hội tụ. (@c0096)"
    },
    {
      chuong: 97,
      tieuDe: "Chương 97",
      tomTat: "Lâm Dịch (sứ giả Thông Thiên tháp, béo tròn) đến cùng Phác Nam Tử, Hư Mi chân nhân (đệ nhất Phiêu Miễu tông, tóc bạc), lão nhân Thiên Đạo môn — toàn bộ Nguyên Anh kỳ cúi đầu. 5 người Thi Âm tông nhân khôi (mắt đỏ, âm hàn) xuất hiện. Đằng Hóa Nguyên cảm nhận trớ chú tiếp cận; thân phận khách khanh lão tổ Vô Phong Cốc của lão được xác nhận. (@c0097)"
    },
    {
      chuong: 98,
      tieuDe: "Chương 98",
      tomTat: "VL ra khỏi trận pháp Quyết Minh Cốc giả làm đệ tử Huyền Đạo Tông. Dùng pháp bảo Thiên Huyễn Biến (từ ngũ cấp tu chân quốc, Huyễn thành) phô diễn tu vi giả leo thang từ Trúc Cơ → Kết Đan → Nguyên Anh trung kỳ trước hàng trăm tu sĩ. Lâm Dịch nhận ra xuất xứ pháp bảo. VL dùng thuấn di né đòn chộp của Đằng Hóa Nguyên; ĐHN nghi ngờ gian lận (trận pháp Quyết Minh Cốc phong ấn Kết Đan kỳ+ nên không ai vào xác minh được). (@c0098)"
    },
    {
      chuong: 99,
      tieuDe: "Khiên Cưỡng",
      tomTat: "Thân thật VL ẩn trong thông đạo Quyết Minh Cốc. Điều khiển pháp bảo A Ngốc hóa hình người rồi hóa cự long làm nghi binh giao chiến; nguyên thần A Ngốc hút trớ chú của ĐHN. ĐHN dùng Hồn Phiên (đại kỳ 7 thước, 3 vạn tinh hồn; Luyện Hồn Tông Bì Lô quốc có bản chứa >10 triệu) tấn công A Ngốc; mở Vực Ngoại thông đạo qua người khổng lồ sọ đầu lâu xuất hiện. (@c0099)"
    },
    {
      chuong: 100,
      tieuDe: "Vương Lâm Bỏ Mạng",
      tomTat: "Trận đối đầu sinh tử trước toàn Triệu quốc tu chân giới: VL dùng huyễn thuật Thiên Huyễn + Lam Băng Thiểm (Hoàng Tuyền Tông) + thuấn di liên hoàn. Tự chém đứt cánh tay phải bằng phi kiếm, đoạt túi trữ vật ĐHN bằng Dẫn Lực Thuật. ĐHN phóng Nguyên Anh ra ngoài, dùng trớ chú lưới máu giam VL; tra tấn tinh thần bằng hồn phách phụ mẫu; hủy túi trữ vật và lệnh bài VL; cho 3 vạn tinh hồn nuốt dần chân tay. VL tự nổ thân thể, phóng hồn phách phụ mẫu cùng bản thân xuyên vào thông đạo Vực Ngoại chiến trường. Lâm Dịch nói 'Là—' bị ngắt. Kết Quyển 1. (@c0100)"
    }
  ],
  q02: [
    {
      chuong: 101,
      tieuDe: "Vực Ngoại Mở Màn",
      tomTat: "Khi thông đạo Vực Ngoại vừa đóng lại ở phía Triệu quốc, ở phía bên kia một cường giả Cự Ma tộc (Anh Biến kỳ, thân người khổng lồ) xuất hiện để thu hồi hạt châu. Đằng Hóa Nguyên rút về Đằng Gia bế quan, thề Nguyên Anh hậu kỳ rồi tính sổ. Phác Nam Tử nhân lúc đó thu Vương Hạo làm đệ tử. Người từ Hỏa Phần quốc cũng có mặt: Mã Lương (Chiến Thần Điện) cầm con thoi đỏ — pháp bảo phi hành tốc độ cao — đuổi theo hạt châu ba ngày không kịp. Cường giả Cự Ma tộc tước con thoi đỏ. Ngoại vực chiến trường được giới thiệu: chu kỳ 50 năm; tu sĩ tham gia nhận ngọc phù; tỷ lệ sống sót chỉ khoảng 30%; dung nhan được bảo toàn bên trong bất kể thời gian. (@c0101)"
    },
    {
      chuong: 102,
      tieuDe: "Tái Sinh Trong Khe Nứt",
      tomTat: "Linh hồn Vương Lâm tỉnh lại trong khe nứt không gian — tồn tại dưới dạng linh hồn chi hỏa. Nghịch Thiên Châu dung hợp vĩnh viễn vào hồn phách, không thể tách ra. VL ký thác vào xác người khổng lồ Cự Ma tộc cổ đại (trán có hình búa đen) và tiêu diệt sinh vật khói (sinh linh hư không) để rèn thần thức. Hồi phục toàn bộ ký ức. Phát hiện điều then chốt: Tư Đồ Nam chưa chết — đang ngủ sâu trong Nguyên Anh, bên trong giữ hồn phách cha mẹ VL. VL lên kế hoạch đưa một sợi thần thức nhỏ xuyên qua khe nứt rồi tự chặt đứt để thoát ra thế giới tu chân. (@c0102)"
    },
    {
      chuong: 103,
      tieuDe: "Ám Bố Chiến Trường",
      tomTat: "Tại ngoại vực chiến trường, hai tu sĩ Trúc Cơ hậu kỳ xuất hiện: Hứa Hạo (đệ tử Linh Vũ Tông, Cự Lộc Quốc) và Cát Dương. Từ ba năm qua, VL đã lặng lẽ tràn ngập chiến trường bằng vô số sợi thần thức vô chủ — hành động này làm chiến trường sớm sụp đổ trước kỳ hạn 50 năm. Du hồn khắp nơi, mọi tu sĩ trên chiến trường bị uy hiếp. Đúng lúc đó, Mã Lương vừa bị giết. VL tức thì thâm nhập đại quy mô vào thân xác Mã Lương — một luồng thần thức khổng lồ ùa vào, chữa lành vết thương, mở mắt, tỏa ra ánh quang. VL thu hồi toàn bộ thần thức đã rải khắp chiến trường cùng lúc — cú thu hồi đồng loạt khiến mọi tu sĩ còn sống trên chiến trường chấn động. (@c0103)"
    },
    {
      chuong: 104,
      tieuDe: "Hệ Thống Tu Chân Quốc",
      tomTat: "Liên Minh Tu Chân được vén màn chi tiết: hệ thống nhất đến lục cấp; ngưỡng gia nhập là lục cấp trở lên kết hợp với sở hữu một tinh cầu. Triệu quốc = tam cấp; Thanh Long Quốc = tứ cấp; Cự Ma Tộc = ngũ cấp; Chu Tước Quốc = lục cấp — từ nhất cấp vươn lên lục trong 100.000 năm, được ban Chu Tước tinh với 18 ngũ cấp tu chân quốc và 108 chiến trường ngoại vực trực thuộc. VL (trong thân Mã Lương) xuất hiện giữa chiến trường hỗn loạn, chặn đứng du hồn bằng một tiếng 'Không biết sống chết!', thương lượng với ba thôn hồn hoãn sự sụp đổ. Phát hiện linh lực trong thân Mã Lương đã cạn hoàn toàn. Nhận ra ba đệ tử Chiến Thần Điện — Chu Tử Hồng và hai người — đang bị du hồn truy đuổi. (@c0104)"
    },
    {
      chuong: 105,
      tieuDe: "Túi Trữ Vật Từ Người Chết",
      tomTat: "VL cứu ba đệ tử Chiến Thần Điện (Chu Tử Hồng cùng Lâm Đào và Dương Hùng) bằng một tiếng quát thần thức. Sai ba thôn hồn làm 'hàng xóm tốt' — đi tìm Hứa Hạo và Cát Dương: cả hai đã xác nhận tử vong. VL thu ba túi trữ vật của họ từ tay du hồn hai sừng — loại du hồn dị biến sinh lý khiến VL liên tưởng tới Nguyên Anh Tư Đồ Nam đang ngủ. Ra lệnh cho du hồn giết Lâm Đào. (@c0105)"
    },
    {
      chuong: 106,
      tieuDe: "Bản Mệnh Tinh Huyết",
      tomTat: "Lâm Đào không chạy — nhận ra thực trạng và chủ động khuất phục. Hắn tự tay nhỏ một giọt bản mệnh tinh huyết (giọt máu từ mi tâm, giao nộp mệnh sống vào tay người nhận). Dương Hùng và Chu Tử Hồng lần lượt làm theo. VL hấp thu cả ba giọt vào thần thức — ba ánh sáng mờ nhạt neo trong thức hải, đủ để kiểm soát sinh tử ba người. Ba thôn hồn giải thích hệ sinh thái khe nứt: du hồn là nô lệ/thức ăn; 'ma đầu' là du hồn sống trong không gian sinh linh. Chiến trường ngoại vực = vùng đệm giữa không gian sinh linh và không gian tịch diệt. Cảnh báo: VL cuối cùng buộc phải trở về tịch diệt. VL thử cho du hồn tấn công truyền tống trận để thăm dò cơ chế thoát ra. (@c0106)"
    },
    {
      chuong: 107,
      tieuDe: "Sợi Tơ Đen Pháp Tắc",
      tomTat: "VL phát hiện 'sợi tơ đen' — cơ chế pháp tắc thật sự tiêu diệt thần thức ở ranh giới truyền tống trận. Thử nghiệm bằng du hồn dị biến (có ý thức mờ) — chết ngay. VL đích thân thử tiếp xúc thần thức với sợi tơ đen: sức tàn phá kinh hoàng nhưng có thể chịu đựng. Kiểm tra ba túi trữ vật thu được: Mã Lương có ngọc phù ngoại vực (vật chứng thân phận), Hứa + Cát cộng hơn 2000 trung phẩm linh thạch (tích lũy gần 50 năm), pháp bảo các loại và tài liệu. VL thiết lập Qui Giáp Huyền Diệt trận — hai bộ, mỗi bộ khoảng 60-70 linh thạch, 49 ký hiệu/bộ; nhấn trận nhãn vào mi tâm để kích hoạt. (@c0107)"
    },
    {
      chuong: 108,
      tieuDe: "Thần Thức Cực Cảnh",
      tomTat: "VL một mình đối mặt cửa truyền tống trận. Khung thời gian quyết định: 3 giây. Giây 1: triển khai khoảng 1000 ký hiệu (21 bộ Qui Giáp Huyền Diệt trận). Giây 2: ném ra hàng trăm pháp bảo từ ba túi trữ vật. Giây 3: pháp tắc sợi tơ đen nghiền nát và tái tạo thần thức VL hàng vạn lần — ý Cực cảnh dung hợp vào thần thức, hình thành Thần Thức Cực Cảnh (cực thức). Một sợi chỉ thuần khiết cực thức hình thành, chặn đứng bàn tay đen khổng lồ ngay đúng khi 3 giây kết thúc. VL thoát ra. Hệ quả: linh lực suy yếu vĩnh viễn nhưng thần thức có thể tiêu diệt mọi sinh vật cùng cấp bất kể sơ/trung/hậu kỳ. Giới hạn tuyệt đối: Nguyên Anh hậu kỳ — pháp tắc sẽ hủy diệt nếu cố phá vỡ. (@c0108)"
    },
    {
      chuong: 109,
      tieuDe: "Hỏa Phần Quốc",
      tomTat: "VL được truyền tống về Hỏa Phần quốc — tam cấp tu chân quốc phía nam Chu Tước, cạnh Tu Ma Hải. Điểm đến là truyền tống trận của Chiến Thần Điện trên đỉnh núi lửa. VL gặp Hoắc Hồng Phi (trưởng lão Kết Đan sơ kỳ, sư phụ Chu Tử Hồng, hơn 200 tuổi, tu Thần Đạo Thuật, trông chỉ ngoài 40) và Từ Tư (hôn thê cũ của Mã Lương). Bốn tông phái tại Hỏa Phần quốc: Chiến Thần Điện (số 1, độc quyền Thần Đạo), Tà Ma Tông, Lạc Hà Môn, Thi Âm Tông — Chiến Thần Điện có 6 lão tổ Nguyên Anh kỳ. VL từ chối tái gia nhập Chiến Thần Điện, ném lại một túi vật phẩm, hóa cầu vồng bay đi. Hoắc Hồng Phi cảm nhận khí tức kỳ lạ từ VL, không dám truy đuổi. (@c0109)"
    },
    {
      chuong: 110,
      tieuDe: "Bế Quan Núi Lửa",
      tomTat: "Từ Tư nhớ lại quá khứ với Mã Lương: đính hôn từ thuở ấu thơ, cùng vào Chiến Thần Điện, nàng hứa sẽ làm lữ tu bạn lữ nếu hắn trở về. VL dựa vào ký ức Mã Lương tìm đến quần thể núi lửa nổi tiếng Hỏa Phần. Dừng tại làng lấy nước, tìm hang đá tự nhiên, dùng đá chặn cửa kết hợp trận pháp che giấu và bắt đầu bế quan. Bên trong thức hải: đại dương vàng che phủ sương tối, tiểu kiếm ba tấc màu lục (nhiều vết nứt) và thạch châu (hai phiến lá, vùng rõ ràng xung quanh) — cực thức di chuyển cả hai. Thạch châu dẫn vào Mộng Cảnh. Thăm Tư Đồ Nam: Nguyên Anh thu nhỏ còn 1/10, mờ tối; hai ánh sáng mờ nhạt là hồn phách cha mẹ VL. Khóc và quỳ lạy. Tỷ lệ thời gian: 1 năm thực tế = 7 năm Mộng Cảnh. Kết quả bế quan: 3 năm Mộng Cảnh → Ngưng Khí tầng 15; 2 năm → Trúc Cơ sơ kỳ; 1 năm → Trúc Cơ trung kỳ. Thân xác Mã Lương hoàn toàn thuần hóa; băng ý ngày càng mạnh. (@c0110)"
    },
    {
      chuong: 111,
      tieuDe: "Ra Khỏi Mộng Cảnh",
      tomTat: "VL xuất khỏi Mộng Cảnh, rời hang bế quan sau khi khôi phục Trúc Cơ trung kỳ. Hướng tới Phần Kim sơn mạch — địa điểm trong ký ức Mã Lương có Phần Kim Quả, nguyên liệu luyện Dung Linh Đan. Ba tay sai Thi Âm Tông (điều khiển thi khôi hành động như người bình thường) đang theo dõi khu vực. VL thu hoạch Phần Kim Quả. Phát hiện ba người này là tay sai Thi Âm Tông: dùng tia thiểm điện từ mắt — công năng của Thần Thức Cực Cảnh — tiêu diệt cả ba điều khiển viên ngay tại chỗ. Sau đó tu sĩ già Hứa Lập Quốc (Thiên Cương Tông, tứ cấp tu chân quốc) lộ mặt: vốn là Nguyên Anh kỳ nhưng nay mượn thân Trúc Cơ của Thi Âm Tông để hồi phục; nằm vùng khu Phần Kim sơn mạch. Lý do Thi Âm Tông có mặt tại Hỏa Phần quốc: tông này chuyên buôn bán thân thể cho tu sĩ các cấp quốc muốn đổi xác, giá tùy cảnh giới của thân mới. (@c0111)"
    },
    {
      chuong: 112,
      tieuDe: "Ma Đầu Tự Chế",
      tomTat: "VL thiêu hủy ba xác Thi Âm Tông, bắt sống Hứa Lập Quốc. Hủy ý thức Hứa Lập Quốc rồi ép phần còn lại của nguyên thần hắn liên tục tiêu thụ hồn dã thú — sau nhiều lần hào quang ám hồng hình thành, tức là Ma Đầu ra đời. Cất Ma Đầu vào Thiết Phiến (miếng sắt trong phi kiếm). Nghịch Thiên Châu hấp thu Phần Kim Quả: lá 3 hình thành rõ; sau khi VL thu hoạch hết toàn bộ Phần Kim Quả trong vùng, lá thứ 5 xuất hiện — gồm Thủy+Hỏa mãn, Mộc nửa, thiếu Kim+Thổ. VL lên đường đến Chiến Thần Điện theo hẹn. Gặp ba đệ tử (Chu Tử Hồng, Lâm Đào, Dương Hùng). Phát hiện Dương Hùng đang ôm ngọc phù âm mưu báo cáo cho Chiến Thần Điện về VL. VL thu hồi bản mệnh tinh huyết của Dương Hùng — một hành động trừng phạt rõ ràng. (@c0112)"
    },
    {
      chuong: 113,
      tieuDe: "Khê Cốc Phường Thị",
      tomTat: "VL thả Chu Tử Hồng và Lâm Đào; gửi lại bản mệnh tinh huyết của Chu Tử Hồng cho sư tổ bào y lam của nàng (Nguyên Anh, chưa nêu tên). Trên đường đến Chiến Thần Điện, VL lấy danh nghĩa 'Mã Lương' gặp Lý Kỳ Khánh (tu sĩ nữ Lạc Hà Môn, Trúc Cơ hậu kỳ giả đan) cùng tỳ nữ Uyển Nhi. Tôn Hữu Tài (Tà Ma Tông, Trúc Cơ hậu kỳ) bám theo nhóm — vờ thân thiện. Lý Kỳ Khánh mời VL tham dự Khê Cốc phường thị đại hội — một hội chợ trao đổi tu chân lớn diễn ra tại Khê Cốc phường thị. (@c0113)"
    },
    {
      chuong: 114,
      tieuDe: "Tứ Sư Huynh Hắc Y",
      tomTat: "Tôn Hữu Tài dẫn VL vào bẫy: đưa vào khu vực biệt lập, Tứ sư huynh (hắc y, Trúc Cơ Đại viên mãn giả đan, đồng môn Tà Ma Tông Tôn Hữu Tài) lập tức ra tay dùng Quỷ Hỏa Khô Lâu tấn công — âm mưu bắt VL làm khôi lỗi. VL chỉ thốt một chữ 'Diệt' bằng Thần Thức Cực Cảnh: Tứ sư huynh chết ngay tại chỗ. VL thu phi kiếm đen của hắn. Tôn Hữu Tài dùng độn thổ tẩu thoát. VL truy đuổi. (@c0114)"
    },
    {
      chuong: 115,
      tieuDe: "Bầy Hỏa Thú",
      tomTat: "Tôn Hữu Tài chạy vào miệng núi lửa, tự thiêu trong dung nham để trốn thoát; VL kịp thu túi trữ vật trước khi hắn chết. Bầy hỏa thú (linh thú mắt tam giác, có sừng, lửa bao phủ thân, sống trong dung nham) nổi lên: dùng địa cầu bao vây VL rồi kéo VL vào hang sâu. Sào huyệt: 16 hỏa thú Nguyên Anh cấp canh giữ cùng hỏa đoàn (chủ tể). Nghịch Thiên Châu phản ứng dữ dội trong thức hải, liên tục tìm cách phá ra ngoài. (@c0115)"
    },
    {
      chuong: 116,
      tieuDe: "Hỏa Thuộc Tính Đại Viên Mãn",
      tomTat: "Nghịch Thiên Châu đột phá ra khỏi thức hải — nuốt chửng hỏa đoàn (Hỏa Linh Thú tổ). Bề ngoài Nghịch Thiên Châu thay đổi từ hoa văn lá sang hoa văn ngọn lửa; châu hấp thụ 10 cụm hỏa diễm từ hang → HỎA THUỘC TÍNH ĐẠI VIÊN MÃN. Hỏa Linh Thú lore: loài linh thú tu luyện qua 9 lần lột xác, hiện đã 5/9, đang trong giai đoạn 500 năm yếu nhất; sống bằng cách ăn thịt tu sĩ. VL thoát ra qua miệng núi lửa. Bốn lão Nguyên Anh của 4 tông phái hội tụ vì khủng hoảng núi lửa. VL thoát lên mặt đất; trên đường thấy xác chết nằm la liệt trên đường — Ma Đầu đã gây thảm sát hàng chục người. (@c0116)"
    },
    {
      chuong: 117,
      tieuDe: "Thành Ma Thì Sao",
      tomTat: "VL thu phục Ma Đầu — nay đã đạt Trúc Cơ hậu kỳ đỉnh giả đan. Đây là bước ngoặt tư tưởng then chốt: VL tự hỏi 'thành ma thì sao' rồi chấp nhận con đường ma đạo này. Từ túi trữ vật Tôn Hữu Tài, VL thu ba ngọc giản: (1) Đại Tự Tại Tu La thuật — công pháp ma đạo 6 tầng của Tà Ma Tông, luyện Tu La chi hồn thay thế Nguyên Anh; (2) Ngụy Thổ Độn thuật — biến thể Thổ Độn, tức thời dịch chuyển trong phạm vi 3 trượng; (3) bản ghi chép 30 năm tu luyện của Tôn Hữu Tài. Nghịch Thiên Châu hiện 5 lá: Thủy+Hỏa mãn, Mộc nửa, thiếu Kim+Thổ. VL nghiên cứu Chiến Thần Điện luyện khí thuật (quy trình Điều-Dung-Hợp, cần Phiên Ưng lô đúc từ sọ linh thú) nhưng thất bại chế tạo Phiên Ưng lô. Tế luyện phi kiếm đen mới bằng cách để tiểu kiếm 'ký thân' lên phi kiếm đen (phá Thiết Phiến → thiết thủy → hình thành phi kiếm đen mới). Ở góc khác: 6 lão Nguyên Anh từ 4 tông phái bàn bạc đối phó hỏa linh thú; mỹ phụ (chính là Phượng Loan) tiết lộ điểm yếu hỏa linh thú = hàn thuộc tính. Hỏa linh thú lột xác xong — toàn thể hơn 100.000 hỏa thú xuất quân thiên di sang Tuyên Vũ quốc. (@c0117)"
    },
    {
      chuong: 118,
      tieuDe: "Đại Quân Hỏa Thú",
      tomTat: "VL dùng Thổ Độn thuật hướng về Chiến Thần Điện. 16 hỏa thú khổng lồ sử dụng liên kết thần thức tập thể (hỏa hoàn tổ hợp 16 thần thức) truy tìm VL. VL phát hiện điểm chết của hỏa thú = mi tâm: chỉ cần một cú đánh trúng mi tâm là hỏa thú nổ tan. Giết 2 con nhưng phi kiếm đen biến dạng vì kiếm linh mới chỉ 'ký thân' chưa tế luyện thật sự. Bắt gặp đại quân hơn 10.000 tu sĩ từ 4 tông phái + Tuyên Vũ quốc tiến về phía hỏa thú, dẫn đầu là 10 lão Nguyên Anh. Diệu Linh (Nguyên Anh kỳ) chặn VL hỏi thăm. Thanh Huyền (Lạc Hà Môn, Thám báo doanh) tình nguyện dẫn đường cho VL vào Chiến Thần Điện. (@c0118)"
    },
    {
      chuong: 119,
      tieuDe: "Phượng Loan Lão Tổ",
      tomTat: "Từ Tư xuất hiện — dùng hắc châm tập kích VL. VL chộp lấy hắc châm, xóa ký ấn tinh thần của Từ Tư (nàng ộc máu), rồi bí mật đặt vào đó một ký ấn trì hoãn — gây chết sau 1 tháng. Dương Hùng xác nhận danh tính VL, dẫn VL đến gặp Phượng Loan lão tổ. Phượng Loan = bào y lam Nguyên Anh sơ kỳ từ chương 113 — sư tổ của Chu Tử Hồng. Lâm Đào bị bắt vì đã sao chép địa đồ bí mật. 16 hỏa thú khổng lồ đồng loạt tự hi sinh — toàn bộ hỏa linh thú trên chiến trường lột xác thành thân hình >10 trượng. Chu Cẩn (Nguyên Anh sơ kỳ) xuất hiện định giết VL nhưng bị Phượng Loan chặn bằng Ngũ thải phượng xa. Phượng Loan thu VL làm ký danh đệ tử — một mối quan hệ bảo hộ chính thức. Dương Sâm (trung niên văn sĩ, Nguyên Anh trung kỳ, đạo lữ song tu của Phượng Loan) xuất hiện, cúi chào VL và tặng một ngọc phù bảo mệnh cấp Nguyên Anh. (@c0119)"
    },
    {
      chuong: 120,
      tieuDe: "Tỏa Quốc Đại Trận",
      tomTat: "VL nhận ngọc phù bảo mệnh từ Dương Sâm. Toàn bộ hỏa linh thú sau khi lột xác chỉ nhắm riêng VL — không tấn công ai khác. 19 lão tổ Nguyên Anh từ 4 tông phái + gia tộc kích hoạt Tỏa Quốc Đại Trận: 4 tông thả hoa sen ở 4 phương + các lão Nguyên Anh đưa nguyên anh vào vụ hoàn → lồng đỏ khổng lồ phong tỏa toàn bộ Hỏa Phần quốc trong 3 tháng (phàm nhân qua tự do; tu sĩ/linh thể bị nhốt bên trong). Thân thể tán tu Nguyên Anh được trao cho Lạc Hà Môn quản lý. Đại quân 10.000+ tu sĩ vượt vào Tuyên Vũ quốc tấn công — Dương Sâm đích thân giết lão bà Nguyên Anh sơ kỳ của Tuyên Vũ. Tuyên bố thành lập Hỏa Phần Minh — liên minh 4 tông (Chiến Thần Điện + Tà Ma Tông + Lạc Hà Môn + Thi Âm Tông). Thưởng chiến: giết 100 Ngưng Khí/10 Trúc Cơ = 10 trung phẩm linh thạch; giết 20 Trúc Cơ/1 Kết Đan = 10 bình linh dược. Bổ Anh Đan phát cho tán tu Nguyên Anh đã vào phong ấn. (@c0120)"
    },
    {
      chuong: 121,
      tieuDe: "Thiên Ly Đan",
      tomTat: "Một lão giả Nguyên Anh kỳ Lạc Hà Môn công bố thể lệ chiến tranh: mỗi tháng ai giết nhiều nhất được thưởng một viên Thiên Ly đan — trân phẩm linh đan cả Hỏa Phần quốc còn không quá ba mươi viên, tăng tỷ lệ kết đan. Khoảng năm nghìn tu sĩ chia đội ngũ; Vương Lâm (danh nghĩa Trúc Cơ trung kỳ Chiến Thần Điện) thuộc đại đội mười, tiểu đội tám do Trương Tự Lực (Nguyên Anh kỳ, Tà Ma Tông) dẫn đầu. Trước khi xuất chinh, Phượng Loan gọi VL tới, dò hỏi vì sao tu vi chỉ thể hiện Trúc Cơ trung kỳ, rồi trao ngọc giản bản đồ Hỏa Phần quốc (ba phần) kèm giao kèo: giết 50 Trúc Cơ → thêm một phần, giết 150 → phần cuối. VL đổi ý tham chiến vì bản đồ và nhất là Thiên Ly đan (hắn đã ngưng được ba Hàn Đan, chỉ chờ kết đan). Vào trận, VL dùng Cực cảnh thần thức diệt thần thức rồi phi kiếm xuyên ngực giết bảy Trúc Cơ Tuyên Vũ quốc trong chớp mắt, lại hạ năm kẻ chạy trốn — tổng mười hai người; khiến Trương Tự Lực kinh nghi. Sau đó VL dùng Thổ Độn thuật rời đi, xác định muốn đoạt Thiên Ly đan thì phải hành động một mình. (@c0121)"
    },
    {
      chuong: 122,
      tieuDe: "Giả Đan Cảnh Giới",
      tomTat: "VL ẩn dưới lòng đất, dùng Cực cảnh thần thức lén giết hàng loạt Trúc Cơ kỳ Tuyên Vũ quốc giữa hỗn chiến, thu túi trữ vật. Hắn lập Phệ Huyết Thiên Ma trận từ mười thi thể, dụ một Kết Đan kỳ Tuyên Vũ quốc vào trận: dùng ma đầu trong phi kiếm cắn nuốt thần thức đối phương rồi đoạt Kim Đan. VL nuốt Kim Đan sơ kỳ, vào không gian Nghịch Thiên Châu nhờ Tư Đồ Nam hỗ trợ tiêu hóa — đột phá từ Trúc Cơ trung kỳ lên Trúc Cơ hậu kỳ đại viên mãn. Về Thiên Điện trình chiến công (61 Trúc Cơ + 1 Kết Đan), VL khai báo tu vi tăng nhanh là nhờ Thông Phệ đại pháp của Tà Ma Tông nên đạt 'Giả Đan cảnh giới' — qua mặt Chu Cẩn. Phượng Loan trao phần hai bản đồ; VL biết Tu Ma Hải nằm sát biên giới, muốn về Triệu quốc phải xuyên qua. Cuối chương có tin báo: Tỏa Quốc Đại Trận đã bị phá, hỏa thú sắp tràn tới. (@c0122)"
    },
    {
      chuong: 123,
      tieuDe: "Tu Ma Hải",
      tomTat: "Biết hỏa thú nhắm riêng mình, VL nhờ Dương Hùng gọi Chu Tử Hồng tới (đổi việc trả lại bản mệnh tinh huyết Dương Hùng); Chu Tử Hồng đổi việc lấy bản đồ giúp VL lấy điều kiện hắn giết Từ Tư và Chu An. VL nhận lời, lưu một tia thần thức trên Chu An (sẽ phát tác sau nửa tháng), nhận trọn bản đồ. Bản đồ cho biết Hỏa Phần quốc ở Chu Vũ đại lục, ngăn cách Triệu quốc bởi Tu Ma Hải — biển sương mù nguy hiểm, nơi tụ tập người tu ma và tội phạm bị truy sát. Trên đường, VL cứu Lý Mộ Uyển (đệ tử Lạc Hà Môn, giỏi luyện đan, đang bị một trưởng lão Song Tu Môn truy sát để cướp Thiên Ly đan), vì nàng có một viên Thiên Ly đan bán thành phẩm và biết luyện đan. Hắn dùng Thổ Độn thuật mang nàng băng qua Hỏa Phần quốc suốt ba ngày, đàn hỏa thú đuổi sát, rồi lao vào Tu Ma Hải — nơi hỏa thú không dám vào vì khí âm hàn. (@c0123)"
    },
    {
      chuong: 124,
      tieuDe: "Đấu Tà Phái",
      tomTat: "Lặn sâu vào Tu Ma Hải, VL dùng Tử Chú thuật (thần thông ma đạo thượng cổ — niệm một chữ 'Tử' là đối phương tử vong) giết ba tu sĩ Đấu Tà phái chặn đường. Lý Mộ Uyển chấn động, nhận ra VL chính là người khiến hơn nửa Trúc Cơ kỳ Tuyên Vũ quốc tử trận; mọi ý phản kháng tan biến. VL tìm núi lập động phủ; Lý Mộ Uyển bố trí Cửu Ly Thi Cốt trận (do thiếu xương chỉ đạt ba thành) và giao bản mệnh tinh huyết để được tin dùng. Nàng nhận thấy chiến lợi phẩm dược thảo của VL đủ luyện nhiều đan, đặc biệt có Ma Huyết đằng để luyện Thiên Ly đan, nhưng cần Thiên Địa dong lô. VL ra ngoài tìm xương linh thú (gia cố trận + chế Phiên Ưng lô), gặp Tang Mộc Nhai — đệ tử Đấu Tà phái vừa hạ độc giết sư huynh để đoạt cơ; Tang Mộc Nhai khiếp sợ trước VL, quy phục ném thú cốt. (@c0124)"
    },
    {
      chuong: 125,
      tieuDe: "Một Thân Bảo Vật",
      tomTat: "Sau khi phong ấn linh hồn Tang Mộc Nhai vào Diện Hồn kỳ và khai thác tin tức, VL biết quanh đó có Thi Cốc — một trong tam đại hiểm địa Tu Ma Hải, nhiều xương ma thú. Vào Thi Cốc, VL dùng pháp thuật quang cầu kiểm tra phẩm chất âm hàn khí (bốn màu hồng/trắng/lam/tím theo tứ đại cực âm); càng vào sâu phẩm chất càng cao, tới sơn cốc mười bốn đạt thập nhất giai. Một con giao long (thực lực hơn Nguyên Anh kỳ vài phần) trọng thương lao vào sơn cốc mười bốn rồi chết; VL liều kéo được thi thể giao long mới chết ra ngoài, giết các tu sĩ tham lam dưới Kết Đan kỳ bằng Cực cảnh thần thức, rồi khiêng thi thể về động phủ — một thân giao long là cả kho bảo vật. (@c0125)"
    },
    {
      chuong: 126,
      tieuDe: "Ba Viên Hàn Đan",
      tomTat: "VL mang xác giao long về; Lý Mộ Uyển dùng giao long cốt làm mắt trận, nâng Cửu Ly Thi Cốt trận thành Cửu Ly Giao Long trận (vây khốn Kết Đan kỳ mấy tháng, Nguyên Anh kỳ vài ngày), đồng thời thu được giao đan, da giao long (chế hai bộ nội giáp), giao cân và cốt tủy. VL bế quan tu Hoàng Tuyền Thăng Khiếu Quyết, lần lượt ngưng tụ ba viên hàn đan (nhanh hơn dự kiến nhờ vào không gian Nghịch Thiên Châu), đồng thời ngầm nuôi dưỡng ma đầu (gài một tia thần thức khống chế trong nó). Hắn còn thiếu một dong lô tốt để luyện Thiên Ly đan thành phẩm — nghe Tang Mộc Nhai nói Luyện Khí tông ở Nam Đẩu thành bán dong lô đắt đỏ. Cuối chương, ba viên hàn đan đã đủ, VL bắt đầu thử dung hợp tam đan để kết đan. (@c0126)"
    },
    {
      chuong: 127,
      tieuDe: "Kết Đan",
      tomTat: "Bước cuối Hoàng Tuyền Thăng Khiếu Quyết — tam đan hợp nhất — quá khó, thân thể VL không chịu nổi hàn khí hủy diệt khi hai hàn đan va chạm. Nhờ lời Lý Mộ Uyển ('giao sinh thân độc, giao tử thân bảo'), VL ngộ ra cách: biến toàn thân thành cực âm khí. Hắn tới đáy sơn cốc mười bốn, trải ba năm tu thành 'hoàng tuyền chi cảnh' (toàn thân hóa lam tinh, hơi thở sinh mạng biến mất), chìm xuống Cốt Hải sâu gần tám nghìn trượng; nhờ đó dung hợp ba hàn đan thành đan phôi dễ dàng. Hoàng Tuyền Thăng Khiếu Quyết đại thành — luyện ra hoàng tuyền băng diễm (ngọn lửa lam tỏa hàn khí). Theo luyện khí thuật Chiến Thần Điện, VL đúc Phiên Ưng Lô cửu phẩm từ sọ một hoang thú hiếm và luyện Thủy Tinh phi kiếm mới cho kiếm linh, chuyển ma đầu sang giao long cân. Tới Nam Đẩu thành (thành lớn rìa Tu Ma Hải do ba phái quản lý), VL đổi giao long bì giáp lấy Bách Thú Linh Lô ngũ phẩm; bị Đấu Tà phái phát hiện, mười Kết Đan kỳ (dẫn đầu Đại trưởng lão Tiễn Khôn) truy sát. VL rút về động phủ; trong lúc bị công trận, Lý Mộ Uyển kịp luyện thành Thiên Ly đan — VL chính thức KẾT ĐAN THÀNH CÔNG, tự xưng 'đệ nhất nhân dưới Nguyên Anh kỳ', chém chết tu sĩ đầu to định bắt Lý Mộ Uyển; cả đám Kết Đan kỳ hoảng sợ bỏ chạy, Tiễn Khôn chạy đầu tiên. (@c0127)"
    },
    {
      chuong: 128,
      tieuDe: "Sát",
      tomTat: "VL mang theo Lý Mộ Uyển truy sát đám Đấu Tà phái bỏ chạy, dùng giao long cân cuốn xác và một đạo tinh quang phóng xa trăm dặm. Hắn lần lượt giết Côn Tang, Trần Hải và tổng cộng chín trưởng lão Tổng bộ Đấu Tà phái chỉ trong một nén nhang, dùng long cân kéo theo chín thi thể. Chỉ còn Đại trưởng lão Tiễn Khôn (Kết Đan trung kỳ) chạy về phân bộ Ngũ Đinh phong cầu cứu hai trưởng lão Mộc Nam, Mộc Bắc — nhưng hai người nhận ra chín thi thể là chín trưởng lão Tổng bộ nên khúm núm không dám cản. Đường cùng, Tiễn Khôn lấy ra Vạn Ma Bách Nhật Tru Sát Lệnh — lệnh bài thượng cổ nổi danh Tu Ma Hải — dọa rằng giết hắn sẽ bị truy nã khắp vùng, rồi cầu hòa, hứa dẫn tiến VL làm Đại trưởng lão Đấu Tà phái. (@c0128)"
    },
    {
      chuong: 129,
      tieuDe: "Vạn Ma Bách Nhật Tru Sát Lệnh",
      tomTat: "Lý Mộ Uyển xác nhận cơ chế lệnh bài: ai giết được người bị treo lệnh trong trăm ngày sẽ đoạt toàn bộ tu vi kẻ đó. VL không nao núng, niệm 'Tử' giết Tiễn Khôn; lệnh bài vỡ, kết thành một chữ 'Diệt'/'Tru' đỏ tươi treo trên đầu VL. Trên đường ép Mộc Nam, Mộc Bắc dẫn tới Tổng bộ Đấu Tà phái, tin 'Vạn Ma Bách Nhật Tru Sát Lệnh tái hiện' lan khắp Tu Ma Hải. Đan phôi trong người VL chuyển hóa thành kim đan to bằng nắm tay — xác nhận Kết Đan sơ kỳ (tu vi hơn Trúc Cơ trăm lần). Hắc y Ma quân Thượng Quan Mặc (Kết Đan trung kỳ đỉnh) xuất hiện định giết VL đoạt lệnh, nhưng bị VL áp đảo: ngọc phù di vật sư phụ hắn (chống được một kích Nguyên Anh kỳ) tự vỡ trước Tử Chú thuật. Thượng Quan Mặc quỳ xin tha, xin bái sư bất thành, cuối chương đành dâng bản mệnh tinh huyết để liều mạng. (@c0129)"
    },
    {
      chuong: 130,
      tieuDe: "Sát Phạt Huyết Lộ",
      tomTat: "VL nuốt bản mệnh tinh huyết Thượng Quan Mặc, tạo ràng buộc sống-chết hai chiều (niệm chú là hắn chết; VL chết thì hắn cũng chết). Rút kinh nghiệm từ vụ giết Đằng Lệ, VL hạ quyết tâm tận diệt Đấu Tà phái để trừ hậu họa, ép Mộc Nam, Mộc Bắc tiếp tục dẫn đường, Thượng Quan Mặc theo hầu. Tin Tru Sát Lệnh lan quá nhanh, hàng trăm rồi hàng nghìn tu sĩ kéo tới vây xem chữ 'Tru' với ánh mắt thèm muốn. VL ra cảnh cáo, rồi lần đầu tàn sát phạm vi lớn: Cực cảnh thần thức cùng phi kiếm tinh quang quét sạch, chuyên nhắm Kết Đan kỳ; long cân sau lưng trói hơn nghìn thi thể. Cuối chương, cách đó nghìn dặm, bảy tám ma tu bộ mặt già trầm ngâm theo dõi VL với vẻ e ngại ngày càng tăng. (@c0130)"
    },
    {
      chuong: 131,
      tieuDe: "Sát Danh",
      tomTat: "VL dùng phi kiếm thuấn di, Tử Chú thuật và Long Cân tàn sát hơn một nghìn tu sĩ Kết Đan kỳ quy tụ xung quanh Nam Đẩu thành. Thuộc hạ Thượng Quan Mặc giết Âu Dương lão nhân; Mộc Nam và Mộc Bắc diệt các đối thủ còn lại. Sau trận thảm sát này chữ 'Tru' đỏ máu trên đỉnh đầu VL được cả Tu Ma Hải biết đến — chính thức dựng sát danh vang dội. VL ra lệnh tiếp tục tiến đánh Đấu Tà phái. (@c0131)"
    },
    {
      chuong: 132,
      tieuDe: "Đấu Long Đại Trận",
      tomTat: "VL và thuộc hạ tiến tới đại bản doanh Đấu Tà phái. Chưởng môn Giải Đông Lai triển khai Đấu Long Đại Trận — hội tụ thần thức toàn bộ 13.562 đệ tử, tạm nâng tu vi của chưởng môn gần sơ Nguyên Anh kỳ — làm điều kiện phán xét: nếu VL phá được trận thì toàn phái quy phục. VL lùi ra xa dò xét, phát hiện yếu điểm: ở khoảng cách trên 90 trượng tính từ đầu rồng, nội công đối phương giảm đáng kể. (@c0132)"
    },
    {
      chuong: 133,
      tieuDe: "Giải Đông Lai",
      tomTat: "Giải Đông Lai giả thua, dâng chưởng giáo lệnh bài để dụ VL lại gần — bất ngờ tung kiếm hoàn và kiếm đan đánh sát tử. VL phá kiếm hoàn; kiếm đan phản bật, Giải Đông Lai hóa tro chết. Đấu Tà phái đầu hàng hoàn toàn. VL giao chức chưởng giáo cho Thượng Quan Mặc rồi vào mật thất bế quan. Lần đầu vào Mộng Cảnh không gian sau khi kết đan — tái ngộ Tư Đồ Nam, VL lập lời hứa sẽ đưa lão ra ngoài khi đạt Anh Biến kỳ. (@c0133)"
    },
    {
      chuong: 134,
      tieuDe: "Họa Trục",
      tomTat: "Ma đầu trong Long Cân lộ hai bí mật lớn: đã bí mật đột phá lên Kết Đan kỳ và đã khôi phục hoàn toàn trí nhớ — che giấu cả hai từ trước đến nay. Bị VL dùng năng lực thôn hồn áp chế, buộc phải nhả hồn phách và khai báo. VL còn kiểm kê chiến lợi phẩm và phát hiện Họa trục — cuộn tranh cổ đoạt được từ một tu sĩ Kết Đan kỳ (đã chết), bên trong phong ấn một linh thú tà dị với đôi mắt tam giác; Cực cảnh thần thức không khống chế được vì cuộn tranh chỉ có công năng phong ấn. (@c0134)"
    },
    {
      chuong: 135,
      tieuDe: "Lão Nhân Thanh Bào",
      tomTat: "VL ép ma đầu nhả 43 linh hồn tích lũy; dùng Cực cảnh thần thức nuốt để gia cường thần thức rõ rệt. Quyết định đưa Lý Mộ Uyển rời Tu Ma Hải theo lời hứa — nàng trong bốn năm qua đã khắc 18.974 ngọc giản luyện đan. Cùng lúc, lão nhân thanh bào (mũi ưng, bào xanh thêu bảy đóa mai vàng) xuất hiện tại trà lâu Nam Đẩu thành, tra hỏi về VL và Tử Chú thuật — mối đe dọa mới bắt đầu hình thành. (@c0135)"
    },
    {
      chuong: 136,
      tieuDe: "Bản Mệnh Tinh Huyết",
      tomTat: "Lão nhân thanh bào (Nguyên Anh kỳ) chính thức truy sát VL — bức một giọt bản mệnh tinh huyết từ mi tâm Thượng Quan Mặc để lần theo dấu. VL mang Lý Mộ Uyển bỏ trốn trong Tu Ma Hải: lặn biển trốn, vọt lên không thoát thân. Lão giả đuổi sát nhưng VL vẫn thoát được tạm thời. (@c0136)"
    },
    {
      chuong: 137,
      tieuDe: "Lão Nhân Mặc Thanh Bào",
      tomTat: "VL đưa Lý Mộ Uyển tới gần Hỏa Phần Minh rồi chia tay sau bốn năm đồng hành: trả lại bản mệnh tinh huyết (kèm thần thức hộ thể), tặng Bách Thú Linh Lô; nhận đan dược, ngọc giản đan phương và ngọc phù Đấu Long trận cải biến thiên về phòng ngự. Hai người tiết lộ chưa từng biết tên thật của nhau. VL vỗ trán chui vào Mộng Cảnh né hoàn toàn Vạn Ma Bách Nhật Tru Sát lệnh. Lão nhân thanh bào kẹp được phi kiếm VL, bị một đạo công kích sượt mặt; quét tay đẩy bay Phượng Loan – Dương Sâm – Trâu Bân ngàn trượng. Trâu Bân nhận ra bảy đóa mai vàng = Thất Mai chi địa nội hải — thế lực bảy thành chủ nghi Hóa Thần kỳ. (@c0137)"
    },
    {
      chuong: 138,
      tieuDe: "Tu Đan",
      tomTat: "Trong Mộng Cảnh bế quan hơn trăm ngày, VL ngưng tụ được một viên tu đan từ cơ chế Vạn Ma Tru Sát lệnh — thu vào túi trữ vật để dành cho Kết Anh về sau. Rời Mộng Cảnh, lập tức bị Bát Cực Ma Quân (lộ danh xưng) truy sát tại Hỏa Phần Minh: lão phá hộ sơn đại trận bằng một ấn tay, trấn áp Nguyên Anh kỳ Tà Ma tông bằng một tiếng, phân bốn thân lùng sục toàn Tuyên Vũ quốc — không tìm ra VL. VL nhắm đoạt Thần Đạo thuật nguyên thủy của Chiến Thần Điện để tăng tỷ lệ Kết Anh. (@c0138)"
    },
    {
      chuong: 139,
      tieuDe: "Bát Trảo Thần Thức",
      tomTat: "VL buộc phải rời Mộng Cảnh sau khoảng hai năm, lập tức bị Bát Cực Ma Quân vây bắt tại Tuyên Vũ quốc (lão truy tìm suốt hai năm bằng bốn thân). VL lần đầu dùng Tử Chú thuật phản kích Nguyên Anh kỳ — cơ chế Bát Trảo Thần Thức trong ý thức hải lão hấp thu tia chớp nhưng vẫn gây run rẩy toàn thân khiến lão khựng người sát na. Ngọc phù Dương Sâm vỡ khi chặn trùy tử bảy màu; VL bị thương, uống đan dược chữa thương. Phi kiếm VL chém đứt Thanh Ban Mãng nhưng không phá nổi hộ thân của lão. Lão giả đề nghị đàm phán. (@c0139)"
    },
    {
      chuong: 140,
      tieuDe: "Đạt Thành Hiệp Nghị",
      tomTat: "VL và Bát Cực Ma Quân đạt hiệp nghị: VL đồng ý dùng Tử Chú thuật hộ tống lão vào địa phương bí ẩn sắp mở (chưa đầy nửa năm, cực nguy hiểm — Nguyên Anh sơ kỳ vào là cửu tử nhất sinh, bên trong có Anh Biến đan); đổi lấy một viên Lập Anh đan và bảo vật. Lão đặt phù văn phòng đào tẩu vào người VL (tự giải khi vào nơi đó). Mượn khí thế lão giả, VL vào xem Thần Đạo thuật tại thạch phủ Chiến Thần Điện — lão giả mặt đỏ (Trâu Bân) ra điều kiện VL phát thề không lôi Chiến Thần Điện vào rắc rối của mình. (@c0140)"
    }
  ]
};

// QUYỂN thật (ranh giới theo nguyên tác; tham chiếu web cũ). Tóm tắt theo tiến độ đọc thật.
window.LIB_DATA["tien-nghich"].volumes = {
  updatedAt: "2026-06-10",
  volumes: [
    { value: "q01", label: "Quyển 1", range: "Ch.1 – 100", title: "Phàm nhân khởi đầu",
      summary: "Khởi đầu hành trình của Vương Lâm — thiếu niên thôn quê tư chất kém, nhờ ý chí phi thường và cơ duyên nhặt được Thạch Châu mà bước vào con đường tu tiên. Bị tiên môn từ chối ba lần, chịu cả họ sỉ nhục, bỏ nhà băng thâm sơn lần thứ hai — rơi vào huyệt động phong nhãn, nhặt được Thạch Châu bí ẩn. Được phá lệ thu làm ký danh đệ tử, phải gánh mười vại nước nặng nhọc. Bí mật dùng Thạch Châu cường hóa thể chất, bị trưởng lão họ Tôn điều tra, rồi được thu làm đệ tử nội môn (danh nghĩa). Thạch Châu dần bộc lộ bản chất: hút nước mạnh bạo, nước ngâm châu biến thành linh khí, số đám mây tăng 5→9. Vương Lâm lần đầu bước vào tu tiên, đột phá Ngưng Khí tầng 1 @c0025 và tầng 2 @c0030, tầng 3 @c0036 nhờ Mộng Cảnh Thạch Châu. Tham gia tỷ thí với Huyền Đạo Tông (Ch.47–49): thắng liên tiếp Chu Bằng (3 lần) + Dương Nghị; lấy dịch độc Thiên Túc Ngô Công về trị bệnh cha. Cứu Vương Hạo thoát lò luyện đan; Lữ Vân Kiệt bị phạt diện bích 20 năm (Ch.50). Thực lực thật = Linh Động Kỳ viên mãn (@c0046–@c0048) — vẫn bí mật che giấu. (Wiki nghiên cứu tới Ch.100 — hết Quyển 1.)",
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
        "Linh lực dị biến lam đen; chế tạo mê lạp — 3 hạt (2 kép, 1 đơn), 3 hạt tự bạo ~1 dặm (Ch.90)",
        "VL đoạt lệnh bài cửa Quyết Minh Cốc bằng Cực cảnh linh lực; thu đủ 5 lệnh bài (Ch.91–93)",
        "Tế luyện lại phi kiếm cổ quái bằng huyết luyện — phi kiếm thu nhỏ nửa, vân huyết sắc, chuôi 1/15 (Ch.94)",
        "VL đột phá Trúc Cơ trung kỳ trong bế quan tại Quyết Minh Cốc (Ch.96)",
        "Thông đạo Vực Ngoại mở — 8 đại tông phái chính-ma lưỡng đạo hội tụ; Lâm Dịch (Thông Thiên tháp) xuất hiện (Ch.96–97)",
        "VL dùng Thiên Huyễn Biến giả tu vi Nguyên Anh trung kỳ, công khai khiêu chiến Đằng Hóa Nguyên trước toàn Triệu quốc (Ch.98)",
        "VL tự nổ thân thể, phóng hồn phách phụ mẫu cùng bản thân vào Vực Ngoại — kết Quyển 1 (Ch.100)"
      ]
    },
    { value: "q02", label: "Quyển 2", range: "Ch.101 – 140 (nghiên cứu hoàn chỉnh)", title: "Tái sinh nơi Vực Ngoại",
      summary: "Vương Lâm tái sinh tại Vực Ngoại chiến trường sau khi tự nổ thân vượt qua thông đạo — linh hồn thoát xác, trôi dạt trong khe nứt không gian dưới dạng linh hồn chi hỏa. Nghịch Thiên Châu dung hợp vĩnh viễn vào hồn phách. VL ký thác vào xác người khổng lồ Cự Ma tộc rồi tiêu diệt sinh vật khói để rèn thần thức. Phát hiện Tư Đồ Nam chưa chết — đang ngủ sâu, giữ hồn phách cha mẹ VL trong Nguyên Anh. VL sau đó đoạt xá thân xác Mã Lương — tu sĩ vừa tử chiến của Chiến Thần Điện từ Hỏa Phần quốc. Tại chiến trường, VL khống chế du hồn bằng thần thức áp đảo, thu nô bộc (Lâm Đào, Dương Hùng cùng một người nữa), đoạt túi trữ vật Hứa Hạo và Cát Dương. Vượt qua sợi tơ đen pháp tắc để trở về thế giới tu chân — thần thức bị nghiền nát và tái tạo hàng vạn lần trong 3 giây, khiến ý Cực cảnh dung hợp vào thần thức, hình thành Thần Thức Cực Cảnh. Trở về Hỏa Phần quốc, từ chối tái gia nhập Chiến Thần Điện, ẩn vào quần thể núi lửa bế quan. Trong bế quan, dùng Nghịch Thiên Châu vào Mộng Cảnh thăm Tư Đồ Nam; 1 năm thực = 7 năm Mộng Cảnh. Sau 6 năm Mộng Cảnh (chưa đầy 1 năm thực) khôi phục Trúc Cơ trung kỳ — toàn bộ Quyển 2 mở màn bằng cuộc tái sinh và vươn lên của VL trong vỏ bọc Mã Lương tại Hỏa Phần quốc.",
      milestones: [
        "Linh hồn VL tái sinh trong khe nứt không gian — Nghịch Thiên Châu dung hợp vĩnh viễn vào hồn phách (Ch.102)",
        "Phát hiện Tư Đồ Nam chưa chết — đang ngủ sâu, giữ hồn phách cha mẹ VL trong Nguyên Anh (Ch.102)",
        "VL đoạt xá thân xác Mã Lương (Chiến Thần Điện, Hỏa Phần quốc) sau 3 năm ám bố chiến trường (Ch.103–104)",
        "Vượt sợi tơ đen pháp tắc — Thần Thức Cực Cảnh hình thành; giới hạn cứng Nguyên Anh hậu kỳ (Ch.108)",
        "Trở về thế giới tu chân tại Hỏa Phần quốc; từ chối Chiến Thần Điện, ẩn vào quần thể núi lửa bế quan (Ch.109)",
        "1 năm thực = 7 năm Mộng Cảnh — khôi phục Trúc Cơ trung kỳ sau gần 1 năm bế quan (Ch.110)",
        "Rời hang, đến Phần Kim sơn mạch; bắt sống Hứa Lập Quốc (Thiên Cương Tông, Nguyên Anh kỳ mượn thân Thi Âm Tông) (Ch.111)",
        "Hủy ý thức Hứa Lập Quốc, tự chế Ma Đầu từ nguyên thần hắn rồi cho ẩn vào thiết phiến; Nghịch Thiên Châu hấp thu Phần Kim Quả — lá ba ngưng thực thể, xuất hiện lá năm (Ch.112)",
        "Thả Chu Tử Hồng + Lâm Đào tại Khê Cốc phường thị; gặp Lý Kỳ Khánh (Lạc Hà Môn) (Ch.113)",
        "Tôn Hữu Tài dẫn vào bẫy; VL giết Tứ sư huynh hắc y (Trúc Cơ Đại viên mãn giả đan) bằng Thần Thức Cực Cảnh chỉ một chữ 'Diệt'; thu phi kiếm đen mới (Ch.114)",
        "Tôn Hữu Tài tự thiêu trong dung nham để trốn; VL thu túi trữ vật chứa Đại Tự Tại Tu La thuật (Tà Ma Tông) (Ch.115)",
        "Nghịch Thiên Châu tự phá ra, hấp thu nguyên anh hỏa thuộc tính Thú tổ — Hỏa thuộc tính Đại viên mãn; bề ngoài châu xuất hiện hoa văn lửa đỏ rực (Ch.116)",
        "Khuất phục Ma Đầu (đã hồi Trúc Cơ hậu kỳ đỉnh, tiến giả đan) — bước ngoặt VL chấp nhận thủ đoạn ma đạo; giữ pháp thuật ma đạo từ ngọc giản (không tu công pháp Đại Tự Tại Tu La thuật); luyện phi kiếm đen mới; Nghịch Thiên Châu năm lá — Thủy và Hỏa viên mãn, Mộc nửa, thiếu Kim và Thổ (Ch.117)",
        "Dùng Ngụy Thổ Độn thuật (biến thể tự chế, 3 trượng/lần) xuyên qua đại quân hỏa thú hơn 10.000 tu sĩ; phi kiếm biến dạng (Ch.118)",
        "Phượng Loan (Nguyên Anh sơ kỳ, lão tổ Chiến Thần Điện) thu VL làm ký danh đệ tử; Dương Sâm tặng ngọc phù bảo mệnh cấp Nguyên Anh; Từ Tư tập kích bằng hắc châm — bị VL cắm ký ấn chết chậm 1 tháng (Ch.119)",
        "Nhận ngọc phù triệu tập tham chiến Tuyên Vũ quốc; liên minh Hỏa Phần Minh (4 tông) phát động xâm lược (Ch.120)",
        "Phượng Loan treo thưởng Thiên Ly đan + giao kèo bản đồ đổi mạng người; VL tham chiến, một mình lén giết hàng loạt Trúc Cơ kỳ Tuyên Vũ quốc bằng Cực cảnh thần thức (Ch.121)",
        "Lập Phệ Huyết Thiên Ma trận, nuốt Kim Đan → đột phá Trúc Cơ hậu kỳ đại viên mãn; khai báo ngụy 'Giả Đan cảnh giới'; Tỏa Quốc Đại Trận bị phá (Ch.122)",
        "Cứu Lý Mộ Uyển (đan sư Lạc Hà Môn) làm lò luyện đan di động; mang nàng lánh vào Tu Ma Hải (Ch.123)",
        "Dùng Tử Chú thuật trấn áp Tu Ma Hải; thu phục Tang Mộc Nhai; lập động phủ + Cửu Ly Thi Cốt trận (Ch.124)",
        "Vào Thi Cốc, kéo được thi thể một con giao long (hơn Nguyên Anh kỳ vài phần) về làm bảo vật (Ch.125)",
        "Bế quan Hoàng Tuyền Thăng Khiếu Quyết, ngưng đủ ba viên hàn đan; nâng trận thành Cửu Ly Giao Long trận (Ch.126)",
        "VL ĐỘT PHÁ KẾT ĐAN KỲ — tu thành hoàng tuyền chi cảnh, luyện hoàng tuyền băng diễm + Thủy Tinh phi kiếm + Phiên Ưng Lô cửu phẩm; tự xưng 'đệ nhất nhân dưới Nguyên Anh kỳ' (Ch.127)",
        "Truy sát đám Đấu Tà phái — giết chín trưởng lão Tổng bộ; Tiễn Khôn cùng đường lấy Vạn Ma Bách Nhật Tru Sát Lệnh ra dọa (Ch.128)",
        "Niệm 'Tử' giết Tiễn Khôn → chữ 'Diệt' treo trên đầu; xác nhận Kết Đan sơ kỳ; thu phục Hắc y Ma quân Thượng Quan Mặc (Ch.129)",
        "Nuốt bản mệnh tinh huyết Thượng Quan Mặc (ràng buộc sống-chết); quyết tận diệt Đấu Tà phái, lần đầu tàn sát phạm vi lớn — long cân trói hơn nghìn thi thể (Ch.130)",
        "Tàn sát hơn 1.000 Kết Đan kỳ quanh Nam Đẩu thành — sát danh vang dội Tu Ma Hải; Thượng Quan Mặc giết Âu Dương lão nhân theo lệnh (Ch.131)",
        "Giải Đông Lai triển khai Đấu Long Đại Trận (13.562 đệ tử) — VL phát hiện yếu điểm: ngoài 90 trượng nội công yếu (Ch.132)",
        "Giải Đông Lai chết — dụ sát bằng kiếm hoàn/kiếm đan thất bại; VL lập Thượng Quan Mặc làm chưởng giáo Đấu Tà phái; lần đầu vào Mộng Cảnh sau kết đan, lập hứa với Tư Đồ Nam (Ch.133)",
        "Ma đầu lộ đã đột phá Kết Đan kỳ và khôi phục trí nhớ — bị VL áp chế bằng thôn hồn; phát hiện Họa trục (Ch.134)",
        "Ép ma đầu nhả 43 linh hồn, gia cường thần thức; lão nhân thanh bào xuất hiện điều tra Tử Chú thuật (Ch.135)",
        "Lão nhân thanh bào truy sát chính thức — bức bản mệnh tinh huyết Thượng Quan Mặc; VL và Lý Mộ Uyển bỏ trốn khỏi Tu Ma Hải (Ch.136)",
        "Chia tay Lý Mộ Uyển sau bốn năm; chui vào Mộng Cảnh né Vạn Ma Tru Sát lệnh — lão nhân thanh bào mất dấu; Thất Mai chi địa được nhận ra là thế lực Hóa Thần kỳ (Ch.137)",
        "Ngưng viên tu đan từ Tru Sát lệnh trong Mộng Cảnh; Bát Cực Ma Quân lộ danh — phá trận Hỏa Phần Minh bằng một ấn tay, phân bốn thân lùng sục (Ch.138)",
        "Lần đầu dùng Tử Chú thuật phản kích Nguyên Anh kỳ (Bát Cực Ma Quân) — Bát Trảo Thần Thức hấp thu nhưng khiến lão khựng người; ngọc phù Dương Sâm vỡ (Ch.139)",
        "Đạt hiệp nghị với Bát Cực Ma Quân: hộ tống vào địa phương bí ẩn đổi Lập Anh đan + bảo vật; được vào xem Thần Đạo thuật Chiến Thần Điện (Ch.140)"
      ]
    }
  ]
};

window.LIB_DATA["tien-nghich"].techniques = {
  updatedAt: "2026-06-10",
  count: 30,
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
    },
    {
      id: "quy-hon-thuat",
      name: "Quy Hồn thuật",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật",
      he: "Thi Âm tông",
      capBac: "Không rõ",
      nguoiDung: ["vuong-lam"],
      blurb: "Thuật triệu hồi lệ hồn (hồn phách của người chết) ra chiến đấu. VL học từ ngọc giản Thi Âm tông; dự định dùng trong trận chiến với Đằng Hóa Nguyên.",
      detail: "Từ ngọc giản Thi Âm tông. Cơ chế: gọi lệ hồn từ hồn phách người chết để chiến đấu thay chủ. VL lên kế hoạch ứng dụng @c0095 nhưng cuối cùng dùng pháp bảo A Ngốc làm nghi binh thay thế @c0099.",
      nguon: ["@c0095"]
    },
    {
      id: "lam-bang-thiem",
      name: "Lam Băng Thiểm",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật",
      he: "Hoàng Tuyền Tông",
      capBac: "Không rõ",
      nguoiDung: ["vuong-lam"],
      blurb: "Pháp thuật băng hàn từ Hoàng Tuyền Tông. Lam quang mang khí tức băng hàn cực mạnh, tạo sóng lam đóng băng phương viên vài ngàn thước. VL dùng trong trận đối đầu với Đằng Hóa Nguyên @c0100. Lâm Dịch xác nhận xuất xứ Hoàng Tuyền Tông.",
      detail: "Xuất xứ Hoàng Tuyền Tông; Lâm Dịch nhận ra ngay khi VL thi triển @c0100. Lam quang + khí tức băng hàn kết hợp tạo sóng lam lan diện rộng. VL dùng phối hợp với huyễn thuật Thiên Huyễn + thuấn di trong chuỗi liên hoàn @c0100.",
      nguon: ["@c0100"]
    },
    {
      id: "than-thuc-cuc-canh",
      name: "Thần Thức Cực Cảnh",
      cn: "",
      loai: "than-thuc",
      loaiLabel: "Thần thức đặc dị",
      he: "Cực cảnh thượng cổ",
      capBac: "Vô tiền khoáng hậu (chỉ VL ghi nhận)",
      nguoiDung: ["vuong-lam"],
      blurb: "Ý Cực cảnh dung hợp vào thần thức của Vương Lâm trong 3 giây chịu đựng pháp tắc sợi tơ đen tại truyền tống trận Vực Ngoại. Thần thức có thể tiêu diệt mọi sinh linh cùng cấp bất kể sơ/trung/hậu kỳ. Giới hạn tuyệt đối: Nguyên Anh hậu kỳ. (@c0108)",
      detail: "Hình thành khi ý Cực cảnh từ linh lực VL chuyển sang ấn lên thần thức — xảy ra trong 3 giây VL tự thử thách pháp tắc sợi tơ đen để vượt truyền tống trận khe nứt @c0108. Thần thức bị nghiền nát và tái tạo hàng vạn lần dưới áp lực pháp tắc, rèn luyện ý Cực cảnh dung hợp vào. Sức mạnh: một sợi cực thức thuần khiết đã chặn bàn tay đen khổng lồ của pháp tắc, cho phép VL thoát ra. Hệ quả hai chiều: linh lực của Mã Lương's thân suy yếu vĩnh viễn; bù lại thần thức đạt cực cảnh — tiêu diệt mọi sinh linh cùng cấp tu vi bất kể phân kỳ. Giới hạn cứng do pháp tắc áp đặt: chỉ đến Nguyên Anh hậu kỳ — đột phá lên Hóa Thần sẽ bị pháp tắc tiêu diệt tức thì. Đây là loại Cực cảnh ấn lên thần thức, khác hoàn toàn với Cực Âm Linh Lực VL vốn ấn lên linh lực.",
      nguon: ["@c0108"]
    },
    {
      id: "doat-xa",
      name: "Đoạt Xá",
      cn: "",
      loai: "ky-nang",
      loaiLabel: "Kỹ năng đặc dị",
      he: "Thần thức",
      capBac: "Không rõ (cơ chế thần thức cực cao)",
      nguoiDung: ["vuong-lam"],
      blurb: "Kỹ thuật dùng thần thức nhập vào thân xác để duy trì tồn tại. VL ký thác linh hồn vào thi thể tổ ma Cự Ma tộc trong khe nứt không gian @c0102, rồi đoạt xá thân xác Mã Lương vừa tử trận @c0103. Cơ chế chính xác chưa được nguyên tác giải thích đầy đủ.",
      detail: "VL lần đầu ký thác linh hồn vào thi thể người khổng lồ Cự Ma tộc cổ đại (xác đã chết, không còn hồn) trong khe nứt không gian @c0102 — chỉ để tạm trú linh hồn và rèn thần thức bằng cách nuốt sinh vật khói. Lần thứ hai là đoạt xá thân xác Mã Lương — tu sĩ Chiến Thần Điện vừa tử chiến @c0103: một luồng thần thức khổng lồ ùa vào thân xác, chữa lành vết thương, mở mắt, tỏa ánh quang. VL sau đó đồng hóa hoàn toàn với thân xác Mã Lương — dáng dấp, ký ức, mùi hương đều hòa nhập @c0110. Một trong những công năng gián tiếp của Thần Thức Cực Cảnh và thần thức vượt trội.",
      nguon: ["@c0102", "@c0103", "@c0110"]
    },
    {
      id: "dai-tu-tai-tu-la-thuat",
      name: "Đại Tự Tại Tu La thuật",
      cn: "",
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      he: "Ma đạo",
      capBac: "6 tầng — công pháp ma đạo hoàn chỉnh",
      nguoiDung: ["Tà Ma Tông"],
      blurb: "Công pháp ma đạo 6 tầng của Tà Ma Tông (gốc Hỏa Đốt quốc), tu Vô Tình Tu La đạo — lấy giết chóc luyện tâm, luyện ra Tu La chi hồn thay Nguyên Anh, giai đoạn đầu mỗi ngày phải giết một người. VL dò được trong ngọc giản chiến lợi phẩm (đoán trung niên hắc y tu công pháp này); hắn KHÔNG hứng thú với công pháp chính, chỉ giữ lại các pháp thuật ma đạo ghi kèm. (@c0117)",
      detail: "Vương Lâm lập động phủ, dò ba ngọc giản lấy từ túi trữ vật Tôn Hữu Tài và trung niên hắc y @c0117. Một ngọc giản ghi Đại Tự Tại Tu La thuật — công pháp ma đạo hoàn chỉnh gồm 6 tầng, tu Vô Tình Tu La đạo, lấy giết chóc luyện tâm nhập Vô Tình đạo, luyện ra Tu La chi hồn thay thế Nguyên Anh; giai đoạn đầu mỗi ngày phải giết một người. Vương Lâm đoán trung niên hắc y từng tu công pháp này. Bản thân hắn không hứng thú với công pháp chính, nhưng thích các pháp thuật ma đạo (tàn nhẫn nhưng thực dụng) ghi kèm — chỉ giữ lại số pháp thuật đó làm kho dùng về sau.",
      nguon: ["@c0117"]
    },
    {
      id: "nguy-tho-don-thuat",
      name: "Ngụy Thổ Độn thuật",
      cn: "",
      loai: "phap-thuat",
      loaiLabel: "Pháp thuật",
      he: "Thổ",
      capBac: "Biến thể phi chính thống của Thổ Độn thuật",
      nguoiDung: ["vuong-lam"],
      blurb: "Biến thể Thổ Độn thuật VL tự nghiên cứu phát triển. Phạm vi dịch chuyển 3 trượng mỗi lần. VL dùng để di chuyển qua địa hình và trốn thoát trong đội hình đại quân hỏa thú @c0118. (@c0117, @c0118)",
      detail: "VL tự phát triển biến thể Thổ Độn thuật phi chính thống sau khi tiếp xúc với địa hình núi lửa @c0117. Mỗi lần dịch chuyển 3 trượng. @c0118: VL sử dụng liên tục để luồn qua đại quân hỏa linh thú, tránh đối đầu trực tiếp và tiến về hướng Chiến Thần Điện.",
      nguon: ["@c0117", "@c0118"]
    },
    {
      id: "luyen-khi-thuat-chien-than-dien",
      name: "Luyện Khí thuật Chiến Thần Điện",
      cn: "",
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      he: "Đặc thù — Điều Dung Hợp",
      capBac: "Kỹ thuật luyện khí chuyên biệt, quy trình 3 bước: Điều – Dung – Hợp",
      nguoiDung: [],
      blurb: "Kỹ thuật luyện khí đặc thù của Chiến Thần Điện, chú trọng ba quá trình Điều — Dung — Hợp, khác hẳn lối luyện khí thông thường (không dùng linh hỏa, lò luyện, khắc trận hay dung hợp tài liệu kiểu cũ). Mấu chốt là khí cụ Phiên Ưng lô; VL nghiên cứu qua ngọc giản do Dương Hùng chép nhưng thất bại vì không chế được Phiên Ưng lô. (@c0112, @c0117)",
      detail: "Luyện khí thuật của Chiến Thần Điện chú trọng ba quá trình Điều — Dung — Hợp, khác hẳn lối luyện khí phổ thông vốn dựa vào linh hỏa, lò luyện, khắc trận và dung hợp tài liệu. Mấu chốt là khí cụ Phiên Ưng lô có tác dụng kích thích thuộc tính bản nguyên của tài liệu; yêu cầu khắt khe nhất là thân lô phải làm từ đầu lâu linh thú — chính điểm này khiến phần lớn tu sĩ luyện khí Chiến Thần Điện phải dừng chân. Vương Lâm muốn tới Chiến Thần Điện học luyện khí thuật và thần đạo thuật @c0112; sau lấy ngọc giản luyện khí (do Dương Hùng chép) ra nghiên cứu @c0117 nhưng thử chế Phiên Ưng lô không thành.",
      nguon: ["@c0112", "@c0117"]
    },
    {
      id: "than-dao-chi-thuat",
      name: "Thần Đạo chi thuật",
      cn: "",
      loai: "cong-phap",
      loaiLabel: "Công pháp",
      he: "Kim — thiết tính",
      capBac: "Không xác định — công pháp nội môn Chiến Thần Điện",
      nguoiDung: [],
      blurb: "Công pháp bí truyền đặc trưng của Chiến Thần Điện (Hỏa Phần quốc). Vương Lâm có ý tới Chiến Thần Điện để học luyện khí thuật và thần đạo thuật @c0112. Nguyên tác chưa khai thác chi tiết cơ chế tới các chương đã đọc. (@c0112)",
      detail: "Thần Đạo chi thuật là công pháp đặc trưng của Chiến Thần Điện; trưởng lão Hoắc Hồng Phi cũng tu công pháp này @c0109. Vương Lâm dự định tới Chiến Thần Điện học luyện khí thuật cùng thần đạo thuật @c0112; nguyên tác chưa mô tả chi tiết cơ chế của thuật này tới các chương đã đọc.",
      nguon: ["@c0112"]
    },
    {
      id: "tu-chu-thuat",
      name: "Tử Chú thuật",
      cn: "",
      loai: "than-thong",
      loaiLabel: "Thần thông — Tà đạo thượng cổ",
      phamCap: "Thần thông thượng cổ (cực khó tu)",
      hePhai: "Ma đạo (ghi trong Tàng Kinh Các Lạc Hà Môn)",
      soHuu: ["vuong-lam"],
      blurb: "Thần thông ma đạo thượng cổ. Luyện thành thì chỉ cần niệm một chữ 'Tử' là đối tượng thất khiếu chảy máu, thần thức phá liệt mà chết. Vương Lâm dùng giết ba tu sĩ Đấu Tà phái @c0124 và Tiễn Khôn @c0129.",
      detail: "Tử Chú thuật cần tu luyện hợp nhất tam khí: âm khí (nguyên âm nữ tử qua thuật thái âm), tử khí (khí từ hài cốt) và sát khí (ý chí hình thành sau giết chóc); trải qua cửu tử nhất sinh mới nắm được sơ bộ, mỗi ngày chịu đau đớn khủng khiếp, ba năm một lần cửu tử nhất sinh, tỷ lệ đại thành gần như bằng không nên ngay cả người ma đạo cũng rất ít tu. Uy lực được đánh giá không kém Nguyên Anh kỳ — khiến ngọc phù chống được một kích Nguyên Anh kỳ của Thượng Quan Mặc phải tự vỡ @c0129.",
      nguon: ["@c0124", "@c0129"]
    },
    {
      id: "phe-huyet-thien-ma-tran",
      name: "Phệ Huyết Thiên Ma trận",
      cn: "",
      loai: "bi-thuat",
      loaiLabel: "Trận pháp — Tà đạo",
      phamCap: "Chưa phân hạng",
      hePhai: "Ma đạo",
      soHuu: ["vuong-lam"],
      blurb: "Trận pháp ác độc dùng huyết nhục tu sĩ làm chủ để phát huy tác dụng của thiên ma. Vương Lâm lập bằng linh thạch và thi thể Trúc Cơ kỳ, dùng để vây giết một Kết Đan kỳ Tuyên Vũ quốc @c0122.",
      detail: "Kết cấu không phức tạp nhưng cần huyết nhục tu sĩ làm chủ: ném thi thể vào trận (mỗi cỗ nổ thành máu bị trận hấp thu) rồi nhỏ một giọt máu kích hoạt, sinh sương mù tím (tử khí) vây khốn đối phương. Lập bằng mười thi thể Trúc Cơ kỳ; nếu dùng thi thể Kết Đan kỳ thì chỉ cần năm thi thể là vây được tu vi dưới Kết Đan trung kỳ @c0122.",
      nguon: ["@c0122"]
    },
    {
      id: "cuu-ly-thi-cot-tran",
      name: "Cửu Ly Thi Cốt trận (Cửu Ly Giao Long trận)",
      cn: "",
      loai: "bi-thuat",
      loaiLabel: "Trận pháp",
      phamCap: "Tùy chất lượng xương cốt linh thú",
      hePhai: "Lạc Hà Môn (Lý Mộ Uyển bố)",
      soHuu: ["ly-mo-uyen", "vuong-lam"],
      blurb: "Trận pháp dùng xương cốt linh thú; đủ xương thì uy lực lớn, vây khốn được cả Kết Đan kỳ. Lý Mộ Uyển bố cho động phủ của Vương Lâm @c0124, sau dùng giao long cốt làm mắt trận nâng thành Cửu Ly Giao Long trận @c0126.",
      detail: "Ban đầu Lý Mộ Uyển bố bằng mười tám đoạn xương thú lam, do thiếu xương chỉ đạt ba thành (ngăn Kết Đan kỳ một canh giờ) @c0124. Sau khi thêm giao long cốt (trung phẩm linh thú) làm mắt trận, trận đổi tên thành Cửu Ly Giao Long trận: mở ra vây khốn Kết Đan kỳ mấy tháng, Nguyên Anh kỳ vài ngày, dưới Nguyên Anh vào chắc chết. Bị mười Kết Đan kỳ Đấu Tà phái công phá ba ngày thì tan @c0126, @c0127.",
      nguon: ["@c0124", "@c0126", "@c0127"]
    },
    {
      id: "thong-phe-dai-phap",
      name: "Thông Phệ đại pháp",
      cn: "",
      loai: "cong-phap",
      loaiLabel: "Công pháp — Tà đạo",
      phamCap: "Chưa phân hạng",
      hePhai: "Tà Ma Tông",
      soHuu: [],
      blurb: "Đại pháp nuốt Kim Đan để tăng tu vi của Tà Ma Tông. Vương Lâm lấy danh nghĩa công pháp này để giải thích ngụy với Chu Cẩn việc mình nuốt Kim Đan đột phá lên 'Giả Đan cảnh giới' @c0122.",
      detail: "Theo ngọc giản Tà Ma Tông, Thông Phệ đại pháp cho phép nuốt Kim Đan của Kết Đan kỳ để hấp thu linh lực tăng tu vi (thông thường chỉ hấp thu một thành; phải tu Đại Tự Tại Tu La thuật mới hấp thu hai thành). Vương Lâm dùng nó làm vỏ bọc che giấu cơ chế thật (Nghịch Thiên Châu) trước Chu Cẩn @c0122.",
      nguon: ["@c0122"]
    },
    {
      id: "dau-long-dai-tran",
      name: "Đấu Long Đại Trận",
      cn: "",
      loai: "bi-thuat",
      loaiLabel: "Trận pháp — Ma đạo tập thể",
      phamCap: "Trận pháp tông môn đặc thù, cần số lượng đệ tử lớn",
      hePhai: "Đấu Tà phái",
      soHuu: ["giai-dong-lai"],
      blurb: "Trận pháp đặc thù của Đấu Tà phái: dồn thần thức toàn thể đệ tử vào một điểm, sức mạnh tập trung theo tỷ lệ số người tham gia. Giải Đông Lai kích hoạt với 13.562 đệ tử, tạm thời nâng tu vi gần sơ Nguyên Anh.",
      detail: "Đấu Long Đại Trận là át chủ bài của Đấu Tà phái — chưởng môn chủ trì, toàn thể đệ tử đồng thời tống thần thức vào trận. Với 13.562 đệ tử tham gia, tu vi tổng hợp tạm thời tiến gần sơ Nguyên Anh kỳ. Yếu điểm Vương Lâm phát hiện: càng xa đầu rồng (điểm tập trung lực lượng), nội công đối phương càng yếu — ở khoảng cách trên 90 trượng tính từ đầu rồng thì sức mạnh giảm đáng kể @c0132. Sau khi Giải Đông Lai chết, Lý Mộ Uyển cải biến trận này thành ngọc phù phòng thủ tặng Vương Lâm @c0137.",
      nguon: ["@c0132", "@c0133", "@c0137"]
    },
    {
      id: "bat-trao-than-thuc",
      name: "Bát Trảo Thần Thức",
      cn: "",
      loai: "bi-thuat",
      loaiLabel: "Thần thông — Thần thức đặc biệt",
      phamCap: "Cơ chế độc đáo trong ý thức hải",
      hePhai: "Chưa rõ nguồn gốc (thuộc Bát Cực Ma Quân)",
      soHuu: ["bat-cuc-ma-quan"],
      blurb: "Con bạch tuộc tám vòi nằm trong ý thức hải Bát Cực Ma Quân — há miệng hấp thụ tia chớp Tử Chú thuật; vẫn gây run rẩy toàn thân khiến lão khựng lại trong một sát na. Tên chương 139 lấy từ cơ chế này.",
      detail: "Khi Vương Lâm dùng Tử Chú thuật tấn công ý thức hải Bát Cực Ma Quân, tia chớp đỏ (thần thức tấn công) đánh vào thì bị con 'bát trảo chương ngư' (bạch tuộc tám vòi) trong ý thức hải đã khô cạn há miệng hấp thụ. Dù hấp thụ, phản ứng run rẩy vẫn lây lan khắp người lão, khiến lão khựng lại sát na — đây là lý do VL chưa bị bắt ngay dù đối mặt Nguyên Anh kỳ @c0139.",
      nguon: ["@c0139"]
    }
  ]
};

// MAP — địa danh Ch.1-140 (neo nguyên tác)
window.LIB_DATA["tien-nghich"].map = {
  updatedAt: "2026-06-10",
  count: 46,
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
      blurb: "Vùng đất đặc biệt tại Thiên Nam hình hồ lô — bát giác trận pháp bên trong phong ấn Kết Đan kỳ trở lên. Hệ thống 7 lệnh bài, chỉ 3 danh ngạch vào Vực Ngoại chiến trường (khi thông đạo mở còn quá 3 lệnh bài chưa hủy thì Triệu quốc mất tư cách). Mở 100 năm/lần; thị trấn thương mại nổi lên ngàn dặm xung quanh. Alias: 'Quang Minh Cốc'.", detail: "Quyết Minh Cốc hình hồ lô, nằm ở Thiên Nam; bát giác trận pháp bảo vệ phong ấn tất cả tu sĩ Kết Đan kỳ trở lên không thể vào @c0091–@c0099. Chỉ Trúc Cơ kỳ trở xuống vào được. Hệ thống lệnh bài: tổng 7 lệnh bài được phân bổ cho tu sĩ; chỉ 3 danh ngạch vào Vực Ngoại chiến trường @c0092. Đằng Hóa Nguyên và toàn bộ Nguyên Anh kỳ canh bên ngoài @c0087–@c0096, không thể vào. Thông đạo Vực Ngoại mở mỗi 100 năm @c0096. Khi thông đạo mở mà còn >3 lệnh bài chưa hủy thì mất tư cách @c0100. La Sát dùng cốc làm địa điểm nghi thức nâng thi khôi @c0086. Alias 'Quang Minh Cốc' @c0090.", theLucLienQuan: ["thi-am-tong"], nguon: ["@c0086", "@c0087", "@c0088", "@c0089", "@c0090", "@c0091", "@c0092", "@c0093", "@c0096", "@c0099"] },
    { id: "thong-thien-thap", name: "Thông Thiên Tháp", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Công trình trung tâm Triệu quốc. Nơi Cự Ma tộc lấy Thất Thải pháp khí @c0083.", detail: "Thông Thiên Tháp được nhắc đến như công trình quan trọng tại trung tâm Triệu quốc @c0082. Cự Ma tộc (liên minh sứ giả đầu khổng lồ) lấy Thất Thải pháp khí từ đây @c0083; không rõ tháp do ai xây, mục đích gốc là gì.", theLucLienQuan: [], nguon: ["@c0082", "@c0083"] },
    { id: "vuc-ngoai-chien-truong", name: "Vực Ngoại chiến trường", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Không gian Vực Ngoại mở 100 năm/lần; phía sau màng mỏng là không gian hư vô với thi thể và pháp bảo bị tàn phá. Cần đủ lệnh bài tư cách để vào. VL xuyên vào @c0100 sau khi tự nổ thân.", detail: "Vực Ngoại chiến trường mở mỗi 100 năm; thông đạo được kích hoạt qua nghi thức lệnh bài tại Quyết Minh Cốc @c0096. Bên trong là không gian hư vô: thi thể tu sĩ tứ phương + pháp bảo bị tàn phá từ các lần chiến trận trước @c0099. Giới hạn tư cách: phải sở hữu đủ lệnh bài khi thông đạo mở; nếu còn >3 lệnh bài chưa hủy thì mất tư cách @c0100. VL xuyên vào bằng cách tự nổ thân thể phóng qua quang võng @c0100; số phận chưa xác nhận. Tư Đồ Nam từng khuyên VL ra đây sau Quyết Minh Cốc @c0089.", theLucLienQuan: [], nguon: ["@c0082", "@c0083", "@c0089", "@c0096", "@c0099", "@c0100"] },
    { id: "thi-tran-quanh-quyet-minh-coc", name: "Thị trấn quanh Quyết Minh Cốc", cn: "", capDo: "khac", parentId: "trieu-quoc",
      blurb: "Thị trấn thương mại mọc lên trong ngàn dặm quanh Quyết Minh Cốc mỗi khi thông đạo sắp mở. Cứ 100 năm trở thành trung tâm giao dịch lớn nhất Triệu quốc.", detail: "Mỗi khi Quyết Minh Cốc sắp mở thông đạo Vực Ngoại (100 năm/lần), các thị trấn thương mại tự phát nổi lên trong phạm vi ngàn dặm quanh cốc — trở thành nơi giao dịch lớn nhất Triệu quốc trong kỳ đó @c0096.", theLucLienQuan: [], nguon: ["@c0096"] },
    { id: "hoa-phen-quoc", name: "Hỏa Phần Quốc", cn: "", capDo: "quoc-gia", parentId: null,
      blurb: "Tam cấp tu chân quốc nằm phía nam Chu Tước, cạnh Tu Ma Hải. Địa hình đặc trưng là quần thể núi lửa. Có bốn tông phái: Chiến Thần Điện (số 1, độc quyền Thần Đạo), Tà Ma Tông, Lạc Hà Môn, Thi Âm Tông. Trong lãnh thổ có Phần Kim sơn mạch và Khê Cốc phường thị.", detail: "Hỏa Phần Quốc xác nhận là tam cấp tu chân quốc @c0109. Vị trí: phía nam Chu Tước (lục cấp), tiếp giáp Tu Ma Hải @c0109. Địa hình chủ đạo: quần thể núi lửa nổi tiếng @c0110. Bốn tông phái lớn: Chiến Thần Điện (tông đứng đầu, độc quyền Thần Đạo Thuật, 6 lão tổ Nguyên Anh kỳ), Tà Ma Tông, Lạc Hà Môn, Thi Âm Tông @c0109. Nơi VL (trong thân Mã Lương) ẩn náu và bắt đầu phục hồi tu vi sau khi rời Vực Ngoại. Phần Kim sơn mạch — nhánh núi lửa giàu dược tài nằm trong lãnh thổ @c0111. Khê Cốc phường thị — phường thị lớn trong lãnh thổ @c0113.", theLucLienQuan: ["chien-than-dien", "ta-ma-tong", "lac-ha-mon", "thi-am-tong"], nguon: ["@c0109", "@c0110", "@c0111", "@c0113"] },
    { id: "tu-ma-hai", name: "Tu Ma Hải", cn: "", capDo: "khu-vuc", parentId: null,
      blurb: "Biển sương mù rộng lớn (diện tích bằng mấy nghìn Hỏa Phần Quốc) ngăn cách Chu Vũ đại lục với đại lục có Triệu quốc; nơi tụ tập người tu ma và tội phạm bị truy sát, thế lực long xà hỗn tạp. Có khí âm hàn, là môi trường lý tưởng tu công pháp hàn thuộc tính.", detail: "Vốn là biển thật; thời thượng cổ một tu sĩ dùng thần thông làm nước bốc hơi để giết địch, từ đó chỉ còn sương mù (vụ hải), mỗi năm có ~một tháng sương mù hóa lại thành nước biển. Tài nguyên cằn cỗi, linh mạch thưa; thế lực mạnh và linh thú cường đại tập trung ở trung tâm, rìa biển chỉ có thế lực nhỏ và ít Nguyên Anh kỳ. Có ranh giới khiến hỏa linh thú không vào được (vào là teo nhỏ, hóa xám, chết). Có tam đại hiểm địa (trong đó có Thi Cốc) và gần một nghìn tòa thành lớn (như Nam Đẩu thành); Vạn Ma Bách Nhật Tru Sát Lệnh lưu hành tại đây. Vương Lâm cùng Lý Mộ Uyển lánh vào đây, lập động phủ, đột phá Kết Đan kỳ @c0123–@c0130. (Đầu Quyển 2 mới được nhắc tên @c0109.)", theLucLienQuan: ["dau-ta-phai", "luyen-khi-tong"], nguon: ["@c0109", "@c0123", "@c0124", "@c0125", "@c0127", "@c0128"] },
    { id: "quan-the-nui-lua-hoa-phen", name: "Quần thể núi lửa Hỏa Phần", cn: "", capDo: "khac", parentId: "hoa-phen-quoc",
      blurb: "Quần thể núi lửa nổi tiếng của Hỏa Phần Quốc. Trong ký ức Mã Lương có thông tin chi tiết về khu vực này. VL chọn nơi đây làm căn cứ bế quan.", detail: "Quần thể núi lửa là địa điểm nổi tiếng tại Hỏa Phần Quốc, được lưu trong ký ức của Mã Lương @c0110. VL dựa vào ký ức đó bay đến, chọn một hang đá tự nhiên, dùng đá chặn cửa kết hợp trận pháp che giấu để bắt đầu bế quan phục hồi tu vi @c0110.", theLucLienQuan: [], nguon: ["@c0110"] },
    { id: "chu-tuoc-tinh", name: "Chu Tước Tinh", cn: "", capDo: "khu-vuc", parentId: null,
      blurb: "Tinh cầu thuộc quyền Chu Tước Quốc (lục cấp). Trực thuộc: 18 ngũ cấp tu chân quốc và 108 chiến trường ngoại vực. Tặng thưởng sau khi Chu Tước Quốc vươn từ nhất cấp lên lục cấp trong 100.000 năm.", detail: "Chu Tước tinh được Liên Minh Tu Chân ban tặng cho Chu Tước Quốc khi quốc gia này đạt lục cấp @c0104. Trực thuộc Chu Tước tinh: 18 ngũ cấp tu chân quốc và 108 chiến trường ngoại vực. Sở hữu tinh cầu là điều kiện tham gia Liên Minh Tu Chân (lục cấp + tinh cầu @c0104). Vị trí địa lý cụ thể trong vũ trụ chưa được mô tả trong phạm vi Ch.101–110.", theLucLienQuan: ["chu-tuoc-quoc"], nguon: ["@c0104"] },
    { id: "cu-loc-quoc", name: "Cự Lộc Quốc", cn: "", capDo: "quoc-gia", parentId: null,
      blurb: "Tu chân quốc nơi Linh Vũ Tông đặt trụ sở. Hứa Hạo — đệ tử thứ sáu của Linh Vũ Tông — xuất thân từ đây. Cấp độ quốc gia chưa được xác nhận trong nguyên tác.", detail: "Cự Lộc Quốc được nhắc đến qua lý lịch của Hứa Hạo — đệ tử thứ sáu Linh Vũ Tông @c0103. Không có thêm thông tin về cấp độ hay địa lý quốc gia này trong phạm vi Ch.101–110.", theLucLienQuan: ["linh-vu-tong"], nguon: ["@c0103"] },
    { id: "phan-kim-son-mach", name: "Phần Kim sơn mạch", cn: "", capDo: "khac", parentId: "hoa-phen-quoc",
      blurb: "Nhánh sơn mạch núi lửa trong lãnh thổ Hỏa Phần Quốc. Giàu dược tài đặc hữu như Phần Kim Quả. Là nơi VL bắt đầu bế quan luyện Ma Đầu và nơi Hứa Lập Quốc (Thiên Cương Tông) ẩn náu.", detail: "VL rời hang bế quan sau đợt tu luyện và đến Phần Kim sơn mạch @c0111. Tại đây có loài dược quả Phần Kim Quả @c0111. Hứa Lập Quốc (Thiên Cương Tông, Nguyên Anh kỳ dùng thân Thi Âm Tông) nằm vùng ở đây @c0111. Sơn mạch có hang đá tự nhiên VL dùng làm căn cứ bế quan @c0110–@c0112.", theLucLienQuan: ["thi-am-tong"], nguon: ["@c0110", "@c0111", "@c0112"] },
    { id: "khe-coc-phuong-thi", name: "Khê Cốc phường thị", cn: "", capDo: "khac", parentId: "hoa-phen-quoc",
      blurb: "Phường thị lớn trong lãnh thổ Hỏa Phần Quốc. Nơi diễn ra đại hội giao dịch hàng kỳ. VL gặp Lý Kỳ Khánh (Lạc Hà Môn) và thả Chu Tử Hồng + Lâm Đào tại đây.", detail: "Khê Cốc phường thị là phường thị trung tâm giao dịch Hỏa Phần Quốc @c0113. VL đến đây sau khi luyện xong Ma Đầu; thả Chu Tử Hồng và Lâm Đào (bắt từ hang Thi Âm Tông) tại cổng phường thị @c0113. Lý Kỳ Khánh (Lạc Hà Môn) gặp VL và mời tham dự đại hội giao dịch @c0113.", theLucLienQuan: ["lac-ha-mon"], nguon: ["@c0113"] },
    { id: "tuyen-vu-quoc", name: "Tuyên Vũ Quốc", cn: "", capDo: "quoc-gia", parentId: null,
      blurb: "Tam cấp tu chân quốc lân cận Hỏa Phần Quốc. Mục tiêu xâm lược của liên minh Hỏa Phần Minh. Chiến Thần Điện cử Dương Sâm dẫn đại quân vào @c0120.", detail: "Tuyên Vũ Quốc là tam cấp tu chân quốc @c0120. Liên minh Hỏa Phần Minh (4 tông: Chiến Thần Điện, Tà Ma Tông, Lạc Hà Môn, Thi Âm Tông) phát động xâm lược @c0117/@c0120. Chiến Thần Điện cử Dương Sâm (Nguyên Anh trung kỳ đỉnh) dẫn đại quân vào @c0120; Dương Sâm giết lão bà Nguyên Anh sơ kỳ của Tuyên Vũ quốc trong đợt đầu.", theLucLienQuan: ["chien-than-dien", "hoa-phen-minh"], nguon: ["@c0117", "@c0120"] },
    { id: "chu-vu-dai-luc", name: "Chu Vũ đại lục", cn: "", capDo: "chau", parentId: null,
      blurb: "Đại lục chứa Hỏa Phần Quốc và Tuyên Vũ Quốc. Ngăn cách với đại lục có Triệu quốc bởi Tu Ma Hải.", detail: "Theo bản đồ Phượng Loan trao cho Vương Lâm, Hỏa Phần Quốc nằm trên Chu Vũ đại lục; trên đại lục này không có Triệu quốc. Muốn về Triệu quốc (ở một đại lục khác) phải xuyên qua Tu Ma Hải @c0123.", theLucLienQuan: [], nguon: ["@c0122", "@c0123"] },
    { id: "thi-coc", name: "Thi Cốc", cn: "", capDo: "khac", parentId: "tu-ma-hai",
      blurb: "Một trong tam đại hiểm địa của Tu Ma Hải — thung lũng do vô số sơn cốc tạo thành, chứa nhiều xương ma thú và bí ẩn xương cốt linh thú cường đại. Càng vào sâu tu sĩ càng ít, thú cốt và âm hàn khí phẩm chất càng cao.", detail: "Thi Cốc nằm trong phương viên trăm dặm gần động phủ Vương Lâm; do vô số sơn cốc tạo thành (ít nhất mười bốn cốc khẩu được nhắc). Sương mù loãng hơn bên ngoài; không vào sơn cốc thì không nguy hiểm. Điều kỳ quái: linh thú cường đại (lẽ ra không tới được) lại chết trong cốc. Phẩm chất âm hàn khí tăng dần theo độ sâu, tới sơn cốc mười ba đạt thập nhất giai. Sơn cốc thứ mười bốn đặc biệt: to bằng tổng mười ba cốc trước, lam sương bao phủ, gần như không thú cốt, không thấy giới hạn (chỉ là nửa đường) — đáy là Cốt Hải. Vương Lâm kéo được thi thể giao long tại đây @c0125 và sau đó tu thành hoàng tuyền chi cảnh ở đáy cốc @c0127.", theLucLienQuan: [], nguon: ["@c0125", "@c0126", "@c0127"] },
    { id: "cot-hai", name: "Cốt Hải", cn: "", capDo: "khac", parentId: "thi-coc",
      blurb: "Thế giới màu lam ở đáy sơn cốc thứ mười bốn của Thi Cốc (sâu gần tám nghìn trượng), đầy xương cốt linh thú khổng lồ đang tiêu tan; có cả xương cốt hoang thú cực hiếm.", detail: "Cốt Hải nằm dưới đáy sơn cốc mười bốn, sâu khoảng 7.979 trượng. Đầy xương cốt linh thú khổng lồ; khí cực âm đậm đặc. Vương Lâm trầm xuống đây trong quá trình tu thành 'hoàng tuyền chi cảnh', tìm được sọ một hoang thú hiếm để đúc Phiên Ưng Lô cửu phẩm @c0127.", theLucLienQuan: [], nguon: ["@c0127"] },
    { id: "nam-dau-thanh", name: "Nam Đẩu thành", cn: "", capDo: "thanh-thi", parentId: "tu-ma-hai",
      blurb: "Một trong gần một nghìn tòa thành lớn của Tu Ma Hải, nằm ở rìa, tài nguyên cằn cỗi; vô chủ 500 năm (chủ thành Nguyên Anh kỳ mất tích), hiện do ba phái Tru Thiên giáo, Diệt Hồn môn, Thiên Nhất đạo giáo liên hợp quản lý. Trong phạm vi trăm vạn dặm quanh thành không có Nguyên Anh kỳ.", detail: "Nam Đẩu thành (tòa thành lớn màu đen) là một trong ~998–1000 tòa thành lớn của Tu Ma Hải. Có Luyện Khí Các ba tầng (tầng 1 Ngưng Khí trấn thủ, tầng 2 Trúc Cơ, tầng 3 Kết Đan) bán đan lô và khí cụ. Có cấm chế cản Thổ Độn thuật. Vương Lâm đổi giao long bì giáp lấy Bách Thú Linh Lô ngũ phẩm tại đây rồi bị Đấu Tà phái truy sát @c0127. (Cũng viết Nam Đấu thành.)", theLucLienQuan: ["dau-ta-phai", "luyen-khi-tong"], nguon: ["@c0126", "@c0127"] },
    { id: "ngu-dinh-phong", name: "Ngũ Đinh phong", cn: "", capDo: "khac", parentId: "tu-ma-hai",
      blurb: "Tòa núi cao nhiều lầu các; ngàn năm trước là môn phái lớn nhất vùng phụ cận, sau xuống cấp, bị Đấu Tà phái diệt môn và biến thành phân bộ (do hai trưởng lão Mộc Nam, Mộc Bắc tọa trấn).", detail: "Ngũ Đinh phong (cũng viết Ngũ Đỉnh phong) là nơi Tiễn Khôn chạy tới cầu cứu khi bị Vương Lâm truy sát @c0128. Hai trưởng lão Kết Đan kỳ Mộc Nam, Mộc Bắc tọa trấn phân bộ tại đây; sau đó bị Vương Lâm ép dẫn đường tới Tổng bộ Đấu Tà phái @c0128–@c0129.", theLucLienQuan: ["dau-ta-phai"], nguon: ["@c0128", "@c0129"] },
    { id: "that-mai-chi-dia", name: "Thất Mai chi địa", cn: "", capDo: "khu-vuc", parentId: "tu-ma-hai",
      blurb: "Khu vực bảy tòa thành bố trí theo hình cánh hoa mai trong nội hải Tu Ma Hải, do bảy thành chủ tu vi sâu khó lường (nghi Hóa Thần kỳ) trấn thủ.", detail: "Thất Mai chi địa nằm trong nội hải Tu Ma Hải, nơi có hơn 300 thành. Bảy tòa thành bố trí như bảy cánh mai hoa. Bảy thành chủ hiếm khi rời nội hải. Ma tu nội hải nói chung không tự nguyện rời đi. Dấu hiệu nhận biết: bảy đóa mai vàng khâu trên vạt áo — Trâu Bân (Chiến Thần Điện lão tổ, 300 năm trước du ngoạn Tu Ma Hải) nhận ra ngay. Bát Cực Ma Quân mang dấu hiệu này @c0137.", theLucLienQuan: ["that-mai-thanh"], nguon: ["@c0137"] },
    { id: "thien-mau-quoc", name: "Thiên Mậu quốc", cn: "", capDo: "quoc-gia", parentId: null,
      blurb: "Tam cấp tu chân quốc lân cận Hỏa Phần quốc; có Thông Thiên Tháp ở trung tâm — điểm phân biệt với Hỏa Phần quốc và Tuyên Vũ quốc (không có tháp này). Bát Cực Ma Quân ghé qua đây gặp sứ giả trong tháp @c0138.", detail: "Thiên Mậu quốc là tam cấp tu chân quốc, có biên giới tiếp giáp Hỏa Phần quốc. Tháp Thông Thiên nằm tại trung tâm quốc gia, bên trong có thượng cấp sứ giả; không phải mọi tam cấp tu chân quốc đều có tháp này (Hỏa Phần quốc và Tuyên Vũ quốc đều không có). Bát Cực Ma Quân băng qua biên giới sang Thiên Mậu quốc hướng tới tháp ở đoạn mở chương 138.", theLucLienQuan: [], nguon: ["@c0138"] }
  ]
};

window.LIB_DATA["tien-nghich"].artifacts = {
  updatedAt: "2026-06-10",
  count: 59,
  artifacts: [
    {
      id: "thach-chau",
      name: "Nghịch Thiên Châu",
      cn: "",
      aliases: ["Thạch Châu (tên ban đầu)"],
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Vượt phàm — thực chất là nơi ẩn náu của cường giả lục cấp Chu Tước Quốc (Tư Đồ Nam) @c0047; điều kiện nhận chủ: ngũ hành + ≥Anh Biến kỳ",
      soHuu: ["vuong-lam"],
      uuTien: 100,
      trangThai: "Dung hợp vĩnh viễn vào hồn phách Vương Lâm @c0102 — không còn là pháp bảo độc lập; hiện năm lá ngũ hành (Thủy+Hỏa viên mãn, Mộc nửa, thiếu Kim+Thổ) @c0117; Hỏa thuộc tính Đại viên mãn @c0116; nằm trong thức hải VL",
      blurb: "Viên châu xám khắc hoa văn đám mây trắng, pháp bảo trục chính của cả bộ Tiên Nghịch. Nhặt trong xác phi điểu ở huyệt động phong nhãn (@c0008). Lai lịch thật (@c0047): Tư Đồ Nam — cường giả lục cấp Chu Tước Quốc bị truy sát, ẩn tinh hoa nguyên anh vào châu. @c0085: Mộc giai 3 lá; @c0088: lần đầu phát hắc quang; @c0112: lá thứ ba ngưng thành thực thể rồi xuất hiện phiến lá thứ năm; @c0116: tự phá ra khỏi huyệt đạo VL, hấp thu nguyên anh hỏa thuộc tính Thú tổ — đạt Hỏa thuộc tính Đại viên mãn, bề ngoài hiện hoa văn lửa đỏ rực; @c0117: trên châu năm lá — Thủy và Hỏa viên mãn, Mộc mới nửa, còn thiếu Kim và Thổ.",
      detail: "To bằng nắm tay trẻ con; bề ngoài ban đầu phủ huyết nhục, lau sạch lộ màu xám với hoa văn đám mây trắng, trông rất cổ. Công năng xác nhận tới Ch.50: (1) Tiết hạt sương khi gặp ánh nắng buổi sáng — sương trị lành vết thương thể chất (@c0008–@c0009). (2) Nước ngâm châu có dược tính; hạt sương sáng sớm kết trên châu cho hiệu quả tốt nhất; tiếp theo là nước suối; máu/mồ hôi gần như vô dụng (@c0012). (3) Châu tự hấp thu hơn phân nửa hạt sương — người dùng chỉ giữ được chưa đến một phần mười (@c0012). (4) Cường hóa thể chất khi uống nước ngâm châu thường xuyên (@c0011). (5) Nước ngâm châu biến thành nước chứa linh khí sung túc (Tôn Đại Trụ xác nhận @c0016). (6) Dị biến hút nước mạnh: hút toàn bộ nước/hơi ẩm trong phạm vi rộng kể cả nước trong cơ thể người — suýt giết Trương Hổ bằng đông lạnh (@c0014). (7) Làm héo rũ thảo dược lân cận (Lam Tuyến Thảo, Tử Dạ Hoa) dù cơ chế chưa xác nhận rõ (@c0012–@c0013). (8) Số đám mây khắc trên châu tăng khi hấp thu nước: 5 (@c0008) → 6 → 7 (@c0014) → 9 (@c0020); 10 là mức cuối. (9) KHÔNG GIAN MỘNG CẢNH (@c0023): khi châu đạt đủ 10 đám mây, mây tan — lộ vài chữ số bí ẩn; châu khai mở không gian bên trong. Thời gian trong Mộng Cảnh chạy nhanh gấp 10 lần thực tại; không có linh khí tự nhiên trong đó. Mỗi lần vào cần ≥5 canh giờ liên tục — dùng cách này VL tu được ~1 năm trong 2 tháng thực (@c0024–@c0025). (10) Hiệu quả nước ngâm châu: Lộ thủy (nước lộ sớm) > Tuyết thủy (tuyết nấu tan) > Tuyền thủy (nước suối) — phân cấp xác nhận @c0031. (11) LAI LỊCH THẬT (@c0047): Thạch Châu là nơi ẩn náu của Tư Đồ Nam — cường giả lục cấp Chu Tước Quốc bị truy sát thân hủy; tinh hoa nguyên anh sót lại chui vào châu. Tư Đồ Nam dùng tinh hoa nguyên anh trợ giúp VL củng cố tu vi suốt gần 30 năm. ĐIỀU KIỆN NHẬN CHỦ: đủ ngũ hành linh căn + tu vi ≥ Anh Biến kỳ. (12) MỘC GIAI (@c0085): Châu phát triển 3 lá Mộc giai (trước đó đã có 2 lá). (13) HẮC QUANG (@c0088): Lần đầu phát hắc quang bên trong Quyết Minh Cốc — dấu hiệu Mộc giai 3 lá hoạt động. Cự Ma tộc đang tìm kiếm 'Nghịch Thiên Châu' @c0083. (14) LÁ 3 + LÁ 5 (@c0112): Khi hấp thu linh khí Phần Kim Quả và Phần Kim đằng, lá cây thứ ba ngưng thành thực thể, sau đó xuất hiện phiến lá thứ năm. (15) HỎA THUỘC TÍNH ĐẠI VIÊN MÃN (@c0116): Châu tự phá ra khỏi huyệt đạo VL, hấp thu toàn bộ nguyên anh hỏa thuộc tính của Thú tổ hỏa linh thú; đạt Hỏa thuộc tính Đại viên mãn — bề ngoài xuất hiện hoa văn lửa đỏ rực phủ ngoài hoa văn mây. (16) NĂM LÁ NGŨ HÀNH (@c0117): Trên châu hiện năm lá — thuộc tính Thủy và Hỏa đã viên mãn, Mộc mới được một nửa, còn thiếu Kim và Thổ; phải đủ ngũ hành châu mới phát uy lực chính thức, hiện vẫn chỉ dùng để khai mở Mộng Cảnh không gian.",
      nguon: ["@c0008", "@c0009", "@c0010", "@c0011", "@c0012", "@c0014", "@c0016", "@c0020", "@c0023", "@c0024", "@c0025", "@c0031", "@c0046", "@c0047", "@c0083", "@c0085", "@c0088", "@c0102", "@c0110", "@c0112", "@c0116", "@c0117"]
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
      soHuu: [],
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
      trangThai: "Tế luyện thành công bản mệnh pháp bảo @c0071; @c0117 thiết phiến mòn được luyện tan thành thiết thủy, bản thể tiểu kiếm xanh biếc của VL đoạt xá vào thân kiếm đen (của sư huynh Tôn Hữu Tài) thành phi kiếm mới; biến dạng khi đánh hỏa linh thú @c0118",
      blurb: "Phi kiếm cổ quái nguyên của Bạch Triển. Đặc tính dị thường: phun hư ảnh đỏ khi phản công, thuấn di tức thời, màu sắc biến đổi theo uy lực. Linh tính mạnh kháng cự tế luyện của chủ mới. Vương Lâm đoạt được sau khi diệt Bạch Triển (@c0068); tế luyện thành công bản mệnh phi kiếm bằng Huyết Luyện thuật @c0071. @c0117: thiết phiến (vỏ kiếm dùng nhiều đã mòn) được luyện tan thành thiết thủy; bản thể tiểu kiếm xanh biếc của VL đoạt xá vào thân thanh kiếm đen của sư huynh Tôn Hữu Tài, hợp thành phi kiếm mới. @c0118: kiếm biến dạng trong chiến đấu đại quân hỏa thú.",
      detail: "Phi kiếm ngoại hình cổ quái — chưa mô tả rõ hình dạng cụ thể. Khi chiến đấu: có thể phun ra hư ảnh đỏ để phản công độc lập; có khả năng thuấn di tức thời (dịch chuyển bất ngờ); màu sắc biến đổi theo mức uy lực sử dụng (@c0067). Linh tính rất mạnh — kháng cự tế luyện của Vương Lâm dữ dội tại Đằng Gia thành (@c0070). Cơ chế màu sắc và thuấn di có liên hệ với nhau (VL mới phát hiện @c0070). Tư Đồ Nam đánh giá vỏ kiếm đen mới là bảo bối chính, phi kiếm chỉ là thứ yếu (@c0068). @c0071: VL dùng Huyết Luyện thuật nhỏ máu lên kiếm, vượt qua kháng cự, phi kiếm đổi màu đen nhánh và chính thức thành bản mệnh pháp bảo. @c0117: VL luyện phi kiếm mới theo cách đoạt xá thấp nhất — thiết phiến (vỏ kiếm đã mòn nửa, chứa ma đầu) bị làm tan thành thiết thủy; hư ảnh tiểu kiếm xanh biếc (bản thể phi kiếm của VL) tách ra rồi dung nhập vào thân thanh phi kiếm màu đen của sư huynh Tôn Hữu Tài, hợp thành phi kiếm mới (tốc độ nhỉnh hơn thiết phiến nhưng còn kém thời ở Triệu quốc); ma đầu cũng chuyển từ thiết phiến sang ký thân phi kiếm đen này. @c0118: trong chiến đấu đại quân hỏa linh thú, phi kiếm mới bị biến dạng do còn là kiếm linh ký thân chưa tế luyện kỹ.",
      nguon: ["@c0067", "@c0068", "@c0070", "@c0071", "@c0117", "@c0118"]
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
    },
    {
      id: "thien-huyen-bien",
      name: "Thiên Huyễn Biến",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Huyễn thuật",
      phamCap: "Ngũ cấp tu chân quốc cấp (Huyễn thành, 3 cấp: Nguyên Anh → Anh Biến kỳ)",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu (xuất xứ chưa nêu rõ cách đắc thủ)",
      blurb: "Pháp bảo từ Huyễn thành ngũ cấp tu chân quốc. Có 3 cấp ngụy tạo tu vi: Nguyên Anh → Nguyên Anh trung kỳ → Anh Biến kỳ; tu vi giả tăng dần từng bước. VL dùng giả Nguyên Anh trung kỳ khiêu chiến Đằng Hóa Nguyên @c0098. Lâm Dịch nhận ra xuất xứ ngay lập tức.",
      detail: "Thiên Huyễn Biến là pháp bảo huyễn thuật cấp ngũ cấp tu chân quốc, xuất xứ Huyễn thành @c0098. Lâm Dịch nhận ra xuất xứ khi VL thi triển trước đám đông. Cơ chế: tu vi biểu hiện tăng dần qua 3 cấp (Nguyên Anh sơ → trung → Anh Biến kỳ), mỗi cấp phô diễn đủ lâu để gây kinh ngạc. Trận pháp Quyết Minh Cốc phong ấn Kết Đan kỳ+ vào trong — nên không ai vào xác minh thực lực VL được @c0098.",
      nguon: ["@c0098", "@c0100"]
    },
    {
      id: "hon-phien",
      name: "Hồn Phiên (Đằng Hóa Nguyên)",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Hồn phách",
      phamCap: "Đại kỳ Nguyên Anh kỳ (cao 7 thước)",
      soHuu: ["dang-hoa-nguyen"],
      trangThai: "Đằng Hóa Nguyên đang sở hữu và sử dụng @c0099",
      blurb: "Đại kỳ cao 7 thước của Đằng Hóa Nguyên; bên trong chứa âm phong và vô số mặt người thống khổ — tổng cộng 3 vạn tinh hồn. Kèm tiểu kỳ đen có thể tiêu diệt linh hồn. ĐHN dùng để tấn công pháp bảo A Ngốc @c0099 và nuốt dần chân tay VL @c0100.",
      detail: "Hồn Phiên là đại kỳ 7 thước, bên ngoài là áo giáp âm phong, bên trong hiện rõ vô số khuôn mặt người thống khổ = 3 vạn tinh hồn @c0097. Tiểu kỳ đen đi kèm có công năng tiêu diệt linh hồn @c0099. Luyện Hồn Tông tại Bì Lô quốc (ngũ cấp tu chân quốc) có trấn phái chi bảo là Hồn Phiên ẩn hơn 10 triệu hồn phách, tạo hàng ngàn năm — phiên bản của ĐHN nhỏ hơn nhiều @c0099. ĐHN dùng Hồn Phiên nuốt dần tay trái và hai chân VL; VL phải tự nổ thân mới thoát @c0100.",
      nguon: ["@c0097", "@c0099", "@c0100"]
    },
    {
      id: "thien-loi-phong-hoa-tan",
      name: "Thiên Lôi Phong Hỏa tán",
      cn: "",
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Trọng bảo",
      phamCap: "Trọng bảo (Vô Phong Cốc cấp)",
      soHuu: ["vo-phong-coc-lao-nhan"],
      trangThai: "Bị đóng băng hóa tượng cùng chủ nhân @c0092; tình trạng sau đó chưa rõ",
      blurb: "Trọng bảo của Vô Phong Cốc — dạng tiểu tán ~3 tấc, tranh vẽ ngọn lửa. Phát kim quang + gió cổ quái + ngọn lửa vàng khi kích hoạt. Bị VL dùng Mễ Lạp đóng băng hóa tượng cùng chủ nhân @c0092.",
      detail: "Thiên Lôi Phong Hỏa tán là tiểu tán (dạng quạt ~3 tấc), hình vẽ ngọn lửa, là trọng bảo sở trường của lão nhân giả đan Vô Phong Cốc @c0092. Khi kích hoạt phát ra kim quang + luồng gió cổ quái + ngọn lửa vàng. Bị VL kích nổ Mễ Lạp (sóng băng lam 300 thước+) đóng băng hóa tượng cùng lão nhân và 17 đệ tử Vô Phong Cốc ngay lúc chuẩn bị tấn công. Tên biến thể: có thể ghi là 'tán' hoặc 'ô' tùy bản dịch.",
      nguon: ["@c0092"]
    },
    {
      id: "lenh-bai-quyet-minh-coc",
      name: "Lệnh bài Quyết Minh Cốc",
      cn: "",
      category: "khac",
      categoryLabel: "Vật phẩm — Tư cách",
      phamCap: "Vật phẩm tư cách",
      soHuu: ["vuong-lam"],
      trangThai: "VL từng giữ 1 lệnh bài (bóp nát 4, giữ 1); bị ĐHN hủy @c0100",
      blurb: "Lệnh bài xác nhận tư cách vào Vực Ngoại chiến trường tại Quyết Minh Cốc. Tổng 7 lệnh bài được phân bổ; chỉ 3 danh ngạch vào Vực Ngoại. Khi thông đạo mở mà còn >3 lệnh bài chưa hủy thì Triệu quốc mất tư cách.",
      detail: "Hệ thống lệnh bài Quyết Minh Cốc: tổng 7 lệnh bài, chỉ 3 danh ngạch vào Vực Ngoại chiến trường @c0092. VL thu được 2 lệnh bài @c0091, thêm 2 @c0092, thêm 1 từ Liễu Mi @c0093 — tổng 5; bóp nát 4, giữ 1 @c0093. Điều kiện duy trì tư cách: khi thông đạo mở không được còn >3 lệnh bài chưa hủy, nếu không mất tư cách @c0100. Đằng Hóa Nguyên hủy lệnh bài cuối cùng của VL trong trận chiến @c0100 — VL mất tư cách chính thức.",
      nguon: ["@c0091", "@c0092", "@c0093", "@c0100"]
    },
    {
      id: "con-thoi-do",
      name: "Con thoi đỏ",
      cn: "",
      aliases: [],
      category: "phap-bao",
      categoryLabel: "Pháp bảo phi hành",
      phamCap: "Chưa rõ (dùng được ở cấp Kết Đan kỳ trở lên)",
      soHuu: ["ma-luong"],
      trangThai: "Bị cường giả Cự Ma tộc (Anh Biến kỳ) tước đoạt @c0101",
      blurb: "Pháp bảo phi hành tốc độ cao của Mã Lương (Chiến Thần Điện, Hỏa Phần quốc). Dùng truy đuổi hạt châu Cự Ma tộc suốt ba ngày liên tục mà không kịp. Bị cường giả Cự Ma tộc Anh Biến kỳ tước đoạt. (@c0101)",
      detail: "Con thoi đỏ là pháp bảo phi hành của Mã Lương, tu sĩ Chiến Thần Điện từ Hỏa Phần quốc @c0101. Sau khi cường giả Cự Ma tộc (Anh Biến kỳ) xuất hiện tại Triệu quốc để thu hồi hạt châu, Mã Lương dùng con thoi đỏ truy đuổi suốt ba ngày nhưng không theo kịp — tốc độ pháp bảo thua xa cường giả Anh Biến kỳ. Cường giả sau đó tước đoạt con thoi đỏ @c0101. Số phận tiếp theo của pháp bảo này chưa được nguyên tác mô tả.",
      nguon: ["@c0101"]
    },
    {
      id: "qui-giap-huyen-diet-tran",
      name: "Qui Giáp Huyền Diệt Trận",
      cn: "",
      aliases: [],
      category: "phap-bao",
      categoryLabel: "Trận pháp phòng ngự",
      phamCap: "Chưa rõ (dùng được với linh thạch trung phẩm)",
      soHuu: ["vuong-lam"],
      trangThai: "VL đang nắm giữ; đã dùng ~21 bộ khi vượt truyền tống trận @c0108",
      blurb: "Trận pháp phòng ngự VL tự bố trí theo bản ghi chép trận pháp cơ bản nhặt được trong khe nứt không gian. Trận không có tính công kích nhưng lực phòng ngự rất cao; mỗi bộ gồm 49 ký hiệu, tiêu tốn khoảng 60–70 linh thạch trung phẩm, kích hoạt bằng cách nhấn trận nhãn vào mi tâm. VL thử nghiệm hai bộ trong khe nứt @c0107, rồi triển khai khoảng 21 bộ (~1000 ký hiệu) trong giây đầu tiên vượt truyền tống trận để chắn lực hủy diệt @c0108.",
      detail: "VL học cách bố trí trận từ bản ghi chép trận pháp cơ bản tìm thấy trong khe nứt không gian, dùng linh thạch trung phẩm lấy từ ba túi trữ vật (Mã Lương, Hứa Hạo, Cát Dương) làm nguyên liệu @c0107. Nguyên tác nêu rõ trận không có tính công kích, song lực phòng ngự rất cao. Cơ chế: mỗi bộ 49 ký hiệu, tiêu hao khoảng 60–70 linh thạch trung phẩm; kích hoạt bằng cách ép trận nhãn vào mi tâm @c0107. VL thiết lập hai bộ thử nghiệm trong khe nứt (khoảng 70 linh thạch bộ đầu, khoảng 60 bộ sau) @c0107. Khi vượt truyền tống trận: trong giây đầu tiên VL triển khai khoảng 21 bộ (~1000 ký hiệu) @c0108 để dựng lớp chắn phòng ngự, tranh thủ thời gian trong 3 giây quyết định.",
      nguon: ["@c0107", "@c0108"]
    },
    {
      id: "ngoc-phu-chien-truong",
      name: "Ngọc Phù Chiến Trường Ngoại Vực",
      cn: "",
      aliases: ["ngọc phù ngoại vực"],
      category: "khac",
      categoryLabel: "Vật phẩm — Tư cách",
      phamCap: "Vật phẩm tư cách",
      soHuu: ["ma-luong"],
      trangThai: "VL (trong thân Mã Lương) thu từ túi trữ vật Mã Lương @c0107; hiện VL giữ",
      blurb: "Ngọc phù xác nhận tư cách tham gia chiến trường ngoại vực — phát cho tu sĩ mỗi chu kỳ 50 năm. Chu kỳ: 50 năm; tỷ lệ sống sót khoảng 30%; dung nhan người tham gia được bảo toàn bên trong bất kể thời gian trôi qua bên ngoài. (@c0101, @c0107)",
      detail: "Chiến trường ngoại vực (khác với Vực Ngoại chiến trường của Triệu quốc) có chu kỳ 50 năm @c0101. Tu sĩ tham gia nhận ngọc phù; tỷ lệ sống sót chỉ khoảng 30%; dung nhan được bảo toàn bên trong bất kể thời gian bên ngoài trôi qua — đặc điểm quan trọng vì người trẻ tuổi sợ mất đi vẻ ngoài @c0101. Ngọc phù Mã Lương nằm trong túi trữ vật của hắn, VL thu lại sau khi đoạt xá @c0107. Đây là một trong những vật phẩm tư cách quan trọng tại Hỏa Phần quốc.",
      nguon: ["@c0101", "@c0107"]
    },
    {
      id: "ma-dau",
      name: "Ma Đầu",
      cn: "",
      aliases: ["Ma Đầu Trúc Cơ hậu kỳ đỉnh giả đan"],
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Ma vật",
      phamCap: "Trúc Cơ hậu kỳ đỉnh giả đan (tu vi tương đương)",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu và sử dụng từ @c0112",
      blurb: "Pháp bảo ma đạo tự chế từ nguyên thần Hứa Lập Quốc. VL hủy ý thức Hứa Lập Quốc, ép phần nguyên thần còn lại liên tục thôn phệ hồn phách dã thú cho đến khi tạo thành hào quang ám hồng — Ma Đầu ra đời, ra lệnh ẩn vào thiết phiến. Tới @c0117 Ma Đầu hồi phục tới Trúc Cơ hậu kỳ đỉnh, tiến giả đan; từng chống lệnh nên bị VL trừng phạt, khuất phục lại. (@c0112, @c0117)",
      detail: "Tạo từ nguyên thần Hứa Lập Quốc (Thiên Cương Tông, sinh thời Nguyên Anh kỳ) sau khi ý thức bị hủy. VL ép nguyên thần thôn phệ hồn phách dã thú liên tục; khi hào quang ám hồng (lệ khí nồng đậm) xuất hiện thì quá trình hoàn tất, rồi ra lệnh Ma Đầu ẩn vào thiết phiến @c0112. Tại @c0116 Ma Đầu được triệu hồi nhưng chống lệnh khiêu chiến; @c0117 VL dùng Cực cảnh thần thức và Dẫn Lực thuật khuất phục, thu lại quyền kiểm soát — lúc này Ma Đầu đã hồi phục Trúc Cơ hậu kỳ đỉnh, tiến vào giả đan. Việc tự chế ma đầu đánh dấu bước ngoặt VL chấp nhận thủ đoạn ma đạo.",
      nguon: ["@c0112", "@c0117"]
    },
    {
      id: "phan-kim-qua",
      name: "Phần Kim Quả",
      cn: "",
      aliases: [],
      category: "duoc-lieu",
      categoryLabel: "Dược liệu",
      phamCap: "Dược liệu quý — chủ dược của Dung Linh Đan",
      soHuu: ["vuong-lam"],
      trangThai: "VL thu hái tại Phần Kim sơn mạch rồi cho Nghịch Thiên Châu hấp thu @c0111–@c0112",
      blurb: "Dược quả tử sắc ở Phần Kim sơn mạch (Hỏa Phần Quốc): thành thục sau ba ngày, mỗi năm tối đa khoảng mười quả; là chủ dược luyện Dung Linh Đan — đan điều hòa hỏa thuộc tính. VL không luyện đan mà thu hái (đào cả gốc Phần Kim đằng) đem cho Nghịch Thiên Châu hấp thu linh khí mộc. (@c0111, @c0112)",
      detail: "Phần Kim Quả là chủ dược của Dung Linh Đan dùng điều hòa hỏa thuộc tính, mọc tại Phần Kim sơn mạch trong Hỏa Phần Quốc; quả tử sắc, thành thục ba ngày, sản lượng tối đa chừng mười quả mỗi năm nên tứ đại tông phái phải chia nhau hái @c0111. VL hái quả và đào cả gốc Phần Kim đằng (gốc rời sẽ chết trong hai canh giờ) vác trên vai vì không thu được vào túi trữ vật. Hắn không dùng luyện đan, mà cho Nghịch Thiên Châu hấp thu linh khí mộc của quả và đằng — nhờ đó lá thứ ba của châu ngưng thành thực thể rồi xuất hiện phiến lá thứ năm @c0112.",
      nguon: ["@c0111", "@c0112"]
    },
    {
      id: "phien-ung-lo",
      name: "Phiên Ưng lô",
      cn: "",
      aliases: ["Phiên Ưng lò"],
      category: "linh-khi",
      categoryLabel: "Linh khí — Khí cụ luyện khí",
      phamCap: "Cửu phẩm (phân thập phẩm; cửu phẩm cực hiếm) @c0127",
      soHuu: ["vuong-lam"],
      trangThai: "VL đúc thành Phiên Ưng Lô cửu phẩm từ sọ hoang thú trong Cốt Hải @c0127; đang sở hữu",
      blurb: "Khí cụ luyện khí trọng yếu của Chiến Thần Điện, dùng kích thích thuộc tính bản nguyên của tài liệu trong quy trình Điều-Dung-Hợp. Yêu cầu khắt khe: thân lô phải làm từ đầu lâu linh thú (đầu lâu hoang thú cho phẩm cao nhất). VL thử chế thất bại @c0117, sau đó đúc thành công Phiên Ưng Lô cửu phẩm từ sọ một hoang thú hiếm tìm trong Cốt Hải @c0127.",
      detail: "Phiên Ưng lô là khí cụ then chốt của luyện khí thuật Chiến Thần Điện (ba quá trình Điều — Dung — Hợp), kích thích thuộc tính bản nguyên của tài liệu thay cho linh hỏa/lò luyện/khắc trận thông thường. Phân thập phẩm (thập phẩm cao nhất); thân lô bắt buộc làm từ đầu lâu linh thú, đầu lâu hoang thú cho tỷ lệ phẩm cao nhất. Vương Lâm thử chế thất bại lần đầu @c0117. Tại Cốt Hải (đáy Thi Cốc), sau hơn trăm lần thất bại, hắn tìm được sọ một hoang thú cực hiếm và đúc thành Phiên Ưng Lô cửu phẩm — cực kỳ hiếm (điện chủ Luyện Khí điện Nguyên Anh kỳ cũng chỉ có lô lục phẩm) @c0127.",
      nguon: ["@c0117", "@c0127"]
    },
    {
      id: "ngoc-phu-bao-menh-nguyen-anh",
      name: "Ngọc Phù Bảo Mệnh Cấp Nguyên Anh",
      cn: "",
      aliases: ["ngọc phù bảo mệnh"],
      category: "tien-phu",
      categoryLabel: "Tiên phù — Bảo mệnh",
      phamCap: "Cấp Nguyên Anh (bảo vật quý hiếm)",
      soHuu: ["vuong-lam"],
      trangThai: "VL nhận từ Dương Sâm @c0119; đang sở hữu",
      blurb: "Ngọc phù bảo mệnh cực phẩm do Dương Sâm (Nguyên Anh trung kỳ Chiến Thần Điện) tặng VL khi Phượng Loan thu VL làm ký danh đệ tử. Khi kích hoạt, phát huy lực lượng phòng ngự tương đương Nguyên Anh kỳ — bảo vật phòng thân quý giá đối với tu sĩ Trúc Cơ. (@c0119)",
      detail: "Tiên phù một lần dùng cấp Nguyên Anh do Dương Sâm đích thân tặng VL tại sự kiện Phượng Loan thu ký danh đệ tử @c0119. Đây là bảo vật bảo mệnh cực kỳ quý hiếm đối với tu sĩ Trúc Cơ — sức mạnh phòng thủ vượt hẳn cảnh giới của VL. Dương Sâm cúi chào và tặng phẩm vật này như thể hiện tôn trọng đạo lữ của mình.",
      nguon: ["@c0119"]
    },
    {
      id: "bo-anh-dan",
      name: "Bổ Anh đan",
      cn: "",
      aliases: [],
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Đan dược bù linh lực cho Nguyên Anh kỳ",
      soHuu: [],
      trangThai: "Lạc Hà Môn dùng để đổi lấy quyền giữ thân thể của nguyên anh tán tu nhập trận @c0120",
      blurb: "Đan dược có thể bù lại khoảng trăm năm linh lực cho tu sĩ Nguyên Anh kỳ. Trong trận Tỏa Quốc, các nguyên anh tán tu và gia tộc phải xuất nguyên anh nhập trận, giao thân thể cho Lạc Hà Môn trông giữ; đổi lại Lạc Hà Môn trả mỗi người một viên Bổ Anh đan. Vương Lâm KHÔNG nhận đan này. (@c0120)",
      detail: "Khi tứ đại tông phái khởi Tỏa Quốc đại trận phong tỏa Hỏa Phần quốc, các tu sĩ Nguyên Anh kỳ thuộc tán tu và gia tộc phải xuất nguyên anh nhập 'vụ hoàn' của trận, để lại nhục thân. Thân thể của họ được giao cho Lạc Hà Môn bảo quản; bù lại Lạc Hà Môn cấp mỗi người một viên Bổ Anh đan — đan bù được khoảng một trăm năm linh lực hao tổn @c0120.",
      nguon: ["@c0120"]
    },
    {
      id: "ngu-thai-phuong-xa",
      name: "Ngũ Thải Phượng Xa",
      cn: "",
      aliases: ["Ngũ thải phượng xa"],
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Phi hành",
      phamCap: "Nguyên Anh kỳ (sở hữu bởi lão tổ Nguyên Anh sơ kỳ)",
      soHuu: ["phuong-loan"],
      trangThai: "Phượng Loan đang sở hữu và sử dụng",
      blurb: "Pháp bảo phi hành hình phượng hoàng ngũ sắc của Phượng Loan (lão tổ Nguyên Anh sơ kỳ Chiến Thần Điện). Dùng để di chuyển và làm vũ khí phòng thủ — Phượng Loan triệu xuất để chặn Chu Cẩn khi hắn xông ra tấn công VL @c0119. (@c0119)",
      detail: "Phượng Loan triệu xuất Ngũ Thải Phượng Xa tại sự kiện thu ký danh đệ tử @c0119 — đây là công cụ di chuyển cá nhân của bà, đồng thời thể hiện sức mạnh đủ để áp chế Chu Cẩn (Nguyên Anh sơ kỳ đồng cấp). Hình dáng và công năng cụ thể ngoài phi hành và uy hiếp đồng cấp chưa được mô tả thêm.",
      nguon: ["@c0119"]
    },
    {
      id: "thien-ly-dan",
      name: "Thiên Ly đan",
      cn: "",
      aliases: [],
      category: "dan-duoc",
      categoryLabel: "Đan dược",
      phamCap: "Trân phẩm linh đan (tăng tỷ lệ kết đan)",
      soHuu: ["vuong-lam", "ly-mo-uyen"],
      trangThai: "Lý Mộ Uyển luyện thành thành phẩm giúp VL kết đan @c0127",
      blurb: "Trân phẩm linh đan của Hỏa Phần quốc, toàn quốc còn không quá ba mươi viên; tăng tỷ lệ kết đan thành công và củng cố căn cơ cho tu sĩ Kết Đan kỳ. Là phần thưởng treo cho người lập nhiều quân công nhất trong chiến tranh.",
      detail: "Thiên Ly đan của Lạc Hà Môn chỉ làm dạng bán thành phẩm, tế luyện thêm nửa canh giờ là hoàn thiện; khi hoàn chỉnh không tiện cất giữ, phải dùng trong một năm kẻo hao dược hiệu. Dược liệu quan trọng nhất là Ma Huyết đằng; luyện bằng đan lô thường chỉ có nửa xác suất thành công, cần Thiên Địa dong lô hoặc đan lô phẩm cao. Lý Mộ Uyển dùng Bách Thú Linh Lô và Ma Huyết đằng luyện thành công (lần hai) giúp Vương Lâm trùng kích kết đan @c0123, @c0126, @c0127.",
      nguon: ["@c0121", "@c0123", "@c0126", "@c0127"]
    },
    {
      id: "long-can",
      name: "Long cân (giao long cân)",
      cn: "",
      aliases: ["giao cân"],
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Chế từ giao cân (trung phẩm linh thú)",
      soHuu: ["vuong-lam"],
      trangThai: "VL tế luyện, hóa kim hoàng sắc; trú thể của ma đầu; đang sử dụng @c0127–@c0130",
      blurb: "Gân con giao long sau khi tế luyện hóa màu kim hoàng — vật thần kỳ thứ ba trên thân giao long (sau cốt tủy và giao đan). Có thể phóng to/thu nhỏ tùy tâm, tự phân thành vô số nhánh, đầu cuối bung dây kim sắc trói buộc.",
      detail: "Giao cân là một trong ba bảo vật quý nhất của giao long; nếu được luyện khí sư tế luyện thì có thể phóng to thu nhỏ và phân thành vô số đoạn @c0126. Vương Lâm dùng làm trú thể mới cho ma đầu (long cân hóa kim hoàng sắc) @c0127. Trong truy sát, hắn dùng long cân tự phân nhiều nhánh cuốn kéo hàng loạt thi thể Kết Đan kỳ — có lúc trói hơn nghìn thi thể @c0128–@c0130. Nhược điểm: dễ bị phi kiếm sắc hoặc hỏa thuật phá.",
      nguon: ["@c0126", "@c0127", "@c0128", "@c0129", "@c0130"]
    },
    {
      id: "thuy-tinh-phi-kiem",
      name: "Thủy Tinh phi kiếm",
      cn: "",
      aliases: [],
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Phi kiếm",
      phamCap: "Phi kiếm hiếm (luyện khí thuật Chiến Thần Điện)",
      soHuu: ["vuong-lam"],
      trangThai: "VL luyện cho kiếm linh, nuốt vào người @c0127; đang sử dụng",
      blurb: "Phi kiếm mới Vương Lâm luyện cho kiếm linh theo luyện khí thuật Chiến Thần Điện — trong suốt như thủy tinh, cực sắc bén, hiếm có. Thay cho phôi thể cũ đã hỏng của phi kiếm đen.",
      detail: "Vương Lâm dùng các tài liệu Kê Huyết thạch, Tử Nguyệt đằng, Thiên Cương mộc qua ba bước Điều - Dung - Hợp (dung 35 thanh phi kiếm + giao long cân), nhập hư ảnh kiếm linh và thần thức để luyện thành Thủy Tinh phi kiếm @c0127. Nuốt vào người để điều khiển; một đạo tinh quang của nó phóng xa ngoài trăm dặm, xuyên ngực địch trong chớp mắt @c0128, @c0130.",
      nguon: ["@c0127", "@c0128", "@c0130"]
    },
    {
      id: "bach-thu-linh-lo",
      name: "Bách Thú Linh Lô",
      cn: "",
      aliases: [],
      category: "linh-khi",
      categoryLabel: "Linh khí — Đan lô",
      phamCap: "Ngũ phẩm",
      soHuu: ["vuong-lam", "ly-mo-uyen"],
      trangThai: "VL đổi giao long bì giáp lấy tại Nam Đẩu thành @c0127",
      blurb: "Đan lô luyện từ 99 hạ phẩm nội đan linh thú, có thể hấp đan khí linh thú để tăng phẩm đan; giá mười vạn thượng phẩm linh thạch. Vương Lâm đổi bằng một đoạn giao long bì giáp để Lý Mộ Uyển luyện Thiên Ly đan thành phẩm.",
      detail: "Bách Thú Linh Lô ngũ phẩm được bán tại Luyện Khí Các Nam Đẩu thành. Vương Lâm cần đan lô tứ phẩm trở lên để luyện Thiên Ly đan an toàn (đan lô của Lý Mộ Uyển chỉ nhị phẩm) nên đổi bằng giao long bì giáp dài hơn nghìn trượng @c0127. Chính nhờ đan lô này Lý Mộ Uyển luyện kịp Thiên Ly đan giúp Vương Lâm kết đan; cũng là lý do Đấu Tà phái truy sát hắn để cướp lô.",
      nguon: ["@c0127"]
    },
    {
      id: "van-ma-bach-nhat-tru-sat-lenh",
      name: "Vạn Ma Bách Nhật Tru Sát Lệnh",
      cn: "",
      aliases: ["Vạn Ma Bạch Nhật Tru Sát Lệnh"],
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Lệnh bài thượng cổ",
      phamCap: "Pháp bảo cấp cao Tu Ma nội hải (thượng cổ, tuyệt tích)",
      soHuu: [],
      trangThai: "Lệnh bài của Tiễn Khôn vỡ khi hắn chết, kích hoạt chữ 'Diệt' truy sát Vương Lâm @c0129",
      blurb: "Lệnh bài thượng cổ nổi danh nhất Tu Ma Hải, phương pháp luyện chế đã tuyệt tích, toàn vùng còn không hơn mười khối. Khi kích hoạt, kết thành chữ 'Diệt'/'Tru' đỏ tươi treo trên đầu mục tiêu, biến mục tiêu thành đối tượng truy sát toàn vùng trong trăm ngày.",
      detail: "Cơ chế: mở lệnh phải hy sinh tính mạng một Kết Đan kỳ tu sĩ trở lên; ai giết được kẻ bị treo lệnh trong vòng trăm ngày sẽ đoạt toàn bộ tu vi của kẻ đó (luyện thành tu đan); nếu mục tiêu vượt qua trăm ngày vô sự thì giữ được tu vi (và nuốt tu đan của người mở lệnh). Vì hiệu quả này, tu sĩ thấy người bị treo lệnh thường lao tới chém giết. Tiễn Khôn vô ý đạt được, tế luyện thành chí bảo; khi hắn bị Vương Lâm giết, lệnh bài vỡ và kết thành chữ 'Diệt' treo trên đầu Vương Lâm — biến hắn thành mục tiêu truy sát khắp Tu Ma Hải @c0128, @c0129.",
      nguon: ["@c0128", "@c0129"]
    },
    {
      id: "dien-hon-ky",
      name: "Diện Hồn kỳ",
      cn: "",
      aliases: [],
      category: "phap-bao",
      categoryLabel: "Pháp bảo",
      phamCap: "Chưa phân hạng",
      soHuu: ["vuong-lam"],
      trangThai: "VL sở hữu; phong ấn hơn trăm linh hồn @c0125",
      blurb: "Tiểu kỳ phong ấn linh hồn — bên trong giam hơn trăm linh hồn tu sĩ Tu Ma Hải (gồm Tang Mộc Nhai). Vương Lâm dùng làm nguồn tin và nuôi dưỡng ma đầu.",
      detail: "Vương Lâm dùng Diện Hồn kỳ phong ấn linh hồn Tang Mộc Nhai cùng hơn trăm linh hồn khác @c0125; khai thác lời khai để nắm tình hình Tu Ma Hải, Đấu Tà phái và Thi Cốc. Hắn cũng rút hồn phách từ kỳ này (phần lớn là đệ tử Đấu Tà phái) để đút cho ma đầu trong quá trình nuôi dưỡng @c0126.",
      nguon: ["@c0125", "@c0126"]
    },
    {
      id: "giao-long-bi-giap",
      name: "Giao long bì giáp (nội giáp)",
      cn: "",
      aliases: [],
      category: "than-khi",
      categoryLabel: "Thần khí — Phòng ngự",
      phamCap: "Chế từ da trung phẩm linh thú giao long",
      soHuu: ["vuong-lam", "ly-mo-uyen"],
      trangThai: "Lý Mộ Uyển chế hai bộ; VL mặc một bộ, một đoạn dài dùng đổi Bách Thú Linh Lô @c0126–@c0127",
      blurb: "Nội giáp chế từ da con giao long (trung phẩm linh thú) — phòng ngự mạnh, có khả năng tự khôi phục. Lý Mộ Uyển lột da giao long làm hai bộ; Vương Lâm mặc một bộ, một đoạn da dài hơn nghìn trượng được đem đổi lấy Bách Thú Linh Lô.",
      detail: "Lý Mộ Uyển mất một tháng dùng phi kiếm lột da giao long, chế thành hai bộ nội giáp; Vương Lâm mặc một bộ, đưa bộ còn lại cho nàng @c0126. Phòng ngự mạnh tới mức khi VL trúng phù văn vẫn chỉ lõm sâu rồi phun máu chứ không thủng. Một đoạn giao long bì giáp dài hơn nghìn trượng được VL đổi lấy Bách Thú Linh Lô ngũ phẩm tại Nam Đẩu thành @c0127.",
      nguon: ["@c0126", "@c0127"]
    },
    {
      id: "giao-long-bao-vat",
      name: "Bảo vật giao long (giao đan, cốt tủy)",
      cn: "",
      aliases: [],
      category: "nguyen-lieu",
      categoryLabel: "Nguyên liệu — Bộ phận linh thú",
      phamCap: "Bộ phận trung phẩm linh thú giao long",
      soHuu: ["vuong-lam", "ly-mo-uyen"],
      trangThai: "Thu từ thi thể giao long; cốt tủy + giao đan VL giữ, chờ dong lô tốt luyện chế @c0126",
      blurb: "Thi thể con giao long Vương Lâm kéo về từ Thi Cốc là cả kho bảo vật: giao đan (nội đan trong đầu — thiên niên đan dược tăng tu vi), cốt tủy (quý nhất), giao cốt (mắt trận), da (chế nội giáp), giao cân (luyện thành long cân).",
      detail: "Giao long là linh thú thực lực sánh ngang Nguyên Anh hậu kỳ, thân thể hoàn toàn là bảo vật. Trong đầu có giao đan (thiên niên đan dược, luyện thành đan tăng tu vi); quý nhất là cốt tủy (chất lượng do tuổi thọ quyết định; khi giao long lột xác hóa long thì cốt tủy hóa long đan). Lý Mộ Uyển giao toàn bộ cốt tủy cho Vương Lâm vì sợ luyện thất bại lãng phí; giao đan để dành chờ dong lô tốt mới luyện chế @c0126.",
      nguon: ["@c0125", "@c0126"]
    },
    {
      id: "hoa-truc",
      name: "Họa trục (cuộn tranh phong ấn)",
      cn: "",
      aliases: [],
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Phong ấn",
      phamCap: "Chưa xác định",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm đang sở hữu; phong ấn chưa bị vỡ @c0134",
      blurb: "Cuộn tranh cổ Vương Lâm đoạt được từ một tu sĩ Kết Đan kỳ (đã chết), gom trong túi trữ vật của hắn. Bên trong phong ấn một linh thú tà dị với đôi mắt tam giác — Cực cảnh thần thức không khống chế được vì pháp bảo chỉ có tác dụng phong ấn.",
      detail: "Vương Lâm phát hiện cuộn tranh khi kiểm kê chiến lợi phẩm — lấy được trên người một tu sĩ Kết Đan kỳ; chủ cũ từng mở ra một nửa. Bên trong phong ấn một linh thú với đôi mắt tam giác tà dị; Cực cảnh thần thức của Vương Lâm không khống chế được nó vì cuộn tranh chỉ có công năng phong ấn @c0134.",
      nguon: ["@c0134"]
    },
    {
      id: "tho-hanh-chu",
      name: "Thổ Hành Chu",
      cn: "",
      aliases: [],
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Vận chuyển",
      phamCap: "Cao cấp — Độn Thổ thuật đẳng cấp cao",
      soHuu: ["bat-cuc-ma-quan"],
      trangThai: "Bát Cực Ma Quân đi mượn để truy đuổi Vương Lâm @c0138–@c0139",
      blurb: "Thuyền gỗ đen di chuyển dưới lòng đất theo Độn Thổ thuật đẳng cấp cao; Bát Cực Ma Quân đi mượn để truy đuổi Vương Lâm sau khi thuấn di không theo kịp dưới đất.",
      detail: "Pháp bảo vận chuyển đặc biệt — hình dạng thuyền gỗ đen, có khả năng lao từ trong đất lên bề mặt cực nhanh. Vương Lâm dùng Thổ Độn thuật chạy trốn dưới đất sâu nghìn trượng nhưng vẫn bị lão giả dùng Thổ Hành Chu đuổi kịp @c0138, @c0139.",
      nguon: ["@c0138", "@c0139"]
    },
    {
      id: "truy-tu-bay-mau",
      name: "Trùy tử bảy màu",
      cn: "",
      aliases: ["Trùy tử hình con thoi trong suốt"],
      category: "phap-bao",
      categoryLabel: "Pháp bảo — Tấn công",
      phamCap: "Cao cấp — phá được ngọc phù cấp Nguyên Anh",
      soHuu: ["bat-cuc-ma-quan"],
      trangThai: "Bát Cực Ma Quân đang sở hữu @c0139",
      blurb: "Pháp bảo tấn công của Bát Cực Ma Quân — hình con thoi trong suốt, quang mang bảy màu. Phóng dưới lòng đất, khiến bùn đất tiêu tán; khi đánh vào ngọc phù cấp Nguyên Anh của Dương Sâm gây nổ lớn dư chấn trăm trượng.",
      detail: "Trùy tử hình con thoi trong suốt với quang mang bảy màu; di chuyển dưới lòng đất và bề mặt. Ngọc phù Dương Sâm (bảo vệ được một kích Nguyên Anh kỳ) chặn được một cú rồi vỡ thành tro bụi; dư chấn khuếch tán trăm trượng khiến Vương Lâm phun máu @c0139.",
      nguon: ["@c0139"]
    },
    {
      id: "thanh-ban-mang",
      name: "Thanh Ban Mãng",
      cn: "",
      aliases: ["Thanh Ban Mãnh"],
      category: "linh-khi",
      categoryLabel: "Linh khí — Linh thú chiến đấu",
      phamCap: "Linh thú chiến đấu của Nguyên Anh kỳ",
      soHuu: ["bat-cuc-ma-quan"],
      trangThai: "Mãng xà bị Vương Lâm dùng phi kiếm chém đứt @c0139",
      blurb: "Mãng xà dài ba trượng do Bát Cực Ma Quân thả ra làm mục tiêu thử Tử Chú thuật và lập xà trận; bị phi kiếm của Vương Lâm chém đứt.",
      detail: "Bát Cực Ma Quân thả Thanh Ban Mãng ra làm mục tiêu thử xem Tử Chú thuật của Vương Lâm có thật hay không; đồng thời mãng xà lập thành xà trận vây quanh. Vương Lâm phun phi kiếm tinh quang chém đứt mãng xà @c0139.",
      nguon: ["@c0139"]
    },
    {
      id: "lap-anh-dan",
      name: "Lập Anh đan",
      cn: "",
      aliases: [],
      category: "dan-duoc",
      categoryLabel: "Đan dược — Trợ đột phá",
      phamCap: "Cực hiếm ở tam cấp tu chân quốc; chỉ ngũ cấp tu chân quốc mới nắm phương luyện chế",
      soHuu: ["vuong-lam"],
      trangThai: "Vương Lâm nhận từ Bát Cực Ma Quân theo hiệp nghị @c0140",
      blurb: "Đan dược tăng tỷ lệ thành công khi Kết Anh. Bát Cực Ma Quân trao cho Vương Lâm theo hiệp nghị — VL đồng ý hộ tống lão vào địa phương bí ẩn sắp mở đổi lấy một viên Lập Anh đan và bảo vật.",
      detail: "Lập Anh đan tăng tỷ lệ thành công khi đột phá Nguyên Anh kỳ (Kết Anh). Cực hiếm ở tam cấp tu chân quốc (Tuyên Vũ quốc, Hỏa Phần quốc, Thiên Mậu quốc), hiếm ở tứ cấp, chỉ ngũ cấp tu chân quốc mới nắm phương pháp luyện chế. Bát Cực Ma Quân ban đầu đề nghị trao Hóa đan, sau nâng lên Lập Anh đan khi Vương Lâm đòi điều kiện cao hơn @c0140.",
      nguon: ["@c0140"]
    },
    {
      id: "hoa-dan",
      name: "Hóa đan",
      cn: "",
      aliases: [],
      category: "dan-duoc",
      categoryLabel: "Đan dược — Nâng cấp tu vi",
      phamCap: "Cực trân quý",
      soHuu: [],
      trangThai: "Bát Cực Ma Quân đề nghị trao (ban đầu) nhưng VL từ chối để đổi lấy Lập Anh đan @c0140",
      blurb: "Đan dược cực trân quý, ngoài tác dụng như tu đan còn có thể nâng cao tu vi một cảnh giới: sơ kỳ lên trung kỳ xác suất lớn; trung kỳ lên hậu kỳ xác suất nhỏ; nếu thất bại vẫn khiến linh lực nhảy vọt.",
      detail: "Hóa đan là đề nghị ban đầu của Bát Cực Ma Quân để đổi lấy sự hợp tác của Vương Lâm. Hiệu quả: ngoài tác dụng tu đan thông thường, còn có thể đề cao tu vi lên một cảnh giới — xác suất lớn nếu nâng sơ kỳ → trung kỳ; xác suất nhỏ nếu trung kỳ → hậu kỳ; kể cả thất bại linh lực vẫn nhảy vọt. Vương Lâm từ chối vì chưa phải thứ hắn cần lúc này @c0140.",
      nguon: ["@c0140"]
    },
    {
      id: "anh-bien-dan",
      name: "Anh Biến đan",
      cn: "",
      aliases: [],
      category: "dan-duoc",
      categoryLabel: "Đan dược — Đột phá cảnh giới huyền thoại",
      phamCap: "Đan dược truyền thuyết",
      soHuu: [],
      trangThai: "Được cho là tồn tại trong địa phương bí ẩn sắp mở @c0140",
      blurb: "Đan dược truyền thuyết — dùng một viên có cơ hội lập tức trở thành Anh Biến kỳ cường giả. Được cho là có trong địa phương bí ẩn mà Bát Cực Ma Quân muốn dẫn Vương Lâm vào.",
      detail: "Anh Biến đan được nhắc đến như một trong những mục tiêu trong địa phương bí ẩn sắp mở @c0140. Lão giả cảnh báo nơi đó cực nguy hiểm — Nguyên Anh sơ kỳ vào là cửu tử nhất sinh; trung kỳ cần vận may; hậu kỳ/giả thần mới tương đối an toàn; bên trong có pháp bảo, đan dược, công pháp và Anh Biến đan. Cũng là mốc tu vi Vương Lâm hứa với Tư Đồ Nam sẽ đưa lão ra ngoài.",
      nguon: ["@c0133", "@c0140"]
    }
  ]
};

window.LIB_DATA["tien-nghich"].factions = {
  updatedAt: "2026-06-10",
  count: 31,
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
      capDo: "1 trong 8 đại tông phái Triệu quốc — lão tổ Nguyên Anh kỳ",
      lanhDao: "Lão tổ Tân Hải (Nguyên Anh kỳ @c0096); Hư Mi chân nhân (đệ nhất cao thủ, tóc bạc @c0097)",
      thaiThuongTruongLao: "Vô Vi chân nhân (Kết Đan kỳ @c0040)",
      trangThai: "Đang hoạt động; tổn thất nặng tại Quyết Minh Cốc — chỉ 8/25 đệ tử sống sót @c0096",
      blurb: "Một trong 8 đại tông phái chính-ma lưỡng đạo Triệu quốc. Sớm được nhắc với Vô Vi chân nhân (Kết Đan kỳ @c0040); về sau lộ lão tổ Nguyên Anh kỳ Tân Hải và đệ nhất cao thủ Hư Mi chân nhân (tóc bạc). Mất 17/25 đệ tử trong Quyết Minh Cốc @c0096; Tân Hải thề truy tìm kẻ ra tay (chính là Vương Lâm, chưa bị lộ).",
      detail: "Phiêu Miểu Tông có Vô Vi chân nhân ở Kết Đan kỳ — đề cập sớm trong hội thoại trưởng lão @c0040 cùng Vô Phong Cốc, Thiên Đạo Môn, Hợp Hoan Tông. Tới đợt Quyết Minh Cốc lộ rõ là 1 trong 8 đại tông phái: lão tổ Nguyên Anh kỳ Tân Hải dẫn 25 đệ tử (3 Trúc Cơ hậu kỳ, 8 trung kỳ, còn lại sơ kỳ) vào cốc, chỉ còn 8 người sống ra — 17 chết dưới tay Vương Lâm (Tân Hải chưa biết thủ phạm) @c0096. Hư Mi chân nhân — đệ nhất cao thủ tông, tóc bạc — theo sứ giả Lâm Dịch tới cốc khẩu mở thông đạo Vực Ngoại @c0097. Có đệ tử Chu Du @c0096.",
      thanhVien: ["Tân Hải", "Hư Mi chân nhân", "Chu Du", "Vô Vi chân nhân"],
      nguon: ["@c0040", "@c0096", "@c0097"]
    },
    {
      id: "chu-tuoc-quoc",
      name: "Chu Tước Quốc",
      cn: "",
      loai: "quoc-gia-tu-chan",
      loaiLabel: "Quốc gia tu chân",
      viTri: "Phía bắc Hỏa Phần Quốc; sở hữu Chu Tước tinh",
      capDo: "Lục cấp — ngưỡng tham gia Liên Minh Tu Chân; sở hữu Chu Tước tinh với 18 ngũ cấp quốc và 108 chiến trường ngoại vực",
      lanhDao: "Không rõ",
      trangThai: "Đang tồn tại; Hỏa Phần Quốc (tam cấp) nằm phía nam Chu Tước @c0109",
      blurb: "Lục cấp tu chân quốc — cao nhất trong hệ thống Liên Minh Tu Chân. Đã vươn từ nhất cấp lên lục cấp trong 100.000 năm và được Liên Minh ban tặng Chu Tước tinh, trực thuộc 18 ngũ cấp tu chân quốc và 108 chiến trường ngoại vực. Tư Đồ Nam từng là cường giả xuất xứ lục cấp Chu Tước Quốc, bị truy sát thân hủy @c0047.",
      detail: "Chu Tước Quốc là lục cấp tu chân quốc — ngưỡng tham gia Liên Minh Tu Chân (lục cấp + sở hữu tinh cầu @c0104). Đã trải qua hành trình nhất cấp → lục cấp mất 100.000 năm; được Liên Minh Tu Chân ban Chu Tước tinh @c0104. Trực thuộc Chu Tước tinh: 18 ngũ cấp tu chân quốc và 108 chiến trường ngoại vực @c0104. Hỏa Phần Quốc (tam cấp) nằm phía nam Chu Tước @c0109. Tư Đồ Nam từng là cường giả lục cấp — bị truy sát toàn diện, thân hủy, chỉ còn tinh hoa nguyên anh ẩn trong Nghịch Thiên Châu @c0047.",
      thanhVien: ["tu-do-nam"],
      nguon: ["@c0047", "@c0104", "@c0109"]
    },
    {
      id: "thanh-long-quoc",
      name: "Thanh Long Quốc",
      cn: "",
      loai: "quoc-gia-tu-chan",
      loaiLabel: "Quốc gia tu chân",
      viTri: "Không rõ (có thể liền kề Triệu quốc)",
      capDo: "Tứ cấp tu chân quốc (@c0104)",
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
      viTri: "Trên phạm vi nhiều quốc gia và tinh cầu",
      capDo: "Tổ chức siêu quốc gia — ngưỡng gia nhập: lục cấp + sở hữu tinh cầu",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động",
      blurb: "Liên minh tu chân quốc tế, ngưỡng gia nhập: lục cấp tu chân quốc + sở hữu một tinh cầu. Hệ thống phân cấp nhất đến lục: Triệu quốc = tam cấp; Thanh Long Quốc = tứ cấp; Cự Ma Tộc = ngũ cấp; Chu Tước Quốc = lục cấp (thành viên). (@c0104)",
      detail: "Liên Minh Tu Chân hoạt động theo hệ thống phân cấp nhất đến lục xác nhận tại @c0104. Ngưỡng gia nhập: tu chân quốc phải đạt lục cấp VÀ sở hữu ít nhất một tinh cầu @c0104. Các cấp được xác nhận: Triệu quốc = tam cấp (@c0046, @c0089); Thanh Long Quốc = tứ cấp; Cự Ma Tộc = ngũ cấp; Chu Tước Quốc = lục cấp @c0104. Chu Tước Quốc được ban Chu Tước tinh kèm 18 ngũ cấp tu chân quốc và 108 chiến trường ngoại vực trực thuộc sau khi đạt lục cấp @c0104. Tư Đồ Nam đề cập hệ thống này lần đầu @c0046.",
      thanhVien: [],
      nguon: ["@c0046", "@c0089", "@c0104"]
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
      blurb: "Tông môn ma đạo thần bí tại Triệu quốc — không ai biết số đệ tử, vị trí, số Nguyên Anh kỳ; từng có lời đồn bị diệt môn. Sơn môn ngầm dưới bình nguyên cực tây. Công pháp đặc biệt: mỗi đệ tử tế luyện một thi khôi cả đời; tu vi thi khôi tăng theo bản thân. Cơ chế bổ sung @c0081: cung cấp thân thể cho tu sĩ ngũ cấp đổi xác. Hoàng Tuyền Đạo là công pháp cốt lõi. Một trong bốn tông tà đạo tại Triệu quốc. Tại Hỏa Phần Quốc: chi nhánh Thi Âm tông hoạt động — buôn bán thân thể tươi của tán tu @c0111. Thành viên Hỏa Phần Minh @c0120.",
      detail: "Thi Âm tông tại Triệu quốc đóng vai trò trạm trung chuyển cho các tu chân quốc đẳng cấp 1–5: đệ tử Âm Tông tấn cấp đều qua nhánh này @c0080. Thực lực kém Thiên Đạo môn (ma đạo đệ nhất tông) nhưng thần bí hơn — không ai biết số đệ tử, vị trí, cao thủ Nguyên Anh kỳ bao nhiêu @c0079. Công pháp thi khôi: mỗi đệ tử cả đời chỉ tế luyện một thi thể; thành công thì thi khôi gắn bó cả đời, tu vi tăng theo bản thân; có công pháp khống chế chống phản bội @c0079. Sơn môn: bình nguyên cực tây có sương mù → chiểu trạch rộng → động khổng lồ với vô số thông đạo và động nhỏ dưới đất. Động chính: 8 cột gỗ tím + trận tiếp dẫn đo tu vi; huyệt động cột đá: 5 cột đá mỗi cột một hỏa cầu Lam Viêm Ma hỏa @c0079–@c0080. Bên trong có Địa Âm chi địa — chỗ bế quan quý giá. @c0081: cơ chế cung cấp thân thể cho tu sĩ ngũ cấp đổi xác tiết lộ; Hoàng Tuyền Đạo = công pháp cốt lõi; là 1 trong 4 tông tà đạo Triệu quốc. @c0082: giới thiệu thêm về Hoàng Tuyền Đạo. @c0111: tại Hỏa Phần Quốc, chi nhánh Thi Âm tông chuyên buôn bán thân thể tươi của tán tu; VL diệt ba tay sai tại Phần Kim sơn mạch. @c0120: Thi Âm tông là thành viên liên minh Hỏa Phần Minh (4 tông xâm lược Tuyên Vũ quốc).",
      thanhVien: ["Dạ Tự Tại", "Ngô Vũ", "Mộc Ngung"],
      nguon: ["@c0079", "@c0080", "@c0081", "@c0082", "@c0111", "@c0120"]
    },
    {
      id: "cu-ma-toc",
      name: "Cự Ma Tộc",
      cn: "",
      loai: "the-luc-ngoai",
      loaiLabel: "Thế lực bên ngoài Tu Chân Quốc",
      viTri: "Không rõ (đang hoạt động tại Triệu quốc và Vực Ngoại @c0083)",
      capDo: "Ngũ cấp — thành viên hệ thống Liên Minh Tu Chân @c0104; cường giả Anh Biến kỳ được xác nhận @c0101",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động; đã thu hồi hạt châu từ Triệu quốc @c0101 và tước đoạt con thoi đỏ Mã Lương @c0101",
      blurb: "Ngũ cấp tu chân quốc trong hệ thống Liên Minh Tu Chân — thế lực có cường giả Anh Biến kỳ. Xuất hiện tại Triệu quốc lấy Thất Thải pháp khí @c0083 và thu hồi hạt châu @c0101. Thành viên nổi bật: xác người khổng lồ Cự Ma tộc (cổ đại, trán hình búa đen) mà VL dùng tạm làm thân xác trong khe nứt @c0102. (@c0083, @c0101, @c0104)",
      detail: "Cự Ma tộc xác nhận là ngũ cấp tu chân quốc trong hệ thống Liên Minh Tu Chân — thấp hơn Chu Tước Quốc (lục cấp) và cao hơn Thanh Long Quốc (tứ cấp) @c0104. Cường giả Anh Biến kỳ: thân người khổng lồ xuất hiện tại Triệu quốc để thu hồi hạt châu @c0101; tước đoạt con thoi đỏ của Mã Lương sau 3 ngày Mã Lương truy đuổi không kịp @c0101. Hình thái đặc biệt: người khổng lồ. Tại Vực Ngoại: có xác người khổng lồ Cự Ma tộc cổ đại — trán khắc hình búa đen — mà VL ký thác linh hồn vào tạm thời trong khe nứt để rèn thần thức @c0102. Mục tiêu tìm Nghịch Thiên Châu @c0083.",
      thanhVien: [],
      nguon: ["@c0082", "@c0083", "@c0101", "@c0102", "@c0104"]
    },
    {
      id: "hop-hoan-tong",
      name: "Hợp Hoan Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn ma đạo",
      viTri: "Triệu quốc",
      capDo: "Nguyên Anh kỳ (lão tổ Trần Hoan + Trần Nghiên)",
      lanhDao: "Lão tổ Trần Hoan + Trần Nghiên (Nguyên Anh kỳ)",
      trangThai: "Đang hoạt động tại Triệu quốc @c0092",
      blurb: "Tông môn ma đạo Triệu quốc. Lão tổ Nguyên Anh kỳ Trần Hoan + Trần Nghiên; đệ tử nữ Vương Dĩnh gặp VL tại Quyết Minh Cốc. Bị VL ép khai thông tin hệ thống lệnh bài @c0092.",
      detail: "Hợp Hoan Tông ma đạo tại Triệu quốc @c0092. Đệ tử nữ Vương Dĩnh có mặt trong Quyết Minh Cốc; bị VL ép sau khi lão nhân Vô Phong Cốc và 17 đệ tử bị đóng băng. Khai thông tin: tổng 7 lệnh bài, chỉ 3 danh ngạch vào ngoại vực chiến trường (còn quá 3 lệnh bài chưa hủy khi thông đạo mở thì mất tư cách). Lão tổ Trần Hoan + Trần Nghiên (Nguyên Anh kỳ) được nhắc đến @c0097.",
      thanhVien: ["Vương Dĩnh"],
      nguon: ["@c0092", "@c0097"]
    },
    {
      id: "tich-diet-tong",
      name: "Tịch Diệt Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn (1 trong 8 đại tông phái)",
      viTri: "Triệu quốc",
      capDo: "Đại tông phái — lão tổ Nguyên Anh kỳ (đã tọa hóa)",
      lanhDao: "Lão tổ Nguyên Anh kỳ (tọa hóa trước kỳ mở thông đạo)",
      trangThai: "Không lấy được lệnh bài vì lão tổ tọa hóa @c0096",
      blurb: "1 trong 8 đại tông phái chính-ma lưỡng đạo Triệu quốc. Không tham gia được đợt mở thông đạo vì lão tổ Nguyên Anh kỳ tọa hóa trước đó, không lấy được lệnh bài @c0096.",
      detail: "Tịch Diệt Tông là 1 trong 8 đại tông phái (chính-ma lưỡng đạo) Triệu quốc @c0096. Không có lệnh bài trong kỳ mở thông đạo Vực Ngoại do lão tổ Nguyên Anh kỳ tọa hóa trước thời điểm lệnh bài được phân phát @c0096.",
      thanhVien: [],
      nguon: ["@c0096"]
    },
    {
      id: "thong-thien-thap-to-chuc",
      name: "Thông Thiên Tháp (tổ chức)",
      cn: "",
      loai: "the-luc-ngoai",
      loaiLabel: "Tổ chức siêu thế lực",
      viTri: "Vượt ranh giới tu chân quốc; phụ trách quản lý thông đạo Vực Ngoại",
      capDo: "Siêu thế lực — sứ giả vượt Nguyên Anh kỳ",
      lanhDao: "Không rõ (Lâm Dịch là sứ giả phụ trách Triệu quốc)",
      trangThai: "Đang hoạt động; Lâm Dịch đến Triệu quốc @c0097",
      blurb: "Tổ chức siêu thế lực cử sứ giả quản lý và khai mở thông đạo Vực Ngoại. Lâm Dịch là sứ giả phụ trách Triệu quốc; thực lực vượt toàn bộ Nguyên Anh kỳ. Tên trùng với công trình Thông Thiên Tháp tại trung tâm Triệu quốc.",
      detail: "Thông Thiên Tháp (tổ chức) cử sứ giả đến mỗi tu chân quốc để quản lý kỳ mở thông đạo Vực Ngoại @c0097. Lâm Dịch là sứ giả phụ trách Triệu quốc; xuất hiện cùng Phác Nam Tử, Hư Mi chân nhân, lão nhân Thiên Đạo môn. Toàn bộ Nguyên Anh kỳ cúi đầu chào Lâm Dịch — thực lực sứ giả vượt hẳn cảnh giới đó @c0097.",
      thanhVien: ["Lâm Dịch"],
      nguon: ["@c0097"]
    },
    {
      id: "luyen-hon-tong",
      name: "Luyện Hồn Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn (ngũ cấp tu chân quốc)",
      viTri: "Bì Lô quốc (ngũ cấp tu chân quốc)",
      capDo: "Tông phái ngũ cấp tu chân quốc",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động tại Bì Lô quốc",
      blurb: "Tông môn tại Bì Lô quốc (ngũ cấp tu chân quốc); trấn phái chi bảo là Hồn Phiên ẩn hơn 10 triệu hồn phách, tạo hàng ngàn năm — phiên bản Đằng Hóa Nguyên nhỏ hơn nhiều @c0099.",
      detail: "Luyện Hồn Tông ở Bì Lô quốc (ngũ cấp tu chân quốc) @c0099. Trấn phái chi bảo là Hồn Phiên ẩn >10 triệu hồn phách, chế tạo hàng ngàn năm. Phiên bản của Đằng Hóa Nguyên chỉ chứa 3 vạn tinh hồn — kém rất xa.",
      thanhVien: [],
      nguon: ["@c0099"]
    },
    {
      id: "hoang-tuyen-tong",
      name: "Hoàng Tuyền Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn (chưa rõ cấp)",
      viTri: "Chưa rõ",
      capDo: "Chưa rõ",
      lanhDao: "Không rõ",
      trangThai: "Đang tồn tại (Lam Băng Thiểm xuất xứ từ tông này)",
      blurb: "Tông môn xuất xứ của pháp thuật Lam Băng Thiểm. Lâm Dịch nhận ra Lam Băng Thiểm là của Hoàng Tuyền Tông khi VL thi triển @c0100. Chưa rõ thêm thông tin.",
      detail: "Hoàng Tuyền Tông là xuất xứ của pháp thuật Lam Băng Thiểm — xác nhận bởi Lâm Dịch khi VL dùng trong trận chiến với Đằng Hóa Nguyên @c0100. Không rõ cấp độ, vị trí hay liên quan đến Hoàng Tuyền Thăng Khiếu Quyết của Tư Đồ Nam.",
      thanhVien: [],
      nguon: ["@c0100"]
    },
    {
      id: "chien-than-dien",
      name: "Chiến Thần Điện",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Hỏa Phần Quốc (tam cấp tu chân quốc)",
      capDo: "Đứng đầu Hỏa Phần Quốc; 6 lão tổ Nguyên Anh kỳ; độc quyền Thần Đạo Thuật",
      lanhDao: "Hoắc Hồng Phi (trưởng lão Kết Đan sơ kỳ, hơn 200 tuổi, tu Thần Đạo Thuật @c0109); danh sách lão tổ Nguyên Anh kỳ chưa được nêu đầy đủ",
      trangThai: "Đang hoạt động; Mã Lương (tu sĩ tử chiến) bị VL đoạt xá @c0103",
      blurb: "Tông môn đứng đầu Hỏa Phần Quốc; độc quyền Thần Đạo Thuật trong quốc gia này. Có 6 lão tổ Nguyên Anh kỳ, khoảng 2300 nội môn đệ tử @c0117. Mã Lương là đệ tử Chiến Thần Điện bị tử chiến tại ngoại vực, thân xác bị VL đoạt. Phượng Loan (lão tổ Nguyên Anh sơ kỳ) thu VL làm ký danh đệ tử @c0119. Thành viên liên minh Hỏa Phần Minh @c0120. (@c0101, @c0109, @c0117, @c0119, @c0120)",
      detail: "Chiến Thần Điện là tông môn lớn nhất Hỏa Phần Quốc (tam cấp tu chân quốc) @c0109. Đặc quyền: độc quyền Thần Đạo Thuật tại Hỏa Phần — Hoắc Hồng Phi tu Thần Đạo Thuật, trưởng lão Kết Đan sơ kỳ, hơn 200 tuổi nhưng trông ngoài 40 @c0109. Có 6 lão tổ Nguyên Anh kỳ @c0109. Số lượng nội môn: khoảng 2300 đệ tử @c0117. Mã Lương — đệ tử Chiến Thần Điện — cầm con thoi đỏ đuổi hạt châu Cự Ma tộc 3 ngày không kịp rồi bị tử chiến @c0101; VL đoạt xá thân xác hắn @c0103. Chu Tử Hồng (Kết Đan kỳ), Lâm Đào, Dương Hùng sống sót từ ngoại vực, được VL cứu và thu làm nô bộc (bản mệnh tinh huyết) @c0105–@c0106. Hoắc Hồng Phi là sư phụ Chu Tử Hồng @c0109. Từ Tư là hôn thê cũ của Mã Lương @c0109. Luyện khí thuật Chiến Thần Điện (Điều-Dung-Hợp) + Thần Đạo chi thuật là hai công pháp trụ cột @c0112. @c0117: tại đại hội 6 lão Nguyên Anh, Phượng Loan tiết lộ điểm yếu hỏa linh thú là hàn thuộc tính. @c0119: Phượng Loan (Nguyên Anh sơ kỳ) và đạo lữ Dương Sâm (Nguyên Anh trung kỳ đỉnh) là lão tổ Chiến Thần Điện; Phượng Loan thu VL làm ký danh đệ tử. @c0120: Chiến Thần Điện tham gia liên minh Hỏa Phần Minh xâm lược Tuyên Vũ quốc; Dương Sâm dẫn đại quân.",
      thanhVien: ["Mã Lương", "Hoắc Hồng Phi", "Chu Tử Hồng", "Lâm Đào", "Dương Hùng", "Từ Tư", "Phượng Loan", "Dương Sâm"],
      nguon: ["@c0101", "@c0103", "@c0104", "@c0105", "@c0106", "@c0109", "@c0110", "@c0112", "@c0117", "@c0119", "@c0120"]
    },
    {
      id: "linh-vu-tong",
      name: "Linh Vũ Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Cự Lộc Quốc",
      capDo: "Chưa rõ cấp (Hứa Hạo — đệ tử thứ sáu — đạt Trúc Cơ hậu kỳ)",
      lanhDao: "Không rõ",
      trangThai: "Đang tồn tại; Hứa Hạo tử vong tại chiến trường ngoại vực @c0105",
      blurb: "Tông môn tại Cự Lộc Quốc. Hứa Hạo — đệ tử thứ sáu, Trúc Cơ hậu kỳ — xuất hiện tại ngoại vực chiến trường cùng Cát Dương; cả hai xác nhận tử vong @c0105. (@c0103, @c0105)",
      detail: "Linh Vũ Tông tại Cự Lộc Quốc được nhắc đến qua Hứa Hạo — đệ tử thứ sáu của tông, Trúc Cơ hậu kỳ @c0103. Hứa Hạo tham gia ngoại vực chiến trường cùng Cát Dương (Trúc Cơ hậu kỳ, tên xuất hiện dưới hai dạng 'Cát Đằng' và 'Cát Dương'). Ba thôn hồn xác nhận cả hai đã tử vong @c0105. VL thu túi trữ vật của họ (hơn 2000 trung phẩm linh thạch tích lũy gần 50 năm) từ du hồn @c0107. Không có thêm thông tin về tông môn trong phạm vi Ch.101–110.",
      thanhVien: ["Hứa Hạo"],
      nguon: ["@c0103", "@c0105", "@c0107"]
    },
    {
      id: "ta-ma-tong",
      name: "Tà Ma Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Hỏa Phần Quốc (tam cấp tu chân quốc)",
      capDo: "Một trong 4 tông phái lớn Hỏa Phần Quốc",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động",
      blurb: "Một trong bốn tông phái lớn tại Hỏa Phần Quốc, xếp sau Chiến Thần Điện. Công pháp đặc trưng: Đại Tự Tại Tu La thuật (6 tầng ma đạo). Tôn Hữu Tài và Tứ sư huynh hắc y là đệ tử. Thành viên liên minh Hỏa Phần Minh @c0120. (@c0109, @c0113, @c0120)",
      detail: "Tà Ma Tông là một trong 4 tông phái lớn tại Hỏa Phần Quốc (tam cấp tu chân quốc), liệt kê sau Chiến Thần Điện, trước Lạc Hà Môn và Thi Âm Tông @c0109. @c0113–@c0115: hai đệ tử Tà Ma Tông — Tôn Hữu Tài (Trúc Cơ hậu kỳ) và Tứ sư huynh hắc y (Trúc Cơ Đại viên mãn giả đan) — bám theo VL, giăng bẫy và bị VL tiêu diệt. Công pháp ma đạo của tông: Đại Tự Tại Tu La thuật (6 tầng) — VL thu được từ túi trữ vật Tôn Hữu Tài @c0115, dùng qua Ma Đầu từ @c0117. @c0120: Tà Ma Tông là thành viên liên minh Hỏa Phần Minh xâm lược Tuyên Vũ quốc.",
      thanhVien: ["Tôn Hữu Tài", "Tứ sư huynh hắc y"],
      nguon: ["@c0109", "@c0113", "@c0114", "@c0115", "@c0120"]
    },
    {
      id: "lac-ha-mon",
      name: "Lạc Hà Môn",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Hỏa Phần Quốc (tam cấp tu chân quốc)",
      capDo: "Một trong 4 tông phái lớn Hỏa Phần Quốc",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động",
      blurb: "Một trong bốn tông phái lớn tại Hỏa Phần Quốc. Đặc thù: có bộ phận Thám báo doanh chuyên do thám; nghề luyện đan nổi tiếng. Lý Kỳ Khánh (Trúc Cơ hậu kỳ giả đan) là đệ tử @c0113. Giữ thân thể tán tu cho thuê @c0120. Thành viên liên minh Hỏa Phần Minh @c0120. Có Thanh Huyền là nhân vật liên quan @c0120. (@c0109, @c0113, @c0120)",
      detail: "Lạc Hà Môn là một trong 4 tông phái lớn tại Hỏa Phần Quốc (tam cấp tu chân quốc), liệt kê sau Tà Ma Tông và trước Thi Âm Tông @c0109. @c0113: đệ tử Lý Kỳ Khánh (Trúc Cơ hậu kỳ giả đan) xuất hiện tại Khê Cốc phường thị, có tỳ nữ riêng Uyển Nhi đi theo. @c0120: Lạc Hà Môn có Thám báo doanh (bộ phận do thám nội bộ); nghề luyện đan nổi tiếng; cung cấp dịch vụ giữ thân thể tán tu cho tu sĩ cần đổi xác; Thanh Huyền là nhân vật liên quan; Lạc Hà Môn là thành viên liên minh Hỏa Phần Minh xâm lược Tuyên Vũ quốc.",
      thanhVien: ["Lý Kỳ Khánh", "Thanh Huyền"],
      nguon: ["@c0109", "@c0113", "@c0120"]
    },
    {
      id: "thien-cuong-tong",
      name: "Thiên Cương Tông",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn tu chân",
      viTri: "Tứ cấp tu chân quốc (tên quốc gia không xác định)",
      capDo: "Tứ cấp tu chân quốc",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động",
      blurb: "Tông môn tứ cấp tu chân quốc, nơi xuất thân của Hứa Lập Quốc (nguyên Nguyên Anh kỳ). Hứa Lập Quốc rời tông đến Hỏa Phần Quốc trong thân mượn của Thi Âm Tông để hồi phục. (@c0111)",
      detail: "Thiên Cương Tông được xác nhận là tông môn tứ cấp tu chân quốc qua lý lịch Hứa Lập Quốc @c0111. Hứa Lập Quốc vốn là Nguyên Anh kỳ Thiên Cương Tông nhưng mất thân, phải mượn thân Trúc Cơ Thi Âm Tông để hồi phục và ẩn náu tại Phần Kim sơn mạch Hỏa Phần Quốc. Thông tin về tông môn này không có thêm trong phạm vi chương đã đọc.",
      thanhVien: ["Hứa Lập Quốc"],
      nguon: ["@c0111"]
    },
    {
      id: "tuyen-vu-quoc-faction",
      name: "Tuyên Vũ Quốc (thế lực)",
      cn: "",
      loai: "quoc-gia",
      loaiLabel: "Quốc gia tu chân",
      viTri: "Lân cận Hỏa Phần Quốc",
      capDo: "Tam cấp tu chân quốc",
      lanhDao: "Lão bà Nguyên Anh sơ kỳ (bị Dương Sâm giết @c0120)",
      trangThai: "Đang bị liên minh Hỏa Phần Minh xâm lược @c0120",
      blurb: "Tam cấp tu chân quốc lân cận Hỏa Phần Quốc. Mục tiêu xâm lược của liên minh Hỏa Phần Minh gồm 4 tông phái Hỏa Phần Quốc. Lão bà Nguyên Anh sơ kỳ — tu sĩ mạnh nhất Tuyên Vũ quốc — bị Dương Sâm giết trong đợt đầu @c0120.",
      detail: "Tuyên Vũ Quốc là tam cấp tu chân quốc bị 4 tông Hỏa Phần Quốc (liên minh Hỏa Phần Minh) phát động xâm lược @c0117/@c0120. VL nhận ngọc phù và được lệnh tham chiến tại đây @c0120. Dương Sâm (Chiến Thần Điện, Nguyên Anh trung kỳ đỉnh) đích thân dẫn đại quân, giết lão bà Nguyên Anh sơ kỳ của Tuyên Vũ quốc trong đợt tấn công đầu tiên. Thông tin nội tình Tuyên Vũ quốc không có thêm.",
      thanhVien: [],
      nguon: ["@c0117", "@c0120"]
    },
    {
      id: "hoa-phen-minh",
      name: "Hỏa Phần Minh",
      cn: "",
      loai: "lien-minh",
      loaiLabel: "Liên minh 4 tông",
      viTri: "Hỏa Phần Quốc",
      capDo: "Liên minh 4 tông phái lớn Hỏa Phần Quốc",
      lanhDao: "4 tông phái: Chiến Thần Điện, Tà Ma Tông, Lạc Hà Môn, Thi Âm Tông",
      trangThai: "Đang hoạt động — phát động chiến tranh xâm lược Tuyên Vũ quốc @c0120",
      blurb: "Liên minh 4 tông phái lớn nhất Hỏa Phần Quốc: Chiến Thần Điện, Tà Ma Tông, Lạc Hà Môn, Thi Âm Tông. Mục tiêu trước mắt: xâm lược và thôn tính Tuyên Vũ quốc (tam cấp láng giềng). VL nhận lệnh tham chiến qua ngọc phù @c0120. (@c0120)",
      detail: "Hỏa Phần Minh là liên minh tất cả 4 tông phái lớn Hỏa Phần Quốc @c0120. Lý do thành lập và thời điểm chính xác thành lập chưa xác nhận đầy đủ trong phạm vi chương đã đọc. Chiến lược: 4 tông phối hợp động binh tổng lực xâm lược Tuyên Vũ quốc @c0120. VL (trong danh nghĩa đệ tử Chiến Thần Điện qua Phượng Loan) nhận ngọc phù triệu tập tham chiến tại Tuyên Vũ quốc @c0120. Dương Sâm dẫn quân Chiến Thần Điện, giết lão bà Nguyên Anh sơ kỳ đối phương trong đợt đầu.",
      thanhVien: ["Chiến Thần Điện", "Tà Ma Tông", "Lạc Hà Môn", "Thi Âm tông"],
      nguon: ["@c0120"]
    },
    {
      id: "dau-ta-phai",
      name: "Đấu Tà phái",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Môn phái ma đạo",
      viTri: "Tu Ma Hải (vùng phụ cận Nam Đẩu thành)",
      capDo: "Môn phái lớn trong vùng; muốn nhập chủ Nam Đẩu thành",
      lanhDao: "Chưởng môn Lưu Sâm (Kết Đan trung kỳ đỉnh phong, đã chết @c0128); Giải Đông Lai (Kết Đan trung kỳ, chưởng môn thực tế — chết @c0133); Thượng Quan Mặc (chưởng giáo mới do Vương Lâm bổ nhiệm @c0133)",
      trangThai: "Tổng bộ bị Vương Lâm tận diệt — chưởng môn và đại trưởng lão tử vong @c0128–@c0133; hiện Thượng Quan Mặc làm chưởng giáo theo lệnh Vương Lâm",
      blurb: "Môn phái ma đạo lớn ở vùng phụ cận Nam Đẩu thành (Tu Ma Hải), muốn nhập chủ Nam Đẩu thành nhưng bị ngăn. Có Tổng bộ và nhiều phân bộ. Truy sát Vương Lâm vì Bách Thú Linh Lô rồi bị hắn tận diệt; sau khi chưởng môn thật Giải Đông Lai chết, Thượng Quan Mặc được bổ nhiệm làm chưởng giáo mới.",
      detail: "Đấu Tà phái do Lưu Sâm (Kết Đan trung kỳ đỉnh phong) làm chưởng môn, không có Nguyên Anh kỳ tọa trấn (cả vùng trăm vạn dặm quanh Nam Đẩu thành đều không có Nguyên Anh kỳ). Đệ tử chuyên dùng độc và thủ đoạn tà đạo. Khi Vương Lâm đổi giao long bì giáp lấy Bách Thú Linh Lô tại Nam Đẩu thành, Đấu Tà phái cử mười Kết Đan kỳ (dẫn đầu Đại trưởng lão Tiễn Khôn) truy sát. Vương Lâm kết đan thành công rồi quay lại tận diệt: giết chín trưởng lão Tổng bộ, Tiễn Khôn (bằng Tử Chú thuật) @c0124–@c0130. Tiếp đó, chưởng môn thực tế Giải Đông Lai dùng Đấu Long Đại Trận tập hợp 13.562 đệ tử nhưng vẫn thất bại — giả thua, dùng kiếm hoàn/kiếm đan dụ sát VL nhưng bị phá, hóa tro chết @c0132–@c0133. Thượng Quan Mặc được VL bổ nhiệm làm chưởng giáo thay thế @c0133.",
      thanhVien: ["Lưu Sâm", "Giải Đông Lai", "Tiễn Khôn", "Côn Tang", "Trần Hải", "Tang Mộc Nhai", "Mộc Nam", "Mộc Bắc", "Thượng Quan Mặc"],
      nguon: ["@c0124", "@c0125", "@c0126", "@c0127", "@c0128", "@c0129", "@c0130", "@c0132", "@c0133"]
    },
    {
      id: "song-tu-mon",
      name: "Song Tu Môn",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Môn phái tu chân",
      viTri: "Tuyên Vũ Quốc",
      capDo: "Chưa rõ (có trưởng lão Kết Đan trung kỳ)",
      lanhDao: "Không rõ",
      trangThai: "Được nhắc qua một trưởng lão truy sát Lý Mộ Uyển @c0123",
      blurb: "Môn phái ở Tuyên Vũ Quốc. Một trưởng lão Song Tu Môn (Kết Đan trung kỳ, dâm đãng) truy sát Lý Mộ Uyển để cướp Thiên Ly đan, đã giết cả tiểu đội mười ba người của nàng; sau bị hỏa thú dọa chạy.",
      detail: "Song Tu Môn được nhắc qua gã trưởng lão Kết Đan trung kỳ truy sát Lý Mộ Uyển vì biết nàng có Thiên Ly đan @c0123. Hắn không am hiểu tốc độ nên bị Vương Lâm dùng Thổ Độn thuật bỏ rơi; thấy đám hỏa linh thú thì sợ hãi bỏ chạy. Chi tiết về môn phái chưa được khai thác thêm.",
      thanhVien: [],
      nguon: ["@c0123"]
    },
    {
      id: "luyen-khi-tong",
      name: "Luyện Khí tông (Tu Ma Hải)",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Tông môn luyện khí",
      viTri: "Tu Ma Hải (nhiều chi nhánh)",
      capDo: "Tông luyện khí lớn; mỗi địa phương đều có cửa hàng",
      lanhDao: "Không rõ",
      trangThai: "Đang hoạt động (bán khí cụ, đan lô)",
      blurb: "Tông môn luyện khí của Tu Ma Hải, có nhiều chi nhánh, mỗi địa phương đều có cửa hàng bán khí cụ và đan lô. Chi nhánh gần động phủ Vương Lâm nhất nằm ngoài Nam Đẩu thành (Luyện Khí Các ba tầng).",
      detail: "Theo lời khai của Tang Mộc Nhai, mọi loại khí cụ ở Tu Ma Hải có thể mua ở Luyện Khí tông; dong lô (lò luyện đan) giá rất cao @c0126. Tại Nam Đẩu thành, Luyện Khí Các có ba tầng (tầng 1 Ngưng Khí trấn thủ, tầng 2 Trúc Cơ, tầng 3 Kết Đan), bán các đan lô tam phẩm và Bách Thú Linh Lô ngũ phẩm — nơi Vương Lâm đổi giao long bì giáp lấy đan lô @c0127.",
      thanhVien: [],
      nguon: ["@c0126", "@c0127"]
    },
    {
      id: "tru-thien-giao",
      name: "Tru Thiên giáo",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Môn phái tu chân",
      viTri: "Nam Đẩu thành (Tu Ma Hải)",
      capDo: "Một trong ba phái liên hợp quản lý Nam Đẩu thành",
      lanhDao: "Không rõ",
      trangThai: "Đang quản lý Nam Đẩu thành (cùng hai phái khác)",
      blurb: "Một trong ba phái liên hợp quản lý Nam Đẩu thành (cùng Diệt Hồn môn và Thiên Nhất đạo giáo) sau khi chủ thành Nguyên Anh kỳ mất tích 500 năm. Đấu Tà phái muốn nhập chủ Nam Đẩu thành nhưng bị ba phái này ngăn.",
      detail: "Tru Thiên giáo được nhắc tới như một trong ba phái liên hợp quản lý Nam Đẩu thành @c0127. Chi tiết về quy mô, lãnh đạo chưa được khai thác.",
      thanhVien: [],
      nguon: ["@c0127"]
    },
    {
      id: "diet-hon-mon",
      name: "Diệt Hồn môn",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Môn phái tu chân",
      viTri: "Nam Đẩu thành (Tu Ma Hải)",
      capDo: "Một trong ba phái liên hợp quản lý Nam Đẩu thành",
      lanhDao: "Không rõ",
      trangThai: "Đang quản lý Nam Đẩu thành (cùng hai phái khác)",
      blurb: "Một trong ba phái liên hợp quản lý Nam Đẩu thành (cùng Tru Thiên giáo và Thiên Nhất đạo giáo).",
      detail: "Diệt Hồn môn được nhắc tới như một trong ba phái liên hợp quản lý Nam Đẩu thành @c0127. Chi tiết chưa được khai thác.",
      thanhVien: [],
      nguon: ["@c0127"]
    },
    {
      id: "thien-nhat-dao-giao",
      name: "Thiên Nhất đạo giáo",
      cn: "",
      loai: "tong-mon",
      loaiLabel: "Môn phái tu chân",
      viTri: "Nam Đẩu thành (Tu Ma Hải)",
      capDo: "Một trong ba phái liên hợp quản lý Nam Đẩu thành",
      lanhDao: "Không rõ",
      trangThai: "Đang quản lý Nam Đẩu thành (cùng hai phái khác)",
      blurb: "Một trong ba phái liên hợp quản lý Nam Đẩu thành (cùng Tru Thiên giáo và Diệt Hồn môn).",
      detail: "Thiên Nhất đạo giáo được nhắc tới như một trong ba phái liên hợp quản lý Nam Đẩu thành @c0127. Chi tiết chưa được khai thác.",
      thanhVien: [],
      nguon: ["@c0127"]
    },
    {
      id: "that-mai-thanh",
      name: "Thất Mai thành",
      cn: "",
      loai: "thanh-thi",
      loaiLabel: "Liên minh thành thị ma tu",
      viTri: "Tu Ma Hải (nội hải)",
      capDo: "Thế lực nội hải Tu Ma Hải cực mạnh; bảy thành chủ nghi đạt Hóa Thần kỳ",
      lanhDao: "Bảy thành chủ (danh tính chưa rõ; tu vi sâu khó lường, đồn tới Hóa Thần kỳ)",
      trangThai: "Đang hoạt động — bảy thành chủ hiếm khi rời nội hải Tu Ma Hải",
      blurb: "Thất Mai thành là liên minh bảy tòa thành bố trí theo hình cánh hoa mai trong nội hải Tu Ma Hải. Bảy thành chủ tu vi sâu khó lường, đồn đãi đã đạt Hóa Thần kỳ, và hiếm khi rời khỏi nội hải. Bát Cực Ma Quân mang dấu hiệu bảy đóa mai vàng — nghi là người của Thất Mai chi địa.",
      detail: "Thất Mai thành / Thất Mai chi địa được Trâu Bân (lão tổ Chiến Thần Điện) xác nhận: ba trăm năm trước ông từng du ngoạn Tu Ma Hải và nhận ra dấu hiệu bảy đóa mai vàng trên vạt áo lão nhân thanh bào là biểu tượng Thất Mai chi địa @c0137. Tu Ma Hải có gần 999 ngôi thành; nội hải có hơn 300 thành; Thất Mai thành nằm trong nội hải đó. Ma tu nội hải hiếm khi tự nguyện rời đi. Bát Cực Ma Quân (lộ danh @c0138) đeo bảy đóa mai vàng — liên kết với thế lực này nhưng chi tiết còn chưa được làm rõ.",
      thanhVien: ["Bát Cực Ma Quân (nghi)"],
      nguon: ["@c0137", "@c0138"]
    }
  ]
};
