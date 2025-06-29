const artistsData = [
    {
        id: 1,
        name: { zh: "林墨之", en: "Lin Mozhi" },
        image: "https://placehold.co/400x400/3D4045/F8F5F2?text=林墨之",
        specialty: { zh: "青花山水意境", en: "Blue-and-white Landscape Aesthetics" },
        bio: { zh: "林墨之，生于景德镇陶瓷世家，自幼研习国画，后将水墨精神融入陶瓷创作。他的作品以意境深远、笔法精湛著称，致力于在传统青花中探索现代审美，将山水之韵凝于方寸瓷间。", en: "Lin Mozhi, born in a Jingdezhen porcelain family, studied Chinese painting from a young age and later integrated ink spirit into ceramic creation. His works are known for their profound artistic conception and exquisite brushwork, exploring modern aesthetics within traditional blue-and-white, capturing the charm of landscapes on porcelain." },
        philosophy: { zh: "以瓷为纸，以料为墨，绘山水之魂，承古今之韵。他坚信每一笔都应承载情感与气韵，让冰冷的陶瓷拥有山水的温度和生命力，传递东方哲学中的天人合一。", en: "Using porcelain as paper and material as ink, he paints the soul of landscapes, inheriting the charm of ancient and modern times. He believes every stroke should carry emotion and spirit, giving cold ceramics the warmth and vitality of landscapes, conveying the Eastern philosophy of harmony between man and nature." },
        techniques: { zh: ["高温青花", "手绘", "釉下彩"], en: ["High-temperature blue-and-white", "Hand painting", "Underglaze painting"] },
        featured: true
    },
    {
        id: 2,
        name: { zh: "陈静", en: "Chen Jing" },
        image: "https://placehold.co/400x400/D1C7C0/3D4045?text=陈静",
        specialty: { zh: "现代极简白瓷", en: "Modern Minimalist White Porcelain" },
        bio: { zh: "毕业于中央美术学院雕塑系，陈静的作品跨越了传统陶瓷与当代艺术的界限。她善于运用德化白瓷的纯净特质，创作出形态极简、线条流畅的作品，探索纯粹与空灵。", en: "Graduated from the Sculpture Department of the Central Academy of Fine Arts, Chen Jing's works have crossed the boundaries between traditional ceramics and contemporary art. She is good at using the pure characteristics of Dehua white porcelain to create simple and smooth works, exploring purity and emptiness." },
        philosophy: { zh: "少即是多，纯粹至美。她试图剥离所有冗余的装饰，用最纯粹的形态和光影来探讨物质与精神、存在与虚无的边界，追求器物与空间、人之间的和谐。", en: "Less is more, pure beauty. She tried to remove all redundant decorations and used the most pure form and shadow to explore the boundaries between matter and spirit, existence and emptiness, pursuing harmony between objects and space, and people." },
        techniques: { zh: ["德化白瓷", "手工拉坯", "素烧"], en: ["Dehua white porcelain", "Hand-thrown forming", "Suan burning"] },
        featured: true
    },
    {
        id: 3,
        name: { zh: "王烨", en: "Wang Ye" },
        image: "https://placehold.co/400x400/D1C7C0/3D4045?text=王烨",
        specialty: { zh: "高温色釉变幻", en: "High-temperature Color Glaze Variation" },
        bio: { zh: '作为国家级非物质文化遗产传承人，王烨穷其一生研究高温色釉。他的作品色彩瑰丽，变化万千，被誉为"火中取宝"的色彩魔术师，每一件都是火焰与时间的艺术结晶。', en: 'As a national intangible cultural heritage successor, Wang Ye devoted his life to studying high-temperature color glaze. His works are colorful and changeable, and are known as the color magician of "taking treasures from fire," each of which is the artistic crystallization of fire and time.' },
        philosophy: { zh: '人造一半，天成一半，窑火铸就，独一无二。他认为自己的工作是创造条件，但最终的色彩与纹理是窑火的赠予。每一次烧制都是一次与自然的共创，充满了未知与惊喜。', en: 'Man-made half, heaven-made half, kiln-made, unique. He believes that his work is to create conditions, but the final color and texture are the gift of the kiln. Each firing is a co-creation with nature, full of unknown and surprises.' },
        techniques: { zh: ["高温窑变釉", "结晶釉", "单色釉"], en: ["High-temperature kiln-made glaze", "Crystalline glaze", "Single-color glaze"] },
        featured: false
    },
    {
        id: 4,
        name: { zh: "张华", en: "Zhang Hua" },
        image: "https://placehold.co/400x400/3D4045/F8F5F2?text=张华",
        specialty: { zh: "传统陶器雕刻", en: "Traditional Clay Sculpture" },
        bio: { zh: "张华，生长于宜兴，自幼耳濡目染紫砂陶艺。他专注于传统陶器雕刻，将古老的图腾与现代审美相结合，赋予陶器新的生命力。", en: "Zhang Hua, from Yixing, has been exposed to purple sand pottery since childhood. He has been focusing on traditional clay sculpture, combining ancient totem with modern aesthetics, giving new vitality to pottery." },
        philosophy: { zh: "泥土有灵，刻刀传情。他相信每一块泥土都蕴含着故事，通过刻刀的雕琢，将泥土的质朴与艺术的精髓完美融合，展现中华文化的厚重与细腻。", en: "The earth has spirit, the knife conveys emotion. He believes that every piece of earth contains a story, through the carving of the knife, the essence of earth and art are perfectly integrated, showcasing the thickness and delicacy of Chinese culture." },
        techniques: { zh: ["紫砂陶", "手工雕刻", "泥绘"], en: ["Purple sand pottery", "Hand carving", "Clay painting"] },
        featured: true
    }
];

const productsData = [
    {
        id: 101,
        name: { zh: "山水青花茶杯", en: "Landscape Blue-and-white Teacup" },
        price: 188.00,
        images: [
            "https://placehold.co/800x600/D1C7C0/3D4045?text=茶杯正面",
            "https://placehold.co/800x600/D1C7C0/3D4045?text=茶杯侧面"
        ],
        category: "cups",
        material: "blue_white",
        design: "hand_drawn",
        artistId: 1,
        designPhilosophy: { zh: "此茶杯以宋代山水画为灵感，将青花分水技法发挥到极致，旨在营造一种\"咫尺千里\"的意境，让饮者在品茗之时，亦能神游山水之间，感受自然之美与内心宁静。", en: "Inspired by Song Dynasty landscape paintings, this teacup uses blue-and-white shading techniques to create a sense of 'a thousand miles within inches.' The drinker can travel through mountains and rivers while tasting tea, feeling the beauty of nature and inner peace." },
        techniquesUsed: { zh: "传统景德镇高温青花烧制，纯手工拉坯成型，釉下分水手绘，多次入窑烧制，确保釉色温润如玉，青花发色纯正。", en: "Traditional Jingdezhen high-temperature blue-and-white firing, hand-thrown forming, underglaze hand painting, and multiple firings ensure a jade-like glaze and pure blue-and-white color." },
        artistExplanation: { zh: "我希望这不仅仅是一个茶杯，更是一个小小的山水世界。每一次拿起它，都能感受到笔墨的流动，山川的呼吸，让忙碌的心得到片刻的安宁。", en: "I hope this is not just a teacup, but a small world of landscapes. Every time you pick it up, you can feel the flow of brush and ink, the breath of mountains and rivers, and find a moment of peace in a busy life." },
        dimensions: { zh: "高 8cm, 直径 7cm", en: "Height 8cm, Diameter 7cm" },
        featured: true
    },
    {
        id: 102,
        name: { zh: "极简白瓷花瓶", en: "Modern Minimalist White Porcelain Vase" },
        price: 320.00,
        images: [
            "https://placehold.co/800x600/F8F5F2/3D4045?text=花瓶正面",
            "https://placehold.co/800x600/F8F5F2/3D4045?text=花瓶细节"
        ],
        category: "vases",
        material: "white_porcelain",
        design: "modern",
        artistId: 2,
        designPhilosophy: { zh: "受北欧设计与东方禅宗思想启发，此花瓶追求极致的纯粹与线条感。通过德化白瓷的温润质地，展现光影的微妙变化，让器物本身成为空间的焦点，而非多余的装饰。", en: "Inspired by Nordic design and Eastern Zen philosophy, this vase pursues extreme purity and line feeling. Through the smooth texture of Dehua white porcelain, it shows the subtle changes of shadows and lights, making the object itself the focus of space, rather than excess decoration." },
        techniquesUsed: { zh: "精选德化高岭土，采用传统手工拉坯与现代模具相结合，确保器形精准。表面未经任何彩绘，仅以高温素烧呈现瓷器最原始、最纯净的白，考验匠人对泥性与火候的极致掌控。", en: "Selected Dehua high-quality clay, traditional hand-thrown forming combined with modern molds, ensuring accurate shape. The surface is not painted with any color, only high-temperature suan burning shows the most original and pure white of porcelain, testing the extreme control of the craftsman over clay and fire." },
        artistExplanation: { zh: "我希望我的作品能与空间对话，与光影共舞。这个花瓶，它不仅仅是容器，更是留白，是呼吸，是现代生活中一处静谧的思考之地。", en: "I hope my works can communicate with space and dance with shadows. This vase is not just a container, but a blank space, a breath, and a quiet place for thinking in modern life." },
        dimensions: { zh: "高 25cm, 直径 10cm", en: "Height 25cm, Diameter 10cm" },
        featured: true
    },
    {
        id: 103,
        name: { zh: "窑变釉抽象雕塑", en: "High-temperature Color Glaze Abstract Sculpture" },
        price: 580.00,
        images: [
            "https://placehold.co/800x600/D1C7C0/3D4045?text=雕塑全貌",
            "https://placehold.co/800x600/D1C7C0/3D4045?text=雕塑纹理"
        ],
        category: "sculptures",
        material: "celadon",
        design: "modern",
        artistId: 3,
        designPhilosophy: { zh: "此雕塑是对自然力量与生命形态的抽象表达。窑变釉的不可控性与艺术家的有意为之相结合，每一次烧制都诞生独一无二的色彩与纹理，象征生命的变幻莫测与无限可能。", en: "This sculpture is an abstract expression of natural power and life form. The uncontrollable and intentional combination of high-temperature glaze and the artist's work result in unique colors and textures every time, symbolizing the unpredictable and infinite possibilities of life." },
        techniquesUsed: { zh: "采用特殊配方的高温窑变釉，在1300°C以上的高温下，釉料随窑内气氛变化而呈现出如宇宙星空、熔岩流淌般的奇妙效果。器形以手工捏塑为主，强调有机与不规则美感。", en: "Using a special formula, high-temperature glaze is used, and the glaze material changes with the atmosphere in the kiln, showing a wonderful effect like the universe starry sky and lava flow. The shape is mainly hand-molded, emphasizing organic and irregular beauty." },
        artistExplanation: { zh: "窑变，是火的艺术，是时间的馈赠。我的角色是引导，而非完全控制。每件作品都是我与窑火的对话，希望观者能从中感受到那份原始的、充满力量的生命律动。", en: "Kiln-made is the art of fire, the gift of time. My role is to guide, not to completely control. Each piece is a dialogue with the kiln, hoping that the viewer can feel the original and powerful life pulse from it." },
        dimensions: { zh: "高 20cm, 宽 15cm", en: "Height 20cm, Width 15cm" },
        featured: true
    },
    {
        id: 104,
        name: { zh: "古朴陶器茶壶", en: "Plain-color Clay Teapot" },
        price: 250.00,
        images: [
            "https://placehold.co/800x600/F8F5F2/3D4045?text=茶壶正面",
            "https://placehold.co/800x600/F8F5F2/3D4045?text=茶壶把手"
        ],
        category: "teapots",
        material: "clay",
        design: "plain_color",
        artistId: 4,
        designPhilosophy: { zh: "回归泥土的本真，强调器物的实用性与手作的温度。茶壶造型简洁，质地粗犷，旨在唤起人们对自然、对传统生活方式的向往，让每一次品茶都成为一次与自然的亲密接触。", en: "Returning to the essence of earth, emphasizing the practicality and warmth of objects, the teapot is simple in shape and rough in texture, aiming to evoke people's longing for nature and traditional lifestyle, making every tea tasting a close contact with nature." },
        techniquesUsed: { zh: "精选宜兴原矿紫砂泥料，全手工拍打成型，保留泥料的天然颗粒感与透气性。表面未经上釉，仅以高温素烧呈现泥料本身的质朴色彩与温润触感，随着使用会逐渐包浆。", en: "Selected Yixing original purple sand clay, full-hand clapping forming, preserving the natural particle feeling and air permeability of clay. The surface is not glazed, only high-temperature suan burning shows the pure color and soft touch of clay, gradually patina with use." },
        artistExplanation: { zh: "泥土是最有生命力的材料，它记录着我的手温，我的心跳。这把茶壶，希望它能成为你日常生活中最忠实的伙伴，陪伴你度过每一个宁静的午后。", en: "The earth is the most alive material, it records my hand temperature and heartbeat. This teapot hopes it can become your most loyal companion in your daily afternoon." },
        dimensions: { zh: "高 10cm, 长 15cm", en: "Height 10cm, Length 15cm" },
        featured: false
    },
    {
        id: 105,
        name: { zh: "青花缠枝莲纹盘", en: "Blue-and-white Lotus-leaf Pattern Plate" },
        price: 150.00,
        images: [
            "https://placehold.co/800x600/D1C7C0/3D4045?text=瓷盘全貌",
            "https://placehold.co/800x600/D1C7C0/3D4045?text=瓷盘纹理"
        ],
        category: "plates",
        material: "blue_white",
        design: "hand_drawn",
        artistId: 1,
        designPhilosophy: { zh: "缠枝莲纹是中国传统吉祥纹样，寓意连绵不绝、生生不息。此盘将古典纹样以现代构图重新演绎，既保留了传统韵味，又增添了时尚感，适合现代家居装饰。", en: "Lotus-leaf pattern is a traditional auspicious pattern in China, symbolizing endless and endless life. This plate reinterprets classical patterns with modern composition, preserving traditional flavor and adding fashion, suitable for modern home decoration." },
        techniquesUsed: { zh: "传统青花釉下彩，手工勾勒缠枝莲纹，线条流畅，青花发色沉稳。盘沿采用回纹装饰，细节处彰显匠心。", en: "Traditional blue-and-white underglaze painting, hand-drawn lotus-leaf pattern, smooth lines, and pure blue-and-white color. The edge is decorated with return pattern, showing meticulous craftsmanship in details." },
        artistExplanation: { zh: "我喜欢在传统中寻找新意，缠枝莲纹是永恒的经典。我希望通过我的笔触，让这份美好在现代生活中继续绽放。", en: "I like to find new ideas in tradition, lotus-leaf pattern is eternal classic. I hope through my brush strokes, let this beauty continue to bloom in modern life." },
        dimensions: { zh: "直径 25cm, 高 3cm", en: "Diameter 25cm, Height 3cm" },
        featured: false
    },
    {
        id: 106,
        name: { zh: "青瓷鱼耳瓶", en: "Celadon Fish-shaped Bottle" },
        price: 450.00,
        images: [
            "https://placehold.co/800x600/F8F5F2/3D4045?text=青瓷瓶正面",
            "https://placehold.co/800x600/F8F5F2/3D4045?text=青瓷瓶耳"
        ],
        category: "vases",
        material: "celadon",
        design: "plain_color",
        artistId: 3,
        designPhilosophy: { zh: "以宋代哥窑鱼耳瓶为原型，力求还原其古朴典雅的器形与温润如玉的釉色。鱼耳造型灵动，象征吉祥。整体追求大道至简，以纯粹的釉色体现瓷器本身的材质美。", en: "Inspired by Song Dynasty Ge kiln fish-shaped bottle, it aims to restore its ancient and elegant shape and jade-like glaze. The fish-shaped ears are lively, symbolizing auspiciousness. It pursues simplicity and purity of glaze to show the material beauty of porcelain itself." },
        techniquesUsed: { zh: '龙泉青瓷传统烧制技艺，多次施釉，高温还原焰烧成。釉面肥厚，开片自然，呈现出独特的"金丝铁线"效果。器形手工拉坯，线条流畅，比例协调。', en: 'Longquan celadon traditional firing technique, multiple glazing, high-temperature reduction flame firing. Thick glaze, natural crack, showing unique "gold thread and iron line" effect. Hand-thrown forming, smooth lines, proportion coordination.' },
        artistExplanation: { zh: "青瓷之美，在于其内敛与深邃。我希望这件作品能让人感受到宋代文人的雅致情怀，在现代生活中找到一份古典的韵味。", en: "Celadon beauty is in its restraint and depth. I hope this work can make people feel the elegant sentiment of Song Dynasty in modern life." },
        dimensions: { zh: "高 30cm, 直径 12cm", en: "Height 30cm, Diameter 12cm" },
        featured: false
    }
];

window.artistsData = artistsData;
window.productsData = productsData; 