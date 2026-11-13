/**
 * SSB201 - Quiz 11 Data (FA 2023 Retake / RE 1119)
 * 29 câu hỏi trắc nghiệm từ thư mục Quiz11
 * Bao gồm gợi ý và giải thích chi tiết đáp án đúng / sai bằng tiếng Việt.
 */

const QUIZ_11_QUESTIONS = [
  {
    id: 1,
    topic: "Crisis Communication - Key Emergency Info",
    question: "What is NOT a key type of information during an emergency (Mallet, L., Vaught, C., and Brinch, M., 1999)?",
    hint: "Trong lúc nguy cấp, việc cứu người và triển khai nguồn lực là ưu tiên, không phải việc kiểm tra xem đài truyền hình đã đưa tin chưa.",
    correctIndices: [2],
    options: [
      { text: "Has a response started?", explanation: "Vì sao đúng: Đây là thông tin thiết yếu hàng đầu để biết lực lượng ứng cứu đã bắt đầu can thiệp chưa." },
      { text: "What resources are on-scene?", explanation: "Vì sao đúng: Cần nắm rõ nguồn lực cứu hộ hiện có tại hiện trường." },
      { text: "Has it been reported on television breaking news?", explanation: "Chính xác! Việc sự cố đã được lên bản tin thời sự truyền hình hay chưa KHÔNG phải là thông tin then chốt điều hành ứng phó khẩn cấp." },
      { text: "Is everyone’s location known?", explanation: "Vì sao đúng: Biết vị trí của mọi người là tối quan trọng để giải cứu nạn nhân." }
    ]
  },
  {
    id: 2,
    topic: "Ceremonial Speeches - Award Presentation",
    question: "The correct order of the process of presenting an award is...........",
    hint: "Quy trình trao giải thưởng chuẩn: Chuẩn bị -> Tập trung -> Tiếp cận bất ngờ -> Tiếp cận trực tiếp -> Rời sân khấu.",
    correctIndices: [0],
    options: [
      { text: "Preparation, Focus, Surprise Approach, Direct Approach, and Exit", explanation: "Chính xác! Thứ tự chuẩn trong quy trình trao thưởng (Presenting an award) gồm: Preparation (Chuẩn bị) -> Focus (Tập trung vào giải thưởng/thành tựu) -> Surprise Approach (Tiếp cận bất ngờ nêu tiêu chí trước) -> Direct Approach (Xướng tên trực tiếp người nhận) -> Exit (Rời khỏi bục trao giải)." },
      { text: "Preparation, Surprise Approach, Focus, Direct Approach, and Exit", explanation: "Vì sao sai: Bước Focus phải đi trước cách tiếp cận nêu giải." },
      { text: "Preparation, Focus, Direct Approach, Surprise Approach, and Exit", explanation: "Vì sao sai: Surprise Approach (giữ bí mật danh tính) diễn ra trước khi Direct Approach (công bố tên)." },
      { text: "Focus, Preparation, Surprise Approach, Direct Approach, and Exit", explanation: "Vì sao sai: Preparation phải là bước đầu tiên." }
    ]
  },
  {
    id: 3,
    topic: "Audience Analysis - Demographics",
    question: "“If you were born female, then your view of the world may be different from that of a male, and may be similar to that of many other females. Being female means that you share this “femaleness” trait with roughly half the world's population.” Here is an example of ......................",
    hint: "Giới tính là một đặc tính nhân khẩu học (demographic trait) căn bản.",
    correctIndices: [0],
    options: [
      { text: "demographic traits", explanation: "Chính xác! Đặc điểm nhân khẩu học (Demographic traits) bao gồm các yếu tố như giới tính, độ tuổi, học vấn, thu nhập... phản ánh góc nhìn chung của các nhóm người trong xã hội." },
      { text: "individual differences", explanation: "Vì sao sai: Khác biệt cá nhân là nét độc nhất của từng người, còn giới tính nữ chiếm một nửa dân số." },
      { text: "perceptions", explanation: "Vì sao sai: Tri giác là quá trình nhận thức chung, không phải thuật ngữ phân nhóm đối tượng." }
    ]
  },
  {
    id: 4,
    topic: "Ritual Gatherings & Ceremonies",
    question: "The conductor of ritual gatherings is called .........",
    hint: "Người chủ trì các buổi lễ nghi, sự kiện trang trọng.",
    correctIndices: [2],
    options: [
      { text: "Chairperson", explanation: "Vì sao sai: Chairperson là chủ tọa cuộc họp hoặc chủ tịch hội đồng." },
      { text: "Master of Art", explanation: "Vì sao sai: Master of Arts là học vị Thạc sĩ nghệ thuật." },
      { text: "Master of Ceremonies", explanation: "Chính xác! Master of Ceremonies (MC - Người điều hành nghi lễ) là người dẫn dắt và điều phối các cuộc tụ họp, sự kiện mang tính lễ nghi (ritual gatherings)." },
      { text: "Magician", explanation: "Vì sao sai: Ảo thuật gia biểu diễn ảo thuật, không điều phối nghi lễ." }
    ]
  },
  {
    id: 5,
    topic: "Face-saving Strategies",
    question: "__________________ protect(s) credibility and separate message from messenger.",
    hint: "Chiến lược giữ thể diện (Face-saving) giúp bảo vệ uy tín và tách bạch thông điệp khỏi người truyền đạt.",
    correctIndices: [0],
    options: [
      { text: "Face-saving strategies", explanation: "Chính xác! Chiến lược giữ thể diện (Face-saving strategies) bảo vệ uy tín, lòng tự trọng của các bên và tách biệt nội dung thông điệp khỏi con người của người đưa tin ('separate message from messenger')." },
      { text: "Avoidance strategy", explanation: "Vì sao sai: Chiến lược né tránh chỉ là lẩn tránh vấn đề." },
      { text: "Face-detracting strategies", explanation: "Vì sao sai: Face-detracting strategies là chiến lược hạ nhục, làm mất thể diện đối phương." },
      { text: "Defensive communication", explanation: "Vì sao sai: Giao tiếp phòng thủ dẫn đến đối đầu tiêu cực." }
    ]
  },
  {
    id: 6,
    topic: "Speech Formulation - Thesis Statement",
    question: "A thesis statement should be.........",
    hint: "Câu luận đề (thesis statement) cần ngắn gọn và cụ thể, thâu tóm ý tưởng trung tâm của toàn bộ bài nói.",
    correctIndices: [2],
    options: [
      { text: "a specific sentence capturing the central idea of your speech.", explanation: "Vì sao chưa tối ưu: Thiếu tính chất ngắn gọn ('short')." },
      { text: "a long, specific sentence capturing the central idea of your speech.", explanation: "Vì sao sai: Câu chủ đề dài dòng sẽ làm loãng thông điệp chính." },
      { text: "a short, specific sentence capturing the central idea of your speech.", explanation: "Chính xác! Câu chủ đề (thesis statement) phải là một câu ngắn gọn, cụ thể ('short, specific sentence') thâu tóm được ý tưởng trung tâm của bài phát biểu." }
    ]
  },
  {
    id: 7,
    topic: "Schutz Interpersonal Needs - Social Person",
    question: "Schutz calls a man who strikes a healthy balance between being withdrawn and being the constant center of attention as .............",
    hint: "Người đạt được sự cân bằng lành mạnh giữa thu mình và thích làm tâm điểm là social person.",
    correctIndices: [3],
    options: [
      { text: "undersocials", explanation: "Vì sao sai: Undersocials là người có xu hướng thu mình, ngại giao lưu." },
      { text: "oversocials", explanation: "Vì sao sai: Oversocials là người luôn muốn là trung tâm của mọi sự chú ý." },
      { text: "personal individual", explanation: "Vì sao sai: Thuật ngữ thuộc nhu cầu Tình cảm (Affection)." },
      { text: "social person", explanation: "Chính xác! Theo William Schutz, 'Social person' là người biết cân bằng hài hòa và lành mạnh giữa việc sống khép kín và việc lúc nào cũng muốn làm trung tâm của đám đông." }
    ]
  },
  {
    id: 8,
    topic: "Effective Communication - Precision",
    question: "To avoid confusion or misinterpretation, ____________________",
    hint: "Để tránh nhầm lẫn hoặc hiểu sai, hãy diễn đạt chính xác và cụ thể.",
    correctIndices: [0],
    options: [
      { text: "be precise and specific", explanation: "Chính xác! Để ngăn ngừa sự nhầm lẫn hoặc diễn giải sai lệch trong giao tiếp kinh doanh, nguyên tắc cốt lõi là phải diễn đạt chính xác và cụ thể (precise and specific)." },
      { text: "be empathetic and kind", explanation: "Vì sao sai: Đồng cảm và tử tế tạo thiện cảm nhưng nếu dùng từ mơ hồ vẫn sẽ gây hiểu lầm kỹ thuật." },
      { text: "be smart and cool", explanation: "Vì sao sai: Không phải thuật ngữ chuyên môn." },
      { text: "be smart and strong", explanation: "Vì sao sai: Không phải nguyên tắc giải quyết nhầm lẫn thông điệp." }
    ]
  },
  {
    id: 9,
    topic: "Multiple Intelligences - Interpersonal",
    question: "__________________ includes the ability to understand other people and their motivations.",
    hint: "Khả năng thấu hiểu người khác và động lực của họ là trí thông minh tương tác (interpersonal intelligence).",
    correctIndices: [3],
    options: [
      { text: "Linguistic intelligence", explanation: "Vì sao sai: Trí thông minh ngôn ngữ liên quan đến từ vựng, văn phong." },
      { text: "Spatial intelligence", explanation: "Vì sao sai: Trí thông minh không gian thị giác." },
      { text: "Intrapersonal intelligence", explanation: "Vì sao sai: Trí thông minh nội tâm là thấu hiểu chính bản thân mình." },
      { text: "Interpersonal intelligence", explanation: "Chính xác! Theo Howard Gardner, trí thông minh tương tác liên cá nhân (Interpersonal intelligence) là năng lực thấu hiểu cảm xúc, tính cách và động lực của những người xung quanh." }
    ]
  },
  {
    id: 10,
    topic: "Global Business Communication",
    question: "What is now the common term to replace international or intercultural business communication when speaking of communication between businesses from different countries?",
    hint: "Thuật ngữ hiện đại phổ biến thay thế cho giao tiếp kinh doanh quốc tế là Giao tiếp kinh doanh toàn cầu (Global business communication).",
    correctIndices: [2],
    options: [
      { text: "Interpersonal business communication.", explanation: "Vì sao sai: Giao tiếp kinh doanh liên cá nhân chỉ diễn ra giữa các cá nhân cụ thể." },
      { text: "Multinational business communication.", explanation: "Vì sao sai: Thuật ngữ đa quốc gia nhấn mạnh tổ chức doanh nghiệp hơn là môn học/phạm trù giao tiếp." },
      { text: "Global business communication.", explanation: "Chính xác! 'Global business communication' (Giao tiếp kinh doanh toàn cầu) hiện nay là thuật ngữ chuẩn mực phổ biến thay thế cho cách gọi cũ khi đề cập đến giao tiếp giữa các doanh nghiệp đa quốc gia." },
      { text: "Local business communication.", explanation: "Vì sao sai: Giao tiếp địa phương hoàn toàn trái ngược với phạm vi quốc tế." }
    ]
  },
  {
    id: 11,
    topic: "Business Cards Etiquette",
    question: "In some cultures, what are taken seriously that you need to include on your business card?",
    hint: "Chức vụ, chức danh và học hàm học vị là thông tin tối quan trọng cần có trên danh thiếp.",
    correctIndices: [0],
    options: [
      { text: "My position and titles or degrees in addition to my company name.", explanation: "Chính xác! Ở nhiều nền văn hóa trang trọng, chức vụ (position), chức danh và bằng cấp/học hàm (titles or degrees) được xem trọng sâu sắc và cần được thể hiện rõ ràng trên danh thiếp." },
      { text: "My name, email, and home address in addition to my company name.", explanation: "Vì sao sai: Không đưa địa chỉ nhà riêng lên danh thiếp công vụ." },
      { text: "My name, nickname, and email in addition to my company name.", explanation: "Vì sao sai: Biệt danh thân mật không phù hợp trên danh thiếp chuyên nghiệp." },
      { text: "My email address, full name, and cellphone number in addition to my company name.", explanation: "Vì sao sai: Thiếu yếu tố địa vị chức danh mà các nền văn hóa coi trọng." }
    ]
  },
  {
    id: 12,
    topic: "Transitions in Writing - Place",
    question: "............... refers to a location, often in a spatially organized essay, of one point of emphasis to another. Again, visual aids work well when discussing physical location with the reading audience.",
    hint: "Từ chuyển ý chỉ vị trí không gian (place transition) kết nối các điểm nhấn theo bố cục không gian.",
    correctIndices: [1],
    options: [
      { text: "Example", explanation: "Vì sao sai: Từ chuyển tiếp ví dụ là for instance, such as." },
      { text: "A place transition", explanation: "Chính xác! Chuyển tiếp theo địa điểm / không gian (A place transition) liên hệ giữa các vị trí không gian (như adjacent to, opposite, above, beyond) trong bài viết tổ chức theo trật tự không gian." },
      { text: "Cause & Effect", explanation: "Vì sao sai: Chuyển tiếp nguyên nhân - kết quả là because, consequently." },
      { text: "Result", explanation: "Vì sao sai: Chuyển tiếp kết quả là as a result, therefore." }
    ]
  },
  {
    id: 13,
    topic: "Conflict Characteristics",
    question: "Which statement is NOT correct?",
    hint: "Xung đột luôn gắn liền với sự khan hiếm tài nguyên (scarce resources), chứ không phải tài nguyên dồi dào (abundant resources).",
    correctIndices: [2],
    options: [
      { text: "Conflict is universal.", explanation: "Vì sao đúng: Xung đột là hiện tượng mang tính phổ quát ở mọi xã hội và tổ chức." },
      { text: "Conflict is associated with incompatible goals.", explanation: "Vì sao đúng: Nhận thức mục tiêu xung khắc là nguyên nhân chính tạo nên xung đột." },
      { text: "Conflict is associated with abundant resources.", explanation: "Chính xác! Phát biểu này SAI (nên là đáp án đúng): Xung đột bắt nguồn từ tài nguyên khan hiếm (scarce resources) khiến các bên phải tranh giành, chứ không phải tài nguyên dồi dào (abundant resources)." },
      { text: "Conflict is associated with interference.", explanation: "Vì sao đúng: Sự can thiệp hoặc cản trở từ phía đối phương là một thành tố định nghĩa xung đột." }
    ]
  },
  {
    id: 14,
    topic: "Nature of Communication",
    question: ".........is an activity, skill and art that incorporates lessons learned across a wide spectrum of human knowledge.",
    hint: "Giao tiếp vừa là hoạt động, kỹ năng và nghệ thuật đúc kết tri thức nhân loại.",
    correctIndices: [0],
    options: [
      { text: "Communication", explanation: "Chính xác! Giao tiếp (Communication) là một hoạt động, kỹ năng và nghệ thuật kết hợp các bài học rút ra từ nhiều lĩnh vực tri thức phong phú của con người." },
      { text: "Studying", explanation: "Vì sao sai: Việc học chỉ là quá trình tiếp thu." },
      { text: "Transferring", explanation: "Vì sao sai: Chuyển giao chỉ mang nghĩa kỹ thuật thuần túy." },
      { text: "Understanding", explanation: "Vì sao sai: Thấu hiểu là kết quả, không phải toàn bộ nghệ thuật hoạt động." }
    ]
  },
  {
    id: 15,
    topic: "Language & Nuance - Euphemism",
    question: "A ............ involves substituting an acceptable word for an offensive, controversial, or unacceptable one that conveys the same or similar meaning.",
    hint: "Cách nói giảm nói tránh (euphemism) thay thế từ ngữ thô thiển hoặc nhạy cảm bằng từ ngữ lịch sự, dễ chấp nhận hơn.",
    correctIndices: [3],
    options: [
      { text: "cliché", explanation: "Vì sao sai: Cliché là lời sáo rỗng rập khuôn." },
      { text: "jargon", explanation: "Vì sao sai: Jargon là thuật ngữ chuyên ngành." },
      { text: "slang", explanation: "Vì sao sai: Slang là tiếng lóng." },
      { text: "euphemism", explanation: "Chính xác! Uyển ngữ / Cách nói giảm nói tránh (Euphemism) là việc thay thế một từ gây khó chịu, nhạy cảm bằng một từ ngữ nhẹ nhàng, lịch sự hơn (ví dụ dùng 'qua đời' thay cho 'chết')." }
    ]
  },
  {
    id: 16,
    topic: "Writing Process - Incubation",
    question: "......... is the process by which you cause an idea or ideas to develop in your mind.",
    hint: "Giai đoạn ấp ủ (Incubation) cho phép các ý tưởng hình thành và kết nối sâu sắc trong tâm trí.",
    correctIndices: [1],
    options: [
      { text: "Production", explanation: "Vì sao sai: Production là việc trực tiếp viết và tạo ra sản phẩm." },
      { text: "Incubation", explanation: "Chính xác! Ấp ủ (Incubation) là quá trình bạn để cho một hoặc nhiều ý tưởng tự do phát triển và định hình trong tiềm thức." },
      { text: "Revision", explanation: "Vì sao sai: Revision là việc đọc lại và chỉnh lý bài viết." },
      { text: "Incorporation", explanation: "Vì sao sai: Incorporation là sự tích hợp tài liệu." }
    ]
  },
  {
    id: 17,
    topic: "Crisis Information Priority",
    question: "What is NOT a key type of information during an emergency (Mallet, L., Vaught, C., and Brinch, M., 1999)?",
    hint: "Khi khủng hoảng xảy ra, việc đong đếm thiệt hại tài chính (How much we lost?) được thực hiện sau, không phải ưu tiên sống còn tại thời điểm khẩn cấp.",
    correctIndices: [3],
    options: [
      { text: "What is happening?", explanation: "Vì sao đúng: Cần biết ngay chuyện gì đang diễn ra để có đối sách." },
      { text: "Is anyone in danger?", explanation: "Vì sao đúng: Tính mạng con người là ưu tiên cao nhất trong khủng hoảng." },
      { text: "How big is the problem?", explanation: "Vì sao đúng: Đánh giá quy mô thảm họa để huy động lực lượng tương ứng." },
      { text: "How much we lost?", explanation: "Chính xác! Tính toán 'Chúng ta đã mất bao nhiêu tiền?' (How much we lost?) KHÔNG phải thông tin then chốt khi đang trong giai đoạn khẩn cấp cứu hộ." }
    ]
  },
  {
    id: 18,
    topic: "Cultural Beliefs - Superstitions",
    question: "Examples of _________ include a belief that special charms, omens, or rituals have supernatural powers.",
    hint: "Niềm tin vào bùa chú, điềm báo hay nghi lễ có sức mạnh siêu nhiên chính là sự mê tín (superstitions).",
    correctIndices: [2],
    options: [
      { text: "chitchats", explanation: "Vì sao sai: Chitchats là chuyện trò gẫu thông thường." },
      { text: "taboos", explanation: "Vì sao sai: Taboos là các điều cấm kỵ xã hội." },
      { text: "superstitions", explanation: "Chính xác! Mê tín dị đoan (Superstitions) bao gồm niềm tin rằng các loại bùa hộ mệnh, điềm báo hoặc nghi lễ sở hữu năng lực siêu nhiên đem lại may mắn hoặc tai ương." },
      { text: "values", explanation: "Vì sao sai: Giá trị là chuẩn mực đạo đức tốt/xấu." }
    ]
  },
  {
    id: 19,
    topic: "Design Thinking 5-Stage Process",
    question: "Design Thinking Process includes:",
    hint: "5 bước chuẩn của Design Thinking: Thấu cảm -> Xác định -> Tạo ý tưởng -> Nguyên mẫu -> Thử nghiệm.",
    correctIndices: [0],
    options: [
      { text: "Empathize, Define, Ideate, Prototype, Test", explanation: "Chính xác! Quy trình Tư duy thiết kế chuẩn 5 bước của d.school Stanford: Empathize (Thấu cảm) -> Define (Xác định vấn đề) -> Ideate (Lên ý tưởng) -> Prototype (Làm mẫu thử) -> Test (Kiểm thử)." },
      { text: "Empathize, Analyze, Ideate, Test", explanation: "Vì sao sai: Thiếu bước Define và Prototype." },
      { text: "Define, Empathize, Analyze, Protype, Test", explanation: "Vì sao sai: Empathize phải đứng trước Define." },
      { text: "Empathize, Define, Analyze, Prototype, Test", explanation: "Vì sao sai: Thay Ideate bằng Analyze là sai quy trình sáng tạo." }
    ]
  },
  {
    id: 20,
    topic: "Habits for Communication Skills",
    question: "......... is one of the most useful lifelong habits you can practice to boost your business communication skills.",
    hint: "Đọc sách thường xuyên là thói quen trọn đời hữu ích nhất để nâng cao kỹ năng giao tiếp và vốn từ.",
    correctIndices: [2],
    options: [
      { text: "Singing", explanation: "Vì sao sai: Ca hát giúp rèn giọng nhưng không trau dồi tư duy ngôn ngữ kinh doanh." },
      { text: "Physical exercise", explanation: "Vì sao sai: Thể dục rèn luyện thể chất, không trực tiếp phát triển năng lực diễn đạt kinh doanh." },
      { text: "Reading", explanation: "Chính xác! Đọc sách (Reading) là một trong những thói quen hữu ích nhất mà bạn có thể rèn luyện suốt đời để nâng cao kỹ năng tư duy, viết và giao tiếp kinh doanh." },
      { text: "Zen", explanation: "Vì sao sai: Thiền định giúp tĩnh tâm nhưng không cung cấp kiến thức ngôn từ kinh doanh." }
    ]
  },
  {
    id: 21,
    topic: "Perception Process - Selection",
    question: "The action of sorting competing messages, or choosing stimuli which is one very important part of perception and awareness, is called .....",
    hint: "Hành động sàng lọc và chọn lựa kích thích để chú ý trong quá trình tri giác được gọi là chọn lọc (selection).",
    correctIndices: [0],
    options: [
      { text: "selection", explanation: "Chính xác! Chọn lọc (Selection) là hành động phân loại giữa vô vàn thông điệp tranh chấp và chọn ra các kích thích cụ thể để tập trung chú ý, là bước đầu tiên của tri giác." },
      { text: "chance", explanation: "Vì sao sai: Cơ hội/ngẫu nhiên không phải thuật ngữ quá trình nhận thức." },
      { text: "option", explanation: "Vì sao sai: Option là sự lựa chọn vật lý, không phải tên giai đoạn tri giác tâm lý." }
    ]
  },
  {
    id: 22,
    topic: "Message Types - Primary Messages",
    question: "......... refer to the intentional content, both verbal and nonverbal. These are the words or ways you choose to express yourself and communicate your message.",
    hint: "Thông điệp chính (Primary messages) bao gồm nội dung có chủ đích mà bạn chọn để truyền đạt ý nghĩ.",
    correctIndices: [0],
    options: [
      { text: "Primary messages", explanation: "Chính xác! Primary messages (thông điệp chính) đề cập đến toàn bộ nội dung truyền tải có chủ đích (intentional content), bao gồm từ ngữ và cử chỉ bạn chủ động lựa chọn để diễn đạt ý của mình." },
      { text: "Secondary messages", explanation: "Vì sao sai: Secondary messages là thông điệp vô tình lộ ra ngoài ý muốn." },
      { text: "Auxiliary messages", explanation: "Vì sao sai: Auxiliary messages là cách thức bổ trợ thể hiện thông điệp chính (ngữ điệu, tốc độ nói)." },
      { text: "Report", explanation: "Vì sao sai: Báo cáo là một dạng văn bản." }
    ]
  },
  {
    id: 23,
    topic: "Negative News Delivery Goals",
    question: "Which is NOT a goal when delivering negative news, in person or in written form?",
    hint: "Thái độ bỏ mặc 'không cần tốn thời gian vì chẳng làm được gì' là hoàn toàn sai trái trong giao tiếp kinh doanh chuyên nghiệp.",
    correctIndices: [3],
    options: [
      { text: "Maintain the relationship, even if a formal association is being terminated.", explanation: "Vì sao đúng: Duy trì mối quan hệ tốt đẹp lâu dài là mục tiêu cốt lõi khi báo tin xấu." },
      { text: "Reduce the anxiety associated with the negative news to increase comprehension.", explanation: "Vì sao đúng: Giảm thiểu sự lo lắng, bất an cho đối phương giúp họ hiểu đúng bản chất vấn đề." },
      { text: "Achieve the designated business outcome.", explanation: "Vì sao đúng: Đạt được mục tiêu kinh doanh đã định." },
      { text: "Do not spend much time on it because we cannot do much about it.", explanation: "Chính xác! Đây KHÔNG phải mục tiêu. Không được qua loa, vô trách nhiệm coi thường thông điệp tiêu cực với lý do 'không làm được gì nhiều'." }
    ]
  },
  {
    id: 24,
    topic: "Toulmin Rhetorical Strategy - Data",
    question: "“Your supporting reasons for the claim” means ............ (Toulmin’s Three-Part Rhetorical Strategy)",
    hint: "Các lý lẽ, bằng chứng làm căn cứ hỗ trợ cho luận điểm khẳng định được gọi là Data (dữ liệu / bằng chứng).",
    correctIndices: [1],
    options: [
      { text: "claim", explanation: "Vì sao sai: Claim là khẳng định/luận điểm chính." },
      { text: "data", explanation: "Chính xác! Theo mô hình Toulmin, Data (dữ liệu / căn cứ) là các lý do và bằng chứng cụ thể được đưa ra nhằm củng cố và chứng minh cho luận điểm (claim)." },
      { text: "warrant", explanation: "Vì sao sai: Warrant là cầu nối logic giải thích tại sao data lại dẫn tới claim." }
    ]
  },
  {
    id: 25,
    topic: "Language Manipulation - Doublespeak",
    question: "..................... is the deliberate use of words to disguise, obscure, or change meaning.",
    hint: "Sự cố tình sử dụng từ ngữ để ngụy trang, làm mập mờ hoặc bóp méo ý nghĩa được gọi là doublespeak.",
    correctIndices: [2],
    options: [
      { text: "cliché", explanation: "Vì sao sai: Cliché là lời nói sáo rỗng quen tai." },
      { text: "Jargon", explanation: "Vì sao sai: Jargon là thuật ngữ chuyên môn phục vụ giao tiếp kỹ thuật." },
      { text: "Doublespeak", explanation: "Chính xác! Doublespeak (ngôn ngữ mập mờ / đánh lận con đen) là việc cố ý dùng từ ngữ tinh vi nhằm ngụy trang, che giấu hoặc làm méo mó bản chất thực của sự việc." },
      { text: "Euphemism", explanation: "Vì sao sai: Euphemism dùng để giữ lịch sự/giảm nhẹ đau buồn, không mang ác ý lừa dối làm mập mờ có chủ đích như doublespeak." }
    ]
  },
  {
    id: 26,
    topic: "International Etiquette - Left Hand Taboo",
    question: "In most countries of Southeast Asia, Africa, and the Middle East, why should we avoid presenting the card with your left hand?",
    hint: "Ở Trung Đông, châu Phi và Đông Nam Á, tay trái được quan niệm dùng cho việc vệ sinh cá nhân nên bị xem là ô uế.",
    correctIndices: [3],
    options: [
      { text: "Because we will use our left hand to keep things.", explanation: "Vì sao sai: Không phải lý do văn hóa." },
      { text: "Because we shake hands with our left hand.", explanation: "Vì sao sai: Bắt tay chuẩn luôn dùng tay phải." },
      { text: "Because it is the rule.", explanation: "Vì sao sai: Giải thích chung chung không nêu rõ nguồn gốc tập tục." },
      { text: "Because the left hand is reserved for taking care of bodily functions.", explanation: "Chính xác! Tại nhiều quốc gia Trung Đông, châu Phi và một số nước Đông Nam Á, tay trái theo truyền thống dùng để làm vệ sinh thân thể (bodily functions), do đó trao danh thiếp hay tặng quà bằng tay trái bị coi là ô uế và xúc phạm nặng nề." }
    ]
  },
  {
    id: 27,
    topic: "Design Thinking - Ideate Mode",
    question: "......... is the mode during your design process in which you focus on idea generation.",
    hint: "Giai đoạn tập trung sinh ý tưởng sáng tạo trong Design Thinking.",
    correctIndices: [0],
    options: [
      { text: "Ideate", explanation: "Chính xác! Ideate (Lên ý tưởng) là giai đoạn trong quy trình thiết kế nơi bạn tập trung hoàn toàn vào việc sáng tạo và sản sinh ra các ý tưởng giải pháp đột phá." },
      { text: "Empathize", explanation: "Vì sao sai: Empathize là giai đoạn thấu hiểu người dùng." },
      { text: "Define", explanation: "Vì sao sai: Define là giai đoạn xác định tuyên bố vấn đề." },
      { text: "Test", explanation: "Vì sao sai: Test là giai đoạn kiểm thử." }
    ]
  },
  {
    id: 28,
    topic: "Communication Contexts",
    question: "Five types of communication contexts.",
    hint: "5 bối cảnh giao tiếp: Nội tâm (Intrapersonal), Liên cá nhân (Interpersonal), Nhóm (Group), Công chúng (Public) và Đại chúng (Mass).",
    correctIndices: [0],
    options: [
      { text: "Intrapersonal, interpersonal, group, public, and mass communication.", explanation: "Chính xác! 5 bối cảnh giao tiếp kinh điển theo giáo trình Scott McLean: Giao tiếp nội tâm (Intrapersonal), liên cá nhân (Interpersonal), nhóm (Group), công chúng (Public), và đại chúng (Mass communication)." },
      { text: "Intrapersonal, personal, group, public, and mass communication.", explanation: "Vì sao sai: 'Personal' không phải thuật ngữ chuẩn đối lập với intrapersonal mà là 'interpersonal'." },
      { text: "Extrapersonal, interpersonal, group, public, and mass communication.", explanation: "Vì sao sai: Giao tiếp với thực vật/máy móc (extrapersonal) không thuộc phân loại 5 bối cảnh người cơ bản này." },
      { text: "Extrapersonal,situation, group, public, and mass communication.", explanation: "Vì sao sai: Các thuật ngữ này không đúng chuẩn phân loại." }
    ]
  },
  {
    id: 29,
    topic: "Culture - Frontstage vs Backstage",
    question: "The cultural information that you are willing to share with outsiders is considered _________.",
    hint: "Văn hóa tiền đài (frontstage culture) là những nét văn hóa công khai, sẵn sàng bộc lộ và chia sẻ cho người ngoài biết.",
    correctIndices: [1],
    options: [
      { text: "culture symbol", explanation: "Vì sao sai: Biểu tượng văn hóa là hình ảnh/vật thể đại diện." },
      { text: "frontstage culture", explanation: "Chính xác! Frontstage culture (văn hóa tiền sảnh / tiền đài) là phần văn hóa biểu hiện bên ngoài mà các thành viên trong cộng đồng thoải mái thể hiện và chia sẻ với người ngoài (outsiders)." },
      { text: "stereotype", explanation: "Vì sao sai: Khuôn mẫu định kiến." },
      { text: "backstage culture", explanation: "Vì sao sai: Backstage culture (văn hóa hậu trường) là những giá trị, quy tắc ngầm chỉ lưu hành nội bộ, người ngoài không dễ tiếp cận." }
    ]
  }
];

window.QUIZ_11_QUESTIONS = QUIZ_11_QUESTIONS;
