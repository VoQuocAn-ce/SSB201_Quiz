// Dữ liệu câu hỏi SSB201 - Quiz 3 (trích xuất từ thư mục Quiz3: Q1.webp - Q50.webp)
// Câu hỏi & đáp án giữ nguyên tiếng Anh; chủ đề, gợi ý (hint) và lời giải thích từng đáp án bằng tiếng Việt.

const QUIZ_3_QUESTIONS = [
  {
    id: 1,
    topic: "Attitudes & Beliefs",
    question: "A(n) .............is your immediate disposition toward a concept or an object.",
    hint: "Thái độ (attitude) là khuynh hướng phản ứng tức thì (thích/không thích) đối với một khái niệm hoặc sự vật.",
    correctIndices: [1],
    options: [
      {
        text: "nonverbal communication",
        explanation: "Nonverbal communication là giao tiếp phi ngôn ngữ (cử chỉ, ánh mắt, nét mặt), không phải khuynh hướng tâm lý."
      },
      {
        text: "attitude",
        explanation: "Attitude (thái độ) được định nghĩa là khuynh hướng phản ứng tức thì của bạn đối với một khái niệm hoặc đối tượng."
      },
      {
        text: "beliefs",
        explanation: "Beliefs là những niềm tin ăn sâu về sự thật/sai đúng, bền vững hơn phản ứng tức thì của thái độ."
      },
      {
        text: "value",
        explanation: "Value là giá trị cốt lõi mang tính lâu dài mà một người coi trọng."
      }
    ]
  },
  {
    id: 2,
    topic: "Perception",
    question: "Perceptions are influenced by how we select, organize, and interpret words and ideas.",
    hint: "Quá trình nhận thức gồm 3 bước: chọn lọc (select), sắp xếp (organize) và diễn giải (interpret).",
    correctIndices: [0],
    options: [
      {
        text: "True",
        explanation: "Đúng (True)! Nhận thức của chúng ta chịu ảnh hưởng trực tiếp bởi cách chúng ta chọn lọc (select), tổ chức (organize) và diễn giải (interpret) từ ngữ và ý tưởng."
      },
      {
        text: "False",
        explanation: "Sai vì chọn lọc, sắp xếp và diễn giải chính là 3 bước cốt lõi của quá trình nhận thức."
      }
    ]
  },
  {
    id: 3,
    topic: "Self-Understanding",
    question: "Your ........... is how you feel about yourself; your feelings of self-worth, self-acceptance, and self-respect.",
    hint: "Cảm nhận về giá trị bản thân, sự chấp nhận và lòng tự tôn (self-esteem).",
    correctIndices: [2],
    options: [
      {
        text: "physical characteristics",
        explanation: "Physical characteristics là các đặc điểm ngoại hình vật lý."
      },
      {
        text: "self-image",
        explanation: "Self-image là hình ảnh/cách bạn hình dung về mình, thiên về nhận thức hình dáng và vai trò hơn là cảm xúc tự trọng."
      },
      {
        text: "self-esteem",
        explanation: "Self-esteem (lòng tự trọng) là cảm xúc của bạn về chính mình gồm cảm giác giá trị, sự chấp nhận và tự tôn."
      },
      {
        text: "self-concept",
        explanation: "Self-concept là khái niệm tổng quát về bản thân, rộng hơn cảm nhận tự trọng."
      }
    ]
  },
  {
    id: 4,
    topic: "Gestalt Principles",
    question: "\"The emphasis on a single item that stands out from its surroundings\" is example of ............",
    hint: "Nguyên lý Gestalt tách biệt đối tượng nổi bật (figure) khỏi phần nền (ground).",
    correctIndices: [3],
    options: [
      {
        text: "proximity",
        explanation: "Proximity là sự gần gũi về khoảng cách khiến các yếu tố được nhóm lại với nhau."
      },
      {
        text: "continuity",
        explanation: "Continuity là xu hướng mắt theo dõi đường nét liền mạch."
      },
      {
        text: "closure",
        explanation: "Closure là xu hướng não bộ tự nối liền các khoảng trống."
      },
      {
        text: "figure and ground",
        explanation: "Figure and ground (hình và nền) mô tả việc làm nổi bật một yếu tố đơn lẻ tách khỏi nền xung quanh."
      }
    ]
  },
  {
    id: 5,
    topic: "Intercultural Communication",
    question: "..........., which involve expected social behavior, are another aspect of intercultural communication that can act as a barrier to effective communication.",
    hint: "Các vai trò xã hội (role identities) quy định hành vi kỳ vọng trong từng nền văn hóa.",
    correctIndices: [1],
    options: [
      {
        text: "Goals",
        explanation: "Goals là mục tiêu cá nhân hoặc tổ chức, không phải khái niệm chỉ hành vi xã hội được kỳ vọng."
      },
      {
        text: "Role identities",
        explanation: "Role identities (bản sắc vai trò), bao gồm các hành vi xã hội được kỳ vọng theo vai trò (như sếp/nhân viên, nam/nữ, tuổi tác...), có thể trở thành rào cản trong giao tiếp liên văn hóa."
      },
      {
        text: "Cultural value system",
        explanation: "Cultural value system là hệ thống giá trị văn hóa nói chung, không cụ thể vào hành vi kỳ vọng theo vai trò."
      },
      {
        text: "All answers are false",
        explanation: "Sai vì đáp án B (Role identities) là chính xác."
      }
    ]
  },
  {
    id: 6,
    topic: "Cultural Dimensions",
    question: ".............. means \"People value the family or community over the needs of the individual\".",
    hint: "Văn hóa tập thể (Collectivistic) đề cao gia đình và cộng đồng hơn lợi ích cá nhân.",
    correctIndices: [1],
    options: [
      {
        text: "Individualistic Cultures",
        explanation: "Individualistic Cultures (văn hóa cá nhân) đề cao quyền tự chủ và nhu cầu cá nhân trên tập thể."
      },
      {
        text: "Collectivistic Cultures",
        explanation: "Collectivistic Cultures (văn hóa tập thể) coi trọng gia đình, nhóm hoặc cộng đồng hơn nhu cầu của từng cá nhân."
      },
      {
        text: "Uncertainty-Accepting Cultures",
        explanation: "Đây là nền văn hóa cởi mở, chấp nhận sự mơ hồ và ít quy tắc cứng nhắc."
      },
      {
        text: "Uncertainty-Rejecting Culture",
        explanation: "Đây là nền văn hóa né tránh sự bất định, ưa thích luật lệ và quy trình rõ ràng."
      }
    ]
  },
  {
    id: 7,
    topic: "Public Speaking",
    question: "A thesis statement should be.........",
    hint: "Thesis statement cần ngắn gọn và cụ thể (short, specific).",
    correctIndices: [2],
    options: [
      {
        text: "a specific sentence capturing the central idea of your speech.",
        explanation: "Thiếu yếu tố 'short' (ngắn gọn) theo chuẩn giáo trình."
      },
      {
        text: "a long, specific sentence capturing the central idea of your speech.",
        explanation: "Sai vì thesis statement không nên dài dòng ('long')."
      },
      {
        text: "a short, specific sentence capturing the central idea of your speech.",
        explanation: "Thesis statement phải là một câu ngắn gọn, cụ thể tóm tắt trọn vẹn ý tưởng trung tâm của bài nói."
      }
    ]
  },
  {
    id: 8,
    topic: "Design Thinking",
    question: "Design Thinking Process includes:",
    hint: "Quy trình Design Thinking chuẩn của Stanford d.school gồm 5 giai đoạn: Empathize -> Define -> Ideate -> Prototype -> Test.",
    correctIndices: [0],
    options: [
      {
        text: "Empathize, Define, Ideate, Prototype, Test",
        explanation: "Đây là 5 bước chuẩn xác của quy trình Design Thinking: Thấu cảm (Empathize) → Xác định vấn đề (Define) → Lên ý tưởng (Ideate) → Tạo mẫu thử (Prototype) → Kiểm thử (Test)."
      },
      {
        text: "Empathize, Analyze, Ideate, Test",
        explanation: "Thiếu Prototype và dùng sai bước Analyze thay cho Define."
      },
      {
        text: "Define, Empathize, Analyze, Protype, Test",
        explanation: "Sai thứ tự (Empathize phải đứng trước Define), thừa Analyze và viết sai chính tả Prototype."
      },
      {
        text: "Empathize, Define, Analyze, Prototype, Test",
        explanation: "Dùng sai bước Analyze thay vì Ideate."
      }
    ]
  },
  {
    id: 9,
    topic: "Design Thinking",
    question: "During the Design Thinking Process, in which mode you make your idea real?",
    hint: "Bước biến ý tưởng thành sản phẩm/mô hình thực tế để cầm nắm hoặc trải nghiệm thử: Prototype.",
    correctIndices: [1],
    options: [
      {
        text: "Ideate",
        explanation: "Ideate mới chỉ là nghĩ ra và phác thảo ý tưởng trong đầu/trên giấy."
      },
      {
        text: "Prototype",
        explanation: "Prototype (Tạo mẫu thử) là giai đoạn hiện thực hóa ý tưởng thành sản phẩm mẫu cụ thể để người dùng có thể tương tác."
      },
      {
        text: "Test",
        explanation: "Test là giai đoạn đưa mẫu thử ra kiểm nghiệm và lấy phản hồi từ người dùng."
      },
      {
        text: "Define",
        explanation: "Define là giai đoạn tổng hợp và xác định rõ vấn đề."
      }
    ]
  },
  {
    id: 10,
    topic: "Design Thinking",
    question: "What is called \"methodology for creative problem solving. You can use it to inform your own teaching practice, or you can teach it to your students as a framework for real-world projects.\"",
    hint: "Phương pháp luận giải quyết vấn đề sáng tạo (Design Thinking).",
    correctIndices: [1],
    options: [
      {
        text: "Brain storming",
        explanation: "Brainstorming chỉ là một kỹ thuật động não tìm ý tưởng."
      },
      {
        text: "Design thinking",
        explanation: "Design Thinking là phương pháp luận giải quyết vấn đề sáng tạo thường được áp dụng làm khung cho các dự án thực tế."
      },
      {
        text: "Eisenhower Matrix",
        explanation: "Ma trận Eisenhower là công cụ quản lý thời gian và ưu tiên công việc."
      },
      {
        text: "SMART",
        explanation: "SMART là khung đặt mục tiêu, không phải phương pháp giải quyết vấn đề sáng tạo."
      }
    ]
  },
  {
    id: 11,
    topic: "Design Thinking",
    question: "During the Design Thinking Process ,............... is getting ideas and exploration out of your head and into the physical world",
    hint: "Đưa ý tưởng từ trong đầu ra thế giới vật lý hữu hình: Tạo mẫu thử (Prototyping).",
    correctIndices: [2],
    options: [
      {
        text: "Defining",
        explanation: "Defining là xác định vấn đề dựa trên nghiên cứu thấu cảm."
      },
      {
        text: "Empathizing",
        explanation: "Empathizing là tìm hiểu và thấu cảm người dùng."
      },
      {
        text: "Prototyping",
        explanation: "Prototyping (tạo mẫu thử) là quá trình đưa các ý tưởng và khám phá từ trong đầu ra thế giới vật chất thực tế."
      },
      {
        text: "Testing",
        explanation: "Testing là thử nghiệm các mẫu thử với người dùng thật."
      }
    ]
  },
  {
    id: 12,
    topic: "Intercultural Communication",
    question: "When engaging in chitchat with someone of another culture, if a person talk about his or her family, then you are expected to talk about.............",
    hint: "Khi trò chuyện xã giao, đối phương chia sẻ về gia đình của họ thì bạn cũng nên đáp lại bằng chủ đề tương ứng: gia đình bạn.",
    correctIndices: [0],
    options: [
      {
        text: "your family",
        explanation: "Trong giao tiếp xã giao đa văn hóa, khi người kia nói về gia đình họ, bạn được kỳ vọng sẽ chia sẻ lại về gia đình bạn (your family) để giữ sự cân bằng và thiện chí."
      },
      {
        text: "sports",
        explanation: "Chuyển sang thể thao đột ngột sẽ lệch mạch câu chuyện gia đình mà đối phương mở ra."
      },
      {
        text: "music",
        explanation: "Chuyển sang âm nhạc không khớp với phép đối đáp tương ứng trong ngữ cảnh này."
      },
      {
        text: "politics",
        explanation: "Chính trị thường là chủ đề nhạy cảm nên tránh trong giao tiếp xã giao (chitchat) liên văn hóa."
      }
    ]
  },
  {
    id: 13,
    topic: "Intercultural Etiquette",
    question: "Why color of clothing is also a consideration in some countries?",
    hint: "Ở nhiều nền văn hóa, màu sắc gắn liền với những liên tưởng/biểu tượng rất mạnh mẽ (như tang tóc, hoàng gia, may mắn...).",
    correctIndices: [3],
    options: [
      {
        text: "Because in some cultures people do not like colors.",
        explanation: "Sai vì mọi nền văn hóa đều dùng màu sắc, chỉ là ý nghĩa biểu tượng khác nhau."
      },
      {
        text: "Because in some cultures people like colorful clothes.",
        explanation: "Không giải thích được lý do cần cân nhắc kỹ màu sắc trang phục."
      },
      {
        text: "Because in some cultures people only like black and white colors.",
        explanation: "Nhận định phiến diện và không đúng thực tế."
      },
      {
        text: "Because in some cultures color has strong associations.",
        explanation: "Màu sắc trang phục cần được cân nhắc vì ở nhiều nền văn hóa, mỗi màu mang những liên tưởng biểu tượng rất mạnh (ví dụ: màu trắng tượng trưng tang lễ ở Trung Quốc, màu vàng dành cho hoàng gia ở Malaysia...)."
      }
    ]
  },
  {
    id: 14,
    topic: "Intercultural Business",
    question: "Why the awareness of the holidays and holy days of other cultures is important for business?",
    hint: "Biết các ngày lễ và ngày linh thiêng của đối tác giúp lên lịch gọi điện và chuyến công tác phù hợp.",
    correctIndices: [1],
    options: [
      {
        text: "Because it will help us in scheduling our great tours visiting other countries.",
        explanation: "Trọng tâm câu hỏi là hoạt động kinh doanh ('important for business'), không phải du lịch."
      },
      {
        text: "Because it will help us in scheduling telephone calls and business trips.",
        explanation: "Nắm rõ ngày lễ của văn hóa đối tác giúp bạn sắp xếp lịch gọi điện và các chuyến công tác (telephone calls and business trips) hợp lý, tránh làm phiền vào dịp nghỉ lễ."
      },
      {
        text: "Because it will help us in scheduling our holidays.",
        explanation: "Không phản ánh mục tiêu phối hợp công việc với đối tác quốc tế."
      },
      {
        text: "Because it will help us in scheduling our works at home.",
        explanation: "Sai trọng tâm vì câu đang nói về lịch làm việc/công tác với nước ngoài."
      }
    ]
  },
  {
    id: 15,
    topic: "Intercultural Etiquette",
    question: "Avoid wearing _____________ in the People's Republic of China as it is the symbol of mourning.",
    hint: "Ở Trung Quốc, mặc cả cây màu trắng (all white) tượng trưng cho tang chế (mourning).",
    correctIndices: [0],
    options: [
      {
        text: "all white",
        explanation: "Tại Trung Quốc, trang phục toàn màu trắng (all white) là biểu tượng truyền thống của tang lễ (mourning) nên cần tránh trong các dịp công việc/xã giao thông thường."
      },
      {
        text: "all black",
        explanation: "Mặc dù màu đen thường là màu tang lễ ở phương Tây, tại Trung Quốc màu tang lễ truyền thống trong câu hỏi giáo trình là màu trắng (all white)."
      },
      {
        text: "all blue",
        explanation: "Màu xanh dương không phải biểu tượng tang chế trong văn hóa Trung Quốc."
      },
      {
        text: "all red",
        explanation: "Màu đỏ ở Trung Quốc tượng trưng cho may mắn, hỷ sự, trái ngược hoàn toàn với tang tóc."
      }
    ]
  },
  {
    id: 16,
    topic: "Negative News Message",
    question: "In a negative new message, the part that refocuses attention on a solution strategy, an alternative, or the subsequent actions that will take place, is called ...........",
    hint: "Phần thứ tư cuối cùng trong cấu trúc tin xấu: chuyển hướng sự chú ý sang giải pháp hoặc bước tiếp theo.",
    correctIndices: [1],
    options: [
      {
        text: "buffer or cushion",
        explanation: "Buffer là phần mở đầu trung tính/tích cực để giảm nhẹ cú sốc."
      },
      {
        text: "redirect",
        explanation: "Redirect (chuyển hướng) là phần hướng sự tập trung của người nhận sang chiến lược giải pháp, phương án thay thế hoặc các hành động tiếp theo."
      },
      {
        text: "negative news",
        explanation: "Negative news là phần trực tiếp truyền đạt thông tin bất lợi."
      },
      {
        text: "explanation",
        explanation: "Explanation là phần giải thích nguyên nhân trước khi báo tin xấu."
      }
    ]
  },
  {
    id: 17,
    topic: "Organizational Communication",
    question: "............... is the sharing and understanding of meaning between individuals, departments, or representatives of the same business.",
    hint: "Chú ý cụm 'of the same business' (trong cùng một doanh nghiệp/tổ chức).",
    correctIndices: [3],
    options: [
      {
        text: "External communication",
        explanation: "External communication là giao tiếp với các bên BÊN NGOÀI doanh nghiệp."
      },
      {
        text: "Interpersonal",
        explanation: "Interpersonal là giao tiếp giữa hai người nói chung, không nhấn mạnh phạm vi phòng ban nội bộ doanh nghiệp."
      },
      {
        text: "Intrapersonal",
        explanation: "Intrapersonal là giao tiếp nội tâm với chính mình."
      },
      {
        text: "Internal communication",
        explanation: "Internal communication (giao tiếp nội bộ) là việc chia sẻ và thấu hiểu ý nghĩa giữa các cá nhân, phòng ban hoặc đại diện trong cùng một doanh nghiệp."
      }
    ]
  },
  {
    id: 18,
    topic: "Crisis Communication",
    question: "A ________________ is the prepared scenario document that organizes information into responsibilities and lines of communication prior to an event.",
    hint: "Tài liệu kịch bản chuẩn bị sẵn phân công trách nhiệm và luồng liên lạc trước khi khủng hoảng/sự cố xảy ra.",
    correctIndices: [1],
    options: [
      {
        text: "negative communication plan",
        explanation: "Không có thuật ngữ chuẩn 'negative communication plan' cho kịch bản ứng phó sự cố."
      },
      {
        text: "crisis communication plan",
        explanation: "Crisis communication plan (kế hoạch truyền thông khủng hoảng) là tài liệu kịch bản được chuẩn bị trước nhằm phân rõ trách nhiệm và kênh liên lạc khi xảy ra sự cố."
      },
      {
        text: "marketing communication plan",
        explanation: "Marketing communication plan là kế hoạch truyền thông tiếp thị quảng bá sản phẩm."
      },
      {
        text: "media communication plan",
        explanation: "Media communication plan chỉ tập trung vào kênh báo chí/truyền thông, hẹp hơn kế hoạch ứng phó khủng hoảng."
      }
    ]
  },
  {
    id: 19,
    topic: "Negative News Message",
    question: "The first part of a negative news message, verbal or written, involving neutral or positive information, is called ............",
    hint: "Phần mở đầu có tính đệm/làm dịu trước khi đi vào tin xấu.",
    correctIndices: [0],
    options: [
      {
        text: "buffer or cushion",
        explanation: "Buffer or cushion (lớp đệm) là phần đầu tiên chứa thông tin trung tính hoặc tích cực nhằm làm dịu tâm lý người nhận."
      },
      {
        text: "explanation",
        explanation: "Explanation nằm ở phần thứ hai."
      },
      {
        text: "negative news",
        explanation: "Negative news nằm ở phần thứ ba."
      },
      {
        text: "redirect",
        explanation: "Redirect là phần thứ tư (cuối cùng)."
      }
    ]
  },
  {
    id: 20,
    topic: "Communication Contexts",
    question: "...............communication normally involves two people, and can range from intimate and very personal to formal and impersonal.",
    hint: "Giao tiếp giữa 2 người: Interpersonal.",
    correctIndices: [1],
    options: [
      {
        text: "Group",
        explanation: "Group communication thường gồm 3–8 người."
      },
      {
        text: "Interpersonal",
        explanation: "Interpersonal communication (giao tiếp liên cá nhân) thường diễn ra giữa 2 người, trải dài từ mức thân mật riêng tư đến trang trọng."
      },
      {
        text: "Mass",
        explanation: "Mass communication là truyền thông đại chúng tới số đông."
      },
      {
        text: "Intrapersonal",
        explanation: "Intrapersonal là giao tiếp với chính mình."
      }
    ]
  },
  {
    id: 21,
    topic: "Organizational Communication",
    question: "Which of the following is a tangible benefit of effective communication in an organization?",
    hint: "Cả 3 lợi ích trên (giải quyết vấn đề nhanh, tăng năng suất, cải thiện phản hồi) đều đúng.",
    correctIndices: [3],
    options: [
      {
        text: "Faster problem solving",
        explanation: "Đúng nhưng chưa đầy đủ vì B và C cũng đúng."
      },
      {
        text: "Increased productivity",
        explanation: "Đúng nhưng chưa đầy đủ vì A và C cũng đúng."
      },
      {
        text: "Improved response from employees and supervisors",
        explanation: "Đúng nhưng chưa đầy đủ vì A và B cũng đúng."
      },
      {
        text: "All of the above",
        explanation: "Cả ba lựa chọn trên đều là những lợi ích hữu hình rõ rệt của giao tiếp hiệu quả trong tổ chức."
      }
    ]
  },
  {
    id: 22,
    topic: "Communication Ethics",
    question: "When in doubt, remember the \"golden rule,\" which says ______________",
    hint: "Quy tắc vàng: hãy đối xử với người khác theo đúng cách mà bạn muốn được đối xử.",
    correctIndices: [2],
    options: [
      {
        text: "to be silent and a good listener",
        explanation: "Đây là kỹ năng lắng nghe, không phải định nghĩa của 'golden rule'."
      },
      {
        text: "to be polite and respectful",
        explanation: "Chưa đúng nguyên văn định nghĩa quy tắc vàng."
      },
      {
        text: "to treat others the way you would like to be treated",
        explanation: "Golden rule (Quy tắc vàng) dạy rằng hãy đối xử với người khác theo cách mà chính bạn muốn được đối xử."
      },
      {
        text: "to treat others politely and respectfully",
        explanation: "Chưa đúng nguyên văn của 'golden rule'."
      }
    ]
  },
  {
    id: 23,
    topic: "Effective Communication",
    question: "Effective communication takes",
    hint: "3 chữ P kinh điển trong giáo trình McLean: Chuẩn bị (Preparation), Luyện tập (Practice) và Kiên trì (Persistence).",
    correctIndices: [0],
    options: [
      {
        text: "Preparation, practice, persistence",
        explanation: "Theo giáo trình McLean, giao tiếp hiệu quả đòi hỏi 3 yếu tố: Chuẩn bị (Preparation), Thực hành (Practice) và Kiên trì (Persistence)."
      },
      {
        text: "Learning, contact, talking",
        explanation: "Không phải bộ 3 yếu tố chuẩn trong giáo trình."
      },
      {
        text: "Listen, sharing, communicate",
        explanation: "Không phải cụm 3 từ P chuẩn trong giáo trình."
      }
    ]
  },
  {
    id: 24,
    topic: "Intercultural Management",
    question: "_______________ takes place with the two cultures merging to form a stronger overriding culture.",
    hint: "Sự kết hợp tạo sức mạnh cộng hưởng khi hai nền văn hóa hòa quyện thành một nền văn hóa chung mạnh mẽ hơn (Cultural synergy).",
    correctIndices: [1],
    options: [
      {
        text: "Backstage culture",
        explanation: "Backstage culture là phần văn hóa ẩn giấu bên trong mà người ngoài khó quan sát thấy."
      },
      {
        text: "Cultural synergy",
        explanation: "Cultural synergy (cộng hưởng văn hóa) diễn ra khi hai nền văn hóa kết hợp thế mạnh với nhau để hình thành một văn hóa chung mạnh mẽ và hiệu quả hơn."
      },
      {
        text: "Frontage culture",
        explanation: "Frontage culture là bề mặt văn hóa dễ thấy bên ngoài khi giao tiếp ban đầu."
      },
      {
        text: "Enculturation",
        explanation: "Enculturation là quá trình tiếp thu nền văn hóa bản địa của chính mình từ nhỏ."
      }
    ]
  },
  {
    id: 25,
    topic: "Culture & Norms",
    question: "........... are culturally ingrained principles of correct and incorrect behaviors that, if broken, carry a form of overt or covert penalty.",
    hint: "Chuẩn mực xã hội (Norms) — những nguyên tắc ăn sâu trong văn hóa về hành vi đúng/sai.",
    correctIndices: [0],
    options: [
      {
        text: "Norms",
        explanation: "Norms (chuẩn mực văn hóa) là những nguyên tắc hành vi đúng/sai ăn sâu trong văn hóa; nếu vi phạm sẽ chịu hình phạt ngầm hoặc công khai."
      },
      {
        text: "Decisions",
        explanation: "Decisions là các quyết định lựa chọn, không phải chuẩn mực hành vi văn hóa."
      },
      {
        text: "Networks",
        explanation: "Networks là mạng lưới quan hệ xã hội."
      },
      {
        text: "Roles",
        explanation: "Roles là vai trò xã hội của từng cá nhân trong nhóm."
      }
    ]
  },
  {
    id: 26,
    topic: "Culture & Rules",
    question: "___________ are formed to clarify cloudy areas of norms.",
    hint: "Các quy tắc rõ ràng (Rules) được đặt ra để làm sáng tỏ những vùng xám/mơ hồ của chuẩn mực (norms).",
    correctIndices: [1],
    options: [
      {
        text: "Beliefs",
        explanation: "Beliefs là niềm tin cá nhân/tập thể, không phải quy định cụ thể hóa chuẩn mực."
      },
      {
        text: "Rules",
        explanation: "Rules (quy tắc) được thiết lập rõ ràng nhằm làm sáng tỏ những khía cạnh mơ hồ của các chuẩn mực (norms)."
      },
      {
        text: "Attitudes",
        explanation: "Attitudes là thái độ cảm nhận bên trong."
      },
      {
        text: "Values",
        explanation: "Values là giá trị cốt lõi mang tính trừu tượng hơn norms."
      }
    ]
  },
  {
    id: 27,
    topic: "Globalization Theories",
    question: "What \"focuses on the imperialistic ambitions of nations, corporations, organizations, and the like and their desire, indeed need, to impose themselves on various geographic areas\" (Ritzer, 2003)?",
    hint: "Thuật ngữ do Ritzer (2003) đặt ra (ghép giữa growth + globalization): Grobalization.",
    correctIndices: [1],
    options: [
      {
        text: "It is localization.",
        explanation: "Localization là xu hướng địa phương hóa."
      },
      {
        text: "It is grobalization.",
        explanation: "Grobalization (sự bành trướng toàn cầu — chữ 'r' thay cho 'l') là khái niệm Ritzer (2003) dùng để mô tả tham vọng áp đặt tầm ảnh hưởng của các quốc gia, tập đoàn lên nhiều khu vực địa lý."
      },
      {
        text: "It is glocalization.",
        explanation: "Glocalization là sự giao thoa hài hòa giữa toàn cầu và bản địa."
      },
      {
        text: "It is globalization.",
        explanation: "Globalization là khái niệm toàn cầu hóa chung; thuật ngữ chính xác Ritzer (2003) định nghĩa riêng cho ý áp đặt bành trướng này là Grobalization."
      }
    ]
  },
  {
    id: 28,
    topic: "Language Styles",
    question: "............. is an informal, conversational style of writing. It differs from standard business English in that it often makes use of colorful expressions, slang, and regional phrases.",
    hint: "Ngôn ngữ khẩu ngữ đời thường (Colloquial language) thường dùng từ lóng, thành ngữ vùng miền và cách diễn đạt sinh động.",
    correctIndices: [0],
    options: [
      {
        text: "Colloquial language",
        explanation: "Colloquial language (ngôn ngữ khẩu ngữ/thông tục) là phong cách viết thân mật như hội thoại, thường dùng cách diễn đạt sinh động, tiếng lóng và cụm từ địa phương."
      },
      {
        text: "Intrapersonal language",
        explanation: "Không phải thuật ngữ chỉ phong cách viết dùng từ địa phương/slang này."
      },
      {
        text: "Internal communications",
        explanation: "Internal communications là truyền thông nội bộ trong tổ chức."
      },
      {
        text: "External communications",
        explanation: "External communications là truyền thông đối ngoại."
      }
    ]
  },
  {
    id: 29,
    topic: "Business Writing",
    question: "Targeted practice in writing, which involves identifying your weak areas and specifically working to improve them, is especially valuable.",
    hint: "Nhận diện điểm yếu để tập trung cải thiện trong luyện viết là rất hữu ích — Đúng hay Sai?",
    correctIndices: [1],
    options: [
      {
        text: "False",
        explanation: "Sai vì luyện tập có trọng tâm vào điểm yếu giúp tiến bộ rất nhanh."
      },
      {
        text: "True",
        explanation: "Đúng (True)! Việc luyện viết có chủ đích vào các điểm còn yếu giúp nâng cao kỹ năng giao tiếp văn bản hiệu quả nhất."
      }
    ]
  },
  {
    id: 30,
    topic: "Writing Ethics",
    question: ".............means using someone else's writing without giving credit to the source.",
    hint: "Đạo văn (Plagiarism) — dùng bài viết/ý tưởng của người khác mà không trích dẫn nguồn.",
    correctIndices: [1],
    options: [
      {
        text: "Legal ethic",
        explanation: "Legal ethic là đạo đức pháp lý, trái ngược với hành vi dùng chùa bài người khác."
      },
      {
        text: "Plagiarism",
        explanation: "Plagiarism (đạo văn) là hành vi sử dụng văn bản hoặc ý tưởng của người khác mà không ghi nhận/trích dẫn nguồn."
      },
      {
        text: "Borrowing",
        explanation: "Mượn ý hợp lệ vẫn bắt buộc phải trích dẫn nguồn; không trích dẫn gọi là đạo văn."
      },
      {
        text: "Asking",
        explanation: "Asking là hỏi xin phép, không phải hành vi sử dụng không ghi nguồn."
      }
    ]
  },
  {
    id: 31,
    topic: "Business Etiquette",
    question: "______________ is a conventional social custom or rule for behavior.",
    hint: "Phép lịch sự / phép tắc xã giao thông lệ (Etiquette).",
    correctIndices: [3],
    options: [
      {
        text: "Belief",
        explanation: "Belief là niềm tin cá nhân hoặc văn hóa."
      },
      {
        text: "Value",
        explanation: "Value là giá trị đạo đức được coi trọng."
      },
      {
        text: "Attitude",
        explanation: "Attitude là thái độ tâm lý."
      },
      {
        text: "Etiquette",
        explanation: "Etiquette (phép lịch sự) là phong tục xã hội thông lệ hoặc quy tắc ứng xử lịch thiệp."
      }
    ]
  },
  {
    id: 32,
    topic: "Ceremonial Speaking",
    question: "........ involves establishing the person's credibility, motivating audience interest, and saying what the speaker could not say.",
    hint: "Phần giới thiệu diễn giả (speaker introduction) giúp thiết lập uy tín và khen ngợi những điều diễn giả không thể tự nói về mình.",
    correctIndices: [3],
    options: [
      {
        text: "A speaker's interview",
        explanation: "Phỏng vấn diễn giả là hoạt động hỏi đáp, không phải lời giới thiệu mở màn cho diễn giả."
      },
      {
        text: "A speaker's speech",
        explanation: "Bài phát biểu của diễn giả không phải phần tự giới thiệu uy tín thay mặt họ."
      },
      {
        text: "A speaker's qualification",
        explanation: "Qualification chỉ là bằng cấp/năng lực của diễn giả, không phải hành động giới thiệu trước khán giả."
      },
      {
        text: "A speaker introduction",
        explanation: "A speaker introduction (lời giới thiệu diễn giả) giúp xây dựng uy tín cho người nói, kích thích hứng thú của khán giả và nói lên những thành tựu mà bản thân diễn giả khó tự khen mình."
      }
    ]
  },
  {
    id: 33,
    topic: "Ceremonial Speaking",
    question: "A symbol of approval, recognition, or distinction that honors the recipient in public is called .........",
    hint: "Giải thưởng / phần thưởng (an award) vinh danh người nhận trước công chúng.",
    correctIndices: [1],
    options: [
      {
        text: "an introduction",
        explanation: "Introduction chỉ là lời giới thiệu mở đầu."
      },
      {
        text: "an award",
        explanation: "An award (giải thưởng) là biểu tượng của sự công nhận, tán dương và vinh danh dành cho người nhận trước công chúng."
      },
      {
        text: "a welcome",
        explanation: "Welcome là lời chào mừng."
      },
      {
        text: "applause",
        explanation: "Applause là tiếng vỗ tay tán thưởng, không phải vật phẩm/danh hiệu biểu tượng trao tặng."
      }
    ]
  },
  {
    id: 34,
    topic: "Persuasive Language",
    question: "\"Just do it!\" of Nike is a ............",
    hint: "Khẩu hiệu thương hiệu nổi tiếng của Nike (slogan).",
    correctIndices: [3],
    options: [
      {
        text: "quotes",
        explanation: "Quotes là câu trích dẫn phát ngôn."
      },
      {
        text: "zingers",
        explanation: "Zingers là câu nói châm biếm, ứng đối nhanh sắc bén."
      },
      {
        text: "soundbites",
        explanation: "Soundbites là đoạn trích ngắn từ bài phỏng vấn hoặc phát biểu."
      },
      {
        text: "slogan",
        explanation: "'Just do it!' là khẩu hiệu (slogan) kinh điển gắn liền với thương hiệu Nike."
      }
    ]
  },
  {
    id: 35,
    topic: "Semantic Change",
    question: "............ once meant happy or carefree; today it refers to homosexuality.",
    hint: "Từ tiếng Anh từng có nghĩa là vui vẻ, vô tư (happy or carefree) trong quá khứ.",
    correctIndices: [2],
    options: [
      {
        text: "Happiness",
        explanation: "Happiness vẫn luôn mang nghĩa là niềm hạnh phúc."
      },
      {
        text: "Nice",
        explanation: "Nice trước đây từng mang nghĩa 'ngốc nghếch/khờ dại', ngày nay mang nghĩa tốt đẹp/dễ chịu."
      },
      {
        text: "Gay",
        explanation: "Trong bài học về sự biến đổi nghĩa của từ theo thời gian (Semantic rules), từ 'Gay' trước đây mang nghĩa vui vẻ, vô tư lự (happy or carefree), ngày nay dùng để chỉ đồng tính luyến ái."
      },
      {
        text: "Pleasant",
        explanation: "Pleasant vẫn giữ nghĩa dễ chịu, thoải mái."
      }
    ]
  },
  {
    id: 36,
    topic: "Language Basics",
    question: "\"A system of symbols, words, and/or gestures used to communicate meaning\" is called",
    hint: "Hệ thống ký hiệu, từ ngữ và/hoặc cử chỉ dùng để truyền đạt ý nghĩa: Ngôn ngữ (Language).",
    correctIndices: [2],
    options: [
      {
        text: "Code",
        explanation: "Code hẹp hơn định nghĩa hệ thống biểu tượng và từ ngữ hoàn chỉnh này."
      },
      {
        text: "Communication",
        explanation: "Communication là quá trình hiểu và chia sẻ ý nghĩa; còn hệ thống công cụ gồm ký hiệu, từ, cử chỉ là Language."
      },
      {
        text: "Language",
        explanation: "Language (ngôn ngữ) được định nghĩa là một hệ thống các ký hiệu, từ ngữ và/hoặc cử chỉ được dùng để truyền đạt ý nghĩa."
      },
      {
        text: "Interaction",
        explanation: "Interaction là sự tương tác qua lại giữa các cá nhân."
      }
    ]
  },
  {
    id: 37,
    topic: "Semantics",
    question: "Semantic triangle includes",
    hint: "Tam giác ngữ nghĩa (Ogden & Richards) gồm 3 đỉnh: Ý nghĩ (Thought), Sự vật/Chủ thể (Subject/object) và Từ ngữ (Word).",
    correctIndices: [0],
    options: [
      {
        text: "Thought, Subject/object, Word",
        explanation: "Tam giác ngữ nghĩa (Semantic triangle) gồm 3 thành phần: Thought (tư duy/ý niệm), Subject/object (sự vật được đề cập) và Word (từ ngữ biểu đạt)."
      },
      {
        text: "Member, Leader, Power",
        explanation: "Đây là các khái niệm về lãnh đạo nhóm, không phải tam giác ngữ nghĩa."
      },
      {
        text: "Empathize, Subject/object, Action",
        explanation: "Không phải 3 đỉnh của Semantic triangle."
      }
    ]
  },
  {
    id: 38,
    topic: "Language Rules",
    question: "............ govern meaning and word choice according to context and social custom.",
    hint: "Chú ý từ khóa 'according to context' -> Quy tắc ngữ cảnh (Contextual rules).",
    correctIndices: [2],
    options: [
      {
        text: "Syntactic rules",
        explanation: "Syntactic rules quy định trật tự sắp xếp từ trong câu."
      },
      {
        text: "Semantic rules",
        explanation: "Semantic rules quy định nghĩa của bản thân từ ngữ, chưa xét đến bối cảnh và phong tục xã hội."
      },
      {
        text: "Contextual rules",
        explanation: "Contextual rules (quy tắc ngữ cảnh) chi phối ý nghĩa và cách lựa chọn từ ngữ sao cho phù hợp với bối cảnh và phong tục xã hội."
      }
    ]
  },
  {
    id: 39,
    topic: "Intercultural Etiquette",
    question: "A kiss or hug is considered ______________ as a form of greeting in the U.S., in other countries it is customary.",
    hint: "Trong môi trường kinh doanh tại Mỹ, hôn hay ôm khi chào hỏi thường bị coi là không phù hợp (inappropriate), dù ở một số nước khác lại là thông lệ.",
    correctIndices: [2],
    options: [
      {
        text: "appropriate",
        explanation: "Sai vì trong văn hóa kinh doanh Mỹ, ôm hoặc hôn chào hỏi đối tác công việc bị xem là thiếu chuyên nghiệp."
      },
      {
        text: "important",
        explanation: "Không chính xác."
      },
      {
        text: "inappropriate",
        explanation: "Trong giao tiếp kinh doanh tại Hoa Kỳ, hôn hoặc ôm khi chào hỏi bị xem là không phù hợp (inappropriate), khác với một số quốc gia khác coi đó là phong tục bình thường."
      },
      {
        text: "popular",
        explanation: "Sai vì bắt tay mới là cách chào phổ biến trong công việc tại Mỹ."
      }
    ]
  },
  {
    id: 40,
    topic: "Business Protocol",
    question: "An important aspect of business protocol is the proper procedure for exchanging..............",
    hint: "Nghi thức trao đổi danh thiếp (business cards) rất quan trọng trong kinh doanh quốc tế.",
    correctIndices: [3],
    options: [
      {
        text: "emails",
        explanation: "Email không phải vật phẩm trao đổi trực tiếp theo nghi thức protocol này."
      },
      {
        text: "papers",
        explanation: "Quá chung chung."
      },
      {
        text: "pens",
        explanation: "Không phải vật phẩm đại diện nghi thức kinh doanh."
      },
      {
        text: "business cards",
        explanation: "Một khía cạnh quan trọng của nghi thức kinh doanh (business protocol) là quy trình trao đổi danh thiếp (business cards) đúng chuẩn."
      }
    ]
  },
  {
    id: 41,
    topic: "Business Protocol",
    question: "....... refers to customs and regulations dealing with diplomatic etiquette and courtesies expected in official dealings with persons in various cultures.",
    hint: "Các quy định và nghi lễ ngoại giao trang trọng trong giao dịch chính thức: Protocol.",
    correctIndices: [0],
    options: [
      {
        text: "Protocol",
        explanation: "Protocol (nghi thức ngoại giao / lễ tân chính thức) đề cập đến các phong tục và quy định ứng xử trang trọng trong quan hệ chính thức giữa các nền văn hóa."
      },
      {
        text: "Greetings",
        explanation: "Greetings chỉ là lời chào hỏi ban đầu."
      },
      {
        text: "Etiquette",
        explanation: "Etiquette nói chung về phép lịch sự trong giao tiếp xã hội và kinh doanh thường ngày, hẹp hơn khía cạnh ngoại giao chính thức (diplomatic, official dealings) của Protocol."
      },
      {
        text: "Introduction",
        explanation: "Introduction là sự giới thiệu tên tuổi/chức danh."
      }
    ]
  },
  {
    id: 42,
    topic: "Professional Appearance",
    question: "________________ makes a favorable impression on others and in many cultures is associated with competency and respect.",
    hint: "Ăn mặc chỉnh tề, lịch sự (Being well dressed) tạo ấn tượng tốt và thể hiện sự tôn trọng, năng lực.",
    correctIndices: [0],
    options: [
      {
        text: "Being well dressed",
        explanation: "Being well dressed (ăn mặc chỉnh tề, lịch sự) luôn tạo thiện cảm tốt và ở nhiều nền văn hóa gắn liền với hình ảnh chuyên nghiệp, có năng lực và biết tôn trọng người khác."
      },
      {
        text: "Kissing",
        explanation: "Không phù hợp trong nhiều nền văn hóa kinh doanh."
      },
      {
        text: "Tipping",
        explanation: "Tiền boa có thể gây hiểu nhầm ở một số quốc gia không có văn hóa tip."
      },
      {
        text: "Hugging",
        explanation: "Ôm không phải cử chỉ chuyên nghiệp phổ quát trong nhiều môi trường kinh doanh."
      }
    ]
  },
  {
    id: 43,
    topic: "Transitions & Structure",
    question: "............ briefly covers information or alludes to information introduced previously. It can remind an audience of a previous point and reinforce information covered in your document.",
    hint: "Tóm tắt nội bộ (internal summary) nhắc lại ngắn gọn những thông tin đã trình bày trước đó.",
    correctIndices: [2],
    options: [
      {
        text: "Time",
        explanation: "Time transition dùng để sắp xếp theo trình tự thời gian."
      },
      {
        text: "Contrast",
        explanation: "Contrast transition dùng để so sánh đối lập (however, on the other hand)."
      },
      {
        text: "An internal summary",
        explanation: "An internal summary (tóm tắt nội bộ) điểm lại ngắn gọn những thông tin đã giới thiệu trước đó nhằm nhắc nhớ và củng cố kiến thức cho người đọc/nghe."
      },
      {
        text: "Addition",
        explanation: "Addition transition dùng để bổ sung ý mới."
      }
    ]
  },
  {
    id: 44,
    topic: "Sentence Types",
    question: "Imperative sentences",
    hint: "Câu cầu khiến / mệnh lệnh (Imperative) dùng để đưa ra yêu cầu hoặc mệnh lệnh (convey a command).",
    correctIndices: [2],
    options: [
      {
        text: "make a statement.",
        explanation: "Đây là chức năng của Declarative sentence (câu trần thuật)."
      },
      {
        text: "ask a question.",
        explanation: "Đây là chức năng của Interrogative sentence (câu nghi vấn)."
      },
      {
        text: "convey a command.",
        explanation: "Imperative sentences (câu mệnh lệnh/cầu khiến) được dùng để truyền đạt một mệnh lệnh hoặc yêu cầu hành động (convey a command)."
      },
      {
        text: "express a strong emotion.",
        explanation: "Đây là chức năng của Exclamatory sentence (câu cảm thán)."
      }
    ]
  },
  {
    id: 45,
    topic: "Argumentation (GASCAP/T)",
    question: "The \"S\" in Effective Argumentation Strategies: GASCAP/T means .............. (Fulkerson, 1996).",
    hint: "GASCAP/T: Generalization, Analogy, Sign, Cause, Authority, Principle, Testimony.",
    correctIndices: [1],
    options: [
      {
        text: "Strength",
        explanation: "Không phải chữ S trong mô hình lập luận GASCAP/T."
      },
      {
        text: "Sign",
        explanation: "Trong mô hình GASCAP/T của Fulkerson (1996), chữ S viết tắt của Sign (dấu hiệu/chỉ dấu — lập luận dựa trên dấu hiệu cho thấy điều gì đó sắp hoặc đang xảy ra)."
      },
      {
        text: "Seen",
        explanation: "Không có trong từ viết tắt GASCAP/T."
      },
      {
        text: "Signal",
        explanation: "Thuật ngữ chuẩn của Fulkerson (1996) là 'Sign', không phải 'Signal'."
      }
    ]
  },
  {
    id: 46,
    topic: "Paragraph Structure",
    question: "........ support the topic sentence and relate clearly to the subject matter of the paragraph and overall document.",
    hint: "Các câu thân đoạn (body sentence) bổ trợ cho câu chủ đề (topic sentence).",
    correctIndices: [0],
    options: [
      {
        text: "body sentence",
        explanation: "Body sentences (các câu thân đoạn) có nhiệm vụ chứng minh, diễn giải hỗ trợ cho câu chủ đề và liên kết chặt chẽ với nội dung đoạn văn."
      },
      {
        text: "topic sentence",
        explanation: "Topic sentence là câu chủ đề chính của đoạn, không phải câu bổ trợ cho chính nó."
      },
      {
        text: "conclusion sentence",
        explanation: "Conclusion sentence là câu kết thúc đoạn để tóm lược lại ý."
      }
    ]
  },
  {
    id: 47,
    topic: "Self-Understanding",
    question: "___________________ is a trait that allows us to adapt and change to our context or environment, to accept or reject messages, to examine our concept of ourselves and choose to improve.",
    hint: "Phẩm chất tự phản tư / tự soi chiếu bản thân (Self-reflection).",
    correctIndices: [3],
    options: [
      {
        text: "Self-talk",
        explanation: "Self-talk là độc thoại nội tâm với bản thân."
      },
      {
        text: "Self-evaluation",
        explanation: "Self-evaluation là tự đánh giá bản thân, chưa đầy đủ bằng định nghĩa chuẩn của Self-reflection."
      },
      {
        text: "Self-concept",
        explanation: "Self-concept là khái niệm tổng thể về bản thân."
      },
      {
        text: "Self-reflection",
        explanation: "Self-reflection (sự tự phản tư) cho phép chúng ta thích nghi với môi trường, chọn lọc tiếp nhận thông điệp và tự nhìn nhận để cải thiện bản thân."
      }
    ]
  },
  {
    id: 48,
    topic: "Interpersonal Needs (FIRO)",
    question: "According to Schutz, people who crave the spotlight of attention and are highly motivated to seek belonging are called ............",
    hint: "Theo Schutz, nhóm người khao khát được chú ý và hòa nhập thuộc về quá mức gọi là Oversocials.",
    correctIndices: [0],
    options: [
      {
        text: "Oversocials",
        explanation: "Oversocials là những người khao khát đứng giữa tâm điểm chú ý ('crave the spotlight') và có động lực rất cao trong việc tìm kiếm sự hòa nhập, thuộc về nhóm."
      },
      {
        text: "Personal individual",
        explanation: "Đây là thuật ngữ không dùng cho nhóm nhu cầu hòa nhập quá mức; mức cân bằng gọi là 'social person'."
      },
      {
        text: "Social person",
        explanation: "Social person là người có nhu cầu hòa nhập xã hội ở mức cân bằng, hài hòa."
      },
      {
        text: "Undersocials",
        explanation: "Undersocials là những người ít tìm kiếm sự tương tác nhóm và thường thích làm việc độc lập."
      }
    ]
  },
  {
    id: 49,
    topic: "Conflict Management",
    question: "Which statement is NOT correct?",
    hint: "Xung đột KHÔNG phải lúc nào cũng là dấu hiệu của một mối quan hệ tồi tệ ('always a sign of a poor relationship').",
    correctIndices: [0],
    options: [
      {
        text: "Conflict is always a sign of a poor relationship.",
        explanation: "Đây là phát biểu SAI (đáp án cần chọn)! Ngay cả những mối quan hệ rất bền chặt, lành mạnh vẫn có thể nảy sinh xung đột quan điểm."
      },
      {
        text: "Conflict cannot be avoided.",
        explanation: "Phát biểu này ĐÚNG: xung đột là điều tất yếu trong giao tiếp."
      },
      {
        text: "Conflict cannot always be resolved.",
        explanation: "Phát biểu này ĐÚNG: không phải mọi xung đột đều giải quyết được triệt để."
      },
      {
        text: "Conflict is not always bad.",
        explanation: "Phát biểu này ĐÚNG: xung đột có thể thúc đẩy ý tưởng mới và sự thấu hiểu sâu hơn."
      }
    ]
  },
  {
    id: 50,
    topic: "Conflict Management",
    question: "McLean defines the physical or psychological struggles associated with the perception of opposing or incompatible goals, desires, demands, wants, or needs as .............",
    hint: "Sự đấu tranh về thể chất hoặc tâm lý khi nhận thấy mục tiêu, mong muốn xung khắc nhau: Xung đột (conflicts).",
    correctIndices: [3],
    options: [
      {
        text: "opportunities",
        explanation: "Opportunities là cơ hội, không phải đấu tranh do mục tiêu xung khắc."
      },
      {
        text: "threats",
        explanation: "Threats là mối đe dọa, không phải định nghĩa của McLean về sự đấu tranh này."
      },
      {
        text: "weakness",
        explanation: "Weakness là điểm yếu."
      },
      {
        text: "conflicts",
        explanation: "McLean định nghĩa conflicts (xung đột) là những đấu tranh về mặt thể chất hoặc tâm lý gắn với nhận thức về các mục tiêu, mong muốn, yêu cầu hay nhu cầu trái ngược nhau."
      }
    ]
  }
];
