// Dữ liệu câu hỏi SSB201 - Quiz 1 (trích xuất từ thư mục Quiz1: Q1.webp - Q50.webp)
// Câu hỏi & đáp án giữ nguyên tiếng Anh; chủ đề, gợi ý (hint) và lời giải thích từng đáp án bằng tiếng Việt.

const QUIZ_1_QUESTIONS = [
  {
    id: 1,
    topic: "Perception & Attention",
    question: "................. involves focusing on one stimulus, like the image of an attractive classmate, and tuning out a competing stimulus, like the instructor's voice.",
    hint: "Đây là quá trình não bộ 'chọn lọc' để tập trung vào một kích thích nhất định và bỏ qua các kích thích khác xung quanh.",
    correctIndices: [0],
    options: [
      {
        text: "Selective attention",
        explanation: "Selective attention (sự chú ý có chọn lọc) là việc tập trung vào một kích thích (ví dụ: người bạn cùng lớp) và lọc bỏ các kích thích cạnh tranh khác (ví dụ: giọng giảng viên)."
      },
      {
        text: "Internal stimuli",
        explanation: "Internal stimuli là các kích thích xuất phát từ bên trong bản thân (như cảm xúc, suy nghĩ, cơn đói), không phải hành động tập trung chọn lọc vào một tác nhân."
      },
      {
        text: "External stimuli",
        explanation: "External stimuli là các tác nhân kích thích từ môi trường bên ngoài (âm thanh, hình ảnh...), chưa mô tả hành động chọn lọc và phớt lờ kích thích khác."
      }
    ]
  },
  {
    id: 2,
    topic: "Perception & Attention",
    question: ".................involve stimulation from outside one's self, such as the image of the attractive classmate or the sound of the instructor's voice.",
    hint: "Từ khóa trong câu là 'from outside one's self' (từ bên ngoài bản thân).",
    correctIndices: [1],
    options: [
      {
        text: "Internal stimuli",
        explanation: "Internal stimuli là kích thích bên trong cơ thể hoặc tâm trí, trái nghĩa với 'from outside one's self'."
      },
      {
        text: "External stimuli",
        explanation: "External stimuli (kích thích bên ngoài) bao gồm mọi tác nhân từ môi trường ngoài tác động vào giác quan như hình ảnh người bạn hay âm thanh giọng nói."
      },
      {
        text: "Selective attention",
        explanation: "Selective attention là cơ chế chọn lọc sự chú ý, không phải bản thân các nguồn kích thích từ bên ngoài."
      },
      {
        text: "None of the above",
        explanation: "Không chính xác vì đáp án B (External stimuli) hoàn toàn khớp với định nghĩa trong câu."
      }
    ]
  },
  {
    id: 3,
    topic: "Listening & Negative News",
    question: "\"Keep silent while you let the other person \"speak his piece.\" If you are reading, make an effort to understand and digest the news without mental interruptions.\"\nHere is an example of .....",
    hint: "Hãy chú ý cụm 'Keep silent while you let the other person speak' và 'without mental interruptions'.",
    correctIndices: [1],
    options: [
      {
        text: "take turn",
        explanation: "Take turn là thay phiên nhau nói; ở đây đoạn trích nhấn mạnh việc giữ im lặng hoàn toàn và không ngắt lời cả bằng lời lẫn trong suy nghĩ."
      },
      {
        text: "don't interrupt",
        explanation: "Don't interrupt (không ngắt lời) khuyến khích giữ im lặng để đối phương trình bày hết ý kiến và tiếp nhận thông tin mà không tự ngắt mạch suy nghĩ."
      },
      {
        text: "set aside a special time",
        explanation: "Set aside a special time là dành một khoảng thời gian riêng tư không bị xao nhãng để trao đổi, không phải hành động giữ im lặng khi đối phương đang nói."
      }
    ]
  },
  {
    id: 4,
    topic: "Self-Understanding",
    question: "Your ........... is how you feel about yourself; your feelings of self-worth, self-acceptance, and self-respect.",
    hint: "Cụm từ chỉ 'lòng tự trọng / sự tự đánh giá giá trị bản thân' (feelings of self-worth, self-acceptance, self-respect).",
    correctIndices: [2],
    options: [
      {
        text: "physical characteristics",
        explanation: "Physical characteristics chỉ các đặc điểm ngoại hình, thể chất bên ngoài, không phải cảm nhận về giá trị bản thân."
      },
      {
        text: "self-image",
        explanation: "Self-image là hình ảnh/cách bạn nhìn nhận hoặc hình dung về bản thân (trông mình ra sao, tính cách thế nào), thiên về nhận thức hơn là cảm xúc về giá trị."
      },
      {
        text: "self-esteem",
        explanation: "Self-esteem (lòng tự trọng) chính là cách bạn cảm nhận về bản thân, bao gồm cảm giác về giá trị bản thân (self-worth), sự chấp nhận (self-acceptance) và tôn trọng bản thân (self-respect)."
      },
      {
        text: "self-concept",
        explanation: "Self-concept là khái niệm tổng thể về bản thân (bao gồm niềm tin, thái độ, giá trị), rộng hơn định nghĩa cụ thể về cảm xúc tự trọng trong câu hỏi."
      }
    ]
  },
  {
    id: 5,
    topic: "Public Speaking",
    question: "\"Speech to persuade\" means",
    hint: "Persuade nghĩa là thuyết phục — mục tiêu là tác động để thay đổi thái độ, niềm tin hoặc giá trị của người nghe.",
    correctIndices: [2],
    options: [
      {
        text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise",
        explanation: "Đây là định nghĩa của 'Speech to inform' (bài nói cung cấp thông tin/kiến thức), chưa nhằm mục đích thuyết phục."
      },
      {
        text: "to show the audience how to use, operate, or do something.",
        explanation: "Đây là định nghĩa của 'Speech to demonstrate' (bài nói hướng dẫn thực hành/cách làm)."
      },
      {
        text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.",
        explanation: "Speech to persuade (bài nói thuyết phục) nhằm gây ảnh hưởng đến khán giả thông qua các lập luận để thay đổi thái độ, niềm tin hoặc giá trị của họ."
      },
      {
        text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.",
        explanation: "Đây là định nghĩa của 'Speech to entertain' (bài nói giải trí/tạo không khí vui vẻ)."
      }
    ]
  },
  {
    id: 6,
    topic: "Public Speaking",
    question: "A thesis statement should be.........",
    hint: "Câu luận điểm trung tâm của bài nói cần ngắn gọn nhưng cụ thể (short, specific).",
    correctIndices: [2],
    options: [
      {
        text: "a specific sentence capturing the central idea of your speech.",
        explanation: "Chưa đầy đủ so với chuẩn giáo trình vì thiếu yếu tố 'short' (ngắn gọn) giúp khán giả dễ nắm bắt ngay."
      },
      {
        text: "a long, specific sentence capturing the central idea of your speech.",
        explanation: "Sai vì thesis statement không nên dài dòng (long); câu quá dài sẽ làm người nghe khó nhớ ý chính."
      },
      {
        text: "a short, specific sentence capturing the central idea of your speech.",
        explanation: "Theo lý thuyết trình bày hiệu quả, thesis statement phải là một câu ngắn gọn, cụ thể (a short, specific sentence) nắm bắt trọn vẹn ý tưởng trung tâm của bài nói."
      }
    ]
  },
  {
    id: 7,
    topic: "Intercultural Communication",
    question: ".............. defined as generalizations about a group of people that oversimplify their culture (Rogers, E., and Steinfatt, T., 1999), can be one significant barrier to effective intercultural communication.",
    hint: "Sự khái quát hóa quá mức về một nhóm người (đóng khung, rập khuôn) gọi là gì?",
    correctIndices: [0],
    options: [
      {
        text: "Stereotypes",
        explanation: "Stereotypes (khuôn mẫu/định kiến rập khuôn) được Rogers & Steinfatt (1999) định nghĩa là những khái quát hóa về một nhóm người làm đơn giản hóa quá mức nền văn hóa của họ."
      },
      {
        text: "Prejudice",
        explanation: "Prejudice là thành kiến mang tính đánh giá/thái độ tiêu cực (thường không dựa trên trải nghiệm thực tế), khác với định nghĩa 'khái quát hóa đơn giản hóa văn hóa' của Rogers & Steinfatt."
      },
      {
        text: "Ethnocentrism",
        explanation: "Ethnocentrism (chủ nghĩa vị chủng) là niềm tin cho rằng văn hóa của mình vượt trội hơn và lấy văn hóa mình làm chuẩn để phán xét văn hóa khác."
      },
      {
        text: "All answers are wrong",
        explanation: "Không chính xác vì đáp án A (Stereotypes) là trích dẫn nguyên văn từ tài liệu."
      }
    ]
  },
  {
    id: 8,
    topic: "Design Thinking",
    question: "What is called \"methodology for creative problem solving. You can use it to inform your own teaching practice, or you can teach it to your students as a framework for real-world projects.\"",
    hint: "Đây là phương pháp luận giải quyết vấn đề sáng tạo gồm 5 bước: Empathize, Define, Ideate, Prototype, Test.",
    correctIndices: [1],
    options: [
      {
        text: "Brain storming",
        explanation: "Brainstorming chỉ là một kỹ thuật động não tạo ý tưởng (nằm trong bước Ideate), không phải cả một phương pháp luận tổng thể."
      },
      {
        text: "Design thinking",
        explanation: "Design Thinking (Tư duy thiết kế) là phương pháp luận giải quyết vấn đề sáng tạo lấy con người làm trung tâm, thường dùng như một khung hướng dẫn cho các dự án thực tế."
      },
      {
        text: "Eisenhower Matrix",
        explanation: "Ma trận Eisenhower là công cụ quản lý thời gian (phân loại công việc theo mức độ khẩn cấp và quan trọng), không phải phương pháp giải quyết vấn đề sáng tạo."
      },
      {
        text: "SMART",
        explanation: "SMART là bộ tiêu chí đặt mục tiêu (Specific, Measurable, Achievable, Relevant, Time-bound), không phải phương pháp Design Thinking."
      }
    ]
  },
  {
    id: 9,
    topic: "Design Thinking",
    question: "................... is the foundation of a human-centered design process.",
    hint: "Bước đầu tiên và là nền tảng của quy trình thiết kế lấy con người làm trung tâm: sự thấu cảm.",
    correctIndices: [0],
    options: [
      {
        text: "Empathy",
        explanation: "Empathy (sự thấu cảm) là nền tảng cốt lõi của quy trình thiết kế lấy con người làm trung tâm (human-centered design), giúp hiểu sâu sắc người dùng."
      },
      {
        text: "Observe",
        explanation: "Observe (quan sát) chỉ là một trong các hành động/cách thức để thực hiện bước Empathize, không phải toàn bộ nền tảng."
      },
      {
        text: "Engage",
        explanation: "Engage (tương tác/phỏng vấn) cũng chỉ là một hoạt động nhỏ trong giai đoạn Empathize."
      },
      {
        text: "Immerse",
        explanation: "Immerse (nhập vai/trải nghiệm trực tiếp) là một kỹ thuật thuộc giai đoạn Empathize, không phải tên nền tảng chính."
      }
    ]
  },
  {
    id: 10,
    topic: "Design Thinking",
    question: "........... is the mode during your design process in which you focus on idea generation.",
    hint: "Giai đoạn tập trung vào việc phát sinh ý tưởng (idea generation) trong Design Thinking.",
    correctIndices: [0],
    options: [
      {
        text: "Ideate",
        explanation: "Ideate (Lên ý tưởng) là giai đoạn trong Design Thinking tập trung hoàn toàn vào việc tạo ra thật nhiều ý tưởng (idea generation) để giải quyết vấn đề."
      },
      {
        text: "Empathize",
        explanation: "Empathize là giai đoạn tìm hiểu và thấu cảm người dùng, chưa phải giai đoạn phát triển ý tưởng giải pháp."
      },
      {
        text: "Define",
        explanation: "Define là giai đoạn tổng hợp thông tin từ Empathize để xác định rõ vấn đề cốt lõi cần giải quyết."
      },
      {
        text: "Test",
        explanation: "Test là giai đoạn thử nghiệm mẫu thử (prototype) với người dùng để thu thập phản hồi."
      }
    ]
  },
  {
    id: 11,
    topic: "Design Thinking",
    question: "............ mode is when you unpack and synthesize your empathy findings into compelling needs and insights, and scope a specific and meaningful challenge.",
    hint: "Giai đoạn tổng hợp các phát hiện từ bước thấu cảm (empathy findings) để xác định rõ vấn đề/thách thức cụ thể.",
    correctIndices: [0],
    options: [
      {
        text: "Define",
        explanation: "Define (Xác định vấn đề) là bước phân tích và tổng hợp những gì thu được từ giai đoạn Empathize thành nhu cầu (needs), insight và phát biểu vấn đề cụ thể."
      },
      {
        text: "Empathize",
        explanation: "Empathize là bước thu thập dữ liệu ban đầu bằng cách quan sát và lắng nghe người dùng, chưa phải bước tổng hợp định nghĩa vấn đề."
      },
      {
        text: "Test",
        explanation: "Test là bước kiểm thử sản phẩm mẫu với người dùng ở cuối quy trình."
      },
      {
        text: "Ideate",
        explanation: "Ideate là bước động não tạo ý tưởng sau khi đã xác định xong vấn đề ở bước Define."
      }
    ]
  },
  {
    id: 12,
    topic: "Intercultural Business",
    question: "Learning the customs of the country with whom you plan to do business shows respect and conveys a sincere commitment to developing ____________________ (Stoller, 2007).",
    hint: "Đang nói về việc hợp tác kinh doanh (do business) nên mối quan hệ hướng tới là 'successful business relationship'.",
    correctIndices: [1],
    options: [
      {
        text: "a profitable personal relationship",
        explanation: "Không chính xác vì ngữ cảnh kinh doanh hướng đến 'business relationship', không gọi là 'profitable personal relationship'."
      },
      {
        text: "a successful business relationship",
        explanation: "Theo Stoller (2007), tìm hiểu phong tục của quốc gia bạn dự định hợp tác thể hiện sự tôn trọng và cam kết chân thành nhằm xây dựng một mối quan hệ kinh doanh thành công (a successful business relationship)."
      },
      {
        text: "a successful personal relationship",
        explanation: "Sai trọng tâm vì câu hỏi đề cập đến 'plan to do business' (hợp tác kinh doanh), không phải quan hệ cá nhân thuần túy."
      },
      {
        text: "a profitable business relationship",
        explanation: "Từ chính xác trong trích dẫn của Stoller (2007) là 'successful' (thành công bền vững), không phải 'profitable'."
      }
    ]
  },
  {
    id: 13,
    topic: "Intercultural Business",
    question: "On a business trip, why should you determine what attire is customary in the countries you visit?",
    hint: "Trang phục phù hợp văn hóa giúp tăng hoặc làm mất đi yếu tố quan trọng nào trong kinh doanh — uy tín/độ tin cậy (credibility)?",
    correctIndices: [2],
    options: [
      {
        text: "Because clothes can make you look professional.",
        explanation: "Chưa đúng ý trọng tâm nhất trong giáo trình: ăn mặc sai chuẩn văn hóa địa phương có thể gây phản cảm dù ở nước mình trông rất chuyên nghiệp."
      },
      {
        text: "Because clothes can make you feel confident.",
        explanation: "Cảm giác tự tin là yếu tố cá nhân, chưa phản ánh đúng tác động giao tiếp liên văn hóa được nhấn mạnh."
      },
      {
        text: "Because clothes can enhance or destroy your credibility.",
        explanation: "Giáo trình nhấn mạnh: xác định trang phục phù hợp phong tục nước sở tại là cực kỳ quan trọng vì trang phục có thể nâng cao hoặc phá hủy uy tín (credibility) của bạn."
      },
      {
        text: "Because clothes can make you look beautiful/handsome.",
        explanation: "Vẻ đẹp ngoại hình không phải lý do chính trong nghi thức công tác quốc tế."
      }
    ]
  },
  {
    id: 14,
    topic: "Intercultural Communication",
    question: "............. involves a person's conduct or deportment and is influenced by culture.",
    hint: "Từ tiếng Anh đồng nghĩa với 'conduct or deportment' (cung cách, tác phong, cách cư xử).",
    correctIndices: [1],
    options: [
      {
        text: "Belief",
        explanation: "Belief là niềm tin về điều đúng/sai hoặc có thật, không phải cách cư xử/tác phong bên ngoài."
      },
      {
        text: "Demeanor",
        explanation: "Demeanor (tác phong / thái độ ứng xử bên ngoài) liên quan trực tiếp đến cách hành xử, cử chỉ (conduct or deportment) của một người và chịu ảnh hưởng mạnh bởi văn hóa."
      },
      {
        text: "Attitude",
        explanation: "Attitude là thái độ/khuynh hướng tâm lý bên trong đối với một sự việc, khác với định nghĩa 'conduct or deportment' của demeanor."
      },
      {
        text: "Perception",
        explanation: "Perception là quá trình nhận thức/cảm nhận thông tin qua giác quan, không phải tác phong cư xử."
      }
    ]
  },
  {
    id: 15,
    topic: "Intercultural Communication",
    question: "Any inquiries in the United States about one's family are brief; for example, \"How is your wife?\" is answered with ____________",
    hint: "Tại Mỹ, câu hỏi thăm gia đình trong giao tiếp xã giao/công việc thường rất ngắn gọn ('brief'), nên câu trả lời cũng ngắn gọn lịch sự.",
    correctIndices: [2],
    options: [
      {
        text: "\"Oh, she is not very good. She's having a cold.\"",
        explanation: "Quá chi tiết về tình trạng sức khỏe riêng tư; văn hóa giao tiếp công sở tại Mỹ xem những câu hỏi này là chào hỏi xã giao ngắn gọn."
      },
      {
        text: "\"Well, she's very busy with our children and she takes care of our home.\"",
        explanation: "Kể lể quá dài dòng về chuyện gia đình, không đúng với đặc điểm 'brief' (ngắn gọn) ở Mỹ."
      },
      {
        text: "\"Fine, thanks.\"",
        explanation: "Chính xác! Ở Mỹ, các câu hỏi về gia đình thường chỉ mang tính xã giao ngắn gọn, nên câu trả lời chuẩn mực và ngắn gọn là \"Fine, thanks.\""
      },
      {
        text: "\"Well, I guess she's doing fine. She's 45 years old now and she writes a lot as she's a writer.\"",
        explanation: "Tiết lộ quá nhiều thông tin cá nhân (tuổi tác, nghề nghiệp) không cần thiết cho một câu hỏi xã giao."
      }
    ]
  },
  {
    id: 16,
    topic: "Crisis Communication",
    question: "What is NOT a key type of information during an emergency (Mallet, L., Vaught, C., and Brinch, M., 1999)?",
    hint: "Trong tình huống khẩn cấp tại hiện trường, thông tin cốt lõi tập trung vào ứng cứu, nguồn lực và vị trí mọi người — không phải việc đã lên TV hay chưa.",
    correctIndices: [2],
    options: [
      {
        text: "Has a response started?",
        explanation: "Đây LÀ một trong các thông tin trọng yếu khi có sự cố khẩn cấp (việc ứng phó đã bắt đầu chưa)."
      },
      {
        text: "What resources are on-scene?",
        explanation: "Đây LÀ thông tin trọng yếu để điều phối (hiện trường đang có những nguồn lực/trang thiết bị nào)."
      },
      {
        text: "Has it been reported on television breaking news?",
        explanation: "Đúng là đáp án KHÔNG phải thông tin cốt lõi trong ứng phó khẩn cấp theo Mallet et al. (1999); việc truyền hình đưa tin không phải ưu tiên điều hành khẩn cấp."
      },
      {
        text: "Is everyone's location known?",
        explanation: "Đây LÀ thông tin tối quan trọng để đảm bảo an toàn tính mạng (đã nắm được vị trí của tất cả mọi người chưa)."
      }
    ]
  },
  {
    id: 17,
    topic: "Negative News Message",
    question: "The first part of a negative news message, verbal or written, involving neutral or positive information, is called ............",
    hint: "Phần 'đệm' mở đầu bằng thông tin tích cực hoặc trung tính trước khi đưa ra tin xấu.",
    correctIndices: [0],
    options: [
      {
        text: "buffer or cushion",
        explanation: "Buffer or cushion (lớp đệm) là phần đầu tiên của thông điệp tin xấu, dùng thông tin trung tính hoặc tích cực để giảm bớt tác động tiêu cực cho người nhận."
      },
      {
        text: "explanation",
        explanation: "Explanation (lời giải thích) là phần thứ hai giải thích lý do dẫn đến tin xấu, nằm sau buffer."
      },
      {
        text: "negative news",
        explanation: "Negative news (tin xấu) là phần truyền đạt trực tiếp thông tin bất lợi, nằm ở phần giữa sau khi đã có buffer và explanation."
      },
      {
        text: "redirect",
        explanation: "Redirect (chuyển hướng) là phần cuối cùng nhằm chuyển sự chú ý sang giải pháp thay thế hoặc kết thúc thiện chí."
      }
    ]
  },
  {
    id: 18,
    topic: "Negative News Message",
    question: "Which is NOT correct, when communicating bad news, to avoid legal problems?",
    hint: "Để tránh rắc rối pháp lý, ta cần tránh ngôn ngữ xúc phạm ('abusive'), chứ không phải tránh ngôn ngữ tích cực ('positive')!",
    correctIndices: [0],
    options: [
      {
        text: "Avoid positive language or behavior.",
        explanation: "Đây là phát biểu SAI (chính là đáp án cần chọn). Nguyên tắc đúng là 'Avoid abusive language or behavior' (tránh ngôn ngữ/hành vi lăng mạ, xúc phạm), không phải tránh ngôn ngữ tích cực!"
      },
      {
        text: "Avoid contradictions and absolutes.",
        explanation: "Đây là nguyên tắc ĐÚNG khi truyền đạt tin xấu để tránh mâu thuẫn hoặc cam kết tuyệt đối dễ bị kiện tụng."
      },
      {
        text: "Avoid confusion or misinterpretation.",
        explanation: "Đây là nguyên tắc ĐÚNG nhằm đảm bảo thông điệp rõ ràng, không gây hiểu lầm về mặt pháp lý."
      },
      {
        text: "Maintain respect and privacy.",
        explanation: "Đây là nguyên tắc ĐÚNG để bảo vệ quyền riêng tư và tôn trọng nhân phẩm người nhận, tránh vi phạm pháp luật."
      }
    ]
  },
  {
    id: 19,
    topic: "Negative News Message",
    question: "In a negative news message, the beginning sentences \"Thank you for your order. We appreciate your interest in our product.\" can be an example of ____________________",
    hint: "Lời cảm ơn mở đầu đầy thiện chí và trung tính trước khi báo hết hàng/từ chối đơn hàng thuộc phần nào?",
    correctIndices: [0],
    options: [
      {
        text: "buffer or cushion",
        explanation: "Câu cảm ơn mở đầu mang tính tích cực/lịch sự này chính là ví dụ điển hình của phần Buffer or cushion (phần đệm) trong cấu trúc thông điệp tin xấu."
      },
      {
        text: "redirect",
        explanation: "Redirect dùng ở cuối thông điệp để gợi ý hướng giải quyết tiếp theo hoặc duy trì quan hệ khách hàng."
      },
      {
        text: "negative news",
        explanation: "Câu này chưa hề đưa ra thông tin xấu hay lời từ chối nào nên không phải phần negative news."
      },
      {
        text: "explanation",
        explanation: "Explanation là phần giải thích nguyên nhân khách quan của vấn đề, không phải câu chào cảm ơn mở đầu."
      }
    ]
  },
  {
    id: 20,
    topic: "Communication Models",
    question: "Two Models of Communication include",
    hint: "Hai mô hình giao tiếp cơ bản trong giáo trình Business Communication for Success là mô hình tương tác hai chiều (transactional) và mô hình kiến tạo (constructivist).",
    correctIndices: [0],
    options: [
      {
        text: "transactional process + constructivist model",
        explanation: "Chính xác! Chương 1 giáo trình trình bày hai mô hình giao tiếp gồm Transactional Model (quá trình giao dịch/tương tác đồng thời) và Constructivist Model (mô hình kiến tạo ý nghĩa chung)."
      },
      {
        text: "transactional process + informational model",
        explanation: "Không chính xác vì giáo trình không ghép 'informational model' thành cặp hai mô hình giao tiếp chuẩn."
      },
      {
        text: "constructivist model + informational model",
        explanation: "Không chính xác vì thiếu 'transactional process' và thay nhầm bằng 'informational model'."
      },
      {
        text: "No correct answers",
        explanation: "Sai vì đáp án A là tổ hợp chính xác."
      }
    ]
  },
  {
    id: 21,
    topic: "Organizational Communication",
    question: "Which of the following is a tangible benefit of effective communication in an organization?",
    hint: "Giao tiếp hiệu quả giúp giải quyết vấn đề nhanh hơn, tăng năng suất và cải thiện phản hồi từ nhân viên lẫn cấp trên.",
    correctIndices: [3],
    options: [
      {
        text: "Faster problem solving",
        explanation: "Đúng nhưng chưa đủ, vì các lựa chọn B và C cũng là lợi ích hữu hình của giao tiếp hiệu quả."
      },
      {
        text: "Increased productivity",
        explanation: "Đúng nhưng chưa đủ, vì A và C cũng đúng."
      },
      {
        text: "Improved response from employees and supervisors",
        explanation: "Đúng nhưng chưa đủ, vì A và B cũng là lợi ích cụ thể trong tổ chức."
      },
      {
        text: "All of the above",
        explanation: "Cả 3 ý trên (giải quyết vấn đề nhanh hơn, tăng năng suất và cải thiện sự phối hợp phản hồi giữa nhân viên - quản lý) đều là lợi ích rõ rệt của giao tiếp hiệu quả."
      }
    ]
  },
  {
    id: 22,
    topic: "Communication Contexts",
    question: "Group communication is generally defined as involving",
    hint: "Giao tiếp nhóm (Group communication) trong giáo trình thường được định nghĩa từ 3 đến 8 người.",
    correctIndices: [3],
    options: [
      {
        text: "3-5 people",
        explanation: "Khoảng 3-5 người hẹp hơn so với định nghĩa chuẩn trong giáo trình (3 đến 8 người)."
      },
      {
        text: "8-10 people",
        explanation: "8-10 người thường vượt quá quy mô giao tiếp nhóm nhỏ tiêu chuẩn (dễ chuyển sang giao tiếp đại chúng/công chúng)."
      },
      {
        text: "2-5 people",
        explanation: "2 người được xếp vào Interpersonal communication (giao tiếp liên cá nhân), không tính là Group communication."
      },
      {
        text: "3-8 people",
        explanation: "Theo giáo trình, Group communication (giao tiếp nhóm) thường được định nghĩa là sự tương tác giữa khoảng 3 đến 8 người."
      }
    ]
  },
  {
    id: 23,
    topic: "Communication Ethics",
    question: "As a communicator, you are responsible for being prepared and being ethical. Being prepared includes being organized, clear, concise, and punctual. Being ethical includes being egalitarian, respectful, and trustworthy and overall, practicing the \"........ rule \"",
    hint: "Quy tắc vàng trong ứng xử đạo đức: hãy đối xử với người khác theo cách bạn muốn được đối xử!",
    correctIndices: [0],
    options: [
      {
        text: "Golden",
        explanation: "Golden rule (Quy tắc Vàng): đối xử với khán giả/người nghe theo cách mà bạn muốn người khác đối xử với mình — nền tảng của giao tiếp có đạo đức."
      },
      {
        text: "Red",
        explanation: "Không có khái niệm 'Red rule' trong chuẩn đạo đức người giao tiếp."
      },
      {
        text: "Blue",
        explanation: "Không có khái niệm 'Blue rule' trong phần trách nhiệm đạo đức giao tiếp."
      }
    ]
  },
  {
    id: 24,
    topic: "Cultural Intelligence",
    question: "___________ is an important aspect of cultural intelligence; it involves the way space is used during greetings and introductions, as well as during meetings and other encounters.",
    hint: "Chú ý từ khóa 'the way space is used' (cách sử dụng không gian/khoảng cách cá nhân).",
    correctIndices: [1],
    options: [
      {
        text: "Linguistic intelligence",
        explanation: "Linguistic intelligence liên quan đến ngôn ngữ và lời nói, không phải cách sử dụng không gian."
      },
      {
        text: "Spatial intelligence",
        explanation: "Spatial intelligence (trí thông minh không gian trong trí tuệ văn hóa) liên quan đến cách con người sử dụng khoảng cách/không gian khi chào hỏi, giới thiệu hay họp hành."
      },
      {
        text: "Intrapersonal intelligence",
        explanation: "Intrapersonal intelligence là khả năng thấu hiểu nội tâm bản thân, không liên quan đến khoảng cách không gian với người khác."
      },
      {
        text: "Interpersonal intelligence",
        explanation: "Interpersonal intelligence là khả năng hiểu và tương tác với người khác nói chung, chưa chỉ riêng yếu tố không gian (space)."
      }
    ]
  },
  {
    id: 25,
    topic: "Intercultural Communication",
    question: "_______________, perceptions about certain groups of people or nationalities, exist with U.S. persons and those of other cultures.",
    hint: "Những nhận thức rập khuôn về một nhóm người hoặc quốc tịch nhất định (cả người Mỹ lẫn các nền văn hóa khác đều có).",
    correctIndices: [3],
    options: [
      {
        text: "Values",
        explanation: "Values là các giá trị cốt lõi được xem trọng trong một nền văn hóa, không phải nhận thức rập khuôn về nhóm người/quốc tịch."
      },
      {
        text: "Believes",
        explanation: "Beliefs (niềm tin) là những điều được tin là đúng, không đặc trưng cho định nghĩa nhận thức khái quát về các nhóm dân tộc/quốc tịch."
      },
      {
        text: "Cultural symbols",
        explanation: "Cultural symbols là các biểu tượng văn hóa (cờ, trang phục, biểu trưng...), không phải nhận thức về nhóm người."
      },
      {
        text: "Stereotypes",
        explanation: "Stereotypes (định kiến/khuôn mẫu) là những nhận thức rập khuôn về các nhóm người hoặc quốc tịch cụ thể, tồn tại ở cả người Mỹ và các nền văn hóa khác."
      }
    ]
  },
  {
    id: 26,
    topic: "Globalization Theories",
    question: "What \"focuses on the imperialistic ambitions of nations, corporations, organizations, and the like and their desire, indeed need, to impose themselves on various geographic areas\" (Ritzer, 2003)?",
    hint: "Theo Ritzer (2003), đây là khái niệm chỉ sự bành trướng toàn cầu áp đặt lên các khu vực (gần nghĩa với globalization; lưu ý đề gốc bị gõ nhầm 'grobalization' thành 'globalization' ở B và D).",
    correctIndices: [1, 3],
    options: [
      {
        text: "It is localization.",
        explanation: "Localization (địa phương hóa) tập trung vào điều chỉnh theo bản sắc địa phương, trái ngược với tham vọng áp đặt từ bên ngoài."
      },
      {
        text: "It is globalization.",
        explanation: "Đáp án đúng theo đề thi gốc! (Ghi chú học thuật: thuật ngữ chính xác Ritzer (2003) đặt ra là 'grobalization' — sự bành trướng tăng trưởng toàn cầu, nhưng ngân hàng đề gốc đã gõ nhầm thành 'globalization' và lặp ở cả B và D)."
      },
      {
        text: "It is glocalization.",
        explanation: "Glocalization là sự kết hợp hài hòa giữa toàn cầu hóa và yếu tố địa phương (global + local), không mang tính áp đặt đồng nhất."
      },
      {
        text: "It is globalization.",
        explanation: "Đáp án đúng theo đề thi gốc! (Lưu ý đáp án B và D trong ảnh đề gốc Quiz 1 giống hệt nhau do lỗi đánh máy từ 'grobalization' thành 'globalization')."
      }
    ]
  },
  {
    id: 27,
    topic: "Culture & Subgroups",
    question: "____________, although also part of the macroculture, are groups with which the macroculture does not agree and with which it has problems communicating.",
    hint: "Khái niệm phân biệt giữa tiểu văn hóa hòa hợp (subcultures) và tiểu nhóm mà văn hóa lớn không đồng tình/khó giao tiếp cùng.",
    correctIndices: [0],
    options: [
      {
        text: "Subgroups",
        explanation: "Subgroups (tiểu nhóm) tuy thuộc về macroculture (văn hóa lớn) nhưng có giá trị/hành vi mà văn hóa chính thống không đồng thuận và gặp khó khăn khi giao tiếp cùng."
      },
      {
        text: "Societies",
        explanation: "Societies là các xã hội nói chung, không phải khái niệm chỉ nhóm nhỏ bất đồng với macroculture."
      },
      {
        text: "Subcultures",
        explanation: "Subcultures (tiểu văn hóa) là các nhóm có nét văn hóa riêng nhưng vẫn cùng tồn tại và giao tiếp bình thường trong văn hóa lớn, không bị xung đột gay gắt như subgroups."
      },
      {
        text: "Networks",
        explanation: "Networks là mạng lưới kết nối xã hội/công việc, không phải định nghĩa văn hóa học này."
      }
    ]
  },
  {
    id: 28,
    topic: "Communication Process",
    question: "A mental review of the task and your performance is often called ..........",
    hint: "Việc tự ngẫm nghĩ, xem xét lại trong đầu về nhiệm vụ và kết quả thực hiện của bản thân.",
    correctIndices: [0],
    options: [
      {
        text: "reflection",
        explanation: "Reflection (sự tự chiêm nghiệm / phản tư) là quá trình tự xem xét lại trong tâm trí về nhiệm vụ đã làm và hiệu suất của bản thân để rút kinh nghiệm."
      },
      {
        text: "feedback",
        explanation: "Feedback là thông tin phản hồi nhận được từ người khác (hoặc môi trường) đáp lại thông điệp của bạn."
      },
      {
        text: "response",
        explanation: "Response là sự hồi đáp trực tiếp từ người nhận dành cho thông điệp."
      },
      {
        text: "checking",
        explanation: "Checking là hành động kiểm tra thông tin/lỗi, không phải thuật ngữ chỉ sự tự chiêm nghiệm nội tâm."
      }
    ]
  },
  {
    id: 29,
    topic: "Language Styles",
    question: "............. involves everyday words and expressions in a familiar group context, such as conversations with family or close friends.",
    hint: "Ngôn ngữ thường ngày, thân mật dùng với gia đình và bạn bè thân thiết (không phải trang trọng).",
    correctIndices: [1],
    options: [
      {
        text: "Colloquial language",
        explanation: "Colloquial language là tiếng địa phương/khẩu ngữ vùng miền mang sắc thái văn hóa khu vực; trong khi định nghĩa trong giáo trình của câu hỏi này là 'Casual language'."
      },
      {
        text: "Casual language",
        explanation: "Casual language (ngôn ngữ thân mật/thông thường) sử dụng từ ngữ và cách diễn đạt hằng ngày trong bối cảnh quen thuộc như trò chuyện với gia đình hoặc bạn bè thân."
      },
      {
        text: "Internal communications",
        explanation: "Internal communications là truyền thông nội bộ trong tổ chức/doanh nghiệp."
      },
      {
        text: "External communications",
        explanation: "External communications là truyền thông đối ngoại với khách hàng, đối tác, công chúng bên ngoài."
      }
    ]
  },
  {
    id: 30,
    topic: "Communication Elements",
    question: "\"Heather replies with an e-mail saying yes.\" is an example of.....................",
    hint: "Heather 'replies' (trả lời/phản hồi) bằng một email (văn bản viết).",
    correctIndices: [0],
    options: [
      {
        text: "feedback in written application",
        explanation: "Heather trả lời lại ('replies') bằng email là hành động phản hồi (feedback) dưới hình thức ứng dụng văn bản viết (written application)."
      },
      {
        text: "source in oral application",
        explanation: "Sai vì email là giao tiếp viết (written), không phải giao tiếp nói (oral), và hành động 'replies' là feedback."
      },
      {
        text: "channel in written application",
        explanation: "Channel (kênh) là bản thân công cụ email, còn nội dung Heather trả lời 'saying yes' là feedback."
      },
      {
        text: "source in written application",
        explanation: "Source là người khởi phát thông điệp ban đầu, còn Heather ở đây đang phản hồi (replies) lại."
      }
    ]
  },
  {
    id: 31,
    topic: "Business Etiquette",
    question: "______________ is a conventional social custom or rule for behavior.",
    hint: "Quy tắc ứng xử xã giao lịch thiệp theo thông lệ xã hội (phép lịch sự/lễ nghi).",
    correctIndices: [3],
    options: [
      {
        text: "Belief",
        explanation: "Belief là niềm tin cá nhân/tập thể, không phải quy tắc hành vi xã giao."
      },
      {
        text: "Value",
        explanation: "Value là giá trị chuẩn mực đạo đức/tinh thần được coi trọng, không chỉ riêng phép tắc ứng xử."
      },
      {
        text: "Attitude",
        explanation: "Attitude là thái độ bên trong, không phải quy ước xã hội về phép lịch sự."
      },
      {
        text: "Etiquette",
        explanation: "Etiquette (phép lịch sự / nghi thức xã giao) là các phong tục hoặc quy tắc ứng xử thông lệ trong xã hội."
      }
    ]
  },
  {
    id: 32,
    topic: "Ceremonial Speaking",
    question: "The correct order of the process of presenting an award is............",
    hint: "Bắt đầu bằng Chuẩn bị (Preparation), Tập trung vào người nhận (Focus), rồi đến cách công bố (Surprise -> Direct) và Kết thúc rời sân khấu (Exit).",
    correctIndices: [0],
    options: [
      {
        text: "Preparation, Focus, Surprise Approach, Direct Approach, and Exit",
        explanation: "Đây là trình tự chuẩn khi trao giải: Chuẩn bị (Preparation) → Hướng sự tập trung vào người nhận (Focus) → Gây bất ngờ (Surprise Approach) → Công bố trực tiếp (Direct Approach) → Rời vị trí nhường sân khấu (Exit)."
      },
      {
        text: "Preparation, Surprise Approach, Focus, Direct Approach, and Exit",
        explanation: "Sai thứ tự: Focus phải đặt ngay sau Preparation trước khi thực hiện Surprise Approach."
      },
      {
        text: "Preparation, Focus, Direct Approach, Surprise Approach, and Exit",
        explanation: "Sai thứ tự: nếu đã Direct Approach (nói thẳng tên người thắng) trước thì không thể dùng Surprise Approach (gây bất ngờ) sau đó được nữa."
      },
      {
        text: "Focus, Preparation, Surprise Approach, Direct Approach, and Exit",
        explanation: "Sai thứ tự: Preparation (chuẩn bị trước buổi lễ) luôn phải là bước đầu tiên."
      }
    ]
  },
  {
    id: 33,
    topic: "Persuasive Language",
    question: "\"Just do it!\" of Nike is a ............",
    hint: "Câu khẩu hiệu nổi tiếng gắn liền với thương hiệu Nike.",
    correctIndices: [3],
    options: [
      {
        text: "quotes",
        explanation: "Quotes là câu trích dẫn phát ngôn của nhân vật/tác phẩm, không phải khẩu hiệu thương hiệu."
      },
      {
        text: "zingers",
        explanation: "Zingers là câu nói châm biếm/ứng đối nhanh sắc sảo gây ấn tượng tức thì trong tranh luận."
      },
      {
        text: "soundbites",
        explanation: "Soundbites là đoạn trích âm thanh/phát biểu ngắn gọn được cắt ra từ bài phát biểu hoặc phỏng vấn cho truyền thông."
      },
      {
        text: "slogan",
        explanation: "Slogan (khẩu hiệu) là cụm từ ngắn gọn, dễ nhớ đại diện cho tinh thần và thông điệp thương hiệu — như 'Just do it!' của Nike."
      }
    ]
  },
  {
    id: 34,
    topic: "Media & Presentations",
    question: "Which characteristic is NOT of effective soundbites?",
    hint: "Soundbite hiệu quả phải ngắn gọn ('short/concise'), nên đặc điểm nào nói nó 'dài' (Long) thì chắc chắn KHÔNG đúng!",
    correctIndices: [3],
    options: [
      {
        text: "Clear and concise.",
        explanation: "Đây LÀ đặc điểm cần có của soundbite hiệu quả (rõ ràng và súc tích)."
      },
      {
        text: "Use vivid, dynamic language.",
        explanation: "Đây LÀ đặc điểm của soundbite hay (dùng ngôn ngữ sống động, giàu hình ảnh)."
      },
      {
        text: "Easy to repeat.",
        explanation: "Đây LÀ đặc điểm quan trọng giúp khán giả và báo chí dễ dàng lặp lại, lan tỏa."
      },
      {
        text: "Long but well known.",
        explanation: "Đúng là đặc điểm KHÔNG thuộc về soundbite hiệu quả! Soundbite bắt buộc phải ngắn gọn, không thể dài dòng ('Long')."
      },
      {
        text: "Memorable.",
        explanation: "Đây LÀ đặc điểm cốt lõi của một soundbite ấn tượng (dễ nhớ)."
      }
    ]
  },
  {
    id: 35,
    topic: "Speech Organization",
    question: "After the introduction comes the.................... of your message. Here you will present your message in detail, using any of a variety of organizational structures.",
    hint: "Sau phần mở bài (introduction) là phần thân bài (nơi trình bày chi tiết nội dung).",
    correctIndices: [2],
    options: [
      {
        text: "attention statement",
        explanation: "Attention statement nằm ở ngay đầu bài nói (trước hoặc mở đầu introduction) để thu hút sự chú ý."
      },
      {
        text: "introduction",
        explanation: "Introduction là phần ngay trước đó; câu hỏi đang hỏi phần đứng sau introduction."
      },
      {
        text: "body",
        explanation: "Body (phần thân bài) đi ngay sau introduction, nơi bạn trình bày chi tiết thông điệp theo các cấu trúc tổ chức khác nhau."
      },
      {
        text: "residual message",
        explanation: "Residual message là thông điệp đọng lại ở phần kết thúc bài nói (conclusion)."
      }
    ]
  },
  {
    id: 36,
    topic: "Emphasis Strategies",
    question: "Suppose you are writing or presenting information on how to assemble a home emergency preparedness kit.\nIf you begin by stating that there are four main items needed for the kit, you are _________ your message and helping your audience to watch or listen for four items.",
    hint: "Việc báo trước số lượng điểm chính ngay từ đầu để khán giả 'chờ đón và lắng nghe' gọi là kỹ thuật báo trước (foreshadowing).",
    correctIndices: [3],
    options: [
      {
        text: "internal summary",
        explanation: "Internal summary là tóm tắt lại những ý vừa trình bày ở giữa bài, không phải báo trước từ đầu."
      },
      {
        text: "repetition",
        explanation: "Repetition là sự lặp lại từ khóa/cụm từ để nhấn mạnh, không phải hành động báo trước 4 mục cần theo dõi."
      },
      {
        text: "signposts (or indicators)",
        explanation: "Signposts là các từ chỉ dẫn chuyển đoạn (như First, Second, Finally...), còn nguyên văn ví dụ 'home emergency preparedness kit' trong giáo trình McLean là minh họa cho 'foreshadowing'."
      },
      {
        text: "foreshadowing",
        explanation: "Chính xác theo nguyên văn giáo trình: khi mở đầu bằng việc nêu sẽ có 4 món đồ chính cần thiết, bạn đang foreshadowing (báo trước) thông điệp để người nghe dễ theo dõi."
      }
    ]
  },
  {
    id: 37,
    topic: "Visual Aids",
    question: "The most important rule to remember in using visuals is this: the visuals are ______________________",
    hint: "Hình ảnh minh họa chỉ đóng vai trò hỗ trợ (support), tuyệt đối không thay thế cho bài viết hoặc bài thuyết trình của bạn.",
    correctIndices: [0],
    options: [
      {
        text: "to support your document or presentation, not to take the place of it.",
        explanation: "Quy tắc vàng khi dùng hình ảnh trực quan (visuals) là chỉ để HỖ TRỢ cho tài liệu hoặc bài thuyết trình, chứ không thay thế nội dung cốt lõi của nó."
      },
      {
        text: "to show your excellent skills in making perfect documents or presentations with best illustrations.",
        explanation: "Sai mục tiêu: hình ảnh không dùng để khoe kỹ năng thiết kế mà để phục vụ việc truyền đạt thông tin."
      },
      {
        text: "to impress the audience with your skills in making perfect documents or presentations.",
        explanation: "Không chính xác vì trọng tâm là hỗ trợ người nghe hiểu nội dung, không phải phô diễn kỹ năng trình bày."
      },
      {
        text: "to entertain the audience.",
        explanation: "Visuals có thể làm bài nói sinh động nhưng mục đích chính của quy tắc không phải để giải trí."
      }
    ]
  },
  {
    id: 38,
    topic: "Speech Organization",
    question: "In your .................. you will make a clear statement your topic; this is also the time to establish a relationship with your audience.",
    hint: "Phần mở đầu bài nói nơi bạn tuyên bố rõ chủ đề và xây dựng kết nối với khán giả.",
    correctIndices: [1],
    options: [
      {
        text: "attention statement",
        explanation: "Attention statement chỉ tập trung vào câu móc (hook) thu hút sự chú ý ngay giây đầu tiên."
      },
      {
        text: "introduction",
        explanation: "Trong phần Introduction (mở bài), bạn nêu rõ ràng chủ đề của bài nói và đồng thời thiết lập mối quan hệ/sự kết nối với khán giả."
      },
      {
        text: "body",
        explanation: "Body là phần triển khai chi tiết các luận điểm chính sau khi đã giới thiệu xong."
      },
      {
        text: "residual message",
        explanation: "Residual message là thông điệp cốt lõi đọng lại sau khi kết thúc bài nói."
      }
    ]
  },
  {
    id: 39,
    topic: "Business Writing & Email",
    question: "Why should employees be very careful about the e-mail messages they send?",
    hint: "Email công ty có thể bị rò rỉ trên không gian mạng (cyberspace) và khiến doanh nghiệp phải chịu trách nhiệm pháp lý (liable).",
    correctIndices: [1],
    options: [
      {
        text: "Because an e-mail is more informal than a letter or memorandum.",
        explanation: "Email có thể trang trọng hoặc thân mật tùy ngữ cảnh, đó không phải lý do rủi ro lớn nhất khiến nhân viên phải hết sức cẩn trọng."
      },
      {
        text: "Because a firm may be liable for information leaked into cyberspace.",
        explanation: "Chính xác! Email dễ bị chuyển tiếp hoặc rò rỉ ra không gian mạng (cyberspace), và công ty có thể phải chịu trách nhiệm pháp lý (liable) đối với các thông tin đó."
      },
      {
        text: "Because an e-mail is more formal than a letter or memorandum.",
        explanation: "Sai về bản chất: email thường không trang trọng hơn thư chính thức hay bản ghi nhớ (memorandum)."
      },
      {
        text: "Because an e-mail may have the employees' names on it.",
        explanation: "Việc có tên nhân viên chỉ là thông tin người gửi thông thường, chưa giải thích rủi ro pháp lý của doanh nghiệp."
      }
    ]
  },
  {
    id: 40,
    topic: "Intercultural Etiquette",
    question: "In Japan or South Korea, we should ................................",
    hint: "Khi trao danh thiếp (business cards) ở Nhật Bản hoặc Hàn Quốc, phép lịch sự tôn trọng yêu cầu dùng cả hai tay!",
    correctIndices: [2],
    options: [
      {
        text: "smile when presenting business cards.",
        explanation: "Mỉm cười là thái độ thân thiện chung, không phải quy tắc nghi thức đặc thù nổi bật nhất khi trao danh thiếp ở Nhật/Hàn."
      },
      {
        text: "shake hands when presenting business cards.",
        explanation: "Khi trao danh thiếp bằng hai tay ở Nhật/Hàn, bạn không bắt tay cùng lúc vì tay phải cầm danh thiếp trang trọng."
      },
      {
        text: "use both hands when presenting business cards.",
        explanation: "Ở Nhật Bản và Hàn Quốc, bạn nên dùng cả hai tay (use both hands) khi trao và nhận danh thiếp để thể hiện sự kính trọng sâu sắc."
      },
      {
        text: "tell our names when presenting business cards.",
        explanation: "Điều này không phải quy tắc đặc thù được nhấn mạnh trong nghi thức trao danh thiếp Đông Á bằng việc dùng hai tay."
      }
    ]
  },
  {
    id: 41,
    topic: "Business Protocol",
    question: "An important aspect of business protocol is the proper procedure for exchanging..............",
    hint: "Vật dụng đại diện cho thông tin liên hệ cá nhân trong các buổi gặp gỡ kinh doanh.",
    correctIndices: [3],
    options: [
      {
        text: "emails",
        explanation: "Email là phương tiện gửi tin nhắn điện tử, không dùng khái niệm 'nghi thức trao đổi' trực tiếp theo business protocol."
      },
      {
        text: "papers",
        explanation: "Papers quá chung chung, không phải nghi thức giao tiếp kinh doanh đặc thù."
      },
      {
        text: "pens",
        explanation: "Bút viết không phải vật phẩm có quy trình trao đổi chuẩn mực trong nghi thức ngoại giao kinh doanh."
      },
      {
        text: "business cards",
        explanation: "Một khía cạnh quan trọng của nghi thức kinh doanh (business protocol) — đặc biệt trong giao tiếp quốc tế — là quy trình trao đổi danh thiếp (business cards) đúng chuẩn."
      }
    ]
  },
  {
    id: 42,
    topic: "Business Etiquette",
    question: "......... refers to manners and behavior considered acceptable in social and business situations.",
    hint: "Cụm từ chỉ phép tắc, cách cư xử được chấp nhận trong các tình huống xã hội và kinh doanh.",
    correctIndices: [2],
    options: [
      {
        text: "Protocol",
        explanation: "Protocol thiên về quy trình, nghi lễ chính thức mang tính ngoại giao/nhà nước hoặc quy tắc trang trọng cấp cao."
      },
      {
        text: "Greetings",
        explanation: "Greetings chỉ là hành động chào hỏi, một phần rất nhỏ trong phép lịch sự."
      },
      {
        text: "Etiquette",
        explanation: "Etiquette (phép lịch sự / phép tắc ứng xử) đề cập đến các cung cách và hành vi được xem là chuẩn mực, lịch thiệp trong cả môi trường xã hội và kinh doanh."
      },
      {
        text: "Introduction",
        explanation: "Introduction là phần giới thiệu bản thân hoặc người khác, không bao quát toàn bộ hành vi ứng xử."
      }
    ]
  },
  {
    id: 43,
    topic: "Transitions & Structure",
    question: "............. is a brief statement referring to a point you are going to make. It can forecast or foreshadow a main point in your document.",
    hint: "Lời giới thiệu ngắn báo trước một ý sắp được trình bày trong tài liệu (internal preview).",
    correctIndices: [0],
    options: [
      {
        text: "An internal preview",
        explanation: "Internal preview (xem trước nội bộ) là một câu ngắn đề cập đến luận điểm bạn sắp trình bày, giúp dự báo hoặc gợi mở ý chính trong tài liệu."
      },
      {
        text: "Signpost",
        explanation: "Signpost là từ/cụm từ đánh dấu vị trí hiện tại trong văn bản (như 'First', 'Next', 'In conclusion'), ngắn hơn một câu dự báo ý sắp tới."
      },
      {
        text: "Time",
        explanation: "Time transition là từ nối chỉ trình tự thời gian (before, after, meanwhile...)."
      },
      {
        text: "Addition",
        explanation: "Addition transition là từ nối bổ sung ý (furthermore, moreover, in addition...)."
      }
    ]
  },
  {
    id: 44,
    topic: "Transitions & Structure",
    question: ".............illustrates a connection between a point and an example or examples. You may find visual aids work well with this type of transition.",
    hint: "Loại từ nối thể hiện mối liên hệ giữa một luận điểm và 'ví dụ' (example).",
    correctIndices: [3],
    options: [
      {
        text: "A clarification transition",
        explanation: "Clarification transition dùng để làm rõ hoặc diễn giải lại một ý đã nêu (ví dụ: in other words, to clarify)."
      },
      {
        text: "A place transition",
        explanation: "Place transition dùng để chỉ vị trí không gian (above, beside, nearby...)."
      },
      {
        text: "A transition by cause and effect or result",
        explanation: "Dùng để nối nguyên nhân và kết quả (therefore, because, as a result...)."
      },
      {
        text: "A transition by example",
        explanation: "Transition by example (chuyển tiếp bằng ví dụ) minh họa mối liên kết giữa một luận điểm và các ví dụ cụ thể (for example, for instance) — rất hợp dùng kèm hình ảnh minh họa."
      }
    ]
  },
  {
    id: 45,
    topic: "Toulmin Rhetorical Strategy",
    question: "\"Your supporting reasons for the claim\" means ............ (Toulmin's Three-Part Rhetorical Strategy)",
    hint: "Trong mô hình Toulmin (Claim - Data - Warrant), 'Data' là bằng chứng/lý do hỗ trợ cho tuyên bố (Claim).",
    correctIndices: [1],
    options: [
      {
        text: "claim",
        explanation: "Claim là luận điểm chính hoặc tuyên bố mà bạn muốn người nghe chấp nhận, không phải phần lý do hỗ trợ."
      },
      {
        text: "data",
        explanation: "Trong chiến lược hùng biện 3 phần của Toulmin, Data (dữ liệu/bằng chứng) chính là những lý do hỗ trợ cho tuyên bố ('your supporting reasons for the claim')."
      },
      {
        text: "warrant",
        explanation: "Warrant là nguyên lý logic hoặc giả định ngầm kết nối giữa Data và Claim, giải thích tại sao dữ liệu lại chứng minh được tuyên bố."
      }
    ]
  },
  {
    id: 46,
    topic: "Transitions & Structure",
    question: "........... refers to a location, often in a spatially organized essay, of one point of emphasis to another. Again, visual aids work well when discussing physical location with the reading audience.",
    hint: "Từ nối chỉ vị trí/địa điểm (location, spatially organized).",
    correctIndices: [1],
    options: [
      {
        text: "Example",
        explanation: "Example transition dùng để đưa ra ví dụ minh họa, không dùng để chỉ vị trí không gian."
      },
      {
        text: "A place transition",
        explanation: "A place transition (chuyển tiếp chỉ nơi chốn/vị trí) đề cập đến vị trí địa lý hoặc không gian (trong bài viết tổ chức theo không gian) từ điểm nhấn này sang điểm nhấn khác."
      },
      {
        text: "Cause & Effect",
        explanation: "Cause & Effect chỉ mối quan hệ nhân quả, không phải vị trí không gian."
      },
      {
        text: "Result",
        explanation: "Result chỉ kết quả của một hành động/nguyên nhân, không liên quan đến vị trí."
      }
    ]
  },
  {
    id: 47,
    topic: "Communication Contexts",
    question: "In intrapersonal communication, with whom do we communicate?",
    hint: "Tiền tố 'intra-' nghĩa là bên trong (khác với 'inter-' là giữa các cá nhân với nhau).",
    correctIndices: [1],
    options: [
      {
        text: "We communicate with others.",
        explanation: "Giao tiếp với người khác là Interpersonal communication (liên cá nhân), không phải intrapersonal."
      },
      {
        text: "We communicate with ourselves.",
        explanation: "Intrapersonal communication (giao tiếp nội tâm) là quá trình tự đối thoại, suy ngẫm và giao tiếp với chính bản thân mình."
      },
      {
        text: "We communicate through the intranet.",
        explanation: "Intranet là mạng nội bộ của công ty, hoàn toàn không phải khái niệm intrapersonal communication."
      },
      {
        text: "We communicate with the customers.",
        explanation: "Giao tiếp với khách hàng là giao tiếp đối ngoại/liên cá nhân, không phải giao tiếp với chính mình."
      }
    ]
  },
  {
    id: 48,
    topic: "Listening Styles",
    question: "_____________listening involves listening to both the literal and implied meanings within a message.",
    hint: "Lắng nghe thấu cảm — không chỉ nghe nghĩa đen (literal) mà còn cảm nhận được ý ngầm/cảm xúc (implied meanings).",
    correctIndices: [1],
    options: [
      {
        text: "Supportive",
        explanation: "Supportive là thái độ ủng hộ nói chung; thuật ngữ chuẩn trong phân loại kỹ năng lắng nghe mô tả việc nghe cả nghĩa đen lẫn nghĩa hàm ẩn là Empathetic listening."
      },
      {
        text: "Empathetic",
        explanation: "Empathetic listening (lắng nghe thấu cảm) bao gồm việc lắng nghe cả nghĩa đen (literal) lẫn những ý nghĩa ngầm ẩn, cảm xúc (implied meanings) bên trong thông điệp."
      },
      {
        text: "Defensive",
        explanation: "Defensive listening là lắng nghe với tâm thế phòng thủ, dễ hiểu sai ý người nói như đang công kích mình."
      },
      {
        text: "Passive",
        explanation: "Passive listening là nghe thụ động, chỉ tiếp nhận âm thanh hời hợt mà không phân tích sâu ý nghĩa."
      }
    ]
  },
  {
    id: 49,
    topic: "Conflict Management",
    question: "Which statement is NOT correct?",
    hint: "Xung đột không phải lúc nào cũng xấu — đôi khi xung đột lành mạnh giúp nảy sinh ý tưởng mới và giải quyết vấn đề!",
    correctIndices: [3],
    options: [
      {
        text: "Conflict is not a sign of a poor relationship.",
        explanation: "Phát biểu này ĐÚNG: ngay cả các mối quan hệ tốt đẹp, lành mạnh vẫn có xung đột quan điểm."
      },
      {
        text: "Conflict cannot be avoided.",
        explanation: "Phát biểu này ĐÚNG: xung đột là điều tất yếu không thể tránh khỏi trong làm việc nhóm và giao tiếp."
      },
      {
        text: "Conflict cannot always be resolved.",
        explanation: "Phát biểu này ĐÚNG: không phải mọi xung đột đều có thể giải quyết triệt để hoàn toàn, đôi khi cần quản lý và dung hòa."
      },
      {
        text: "Conflict is always bad.",
        explanation: "Đây là phát biểu SAI (đáp án cần chọn)! Xung đột không phải lúc nào cũng xấu; nếu được quản lý tốt, xung đột giúp làm rõ vấn đề và thúc đẩy sáng tạo."
      }
    ]
  },
  {
    id: 50,
    topic: "Interpersonal Needs (FIRO)",
    question: "Schutz (1966) defines people who have a strong need to be liked and constantly seek attention from others as ................",
    hint: "Người có nhu cầu được yêu thích và chú ý 'quá mức' (over-) theo thuyết FIRO của Schutz (1966).",
    correctIndices: [2],
    options: [
      {
        text: "underpersonals",
        explanation: "Underpersonals là những người có xu hướng né tránh sự thân mật, ít muốn gắn kết tình cảm với người khác."
      },
      {
        text: "personal individual.",
        explanation: "Personal individual là người có mức độ nhu cầu tình cảm cân bằng, lành mạnh, không quá khao khát hay né tránh."
      },
      {
        text: "overpersonals",
        explanation: "Theo Schutz (1966), Overpersonals là những người có nhu cầu rất mạnh mẽ được người khác yêu mến và liên tục tìm kiếm sự chú ý, công nhận."
      },
      {
        text: "autocrats",
        explanation: "Autocrats thuộc nhóm nhu cầu kiểm soát (Control) — những người thích thống trị và kiểm soát người khác."
      }
    ]
  }
];

const QUIZ_CATALOG = [
  {
    id: "quiz1-full",
    title: "SSB201 - Quiz 1",
    shortTitle: "Quiz 1",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz1 (Q1 – Q50)",
    description: "Làm trọn bộ 50 câu hỏi Quiz 1 bằng tiếng Anh kèm gợi ý và giải thích chi tiết từng đáp án đúng/sai bằng tiếng Việt.",
    icon: "🌸",
    questions: QUIZ_1_QUESTIONS
  },
  {
    id: "quiz2-full",
    title: "SSB201 - Quiz 2",
    shortTitle: "Quiz 2",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz2 (Q1 – Q50)",
    description: "Làm trọn bộ 50 câu hỏi Quiz 2 về Gestalt, Empathy Map, Intercultural Taboos, Pathos, FIRO & Self-reflection.",
    icon: "🎀",
    questions: QUIZ_2_QUESTIONS
  },
  {
    id: "quiz3-full",
    title: "SSB201 - Quiz 3",
    shortTitle: "Quiz 3",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz3 (Q1 – Q50)",
    description: "Làm trọn bộ 50 câu hỏi Quiz 3 về Design Thinking, Cultural Synergy, Semantic Triangle, GASCAP/T & Conflict.",
    icon: "🍓",
    questions: QUIZ_3_QUESTIONS
  },
  {
    id: "quiz4-full",
    title: "SSB201 - Quiz 4",
    shortTitle: "Quiz 4",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz4 (Q1 – Q50)",
    description: "Làm trọn bộ 50 câu hỏi Quiz 4 về Crisis Plan, Bypassing, Sound Bites, Language Styles & Face Strategies.",
    icon: "🌷",
    questions: QUIZ_4_QUESTIONS
  },
  {
    id: "quiz-seb1",
    title: "SSB201 - Quiz SEB 1",
    shortTitle: "Quiz SEB 1",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz_SEB1 (Câu 1 – 50)",
    description: "Bộ đề SEB 1 (SU 2025) về Intercultural Etiquette, Global Mindset, Negative News, Crisis Plan & Netiquette.",
    icon: "🧁",
    questions: QUIZ_SEB1_QUESTIONS
  },
  {
    id: "quiz-seb2",
    title: "SSB201 - Quiz SEB 2",
    shortTitle: "Quiz SEB 2",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz_SEB2 (Câu 1 – 50)",
    description: "Bộ đề SEB 2 (SU 2025) gồm Subcultures, Dimensions of Culture, Cultural Intelligence, Globalization & Crisis Plan.",
    icon: "🪷",
    questions: QUIZ_SEB2_QUESTIONS
  },
  {
    id: "quiz-seb3",
    title: "SSB201 - Quiz SEB 3",
    shortTitle: "Quiz SEB 3",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz_SEB3 (Câu 1 – 50)",
    description: "Bộ đề SEB 3 (Q1 SU 2025) về FIRO, Johari Window, Rhetoric, Design Thinking, Toulmin Model & Writing Process.",
    icon: "🍡",
    questions: QUIZ_SEB3_QUESTIONS
  },
  {
    id: "quiz5-full",
    title: "SSB201 - Quiz 5",
    shortTitle: "Quiz 5",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz5 (Q1 – Q50)",
    description: "Bộ đề Final Exam SP 2025 về Self-Concept, Perception, Verbal/Nonverbal, Culture Dimensions, Negative News & Speeches.",
    icon: "🌸",
    questions: QUIZ_5_QUESTIONS
  },
  {
    id: "quiz6-full",
    title: "SSB201 - Quiz 6",
    shortTitle: "Quiz 6",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz6 (Q1 – Q50)",
    description: "Bộ đề Final Exam FA 2024 về Communication Models, Writing Habits, Toulmin Strategy, Conflict & Gift Giving.",
    icon: "🌺",
    questions: QUIZ_6_QUESTIONS
  },
  {
    id: "quiz7-full",
    title: "SSB201 - Quiz 7",
    shortTitle: "Quiz 7",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz7 (Q1 – Q50)",
    description: "Bộ đề Re-exam SU 2024 về Gestalt Principles, Design Thinking, Business Attire, FIRO, GASCAP/T & Phone Etiquette.",
    icon: "🎀",
    questions: QUIZ_7_QUESTIONS
  },
  {
    id: "quiz8-full",
    title: "SSB201 - Quiz 8",
    shortTitle: "Quiz 8",
    subtitle: "50 câu hỏi trắc nghiệm từ thư mục Quiz8 (Q1 – Q50)",
    description: "Bộ đề Final Exam SU 2024 về Demeanor, Semantic Triangle, Frontstage Culture, HMW Statements, VoIP & Handshakes.",
    icon: "🍰",
    questions: QUIZ_8_QUESTIONS
  }
];
