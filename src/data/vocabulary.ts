export interface Word {
  en: string;
  vi: string;
  emoji: string;
}

export interface Theme {
  id: string;
  name: string;
  icon: string;
  words: Word[];
}

export const themes: Theme[] = [
  {
    id: "animals",
    name: "Animals",
    icon: "🐶",
    words: [
      { en: "Dog", vi: "Con chó", emoji: "🐶" },
      { en: "Cat", vi: "Con mèo", emoji: "🐱" },
      { en: "Elephant", vi: "Con voi", emoji: "🐘" },
      { en: "Lion", vi: "Sư tử", emoji: "🦁" },
      { en: "Monkey", vi: "Con khỉ", emoji: "🐒" },
    ],
  },
  {
    id: "fruits",
    name: "Fruits",
    icon: "🍎",
    words: [
      { en: "Apple", vi: "Quả táo", emoji: "🍎" },
      { en: "Banana", vi: "Quả chuối", emoji: "🍌" },
      { en: "Orange", vi: "Quả cam", emoji: "🍊" },
      { en: "Grapes", vi: "Quả nho", emoji: "🍇" },
      { en: "Watermelon", vi: "Dưa hấu", emoji: "🍉" },
    ],
  },
  {
    id: "vegetables",
    name: "Vegetables",
    icon: "🥦",
    words: [
      { en: "Carrot", vi: "Cà rốt", emoji: "🥕" },
      { en: "Tomato", vi: "Cà chua", emoji: "🍅" },
      { en: "Broccoli", vi: "Bông cải xanh", emoji: "🥦" },
      { en: "Potato", vi: "Khoai tây", emoji: "🥔" },
      { en: "Corn", vi: "Ngô", emoji: "🌽" },
    ],
  },
  {
    id: "colors",
    name: "Colors",
    icon: "🎨",
    words: [
      { en: "Red", vi: "Màu đỏ", emoji: "🔴" },
      { en: "Blue", vi: "Màu xanh dương", emoji: "🔵" },
      { en: "Green", vi: "Màu xanh lá", emoji: "🟢" },
      { en: "Yellow", vi: "Màu vàng", emoji: "🟡" },
      { en: "Purple", vi: "Màu tím", emoji: "🟣" },
    ],
  },
  {
    id: "numbers",
    name: "Numbers",
    icon: "🔢",
    words: [
      { en: "One", vi: "Số một", emoji: "1️⃣" },
      { en: "Two", vi: "Số hai", emoji: "2️⃣" },
      { en: "Three", vi: "Số ba", emoji: "3️⃣" },
      { en: "Four", vi: "Số bốn", emoji: "4️⃣" },
      { en: "Five", vi: "Số năm", emoji: "5️⃣" },
    ],
  },
  {
    id: "shapes",
    name: "Shapes",
    icon: "📐",
    words: [
      { en: "Circle", vi: "Hình tròn", emoji: "⭕" },
      { en: "Square", vi: "Hình vuông", emoji: "⬛" },
      { en: "Triangle", vi: "Hình tam giác", emoji: "🔺" },
      { en: "Star", vi: "Hình ngôi sao", emoji: "⭐" },
      { en: "Heart", vi: "Hình trái tim", emoji: "❤️" },
    ],
  },
  {
    id: "body",
    name: "Body Parts",
    icon: "👤",
    words: [
      { en: "Head", vi: "Đầu", emoji: "👤" },
      { en: "Eye", vi: "Mắt", emoji: "👁️" },
      { en: "Nose", vi: "Mũi", emoji: "👃" },
      { en: "Mouth", vi: "Miệng", emoji: "👄" },
      { en: "Hand", vi: "Bàn tay", emoji: "✋" },
    ],
  },
  {
    id: "family",
    name: "Family",
    icon: "👨‍👩‍👧‍👦",
    words: [
      { en: "Father", vi: "Bố", emoji: "👨" },
      { en: "Mother", vi: "Mẹ", emoji: "👩" },
      { en: "Brother", vi: "Anh/Em trai", emoji: "👦" },
      { en: "Sister", vi: "Chị/Em gái", emoji: "👧" },
      { en: "Baby", vi: "Em bé", emoji: "👶" },
    ],
  },
  {
    id: "clothes",
    name: "Clothes",
    icon: "👕",
    words: [
      { en: "Shirt", vi: "Áo sơ mi", emoji: "👕" },
      { en: "Pants", vi: "Quần dài", emoji: "👖" },
      { en: "Dress", vi: "Váy liền", emoji: "👗" },
      { en: "Hat", vi: "Mũ", emoji: "👒" },
      { en: "Shoes", vi: "Giày", emoji: "👟" },
    ],
  },
  {
    id: "school",
    name: "School",
    icon: "🎒",
    words: [
      { en: "Book", vi: "Sách", emoji: "📖" },
      { en: "Pen", vi: "Bút", emoji: "🖊️" },
      { en: "Pencil", vi: "Bút chì", emoji: "✏️" },
      { en: "Eraser", vi: "Cục tẩy", emoji: "🧽" },
      { en: "Bag", vi: "Cặp sách", emoji: "🎒" },
    ],
  },
  {
    id: "transport",
    name: "Transport",
    icon: "🚗",
    words: [
      { en: "Car", vi: "Ô tô", emoji: "🚗" },
      { en: "Bus", vi: "Xe buýt", emoji: "🚌" },
      { en: "Bike", vi: "Xe đạp", emoji: "🚲" },
      { en: "Plane", vi: "Máy bay", emoji: "✈️" },
      { en: "Train", vi: "Tàu hỏa", emoji: "🚂" },
    ],
  },
  {
    id: "weather",
    name: "Weather",
    icon: "☀️",
    words: [
      { en: "Sun", vi: "Mặt trời", emoji: "☀️" },
      { en: "Rain", vi: "Mưa", emoji: "🌧️" },
      { en: "Cloud", vi: "Mây", emoji: "☁️" },
      { en: "Snow", vi: "Tuyết", emoji: "❄️" },
      { en: "Wind", vi: "Gió", emoji: "💨" },
    ],
  },
  {
    id: "emotions",
    name: "Emotions",
    icon: "😊",
    words: [
      { en: "Happy", vi: "Vui vẻ", emoji: "😊" },
      { en: "Sad", vi: "Buồn", emoji: "😢" },
      { en: "Angry", vi: "Tức giận", emoji: "😠" },
      { en: "Scared", vi: "Sợ hãi", emoji: "😨" },
      { en: "Surprised", vi: "Ngạc nhiên", emoji: "😮" },
    ],
  },
  {
    id: "actions",
    name: "Actions",
    icon: "🏃",
    words: [
      { en: "Run", vi: "Chạy", emoji: "🏃" },
      { en: "Jump", vi: "Nhảy", emoji: "🦘" },
      { en: "Eat", vi: "Ăn", emoji: "🍴" },
      { en: "Sleep", vi: "Ngủ", emoji: "😴" },
      { en: "Sing", vi: "Hát", emoji: "🎤" },
    ],
  },
  {
    id: "food",
    name: "Food",
    icon: "🍔",
    words: [
      { en: "Bread", vi: "Bánh mì", emoji: "🍞" },
      { en: "Rice", vi: "Cơm", emoji: "🍚" },
      { en: "Pizza", vi: "Pizza", emoji: "🍕" },
      { en: "Egg", vi: "Trứng", emoji: "🥚" },
      { en: "Cake", vi: "Bánh ngọt", emoji: "🍰" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "🥤",
    words: [
      { en: "Water", vi: "Nước", emoji: "💧" },
      { en: "Milk", vi: "Sữa", emoji: "🥛" },
      { en: "Juice", vi: "Nước ép", emoji: "🧃" },
      { en: "Tea", vi: "Trà", emoji: "🍵" },
      { en: "Coffee", vi: "Cà phê", emoji: "☕" },
    ],
  },
  {
    id: "house",
    name: "House",
    icon: "🏠",
    words: [
      { en: "Bedroom", vi: "Phòng ngủ", emoji: "🛏️" },
      { en: "Kitchen", vi: "Nhà bếp", emoji: "🍳" },
      { en: "Bathroom", vi: "Nhà tắm", emoji: "🚿" },
      { en: "Living room", vi: "Phòng khách", emoji: "🛋️" },
      { en: "Garden", vi: "Khu vườn", emoji: "🏡" },
    ],
  },
  {
    id: "furniture",
    name: "Furniture",
    icon: "🪑",
    words: [
      { en: "Chair", vi: "Ghế", emoji: "🪑" },
      { en: "Table", vi: "Bàn", emoji: "🏷️" },
      { en: "Bed", vi: "Giường", emoji: "🛏️" },
      { en: "Lamp", vi: "Đèn", emoji: "💡" },
      { en: "Door", vi: "Cửa", emoji: "🚪" },
    ],
  },
  {
    id: "nature",
    name: "Nature",
    icon: "🌳",
    words: [
      { en: "Tree", vi: "Cây", emoji: "🌳" },
      { en: "Flower", vi: "Hoa", emoji: "🌸" },
      { en: "Mountain", vi: "Núi", emoji: "⛰️" },
      { en: "River", vi: "Sông", emoji: "🌊" },
      { en: "Grass", vi: "Cỏ", emoji: "🌿" },
    ],
  },
  {
    id: "space",
    name: "Space",
    icon: "🚀",
    words: [
      { en: "Moon", vi: "Mặt trăng", emoji: "🌙" },
      { en: "Star", vi: "Ngôi sao", emoji: "⭐" },
      { en: "Planet", vi: "Hành tinh", emoji: "🪐" },
      { en: "Rocket", vi: "Tên lửa", emoji: "🚀" },
      { en: "Astronaut", vi: "Phi hành gia", emoji: "👨‍🚀" },
    ],
  },
  {
    id: "jobs",
    name: "Jobs",
    icon: "👨‍⚕️",
    words: [
      { en: "Doctor", vi: "Bác sĩ", emoji: "👨‍⚕️" },
      { en: "Teacher", vi: "Giáo viên", emoji: "👩‍🏫" },
      { en: "Police", vi: "Cảnh sát", emoji: "👮" },
      { en: "Chef", vi: "Đầu bếp", emoji: "👨‍🍳" },
      { en: "Farmer", vi: "Nông dân", emoji: "👨‍🌾" },
    ],
  },
  {
    id: "sports",
    name: "Sports",
    icon: "⚽",
    words: [
      { en: "Football", vi: "Bóng đá", emoji: "⚽" },
      { en: "Basketball", vi: "Bóng rổ", emoji: "🏀" },
      { en: "Tennis", vi: "Quần vợt", emoji: "🎾" },
      { en: "Swimming", vi: "Bơi lội", emoji: "🏊" },
      { en: "Running", vi: "Chạy bộ", emoji: "🏃" },
    ],
  },
  {
    id: "musical",
    name: "Music",
    icon: "🎸",
    words: [
      { en: "Piano", vi: "Đàn piano", emoji: "🎹" },
      { en: "Guitar", vi: "Đàn guitar", emoji: "🎸" },
      { en: "Drum", vi: "Trống", emoji: "🥁" },
      { en: "Violin", vi: "Đàn violin", emoji: "🎻" },
      { en: "Flute", vi: "Sáo", emoji: "🪈" },
    ],
  },
  {
    id: "sea",
    name: "Sea Life",
    icon: "🐙",
    words: [
      { en: "Fish", vi: "Con cá", emoji: "🐟" },
      { en: "Shark", vi: "Cá mập", emoji: "🦈" },
      { en: "Octopus", vi: "Con bạch tuộc", emoji: "🐙" },
      { en: "Crab", vi: "Con cua", emoji: "🦀" },
      { en: "Whale", vi: "Cá voi", emoji: "🐋" },
    ],
  },
  {
    id: "insects",
    name: "Insects",
    icon: "🦋",
    words: [
      { en: "Butterfly", vi: "Con bướm", emoji: "🦋" },
      { en: "Bee", vi: "Con ong", emoji: "🐝" },
      { en: "Ant", vi: "Con kiến", emoji: "🐜" },
      { en: "Spider", vi: "Con nhện", emoji: "🕷️" },
      { en: "Ladybug", vi: "Bọ cánh cam", emoji: "🐞" },
    ],
  },
  {
    id: "birds",
    name: "Birds",
    icon: "🦜",
    words: [
      { en: "Parrot", vi: "Con vẹt", emoji: "🦜" },
      { en: "Owl", vi: "Con cú", emoji: "🦉" },
      { en: "Duck", vi: "Con vịt", emoji: "🦆" },
      { en: "Eagle", vi: "Chim đại bàng", emoji: "🦅" },
      { en: "Penguin", vi: "Chim cánh cụt", emoji: "🐧" },
    ],
  },
  {
    id: "toys",
    name: "Toys",
    icon: "🧸",
    words: [
      { en: "Doll", vi: "Búp bê", emoji: "🪆" },
      { en: "Ball", vi: "Quả bóng", emoji: "⚽" },
      { en: "Robot", vi: "Người máy", emoji: "🤖" },
      { en: "Teddy bear", vi: "Gấu bông", emoji: "🧸" },
      { en: "Car", vi: "Xe đồ chơi", emoji: "🏎️" },
    ],
  },
  {
    id: "places",
    name: "Places",
    icon: "🏙️",
    words: [
      { en: "Park", vi: "Công viên", emoji: "🌳" },
      { en: "School", vi: "Trường học", emoji: "🏫" },
      { en: "Hospital", vi: "Bệnh viện", emoji: "🏥" },
      { en: "Store", vi: "Cửa hàng", emoji: "🏪" },
      { en: "Beach", vi: "Bãi biển", emoji: "🏖️" },
    ],
  },
  {
    id: "days",
    name: "Days",
    icon: "📅",
    words: [
      { en: "Monday", vi: "Thứ hai", emoji: "📅" },
      { en: "Tuesday", vi: "Thứ ba", emoji: "📅" },
      { en: "Wednesday", vi: "Thứ tư", emoji: "📅" },
      { en: "Thursday", vi: "Thứ năm", emoji: "📅" },
      { en: "Friday", vi: "Thứ sáu", emoji: "📅" },
    ],
  },
  {
    id: "months",
    name: "Months",
    icon: "🗓️",
    words: [
      { en: "January", vi: "Tháng một", emoji: "🗓️" },
      { en: "February", vi: "Tháng hai", emoji: "🗓️" },
      { en: "March", vi: "Tháng ba", emoji: "🗓️" },
      { en: "April", vi: "Tháng tư", emoji: "🗓️" },
      { en: "May", vi: "Tháng năm", emoji: "🗓️" },
    ],
  },
  {
    id: "seasons",
    name: "Seasons",
    icon: "🍂",
    words: [
      { en: "Spring", vi: "Mùa xuân", emoji: "🌱" },
      { en: "Summer", vi: "Mùa hè", emoji: "☀️" },
      { en: "Autumn", vi: "Mùa thu", emoji: "🍂" },
      { en: "Winter", vi: "Mùa đông", emoji: "❄️" },
    ],
  },
  {
    id: "farm",
    name: "Farm",
    icon: "🚜",
    words: [
      { en: "Cow", vi: "Con bò", emoji: "🐄" },
      { en: "Pig", vi: "Con lợn", emoji: "🐖" },
      { en: "Chicken", vi: "Con gà", emoji: "🐔" },
      { en: "Sheep", vi: "Con cừu", emoji: "🐑" },
      { en: "Horse", vi: "Con ngựa", emoji: "🐎" },
    ],
  },
];
