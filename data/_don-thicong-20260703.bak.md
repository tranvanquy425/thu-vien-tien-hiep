# BACKUP DỌN NGÔN NGỮ THI-CÔNG — (2026-07-03 V2-Steward chong-lo-thicong)

Nguyên văn TRƯỚC/SAU của mọi đoạn bị Edit trong đợt dọn 11 vị trí lộ ngôn ngữ thi-công.
File bị sửa: TGHM `data.js` + `quyen/q01/characters.js`; TN `data.js` + `quyen/q04/characters.js` + `quyen/q05/characters.js`; PNTT `data.js` + `quyen/q02/artifacts.js`.
Snapshot đối chiếu name cũ: `_He_Thong/_engine-api/_runtime/_qakl-the-gioi-hoan-my-5-34.json` (chỉ có name, KHÔNG có blurb → blurb viết lại từ vaiTro/nội dung thẻ theo chỉ thị Chiến).

---

## A. TGHM — the-gioi-hoan-my/data.js + quyen/q01/characters.js (sửa đồng bộ cả 2)

### A1. Thẻ `thach-van-phong` — name (data.js dòng ~128; q01/characters.js minified dòng 2)
TRƯỚC:
```
"name": "Bì Hầu"
```
SAU:
```
"name": "Thạch Vân Phong"
```
(Snapshot _qakl 5-34: id thach-van-phong name = "Thạch Vân Phong".)

### A2. Thẻ `thach-van-phong` — aliases (data.js dòng ~137-138)
TRƯỚC (2 phần tử bị xóa khỏi mảng aliases):
```
     "Bì Hầu",
     "Thạch Trung Hầu",
```
(minified: `"tộc trưởng Thạch Thôn","Bì Hầu","Thạch Trung Hầu","tộc trưởng"`)
SAU: xóa 2 phần tử, mảng còn: lão tộc trưởng / Lão tộc trưởng / Tộc trưởng / Tộc trưởng Thạch thôn / Ông tộc trưởng / tộc trưởng Thạch Thôn / tộc trưởng / Tộc trưởng Thạch Thôn.

### A3. Thẻ `thach-van-phong` — blurb (data.js dòng ~151)
TRƯỚC:
```
"blurb": "Sửa name về \"Thạch Vân Phong\" (đúng với blurb+id+toàn bộ nội dung tộc trưởng); gỡ alias \"Bì Hầu\" và \"Thạch Trung Hầu\" khỏi mục này vì research xác định Thạch Trung Hầu (Bì Hầu) là bé trai tám chín tuổi khác, không phải tộc trưởng."
```
SAU (viết từ vaiTro + tinhCach của thẻ, snapshot không chứa blurb):
```
"blurb": "Lão tộc trưởng đứng đầu Thạch Thôn, chủ trì việc cầu khấn Tế Linh và các quyết định lớn của thôn; nhân hậu, đích thân nấu sữa bách thú nuôi đứa trẻ mồ côi Thạch Hạo."
```

### A4. Thẻ `chu-nhoc-than-thon` — name (data.js dòng ~10)
TRƯỚC:
```
"name": "Thạch Mãnh (cặp thach-manh/nhi-manh); Thạch Trung Hầu (cặp thach-trung-hau/bi-hau)"
```
SAU:
```
"name": "Thạch Hạo"
```
(Snapshot _qakl 5-34: id chu-nhoc-than-thon name = "Thạch Hạo".)

### A5. Thẻ `chu-nhoc-than-thon` — blurb (data.js dòng ~30)
TRƯỚC:
```
"blurb": "Mục 'chu-nhoc-than-thon' là nhân vật chính (Thạch Hạo, 3 tuổi rưỡi, mồ côi, nhấc đỉnh ngàn cân). Sửa name 'Thạch Mãnh'→'Thạch Hạo'; gỡ alias 'Nhị Mãnh'. Giữ aliases: ['Nhóc tỳ','Chú nhóc (chưa đặt tên)','Tiểu Hạo Hạo','Tiểu Thạch Hạo']. Thạch Mãnh/Nhị Mãnh là nhân vật RIÊNG (con thứ hai, 8 tuổi rưỡi, da ngăm, vật ngã trâu mộng) — thuộc slug thach-manh/nhi-manh, không gộp."
```
SAU (viết từ vaiTro/diem/kinhLich của thẻ):
```
"blurb": "Nhân vật chính — đứa trẻ mồ côi của Thạch Thôn, mất cha mẹ từ nửa tuổi, lớn lên nhờ sữa bách thú do lão tộc trưởng nuôi; từ nhỏ đã lộ sức mạnh kinh người, nhấc bổng khối đá cao hơn người mình."
```

### A6. Thẻ `chu-nhoc-thach-thon` — blurb (data.js dòng ~1606)
TRƯỚC:
```
"blurb": "name→'Tiểu Thạch Hạo'; gỡ alias 'Tử Vân' và 'Tử Vân di cầm' (là 1 trong 3 chim non, thực thể riêng); giữ: Chú nhóc, Nhóc tỳ, Tiểu Thạch Hạo, Tiểu Hạo, Hạo Nhi, Tiểu Hạo Hạo, Đứa trẻ mồ côi Thạch Thôn, Chú nhóc Thạch Thôn."
```
SAU (viết từ vaiTro/tinhCach của thẻ):
```
"blurb": "Chú nhóc mồ côi được khắc họa kỹ ở chương mở đầu — mất cha mẹ từ nhỏ, được lão tộc trưởng nuôi bằng sữa bách thú trộn dược thảo; hiếu động, dạn dĩ, ngã liên tục mà không khóc."
```

---

## B. TN — tien-nghich/data.js + quyen gương

### B4. `lao-to-cu-ma-toc` kinhLich text (data.js dòng ~27813; gương: quyen/q04/characters.js dòng 2)
TRƯỚC (đuôi value):
```
...Chu Tuoc quoc cu mot Van Dinh ky tiep dai. (NBLM neo c0331 = SAI; dung @c0334.)
```
SAU:
```
...Chu Tuoc quoc cu mot Van Dinh ky tiep dai.
```
(Đoạn xóa nguyên văn: ` (NBLM neo c0331 = SAI; dung @c0334.)`)

### B5. `don-thien` kinhLich text (data.js dòng ~30234; gương: quyen/q04/characters.js dòng 2)
TRƯỚC (giữa value):
```
su huynh (thu 36, y canh Du Tri; NBLM goi 'Niem Thien' — research c0365 ghi chua ro ten) da chet 2 nam truoc
```
SAU:
```
su huynh (thu 36, y canh Du Tri) da chet 2 nam truoc
```
(Đoạn xóa nguyên văn: `; NBLM goi 'Niem Thien' — research c0365 ghi chua ro ten`)

### B6. `nhi-su-huynh-tu-tong` nhanMach ghiChu (data.js dòng ~34828; gương: quyen/q05/characters.js dòng 2)
TRƯỚC:
```
"ghiChu": "(tự sinh — R4 rà)"
```
SAU:
```
"ghiChu": ""
```
(Ngữ cảnh: mục nhanMach ten "Nữ tử áo lụa trắng (Tử Tâm)", quanHe "Ngũ sư muội bị tử y nữ tử thay; hắn tố Vương Lâm giết ngũ sư muội.")

### B7-B8. cotTruyen q03 + q05 summary (data.js dòng ~54125 và ~54154)
TRƯỚC (đuôi 2 value summary):
```
q03: ...VL chưa báo được thù họ Đằng nên dằn lòng. (Khung quyển từ volumes.json — chi tiết milestones bổ sung khi R1/R2 viết tới.)
q05: ...Quyển kết ở ch457 (朱雀星·终). (Khung quyển từ volumes.json — chi tiết milestones bổ sung khi R1/R2 viết tới.)
```
SAU: xóa câu ` (Khung quyển từ volumes.json — chi tiết milestones bổ sung khi R1/R2 viết tới.)` ở cả 2.
(Ghi chú: chuỗi này còn xuất hiện trong `quyen/_loi-bo.js` (file lưu mục bị loại, không thuộc phạm vi quyen/*/*.js) và `_backup_web/` — KHÔNG sửa, ngoài phạm vi.)

---

## C. PNTT — pham-nhan-tu-tien/data.js + quyen/q02/artifacts.js (gương, dòng 2)

### C9. `kim-quang-chuyen-phu-bao` blurb (data.js dòng ~11315)
TRƯỚC (đuôi value):
```
...Tới hết đợt đã đọc (~c180) Hàn Lập chưa sử dụng vật này.
```
SAU:
```
...Tính đến chương 180, Hàn Lập chưa sử dụng vật này.
```

### C10. `kim-quang-chuyen-phu-bao` detail (data.js dòng ~11316)
TRƯỚC (giữa value):
```
...đổi bằng 2 gốc linh thảo ngàn năm @c165; tới hết đợt (~c180) chưa sử dụng. @c0164 Hàn Lập từng liên tưởng...
```
SAU:
```
...đổi bằng 2 gốc linh thảo ngàn năm @c165; tính đến chương 180 chưa sử dụng. @c0164 Hàn Lập từng liên tưởng...
```
