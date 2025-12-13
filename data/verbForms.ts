export interface VerbFormExample {
  dictionary: string; // รูปพจนานุกรม
  conjugated: string; // รูปที่ผันแล้ว
  hiragana: string;
  meaning: string;
}

export interface VerbForm {
  id: string;
  name: string; // ชื่อญี่ปุ่น
  nameThai: string; // ชื่อไทย
  description: string; // คำอธิบาย
  usage: string; // การใช้งาน
  emoji: string;
  color: string;
  examples: VerbFormExample[];
}

export const verbFormsData: VerbForm[] = [
  {
    id: "dictionary",
    name: "辞書形",
    nameThai: "รูปพจนานุกรม",
    description: "รูปพื้นฐานที่ใช้เขียนในพจนานุกรม",
    usage: "ใช้ในการพูดแบบไม่เป็นทางการ หรือใช้เชื่อมประโยค",
    emoji: "📖",
    color: "#FF6B9D",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べる",
        hiragana: "たべる",
        meaning: "กิน",
      },
      {
        dictionary: "行く",
        conjugated: "行く",
        hiragana: "いく",
        meaning: "ไป",
      },
      {
        dictionary: "見る",
        conjugated: "見る",
        hiragana: "みる",
        meaning: "ดู",
      },
      {
        dictionary: "飲む",
        conjugated: "飲む",
        hiragana: "のむ",
        meaning: "ดื่ม",
      },
      {
        dictionary: "書く",
        conjugated: "書く",
        hiragana: "かく",
        meaning: "เขียน",
      },
      {
        dictionary: "話す",
        conjugated: "話す",
        hiragana: "はなす",
        meaning: "พูด",
      },
    ],
  },
  {
    id: "masu",
    name: "ます形",
    nameThai: "รูปสุภาพ",
    description: "รูปสุภาพ ใช้ในการพูดอย่างเป็นทางการ",
    usage: "ใช้พูดกับคนที่ไม่สนิท หรือในสถานการณ์ทางการ",
    emoji: "🎩",
    color: "#4ECDC4",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べます",
        hiragana: "たべます",
        meaning: "กิน (สุภาพ)",
      },
      {
        dictionary: "行く",
        conjugated: "行きます",
        hiragana: "いきます",
        meaning: "ไป (สุภาพ)",
      },
      {
        dictionary: "見る",
        conjugated: "見ます",
        hiragana: "みます",
        meaning: "ดู (สุภาพ)",
      },
      {
        dictionary: "飲む",
        conjugated: "飲みます",
        hiragana: "のみます",
        meaning: "ดื่ม (สุภาพ)",
      },
      {
        dictionary: "買う",
        conjugated: "買います",
        hiragana: "かいます",
        meaning: "ซื้อ (สุภาพ)",
      },
      {
        dictionary: "読む",
        conjugated: "読みます",
        hiragana: "よみます",
        meaning: "อ่าน (สุภาพ)",
      },
    ],
  },
  {
    id: "te",
    name: "て形",
    nameThai: "รูป て",
    description: "รูปที่ใช้เชื่อมประโยค หรือขอร้อง",
    usage: "ใช้ต่อประโยค, ขอร้อง, แสดงสาเหตุ",
    emoji: "🔗",
    color: "#E6A700",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べて",
        hiragana: "たべて",
        meaning: "กิน...",
      },
      {
        dictionary: "行く",
        conjugated: "行って",
        hiragana: "いって",
        meaning: "ไป...",
      },
      {
        dictionary: "見る",
        conjugated: "見て",
        hiragana: "みて",
        meaning: "ดู...",
      },
      {
        dictionary: "飲む",
        conjugated: "飲んで",
        hiragana: "のんで",
        meaning: "ดื่ม...",
      },
      {
        dictionary: "待つ",
        conjugated: "待って",
        hiragana: "まって",
        meaning: "รอ...",
      },
      {
        dictionary: "書く",
        conjugated: "書いて",
        hiragana: "かいて",
        meaning: "เขียน...",
      },
    ],
  },
  {
    id: "ta",
    name: "た形",
    nameThai: "รูปอดีต",
    description: "รูปแสดงอดีตกาล หรือการกระทำที่เสร็จสิ้นแล้ว",
    usage: "ใช้บอกว่าทำแล้ว/เคยทำ",
    emoji: "⏮️",
    color: "#DDA0DD",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べた",
        hiragana: "たべた",
        meaning: "กินแล้ว",
      },
      {
        dictionary: "行く",
        conjugated: "行った",
        hiragana: "いった",
        meaning: "ไปแล้ว",
      },
      {
        dictionary: "見る",
        conjugated: "見た",
        hiragana: "みた",
        meaning: "ดูแล้ว",
      },
      {
        dictionary: "飲む",
        conjugated: "飲んだ",
        hiragana: "のんだ",
        meaning: "ดื่มแล้ว",
      },
      {
        dictionary: "買う",
        conjugated: "買った",
        hiragana: "かった",
        meaning: "ซื้อแล้ว",
      },
      {
        dictionary: "会う",
        conjugated: "会った",
        hiragana: "あった",
        meaning: "เจอแล้ว",
      },
    ],
  },
  {
    id: "nai",
    name: "ない形",
    nameThai: "รูปปฏิเสธ",
    description: "รูปแสดงการปฏิเสธ ไม่ทำ",
    usage: "ใช้บอกว่าไม่ทำ/ไม่ได้ทำ",
    emoji: "🚫",
    color: "#2D9B83",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べない",
        hiragana: "たべない",
        meaning: "ไม่กิน",
      },
      {
        dictionary: "行く",
        conjugated: "行かない",
        hiragana: "いかない",
        meaning: "ไม่ไป",
      },
      {
        dictionary: "見る",
        conjugated: "見ない",
        hiragana: "みない",
        meaning: "ไม่ดู",
      },
      {
        dictionary: "飲む",
        conjugated: "飲まない",
        hiragana: "のまない",
        meaning: "ไม่ดื่ม",
      },
      {
        dictionary: "する",
        conjugated: "しない",
        hiragana: "しない",
        meaning: "ไม่ทำ",
      },
      {
        dictionary: "来る",
        conjugated: "来ない",
        hiragana: "こない",
        meaning: "ไม่มา",
      },
    ],
  },
  {
    id: "potential",
    name: "可能形",
    nameThai: "รูปความสามารถ",
    description: "รูปแสดงความสามารถ ทำได้",
    usage: "ใช้บอกว่าทำได้/ไม่ได้",
    emoji: "💪",
    color: "#F9844A",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べられる",
        hiragana: "たべられる",
        meaning: "กินได้",
      },
      {
        dictionary: "行く",
        conjugated: "行ける",
        hiragana: "いける",
        meaning: "ไปได้",
      },
      {
        dictionary: "見る",
        conjugated: "見られる",
        hiragana: "みられる",
        meaning: "ดูได้",
      },
      {
        dictionary: "読む",
        conjugated: "読める",
        hiragana: "よめる",
        meaning: "อ่านได้",
      },
      {
        dictionary: "泳ぐ",
        conjugated: "泳げる",
        hiragana: "およげる",
        meaning: "ว่ายน้ำได้",
      },
      {
        dictionary: "話す",
        conjugated: "話せる",
        hiragana: "はなせる",
        meaning: "พูดได้",
      },
    ],
  },
  {
    id: "volitional",
    name: "意向形",
    nameThai: "รูปแสดงเจตนา",
    description: "รูปแสดงความตั้งใจ หรือชักชวน",
    usage: "ใช้บอกว่าจะทำ/ชวนทำ (ไป...กันเถอะ)",
    emoji: "🙋",
    color: "#5A9A3D",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べよう",
        hiragana: "たべよう",
        meaning: "กินกันเถอะ",
      },
      {
        dictionary: "行く",
        conjugated: "行こう",
        hiragana: "いこう",
        meaning: "ไปกันเถอะ",
      },
      {
        dictionary: "見る",
        conjugated: "見よう",
        hiragana: "みよう",
        meaning: "ดูกันเถอะ",
      },
      {
        dictionary: "遊ぶ",
        conjugated: "遊ぼう",
        hiragana: "あそぼう",
        meaning: "เล่นกันเถอะ",
      },
      {
        dictionary: "帰る",
        conjugated: "帰ろう",
        hiragana: "かえろう",
        meaning: "กลับกันเถอะ",
      },
      {
        dictionary: "する",
        conjugated: "しよう",
        hiragana: "しよう",
        meaning: "ทำกันเถอะ",
      },
    ],
  },
  {
    id: "imperative",
    name: "命令形",
    nameThai: "รูปคำสั่ง",
    description: "รูปคำสั่ง ใช้สั่งให้ทำ",
    usage: "ใช้สั่งตรงๆ (ค่อนข้างรุนแรง)",
    emoji: "📢",
    color: "#F94144",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べろ",
        hiragana: "たべろ",
        meaning: "กินซะ!",
      },
      {
        dictionary: "行く",
        conjugated: "行け",
        hiragana: "いけ",
        meaning: "ไปซะ!",
      },
      {
        dictionary: "見る",
        conjugated: "見ろ",
        hiragana: "みろ",
        meaning: "ดูซะ!",
      },
      {
        dictionary: "起きる",
        conjugated: "起きろ",
        hiragana: "おきろ",
        meaning: "ตื่นซะ!",
      },
      {
        dictionary: "止まる",
        conjugated: "止まれ",
        hiragana: "とまれ",
        meaning: "หยุด!",
      },
      {
        dictionary: "する",
        conjugated: "しろ",
        hiragana: "しろ",
        meaning: "ทำซะ!",
      },
    ],
  },
  {
    id: "conditional",
    name: "条件形",
    nameThai: "รูปเงื่อนไข",
    description: "รูปแสดงเงื่อนไข ถ้า...ก็...",
    usage: "ใช้บอกเงื่อนไข 'ถ้าทำ...แล้วจะ...'",
    emoji: "❓",
    color: "#577590",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べれば",
        hiragana: "たべれば",
        meaning: "ถ้ากิน...",
      },
      {
        dictionary: "行く",
        conjugated: "行けば",
        hiragana: "いけば",
        meaning: "ถ้าไป...",
      },
      {
        dictionary: "見る",
        conjugated: "見れば",
        hiragana: "みれば",
        meaning: "ถ้าดู...",
      },
      {
        dictionary: "安い",
        conjugated: "安ければ",
        hiragana: "やすければ",
        meaning: "ถ้าถูก...",
      },
      {
        dictionary: "良い",
        conjugated: "良ければ",
        hiragana: "よければ",
        meaning: "ถ้าดี...",
      },
      {
        dictionary: "ある",
        conjugated: "あれば",
        hiragana: "あれば",
        meaning: "ถ้ามี...",
      },
    ],
  },
  {
    id: "passive",
    name: "受身形",
    nameThai: "รูป Passive",
    description: "รูปถูกกระทำ",
    usage: "ใช้บอกว่าถูก...ทำ",
    emoji: "😅",
    color: "#43AA8B",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べられる",
        hiragana: "たべられる",
        meaning: "ถูกกิน",
      },
      {
        dictionary: "見る",
        conjugated: "見られる",
        hiragana: "みられる",
        meaning: "ถูกดู",
      },
      {
        dictionary: "叱る",
        conjugated: "叱られる",
        hiragana: "しかられる",
        meaning: "ถูกดุ",
      },
      {
        dictionary: "褒める",
        conjugated: "褒められる",
        hiragana: "ほめられる",
        meaning: "ได้รับคำชม",
      },
      {
        dictionary: "盗む",
        conjugated: "盗まれる",
        hiragana: "ぬすまれる",
        meaning: "ถูกขโมย",
      },
      {
        dictionary: "殴る",
        conjugated: "殴られる",
        hiragana: "なぐられる",
        meaning: "ถูกตี",
      },
    ],
  },
  {
    id: "causative",
    name: "使役形",
    nameThai: "รูป Causative",
    description: "รูปให้ทำ/บังคับทำ",
    usage: "ใช้บอกว่าให้/บังคับ...ทำ",
    emoji: "👉",
    color: "#F8961E",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べさせる",
        hiragana: "たべさせる",
        meaning: "ให้กิน",
      },
      {
        dictionary: "行く",
        conjugated: "行かせる",
        hiragana: "いかせる",
        meaning: "ให้ไป",
      },
      {
        dictionary: "見る",
        conjugated: "見させる",
        hiragana: "みさせる",
        meaning: "ให้ดู",
      },
      {
        dictionary: "飲む",
        conjugated: "飲ませる",
        hiragana: "のませる",
        meaning: "ให้ดื่ม",
      },
      {
        dictionary: "泣く",
        conjugated: "泣かせる",
        hiragana: "なかせる",
        meaning: "ทำให้ร้องไห้",
      },
      {
        dictionary: "笑う",
        conjugated: "笑わせる",
        hiragana: "わらわせる",
        meaning: "ทำให้หัวเราะ",
      },
    ],
  },
  {
    id: "causative-passive",
    name: "使役受身形",
    nameThai: "รูป Causative-Passive",
    description: "รูปถูกบังคับให้ทำ",
    usage: "ใช้บอกว่าถูกบังคับให้...ทำ",
    emoji: "😭",
    color: "#9B5DE5",
    examples: [
      {
        dictionary: "食べる",
        conjugated: "食べさせられる",
        hiragana: "たべさせられる",
        meaning: "ถูกบังคับให้กิน",
      },
      {
        dictionary: "行く",
        conjugated: "行かせられる",
        hiragana: "いかせられる",
        meaning: "ถูกบังคับให้ไป",
      },
      {
        dictionary: "飲む",
        conjugated: "飲まされる",
        hiragana: "のまされる",
        meaning: "ถูกบังคับให้ดื่ม",
      },
      {
        dictionary: "待つ",
        conjugated: "待たされる",
        hiragana: "またされる",
        meaning: "ถูกทำให้รอ",
      },
      {
        dictionary: "歌う",
        conjugated: "歌わされる",
        hiragana: "うたわされる",
        meaning: "ถูกบังคับให้ร้องเพลง",
      },
      {
        dictionary: "走る",
        conjugated: "走らされる",
        hiragana: "はしらされる",
        meaning: "ถูกบังคับให้วิ่ง",
      },
    ],
  },
];
