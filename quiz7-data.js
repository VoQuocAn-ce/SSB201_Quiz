/**
 * SSB201 - Quiz 7 Data (SU 2024 Re-exam / RE 2490)
 * 50 câu hỏi trắc nghiệm từ thư mục Quiz7
 * Bao gồm gợi ý và giải thích chi tiết đáp án đúng / sai bằng tiếng Việt.
 */

const QUIZ_7_QUESTIONS = [
  {
    id: 1,
    topic: "Perception & Gestalt Principles",
    question: "“The emphasis on a single item that stands out from its surroundings” is example of ............",
    hint: "Nguyên lý tri giác khi một đối tượng nổi bật, thu hút sự chú ý tách biệt khỏi phông nền xung quanh.",
    correctIndices: [3],
    options: [
      { text: "proximity", explanation: "Vì sao sai: Proximity (khoảng cách/sự gần gũi) là nhóm các vật thể nằm gần nhau thành một nhóm, không phải sự nổi bật so với xung quanh." },
      { text: "continuity", explanation: "Vì sao sai: Continuity (sự liên tục) là xu hướng nhìn nhận các đường nét hay chuỗi liên tục theo một hướng xác định." },
      { text: "closure", explanation: "Vì sao sai: Closure (đóng kín) là xu hướng mắt người tự động lấp đầy các khoảng trống để tạo thành hình ảnh toàn vẹn." },
      { text: "figure and ground", explanation: "Chính xác! Figure and Ground (hình thể và nền) là nguyên lý tâm lý học Gestalt miêu tả việc tập trung vào một đối tượng nổi bật (figure) tách biệt khỏi phông nền bao quanh (ground)." }
    ]
  },
  {
    id: 2,
    topic: "Perception & Organization",
    question: "“I am beginning to notice a pattern in the absentee rate in our department. For the past year, more workers have been absent on the first Friday of the month than on other days. I expect we will again have many absences next Friday, as it is the first Friday of the month.” This is an example of ...............",
    hint: "Nhận ra một chuỗi sự kiện hoặc xu hướng diễn ra đều đặn, nối tiếp theo thời gian.",
    correctIndices: [1],
    options: [
      { text: "proximity", explanation: "Vì sao sai: Proximity là sắp xếp các sự vật dựa trên khoảng cách không gian địa lý hoặc vị trí gần kề nhau." },
      { text: "continuity", explanation: "Chính xác! Continuity (sự liên tục / kết nối theo chuỗi) là việc quan sát thấy một quy luật/xu hướng diễn ra theo tiến trình thời gian và dự đoán nó sẽ tiếp tục tiếp diễn." },
      { text: "closure", explanation: "Vì sao sai: Closure là sự tự điền thêm thông tin còn thiếu để hoàn thiện một bức tranh hoặc câu chuyện." },
      { text: "difference", explanation: "Vì sao sai: Difference là nhận diện sự khác biệt hoặc bất thường, còn ở đây người nói tìm thấy một khuôn mẫu/quy luật lặp lại." }
    ]
  },
  {
    id: 3,
    topic: "Self-Concept & Self-Image",
    question: "Your ................. is how you see yourself, how you would describe yourself to others.",
    hint: "Hình ảnh bạn tự nhìn nhận về bản thân và cách bạn miêu tả mình với người khác.",
    correctIndices: [0],
    options: [
      { text: "self-image", explanation: "Chính xác! Self-image (hình ảnh bản thân) là cách bạn nhìn nhận chính mình và cách bạn tự miêu tả, phác họa bản thân với người xung quanh." },
      { text: "self-esteem", explanation: "Vì sao sai: Self-esteem (lòng tự trọng) là cảm nhận hoặc đánh giá của bạn về giá trị của bản thân (tự tin, tự hào hay tự ti)." },
      { text: "self-concept", explanation: "Vì sao sai: Self-concept (khái niệm bản thân) là thuật ngữ bao hàm rộng hơn, gồm cả self-image và self-esteem." },
      { text: "consistent", explanation: "Vì sao sai: Consistent là tính từ chỉ sự kiên định, nhất quán, không phải định nghĩa về hình ảnh bản thân." }
    ]
  },
  {
    id: 4,
    topic: "Values & Beliefs",
    question: ".................. are core concepts and ideas of what we consider good or bad, right or wrong, or what is worth the sacrifice.",
    hint: "Những nguyên tắc nền tảng sâu xa nhất quy định điều gì là tốt/xấu, đúng/sai, đáng để hy sinh.",
    correctIndices: [0],
    options: [
      { text: "Values", explanation: "Chính xác! Values (giá trị) là các khái niệm và ý niệm cốt lõi hướng dẫn việc phán xét tốt/xấu, đúng/sai hoặc những điều đáng để ta cống hiến, hy sinh." },
      { text: "Attitude", explanation: "Vì sao sai: Attitude (thái độ) là phản ứng thích hay không thích nhất thời đối với một người, đồ vật hoặc sự việc." },
      { text: "Beliefs", explanation: "Vì sao sai: Beliefs (niềm tin) là những điều ta tin là có thật hoặc đúng đắn dựa trên trải nghiệm cá nhân." },
      { text: "No correct answer", explanation: "Vì sao sai: Đã có đáp án đúng là Values." }
    ]
  },
  {
    id: 5,
    topic: "Speech Preparation",
    question: "A thesis statement should be........",
    hint: "Câu chủ đề của bài nói cần ngắn gọn, cụ thể và thâu tóm được ý tưởng trung tâm.",
    correctIndices: [2],
    options: [
      { text: "a specific sentence capturing the central idea of your speech.", explanation: "Vì sao sai: Thiếu yếu tố then chốt 'short' (ngắn gọn) theo đúng định nghĩa chuẩn của giáo trình McLean." },
      { text: "a long, specific sentence capturing the central idea of your speech.", explanation: "Vì sao sai: Câu luận đề không nên dài dòng (long) vì sẽ làm khán giả khó nắm bắt được thông điệp cốt lõi." },
      { text: "a short, specific sentence capturing the central idea of your speech.", explanation: "Chính xác! Thesis statement (câu luận đề) phải là một câu ngắn gọn, cụ thể, thâu tóm được toàn bộ ý tưởng trọng tâm của bài thuyết trình." }
    ]
  },
  {
    id: 6,
    topic: "Intercultural Communication Barriers",
    question: "............... defined as generalizations about a group of people that oversimplify their culture (Rogers, E., and Steinfatt, T., 1999), can be one significant barrier to effective intercultural communication.",
    hint: "Khuôn mẫu định kiến khái quát hóa quá đơn giản về một nhóm người.",
    correctIndices: [0],
    options: [
      { text: "Stereotypes", explanation: "Chính xác! Rogers & Steinfatt (1999) định nghĩa Stereotypes (khuôn mẫu định kiến) là những sự khái quát hóa về một nhóm người làm đơn giản hóa quá mức nền văn hóa của họ, gây cản trở giao tiếp." },
      { text: "Prejudice", explanation: "Vì sao sai: Prejudice (thành kiến) là thái độ tiêu cực được định hình từ trước mà không có căn cứ xác thực." },
      { text: "Ethnocentrism", explanation: "Vì sao sai: Ethnocentrism (thuyết vị chủng) là niềm tin rằng văn hóa của dân tộc mình ưu việt hơn các nền văn hóa khác." },
      { text: "All answers are wrong", explanation: "Vì sao sai: Đã có đáp án Stereotypes là chính xác." }
    ]
  },
  {
    id: 7,
    topic: "Intercultural Communication Barriers",
    question: "..........., which involve expected social behavior, are another aspect of intercultural communication that can act as a barrier to effective communication.",
    hint: "Các vai trò xã hội cùng những hành vi được kỳ vọng đi kèm trong từng nền văn hóa.",
    correctIndices: [1],
    options: [
      { text: "Goals", explanation: "Vì sao sai: Goals (mục tiêu) là cái đích cần đạt được, không gắn liền trực tiếp với hành vi xã hội được kỳ vọng." },
      { text: "Role identities", explanation: "Chính xác! Role identities (danh tính vai trò) quy định các hành vi xã hội được kỳ vọng (ví dụ: vai trò của người quản lý, giới tính, tuổi tác) và sự khác biệt giữa các nền văn hóa về vai trò này có thể trở thành rào cản." },
      { text: "Cultural value system", explanation: "Vì sao sai: Cultural value system là hệ thống giá trị văn hóa rộng lớn nói chung, không định nghĩa riêng về 'expected social behavior'." },
      { text: "All answers are false", explanation: "Vì sao sai: Role identities là đáp án đúng." }
    ]
  },
  {
    id: 8,
    topic: "Design Thinking - Testing",
    question: "Testing is the chance to refine our solutions and make them better.",
    hint: "Giai đoạn thử nghiệm (Testing) trong quy trình tư duy thiết kế mang lại cơ hội gì cho giải pháp?",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Trong Design Thinking (d.school Stanford), Testing là cơ hội quý giá để tiếp nhận phản hồi từ người dùng, tinh chỉnh giải pháp và làm cho sản phẩm/dịch vụ hoàn thiện hơn." },
      { text: "False", explanation: "Vì sao sai: Đây là nhận định hoàn toàn đúng về vai trò của bước Testing." }
    ]
  },
  {
    id: 9,
    topic: "Design Thinking - Warm-up",
    question: "“Inhale and lift up your body and spirit, exhale and soften your chest and shoulders connecting to the earth” is called ................activity.",
    hint: "Động tác khởi động mô phỏng loài bò sát (thằn lằn) trong các bài tập năng lượng tinh thần / thể chất.",
    correctIndices: [0],
    options: [
      { text: "Lizard Push-up", explanation: "Chính xác! Lizard Push-up là bài tập khởi động kết hợp hơi thở: 'Inhale and lift up your body and spirit, exhale and soften your chest and shoulders connecting to the earth'." },
      { text: "Tiger Push up", explanation: "Vì sao sai: Không có bài tập nào mang tên Tiger Push up với lời dẫn hơi thở này trong chương trình học." },
      { text: "Turtle Push up", explanation: "Vì sao sai: Không phải Turtle Push up." },
      { text: "Rabbit Push up", explanation: "Vì sao sai: Không phải Rabbit Push up." }
    ]
  },
  {
    id: 10,
    topic: "Design Thinking - Ideate",
    question: "............ is the mode during your design process in which you focus on idea generation.",
    hint: "Giai đoạn trong Design Thinking tập trung toàn lực vào việc sáng tạo và tạo ra nhiều ý tưởng.",
    correctIndices: [0],
    options: [
      { text: "Ideate", explanation: "Chính xác! Giai đoạn Ideate (Lên ý tưởng) tập trung vào việc tạo ra càng nhiều ý tưởng đa dạng càng tốt (idea generation) trước khi chọn lọc." },
      { text: "Empathize", explanation: "Vì sao sai: Empathize (Thấu cảm) tập trung vào việc thấu hiểu nhu cầu, cảm xúc và bối cảnh sống của người dùng." },
      { text: "Define", explanation: "Vì sao sai: Define (Xác định) tập trung vào việc tổng hợp thông tin để định nghĩa rõ ràng bài toán hoặc tuyên bố vấn đề (problem statement)." },
      { text: "Test", explanation: "Vì sao sai: Test (Kiểm thử) tập trung vào việc đưa mẫu thử nghiệm cho người dùng trải nghiệm để nhận phản hồi." }
    ]
  },
  {
    id: 11,
    topic: "Design Thinking - Empathize",
    question: "To empathize, we observe, which means...",
    hint: "Quan sát người dùng trong chính bối cảnh cuộc sống thực tế của họ.",
    correctIndices: [1],
    options: [
      { text: "the foundation of a human-centered design process", explanation: "Vì sao sai: Đây là miêu tả chung của cả giai đoạn Empathize, không giải thích cụ thể hành động 'observe'." },
      { text: "we view users and their behavior in the context of their lives", explanation: "Chính xác! Trong bước Empathize, hành động quan sát (observe) có nghĩa là theo dõi người dùng và hành vi của họ ngay trong chính môi trường sống, làm việc thực tế của họ." },
      { text: "we interact with and interview users through both scheduled and short intercept encounters", explanation: "Vì sao sai: Đây là định nghĩa của hành động 'engage' (tương tác và phỏng vấn), không phải 'observe'." },
      { text: "we experience what our user experiences", explanation: "Vì sao sai: Đây là định nghĩa của hành động 'immerse' (nhập tâm trải nghiệm), không phải 'observe'." }
    ]
  },
  {
    id: 12,
    topic: "Intercultural Workplace",
    question: "Hiring and retention are based on .......................",
    hint: "Trong môi trường làm việc chuyên nghiệp (đặc biệt các nền văn hóa low-context), tuyển dụng và giữ chân nhân sự căn cứ vào điều gì?",
    correctIndices: [0],
    options: [
      { text: "job effectiveness and job performance", explanation: "Chính xác! Theo chuẩn mực kinh doanh phương Tây và môi trường chuyên nghiệp, việc tuyển dụng và duy trì việc làm dựa trên hiệu quả và hiệu suất công việc (job effectiveness and job performance)." },
      { text: "relationships and connections", explanation: "Vì sao sai: Mối quan hệ thân quen (connections) chỉ thịnh hành ở các nền văn hóa coi trọng quan hệ cá nhân cao nhưng không phải chuẩn mực cốt lõi được nêu trong giáo trình." },
      { text: "relationships and job performance", explanation: "Vì sao sai: Không chính xác bằng cặp 'job effectiveness and job performance'." },
      { text: "relationships and job effectiveness", explanation: "Vì sao sai: Không chính xác theo văn bản giáo trình." }
    ]
  },
  {
    id: 13,
    topic: "Business Attire",
    question: "The general rule for business attire everywhere is to be ........(Axtell, 1993).",
    hint: "Nguyên tắc chung khi ăn mặc trang phục kinh doanh theo Axtell là phong cách kín đáo, chỉnh tề.",
    correctIndices: [2],
    options: [
      { text: "beautiful", explanation: "Vì sao sai: Từ 'beautiful' mang tính chủ quan về cái đẹp, không phải quy tắc trang phục kinh doanh chuẩn mực." },
      { text: "good-looking", explanation: "Vì sao sai: 'Good-looking' không phải thuật ngữ được Roger Axtell trích dẫn." },
      { text: "“buttoned up”", explanation: "Chính xác! Roger Axtell (1993) đưa ra nguyên tắc kinh điển: 'The general rule for business attire everywhere is to be buttoned up' (kín đáo, chỉnh tề, cài kín cúc áo, lịch thiệp)." },
      { text: "smart casual", explanation: "Vì sao sai: Smart casual là một phong cách ăn mặc cụ thể, không phải câu trích dẫn nguyên văn của Axtell." }
    ]
  },
  {
    id: 14,
    topic: "Intercultural Etiquette - Thailand",
    question: "Do not wear ____________ in Thailand because these colors have funeral connotations.",
    hint: "Ở Thái Lan, màu nào mang ý nghĩa tang tóc không nên mặc trong các dịp thông thường?",
    correctIndices: [1],
    options: [
      { text: "red and solid yellow", explanation: "Vì sao sai: Màu vàng gắn với hoàng gia Thái Lan và màu đỏ gắn với may mắn/lễ hội, không phải màu tang lễ." },
      { text: "black or solid white", explanation: "Chính xác! Ở Thái Lan, màu đen hoặc trắng tuyền (black or solid white) gắn liền với ý nghĩa tang tóc (funeral connotations), không nên mặc đi dự tiệc vui hoặc thăm hỏi xã giao bình thường." },
      { text: "red and solid blue", explanation: "Vì sao sai: Màu đỏ và xanh lam không phải màu tang lễ ở Thái Lan." },
      { text: "yellow and solid grey", explanation: "Vì sao sai: Không chính xác." }
    ]
  },
  {
    id: 15,
    topic: "High-Context Cultures & Gender Roles",
    question: "In ........... societies such as the Arab culture, people have definite ideas on what constitutes proper behavior between males and females.",
    hint: "Văn hóa Ả Rập thuộc loại nền văn hóa ngữ cảnh nào?",
    correctIndices: [0],
    options: [
      { text: "high-context", explanation: "Chính xác! Trong các xã hội ngữ cảnh cao (high-context societies) như văn hóa Ả Rập, mọi người có những quy chuẩn và ranh giới rất rõ ràng, khắt khe về chuẩn mực hành vi giữa nam và nữ." },
      { text: "low-context", explanation: "Vì sao sai: Các xã hội low-context (như Mỹ, Đức) thường linh hoạt và cởi mở hơn trong hành vi giữa hai giới." },
      { text: "multicultural", explanation: "Vì sao sai: 'Multicultural' là đa văn hóa, không mô tả đặc tính giao tiếp văn hóa của người Ả Rập ở đây." },
      { text: "Muslims", explanation: "Vì sao sai: Ngữ pháp câu cần một tính từ bổ nghĩa cho 'societies' (high-context societies)." }
    ]
  },
  {
    id: 16,
    topic: "Crisis Communication & Press Conference",
    question: "Why a speaker in a press conference should not display a nonverbal gesture or make a face at a question?",
    hint: "Các cử chỉ phi ngôn ngữ hoặc nét mặt nhăn nhó, đảo mắt rất dễ bị báo chí và công chúng hiểu sai lệch.",
    correctIndices: [2],
    options: [
      { text: "Because it will make the speaker look unprofessional.", explanation: "Vì sao sai: Dù đúng là có thể làm giảm tính chuyên nghiệp, nhưng lý do nguy hiểm hàng đầu trong họp báo được giáo trình nhấn mạnh là nguy cơ bị truyền thông diễn giải sai lệch." },
      { text: "Because it will not show the respect to the media.", explanation: "Vì sao sai: Đây là hệ quả phụ, không phải lý do cốt lõi theo câu hỏi ngân hàng đề." },
      { text: "Because it can be misinterpreted.", explanation: "Chính xác! Trong buổi họp báo, một cái nhíu mày hay cử chỉ vô tình có thể bị máy quay ghi lại và bị báo chí thổi phồng, hiểu lầm (misinterpreted) thành sự giận dữ, kiêu ngạo hay nói dối." },
      { text: "Because it is impolite and abusive.", explanation: "Vì sao sai: Cử chỉ nét mặt không hẳn là hành vi lăng mạ (abusive)." }
    ]
  },
  {
    id: 17,
    topic: "Delivering Bad News",
    question: "Which is NOT correct, when communicating bad news, to avoid legal problems?",
    hint: "Điều nào KHÔNG PHẢI là nguyên tắc chuẩn để tránh rủi ro pháp lý khi truyền đạt tin xấu?",
    correctIndices: [0],
    options: [
      { text: "Avoid positive language or behavior.", explanation: "Chính xác! Lựa chọn này là KHÔNG ĐÚNG (NOT correct): khi thông báo tin xấu, người giao tiếp không cần phải tránh ngôn ngữ tích cực; người ta vẫn cần duy trì thái độ lịch sự, xây dựng thiện chí và tôn trọng." },
      { text: "Avoid contradictions and absolutes.", explanation: "Vì sao sai: Đây là nguyên tắc ĐÚNG để tránh rủi ro kiện tụng (tránh những từ tuyệt đối như 'luôn luôn', 'chắc chắn' hoặc lời nói mâu thuẫn)." },
      { text: "Avoid confusion or misinterpretation.", explanation: "Vì sao sai: Đây là nguyên tắc ĐÚNG (phải truyền đạt rõ ràng, không mập mờ)." },
      { text: "Maintain respect and privacy.", explanation: "Vì sao sai: Đây là nguyên tắc ĐÚNG (bảo mật thông tin cá nhân và tôn trọng người nhận)." }
    ]
  },
  {
    id: 18,
    topic: "Negative News Strategies",
    question: ".............. places the negative news at the beginning of the message.",
    hint: "Phương pháp tiếp cận đưa tin xấu ngay ở câu đầu tiên của thông điệp.",
    correctIndices: [2],
    options: [
      { text: "The internal communication", explanation: "Vì sao sai: Đây là kênh truyền thông nội bộ, không phải phương pháp cấu trúc thông điệp." },
      { text: "The indirect approach", explanation: "Vì sao sai: The indirect approach (tiếp cận gián tiếp) đặt đệm (buffer) trước rồi mới đến tin xấu." },
      { text: "The direct approach", explanation: "Chính xác! The direct approach (tiếp cận trực tiếp) nêu thẳng tin tiêu cực ngay ở phần mở đầu thông điệp." },
      { text: "The external communication", explanation: "Vì sao sai: Đây là truyền thông đối ngoại, không phải tên phương pháp cấu trúc tin tiêu cực." }
    ]
  },
  {
    id: 19,
    topic: "Negative News in Writing",
    question: "What is one distinct advantage of presenting negative news in writing?",
    hint: "Ưu điểm lớn nhất của việc viết văn bản là người gửi có thời gian lập kế hoạch, soạn thảo và kiểm soát câu chữ cẩn thận.",
    correctIndices: [3],
    options: [
      { text: "It is the convenience for the readers who are not good at listening.", explanation: "Vì sao sai: Không phải mục đích và ưu điểm chính theo giáo trình." },
      { text: "It is the chance for the writers to show how good their writing skill is.", explanation: "Vì sao sai: Thông báo tin xấu không nhằm mục đích khoe kỹ năng viết." },
      { text: "It is the convenience for busy readers, who can read or review the negative message later on.", explanation: "Vì sao sai: Đây chỉ là sự tiện lợi chung, không phải ưu điểm mang tính chiến lược của việc viết tin xấu." },
      { text: "It is the planning and preparation that goes into the message, making the initial communication more predictable.", explanation: "Chính xác! Ưu điểm vượt trội của việc gửi tin tiêu cực bằng văn bản là người gửi có thời gian chuẩn bị, lên kế hoạch từng từ ngữ, giúp thông điệp truyền đi chuẩn xác và dễ dự đoán phản ứng hơn." }
    ]
  },
  {
    id: 20,
    topic: "Communication Noise",
    question: "..........is what happens when your thoughts occupy your attention while you are hearing, or reading, a message.",
    hint: "Hiện tượng khi những suy nghĩ nội tâm trong đầu chiếm trọn sự chú ý khiến bạn không tiếp thu được thông điệp.",
    correctIndices: [0],
    options: [
      { text: "Psychological noise", explanation: "Chính xác! Psychological noise (nhiễu tâm lý) là sự phân tâm xuất phát từ các dòng suy nghĩ, cảm xúc hoặc bận tâm nội tâm của chính người nhận." },
      { text: "Self-concept", explanation: "Vì sao sai: Self-concept là nhận thức về bản thân, không phải nguồn gây nhiễu giao tiếp." },
      { text: "Physical noise", explanation: "Vì sao sai: Physical noise (nhiễu vật lý) là tiếng ồn từ môi trường bên ngoài như tiếng máy móc, còi xe, tiếng người nói chuyện." },
      { text: "Stress", explanation: "Vì sao sai: Căng thẳng (stress) có thể gây ra nhiễu tâm lý, nhưng thuật ngữ chuẩn xác trong lý thuyết truyền thông là Psychological noise." }
    ]
  },
  {
    id: 21,
    topic: "Ethics in Communication",
    question: "As a communicator, you are responsible for being prepared and being ethical. Being prepared includes being organized, clear, concise, and punctual. Being ethical includes being egalitarian, respectful, and trustworthy and overall, practicing the “........ rule “",
    hint: "Quy tắc vàng: 'Hãy đối xử với người khác như cách bạn muốn người khác đối xử với mình'.",
    correctIndices: [0],
    options: [
      { text: "Golden", explanation: "Chính xác! The Golden Rule (Quy tắc Vàng) là chuẩn mực đạo đức cốt lõi trong giao tiếp: đối xử với người khác công bằng, tôn trọng và bình đẳng như chính mình muốn được đối xử." },
      { text: "Red", explanation: "Vì sao sai: Không tồn tại 'Red rule' trong đạo đức truyền thông." },
      { text: "Blue", explanation: "Vì sao sai: Không tồn tại 'Blue rule' trong đạo đức truyền thông." }
    ]
  },
  {
    id: 22,
    topic: "Communication Process",
    question: "In a public speaking situation, the source is ..........",
    hint: "Trong tình huống thuyết trình trước công chúng, nguồn phát thông điệp là ai?",
    correctIndices: [2],
    options: [
      { text: "Audience", explanation: "Vì sao sai: Audience (khán giả) là người nhận (receiver), không phải nguồn phát (source)." },
      { text: "Coordinator", explanation: "Vì sao sai: Người điều phối/MC chỉ là người hỗ trợ tổ chức sự kiện." },
      { text: "The person giving the speech.", explanation: "Chính xác! Trong bối cảnh nói trước công chúng (public speaking), người diễn thuyết (the speaker / the person giving the speech) chính là nguồn phát thông điệp (source)." }
    ]
  },
  {
    id: 23,
    topic: "Self-Concept",
    question: "“ What are the brands you are wearing? What do you think they say about you? Do you feel that certain styles of shoes, jewelry, tattoos, music, or even automobiles express who you are?” Can be used as examples of.......",
    hint: "Cách chúng ta dùng trang phục, phụ kiện, âm nhạc để thể hiện nhận thức về con người thật của mình.",
    correctIndices: [0],
    options: [
      { text: "Self-concept", explanation: "Chính xác! Những câu hỏi về nhãn hiệu bạn mặc, phong cách xe hay âm nhạc bạn thích thể hiện điều gì về bạn chính là những ví dụ kinh điển minh họa cho Self-concept (nhận thức bản thân)." },
      { text: "Your concept", explanation: "Vì sao sai: Không phải thuật ngữ chuyên ngành tâm lý học truyền thông." },
      { text: "Their concept", explanation: "Vì sao sai: Không phải thuật ngữ giao tiếp." }
    ]
  },
  {
    id: 24,
    topic: "Globalization Theories",
    question: "What “focuses on the imperialistic ambitions of nations, corporations, organizations, and the like and their desire, indeed need, to impose themselves on various geographic areas” (Ritzer, 2003)?",
    hint: "Thuật ngữ do George Ritzer đặt ra để chỉ sự bành trướng, áp đặt của các tập đoàn xuyên quốc gia.",
    correctIndices: [1],
    options: [
      { text: "It is localization.", explanation: "Vì sao sai: Localization là sự địa phương hóa, thích nghi sản phẩm với từng địa phương." },
      { text: "It is grobalization.", explanation: "Chính xác! George Ritzer (2003) đặt ra thuật ngữ 'grobalization' (bắt nguồn từ 'grow' và 'globalization') để chỉ tham vọng của các tập đoàn, quốc gia muốn bành trướng và áp đặt quyền lực/văn hóa lên khắp các khu vực địa lý." },
      { text: "It is glocalization.", explanation: "Vì sao sai: Glocalization là sự kết hợp giữa toàn cầu hóa và địa phương hóa (toàn cầu hóa mang bản sắc địa phương)." },
      { text: "It is globalization.", explanation: "Vì sao sai: Globalization là khái niệm chung, còn định nghĩa gắn với 'imperialistic ambitions' của Ritzer chính là grobalization." }
    ]
  },
  {
    id: 25,
    topic: "Culture & Socialization",
    question: "What is the socialization process you go through to adapt to your society?",
    hint: "Quá trình xã hội hóa tiếp thu nền văn hóa mà bạn sinh ra và lớn lên trong đó từ thuở nhỏ.",
    correctIndices: [3],
    options: [
      { text: "It is acculturation.", explanation: "Vì sao sai: Acculturation là quá trình tiếp biến khi học hỏi và thích nghi với một nền văn hóa mới khác biệt." },
      { text: "It is cultural interaction.", explanation: "Vì sao sai: Cultural interaction chỉ là sự tương tác văn hóa thông thường." },
      { text: "It is intercultural.", explanation: "Vì sao sai: Intercultural là tính từ chỉ mối quan hệ giữa các nền văn hóa." },
      { text: "It is enculturation.", explanation: "Chính xác! Enculturation (nội hóa văn hóa) là quá trình xã hội hóa tự nhiên mà một cá nhân trải qua từ khi sinh ra để hòa nhập và thích nghi với nền văn hóa của chính xã hội mình." }
    ]
  },
  {
    id: 26,
    topic: "Intercultural Management",
    question: "__________________ takes place with the two cultures merging to form a stronger overriding culture.",
    hint: "Hiện tượng hai nền văn hóa hòa nhập và kết hợp lại để tạo nên một nền văn hóa chung mạnh mẽ hơn (hiệp lực văn hóa).",
    correctIndices: [1],
    options: [
      { text: "Backstage culture", explanation: "Vì sao sai: Backstage culture là những giá trị văn hóa ngầm ẩn bên trong, không thể hiện ra bên ngoài." },
      { text: "Cultural synergy", explanation: "Chính xác! Cultural synergy (hiệp lực văn hóa) xảy ra khi hai hay nhiều nền văn hóa hòa hợp, kết hợp những điểm mạnh của nhau để hình thành một nền văn hóa mới vượt trội và mạnh mẽ hơn." },
      { text: "Frontage culture", explanation: "Vì sao sai: Frontstage culture là những biểu hiện văn hóa bề nổi bên ngoài." },
      { text: "Enculturation", explanation: "Vì sao sai: Enculturation là học hỏi văn hóa bản địa của chính mình từ nhỏ." }
    ]
  },
  {
    id: 27,
    topic: "Culture Adaptation",
    question: "What is “the process of adjusting and adapting to a new and different culture” (Hazuda, Stern, & Hoffner, 1988)?",
    hint: "Quá trình một người điều chỉnh và thích nghi khi tiếp xúc với một nền văn hóa mới hoàn toàn khác.",
    correctIndices: [0],
    options: [
      { text: "It is acculturation.", explanation: "Chính xác! Hazuda, Stern & Hoffner (1988) định nghĩa Acculturation (tiếp biến văn hóa) là quá trình điều chỉnh và thích nghi với một nền văn hóa mới và khác biệt." },
      { text: "It is the social situation.", explanation: "Vì sao sai: Hoàn cảnh xã hội không phải là quá trình thích nghi văn hóa." },
      { text: "It is cultural interaction.", explanation: "Vì sao sai: Tương tác văn hóa là thuật ngữ chung, không phải định nghĩa của trích dẫn trên." },
      { text: "It is enculturation.", explanation: "Vì sao sai: Enculturation là tiếp thu văn hóa bản xứ từ thời thơ ấu, không phải 'new and different culture'." }
    ]
  },
  {
    id: 28,
    topic: "Writing Habits",
    question: "Success in writing comes from good habits: ..................",
    hint: "Ba thói quen nền tảng dẫn đến thành công trong kỹ năng viết theo Scott McLean: Đọc, viết và tư duy phản biện.",
    correctIndices: [0],
    options: [
      { text: "reading, writing, and critical thinking", explanation: "Chính xác! Scott McLean nhấn mạnh: 'Success in writing comes from good habits: reading, writing, and critical thinking' (đọc sách, rèn luyện viết và tư duy phản biện)." },
      { text: "reading, analyzing, and critical thinking", explanation: "Vì sao sai: Thiếu thói quen luyện viết thực tế (writing)." },
      { text: "communicating, writing, and critical thinking", explanation: "Vì sao sai: Không đúng nguyên văn theo giáo trình." }
    ]
  },
  {
    id: 29,
    topic: "Language & Style",
    question: "............... is an informal, conversational style of writing. It differs from standard business English 109 in that it often makes use of colorful expressions, slang, and regional phrases.",
    hint: "Phong cách ngôn ngữ khẩu ngữ, thân mật thường ngày có dùng tiếng lóng và cụm từ vùng miền.",
    correctIndices: [0],
    options: [
      { text: "Colloquial language", explanation: "Chính xác! Colloquial language (khẩu ngữ / ngôn ngữ đàm thoại thân mật) là phong cách viết không trang trọng, thường sử dụng tiếng lóng, thành ngữ dân dã và từ ngữ địa phương." },
      { text: "Intrapersonal language", explanation: "Vì sao sai: Intrapersonal là giao tiếp nội tâm với chính mình." },
      { text: "Internal communications", explanation: "Vì sao sai: Internal communications là truyền thông nội bộ doanh nghiệp." },
      { text: "External communications", explanation: "Vì sao sai: External communications là truyền thông đối ngoại." }
    ]
  },
  {
    id: 30,
    topic: "Communication Model",
    question: "“Heather replies with an e-mail saying yes.” is an example of......................",
    hint: "Hành động gửi email phản hồi đồng ý là thành phần nào trong mô hình giao tiếp bằng văn bản?",
    correctIndices: [0],
    options: [
      { text: "feedback in written application", explanation: "Chính xác! Việc Heather gửi email trả lời 'yes' chính là phản hồi (feedback) trong ứng dụng giao tiếp văn bản (written application)." },
      { text: "source in oral application", explanation: "Vì sao sai: Đây là email (văn bản) chứ không phải giao tiếp truyền miệng (oral)." },
      { text: "channel in written application", explanation: "Vì sao sai: Kênh (channel) là internet/email system, còn nội dung câu trả lời của Heather là feedback." },
      { text: "source in written application", explanation: "Vì sao sai: Nguồn phát thông điệp ban đầu có thể là người khác, hành động 'replies' là gửi phản hồi." }
    ]
  },
  {
    id: 31,
    topic: "Telephone Conversations",
    question: "Which of the below is NOT one of the five stages in a telephone conversation as composed by David Taylor and Alyse Terhune?",
    hint: "Năm giai đoạn của một cuộc gọi điện thoại gồm: Mở đầu, Dẫn dắt, Bàn công việc, Phản hồi, Kết thúc.",
    correctIndices: [4],
    options: [
      { text: "Opening", explanation: "Vì sao sai: Opening (Mở đầu) là giai đoạn 1 trong 5 giai đoạn gọi điện thoại của Taylor & Terhune." },
      { text: "Feedforward", explanation: "Vì sao sai: Feedforward (Dẫn nhập mục đích) là giai đoạn 2." },
      { text: "Business", explanation: "Vì sao sai: Business (Trao đổi công việc) là giai đoạn 3 trọng tâm." },
      { text: "Feedback", explanation: "Vì sao sai: Feedback (Phản hồi/xác nhận lại) là giai đoạn 4." },
      { text: "Talking", explanation: "Chính xác! 'Talking' KHÔNG nằm trong 5 giai đoạn chuẩn của David Taylor và Alyse Terhune (5 giai đoạn là: Opening, Feedforward, Business, Feedback, Closing)." }
    ]
  },
  {
    id: 32,
    topic: "Special Occasion Speeches",
    question: "What should be the second step in accepting an award?",
    hint: "Sau khi nói lời cảm ơn (bước 1), bước 2 khi nhận giải thưởng là gì?",
    correctIndices: [0],
    options: [
      { text: "It is to give credit where credit is due.", explanation: "Chính xác! Trong bài phát biểu nhận giải: Bước 1 là nói lời cảm ơn (Say thank you); Bước 2 là tri ân những người đã hỗ trợ đóng góp (Give credit where credit is due)." },
      { text: "It is to link your award to a motivational anecdote.", explanation: "Vì sao sai: Kể câu chuyện truyền cảm hứng là bước liên hệ ý nghĩa sau đó." },
      { text: "It is to say thank you.", explanation: "Vì sao sai: Nói lời cảm ơn là bước ĐẦU TIÊN (first step), không phải bước thứ hai." },
      { text: "It is to show your happiness.", explanation: "Vì sao sai: Thể hiện niềm vui không phải là một bước cấu trúc chính thức trong bài phát biểu." }
    ]
  },
  {
    id: 33,
    topic: "Telephone Conversations",
    question: "Which of the below is NOT one of the five stages in a telephone conversation as composed by David Taylor and Alyse Terhune?",
    hint: "5 giai đoạn gồm: Opening, Feedforward, Business, Feedback, Closing.",
    correctIndices: [2],
    options: [
      { text: "Opening", explanation: "Vì sao sai: Opening là bước 1." },
      { text: "Feedforward", explanation: "Vì sao sai: Feedforward là bước 2." },
      { text: "Thinking", explanation: "Chính xác! 'Thinking' KHÔNG nằm trong 5 giai đoạn cấu trúc cuộc gọi của Taylor & Terhune." },
      { text: "Feedback", explanation: "Vì sao sai: Feedback là bước 4." },
      { text: "Closing", explanation: "Vì sao sai: Closing là bước 5 kết thúc cuộc gọi." }
    ]
  },
  {
    id: 34,
    topic: "Social Customs & Etiquette",
    question: "__________________ is a conventional social custom or rule for behavior.",
    hint: "Quy tắc xã giao, phép lịch sự hoặc tập quán ứng xử xã hội đã thành thông lệ.",
    correctIndices: [3],
    options: [
      { text: "Belief", explanation: "Vì sao sai: Belief là niềm tin cá nhân về sự thật." },
      { text: "Value", explanation: "Vì sao sai: Value là giá trị đạo đức cốt lõi." },
      { text: "Attitude", explanation: "Vì sao sai: Attitude là thái độ yêu ghét đối với đối tượng." },
      { text: "Etiquette", explanation: "Chính xác! Etiquette (nghi thức / phép lịch sự xã giao) là các quy tắc ứng xử hoặc phong tục xã hội quy ước cách cư xử đúng mực." }
    ]
  },
  {
    id: 35,
    topic: "Language & Miscommunication",
    question: ".................. is the deliberate use of words to disguise, obscure, or change meaning.",
    hint: "Hành vi cố ý sử dụng từ ngữ hoa mỹ hoặc mập mờ nhằm che giấu, bóp méo hoặc thay đổi bản chất ý nghĩa.",
    correctIndices: [2],
    options: [
      { text: "Cliché", explanation: "Vì sao sai: Cliché là những lời sáo rỗng, rập khuôn vì bị dùng quá nhiều." },
      { text: "Jargon", explanation: "Vì sao sai: Jargon là thuật ngữ chuyên ngành kỹ thuật khó hiểu với người ngoài ngành." },
      { text: "Doublespeak", explanation: "Chính xác! Doublespeak (ngôn từ hai nghĩa / nói nước đôi ngụy biện) là việc cố tình dùng từ ngữ để che đậy, làm tối nghĩa hoặc đánh tráo ý nghĩa thực sự của sự việc." },
      { text: "Euphemism", explanation: "Vì sao sai: Euphemism (uyển ngữ/nói giảm nói tránh) nhằm mục đích giảm nhẹ sự khó chịu hay thô lỗ, không nhất thiết là có ác ý che giấu sự thật như doublespeak." }
    ]
  },
  {
    id: 36,
    topic: "Perception & Paradigms",
    question: "____________, or a clear point of view involving theories, laws, and/or generalizations that provide a framework for understanding, tend to form and become set around key validity claims, or statements of the way things work” (McLean, 2003).",
    hint: "Mô hình tư duy / hệ hình bao gồm các lý thuyết, quy luật tạo nên khuôn khổ nhận thức thế giới.",
    correctIndices: [0],
    options: [
      { text: "Paradigms", explanation: "Chính xác! Scott McLean (2003) định nghĩa: 'Paradigms (hệ hình tư duy) là một quan điểm rõ ràng gồm các lý thuyết, quy luật và/hoặc khái quát hóa cung cấp khuôn khổ để hiểu và nhìn nhận cách vạn vật vận hành'." },
      { text: "Jargons", explanation: "Vì sao sai: Jargons là thuật ngữ chuyên môn." },
      { text: "Slangs", explanation: "Vì sao sai: Slangs là tiếng lóng." },
      { text: "Semantic rules", explanation: "Vì sao sai: Semantic rules là quy tắc ngữ nghĩa của từ ngữ." }
    ]
  },
  {
    id: 37,
    topic: "Communication Messages",
    question: "................... refer to the unintentional content, both verbal and nonverbal. Your audience will form impressions of your intentional messages, both negative and positive, over which you have no control.",
    hint: "Những nội dung vô tình được truyền đi mà người nói không chủ ý kiểm soát được.",
    correctIndices: [1],
    options: [
      { text: "Primary messages", explanation: "Vì sao sai: Primary messages là thông điệp chủ ý chính muốn truyền đạt (cả lời nói và hành động)." },
      { text: "Secondary messages", explanation: "Chính xác! Secondary messages (thông điệp thứ cấp) là những nội dung không có chủ ý (cả lời nói lẫn phi ngôn ngữ) mà khán giả tự cảm nhận và hình thành ấn tượng mà bạn không kiểm soát được hoàn toàn." },
      { text: "Auxiliary messages", explanation: "Vì sao sai: Auxiliary messages là cách thức bổ trợ thể hiện thông điệp (như ngữ điệu giọng nói, dáng điệu)." },
      { text: "Report", explanation: "Vì sao sai: Báo cáo là văn bản cung cấp thông tin, không phải loại thông điệp này." }
    ]
  },
  {
    id: 38,
    topic: "Communication Messages",
    question: "The ....................... message that stays with your audience well after the communication is finished, is an important part of your message. Ask yourself of the following: • What do I want my listeners or readers to remember? • What information do I want the audience to retain or act upon? • What do I want the audience to do?",
    hint: "Thông điệp đọng lại trong tâm trí khán giả rất lâu sau khi bài thuyết trình kết thúc.",
    correctIndices: [3],
    options: [
      { text: "attention statement", explanation: "Vì sao sai: Attention statement là câu mở đầu nhằm thu hút sự chú ý của khán giả lúc bắt đầu." },
      { text: "introduction", explanation: "Vì sao sai: Introduction là phần mở bài giới thiệu chủ đề." },
      { text: "body", explanation: "Vì sao sai: Body là phần thân bài chứa các luận điểm chính." },
      { text: "residual message", explanation: "Chính xác! Residual message (thông điệp đọng lại) là ý tưởng cốt lõi còn lưu lại trong trí nhớ của khán giả sau khi quá trình giao tiếp đã hoàn thành." }
    ]
  },
  {
    id: 39,
    topic: "Intercultural Etiquette - Greetings",
    question: "When conducting business with people of Japan or China, the handshake is often combined with a ______________ so that each culture shows the other proper respect (Baldrige, 1993; Samovar et al., 2009).",
    hint: "Ở Nhật Bản hay Trung Quốc, cái bắt tay của phương Tây thường được kết hợp cùng hành động cúi chào truyền thống.",
    correctIndices: [2],
    options: [
      { text: "smile", explanation: "Vì sao sai: Nụ cười là biểu cảm thông thường nhưng động tác cử chỉ văn hóa đặc trưng ở đây là cúi đầu chào." },
      { text: "hug", explanation: "Vì sao sai: Ôm (hug) không phù hợp trong văn hóa kinh doanh Đông Á vì tránh tiếp xúc cơ thể quá gần." },
      { text: "bow", explanation: "Chính xác! Cúi chào (bow) là nghi thức truyền thống thể hiện sự kính trọng của người Nhật Bản và Trung Quốc, thường được kết hợp nhịp nhàng với bắt tay khi làm việc với đối tác quốc tế." },
      { text: "touch", explanation: "Vì sao sai: Đụng chạm cơ thể thân mật là điều tối kỵ trong văn hóa công sở Đông Á." }
    ]
  },
  {
    id: 40,
    topic: "Gift Giving Etiquette - France",
    question: "Why should we avoid giving perfume or wine as gifts to the French people?",
    hint: "Nước hoa và rượu vang là hai sản phẩm niềm tự hào dân tộc và chuyên môn cao của người Pháp.",
    correctIndices: [0],
    options: [
      { text: "Because those are their specialties.", explanation: "Chính xác! Nước hoa và rượu vang là những đặc sản tinh hoa (specialties) và niềm tự hào hàng đầu của người Pháp. Tặng những món đồ này dễ bị hiểu là bạn đang đánh giá gu thẩm mỹ của họ hoặc tự cho rằng mình am hiểu hơn người bản xứ." },
      { text: "Because those are expensive.", explanation: "Vì sao sai: Giá đắt không phải là lý do kiêng kỵ văn hóa ở đây." },
      { text: "Because those are not expensive.", explanation: "Vì sao sai: Hoàn toàn sai sự thật." },
      { text: "Because those are what they do not like.", explanation: "Vì sao sai: Người Pháp rất yêu thích rượu và nước hoa, nhưng đó là gu thưởng thức cá nhân rất tinh tế mà người ngoài khó chọn đúng." }
    ]
  },
  {
    id: 41,
    topic: "Intercultural Etiquette - Tipping",
    question: "Tipping in a non-tipping culture can offend or insult the people of that culture. True or False?",
    hint: "Ở một số nền văn hóa không có tiền tip (như Nhật Bản), boa tiền có thể bị xem là coi thường hoặc xúc phạm người phục vụ.",
    correctIndices: [1],
    options: [
      { text: "FALSE", explanation: "Vì sao sai: Nhận định trong câu hỏi là đúng; boa tiền ở văn hóa không có tiền tip rất dễ gây xúc phạm." },
      { text: "TRUE", explanation: "Chính xác! Ở các nền văn hóa không có văn hóa tiền tip (như Nhật Bản, Hàn Quốc), việc để lại tiền tip có thể bị xem là sỉ nhục hoặc xúc phạm lòng tự trọng nghề nghiệp của nhân viên phục vụ." }
    ]
  },
  {
    id: 42,
    topic: "Business Email & Cybersecurity",
    question: "Why should employees be very careful about the e-mail messages they send?",
    hint: "Email gửi đi có thể bị rò rỉ và doanh nghiệp có thể phải chịu trách nhiệm pháp lý trước tòa.",
    correctIndices: [1],
    options: [
      { text: "Because an e-mail is more informal than a letter or memorandum.", explanation: "Vì sao sai: Tính thân mật không phải là rủi ro nghiêm trọng đe dọa sự sống còn của doanh nghiệp." },
      { text: "Because a firm may be liable for information leaked into cyberspace.", explanation: "Chính xác! Mọi email của nhân viên đều được lưu trữ trên máy chủ và có giá trị bằng chứng trước tòa; công ty có thể phải chịu trách nhiệm pháp lý nặng nề (liable) nếu thông tin bí mật, phỉ báng hoặc phạm pháp bị rò rỉ ra không gian mạng." },
      { text: "Because an e-mail is more formal than a letter or memorandum.", explanation: "Vì sao sai: Email thông thường kém trang trọng hơn thư giấy chính thức." },
      { text: "Because an e-mail may have the employees' names on it.", explanation: "Vì sao sai: Có tên nhân viên là điều hiển nhiên, không phải nguyên nhân chính của rủi ro." }
    ]
  },
  {
    id: 43,
    topic: "Argumentation Strategies (GASCAP/T)",
    question: "The “S” in Effective Argumentation Strategies: GASCAP/T means ............ (Fulkerson, 1996).",
    hint: "Chữ S trong mô hình chiến lược lập luận GASCAP/T đại diện cho Sign (Dấu hiệu).",
    correctIndices: [1],
    options: [
      { text: "Strength", explanation: "Vì sao sai: Không phải là chiến lược lập luận trong mô hình Fulkerson." },
      { text: "Sign", explanation: "Chính xác! Trong mô hình lập luận GASCAP/T của Richard Fulkerson (1996), chữ S đại diện cho 'Sign' (Lập luận bằng dấu hiệu: sự hiện diện của A là dấu hiệu cho thấy B đang xảy ra)." },
      { text: "Seen", explanation: "Vì sao sai: Không phải thuật ngữ lập luận." },
      { text: "Signal", explanation: "Vì sao sai: Thuật ngữ chuẩn của mô hình là 'Sign'." }
    ]
  },
  {
    id: 44,
    topic: "Writing Styles & Tone",
    question: "A ......................, as the name implies, resembles oral communication in style, tone, and word choice. It can be appropriate for some audiences, and may serve you well in specific contexts, but it can easily come across as less than professional.",
    hint: "Giọng điệu trò chuyện đàm thoại giống như văn nói hàng ngày.",
    correctIndices: [0],
    options: [
      { text: "conversational tone", explanation: "Chính xác! Conversational tone (giọng điệu đàm thoại) mang phong cách, giọng điệu và từ ngữ tương tự ngôn ngữ nói; nó có thể gần gũi nhưng dễ gây cảm giác thiếu tính chuyên nghiệp trong văn bản kinh doanh trang trọng." },
      { text: "communicational", explanation: "Vì sao sai: Tính từ communicational không đứng đơn lẻ theo định nghĩa này." },
      { text: "tranferring", explanation: "Vì sao sai: Không có nghĩa phù hợp." },
      { text: "Message", explanation: "Vì sao sai: Không phải là một kiểu giọng điệu." }
    ]
  },
  {
    id: 45,
    topic: "Toulmin's Rhetorical Strategy",
    question: "\"Your supporting reasons for the claim\" means ............ (Toulmin's Three-Part Rhetorical Strategy)",
    hint: "Trong mô hình tam giác Toulmin: Luận cứ / Bằng chứng hỗ trợ cho khẳng định được gọi là Data.",
    correctIndices: [1],
    options: [
      { text: "claim", explanation: "Vì sao sai: Claim là lời tuyên bố, khẳng định sự thật hoặc quan điểm." },
      { text: "data", explanation: "Chính xác! Trong mô hình 3 phần của Toulmin, Data (dữ liệu/bằng chứng) chính là các lý do, bằng chứng thực tế hỗ trợ chứng minh cho tuyên bố (supporting reasons for the claim)." },
      { text: "warrant", explanation: "Vì sao sai: Warrant (bảo chứng) là nguyên lý hoặc giả định kết nối giữa data và claim." }
    ]
  },
  {
    id: 46,
    topic: "Toulmin's Rhetorical Strategy",
    question: "“Your statement of belief or truth” means ............ (Toulmin's Three-Part Rhetorical Strategy)",
    hint: "Lời tuyên bố khẳng định một sự thật hoặc niềm tin mà người nói muốn thuyết phục khán giả chấp nhận.",
    correctIndices: [0],
    options: [
      { text: "claim", explanation: "Chính xác! Claim (luận điểm / tuyên bố) là lời khẳng định về niềm tin hoặc sự thật (statement of belief or truth) mà bạn đưa ra để bảo vệ." },
      { text: "data", explanation: "Vì sao sai: Data là chứng cứ hoặc lý lẽ củng cố cho claim." },
      { text: "warrant", explanation: "Vì sao sai: Warrant là cầu nối suy luận gắn kết data với claim." }
    ]
  },
  {
    id: 47,
    topic: "Interpersonal Needs (FIRO)",
    question: "Schutz defines people who seek limited interaction as ....................",
    hint: "Những người có nhu cầu tình cảm/tương tác cá nhân thấp, chỉ tìm kiếm sự tương tác giới hạn.",
    correctIndices: [0],
    options: [
      { text: "underpersonals", explanation: "Chính xác! Will Schutz định nghĩa Underpersonals là những người tìm kiếm sự tương tác tình cảm hạn chế, giữ khoảng cách và thường né tránh gắn bó quá mức." },
      { text: "personal individual.", explanation: "Vì sao sai: Personal individual là người có mức độ tương tác cân bằng, lành mạnh." },
      { text: "overpersonals", explanation: "Vì sao sai: Overpersonals là những người luôn khao khát tương tác gắn bó sâu sắc và muốn mọi người thích mình." },
      { text: "autocrats", explanation: "Vì sao sai: Autocrats thuộc nhu cầu kiểm soát (control), không phải nhu cầu tình cảm/tương tác cá nhân (affection)." }
    ]
  },
  {
    id: 48,
    topic: "Conflict Management",
    question: "Discussing conflict management, Jack Gibb said “____________ communication focuses on the points and not personalities.”",
    hint: "Giao tiếp mang tính hỗ trợ tập trung vào vấn đề chuyên môn thay vì công kích tính cách cá nhân.",
    correctIndices: [0],
    options: [
      { text: "Supportive", explanation: "Chính xác! Jack Gibb khẳng định: 'Supportive communication focuses on the points and not personalities' (Giao tiếp mang tính hỗ trợ tập trung vào các luận điểm/vấn đề cần giải quyết chứ không nhắm vào công kích cá nhân)." },
      { text: "Defensive", explanation: "Vì sao sai: Defensive communication (giao tiếp phòng thủ) xuất hiện khi người ta cảm thấy bị đe dọa hoặc bị công kích cá nhân." },
      { text: "Face-saving", explanation: "Vì sao sai: Face-saving là chiến lược giữ thể diện, không phải khái niệm nguyên văn của Gibb ở câu này." },
      { text: "Avoidance", explanation: "Vì sao sai: Avoidance là né tránh xung đột." }
    ]
  },
  {
    id: 49,
    topic: "Interpersonal Needs (FIRO)",
    question: "According to Schutz, people who may be less likely to seek interaction, may prefer smaller groups, and will generally not be found on center stage are called .....................",
    hint: "Những người ít tìm kiếm sự hòa nhập xã hội, thích nhóm nhỏ và tránh đứng ở vị trí trung tâm.",
    correctIndices: [1],
    options: [
      { text: "Oversocials", explanation: "Vì sao sai: Oversocials là những người hướng ngoại mạnh, thích đám đông và luôn muốn là tâm điểm chú ý." },
      { text: "Undersocials", explanation: "Chính xác! Theo thuyết FIRO của Schutz, Undersocials là những người ít khi chủ động tìm kiếm sự tương tác, thích các nhóm nhỏ và thường tránh né vị trí trung tâm sân khấu." },
      { text: "Personal individual", explanation: "Vì sao sai: Thuộc thang đo nhu cầu tình cảm (affection), không thuộc nhu cầu hòa nhập (inclusion)." },
      { text: "Social person", explanation: "Vì sao sai: Không phải thuật ngữ lý thuyết chuẩn của Schutz." }
    ]
  },
  {
    id: 50,
    topic: "Interpersonal Needs (FIRO)",
    question: "................... shift the burn of responsibility from themselves to others, looking to others for a sense of control (Schutz, W., 1966).",
    hint: "Những người thoái thác gánh nặng trách nhiệm cho người khác, tìm kiếm sự chỉ đạo từ người khác.",
    correctIndices: [3],
    options: [
      { text: "Democrats", explanation: "Vì sao sai: Democrats là những người chia sẻ quyền lực và ra quyết định dân chủ." },
      { text: "Undersocials", explanation: "Vì sao sai: Undersocials là nhu cầu hòa nhập xã hội, không phải nhu cầu kiểm soát." },
      { text: "Oversocials", explanation: "Vì sao sai: Oversocials là nhu cầu hòa nhập xã hội." },
      { text: "Abdicrats", explanation: "Chính xác! Will Schutz (1966) mô tả Abdicrats là những người thoái thác gánh nặng trách nhiệm sang người khác (shift the burden/burn of responsibility to others) và trông cậy vào người khác để kiểm soát tình hình." }
    ]
  }
];
