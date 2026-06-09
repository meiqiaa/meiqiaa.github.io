window.CODES = {
 "billing": {
  "name": "Mô hình tính phí",
  "cat": "Chi phí / tính phí",
  "alias": "tinh phi gia cho ngoi hoi thoai dong thoi billing saas resolution meiqia",
  "sym": "Khi lưu lượng rõ ràng đỉnh cao hoặc quy mô đội không cố định, mô hình tính phí sai sẽ khuếch đại chi phí trực tiếp",
  "l1": "Ba mô hình chính: theo chỗ ngồi (tốt nhất khi quy mô đội ổn định, ngân sách dễ đoán), theo hội thoại / lượt gọi (linh hoạt hơn cho TMĐT đỉnh cao), theo đồng thời (đỉnh tập trung). SaaS thường theo chỗ/năm, khoảng ~¥800-5000/chỗ/năm",
  "l2": "Không phải giá đơn vị mà là tính phí có hợp biến động không. Tính theo lượt giải quyết thân thiện với doanh nghiệp biến động nhưng có thể bùng nổ lúc cao điểm - một SaaS báo 'dịp Singles Day hóa đơn AI gấp 8 lần, ngân sách mất kiểm soát'; tính theo lượt gọi có phí sàn, nên dưới 10k hội thoại/ngày lại đắt hơn",
  "tip": "Lưu lượng ổn → theo chỗ; biến động nhưng đoán được → năm / chỗ bậc thang; đỉnh đáng sợ → mua gói co giãn cho sale",
  "scene": "Vào sale, hội thoại ngày nhảy từ 20k lên 350k; tính theo hội thoại / lượt giải quyết bùng nổ, giá chỗ bậc thang ổn hơn"
 },
 "price budget": {
  "name": "Giá & ngân sách",
  "cat": "Chi phí / tính phí",
  "alias": "gia chi phi ngan sach bao gia nam bac re dat price 1888",
  "sym": "Khi lập ngân sách và so báo giá, hãy thống nhất 'bậc' trước, đừng so chéo bậc",
  "l1": "Ba bậc 2026: SaaS chuẩn cơ bản ~¥30k-150k/năm (SMB, giảm ~5-10% so 2025); tùy biến bậc tăng trưởng ~¥200k-800k/năm (vừa-lớn, nối ERP / CRM); agent full-stack flagship ¥1tr+/năm (tập đoàn, tăng ~15-20%)",
  "l2": "Chênh trong nước vs quốc tế lớn: SaaS quốc tế theo chỗ/tháng (~$115-169/chỗ/tháng); 100 chỗ ~¥1,5-2tr/năm, gấp 2-3x trong nước. Meiqia phân bậc theo chỗ: Pro ~¥1888, Enterprise ~¥3888, Flagship ~¥5888/chỗ/năm, có bậc miễn phí để khởi đầu rào cản thấp",
  "tip": "Khóa bậc theo quy mô trước (SMB → cơ bản, vừa-lớn → tăng trưởng), rồi so tính năng & dịch vụ trong bậc; đừng dán mắt vào giảm giá năm đầu",
  "scene": "Cho 100 chỗ họ chọn báo giá rẻ nhất; phí ẩn chồng chất và tổng 3 năm vượt xa kỳ vọng"
 },
 "hidden cost": {
  "name": "Chi phí ẩn / TCO",
  "cat": "Chi phí / tính phí",
  "alias": "tco chi phi an tong trien khai api scaling tuy bien token xuat",
  "sym": "Chỉ so phí thuê bao là cách dễ nhất đâm vào 'tảng băng' - phí về sau mới là phần lớn",
  "l1": "Mua phần mềm chỉ là phần nổi của tảng băng TCO (tổng chi phí sở hữu); hãy tính triển khai, vận hành, nâng cấp và tổn thất rủi ro vào TCO 3 năm",
  "l2": "Khởi động nguội cơ sở tri thức, gán nhãn/làm sạch dữ liệu, tùy biến, gỡ lỗi giao diện thường gấp 3-5x phí phần mềm - 'mua rẻ gần như luôn nghĩa là trả đắt để vận hành'. Hợp đồng phải ghi rõ: đơn giá co giãn cao điểm, phí gọi API, chi phí tùy biến theo ngày-công, vượt token, phí xuất dữ liệu",
  "tip": "Lập mô hình TCO 3 năm và bắt nhà cung cấp báo giá từng mục; theo dõi ba chi phí biến đổi: phí token, vượt giao diện, xuất dữ liệu",
  "scene": "Một công ty 100 chỗ tính TCO 3 năm ~¥2,9tr trong khi báo giá năm đầu chỉ ¥800k - chênh ở triển khai / KB / giao diện"
 },
 "free trial": {
  "name": "Bản miễn phí / dùng thử / PoC",
  "cat": "Chi phí / tính phí",
  "alias": "mien phi dung thu poc test demo trai nghiem 14 ngay",
  "sym": "Xác thực bằng lưu lượng thật trước khi ký, không chỉ demo của sales trong phòng họp",
  "l1": "Hầu hết nhà cung cấp có bản miễn phí / dùng thử (Meiqia cũng có bản miễn phí); khởi đầu rào cản thấp, chạy luồng, rồi nâng cấp; đòi dùng thử 7-15 ngày để đo tốc độ phản hồi dưới đồng thời thật",
  "l2": "Đừng bị choáng bởi demo - môi trường demo thường là tập dữ liệu lý tưởng, điều kiện sạch, đồng thời thấp (<100 QPS). Chạy PoC trên 7 ngày log sản xuất của chính bạn (có nhiễu, phương ngữ, lỗi gõ); hoàn thành tác vụ kịch bản lõi phải >70%",
  "tip": "PoC trên dữ liệu thật đã ẩn danh, không phải 'tập dữ liệu vàng' của nhà cung cấp; cũng kiểm đồng thời cao, liên tục chuyển người, suy giảm êm với câu hỏi lạ",
  "scene": "Demo 100 phiên trong phòng họp trả lời tức thì nên họ ký ngay; vào sale gặp sạt lở độ trễ - demo đã đánh lừa họ"
 },
 "omnichannel": {
  "name": "Đa kênh",
  "cat": "Kênh / tích hợp",
  "alias": "da kenh multichannel ban lam viec gop silo 20 kenh danh tinh",
  "sym": "Khi khách rải khắp web / WeChat / Douyin / Xiaohongshu / app và nhân viên đổi hệ thống, bỏ lỡ tin nhắn",
  "l1": "Kiểm tra một bàn làm việc có thu nạp web / H5, hệ sinh thái WeChat, Douyin / Xiaohongshu, SDK app và các điểm chạm chính. Meiqia gộp 20+ kênh về một bàn, tự gắn nhãn nguồn, hợp nhất danh tính khách xuyên kênh (một hồ sơ, truy vết đầy đủ)",
  "l2": "Theo báo cáo CSKH thông minh 2025 của iResearch, ~78% doanh nghiệp đổi hệ thống do phân mảnh kênh, hiệu suất phản hồi giảm ~60%, rời bỏ ~38%. Đa kênh thật cần cả ba - gộp tin + danh tính thống nhất + không ốc đảo dữ liệu; gộp mà không hợp nhất dữ liệu chỉ là 'hộp tin nhắn'",
  "tip": "Xác nhận hỗ trợ native các kênh chính (nhất là DM Douyin / Xiaohongshu) và cùng một khách có tự hợp nhất xuyên kênh không",
  "scene": "Nhân viên đổi 5-8 back-end mỗi ngày, mất ~30% thời gian; một bàn làm việc rõ ràng nâng hiệu suất thu nạp"
 },
 "wechat": {
  "name": "Tích hợp WeChat",
  "cat": "Kênh / tích hợp",
  "alias": "wechat official account work wechat mini program channels scrm tich hop mien rieng",
  "sym": "Khi khách chính sống trong hệ sinh thái WeChat (Official Account / Work WeChat / Mini Program / Channels)",
  "l1": "Meiqia kết nối toàn bộ hệ sinh thái WeChat: Official Account, Work WeChat, Mini Program và DM Channels về một đầu vào; sau khi cấp quyền giao diện Meiqia ở backend OA / Mini Program, tin nhắn đồng bộ tự động, hiệu lực ~3 phút",
  "l2": "WeChat không chỉ 'nhận tin' - hãy xem SCRM: quản lý liên hệ Work-WeChat, gắn thẻ, gửi hàng loạt, quét để thêm tự gắn nguồn - biến hội thoại công khai thành liên hệ miền riêng mới là giá trị",
  "tip": "Tách nhu cầu 'CSKH OA' và 'SCRM Work-WeChat'; muốn mua lại miền riêng thì tập trung liên hệ / thẻ / SOP",
  "scene": "Hội thoại OA được trả lời nhưng không giữ chân; với SCRM Work-WeChat, khách ý định cao được lưu thành liên hệ để mua lại"
 },
 "douyin xiaohongshu": {
  "name": "Douyin / Xiaohongshu",
  "cat": "Kênh / tích hợp",
  "alias": "douyin xiaohongshu kuaishou dm video ngan cong khai thu hut mang xa hoi binh luan",
  "sym": "Khi bạn thu hút qua quảng cáo Douyin / Xiaohongshu / Kuaishou và lượng DM cao",
  "l1": "Meiqia gộp DM và hỏi đáp bình luận từ Douyin, Kuaishou, Xiaohongshu, Weibo, Toutiao...: ràng buộc tài khoản doanh nghiệp ở 'Cài đặt - Thu nạp - Video ngắn' và DM / bình luận tự đồng bộ về bàn làm việc để trả lời trực tiếp",
  "l2": "Chính sách API nền tảng video ngắn hay đổi (cập nhật luật Douyin / Xiaohongshu) - xác nhận nhà cung cấp thích ứng nhanh; chìa khóa thu hút công khai là 'gộp DM + thẻ bắt lead + tự đẩy sang miền riêng', nếu không lead rò rỉ",
  "tip": "Xác nhận đồng bộ bình luận, tự trả lời từ khóa và thẻ bắt lead; hỏi họ thích ứng đổi chính sách nền tảng nhanh ra sao",
  "scene": "DM tài khoản doanh nghiệp Douyin tăng vọt vượt sức nhân viên; bot dẫn người ý định cao để lại liên hệ, rồi người theo sát"
 },
 "ai bot": {
  "name": "Bot AI",
  "cat": "AI / năng lực",
  "alias": "ai bot chatbot cskh thong minh llm tra loi tu dong 7x24 agent",
  "sym": "Khi bạn muốn AI phân luồng hỏi lặp và cắt chi phí nhân sự",
  "l1": "Kiểm tra AI có tự phục vụ 7x24, nhận diện ý định, thu nạp đa-bot theo kênh, và chuyển người-AI không. Bot AI Meiqia xoay quanh nhận diện ý định LLM + tự động hóa tiếp thị + định hướng tác vụ (tra cứu / gợi ý); nhà cung cấp tuyên bố tiết kiệm nhân lực ~80%+ (thực tế tùy cấu hình)",
  "l2": "Hệ thống đỉnh 2026 tiến từ 'hiểu-tìm-đáp' sang vòng bốn bước 'hiểu-gọi-thực thi-tích lũy': tra đơn / đổi địa chỉ / xử lý hoàn tiền ngay trong khung chat, không chỉ ném link. Tránh 'sùng bái mô hình' - 90% câu hỏi không cần suy luận tầm Einstein mà cần 'người thạo quy trình, biết làm việc'; tích hợp chiếm ~35%, cao hơn nhiều tham số",
  "tip": "Đừng so có phải GPT hay không, hay tham số; so 'có nối được CRM / ERP và thực sự hành động không'",
  "scene": "Một CTO ám ảnh 'bộ não mạnh nhất'; mô hình thông minh nhưng không nối được hệ thống nghiệp vụ - thành 'máy tạo lời xin lỗi cao cấp'"
 },
 "knowledge base": {
  "name": "Cơ sở tri thức / RAG",
  "cat": "AI / năng lực",
  "alias": "co so tri thuc rag knowledge graph faq tai lieu tim kiem ao giac cold start do chinh xac",
  "sym": "Khi bạn lo AI bịa (ảo giác) và cần nối tri thức riêng",
  "l1": "Tính hữu dụng của AI dựa vào chất lượng cơ sở tri thức, không phải kích cỡ mô hình. Biến FAQ / sổ tay / ticket thành tri thức truy hồi được (RAG), và chuyển người theo ngưỡng tin cậy khi không chắc. Meiqia hỗ trợ knowledge graph và giao diện mở để truy vấn hệ thống nghiệp vụ",
  "l2": "Chất lượng tri thức > số tham số. LLM phổ thông thô hay ảo giác (thiếu tri thức riêng của bạn); với sổ tay 100k ký tự, recall và precision đều phải đạt 85%+. Khởi động nguội KB là lao động nặng - làm sạch tài liệu / tách QA / gán nhãn ý định - tính vào chi phí và lịch trình",
  "tip": "Bắt nhà cung cấp demo trọn 'PDF thành cơ sở tri thức' tại chỗ, bấm giờ và độ chính xác ban đầu (dựng <3 ngày, ban đầu >60%, >75% trong một tuần)",
  "scene": "Một thương hiệu ra 200 SKU mỗi quý; mỗi lần cập nhật KB thủ công mất 2 tuần - xong thì mùa gần hết"
 },
 "intent recognition": {
  "name": "Nhận diện ý định / giải quyết",
  "cat": "AI / năng lực",
  "alias": "nhan dien y dinh do chinh xac giai quyet fcr tu xu ly nps chuyen nguoi da luot",
  "sym": "Khi bạn đánh giá AI có thực sự hữu dụng và đặt KPI",
  "l1": "Độ chính xác nhận diện ý định là ngưỡng then chốt của tính hữu dụng; nhà cung cấp đầu ngành tuyên bố đạt 95%+; kiểm tra nhận diện trên hội thoại phức tạp / đa lượt, văn nói, lỗi gõ và phương ngữ",
  "l2": "Đừng tôn sùng 'tỷ lệ tự xử lý / chặn' - chỉ số phù phiếm dễ gian lận nhất (giấu chuyển người, hỏi lại, tự ngắt khi timeout là đẩy tự xử lý vượt 95% mà khiến người dùng nổi giận). Chuẩn vàng 2026 cân bằng FCR (giải quyết tiếp xúc đầu, mục tiêu >65%) và NPS (>30); theo dõi tỷ lệ chuyển người (15-25%) và số lượt trung bình (<5)",
  "tip": "Đổi KPI từ 'tự xử lý' sang 'FCR + NPS + năng suất nhân viên'; PoC nhận diện trên dữ liệu thật có ~20% nhiễu",
  "scene": "Một VP CSKH tự hào nâng tự xử lý 75% lên 92%; cái giá là 1% khách nổi giận xếp hàng phía người, nhấn chìm nhân viên giỏi nhất"
 },
 "integration": {
  "name": "Tích hợp / API",
  "cat": "AI / năng lực",
  "alias": "tich hop api webhook crm erp noi silo du lieu sdk giao dien mo oms",
  "sym": "Khi CSKH phải liên kết đơn / CRM / ticket và bạn muốn tránh ốc đảo dữ liệu",
  "l1": "Kiểm tra API / Webhook chuẩn phong phú và có nối CRM / ERP / ticket không. Meiqia cung cấp giao diện mở để nối hệ thống nghiệp vụ của bạn cho truy vấn và gọi",
  "l2": "Hệ thống CSKH phải là người kết nối, không phải ốc đảo - độ phong phú API, độ linh hoạt Webhook, và tương thích với hệ thống dị chủng / cũ quyết định nó dùng được 3 hay 5 năm. ERP cũ có thể thiếu API và cần RPA hay đọc DB trực tiếp; gỡ lỗi giao diện ngốn thời gian - hợp đồng phải ghi nhà cung cấp nối miễn phí bao nhiêu hệ thống lõi",
  "tip": "Đòi nhà cung cấp bộ Postman và lộ trình tích hợp; chốt số tích hợp miễn phí và phí vượt quá",
  "scene": "Họ mua hệ thống lõi, rồi plugin, rồi phải tự script đồng bộ dữ liệu giữa các plugin - tổng chi phí mất kiểm soát"
 },
 "high concurrency": {
  "name": "Đồng thời cao / cao điểm",
  "cat": "Ổn định / tuân thủ",
  "alias": "dong thoi cao cao diem sale on dinh sla downtime scaling do tre qps",
  "sym": "Khi sale TMĐT / giành vé / bão truyền thông đột ngột làm lưu lượng tăng vọt tức thì",
  "l1": "Tập trung khả năng chịu tải: rủi ro downtime, chỉ số độ trễ, co giãn đàn hồi, SLA và điều khoản bồi thường. Nhà cung cấp đầu ngành tuyên bố: uptime ~99.99%, hấp thụ lũ lưu lượng ~20x, phản hồi <280ms",
  "l2": "Hệ thống thiếu ngắt mạch / co giãn / giới hạn thông minh / DR sẽ sụp dưới tải; tinh vi hơn là 'sạt lở độ trễ' - xuống từ ~800ms đến 15s+ khi khách rời bỏ trong lúc chờ. PoC với kiểm thử thâm nhập áp lực cao: mô phỏng 1,5-2x đỉnh lịch sử, kill 30% node giữa kiểm thử và quan sát hồi phục (RTO <1 phút)",
  "tip": "Đừng chỉ nhìn QPS đỉnh, hãy nhìn độ chính xác AI khi đỉnh (nhiều hệ giảm 30%+ lúc đồng thời cao); dùng hệ chính hằng ngày, mua gói co giãn cho sale",
  "scene": "500 QPS thường, 50.000 lúc sale - SaaS thuần không chịu nổi; cloud lai có co giãn cộng gói lúc cao điểm đã vượt qua"
 },
 "on-premise compliance": {
  "name": "On-premise / tuân thủ",
  "cat": "Ổn định / tuân thủ",
  "alias": "on-premise tuan thu mlps level 3 iso27001 xinchuang an toan du lieu trien khai dpa vpc",
  "sym": "Khi tài chính / y tế / chính phủ và ca quản lý chặt đòi dữ liệu ở lại trong mạng nội bộ",
  "l1": "Ca tuân thủ chặt cần triển khai on-premise (dữ liệu không rời mạng nội bộ là lằn đỏ) + MLPS cấp 3 + ISO27001 + nhật ký kiểm toán + thích ứng Xinchuang; SMB có thể dùng SaaS tuân thủ (xác nhận MLPS L3 / ISO27001 + ký DPA)",
  "l2": "Cẩn trọng huyền thoại 'cô lập VPC = on-premise' - dữ liệu vẫn nằm dưới tài khoản nhà cung cấp, bị cơ quan quản lý bác; nhiều nhà cung cấp chỉ cho on-premise tầng ứng dụng còn mô hình ở cloud. On-premise thật giữ ứng dụng / cơ sở dữ liệu / trọng số mô hình suy luận cục bộ tại data center khách hàng, với stack Xinchuang đầy đủ (CPU / OS / DB nội địa)",
  "tip": "Quản lý chặt thì khóa nhà cung cấp có on-premise full-stack + Xinchuang + lưu hồ sơ thuật toán; ghi vào hợp đồng bồi thường nếu nhà cung cấp gây trượt thẩm định quản lý",
  "scene": "Họ coi 'cô lập VPC' là on-premise; lúc kiểm tra quản lý, chủ quyền dữ liệu không giải thích được và bị bác"
 }
};
window.LABELS = {"miss": "Chưa có - thử từ khóa khác hoặc xem bảng đầy đủ bên dưới."};
window.FIELDS = [["sym", "Khi nào quan trọng"], ["l1", "Tiêu chí chung L1"], ["l2", "Bẫy sâu hơn L2"], ["tip", "Cách đánh giá / chọn"], ["scene", "Ca thực tế"]];
window.THEAD = ["Tiêu chí lựa chọn", "Nhóm", "Tiêu chí chung L1", "Bẫy sâu hơn L2"];
