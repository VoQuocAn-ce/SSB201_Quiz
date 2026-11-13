/**
 * SSB201 - Quiz 10 Data (SP 2024 Final Exam / FE 1669)
 * 48 câu hỏi trắc nghiệm từ thư mục Quiz10
 * Bao gồm gợi ý và giải thích chi tiết đáp án đúng / sai bằng tiếng Việt.
 */

const QUIZ_10_QUESTIONS = [
  {
    id: 1,
    topic: "Gestalt Principles of Organization",
    question: "“I am beginning to notice a pattern in the absentee rate in our department. For the past year, more workers have been absent on the first Friday of the month than on other days. I expect we will again have many absences next Friday, as it is the first Friday of the month.” This is an example of .............",
    hint: "Nguyên lý tri giác Gestalt: Nhận diện một quy luật lặp lại theo dòng thời gian và dự đoán nó sẽ tiếp diễn.",
    correctIndices: [1],
    options: [
      { text: "proximity", explanation: "Vì sao sai: Proximity (tính cận kề) là xu hướng nhóm các yếu tố ở gần nhau trong không gian hoặc thời gian." },
      { text: "continuity", explanation: "Chính xác! Continuity (tính liên tục / xu hướng tiếp diễn) là việc nhận ra một xu hướng hoặc mẫu quy luật đang diễn ra và dự đoán quy luật đó sẽ tiếp tục trong tương lai." },
      { text: "closure", explanation: "Vì sao sai: Closure (tính đóng kín) là xu hướng tự điền vào những phần còn thiếu để tạo nên hình ảnh hoàn chỉnh." },
      { text: "difference", explanation: "Vì sao sai: Difference (tính khác biệt) tập trung vào yếu tố nổi bật khác thường so với phần còn lại." }
    ]
  },
  {
    id: 2,
    topic: "Ritual Gatherings & Ceremonies",
    question: "The conductor of ritual gatherings is called .........",
    hint: "Người chủ trì hoặc điều phối các buổi lễ nghi, sự kiện trang trọng.",
    correctIndices: [2],
    options: [
      { text: "Chairperson", explanation: "Vì sao sai: Chairperson là chủ tọa cuộc họp hoặc chủ tịch hội đồng quản trị." },
      { text: "Master of Art", explanation: "Vì sao sai: Master of Arts là học vị Thạc sĩ nghệ thuật." },
      { text: "Master of Ceremonies", explanation: "Chính xác! Master of Ceremonies (MC - Người điều hành nghi lễ) là người chịu trách nhiệm dẫn dắt và điều phối các cuộc tụ họp, sự kiện mang tính lễ nghi (ritual gatherings)." },
      { text: "Magician", explanation: "Vì sao sai: Magician là ảo thuật gia." }
    ]
  },
  {
    id: 3,
    topic: "Language & Terminology",
    question: "......... is an occupation-specific language used by people in a given profession.",
    hint: "Thuật ngữ chuyên ngành - ngôn ngữ đặc thù của một nghề nghiệp cụ thể.",
    correctIndices: [1],
    options: [
      { text: "Cliché", explanation: "Vì sao sai: Cliché là lời nói sáo rỗng, rập khuôn, quen thuộc đến mức mất đi ý nghĩa." },
      { text: "Jargon", explanation: "Chính xác! Jargon (thuật ngữ chuyên ngành) là tập hợp từ vựng và cách diễn đạt đặc thù chỉ được sử dụng bởi những người trong cùng một ngành nghề hay chuyên môn nhất định." },
      { text: "Slang", explanation: "Vì sao sai: Slang (tiếng lóng) là từ ngữ thông tục không chính thức của một nhóm xã hội, không nhất thiết là nghề nghiệp." },
      { text: "Racist language", explanation: "Vì sao sai: Ngôn ngữ phân biệt chủng tộc." }
    ]
  },
  {
    id: 4,
    topic: "Design Thinking - Ideate",
    question: "Stoke is the method used in Ideate process.",
    hint: "Stoke (hoạt động khởi động năng lượng sáng tạo) được áp dụng trong giai đoạn hình thành ý tưởng (Ideate).",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Các hoạt động Stoke (hâm nóng sáng tạo) là phương pháp chính thức trong Design Thinking (d.school Stanford) để nạp năng lượng cho nhóm trong giai đoạn Ideate." },
      { text: "False", explanation: "Vì sao sai: Đây là một kỹ thuật khởi động chuẩn mực trong quy trình Design Thinking." }
    ]
  },
  {
    id: 5,
    topic: "Business Etiquette",
    question: "......... refers to manners and behavior considered acceptable in social and business situations.",
    hint: "Phép lịch sự, chuẩn mực ứng xử được xã hội và giới kinh doanh công nhận.",
    correctIndices: [2],
    options: [
      { text: "Protocol", explanation: "Vì sao sai: Protocol (nghi thức ngoại giao) là hệ thống quy tắc chính thức, khắt khe dành cho nghi lễ nhà nước hoặc ngoại giao." },
      { text: "Greetings", explanation: "Vì sao sai: Greetings chỉ là hành vi chào hỏi ban đầu." },
      { text: "Etiquette", explanation: "Chính xác! Etiquette (phép lịch sự / chuẩn mực ứng xử) là các quy tắc về hành vi và thái độ được coi là đúng mực, lịch thiệp trong giao tiếp xã hội và kinh doanh." },
      { text: "Introduction", explanation: "Vì sao sai: Introduction là hành động giới thiệu." }
    ]
  },
  {
    id: 6,
    topic: "Culture & Perception",
    question: "......... are ways of being that allow us to see, perceive, and reason through our own cultural awareness.",
    hint: "Tâm thế / Khung nhận thức văn hóa giúp chúng ta quan sát, cảm nhận và suy luận qua lăng kính văn hóa của mình.",
    correctIndices: [2],
    options: [
      { text: "Confidences", explanation: "Vì sao sai: Sự tự tin không phải lăng kính tri giác văn hóa." },
      { text: "Ethnocentrism", explanation: "Vì sao sai: Chủ nghĩa vị chủng là thái độ coi văn hóa mình hơn văn hóa khác." },
      { text: "Mindsets", explanation: "Chính xác! Mindsets (khung tư duy / tâm thế) là những cách thế hiện hữu cho phép chúng ta nhìn nhận, tri giác và suy luận thông qua sự nhận thức văn hóa của chính mình." },
      { text: "Cultures", explanation: "Vì sao sai: Culture là toàn bộ hệ thống văn hóa, còn 'ways of being that allow us to see...' là định nghĩa của Mindsets." }
    ]
  },
  {
    id: 7,
    topic: "Message Types",
    question: "......... refer to the intentional and unintentional ways a primary message is communicated. This may include vocal inflection, gestures and posture, or rate of speech that influence the interpretation or perception of your message.",
    hint: "Thông điệp bổ trợ (auxiliary message) bao gồm ngữ điệu giọng nói, cử chỉ, tốc độ nói đi kèm thông điệp chính.",
    correctIndices: [2],
    options: [
      { text: "Primary messages", explanation: "Vì sao sai: Primary message là thông điệp chính (lời nói hoặc chữ viết mang nội dung cốt lõi)." },
      { text: "Secondary messages", explanation: "Vì sao sai: Secondary message là thông điệp vô tình lộ ra qua ngữ cảnh, môi trường hoặc ấn tượng phi chủ đích." },
      { text: "Auxiliary messages", explanation: "Chính xác! Auxiliary messages (thông điệp phụ trợ / đi kèm) thể hiện qua ngữ điệu (vocal inflection), cử chỉ, tư thế, tốc độ nói... góp phần định hình cách người nhận hiểu thông điệp chính." },
      { text: "Report", explanation: "Vì sao sai: Báo cáo là thể loại tài liệu." }
    ]
  },
  {
    id: 8,
    topic: "Design Thinking - Empathize",
    question: "To empathize, we observe, which means...",
    hint: "Trong giai đoạn Thấu cảm: Observe (Quan sát) có nghĩa là theo dõi người dùng và hành vi của họ trong ngữ cảnh đời sống thực tế.",
    correctIndices: [1],
    options: [
      { text: "the foundation of a human-centered design process", explanation: "Vì sao sai: Đây là định nghĩa của Empathize nói chung, không phải của riêng bước Observe." },
      { text: "we view users and their behavior in the context of their lives", explanation: "Chính xác! Trong Design Thinking (d.school): 'Observe: we view users and their behavior in the context of their lives' (Quan sát người dùng và hành vi của họ trong bối cảnh cuộc sống thực của họ)." },
      { text: "we interact with and interview users through both scheduled and short intercept encounters", explanation: "Vì sao sai: Đây là định nghĩa của Engage (Tương tác / Phỏng vấn)." },
      { text: "we experience what our user experiences", explanation: "Vì sao sai: Đây là định nghĩa của Immerse (Trải nghiệm đắm chìm)." }
    ]
  },
  {
    id: 9,
    topic: "Public Speaking Model",
    question: "In a public speaking situation, the source is .........",
    hint: "Nguồn phát thông điệp trong buổi diễn thuyết trước công chúng chính là diễn giả.",
    correctIndices: [2],
    options: [
      { text: "Audience", explanation: "Vì sao sai: Khán giả là người nhận (Receiver)." },
      { text: "Coordinator", explanation: "Vì sao sai: Người điều phối chỉ sắp xếp hậu cần." },
      { text: "The person giving the speech.", explanation: "Chính xác! Trong tình huống diễn thuyết trước công chúng, Source (Nguồn / Người phát) chính là người đang trình bày bài nói (the speaker / the person giving the speech)." }
    ]
  },
  {
    id: 10,
    topic: "Culture & Communication",
    question: "What is the structure through which the communication is formulated and interpreted?",
    hint: "Cấu trúc định hình và giúp diễn giải toàn bộ quá trình giao tiếp chính là văn hóa.",
    correctIndices: [2],
    options: [
      { text: "It is context.", explanation: "Vì sao sai: Ngữ cảnh là hoàn cảnh tức thời, không phải cấu trúc căn bản." },
      { text: "It is communicator.", explanation: "Vì sao sai: Người giao tiếp là chủ thể thực hiện hành vi." },
      { text: "It is culture.", explanation: "Chính xác! Văn hóa (Culture) là khuôn khổ cấu trúc mà qua đó mọi hành vi giao tiếp được tạo lập và diễn giải ý nghĩa." },
      { text: "It is feedback.", explanation: "Vì sao sai: Phản hồi là sự đáp lại của người nhận." }
    ]
  },
  {
    id: 11,
    topic: "VoIP Communication",
    question: "With the availability of VoIP, both audio and visual images are available to the conversation participants. True or False?",
    hint: "VoIP (như Skype, Teams, Zoom) hiện nay hỗ trợ cả âm thanh và hình ảnh video trực tiếp.",
    correctIndices: [0],
    options: [
      { text: "True", explanation: "Chính xác! Nhờ công nghệ VoIP hiện đại, các bên tham gia giao tiếp có thể truyền tải đồng thời cả âm thanh và hình ảnh trực tiếp (audio and visual images)." },
      { text: "False", explanation: "Vì sao sai: VoIP ngày nay tích hợp đầy đủ cả truyền hình ảnh trực tuyến (video calling)." }
    ]
  },
  {
    id: 12,
    topic: "International Etiquette - Malaysia",
    question: "Avoid wearing _________ when visiting Malaysia as certain shades are reserved for the royal families in that country.",
    hint: "Tại Malaysia, màu vàng là màu sắc biểu trưng dành riêng cho hoàng gia.",
    correctIndices: [2],
    options: [
      { text: "red", explanation: "Vì sao sai: Màu đỏ phổ biến trong cộng đồng người Hoa tại Malaysia." },
      { text: "white", explanation: "Vì sao sai: Màu trắng liên quan đến tang lễ nhưng không phải màu dành riêng cho hoàng gia." },
      { text: "yellow", explanation: "Chính xác! Tại Malaysia, cần tránh mặc màu vàng (yellow) vì đây là màu sắc truyền thống được dành riêng cho các thành viên Hoàng gia Malaysia." },
      { text: "purple", explanation: "Vì sao sai: Màu tím không mang ý nghĩa dành riêng cho hoàng gia Malaysia." }
    ]
  },
  {
    id: 13,
    topic: "Speech Preparation - Outlining",
    question: "A(n)............ is a framework that organizes main ideas and subordinate ideas in a hierarchical series of roman numerals and alphabetical letters.",
    hint: "Khung dàn ý tổ chức các ý chính và phụ theo số La Mã (I, II) và chữ cái (A, B).",
    correctIndices: [0],
    options: [
      { text: "Outline", explanation: "Chính xác! Dàn ý (Outline) là một khung cấu trúc phân cấp sắp xếp các ý chính và ý phụ theo hệ thống chữ số La Mã và chữ cái bảng chữ cái." },
      { text: "Schedule", explanation: "Vì sao sai: Lịch trình (Schedule) sắp xếp công việc theo thời gian." },
      { text: "Timeline", explanation: "Vì sao sai: Dòng thời gian là trục thứ tự các mốc sự kiện." },
      { text: "Report", explanation: "Vì sao sai: Báo cáo là văn bản hoàn chỉnh." }
    ]
  },
  {
    id: 14,
    topic: "Visual Aids Rules",
    question: "The most important rule to remember in using visuals is this: the visuals are ____________________________",
    hint: "Quy tắc vàng: Phương tiện thị giác chỉ để bổ trợ, không thể thay thế cho tài liệu hay bài thuyết trình.",
    correctIndices: [0],
    options: [
      { text: "to support your document or presentation, not to take the place of it.", explanation: "Chính xác! Quy tắc quan trọng nhất khi dùng hình ảnh trực quan: Chúng dùng để hỗ trợ, bổ sung cho tài liệu/bài thuyết trình, tuyệt đối không thay thế được bài thuyết trình của bạn." },
      { text: "to show your excellent skills in making perfect documents or presentations with best illustrations.", explanation: "Vì sao sai: Mục tiêu không phải để khoe kỹ năng thiết kế đồ họa." },
      { text: "to impress the audience with your skills in making perfect documents or presentations.", explanation: "Vì sao sai: Hình ảnh dùng để làm sáng tỏ thông điệp, không phải để gây ấn tượng cá nhân." },
      { text: "to entertain the audience.", explanation: "Vì sao sai: Giải trí chỉ là mục đích phụ, không phải nguyên tắc căn bản của visual aids trong kinh doanh." }
    ]
  },
  {
    id: 15,
    topic: "Crisis Communication Plan",
    question: "Which is NOT an element of a crisis communication plan?",
    hint: "Địa điểm ăn ngủ nghỉ ngơi không phải thành phần thuộc kế hoạch truyền thông khủng hoảng.",
    correctIndices: [2],
    options: [
      { text: "Crisis communication team members with contact information", explanation: "Vì sao đúng: Đội ngũ xử lý khủng hoảng kèm thông tin liên lạc là bắt buộc." },
      { text: "Designated spokesperson", explanation: "Vì sao đúng: Người phát ngôn chính thức chỉ định là thành phần quan trọng." },
      { text: "Eating place/ resting location", explanation: "Chính xác! Địa điểm ăn uống / nghỉ ngơi KHÔNG nằm trong kế hoạch truyền thông khủng hoảng (Crisis communication plan)." },
      { text: "Media plan with procedures", explanation: "Vì sao đúng: Kế hoạch và quy trình làm việc với báo chí truyền thông là thiết yếu." }
    ]
  },
  {
    id: 16,
    topic: "Collectivist vs Individualistic Cultures",
    question: "In _________ cultures, where the community’s well-being is promoted or valued above that of the individual, face-saving strategies are common communicative strategies.",
    hint: "Trong nền văn hóa tập thể, lợi ích cộng đồng được đặt lên trên cá nhân và việc giữ thể diện (face-saving) rất quan trọng.",
    correctIndices: [0],
    options: [
      { text: "collectivist", explanation: "Chính xác! Trong các nền văn hóa tập thể (collectivist cultures), lợi ích của cộng đồng được ưu tiên hơn cá nhân, và các chiến lược giữ thể diện (face-saving strategies) là quy tắc giao tiếp rất phổ biến." },
      { text: "individualistic", explanation: "Vì sao sai: Văn hóa cá nhân coi trọng sự tự do, thẳng thắn và quyền lợi cá nhân hơn giữ thể diện nhóm." },
      { text: "European", explanation: "Vì sao sai: Châu Âu chủ yếu theo văn hóa cá nhân (individualistic)." },
      { text: "American", explanation: "Vì sao sai: Mỹ là điển hình của văn hóa chủ nghĩa cá nhân cao độ." }
    ]
  },
  {
    id: 17,
    topic: "Speech Types - Persuasive",
    question: "“Speech to persuade” means",
    hint: "Bài phát biểu nhằm mục đích thuyết phục, thay đổi thái độ, niềm tin hay giá trị của người nghe.",
    correctIndices: [2],
    options: [
      { text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise", explanation: "Vì sao sai: Đây là mục tiêu của bài phát biểu thông tin (Speech to inform)." },
      { text: "to show the audience how to use, operate, or do something.", explanation: "Vì sao sai: Đây là bài hướng dẫn thao tác (Demonstration speech)." },
      { text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.", explanation: "Chính xác! Phát biểu thuyết phục (Speech to persuade) là việc tác động lên khán giả bằng cách đưa ra các lập luận nhằm thay đổi thái độ, niềm tin hoặc hệ giá trị của họ." },
      { text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.", explanation: "Vì sao sai: Đây là bài nói giải trí (Speech to entertain)." }
    ]
  },
  {
    id: 18,
    topic: "Audience Analysis - Demographics",
    question: "“If you were born female, then your view of the world may be different from that of a male, and may be similar to that of many other females. Being female means that you share this “femaleness” trait with roughly half the world's population.” Here is an example of ......................",
    hint: "Giới tính, tuổi tác, thu nhập, nơi sinh sống là những đặc điểm nhân khẩu học.",
    correctIndices: [0],
    options: [
      { text: "demographic traits", explanation: "Chính xác! Đặc điểm nhân khẩu học (Demographic traits) bao gồm giới tính, độ tuổi, tôn giáo, chủng tộc, nghề nghiệp... chi phối góc nhìn và kinh nghiệm sống chung của nhóm dân số." },
      { text: "individual differences", explanation: "Vì sao sai: Khác biệt cá nhân nói về tính cách riêng biệt của từng người, còn đoạn trích nói về đặc tính chung của nửa dân số thế giới." },
      { text: "perceptions", explanation: "Vì sao sai: Tri giác là quá trình nhận thức, không phải thuật ngữ phân loại đối tượng khán giả." }
    ]
  },
  {
    id: 19,
    topic: "Writing Skills Practice",
    question: "Targeted practice in writing, which involves identifying your weak areas and specifically working to improve them, is especially valuable.",
    hint: "Luyện tập có chủ đích (targeted practice) bằng cách tập trung cải thiện các điểm yếu là phương pháp cực kỳ giá trị.",
    correctIndices: [1],
    options: [
      { text: "False", explanation: "Vì sao sai: Luyện tập vu vơ không hiệu quả bằng việc tập trung vào điểm yếu." },
      { text: "True", explanation: "Chính xác! Việc rèn luyện kỹ năng viết có mục tiêu (targeted practice) bằng cách nhận diện các điểm yếu cụ thể của bản thân và tập trung khắc phục chúng mang lại giá trị tiến bộ vượt bậc." }
    ]
  },
  {
    id: 20,
    topic: "Beliefs, Attitudes & Values",
    question: ".................. are core concepts and ideas of what we consider good or bad, right or wrong, or what is worth the sacrifice.",
    hint: "Hệ giá trị (Values) là quan niệm cốt lõi về điều tốt hay xấu, đúng hay sai, hoặc điều gì đáng để hy sinh.",
    correctIndices: [0],
    options: [
      { text: "Values", explanation: "Chính xác! Giá trị (Values) là những ý niệm và khái niệm cốt lõi sâu sắc nhất của chúng ta về những gì được xem là tốt - xấu, đúng - sai, hay đáng để cống hiến và hy sinh." },
      { text: "Attitude", explanation: "Vì sao sai: Thái độ (Attitude) là cảm xúc yêu ghét tức thời đối với sự vật/hiện tượng." },
      { text: "Beliefs", explanation: "Vì sao sai: Niềm tin (Beliefs) là những điều ta tin là đúng hay có thật, nhưng chuẩn mực về tốt/xấu, đạo đức là Values." },
      { text: "No correct answer", explanation: "Vì sao sai: Values là đáp án chuẩn." }
    ]
  },
  {
    id: 21,
    topic: "Definition of Communication",
    question: ".........is an activity, skill and art that incorporates lessons learned across a wide spectrum of human knowledge.",
    hint: "Giao tiếp vừa là hoạt động, kỹ năng và nghệ thuật kết tinh tri thức nhân loại.",
    correctIndices: [0],
    options: [
      { text: "Communication", explanation: "Chính xác! Giao tiếp (Communication) là một hoạt động, kỹ năng và nghệ thuật tổng hòa tri thức từ nhiều lĩnh vực phong phú của nhân loại." },
      { text: "Studying", explanation: "Vì sao sai: Việc học tập chỉ là tiếp thu kiến thức." },
      { text: "Transferring", explanation: "Vì sao sai: Chuyển giao chỉ mang nghĩa kỹ thuật." },
      { text: "Understanding", explanation: "Vì sao sai: Sự thấu hiểu là một mục tiêu trong giao tiếp." }
    ]
  },
  {
    id: 22,
    topic: "Speech Structure - Conclusion",
    question: "At the end of the message, your .................... should provide the audience with a sense of closure by summarizing your main points and relating them to the overall topic.",
    hint: "Phần kết luận tóm tắt các luận điểm chính và mang lại cảm giác trọn vẹn, khép lại bài nói.",
    correctIndices: [2],
    options: [
      { text: "attention statement", explanation: "Vì sao sai: Câu lôi cuốn sự chú ý nằm ở đầu bài." },
      { text: "introduction", explanation: "Vì sao sai: Phần mở đầu giới thiệu chủ đề." },
      { text: "conclusion", explanation: "Chính xác! Phần kết luận (conclusion) nằm ở cuối thông điệp, tóm tắt các điểm then chốt và kết nối chúng về chủ đề chung để tạo cảm giác trọn vẹn (sense of closure)." },
      { text: "residual message", explanation: "Vì sao sai: Residual message là thông điệp đọng lại trong tâm trí khán giả sau bài nói." }
    ]
  },
  {
    id: 23,
    topic: "Nonverbal - Attire",
    question: "According to U.S. researchers and image consultants, people who wear suits, whether male or female, are perceived as more ___________ than those who wear any other type of attire.",
    hint: "Mặc âu phục (suit) khiến người mặc được đánh giá là chuyên nghiệp hơn hẳn các trang phục khác.",
    correctIndices: [2],
    options: [
      { text: "beautiful/handsome", explanation: "Vì sao sai: Vẻ đẹp ngoại hình không phải thước đo chính mà bộ vest tạo ra." },
      { text: "polite", explanation: "Vì sao sai: Lịch thiệp chỉ là một khía cạnh ứng xử." },
      { text: "professional", explanation: "Chính xác! Theo các chuyên gia hình ảnh và nghiên cứu tại Mỹ, những người mặc vest (suits) dù là nam hay nữ đều được người khác tri giác là chuyên nghiệp hơn (more professional) so với bất kỳ kiểu trang phục nào khác." },
      { text: "intelligent", explanation: "Vì sao sai: Trang phục tạo ấn tượng về tính chuyên nghiệp hơn là đo lường chỉ số thông minh." }
    ]
  },
  {
    id: 24,
    topic: "Cultural Dimensions",
    question: "The _________ dimension of culture relates to the reality of our environment and the cultural activities of the people.",
    hint: "Chiều kích vật lý của văn hóa phản ánh hiện thực môi trường sống và các hoạt động thực tế của con người.",
    correctIndices: [0],
    options: [
      { text: "physical", explanation: "Chính xác! Chiều kích vật lý (Physical dimension) của văn hóa liên quan đến thực tế môi trường sống địa lý và các hoạt động văn hóa sinh hoạt vật chất của con người." },
      { text: "psychological", explanation: "Vì sao sai: Chiều kích tâm lý liên quan đến niềm tin, cảm xúc và suy nghĩ nội tâm." },
      { text: "language", explanation: "Vì sao sai: Chiều kích ngôn ngữ liên quan đến hệ thống ký hiệu và tiếng nói." },
      { text: "value", explanation: "Vì sao sai: Chiều kích giá trị liên quan đến đạo đức và chuẩn mực tốt/xấu." }
    ]
  },
  {
    id: 25,
    topic: "Contexts of Communication - Public",
    question: "___________ communication involves sending a single message to a group. It allows us to communicate our message to a large number of people.",
    hint: "Giao tiếp công chúng gửi một thông điệp đến một nhóm đông người trong cùng một không gian.",
    correctIndices: [1],
    options: [
      { text: "Intrapersonal", explanation: "Vì sao sai: Giao tiếp nội tâm là tự giao tiếp với chính mình." },
      { text: "Public", explanation: "Chính xác! Giao tiếp trước công chúng (Public communication) là việc truyền một thông điệp duy nhất tới một nhóm đông người cùng một lúc." },
      { text: "Mass", explanation: "Vì sao sai: Giao tiếp đại chúng (Mass communication) sử dụng các phương tiện truyền thông phát sóng đến lượng khán giả phân tán vô danh khổng lồ." },
      { text: "Interpersonal", explanation: "Vì sao sai: Giao tiếp liên cá nhân diễn ra giữa hai người (hoặc nhóm rất nhỏ)." }
    ]
  },
  {
    id: 26,
    topic: "Schutz Interpersonal Needs - Inclusion",
    question: "According to Schutz, people who may be less likely to seek interaction, may prefer smaller groups, and will generally not be found on center stage are called .............",
    hint: "Trong nhu cầu hòa nhập (Inclusion) của William Schutz, người ít chủ động giao lưu, thích nhóm nhỏ gọi là undersocials.",
    correctIndices: [1],
    options: [
      { text: "Oversocials", explanation: "Vì sao sai: Oversocials là người luôn khao khát được chú ý và luôn muốn đứng giữa đám đông." },
      { text: "Undersocials", explanation: "Chính xác! Theo lý thuyết FIRO của Schutz, người có xu hướng 'Undersocial' ít khi chủ động tìm kiếm tương tác, thích các nhóm nhỏ yên tĩnh và tránh đứng ở vị trí tâm điểm chú ý." },
      { text: "Personal individual", explanation: "Vì sao sai: Thuật ngữ liên quan đến nhu cầu tình cảm (Affection)." },
      { text: "Social person", explanation: "Vì sao sai: Social person là người có sự cân bằng lành mạnh trong giao tiếp xã hội." }
    ]
  },
  {
    id: 27,
    topic: "Media & Press Conference",
    question: "Why a speaker in a press conference should not display a nonverbal gesture or make a face at a question?",
    hint: "Cử chỉ phi ngôn ngữ hoặc biểu cảm khuôn mặt dễ bị diễn giải sai lệch trên truyền thông.",
    correctIndices: [2],
    options: [
      { text: "Because it will make the speaker look unprofessional.", explanation: "Vì sao sai: Thiếu chuyên nghiệp chỉ là một phần hệ quả, rủi ro lớn nhất là bị hiểu sai lệch." },
      { text: "Because it will not show the respect to the media.", explanation: "Vì sao sai: Không phải lý do cốt lõi." },
      { text: "Because it can be misinterpreted.", explanation: "Chính xác! Trong họp báo, các biểu cảm phi ngôn ngữ có thể bị truyền thông cắt lát và diễn giải hoàn toàn sai lệch (misinterpreted) so với dụng ý ban đầu của diễn giả." },
      { text: "Because it is impolite and abusive.", explanation: "Vì sao sai: Biểu cảm chưa hẳn là lăng mạ (abusive)." }
    ]
  },
  {
    id: 28,
    topic: "Business Cards Etiquette",
    question: "In some cultures, what are taken seriously that you need to include on your business card?",
    hint: "Chức vụ, chức danh và học hàm học vị là những thông tin rất được coi trọng trên danh thiếp ở nhiều nền văn hóa.",
    correctIndices: [0],
    options: [
      { text: "My position and titles or degrees in addition to my company name.", explanation: "Chính xác! Tại nhiều nền văn hóa (như châu Á, Đức), chức vụ, chức danh và bằng cấp học vị (titles or degrees) được xem trọng hàng đầu và cần phải ghi rõ ràng trên danh thiếp." },
      { text: "My name, email, and home address in addition to my company name.", explanation: "Vì sao sai: Địa chỉ nhà riêng không bao giờ đưa lên danh thiếp kinh doanh chuyên nghiệp." },
      { text: "My name, nickname, and email in addition to my company name.", explanation: "Vì sao sai: Biệt danh (nickname) không dùng trong danh thiếp kinh doanh chính thức." },
      { text: "My email address, full name, and cellphone number in addition to my company name.", explanation: "Vì sao sai: Đây là thông tin liên lạc tối thiểu, nhưng câu hỏi nhấn mạnh yếu tố 'taken seriously' về địa vị xã hội (titles/degrees)." }
    ]
  },
  {
    id: 29,
    topic: "Design Thinking - Ideate Mode",
    question: "......... is the mode during your design process in which you focus on idea generation.",
    hint: "Giai đoạn trong quy trình thiết kế tập trung hoàn toàn vào việc sáng tạo ra các ý tưởng mới.",
    correctIndices: [0],
    options: [
      { text: "Ideate", explanation: "Chính xác! Giai đoạn Ideate (Hình thành ý tưởng) là bước trong quy trình Design Thinking mà nhóm tập trung cao độ vào việc tạo ra càng nhiều ý tưởng giải pháp càng tốt." },
      { text: "Empathize", explanation: "Vì sao sai: Empathize là giai đoạn đồng cảm, tìm hiểu nhu cầu người dùng." },
      { text: "Define", explanation: "Vì sao sai: Define là giai đoạn xác định tuyên bố vấn đề." },
      { text: "Test", explanation: "Vì sao sai: Test là giai đoạn thử nghiệm nguyên mẫu với người dùng." }
    ]
  },
  {
    id: 30,
    topic: "International Business Practices",
    question: "Office customs and practices include .....................",
    hint: "Tập tục văn phòng gồm giờ làm việc, giờ ăn trưa và giải lao, mức độ trang trọng và quy trình tuyển dụng/sa thải.",
    correctIndices: [2],
    options: [
      { text: "typical hours of work, friend and family members, dinner times, degree of formality, and hiring/firing.", explanation: "Vì sao sai: Bạn bè và bữa tối gia đình không phải tập tục văn phòng." },
      { text: "typical days off, friend and family members, holidays, degree of formality, and hiring/firing.", explanation: "Vì sao sai: Có chứa thông tin gia đình bạn bè không thuộc văn phòng." },
      { text: "typical hours of work, lunch and break times, degree of formality, and hiring/firing.", explanation: "Chính xác! Tập quán và thông lệ tại văn phòng (Office customs and practices) bao gồm: giờ giấc làm việc chuẩn, giờ nghỉ trưa & giải lao, mức độ trang trọng nơi công sở, cùng quy chế tuyển dụng và sa thải." },
      { text: "typical days off, friend and family members, hobbies and likes, degree of education, and hiring/firing.", explanation: "Vì sao sai: Sở thích và người thân không nằm trong thông lệ văn phòng." }
    ]
  },
  {
    id: 31,
    topic: "Schutz Interpersonal Needs - Control",
    question: "According to Schutz, _________ share the need between the individual and the group, and may try to hold a departmental meeting to gather information and share.",
    hint: "Người theo phong cách dân chủ (democrats) chia sẻ quyền lực và nhu cầu kiểm soát giữa cá nhân và tập thể.",
    correctIndices: [0],
    options: [
      { text: "democrats", explanation: "Chính xác! Theo William Schutz, trong nhu cầu Kiểm soát (Control): Democrats (người có xu hướng dân chủ) biết cân bằng và chia sẻ nhu cầu quyền hạn giữa cá nhân và nhóm, thường tổ chức các cuộc họp để lấy ý kiến và cùng nhau quyết định." },
      { text: "abdicrats", explanation: "Vì sao sai: Abdicrats là người thoái thác quyền lực, luôn nhường quyền quyết định cho người khác." },
      { text: "personal individuals", explanation: "Vì sao sai: Personal individual thuộc nhóm nhu cầu Tình cảm (Affection)." },
      { text: "autocrats", explanation: "Vì sao sai: Autocrats là người độc đoán, luôn muốn thâu tóm và áp đặt toàn bộ quyền kiểm soát." }
    ]
  },
  {
    id: 32,
    topic: "Elements of Communication",
    question: "Written communication involves the same.......... basic elements as oral communication.",
    hint: "Giao tiếp viết có cùng 8 thành phần cơ bản như giao tiếp nói.",
    correctIndices: [3],
    options: [
      { text: "3", explanation: "Vì sao sai: Quá ít so với mô hình 8 thành phần." },
      { text: "4", explanation: "Vì sao sai: Mô hình SMCR cơ bản có 4, nhưng giáo trình McLean phân tích 8 thành phần." },
      { text: "5", explanation: "Vì sao sai: Không phản ánh đầy đủ môi trường, ngữ cảnh và nhiễu." },
      { text: "8", explanation: "Chính xác! Giao tiếp bằng văn bản bao gồm 8 yếu tố căn bản tương tự giao tiếp bằng lời nói: Source, Receiver, Message, Channel, Feedback, Environment, Context, và Interference." }
    ]
  },
  {
    id: 33,
    topic: "Self Concept & Self-image",
    question: "Your ................ is how you see yourself, how you would describe yourself to others.",
    hint: "Hình ảnh bản thân (Self-image) là cách bạn tự nhìn nhận về mình và cách bạn miêu tả bản thân với người khác.",
    correctIndices: [0],
    options: [
      { text: "self-image", explanation: "Chính xác! Self-image (hình ảnh bản thân) là cách bạn nhìn nhận chính mình và cách bạn tự miêu tả, khắc họa bản thân trước người khác." },
      { text: "self-esteem", explanation: "Vì sao sai: Self-esteem là mức độ bạn đánh giá cao và tôn trọng giá trị của bản thân." },
      { text: "self-concept", explanation: "Vì sao sai: Self-concept là khái niệm bản thân tổng thể bao gồm cả self-image và self-esteem." },
      { text: "consistent", explanation: "Vì sao sai: Consistent là tính kiên định, không phải một thành phần bản ngã." }
    ]
  },
  {
    id: 34,
    topic: "International Etiquette - India",
    question: "Why in India we should not give any gifts made of cowhide?",
    hint: "Bò là con vật thiêng liêng trong đạo Hindu tại Ấn Độ, nên đồ da bò là điều kiêng kỵ tuyệt đối.",
    correctIndices: [1],
    options: [
      { text: "Because it may be considered cheap gift.", explanation: "Vì sao sai: Đồ da thật thường đắt tiền, không phải do rẻ tiền." },
      { text: "Because the cow is sacred in India.", explanation: "Chính xác! Tại Ấn Độ, phần lớn người dân theo đạo Hindu tôn sùng loài bò như một linh vật thiêng liêng (the cow is sacred). Tặng các món đồ làm từ da bò (cowhide) là sự xúc phạm văn hóa và tín ngưỡng nghiêm trọng." },
      { text: "Because it means we do not respect the recipient.", explanation: "Vì sao sai: Lý do nguồn gốc bắt nguồn trực tiếp từ sự thiêng liêng của loài bò đối với tôn giáo bản địa." },
      { text: "Because it may be considered expensive gift.", explanation: "Vì sao sai: Không phải vì lý do giá thành đắt đỏ." }
    ]
  },
  {
    id: 35,
    topic: "Media Communication - Sound Bite",
    question: "The President John F. Kennedy's famous statement, “Ask not what your country can do for you, but what you can do for your country.”, is a ____________",
    hint: "Một câu trích dẫn ngắn gọn, đắt giá, ấn tượng trên sóng truyền thông được gọi là sound bite.",
    correctIndices: [3],
    options: [
      { text: "slogan", explanation: "Vì sao sai: Slogan là khẩu hiệu quảng bá thương hiệu hoặc chính dịch ngắn." },
      { text: "memory", explanation: "Vì sao sai: Ký ức không phải thuật ngữ truyền thông." },
      { text: "quotes", explanation: "Vì sao sai: Quotes là trích dẫn nói chung, nhưng trong thuật ngữ truyền thông và báo chí đây là điển hình của sound bite." },
      { text: "sound bite", explanation: "Chính xác! Câu nói bất hủ của JFK là một ví dụ kinh điển về 'Sound bite' - một đoạn phát biểu ngắn gọn, đanh thép, dễ nhớ, được thiết kế hoàn hảo để truyền thông phát đi phát lại." }
    ]
  },
  {
    id: 36,
    topic: "Communication Model - Channel",
    question: "The ......... is the way in which a message or messages travel between source and receiver.”",
    hint: "Kênh giao tiếp là con đường mà thông điệp được truyền tải giữa nguồn và người nhận.",
    correctIndices: [0],
    options: [
      { text: "Channel", explanation: "Chính xác! Channel (kênh truyền thông) là phương tiện hoặc con đường mà thông điệp di chuyển giữa người gửi (source) và người nhận (receiver)." },
      { text: "Noise", explanation: "Vì sao sai: Nhiễu là yếu tố gây cản trở hoặc làm biến dạng thông điệp." },
      { text: "Environment", explanation: "Vì sao sai: Môi trường là không gian vật lý và tâm lý." },
      { text: "Conversation", explanation: "Vì sao sai: Cuộc hội thoại là hình thức giao tiếp." }
    ]
  },
  {
    id: 37,
    topic: "Speech Types - Entertainment",
    question: "“Speech to entertain” means",
    hint: "Bài phát biểu giải trí nhằm mang lại niềm vui, thư giãn cho người nghe thông qua sự hài hước, dí dỏm.",
    correctIndices: [3],
    options: [
      { text: "to increase the audience's knowledge, teach about a topic or issue, and share your expertise.", explanation: "Vì sao sai: Đây là bài nói cung cấp thông tin (Informative speech)." },
      { text: "to show the audience how to use, operate, or do something.", explanation: "Vì sao sai: Đây là bài phát biểu hướng dẫn thực hành (Demonstration speech)." },
      { text: "to influence the audience by presenting arguments intended to change attitudes, beliefs, or values.", explanation: "Vì sao sai: Đây là bài nói thuyết phục (Persuasive speech)." },
      { text: "to amuse the audience by engaging them in a relatively light-hearted speech that may have a serious point or goal.", explanation: "Chính xác! Phát biểu để giải trí (Speech to entertain) là bài nói nhẹ nhàng, lôi cuốn, tạo tiếng cười hoặc sự thích thú cho người nghe nhưng vẫn có thể truyền tải một thông điệp ý nghĩa." }
    ]
  },
  {
    id: 38,
    topic: "Writing Process - Incubation",
    question: "......... is the process by which you cause an idea or ideas to develop in your mind.",
    hint: "Quá trình ấp ủ (Incubation) cho phép các ý tưởng phát triển và chín muồi dần trong tâm trí.",
    correctIndices: [1],
    options: [
      { text: "Production", explanation: "Vì sao sai: Production là việc sản xuất và viết ra văn bản thực tế." },
      { text: "Incubation", explanation: "Chính xác! Giai đoạn ấp ủ (Incubation) là quá trình bạn để ý tưởng lắng đọng, phát triển và kết nối tự nhiên trong tiềm thức trước khi bắt tay vào phác thảo hoàn chỉnh." },
      { text: "Revision", explanation: "Vì sao sai: Revision là việc đọc lại và chỉnh sửa văn bản." },
      { text: "Incorporation", explanation: "Vì sao sai: Incorporation là sự tích hợp thông tin." }
    ]
  },
  {
    id: 39,
    topic: "International Etiquette - Taiwan",
    question: "In Taiwan, messages should not be written in _________ as this has death connotations.",
    hint: "Trong văn hóa truyền thống Đài Loan / Trung Hoa, viết mực đỏ mang ý nghĩa tang tóc, cắt đứt quan hệ hoặc điềm xấu.",
    correctIndices: [0],
    options: [
      { text: "red ink", explanation: "Chính xác! Ở Đài Loan (và các nước văn hóa Á Đông), tuyệt đối không viết thư hay ghi chú bằng mực đỏ (red ink) vì màu mực đỏ gắn liền với tên tử tù, sự cắt đứt quan hệ hoặc mang hàm ý chết chóc (death connotations)." },
      { text: "black ink", explanation: "Vì sao sai: Mực đen là màu mực chuẩn mực phổ biến nhất trong văn bản." },
      { text: "blue ink", explanation: "Vì sao sai: Mực xanh là màu thông dụng và chuẩn mực trong văn phòng." },
      { text: "green ink", explanation: "Vì sao sai: Mực xanh lá không mang hàm ý tang tóc ở Đài Loan." }
    ]
  },
  {
    id: 40,
    topic: "Argumentation Strategies - GASCAP/T",
    question: "The “G” in Effective Argumentation Strategies: GASCAP/T means ............ (Fulkerson, 1996).",
    hint: "Chữ G trong mô hình GASCAP/T đại diện cho chiến lược lập luận quy nạp / khái quát hóa (Generalization).",
    correctIndices: [1],
    options: [
      { text: "Great", explanation: "Vì sao sai: Không mang nghĩa kỹ thuật trong lập luận." },
      { text: "Generalization", explanation: "Chính xác! Trong mô hình các chiến lược lập luận GASCAP/T của Fulkerson (1996), chữ 'G' viết tắt của 'Generalization' (Khái quát hóa từ các trường hợp cụ thể để rút ra kết luận chung)." },
      { text: "General", explanation: "Vì sao sai: Tính từ 'general' không phải tên chiến lược lập luận." }
    ]
  },
  {
    id: 41,
    topic: "Interpersonal Needs",
    question: "Through _____________, we meet universal human needs.",
    hint: "Thông qua giao tiếp, con người đáp ứng các nhu cầu phổ quát của mình.",
    correctIndices: [1],
    options: [
      { text: "thinking", explanation: "Vì sao sai: Suy nghĩ chỉ diễn ra trong nội tâm, chưa kết nối với xã hội." },
      { text: "communication", explanation: "Chính xác! Thông qua giao tiếp (communication), con người kết nối xã hội và thỏa mãn các nhu cầu căn bản phổ quát của mình." },
      { text: "evaluation", explanation: "Vì sao sai: Đánh giá chỉ là một hoạt động tư duy." },
      { text: "comparison", explanation: "Vì sao sai: So sánh không trực tiếp đáp ứng nhu cầu gắn kết con người." }
    ]
  },
  {
    id: 42,
    topic: "Negative News Delivery Checklist",
    question: "Which is NOT part of the checklist for delivering a negative message?",
    hint: "Hiểu rõ chức danh/chức vụ cụ thể của người nghe không phải thành phần thuộc danh sách kiểm tra khi truyền đạt tin xấu.",
    correctIndices: [1],
    options: [
      { text: "Clear goal in mind", explanation: "Vì sao đúng: Phải xác định mục tiêu rõ ràng trong tâm trí trước khi truyền tin xấu." },
      { text: "Clear understand of the audience’s title or position", explanation: "Chính xác! Việc phải nắm rõ chức danh hay vị trí của người nhận KHÔNG phải là một bước trong bảng danh sách kiểm tra (checklist) chuẩn mực khi gửi thông điệp tiêu cực." },
      { text: "Clear understanding of message", explanation: "Vì sao đúng: Cần nắm vững chính xác thông điệp cần chuyển tải." },
      { text: "Clear understanding of procedure and protocol", explanation: "Vì sao đúng: Phải tuân thủ đúng quy trình và nghi thức của tổ chức khi báo tin buồn/tin xấu." }
    ]
  },
  {
    id: 43,
    topic: "Paragraph Structure - Conclusion",
    question: "The ................. brings the paragraph to a close; it may do this in any of several ways. It may reinforce the paragraph’s main point, summarize the relationships among the body sentences, and/or serve as a transition to the next paragraph.",
    hint: "Câu kết đoạn (conclusion sentence) có chức năng khép lại đoạn văn, củng cố ý chính và tạo bước chuyển tiếp.",
    correctIndices: [2],
    options: [
      { text: "body sentence", explanation: "Vì sao sai: Các câu thân đoạn dùng để phát triển, giải thích và đưa dẫn chứng cho câu chủ đề." },
      { text: "topic sentence", explanation: "Vì sao sai: Câu chủ đề nằm ở đầu đoạn để giới thiệu ý chính." },
      { text: "conclusion sentence", explanation: "Chính xác! Câu kết luận của đoạn (conclusion sentence) khép lại đoạn văn bằng cách củng cố luận điểm trọng tâm, tóm tắt sự liên kết giữa các câu thân đoạn hoặc làm cầu nối chuyển sang đoạn kế tiếp." }
    ]
  },
  {
    id: 44,
    topic: "Cultural Intelligence - Intrapersonal",
    question: "___________________ involves an awareness of one’s own cultural style in order to make behavioral adjustments to international counterparts.",
    hint: "Trí thông minh nội tâm (Intrapersonal intelligence) giúp nhận thức về phong cách văn hóa của chính mình để điều chỉnh hành vi.",
    correctIndices: [2],
    options: [
      { text: "Linguistic intelligence", explanation: "Vì sao sai: Trí thông minh ngôn ngữ liên quan đến khả năng dùng từ ngữ." },
      { text: "Spatial intelligence", explanation: "Vì sao sai: Trí thông minh không gian thị giác." },
      { text: "Intrapersonal intelligence", explanation: "Chính xác! Intrapersonal intelligence (trí thông minh nội tâm) là khả năng tự nhận biết phong cách văn hóa và thói quen của chính bản thân, từ đó có sự điều chỉnh hành vi linh hoạt khi làm việc với đối tác quốc tế." },
      { text: "Interpersonal intelligence", explanation: "Vì sao sai: Interpersonal là trí thông minh tương tác xã hội giữa người với người." }
    ]
  },
  {
    id: 45,
    topic: "Netiquette Rules",
    question: "Proper “netiquette” avoids shouting which means....................",
    hint: "Trong văn hóa mạng (netiquette), 'hét lớn' có nghĩa là gõ toàn bộ tin nhắn bằng chữ in hoa.",
    correctIndices: [1],
    options: [
      { text: "speaking ill of someone.", explanation: "Vì sao sai: Nói xấu người khác là vu khống / phỉ báng." },
      { text: "typing the message in all capital letters.", explanation: "Chính xác! Trong nghi thức giao tiếp trên mạng (netiquette), việc viết hoa toàn bộ ký tự (typing in ALL CAPS) được coi là hành vi 'hét lớn' (shouting) vào mặt người đọc, gây phản cảm và thiếu lịch sự." },
      { text: "sending vicious, insulting messages.", explanation: "Vì sao sai: Gửi tin nhắn thù địch gọi là flaming / trolling." },
      { text: "mass mailings of commercial advertisements to numerous news groups.", explanation: "Vì sao sai: Đây là hành vi gửi thư rác (Spamming)." }
    ]
  },
  {
    id: 46,
    topic: "Design Thinking - Define Mode",
    question: "......... mode is when you unpack and synthesize your empathy findings into compelling needs and insights, and scope a specific and meaningful challenge.",
    hint: "Giai đoạn tổng hợp các phát hiện từ bước thấu cảm thành các nhu cầu cốt lõi và xác định thách thức cần giải quyết.",
    correctIndices: [0],
    options: [
      { text: "Define", explanation: "Chính xác! Giai đoạn Xác định (Define mode) trong Design Thinking là khi bạn bóc tách và tổng hợp dữ liệu từ bước thấu cảm thành các nhu cầu sâu sắc (insights) và đóng khung một bài toán thách thức cụ thể, có ý nghĩa." },
      { text: "Empathize", explanation: "Vì sao sai: Empathize là giai đoạn quan sát và phỏng vấn để thu thập dữ liệu người dùng." },
      { text: "Test", explanation: "Vì sao sai: Test là giai đoạn thử nghiệm nghiệm thu giải pháp." },
      { text: "Ideate", explanation: "Vì sao sai: Ideate là giai đoạn phát triển ý tưởng sau khi đã có đề bài từ bước Define." }
    ]
  },
  {
    id: 47,
    topic: "Ethics in Writing - Plagiarism",
    question: "..................means using someone else’s writing without giving credit to the source.",
    hint: "Sử dụng bài viết của người khác mà không ghi nguồn được gọi là đạo văn.",
    correctIndices: [1],
    options: [
      { text: "Legal ethic", explanation: "Vì sao sai: Đạo đức pháp lý là khái niệm chung." },
      { text: "Plagiarism", explanation: "Chính xác! Đạo văn (Plagiarism) là hành vi sử dụng từ ngữ, câu chữ hoặc ý tưởng của người khác vào bài viết của mình mà không trích dẫn hoặc ghi nhận nguồn gốc một cách đàng hoàng." },
      { text: "Borrowing", explanation: "Vì sao sai: Mượn phải có sự đồng ý hoặc ghi nguồn trích dẫn rõ ràng." },
      { text: "Asking", explanation: "Vì sao sai: Asking là hỏi han xin phép." }
    ]
  },
  {
    id: 48,
    topic: "Document Transitions - Internal Summary",
    question: "......... briefly covers information or alludes to information introduced previously. It can remind an audience of a previous point and reinforce information covered in your document.",
    hint: "Tóm tắt nội bộ (Internal summary) điểm lại ngắn gọn những thông tin đã trình bày trước đó để củng cố ghi nhớ.",
    correctIndices: [2],
    options: [
      { text: "Time", explanation: "Vì sao sai: Chuyển tiếp thời gian là các từ như then, next, afterward." },
      { text: "Contrast", explanation: "Vì sao sai: Chuyển tiếp tương phản là các từ như however, although." },
      { text: "An internal summary", explanation: "Chính xác! Tóm tắt nội bộ (Internal summary) là một đoạn ngắn điểm lại hoặc gợi nhắc về những nội dung vừa được trình bày ở phần trước, giúp củng cố thông tin trong tâm trí người đọc trước khi chuyển sang ý mới." },
      { text: "Addition", explanation: "Vì sao sai: Chuyển tiếp bổ sung là các từ như furthermore, in addition." }
    ]
  }
];

window.QUIZ_10_QUESTIONS = QUIZ_10_QUESTIONS;
