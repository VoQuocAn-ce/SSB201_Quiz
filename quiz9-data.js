/**
 * SSB201 - Quiz 9 Data
 * 50 câu hỏi trắc nghiệm từ thư mục Quiz9
 * Bao gồm gợi ý và giải thích chi tiết đáp án đúng / sai bằng tiếng Việt.
 */

const QUIZ_9_QUESTIONS = [
  {
    id: 1,
    topic: "International Etiquette",
    question: "Do not wear _________ in Thailand because these colors have funeral connotations.",
    hint: "Tại Thái Lan, màu đen và trắng trơn gắn liền với đám tang và sự tang tóc.",
    correctIndices: [1],
    options: [
      { text: "white or purple", explanation: "Vì sao sai: Màu tím tại Thái Lan gắn liền với người góa phụ nhưng không phải là cặp màu kiêng kỵ tang lễ chủ yếu được nhắc đến." },
      { text: "black or solid white", explanation: "Chính xác! Ở Thái Lan, màu đen (black) và trắng trơn (solid white) là những màu liên quan đến đám tang (funeral connotations), không nên mặc khi tham dự các sự kiện trang trọng hoặc thăm hỏi người dân." },
      { text: "black or yellow", explanation: "Vì sao sai: Màu vàng tượng trưng cho hoàng gia và thứ Hai (ngày sinh của Vua Rama IX), rất được tôn kính ở Thái Lan." },
      { text: "yellow or red", explanation: "Vì sao sai: Vàng và đỏ là màu gắn với hoàng gia và các ngày lễ truyền thống." }
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
      { text: "warrant", explanation: "Vì sao sai: Warrant (bảo chứng) là cầu nối logic giải thích tại sao data chứng minh cho claim." },
      { text: "evidence", explanation: "Vì sao sai: Evidence là bằng chứng nói chung, thuộc thành phần Data." }
    ]
  },
  {
    id: 3,
    topic: "Conflict Management",
    question: "Which statement is NOT correct?",
    hint: "Xung đột phát sinh khi các bên nhận thức mục tiêu là KHÔNG tương thích (incompatible), chứ không phải tương thích.",
    correctIndices: [1],
    options: [
      { text: "Conflict is a part of the human communication experience.", explanation: "Vì sao đúng: Đây là phát biểu chính xác; xung đột là một phần tất yếu trong trải nghiệm giao tiếp của con người." },
      { text: "Conflict is associated with compatible goals.", explanation: "Chính xác! Phát biểu này SAI (nên là đáp án đúng của câu hỏi): Conflict luôn gắn với các mục tiêu xung khắc/không tương thích (incompatible goals), chứ không phải compatible (tương thích)." },
      { text: "Conflict can and does occur in intercultural communication.", explanation: "Vì sao đúng: Xung đột hoàn toàn có thể xảy ra và thường xuyên diễn ra trong giao tiếp liên văn hóa." },
      { text: "Conflict can be defined as an expressed struggle between at least two interdependent parties who perceive incompatible goals, scarce resources, and interference from the other party in achieving their goals.", explanation: "Vì sao đúng: Đây là định nghĩa chuẩn mực của Wilmot & Hocker về xung đột." }
    ]
  },
  {
    id: 4,
    topic: "Interpersonal Needs",
    question: "Through _____________, we meet universal human needs.",
    hint: "Thông qua giao tiếp, con người đáp ứng các nhu cầu cơ bản như gắn kết, kiểm soát và yêu thương.",
    correctIndices: [1],
    options: [
      { text: "interacting", explanation: "Vì sao sai: Tương tác là khái niệm rộng, trong giáo trình Scott McLean nhấn mạnh 'Through communication, we meet universal human needs'." },
      { text: "communication", explanation: "Chính xác! Giao tiếp (communication) là phương tiện giúp chúng ta kết nối xã hội và thỏa mãn các nhu cầu nền tảng của con người." },
      { text: "speaking", explanation: "Vì sao sai: Nói chỉ là một hình thức bằng lời của giao tiếp." },
      { text: "nonverbal gestures", explanation: "Vì sao sai: Cử chỉ phi ngôn ngữ chỉ là một kênh trong hệ thống giao tiếp." }
    ]
  },
  {
    id: 5,
    topic: "Speech Transitions",
    question: "............... are key words that alert the audience to a change in topic, a tangential explanation, conclusion.",
    hint: "Những từ khóa báo hiệu cho người nghe biết sự chuyển ý, mở rộng hay kết luận được gọi là biển chỉ dẫn (signposts).",
    correctIndices: [0],
    options: [
      { text: "Signposts (or indicators)", explanation: "Chính xác! Signposts (chỉ dẫn/chỉ dấu) là các từ ngữ quan trọng báo hiệu cho khán giả biết sự đổi đề tài, giải thích nhánh phụ hoặc sắp đến phần kết luận." },
      { text: "Internal previews", explanation: "Vì sao sai: Internal previews là phần báo trước ngắn gọn nội dung sắp được trình bày." },
      { text: "Summaries", explanation: "Vì sao sai: Summaries là phần tóm tắt lại các điểm vừa nói." },
      { text: "Transitions", explanation: "Vì sao sai: Transitions là từ chuyển tiếp nói chung, còn 'key words that alert...' là định nghĩa cụ thể của signposts." }
    ]
  },
  {
    id: 6,
    topic: "Effective Meetings",
    question: "What is NOT a strategy for effective meetings?",
    hint: "Cuộc họp hiệu quả phải bắt đầu đúng giờ, không nên chờ đợi những người đến muộn vì sẽ làm lãng phí thời gian người đúng giờ.",
    correctIndices: [2],
    options: [
      { text: "Clear purpose and agenda", explanation: "Vì sao đúng: Cần có mục tiêu và chương trình làm việc rõ ràng để cuộc họp hiệu quả." },
      { text: "Send materials in advance", explanation: "Vì sao đúng: Gửi tài liệu trước giúp mọi người chuẩn bị và tham gia đóng góp tích cực." },
      { text: "Wait for all people to arrive before starting the meeting.", explanation: "Chính xác! Đây KHÔNG phải chiến lược hiệu quả. Cuộc họp chuyên nghiệp luôn bắt đầu đúng giờ để tôn trọng người đến đúng giờ; không nên đợi người đến muộn." },
      { text: "Start and end on time", explanation: "Vì sao đúng: Bắt đầu và kết thúc đúng giờ là quy tắc vàng của cuộc họp hiệu quả." }
    ]
  },
  {
    id: 7,
    topic: "Telephone Conversations",
    question: "Which of the below is NOT one of the five stages in a telephone conversation as composed by David Taylor and Alyse Terhune?",
    hint: "5 giai đoạn gồm: Opening, Feedforward, Business, Feedback, Closing. Không có giai đoạn riêng tên là Greeting.",
    correctIndices: [1],
    options: [
      { text: "Opening", explanation: "Vì sao đúng: Giai đoạn 1 là Opening (Mở đầu)." },
      { text: "Greeting", explanation: "Chính xác! Trong mô hình 5 bước của David Taylor và Alyse Terhune không có giai đoạn độc lập mang tên 'Greeting' (chào hỏi nằm trong bước Opening)." },
      { text: "Feedforward", explanation: "Vì sao đúng: Giai đoạn 2 là Feedforward (Định hướng nội dung chuẩn bị nói)." },
      { text: "Business", explanation: "Vì sao đúng: Giai đoạn 3 là Business (Nội dung công việc chính)." }
    ]
  },
  {
    id: 8,
    topic: "Intercultural Prejudices",
    question: "..................... involves a negative preconceived judgment or opinion that guides conduct or social behavior.",
    hint: "Định kiến - phán xét tiêu cực có sẵn trước khi tìm hiểu thực tế, dẫn dắt hành vi xã hội.",
    correctIndices: [1],
    options: [
      { text: "Stereotype", explanation: "Vì sao sai: Stereotype (khuôn mẫu) là niềm tin đơn giản hóa, tổng quát hóa về một nhóm người." },
      { text: "Prejudice", explanation: "Chính xác! Prejudice (định kiến) liên quan đến sự phán xét hoặc ý kiến tiêu cực được hình thành trước, chi phối cách ứng xử xã hội." },
      { text: "Ethnocentrism", explanation: "Vì sao sai: Ethnocentrism (chủ nghĩa vị chủng) là coi văn hóa của mình là trung tâm và vượt trội hơn văn hóa khác." },
      { text: "Discrimination", explanation: "Vì sao sai: Discrimination (phân biệt đối xử) là hành động thực tế đối xử bất công." }
    ]
  },
  {
    id: 9,
    topic: "Stereotypes",
    question: "_______________, perceptions about certain groups of people or nationalities, exist with U.S. persons and those of other cultures.",
    hint: "Khuôn mẫu tư duy về một nhóm người hoặc quốc tịch nhất định.",
    correctIndices: [3],
    options: [
      { text: "Prejudices", explanation: "Vì sao sai: Prejudice nhấn mạnh vào thái độ định kiến tiêu cực." },
      { text: "Cultural norms", explanation: "Vì sao sai: Chuẩn mực văn hóa là các quy tắc ứng xử được chấp nhận trong xã hội." },
      { text: "Generalizations", explanation: "Vì sao sai: Generalization là khái quát chung, còn perceptions về nhóm người/quốc tịch là Stereotypes." },
      { text: "Stereotypes", explanation: "Chính xác! Stereotypes (khuôn mẫu tư duy) là nhận thức gắn định kiến khái quát về các nhóm người hoặc quốc tịch cụ thể." }
    ]
  },
  {
    id: 10,
    topic: "Public Speaking & Media",
    question: "The President John F. Kennedy's famous statement, “Ask not what your country can do for you, but what you can do for your country.”, is a ____________",
    hint: "Một câu trích dẫn ngắn gọn, đắt giá, dễ nhớ và thường được truyền thông trích dẫn nhiều lần.",
    correctIndices: [2],
    options: [
      { text: "quote", explanation: "Vì sao sai: Dù đây là câu trích dẫn nhưng trong thuật ngữ truyền thông nó là một ví dụ kinh điển về 'sound bite'." },
      { text: "slogan", explanation: "Vì sao sai: Slogan là khẩu hiệu quảng cáo hoặc phong trào." },
      { text: "sound bite", explanation: "Chính xác! Sound bite là một câu nói ngắn gọn, súc tích, ấn tượng, hoàn hảo để trích dẫn trên các phương tiện truyền thông." },
      { text: "motto", explanation: "Vì sao sai: Motto là phương châm sống." }
    ]
  },
  {
    id: 11,
    topic: "Nonverbal Gestures",
    question: "In Asian countries, a proper handshake is .........",
    hint: "Ở các nước châu Á, bắt tay nên nhẹ nhàng, vừa phải, tránh bóp quá mạnh.",
    correctIndices: [0],
    options: [
      { text: "gentle", explanation: "Chính xác! Tại nhiều quốc gia châu Á, cái bắt tay thích hợp là nhẹ nhàng (gentle) và tôn trọng, tránh bắt tay quá chặt (firm/strong) vì có thể bị coi là thô bạo hoặc gây hấn." },
      { text: "firm and brief", explanation: "Vì sao sai: Bắt tay chặt và ngắn phổ biến ở phương Tây (Mỹ/Đức), không phải phong cách châu Á." },
      { text: "prolonged", explanation: "Vì sao sai: Bắt tay quá lâu có thể gây cảm giác ngượng ngùng hoặc khó chịu." },
      { text: "strong", explanation: "Vì sao sai: Bắt tay quá mạnh bị coi là bất lịch sự tại châu Á." }
    ]
  },
  {
    id: 12,
    topic: "Language Rules",
    question: "_______________ govern the meaning of words and how to interpret them (Martinich, 1996). It is the study of meaning in language.",
    hint: "Quy tắc ngữ nghĩa - chi phối ý nghĩa của từ ngữ và cách diễn giải chúng.",
    correctIndices: [3],
    options: [
      { text: "Syntactic rules", explanation: "Vì sao sai: Cú pháp (Syntax) quy định trật tự sắp xếp từ trong câu." },
      { text: "Contextual rules", explanation: "Vì sao sai: Ngữ cảnh (Context) quy định ý nghĩa dựa trên hoàn cảnh giao tiếp." },
      { text: "Phonological rules", explanation: "Vì sao sai: Ngữ âm (Phonology) quy định cách phát âm." },
      { text: "Semantic rules", explanation: "Chính xác! Semantic rules (quy tắc ngữ nghĩa) chi phối ý nghĩa của từ ngữ và cách chúng ta diễn giải chúng trong ngôn ngữ." }
    ]
  },
  {
    id: 13,
    topic: "Perception & Stimuli",
    question: ".................... are those that arise from within one’s self, such as being hungry.",
    hint: "Kích thích xuất phát từ bên trong cơ thể (như cảm giác đói, đau, suy nghĩ).",
    correctIndices: [0],
    options: [
      { text: "Internal stimuli", explanation: "Chính xác! Internal stimuli (kích thích nội tại) là những kích thích phát sinh từ chính bên trong bản thân, ví dụ như cơn đói, sự mệt mỏi hay dòng suy nghĩ cá nhân." },
      { text: "External stimuli", explanation: "Vì sao sai: External stimuli là kích thích từ môi trường bên ngoài (âm thanh, ánh sáng, nhiệt độ)." },
      { text: "Physical stimuli", explanation: "Vì sao sai: Thuật ngữ chính xác đối lập với external stimuli trong giáo trình là internal stimuli." },
      { text: "Psychological stimuli", explanation: "Vì sao sai: Cơn đói là nhu cầu sinh lý (physiological), xếp vào nhóm internal stimuli nói chung." }
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
      { text: "reading, memorizing, and writing", explanation: "Vì sao sai: Học vẹt/ghi nhớ không phải thói quen tạo nên người viết giỏi." },
      { text: "speaking, listening, and reading", explanation: "Vì sao sai: Đây là các kỹ năng giao tiếp tổng quát, không phải thói quen viết cụ thể." },
      { text: "practicing grammar and vocabulary", explanation: "Vì sao sai: Ngữ pháp và từ vựng chỉ là công cụ nền tảng, không thay thế được tư duy phản biện và thói quen viết." }
    ]
  },
  {
    id: 15,
    topic: "Crisis & Press Conference",
    question: "Why a speaker in a press conference should not display a nonverbal gesture or make a face at a question?",
    hint: "Cử chỉ phi ngôn ngữ hoặc biểu cảm khuôn mặt có thể bị truyền thông và công chúng diễn giải sai lệch.",
    correctIndices: [2],
    options: [
      { text: "Because it shows disrespect.", explanation: "Vì sao sai: Đây chỉ là một hệ quả có thể xảy ra, lý do chính là nguy cơ bị hiểu sai lệch." },
      { text: "Because it reveals anxiety.", explanation: "Vì sao sai: Không phải lúc nào biểu cảm cũng bộc lộ sự lo lắng." },
      { text: "Because it can be misinterpreted.", explanation: "Chính xác! Trong họp báo, máy quay ghi lại mọi chi tiết nhỏ; một cái nhăn mặt hay cử chỉ vô tình có thể bị hiểu lầm (misinterpreted) thành sự phản đối, bất mãn hay nói dối." },
      { text: "Because it distracts the audience.", explanation: "Vì sao sai: Gây mất tập trung không phải rủi ro nghiêm trọng nhất trong họp báo bằng việc bị truyền thông bóp méo ý nghĩa." }
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
      { text: "neutral", explanation: "Vì sao sai: Thuật ngữ chuẩn trong mô hình Jack Gibb là 'supportive climate'." },
      { text: "persuasive", explanation: "Vì sao sai: Thuyết phục không phải mục tiêu đối lập với phòng thủ trong lý thuyết của Jack Gibb." }
    ]
  },
  {
    id: 17,
    topic: "Critical Thinking",
    question: ".................. means becoming aware of your thinking process. It’s a human trait that allows us to step outside what we read or write and ask ourselves, “Does this really make sense?” “Are there other, perhaps better, ways to explain this idea?”",
    hint: "Nhận thức về quá trình tư duy, tự đặt câu hỏi về tính hợp lý của vấn đề chính là tư duy phản biện.",
    correctIndices: [0],
    options: [
      { text: "Critical thinking", explanation: "Chính xác! Tư duy phản biện (Critical thinking) là quá trình tự nhận thức về luồng tư duy của mình, đứng lùi lại để đánh giá xem điều mình đọc/viết có thực sự hợp lý và có cách nào diễn giải tốt hơn không." },
      { text: "Creative thinking", explanation: "Vì sao sai: Tư duy sáng tạo tập trung vào việc tạo ra ý tưởng mới, không phải phân tích logic suy nghĩ." },
      { text: "Self-awareness", explanation: "Vì sao sai: Tự nhận thức là khái niệm rộng về hiểu bản thân, không cụ thể bằng critical thinking trong bối cảnh phân tích ý tưởng." },
      { text: "Reflexive thinking", explanation: "Vì sao sai: Giáo trình định nghĩa chính xác đoạn trích trên là Critical thinking." }
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
      { text: "Eagle Pose", explanation: "Vì sao sai: Eagle pose là tư thế con đại bàng trong Yoga, không có động tác push-up này." },
      { text: "Tree Pose", explanation: "Vì sao sai: Tư thế cây là bài tập thăng bằng đứng một chân." },
      { text: "Mountain Pose", explanation: "Vì sao sai: Tư thế ngọn núi (Tadasana) là tư thế đứng thẳng thở tự nhiên." }
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
      { text: "norms", explanation: "Vì sao sai: Norms (chuẩn mực) là những điều được khuyến khích hoặc chấp nhận rộng rãi." },
      { text: "traditions", explanation: "Vì sao sai: Traditions (truyền thống) là tập tục văn hóa lâu đời được giữ gìn." },
      { text: "stereotypes", explanation: "Vì sao sai: Stereotypes là khuôn mẫu nhận thức về một nhóm đối tượng." }
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
      { text: "to influence the audience's beliefs, attitudes, values, or behavior", explanation: "Vì sao sai: Đây là mục tiêu của bài phát biểu thuyết phục (Speech to persuade)." },
      { text: "to entertain and engage the audience", explanation: "Vì sao sai: Đây là bài nói giải trí (Speech to entertain)." },
      { text: "to celebrate a special occasion", explanation: "Vì sao sai: Đây là bài nói nghi lễ / đặc biệt (Ceremonial speech)." }
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
    hint: "Phần thứ ba trong cấu trúc 7 phần của tin xấu chính là bản thân tin tiêu cực.",
    correctIndices: [2],
    options: [
      { text: "buffer", explanation: "Vì sao sai: Buffer là phần đệm mở đầu (phần 1)." },
      { text: "explanation", explanation: "Vì sao sai: Explanation là phần giải thích lý do (phần 2)." },
      { text: "negative news", explanation: "Chính xác! Phần thứ ba là Negative News (tin tiêu cực), tập trung vào sự rõ ràng, chính xác và không để xảy ra hiểu lầm." },
      { text: "redirect", explanation: "Vì sao sai: Redirect là phần chuyển hướng giải pháp (phần 4)." }
    ]
  },
  {
    id: 23,
    topic: "Ethics in Business Communication",
    question: "The business communicator’s second fundamental responsibility is to be ethical, which means being",
    hint: "Trách nhiệm đạo đức của người làm truyền thông kinh doanh bao gồm bình đẳng, tôn trọng và đáng tin cậy.",
    correctIndices: [0],
    options: [
      { text: "egalitarian, respectful, and trustworthy", explanation: "Chính xác! Trách nhiệm cơ bản thứ hai của người giao tiếp kinh doanh là Đạo đức (Ethical), biểu hiện qua: bình đẳng (egalitarian), tôn trọng (respectful) và đáng tin cậy (trustworthy)." },
      { text: "organized, clear, and concise", explanation: "Vì sao sai: Đây là các phẩm chất thuộc trách nhiệm thứ nhất - Chuẩn bị (Preparation)." },
      { text: "ambitious, persuasive, and decisive", explanation: "Vì sao sai: Đây là phẩm chất lãnh đạo nói chung, không phải định nghĩa đạo đức truyền thông." },
      { text: "polite, assertive, and diplomatic", explanation: "Vì sao sai: Không phải bộ ba thuật ngữ chuẩn trong giáo trình McLean." }
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
      { text: "giving no tip at all", explanation: "Vì sao sai: Không tip có thể do văn hóa không có lệ tip hoặc khách quên, nhưng để vài đồng xu lẻ cố ý mới là 'insult tipping'." },
      { text: "paying in foreign currency", explanation: "Vì sao sai: Trả ngoại tệ là do du khách không kịp đổi tiền, không mang nghĩa xúc phạm có chủ ý." },
      { text: "demanding a discount", explanation: "Vì sao sai: Đòi giảm giá là tranh chấp hóa đơn, không phải tip." }
    ]
  },
  {
    id: 25,
    topic: "Writing Tone",
    question: "A ......................, as the name implies, resembles oral communication in style, tone, and word choice. It can be appropriate for some audiences, and may serve you well in specific contexts, but it can easily come across as less than professional.",
    hint: "Giọng điệu hội thoại (giống như nói chuyện hàng ngày) có thể thiếu tính trang trọng chuyên nghiệp.",
    correctIndices: [0],
    options: [
      { text: "conversational tone", explanation: "Chính xác! Conversational tone (giọng điệu trò chuyện/hội thoại) mô phỏng lời nói miệng về phong cách, từ ngữ, thích hợp với bạn bè nhưng dễ bị đánh giá là thiếu chuyên nghiệp trong văn bản kinh doanh trang trọng." },
      { text: "formal tone", explanation: "Vì sao sai: Giọng điệu trang trọng (formal tone) tuân thủ quy chuẩn nghiêm ngặt, đối lập với văn nói." },
      { text: "casual slang", explanation: "Vì sao sai: Slang là tiếng lóng, hẹp hơn phạm trù tone giọng." },
      { text: "objective tone", explanation: "Vì sao sai: Giọng điệu khách quan dựa trên sự thật và số liệu, không mang tính trò chuyện." }
    ]
  },
  {
    id: 26,
    topic: "Direct vs Indirect Approach",
    question: "The ____________ is often associated with a message where the audience values brevity and the message needs to be concise.",
    hint: "Cách tiếp cận đi thẳng vào vấn đề (direct approach) thích hợp khi người đọc cần sự ngắn gọn, xúc tích.",
    correctIndices: [1],
    options: [
      { text: "indirect approach", explanation: "Vì sao sai: Cách tiếp cận gián tiếp dùng khi cần thuyết phục hoặc thông báo tin xấu, đi vòng trước khi nêu điểm chính." },
      { text: "direct approach", explanation: "Chính xác! Direct approach (tiếp cận trực tiếp) đưa kết luận/điểm chính lên đầu, phù hợp khi khán giả coi trọng sự ngắn gọn, nhanh chóng và thông điệp cần súc tích." },
      { text: "chronological approach", explanation: "Vì sao sai: Tiếp cận theo trình tự thời gian là phương pháp kể chuyện hoặc quy trình." },
      { text: "analytical approach", explanation: "Vì sao sai: Tiếp cận phân tích tập trung mổ xẻ vấn đề từ nhiều góc độ." }
    ]
  },
  {
    id: 27,
    topic: "Globalization Concepts",
    question: "What “focuses on the imperialistic ambitions of nations, corporations, organizations, and the like and their desire, indeed need, to impose themselves on various geographic areas” (Ritzer, 2003)?",
    hint: "Thuật ngữ do George Ritzer đưa ra mô tả tham vọng bành trướng, áp đặt của các tập đoàn/quốc gia lên các khu vực.",
    correctIndices: [1],
    options: [
      { text: "It is glocalization.", explanation: "Vì sao sai: Glocalization (bản địa hóa toàn cầu) là kết hợp giữa toàn cầu và bản địa (think global, act local)." },
      { text: "It is grobalization.", explanation: "Chính xác! Grobalization (do George Ritzer đặt ra, ghép từ 'grow' và 'globalization') tập trung vào tham vọng bành trướng và áp đặt của các quốc gia, tập đoàn lớn lên nhiều vùng lãnh thổ." },
      { text: "It is globalization.", explanation: "Vì sao sai: Globalization là toàn cầu hóa nói chung, Ritzer dùng 'grobalization' để chỉ khía cạnh bành trướng áp đặt cụ thể." },
      { text: "It is imperialism.", explanation: "Vì sao sai: Ritzer định nghĩa khái niệm cụ thể này là 'grobalization'." }
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
      { text: "Listen, Watch, Act, Learn, React", explanation: "Vì sao sai: Không đúng tập hợp chuẩn của Empathy Map." },
      { text: "Who, What, Where, When, Why", explanation: "Vì sao sai: Đây là mô hình 5W1H trong báo chí/phân tích." },
      { text: "Discover, Define, Develop, Deliver", explanation: "Vì sao sai: Đây là mô hình Double Diamond trong thiết kế." }
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
    question: "When travelling, knowing consumption taboos of the host culture is _______________.",
    hint: "Hiểu biết về điều cấm kỵ trong ăn uống của văn hóa bản địa là vô cùng quan trọng.",
    correctIndices: [0],
    options: [
      { text: "important", explanation: "Chính xác! Khi đi du lịch hoặc công tác nước ngoài, việc am hiểu các điều cấm kỵ ăn uống (consumption taboos) của nước sở tại là vô cùng quan trọng (important) để tránh xúc phạm người bản xứ." },
      { text: "unnecessary", explanation: "Vì sao sai: Không am hiểu cấm kỵ có thể dẫn đến rắc rối văn hóa nghiêm trọng." },
      { text: "optional", explanation: "Vì sao sai: Trong giao tiếp kinh doanh quốc tế, đây là yêu cầu bắt buộc, không phải tùy chọn sơ sài." },
      { text: "irrelevant", explanation: "Vì sao sai: Ẩm thực và kiêng kỵ tôn giáo là phần trung tâm của văn hóa ứng xử." }
    ]
  },
  {
    id: 31,
    topic: "Cultural Intelligence",
    question: "___________________ involves an awareness of one’s own cultural style in order to make behavioral adjustments to international counterparts.",
    hint: "Trí thông minh nội tâm (intrapersonal) giúp nhận biết phong cách văn hóa của chính bản thân để điều chỉnh cho phù hợp.",
    correctIndices: [2],
    options: [
      { text: "Interpersonal intelligence", explanation: "Vì sao sai: Interpersonal là trí thông minh tương tác giữa các cá nhân (hướng ngoại)." },
      { text: "Spatial intelligence", explanation: "Vì sao sai: Trí thông minh không gian thị giác liên quan đến hình ảnh, đồ họa." },
      { text: "Intrapersonal intelligence", explanation: "Chính xác! Intrapersonal intelligence (trí thông minh nội tâm) bao hàm khả năng tự nhận thức sâu sắc về phong cách văn hóa và hành vi của chính mình để từ đó tự điều chỉnh thích ứng với đối tác quốc tế." },
      { text: "Linguistic intelligence", explanation: "Vì sao sai: Trí thông minh ngôn ngữ liên quan đến khả năng dùng từ ngữ." }
    ]
  },
  {
    id: 32,
    topic: "Gift Giving Etiquette",
    question: "Why should we avoid giving perfume or wine as gifts to the French people?",
    hint: "Pháp là quê hương của nước hoa và rượu vang thượng hạng, việc tặng những món này ngụ ý người nhận không tự chọn được loại tốt nhất.",
    correctIndices: [0],
    options: [
      { text: "Because those are their specialties.", explanation: "Chính xác! Nước hoa và rượu vang là đặc sản niềm tự hào quốc gia của Pháp (specialties); tặng người Pháp những món này dễ bị coi là thiếu tinh tế vì họ sành sỏi và có gu riêng rất khắt khe." },
      { text: "Because it is considered bad luck.", explanation: "Vì sao sai: Văn hóa Pháp không quan niệm nước hoa hay rượu đem lại xui xẻo." },
      { text: "Because it violates religious rules.", explanation: "Vì sao sai: Pháp là quốc gia thế tục phương Tây, không có lệnh cấm tôn giáo đối với rượu/nước hoa như các nước Hồi giáo." },
      { text: "Because they are too expensive.", explanation: "Vì sao sai: Giá cả không phải lý do kiêng kỵ trong trường hợp này." }
    ]
  },
  {
    id: 33,
    topic: "Crisis Communication Plan",
    question: "Which is NOT an element of a crisis communication plan?",
    hint: "Nơi ăn chốn ngủ không nằm trong kế hoạch truyền thông khủng hoảng.",
    correctIndices: [2],
    options: [
      { text: "Crisis communication team members", explanation: "Vì sao đúng: Danh sách thành viên đội truyền thông khủng hoảng là thành phần bắt buộc." },
      { text: "Designated spokesperson", explanation: "Vì sao đúng: Người phát ngôn chỉ định là yếu tố then chốt để phát ngôn thống nhất." },
      { text: "Eating place/ resting location", explanation: "Chính xác! Địa điểm ăn uống / nghỉ ngơi KHÔNG phải là thành phần cốt lõi của một kế hoạch truyền thông xử lý khủng hoảng (Crisis Communication Plan)." },
      { text: "Emergency message templates", explanation: "Vì sao đúng: Kịch bản và mẫu thông điệp khẩn cấp giúp phản ứng nhanh khi xảy ra sự cố." }
    ]
  },
  {
    id: 34,
    topic: "Elements of Communication",
    question: "Written communication involves the same.......... basic elements as oral communication.",
    hint: "Giao tiếp viết bao gồm đúng 8 yếu tố cơ bản giống như giao tiếp nói (nguồn, thông điệp, kênh, người nhận, phản hồi, môi trường, ngữ cảnh, nhiễu).",
    correctIndices: [3],
    options: [
      { text: "6", explanation: "Vì sao sai: Thiếu các yếu tố môi trường và nhiễu." },
      { text: "7", explanation: "Vì sao sai: Mô hình giao tiếp chuẩn của Scott McLean gồm 8 yếu tố." },
      { text: "5", explanation: "Vì sao sai: 5 là mô hình Lasswell sơ khai." },
      { text: "8", explanation: "Chính xác! Giao tiếp viết chia sẻ cùng 8 yếu tố cơ bản như giao tiếp nói: Source, Receiver, Message, Channel, Feedback, Environment, Context, và Interference." }
    ]
  },
  {
    id: 35,
    topic: "Speech Conclusion",
    question: "At the end of the message, your .................... should provide the audience with a sense of closure by summarizing your main points and relating them to the overall topic.",
    hint: "Phần kết luận tóm tắt các điểm chính và đem lại cảm giác trọn vẹn cho thông điệp.",
    correctIndices: [2],
    options: [
      { text: "recommendation", explanation: "Vì sao sai: Khuyến nghị chỉ là đề xuất hành động cụ thể, không bao hàm chức năng tạo closure cho toàn bài." },
      { text: "call to action", explanation: "Vì sao sai: Kêu gọi hành động chỉ là một phần nhỏ trong phần kết luận của bài thuyết phục." },
      { text: "conclusion", explanation: "Chính xác! Conclusion (phần kết luận) có chức năng tóm lược các ý chính, liên kết lại với chủ đề bao quát và tạo cho người nghe cảm giác thông điệp đã hoàn tất trọn vẹn (sense of closure)." },
      { text: "appendix", explanation: "Vì sao sai: Phụ lục nằm ngoài phần trình bày chính." }
    ]
  },
  {
    id: 36,
    topic: "Culture & Communication",
    question: "What is the structure through which the communication is formulated and interpreted?",
    hint: "Cấu trúc định hình và giúp diễn giải toàn bộ quá trình giao tiếp chính là văn hóa.",
    correctIndices: [2],
    options: [
      { text: "It is language.", explanation: "Vì sao sai: Ngôn ngữ là phương tiện, còn cấu trúc sâu xa định hình cách diễn giải là văn hóa." },
      { text: "It is context.", explanation: "Vì sao sai: Ngữ cảnh là bối cảnh tức thời, văn hóa mới là cấu trúc nền tảng." },
      { text: "It is culture.", explanation: "Chính xác! 'Culture is the structure through which communication is formulated and interpreted' - Văn hóa là khuôn khổ cấu trúc mà qua đó thông điệp được tạo dựng và diễn giải." },
      { text: "It is perception.", explanation: "Vì sao sai: Tri giác là quá trình tâm lý cá nhân." }
    ]
  },
  {
    id: 37,
    topic: "Speech Preparation",
    question: "................ is the process by which you look over your speech again in order to correct or improve it. You will notice elements that need further investigation, development, or additional examples and visual aids as your produce your speech.",
    hint: "Quá trình xem xét lại toàn bộ bài phát biểu để chỉnh sửa và nâng cấp chất lượng.",
    correctIndices: [2],
    options: [
      { text: "Rehearsal", explanation: "Vì sao sai: Rehearsal (tập dượt) là việc thực hành trình bày bài nói trước khi biểu diễn." },
      { text: "Outlining", explanation: "Vì sao sai: Outlining (lập dàn ý) là bước xây dựng khung nội dung ban đầu." },
      { text: "Revision", explanation: "Chính xác! Revision (chỉnh lý / sửa chữa) là quá trình rà soát lại bài nói để sửa đổi, hoàn thiện và bổ sung dẫn chứng, phương tiện trực quan cần thiết." },
      { text: "Delivery", explanation: "Vì sao sai: Delivery là quá trình trực tiếp diễn thuyết trước khán giả." }
    ]
  },
  {
    id: 38,
    topic: "Arab Cultural Taboos",
    question: "In Arab countries, it is considered taboo to ask about the health of a man’s _____________.",
    hint: "Tại các quốc gia Ả Rập theo đạo Hồi truyền thống, hỏi thăm sức khỏe vợ của một người đàn ông là điều cấm kỵ.",
    correctIndices: [1],
    options: [
      { text: "mother", explanation: "Vì sao sai: Mẹ là bậc phụ mẫu đáng kính, hỏi thăm sức khỏe gia đình chung được chấp nhận nhưng hỏi thẳng về người vợ là điều kiêng kỵ." },
      { text: "wife", explanation: "Chính xác! Tại các nước Ả Rập truyền thống, hỏi trực tiếp về người vợ (wife) của đối tác nam giới là điều cấm kỵ vì phụ nữ được bảo vệ trong không gian gia đình riêng tư; chỉ nên hỏi thăm chung về gia đình (family)." },
      { text: "father", explanation: "Vì sao sai: Hỏi thăm người cha thể hiện sự kính trọng người lớn tuổi." },
      { text: "children", explanation: "Vì sao sai: Hỏi thăm con cái chung chung là bình thường và thể hiện sự thân thiện." }
    ]
  },
  {
    id: 39,
    topic: "Language & Bias",
    question: "Using gender as a discriminating factor like referring to adult women as “girls” or using the word “man” to refer to humankind are examples of _______________",
    hint: "Dùng từ ngữ phân biệt giới tính (như gọi phụ nữ trưởng thành là girls hoặc man để chỉ loài người).",
    correctIndices: [0],
    options: [
      { text: "Sexist language", explanation: "Chính xác! Sexist language (ngôn ngữ phân biệt giới tính) là việc dùng ngôn từ mang định kiến hoặc phân biệt dựa trên giới tính, ví dụ gọi phụ nữ trưởng thành là 'girls' hoặc dùng 'man' để đại diện cho toàn nhân loại." },
      { text: "Ageist language", explanation: "Vì sao sai: Ageist language là ngôn ngữ phân biệt tuổi tác." },
      { text: "Racist language", explanation: "Vì sao sai: Racist language là ngôn ngữ phân biệt chủng tộc." },
      { text: "Biased language", explanation: "Vì sao sai: Biased language là từ ngữ định kiến nói chung, nhưng ví dụ cụ thể về giới tính là Sexist language." }
    ]
  },
  {
    id: 40,
    topic: "Media Interviews",
    question: "What are the Interview Preparation Factors for media interviews?",
    hint: "4 yếu tố chuẩn bị phỏng vấn truyền thông: Chủ đề, Địa điểm, Định dạng và Bối cảnh/thông tin nền.",
    correctIndices: [0],
    options: [
      { text: "Topic, Location, Format, and Background", explanation: "Chính xác! 4 yếu tố chuẩn bị phỏng vấn truyền thông (Interview Preparation Factors) gồm: Topic (chủ đề), Location (địa điểm), Format (định dạng chương trình), và Background (bối cảnh thông tin người phỏng vấn và chủ đề)." },
      { text: "Time, Budget, Audience, and Speaker", explanation: "Vì sao sai: Không phải bộ 4 yếu tố chuẩn bị media interview." },
      { text: "Questions, Answers, Rehearsal, and Outfit", explanation: "Vì sao sai: Đây là các hoạt động luyện tập cá nhân." },
      { text: "Channel, Sender, Receiver, and Noise", explanation: "Vì sao sai: Đây là các yếu tố trong mô hình giao tiếp cơ bản." }
    ]
  },
  {
    id: 41,
    topic: "Rhetorical Proofs - Aristotle",
    question: "Logos means",
    hint: "Logos là lập luận dựa trên tính logic của suy nghĩ và luận cứ.",
    correctIndices: [1],
    options: [
      { text: "emotional appeal to audience", explanation: "Vì sao sai: Khơi gợi cảm xúc là Pathos." },
      { text: "logic of your thoughts", explanation: "Chính xác! Logos là phương thức thuyết phục bằng trí tuệ, lập luận chặt chẽ và logic của tư duy ('logic of your thoughts')." },
      { text: "your credibility and character", explanation: "Vì sao sai: Uy tín và tư cách đạo đức của người nói là Ethos." },
      { text: "storytelling techniques", explanation: "Vì sao sai: Kỹ thuật kể chuyện có thể kết hợp cả ba nhưng không phải định nghĩa của Logos." }
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
      { text: "Environment", explanation: "Vì sao sai: Environment là không gian vật lý và tâm lý nơi diễn ra cuộc giao tiếp." },
      { text: "Context", explanation: "Vì sao sai: Context là ngữ cảnh và hoàn cảnh văn hóa xã hội." },
      { text: "Feedback", explanation: "Vì sao sai: Feedback là phản hồi từ người nhận gửi ngược lại người gửi." }
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
    question: "Your ................. include your eye color, hair length, height, and so forth.",
    hint: "Màu mắt, chiều cao, độ dài mái tóc là những đặc điểm thể chất bên ngoài.",
    correctIndices: [0],
    options: [
      { text: "physical characteristics", explanation: "Chính xác! Physical characteristics (đặc điểm thể chất) bao gồm các yếu tố ngoại hình như màu mắt, màu tóc, chiều cao, vóc dáng." },
      { text: "psychological attributes", explanation: "Vì sao sai: Thuộc tính tâm lý gồm tính cách, cảm xúc, niềm tin." },
      { text: "social roles", explanation: "Vì sao sai: Vai trò xã hội như con cái, đồng nghiệp, sinh viên." },
      { text: "cultural markers", explanation: "Vì sao sai: Dấu ấn văn hóa gồm trang phục truyền thống, nghi lễ." }
    ]
  },
  {
    id: 45,
    topic: "Self Concept",
    question: "We may choose to define ....... as one’s own sense of individuality, personal characteristics, motivations, and actions (McLean, S., 2005).",
    hint: "Ý thức về bản thân, đặc điểm cá nhân, động lực và hành vi tạo nên khái niệm 'self' (bản ngã).",
    correctIndices: [3],
    options: [
      { text: "personality", explanation: "Vì sao sai: Tính cách là một tập hợp các nét tâm lý ổn định, không phải định nghĩa bao trùm của McLean." },
      { text: "identity", explanation: "Vì sao sai: Bản sắc (identity) liên quan đến sự nhận diện trong xã hội." },
      { text: "ego", explanation: "Vì sao sai: Ego là thuật ngữ phân tâm học của Freud." },
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
      { text: "Critical thinking", explanation: "Vì sao sai: Tư duy phản biện là kỹ năng phân tích và đánh giá logic." },
      { text: "Design thinking", explanation: "Chính xác! Design thinking (Tư duy thiết kế) là phương pháp luận giải quyết vấn đề một cách sáng tạo, có thể ứng dụng trong giảng dạy cũng như trong các dự án thực tế." },
      { text: "Systems thinking", explanation: "Vì sao sai: Tư duy hệ thống xem xét các mối liên hệ tổng thể phức tạp." },
      { text: "Scrum methodology", explanation: "Vì sao sai: Scrum là khung quản lý dự án linh hoạt (Agile)." }
    ]
  },
  {
    id: 47,
    topic: "Forms of Address & Etiquette",
    question: "Why are educational titles used in introductions of people?",
    hint: "Học hàm, học vị được sử dụng khi giới thiệu như một sự tôn trọng và công nhận thành tựu học thuật của người đó.",
    correctIndices: [2],
    options: [
      { text: "Because they indicate financial status.", explanation: "Vì sao sai: Học vị không phản ánh tình trạng tài chính." },
      { text: "Because they are legally required.", explanation: "Vì sao sai: Không có điều luật nào bắt buộc phải xưng hô học hàm trong đời sống thông thường." },
      { text: "Because, in introductions, educational titles are used as a sign of respect and acknowledgment of the person’s educational achievement.", explanation: "Chính xác! Danh xưng học thuật (như Tiến sĩ, Giáo sư) được dùng khi giới thiệu nhằm thể hiện sự tôn trọng và ghi nhận những thành tựu học tập, nghiên cứu của cá nhân đó." },
      { text: "Because they establish authority over listeners.", explanation: "Vì sao sai: Mục đích không phải để áp đặt quyền lực lên người nghe." }
    ]
  },
  {
    id: 48,
    topic: "Self Concept & Material Self",
    question: "“ What are the brands you are wearing? What do you think they say about you? Do you feel that certain styles of shoes, jewelry, tattoos, music, or even automobiles express who you are?” Can be used as examples of.......",
    hint: "Những thứ bạn mặc, nghe, lái nói lên bạn là ai – phản ánh khái niệm bản thân (Self-concept / Material self).",
    correctIndices: [0],
    options: [
      { text: "Self-concept", explanation: "Chính xác! Quần áo, thương hiệu, hình xăm, âm nhạc hay phong cách sống đều là phương tiện thể hiện Self-concept (Khái niệm về bản thân - đặc biệt là Material self theo William James)." },
      { text: "Self-esteem", explanation: "Vì sao sai: Lòng tự trọng (Self-esteem) là mức độ đánh giá cao hay thấp giá trị của bản thân." },
      { text: "Self-image", explanation: "Vì sao sai: Self-image là hình ảnh tự nhìn nhận trước mắt, nhưng câu hỏi thảo luận về ý nghĩa biểu đạt bản thân tổng thể (Self-concept)." },
      { text: "Self-efficacy", explanation: "Vì sao sai: Self-efficacy là niềm tin vào năng lực hoàn thành nhiệm vụ cụ thể của bản thân." }
    ]
  },
  {
    id: 49,
    topic: "Business Communicator Responsibilities",
    question: "As the business communicator’s first responsibility, preparation includes: _______________",
    hint: "Trách nhiệm đầu tiên là sự chuẩn bị, bao gồm tính tổ chức, sự rõ ràng, ngắn gọn và đúng giờ.",
    correctIndices: [1],
    options: [
      { text: "drafting, revising, and publishing", explanation: "Vì sao sai: Đây là các bước trong quy trình viết văn bản." },
      { text: "organization, clarity, and being concise and punctual", explanation: "Chính xác! Trách nhiệm đầu tiên của người giao tiếp kinh doanh là Preparation (Chuẩn bị), bao gồm: có tính tổ chức (organization), rõ ràng (clarity), ngắn gọn súc tích (concise) và đúng giờ (punctual)." },
      { text: "researching, interviewing, and editing", explanation: "Vì sao sai: Đây là kỹ năng thu thập tài liệu." },
      { text: "grammar, vocabulary, and formatting", explanation: "Vì sao sai: Đây là kỹ thuật ngôn ngữ cơ bản." }
    ]
  },
  {
    id: 50,
    topic: "Argumentation Strategies - GASCAP/T",
    question: "The “S” in Effective Argumentation Strategies: GASCAP/T means ............ (Fulkerson, 1996).",
    hint: "GASCAP/T: Generalization, Analogy, Sign, Cause, Authority, Principle, Testimony. Chữ 'S' là Sign.",
    correctIndices: [1],
    options: [
      { text: "Source", explanation: "Vì sao sai: Không có Source trong từ viết tắt GASCAP/T." },
      { text: "Sign", explanation: "Chính xác! Trong mô hình các chiến lược lập luận GASCAP/T của Fulkerson (1996): G = Generalization, A = Analogy, S = Sign (Dấu hiệu), C = Cause, A = Authority, P = Principle, T = Testimony." },
      { text: "Syllogism", explanation: "Vì sao sai: Syllogism là tam đoạn luận trong logic cổ điển." },
      { text: "Statistics", explanation: "Vì sao sai: Thống kê là dạng dữ liệu chứng cứ, không phải chữ S trong GASCAP/T." }
    ]
  }
];

window.QUIZ_9_QUESTIONS = QUIZ_9_QUESTIONS;
