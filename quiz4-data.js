// Dữ liệu câu hỏi SSB201 - Quiz 4 (trích xuất từ thư mục Quiz4: Q1.webp - Q50.webp)
// Câu hỏi & đáp án giữ nguyên tiếng Anh; chủ đề, gợi ý (hint) và lời giải thích từng đáp án bằng tiếng Việt.

const QUIZ_4_QUESTIONS = [
  {
    id: 1,
    topic: "Listening & Negative News",
    question: "\"Keep silent while you let the other person \"speak his piece.\" If you are reading, make an effort to understand and digest the news without mental interruptions.\"\nHere is an example of .....",
    hint: "Giữ im lặng để đối phương nói hết ý và tiếp thu thông tin không ngắt quãng trong suy nghĩ (don't interrupt).",
    correctIndices: [1],
    options: [
      {
        text: "take turn",
        explanation: "Take turn là thay phiên nhau nói; ở đây đoạn trích nhấn mạnh việc giữ im lặng hoàn toàn và không ngắt lời."
      },
      {
        text: "don't interrupt",
        explanation: "Don't interrupt (không ngắt lời) khuyên bạn giữ im lặng lắng nghe trọn vẹn ý kiến đối phương và không tự ngắt mạch suy nghĩ khi đọc."
      },
      {
        text: "set aside a special time",
        explanation: "Set aside a special time là dành khung thời gian riêng tư để trao đổi, không phải hành động giữ im lặng khi đối phương đang nói."
      }
    ]
  },
  {
    id: 2,
    topic: "Perception",
    question: "The action of sorting competing messages, or choosing stimuli which is one very important part of perception and awareness, is called .....",
    hint: "Hành động phân loại và chọn lọc kích thích trong bước đầu của quá trình nhận thức: Selection.",
    correctIndices: [0],
    options: [
      {
        text: "selection",
        explanation: "Selection (sự chọn lọc) là hành động sàng lọc các thông điệp cạnh tranh hoặc lựa chọn kích thích — bước cực kỳ quan trọng trong nhận thức."
      },
      {
        text: "chance",
        explanation: "Chance là sự ngẫu nhiên/cơ hội, không phải thuật ngữ chỉ quá trình chọn lọc nhận thức."
      },
      {
        text: "option",
        explanation: "Option là phương án lựa chọn, không phải tên giai đoạn trong quá trình nhận thức (Selection - Organization - Interpretation)."
      }
    ]
  },
  {
    id: 3,
    topic: "Self-Fulfilling Prophecy",
    question: "The concept of a self-fulfilling prophecy, in which someone's behavior comes to match and mirror others' expectations, is not new.",
    hint: "Lời tiên tri tự ứng nghiệm (self-fulfilling prophecy) — hành vi của một người trở nên khớp với kỳ vọng của người khác — là khái niệm đã có từ lâu.",
    correctIndices: [0],
    options: [
      {
        text: "True",
        explanation: "Đúng (True)! Khái niệm 'lời tiên tri tự ứng nghiệm' (self-fulfilling prophecy) do Robert Merton mô tả từ năm 1948, hoàn toàn không phải khái niệm mới."
      },
      {
        text: "False",
        explanation: "Sai vì nguyên văn câu khẳng định 'is not new' trong giáo trình McLean là ĐÚNG."
      }
    ]
  },
  {
    id: 4,
    topic: "Self-Understanding",
    question: "Your ............ include your eye color, hair length, height, and so forth.",
    hint: "Màu mắt, độ dài tóc, chiều cao... là các đặc điểm ngoại hình/thể chất (physical characteristics).",
    correctIndices: [0],
    options: [
      {
        text: "physical characteristics",
        explanation: "Physical characteristics (đặc điểm thể chất) bao gồm màu mắt, kiểu tóc, chiều cao và các yếu tố ngoại hình hữu hình."
      },
      {
        text: "self-image",
        explanation: "Self-image là hình ảnh/cảm nhận tổng thể bạn hình dung về bản thân, rộng hơn danh sách đặc điểm vật lý."
      },
      {
        text: "self-esteem",
        explanation: "Self-esteem là lòng tự trọng và cảm nhận về giá trị bản thân."
      },
      {
        text: "self-concept",
        explanation: "Self-concept là khái niệm toàn diện về bản thân gồm niềm tin, thái độ và giá trị."
      }
    ]
  },
  {
    id: 5,
    topic: "Intercultural Communication",
    question: ".............. means you go beyond pride in your culture, heritage or background and hold the \"conviction that (you) know more and are better than those of different cultures.",
    hint: "Niềm tin cho rằng văn hóa của mình vượt trội hơn mọi nền văn hóa khác: Chủ nghĩa vị chủng (Ethnocentrism).",
    correctIndices: [2],
    options: [
      {
        text: "Stereotypes",
        explanation: "Stereotypes là sự khái quát hóa đơn giản về một nhóm người."
      },
      {
        text: "Prejudice",
        explanation: "Prejudice là thành kiến/thái độ tiêu cực vô căn cứ đối với một nhóm người."
      },
      {
        text: "Ethnocentrism",
        explanation: "Ethnocentrism (chủ nghĩa vị chủng) là niềm tin cố hữu cho rằng văn hóa, di sản của mình tốt đẹp và vượt trội hơn các nền văn hóa khác."
      },
      {
        text: "All answers are false",
        explanation: "Sai vì đáp án C (Ethnocentrism) là chính xác."
      }
    ]
  },
  {
    id: 6,
    topic: "Speech Preparation",
    question: "............. is the process by which you look over your speech again in order to correct or improve it. You will notice elements that need further investigation, development, or additional examples and visual aids as your produce your speech.",
    hint: "Quá trình xem lại, chỉnh sửa và hoàn thiện bài nói (correct or improve it): Revision.",
    correctIndices: [2],
    options: [
      {
        text: "Production",
        explanation: "Production là giai đoạn tạo ra bản nháp nội dung và tài liệu bài nói."
      },
      {
        text: "Incubation",
        explanation: "Incubation là giai đoạn ấp ủ ý tưởng trong tiềm thức trước khi viết."
      },
      {
        text: "Revision",
        explanation: "Revision (chỉnh sửa/hoàn thiện) là quá trình rà soát lại bài nói để sửa lỗi, bổ sung ví dụ, nghiên cứu thêm hoặc cải thiện hình ảnh trực quan."
      }
    ]
  },
  {
    id: 7,
    topic: "Public Speaking",
    question: "\"Speech to demonstrate\" means",
    hint: "Demonstrate nghĩa là minh họa, trình diễn cách sử dụng, vận hành hoặc làm một việc gì đó.",
    correctIndices: [1],
    options: [
      {
        text: "increase the audience's knowledge, teach about a topic or issue, and share your expertise",
        explanation: "Đây là định nghĩa của 'Speech to inform' (truyền đạt kiến thức)."
      },
      {
        text: "show the audience how to use, operate, or do something.",
        explanation: "Speech to demonstrate (bài nói hướng dẫn/minh họa) nhằm chỉ cho khán giả cách sử dụng, vận hành hoặc thực hiện một công việc cụ thể."
      },
      {
        text: "influence the audience by presenting arguments intended to change attitudes, beliefs, or values.",
        explanation: "Đây là định nghĩa của 'Speech to persuade' (thuyết phục)."
      },
      {
        text: "amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.",
        explanation: "Đây là định nghĩa của 'Speech to entertain' (giải trí)."
      }
    ]
  },
  {
    id: 8,
    topic: "Design Thinking",
    question: "To empathize, we observe, which means...",
    hint: "Observe là quan sát người dùng và hành vi của họ trong chính môi trường sống thực tế.",
    correctIndices: [1],
    options: [
      {
        text: "the foundation of a human-centered design process",
        explanation: "Đây là định nghĩa vai trò chung của 'Empathy'."
      },
      {
        text: "we view users and their behavior in the context of their lives",
        explanation: "Observe nghĩa là quan sát người dùng và hành vi tự nhiên của họ trong bối cảnh cuộc sống thực tế."
      },
      {
        text: "we interact with and interview users through both scheduled and short intercept encounters",
        explanation: "Đây là định nghĩa của 'Engage' (tương tác, phỏng vấn)."
      },
      {
        text: "we experience what our user experiences",
        explanation: "Đây là định nghĩa của 'Immerse' (đắm mình trải nghiệm)."
      }
    ]
  },
  {
    id: 9,
    topic: "Design Thinking",
    question: "............ mode is when you unpack and synthesize your empathy findings into compelling needs and insights, and scope a specific and meaningful challenge.",
    hint: "Bước phân tích tổng hợp dữ liệu thấu cảm thành insight và xác định bài toán cụ thể: Define.",
    correctIndices: [0],
    options: [
      {
        text: "Define",
        explanation: "Define (Xác định vấn đề) là giai đoạn phân tích, tổng hợp các phát hiện từ bước thấu cảm thành nhu cầu, insight và phát biểu thách thức rõ ràng."
      },
      {
        text: "Empathize",
        explanation: "Empathize là bước thu thập dữ liệu ban đầu bằng quan sát và lắng nghe."
      },
      {
        text: "Test",
        explanation: "Test là bước kiểm thử sản phẩm mẫu với người dùng."
      },
      {
        text: "Ideate",
        explanation: "Ideate là bước động não tạo ý tưởng giải pháp."
      }
    ]
  },
  {
    id: 10,
    topic: "Design Thinking",
    question: "During the Design Thinking Process, \"Fail, fix, test, repeat\" will be in which mode?",
    hint: "Vòng lặp 'Thử sai – Sửa – Kiểm thử – Lặp lại' diễn ra trong giai đoạn kiểm thử: Test.",
    correctIndices: [1],
    options: [
      {
        text: "Define",
        explanation: "Define là giai đoạn chốt phát biểu vấn đề, chưa có sản phẩm mẫu để 'fail, fix, test'."
      },
      {
        text: "Test",
        explanation: "Trong giai đoạn Test (Kiểm thử), bạn liên tục thử nghiệm nguyên mẫu với người dùng, phát hiện lỗi, sửa chữa rồi kiểm thử lại theo chu trình 'Fail, fix, test, repeat'."
      },
      {
        text: "Prototype",
        explanation: "Prototype là khâu chế tạo mẫu thử trước khi mang đi kiểm thử và lặp lại ở bước Test."
      },
      {
        text: "Empathize",
        explanation: "Empathize là khâu thấu cảm tìm hiểu người dùng."
      }
    ]
  },
  {
    id: 11,
    topic: "Design Thinking",
    question: "To empathize, we engage, which means .........................................",
    hint: "Engage nghĩa là trực tiếp tương tác và phỏng vấn người dùng (interact with and interview users).",
    correctIndices: [2],
    options: [
      {
        text: "the foundation of a human-centered design process",
        explanation: "Đây là mô tả chung của Empathy."
      },
      {
        text: "View users and their behavior in the context of their lives",
        explanation: "Đây là định nghĩa của 'Observe' (quan sát)."
      },
      {
        text: "Interact with and interview users through both scheduled and short intercept encounters",
        explanation: "Engage (tương tác) trong Design Thinking nghĩa là trực tiếp trò chuyện và phỏng vấn người dùng qua các buổi hẹn trước hoặc trao đổi nhanh."
      },
      {
        text: "Experience what your user experiences",
        explanation: "Đây là định nghĩa của 'Immerse' (trải nghiệm nhập vai)."
      }
    ]
  },
  {
    id: 12,
    topic: "Intercultural Communication",
    question: "Any inquiries in the United States about one's family are brief; for example, \"How is your wife?\" is answered with ____________",
    hint: "Câu hỏi xã giao về gia đình tại Mỹ thường rất ngắn gọn nên câu trả lời chuẩn là 'Fine, thanks.'",
    correctIndices: [2],
    options: [
      {
        text: "\"Oh, she is not very good. She's having a cold.\"",
        explanation: "Quá chi tiết về bệnh tật cá nhân so với văn hóa xã giao công sở Mỹ."
      },
      {
        text: "\"Well, she's very busy with our children and she takes care of our home.\"",
        explanation: "Kể lể quá dài dòng về việc nhà."
      },
      {
        text: "\"Fine, thanks.\"",
        explanation: "Trong giao tiếp tại Mỹ, các câu hỏi thăm gia đình mang tính xã giao ngắn gọn và được đáp lại bằng \"Fine, thanks.\""
      },
      {
        text: "\"Well, I guess she's doing fine. She's 45 years old now and she writes a lot as she's a writer.\"",
        explanation: "Tiết lộ quá nhiều chi tiết cá nhân không cần thiết."
      }
    ]
  },
  {
    id: 13,
    topic: "Intercultural Etiquette",
    question: "In Taiwan, messages should not be written in _____________ as this has death connotations.",
    hint: "Ở Đài Loan, viết thư/tin nhắn bằng mực đỏ (red ink) mang ý nghĩa liên quan đến cái chết hoặc cắt đứt quan hệ.",
    correctIndices: [0],
    options: [
      {
        text: "red ink",
        explanation: "Ở Đài Loan (và văn hóa Hoa ngữ truyền thống), viết tên hoặc tin nhắn bằng mực đỏ (red ink) mang hàm ý cái chết/xui xẻo nên cần tránh."
      },
      {
        text: "black ink",
        explanation: "Mực đen là màu mực viết thông thường và trang trọng."
      },
      {
        text: "blue ink",
        explanation: "Mực xanh dương là màu mực viết phổ biến hằng ngày."
      },
      {
        text: "green ink",
        explanation: "Mực xanh lá không phải màu mực bị kiêng kỵ vì hàm ý cái chết như mực đỏ."
      }
    ]
  },
  {
    id: 14,
    topic: "Intercultural Humor",
    question: "What is perceived as humorous in the United States may not be humorous in Vietnam. True or False?",
    hint: "Khiếu hài hước phụ thuộc rất mạnh vào văn hóa — điều gây cười ở Mỹ chưa chắc buồn cười ở Việt Nam.",
    correctIndices: [0],
    options: [
      {
        text: "True",
        explanation: "Đúng (True)! Sự hài hước gắn chặt với bối cảnh văn hóa, ngôn ngữ và chuẩn mực xã hội nên điều thú vị ở Mỹ có thể không gây cười (hoặc bị hiểu nhầm) ở Việt Nam."
      },
      {
        text: "False",
        explanation: "Sai vì sự cảm nhận hài hước thay đổi rõ rệt giữa các nền văn hóa."
      }
    ]
  },
  {
    id: 15,
    topic: "Intercultural Humor",
    question: "Although humor is a universal human characteristic, what is perceived as humorous varies from culture to culture. True or False?",
    hint: "Hài hước là đặc điểm phổ quát của loài người, nhưng cái gì được coi là hài hước lại khác nhau giữa các nền văn hóa.",
    correctIndices: [1],
    options: [
      {
        text: "False",
        explanation: "Sai vì mọi nền văn hóa đều có tiếng cười nhưng gu hài hước khác nhau rất lớn."
      },
      {
        text: "True",
        explanation: "Đúng (True)! Dù sự hài hước tồn tại ở mọi nền văn hóa, điều gì được xem là hài hước lại thay đổi tùy theo từng nền văn hóa."
      }
    ]
  },
  {
    id: 16,
    topic: "Communication Law",
    question: "Such language, which is interpreted as defamatory, or harming the reputation of the person, if in written form, is called ...........",
    hint: "Phỉ báng danh dự dưới dạng VĂN BẢN VIẾT gọi là Libel (còn dạng lời nói gọi là Slander).",
    correctIndices: [0],
    options: [
      {
        text: "libel",
        explanation: "Libel (tội phỉ báng bằng văn bản) là ngôn từ bôi nhọ, gây tổn hại danh dự người khác được thể hiện dưới dạng chữ viết/xuất bản."
      },
      {
        text: "slander",
        explanation: "Slander là hành vi vu khống/phỉ báng bằng LỜI NÓI (spoken form), không phải văn bản viết."
      },
      {
        text: "complaint",
        explanation: "Complaint là lời phàn nàn, khiếu nại thông thường."
      },
      {
        text: "Feedback",
        explanation: "Feedback là phản hồi góp ý."
      }
    ]
  },
  {
    id: 17,
    topic: "Negative News Message",
    question: "............... places the negative news at the beginning of the message.",
    hint: "Cách tiếp cận trực tiếp (The direct approach) đi thẳng vào tin xấu ngay từ đầu thông điệp.",
    correctIndices: [2],
    options: [
      {
        text: "The internal communication",
        explanation: "Đây là khái niệm giao tiếp nội bộ, không phải phương pháp sắp xếp bố cục tin xấu."
      },
      {
        text: "The indirect approach",
        explanation: "Indirect approach mở đầu bằng lớp đệm (buffer) và lời giải thích rồi mới đưa tin xấu ở phần sau."
      },
      {
        text: "The direct approach",
        explanation: "The direct approach (cách tiếp cận trực tiếp) đặt thông tin tiêu cực ngay ở phần mở đầu thông điệp — phù hợp khi người nhận thích sự thẳng thắn hoặc tin không quá sốc."
      },
      {
        text: "The external communication",
        explanation: "Đây là giao tiếp đối ngoại với bên ngoài tổ chức."
      }
    ]
  },
  {
    id: 18,
    topic: "Negative News Message",
    question: "Which is NOT a goal when delivering negative news, in person or in written form?",
    hint: "Không thể qua loa 'không dành nhiều thời gian vì chẳng làm được gì' — truyền đạt tin xấu luôn cần chuẩn bị cẩn thận!",
    correctIndices: [3],
    options: [
      {
        text: "Maintain the relationship, even if a formal association is being terminated.",
        explanation: "Đây LÀ một trong những mục tiêu quan trọng khi báo tin xấu (giữ gìn thiện chí mối quan hệ)."
      },
      {
        text: "Reduce the anxiety associated with the negative news to increase comprehension.",
        explanation: "Đây LÀ mục tiêu chuẩn nhằm giảm lo âu để người nhận hiểu rõ lý do."
      },
      {
        text: "Achieve the designated business outcome.",
        explanation: "Đây LÀ mục tiêu cốt lõi để hoàn thành mục đích công việc."
      },
      {
        text: "Do not spend much time on it because we cannot do much about it.",
        explanation: "Đây KHÔNG phải mục tiêu đúng! Khi truyền đạt tin xấu cần đầu tư thời gian chuẩn bị kỹ lưỡng để tránh hiểu lầm và rủi ro pháp lý."
      }
    ]
  },
  {
    id: 19,
    topic: "Crisis Communication",
    question: "Which statement is NOT correct about crisis communication team members?",
    hint: "Theo giáo trình McLean, 3 tiêu chí chọn thành viên đội ứng phó khủng hoảng là: (1) có quyền quyết định, (2) có thể thực thi, (3) có chuyên môn — không bắt buộc 'có quan hệ tốt với báo chí'.",
    correctIndices: [3],
    options: [
      {
        text: "They can decide what actions to take.",
        explanation: "Đúng theo giáo trình: thành viên nhóm khủng hoảng cần có thẩm quyền ra quyết định hành động."
      },
      {
        text: "They can carry out the decided actions to take.",
        explanation: "Đúng theo giáo trình: thành viên cần có khả năng trực tiếp triển khai các phương án đã quyết định."
      },
      {
        text: "They can offer expertise or education in the relevant areas.",
        explanation: "Đúng theo giáo trình: thành viên cần đóng góp kiến thức chuyên môn ở các lĩnh vực liên quan."
      },
      {
        text: "They have good relationships with the media.",
        explanation: "Đây là phát biểu KHÔNG thuộc 3 tiêu chí chọn thành viên nhóm truyền thông khủng hoảng trong giáo trình McLean."
      }
    ]
  },
  {
    id: 20,
    topic: "Self-Understanding",
    question: "Self- concept is",
    hint: "Self-concept (khái niệm bản thân) là ý thức và nhận thức của bạn về việc bạn là ai.",
    correctIndices: [2],
    options: [
      {
        text: "your communications skills help you to understand others",
        explanation: "Đây mô tả kỹ năng thấu hiểu người khác, không phải self-concept."
      },
      {
        text: "your opinion",
        explanation: "Ý kiến cá nhân quá hẹp so với định nghĩa khái niệm bản thân."
      },
      {
        text: "your sense of self and awareness of who you are—in many ways.",
        explanation: "Self-concept (khái niệm bản thân) là cảm nhận về cái tôi và nhận thức toàn diện về việc bạn là ai ở nhiều khía cạnh."
      }
    ]
  },
  {
    id: 21,
    topic: "Communication Elements",
    question: "The ......... is the way in which a message or messages travel between source and receiver.\"",
    hint: "Con đường/phương tiện mà thông điệp truyền đi từ người gửi đến người nhận: Kênh (Channel).",
    correctIndices: [0],
    options: [
      {
        text: "Channel",
        explanation: "Channel (kênh truyền thông) là phương thức hoặc con đường mà thông điệp di chuyển từ nguồn phát (source) tới người nhận (receiver)."
      },
      {
        text: "Noise",
        explanation: "Noise (nhiễu) là yếu tố gây cản trở hoặc làm sai lệch thông điệp."
      },
      {
        text: "Environment",
        explanation: "Environment là môi trường vật lý và tâm lý diễn ra giao tiếp."
      },
      {
        text: "Conversation",
        explanation: "Conversation là cuộc hội thoại trao đổi giữa mọi người."
      }
    ]
  },
  {
    id: 22,
    topic: "Communication Barriers",
    question: "..........is what happens when your thoughts occupy your attention while you are hearing, or reading, a message.",
    hint: "Khi suy nghĩ bên trong tâm trí chiếm lấy sự chú ý lúc đang nghe/đọc -> Nhiễu tâm lý (Psychological noise).",
    correctIndices: [0],
    options: [
      {
        text: "Psychological noise",
        explanation: "Psychological noise (nhiễu tâm lý) xảy ra khi các suy nghĩ, lo âu hay định kiến trong đầu chiếm mất sự tập trung khi bạn đang nghe hoặc đọc thông điệp."
      },
      {
        text: "Self-concept",
        explanation: "Self-concept là nhận thức về bản thân."
      },
      {
        text: "Physical noise",
        explanation: "Physical noise là tiếng ồn vật lý từ môi trường bên ngoài (tiếng xe cộ, tiếng nói chuyện...)."
      },
      {
        text: "Stress",
        explanation: "Stress là trạng thái căng thẳng chung, còn thuật ngữ đúng cho sự xao nhãng do suy nghĩ nội tâm là Psychological noise."
      }
    ]
  },
  {
    id: 23,
    topic: "Communication Contexts",
    question: "When you \"talk with yourself\" you are engaged in ____________ communication.",
    hint: "Tự nói chuyện với chính mình là giao tiếp nội tâm (intrapersonal).",
    correctIndices: [1],
    options: [
      {
        text: "interpersonal",
        explanation: "Interpersonal là giao tiếp giữa ít nhất hai người khác nhau."
      },
      {
        text: "intrapersonal",
        explanation: "Khi 'tự đối thoại với chính mình', bạn đang thực hiện intrapersonal communication (giao tiếp nội tâm)."
      },
      {
        text: "group",
        explanation: "Group communication diễn ra trong nhóm 3–8 người."
      },
      {
        text: "mass",
        explanation: "Mass communication là truyền thông đại chúng."
      }
    ]
  },
  {
    id: 24,
    topic: "Culture & Subgroups",
    question: "____________, although also part of the macroculture, are groups with which the macroculture does not agree and with which it has problems communicating.",
    hint: "Các tiểu nhóm (Subgroups) mà nền văn hóa chính thống không đồng thuận và khó giao tiếp cùng.",
    correctIndices: [0],
    options: [
      {
        text: "Subgroups",
        explanation: "Subgroups (tiểu nhóm) tuy thuộc về macroculture nhưng giữ các giá trị/hành vi mà văn hóa chính thống không đồng tình và gặp khó khăn giao tiếp."
      },
      {
        text: "Societies",
        explanation: "Societies là các xã hội lớn nói chung."
      },
      {
        text: "Subcultures",
        explanation: "Subcultures là các tiểu văn hóa vẫn hòa nhập bình thường trong văn hóa lớn."
      },
      {
        text: "Networks",
        explanation: "Networks là mạng lưới quan hệ."
      }
    ]
  },
  {
    id: 25,
    topic: "Cultural Dimensions",
    question: "The ___________ dimension of culture relates to the reality of our environment and the cultural activities of the people.",
    hint: "Chiều kích vật chất (physical dimension) gắn với môi trường tự nhiên và các hoạt động hữu hình.",
    correctIndices: [0],
    options: [
      {
        text: "physical",
        explanation: "Physical dimension (chiều kích vật chất) phản ánh thực tế môi trường sống và các hoạt động văn hóa hữu hình của con người."
      },
      {
        text: "psychological",
        explanation: "Psychological dimension liên quan tới thái độ, niềm tin, kiến thức và giá trị tinh thần."
      },
      {
        text: "language",
        explanation: "Language là hệ thống ngôn ngữ giao tiếp."
      },
      {
        text: "value",
        explanation: "Value là hệ giá trị chuẩn mực."
      }
    ]
  },
  {
    id: 26,
    topic: "Intercultural Communication",
    question: "What is \"the belief that your own cultural background, including ways of analyzing problems, values, beliefs, language, and verbal and nonverbal communication, is correct and superior to others\"?",
    hint: "Niềm tin cho rằng văn hóa của mình là chuẩn mực và cao cấp hơn văn hóa khác: Ethnocentrism.",
    correctIndices: [3],
    options: [
      {
        text: "It is cultural interaction.",
        explanation: "Cultural interaction chỉ là sự giao lưu tương tác văn hóa bình thường."
      },
      {
        text: "It is enculturation.",
        explanation: "Enculturation là quá trình học hỏi văn hóa bản địa của mình từ nhỏ."
      },
      {
        text: "It is acculturation.",
        explanation: "Acculturation là quá trình thích nghi với một nền văn hóa mới."
      },
      {
        text: "It is ethnocentrism.",
        explanation: "Ethnocentrism (chủ nghĩa vị chủng) là niềm tin cho rằng nền tảng văn hóa của bản thân đúng đắn và vượt trội hơn mọi nền văn hóa khác."
      }
    ]
  },
  {
    id: 27,
    topic: "Globalization Theories",
    question: "What is the term which refers to \"the interpenetration of the global and the local, resulting in unique outcomes in different geographic areas\" (Robertson, 2001)?",
    hint: "Sự kết hợp đan xen giữa Toàn cầu (Global) và Địa phương (Local) tạo ra sản phẩm/kết quả độc đáo theo vùng: Glocalization.",
    correctIndices: [0],
    options: [
      {
        text: "It is Glocalization.",
        explanation: "Robertson (2001) định nghĩa Glocalization (toàn cầu bản địa hóa) là sự thâm nhập lẫn nhau giữa yếu tố toàn cầu và địa phương, tạo nên những kết quả đặc thù tại mỗi khu vực."
      },
      {
        text: "It is Globalization.",
        explanation: "Globalization là toàn cầu hóa nói chung, chưa nhấn mạnh vào sự tùy biến theo bản địa."
      },
      {
        text: "It is Grobalization.",
        explanation: "Grobalization (Ritzer) nhấn mạnh sự bành trướng đồng nhất hóa, trái ngược với sự thích ứng địa phương của Glocalization."
      },
      {
        text: "It is Cosmopolitan.",
        explanation: "Cosmopolitan chỉ công dân toàn cầu hoặc tính chất đa văn hóa đô thị."
      }
    ]
  },
  {
    id: 28,
    topic: "Business Writing",
    question: "When you ........... your document, you change one word for another, make subtle changes, and improve it.",
    hint: "Khi chỉnh sửa văn bản để trau chuốt câu chữ và nâng cao chất lượng: Revise.",
    correctIndices: [1],
    options: [
      {
        text: "review",
        explanation: "Review là đọc lại để kiểm tra tổng thể, chưa nhấn mạnh hành động thay đổi từ ngữ cụ thể như revise."
      },
      {
        text: "revise",
        explanation: "Khi revise (chỉnh sửa/hiệu đính) tài liệu, bạn thay thế từ ngữ cho chuẩn xác hơn, điều chỉnh tinh tế và cải thiện chất lượng bài viết."
      },
      {
        text: "writing",
        explanation: "Writing là giai đoạn viết nháp ban đầu."
      },
      {
        text: "reading",
        explanation: "Reading chỉ là hành động đọc văn bản."
      }
    ]
  },
  {
    id: 29,
    topic: "Language Styles",
    question: "............. involves everyday words and expressions in a familiar group context, such as conversations with family or close friends.",
    hint: "Ngôn ngữ thân mật đời thường (Casual language) dùng với gia đình và bạn bè thân thiết.",
    correctIndices: [1],
    options: [
      {
        text: "Colloquial language",
        explanation: "Colloquial language trong giáo trình nhấn mạnh vào khẩu ngữ, tiếng lóng, cụm từ vùng miền hơn so với định nghĩa 'casual language' này."
      },
      {
        text: "Casual language",
        explanation: "Casual language (ngôn ngữ thân mật) sử dụng từ ngữ và cách diễn đạt hằng ngày trong bối cảnh thân quen như trò chuyện cùng gia đình, bạn thân."
      },
      {
        text: "Internal communications",
        explanation: "Internal communications là truyền thông nội bộ công ty."
      },
      {
        text: "External communications",
        explanation: "External communications là truyền thông đối ngoại."
      }
    ]
  },
  {
    id: 30,
    topic: "Language & Misunderstanding",
    question: "Bypassing involves the misunderstanding that occurs when the receiver completely misses the source's intended meaning.",
    hint: "Bypassing xảy ra khi người gửi và người nhận gán nghĩa khác nhau cho cùng một từ nên người nhận hiểu lệch hoàn toàn ý định ban đầu.",
    correctIndices: [0],
    options: [
      {
        text: "True",
        explanation: "Đúng (True)! Bypassing (hiểu lệch nghĩa) là sự hiểu lầm xảy ra khi người nhận bỏ lỡ hoàn toàn ý nghĩa mà người gửi muốn truyền đạt."
      },
      {
        text: "False",
        explanation: "Sai vì định nghĩa trong câu hoàn toàn khớp với khái niệm Bypassing trong giáo trình McLean."
      }
    ]
  },
  {
    id: 31,
    topic: "Media & Presentations",
    question: "Brief statements that zero in on the point of a larger or longer message, are often excised from interviews and articles, and presented apart from the context in which they were originally written or spoken are called ..............",
    hint: "Những phát ngôn ngắn gọn, súc tích được báo chí trích từ các bài phỏng vấn/diễn văn (sound bites).",
    correctIndices: [2],
    options: [
      {
        text: "slogans",
        explanation: "Slogan là khẩu hiệu gắn với thương hiệu hoặc chiến dịch (như 'Just do it!')."
      },
      {
        text: "quotes",
        explanation: "Quotes là các câu danh ngôn/trích dẫn được lưu truyền rộng rãi trong văn hóa."
      },
      {
        text: "sound bites",
        explanation: "Sound bites là những câu nói ngắn gọn đánh trúng trọng tâm một thông điệp dài, thường được cắt trích từ phỏng vấn/bài viết và trình bày tách khỏi ngữ cảnh gốc."
      },
      {
        text: "zingers",
        explanation: "Zingers là câu nói đối đáp nhanh đầy châm biếm hoặc sắc sảo."
      }
    ]
  },
  {
    id: 32,
    topic: "Group Communication",
    question: "A group communication in action around a defined agenda, at a set time, for an established duration is defined as ......",
    hint: "Cuộc họp (a meeting) có chương trình nghị sự (agenda), giờ giấc và thời lượng rõ ràng.",
    correctIndices: [0],
    options: [
      {
        text: "a meeting",
        explanation: "A meeting (cuộc họp) là hoạt động giao tiếp nhóm xoay quanh một chương trình nghị sự xác định, vào thời điểm ấn định và trong khoảng thời gian đã định."
      },
      {
        text: "a report",
        explanation: "Report là tài liệu báo cáo, không phải phiên giao tiếp nhóm."
      },
      {
        text: "a discussion",
        explanation: "Discussion mang tính thảo luận chung, không nhất thiết có agenda và thời lượng cố định."
      },
      {
        text: "a teamwork",
        explanation: "Teamwork là sự phối hợp làm việc nhóm."
      }
    ]
  },
  {
    id: 33,
    topic: "Business Phone Etiquette",
    question: "Which is NOT a main point to consider when you are on a business phone call?",
    hint: "Khi gọi điện công việc, bạn cần nói chậm rãi rõ ràng — KHÔNG phải nói thật to (talk loudly)!",
    correctIndices: [2],
    options: [
      {
        text: "Speak slowly and articulate your words clearly.",
        explanation: "Đây LÀ nguyên tắc đúng giúp đầu dây bên kia nghe rõ từng chữ."
      },
      {
        text: "Use vivid terms to create interest and communicate descriptions.",
        explanation: "Đây LÀ lời khuyên đúng trong giáo trình vì người nghe không thấy hình ảnh trực tiếp."
      },
      {
        text: "Talk loudly so the person on the other end can hear you well.",
        explanation: "Đây là điều KHÔNG đúng! Trong giáo trình McLean, bạn nên nói vừa phải, chậm và rõ chữ — tránh nói oang oang ('talk loudly') gây chói tai và thiếu riêng tư."
      },
      {
        text: "Show consideration for others by keeping your phone conversations private.",
        explanation: "Đây LÀ nguyên tắc lịch sự đúng nơi công sở."
      }
    ]
  },
  {
    id: 34,
    topic: "Media Interviews",
    question: "What are the Interview Preparation Factors for media interviews?",
    hint: "4 yếu tố chuẩn bị phỏng vấn truyền thông: Topic, Location, Format, và Background.",
    correctIndices: [0],
    options: [
      {
        text: "Topic, Location, Format, and Background",
        explanation: "4 yếu tố chuẩn bị phỏng vấn truyền thông theo giáo trình gồm: Chủ đề (Topic), Địa điểm (Location), Định dạng (Format) và Thông tin nền/Bối cảnh (Background)."
      },
      {
        text: "Topic, Time, Format, and Background",
        explanation: "Thiếu Location và thay sai bằng Time."
      },
      {
        text: "Topic, Location, Interviewers, and Background",
        explanation: "Thiếu Format và thay sai bằng Interviewers."
      },
      {
        text: "Topic, Location, Format, and Time",
        explanation: "Thiếu Background và thay sai bằng Time."
      }
    ]
  },
  {
    id: 35,
    topic: "Emphasis Strategies",
    question: "Saying the same word over and over may not seem like an effective strategy, but when used artfully, ___________ can be an effective way to drive home your meaning and help your audience retain it in their memory.",
    hint: "Việc lặp lại khéo léo một từ khóa để khắc sâu ý nghĩa vào trí nhớ khán giả: Repetition.",
    correctIndices: [1],
    options: [
      {
        text: "internal summaries",
        explanation: "Internal summaries là tóm tắt ngắn các ý vừa nêu, không phải việc lặp lại một từ khóa nhiều lần."
      },
      {
        text: "repetition",
        explanation: "Repetition (sự lặp lại) khi sử dụng khéo léo sẽ giúp nhấn mạnh thông điệp và khiến khán giả ghi nhớ sâu sắc."
      },
      {
        text: "signposts (or indicators)",
        explanation: "Signposts là các từ chỉ dẫn cấu trúc như 'First', 'Next', 'Finally'."
      },
      {
        text: "foreshadowing",
        explanation: "Foreshadowing là kỹ thuật báo trước số lượng hoặc nội dung sắp trình bày."
      }
    ]
  },
  {
    id: 36,
    topic: "Emphasis Strategies",
    question: "Suppose you are writing or presenting information on how to assemble a home emergency preparedness kit.\nIf you begin by stating that there are four main items needed for the kit, you are _________ your message and helping your audience to watch or listen for four items.",
    hint: "Báo trước cho khán giả biết sẽ có 4 món đồ để họ chú ý theo dõi: Foreshadowing.",
    correctIndices: [3],
    options: [
      {
        text: "internal summary",
        explanation: "Internal summary dùng để tổng kết ý đã trình bày trước đó."
      },
      {
        text: "repetition",
        explanation: "Repetition là sự lặp lại từ/cụm từ để nhấn mạnh."
      },
      {
        text: "signposts (or indicators)",
        explanation: "Signposts là từ đánh dấu chuyển ý; ví dụ 'home emergency preparedness kit' trong giáo trình minh họa cho kỹ thuật foreshadowing."
      },
      {
        text: "foreshadowing",
        explanation: "Đúng theo nguyên văn giáo trình McLean: nêu trước số lượng 4 món cần chuẩn bị ngay từ đầu là kỹ thuật foreshadowing (báo trước) giúp khán giả dễ theo dõi."
      }
    ]
  },
  {
    id: 37,
    topic: "Language & Style",
    question: "A ............ involves substituting an acceptable word for an offensive, controversial, or unacceptable one that conveys the same or similar meaning.",
    hint: "Uyển ngữ / cách nói giảm nói tránh (Euphemism) — thay từ nặng nề bằng từ nhẹ nhàng dễ chấp nhận hơn.",
    correctIndices: [3],
    options: [
      {
        text: "cliché",
        explanation: "Cliché là lối nói sáo mòn vì bị lặp đi lặp lại quá nhiều lần."
      },
      {
        text: "jargon",
        explanation: "Jargon là thuật ngữ chuyên ngành dùng trong một nghề nghiệp cụ thể."
      },
      {
        text: "slang",
        explanation: "Slang là tiếng lóng thân mật/phi chuẩn."
      },
      {
        text: "euphemism",
        explanation: "Euphemism (uyển ngữ / nói giảm nói tránh) là việc thay một từ gây khó chịu, nhạy cảm bằng từ ngữ lịch sự, dễ chấp nhận hơn nhưng vẫn giữ nghĩa tương đương."
      }
    ]
  },
  {
    id: 38,
    topic: "Language & Style",
    question: "............ is the use of existing or newly invented words to take the place of standard or traditional words with the intent of adding an unconventional, nonstandard, humorous, or rebellious effect. It differs from jargon in that it is used in informal contexts, among friends or members of a certain age group, rather than by professionals in a certain industry.",
    hint: "Tiếng lóng (Slang) dùng giữa bạn bè hoặc một nhóm tuổi trong ngữ cảnh thân mật, khác với biệt ngữ chuyên ngành (jargon).",
    correctIndices: [2],
    options: [
      {
        text: "cliché",
        explanation: "Cliché là cụm từ sáo rỗng cũ kỹ, không phải từ mới sáng tạo mang sắc thái hài hước/nổi loạn."
      },
      {
        text: "Jargon",
        explanation: "Jargon được giới chuyên môn trong một ngành nghề sử dụng, trái với câu mô tả 'rather than by professionals'."
      },
      {
        text: "Slang",
        explanation: "Slang (tiếng lóng) là việc dùng từ có sẵn hoặc tự chế thay cho từ chuẩn mực để tạo hiệu ứng khác lạ, hài hước trong nhóm bạn bè/lứa tuổi."
      },
      {
        text: "Racist language",
        explanation: "Racist language là ngôn ngữ phân biệt chủng tộc, không phải tiếng lóng thân mật nói chung."
      }
    ]
  },
  {
    id: 39,
    topic: "Intercultural Etiquette",
    question: "In Asian countries, a proper handshake is ...........",
    hint: "Ở các nước châu Á, cái bắt tay lịch sự thường nhẹ nhàng (gentle), tránh bóp chặt gây cảm giác hung hăng như kiểu phương Tây.",
    correctIndices: [0],
    options: [
      {
        text: "gentle",
        explanation: "Ở các quốc gia châu Á, một cái bắt tay đúng mực thường nhẹ nhàng (gentle), tránh nắm quá chặt gây cảm giác áp đặt."
      },
      {
        text: "firm",
        explanation: "Firm (chắc, mạnh) là chuẩn bắt tay phổ biến tại Mỹ và phương Tây, không phải chuẩn truyền thống ở châu Á."
      },
      {
        text: "light and quick",
        explanation: "Theo đúng đáp án giáo trình giao tiếp liên văn hóa SSB201 (Chaney & Martin), từ khóa chuẩn mô tả cái bắt tay châu Á là 'gentle' (còn 'light and quick' thường dùng mô tả kiểu Pháp)."
      },
      {
        text: "brusque and firm",
        explanation: "Brusque (cục cằn, đột ngột) và mạnh tay là phong cách bị xem là thô lỗ ở châu Á."
      }
    ]
  },
  {
    id: 40,
    topic: "Intercultural Gift-Giving",
    question: "In the United States, gifts are opened ________________",
    hint: "Khác với nhiều nước Á Đông, tại Mỹ quà thường được mở NGAY TRƯỚC MẶT người tặng (in front of the giver) để thể hiện sự trân trọng!",
    correctIndices: [1],
    options: [
      {
        text: "at the back of the giver.",
        explanation: "Không đúng với văn hóa mở quà của người Mỹ."
      },
      {
        text: "in front of the giver.",
        explanation: "Tại Hoa Kỳ, người nhận thường mở quà ngay trước mặt người tặng (in front of the giver) và bày tỏ niềm vui, lời cảm ơn trực tiếp."
      },
      {
        text: "when the giver is not around.",
        explanation: "Đây là thói quen thường thấy ở một số nước châu Á (để giữ lịch sự, tránh lộ vẻ không hài lòng hoặc so sánh giá trị), không phải ở Mỹ."
      },
      {
        text: "only by bare hands.",
        explanation: "Không phải quy tắc văn hóa liên quan đến thời điểm mở quà."
      }
    ]
  },
  {
    id: 41,
    topic: "Intercultural Communication",
    question: "What may have an impact on the success of intercultural communication encounters?",
    hint: "Vị thế và địa vị xã hội (Position and status) ảnh hưởng lớn đến nghi thức và thành công trong giao tiếp liên văn hóa.",
    correctIndices: [3],
    options: [
      {
        text: "Appearance",
        explanation: "Ngoại hình là yếu tố phụ trợ; theo bộ câu hỏi chuẩn SSB201 (Chaney & Martin), yếu tố trọng tâm được hỏi ở câu này là vị thế và địa vị xã hội."
      },
      {
        text: "Language skills",
        explanation: "Kỹ năng ngôn ngữ giúp giao tiếp rõ hơn, nhưng đáp án chuẩn theo bộ đề SSB201 cho câu hỏi này là 'Position and status'."
      },
      {
        text: "Family status",
        explanation: "Tình trạng gia đình không phải yếu tố quyết định trong giao tiếp kinh doanh quốc tế."
      },
      {
        text: "Position and status",
        explanation: "Theo giáo trình SSB201, vị trí và địa vị (Position and status) tác động mạnh mẽ đến cách xưng hô, thứ tự phát biểu và sự thành công của các cuộc gặp gỡ liên văn hóa."
      }
    ]
  },
  {
    id: 42,
    topic: "Business Writing & Email",
    question: "Why should employees be very careful about the e-mail messages they send?",
    hint: "Công ty có thể phải chịu trách nhiệm pháp lý nếu thông tin từ email bị rò rỉ ra không gian mạng (cyberspace).",
    correctIndices: [1],
    options: [
      {
        text: "Because an e-mail is more informal than a letter or memorandum.",
        explanation: "Không phải lý do rủi ro pháp lý chính."
      },
      {
        text: "Because a firm may be liable for information leaked into cyberspace.",
        explanation: "Nhân viên cần rất cẩn trọng khi gửi email vì doanh nghiệp có thể phải chịu trách nhiệm pháp lý (liable) đối với những thông tin rò rỉ ra không gian mạng."
      },
      {
        text: "Because an e-mail is more formal than a letter or memorandum.",
        explanation: "Sai vì email thường ít trang trọng hơn thư chính thức hoặc biên bản."
      },
      {
        text: "Because an e-mail may have the employees' names on it.",
        explanation: "Tên nhân viên chỉ là thông tin người gửi cơ bản."
      }
    ]
  },
  {
    id: 43,
    topic: "Rhetorical Appeals",
    question: "Pathos means",
    hint: "Pathos đại diện cho cảm xúc, niềm đam mê và sự nhiệt huyết (passion and enthusiasm).",
    correctIndices: [2],
    options: [
      {
        text: "credibility",
        explanation: "Credibility là nghĩa của Ethos."
      },
      {
        text: "logic of your thoughts",
        explanation: "Logic of your thoughts là nghĩa của Logos."
      },
      {
        text: "passion and enthusiasm",
        explanation: "Pathos biểu thị sự đam mê, nhiệt huyết và sự kết nối cảm xúc (passion and enthusiasm) với khán giả."
      },
      {
        text: "information",
        explanation: "Information là thông tin nói chung."
      }
    ]
  },
  {
    id: 44,
    topic: "Paragraph Structure",
    question: "The ............ states the main thesis, purpose, or topic of the paragraph; it defines the subject matter to be addressed in that paragraph.",
    hint: "Câu chủ đề (topic sentence) giới thiệu ý chính của đoạn văn.",
    correctIndices: [1],
    options: [
      {
        text: "body sentence",
        explanation: "Body sentences là các câu thân đoạn triển khai chi tiết ý chính."
      },
      {
        text: "topic sentence",
        explanation: "Topic sentence (câu chủ đề) nêu lên luận điểm chính, mục đích hoặc chủ đề sẽ được trình bày trong đoạn văn đó."
      },
      {
        text: "conclusion sentence",
        explanation: "Conclusion sentence là câu kết thúc đoạn văn."
      }
    ]
  },
  {
    id: 45,
    topic: "Sentence Types",
    question: "Exclamatory sentence",
    hint: "Câu cảm thán (Exclamatory sentence) dùng để bộc lộ cảm xúc mạnh mẽ (express a strong emotion)!",
    correctIndices: [3],
    options: [
      {
        text: "make a statement.",
        explanation: "Đây là chức năng của Declarative sentence (câu trần thuật)."
      },
      {
        text: "ask a question.",
        explanation: "Đây là chức năng của Interrogative sentence (câu hỏi)."
      },
      {
        text: "convey a command.",
        explanation: "Đây là chức năng của Imperative sentence (câu mệnh lệnh)."
      },
      {
        text: "express a strong emotion.",
        explanation: "Exclamatory sentence (câu cảm thán) dùng để diễn tả cảm xúc mạnh mẽ (như ngạc nhiên, vui sướng, phẫn nộ...)."
      }
    ]
  },
  {
    id: 46,
    topic: "Paragraph Structure",
    question: "The ............... brings the paragraph to a close; it may do this in any of several ways. It may reinforce the paragraph's main point, summarize the relationships among the body sentences, and/or serve as a transition to the next paragraph.",
    hint: "Câu kết đoạn (conclusion sentence) khép lại đoạn văn, nhấn mạnh lại ý chính hoặc mở đường sang đoạn tiếp theo.",
    correctIndices: [2],
    options: [
      {
        text: "body sentence",
        explanation: "Body sentence nằm ở phần thân đoạn để giải thích và dẫn chứng."
      },
      {
        text: "topic sentence",
        explanation: "Topic sentence nằm ở đầu đoạn để giới thiệu chủ đề chính."
      },
      {
        text: "conclusion sentence",
        explanation: "Conclusion sentence (câu kết đoạn) khép lại đoạn văn bằng cách củng cố ý chính, tóm tắt liên kết giữa các câu thân đoạn hoặc chuyển tiếp sang đoạn kế tiếp."
      }
    ]
  },
  {
    id: 47,
    topic: "Communication Climates",
    question: "_____________ often produce(s) a defensive communication climate, inhibit listening, and allow for little room for collaboration.",
    hint: "Chiến lược làm mất thể diện / hạ thấp người khác (Face-detracting strategies) gây tâm lý phòng thủ và cản trở hợp tác.",
    correctIndices: [2],
    options: [
      {
        text: "Face-saving strategies",
        explanation: "Face-saving strategies giúp giữ thể diện cho đối phương, tạo môi trường giao tiếp cởi mở và tôn trọng."
      },
      {
        text: "Avoidance strategy",
        explanation: "Avoidance là chiến lược né tránh xung đột."
      },
      {
        text: "Face-detracting strategies",
        explanation: "Face-detracting strategies (chiến lược làm tổn hại thể diện) thường tạo ra bầu không khí giao tiếp phòng thủ, kìm hãm việc lắng nghe và làm mất cơ hội hợp tác."
      },
      {
        text: "Supportive communication",
        explanation: "Supportive communication giúp xây dựng niềm tin và lắng nghe tích cực."
      }
    ]
  },
  {
    id: 48,
    topic: "Communication Contexts",
    question: "In intrapersonal communication, with whom do we communicate?",
    hint: "'Intra-' nghĩa là bên trong — giao tiếp với chính bản thân mình (ourselves).",
    correctIndices: [1],
    options: [
      {
        text: "We communicate with others.",
        explanation: "Giao tiếp với người khác là Interpersonal communication."
      },
      {
        text: "We communicate with ourselves.",
        explanation: "Trong intrapersonal communication (giao tiếp nội tâm), chúng ta giao tiếp và suy ngẫm với chính bản thân mình."
      },
      {
        text: "We communicate through the intranet.",
        explanation: "Intranet là mạng nội bộ doanh nghiệp, không liên quan đến khái niệm tâm lý giao tiếp này."
      },
      {
        text: "We communicate with the customers.",
        explanation: "Giao tiếp với khách hàng là giao tiếp đối ngoại/liên cá nhân."
      }
    ]
  },
  {
    id: 49,
    topic: "Listening Styles",
    question: "_____________listening involves listening to both the literal and implied meanings within a message.",
    hint: "Lắng nghe thấu cảm (Empathetic listening) giúp nắm bắt cả nghĩa đen lẫn hàm ý cảm xúc bên trong.",
    correctIndices: [1],
    options: [
      {
        text: "Supportive",
        explanation: "Supportive chỉ thái độ ủng hộ nói chung, không phải thuật ngữ chuẩn trong câu định nghĩa này."
      },
      {
        text: "Empathetic",
        explanation: "Empathetic listening (lắng nghe thấu cảm) đòi hỏi người nghe tiếp nhận cả nghĩa đen (literal) và ý nghĩa ngầm ẩn, cảm xúc (implied meanings) của thông điệp."
      },
      {
        text: "Defensive",
        explanation: "Defensive listening là lắng nghe trong tâm thế phòng thủ, dễ suy diễn tiêu cực."
      },
      {
        text: "Passive",
        explanation: "Passive listening là nghe thụ động, thiếu sự tập trung thấu hiểu."
      }
    ]
  },
  {
    id: 50,
    topic: "Conflict Management",
    question: "Which statement is NOT correct?",
    hint: "Xung đột mang tính phổ quát (universal) ở mọi nơi có tương tác con người — nói 'Conflict is not universal' là SAI!",
    correctIndices: [0],
    options: [
      {
        text: "Conflict is not universal.",
        explanation: "Đây là phát biểu SAI (đáp án cần chọn)! Xung đột mang tính phổ quát (universal), xuất hiện ở mọi nhóm người và tổ chức."
      },
      {
        text: "Conflict is associated with incompatible goals.",
        explanation: "Phát biểu này ĐÚNG: xung đột thường gắn liền với các mục tiêu không tương thích nhau."
      },
      {
        text: "Conflict is associated with scarce resources.",
        explanation: "Phát biểu này ĐÚNG: sự khan hiếm nguồn lực (tiền bạc, thời gian, nhân lực) thường gây ra xung đột."
      },
      {
        text: "Conflict is associated with interference.",
        explanation: "Phát biểu này ĐÚNG: xung đột xảy ra khi một bên cảm thấy bên kia cản trở mình đạt mục tiêu."
      }
    ]
  }
];
