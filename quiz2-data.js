// Dữ liệu câu hỏi SSB201 - Quiz 2 (trích xuất từ thư mục Quiz2: Q1.jpg - Q50.jpg)
// Câu hỏi & đáp án giữ nguyên tiếng Anh; chủ đề, gợi ý (hint) và lời giải thích từng đáp án bằng tiếng Việt.

const QUIZ_2_QUESTIONS = [
  {
    id: 1,
    topic: "Gestalt Principles",
    question: "\"The emphasis on a single item that stands out from its surroundings\" is example of ............",
    hint: "Nguyên lý Gestalt phân biệt giữa đối tượng nổi bật (hình) và phần nền phía sau (nền).",
    correctIndices: [3],
    options: [
      {
        text: "proximity",
        explanation: "Proximity (sự gần gũi) là nguyên lý các vật ở gần nhau được nhìn nhận như một nhóm."
      },
      {
        text: "continuity",
        explanation: "Continuity (tính liên tục) là xu hướng mắt nhìn theo các đường nét liên tục, mượt mà."
      },
      {
        text: "closure",
        explanation: "Closure (sự khép kín) là xu hướng não tự điền vào khoảng trống để tạo thành hình hoàn chỉnh."
      },
      {
        text: "figure and ground",
        explanation: "Figure and ground (hình và nền) mô tả việc nhấn mạnh một đối tượng đơn lẻ nổi bật tách biệt khỏi bối cảnh xung quanh nó."
      }
    ]
  },
  {
    id: 2,
    topic: "Perception & Stimuli",
    question: ".............. are those that arise from within one's self, such as being hungry.",
    hint: "Từ khóa trong câu là 'from within one's self' (phát sinh từ bên trong bản thân).",
    correctIndices: [0],
    options: [
      {
        text: "Internal stimuli",
        explanation: "Internal stimuli (kích thích bên trong) là những tác nhân phát sinh từ nội tại cơ thể hoặc tâm trí như cơn đói, cảm xúc, suy nghĩ."
      },
      {
        text: "External stimuli",
        explanation: "External stimuli là kích thích từ môi trường bên ngoài (âm thanh, ánh sáng, hình ảnh)."
      },
      {
        text: "Selective attention",
        explanation: "Selective attention là cơ chế tập trung chọn lọc vào một kích thích và bỏ qua kích thích khác."
      }
    ]
  },
  {
    id: 3,
    topic: "Perception & Stimuli",
    question: ".................involve stimulation from outside one's self, such as the image of the attractive classmate or the sound of the instructor's voice.",
    hint: "Từ khóa là 'from outside one's self' (tác nhân từ bên ngoài bản thân).",
    correctIndices: [1],
    options: [
      {
        text: "Internal stimuli",
        explanation: "Internal stimuli là kích thích phát sinh từ bên trong cơ thể/tâm trí, trái với 'outside one's self'."
      },
      {
        text: "External stimuli",
        explanation: "External stimuli (kích thích bên ngoài) bao gồm các tác nhân từ môi trường ngoài như hình ảnh người bạn hay giọng nói giảng viên."
      },
      {
        text: "Selective attention",
        explanation: "Selective attention là hành động chọn lọc sự chú ý, không phải bản thân nguồn kích thích bên ngoài."
      },
      {
        text: "None of the above",
        explanation: "Không chính xác vì đáp án B hoàn toàn đúng."
      }
    ]
  },
  {
    id: 4,
    topic: "Self-Understanding",
    question: "Your ........... is how you feel about yourself; your feelings of self-worth, self-acceptance, and self-respect.",
    hint: "Cảm nhận về giá trị bản thân, sự chấp nhận và lòng tự tôn (self-worth, self-acceptance, self-respect).",
    correctIndices: [2],
    options: [
      {
        text: "physical characteristics",
        explanation: "Physical characteristics là đặc điểm thể chất ngoại hình, không phải cảm xúc về giá trị bản thân."
      },
      {
        text: "self-image",
        explanation: "Self-image là hình ảnh/cách bạn hình dung về bản thân, thiên về mô tả nhận thức hơn là cảm xúc tự trọng."
      },
      {
        text: "self-esteem",
        explanation: "Self-esteem (lòng tự trọng) chính là cách bạn cảm nhận về bản thân gồm cảm giác tự tin về giá trị, sự chấp nhận và tôn trọng chính mình."
      },
      {
        text: "self-concept",
        explanation: "Self-concept là khái niệm tổng quát về bản thân, rộng hơn khái niệm cảm xúc tự trọng cụ thể trong câu."
      }
    ]
  },
  {
    id: 5,
    topic: "Public Speaking",
    question: "\"Speech to entertain\" means",
    hint: "Entertain nghĩa là giải trí — bài nói nhẹ nhàng, vui vẻ (light-hearted) để tạo hứng thú cho khán giả.",
    correctIndices: [3],
    options: [
      {
        text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise.",
        explanation: "Đây là định nghĩa của 'Speech to inform' (bài nói cung cấp thông tin)."
      },
      {
        text: "to show the audience how to use, operate, or do something.",
        explanation: "Đây là định nghĩa của 'Speech to demonstrate' (bài nói hướng dẫn cách làm)."
      },
      {
        text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.",
        explanation: "Đây là định nghĩa của 'Speech to persuade' (bài nói thuyết phục)."
      },
      {
        text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.",
        explanation: "Speech to entertain (bài nói giải trí) nhằm mang lại tiếng cười và sự thoải mái cho khán giả bằng phong cách nhẹ nhàng, dù vẫn có thể lồng ghép thông điệp sâu sắc."
      }
    ]
  },
  {
    id: 6,
    topic: "Public Speaking",
    question: "A thesis statement should be.........",
    hint: "Câu luận điểm trung tâm của bài nói nên ngắn gọn và cụ thể (short, specific).",
    correctIndices: [2],
    options: [
      {
        text: "a specific sentence capturing the central idea of your speech.",
        explanation: "Thiếu tính chất 'short' (ngắn gọn) so với định nghĩa chuẩn trong giáo trình."
      },
      {
        text: "a long, specific sentence capturing the central idea of your speech.",
        explanation: "Sai vì thesis statement không nên dài dòng ('long')."
      },
      {
        text: "a short, specific sentence capturing the central idea of your speech.",
        explanation: "Thesis statement cần là một câu ngắn gọn, cụ thể (short, specific sentence) tóm tắt ý tưởng trung tâm của toàn bài nói."
      }
    ]
  },
  {
    id: 7,
    topic: "Public Speaking",
    question: "\"Speech to persuade\" means",
    hint: "Persuade nghĩa là thuyết phục nhằm thay đổi thái độ, niềm tin hoặc giá trị của người nghe.",
    correctIndices: [2],
    options: [
      {
        text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise",
        explanation: "Đây là mục đích của 'Speech to inform' (cung cấp kiến thức)."
      },
      {
        text: "to show the audience how to use, operate, or do something.",
        explanation: "Đây là mục đích của 'Speech to demonstrate' (hướng dẫn thực hành)."
      },
      {
        text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.",
        explanation: "Speech to persuade (bài nói thuyết phục) sử dụng lập luận để tác động và thay đổi thái độ, niềm tin hoặc giá trị của khán giả."
      },
      {
        text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.",
        explanation: "Đây là mục đích của 'Speech to entertain' (giải trí)."
      }
    ]
  },
  {
    id: 8,
    topic: "Design Thinking",
    question: "To empathize, we observe, which means...",
    hint: "Observe là quan sát người dùng và hành vi của họ trong chính bối cảnh đời sống thực tế.",
    correctIndices: [1],
    options: [
      {
        text: "the foundation of a human-centered design process",
        explanation: "Đây là mô tả chung về 'Empathy' (sự thấu cảm), không phải định nghĩa riêng của hành động 'observe'."
      },
      {
        text: "we view users and their behavior in the context of their lives",
        explanation: "Observe (quan sát) trong Design Thinking nghĩa là quan sát người dùng và hành vi tự nhiên của họ trong bối cảnh cuộc sống thực."
      },
      {
        text: "we interact with and interview users through both scheduled and short intercept encounters",
        explanation: "Đây là định nghĩa của 'Engage' (tương tác/phỏng vấn), không phải Observe."
      },
      {
        text: "we experience what our user experiences",
        explanation: "Đây là định nghĩa của 'Immerse' (đắm mình/trải nghiệm như người dùng)."
      }
    ]
  },
  {
    id: 9,
    topic: "Design Thinking",
    question: "........... is the mode during your design process in which you focus on idea generation.",
    hint: "Giai đoạn tập trung động não để tạo ra nhiều ý tưởng giải pháp (idea generation).",
    correctIndices: [0],
    options: [
      {
        text: "Ideate",
        explanation: "Ideate (Lên ý tưởng) là giai đoạn tập trung hoàn toàn vào việc phát sinh đa dạng ý tưởng giải pháp."
      },
      {
        text: "Empathize",
        explanation: "Empathize là giai đoạn tìm hiểu và thấu cảm người dùng."
      },
      {
        text: "Define",
        explanation: "Define là giai đoạn tổng hợp insight để xác định đúng vấn đề cần giải quyết."
      },
      {
        text: "Test",
        explanation: "Test là giai đoạn kiểm thử nguyên mẫu với người dùng."
      }
    ]
  },
  {
    id: 10,
    topic: "Design Thinking",
    question: "Empathy Map includes",
    hint: "Bản đồ thấu cảm (Empathy Map) gồm các giác quan & hành động: Nghe, Nghĩ, Nhìn, Cảm nhận, Làm và Nói.",
    correctIndices: [0],
    options: [
      {
        text: "Hear, Think, See, Feel, Do and Say",
        explanation: "Empathy Map chuẩn gồm 6 khía cạnh: Hear (Nghe), Think (Nghĩ), See (Nhìn), Feel (Cảm thấy), Do (Làm) và Say (Nói)."
      },
      {
        text: "Hear, Analyze, See, Touch and Do",
        explanation: "Không chính xác vì Empathy Map không gồm 'Analyze' hay 'Touch'."
      },
      {
        text: "Listen, Do, See and Talk",
        explanation: "Thiếu các yếu tố suy nghĩ (Think) và cảm xúc (Feel) cốt lõi của Empathy Map."
      },
      {
        text: "Touch, Listen, Talk and Silent",
        explanation: "Đây không phải các thành phần của Empathy Map."
      }
    ]
  },
  {
    id: 11,
    topic: "Design Thinking",
    question: "What is called \"methodology for creative problem solving. You can use it to inform your own teaching practice, or you can teach it to your students as a framework for real-world projects.\"",
    hint: "Phương pháp luận giải quyết vấn đề sáng tạo gồm 5 bước Empathize – Define – Ideate – Prototype – Test.",
    correctIndices: [1],
    options: [
      {
        text: "Brain storming",
        explanation: "Brainstorming chỉ là một kỹ thuật gợi ý tưởng, không phải phương pháp luận khung cho dự án thực tế."
      },
      {
        text: "Design thinking",
        explanation: "Design Thinking là phương pháp luận giải quyết vấn đề sáng tạo, được dùng rộng rãi như khung triển khai các dự án thực tế."
      },
      {
        text: "Eisenhower Matrix",
        explanation: "Ma trận Eisenhower là công cụ sắp xếp thứ tự ưu tiên công việc, không phải phương pháp giải quyết vấn đề sáng tạo."
      },
      {
        text: "SMART",
        explanation: "SMART là nguyên tắc thiết lập mục tiêu, không phải phương pháp Design Thinking."
      }
    ]
  },
  {
    id: 12,
    topic: "Intercultural Communication",
    question: "Any inquiries in the United States about one's family are brief; for example, \"How is your wife?\" is answered with ____________",
    hint: "Ở Mỹ, câu hỏi thăm gia đình chỉ mang tính xã giao ngắn gọn nên câu trả lời chuẩn cũng thật ngắn gọn.",
    correctIndices: [2],
    options: [
      {
        text: "\"Oh, she is not very good. She's having a cold.\"",
        explanation: "Kể bệnh cụ thể là quá chi tiết so với phép xã giao ngắn gọn ở Mỹ."
      },
      {
        text: "\"Well, she's very busy with our children and she takes care of our home.\"",
        explanation: "Diễn giải quá dài dòng về sinh hoạt gia đình."
      },
      {
        text: "\"Fine, thanks.\"",
        explanation: "Ở Mỹ, câu hỏi xã giao về gia đình thường ngắn gọn và được đáp lại lịch sự, vắn tắt bằng \"Fine, thanks.\""
      },
      {
        text: "\"Well, I guess she's doing fine. She's 45 years old now and she writes a lot as she's a writer.\"",
        explanation: "Cung cấp quá nhiều thông tin cá nhân không cần thiết."
      }
    ]
  },
  {
    id: 13,
    topic: "Intercultural Etiquette",
    question: "Avoid wearing _____________ when visiting Malaysia as certain shades are reserved for the royal families in that country.",
    hint: "Màu sắc truyền thống dành riêng cho hoàng gia Malaysia (Kuning Diraja).",
    correctIndices: [2],
    options: [
      {
        text: "red",
        explanation: "Màu đỏ không phải màu cấm kỵ dành riêng cho hoàng gia Malaysia."
      },
      {
        text: "white",
        explanation: "Theo giáo trình giao tiếp liên văn hóa, màu sắc đặc trưng dành riêng cho hoàng gia Malaysia cần tránh là màu vàng (yellow)."
      },
      {
        text: "yellow",
        explanation: "Tại Malaysia, một số sắc độ màu vàng (yellow) truyền thống được dành riêng cho hoàng gia nên du khách nên tránh mặc trong các dịp trang trọng."
      },
      {
        text: "purple",
        explanation: "Màu tím không phải màu biểu tượng hoàng gia được nhắc tới trong quy tắc trang phục tại Malaysia của giáo trình."
      }
    ]
  },
  {
    id: 14,
    topic: "Intercultural Etiquette",
    question: "In Arab countries, it is considered taboo to ask about the health of a man's ____________.",
    hint: "Trong văn hóa các nước Ả Rập, việc đàn ông hỏi thăm sức khỏe của vợ người đàn ông khác bị xem là điều cấm kỵ.",
    correctIndices: [1],
    options: [
      {
        text: "father",
        explanation: "Hỏi thăm sức khỏe người cha hay bậc trưởng bối nam giới là bình thường và thể hiện sự kính trọng."
      },
      {
        text: "wife",
        explanation: "Ở các nước Ả Rập, hỏi thăm sức khỏe vợ của một người đàn ông bị xem là điều cấm kỵ (taboo) vì vấn đề riêng tư văn hóa."
      },
      {
        text: "mother",
        explanation: "Mẹ không phải đối tượng bị cấm hỏi cụ thể như 'wife' trong bài học về giao tiếp với người Ả Rập."
      },
      {
        text: "son",
        explanation: "Hỏi thăm con trai thường được chào đón ở nhiều nền văn hóa Ả Rập."
      },
      {
        text: "daughter",
        explanation: "Theo quy tắc trong giáo trình SSB201, điều cấm kỵ được nêu đích danh là hỏi về người vợ ('wife')."
      }
    ]
  },
  {
    id: 15,
    topic: "Intercultural Etiquette",
    question: "When travelling, knowing consumption taboos of the host culture is _____________.",
    hint: "Biết các điều kiêng kỵ trong ăn uống/tiêu dùng của văn hóa bản địa là điều rất quan trọng để tránh xúc phạm.",
    correctIndices: [0],
    options: [
      {
        text: "important",
        explanation: "Hiểu biết các điều kiêng kỵ về ăn uống/tiêu dùng của nước sở tại là rất quan trọng (important) để thể hiện sự tôn trọng và tránh gây phản cảm."
      },
      {
        text: "unimportant",
        explanation: "Sai vì bỏ qua kiêng kỵ văn hóa rất dễ làm hỏng mối quan hệ kinh doanh."
      },
      {
        text: "professional",
        explanation: "'Professional' mô tả phong thái làm việc, không phù hợp bằng 'important' để mô tả tầm quan trọng của kiến thức này."
      },
      {
        text: "unnecessary",
        explanation: "Sai vì đây là kiến thức thiết yếu khi đi công tác quốc tế."
      }
    ]
  },
  {
    id: 16,
    topic: "Negative News Message",
    question: "The first part of a negative news message, verbal or written, involving neutral or positive information, is called ............",
    hint: "Phần mở đầu mang thông tin trung tính hoặc tích cực để 'làm dịu' trước khi nói tin xấu.",
    correctIndices: [0],
    options: [
      {
        text: "buffer or cushion",
        explanation: "Buffer or cushion (lớp đệm) là phần đầu tiên của thông điệp tin xấu, dùng thông tin trung tính hoặc tích cực để giảm sốc."
      },
      {
        text: "explanation",
        explanation: "Explanation là phần giải thích nguyên nhân nằm sau buffer."
      },
      {
        text: "negative news",
        explanation: "Negative news là phần thông báo trực tiếp tin bất lợi ở giữa bài."
      },
      {
        text: "redirect",
        explanation: "Redirect là phần chuyển hướng sang giải pháp thay thế ở cuối thông điệp."
      }
    ]
  },
  {
    id: 17,
    topic: "Negative News Message",
    question: "What is one distinct advantage of presenting negative news in writing?",
    hint: "Theo giáo trình McLean, viết tin xấu ra văn bản cho phép bạn chuẩn bị và lên kế hoạch kỹ lưỡng, khiến cuộc giao tiếp ban đầu dễ dự đoán và kiểm soát hơn.",
    correctIndices: [3],
    options: [
      {
        text: "It is the convenience for the readers who are not good at listening.",
        explanation: "Không phải ý chính được giáo trình nêu khi so sánh ưu điểm của viết và nói."
      },
      {
        text: "It is the chance for the writers to show how good their writing skill is.",
        explanation: "Truyền đạt tin xấu không nhằm mục đích phô diễn kỹ năng viết."
      },
      {
        text: "It is the convenience for busy readers, who can read or review the negative message later on.",
        explanation: "Tuy nghe hợp lý nhưng câu trích nguyên văn ưu điểm nổi bật trong giáo trình McLean (Chương 17.1) nhấn mạnh vào khâu lập kế hoạch và chuẩn bị để cuộc giao tiếp ban đầu có tính dự đoán cao hơn."
      },
      {
        text: "It is the planning and preparation that goes into the message, making the initial communication more predictable.",
        explanation: "Nguyên văn giáo trình McLean: một ưu điểm rõ rệt của việc truyền đạt tin xấu bằng văn bản là bạn có thể lên kế hoạch và chuẩn bị kỹ lưỡng (planning and preparation), giúp phản ứng giao tiếp ban đầu dễ kiểm soát và dự đoán hơn."
      }
    ]
  },
  {
    id: 18,
    topic: "Negative News Message",
    question: "The third part of the negative news message, involving the bad news itself, and the emphasis here is on clarity and accuracy, is called _____________",
    hint: "Phần thứ 3 (sau Buffer và Explanation) chính là phần trực tiếp nêu ra tin xấu.",
    correctIndices: [2],
    options: [
      {
        text: "buffer or cushion",
        explanation: "Buffer là phần thứ nhất (mở đầu trung tính/tích cực)."
      },
      {
        text: "redirect",
        explanation: "Redirect là phần thứ tư (cuối cùng), chuyển hướng sang giải pháp."
      },
      {
        text: "negative news",
        explanation: "Phần thứ ba trong cấu trúc 4 phần là Negative news — trực tiếp nêu thông tin bất lợi với yêu cầu rõ ràng và chính xác (clarity and accuracy)."
      },
      {
        text: "explanation",
        explanation: "Explanation là phần thứ hai, giải thích bối cảnh trước khi đưa ra tin xấu."
      }
    ]
  },
  {
    id: 19,
    topic: "Organizational Communication",
    question: ".......... is the sharing and understanding of meaning between individuals, departments, or representatives of the business and parties outside the organization.",
    hint: "Chú ý cụm 'parties outside the organization' (các bên bên ngoài tổ chức).",
    correctIndices: [0],
    options: [
      {
        text: "External communication",
        explanation: "External communication (giao tiếp đối ngoại) là việc chia sẻ và thấu hiểu thông điệp giữa đại diện doanh nghiệp với các bên bên ngoài tổ chức (khách hàng, đối tác, công chúng)."
      },
      {
        text: "Interpersonal",
        explanation: "Interpersonal là giao tiếp liên cá nhân (thường giữa 2 người), không đặc trưng cho phạm vi đối ngoại của tổ chức."
      },
      {
        text: "Intrapersonal",
        explanation: "Intrapersonal là giao tiếp nội tâm với chính mình."
      },
      {
        text: "Internal communication",
        explanation: "Internal communication là giao tiếp nội bộ bên trong tổ chức, trái với 'outside the organization'."
      }
    ]
  },
  {
    id: 20,
    topic: "Communication & Stress",
    question: "Pagers and other wireless devices have contributed to stress in the communication process.",
    hint: "Các thiết bị liên lạc không dây khiến con người luôn trong trạng thái phải phản hồi mọi lúc mọi nơi, làm tăng áp lực trong quá trình giao tiếp.",
    correctIndices: [0],
    options: [
      {
        text: "True",
        explanation: "Đúng (True)! Giáo trình nêu rõ máy nhắn tin (pagers) và thiết bị không dây tuy tiện lợi nhưng làm tăng áp lực và căng thẳng vì kỳ vọng phản hồi tức thì."
      },
      {
        text: "False",
        explanation: "Sai vì thực tế thiết bị không dây đã góp phần tạo thêm căng thẳng trong quy trình giao tiếp hiện đại."
      }
    ]
  },
  {
    id: 21,
    topic: "Communication Elements",
    question: "The ..............of the communication interaction involves the setting, scene, and expectations of the individuals involved.",
    hint: "Bối cảnh/ngữ cảnh của cuộc giao tiếp bao gồm không gian, hoàn cảnh và kỳ vọng của những người tham gia.",
    correctIndices: [0],
    options: [
      {
        text: "Context",
        explanation: "Context (ngữ cảnh/bối cảnh) của tương tác giao tiếp bao gồm khung cảnh (setting), bối cảnh (scene) và kỳ vọng (expectations) của các cá nhân liên quan."
      },
      {
        text: "Channel",
        explanation: "Channel là kênh truyền tải thông điệp (lời nói, email, điện thoại...)."
      },
      {
        text: "Members",
        explanation: "Members là những người tham gia giao tiếp, không phải khung cảnh và bối cảnh."
      }
    ]
  },
  {
    id: 22,
    topic: "Communication Contexts",
    question: "...............communication normally involves two people, and can range from intimate and very personal to formal and impersonal.",
    hint: "Giao tiếp liên cá nhân thường diễn ra giữa hai người.",
    correctIndices: [1],
    options: [
      {
        text: "Group",
        explanation: "Group communication thường gồm từ 3 đến 8 người."
      },
      {
        text: "Interpersonal",
        explanation: "Interpersonal communication (giao tiếp liên cá nhân) thường diễn ra giữa 2 người, mức độ có thể từ rất thân mật riêng tư đến trang trọng công việc."
      },
      {
        text: "Mass",
        explanation: "Mass communication là truyền thông đại chúng hướng tới số lượng rất lớn khán giả."
      },
      {
        text: "Intrapersonal",
        explanation: "Intrapersonal communication là giao tiếp nội tâm với chính bản thân mình (1 người)."
      }
    ]
  },
  {
    id: 23,
    topic: "Communication Basics",
    question: "_______________ can be defined as the process of understanding and sharing meaning (Pearson & Nelson, 2000).",
    hint: "Định nghĩa kinh điển của Pearson & Nelson (2000) về 'Communication' (Giao tiếp).",
    correctIndices: [2],
    options: [
      {
        text: "Self-concept",
        explanation: "Self-concept là nhận thức về bản thân, không phải quá trình chia sẻ ý nghĩa."
      },
      {
        text: "Transferring",
        explanation: "Transferring chỉ là chuyển giao một chiều, không phải khái niệm đầy đủ về hiểu và chia sẻ ý nghĩa."
      },
      {
        text: "Communication",
        explanation: "Pearson & Nelson (2000) định nghĩa Communication (Giao tiếp) là quá trình thấu hiểu và chia sẻ ý nghĩa (understanding and sharing meaning)."
      },
      {
        text: "Understanding",
        explanation: "Understanding chỉ là một vế trong định nghĩa, không phải tên quá trình tổng thể."
      }
    ]
  },
  {
    id: 24,
    topic: "Globalization",
    question: "What is \"the spread of ways of life across the world both socially and in business\" (Ritzer, 2003)?",
    hint: "Sự lan rộng của các lối sống trên toàn thế giới cả về mặt xã hội lẫn kinh doanh gọi là toàn cầu hóa kinh doanh (business globalization).",
    correctIndices: [3],
    options: [
      {
        text: "It is business glocalization.",
        explanation: "Glocalization là sự kết hợp giữa toàn cầu và địa phương để thích nghi theo vùng."
      },
      {
        text: "It is business development.",
        explanation: "Business development là phát triển kinh doanh/mở rộng thị trường, không phải định nghĩa của Ritzer (2003)."
      },
      {
        text: "It is business cosmopolitan.",
        explanation: "Cosmopolitan chỉ sự đa văn hóa mang tính quốc tế, không phải thuật ngữ được định nghĩa trong trích dẫn này."
      },
      {
        text: "It is business globalization.",
        explanation: "Theo Ritzer (2003), Business globalization (toàn cầu hóa kinh doanh) là sự lan tỏa các lối sống trên toàn cầu cả trong xã hội lẫn trong hoạt động kinh doanh."
      }
    ]
  },
  {
    id: 25,
    topic: "Culture & Subcultures",
    question: "___________ are groups of people possessing characteristic traits that set apart and distinguish them from others within a larger society or macroculture.",
    hint: "Các nhóm người có nét đặc trưng riêng trong xã hội lớn (khác với subgroups là nhóm bị bất đồng, đây là tiểu văn hóa bình thường).",
    correctIndices: [2],
    options: [
      {
        text: "Subgroups",
        explanation: "Subgroups là nhóm nhỏ có hành vi/giá trị bị văn hóa lớn phản đối hoặc khó giao tiếp cùng."
      },
      {
        text: "Societies",
        explanation: "Societies là các xã hội độc lập, không phải nhóm nhỏ nằm bên trong macroculture."
      },
      {
        text: "Subcultures",
        explanation: "Subcultures (tiểu văn hóa) là các nhóm người có những đặc điểm riêng biệt giúp phân biệt họ với phần còn lại trong cùng một xã hội lớn (macroculture)."
      },
      {
        text: "Networks",
        explanation: "Networks là mạng lưới liên kết xã hội."
      }
    ]
  },
  {
    id: 26,
    topic: "Cultural Dimensions",
    question: "The ___________ dimension of culture relates to the reality of our environment and the cultural activities of the people.",
    hint: "Chiều kích liên quan đến môi trường vật chất thực tế (environment) và hoạt động văn hóa hữu hình.",
    correctIndices: [0],
    options: [
      {
        text: "physical",
        explanation: "The physical dimension (chiều kích vật chất) của văn hóa liên quan đến thực tế môi trường tự nhiên/xung quanh và các hoạt động văn hóa của con người."
      },
      {
        text: "psychological",
        explanation: "Psychological dimension liên quan đến kiến thức, niềm tin, thái độ, giá trị tinh thần bên trong."
      },
      {
        text: "language",
        explanation: "Language là hệ thống ngôn ngữ giao tiếp, không phải tên chiều kích môi trường thực tế này."
      },
      {
        text: "value",
        explanation: "Value là các giá trị chuẩn mực tinh thần, thuộc chiều kích tâm lý (psychological)."
      }
    ]
  },
  {
    id: 27,
    topic: "Cultural Adaptation",
    question: "What is \"the process of adjusting and adapting to a new and different culture\" (Hazuda, Stern, & Hoffner, 1988)?",
    hint: "Quá trình điều chỉnh và thích nghi với một nền văn hóa mới khác biệt gọi là tiếp biến văn hóa (acculturation).",
    correctIndices: [0],
    options: [
      {
        text: "It is acculturation.",
        explanation: "Acculturation (tiếp biến văn hóa) là quá trình điều chỉnh và thích nghi khi tiếp xúc với một nền văn hóa mới khác biệt."
      },
      {
        text: "It is the social situation.",
        explanation: "Social situation chỉ hoàn cảnh xã hội cụ thể, không phải quá trình thích nghi văn hóa."
      },
      {
        text: "It is cultural interaction.",
        explanation: "Cultural interaction chỉ sự tương tác qua lại giữa các nền văn hóa nói chung."
      },
      {
        text: "It is enculturation.",
        explanation: "Enculturation (nhập hóa văn hóa) là quá trình học hỏi văn hóa bản địa của chính mình từ lúc mới sinh."
      }
    ]
  },
  {
    id: 28,
    topic: "Business Writing",
    question: "Targeted practice in writing, which involves identifying your weak areas and specifically working to improve them, is especially valuable.",
    hint: "Luyện tập viết có mục tiêu (xác định điểm yếu để khắc phục) chắc chắn rất giá trị — Đúng hay Sai?",
    correctIndices: [1],
    options: [
      {
        text: "False",
        explanation: "Sai vì thực hành có chủ đích vào điểm yếu là một trong những cách hiệu quả nhất để nâng cao kỹ năng viết."
      },
      {
        text: "True",
        explanation: "Đúng (True)! Việc nhận diện điểm yếu trong kỹ năng viết và tập trung luyện tập cải thiện đúng phần đó mang lại giá trị rất lớn."
      }
    ]
  },
  {
    id: 29,
    topic: "Communication Elements",
    question: "\"Jay writes an e-mail to Heather.\"\nis an example of ............",
    hint: "Jay là người chủ động khởi tạo và viết email gửi đi -> Jay đóng vai trò người phát (source) trong giao tiếp viết.",
    correctIndices: [0],
    options: [
      {
        text: "source in written application",
        explanation: "Jay là người khởi phát và gửi thông điệp ('writes an e-mail'), nên đây là ví dụ về Source (nguồn phát) trong ứng dụng giao tiếp viết (written application)."
      },
      {
        text: "source in oral application",
        explanation: "Sai vì viết email thuộc giao tiếp bằng văn bản (written), không phải giao tiếp nói (oral)."
      },
      {
        text: "channel in written application",
        explanation: "Channel là phương tiện email nói chung, còn câu nhấn mạnh hành động Jay viết gửi Heather."
      },
      {
        text: "feedback",
        explanation: "Feedback là phản hồi đáp lại (như khi Heather trả lời email), không phải hành động gửi ban đầu của Jay."
      }
    ]
  },
  {
    id: 30,
    topic: "Media Interviews",
    question: "What are the Interview Preparation Factors for media interviews?",
    hint: "4 yếu tố chuẩn bị phỏng vấn truyền thông trong giáo trình McLean: Chủ đề (Topic), Địa điểm (Location), Định dạng (Format) và Bối cảnh (Background).",
    correctIndices: [0],
    options: [
      {
        text: "Topic, Location, Format, and Background",
        explanation: "Theo bảng Interview Preparation Factors trong giáo trình McLean, 4 yếu tố cần chuẩn bị gồm: Topic (Chủ đề), Location (Địa điểm), Format (Hình thức/Định dạng) và Background (Bối cảnh/Thông tin nền)."
      },
      {
        text: "Topic, Time, Format, and Background",
        explanation: "Sai vì yếu tố thứ hai trong khung chuẩn là Location (địa điểm), không phải Time."
      },
      {
        text: "Topic, Location, Interviewers, and Background",
        explanation: "Sai vì yếu tố thứ ba là Format (định dạng phỏng vấn), không phải Interviewers."
      },
      {
        text: "Topic, Location, Format, and Time",
        explanation: "Sai vì yếu tố thứ tư là Background (bối cảnh), không phải Time."
      }
    ]
  },
  {
    id: 31,
    topic: "Ceremonial Speaking",
    question: "............ are formal expressions of goodwill, appreciation, or calls for group attention to an issue or person in a public setting, often followed by synchronous consumption of beverages.",
    hint: "Lời chúc mừng/nâng ly ('consumption of beverages') trang trọng nơi công cộng.",
    correctIndices: [2],
    options: [
      {
        text: "Gala dinners",
        explanation: "Gala dinner là tên một sự kiện tiệc tối, không phải bài phát biểu chúc mừng kèm nâng ly."
      },
      {
        text: "Conference",
        explanation: "Conference là hội nghị, không gắn với hành động cùng nâng ly thưởng thức đồ uống."
      },
      {
        text: "Toasts",
        explanation: "Toasts (lời chúc rượu / nâng ly) là lời bày tỏ thiện chí, trân trọng hoặc hướng sự chú ý của tập thể tới một người/sự kiện, thường nối tiếp bằng việc cùng nâng ly uống nước."
      },
      {
        text: "Roasts",
        explanation: "Roasts là bài nói trêu chọc hài hước nhưng vẫn mang thiện chí dành cho nhân vật chính (không nhấn mạnh việc đồng loạt nâng ly)."
      }
    ]
  },
  {
    id: 32,
    topic: "Persuasive Language",
    question: "A word, sound, or image that arouses an emotional response in the audience is called _______________",
    hint: "Lời kêu gọi cảm xúc (appeal to emotion) dùng từ ngữ, âm thanh hoặc hình ảnh khơi gợi cảm xúc của khán giả.",
    correctIndices: [0],
    options: [
      {
        text: "an appeal to emotion",
        explanation: "Theo giáo trình McLean, an appeal to emotion (lời kêu gọi cảm xúc) là một từ ngữ, âm thanh hoặc hình ảnh khơi dậy phản ứng cảm xúc nơi khán giả."
      },
      {
        text: "a viral message",
        explanation: "Viral message là thông điệp lan truyền nhanh trên mạng, không phải định nghĩa thuật ngữ tu từ này."
      },
      {
        text: "a trigger",
        explanation: "Trong nguyên văn giáo trình SSB201 (McLean), cụm định nghĩa này dùng chính xác cho 'an appeal to emotion'."
      },
      {
        text: "a social message",
        explanation: "Social message là thông điệp xã hội nói chung."
      }
    ]
  },
  {
    id: 33,
    topic: "Group Communication",
    question: "A group communication in action around a defined agenda, at a set time, for an established duration is defined as ......",
    hint: "Giao tiếp nhóm theo một chương trình nghị sự (agenda) rõ ràng, vào thời gian ấn định và thời lượng cụ thể: cuộc họp (meeting).",
    correctIndices: [0],
    options: [
      {
        text: "a meeting",
        explanation: "A meeting (cuộc họp) được định nghĩa là hoạt động giao tiếp nhóm xoay quanh một chương trình nghị sự (agenda) xác định, vào thời điểm cố định và trong khoảng thời gian đã định."
      },
      {
        text: "a report",
        explanation: "Report là bản báo cáo trình bày thông tin/kết quả, không phải phiên giao tiếp nhóm theo agenda."
      },
      {
        text: "a discussion",
        explanation: "Discussion có thể diễn ra tự phát không cần agenda hay khung thời gian chặt chẽ như meeting."
      },
      {
        text: "a teamwork",
        explanation: "Teamwork là sự hợp tác làm việc nhóm nói chung."
      }
    ]
  },
  {
    id: 34,
    topic: "Presentation Design",
    question: "A thesis statement should be.........",
    hint: "Câu luận điểm chính của bài nói phải ngắn gọn và cụ thể.",
    correctIndices: [2],
    options: [
      {
        text: "a specific sentence capturing the central idea of your speech.",
        explanation: "Thiếu tính 'short' (ngắn gọn) theo chuẩn định nghĩa."
      },
      {
        text: "a long, specific sentence capturing the central idea of your speech.",
        explanation: "Sai vì thesis statement không nên dài."
      },
      {
        text: "a short, specific sentence capturing the central idea of your speech.",
        explanation: "Chính xác! Thesis statement là một câu ngắn gọn, cụ thể nêu bật ý tưởng trung tâm của bài thuyết trình."
      }
    ]
  },
  {
    id: 35,
    topic: "Message Types",
    question: "............. refer to the unintentional content, both verbal and nonverbal. Your audience will form impressions of your intentional messages, both negative and positive, over which you have no control.",
    hint: "Loại thông điệp thứ cấp/không chủ ý (unintentional content) mà khán giả tự cảm nhận ngoài ý muốn kiểm soát của bạn.",
    correctIndices: [1],
    options: [
      {
        text: "Primary messages",
        explanation: "Primary messages là nội dung CÓ CHỦ Ý (intentional), cả bằng lời lẫn phi ngôn ngữ."
      },
      {
        text: "Secondary messages",
        explanation: "Secondary messages (thông điệp thứ cấp) đề cập đến những nội dung KHÔNG CHỦ Ý (unintentional), cả lời nói lẫn phi ngôn ngữ, tạo nên ấn tượng ngoài tầm kiểm soát của người nói."
      },
      {
        text: "Auxiliary messages",
        explanation: "Auxiliary messages là cách thức (có chủ ý hoặc vô ý) truyền đạt thông điệp chính như ngữ điệu, cử chỉ, tư thế."
      },
      {
        text: "Report",
        explanation: "Report là văn bản báo cáo, không phải phân loại thông điệp giao tiếp."
      }
    ]
  },
  {
    id: 36,
    topic: "Language & Meaning",
    question: "_________, or a clear point of view involving theories, laws, and/or generalizations that provide a framework for understanding, tend to form and become set around key validity claims, or statements of the way things work\" (McLean, 2003).",
    hint: "Hệ quy chiếu / mô hình tư duy (Paradigms) cung cấp khung lý thuyết để hiểu cách sự vật vận hành.",
    correctIndices: [0],
    options: [
      {
        text: "Paradigms",
        explanation: "Paradigms (hệ mẫu / khung tư duy) theo McLean (2003) là góc nhìn rõ ràng gồm các lý thuyết, quy luật và khái quát hóa tạo thành khung tham chiếu để lý giải cách thế giới vận hành."
      },
      {
        text: "Jargons",
        explanation: "Jargon là biệt ngữ chuyên ngành trong một lĩnh vực nghề nghiệp."
      },
      {
        text: "Slangs",
        explanation: "Slang là tiếng lóng dùng trong giao tiếp thân mật/nhóm bạn."
      },
      {
        text: "Semantic rules",
        explanation: "Semantic rules là quy tắc về nghĩa của từ ngữ trong ngôn ngữ."
      }
    ]
  },
  {
    id: 37,
    topic: "Language Rules",
    question: "................govern the order of words in a sentence. In some languages, such as German, syntax or word order is strictly prescribed. English syntax, in contrast, is relatively flexible and open to style.",
    hint: "Chú ý từ khóa 'order of words' và 'syntax' (quy tắc cú pháp).",
    correctIndices: [0],
    options: [
      {
        text: "Syntactic rules",
        explanation: "Syntactic rules (quy tắc cú pháp) quy định trật tự sắp xếp các từ trong câu (word order)."
      },
      {
        text: "Semantic rules",
        explanation: "Semantic rules chi phối ý nghĩa của từ và cụm từ, không phải trật tự từ."
      },
      {
        text: "Contextual rules",
        explanation: "Contextual rules chi phối ý nghĩa và cách chọn từ theo ngữ cảnh, phong tục xã hội."
      }
    ]
  },
  {
    id: 38,
    topic: "Speech Organization",
    question: "In your .................. you will make a clear statement your topic; this is also the time to establish a relationship with your audience.",
    hint: "Phần mở bài nơi bạn giới thiệu rõ chủ đề và tạo kết nối ban đầu với khán giả.",
    correctIndices: [1],
    options: [
      {
        text: "attention statement",
        explanation: "Attention statement chỉ là câu mở đầu gây chú ý ngay lúc bắt đầu."
      },
      {
        text: "introduction",
        explanation: "Trong phần Introduction (mở bài), bạn nêu rõ chủ đề của bài nói và xây dựng mối quan hệ kết nối với khán giả."
      },
      {
        text: "body",
        explanation: "Body là phần thân bài triển khai chi tiết các luận điểm."
      },
      {
        text: "residual message",
        explanation: "Residual message là thông điệp đọng lại ở phần kết bài."
      }
    ]
  },
  {
    id: 39,
    topic: "Intercultural Etiquette",
    question: "Tipping in a non-tipping culture can offend or insult the people of that culture. True or False?",
    hint: "Ở những quốc gia không có văn hóa tiền boa (ví dụ Nhật Bản), việc đưa tiền tip có thể bị coi là thiếu tôn trọng hoặc xúc phạm.",
    correctIndices: [1],
    options: [
      {
        text: "FALSE",
        explanation: "Sai vì tại các nền văn hóa không dùng tiền boa, hành động boa tiền có thể bị hiểu nhầm là xúc phạm lòng tự trọng nghề nghiệp."
      },
      {
        text: "TRUE",
        explanation: "Đúng (TRUE)! Đưa tiền boa (tipping) ở một nền văn hóa không có tục lệ này có thể gây phật lòng hoặc bị xem là xúc phạm người bản địa."
      }
    ]
  },
  {
    id: 40,
    topic: "Business Writing & Email",
    question: "Why should employees be very careful about the e-mail messages they send?",
    hint: "Doanh nghiệp có thể phải chịu trách nhiệm pháp lý nếu thông tin nhạy cảm từ email bị rò rỉ ra không gian mạng (cyberspace).",
    correctIndices: [1],
    options: [
      {
        text: "Because an e-mail is more informal than a letter or memorandum.",
        explanation: "Đây không phải rủi ro pháp lý cốt lõi khiến doanh nghiệp lưu tâm."
      },
      {
        text: "Because a firm may be liable for information leaked into cyberspace.",
        explanation: "Chính xác! Email dễ bị chuyển tiếp hoặc phát tán, và công ty có thể chịu trách nhiệm pháp lý (liable) đối với thông tin rò rỉ lên không gian mạng."
      },
      {
        text: "Because an e-mail is more formal than a letter or memorandum.",
        explanation: "Sai về mặt tính chất vì email thường ít trang trọng hơn thư chính thức."
      },
      {
        text: "Because an e-mail may have the employees' names on it.",
        explanation: "Việc có tên nhân viên chỉ là nhận diện thông thường, chưa nêu rõ trách nhiệm pháp lý của công ty."
      }
    ]
  },
  {
    id: 41,
    topic: "Business Etiquette",
    question: "......... refers to manners and behavior considered acceptable in social and business situations.",
    hint: "Phép lịch sự / phép tắc ứng xử được chấp nhận trong xã hội và kinh doanh.",
    correctIndices: [2],
    options: [
      {
        text: "Protocol",
        explanation: "Protocol thiên về nghi thức ngoại giao, quy chuẩn chính thức cấp cao."
      },
      {
        text: "Greetings",
        explanation: "Greetings chỉ là hành động chào hỏi."
      },
      {
        text: "Etiquette",
        explanation: "Etiquette (phép lịch sự / phép tắc xã giao) chỉ những cung cách và hành vi được xem là chuẩn mực trong tình huống xã hội và kinh doanh."
      },
      {
        text: "Introduction",
        explanation: "Introduction chỉ là việc giới thiệu bản thân hoặc người khác."
      }
    ]
  },
  {
    id: 42,
    topic: "Intercultural Gift-Giving",
    question: "Why should we avoid giving perfume or wine as gifts to the French people?",
    hint: "Nước hoa và rượu vang là hai 'đặc sản' (specialties) nổi tiếng bậc nhất của chính nước Pháp!",
    correctIndices: [0],
    options: [
      {
        text: "Because those are their specialties.",
        explanation: "Theo giáo trình giao tiếp liên văn hóa, nên tránh tặng nước hoa hay rượu vang cho người Pháp vì đó là đặc sản (specialties) niềm tự hào của chính họ."
      },
      {
        text: "Because those are expensive.",
        explanation: "Không phải lý do vì giá đắt."
      },
      {
        text: "Because those are not expensive.",
        explanation: "Nước hoa và rượu vang Pháp thường rất giá trị, không phải vì rẻ."
      },
      {
        text: "Because those are what they do not like.",
        explanation: "Sai hoàn toàn vì người Pháp rất trân trọng rượu vang và nước hoa."
      }
    ]
  },
  {
    id: 43,
    topic: "Rhetorical Appeals",
    question: "Pathos means",
    hint: "Trong tam giác thuyết phục của Aristotle (Ethos - Logos - Pathos): Ethos là uy tín, Logos là logic, còn Pathos là cảm xúc/đam mê.",
    correctIndices: [2],
    options: [
      {
        text: "credibility",
        explanation: "Credibility (uy tín, sự đáng tin cậy) là ý nghĩa của Ethos."
      },
      {
        text: "logic of your thoughts",
        explanation: "Logic of your thoughts là ý nghĩa của Logos."
      },
      {
        text: "passion and enthusiasm",
        explanation: "Pathos thể hiện sự đam mê, nhiệt huyết và khả năng khơi gợi cảm xúc (passion and enthusiasm) nơi người nghe."
      },
      {
        text: "information",
        explanation: "Information là thông tin thuần túy, không phải nghĩa của Pathos."
      }
    ]
  },
  {
    id: 44,
    topic: "Paragraph Structure",
    question: "The ............ states the main thesis, purpose, or topic of the paragraph; it defines the subject matter to be addressed in that paragraph.",
    hint: "Câu chủ đề (topic sentence) nêu lên ý chính hoặc chủ đề của cả đoạn văn.",
    correctIndices: [1],
    options: [
      {
        text: "body sentence",
        explanation: "Body sentences là các câu thân đoạn dùng để triển khai, chứng minh cho câu chủ đề."
      },
      {
        text: "topic sentence",
        explanation: "Topic sentence (câu chủ đề) nêu bật luận điểm chính, mục đích hoặc chủ đề sẽ được bàn luận trong đoạn văn đó."
      },
      {
        text: "conclusion sentence",
        explanation: "Conclusion sentence là câu kết đoạn nhằm tóm lại ý hoặc chuyển tiếp sang đoạn mới."
      }
    ]
  },
  {
    id: 45,
    topic: "Transitions & Structure",
    question: "............. is a brief statement referring to a point you are going to make. It can forecast or foreshadow a main point in your document.",
    hint: "Câu tóm tắt báo trước ý sắp trình bày (internal preview).",
    correctIndices: [0],
    options: [
      {
        text: "An internal preview",
        explanation: "An internal preview (xem trước nội bộ) là câu ngắn đề cập trước đến một ý bạn sắp trình bày để dự báo luận điểm chính."
      },
      {
        text: "Signpost",
        explanation: "Signpost là từ/cụm từ chỉ dẫn vị trí (First, Next, Finally...), ngắn hơn internal preview."
      },
      {
        text: "Time",
        explanation: "Time transition dùng để liên kết theo trình tự thời gian."
      },
      {
        text: "Addition",
        explanation: "Addition transition dùng để bổ sung thêm ý."
      }
    ]
  },
  {
    id: 46,
    topic: "Transitions & Structure",
    question: ".............illustrates a connection between a point and an example or examples. You may find visual aids work well with this type of transition.",
    hint: "Loại từ nối kết nối giữa một luận điểm và 'ví dụ' (example).",
    correctIndices: [3],
    options: [
      {
        text: "A clarification transition",
        explanation: "Clarification transition dùng để diễn giải làm rõ thêm ý đã nêu."
      },
      {
        text: "A place transition",
        explanation: "Place transition dùng để chỉ vị trí địa lý/không gian."
      },
      {
        text: "A transition by cause and effect or result",
        explanation: "Dùng để nối quan hệ nguyên nhân – kết quả."
      },
      {
        text: "A transition by example",
        explanation: "A transition by example (chuyển tiếp bằng ví dụ) kết nối luận điểm với các ví dụ minh họa và rất phù hợp dùng kèm hình ảnh trực quan."
      }
    ]
  },
  {
    id: 47,
    topic: "Interpersonal Needs (FIRO)",
    question: "Schutz (1966) defines people who have a strong need to be liked and constantly seek attention from others as ................",
    hint: "Theo thuyết FIRO của Schutz (1966), những người có nhu cầu được yêu mến quá mức thuộc nhóm 'overpersonals'.",
    correctIndices: [2],
    options: [
      {
        text: "underpersonals",
        explanation: "Underpersonals là những người ít thể hiện tình cảm và có xu hướng né tránh sự gắn kết thân mật."
      },
      {
        text: "personal individual.",
        explanation: "Personal individual là người có nhu cầu gắn kết tình cảm ở mức cân bằng."
      },
      {
        text: "overpersonals",
        explanation: "Schutz (1966) gọi những người luôn khao khát được yêu thích và không ngừng tìm kiếm sự chú ý từ người khác là overpersonals."
      },
      {
        text: "autocrats",
        explanation: "Autocrats thuộc nhóm nhu cầu kiểm soát (thích chi phối người khác)."
      }
    ]
  },
  {
    id: 48,
    topic: "Interpersonal Needs (FIRO)",
    question: "According to Schutz, the three interpersonal needs are .............",
    hint: "Ba nhu cầu liên cá nhân trong thuyết FIRO của Schutz: Tình cảm (affection), Kiểm soát (control) và Thuộc về/Hòa nhập (belonging/inclusion).",
    correctIndices: [1],
    options: [
      {
        text: "need for affection, need for trust, and need for belonging",
        explanation: "Sai ở 'need for trust' — thuyết FIRO dùng 'need for control', không phải trust."
      },
      {
        text: "need for affection, need for control, and need for belonging/inclusion",
        explanation: "Theo Schutz (1966), ba nhu cầu liên cá nhân cốt lõi là: nhu cầu được yêu thương (affection), nhu cầu kiểm soát (control) và nhu cầu thuộc về/hòa nhập (belonging/inclusion)."
      },
      {
        text: "need for power, need for trust, and need for control",
        explanation: "Không đúng theo 3 trụ cột FIRO của Schutz."
      },
      {
        text: "need for power, need for trust, and need for money",
        explanation: "Không chính xác."
      }
    ]
  },
  {
    id: 49,
    topic: "Self-Understanding",
    question: "___________________ is a trait that allows us to adapt and change to our context or environment, to accept or reject messages, to examine our concept of ourselves and choose to improve.",
    hint: "Khả năng tự phản tư/chiêm nghiệm bản thân (self-reflection) để thích nghi và hoàn thiện chính mình.",
    correctIndices: [3],
    options: [
      {
        text: "Self-talk",
        explanation: "Self-talk là cuộc đối thoại nội tâm diễn ra trong đầu bạn."
      },
      {
        text: "Self-evaluation",
        explanation: "Self-evaluation là việc tự chấm điểm/đánh giá năng lực, chưa bao hàm trọn vẹn định nghĩa trong giáo trình."
      },
      {
        text: "Self-concept",
        explanation: "Self-concept là khái niệm/bức tranh tổng thể về bản thân bạn."
      },
      {
        text: "Self-reflection",
        explanation: "Self-reflection (sự tự phản tư) là phẩm chất giúp chúng ta thích nghi với bối cảnh, chọn lọc thông điệp, nhìn lại nhận thức về bản thân và chủ động cải thiện."
      }
    ]
  },
  {
    id: 50,
    topic: "Workplace Communication",
    question: "_____________ can be contagious in the workplace, and fear of the unknown can influence people to act in irrational ways.",
    hint: "Cảm xúc (Emotions) rất dễ lây lan trong môi trường công sở, đặc biệt là nỗi sợ điều chưa biết.",
    correctIndices: [3],
    options: [
      {
        text: "Communication",
        explanation: "Giao tiếp không dùng tính từ 'contagious' (lây lan) như cảm xúc."
      },
      {
        text: "Empathy",
        explanation: "Empathy là sự thấu cảm tích cực, không gây hành động phi lý do sợ hãi."
      },
      {
        text: "Avoidance",
        explanation: "Avoidance là sự né tránh khi đối diện xung đột."
      },
      {
        text: "Emotions",
        explanation: "Emotions (cảm xúc) có thể lây lan (contagious) trong nơi làm việc, và nỗi sợ điều chưa biết dễ khiến mọi người hành xử thiếu lý trí."
      }
    ]
  }
];
