/**
 * SSB201 - Quiz 8 Data (SU 2024 Final Exam / FE 2330)
 * 50 câu hỏi trắc nghiệm từ thư mục Quiz8
 * Bao gồm gợi ý và giải thích chi tiết đáp án đúng / sai bằng tiếng Việt.
 */

const QUIZ_8_QUESTIONS = [
  {
    id: 1,
    topic: "Nonverbal & Culture",
    question: "................ involves a person's conduct or deportment and is influenced by culture.",
    hint: "Thái độ, tác phong, phong thái ứng xử của một người chịu sự định hình của văn hóa.",
    correctIndices: [1],
    options: [
      { text: "Culture", explanation: "Vì sao sai: Culture là toàn bộ hệ thống văn hóa nói chung, không phải tác phong hành vi của một cá nhân." },
      { text: "Demeanor", explanation: "Chính xác! Demeanor (phong thái / tác phong ứng xử) bao hàm cách cư xử, cử chỉ, tư thế của một người và chịu ảnh hưởng sâu sắc từ nền văn hóa mà họ thuộc về." },
      { text: "Attitude", explanation: "Vì sao sai: Attitude (thái độ) là cảm xúc/xu hướng yêu ghét tâm lý, không miêu tả toàn bộ tác phong bên ngoài (conduct/deportment)." },
      { text: "Perception", explanation: "Vì sao sai: Perception (tri giác) là cách tiếp nhận và xử lý thông tin giác quan." }
    ]
  },
  {
    id: 2,
    topic: "Communication Messages",
    question: "A word, sound, or image that arouses an emotional response in the audience is called ____________",
    hint: "Một từ ngữ, âm thanh hoặc hình ảnh kích hoạt phản ứng cảm xúc mạnh mẽ ở người nghe.",
    correctIndices: [2],
    options: [
      { text: "an appeal to emotion", explanation: "Vì sao sai: Appeal to emotion là phương pháp/lối ngụy biện đánh vào cảm xúc, không phải từ vựng gọi chung một từ/hình ảnh kích hoạt." },
      { text: "a viral message", explanation: "Vì sao sai: Viral message là thông điệp lan truyền nhanh chóng trên mạng." },
      { text: "a trigger", explanation: "Chính xác! Trigger (từ/hình ảnh kích hoạt) là một từ ngữ, âm thanh hoặc hình ảnh khơi gợi phản ứng cảm xúc tức thì ở khán giả." },
      { text: "a social message", explanation: "Vì sao sai: Social message là thông điệp xã hội." }
    ]
  },
  {
    id: 3,
    topic: "Definition of Communication",
    question: "Communication can be defined as",
    hint: "Định nghĩa kinh điển của Scott McLean: Quá trình thấu hiểu và chia sẻ ý nghĩa.",
    correctIndices: [0],
    options: [
      { text: "the process of understanding and sharing meaning", explanation: "Chính xác! Theo Scott McLean: 'Communication is the process of understanding and sharing meaning' (Giao tiếp là quá trình thấu hiểu và chia sẻ ý nghĩa)." },
      { text: "Transfering message", explanation: "Vì sao sai: Truyền thông điệp chỉ là khía cạnh kỹ thuật, không phản ánh bản chất chia sẻ ý nghĩa chung." },
      { text: "message", explanation: "Vì sao sai: Message chỉ là thông điệp, là một thành phần trong quá trình giao tiếp." },
      { text: "Understanding", explanation: "Vì sao sai: Chỉ có sự thấu hiểu thì chưa đủ, cần có sự trao đổi và chia sẻ ý nghĩa giữa các bên." }
    ]
  },
  {
    id: 4,
    topic: "Rhetoric & Aristotle",
    question: "Pathos means",
    hint: "Trong tam giác tu từ của Aristotle: Ethos là uy tín, Logos là lý lẽ logic, Pathos là cảm xúc/nhiệt huyết.",
    correctIndices: [2],
    options: [
      { text: "credibility", explanation: "Vì sao sai: Uy tín của người nói tương ứng với Ethos." },
      { text: "logic of your thoughts", explanation: "Vì sao sai: Tính logic và bằng chứng chặt chẽ tương ứng với Logos." },
      { text: "passion and enthusiasm", explanation: "Chính xác! Pathos là việc tác động vào cảm xúc, đam mê và sự nhiệt huyết (passion and enthusiasm) của khán giả." },
      { text: "information", explanation: "Vì sao sai: Thông tin thuần túy thuộc về nội dung thông điệp/Logos." }
    ]
  },
  {
    id: 5,
    topic: "Message Structure",
    question: "At the end of the message, your .................... should provide the audience with a sense of closure by summarizing your main points and relating them to the overall topic.",
    hint: "Phần kết bài tóm tắt các điểm chính và tạo cảm giác khép lại trọn vẹn cho thông điệp.",
    correctIndices: [2],
    options: [
      { text: "attention statement", explanation: "Vì sao sai: Attention statement nằm ở đầu bài để thu hút sự chú ý." },
      { text: "introduction", explanation: "Vì sao sai: Introduction là phần mở đầu giới thiệu chủ đề." },
      { text: "conclusion", explanation: "Chính xác! Conclusion (kết luận) nằm ở cuối bài, mang lại cảm giác trọn vẹn (closure) bằng cách tóm tắt các ý chính và liên hệ lại với chủ đề tổng quan." },
      { text: "residual message", explanation: "Vì sao sai: Residual message là thông điệp đọng lại sau bài nói, còn conclusion là một phần cấu trúc văn bản/bài phát biểu." }
    ]
  },
  {
    id: 6,
    topic: "Writing Process - Revising",
    question: "When you ................... your document, you change one word for another, make subtle changes, and improve it.",
    hint: "Giai đoạn sửa đổi câu chữ, tinh chỉnh từng từ để hoàn thiện bài viết.",
    correctIndices: [1],
    options: [
      { text: "review", explanation: "Vì sao sai: Review là đọc lại để đánh giá tổng thể." },
      { text: "revise", explanation: "Chính xác! Revise (chỉnh sửa / tu chính) là hành động thay đổi từ ngữ, thực hiện các tinh chỉnh tinh tế và cải thiện chất lượng câu chữ của tài liệu." },
      { text: "writing", explanation: "Vì sao sai: Writing là quá trình viết nội dung." },
      { text: "reading", explanation: "Vì sao sai: Reading là đọc thông thường." }
    ]
  },
  {
    id: 7,
    topic: "Design Thinking - Empathy",
    question: "......................... is the foundation of a human-centered design process.",
    hint: "Nền tảng của quy trình thiết kế lấy con người làm trung tâm theo Stanford d.school.",
    correctIndices: [0],
    options: [
      { text: "Empathy", explanation: "Chính xác! Empathy (Sự thấu cảm) là nền tảng cốt lõi của quy trình tư duy thiết kế lấy con người làm trung tâm (human-centered design process)." },
      { text: "Observe", explanation: "Vì sao sai: Observe chỉ là một trong các kỹ thuật nằm trong bước Empathy." },
      { text: "Engage", explanation: "Vì sao sai: Engage (tương tác) chỉ là một kỹ thuật phỏng vấn trong bước Empathy." },
      { text: "Immerse", explanation: "Vì sao sai: Immerse (nhập vai trải nghiệm) là một kỹ thuật trong bước Empathy." }
    ]
  },
  {
    id: 8,
    topic: "Cultural Dimensions",
    question: "...................... means “People value the family or community over the needs of the individual”.",
    hint: "Nền văn hóa tập thể đặt lợi ích gia đình, cộng đồng lên trên nhu cầu của cá nhân.",
    correctIndices: [1],
    options: [
      { text: "Individualistic Cultures", explanation: "Vì sao sai: Văn hóa cá nhân đề cao sự tự do, thành tựu và nhu cầu của từng cá nhân." },
      { text: "Collectivistic Cultures", explanation: "Chính xác! Collectivistic Cultures (văn hóa tập thể) là những nền văn hóa coi trọng gia đình, tập thể hoặc cộng đồng cao hơn nhu cầu của từng cá nhân riêng lẻ." },
      { text: "Uncertainty-Accepting Cultures", explanation: "Vì sao sai: Đo lường mức độ chấp nhận rủi ro và bất định." },
      { text: "Uncertainty-Rejecting Culture", explanation: "Vì sao sai: Đo lường mức độ né tránh rủi ro và quy củ." }
    ]
  },
  {
    id: 9,
    topic: "Communication Context",
    question: "The ....................of the communication interaction involves the setting, scene, and expectations of the individuals involved.",
    hint: "Bối cảnh giao tiếp bao gồm địa điểm, khung cảnh và những kỳ vọng của các bên tham gia.",
    correctIndices: [0],
    options: [
      { text: "Context", explanation: "Chính xác! Context (bối cảnh) của sự tương tác giao tiếp bao gồm hoàn cảnh, không gian, thời gian và những kỳ vọng tâm lý của các cá nhân tham gia." },
      { text: "Channel", explanation: "Vì sao sai: Channel là phương tiện/kênh truyền tải thông điệp (lời nói, email, điện thoại)." },
      { text: "Members", explanation: "Vì sao sai: Members là các thành viên tham gia giao tiếp." }
    ]
  },
  {
    id: 10,
    topic: "Communication Messages",
    question: "............. refer to the intentional content, both verbal and nonverbal. These are the words or ways you choose to express yourself and communicate your message.",
    hint: "Thông điệp sơ cấp bao gồm các nội dung có chủ ý (cả lời nói và phi ngôn ngữ) mà bạn chủ động lựa chọn để diễn đạt.",
    correctIndices: [0],
    options: [
      { text: "Primary messages", explanation: "Chính xác! Primary messages (thông điệp chính/sơ cấp) là những nội dung có chủ đích (intentional content), bao gồm cả từ ngữ và cử chỉ mà bạn có ý thức lựa chọn để truyền đạt." },
      { text: "Secondary messages", explanation: "Vì sao sai: Secondary messages là những thông tin vô tình bộc lộ (unintentional) mà người nghe tự suy diễn." },
      { text: "Auxiliary messages", explanation: "Vì sao sai: Auxiliary messages là các cách thức biểu đạt bổ trợ (ngữ điệu, biểu cảm) đi kèm thông điệp chính." },
      { text: "Report", explanation: "Vì sao sai: Báo cáo không phải định nghĩa của intentional content." }
    ]
  },
  {
    id: 11,
    topic: "Intercultural Etiquette - Arab Taboos",
    question: "In Arab countries, it is considered taboo to ask about the health of a man’s _____________.",
    hint: "Trong văn hóa truyền thống các nước Ả Rập, việc hỏi thăm trực tiếp về sức khỏe của vợ người khác là điều kiêng kỵ.",
    correctIndices: [1],
    options: [
      { text: "father", explanation: "Vì sao sai: Hỏi thăm sức khỏe của cha hay các nam thành viên lớn tuổi là thể hiện sự tôn trọng." },
      { text: "wife", explanation: "Chính xác! Trong văn hóa truyền thống Ả Rập, việc hỏi thăm trực tiếp về người vợ (wife) hay các thành viên nữ trong gia đình của một người đàn ông bị xem là điều cấm kỵ (taboo) vì xâm phạm sự riêng tư và danh dự gia đình." },
      { text: "mother", explanation: "Vì sao sai: Thường kiêng kỵ chung cho phái nữ nhưng chuẩn mực câu hỏi là người vợ (wife)." },
      { text: "son", explanation: "Vì sao sai: Hỏi thăm con trai là hoàn toàn bình thường." },
      { text: "daughter", explanation: "Vì sao sai: Lựa chọn chuẩn nhất theo giáo trình là 'wife'." }
    ]
  },
  {
    id: 12,
    topic: "Interpersonal Needs (FIRO) - Control",
    question: "According to Schutz, __________________ share the need between the individual and the group, and may try to hold a departmental meeting to gather information and share.",
    hint: "Người có phong cách lãnh đạo/kiểm soát dân chủ, biết cân bằng giữa cá nhân và nhóm.",
    correctIndices: [0],
    options: [
      { text: "democrats", explanation: "Chính xác! Theo Will Schutz, Democrats (người dân chủ) là những người biết chia sẻ nhu cầu kiểm soát giữa cá nhân và tập thể, thường tổ chức các cuộc họp để lấy ý kiến và chia sẻ thông tin." },
      { text: "abdicrats", explanation: "Vì sao sai: Abdicrats là người thoái thác quyền lực và trách nhiệm cho người khác." },
      { text: "personal individuals", explanation: "Vì sao sai: Personal individuals thuộc thang nhu cầu tình cảm (affection), không thuộc nhu cầu kiểm soát (control)." },
      { text: "autocrats", explanation: "Vì sao sai: Autocrats là người độc đoán muốn kiểm soát mọi thứ một mình." }
    ]
  },
  {
    id: 13,
    topic: "Communication Channels - VoIP",
    question: "With the availability of VoIP, both audio and visual images are available to the conversation participants. True or False?",
    hint: "Công nghệ VoIP (Thoại qua giao thức Internet) hiện đại hỗ trợ cả âm thanh và hình ảnh video trực tuyến.",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Với sự phát triển của công nghệ VoIP (như Zoom, Skype, Teams), người tham gia hội thoại có thể truyền tải đồng thời cả âm thanh (audio) và hình ảnh video (visual images)." },
      { text: "False", explanation: "Vì sao sai: Đây là nhận định hoàn toàn đúng." }
    ]
  },
  {
    id: 14,
    topic: "Delivering Negative News - Buffer",
    question: "In a negative news message, the beginning sentences “Thank you for your order. We appreciate your interest in our product.” can be an example of _______________",
    hint: "Câu mở đầu nhẹ nhàng, lịch sự nhằm giảm bớt cảm xúc tiêu cực trước khi nêu tin từ chối.",
    correctIndices: [0],
    options: [
      { text: "buffer or cushion", explanation: "Chính xác! Câu cảm ơn đơn hàng và ghi nhận sự quan tâm của khách hàng là ví dụ kinh điển của phần đệm (buffer or cushion) trong cách tiếp cận gián tiếp khi báo tin xấu." },
      { text: "redirect", explanation: "Vì sao sai: Redirect (chuyển hướng) đưa ra giải pháp hoặc hướng đi thay thế ở phần sau của thông điệp." },
      { text: "negative news", explanation: "Vì sao sai: Đây là lời cảm ơn lịch sự, không chứa tin tiêu cực." },
      { text: "explanation", explanation: "Vì sao sai: Đây chưa phải là phần giải thích lý do từ chối." }
    ]
  },
  {
    id: 15,
    topic: "Design Thinking - Stoke",
    question: "Stoke is the method used in Ideate process.",
    hint: "Hoạt động 'Stoke' (khởi động năng lượng sáng tạo) là một phương pháp chính thức trong cẩm nang Bootcamp Bootleg của Stanford d.school cho giai đoạn Ideate.",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Trong bộ công cụ Bootcamp Bootleg của d.school Stanford, 'Stoke' được xếp vào danh mục phương pháp của giai đoạn Ideate nhằm giúp nhóm làm nóng não bộ, giải phóng năng lượng sáng tạo trước khi bước vào phiên tạo ý tưởng." },
      { text: "False", explanation: "Vì sao sai: Stoke được công nhận là một phương pháp chính thức trong tài liệu giáo trình d.school." }
    ]
  },
  {
    id: 16,
    topic: "Gift Giving in Business",
    question: "Each country has its seasons and occasions for ______________ which in some cultures is an art and is considered an integral part of building intercultural professional and social relationships.",
    hint: "Nghệ thuật tặng quà trong quan hệ kinh doanh và xã giao quốc tế.",
    correctIndices: [2],
    options: [
      { text: "tipping", explanation: "Vì sao sai: Tiền boa (tipping) là tiền trả cho dịch vụ, không phải nét nghệ thuật xây dựng quan hệ chuyên nghiệp." },
      { text: "greeting", explanation: "Vì sao sai: Chào hỏi diễn ra hàng ngày, không gắn với các 'seasons and occasions'." },
      { text: "giving gifts", explanation: "Chính xác! Giving gifts (nghệ thuật tặng quà) ở nhiều nền văn hóa (như Nhật Bản, Trung Quốc) là một nét nghệ thuật tinh tế và là một phần không thể thiếu để xây dựng mối quan hệ làm ăn lâu dài." },
      { text: "hugging", explanation: "Vì sao sai: Ôm không phải là nghệ thuật xã giao quốc tế trang trọng theo định nghĩa này." }
    ]
  },
  {
    id: 17,
    topic: "Communication Model - Environment",
    question: "“Heather is at her desk when she receives Jay’s e-mail.” is an example of ......",
    hint: "Vị trí ngồi tại bàn làm việc của người nhận thư là yếu tố môi trường trong giao tiếp văn bản.",
    correctIndices: [0],
    options: [
      { text: "environment in written application", explanation: "Chính xác! Việc Heather ngồi tại bàn làm việc riêng khi đọc email của Jay là ví dụ điển hình về môi trường xung quanh (environment) trong mô hình giao tiếp bằng văn bản." },
      { text: "environment in oral application", explanation: "Vì sao sai: Email là ứng dụng văn bản (written), không phải giao tiếp truyền miệng (oral)." },
      { text: "channel in written application", explanation: "Vì sao sai: Kênh (channel) là internet/hệ thống email, không phải nơi chốn bàn làm việc." },
      { text: "channel in oral application", explanation: "Vì sao sai: Hoàn toàn sai bản chất." }
    ]
  },
  {
    id: 18,
    topic: "Attitudes & Perception",
    question: "A(n) ................is your immediate disposition toward a concept or an object.",
    hint: "Khuynh hướng tâm lý phản ứng yêu/ghét ngay tức thì đối với một đối tượng hoặc ý niệm.",
    correctIndices: [1],
    options: [
      { text: "nonverbal communication", explanation: "Vì sao sai: Giao tiếp phi ngôn ngữ là phương thức truyền tải bằng ngôn ngữ cơ thể." },
      { text: "attitude", explanation: "Chính xác! McLean định nghĩa: Attitude (thái độ) là khuynh hướng hoặc tâm thế tức thì (immediate disposition) của bạn hướng về một ý niệm hoặc một đối tượng (thích hoặc không thích)." },
      { text: "beliefs", explanation: "Vì sao sai: Beliefs (niềm tin) là quan niệm vững chắc về điều gì đúng hay sai." },
      { text: "value", explanation: "Vì sao sai: Value (giá trị) là chuẩn mực đạo đức cốt lõi lâu bền nhất." }
    ]
  },
  {
    id: 19,
    topic: "Direct vs Indirect Approach",
    question: "The ____________ is often associated with a message where the audience values brevity and the message needs to be concise.",
    hint: "Phương pháp tiếp cận đi thẳng vào vấn đề khi người nhận đề cao tính ngắn gọn, súc tích.",
    correctIndices: [1],
    options: [
      { text: "indirect approach", explanation: "Vì sao sai: Tiếp cận gián tiếp đi đường vòng, đưa dẫn chứng hoặc lời đệm trước, tốn nhiều thời gian hơn." },
      { text: "direct approach", explanation: "Chính xác! The direct approach (tiếp cận trực tiếp) rất thích hợp khi người nhận coi trọng sự ngắn gọn, muốn nắm bắt thông điệp chính ngay tức thì mà không cần rào trước đón sau." },
      { text: "negative approach", explanation: "Vì sao sai: Không phải tên phương pháp cấu trúc thông điệp chuẩn." },
      { text: "positive approach", explanation: "Vì sao sai: Không phải tên phương pháp đối lập với indirect approach." }
    ]
  },
  {
    id: 20,
    topic: "Conflict Characteristics",
    question: "Which statement is NOT correct?",
    hint: "Xung đột là một hiện tượng phổ quát (universal) tồn tại ở mọi nền văn hóa và mọi mối quan hệ xã hội.",
    correctIndices: [0],
    options: [
      { text: "Conflict is not universal.", explanation: "Chính xác! Khẳng định 'Conflict is not universal' (Xung đột không mang tính phổ quát) là SAI (NOT correct); sự thật là xung đột mang tính phổ biến và tồn tại ở khắp mọi nơi (Conflict is universal)." },
      { text: "Conflict is associated with incompatible goals.", explanation: "Vì sao sai: Đây là nhận định ĐÚNG về xung đột (mục tiêu không tương thích)." },
      { text: "Conflict is associated with scarce resources.", explanation: "Vì sao sai: Đây là nhận định ĐÚNG (nguồn lực khan hiếm dễ dẫn đến tranh chấp)." },
      { text: "Conflict is associated with interference.", explanation: "Vì sao sai: Đây là nhận định ĐÚNG (sự cản trở lẫn nhau khi đạt mục tiêu)." }
    ]
  },
  {
    id: 21,
    topic: "Conflict Characteristics",
    question: "Which statement is NOT correct?",
    hint: "Xung đột xảy ra khi hai bên có những mục tiêu trái ngược nhau (incompatible goals), chứ không phải mục tiêu tương thích.",
    correctIndices: [1],
    options: [
      { text: "Conflict is universal.", explanation: "Vì sao sai: Đây là nhận định hoàn toàn ĐÚNG." },
      { text: "Conflict is associated with compatible goals.", explanation: "Chính xác! Nhận định này là SAI (NOT correct): xung đột xuất hiện khi các mục tiêu xung khắc/không tương thích (incompatible goals), chứ nếu tương thích (compatible) thì hai bên đã hợp tác hòa thuận." },
      { text: "Conflict is associated with scarce resources.", explanation: "Vì sao sai: Đây là nhận định ĐÚNG." },
      { text: "Conflict is associated with interference.", explanation: "Vì sao sai: Đây là nhận định ĐÚNG." }
    ]
  },
  {
    id: 22,
    topic: "Goals of Delivering Bad News",
    question: "Which is NOT a goal when delivering negative news, in person or in written form?",
    hint: "Không bao giờ được phép có thái độ phủi tay, bỏ mặc không quan tâm chỉ vì 'không làm gì được'.",
    correctIndices: [3],
    options: [
      { text: "Maintain the relationship, even if a formal association is being terminated.", explanation: "Vì sao sai: Đây là mục tiêu ĐÚNG (duy trì quan hệ tốt đẹp lâu dài)." },
      { text: "Reduce the anxiety associated with the negative news to increase comprehension.", explanation: "Vì sao sai: Đây là mục tiêu ĐÚNG (giảm lo lắng cho người nghe)." },
      { text: "Achieve the designated business outcome.", explanation: "Vì sao sai: Đây là mục tiêu ĐÚNG (đạt được kết quả kinh doanh đề ra)." },
      { text: "Do not spend much time on it because we cannot do much about it.", explanation: "Chính xác! Nhận định này KHÔNG PHẢI là mục tiêu (NOT a goal): truyền đạt tin xấu đòi hỏi sự đầu tư thời gian, chuẩn bị kỹ lưỡng và thấu cảm chứ không được phép qua loa, vô trách nhiệm." }
    ]
  },
  {
    id: 23,
    topic: "Speech Transitions - Signposts",
    question: "In communication, writing or talking, phrases like “The first item,” “The second item,” “Now we've got X and Y in hands; what else do we need? Our third item is,” are considered _____________ which help your audience keep track of progress as your message continues.",
    hint: "Các từ chỉ dẫn / biển báo giúp người đọc người nghe theo dõi thứ tự tiến trình của bài nói.",
    correctIndices: [2],
    options: [
      { text: "internal summaries", explanation: "Vì sao sai: Internal summaries tóm tắt lại những gì vừa trình bày." },
      { text: "repetition", explanation: "Vì sao sai: Repetition là việc lặp lại nguyên văn từ ngữ." },
      { text: "signposts (or indicators)", explanation: "Chính xác! Signposts / Indicators (từ định hướng / biển chỉ đường) là các cụm từ như 'thứ nhất', 'thứ hai', 'điểm tiếp theo' giúp người nghe dễ dàng theo dõi mạch phát triển của thông điệp." },
      { text: "foreshadowing", explanation: "Vì sao sai: Foreshadowing là gợi mở trước diễn biến tương lai." }
    ]
  },
  {
    id: 24,
    topic: "Design Thinking - Empathize",
    question: "To empathize, we engage, which means ..................................................",
    hint: "Tương tác và phỏng vấn trực tiếp người dùng qua các cuộc trò chuyện lên lịch sẵn hoặc ngẫu nhiên.",
    correctIndices: [2],
    options: [
      { text: "the foundation of a human-centered design process", explanation: "Vì sao sai: Đây là miêu tả chung của bước Empathize." },
      { text: "View users and their behavior in the context of their lives", explanation: "Vì sao sai: Đây là hành động 'Observe' (Quan sát)." },
      { text: "Interact with and interview users through both scheduled and short intercept encounters", explanation: "Chính xác! Trong bước Empathize, Engage (Tương tác) có nghĩa là trò chuyện, phỏng vấn trực tiếp người dùng cả trong các buổi hẹn trước lẫn các cuộc gặp gỡ chặn bắt ngắn tại hiện trường." },
      { text: "Experience what your user experiences", explanation: "Vì sao sai: Đây là hành động 'Immerse' (Nhập vai trải nghiệm)." }
    ]
  },
  {
    id: 25,
    topic: "Goals of Delivering Bad News",
    question: "Which is NOT a goal when delivering negative news, in person or in written form?",
    hint: "Khi truyền đạt tin xấu, việc đi thẳng ngay vào vấn đề và nói cụt lủn không phải là mục tiêu tổng quát (vì thường cần buffer gián tiếp).",
    correctIndices: [2],
    options: [
      { text: "Be clear and concise in order not to require additional clarification.", explanation: "Vì sao sai: Đây là mục tiêu ĐÚNG (rõ ràng, không để hiểu lầm)." },
      { text: "Help the receiver understand and accept the news.", explanation: "Vì sao sai: Đây là mục tiêu ĐÚNG (giúp người nhận thấu hiểu và chấp nhận tin buồn)." },
      { text: "Get straight to the point and keep it short.", explanation: "Chính xác! Đây KHÔNG PHẢI là mục tiêu tiêu chuẩn (NOT a goal): trong giao tiếp tin xấu, tiếp cận trực tiếp đôi khi quá đột ngột và gây sốc; người giao tiếp thường phải dùng đệm (buffer) và giải thích lý do trước." },
      { text: "Maintain trust and respect for the business or organization and for the receiver.", explanation: "Vì sao sai: Đây là mục tiêu ĐÚNG (giữ gìn niềm tin và sự tôn trọng lẫn nhau)." }
    ]
  },
  {
    id: 26,
    topic: "Types of Speeches",
    question: "“Speech to inform” means",
    hint: "Bài phát biểu nhằm nâng cao kiến thức của khán giả, giảng giải về một đề tài và chia sẻ chuyên môn.",
    correctIndices: [0],
    options: [
      { text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise", explanation: "Chính xác! Speech to inform (bài phát biểu cung cấp thông tin) có mục đích mở rộng hiểu biết của khán giả, giảng giải về một vấn đề và chia sẻ kinh nghiệm chuyên môn." },
      { text: "to show the audience how to use, operate, or do something.", explanation: "Vì sao sai: Đây là mục đích của bài phát biểu hướng dẫn thực hành (demonstrative speech)." },
      { text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.", explanation: "Vì sao sai: Đây là mục đích của bài phát biểu thuyết phục (persuasive speech)." },
      { text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.", explanation: "Vì sao sai: Đây là bài phát biểu giải trí (speech to entertain)." }
    ]
  },
  {
    id: 27,
    topic: "Global Business Mindset",
    question: "The personnel of an organization must have a _________ mindset for the firm to succeed in the international marketplace.",
    hint: "Tư duy toàn cầu giúp doanh nghiệp vươn tầm và thành công trên thương trường quốc tế.",
    correctIndices: [0],
    options: [
      { text: "global", explanation: "Chính xác! Nhân sự trong tổ chức cần có tư duy toàn cầu (global mindset) để công ty có thể thích ứng và thành công trên thị trường quốc tế." },
      { text: "local", explanation: "Vì sao sai: Tư duy cục bộ địa phương (local mindset) sẽ hạn chế tầm nhìn quốc tế." },
      { text: "cultural", explanation: "Vì sao sai: Cần sự rộng mở toàn cầu (global mindset)." },
      { text: "open", explanation: "Vì sao sai: 'Open' mang nghĩa chung chung, thuật ngữ kinh doanh chuẩn xác là 'global mindset'." }
    ]
  },
  {
    id: 28,
    topic: "Delivering Negative News - Etiquette",
    question: "“Keep silent while you let the other person “speak his piece.” If you are reading, make an effort to understand and digest the news without mental interruptions.” Here is an example of .....",
    hint: "Giữ im lặng để đối phương giãi bày hết tâm sự, không ngắt lời họ.",
    correctIndices: [1],
    options: [
      { text: "take turn", explanation: "Vì sao sai: Take turn là lần lượt nói chuyện." },
      { text: "don't interrupt", explanation: "Chính xác! Giữ im lặng lắng nghe người khác nói hết phần của họ và đọc kỹ mà không để suy nghĩ chen ngang chính là nguyên tắc 'Don't interrupt' (không ngắt lời)." },
      { text: "set aside a special time", explanation: "Vì sao sai: Dành thời gian riêng là sắp xếp lịch hẹn, không phải hành động lắng nghe không chen ngang." }
    ]
  },
  {
    id: 29,
    topic: "Sentence Types",
    question: "Imperative sentences",
    hint: "Câu mệnh lệnh có chức năng đưa ra một yêu cầu, chỉ thị hoặc mệnh lệnh.",
    correctIndices: [2],
    options: [
      { text: "make a statement.", explanation: "Vì sao sai: Câu trần thuật (Declarative sentences) mới có chức năng phát biểu nhận định." },
      { text: "ask a question.", explanation: "Vì sao sai: Câu nghi vấn (Interrogative sentences) có chức năng đặt câu hỏi." },
      { text: "convey a command.", explanation: "Chính xác! Imperative sentences (câu mệnh lệnh) dùng để truyền đạt một chỉ thị, yêu cầu hoặc mệnh lệnh (convey a command)." },
      { text: "express a strong emotion.", explanation: "Vì sao sai: Câu cảm thán (Exclamatory sentences) dùng để bộc lộ cảm xúc mãnh liệt." }
    ]
  },
  {
    id: 30,
    topic: "Perception & Information Selection",
    question: "............... is both information we choose to pay attention to and information that we choose to ignore, or that is unavailable to us.",
    hint: "Hiện tượng chọn lọc tiếp xúc thông tin: ta chủ động chọn xem cái mình thích và phớt lờ những điều không muốn nghe.",
    correctIndices: [0],
    options: [
      { text: "Selective exposure", explanation: "Chính xác! Selective exposure (tiếp xúc có chọn lọc) là việc chúng ta chủ động tìm kiếm tiếp cận những thông tin củng cố quan điểm của mình và phớt lờ hoặc tránh né những thông tin trái chiều." },
      { text: "Internal stimuli", explanation: "Vì sao sai: Kích thích nội tại xuất phát từ bên trong cơ thể (như cơn đói)." },
      { text: "External stimuli", explanation: "Vì sao sai: Kích thích từ môi trường bên ngoài." },
      { text: "Selective attention", explanation: "Vì sao sai: Selective attention là tập trung sự chú ý vào một thông điệp cụ thể khi có nhiều kích thích cùng lúc." }
    ]
  },
  {
    id: 31,
    topic: "Intercultural Etiquette - India Taboos",
    question: "Why in India we should not give any gifts made of cowhide?",
    hint: "Trong Ấn Độ giáo, bò là loài động vật linh thiêng được tôn kính tuyệt đối.",
    correctIndices: [1],
    options: [
      { text: "Because it may be considered cheap gift.", explanation: "Vì sao sai: Đồ da bò thường đắt tiền chứ không rẻ." },
      { text: "Because the cow is sacred in India.", explanation: "Chính xác! Ở Ấn Độ, đa số người dân theo đạo Hindu tôn sùng loài bò như con vật linh thiêng (sacred animal). Tặng các món đồ làm từ da bò (cowhide) là sự xúc phạm nghiêm trọng đến tín ngưỡng của họ." },
      { text: "Because it means we do not respect the recipient.", explanation: "Vì sao sai: Đây là hệ quả của việc xúc phạm con vật linh thiêng, nguyên nhân cốt lõi là tín ngưỡng tôn giáo." },
      { text: "Because it may be considered expensive gift.", explanation: "Vì sao sai: Đắt tiền không phải lý do kiêng kỵ." }
    ]
  },
  {
    id: 32,
    topic: "Effective Communication (3 Ps)",
    question: "Effective communication takes",
    hint: "Ba chữ P kinh điển trong giao tiếp hiệu quả của Scott McLean: Chuẩn bị, Luyện tập, Kiên trì.",
    correctIndices: [0],
    options: [
      { text: "Preparation, practice, persistence", explanation: "Chính xác! Scott McLean nhấn mạnh: 'Effective communication takes Preparation, practice, persistence' (Chuẩn bị chu đáo, luyện tập thường xuyên và kiên trì rèn luyện)." },
      { text: "Learning, contact, talking", explanation: "Vì sao sai: Không đúng bộ ba nguyên tắc trong giáo trình." },
      { text: "Listen, sharing, communicate", explanation: "Vì sao sai: Không phải bộ 3 Ps tiêu chuẩn." }
    ]
  },
  {
    id: 33,
    topic: "International Business Etiquette",
    question: "Why the awareness of the holidays and holy days of other cultures is important for business?",
    hint: "Hiểu biết về ngày lễ và ngày nghỉ tôn giáo giúp doanh nghiệp lên lịch điện thoại và các chuyến công tác phù hợp, tránh gọi điện lúc đối tác đang nghỉ lễ.",
    correctIndices: [1],
    options: [
      { text: "Because it will help us in scheduling our great tours visiting other countries.", explanation: "Vì sao sai: Đi du lịch giải trí không phải mục tiêu quan trọng trong hoạt động kinh doanh (for business)." },
      { text: "Because it will help us in scheduling telephone calls and business trips.", explanation: "Chính xác! Hiểu rõ lịch ngày lễ tôn giáo và quốc lễ của các nước giúp doanh nghiệp lên lịch các cuộc gọi điện thoại và kế hoạch công tác thuận lợi, tránh gọi điện hay sang thăm khi văn phòng đối tác đóng cửa." },
      { text: "Because it will help us in scheduling our holidays.", explanation: "Vì sao sai: Không chỉ để lên lịch nghỉ ngơi của bản thân." },
      { text: "Because it will help us in scheduling our works at home.", explanation: "Vì sao sai: Không liên quan đến hợp tác kinh doanh quốc tế." }
    ]
  },
  {
    id: 34,
    topic: "Crisis Communication - Media Rules",
    question: "What is NOT a hallmark rule of media interviews?",
    hint: "Quy tắc phỏng vấn truyền thông KHÔNG bắt buộc bạn phải trả lời mọi câu hỏi mà phóng viên đặt ra.",
    correctIndices: [3],
    options: [
      { text: "Anything you say can and often will be used against you.", explanation: "Vì sao sai: Đây là nguyên tắc chuẩn mực ĐÚNG (mọi lời nói đều có thể bị sử dụng để chống lại bạn)." },
      { text: "Never say anything you would not feel comfortable hearing quoted out of context on the evening news.", explanation: "Vì sao sai: Đây là nguyên tắc ĐÚNG kinh điển." },
      { text: "Be prepared for the unexpected as well as the expected.", explanation: "Vì sao sai: Đây là nguyên tắc ĐÚNG (luôn chuẩn bị cho các tình huống bất ngờ)." },
      { text: "Always answer all the questions you are asked.", explanation: "Chính xác! Đây KHÔNG PHẢI là quy tắc chuẩn (NOT a hallmark rule): trong phỏng vấn báo chí, người đại diện không bắt buộc phải trả lời trực diện các câu hỏi gài bẫy, suy diễn mà có thể sử dụng kỹ thuật bắc cầu (bridging) để dẫn về thông điệp chính." }
    ]
  },
  {
    id: 35,
    topic: "Semantic Triangle",
    question: "Semantic triangle includes",
    hint: "Tam giác ngữ nghĩa của Ogden & Richards bao gồm: Ý nghĩ (Thought), Đối tượng thực tế (Subject/Object) và Từ ngữ biểu đạt (Word/Symbol).",
    correctIndices: [0],
    options: [
      { text: "Thought, Subject/object, Word", explanation: "Chính xác! Tam giác ngữ nghĩa (Semantic Triangle) của Charles Ogden và Ivor Richards kết nối ba yếu tố: Tư duy/Ý nghĩ (Thought), Sự vật thực tế (Subject/object/referent) và Biểu tượng/Từ ngữ (Word/symbol)." },
      { text: "Member, Leader, Power", explanation: "Vì sao sai: Đây là các khái niệm về lãnh đạo nhóm, không thuộc tam giác ngữ nghĩa." },
      { text: "Empathize, Subject/object, Action", explanation: "Vì sao sai: Empathize thuộc Design Thinking, không liên quan tam giác ngữ nghĩa." }
    ]
  },
  {
    id: 36,
    topic: "Culture - Frontstage vs Backstage",
    question: "The cultural information that you are willing to share with outsiders is considered _______________.",
    hint: "Những nét văn hóa bề nổi mà bạn sẵn sàng bộc lộ, chia sẻ với người ngoài được gọi là văn hóa tiền đài.",
    correctIndices: [1],
    options: [
      { text: "culture symbol", explanation: "Vì sao sai: Biểu tượng văn hóa là hình ảnh đại diện, không phải khái niệm phân chia chia sẻ thông tin." },
      { text: "frontstage culture", explanation: "Chính xác! Frontstage culture (văn hóa tiền đài) là phần văn hóa bề nổi, các nghi thức, trang phục và thông tin mà một cộng đồng sẵn sàng bộc lộ và chia sẻ cởi mở với người ngoài (outsiders)." },
      { text: "stereotype", explanation: "Vì sao sai: Stereotype là định kiến rập khuôn." },
      { text: "backstage culture", explanation: "Vì sao sai: Backstage culture (văn hóa hậu trường) là các giá trị ngầm ẩn, niềm tin sâu kín chỉ chia sẻ trong nội bộ nhóm người cùng văn hóa." }
    ]
  },
  {
    id: 37,
    topic: "Writing Habits - Targeted Practice",
    question: "Targeted practice in writing, which involves identifying your weak areas and specifically working to improve them, is especially valuable.",
    hint: "Luyện tập có chủ đích: nhận diện điểm yếu của mình và tập trung cải thiện chúng mang lại giá trị rất lớn.",
    correctIndices: [1],
    options: [
      { text: "False", explanation: "Vì sao sai: Đây là nhận định hoàn toàn đúng đắn." },
      { text: "True", explanation: "Chính xác! Scott McLean nhấn mạnh rằng luyện tập có chủ đích (targeted practice) — xác định đúng điểm yếu ngữ pháp, câu từ hoặc lập luận để rèn luyện khắc phục — là phương pháp rèn luyện kỹ năng viết giá trị nhất." }
    ]
  },
  {
    id: 38,
    topic: "Intercultural Etiquette - Europe Vacation",
    question: "Do not expect to conduct business in Europe during _____________ as this is considered the vacation month, and many people close their businesses during this time.",
    hint: "Tháng nghỉ hè truyền thống của đa số các nước châu Âu, đặc biệt là Pháp, Ý, Tây Ban Nha.",
    correctIndices: [2],
    options: [
      { text: "January", explanation: "Vì sao sai: Tháng 1 là thời điểm bắt đầu năm làm việc mới sau kỳ nghỉ năm mới ngắn." },
      { text: "June", explanation: "Vì sao sai: Tháng 6 vẫn là thời gian làm việc bình thường." },
      { text: "August", explanation: "Chính xác! Tháng 8 (August) là tháng nghỉ mát truyền thống tại châu Âu; nhiều công ty và cơ quan đóng cửa hoặc giảm thiểu hoạt động kinh doanh để đi nghỉ hè." },
      { text: "December", explanation: "Vì sao sai: Tháng 12 chỉ nghỉ lễ Giáng sinh vào tuần cuối năm." }
    ]
  },
  {
    id: 39,
    topic: "Business Presentation - Credibility",
    question: "In the business environment, a “knock” (or lesson learned) may come at the expense of your credibility through a blown presentation to a client.",
    hint: "Một bài thuyết trình thất bại trước khách hàng có thể giáng một đòn đau vào uy tín cá nhân của bạn.",
    correctIndices: [1],
    options: [
      { text: "False", explanation: "Vì sao sai: Đây là nhận định hoàn toàn đúng của Scott McLean." },
      { text: "True", explanation: "Chính xác! Trong môi trường kinh doanh thực tế, một thất bại (knock) có thể phải trả giá bằng chính uy tín cá nhân của bạn (credibility) nếu bạn chuẩn bị tồi và làm hỏng buổi thuyết trình với đối tác." }
    ]
  },
  {
    id: 40,
    topic: "Cultural Dimensions - Physical",
    question: "The ____________ dimension of culture relates to the reality of our environment and the cultural activities of the people.",
    hint: "Chiều kích vật lý của văn hóa gắn liền với thực tế môi trường sống và các hoạt động văn hóa sinh tồn của con người.",
    correctIndices: [0],
    options: [
      { text: "physical", explanation: "Chính xác! Physical dimension (chiều kích vật lý của văn hóa) liên quan đến thực tế địa lý môi trường tự nhiên xung quanh và các hoạt động văn hóa vật chất của con người thích nghi với môi trường đó." },
      { text: "psychological", explanation: "Vì sao sai: Chiều kích tâm lý liên quan đến nhận thức, cảm xúc và tư duy nội tâm." },
      { text: "language", explanation: "Vì sao sai: Ngôn ngữ là hệ thống ký hiệu giao tiếp." },
      { text: "value", explanation: "Vì sao sai: Giá trị là chuẩn mực phán xét đúng sai." }
    ]
  },
  {
    id: 41,
    topic: "Types of Speeches",
    question: "“Speech to entertain” means",
    hint: "Bài phát biểu giải trí nhằm mang lại niềm vui, sự thư giãn cho khán giả qua phong cách nhẹ nhàng, hài hước.",
    correctIndices: [3],
    options: [
      { text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise.", explanation: "Vì sao sai: Đây là bài phát biểu cung cấp thông tin (speech to inform)." },
      { text: "to show the audience how to use, operate, or do something.", explanation: "Vì sao sai: Đây là bài phát biểu hướng dẫn thực hành (speech to demonstrate)." },
      { text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.", explanation: "Vì sao sai: Đây là bài phát biểu thuyết phục (speech to persuade)." },
      { text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.", explanation: "Chính xác! Speech to entertain (bài phát biểu mang tính giải trí) có mục tiêu mang lại tiếng cười, sự thư giãn (amuse the audience) thông qua lối nói hóm hỉnh, nhẹ nhàng nhưng vẫn có thể lồng ghép thông điệp sâu sắc." }
    ]
  },
  {
    id: 42,
    topic: "Verbal Communication - Sound Bite",
    question: "The President John F. Kennedy's famous statement, “Ask not what your country can do for you, but what you can do for your country.”, is a ____________",
    hint: "Một câu trích ngắn gọn, đắt giá, dễ nhớ và thường xuyên được báo chí phát lại trên truyền thông.",
    correctIndices: [3],
    options: [
      { text: "slogan", explanation: "Vì sao sai: Slogan là khẩu hiệu thương mại hoặc chiến dịch quảng cáo." },
      { text: "memory", explanation: "Vì sao sai: Không phải thuật ngữ ngôn ngữ truyền thông." },
      { text: "quotes", explanation: "Vì sao sai: Dù đây là một câu trích dẫn, nhưng trong phân loại thuật ngữ truyền thông của McLean, nó được định nghĩa là một sound bite." },
      { text: "sound bite", explanation: "Chính xác! Câu nói bất hủ của Tổng thống Kennedy là ví dụ tiêu biểu cho một 'sound bite' — một phát ngôn ngắn gọn, đanh thép, xúc tích và gây ấn tượng mạnh mẽ cho công chúng trên các phương tiện truyền thông." }
    ]
  },
  {
    id: 43,
    topic: "Argumentation Strategies (GASCAP/T)",
    question: "The “G” in Effective Argumentation Strategies: GASCAP/T means ............ (Fulkerson, 1996).",
    hint: "Chữ G đầu tiên trong mô hình lập luận GASCAP/T đại diện cho Generalization (Khái quát hóa).",
    correctIndices: [1],
    options: [
      { text: "Great", explanation: "Vì sao sai: Không phải thuật ngữ lập luận." },
      { text: "Generalization", explanation: "Chính xác! Trong mô hình chiến lược lập luận GASCAP/T của Richard Fulkerson, chữ 'G' đại diện cho 'Generalization' (Lập luận bằng khái quát hóa: từ nhiều trường hợp cụ thể rút ra kết luận chung)." },
      { text: "General", explanation: "Vì sao sai: Thuật ngữ chuẩn xác là danh từ 'Generalization'." }
    ]
  },
  {
    id: 44,
    topic: "Self & Individuality",
    question: "We may choose to define ....... as one’s own sense of individuality, personal characteristics, motivations, and actions (McLean, S., 2005).",
    hint: "Bản ngã / Bản thân là nhận thức về tính cá nhân, đặc điểm, động lực và hành động của chính mình.",
    correctIndices: [3],
    options: [
      { text: "us", explanation: "Vì sao sai: Đại từ số nhiều chỉ chúng tôi/chúng ta." },
      { text: "me", explanation: "Vì sao sai: Không phải danh từ khái niệm tâm lý học." },
      { text: "yourself", explanation: "Vì sao sai: Đại từ phản thân, không phải thuật ngữ định nghĩa." },
      { text: "self", explanation: "Chính xác! Scott McLean (2005) định nghĩa: 'Self' (Bản ngã / Bản thân) là ý thức của một người về tính cá nhân riêng biệt, các đặc điểm cá tính, động lực và hành động của chính họ." }
    ]
  },
  {
    id: 45,
    topic: "Paragraph Structure",
    question: "The ................... brings the paragraph to a close; it may do this in any of several ways. It may reinforce the paragraph’s main point, summarize the relationships among the body sentences, and/or serve as a transition to the next paragraph.",
    hint: "Câu kết đoạn có nhiệm vụ khép lại đoạn văn, củng cố luận điểm chính hoặc làm cầu nối sang đoạn tiếp theo.",
    correctIndices: [2],
    options: [
      { text: "body sentence", explanation: "Vì sao sai: Body sentence là câu thân đoạn phát triển chi tiết các dẫn chứng." },
      { text: "topic sentence", explanation: "Vì sao sai: Topic sentence là câu chủ đề mở đầu đoạn văn nêu ý chính." },
      { text: "conclusion sentence", explanation: "Chính xác! Conclusion sentence (câu kết đoạn) có chức năng khép lại đoạn văn, củng cố ý chính, tóm lược mối liên hệ giữa các câu hoặc đóng vai trò chuyển tiếp sang đoạn văn tiếp theo." }
    ]
  },
  {
    id: 46,
    topic: "Perception & Stimuli",
    question: ".................... are those that arise from within one’s self, such as being hungry.",
    hint: "Kích thích nội tại phát sinh từ bên trong cơ thể con người, ví dụ như cảm giác đói bụng, mệt mỏi.",
    correctIndices: [0],
    options: [
      { text: "Internal stimuli", explanation: "Chính xác! Internal stimuli (kích thích nội tại) là những kích thích phát sinh từ bên trong cơ thể hoặc tâm lý của chính mình (như cơn đói, khát, đau đầu, buồn ngủ)." },
      { text: "External stimuli", explanation: "Vì sao sai: External stimuli là những kích thích từ môi trường bên ngoài tác động vào giác quan (ánh sáng, âm thanh, mùi hương)." },
      { text: "Selective attention", explanation: "Vì sao sai: Selective attention là sự chú ý có chọn lọc." }
    ]
  },
  {
    id: 47,
    topic: "Design Thinking - HMW Statements",
    question: "Fill the blanks\nWhen you have too many ideas, you can use “................” statements.",
    hint: "Câu hỏi kinh điển trong Design Thinking giúp tái cấu trúc và mở khóa các góc nhìn sáng tạo: 'Làm thế nào chúng ta có thể...?'",
    correctIndices: [0],
    options: [
      { text: "How might we?", explanation: "Chính xác! Các câu phát biểu 'How might we?' (HMW - Chúng ta có thể làm thế nào để...?) là công cụ tư duy thiết kế đắc lực giúp chuyển hướng các ý tưởng và thách thức thành những cơ hội sáng tạo giải pháp cụ thể." },
      { text: "How can we?", explanation: "Vì sao sai: 'How can we' mang tính thực thi thực tế hạn hẹp hơn, không tạo không gian giả định rộng mở bằng 'might'." },
      { text: "How must we?", explanation: "Vì sao sai: 'Must' mang tính ép buộc, dập tắt sự sáng tạo tự do." },
      { text: "What should we?", explanation: "Vì sao sai: Không phải cú pháp chuẩn HMW trong Design Thinking." }
    ]
  },
  {
    id: 48,
    topic: "Business Cards Etiquette",
    question: "In non-English speaking countries, have the information on your card printed in English on one side and in ................. on the other.",
    hint: "Khi đi công tác quốc tế ở nước không nói tiếng Anh, danh thiếp nên in một mặt tiếng Anh và mặt còn lại bằng ngôn ngữ bản địa.",
    correctIndices: [1],
    options: [
      { text: "Chinese", explanation: "Vì sao sai: Chỉ dùng tiếng Trung khi bạn đến các nước nói tiếng Hoa." },
      { text: "the local language", explanation: "Chính xác! Quy tắc lịch sự chuẩn quốc tế khi giao tiếp tại các quốc gia không dùng tiếng Anh là in danh thiếp 2 mặt: một mặt tiếng Anh và mặt kia bằng ngôn ngữ bản địa (the local language) của nước sở tại." },
      { text: "French", explanation: "Vì sao sai: Chỉ dùng tiếng Pháp khi công tác tại khu vực cộng đồng Pháp ngữ." },
      { text: "Spanish", explanation: "Vì sao sai: Chỉ dùng khi đến các nước nói tiếng Tây Ban Nha." }
    ]
  },
  {
    id: 49,
    topic: "Culture & Mindsets",
    question: ".......... are ways of being that allow us to see, perceive, and reason through our own cultural awareness.",
    hint: "Tư duy / Định hướng tâm thức định hình cách chúng ta nhìn nhận, tri giác và suy luận thông qua nhận thức văn hóa của mình.",
    correctIndices: [2],
    options: [
      { text: "Confidences", explanation: "Vì sao sai: Sự tự tin không phải là lăng kính nhận thức văn hóa." },
      { text: "Ethnocentrism", explanation: "Vì sao sai: Thuyết vị chủng là đánh giá văn hóa người khác dựa trên chuẩn mực dân tộc mình." },
      { text: "Mindsets", explanation: "Chính xác! Mindsets (Tâm thức / Tư duy) là các phương thức tồn tại và lăng kính tư duy cho phép ta nhìn nhận, tri giác và lập luận thấu đáo thông qua nhận thức văn hóa của chính mình." },
      { text: "Cultures", explanation: "Vì sao sai: Câu văn đã nhắc đến 'cultural awareness', chủ từ phù hợp với 'ways of being' ở đây là Mindsets." }
    ]
  },
  {
    id: 50,
    topic: "Intercultural Etiquette - Handshakes",
    question: "In Asian countries, a proper handshake is .........",
    hint: "Ở các quốc gia châu Á, cái bắt tay đúng mực thường nhẹ nhàng, lịch thiệp thay vì siết quá mạnh bạo.",
    correctIndices: [0],
    options: [
      { text: "gentle", explanation: "Chính xác! Khác với văn hóa phương Tây ưa chuộng cái bắt tay siết chặt (firm handshake) thể hiện sự tự tin, ở các nước châu Á, cái bắt tay đúng mực nên nhẹ nhàng (gentle) và tôn trọng không gian cá nhân." },
      { text: "firm", explanation: "Vì sao sai: Bắt tay siết mạnh là chuẩn mực của văn hóa phương Tây (Mỹ, Đức), nhưng người châu Á có thể thấy quá hung hăng hoặc lấn lướt." },
      { text: "light and quick", explanation: "Vì sao sai: Nhanh quá có thể bị hiểu là qua loa, chiếu lệ." },
      { text: "brusque and firm", explanation: "Vì sao sai: Cộc lốc và mạnh bạo là hành vi bất lịch sự ở mọi nền văn hóa." }
    ]
  }
];
