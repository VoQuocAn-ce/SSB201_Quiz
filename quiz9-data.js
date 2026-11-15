/**
 - SSB201 - Quiz 9 Data

 - 50 câu hỏi trắc nghiệm từ thư mục Quiz9

 - Bao gồm gợi ý và giải thích chi tiết đáp án đúng / sai bằng tiếng Việt.

 */

const QUIZ_9_QUESTIONS = [
  {
    id: 1,
    topic: "International Etiquette",
    question: "Do not wear ________ in Thailand because these colors have funeral connotations.",
    hint: "Tại Thái Lan, màu đen và trắng trơn gắn liền với đám tang và sự tang tóc.",
    correctIndices: [1],
    options: [
      { text: "red and solid yellow", explanation: "Vì sao sai: Màu vàng gắn với hoàng gia Thái Lan và màu đỏ gắn với may mắn/lễ hội, không phải màu tang lễ." },
      { text: "black or solid white", explanation: "Chính xác! Ở Thái Lan, màu đen (black) và trắng trơn (solid white) là những màu liên quan đến đám tang (funeral connotations), không nên mặc khi tham dự các sự kiện trang trọng hoặc thăm hỏi người dân." },
      { text: "red and solid blue", explanation: "Vì sao sai: Màu đỏ và xanh lam không phải màu tang lễ ở Thái Lan." },
      { text: "yellow and solid grey", explanation: "Vì sao sai: Không phải cặp màu kiêng kỵ tang lễ tại Thái Lan theo giáo trình." }
    ]
  },
  {
    id: 2,
    topic: "Toulmin Argument Model",
    question: "“Your statement of belief or truth” means ............ (Toulmin's Three-Part Rhetorical Strategy)",
    hint: "Trong mô hình lập luận của Toulmin, phát biểu khẳng định niềm tin hoặc chân lý là gì?",
    correctIndices: [0],
    options: [
      { text: "claim", explanation: "Chính xác! Theo mô hình Toulmin, Claim (luận điểm / khẳng định) là lời tuyên bố về niềm tin hoặc chân lý ('your statement of belief or truth')." },
      { text: "data", explanation: "Vì sao sai: Data (dữ liệu / chứng cứ) là căn cứ, số liệu, sự kiện được dùng để củng cố cho claim." },
      { text: "warrant", explanation: "Vì sao sai: Warrant (bảo chứng) là cầu nối logic giải thích tại sao data chứng minh cho claim." }
    ]
  },
  {
    id: 3,
    topic: "Conflict Management",
    question: "Which statement is NOT correct?",
    hint: "Xung đột phát sinh khi các bên nhận thức mục tiêu là KHÔNG tương thích (incompatible), chứ không phải tương thích.",
    correctIndices: [1],
    options: [
      { text: "Conflict is universal.", explanation: "Vì sao sai: Đây là phát biểu ĐÚNG; xung đột là hiện tượng phổ quát trong giao tiếp con người." },
      { text: "Conflict is associated with compatible goals.", explanation: "Chính xác! Phát biểu này SAI (NOT correct): Conflict luôn gắn với các mục tiêu xung khắc/không tương thích (incompatible goals), chứ không phải compatible (tương thích)." },
      { text: "Conflict is associated with scarce resources.", explanation: "Vì sao sai: Đây là phát biểu ĐÚNG; nguồn lực hạn chế thường dẫn đến xung đột." },
      { text: "Conflict is associated with interference.", explanation: "Vì sao sai: Đây là phát biểu ĐÚNG; xung đột nảy sinh khi có sự cản trở đạt mục tiêu." }
    ]
  },
  {
    id: 4,
    topic: "Interpersonal Needs",
    question: "Through ___________, we meet universal human needs.",
    hint: "Thông qua giao tiếp, con người đáp ứng các nhu cầu cơ bản như gắn kết, kiểm soát và yêu thương.",
    correctIndices: [1],
    options: [
      { text: "thinking", explanation: "Vì sao sai: Suy nghĩ cá nhân không thể tự đáp ứng các nhu cầu tương tác xã hội của con người." },
      { text: "communication", explanation: "Chính xác! Giao tiếp (communication) là phương tiện giúp chúng ta kết nối xã hội và thỏa mãn các nhu cầu nền tảng của con người." },
      { text: "evaluation", explanation: "Vì sao sai: Đánh giá không phải phương tiện thỏa mãn các nhu cầu cơ bản của con người theo McLean." },
      { text: "comparison", explanation: "Vì sao sai: So sánh xã hội không phải từ khóa trong định nghĩa của giáo trình." }
    ]
  },
  {
    id: 5,
    topic: "Speech Transitions",
    question: "............ are key words that alert the audience to a change in topic, a tangential explanation, conclusion.",
    hint: "Những từ khóa báo hiệu cho người nghe biết sự chuyển ý, mở rộng hay kết luận được gọi là biển chỉ dẫn (signposts).",
    correctIndices: [0],
    options: [
      { text: "Signposts (or indicators)", explanation: "Chính xác! Signposts (chỉ dẫn/chỉ dấu) là các từ ngữ quan trọng báo hiệu cho khán giả biết sự đổi đề tài, giải thích nhánh phụ hoặc sắp đến phần kết luận." },
      { text: "Jargon", explanation: "Vì sao sai: Jargon là thuật ngữ chuyên ngành dùng trong một lĩnh vực cụ thể." },
      { text: "Doublespeak", explanation: "Vì sao sai: Doublespeak là ngôn từ cố tình làm mơ hồ, che đậy ý nghĩa thật." },
      { text: "Euphemism", explanation: "Vì sao sai: Euphemism là uyển ngữ (nói giảm nói tránh)." }
    ]
  },
  {
    id: 6,
    topic: "Effective Meetings",
    question: "What is NOT a strategy for effective meetings?",
    hint: "Cuộc họp hiệu quả phải bắt đầu đúng giờ, không nên chờ đợi những người đến muộn vì sẽ làm lãng phí thời gian người đúng giờ.",
    correctIndices: [2],
    options: [
      { text: "Send out the last meeting's minutes one week before the next meeting.", explanation: "Vì sao sai: Đây LÀ chiến lược đúng để mọi người nắm lại nội dung trước cuộc họp kế tiếp." },
      { text: "Make sure the participants know their role and requirements prior to the meeting.", explanation: "Vì sao sai: Đây LÀ chiến lược đúng giúp các thành viên chuẩn bị trước phần việc của mình." },
      { text: "Wait for all people to arrive before starting the meeting.", explanation: "Chính xác! Đây KHÔNG phải chiến lược hiệu quả. Cuộc họp chuyên nghiệp luôn bắt đầu đúng giờ để tôn trọng người đến đúng giờ; không nên đợi người đến muộn." },
      { text: "Start and end your meetings on time as scheduled.", explanation: "Vì sao sai: Bắt đầu và kết thúc đúng giờ theo lịch trình LÀ quy tắc vàng của cuộc họp hiệu quả." }
    ]
  },
  {
    id: 7,
    topic: "Telephone Conversations",
    question: "Which of the below is NOT one of the five stages in a telephone conversation as composed by David Taylor and Alyse Terhune?",
    hint: "5 giai đoạn gồm: Opening, Feedforward, Business, Feedback, Closing. Không có giai đoạn riêng tên là Greeting.",
    correctIndices: [1],
    options: [
      { text: "Opening", explanation: "Vì sao sai: Giai đoạn 1 là Opening (Mở đầu)." },
      { text: "Greeting", explanation: "Chính xác! Trong mô hình 5 bước của David Taylor và Alyse Terhune không có giai đoạn độc lập mang tên 'Greeting' (chào hỏi nằm trong bước Opening)." },
      { text: "Business", explanation: "Vì sao sai: Giai đoạn 3 là Business (Nội dung công việc chính)." },
      { text: "Feedback", explanation: "Vì sao sai: Giai đoạn 4 là Feedback (Phản hồi)." },
      { text: "Closing", explanation: "Vì sao sai: Giai đoạn 5 là Closing (Kết thúc cuộc gọi)." }
    ]
  },
  {
    id: 8,
    topic: "Intercultural Prejudices",
    question: "............... involves a negative preconceived judgment or opinion that guides conduct or social behavior.",
    hint: "Định kiến - phán xét tiêu cực có sẵn trước khi tìm hiểu thực tế, dẫn dắt hành vi xã hội.",
    correctIndices: [1],
    options: [
      { text: "Stereotypes", explanation: "Vì sao sai: Stereotypes (khuôn mẫu) là niềm tin đơn giản hóa, tổng quát hóa về một nhóm người." },
      { text: "Prejudice", explanation: "Chính xác! Prejudice (định kiến) liên quan đến sự phán xét hoặc ý kiến tiêu cực được hình thành trước, chi phối cách ứng xử xã hội." },
      { text: "Ethnocentrism", explanation: "Vì sao sai: Ethnocentrism (chủ nghĩa vị chủng) là coi văn hóa của mình là trung tâm và vượt trội hơn văn hóa khác." },
      { text: "All answers are false", explanation: "Vì sao sai: Đã có đáp án B (Prejudice) là chính xác." }
    ]
  },
  {
    id: 9,
    topic: "Stereotypes",
    question: "_____________, perceptions about certain groups of people or nationalities, exist with U.S. persons and those of other cultures.",
    hint: "Khuôn mẫu tư duy về một nhóm người hoặc quốc tịch nhất định.",
    correctIndices: [3],
    options: [
      { text: "Values", explanation: "Vì sao sai: Values là các giá trị cốt lõi về đúng/sai, tốt/xấu." },
      { text: "Believes", explanation: "Vì sao sai: Niềm tin không phải thuật ngữ chỉ nhận thức rập khuôn về nhóm người/quốc tịch." },
      { text: "Cultural symbols", explanation: "Vì sao sai: Biểu tượng văn hóa là các hình ảnh, vật phẩm đại diện cho nền văn hóa." },
      { text: "Stereotypes", explanation: "Chính xác! Stereotypes (khuôn mẫu tư duy) là nhận thức gắn định kiến khái quát về các nhóm người hoặc quốc tịch cụ thể." }
    ]
  },
  {
    id: 10,
    topic: "Public Speaking & Media",
    question: "The President John F. Kennedy's famous statement, “Ask not what your country can do for you, but what you can do for your country.”, is a ____________",
    hint: "Đáp án chính xác theo đề thi là quotes (trích dẫn).",
    correctIndices: [2],
    options: [
      { text: "slogan", explanation: "Vì sao sai: Slogan là khẩu hiệu quảng cáo hoặc phong trào." },
      { text: "memory", explanation: "Vì sao sai: Memory không phải thuật ngữ phân loại phát ngôn." },
      { text: "quotes", explanation: "Chính xác theo đáp án đề thi! Câu nói bất hủ của Tổng thống Kennedy được tính điểm là quotes (trích dẫn)." },
      { text: "sound bite", explanation: "Lưu ý: Mặc dù câu nói này mang tính chất một sound bite kinh điển, nhưng đáp án chính thức theo đề thi là quotes." }
    ]
  },
  {
    id: 11,
    topic: "Nonverbal Gestures",
    question: "In Asian countries, a proper handshake is .........",
    hint: "Ở các nước châu Á, bắt tay nên nhẹ nhàng, vừa phải, tránh bóp quá mạnh.",
    correctIndices: [0],
    options: [
      { text: "gentle", explanation: "Chính xác! Tại nhiều quốc gia châu Á, cái bắt tay thích hợp là nhẹ nhàng (gentle) và tôn trọng, tránh bắt tay quá chặt (firm) vì có thể bị coi là thô bạo hoặc gây hấn." },
      { text: "firm", explanation: "Vì sao sai: Bắt tay chặt phổ biến ở phương Tây (Mỹ/Đức), không phải phong cách truyền thống châu Á." },
      { text: "light and quick", explanation: "Vì sao sai: Theo giáo trình Chaney & Martin, từ khóa chuẩn cho cái bắt tay châu Á là 'gentle'." },
      { text: "brusque and firm", explanation: "Vì sao sai: Cộc lốc và mạnh bạo bị coi là bất lịch sự." }
    ]
  },
  {
    id: 12,
    topic: "Language Rules",
    question: "_____________ govern the meaning of words and how to interpret them (Martinich, 1996). It is the study of meaning in language.",
    hint: "Quy tắc ngữ nghĩa - chi phối ý nghĩa của từ ngữ và cách diễn giải chúng.",
    correctIndices: [3],
    options: [
      { text: "Syntactic rules", explanation: "Vì sao sai: Cú pháp (Syntax) quy định trật tự sắp xếp từ trong câu." },
      { text: "English rules", explanation: "Vì sao sai: Không phải thuật ngữ ngôn ngữ học trong giáo trình." },
      { text: "Contextual rules", explanation: "Vì sao sai: Ngữ cảnh (Context) quy định ý nghĩa dựa trên hoàn cảnh giao tiếp và phong tục xã hội." },
      { text: "Semantic rules", explanation: "Chính xác! Semantic rules (quy tắc ngữ nghĩa) chi phối ý nghĩa của từ ngữ và cách chúng ta diễn giải chúng trong ngôn ngữ." }
    ]
  },
  {
    id: 13,
    topic: "Perception & Stimuli",
    question: "............. are those that arise from within one’s self, such as being hungry.",
    hint: "Kích thích xuất phát từ bên trong cơ thể (như cảm giác đói, đau, suy nghĩ).",
    correctIndices: [0],
    options: [
      { text: "Internal stimuli", explanation: "Chính xác! Internal stimuli (kích thích nội tại) là những kích thích phát sinh từ chính bên trong bản thân, ví dụ như cơn đói, sự mệt mỏi hay dòng suy nghĩ cá nhân." },
      { text: "External stimuli", explanation: "Vì sao sai: External stimuli là kích thích từ môi trường bên ngoài (âm thanh, ánh sáng, nhiệt độ)." },
      { text: "Selective attention", explanation: "Vì sao sai: Selective attention là sự tập trung chú ý có chọn lọc." }
    ]
  },
  {
    id: 14,
    topic: "Written Communication",
    question: "Success in writing comes from good habits: ..................",
    hint: "Thành công trong kỹ năng viết bắt nguồn từ đọc, viết thường xuyên và tư duy phản biện.",
    correctIndices: [0],
    options: [
      { text: "reading, writing, and critical thinking", explanation: "Chính xác! Thành công trong việc viết đến từ việc xây dựng 3 thói quen cốt lõi: đọc (reading), viết (writing), và tư duy phản biện (critical thinking)." },
      { text: "reading, analyzing, and critical thinking", explanation: "Vì sao sai: Thiếu yếu tố rèn luyện viết (writing) trong bộ ba chuẩn của McLean." },
      { text: "communicating, writing, and critical thinking", explanation: "Vì sao sai: Từ đầu tiên trong bộ ba thói quen viết của McLean là 'reading', không phải 'communicating'." }
    ]
  },
  {
    id: 15,
    topic: "Crisis & Press Conference",
    question: "Why a speaker in a press conference should not display a nonverbal gesture or make a face at a question?",
    hint: "Cử chỉ phi ngôn ngữ hoặc biểu cảm khuôn mặt có thể bị truyền thông và công chúng diễn giải sai lệch.",
    correctIndices: [2],
    options: [
      { text: "Because it will make the speaker look unprofessional.", explanation: "Vì sao sai: Dù giảm tính chuyên nghiệp, lý do chính được nhấn mạnh trong giáo trình là nguy cơ bị diễn giải sai lệch." },
      { text: "Because it will not show the respect to the media.", explanation: "Vì sao sai: Không phải lý do cốt lõi trong tài liệu khủng hoảng truyền thông." },
      { text: "Because it can be misinterpreted.", explanation: "Chính xác! Trong họp báo, máy quay ghi lại mọi chi tiết nhỏ; một cái nhăn mặt hay cử chỉ vô tình có thể bị hiểu lầm (misinterpreted) thành sự phản đối, bất mãn hay nói dối." },
      { text: "Because it is impolite and abusive.", explanation: "Vì sao sai: Làm mặt lạ không đồng nghĩa với hành vi lăng mạ (abusive)." }
    ]
  },
  {
    id: 16,
    topic: "Defensive vs Supportive Communication",
    question: "By choosing to focus on the message instead of the messenger, we keep the discussion ____________ and professional (Jack Gibb).",
    hint: "Tập trung vào nội dung thay vì công kích người truyền tin sẽ duy trì một bầu không khí mang tính xây dựng, hỗ trợ.",
    correctIndices: [0],
    options: [
      { text: "supportive", explanation: "Chính xác! Theo Jack Gibb, việc tập trung vào thông điệp (message) thay vì người nói (messenger) giúp giữ cho cuộc thảo luận mang tính hỗ trợ (supportive) và chuyên nghiệp, tránh tạo ra tâm lý phòng thủ (defensive)." },
      { text: "defensive", explanation: "Vì sao sai: Defensive (phòng thủ) là trạng thái đối kháng tiêu cực cần tránh." },
      { text: "face-detracting", explanation: "Vì sao sai: Face-detracting là chiến lược hạ thấp thể diện đối phương." },
      { text: "avoidance", explanation: "Vì sao sai: Avoidance là sự né tránh xung đột." }
    ]
  },
  {
    id: 17,
    topic: "Critical Thinking",
    question: "............. means becoming aware of your thinking process. It’s a human trait that allows us to step outside what we read or write and ask ourselves, “Does this really make sense?” “Are there other, perhaps better, ways to explain this idea?",
    hint: "Nhận thức về quá trình tư duy, tự đặt câu hỏi về tính hợp lý của vấn đề chính là tư duy phản biện.",
    correctIndices: [0],
    options: [
      { text: "Critical thinking", explanation: "Chính xác! Tư duy phản biện (Critical thinking) là quá trình tự nhận thức về luồng tư duy của mình, đứng lùi lại để đánh giá xem điều mình đọc/viết có thực sự hợp lý và có cách nào diễn giải tốt hơn không." },
      { text: "Problem solving", explanation: "Vì sao sai: Giải quyết vấn đề tập trung vào tìm giải pháp xử lý sự cố." },
      { text: "Thinking design", explanation: "Vì sao sai: Không phải thuật ngữ chuẩn trong định nghĩa này của McLean." }
    ]
  },
  {
    id: 18,
    topic: "Physical Activity & Wellness",
    question: "“Inhale and lift up your body and spirit, exhale and soften your chest and shoulders connecting to the earth” is called ................activity.",
    hint: "Bài tập hít thở kết hợp nâng người lên rồi hạ ngực, vai chạm đất mang tên thằn lằn (Lizard Push-up).",
    correctIndices: [0],
    options: [
      { text: "Lizard Push-up", explanation: "Chính xác! Hoạt động thể chất giúp thư giãn và nạp năng lượng trong tài liệu là Lizard Push-up ('Inhale and lift up... exhale and soften...')." },
      { text: "Tiger Push up", explanation: "Vì sao sai: Không có bài tập Tiger Push up trong tài liệu." },
      { text: "Turtle Push up", explanation: "Vì sao sai: Không có bài tập Turtle Push up trong tài liệu." },
      { text: "Rabbit Push up", explanation: "Vì sao sai: Không có bài tập Rabbit Push up trong tài liệu." }
    ]
  },
  {
    id: 19,
    topic: "Culture & Taboos",
    question: "Practices or verbal expressions considered by a society or culture as improper or unacceptable are called ...........",
    hint: "Những hành vi hoặc lời nói bị xã hội/văn hóa xem là cấm kỵ hoặc không thể chấp nhận.",
    correctIndices: [0],
    options: [
      { text: "taboos", explanation: "Chính xác! Taboos (điều cấm kỵ) là những hành vi hoặc phát ngôn bị một nền văn hóa/xã hội nghiêm cấm hoặc coi là hoàn toàn không thể chấp nhận." },
      { text: "cultures", explanation: "Vì sao sai: Văn hóa là tổng thể lối sống và giá trị của một cộng đồng." },
      { text: "religions", explanation: "Vì sao sai: Tôn giáo là hệ thống đức tin tâm linh." },
      { text: "superstitions", explanation: "Vì sao sai: Superstitions là sự mê tín (niềm tin vào điềm báo, bùa chú phi khoa học)." }
    ]
  },
  {
    id: 20,
    topic: "Speeches to Inform",
    question: "“Speech to inform” means",
    hint: "Bài nói nhằm mục đích cung cấp thông tin, nâng cao hiểu biết và chia sẻ chuyên môn.",
    correctIndices: [0],
    options: [
      { text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise", explanation: "Chính xác! Bài phát biểu thông tin (Speech to inform) có mục tiêu gia tăng kiến thức cho người nghe, giảng giải về một chủ đề/vấn đề và chia sẻ chuyên môn của diễn giả." },
      { text: "to show the audience how to use, operate, or do something.", explanation: "Vì sao sai: Đây là mục tiêu của Speech to demonstrate (bài nói hướng dẫn thực hành)." },
      { text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.", explanation: "Vì sao sai: Đây là mục tiêu của Speech to persuade (bài nói thuyết phục)." },
      { text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.", explanation: "Vì sao sai: Đây là mục tiêu của Speech to entertain (bài nói giải trí)." }
    ]
  },
  {
    id: 21,
    topic: "Perception Process",
    question: "Perceptions are influenced by how we select, organize, and interpret words and ideas.",
    hint: "Quá trình tri giác bao gồm 3 bước: chọn lọc (selection), sắp xếp (organization) và giải thích (interpretation).",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Tri giác chịu ảnh hưởng trực tiếp từ cách chúng ta chọn lọc, sắp xếp và diễn giải thông tin, từ ngữ và ý tưởng." },
      { text: "False", explanation: "Vì sao sai: Đây là nguyên lý căn bản của quá trình tri giác trong tâm lý học giao tiếp." }
    ]
  },
  {
    id: 22,
    topic: "Negative News Message",
    question: "The third part of the negative news message, involving the bad news itself, and the emphasis here is on clarity and accuracy, is called ___________",
    hint: "Phần thứ ba trong cấu trúc 4 phần của tin xấu chính là bản thân tin tiêu cực.",
    correctIndices: [2],
    options: [
      { text: "buffer or cushion", explanation: "Vì sao sai: Buffer or cushion là phần đệm mở đầu (phần 1)." },
      { text: "redirect", explanation: "Vì sao sai: Redirect là phần chuyển hướng giải pháp (phần 4)." },
      { text: "negative news", explanation: "Chính xác! Phần thứ ba là Negative news (tin tiêu cực), tập trung vào sự rõ ràng, chính xác và không để xảy ra hiểu lầm." },
      { text: "explanation", explanation: "Vì sao sai: Explanation là phần giải thích lý do (phần 2)." }
    ]
  },
  {
    id: 23,
    topic: "Ethics in Business Communication",
    question: "The business communicator’s second fundamental responsibility is to be ethical, which means being __________________",
    hint: "Trách nhiệm đạo đức của người làm truyền thông kinh doanh bao gồm bình đẳng, tôn trọng và đáng tin cậy.",
    correctIndices: [0],
    options: [
      { text: "egalitarian, respectful, and trustworthy", explanation: "Chính xác! Trách nhiệm cơ bản thứ hai của người giao tiếp kinh doanh là Đạo đức (Ethical), biểu hiện qua: bình đẳng (egalitarian), tôn trọng (respectful) và đáng tin cậy (trustworthy)." },
      { text: "intelligent, respectful, and polite", explanation: "Vì sao sai: Không khớp bộ ba tiêu chuẩn đạo đức trong giáo trình McLean." },
      { text: "egalitarian, polite, and humble", explanation: "Vì sao sai: Thiếu yếu tố cốt lõi là 'respectful' và 'trustworthy'." },
      { text: "egalitarian, respectful, and intelligent", explanation: "Vì sao sai: Yếu tố thứ ba là đáng tin cậy (trustworthy), không phải thông minh (intelligent)." }
    ]
  },
  {
    id: 24,
    topic: "Dining & Tipping Etiquette",
    question: "“Insult tipping”, or ___________, shows a lack of respect and is inappropriate regardless of how poor the service.",
    hint: "Hành động để lại một vài đồng xu lẻ tiền tip bị coi là sự xúc phạm đối với người phục vụ.",
    correctIndices: [0],
    options: [
      { text: "leaving a few coins", explanation: "Chính xác! 'Insult tipping' (tiền tip xúc phạm) là việc để lại vài đồng tiền xu lẻ (leaving a few coins). Điều này thể hiện sự thiếu tôn trọng và bất lịch sự cho dù dịch vụ có tệ đến đâu." },
      { text: "leaving an abundant tip", explanation: "Vì sao sai: Để lại tiền tip hậu hĩnh là sự khen thưởng, không phải xúc phạm." },
      { text: "leaving nothing", explanation: "Vì sao sai: Không để lại tiền tip chưa phải là định nghĩa của 'insult tipping' (cố tình để lại vài đồng xu lẻ)." },
      { text: "leaving", explanation: "Vì sao sai: Rời đi đơn thuần không giải thích khái niệm insult tipping." }
    ]
  },
  {
    id: 25,
    topic: "Writing Tone",
    question: "A .............., as the name implies, resembles oral communication in style, tone, and word choice. It can be appropriate for some audiences, and may serve you well in specific contexts, but it can easily come across as less than professional.",
    hint: "Giọng điệu hội thoại (giống như nói chuyện hàng ngày) có thể thiếu tính trang trọng chuyên nghiệp.",
    correctIndices: [0],
    options: [
      { text: "conversational tone", explanation: "Chính xác! Conversational tone (giọng điệu trò chuyện/hội thoại) mô phỏng lời nói miệng về phong cách, từ ngữ, thích hợp với bạn bè nhưng dễ bị đánh giá là thiếu chuyên nghiệp trong văn bản kinh doanh trang trọng." },
      { text: "communicational", explanation: "Vì sao sai: Không phải thuật ngữ chỉ giọng điệu văn bản." },
      { text: "tranferring", explanation: "Vì sao sai: Không có nghĩa phù hợp với ngữ cảnh." },
      { text: "Message", explanation: "Vì sao sai: Message là thông điệp nói chung, không phải kiểu giọng văn." }
    ]
  },
  {
    id: 26,
    topic: "Direct vs Indirect Approach",
    question: "The ________ is often associated with a message where the audience values brevity and the message needs to be concise.",
    hint: "Cách tiếp cận đi thẳng vào vấn đề (direct approach) thích hợp khi người đọc cần sự ngắn gọn, súc tích.",
    correctIndices: [1],
    options: [
      { text: "indirect approach", explanation: "Vì sao sai: Cách tiếp cận gián tiếp dùng khi cần thuyết phục hoặc thông báo tin xấu, đi vòng trước khi nêu điểm chính." },
      { text: "direct approach", explanation: "Chính xác! Direct approach (tiếp cận trực tiếp) đưa kết luận/điểm chính lên đầu, phù hợp khi khán giả coi trọng sự ngắn gọn, nhanh chóng và thông điệp cần súc tích." },
      { text: "negative approach", explanation: "Vì sao sai: Không phải thuật ngữ chỉ cấu trúc tiếp cận thông điệp." },
      { text: "positive approach", explanation: "Vì sao sai: Không phải thuật ngữ đối lập với indirect approach." }
    ]
  },
  {
    id: 27,
    topic: "Globalization Concepts",
    question: "What “focuses on the imperialistic ambitions of nations, corporations, organizations, and the like and their desire, indeed need, to impose themselves on various geographic areas” (Ritzer, 2003)?",
    hint: "Thuật ngữ do George Ritzer đưa ra mô tả tham vọng bành trướng, áp đặt của các tập đoàn/quốc gia lên các khu vực.",
    correctIndices: [1],
    options: [
      { text: "It is localization.", explanation: "Vì sao sai: Localization là sự địa phương hóa." },
      { text: "It is grobalization.", explanation: "Chính xác! Grobalization (do George Ritzer đặt ra, ghép từ 'grow' và 'globalization') tập trung vào tham vọng bành trướng và áp đặt của các quốc gia, tập đoàn lớn lên nhiều vùng lãnh thổ." },
      { text: "It is glocalization.", explanation: "Vì sao sai: Glocalization (bản địa hóa toàn cầu) là sự giao thoa giữa toàn cầu và địa phương." },
      { text: "It is globalization.", explanation: "Vì sao sai: Globalization là toàn cầu hóa nói chung, Ritzer dùng 'grobalization' để chỉ khía cạnh bành trướng áp đặt cụ thể." }
    ]
  },
  {
    id: 28,
    topic: "Design Thinking - Empathy Map",
    question: "Empathy Map includes",
    hint: "Bản đồ thấu cảm gồm các góc nhìn: Nghe (Hear), Nghĩ (Think), Thấy (See), Cảm thấy (Feel), Làm (Do) và Nói (Say).",
    correctIndices: [0],
    options: [
      { text: "Hear, Think, See, Feel, Do and Say", explanation: "Chính xác! Bản đồ thấu cảm (Empathy Map) chuẩn gồm 6 yếu tố: Hear (nghe thấy gì), Think (suy nghĩ gì), See (nhìn thấy gì), Feel (cảm nhận thế nào), Do (hành động ra sao) và Say (nói những gì)." },
      { text: "Hear, Analyze, See, Touch and Do", explanation: "Vì sao sai: Empathy Map không gồm 'Analyze' và 'Touch'." },
      { text: "Listen, Do, See and Talk", explanation: "Vì sao sai: Thiếu các thành phần cốt lõi Think và Feel." },
      { text: "Touch, Listen, Talk and Silent", explanation: "Vì sao sai: Không đúng cấu trúc của Empathy Map." }
    ]
  },
  {
    id: 29,
    topic: "Self-fulfilling Prophecy",
    question: "The concept of a self-fulfilling prophecy, in which someone’s behavior comes to match and mirror others’ expectations, is not new.",
    hint: "Lời tiên tri tự ứng nghiệm (hành vi biến chuyển để khớp với kỳ vọng của người khác) là khái niệm đã có từ rất lâu.",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Khái niệm self-fulfilling prophecy (lời tiên tri tự ứng nghiệm - nơi hành vi một người dần phản ánh kỳ vọng của người khác về họ) là một lý thuyết kinh điển và không hề mới." },
      { text: "False", explanation: "Vì sao sai: Đây là khẳng định hoàn toàn đúng trong giáo trình tâm lý xã hội và giao tiếp." }
    ]
  },
  {
    id: 30,
    topic: "Intercultural Etiquette",
    question: "When travelling, knowing consumption taboos of the host culture is ___________.",
    hint: "Hiểu biết về điều cấm kỵ trong ăn uống của văn hóa bản địa là vô cùng quan trọng.",
    correctIndices: [0],
    options: [
      { text: "important", explanation: "Chính xác! Khi đi du lịch hoặc công tác nước ngoài, việc am hiểu các điều cấm kỵ ăn uống (consumption taboos) của nước sở tại là vô cùng quan trọng (important) để tránh xúc phạm người bản xứ." },
      { text: "unimportant", explanation: "Vì sao sai: Bỏ qua điều cấm kỵ có thể gây hậu quả nghiêm trọng trong giao tiếp văn hóa." },
      { text: "professional", explanation: "Vì sao sai: Từ khóa chuẩn xác trong câu trích dẫn của giáo trình là 'important'." },
      { text: "unnecessary", explanation: "Vì sao sai: Đây là kiến thức thiết yếu khi đi nước ngoài." }
    ]
  },
  {
    id: 31,
    topic: "Cultural Intelligence",
    question: "_______________ involves an awareness of one’s own cultural style in order to make behavioral adjustments to international counterparts.",
    hint: "Trí thông minh nội tâm (intrapersonal) giúp nhận biết phong cách văn hóa của chính bản thân để điều chỉnh cho phù hợp.",
    correctIndices: [2],
    options: [
      { text: "Linguistic intelligence", explanation: "Vì sao sai: Trí thông minh ngôn ngữ liên quan đến khả năng dùng từ ngữ." },
      { text: "Spatial intelligence", explanation: "Vì sao sai: Trí thông minh không gian thị giác liên quan đến hình ảnh, khoảng cách." },
      { text: "Intrapersonal intelligence", explanation: "Chính xác! Intrapersonal intelligence (trí thông minh nội tâm) bao hàm khả năng tự nhận thức sâu sắc về phong cách văn hóa và hành vi của chính mình để từ đó tự điều chỉnh thích ứng với đối tác quốc tế." },
      { text: "Interpersonal intelligence", explanation: "Vì sao sai: Interpersonal là trí thông minh tương tác xã hội giữa người với người." }
    ]
  },
  {
    id: 32,
    topic: "Gift Giving Etiquette",
    question: "Why should we avoid giving perfume or wine as gifts to the French people?",
    hint: "Pháp là quê hương của nước hoa và rượu vang thượng hạng, vì đó là đặc sản (specialties) của chính họ.",
    correctIndices: [0],
    options: [
      { text: "Because those are their specialties.", explanation: "Chính xác! Nước hoa và rượu vang là đặc sản niềm tự hào quốc gia của Pháp (specialties); tặng người Pháp những món này dễ bị coi là thiếu tinh tế." },
      { text: "Because those are expensive.", explanation: "Vì sao sai: Giá đắt không phải lý do kiêng kỵ." },
      { text: "Because those are not expensive.", explanation: "Vì sao sai: Rượu vang và nước hoa Pháp thường có giá trị cao." },
      { text: "Because those are what they do not like.", explanation: "Vì sao sai: Người Pháp rất yêu thích rượu vang và nước hoa." }
    ]
  },
  {
    id: 33,
    topic: "Crisis Communication Plan",
    question: "Which is NOT an element of a crisis communication plan?",
    hint: "Nơi ăn chốn ngủ không nằm trong kế hoạch truyền thông khủng hoảng.",
    correctIndices: [2],
    options: [
      { text: "Crisis communication team members with contact information", explanation: "Vì sao sai: Danh sách thành viên đội truyền thông khủng hoảng kèm thông tin liên lạc là thành phần bắt buộc." },
      { text: "Designated spokesperson", explanation: "Vì sao sai: Người phát ngôn chỉ định là yếu tố then chốt để phát ngôn thống nhất." },
      { text: "Eating place/ resting location", explanation: "Chính xác! Địa điểm ăn uống / nghỉ ngơi KHÔNG phải là thành phần của một kế hoạch truyền thông xử lý khủng hoảng (Crisis Communication Plan)." },
      { text: "Media plan with procedures", explanation: "Vì sao sai: Kế hoạch làm việc với truyền thông và quy trình xử lý là phần cốt lõi của kế hoạch ứng phó khủng hoảng." }
    ]
  },
  {
    id: 34,
    topic: "Elements of Communication",
    question: "Written communication involves the same........ basic elements as oral communication.",
    hint: "Giao tiếp viết bao gồm đúng 8 yếu tố cơ bản giống như giao tiếp nói (nguồn, thông điệp, kênh, người nhận, phản hồi, môi trường, ngữ cảnh, nhiễu).",
    correctIndices: [3],
    options: [
      { text: "3", explanation: "Vì sao sai: Mô hình giao tiếp chuẩn của Scott McLean gồm 8 yếu tố." },
      { text: "4", explanation: "Vì sao sai: Không đủ các thành tố của quá trình giao tiếp." },
      { text: "5", explanation: "Vì sao sai: Thiếu các yếu tố bối cảnh, môi trường và nhiễu." },
      { text: "8", explanation: "Chính xác! Giao tiếp viết chia sẻ cùng 8 yếu tố cơ bản như giao tiếp nói: Source, Receiver, Message, Channel, Feedback, Environment, Context, và Interference." }
    ]
  },
  {
    id: 35,
    topic: "Speech Conclusion",
    question: "At the end of the message, your ............. should provide the audience with a sense of closure by summarizing your main points and relating them to the overall topic.",
    hint: "Phần kết luận tóm tắt các điểm chính và đem lại cảm giác trọn vẹn cho thông điệp.",
    correctIndices: [2],
    options: [
      { text: "attention statement", explanation: "Vì sao sai: Attention statement nằm ở đầu bài nhằm thu hút sự chú ý." },
      { text: "introduction", explanation: "Vì sao sai: Introduction nằm ở phần mở đầu để giới thiệu chủ đề." },
      { text: "conclusion", explanation: "Chính xác! Conclusion (phần kết luận) có chức năng tóm lược các ý chính, liên kết lại với chủ đề bao quát và tạo cho người nghe cảm giác thông điệp đã hoàn tất trọn vẹn (sense of closure)." },
      { text: "residual message", explanation: "Vì sao sai: Residual message là thông điệp đọng lại trong tâm trí người nghe sau bài nói." }
    ]
  },
  {
    id: 36,
    topic: "Culture & Communication",
    question: "What is the structure through which the communication is formulated and interpreted?",
    hint: "Cấu trúc định hình và giúp diễn giải toàn bộ quá trình giao tiếp chính là văn hóa.",
    correctIndices: [2],
    options: [
      { text: "It is context.", explanation: "Vì sao sai: Ngữ cảnh là bối cảnh tức thời, văn hóa mới là cấu trúc nền tảng." },
      { text: "It is communicator.", explanation: "Vì sao sai: Communicator là chủ thể thực hiện giao tiếp." },
      { text: "It is culture.", explanation: "Chính xác! 'Culture is the structure through which communication is formulated and interpreted' - Văn hóa là khuôn khổ cấu trúc mà qua đó thông điệp được tạo dựng và diễn giải." },
      { text: "It is feedback.", explanation: "Vì sao sai: Feedback là phản hồi từ người nhận." }
    ]
  },
  {
    id: 37,
    topic: "Speech Preparation",
    question: "............. is the process by which you look over your speech again in order to correct or improve it. You will notice elements that need further investigation, development, or additional examples and visual aids as your produce your speech.",
    hint: "Quá trình xem xét lại toàn bộ bài phát biểu để chỉnh sửa và nâng cấp chất lượng.",
    correctIndices: [2],
    options: [
      { text: "Production", explanation: "Vì sao sai: Production là quá trình soạn thảo tạo ra bài nói ban đầu." },
      { text: "Incubation", explanation: "Vì sao sai: Incubation là quá trình ấp ủ ý tưởng trong tâm trí." },
      { text: "Revision", explanation: "Chính xác! Revision (chỉnh lý / sửa chữa) là quá trình rà soát lại bài nói để sửa đổi, hoàn thiện và bổ sung dẫn chứng, phương tiện trực quan cần thiết." }
    ]
  },
  {
    id: 38,
    topic: "Arab Cultural Taboos",
    question: "In Arab countries, it is considered taboo to ask about the health of a man’s _________.",
    hint: "Tại các quốc gia Ả Rập theo đạo Hồi truyền thống, hỏi thăm sức khỏe vợ của một người đàn ông là điều cấm kỵ.",
    correctIndices: [1],
    options: [
      { text: "father", explanation: "Vì sao sai: Hỏi thăm người cha thể hiện sự kính trọng người lớn tuổi." },
      { text: "wife", explanation: "Chính xác! Tại các nước Ả Rập truyền thống, hỏi trực tiếp về người vợ (wife) của đối tác nam giới là điều cấm kỵ vì vấn đề riêng tư văn hóa." },
      { text: "mother", explanation: "Vì sao sai: Từ khóa chuẩn được nêu đích danh trong quy tắc giao tiếp Ả Rập của giáo trình là 'wife'." },
      { text: "son", explanation: "Vì sao sai: Hỏi thăm con trai là hoàn toàn bình thường." },
      { text: "daughter", explanation: "Vì sao sai: Đáp án chuẩn theo giáo trình là 'wife'." }
    ]
  },
  {
    id: 39,
    topic: "Language & Bias",
    question: "Using gender as a discriminating factor like referring to adult women as “girls” or using the word “man” to refer to humankind are examples of _____________",
    hint: "Dùng từ ngữ phân biệt giới tính (như gọi phụ nữ trưởng thành là girls hoặc man để chỉ loài người).",
    correctIndices: [0],
    options: [
      { text: "Sexist language", explanation: "Chính xác! Sexist language (ngôn ngữ phân biệt giới tính) là việc dùng ngôn từ mang định kiến hoặc phân biệt dựa trên giới tính, ví dụ gọi phụ nữ trưởng thành là 'girls' hoặc dùng 'man' để đại diện cho toàn nhân loại." },
      { text: "Slang", explanation: "Vì sao sai: Slang là tiếng lóng dùng trong giao tiếp không trang trọng." },
      { text: "Racist language", explanation: "Vì sao sai: Racist language là ngôn ngữ phân biệt chủng tộc." },
      { text: "Cliché", explanation: "Vì sao sai: Cliché là cụm từ sáo rỗng do lặp lại quá nhiều." }
    ]
  },
  {
    id: 40,
    topic: "Media Interviews",
    question: "What are the Interview Preparation Factors for media interviews?",
    hint: "4 yếu tố chuẩn bị phỏng vấn truyền thông theo giáo trình Scott McLean: Chủ đề (Topic), Thời gian (Time), Định dạng (Format) và Bối cảnh (Background).",
    correctIndices: [1],
    options: [
      { text: "Topic, Location, Format, and Background", explanation: "Vì sao sai: Yếu tố thứ hai trong Bảng 15.1 của McLean là Time, không phải Location." },
      { text: "Topic, Time, Format, and Background", explanation: "Chính xác! 4 yếu tố chuẩn bị phỏng vấn truyền thông (Interview Preparation Factors) theo Bảng Table 15.1 trang 342 giáo trình Scott McLean gồm: Topic (chủ đề), Time (thời lượng/thời gian), Format (định dạng phỏng vấn), và Background (bối cảnh/thông tin nền)." },
      { text: "Topic, Location, Interviewers, and Background", explanation: "Vì sao sai: Sai ở Location và Interviewers." },
      { text: "Topic, Location, Format, and Time", explanation: "Vì sao sai: Thiếu Background và thừa Location." }
    ]
  },
  {
    id: 41,
    topic: "Rhetorical Proofs - Aristotle",
    question: "Logos means",
    hint: "Logos là lập luận dựa trên tính logic của suy nghĩ và luận cứ.",
    correctIndices: [1],
    options: [
      { text: "credibility", explanation: "Vì sao sai: Uy tín và tư cách đạo đức của người nói là Ethos." },
      { text: "logic of your thoughts", explanation: "Chính xác! Logos là phương thức thuyết phục bằng trí tuệ, lập luận chặt chẽ và logic của tư duy ('logic of your thoughts')." },
      { text: "passion and enthusiasm", explanation: "Vì sao sai: Đam mê và nhiệt huyết cảm xúc là Pathos." }
    ]
  },
  {
    id: 42,
    topic: "Communication Model",
    question: "The ......... is the way in which a message or messages travel between source and receiver.”",
    hint: "Kênh truyền thông là phương tiện hoặc con đường mà thông điệp truyền đi từ người gửi đến người nhận.",
    correctIndices: [0],
    options: [
      { text: "Channel", explanation: "Chính xác! Channel (kênh truyền tải) là phương tiện hoặc con đường mà thông điệp truyền từ người gửi (source) đến người nhận (receiver)." },
      { text: "Noise", explanation: "Vì sao sai: Noise là yếu tố gây nhiễu cản trở thông điệp." },
      { text: "Environment", explanation: "Vì sao sai: Environment là không gian vật lý và tâm lý nơi diễn ra cuộc giao tiếp." },
      { text: "Conversation", explanation: "Vì sao sai: Conversation là cuộc hội thoại nói chung." }
    ]
  },
  {
    id: 43,
    topic: "Design Thinking - Ideate",
    question: "Stoke is the method used in Ideate process.",
    hint: "Stoke (hoạt động hâm nóng năng lượng sáng tạo) là phương pháp kích thích ý tưởng trong giai đoạn Ideate.",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! 'Stoke activities' là các hoạt động khởi động ngắn giúp kích hoạt năng lượng tư duy sáng tạo của nhóm trong giai đoạn Ideate (Lên ý tưởng) của Design Thinking." },
      { text: "False", explanation: "Vì sao sai: Đây là một kỹ thuật phổ biến được áp dụng trong d.school Stanford cho bước Ideate." }
    ]
  },
  {
    id: 44,
    topic: "Self & Perception",
    question: "Your ............ include your eye color, hair length, height, and so forth.",
    hint: "Màu mắt, chiều cao, độ dài mái tóc là những đặc điểm thể chất bên ngoài.",
    correctIndices: [0],
    options: [
      { text: "physical characteristics", explanation: "Chính xác! Physical characteristics (đặc điểm thể chất) bao gồm các yếu tố ngoại hình như màu mắt, độ dài tóc, chiều cao, vóc dáng." },
      { text: "self-image", explanation: "Vì sao sai: Self-image là bức tranh tổng thể bạn hình dung về mình." },
      { text: "self-esteem", explanation: "Vì sao sai: Self-esteem là lòng tự trọng và cảm nhận giá trị bản thân." },
      { text: "self-concept", explanation: "Vì sao sai: Self-concept là nhận thức toàn diện về bản thân." }
    ]
  },
  {
    id: 45,
    topic: "Self Concept",
    question: "We may choose to define ....... as one’s own sense of individuality, personal characteristics, motivations, and actions (McLean, S., 2005).",
    hint: "Ý thức về bản thân, đặc điểm cá nhân, động lực và hành vi tạo nên khái niệm 'self' (bản ngã).",
    correctIndices: [3],
    options: [
      { text: "us", explanation: "Vì sao sai: Đại từ ngôi thứ nhất số nhiều không phải thuật ngữ tâm lý này." },
      { text: "me", explanation: "Vì sao sai: Không phải thuật ngữ chuẩn trong định nghĩa của McLean." },
      { text: "yourself", explanation: "Vì sao sai: Đại từ phản thân không phải tên khái niệm." },
      { text: "self", explanation: "Chính xác! Theo Scott McLean (2005), 'Self' (bản ngã / bản thân) được định nghĩa là ý thức về tính cá nhân riêng biệt, các đặc điểm, động lực và hành vi của một người." }
    ]
  },
  {
    id: 46,
    topic: "Design Thinking",
    question: "What is called “methodology for creative problem solving. You can use it to inform your own teaching practice, or you can teach it to your students as a framework for real-world projects.”",
    hint: "Phương pháp luận giải quyết vấn đề sáng tạo lấy con người làm trung tâm.",
    correctIndices: [1],
    options: [
      { text: "Brain storming", explanation: "Vì sao sai: Brainstorming chỉ là một kỹ thuật huy động ý tưởng." },
      { text: "Design thinking", explanation: "Chính xác! Design thinking (Tư duy thiết kế) là phương pháp luận giải quyết vấn đề một cách sáng tạo, có thể ứng dụng trong giảng dạy cũng như trong các dự án thực tế." },
      { text: "Eisenhower Matrix", explanation: "Vì sao sai: Ma trận Eisenhower là công cụ quản lý thời gian theo mức độ khẩn cấp và quan trọng." },
      { text: "SMART", explanation: "Vì sao sai: SMART là tiêu chí thiết lập mục tiêu." }
    ]
  },
  {
    id: 47,
    topic: "Forms of Address & Etiquette",
    question: "Why are educational titles used in introductions of people?",
    hint: "Học hàm, học vị được sử dụng khi giới thiệu như một sự tôn trọng và công nhận thành tựu học thuật của người đó.",
    correctIndices: [2],
    options: [
      { text: "Because educational titles are more important than professional or job titles.", explanation: "Vì sao sai: Không thể khẳng định học vị luôn quan trọng hơn chức danh công việc." },
      { text: "Because everyone likes to be perceived as well-educated.", explanation: "Vì sao sai: Không phải lý do nghi thức giao tiếp." },
      { text: "Because, in introductions, educational titles are used as a sign of respect and acknowledgment of the person’s educational achievement.", explanation: "Chính xác! Danh xưng học thuật (như Tiến sĩ, Giáo sư) được dùng khi giới thiệu nhằm thể hiện sự tôn trọng và ghi nhận những thành tựu học tập, nghiên cứu của cá nhân đó." },
      { text: "Because without high education people cannot be successful.", explanation: "Vì sao sai: Nhận định hoàn toàn sai lệch." }
    ]
  },
  {
    id: 48,
    topic: "Self Concept & Material Self",
    question: "“ What are the brands you are wearing? What do you think they say about you? Do you feel that certain styles of shoes, jewelry, tattoos, music, or even automobiles express who you are?” Can be used as examples of.......",
    hint: "Những thứ bạn mặc, nghe, lái nói lên bạn là ai – phản ánh khái niệm bản thân (Self-concept).",
    correctIndices: [0],
    options: [
      { text: "Self-concept", explanation: "Chính xác! Quần áo, thương hiệu, hình xăm, âm nhạc hay phong cách sống đều là phương tiện thể hiện Self-concept (Khái niệm về bản thân)." },
      { text: "Your concept", explanation: "Vì sao sai: Không phải thuật ngữ chuyên ngành giao tiếp." },
      { text: "Their concept", explanation: "Vì sao sai: Không phải thuật ngữ chuyên ngành giao tiếp." }
    ]
  },
  {
    id: 49,
    topic: "Business Communicator Responsibilities",
    question: "As the business communicator’s first responsibility, preparation includes: _____________",
    hint: "Trách nhiệm đầu tiên là sự chuẩn bị, bao gồm tính tổ chức, sự rõ ràng, ngắn gọn và đúng giờ.",
    correctIndices: [1],
    options: [
      { text: "organization, well-dressing, and being polite and humble", explanation: "Vì sao sai: Ăn mặc và khiêm tốn không thuộc 4 yếu tố cốt lõi của Preparation theo McLean." },
      { text: "organization, clarity, and being concise and punctual", explanation: "Chính xác! Trách nhiệm đầu tiên của người giao tiếp kinh doanh là Preparation (Chuẩn bị), bao gồm: có tính tổ chức (organization), rõ ràng (clarity), ngắn gọn súc tích (concise) và đúng giờ (punctual)." },
      { text: "clarity, well-dressing, and being polite and punctual", explanation: "Vì sao sai: Thiếu organization và concise." },
      { text: "organization, clarity, and being humble and punctual", explanation: "Vì sao sai: Yếu tố thứ ba là 'concise' (ngắn gọn), không phải 'humble'." }
    ]
  },
  {
    id: 50,
    topic: "Argumentation Strategies - GASCAP/T",
    question: "The “S” in Effective Argumentation Strategies: GASCAP/T means ............ (Fulkerson, 1996).",
    hint: "GASCAP/T: Generalization, Analogy, Sign, Cause, Authority, Principle, Testimony. Chữ 'S' là Sign.",
    correctIndices: [1],
    options: [
      { text: "Strength", explanation: "Vì sao sai: Không có Strength trong từ viết tắt GASCAP/T." },
      { text: "Sign", explanation: "Chính xác! Trong mô hình các chiến lược lập luận GASCAP/T của Fulkerson (1996): G = Generalization, A = Analogy, S = Sign (Dấu hiệu), C = Cause, A = Authority, P = Principle, T = Testimony." },
      { text: "Seen", explanation: "Vì sao sai: Seen không nằm trong mô hình GASCAP/T." },
      { text: "Signal", explanation: "Vì sao sai: Thuật ngữ chuẩn của Fulkerson là Sign, không phải Signal." }
    ]
  }
];
