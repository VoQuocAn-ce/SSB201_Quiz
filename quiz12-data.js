/**
 * SSB201 - Quiz 12 Data (FA 2023 Final Exam / FE 1024)
 * 50 câu hỏi trắc nghiệm từ thư mục Quiz12
 * Bao gồm gợi ý và giải thích chi tiết đáp án đúng / sai bằng tiếng Việt.
 */

const QUIZ_12_QUESTIONS = [
  {
    id: 1,
    topic: "Intrapersonal Communication - Self-Talk",
    question: "What refers to the self-talk of intrapersonal communication?",
    hint: "Độc thoại nội tâm (Internal monologue) là dòng suy nghĩ tự nói chuyện với chính mình.",
    correctIndices: [3],
    options: [
      { text: "Social comparisons", explanation: "Vì sao sai: So sánh xã hội là việc so sánh bản thân với người khác." },
      { text: "self-concept", explanation: "Vì sao sai: Khái niệm bản thân là tổng thể niềm tin và nhận thức về mình." },
      { text: "Self-evaluation", explanation: "Vì sao sai: Tự đánh giá là việc lượng định năng lực của mình." },
      { text: "Internal monologue", explanation: "Chính xác! Độc thoại nội tâm (Internal monologue / self-talk) là quá trình tự giao tiếp bằng suy nghĩ thầm kín bên trong tâm trí của một cá nhân." }
    ]
  },
  {
    id: 2,
    topic: "Cultural Values - Individualism",
    question: "......... means “People value individual freedom and personal independence”.",
    hint: "Văn hóa cá nhân đề cao tự do cá nhân và sự độc lập tự chủ.",
    correctIndices: [0],
    options: [
      { text: "Individualistic Cultures", explanation: "Chính xác! Các nền văn hóa theo chủ nghĩa cá nhân (Individualistic Cultures) đề cao tự do cá nhân, quyền lợi riêng tư và sự độc lập tự chủ của mỗi con người." },
      { text: "Collectivistic Cultures", explanation: "Vì sao sai: Văn hóa tập thể coi trọng sự gắn kết nhóm và sự hòa hợp cộng đồng hơn tự do cá nhân." },
      { text: "Uncertainty-Accepting Cultures", explanation: "Vì sao sai: Văn hóa chấp nhận bất định liên quan đến mức độ sẵn sàng đón nhận sự mập mờ, rủi ro." },
      { text: "Uncertainty-Rejecting Culture", explanation: "Vì sao sai: Văn hóa né tránh bất định thích sự ổn định và quy tắc nghiêm ngặt." }
    ]
  },
  {
    id: 3,
    topic: "Perception - Selective Exposure",
    question: ".................. is both information we choose to pay attention to and information that we choose to ignore, or that is unavailable to us.",
    hint: "Tiếp xúc chọn lọc (Selective exposure) bao gồm thông tin ta chọn để tiếp nhận và thông tin ta chọn lờ đi hoặc không có sẵn.",
    correctIndices: [0],
    options: [
      { text: "Selective exposure", explanation: "Chính xác! Tiếp xúc chọn lọc (Selective exposure) là việc chúng ta chủ động tìm kiếm những thông tin phù hợp với quan điểm của mình và chủ ý né tránh, phớt lờ những thông tin trái ngược hoặc không có sẵn." },
      { text: "Internal stimuli", explanation: "Vì sao sai: Kích thích nội tại phát sinh từ bên trong cơ thể (đói, mệt)." },
      { text: "External stimuli", explanation: "Vì sao sai: Kích thích từ môi trường ngoài." },
      { text: "Selective attention", explanation: "Vì sao sai: Selective attention tập trung vào việc lọc lấy một thông điệp trong vô số thông điệp đang tranh giành sự chú ý." }
    ]
  },
  {
    id: 4,
    topic: "Cultural Beliefs - Superstitions",
    question: "Beliefs that are inconsistent with the known laws of science or what a society considers to be true and rational are called .............",
    hint: "Niềm tin mâu thuẫn với quy luật khoa học hoặc tính duy lý của xã hội được gọi là sự mê tín dị đoan.",
    correctIndices: [3],
    options: [
      { text: "taboos", explanation: "Vì sao sai: Taboos là những hành vi/lời nói bị xã hội cấm kỵ." },
      { text: "cultures", explanation: "Vì sao sai: Văn hóa là tổng thể lối sống, tri thức của một cộng đồng." },
      { text: "religions", explanation: "Vì sao sai: Tôn giáo là hệ thống niềm tin thiêng liêng có tổ chức và giáo lý." },
      { text: "superstitions", explanation: "Chính xác! Mê tín dị đoan (Superstitions) là những niềm tin đi ngược lại các định luật khoa học đã biết hoặc những gì xã hội coi là duy lý và có căn cứ thực tế." }
    ]
  },
  {
    id: 5,
    topic: "Nonverbal - Demeanor",
    question: "................ involves a person's conduct or deportment and is influenced by culture.",
    hint: "Tác phong, phong thái ứng xử (demeanor) của một cá nhân chịu ảnh hưởng sâu sắc từ văn hóa.",
    correctIndices: [1],
    options: [
      { text: "Culture", explanation: "Vì sao sai: Văn hóa là hệ thống bao trùm, không phải tác phong hành vi của một cá nhân." },
      { text: "Demeanor", explanation: "Chính xác! Demeanor (tác phong / phong thái ứng xử) bao hàm cách một người đi đứng, cử chỉ, tư thế và hành vi biểu hiện ra ngoài dưới sự định hình của nền văn hóa." },
      { text: "Attitude", explanation: "Vì sao sai: Thái độ là khuynh hướng tâm lý yêu ghét bên trong." },
      { text: "Perception", explanation: "Vì sao sai: Tri giác là quá trình tiếp nhận và xử lý kích thích giác quan." }
    ]
  },
  {
    id: 6,
    topic: "Travel Etiquette",
    question: "_______________ begins with a pleasant, positive attitude and a sense of adventure, especially in international travel.",
    hint: "Phép lịch sự khi du lịch bắt đầu từ thái độ vui vẻ, tích cực và tinh thần khám phá phiêu lưu.",
    correctIndices: [2],
    options: [
      { text: "Gift giving", explanation: "Vì sao sai: Tặng quà là một nghi thức cụ thể." },
      { text: "Tipping", explanation: "Vì sao sai: Tiền boa là văn hóa ăn uống/dịch vụ." },
      { text: "Travel etiquette", explanation: "Chính xác! Văn hóa / Phép lịch sự khi du ngoạn (Travel etiquette) bắt đầu từ một thái độ hòa nhã, tích cực và sẵn sàng đón nhận những trải nghiệm mới mẻ, thích nghi với sự khác biệt văn hóa." },
      { text: "Greeting", explanation: "Vì sao sai: Chào hỏi chỉ là cử chỉ mở đầu cuộc gặp gỡ." }
    ]
  },
  {
    id: 7,
    topic: "Design Thinking - Empathize Mode",
    question: "To empathize, we immerse, which means .........",
    hint: "Trong giai đoạn Thấu cảm: Immerse (Đắm chìm) có nghĩa là trực tiếp trải nghiệm những gì người dùng trải nghiệm.",
    correctIndices: [3],
    options: [
      { text: "the foundation of a human-centered design process", explanation: "Vì sao sai: Đây là định nghĩa của Empathize nói chung." },
      { text: "we view users and their behavior in the context of their lives", explanation: "Vì sao sai: Đây là định nghĩa của Observe (Quan sát)." },
      { text: "we interact with and interview users through both scheduled and short intercept encounters", explanation: "Vì sao sai: Đây là định nghĩa của Engage (Tương tác)." },
      { text: "we experience what our user experiences", explanation: "Chính xác! Trong Design Thinking: 'Immerse: we experience what our user experiences' (Trực tiếp nhập vai trải nghiệm những cảm xúc, khó khăn của người dùng)." }
    ]
  },
  {
    id: 8,
    topic: "Language Nuance - Cliché",
    question: "A ............ is a once-clever word or phrase that has lost its impact through overuse.",
    hint: "Một từ ngữ hay cụm từ từng rất hay nhưng đã mất hết tác dụng do bị dùng quá nhiều, trở thành sáo rỗng.",
    correctIndices: [0],
    options: [
      { text: "cliché", explanation: "Chính xác! Cliché (lời sáo rỗng / rập khuôn) là một câu nói hoặc cách diễn đạt từng rất thông minh, dí dỏm nhưng đã đánh mất sức mạnh truyền cảm do bị lạm dụng quá nhiều lần." },
      { text: "jargon", explanation: "Vì sao sai: Jargon là thuật ngữ kỹ thuật chuyên ngành." },
      { text: "slang", explanation: "Vì sao sai: Slang là tiếng lóng của các nhóm xã hội." },
      { text: "racist language", explanation: "Vì sao sai: Ngôn ngữ phân biệt chủng tộc." }
    ]
  },
  {
    id: 9,
    topic: "Argumentation Strategies - GASCAP/T",
    question: "The “G” in Effective Argumentation Strategies: GASCAP/T means ............ (Fulkerson, 1996).",
    hint: "Chữ G trong mô hình GASCAP/T đại diện cho Generalization (Khái quát hóa).",
    correctIndices: [1],
    options: [
      { text: "Great", explanation: "Vì sao sai: Không phải tên chiến lược lập luận." },
      { text: "Generalization", explanation: "Chính xác! Trong mô hình các chiến lược lập luận GASCAP/T của Fulkerson (1996), chữ 'G' viết tắt của 'Generalization' (Lập luận quy nạp từ các mẫu cụ thể ra quy luật tổng quát)." },
      { text: "General", explanation: "Vì sao sai: Không phải danh từ tên chiến lược chuẩn." }
    ]
  },
  {
    id: 10,
    topic: "Styles of Language - Colloquial",
    question: ".................. involves everyday words and expressions in a familiar group context, such as conversations with family or close friends.",
    hint: "Khẩu ngữ / Ngôn ngữ thông tục hàng ngày dùng trong gia đình hoặc bạn bè thân thiết.",
    correctIndices: [0],
    options: [
      { text: "Colloquial language", explanation: "Chính xác! Ngôn ngữ khẩu ngữ / thông tục (Colloquial language) bao gồm các từ ngữ và cách diễn đạt thân mật hàng ngày, thích hợp trong bối cảnh gia đình hoặc giữa những người bạn thân." },
      { text: "Casual language", explanation: "Vì sao sai: Casual language là văn phong thoải mái nói chung, nhưng định nghĩa chuẩn xác trong giáo trình là Colloquial language." },
      { text: "Internal communications", explanation: "Vì sao sai: Truyền thông nội bộ công ty." },
      { text: "External communications", explanation: "Vì sao sai: Truyền thông với bên ngoài tổ chức." }
    ]
  },
  {
    id: 11,
    topic: "Design Thinking Foundation",
    question: ".................. is the foundation of a human-centered design process.",
    hint: "Sự thấu cảm (Empathy) là nền tảng cốt lõi của quy trình thiết kế lấy con người làm trung tâm.",
    correctIndices: [0],
    options: [
      { text: "Empathy", explanation: "Chính xác! Thấu cảm (Empathy) là nền tảng và bước khởi đầu bắt buộc của toàn bộ quy trình thiết kế lấy con người làm trung tâm (Human-Centered Design)." },
      { text: "Observe", explanation: "Vì sao sai: Observe chỉ là một kỹ thuật thuộc bước Empathy." },
      { text: "Engage", explanation: "Vì sao sai: Engage chỉ là phương pháp phỏng vấn thuộc bước Empathy." },
      { text: "Immerse", explanation: "Vì sao sai: Immerse là phương pháp đắm chìm thuộc bước Empathy." }
    ]
  },
  {
    id: 12,
    topic: "Written Negative News Advantages",
    question: "What is one distinct advantage of presenting negative news in writing?",
    hint: "Ưu điểm lớn nhất của tin xấu bằng văn bản là khả năng lên kế hoạch, chuẩn bị kỹ lưỡng câu chữ giúp thông điệp được kiểm soát tốt hơn.",
    correctIndices: [3],
    options: [
      { text: "It is the convenience for the readers who are not good at listening.", explanation: "Vì sao sai: Không phải lý do sư phạm hay năng lực nghe." },
      { text: "It is the chance for the writers to show how good their writing skill is.", explanation: "Vì sao sai: Giao tiếp tin xấu không phải nơi phô diễn tài năng viết lách." },
      { text: "It is the convenience for busy readers, who can read or review the negative message later on.", explanation: "Vì sao sai: Đọc lại tin xấu không phải lợi thế then chốt của văn bản trong tình huống này." },
      { text: "It is the planning and preparation that goes into the message, making the initial communication more predictable.", explanation: "Chính xác! Ưu điểm vượt trội của việc gửi tin xấu bằng văn bản là người gửi có thời gian lập kế hoạch, trau chuốt câu từ cẩn thận, giúp phản ứng giao tiếp ban đầu dễ dự đoán và được kiểm soát tốt hơn." }
    ]
  },
  {
    id: 13,
    topic: "Global Business Communication",
    question: "What is now the common term to replace international or intercultural business communication when speaking of communication between businesses from different countries?",
    hint: "Thuật ngữ hiện đại phổ biến hiện nay là Global business communication.",
    correctIndices: [2],
    options: [
      { text: "Interpersonal business communication.", explanation: "Vì sao sai: Giao tiếp liên cá nhân." },
      { text: "Multinational business communication.", explanation: "Vì sao sai: Truyền thông doanh nghiệp đa quốc gia." },
      { text: "Global business communication.", explanation: "Chính xác! 'Global business communication' (Giao tiếp kinh doanh toàn cầu) là thuật ngữ bao quát, chuẩn mực hiện đại thay thế cho các khái niệm cũ khi nói về sự tương tác kinh tế giữa các quốc gia." },
      { text: "Local business communication.", explanation: "Vì sao sai: Giao tiếp nội địa / địa phương." }
    ]
  },
  {
    id: 14,
    topic: "Negative News Delivery - Direct Approach",
    question: "..................... places the negative news at the beginning of the message.",
    hint: "Cách tiếp cận trực tiếp (Direct approach) đặt tin tiêu cực ngay tại phần đầu thông điệp.",
    correctIndices: [2],
    options: [
      { text: "The internal communication", explanation: "Vì sao sai: Truyền thông nội bộ." },
      { text: "The indirect approach", explanation: "Vì sao sai: Cách tiếp cận gián tiếp đưa phần đệm và giải thích lên trước, tin xấu nằm ở giữa." },
      { text: "The direct approach", explanation: "Chính xác! Direct approach (tiếp cận trực tiếp) đưa ngay tin xấu vào phần mở đầu của thông điệp, thường dùng khi người nhận đánh giá cao sự ngắn gọn hoặc trong tình huống khẩn cấp." },
      { text: "The external communication", explanation: "Vì sao sai: Truyền thông đối ngoại." }
    ]
  },
  {
    id: 15,
    topic: "Design Thinking - Ideate Mode",
    question: "......... is the mode during your design process in which you focus on idea generation.",
    hint: "Giai đoạn tập trung sinh ý tưởng sáng tạo trong Design Thinking.",
    correctIndices: [0],
    options: [
      { text: "Ideate", explanation: "Chính xác! Giai đoạn Ideate (Lên ý tưởng) tập trung toàn bộ năng lượng nhóm vào việc suy nghĩ và phát triển các ý tưởng giải pháp." },
      { text: "Empathize", explanation: "Vì sao sai: Giai đoạn thấu cảm." },
      { text: "Define", explanation: "Vì sao sai: Giai đoạn định nghĩa bài toán." },
      { text: "Test", explanation: "Vì sao sai: Giai đoạn kiểm thử." }
    ]
  },
  {
    id: 16,
    topic: "Effective Meetings Strategies",
    question: "What is NOT a strategy for effective meetings?",
    hint: "Chờ đợi tất cả mọi người đến đông đủ mới bắt đầu là thói quen xấu làm mất thời gian người đúng giờ.",
    correctIndices: [2],
    options: [
      { text: "Send out the last meeting’s minutes one week before the next meeting.", explanation: "Vì sao đúng: Gửi biên bản cuộc họp trước giúp các thành viên theo dõi tiến độ." },
      { text: "Make sure the participants know their role and requirements prior to the meeting.", explanation: "Vì sao đúng: Giúp người tham gia chuẩn bị kỹ trách nhiệm của mình." },
      { text: "Wait for all people to arrive before starting the meeting.", explanation: "Chính xác! Đây KHÔNG phải chiến lược tốt. Cuộc họp phải luôn bắt đầu đúng giờ để tôn trọng người đến sớm và duy trì tác phong chuyên nghiệp." },
      { text: "Start and end your meetings on time as scheduled.", explanation: "Vì sao đúng: Bắt đầu và kết thúc đúng giờ là nguyên tắc cốt lõi của cuộc họp thành công." }
    ]
  },
  {
    id: 17,
    topic: "Paragraph Structure - Conclusion",
    question: "The ................. brings the paragraph to a close; it may do this in any of several ways. It may reinforce the paragraph’s main point, summarize the relationships among the body sentences, and/or serve as a transition to the next paragraph.",
    hint: "Câu kết đoạn củng cố ý chính và khép lại đoạn văn.",
    correctIndices: [2],
    options: [
      { text: "body sentence", explanation: "Vì sao sai: Các câu thân đoạn dùng để giải thích chi tiết." },
      { text: "topic sentence", explanation: "Vì sao sai: Câu chủ đề nằm ở đầu đoạn." },
      { text: "conclusion sentence", explanation: "Chính xác! Câu kết luận (conclusion sentence) khép lại đoạn văn bằng cách củng cố luận điểm trọng tâm, tóm lược mối quan hệ giữa các câu hoặc tạo cầu nối chuyển tiếp." }
    ]
  },
  {
    id: 18,
    topic: "Sentence Types - Imperative",
    question: "Imperative sentences",
    hint: "Câu mệnh lệnh (imperative sentences) dùng để truyền đạt mệnh lệnh, yêu cầu hoặc chỉ dẫn.",
    correctIndices: [2],
    options: [
      { text: "make a statement.", explanation: "Vì sao sai: Đưa ra nhận định/khẳng định là câu trần thuật (Declarative sentences)." },
      { text: "ask a question.", explanation: "Vì sao sai: Đặt câu hỏi là câu nghi vấn (Interrogative sentences)." },
      { text: "convey a command.", explanation: "Chính xác! Câu mệnh lệnh (Imperative sentences) dùng để truyền tải một mệnh lệnh, yêu cầu hoặc lời chỉ dẫn trực tiếp (ví dụ: 'Please close the door.')." },
      { text: "express a strong emotion.", explanation: "Vì sao sai: Biểu lộ cảm xúc mạnh mẽ là câu cảm thán (Exclamatory sentences)." }
    ]
  },
  {
    id: 19,
    topic: "Gestalt Principles - Figure and Ground",
    question: "“The emphasis on a single item that stands out from its surroundings” is example of .............",
    hint: "Nguyên lý hình và nền (figure and ground) làm nổi bật một đối tượng trọng tâm tách biệt khỏi hậu cảnh xung quanh.",
    correctIndices: [3],
    options: [
      { text: "proximity", explanation: "Vì sao sai: Proximity là việc nhóm các vật ở gần nhau." },
      { text: "continuity", explanation: "Vì sao sai: Continuity là xu hướng nhìn nhận dòng tiếp diễn của một đường nét/mẫu hình." },
      { text: "closure", explanation: "Vì sao sai: Closure là việc tự động điền khuyết hình ảnh." },
      { text: "figure and ground", explanation: "Chính xác! Nguyên lý hình và nền (Figure and ground) là xu hướng tri giác tập trung vào một đối tượng nổi bật cụ thể (figure) trên một hậu cảnh xung quanh (ground)." }
    ]
  },
  {
    id: 20,
    topic: "Delivering Negative News Channels",
    question: "To present negative news in person, why phone calls are not recommended as best option?",
    hint: "Gọi điện thoại thiếu mất kênh tín hiệu phi ngôn ngữ trực tiếp (nét mặt, ánh mắt, tư thế) so với gặp mặt trực tiếp.",
    correctIndices: [2],
    options: [
      { text: "Because phone calls are expensive, especially international phone calls.", explanation: "Vì sao sai: Chi phí cước gọi không phải nguyên nhân chuyên môn về mặt giao tiếp." },
      { text: "Because sometimes telephone lines are not in good condition.", explanation: "Vì sao sai: Chất lượng đường truyền là vấn đề kỹ thuật nhỏ." },
      { text: "Because phone calls lack part of the nonverbal spectrum available to speakers in a live setting.", explanation: "Chính xác! Gọi điện thoại không thể truyền tải đầy đủ dải tín hiệu phi ngôn ngữ (nét mặt, ánh mắt, cử chỉ) vốn có trong cuộc gặp trực tiếp, khiến việc thể hiện sự đồng cảm và nắm bắt tâm lý người nhận trở nên khó khăn hơn." },
      { text: "Because sometimes the phones run out of battery before we end the call.", explanation: "Vì sao sai: Hết pin là sự cố ngẫu nhiên, không phải nguyên lý giao tiếp." }
    ]
  },
  {
    id: 21,
    topic: "Intercultural Communication Definition",
    question: "Intercultural can take place within a country between people of different cultural backgrounds and not necessarily between people from different countries. True or False?",
    hint: "Giao tiếp liên văn hóa hoàn toàn có thể diễn ra giữa những người có nền văn hóa khác nhau trong cùng một quốc gia đa sắc tộc/vùng miền.",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Giao tiếp liên văn hóa (Intercultural communication) có thể diễn ra ngay trong nội bộ một quốc gia giữa những người thuộc các nhóm sắc tộc, tôn giáo hay văn hóa vùng miền khác nhau, không bắt buộc phải giữa các quốc gia riêng biệt." },
      { text: "False", explanation: "Vì sao sai: Giới hạn liên văn hóa chỉ giữa các quốc gia là một ngộ nhận phổ biến." }
    ]
  },
  {
    id: 22,
    topic: "Viral Messages",
    question: "Words, sounds, or images that compel the audience to pass them along are called ____________",
    hint: "Thông điệp lan truyền (Viral messages) là từ ngữ, âm thanh hoặc hình ảnh thôi thúc người xem chia sẻ cho người khác.",
    correctIndices: [1],
    options: [
      { text: "vital messages", explanation: "Vì sao sai: Vital messages là thông điệp sống còn/thiết yếu." },
      { text: "viral messages", explanation: "Chính xác! Viral messages (thông điệp lan truyền / có tính lây lan) là những thông điệp, hình ảnh hoặc âm thanh cuốn hút đến mức thúc đẩy người tiếp nhận chủ động truyền tiếp cho bạn bè và cộng đồng." },
      { text: "funny messages", explanation: "Vì sao sai: Hài hước chỉ là một đặc tính có thể có." },
      { text: "social messages", explanation: "Vì sao sai: Thông điệp xã hội mang tính nâng cao nhận thức cộng đồng." }
    ]
  },
  {
    id: 23,
    topic: "Speech Structure - Introduction",
    question: "In your ..................... you will make a clear statement your topic; this is also the time to establish a relationship with your audience.",
    hint: "Phần mở đầu (Introduction) là nơi bạn nêu rõ chủ đề và thiết lập mối liên kết ban đầu với khán giả.",
    correctIndices: [1],
    options: [
      { text: "attention statement", explanation: "Vì sao sai: Attention statement chỉ là câu mở đầu thu hút sự chú ý tức thì." },
      { text: "introduction", explanation: "Chính xác! Trong phần mở đầu (Introduction), diễn giả trình bày rõ ràng chủ đề bài nói, tạo lập mối quan hệ tin cậy và khơi gợi sự hứng thú của khán giả đối với bài thuyết trình." },
      { text: "body", explanation: "Vì sao sai: Thân bài triển khai các luận điểm chi tiết." },
      { text: "residual message", explanation: "Vì sao sai: Residual message là thông điệp đọng lại sau bài nói." }
    ]
  },
  {
    id: 24,
    topic: "Brand Communication - Slogans",
    question: "Phrases that express the goals, aims or nature of a product, service, person, or company are called .............",
    hint: "Khẩu hiệu (slogans) thể hiện mục tiêu, bản chất của một sản phẩm, dịch vụ hoặc thương hiệu.",
    correctIndices: [3],
    options: [
      { text: "quotes", explanation: "Vì sao sai: Quotes là câu trích dẫn." },
      { text: "zingers", explanation: "Vì sao sai: Zingers là những câu nói sắc sảo, châm biếm tức thời." },
      { text: "soundbites", explanation: "Vì sao sai: Soundbites là những đoạn phát biểu ngắn gọn trích cho báo chí." },
      { text: "slogans", explanation: "Chính xác! Slogans (khẩu hiệu) là các cụm từ súc tích, ấn tượng thể hiện mục tiêu, tôn chỉ hoặc bản chất đặc trưng của một sản phẩm, dịch vụ hay tổ chức." }
    ]
  },
  {
    id: 25,
    topic: "Transitions in Speech & Writing - Signposts",
    question: "Common phrases like “on the one hand,” “on the other hand,” “the solution to this problem is,” “the reason for this is,” “for example,” “to illustrate,” and “in conclusion” or “in summary.” are good examples of ____________",
    hint: "Các cụm từ định hướng luồng tư duy và báo hiệu bước chuyển ý được gọi là signposts (biển chỉ dẫn).",
    correctIndices: [2],
    options: [
      { text: "internal summary.", explanation: "Vì sao sai: Tóm tắt nội bộ là đoạn văn tóm tắt ngắn gọn phần vừa nói." },
      { text: "repetition.", explanation: "Vì sao sai: Lặp lại từ ngữ." },
      { text: "signposts (or indicators).", explanation: "Chính xác! Các cụm từ chỉ hướng như 'mặt khác', 'ví dụ như', 'giải pháp là', 'tóm lại'... là các ví dụ điển hình của Signposts (biển chỉ dẫn / từ báo hiệu) giúp người đọc theo dõi mạch ý tưởng." },
      { text: "foreshadowing.", explanation: "Vì sao sai: Dự báo trước điềm báo trong văn học." }
    ]
  },
  {
    id: 26,
    topic: "Barriers to Intercultural Communication - Stereotypes",
    question: "......... defined as generalizations about a group of people that oversimplify their culture (Rogers, E., and Steinfatt, T., 1999), can be one significant barrier to effective intercultural communication.",
    hint: "Khuôn mẫu tư duy (Stereotypes) là những khái quát hóa giản lược quá mức về văn hóa của một nhóm người.",
    correctIndices: [0],
    options: [
      { text: "Stereotypes", explanation: "Chính xác! Khuôn mẫu tư duy (Stereotypes) được Rogers và Steinfatt (1999) định nghĩa là những nhận định khái quát hóa làm giản lược hóa quá mức về văn hóa của một nhóm người, tạo nên rào cản nghiêm trọng trong giao tiếp liên văn hóa." },
      { text: "Prejudice", explanation: "Vì sao sai: Prejudice là thái độ định kiến phán xét tiêu cực có sẵn." },
      { text: "Ethnocentrism", explanation: "Vì sao sai: Chủ nghĩa vị chủng là xem văn hóa của mình là chuẩn mực vượt trội." },
      { text: "All answers are wrong", explanation: "Vì sao sai: Stereotypes là đáp án chuẩn xác." }
    ]
  },
  {
    id: 27,
    topic: "Elements of Communication",
    question: "Written communication involves the same.......... basic elements as oral communication.",
    hint: "Giao tiếp viết có cùng 8 thành phần cơ bản giống giao tiếp nói.",
    correctIndices: [3],
    options: [
      { text: "3", explanation: "Vì sao sai: Thiếu nhiều thành phần." },
      { text: "4", explanation: "Vì sao sai: Quá giản lược." },
      { text: "5", explanation: "Vì sao sai: Chưa đủ mô hình Scott McLean." },
      { text: "8", explanation: "Chính xác! Giao tiếp viết chia sẻ cùng 8 yếu tố căn bản như giao tiếp bằng lời nói: Source, Receiver, Message, Channel, Feedback, Environment, Context, và Interference." }
    ]
  },
  {
    id: 28,
    topic: "Problem Solving Methodologies - Design Thinking",
    question: "What is called “methodology for creative problem solving. You can use it to inform your own teaching practice, or you can teach it to your students as a framework for real-world projects.”",
    hint: "Phương pháp luận giải quyết vấn đề sáng tạo áp dụng trong giảng dạy và dự án thực tế.",
    correctIndices: [1],
    options: [
      { text: "Brain storming", explanation: "Vì sao sai: Brainstorming chỉ là một kỹ thuật thuộc giai đoạn sinh ý tưởng." },
      { text: "Design thinking", explanation: "Chính xác! Tư duy thiết kế (Design thinking) là phương pháp luận toàn diện nhằm giải quyết vấn đề một cách sáng tạo, lấy con người làm trung tâm, dùng được cho cả giảng dạy và các dự án thực tế." },
      { text: "Eisenhower Matrix", explanation: "Vì sao sai: Ma trận Eisenhower dùng để quản lý thời gian và độ ưu tiên công việc." },
      { text: "SMART", explanation: "Vì sao sai: SMART là nguyên tắc thiết lập mục tiêu." }
    ]
  },
  {
    id: 29,
    topic: "Audience Analysis - Demographics",
    question: "“If you were born female, then your view of the world may be different from that of a male, and may be similar to that of many other females. Being female means that you share this “femaleness” trait with roughly half the world's population.” Here is an example of ......................",
    hint: "Giới tính, độ tuổi, nguồn gốc là các đặc tính nhân khẩu học.",
    correctIndices: [0],
    options: [
      { text: "demographic traits", explanation: "Chính xác! Đặc điểm nhân khẩu học (Demographic traits) bao gồm các đặc tính như giới tính, nhóm tuổi, học vấn... là căn cứ để phân tích nhóm khán giả." },
      { text: "individual differences", explanation: "Vì sao sai: Khác biệt cá nhân là tính cách đơn lẻ của từng người." },
      { text: "perceptions", explanation: "Vì sao sai: Tri giác là quá trình tâm lý." }
    ]
  },
  {
    id: 30,
    topic: "Technology in Communication - VoIP",
    question: "Skype is a VoIP program. VoIP stands for ____________",
    hint: "VoIP là viết tắt của Giao thức thoại qua Internet (Voice over Internet Protocol).",
    correctIndices: [0],
    options: [
      { text: "voice over Internet protocol", explanation: "Chính xác! VoIP là viết tắt của 'Voice over Internet Protocol' (Truyền tải giọng nói qua giao thức mạng Internet)." },
      { text: "voice over interpersonal protocol", explanation: "Vì sao sai: Sai thuật ngữ kỹ thuật mạng." },
      { text: "video over interpersonal protocol", explanation: "Vì sao sai: Sai chữ cái đầu và ý nghĩa." },
      { text: "video over internal protocol", explanation: "Vì sao sai: Không đúng thuật ngữ VoIP." }
    ]
  },
  {
    id: 31,
    topic: "Globalization Theories - World Culture",
    question: "What is the idea that when traditional barriers among people of differing cultures break down, emphasizing the commonality of human needs, one culture will emerge, a new culture to which all people will adhere?",
    hint: "Ý tưởng về một nền văn hóa thế giới chung (world culture) xuất hiện khi mọi ranh giới ngăn cách bị xóa nhòa.",
    correctIndices: [2],
    options: [
      { text: "It is “multinational culture.”", explanation: "Vì sao sai: Văn hóa đa quốc gia chỉ sự hiện diện của nhiều văn hóa cùng lúc." },
      { text: "It is “international culture.”", explanation: "Vì sao sai: Văn hóa quốc tế là các chuẩn mực trao đổi giữa các nước." },
      { text: "It is “world culture.”", explanation: "Chính xác! 'World culture' (Văn hóa thế giới) là lý thuyết cho rằng khi các rào cản truyền thống giữa các nền văn hóa tan biến và những điểm tương đồng về nhu cầu con người được tôn vinh, một nền văn hóa chung toàn cầu duy nhất sẽ xuất hiện." },
      { text: "It is “countries' culture.”", explanation: "Vì sao sai: Văn hóa quốc gia mang tính địa phương riêng biệt." }
    ]
  },
  {
    id: 32,
    topic: "Cultural Adaptation - Enculturation",
    question: "What is the socialization process you go through to adapt to your society?",
    hint: "Quá trình xã hội hóa để tiếp nhận và thích nghi với chính nền văn hóa mà bạn sinh ra gọi là enculturation.",
    correctIndices: [3],
    options: [
      { text: "It is acculturation.", explanation: "Vì sao sai: Acculturation (tiếp biến văn hóa) là quá trình thích nghi khi bạn chuyển sang tiếp xúc với một nền văn hóa ngoại lai mới." },
      { text: "It is cultural interaction.", explanation: "Vì sao sai: Tương tác văn hóa là sự giao lưu thông thường." },
      { text: "It is intercultural.", explanation: "Vì sao sai: Liên văn hóa là tính từ chỉ mối quan hệ giữa các nền văn hóa." },
      { text: "It is enculturation.", explanation: "Chính xác! Enculturation (sự tiếp thu văn hóa gốc / xã hội hóa ban đầu) là quá trình tự nhiên mà một cá nhân học hỏi, tiếp thu các chuẩn mực, giá trị và ngôn ngữ của chính xã hội nơi mình sinh ra và lớn lên." }
    ]
  },
  {
    id: 33,
    topic: "Communication Model - Feedback",
    question: "The ................. is composed of messages the receiver sends back to the source.",
    hint: "Các thông điệp mà người nhận gửi ngược lại cho nguồn phát được gọi là phản hồi (Feedback).",
    correctIndices: [2],
    options: [
      { text: "Channel", explanation: "Vì sao sai: Channel là phương tiện/kênh truyền tải thông điệp." },
      { text: "Noise", explanation: "Vì sao sai: Noise là nhiễu gây cản trở." },
      { text: "Feedback", explanation: "Chính xác! Phản hồi (Feedback) là tập hợp các thông điệp phản ứng bằng lời hoặc cử chỉ mà người nhận gửi ngược trở lại cho nguồn phát (source) để xác nhận việc tiếp nhận và hiểu thông điệp." },
      { text: "Conversation", explanation: "Vì sao sai: Cuộc đối thoại là toàn bộ tiến trình trao đổi." }
    ]
  },
  {
    id: 34,
    topic: "Diplomatic Etiquette - Protocol",
    question: "......... refers to customs and regulations dealing with diplomatic etiquette and courtesies expected in official dealings with persons in various cultures.",
    hint: "Nghi thức ngoại giao chính thức và các quy định tiếp đón trang trọng được gọi là protocol.",
    correctIndices: [0],
    options: [
      { text: "Protocol", explanation: "Chính xác! Protocol (nghi thức ngoại giao) là hệ thống các phong tục, quy tắc và quy định nghiêm ngặt chi phối phép lịch sự ngoại giao và lễ tân chính thức khi làm việc với đại diện các nền văn hóa." },
      { text: "Greetings", explanation: "Vì sao sai: Lời chào hỏi ban đầu." },
      { text: "Etiquette", explanation: "Vì sao sai: Etiquette là phép lịch thiệp xã hội thông thường, còn trong ngoại giao chính thức là Protocol." },
      { text: "Introduction", explanation: "Vì sao sai: Lời giới thiệu ban đầu." }
    ]
  },
  {
    id: 35,
    topic: "Organizational Emotions",
    question: "_______________ can be contagious in the workplace, and fear of the unknown can influence people to act in irrational ways.",
    hint: "Cảm xúc (Emotions) có tính lây lan mạnh mẽ nơi làm việc và nỗi sợ hãi có thể khiến mọi người hành xử phi lý trí.",
    correctIndices: [3],
    options: [
      { text: "Communication", explanation: "Vì sao sai: Giao tiếp là hoạt động trao đổi thông tin." },
      { text: "Empathy", explanation: "Vì sao sai: Thấu cảm là cảm nhận tích cực, không gây hành động phi lý trí." },
      { text: "Avoidance", explanation: "Vì sao sai: Né tránh là hành vi đối phó." },
      { text: "Emotions", explanation: "Chính xác! Cảm xúc (Emotions) rất dễ 'lây lan' nơi công sở; khi gặp biến cố, tâm lý lo lắng và sợ hãi những điều chưa biết có thể chi phối khiến con người hành xử thiếu lý trí." }
    ]
  },
  {
    id: 36,
    topic: "Ethics in Communication - The Golden Rule",
    question: "As a communicator, you are responsible for being prepared and being ethical. Being prepared includes being organized, clear, concise, and punctual. Being ethical includes being egalitarian, respectful, and trustworthy and overall, practicing the “....... rule “",
    hint: "Quy tắc Vàng (Golden Rule): Hãy đối xử với người khác theo cách mà bạn muốn họ đối xử với mình.",
    correctIndices: [0],
    options: [
      { text: "Golden", explanation: "Chính xác! Trong đạo đức truyền thông, nguyên tắc cơ bản là thực hành 'Quy tắc Vàng' (The Golden Rule): Đối xử với người nghe bằng sự tôn trọng và chân thành đúng như cách bản thân mong muốn nhận được." },
      { text: "Red", explanation: "Vì sao sai: Không có Red rule trong đạo đức giao tiếp." },
      { text: "Blue", explanation: "Vì sao sai: Không có Blue rule trong giao tiếp kinh doanh." }
    ]
  },
  {
    id: 37,
    topic: "Negative News Delivery Goals",
    question: "Which is NOT a goal when delivering negative news, in person or in written form?",
    hint: "Bỏ bê không muốn dành thời gian vì nghĩ không giải quyết được gì là thái độ hoàn toàn sai lầm.",
    correctIndices: [3],
    options: [
      { text: "Maintain the relationship, even if a formal association is being terminated.", explanation: "Vì sao đúng: Mục tiêu duy trì quan hệ nhân văn lâu dài." },
      { text: "Reduce the anxiety associated with the negative news to increase comprehension.", explanation: "Vì sao đúng: Giúp người nhận bình tâm để thấu hiểu sự việc." },
      { text: "Achieve the designated business outcome.", explanation: "Vì sao đúng: Đạt được kết quả công việc đề ra." },
      { text: "Do not spend much time on it because we cannot do much about it.", explanation: "Chính xác! Đây KHÔNG phải mục tiêu chuyên nghiệp. Truyền đạt tin xấu đòi hỏi sự đầu tư thời gian, thấu cảm và chuẩn bị chu đáo." }
    ]
  },
  {
    id: 38,
    topic: "International Etiquette - Thailand",
    question: "Do not wear _________ in Thailand because these colors have funeral connotations.",
    hint: "Ở Thái Lan, màu đen và trắng trơn gắn liền với đám tang và sự tang tóc.",
    correctIndices: [1],
    options: [
      { text: "red and solid yellow", explanation: "Vì sao sai: Đỏ và vàng là màu may mắn và hoàng gia ở Thái Lan." },
      { text: "black or solid white", explanation: "Chính xác! Tại Thái Lan, màu đen (black) và trắng trơn (solid white) liên quan đến đám tang và sự mất mát tang chế (funeral connotations), không nên mặc khi đi làm hay dự sự kiện vui tươi." },
      { text: "red and solid blue", explanation: "Vì sao sai: Màu đỏ và xanh dương nằm trên quốc kỳ Thái Lan." },
      { text: "yellow and solid grey", explanation: "Vì sao sai: Màu vàng tượng trưng cho hoàng gia Thái Lan rất được tôn kính." }
    ]
  },
  {
    id: 39,
    topic: "Arab Cultural Taboos - Family",
    question: "In Arab countries, it is considered taboo to ask about the health of a man’s _____________.",
    hint: "Tại các quốc gia Ả Rập truyền thống, hỏi thăm trực tiếp về người vợ của đối tác nam là điều cấm kỵ.",
    correctIndices: [1],
    options: [
      { text: "father", explanation: "Vì sao sai: Hỏi thăm người cha thể hiện sự tôn kính bề trên." },
      { text: "wife", explanation: "Chính xác! Tại thế giới Ả Rập theo truyền thống Hồi giáo, việc hỏi thăm trực tiếp về người vợ (wife) của một người đàn ông là điều cấm kỵ (taboo) do quan niệm về sự tôn nghiêm và riêng tư của phụ nữ; chỉ nên hỏi thăm chung về gia đình (family)." },
      { text: "mother", explanation: "Vì sao sai: Mẹ là đấng sinh thành đáng kính, nhưng điều cấm kỵ lớn nhất đối với nam giới là hỏi về vợ anh ta." },
      { text: "son", explanation: "Vì sao sai: Hỏi thăm con trai là cử chỉ thân thiện bình thường." },
      { text: "daughter", explanation: "Vì sao sai: Hỏi thăm gia đình chung chung là chấp nhận được, nhưng câu hỏi kiêng kỵ trực tiếp nhắm vào 'wife'." }
    ]
  },
  {
    id: 40,
    topic: "Message Types - Secondary Messages",
    question: "......... refer to the unintentional content, both verbal and nonverbal. Your audience will form impressions of your intentional messages, both negative and positive, over which you have no control.",
    hint: "Thông điệp thứ cấp (Secondary messages) bao gồm những ấn tượng vô tình bộc lộ ra mà bạn không thể kiểm soát hoàn toàn.",
    correctIndices: [1],
    options: [
      { text: "Primary messages", explanation: "Vì sao sai: Thông điệp chính là nội dung có chủ ý." },
      { text: "Secondary messages", explanation: "Chính xác! Secondary messages (thông điệp phụ / thứ cấp) là nội dung truyền tải ngoài ý muốn (unintentional content), cả bằng lời và phi ngôn ngữ, mà khán giả tự cảm nhận và hình thành ấn tượng mà người nói không hoàn toàn kiểm soát được." },
      { text: "Auxiliary messages", explanation: "Vì sao sai: Auxiliary messages là phong cách biểu đạt có chủ đích đi kèm (ngữ điệu, tư thế)." },
      { text: "Report", explanation: "Vì sao sai: Báo cáo là thể loại văn bản." }
    ]
  },
  {
    id: 41,
    topic: "Listening Skills - Empathetic Listening",
    question: "__________________ listening involves listening to both the literal and implied meanings within a message.",
    hint: "Lắng nghe thấu cảm (Empathetic listening) lắng nghe cả nghĩa đen hiển ngôn lẫn nghĩa bóng hàm ẩn trong thông điệp.",
    correctIndices: [1],
    options: [
      { text: "Supportive", explanation: "Vì sao sai: Lắng nghe hỗ trợ tạo môi trường khích lệ." },
      { text: "Empathetic", explanation: "Chính xác! Lắng nghe thấu cảm (Empathetic listening) là việc lắng nghe sâu sắc để hiểu thấu cả ý nghĩa tường minh (literal) lẫn hàm ý ẩn sâu (implied meanings) và cảm xúc bên dưới thông điệp của người nói." },
      { text: "Defensive", explanation: "Vì sao sai: Lắng nghe phòng thủ là chỉ chăm chăm tìm cách đối đáp/bảo vệ mình." },
      { text: "Passive", explanation: "Vì sao sai: Lắng nghe thụ động là nghe mà không có sự xử lý tư duy tích cực." }
    ]
  },
  {
    id: 42,
    topic: "Communication Model in Practice - Feedback",
    question: "“Heather replies with an e-mail saying yes.” is an example of......................",
    hint: "Hành động gửi email phản hồi đồng ý là phản hồi trong bối cảnh giao tiếp văn bản.",
    correctIndices: [0],
    options: [
      { text: "feedback in written application", explanation: "Chính xác! Việc Heather gửi một email trả lời 'Có' chính là sự phản hồi (feedback) được thực hiện dưới hình thức ứng dụng văn bản (written application)." },
      { text: "source in oral application", explanation: "Vì sao sai: Email là văn bản, không phải nói miệng (oral)." },
      { text: "channel in written application", explanation: "Vì sao sai: Email là kênh truyền, nhưng bản thân hành động trả lời 'yes' là phản hồi (feedback)." },
      { text: "source in written application", explanation: "Vì sao sai: Heather ở đây đóng vai trò người phản hồi lại thông điệp trước đó." }
    ]
  },
  {
    id: 43,
    topic: "Communication Process Order",
    question: "Which of the following most correctly describes the order of the communication process?",
    hint: "Quy trình tuần tự chuẩn: Người gửi nảy ra ý tưởng -> Người gửi mã hóa thành thông điệp -> Người gửi truyền đi -> Người nhận tiếp nhận.",
    correctIndices: [0],
    options: [
      { text: "The sender has an idea, the sender encodes a message, the sender transmits the message, the receiver gets the message.", explanation: "Chính xác! Tiến trình giao tiếp chuẩn: 1. Nguồn phát nảy ra ý tưởng -> 2. Nguồn phát mã hóa thành thông điệp -> 3. Truyền đi qua kênh -> 4. Người nhận tiếp nhận thông điệp (sau đó giải mã và phản hồi)." },
      { text: "The sender transmits the message, the sender receives feedback, the receiver decodes the message.", explanation: "Vì sao sai: Không thể nhận phản hồi trước khi người nhận giải mã thông điệp." },
      { text: "The sender has an idea, the receiver decodes the message, the receiver gets the message.", explanation: "Vì sao sai: Người nhận phải nhận được tin trước khi giải mã." },
      { text: "The sender transmits the message, the sender encodes the message, the receiver sends feedback.", explanation: "Vì sao sai: Phải mã hóa trước khi truyền tin đi." }
    ]
  },
  {
    id: 44,
    topic: "Factors in Intercultural Communication",
    question: "What may have an impact on the success of intercultural communication encounters?",
    hint: "Kỹ năng ngôn ngữ là chìa khóa then chốt tác động trực tiếp đến thành công của giao tiếp liên văn hóa.",
    correctIndices: [1],
    options: [
      { text: "Appearance", explanation: "Vì sao sai: Ngoại hình chỉ tạo ấn tượng ban đầu, không mang tính quyết định sự thấu hiểu thông điệp." },
      { text: "Language skills", explanation: "Chính xác! Kỹ năng ngôn ngữ (Language skills) là yếu tố mang tính quyết định trực tiếp đến sự chuẩn xác và thành công của mọi cuộc tiếp xúc giao tiếp liên văn hóa." },
      { text: "Family status", explanation: "Vì sao sai: Tình trạng gia đình không quyết định hiệu quả giao tiếp quốc tế." },
      { text: "Position and status", explanation: "Vì sao sai: Địa vị ảnh hưởng đến nghi thức nhưng không thay thế được khả năng truyền đạt ngôn ngữ." }
    ]
  },
  {
    id: 45,
    topic: "Communication Technology & Stress",
    question: "Pagers and other wireless devices have contributed to stress in the communication process.",
    hint: "Các thiết bị không dây và máy nhắn tin khiến con người luôn trong trạng thái bị kết nối 24/7, gây gia tăng căng thẳng.",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Máy nhắn tin (pagers), điện thoại thông minh và thiết bị không dây liên tục kết nối làm mờ ranh giới giữa công việc và đời sống riêng, gây nên tình trạng quá tải thông tin và căng thẳng (stress) trong quá trình giao tiếp." },
      { text: "False", explanation: "Vì sao sai: Đây là thực tế đã được nhiều nghiên cứu tâm lý học giao tiếp chứng minh." }
    ]
  },
  {
    id: 46,
    topic: "Business Card Cultural Importance",
    question: "In some cultures, what are taken seriously that you need to include on your business card?",
    hint: "Chức vụ và bằng cấp học vị được xem trọng ở các nền văn hóa truyền thống.",
    correctIndices: [0],
    options: [
      { text: "My position and titles or degrees in addition to my company name.", explanation: "Chính xác! Tại nhiều nền văn hóa (như Đức, Nhật, Việt Nam), chức danh công việc và học hàm, học vị (titles or degrees) là những chỉ dấu quan trọng về mặt xã hội và sự tôn trọng." },
      { text: "My name, email, and home address in addition to my company name.", explanation: "Vì sao sai: Địa chỉ nhà không đưa vào danh thiếp kinh doanh." },
      { text: "My name, nickname, and email in addition to my company name.", explanation: "Vì sao sai: Không dùng biệt danh trên danh thiếp chính thức." },
      { text: "My email address, full name, and cellphone number in addition to my company name.", explanation: "Vì sao sai: Thiếu yếu tố địa vị chức danh được tôn trọng." }
    ]
  },
  {
    id: 47,
    topic: "Nature of Conflict",
    question: "Which statement is NOT correct?",
    hint: "Xung đột luôn gắn liền với sự khan hiếm nguồn lực (scarce resources), không phải dồi dào tài nguyên.",
    correctIndices: [2],
    options: [
      { text: "Conflict is universal.", explanation: "Vì sao đúng: Xung đột là hiện tượng mang tính phổ quát." },
      { text: "Conflict is associated with incompatible goals.", explanation: "Vì sao đúng: Mục tiêu không tương thích là nguồn gốc xung đột." },
      { text: "Conflict is associated with abundant resources.", explanation: "Chính xác! Phát biểu này SAI (nên là đáp án đúng): Xung đột bắt nguồn từ việc tài nguyên khan hiếm (scarce resources), không phải dồi dào (abundant)." },
      { text: "Conflict is associated with interference.", explanation: "Vì sao đúng: Sự cản trở từ phía đối phương là một dấu hiệu nhận diện xung đột." }
    ]
  },
  {
    id: 48,
    topic: "Informative Speech Purpose",
    question: "“Speech to inform” means",
    hint: "Phát biểu thông tin nhằm gia tăng kiến thức, giảng giải chủ đề và chia sẻ chuyên môn.",
    correctIndices: [0],
    options: [
      { text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise", explanation: "Chính xác! Mục tiêu cốt lõi của bài phát biểu thông tin (Speech to inform) là cung cấp tri thức mới, giải thích rõ ràng về một vấn đề và chia sẻ hiểu biết chuyên môn với người nghe." },
      { text: "to show the audience how to use, operate, or do something.", explanation: "Vì sao sai: Đây là bài nói hướng dẫn thao tác (Demonstration speech)." },
      { text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.", explanation: "Vì sao sai: Đây là bài nói thuyết phục (Persuasive speech)." },
      { text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.", explanation: "Vì sao sai: Đây là bài nói giải trí (Speech to entertain)." }
    ]
  },
  {
    id: 49,
    topic: "Speech Framework - Outline",
    question: "A(n)............ is a framework that organizes main ideas and subordinate ideas in a hierarchical series of roman numerals and alphabetical letters.",
    hint: "Dàn ý tổ chức các ý chính và ý phụ theo số La Mã và chữ cái.",
    correctIndices: [0],
    options: [
      { text: "Outline", explanation: "Chính xác! Dàn ý (Outline) là khung cấu trúc phân cấp sắp xếp các ý tưởng chính và luận điểm phụ theo hệ thống số La Mã và chữ cái." },
      { text: "Schedule", explanation: "Vì sao sai: Lịch trình công việc." },
      { text: "Timeline", explanation: "Vì sao sai: Dòng thời gian sự kiện." },
      { text: "Report", explanation: "Vì sao sai: Báo cáo hoàn chỉnh." }
    ]
  },
  {
    id: 50,
    topic: "Perception Stimuli - Internal",
    question: ".................... are those that arise from within one’s self, such as being hungry.",
    hint: "Kích thích nội tại xuất phát từ chính bên trong bản thân, ví dụ như cảm giác đói.",
    correctIndices: [0],
    options: [
      { text: "Internal stimuli", explanation: "Chính xác! Kích thích nội tại (Internal stimuli) là những kích thích phát sinh từ chính bên trong sinh lý hoặc tâm trí của chúng ta, chẳng hạn như cảm giác đói bụng, mệt mỏi hay đau đớn." },
      { text: "External stimuli", explanation: "Vì sao sai: Kích thích từ môi trường bên ngoài." },
      { text: "Selective attention", explanation: "Vì sao sai: Sự chú ý có chọn lọc là quá trình nhận thức." }
    ]
  }
];

window.QUIZ_12_QUESTIONS = QUIZ_12_QUESTIONS;
