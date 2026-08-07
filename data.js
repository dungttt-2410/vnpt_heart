// ===== DỮ LIỆU CÂU HỎI =====
         const ALL_QUESTIONS = [
            {
               id: 1,
               part: "NỀN TẢNG VĂN HÓA & BẢN SẮC VNPT",
               q: "Sứ mệnh của Tập đoàn VNPT là gì?",
               answer:
                  "Kết nối sâu sắc mọi mặt của cuộc sống thông qua đổi mới sáng tạo và khả năng làm chủ công nghệ, vì một Việt Nam số thịnh vượng, bền vững và hạnh phúc cho mọi người.",
            },
            {
               id: 2,
               part: "NỀN TẢNG VĂN HÓA & BẢN SẮC VNPT",
               q: "Tầm nhìn đến năm 2035 của VNPT là gì?",
               answer:
                  "Trở thành trụ cột đổi mới sáng tạo trong hệ sinh thái số quốc gia, vươn tầm hàng đầu khu vực và hiện diện toàn cầu với các sản phẩm, dịch vụ, hạ tầng số mang đậm bản sắc Việt Nam.",
            },
            {
               id: 3,
               part: "NỀN TẢNG VĂN HÓA & BẢN SẮC VNPT",
               q: 'Hệ giá trị cốt lõi "Trái tim VNPT" gồm những từ viết tắt nào trong chữ H.E.A.R.T?',
               answer:
                  "H – Higher Together (Hợp tác cùng vươn cao)\nE – Empathy & Sharing (Thấu hiểu & Chia sẻ)\nA – Audacious Innovation (Sáng tạo không giới hạn)\nR – Responsible Future Creation (Phụng sự để kiến tạo)\nT – True Customer Centricity (Khách hàng là trái tim)",
            },
            {
               id: 4,
               part: "NỀN TẢNG VĂN HÓA & BẢN SẮC VNPT",
               q: "Hãy nêu 10 chữ vàng truyền thống của ngành Bưu điện Việt Nam?",
               answer:
                  "TRUNG THÀNH - DŨNG CẢM - TẬN TỤY - SÁNG TẠO - NGHĨA TÌNH",
            },
            {
               id: 5,
               part: "NỀN TẢNG VĂN HÓA & BẢN SẮC VNPT",
               q: 'Tinh thần "ONE VNPT" là biểu hiện của tư duy nào trong Hệ tư duy kiến tạo?',
               answer: "Tư duy Kết nối và Cộng hưởng.",
            },
            {
               id: 6,
               part: "NỀN TẢNG VĂN HÓA & BẢN SẮC VNPT",
               q: "Theo Nguyên tắc hành động số 7, VNPT thấu hiểu khách hàng bằng cách nào?",
               answer: "Bằng dữ liệu và trái tim.",
            },
            {
               id: 7,
               part: "8 CHUẨN MỰC HÀNH VI CHUNG",
               q: 'Chuẩn mực CM1 "Lắng nghe chủ động, Thấu hiểu ngọn ngành" yêu cầu chúng ta lắng nghe như thế nào?',
               answer:
                  "Lắng nghe không chỉ bằng tai mà bằng cả trái tim và khối óc, chủ động đặt mình vào vị trí người khác để thấu hiểu tường tận nhu cầu và bối cảnh.",
            },
            {
               id: 8,
               part: "8 CHUẨN MỰC HÀNH VI CHUNG",
               q: 'Chuẩn mực CM2 đề cao nguyên tắc góp ý như thế nào để thể hiện sự "Thẳng thắn chân thành, Giao tiếp thiện chí"?',
               answer:
                  "Tập trung vào vấn đề và hành vi, không công kích cá nhân hay đổ lỗi, luôn kèm theo gợi ý giải pháp.",
            },
            {
               id: 9,
               part: "8 CHUẨN MỰC HÀNH VI CHUNG",
               q: 'Tinh thần cốt lõi của Chuẩn mực CM3 "Giữ trọn lời hứa, Theo đuổi đến cùng" là gì?',
               answer:
                  "Xem lời hứa là thước đo uy tín; chỉ hứa những gì chắc chắn làm được và bám sát công việc cho đến khi đạt kết quả thực chất, đúng hạn.",
            },
            {
               id: 10,
               part: "8 CHUẨN MỰC HÀNH VI CHUNG",
               q: 'Tinh thần "Chịu trách nhiệm đến cùng" trong Chuẩn mực CM4 thể hiện ra sao khi gặp sự cố?',
               answer:
                  "Sẵn sàng nhận trách nhiệm thuộc về mình, không né tránh hay đổ lỗi, tập trung vào giải pháp và hành động khắc phục.",
            },
            {
               id: 11,
               part: "8 CHUẨN MỰC HÀNH VI CHUNG",
               q: 'Chuẩn mực CM5 "Kết nối chủ động, Phối hợp nhịp nhàng" yêu cầu hành động nhỏ nào ngay khi nhận được yêu cầu phối hợp?',
               answer:
                  'Phản hồi nhanh và xác nhận đã nhận yêu cầu (ví dụ nhắn "Tôi đã nhận"), chia sẻ rõ bối cảnh công việc khi bàn giao.',
            },
            {
               id: 12,
               part: "8 CHUẨN MỰC HÀNH VI CHUNG",
               q: 'Theo Chuẩn mực CM6 "Tôn trọng khác biệt, Nuôi dưỡng bao dung", sự bao dung được hiểu đúng là gì?',
               answer:
                  "Bao dung không phải là bỏ qua sai sót, mà là cho nhau cơ hội để sửa sai, cải thiện và trưởng thành.",
            },
            {
               id: 13,
               part: "8 CHUẨN MỰC HÀNH VI CHUNG",
               q: 'Chuẩn mực CM7 "Dứt điểm rõ ràng, Phản hồi nhanh gọn" quy định thời gian xử lý yêu cầu như thế nào?',
               answer:
                  "Phản hồi các yêu cầu ngay trong ngày làm việc, đặc biệt ưu tiên các yêu cầu liên quan đến khách hàng.",
            },
            {
               id: 14,
               part: "8 CHUẨN MỰC HÀNH VI CHUNG",
               q: 'Tư duy cốt lõi của Chuẩn mực CM8 "Trân trọng bước nhỏ, Tạo giá trị lớn" là gì?',
               answer:
                  "Tư duy cải tiến liên tục mỗi ngày, khai thác tối đa nguồn lực sẵn có và thực hành tiết kiệm tự giác.",
            },
            {
               id: 15,
               part: "QUY TẮC ỨNG XỬ CHUNG & NGUYÊN TẮC GIAO TIẾP",
               q: "Quy tắc QT02 quy định như thế nào về tính trung thực trong báo cáo?",
               answer:
                  'Cung cấp số liệu đúng thực tế, có nguồn gốc rõ ràng; tuyệt đối không "làm đẹp" số liệu hay che giấu sự thật.',
            },
            {
               id: 16,
               part: "QUY TẮC ỨNG XỬ CHUNG & NGUYÊN TẮC GIAO TIẾP",
               q: "Quy tắc QT06 yêu cầu cán bộ công nhân viên bảo mật tuyệt đối những thông tin nào?",
               answer:
                  "Thông tin nội bộ và dữ liệu khách hàng; chỉ trao đổi qua các kênh chính thức của Tập đoàn.",
            },
            {
               id: 17,
               part: "QUY TẮC ỨNG XỬ CHUNG & NGUYÊN TẮC GIAO TIẾP",
               q: "Cấu trúc trình bày thông tin chuẩn khi giao tiếp công việc chuyên nghiệp (QT07) gồm 4 yếu tố nào?",
               answer: "Mục tiêu – Trạng thái – Rủi ro – Hành động tiếp theo.",
            },
            {
               id: 18,
               part: "QUY TẮC ỨNG XỬ CHUNG & NGUYÊN TẮC GIAO TIẾP",
               q: "Khi nghe/gọi điện thoại công việc (QT11), người VNPT cần xưng danh như thế nào?",
               answer:
                  'Trả lời cuộc gọi sớm, xưng danh rõ ràng ("Tôi/Em là… từ VNPT…") và nêu mục đích cuộc gọi ngắn gọn.',
            },
            {
               id: 19,
               part: "QUY TẮC ỨNG XỬ CHUNG & NGUYÊN TẮC GIAO TIẾP",
               q: "Thời gian chuẩn để phản hồi email công việc theo QT12 là bao lâu?",
               answer:
                  'Trong vòng 24 giờ làm việc (kể cả khi tạm thời chỉ xác nhận "Đã nhận – Đang xử lý").',
            },
            {
               id: 20,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "4 tình huống bắt buộc phải thực thi văn hóa Cúi chào VNPT (QT26) là gì?",
               answer:
                  "1. Khi khách hàng đến/bắt đầu giao dịch.\n2. Khi khách hàng rời đi.\n3. Khi khách chủ động chào/hướng ánh mắt về phía nhân viên.\n4. Tại khu vực dịch vụ mở (sự kiện, TTTM...).",
            },
            {
               id: 21,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "Kỹ thuật cúi chào chuẩn VNPT (QT26) được thực hiện như thế nào?",
               answer:
                  'Đứng thẳng lưng, bàn tay phải khép kín đặt lên ngực trái, cúi nhẹ người một góc 15 độ từ thắt lưng trở lên, mỉm cười tươi tắn và xướng lời chào: "VNPT xin chào anh/chị!".',
            },
            {
               id: 22,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "Nguyên tắc hợp tác cốt lõi với Đối tác (QT27) là gì?",
               answer:
                  "Hợp tác cộng sinh – Cùng tạo giá trị bền vững; tôn trọng lợi ích chính đáng của nhau và làm việc theo tinh thần One VNPT.",
            },
            {
               id: 23,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "Cấp dưới cần làm gì khi có ý kiến phản biện với chỉ đạo của cấp trên (QT31)?",
               answer:
                  "Phản biện có trách nhiệm, trình bày ý kiến có cấu trúc dựa trên phân tích dữ liệu và đề xuất giải pháp thay thế khả thi.",
            },
            {
               id: 24,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "Khi xảy ra mâu thuẫn giữa các đồng nghiệp cùng cấp (QT34), cách xử lý chuẩn mực là gì?",
               answer:
                  "Giải quyết bằng đối thoại trực tiếp, tập trung vào vấn đề cụ thể, không công kích cá nhân và giữ tinh thần xây dựng.",
            },
            {
               id: 25,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: 'Tinh thần "Cùng Làm – Cùng Học – Cùng Tiến" (QT35) giữa các đồng nghiệp thể hiện ở điểm nào?',
               answer:
                  "Chủ động hỗ trợ chuyên môn, không giấu nghề, sẵn sàng chia sẻ kiến thức và kinh nghiệm để cùng nâng cao năng lực đội nhóm.",
            },
            {
               id: 26,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "Trách nhiệm cốt lõi của Lãnh đạo/Cấp trên đối với cấp dưới (QT36, QT37, QT38) là gì?",
               answer:
                  "Làm gương về chuẩn mực; phân công rõ ràng – hướng dẫn hiệu quả; quan tâm phát triển năng lực và ghi nhận đóng góp kịp thời.",
            },
            {
               id: 27,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "Quy tắc QT41 quy định thế nào về việc phát ngôn và sử dụng mạng xã hội?",
               answer:
                  "Phát ngôn đúng thẩm quyền; tách bạch tài khoản cá nhân và tổ chức; không đăng tải tài liệu mật/thông tin nội bộ lên mạng xã hội.",
            },
            {
               id: 28,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "Trong tình huống xảy ra khủng hoảng truyền thông (QT42), mỗi cá nhân phải tuân thủ quy tắc 3 KHÔNG nào?",
               answer: '"Không tự xử lý – Không bình luận – Không chia sẻ".',
            },
            {
               id: 29,
               part: "QUY TẮC ỨNG XỬ VỚI CÁC BÊN LIÊN QUAN",
               q: "Trách nhiệm của người VNPT đối với tài sản công và môi trường (QT43, QT45) là gì?",
               answer:
                  "Sử dụng đúng mục đích, tiết kiệm, tránh lãng phí; ưu tiên giải pháp xanh/tài liệu số và thu hồi, xử lý đúng quy trình rác thải điện tử.",
            },
            {
               id: 30,
               part: "CƠ CHẾ THỰC THI VÀ XỬ LÝ VI PHẠM",
               q: "Nguyên tắc xử lý vi phạm văn hóa và cam kết bảo vệ người lên tiếng (Chương 6) của Tập đoàn là gì?",
               answer:
                  "Bảo mật tuyệt đối thông tin người phản ánh, nghiêm cấm trả thù; xử lý vi phạm minh bạch, nhất quán theo triết lý kỷ luật tiến bộ (Kỷ luật tạo tốc độ - Kỷ cương tạo niềm tin).",
            },
         ];

         const PARTICIPANT_DATA = [
  { pair: 1,  name1: "Dương Công Hiệu",    name2: "Nguyễn Thị Thủy",          team: "Đoàn 4" },
  { pair: 2,  name1: "Trần Việt Anh",      name2: "Nguyễn Thị Tuyết Sương",   team: "Đoàn 6" },
  { pair: 3,  name1: "Huỳnh Minh Thoại",   name2: "Dương Thị Minh Hiền",      team: "Đoàn 5" },
  { pair: 4,  name1: "Trần Công Khanh",    name2: "Nguyễn Hồ Thảo My",        team: "Đoàn 1" },
  { pair: 5,  name1: "Nguyễn Minh Tân",    name2: "Trần Thị Trâm Anh",        team: "Đoàn 2" },
  { pair: 6,  name1: "Nguyễn Minh Thanh",  name2: "Lê Thị Minh Anh",          team: "Đoàn 5" },
  { pair: 7,  name1: "Lương Quang Trung",  name2: "Võ Trương Diễm Thuý",      team: "Đoàn 3" },
  { pair: 8,  name1: "Nguyễn Ngọc Cân",    name2: "Trần Thị Kiều Loan",       team: "Đoàn 3" },
  { pair: 9,  name1: "Lê Văn Hùng",        name2: "Trương Thị Minh Phụng",    team: "Đoàn 4" },
  { pair: 10, name1: "Bùi Bảo Long",       name2: "Nguyễn Thị Thanh Tâm",     team: "Đoàn 2" },
  { pair: 11, name1: "Hoàng Trọng Hữu",    name2: "Nguyễn Thị Kim Thuận",     team: "Đoàn 6" }
]
