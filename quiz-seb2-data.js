const QUIZ_SEB2_QUESTIONS = [
  {
    id: 1,
    topic: "Subcultures",
    question: "What does the concept of subcultures refer to?",
    hint: "Đây là những nhóm riêng biệt tồn tại ngay bên trong một xã hội lớn hơn với nét đặc trưng riêng biệt so với văn hóa chủ đạo.",
    correctIndices: [1],
    options: [
      {
        text: "The primary cultural group in a society that shapes mainstream values, norms, and social practices across all communities.",
        explanation: "Vì sao sai: Đây là mô tả về nền văn hóa chủ đạo (dominant/mainstream culture), không phải tiểu văn hóa."
      },
      {
        text: "Distinct groups within a larger society that share unique characteristics, beliefs, or traditions that differentiate them from the dominant culture.",
        explanation: "Chính xác! Tiểu văn hóa (Subcultures) là các nhóm đặc thù nằm trong một xã hội lớn hơn, chia sẻ niềm tin, giá trị, truyền thống hoặc đặc điểm riêng biệt khác với văn hóa thống trị."
      },
      {
        text: "The process of eliminating cultural differences by fully integrating individuals into the dominant culture, disregarding their original heritage.",
        explanation: "Vì sao sai: Đây là quá trình đồng hóa văn hóa hoàn toàn (assimilation), xóa bỏ bản sắc gốc."
      },
      {
        text: "A temporary assembly of individuals who come together for a short time without sharing any specific cultural identity or common traditions.",
        explanation: "Vì sao sai: Tập hợp ngẫu nhiên nhất thời không hình thành một tiểu văn hóa bền vững."
      }
    ]
  },
  {
    id: 2,
    topic: "Small Talk Across Cultures",
    question: "In which cultures is it appropriate to inquire about the health of family members and have lengthy discussions about their well-being?",
    hint: "Những nền văn hóa coi trọng gia đình (familism) và mối quan hệ cá nhân nồng ấm trước khi vào việc tại châu Mỹ.",
    correctIndices: [0],
    options: [
      {
        text: "Mexico and Latin America",
        explanation: "Chính xác! Trong văn hóa Mexico và Mỹ Latinh, gia đình là trung tâm và việc hỏi thăm chân thành, trò chuyện lâu về sức khỏe người thân giúp xây dựng sự tin cậy trước khi bàn công việc."
      },
      {
        text: "Saudi Arabia and Japan",
        explanation: "Vì sao sai: Dù tại Ả Rập có thể hỏi thăm gia đình (tránh hỏi phụ nữ), người Nhật lại rất kín đáo và không bàn sâu chuyện sức khỏe gia đình khi giao tiếp công việc."
      },
      {
        text: "United States and Mexico",
        explanation: "Vì sao sai: Người Mỹ thích small talk ngắn gọn, giữ khoảng cách riêng tư và hiếm khi trò chuyện dài dòng về chuyện sức khỏe gia đình đối tác."
      },
      {
        text: "Germany and Sweden",
        explanation: "Vì sao sai: Đức và Thụy Điển thuộc văn hóa hướng công việc (task-oriented) và tách bạch đời tư, ít trò chuyện dài về sức khỏe gia đình trong họp kinh doanh."
      }
    ]
  },
  {
    id: 3,
    topic: "Business Card Etiquette",
    question: "How is the practice in the United States of quickly glancing at a business card and putting it in the pocket perceived in countries like Japan?",
    hint: "Ở Nhật Bản, danh thiếp (meishi) tượng trưng cho con người và vị thế của người trao.",
    correctIndices: [1],
    options: [
      {
        text: "Efficient",
        explanation: "Vì sao sai: Người Nhật đánh giá cao sự trân trọng nghi thức trao nhận danh thiếp bằng hai tay hơn là sự vội vã."
      },
      {
        text: "Rude.",
        explanation: "Chính xác! Ở Nhật Bản, nhìn lướt qua danh thiếp rồi nhét ngay vào túi quần/áo bị coi là cực kỳ thô lỗ và thiếu tôn trọng đối tác."
      },
      {
        text: "Polite.",
        explanation: "Vì sao sai: Phép lịch sự ở Nhật đòi hỏi đọc kỹ danh thiếp và đặt trân trọng trên bàn họp hoặc hộp đựng danh thiếp."
      },
      {
        text: "Expected.",
        explanation: "Vì sao sai: Hành động cất vội danh thiếp vào túi chỉ quen thuộc ở phương Tây, không phải kỳ vọng ở Nhật."
      }
    ]
  },
  {
    id: 4,
    topic: "Cultural Adaptation",
    question: "What does the concept of acculturation refer to?",
    hint: "Tiền tố 'ac-' chỉ quá trình điều chỉnh bản thân để thích nghi với một nền văn hóa mới và khác biệt.",
    correctIndices: [2],
    options: [
      {
        text: "The forced imposition of one's native culture onto others.",
        explanation: "Vì sao sai: Áp đặt văn hóa lên người khác là chủ nghĩa bá quyền văn hóa, không phải acculturation."
      },
      {
        text: "The isolation from all cultural interactions to maintain traditional values.",
        explanation: "Vì sao sai: Tự cô lập là khép kín chứ không phải tiếp biến/thích nghi văn hóa."
      },
      {
        text: "The process of adjusting and adapting to a new and different culture.",
        explanation: "Chính xác! Acculturation (tiếp biến/thích nghi văn hóa) là quá trình cá nhân điều chỉnh và thích nghi khi bước vào một nền văn hóa mới và khác biệt."
      },
      {
        text: "The rejection of any cultural influences outside one's own.",
        explanation: "Vì sao sai: Khước từ ảnh hưởng văn hóa khác là thái độ bài ngoại/vị chủng."
      }
    ]
  },
  {
    id: 5,
    topic: "Dimensions of Culture",
    question: "Which of the following are the dimensions of culture?",
    hint: "Theo mô hình của Borden (1991) trong giáo trình Chaney & Martin, văn hóa gồm 3 chiều tương tác chặt chẽ: Ngôn ngữ, Vật chất/Môi trường và Tâm lý.",
    correctIndices: [2],
    options: [
      {
        text: "Social dimensions, Technological dimensions, Artistic dimensions.",
        explanation: "Vì sao sai: Không phải bộ 3 chiều kích văn hóa chuẩn được nêu trong giáo trình Chaney & Martin."
      },
      {
        text: "Economic dimensions, Political dimensions, Historical dimensions.",
        explanation: "Vì sao sai: Đây là các yếu tố bối cảnh vĩ mô chứ không phải 3 chiều cấu thành văn hóa cá nhân và giao tiếp."
      },
      {
        text: "Language dimensions, Physical dimensions, Psychological dimensions.",
        explanation: "Chính xác! Theo giáo trình Chaney & Martin (dựa trên Borden), văn hóa gồm 3 chiều kích phụ thuộc lẫn nhau: Ngôn ngữ (Language), Vật chất/Thực thể (Physical) và Tâm lý (Psychological)."
      },
      {
        text: "Religious dimensions, Geographical dimensions, Environmental dimensions.",
        explanation: "Vì sao sai: Tôn giáo hay địa lý là các yếu tố ảnh hưởng đến văn hóa, không phải bộ 3 chiều kích văn hóa theo định nghĩa trong sách."
      }
    ]
  },
  {
    id: 6,
    topic: "Cultural Intelligence",
    question: "What does the concept of cultural intelligence refer to?",
    hint: "Trí tuệ văn hóa (CQ) thể hiện ở khả năng điều chỉnh hành vi và kỹ năng cho phù hợp với chuẩn mực, niềm tin của nhiều nhóm văn hóa khác nhau.",
    correctIndices: [0],
    options: [
      {
        text: "Showing adaptable behaviors and skills that align with the cultural attitudes, beliefs, and practices of various groups.",
        explanation: "Chính xác! Trí tuệ văn hóa (Cultural Intelligence) là năng lực thể hiện hành vi và kỹ năng linh hoạt, phù hợp với thái độ, niềm tin và tập quán của nhiều nhóm văn hóa khác nhau."
      },
      {
        text: "The rejection of cultural differences in favor of a single global culture.",
        explanation: "Vì sao sai: Phủ nhận khác biệt văn hóa đi ngược lại hoàn toàn với khái niệm trí tuệ văn hóa."
      },
      {
        text: "Having proficiency in multiple languages without necessarily being aware of or understanding cultural differences.",
        explanation: "Vì sao sai: Giỏi nhiều ngoại ngữ mà không am hiểu văn hóa vẫn có thể gây xung đột giao tiếp liên văn hóa."
      },
      {
        text: "Holding the perspective that one's own cultural norms, values, and traditions are superior to those of other societies.",
        explanation: "Vì sao sai: Cho rằng văn hóa mình thượng đẳng hơn là chủ nghĩa vị chủng (ethnocentrism), trái ngược với trí tuệ văn hóa."
      }
    ]
  },
  {
    id: 7,
    topic: "Cultural Concepts",
    question: "What does the concept of enculturation refer to?",
    hint: "Phân biệt giữa việc học văn hóa bản địa của chính mình từ nhỏ (en-) với việc thích nghi một nền văn hóa mới (ac-).",
    correctIndices: [1],
    options: [
      {
        text: "The deliberate decision to isolate oneself from cultural influences.",
        explanation: "Vì sao sai: Tự cô lập khỏi văn hóa trái ngược hoàn toàn với quá trình hòa nhập xã hội."
      },
      {
        text: "The socialization process you go through to adapt to your society.",
        explanation: "Chính xác! Enculturation (nhập thân văn hóa) là quá trình xã hội hóa giúp cá nhân học hỏi và thích nghi với các chuẩn mực, giá trị của chính xã hội mình."
      },
      {
        text: "The act of imposing your culture on others in a different society.",
        explanation: "Vì sao sai: Áp đặt văn hóa lên người khác là chủ nghĩa vị chủng hoặc đồng hóa cưỡng bức, không phải enculturation."
      },
      {
        text: "The process of completely rejecting the cultural norms of your society.",
        explanation: "Vì sao sai: Phủ nhận chuẩn mực xã hội hoàn toàn ngược lại với việc tiếp thu và thích nghi với xã hội mình sinh sống."
      }
    ]
  },
  {
    id: 8,
    topic: "International Business Communication",
    question: "What should you do before sending a fax message to an international contact?",
    hint: "Để tránh gửi nhầm số, thất lạc tài liệu hoặc gặp sự cố múi giờ/máy fax ở văn phòng đối tác nước ngoài.",
    correctIndices: [0],
    options: [
      {
        text: "Call ahead to confirm the fax number and alert the person",
        explanation: "Chính xác! Phép lịch sự và an toàn khi gửi fax quốc tế theo giáo trình là gọi điện xác nhận trước số fax và báo cho người nhận biết để chờ lấy tài liệu."
      },
      {
        text: "Use fax paper for important documents like résumés",
        explanation: "Vì sao sai: Giấy in nhiệt fax chất lượng kém và dễ mờ, không phù hợp gửi hồ sơ xin việc trang trọng nếu có thể gửi bản đẹp hoặc email."
      },
      {
        text: "Send the fax without any prior notice",
        explanation: "Vì sao sai: Gửi fax không báo trước dễ khiến tài liệu bị thất lạc hoặc lộ thông tin trên máy chung."
      },
      {
        text: "Include personal or confidential information in the fax",
        explanation: "Vì sao sai: Máy fax văn phòng thường dùng chung nhiều người, không nên gửi thông tin mật mà không có người trực nhận."
      }
    ]
  },
  {
    id: 9,
    topic: "French Gift-Giving Etiquette",
    question: "What type of business gift should be avoided when selecting one for a French colleague?",
    hint: "Tại Pháp (nước nổi tiếng về nước hoa), món quà nào mang tính riêng tư thân mật quá mức nên tránh tặng đồng nghiệp hay đối tác?",
    correctIndices: [1],
    options: [
      {
        text: "A novel or any type of book",
        explanation: "Vì sao sai: Sách (nhất là sách nghệ thuật, lịch sử, văn học hay) thường được đánh giá cao tại Pháp."
      },
      {
        text: "Fragrance or scented products",
        explanation: "Chính xác! Theo giáo trình Chaney & Martin, ở Pháp nước hoa hoặc sản phẩm có mùi hương (perfume/fragrance) được coi là món quà quá riêng tư và thân mật, không phù hợp trong quan hệ công việc."
      },
      {
        text: "A timepiece such as a clock or watch",
        explanation: "Vì sao sai: Đồng hồ thường là điều kiêng kỵ ở Trung Quốc (từ 'tặng đồng hồ' đồng âm với tiễn đưa đám tang), không phải kiêng kỵ đặc trưng tại Pháp."
      },
      {
        text: "A writing instrument like a pen",
        explanation: "Vì sao sai: Bút viết chất lượng cao là quà tặng công sở lịch sự và phù hợp."
      }
    ]
  },
  {
    id: 10,
    topic: "Cultural Taboos",
    question: "What is a common consumption taboo in the United States?",
    hint: "Loài vật gắn bó thân thiết hoặc có hình ảnh biểu tượng mà người Mỹ xem là điều cấm kỵ khi ăn thịt.",
    correctIndices: [2],
    options: [
      {
        text: "Eating shellfish",
        explanation: "Vì sao sai: Động vật có vỏ (tôm, cua, sò...) rất phổ biến tại Mỹ (chỉ kiêng theo tôn giáo như Do Thái/Hồi giáo)."
      },
      {
        text: "Eating pork",
        explanation: "Vì sao sai: Thịt heo là thực phẩm rất phổ biến tại Mỹ (điều cấm kỵ ăn thịt heo là của đạo Hồi và đạo Do Thái)."
      },
      {
        text: "Eating horse meat",
        explanation: "Chính xác! Giáo trình nêu rõ ăn thịt ngựa (horse meat) là một điều cấm kỵ phổ biến trong văn hóa ẩm thực của Hoa Kỳ."
      },
      {
        text: "Eating fish",
        explanation: "Vì sao sai: Cá và hải sản được tiêu thụ rộng rãi tại Mỹ."
      }
    ]
  },
  {
    id: 11,
    topic: "U.S. Business Gift Etiquette",
    question: "When giving a business gift in the United States, what is a general guideline regarding the price?",
    hint: "Quy định thuế (IRS) ở Mỹ đặt ra một mức trần khấu trừ rất cụ thể cho quà tặng doanh nghiệp mỗi năm trên mỗi người nhận.",
    correctIndices: [1],
    options: [
      {
        text: "There is no limit on the price of a business gift.",
        explanation: "Vì sao sai: Doanh nghiệp Mỹ thường giới hạn giá trị quà tặng rất chặt chẽ theo chính sách công ty và quy định thuế."
      },
      {
        text: "The price should generally be limited to $25 or less due to tax regulations.",
        explanation: "Chính xác! Theo quy định thuế của Mỹ được đề cập trong giáo trình, mức khấu trừ thuế cho quà tặng kinh doanh thường giới hạn tối đa $25 mỗi người nhận mỗi năm."
      },
      {
        text: "Expensive gifts are usually appreciated as a sign of generosity.",
        explanation: "Vì sao sai: Ở Mỹ, quà quá đắt tiền dễ bị xem là hối lộ hoặc vi phạm quy tắc đạo đức nghề nghiệp."
      },
      {
        text: "The price should be proportional to the recipient's rank and status.",
        explanation: "Vì sao sai: Việc tặng quà theo cấp bậc thường gặp ở một số nước châu Á, còn ở Mỹ vẫn ưu tiên quà giá trị nhỏ dưới ngưỡng $25 để tránh xung đột lợi ích."
      }
    ]
  },
  {
    id: 12,
    topic: "Netiquette",
    question: "What is generally considered inappropriate \"netiquette\" in electronic communication according to the textbook?",
    hint: "Trong giao tiếp qua email hoặc tin nhắn, kiểu viết chữ nào bị xem như đang quát mắng người đọc?",
    correctIndices: [0],
    options: [
      {
        text: "Typing a message in all capital letters.",
        explanation: "Chính xác! Viết toàn bộ bằng CHỮ IN HOA (ALL CAPS) bị coi là bất lịch sự trong phép lịch sự trực tuyến (netiquette) vì tương đương với việc hét lên và gây khó đọc."
      },
      {
        text: "Including country codes for telephone numbers.",
        explanation: "Vì sao sai: Ghi kèm mã quốc gia giúp đối tác nước ngoài liên hệ chính xác, đây là thực hành tốt."
      },
      {
        text: "Using a formal tone when addressing international persons.",
        explanation: "Vì sao sai: Dùng giọng điệu trang trọng với đối tác quốc tế là điều đúng đắn và nên làm."
      },
      {
        text: "Being brief and complete when leaving a voice mail message.",
        explanation: "Vì sao sai: Ngắn gọn nhưng đầy đủ thông tin là chuẩn mực NÊN làm khi để lại thư thoại."
      }
    ]
  },
  {
    id: 13,
    topic: "Legal Risks in Negative News",
    question: "Why should abusive language be avoided when conveying negative news?",
    hint: "Ngôn từ xúc phạm, quy chụp bằng văn bản (libel) hoặc lời nói (slander) có thể khiến doanh nghiệp vướng vào kiện tụng.",
    correctIndices: [3],
    options: [
      {
        text: "It improves the effectiveness of the message.",
        explanation: "Vì sao sai: Ngôn từ lăng mạ phá hủy thiện chí và làm thông điệp phản tác dụng hoàn toàn."
      },
      {
        text: "It enhances the company's stance.",
        explanation: "Vì sao sai: Ngôn từ thiếu kiểm soát làm xấu hình ảnh chuyên nghiệp của công ty chứ không hề củng cố vị thế."
      },
      {
        text: "It can cause misunderstandings and reduce clarity in communication.",
        explanation: "Vì sao sai: Dù có thể gây phản cảm, lý do cốt lõi trong giáo trình McLean (Chương 17) nhấn mạnh đến hậu quả pháp lý về tội phỉ báng/bôi nhọ."
      },
      {
        text: "It may be seen as defamatory and result in legal consequences.",
        explanation: "Chính xác! Theo giáo trình, ngôn ngữ xúc phạm hoặc quy chụp vô căn cứ khi truyền đạt tin xấu có thể bị xem là phỉ báng (defamation/libel/slander) và dẫn đến rủi ro kiện tụng pháp lý."
      }
    ]
  },
  {
    id: 14,
    topic: "Business Globalization",
    question: "What does the concept of globalization refer to?",
    hint: "Theo định nghĩa của Ritzer được trích dẫn trong Chaney & Martin, toàn cầu hóa là sự lan tỏa lối sống trên toàn thế giới cả về mặt xã hội lẫn kinh doanh.",
    correctIndices: [3],
    options: [
      {
        text: "The complete separation of cultures and economies across different countries.",
        explanation: "Vì sao sai: Toàn cầu hóa làm tăng sự kết nối và phụ thuộc lẫn nhau, không phải sự tách rời hoàn toàn."
      },
      {
        text: "The process of limiting technological advancements to specific regions.",
        explanation: "Vì sao sai: Công nghệ lan tỏa xuyên biên giới thúc đẩy toàn cầu hóa chứ không bị bó hẹp theo vùng."
      },
      {
        text: "The restriction of international trade and communication.",
        explanation: "Vì sao sai: Hạn chế thương mại quốc tế là bảo hộ/cô lập, trái ngược với toàn cầu hóa."
      },
      {
        text: "The spread of ways of life across the world both socially and in business.",
        explanation: "Chính xác! Theo định nghĩa được trích dẫn trong tài liệu môn SSB201 (Ritzer), toàn cầu hóa kinh doanh (globalization) là sự lan tỏa các lối sống và phương thức hoạt động ra toàn thế giới cả trong đời sống xã hội lẫn kinh doanh."
      }
    ]
  },
  {
    id: 15,
    topic: "Cultural Beliefs & Superstitions",
    question: "Which of the following is an example of a superstition?",
    hint: "Chú ý chi tiết bẫy về màu sắc con mèo ở phương Tây (mèo đen vs mèo trắng) và định nghĩa chuẩn trong sách Chaney & Martin.",
    correctIndices: [2],
    options: [
      {
        text: "Using logical analysis to predict future events",
        explanation: "Vì sao sai: Phân tích logic dựa trên dữ liệu và suy luận hợp lý, hoàn toàn đối lập với mê tín."
      },
      {
        text: "Believing that a white cat crossing your path brings bad luck",
        explanation: "Vì sao sai: Ở phương Tây, điềm xui thường gắn với mèo ĐEN (black cat) đi ngang qua đường, không phải mèo trắng; đây là phương án gây nhiễu."
      },
      {
        text: "Believing that special charms, omens, or rituals have supernatural powers",
        explanation: "Chính xác! Giáo trình Chaney & Martin nêu nguyên văn định nghĩa ví dụ về mê tín (superstition) là niềm tin rằng bùa chú, điềm báo hoặc nghi thức đặc biệt có năng lực siêu nhiên."
      },
      {
        text: "Believing that eating a healthy diet guarantees a long life",
        explanation: "Vì sao sai: Đây là quan niệm dựa trên khoa học dinh dưỡng và y học, không phải mê tín."
      }
    ]
  },
  {
    id: 16,
    topic: "Cultural Stereotypes in Media",
    question: "What stereotype about U.S. women is commonly portrayed in television shows and movies?",
    hint: "Giáo trình Chaney & Martin nhắc đến hình ảnh bị phóng đại trên truyền thông khiến người nước ngoài dễ hiểu lầm về phụ nữ Mỹ.",
    correctIndices: [0],
    options: [
      {
        text: "They are aggressive, glamorous, and promiscuous.",
        explanation: "Chính xác! Giáo trình nêu rõ phim ảnh và truyền hình Mỹ thường khắc họa khuôn mẫu sai lệch rằng phụ nữ Mỹ hung hăng/quyết liệt (aggressive), hào nhoáng (glamorous) và phóng khoáng quá mức (promiscuous)."
      },
      {
        text: "They are often shown as overly emotional and irrational.",
        explanation: "Vì sao sai: Đây không phải bộ ba tính từ khuôn mẫu cụ thể được trích dẫn trong giáo trình Chaney & Martin về phụ nữ Mỹ."
      },
      {
        text: "They are reserved and passive.",
        explanation: "Vì sao sai: Dè dặt và thụ động trái ngược với khuôn mẫu thường bị phóng đại trên phim ảnh Mỹ."
      },
      {
        text: "They are always portrayed as working professionals.",
        explanation: "Vì sao sai: Truyền thông thực tế khắc họa hình ảnh mang tính giật gân hơn là chỉ tập trung vào hình mẫu chuyên gia công sở."
      }
    ]
  },
  {
    id: 17,
    topic: "U.S. Business Communication Style",
    question: "In the United States, what is the purpose of engaging in small talk before starting business?",
    hint: "Người Mỹ không cần xây dựng quan hệ cá nhân sâu sắc trước khi làm ăn như châu Á hay Mỹ Latinh, mà dùng small talk để phá băng và tạo không khí thân thiện.",
    correctIndices: [0],
    options: [
      {
        text: "To create a relaxed and friendly atmosphere in the conversation.",
        explanation: "Chính xác! Theo Chaney & Martin, người Mỹ rất giỏi dùng small talk ngắn gọn để phá băng và tạo bầu không khí thoải mái, thân thiện trước khi nhanh chóng đi vào công việc."
      },
      {
        text: "To build a personal connection before shifting to business matters.",
        explanation: "Vì sao sai: Việc dành thời gian xây dựng mối quan hệ cá nhân sâu sắc trước khi bàn hợp đồng là đặc trưng của các nền văn hóa trọng quan hệ (như châu Á, Trung Đông, Mỹ Latinh); ở Mỹ small talk thường ngắn và khá bề nổi."
      },
      {
        text: "To show off knowledge about current events",
        explanation: "Vì sao sai: Phô trương hiểu biết dễ gây phản cảm; chủ đề small talk thường nhẹ nhàng như thời tiết, thể thao, chuyến đi."
      },
      {
        text: "To pass the time before the meeting officially begins.",
        explanation: "Vì sao sai: Ở Mỹ thời gian là tiền bạc; small talk có chủ đích xã giao chứ không phải để giết thời gian vô nghĩa."
      }
    ]
  },
  {
    id: 18,
    topic: "Cultural Intelligence & Multiple Intelligences",
    question: "Which of the following are types of cultural intelligence?",
    hint: "Chọn nhóm 4 loại trí tuệ chuẩn gắn với giao tiếp, không gian, tự nhận thức và thấu hiểu người khác (theo học thuyết đa trí tuệ áp dụng vào năng lực văn hóa).",
    correctIndices: [0],
    options: [
      {
        text: "Linguistic intelligence, Spatial intelligence, Intrapersonal intelligence, Interpersonal intelligence.",
        explanation: "Chính xác! Phương án này liệt kê đúng nhóm trí tuệ nền tảng gồm Ngôn ngữ (Linguistic), Không gian (Spatial), Nội tâm (Intrapersonal) và Giao tiếp xã hội (Interpersonal) liên quan đến nhận thức và thích nghi liên văn hóa."
      },
      {
        text: "Physical intelligence, Financial intelligence, Strategic intelligence, Artificial intelligence.",
        explanation: "Vì sao sai: Trí tuệ nhân tạo hay tài chính không phải loại trí tuệ văn hóa của con người."
      },
      {
        text: "Genetic intelligence, Computational intelligence, Philosophical intelligence, Political intelligence.",
        explanation: "Vì sao sai: Không thuộc các loại trí tuệ trong học thuyết giao tiếp và văn hóa."
      },
      {
        text: "Logical intelligence, Musical intelligence, Mechanical intelligence, Emotional intelligence.",
        explanation: "Vì sao sai: 'Mechanical intelligence' không phải thành phần chuẩn cùng nhóm với trí tuệ văn hóa trong tài liệu học."
      }
    ]
  },
  {
    id: 19,
    topic: "Gender Equality in Workplace",
    question: "Which of the following statements about gender equality in the workplace is true according to the textbook?",
    hint: "Hãy nhớ số liệu chính xác về Phần Lan trong sách (38%, không phải 48%) và khu vực Bắc Âu được đánh giá cao nhất về bình đẳng giới.",
    correctIndices: [3],
    options: [
      {
        text: "In the United States, men and women receive equal pay and responsibility.",
        explanation: "Vì sao sai: Dù có luật chống phân biệt đối xử, giáo trình vẫn ghi nhận thực tế khoảng cách thu nhập và cơ hội thăng tiến giữa nam và nữ tại Mỹ."
      },
      {
        text: "In Finland, women hold about 48% of positions in parliament.",
        explanation: "Vì sao sai: Con số được nêu trong giáo trình Chaney & Martin là khoảng 38% vị trí trong quốc hội Phần Lan, không phải 48%."
      },
      {
        text: "In Saudi Arabia, women are considered equal to men.",
        explanation: "Vì sao sai: Giáo trình chỉ ra nhiều hạn chế về vai trò nơi công sở và xã hội đối với phụ nữ tại Ả Rập Xê Út so với nam giới."
      },
      {
        text: "In the Scandinavian countries, women and men are treated equally.",
        explanation: "Chính xác! Giáo trình nêu rõ tại các quốc gia Bắc Âu (Scandinavian countries như Thụy Điển, Na Uy, Đan Mạch, Phần Lan), phụ nữ và nam giới được đối xử bình đẳng trong môi trường làm việc."
      }
    ]
  },
  {
    id: 20,
    topic: "Communication Fundamentals",
    question: "What does the concept of communication barriers refer to?",
    hint: "'Barriers' nghĩa là những rào cản làm giảm hoặc cản trở hiệu quả truyền đạt thông điệp.",
    correctIndices: [3],
    options: [
      {
        text: "A strategy used to improve language proficiency.",
        explanation: "Vì sao sai: Rào cản là vấn đề cản trở, không phải chiến lược nâng cao năng lực ngôn ngữ."
      },
      {
        text: "The process of enhancing communication through cultural differences.",
        explanation: "Vì sao sai: Rào cản là yếu tố gây trở ngại chứ không phải quá trình cải thiện giao tiếp."
      },
      {
        text: "The natural ability to communicate without misunderstandings.",
        explanation: "Vì sao sai: Đây là năng lực giao tiếp lý tưởng, không phải rào cản."
      },
      {
        text: "Obstacles to effective communication.",
        explanation: "Chính xác! Communication barriers (rào cản giao tiếp) là mọi trở ngại (như khác biệt ngôn ngữ, định kiến văn hóa, tiếng ồn, cảm xúc...) làm cản trở quá trình giao tiếp hiệu quả."
      }
    ]
  },
  {
    id: 21,
    topic: "Collectivist Cultural Etiquette",
    question: "Which two etiquette traits are commonly associated with collectivist cultures?",
    hint: "Văn hóa tập thể (Collectivist) coi trọng nỗ lực chung của nhóm hơn cái tôi cá nhân và đề cao sự khiêm tốn để giữ hòa khí.",
    correctIndices: [2],
    options: [
      {
        text: "\"A clearly established hierarchy\" and \"Emphasizing group efforts\"",
        explanation: "Vì sao sai: Dù nhiều xã hội tập thể có phân cấp rõ ràng, yếu tố thứ bậc (hierarchy) gắn trực tiếp với chiều khoảng cách quyền lực (Power Distance) hơn là cặp đặc trưng giao tiếp tập thể thuần túy (trọng nhóm + khiêm tốn)."
      },
      {
        text: "\"Casual interactions with unfamiliar individuals\" and \"Exhibiting humility\"",
        explanation: "Vì sao sai: Cách giao tiếp xuề xòa với người lạ phổ biến hơn ở các nước cá nhân như Mỹ; các nước tập thể thường giữ sự chừng mực với người ngoài nhóm (out-group)."
      },
      {
        text: "\"Valuing group efforts\" and \"Demonstrating modesty\"",
        explanation: "Chính xác! Trong văn hóa tập thể, phép lịch sự gắn liền với việc đề cao nỗ lực tập thể (Valuing group efforts) và thể hiện sự khiêm tốn (Demonstrating modesty), tránh khoe khoang thành tích cá nhân."
      },
      {
        text: "\"Prioritizing personal achievements\" and \"A clearly established hierarchy\"",
        explanation: "Vì sao sai: 'Ưu tiên thành tích cá nhân' là đặc trưng của văn hóa cá nhân (Individualism), trái ngược với văn hóa tập thể."
      }
    ]
  },
  {
    id: 22,
    topic: "Feedback & Improvement",
    question: "Why is gathering negative feedback important for an organization?",
    hint: "Phản hồi tiêu cực giúp doanh nghiệp nhìn ra điểm yếu ở đâu để cải thiện trải nghiệm khách hàng.",
    correctIndices: [3],
    options: [
      {
        text: "To intentionally stir up disagreements or public disputes rather than addressing concerns constructively.",
        explanation: "Vì sao sai: Không tổ chức nào thu thập phản hồi để cố tình tạo mâu thuẫn hay tranh cãi công khai."
      },
      {
        text: "To minimize internal communication.",
        explanation: "Vì sao sai: Phản hồi giúp thúc đẩy trao đổi và phối hợp nội bộ để sửa lỗi, không nhằm giảm giao tiếp."
      },
      {
        text: "To deliberately withhold transparency and keep stakeholders uninformed about potential issues.",
        explanation: "Vì sao sai: Thu thập phản hồi nhằm minh bạch và xử lý vấn đề kịp thời, không phải che giấu thông tin."
      },
      {
        text: "To recognize issues and enhance the quality of products and services.",
        explanation: "Chính xác! Lắng nghe phản hồi tiêu cực giúp tổ chức phát hiện kịp thời các lỗ hổng, từ đó nâng cao chất lượng sản phẩm và dịch vụ."
      }
    ]
  },
  {
    id: 23,
    topic: "Humor Guidelines Across Cultures",
    question: "What is the suggested approach to using humor in international business meetings, as stated in the textbook?",
    hint: "Vì người ở các nền văn hóa khác nhau không cười trước cùng một chuyện, lời khuyên an toàn nhất trong sách là gì?",
    correctIndices: [1],
    options: [
      {
        text: "Use humor to show acceptance and build relationships.",
        explanation: "Vì sao sai: Dùng tùy tiện có thể phản tác dụng nếu đối tác thấy thiếu nghiêm túc hoặc không hiểu ẩn ý."
      },
      {
        text: "Refrain from using jokes to minimize the risk of misunderstandings or offense.",
        explanation: "Chính xác! Chaney & Martin khuyến nghị nên kiềm chế không kể chuyện cười (refrain from using jokes) trong giao tiếp kinh doanh quốc tế để tránh nguy cơ hiểu lầm hoặc vô tình xúc phạm đối tác."
      },
      {
        text: "Always start with a joke to break the ice.",
        explanation: "Vì sao sai: Giáo trình khuyên KHÔNG nên mở đầu bằng truyện cười vì rất dễ 'xịt' hoặc gây hiểu nhầm do rào cản ngôn ngữ – văn hóa."
      },
      {
        text: "Rely on self-deprecating humor since it is widely accepted across cultures.",
        explanation: "Vì sao sai: Ở một số nền văn hóa (như Đức), tự giễu bản thân có thể làm giảm uy tín chuyên môn."
      }
    ]
  },
  {
    id: 24,
    topic: "Intercultural Dining Customs",
    question: "Regarding dining practices, what is a U.S. custom that is sometimes viewed as unusual in other cultures?",
    hint: "Nghĩ đến món đồ uống miễn phí hầu như luôn được đặt sẵn trên bàn ở nhà hàng Mỹ mà nhiều nước châu Âu hoặc châu Á thấy lạ.",
    correctIndices: [3],
    options: [
      {
        text: "Having the main meal at noon.",
        explanation: "Vì sao sai: Ở Mỹ bữa chính thường là bữa tối (dinner), còn bữa chính vào buổi trưa phổ biến hơn ở Mexico và nhiều nước châu Âu/Mỹ Latinh."
      },
      {
        text: "Using chopsticks for eating rice.",
        explanation: "Vì sao sai: Đây là tập quán ẩm thực của các nước Đông Á (Việt Nam, Trung Quốc, Nhật Bản...), không phải thói quen đặc trưng của Mỹ."
      },
      {
        text: "Serving salads after the main course.",
        explanation: "Vì sao sai: Ở Mỹ salad thường được dọn trước món chính, còn ở một số nước châu Âu mới có thói quen ăn salad sau món chính."
      },
      {
        text: "The serving of a glass of iced water at most restaurants.",
        explanation: "Chính xác! Giáo trình ghi nhận thói quen phục vụ sẵn một ly nước lọc đầy đá tại hầu hết nhà hàng Mỹ thường khiến du khách từ các nền văn hóa khác (nhất là châu Âu hoặc châu Á chuộng nước ấm/không đá) thấy khá lạ."
      }
    ]
  },
  {
    id: 25,
    topic: "Global Tipping Etiquette",
    question: "In which of the following countries is tipping generally frowned upon?",
    hint: "Tại quốc gia Đông Á này, dịch vụ tận tâm được xem là chuẩn mực danh dự nghề nghiệp nên việc đưa tiền boa có thể gây khó xử hoặc bị từ chối.",
    correctIndices: [3],
    options: [
      {
        text: "Europe (with a service charge added).",
        explanation: "Vì sao sai: Ở châu Âu, phí dịch vụ thường được cộng sẵn vào hóa đơn; nếu hài lòng vẫn có thể làm tròn tiền, không bị xem là hành vi cấm kỵ như ở Nhật."
      },
      {
        text: "Canada.",
        explanation: "Vì sao sai: Tương tự Mỹ, Canada là quốc gia có văn hóa tiền boa phổ biến (thường khoảng 15–20% tại nhà hàng và dịch vụ)."
      },
      {
        text: "The United States.",
        explanation: "Vì sao sai: Ở Mỹ, tiền boa là thông lệ gần như bắt buộc trong ngành dịch vụ và chiếm phần lớn thu nhập của nhân viên phục vụ."
      },
      {
        text: "Japan.",
        explanation: "Chính xác! Theo giáo trình giao tiếp liên văn hóa (Chaney & Martin), ở Nhật Bản việc đưa tiền boa (tipping) thường bị xem là không phù hợp hoặc thậm chí xúc phạm vì phục vụ tốt là trách nhiệm mặc định."
      }
    ]
  },
  {
    id: 26,
    topic: "Delivering Negative News",
    question: "What is the purpose of a 'buffer' in a negative news message?",
    hint: "Phần mở đầu trung tính hoặc tích cực theo chiến lược gián tiếp nhằm giảm cú sốc cho người nhận trước khi nói tin xấu.",
    correctIndices: [2],
    options: [
      {
        text: "A sentimental approach to evoke sympathy.",
        explanation: "Vì sao sai: Văn phong kinh doanh cần chuyên nghiệp, khách quan và lịch thiệp, không phải khơi gợi lòng thương hại."
      },
      {
        text: "A neutral or positive statement that completely hides the negative news.",
        explanation: "Vì sao sai: Buffer chỉ làm dịu mở đầu chứ không che giấu hoàn toàn tin xấu; tin xấu vẫn phải được truyền đạt rõ ràng ở phần sau."
      },
      {
        text: "A neutral or positive introduction that helps reduce the shock of the news.",
        explanation: "Chính xác! Buffer (vùng đệm) là câu mở đầu trung tính hoặc tích cực giúp giảm bớt cú sốc tâm lý, thể hiện sự tôn trọng và giữ thiện chí với người nhận."
      },
      {
        text: "An unrelated message to distract from the bad news",
        explanation: "Vì sao sai: Buffer phải liên quan tự nhiên đến bối cảnh thông điệp, không phải nói chuyện lạc đề để đánh lạc hướng."
      },
      {
        text: "A firm statement that highlights the negative news.",
        explanation: "Vì sao sai: Việc nhấn mạnh thẳng tin xấu ngay đầu thuộc cách tiếp cận trực tiếp, không phải vai trò của buffer."
      }
    ]
  },
  {
    id: 27,
    topic: "U.S. Cultural Values",
    question: "Which of the following reasons explains why U.S. Americans might prefer doing \"menial\" jobs themselves instead of hiring help?",
    hint: "Người Mỹ đề cao chủ nghĩa bình đẳng, tính tự lập và đặc biệt coi trọng không gian riêng tư gia đình.",
    correctIndices: [1],
    options: [
      {
        text: "They do not tend to allocate savings toward vacations, sports, and labor-saving appliances",
        explanation: "Vì sao sai: Ngược lại hoàn toàn, sách nêu người Mỹ sẵn sàng chi tiền tiết kiệm cho kỳ nghỉ, thể thao và các thiết bị gia dụng tiết kiệm sức lao động để tự làm việc nhà."
      },
      {
        text: "They prioritize privacy and feel that hiring assistance would be an intrusion.",
        explanation: "Chính xác! Theo giáo trình Chaney & Martin, người Mỹ rất coi trọng sự riêng tư và cảm thấy việc thuê người giúp việc trong nhà có thể xâm phạm không gian riêng tư cũng như đi ngược tinh thần tự lực."
      },
      {
        text: "They consider it a sign of higher social status",
        explanation: "Vì sao sai: Ở nhiều nước khác thuê người giúp việc mới được xem là biểu tượng địa vị cao; người Mỹ tự làm vì đề cao bình đẳng và riêng tư."
      },
      {
        text: "They believe it improves their work-life balance",
        explanation: "Vì sao sai: Đây không phải lý do chính được nêu trong giáo trình Chaney & Martin."
      }
    ]
  },
  {
    id: 28,
    topic: "Time & Dining in Mexico",
    question: "What is typically true about lunchtime in Mexico?",
    hint: "Khác với Mỹ (12h–14h), bữa trưa (la comida) ở Mexico diễn ra muộn hơn vào buổi chiều và là bữa ăn chính trong ngày.",
    correctIndices: [1],
    options: [
      {
        text: "It usually takes place between noon and 2 p.m. and is considered the main meal of the day.",
        explanation: "Vì sao sai: Khung giờ 12 giờ trưa đến 2 giờ chiều là giờ ăn trưa kiểu Mỹ (chỉ một số vùng sát biên giới Mỹ mới ăn theo giờ này), không phải giờ ăn trưa truyền thống phổ biến ở Mexico."
      },
      {
        text: "Lunch in Mexico is generally eaten later in the afternoon, often around 2 p.m. to 4 p.m.",
        explanation: "Chính xác! Theo giáo trình, bữa trưa truyền thống ở Mexico thường diễn ra từ 2 giờ đến 4 giờ chiều và là bữa ăn chính lớn nhất trong ngày."
      }
    ]
  },
  {
    id: 29,
    topic: "International Tipping Practices",
    question: "Which of the following statements about tipping practices in different cultures is true?",
    hint: "Kiểm tra lại quy tắc ở Nhật, châu Âu và hai nước Đông Á/Đông Nam Á là Singapore và Hàn Quốc trong sách Chaney & Martin.",
    correctIndices: [1],
    options: [
      {
        text: "In the United States, tipping service personnel at a resort or luxury hotel may add an additional 25% to your bill.",
        explanation: "Vì sao sai: Câu gốc trong Chaney & Martin nói chung về chi phí du lịch quốc tế ('at a resort or luxury hotel may add an additional 25% to your bill'), không gắn riêng cho thông lệ chuẩn ở Mỹ (tại Mỹ mức tip nhà hàng thường nêu là 15–20%); phương án đúng trực tiếp trích từ sách là Singapore và Hàn Quốc."
      },
      {
        text: "In Singapore and South Korea, tipping is not expected.",
        explanation: "Chính xác! Giáo trình Chaney & Martin ghi rõ tại Singapore và Hàn Quốc, việc đưa tiền boa không được kỳ vọng theo thông lệ truyền thống."
      },
      {
        text: "In Europe, a service charge is never added to the restaurant and hotel bill.",
        explanation: "Vì sao sai: Ở châu Âu phí dịch vụ (service charge) thường ĐƯỢC cộng sẵn vào hóa đơn nhà hàng và khách sạn."
      },
      {
        text: "In Japan, openly receiving money as a tip is a common and highly appreciated practice.",
        explanation: "Vì sao sai: Ngược lại, ở Nhật tiền boa không phổ biến và thậm chí có thể gây khó xử hoặc bị từ chối."
      }
    ]
  },
  {
    id: 30,
    topic: "Internal vs. External Negative News",
    question: "Which of the following is NOT a key difference between internal and external communication when conveying negative news?",
    hint: "Cả truyền thông nội bộ (email, memo) và truyền thông bên ngoài (thư, thông cáo báo chí) đều có thể dùng văn bản chứ không phân chia cứng nhắc nội bộ chỉ nói miệng.",
    correctIndices: [1],
    options: [
      {
        text: "Internal communication focuses on employees, while external communication addresses customers and stakeholders",
        explanation: "Vì sao sai: Đây LÀ sự khác biệt rõ ràng về đối tượng tiếp nhận giữa nội bộ và bên ngoài."
      },
      {
        text: "Internal communication is typically oral, while external communication is primarily written.",
        explanation: "Chính xác! Nhận định này SAI (không phải khác biệt chính) vì giao tiếp nội bộ cũng dùng rất nhiều văn bản (memo, email, thông báo công ty), còn giao tiếp bên ngoài cũng có thể thực hiện bằng lời nói (họp báo, gọi điện)."
      },
      {
        text: "Internal and external communication may follow different approaches depending on the audience and context.",
        explanation: "Vì sao sai: Đây LÀ điểm khác biệt thực tế vì chiến lược thông điệp phải tùy chỉnh theo từng nhóm đối tượng."
      },
      {
        text: "Internal communication can be less formal than external communication.",
        explanation: "Vì sao sai: Giao tiếp nội bộ thường có thể ít trang trọng hơn so với thông báo chính thức gửi ra công chúng và khách hàng bên ngoài."
      }
    ]
  },
  {
    id: 31,
    topic: "Negative News Delivery Channels",
    question: "In which situation is it more appropriate to deliver negative news in person rather than in writing?",
    hint: "Những tin xấu tác động sâu sắc đến cá nhân, cảm xúc và sự nghiệp của nhân viên cần sự thấu cảm trực tiếp.",
    correctIndices: [0],
    options: [
      {
        text: "When discussing an employee's termination or demotion.",
        explanation: "Chính xác! Việc sa thải hoặc giáng chức ảnh hưởng nặng nề đến nhân viên nên cần trao đổi trực tiếp (in person) để thể hiện sự tôn trọng, nhân văn và giải đáp ngay tại chỗ."
      },
      {
        text: "When processing a refund request from a customer.",
        explanation: "Vì sao sai: Xử lý hoàn tiền thường được thông báo qua email hoặc hệ thống chăm sóc khách hàng bằng văn bản."
      },
      {
        text: "When communicating general changes in company policies.",
        explanation: "Vì sao sai: Thay đổi chính sách chung áp dụng cho nhiều người nên cần gửi văn bản để lưu hồ sơ và đảm bảo tính nhất quán."
      },
      {
        text: "When informing customers about product discontinuation.",
        explanation: "Vì sao sai: Thông báo ngừng sản phẩm tới đông đảo khách hàng thường gửi bằng văn bản (email, thông cáo)."
      }
    ]
  },
  {
    id: 32,
    topic: "Globalization vs. Glocalization",
    question: "What does the concept of globalization refer to?",
    hint: "Phân biệt 'toàn cầu hóa' (mở rộng kinh tế toàn cầu, làm gia tăng tính đồng nhất) với 'địa phương hóa toàn cầu' (glocalization).",
    correctIndices: [3],
    options: [
      {
        text: "The implementation of policies and regulations designed to restrict the expansion of multinational corporations and limit their influence in international markets.",
        explanation: "Vì sao sai: Đây là chính sách bảo hộ nhằm hạn chế toàn cầu hóa, không phải khái niệm toàn cầu hóa."
      },
      {
        text: "The effort to maintain traditional cultural practices by resisting outside influences that come with globalization and economic integration.",
        explanation: "Vì sao sai: Chống lại ảnh hưởng bên ngoài là bảo tồn truyền thống hoặc phản toàn cầu hóa."
      },
      {
        text: "The process of modifying global products and services to align with the cultural expectations, preferences, and needs of local markets.",
        explanation: "Vì sao sai: Điều chỉnh sản phẩm toàn cầu cho hợp thị trường địa phương là định nghĩa của glocalization, không phải globalization."
      },
      {
        text: "The pursuit of corporate and economic growth on a global scale, often leading to an increase in cultural uniformity as businesses expand across different countries.",
        explanation: "Chính xác! Globalization (toàn cầu hóa) là quá trình mở rộng hoạt động kinh doanh và kinh tế ra phạm vi toàn cầu, thường kéo theo sự gia tăng tính đồng nhất về văn hóa và tiêu dùng."
      }
    ]
  },
  {
    id: 33,
    topic: "Global Business Attire",
    question: "What is the general rule for business attire across most cultures?",
    hint: "Nguyên tắc an toàn trên toàn cầu là ăn mặc lịch sự, kín đáo và bảo thủ (buttoned up).",
    correctIndices: [2],
    options: [
      {
        text: "Dress casually to create a relaxed environment",
        explanation: "Vì sao sai: Mặc đồ xuề xòa dễ bị coi là thiếu tôn trọng đối tác ở phần lớn các nền văn hóa."
      },
      {
        text: "Wear brightly colored outfits to attract attention",
        explanation: "Vì sao sai: Màu sắc quá chói lọi thường bị xem là thiếu trang trọng trong kinh doanh quốc tế."
      },
      {
        text: "Be \"buttoned up\" with a conservative suit for men and a skirted suit or dress for women",
        explanation: "Chính xác! Quy tắc chung an toàn được giáo trình nêu là ăn mặc chỉn chu, kín đáo ('buttoned up'): vest cổ điển cho nam và bộ suit váy hoặc đầm công sở lịch sự cho nữ."
      },
      {
        text: "Wear traditional cultural clothing to show respect",
        explanation: "Vì sao sai: Doanh nhân quốc tế không nhất thiết mặc quốc phục của nước bạn trừ khi được mời vào dịp lễ đặc biệt."
      }
    ]
  },
  {
    id: 34,
    topic: "Negative News Delivery Case",
    question: "Scenario: A company is undergoing a merger, which may lead to workforce reductions or layoffs. Rumors about these changes are spreading among employees, creating tension and uncertainty. In response, a company representative writes a brief memo \"To all employees,\" without providing any contact information. The memo is then distributed by an assistant, who places copies on employees' desks or chairs during lunch. Is this an effective way to communicate negative news?",
    hint: "Phát một bản thông báo nặc danh không có tên hay thông tin liên hệ vào giờ ăn trưa cho thấy điều gì về sự minh bạch và trách nhiệm?",
    correctIndices: [1],
    options: [
      {
        text: "Yes, because it provides both digital and printed copies, improving clarity and accessibility.",
        explanation: "Vì sao sai: Dù có bản giấy hay bản số, thông điệp nặc danh đặt lén lên bàn trong giờ trưa là cách làm phản cảm và kém hiệu quả."
      },
      {
        text: "No, distributing an anonymous memo whether digital or physical suggests an attempt to avoid confrontation and a lack of transparency.",
        explanation: "Chính xác! Theo sách McLean, phát thông báo không ghi người gửi hay thông tin liên hệ (anonymous memo) cho thấy sự né tránh đối thoại và thiếu minh bạch, làm nhân viên mất niềm tin hơn."
      },
      {
        text: "No, this type of news should be delivered verbally, such as in an official company meeting.",
        explanation: "Vì sao sai: Dù họp trực tiếp thường tốt hơn cho tin sa thải, lý do cốt lõi khiến bản memo này thất bại theo tình huống sách nêu là tính chất nặc danh, thiếu thông tin liên hệ và thiếu minh bạch."
      },
      {
        text: "Yes, because it immediately acknowledges the situation and helps prevent the spread of unverified rumors.",
        explanation: "Vì sao sai: Một bản ghi nhớ ngắn gọn không rõ người chịu trách nhiệm càng làm nhân viên hoang mang và tin đồn lan rộng hơn."
      }
    ]
  },
  {
    id: 35,
    topic: "Humor in International Meetings",
    question: "Why is humor used in international business meetings?",
    hint: "Mục đích ban đầu khi nhiều người (như ở phương Tây) dùng sự hài hước là để giảm căng thẳng trước khi vào việc.",
    correctIndices: [1],
    options: [
      {
        text: "To assert authority and create a formal atmosphere",
        explanation: "Vì sao sai: Hài hước làm bầu không khí thân thiện hơn, không dùng để khẳng định uy quyền hay tăng tính nghiêm nghị."
      },
      {
        text: "To ease tension and establish a comfortable environment before discussing business.",
        explanation: "Chính xác! Mục đích phổ biến của việc dùng sự hài hước trước cuộc họp là làm dịu bầu không khí căng thẳng và tạo môi trường thoải mái trước khi bàn nội dung kinh doanh chính."
      },
      {
        text: "To entertain the audience and lighten the mood after the meeting",
        explanation: "Vì sao sai: Vai trò xã giao của hài hước thường dùng ở giai đoạn phá băng mở đầu cuộc họp chứ không chỉ đợi sau khi họp xong."
      },
      {
        text: "To keep the audience entertained and engaged for the duration of the presentation.",
        explanation: "Vì sao sai: Trong họp kinh doanh quốc tế, không biến cuộc họp thành buổi giải trí kéo dài xuyên suốt."
      }
    ]
  },
  {
    id: 36,
    topic: "Cross-Cultural Negotiation Environment",
    question: "Which two elements of the negotiation environment should be considered in cross-cultural interactions?",
    hint: "Liên quan đến bố cục phòng họp và khoảng cách vật lý (proxemics) giữa các bên tham gia.",
    correctIndices: [3],
    options: [
      {
        text: "\"The color scheme of the company's branding\" and \"The negotiators' personal food preferences\"",
        explanation: "Vì sao sai: Màu sắc nhận diện thương hiệu và sở thích ăn uống cá nhân không phải hai yếu tố môi trường không gian đàm phán cốt lõi."
      },
      {
        text: "\"The accessibility of parking for negotiation participants\" and \"The physical distance between individuals and groups\"",
        explanation: "Vì sao sai: Bãi đỗ xe là hậu cần bên ngoài, không phải thiết kế bố cục không gian phòng họp."
      },
      {
        text: "\"The negotiators' food preferences\" and \"The arrangement and design of the meeting space\"",
        explanation: "Vì sao sai: Sở thích ăn uống cá nhân không thuộc cặp yếu tố môi trường vật lý cốt lõi của phòng đàm phán."
      },
      {
        text: "\"The arrangement and design of the meeting space\" and \"The physical distance between individuals and teams\"",
        explanation: "Chính xác! Trong đàm phán liên văn hóa, cách sắp xếp thiết kế không gian phòng họp (ghế ngồi, bàn tròn hay chữ nhật...) và khoảng cách không gian cá nhân giữa các bên tác động mạnh tới bầu không khí tin cậy."
      }
    ]
  },
  {
    id: 37,
    topic: "Crisis Press Conference Best Practices",
    question: "An organization decides to hold a press conference to address a cybersecurity breach. Which of the following actions demonstrates poor practice?",
    hint: "Khi xử lý khủng hoảng với báo chí, sự mập mờ hoặc né tránh câu hỏi sẽ làm mất lòng tin công chúng.",
    correctIndices: [2],
    options: [
      {
        text: "Openly admitting the breach and explaining the corrective steps being taken.",
        explanation: "Vì sao sai: Thừa nhận minh bạch và nêu giải pháp khắc phục là nguyên tắc vàng trong truyền thông khủng hoảng."
      },
      {
        text: "Permitting journalists to ask questions following the initial announcement.",
        explanation: "Vì sao sai: Cho phép hỏi đáp thể hiện sự cởi mở và tôn trọng báo chí."
      },
      {
        text: "Giving ambiguous responses to limit the amount of disclosed information.",
        explanation: "Chính xác! Trả lời mập mờ, né tránh trong họp báo khủng hoảng là thực hành KÉM vì gây nghi ngờ, làm bùng phát tin đồn và xói mòn niềm tin."
      },
      {
        text: "Ensuring the spokesperson is well-informed about the technical aspects of the breach.",
        explanation: "Vì sao sai: Đây là thực hành TỐT giúp người phát ngôn trả lời chính xác và giữ uy tín."
      }
    ]
  },
  {
    id: 38,
    topic: "Global Mindset Capitals",
    question: "Which of the following best describes the concept of Psychological Capital as a part of global mindsets?",
    hint: "Vốn tâm lý (Psychological Capital) gồm sự say mê đa dạng văn hóa, tinh thần phiêu lưu khám phá và sự tự tin vào bản thân.",
    correctIndices: [3],
    options: [
      {
        text: "Political awareness, Legal expertise, Bureaucratic efficiency.",
        explanation: "Vì sao sai: Không nằm trong bộ 3 yếu tố của Psychological Capital."
      },
      {
        text: "Financial stability, Investment strategies, Profit maximization.",
        explanation: "Vì sao sai: Đây là mục tiêu tài chính, không phải yếu tố tâm lý của Global Mindset."
      },
      {
        text: "Global business knowledge, Market analysis, Strategic planning.",
        explanation: "Vì sao sai: Kiến thức kinh doanh và phân tích chiến lược thuộc về Vốn trí tuệ (Intellectual Capital) hoặc kỹ năng quản trị."
      },
      {
        text: "Passion for diversity, Quest for adventure, Self-assurance.",
        explanation: "Chính xác! Vốn tâm lý (Psychological Capital) trong Global Mindset gồm 3 yếu tố: Đam mê sự đa dạng (Passion for diversity), Khát khao trải nghiệm/phiêu lưu (Quest for adventure) và Sự tự tin (Self-assurance)."
      }
    ]
  },
  {
    id: 39,
    topic: "Negative News Message Structure",
    question: "What are the key components of a negative news message?",
    hint: "Cấu trúc 4 bước kinh điển theo chiến lược gián tiếp (nhớ buffer còn được gọi là cushion).",
    correctIndices: [0],
    options: [
      {
        text: "Cushion, explanation, bad news, redirection",
        explanation: "Chính xác! Bốn thành phần cốt lõi của thông điệp tin xấu (theo McLean Chương 17) gồm: Buffer/Cushion (vùng đệm), Explanation (giải thích), Bad news (tin xấu), và Redirection (chuyển hướng tích cực)."
      },
      {
        text: "Introduction, direct statement, apology, conclusion",
        explanation: "Vì sao sai: Không phải mọi tin xấu đều nên xin lỗi (tránh nhận lỗi pháp lý sai lệch) và cấu trúc chuẩn gồm vùng đệm, giải thích, tin xấu, chuyển hướng."
      },
      {
        text: "Grievance, justification, proposal, summary",
        explanation: "Vì sao sai: Đây giống cấu trúc khiếu nại hoặc đề xuất giải pháp hơn là cấu trúc thông điệp tin xấu."
      },
      {
        text: "None of the above",
        explanation: "Vì sao sai: Đã có phương án nêu chính xác đầy đủ 4 thành phần chuẩn của thông điệp tin xấu."
      }
    ]
  },
  {
    id: 40,
    topic: "Mindsets Definition",
    question: "What does the concept of mindsets refer to?",
    hint: "Tư duy (mindset) là cách nhìn nhận, cảm nhận và lý giải thế giới thông qua lăng kính nhận thức văn hóa của chính chúng ta.",
    correctIndices: [0],
    options: [
      {
        text: "Ways of being that allow us to see, perceive, and reason through our own cultural awareness.",
        explanation: "Chính xác! Mindset là cách tồn tại và định hướng nhận thức (ways of being) cho phép chúng ta quan sát, cảm nhận và suy luận thông qua lăng kính nhận thức văn hóa của mình."
      },
      {
        text: "A set of strict rules that dictate how all cultures should function.",
        explanation: "Vì sao sai: Mindset không phải bộ luật cứng nhắc áp đặt lên mọi nền văn hóa."
      },
      {
        text: "Fixed personality traits that remain unchanged throughout life.",
        explanation: "Vì sao sai: Tư duy có thể phát triển và mở rộng qua trải nghiệm học tập, không bất biến suốt đời."
      },
      {
        text: "The rejection of any cultural influences outside one's own.",
        explanation: "Vì sao sai: Đây là thái độ khép kín văn hóa (ethnocentrism), không phải định nghĩa của mindset."
      }
    ]
  },
  {
    id: 41,
    topic: "Research Methods for Feedback",
    question: "How do qualitative and quantitative research methods differ when collecting feedback?",
    hint: "Qualitative = Chất lượng / mô tả (cảm nhận, phỏng vấn); Quantitative = Số lượng / đo lường (con số, thống kê).",
    correctIndices: [2],
    options: [
      {
        text: "Both methods function in the same way.",
        explanation: "Vì sao sai: Hai phương pháp khác nhau rõ rệt về loại dữ liệu thu thập và cách phân tích."
      },
      {
        text: "Qualitative research relies on numerical data, whereas quantitative research emphasizes interactions.",
        explanation: "Vì sao sai: Định nghĩa bị đảo ngược hoàn toàn giữa hai khái niệm."
      },
      {
        text: "Qualitative research gathers descriptive information, while quantitative research focuses on measurable data.",
        explanation: "Chính xác! Nghiên cứu định tính (Qualitative) thu thập thông tin mô tả, cảm nhận, góc nhìn sâu sắc; còn nghiên cứu định lượng (Quantitative) tập trung vào dữ liệu số có thể đo đếm và thống kê."
      },
      {
        text: "Quantitative research is not as reliable as qualitative research.",
        explanation: "Vì sao sai: Cả hai phương pháp đều có giá trị và độ tin cậy riêng nếu thực hiện đúng quy chuẩn."
      }
    ]
  },
  {
    id: 42,
    topic: "Goals of Negative News",
    question: "Which of the following is NOT a goal when delivering negative news?",
    hint: "Tìm việc KHÔNG NÊN làm để bảo vệ tổ chức khỏi rắc rối pháp lý.",
    correctIndices: [0],
    options: [
      {
        text: "Take full responsibility or make an inaccurate admission of fault or liability.",
        explanation: "Chính xác! Đây KHÔNG phải mục tiêu của thông điệp tin xấu; doanh nghiệp phải tránh nhận trách nhiệm pháp lý sai lệch hoặc thừa nhận lỗi thiếu chính xác vì có thể dẫn tới kiện tụng."
      },
      {
        text: "Help the recipient understand and come to terms with the news.",
        explanation: "Vì sao sai: Đây LÀ mục tiêu chính giúp người nhận hiểu lý do và chấp nhận quyết định."
      },
      {
        text: "Preserve trust and respect between the organization and the recipient.",
        explanation: "Vì sao sai: Duy trì thiện chí, niềm tin và sự tôn trọng LÀ một trong những mục tiêu cốt lõi nhất."
      },
      {
        text: "Communicate clearly and concisely to minimize the need for further clarification.",
        explanation: "Vì sao sai: Truyền đạt rõ ràng, súc tích LÀ mục tiêu quan trọng để tránh hiểu lầm kéo dài."
      }
    ]
  },
  {
    id: 43,
    topic: "Press Conference & Media Relations",
    question: "In a press conference, what is a 'gotcha' question, and how should it be addressed?",
    hint: "Đây là câu hỏi gài bẫy từ phóng viên nhằm khiến người phát ngôn sơ hở; cần giữ bình tĩnh, lịch sự và trả lời trung lập.",
    correctIndices: [1],
    options: [
      {
        text: "A question related to financial topics; providing complete transparency is the ideal response.",
        explanation: "Vì sao sai: 'Gotcha question' không giới hạn ở chủ đề tài chính và cũng không phải lúc nào cũng chia sẻ mọi chi tiết nhạy cảm theo bẫy của người hỏi."
      },
      {
        text: "A question intended to surprise or trap the speaker; the best approach is a polite yet neutral response.",
        explanation: "Chính xác! Câu hỏi 'gotcha' được đặt ra để làm người phát ngôn lúng túng hoặc mắc bẫy; cách xử lý tốt nhất theo giáo trình là phản hồi lịch sự nhưng trung lập (chuyển hướng về thông điệp chính)."
      },
      {
        text: "A question posed in private discussions; an immediate answer is required.",
        explanation: "Vì sao sai: Câu hỏi 'gotcha' diễn ra công khai trước báo chí chứ không phải trao đổi riêng tư."
      },
      {
        text: "A question meant to assess an employee's expertise; responding with speculation is recommended.",
        explanation: "Vì sao sai: Phóng viên hỏi để gây bất ngờ/gài bẫy chứ không phải kiểm tra chuyên môn nội bộ, và tuyệt đối không trả lời bằng suy đoán."
      }
    ]
  },
  {
    id: 44,
    topic: "Global Mindset Capitals",
    question: "Which of the following best describes the concept of Intellectual Capital in the context of global mindsets?",
    hint: "Vốn trí tuệ (Intellectual Capital) gồm 3 thành phần: hiểu biết kinh doanh toàn cầu, tư duy phức tạp và tầm nhìn quốc tế.",
    correctIndices: [2],
    options: [
      {
        text: "Financial investment, Market expansion, Profit maximization.",
        explanation: "Vì sao sai: Đây là các mục tiêu tài chính – kinh doanh thông thường, không phải thành phần của Global Mindset."
      },
      {
        text: "Emotional resilience, Adaptability, Open-mindedness.",
        explanation: "Vì sao sai: Các phẩm chất tâm lý – cảm xúc này thiên về Psychological Capital hơn là Intellectual Capital."
      },
      {
        text: "Global business savvy, Cognitive complexity, Cosmopolitan outlook",
        explanation: "Chính xác! Theo mô hình Global Mindset (Javidan), Intellectual Capital bao gồm sự am hiểu kinh doanh toàn cầu (Global business savvy), năng lực nhận thức đa chiều (Cognitive complexity) và tầm nhìn rộng mở toàn cầu (Cosmopolitan outlook)."
      },
      {
        text: "Physical presence in multiple countries, Local workforce, Cultural isolation.",
        explanation: "Vì sao sai: Sự hiện diện vật lý là yếu tố vận hành, còn 'cô lập văn hóa' đi ngược lại tư duy toàn cầu."
      }
    ]
  },
  {
    id: 45,
    topic: "Crisis Communication Plan",
    question: "What are the four key elements of a crisis communication plan?",
    hint: "Nhớ 4 thành tố chuẩn trong chương Crisis Communication của McLean: Đội ngũ, Người phát ngôn, Địa điểm họp và Kế hoạch truyền thông.",
    correctIndices: [1],
    options: [
      {
        text: "Financial strategy, emergency response, PR team, safety drills",
        explanation: "Vì sao sai: Đây là các yếu tố quản trị rủi ro và vận hành khẩn cấp chung, không phải 4 thành tố truyền thông khủng hoảng theo giáo trình."
      },
      {
        text: "Crisis communication team, spokesperson, meeting location, media plan",
        explanation: "Chính xác! Theo McLean, 4 yếu tố cốt lõi của kế hoạch truyền thông khủng hoảng là: Đội truyền thông khủng hoảng, Người phát ngôn, Địa điểm họp (trung tâm chỉ huy) và Kế hoạch làm việc với truyền thông."
      },
      {
        text: "Crisis team, insurance provider, social media plan, executive report",
        explanation: "Vì sao sai: Nhà cung cấp bảo hiểm và báo cáo điều hành không nằm trong 4 thành phần cốt lõi của kế hoạch truyền thông khủng hoảng."
      },
      {
        text: "Spokesperson, HR team, budget, email response template",
        explanation: "Vì sao sai: Thiếu địa điểm tập kết, đội ngũ xử lý khủng hoảng tổng thể và kế hoạch truyền thông."
      }
    ]
  },
  {
    id: 46,
    topic: "German Gift-Giving Etiquette",
    question: "What should you avoid bringing as a gift when invited to a German home?",
    hint: "Ở Đức, hoa số lẻ là ĐÚNG, còn loại hoa nào gắn với thông điệp tình yêu lãng mạn nên tránh tặng chủ nhà?",
    correctIndices: [1],
    options: [
      {
        text: "A good wine",
        explanation: "Vì sao sai: Một chai rượu vang chất lượng là quà tặng phổ biến và phù hợp khi dự tiệc tại nhà ở Đức."
      },
      {
        text: "Red roses",
        explanation: "Chính xác! Hoa hồng đỏ tại Đức mang ý nghĩa tình yêu lãng mạn nồng cháy, vì vậy nên tránh tặng chủ nhà trong bối cảnh xã giao hoặc công việc để không gây hiểu lầm."
      },
      {
        text: "Chocolates",
        explanation: "Vì sao sai: Sô-cô-la ngon là món quà lịch sự và được hoan nghênh khi đến thăm nhà tại Đức."
      },
      {
        text: "Flowers in an odd number",
        explanation: "Vì sao sai: Ngược lại, tặng hoa số lẻ (trừ 13) là phép lịch sự NÊN làm khi đến nhà người Đức (hoa số chẵn thường gắn với tang lễ)."
      }
    ]
  },
  {
    id: 47,
    topic: "International Business Travel Attire",
    question: "Based on the textbook, what is an important consideration for business travel attire when traveling internationally?",
    hint: "Trang phục khi đi công tác nước ngoài cần thể hiện sự chỉn chu, đáng tin cậy thay vì quá xuề xòa hay lòe loẹt.",
    correctIndices: [2],
    options: [
      {
        text: "Choosing vibrant and eye-catching outfits to attract attention.",
        explanation: "Vì sao sai: Trang phục quá sặc sỡ dễ gây phản cảm trong môi trường kinh doanh trang trọng ở nhiều nước."
      },
      {
        text: "Using shopping bags to carry personal items for ease of access.",
        explanation: "Vì sao sai: Dùng túi nilon/túi mua sắm đựng đồ đi gặp đối tác tạo ấn tượng thiếu chuyên nghiệp."
      },
      {
        text: "Dressing professionally to create a positive impression and demonstrate credibility.",
        explanation: "Chính xác! Giáo trình nhấn mạnh trang phục công tác quốc tế cần chuyên nghiệp, chỉn chu để tạo ấn tượng tốt ban đầu và khẳng định uy tín."
      },
      {
        text: "Focusing primarily on comfort, especially for extended flights.",
        explanation: "Vì sao sai: Trong bối cảnh kinh doanh quốc tế, ưu tiên hàng đầu là tính chuyên nghiệp và sự phù hợp văn hóa chứ không chỉ chạy theo sự thoải mái như đồ mặc nhà."
      }
    ]
  },
  {
    id: 48,
    topic: "International Holidays & Business Schedule",
    question: "Which of the following statements about holidays in different countries is true according to the textbook?",
    hint: "Chú ý bẫy ngày tháng: Tuần lễ Vàng (Golden Week) của Nhật là cuối tháng 4 – đầu tháng 5, châu Âu nghỉ tháng 8, còn Mỹ nghỉ lễ Quốc khánh ngày nào?",
    correctIndices: [3],
    options: [
      {
        text: "In Europe, business is conducted as usual during August.",
        explanation: "Vì sao sai: Tại nhiều nước châu Âu (như Pháp, Ý), tháng 8 là mùa nghỉ hè truyền thống nên nhiều doanh nghiệp đóng cửa hoặc hoạt động rất hạn chế."
      },
      {
        text: "In Mexico, the two-week period including Christmas and New Year's Day is a good time for business.",
        explanation: "Vì sao sai: Đây là kỳ nghỉ lễ cuối năm của người dân Mexico nên không phải thời điểm thuận lợi để hẹn gặp hay làm ăn."
      },
      {
        text: "In Japan, many companies close from August 29 to September 5 to celebrate various holidays and birthdays.",
        explanation: "Vì sao sai: Đánh lừa về thời gian! Kỳ nghỉ Golden Week ở Nhật diễn ra từ 29/4 đến 5/5 (April 29 to May 5), không phải tháng 8–9."
      },
      {
        text: "In the United States, business is not conducted on the Fourth of July.",
        explanation: "Chính xác! Ngày 4/7 (Fourth of July – Quốc khánh Mỹ) là ngày lễ liên bang quan trọng, các cơ quan và doanh nghiệp Mỹ nghỉ làm việc."
      }
    ]
  },
  {
    id: 49,
    topic: "Global Mindset Framework",
    question: "Which of the following are types of capital that contribute to global mindsets?",
    hint: "Mô hình Global Mindset gồm 3 loại vốn: Trí tuệ, Tâm lý và Xã hội.",
    correctIndices: [2],
    options: [
      {
        text: "Physical Capital, Human Capital, Technological Capital.",
        explanation: "Vì sao sai: Đây là các nguồn lực sản xuất kinh doanh thông thường, không phải 3 loại vốn của Global Mindset."
      },
      {
        text: "Economic Capital, Cultural Capital, Industrial Capital.",
        explanation: "Vì sao sai: Không khớp với bộ 3 khái niệm trong giáo trình."
      },
      {
        text: "Intellectual Capital, Psychological Capital, Social Capital.",
        explanation: "Chính xác! Tư duy toàn cầu (Global Mindset) được cấu thành từ 3 loại vốn: Vốn trí tuệ (Intellectual Capital), Vốn tâm lý (Psychological Capital) và Vốn xã hội (Social Capital)."
      },
      {
        text: "Financial Capital, Political Capital, Emotional Capital.",
        explanation: "Vì sao sai: Không phải ba trụ cột chuẩn của mô hình Global Mindset."
      }
    ]
  },
  {
    id: 50,
    topic: "Crisis Communication Planning",
    question: "What is a \"crisis communication plan\"?",
    hint: "Đây là bản kế hoạch được chuẩn bị TỪ TRƯỚC khi khủng hoảng xảy ra để phân công rõ ai làm gì và liên lạc qua kênh nào.",
    correctIndices: [3],
    options: [
      {
        text: "A legal agreement defining stakeholders' obligations in response to a crisis impacting the business.",
        explanation: "Vì sao sai: Đây là tài liệu chuẩn bị truyền thông nội bộ của tổ chức, không phải hợp đồng pháp lý."
      },
      {
        text: "A comprehensive document that identifies potential risks to an organization and proposes corresponding solutions.",
        explanation: "Vì sao sai: Mô tả này thiên về kế hoạch quản trị rủi ro (risk management plan) hơn là kế hoạch truyền thông khi khủng hoảng nổ ra."
      },
      {
        text: "A structured timetable designed to coordinate stakeholder availability during a crisis.",
        explanation: "Vì sao sai: Nó không chỉ đơn thuần là lịch biểu sắp xếp thời gian rảnh của các bên."
      },
      {
        text: "A pre-established framework that outlines responsibilities and communication channels before a crisis occurs.",
        explanation: "Chính xác! Kế hoạch truyền thông khủng hoảng là khung quy trình được thiết lập trước (pre-established) nêu rõ trách nhiệm, người phát ngôn và các kênh liên lạc để ứng phó nhanh khi sự cố xảy ra."
      }
    ]
  }
];
