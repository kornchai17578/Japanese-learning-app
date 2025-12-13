export interface ParticleExample {
  japanese: string;
  hiragana: string;
  meaning: string;
}

export interface Particle {
  id: string;
  particle: string;
  reading: string;
  nameThai: string;
  description: string;
  emoji: string;
  color: string;
  examples: ParticleExample[];
}

export interface ParticleGroup {
  id: string;
  name: string;
  nameThai: string;
  particles: Particle[];
}

export const particlesData: ParticleGroup[] = [
  {
    id: "basic",
    name: "基本助詞",
    nameThai: "คำช่วยพื้นฐาน",
    particles: [
      {
        id: "wa",
        particle: "は",
        reading: "wa",
        nameThai: "แสดงหัวข้อ",
        description: "ใช้แสดงหัวข้อของประโยค (Topic Marker)",
        emoji: "📌",
        color: "#FF6B9D",
        examples: [
          {
            japanese: "私は学生です",
            hiragana: "わたしはがくせいです",
            meaning: "ฉันเป็นนักเรียน",
          },
          {
            japanese: "これは本です",
            hiragana: "これはほんです",
            meaning: "นี่คือหนังสือ",
          },
          {
            japanese: "今日は暑いです",
            hiragana: "きょうはあついです",
            meaning: "วันนี้ร้อน",
          },
          {
            japanese: "彼は先生です",
            hiragana: "かれはせんせいです",
            meaning: "เขาเป็นครู",
          },
        ],
      },
      {
        id: "ga",
        particle: "が",
        reading: "ga",
        nameThai: "แสดงประธาน",
        description: "ใช้แสดงประธานของประโยค (Subject Marker)",
        emoji: "👤",
        color: "#4ECDC4",
        examples: [
          {
            japanese: "猫がいます",
            hiragana: "ねこがいます",
            meaning: "มีแมว",
          },
          {
            japanese: "誰が来ましたか",
            hiragana: "だれがきましたか",
            meaning: "ใครมา?",
          },
          {
            japanese: "雨が降っています",
            hiragana: "あめがふっています",
            meaning: "ฝนกำลังตก",
          },
          {
            japanese: "私が行きます",
            hiragana: "わたしがいきます",
            meaning: "ฉันจะไป (เน้นตัวฉัน)",
          },
        ],
      },
      {
        id: "wo",
        particle: "を",
        reading: "o",
        nameThai: "แสดงกรรม",
        description: "ใช้แสดงกรรมของกริยา (Object Marker)",
        emoji: "🎯",
        color: "#E6A700",
        examples: [
          {
            japanese: "りんごを食べます",
            hiragana: "りんごをたべます",
            meaning: "กินแอปเปิ้ล",
          },
          {
            japanese: "本を読みます",
            hiragana: "ほんをよみます",
            meaning: "อ่านหนังสือ",
          },
          {
            japanese: "音楽を聴きます",
            hiragana: "おんがくをききます",
            meaning: "ฟังเพลง",
          },
          {
            japanese: "公園を歩きます",
            hiragana: "こうえんをあるきます",
            meaning: "เดินผ่านสวน",
          },
        ],
      },
      {
        id: "ni",
        particle: "に",
        reading: "ni",
        nameThai: "แสดงทิศทาง/เวลา",
        description: "ใช้แสดงทิศทาง สถานที่ปลายทาง หรือเวลาที่แน่นอน",
        emoji: "📍",
        color: "#DDA0DD",
        examples: [
          {
            japanese: "学校に行きます",
            hiragana: "がっこうにいきます",
            meaning: "ไปโรงเรียน",
          },
          {
            japanese: "7時に起きます",
            hiragana: "しちじにおきます",
            meaning: "ตื่น 7 โมง",
          },
          {
            japanese: "友達に会います",
            hiragana: "ともだちにあいます",
            meaning: "เจอเพื่อน",
          },
          {
            japanese: "椅子に座ります",
            hiragana: "いすにすわります",
            meaning: "นั่งบนเก้าอี้",
          },
        ],
      },
      {
        id: "de",
        particle: "で",
        reading: "de",
        nameThai: "แสดงสถานที่/วิธีการ",
        description: "ใช้แสดงสถานที่ที่ทำกิจกรรม หรือวิธีการ/เครื่องมือ",
        emoji: "🏠",
        color: "#2D9B83",
        examples: [
          {
            japanese: "図書館で勉強します",
            hiragana: "としょかんでべんきょうします",
            meaning: "เรียนที่ห้องสมุด",
          },
          {
            japanese: "電車で行きます",
            hiragana: "でんしゃでいきます",
            meaning: "ไปด้วยรถไฟ",
          },
          {
            japanese: "箸で食べます",
            hiragana: "はしでたべます",
            meaning: "กินด้วยตะเกียบ",
          },
          {
            japanese: "日本語で話します",
            hiragana: "にほんごではなします",
            meaning: "พูดเป็นภาษาญี่ปุ่น",
          },
        ],
      },
      {
        id: "e",
        particle: "へ",
        reading: "e",
        nameThai: "แสดงทิศทาง",
        description: "ใช้แสดงทิศทางการเคลื่อนที่ (คล้าย に แต่เน้นทิศทาง)",
        emoji: "➡️",
        color: "#F9844A",
        examples: [
          {
            japanese: "日本へ行きます",
            hiragana: "にほんへいきます",
            meaning: "ไปญี่ปุ่น",
          },
          {
            japanese: "東へ進みます",
            hiragana: "ひがしへすすみます",
            meaning: "มุ่งหน้าไปทิศตะวันออก",
          },
          {
            japanese: "家へ帰ります",
            hiragana: "いえへかえります",
            meaning: "กลับบ้าน",
          },
          {
            japanese: "北海道へ旅行します",
            hiragana: "ほっかいどうへりょこうします",
            meaning: "ไปเที่ยวฮอกไกโด",
          },
        ],
      },
    ],
  },
  {
    id: "connecting",
    name: "接続助詞",
    nameThai: "คำช่วยเชื่อมความ",
    particles: [
      {
        id: "to",
        particle: "と",
        reading: "to",
        nameThai: "และ/กับ/ถ้า",
        description: "ใช้เชื่อมคำ หรือแสดงเงื่อนไขแน่นอน",
        emoji: "🤝",
        color: "#5A9A3D",
        examples: [
          {
            japanese: "犬と猫",
            hiragana: "いぬとねこ",
            meaning: "สุนัขและแมว",
          },
          {
            japanese: "ボタンを押すと開きます",
            hiragana: "ぼたんをおすとあきます",
            meaning: "กดปุ่มแล้วจะเปิด",
          },
          {
            japanese: "友達と遊びます",
            hiragana: "ともだちとあそびます",
            meaning: "เล่นกับเพื่อน",
          },
          {
            japanese: "春になると桜が咲きます",
            hiragana: "はるになるとさくらがさきます",
            meaning: "พอเป็นฤดูใบไม้ผลิ ซากุระจะบาน",
          },
        ],
      },
      {
        id: "mo",
        particle: "も",
        reading: "mo",
        nameThai: "ด้วย/ก็",
        description: "ใช้แสดงความหมายว่า 'ด้วย' หรือ 'ก็เหมือนกัน'",
        emoji: "➕",
        color: "#F94144",
        examples: [
          {
            japanese: "私も行きます",
            hiragana: "わたしもいきます",
            meaning: "ฉันก็ไปด้วย",
          },
          {
            japanese: "これも美味しい",
            hiragana: "これもおいしい",
            meaning: "อันนี้ก็อร่อย",
          },
          {
            japanese: "彼も学生です",
            hiragana: "かれもがくせいです",
            meaning: "เขาก็เป็นนักเรียน",
          },
          {
            japanese: "何も食べません",
            hiragana: "なにもたべません",
            meaning: "ไม่กินอะไรเลย",
          },
        ],
      },
      {
        id: "kara",
        particle: "から",
        reading: "kara",
        nameThai: "จาก/เพราะ",
        description: "ใช้แสดงจุดเริ่มต้น หรือเหตุผล",
        emoji: "🚀",
        color: "#577590",
        examples: [
          {
            japanese: "9時から始まります",
            hiragana: "くじからはじまります",
            meaning: "เริ่ม 9 โมง",
          },
          {
            japanese: "暑いから窓を開けます",
            hiragana: "あついからまどをあけます",
            meaning: "ร้อนเลยเปิดหน้าต่าง",
          },
          {
            japanese: "東京から来ました",
            hiragana: "とうきょうからきました",
            meaning: "มาจากโตเกียว",
          },
          {
            japanese: "これは誰からですか",
            hiragana: "これはだれからですか",
            meaning: "นี่จากใคร?",
          },
        ],
      },
      {
        id: "made",
        particle: "まで",
        reading: "made",
        nameThai: "จนถึง",
        description: "ใช้แสดงจุดสิ้นสุด ขอบเขต",
        emoji: "🏁",
        color: "#43AA8B",
        examples: [
          {
            japanese: "5時まで働きます",
            hiragana: "ごじまではたらきます",
            meaning: "ทำงานถึง 5 โมง",
          },
          {
            japanese: "駅まで歩きます",
            hiragana: "えきまであるきます",
            meaning: "เดินไปถึงสถานี",
          },
          {
            japanese: "朝から晩まで",
            hiragana: "あさからばんまで",
            meaning: "ตั้งแต่เช้าถึงค่ำ",
          },
          {
            japanese: "最後まで頑張ります",
            hiragana: "さいごまでがんばります",
            meaning: "จะพยายามจนถึงที่สุด",
          },
        ],
      },
      {
        id: "yori",
        particle: "より",
        reading: "yori",
        nameThai: "กว่า",
        description: "ใช้เปรียบเทียบ",
        emoji: "⚖️",
        color: "#F8961E",
        examples: [
          {
            japanese: "犬より猫が好き",
            hiragana: "いぬよりねこがすき",
            meaning: "ชอบแมวมากกว่าสุนัข",
          },
          {
            japanese: "昨日より暑い",
            hiragana: "きのうよりあつい",
            meaning: "ร้อนกว่าเมื่อวาน",
          },
          {
            japanese: "彼より背が高い",
            hiragana: "かれよりせがたかい",
            meaning: "สูงกว่าเขา",
          },
          {
            japanese: "予想より難しい",
            hiragana: "よそうよりむずかしい",
            meaning: "ยากกว่าที่คิด",
          },
        ],
      },
    ],
  },
  {
    id: "possessive",
    name: "所有助詞",
    nameThai: "คำช่วยแสดงความเป็นเจ้าของ",
    particles: [
      {
        id: "no",
        particle: "の",
        reading: "no",
        nameThai: "ของ",
        description: "ใช้แสดงความเป็นเจ้าของ หรือเชื่อมคำนาม",
        emoji: "👜",
        color: "#9B5DE5",
        examples: [
          {
            japanese: "私の本",
            hiragana: "わたしのほん",
            meaning: "หนังสือของฉัน",
          },
          {
            japanese: "日本の食べ物",
            hiragana: "にほんのたべもの",
            meaning: "อาหารญี่ปุ่น",
          },
          {
            japanese: "友達の家",
            hiragana: "ともだちのいえ",
            meaning: "บ้านของเพื่อน",
          },
          {
            japanese: "母の誕生日",
            hiragana: "ははのたんじょうび",
            meaning: "วันเกิดของแม่",
          },
        ],
      },
    ],
  },
  {
    id: "sentence-ending",
    name: "終助詞",
    nameThai: "คำช่วยท้ายประโยค",
    particles: [
      {
        id: "ka",
        particle: "か",
        reading: "ka",
        nameThai: "คำถาม/หรือ",
        description: "ใช้ทำประโยคคำถาม หรือแสดงทางเลือก",
        emoji: "❓",
        color: "#FF6B9D",
        examples: [
          {
            japanese: "これは何ですか",
            hiragana: "これはなんですか",
            meaning: "นี่คืออะไร?",
          },
          {
            japanese: "お茶かコーヒー",
            hiragana: "おちゃかこーひー",
            meaning: "ชาหรือกาแฟ",
          },
          {
            japanese: "元気ですか",
            hiragana: "げんきですか",
            meaning: "สบายดีไหม?",
          },
          {
            japanese: "いつ行きますか",
            hiragana: "いついきますか",
            meaning: "ไปเมื่อไหร่?",
          },
        ],
      },
      {
        id: "yo",
        particle: "よ",
        reading: "yo",
        nameThai: "เน้นย้ำ",
        description: "ใช้เน้นย้ำ บอกข้อมูลใหม่",
        emoji: "❗",
        color: "#4ECDC4",
        examples: [
          {
            japanese: "美味しいよ",
            hiragana: "おいしいよ",
            meaning: "อร่อยนะ!",
          },
          { japanese: "行くよ", hiragana: "いくよ", meaning: "ไปนะ!" },
          {
            japanese: "危ないよ",
            hiragana: "あぶないよ",
            meaning: "อันตรายนะ!",
          },
          {
            japanese: "もう遅いよ",
            hiragana: "もうおそいよ",
            meaning: "สายแล้วนะ!",
          },
        ],
      },
      {
        id: "ne",
        particle: "ね",
        reading: "ne",
        nameThai: "ใช่ไหม",
        description: "ใช้ขอความเห็นด้วย หรือยืนยัน",
        emoji: "🤔",
        color: "#E6A700",
        examples: [
          {
            japanese: "いい天気ですね",
            hiragana: "いいてんきですね",
            meaning: "อากาศดีใช่ไหม",
          },
          {
            japanese: "美味しいですね",
            hiragana: "おいしいですね",
            meaning: "อร่อยนะ",
          },
          {
            japanese: "面白いですね",
            hiragana: "おもしろいですね",
            meaning: "น่าสนใจนะ",
          },
          { japanese: "そうですね", hiragana: "そうですね", meaning: "ใช่เลย" },
        ],
      },
    ],
  },
  {
    id: "listing",
    name: "列挙助詞",
    nameThai: "คำช่วยแสดงรายการ",
    particles: [
      {
        id: "ya",
        particle: "や",
        reading: "ya",
        nameThai: "และ (ไม่ครบ)",
        description: "ใช้แสดงรายการบางส่วน (ยังมีอื่นอีก)",
        emoji: "📋",
        color: "#DDA0DD",
        examples: [
          {
            japanese: "りんごやバナナ",
            hiragana: "りんごやばなな",
            meaning: "แอปเปิ้ลและกล้วย (เป็นต้น)",
          },
          {
            japanese: "本や雑誌を読みます",
            hiragana: "ほんやざっしをよみます",
            meaning: "อ่านหนังสือและนิตยสาร (ฯลฯ)",
          },
          {
            japanese: "犬や猫が好きです",
            hiragana: "いぬやねこがすきです",
            meaning: "ชอบสุนัขและแมว (เป็นต้น)",
          },
          {
            japanese: "東京や大阪",
            hiragana: "とうきょうやおおさか",
            meaning: "โตเกียวและโอซาก้า (ฯลฯ)",
          },
        ],
      },
      {
        id: "nado",
        particle: "など",
        reading: "nado",
        nameThai: "เป็นต้น",
        description: "ใช้แสดงว่ายังมีอื่นๆ อีก",
        emoji: "⋯",
        color: "#2D9B83",
        examples: [
          {
            japanese: "寿司など",
            hiragana: "すしなど",
            meaning: "ซูชิเป็นต้น",
          },
          {
            japanese: "東京や大阪などに行きます",
            hiragana: "とうきょうやおおさかなどにいきます",
            meaning: "ไปโตเกียว โอซาก้า เป็นต้น",
          },
          {
            japanese: "りんごやみかんなどを買いました",
            hiragana: "りんごやみかんなどをかいました",
            meaning: "ซื้อแอปเปิ้ล ส้ม เป็นต้น",
          },
          {
            japanese: "日本語や英語などを勉強します",
            hiragana: "にほんごやえいごなどをべんきょうします",
            meaning: "เรียนภาษาญี่ปุ่น อังกฤษ เป็นต้น",
          },
        ],
      },
    ],
  },
  {
    id: "limiting",
    name: "限定助詞",
    nameThai: "คำช่วยจำกัดความ",
    particles: [
      {
        id: "shika",
        particle: "しか",
        reading: "shika",
        nameThai: "เท่านั้น (+ ปฏิเสธ)",
        description: "ใช้กับกริยาปฏิเสธ แสดงว่า 'มีแค่'",
        emoji: "1️⃣",
        color: "#F9844A",
        examples: [
          {
            japanese: "100円しかない",
            hiragana: "ひゃくえんしかない",
            meaning: "มีแค่ 100 เยน",
          },
          {
            japanese: "日本語しか話せません",
            hiragana: "にほんごしかはなせません",
            meaning: "พูดได้แค่ญี่ปุ่น",
          },
          {
            japanese: "水しか飲みません",
            hiragana: "みずしかのみません",
            meaning: "ดื่มแค่น้ำ",
          },
          {
            japanese: "一人しか来ませんでした",
            hiragana: "ひとりしかきませんでした",
            meaning: "มาแค่คนเดียว",
          },
        ],
      },
      {
        id: "dake",
        particle: "だけ",
        reading: "dake",
        nameThai: "เท่านั้น",
        description: "ใช้แสดงปริมาณหรือขอบเขตที่จำกัด",
        emoji: "⭕",
        color: "#5A9A3D",
        examples: [
          { japanese: "これだけ", hiragana: "これだけ", meaning: "แค่นี้" },
          {
            japanese: "一人だけ",
            hiragana: "ひとりだけ",
            meaning: "แค่คนเดียว",
          },
          {
            japanese: "少しだけください",
            hiragana: "すこしだけください",
            meaning: "ขอนิดเดียว",
          },
          {
            japanese: "見るだけです",
            hiragana: "みるだけです",
            meaning: "แค่ดูเฉยๆ",
          },
        ],
      },
      {
        id: "bakari",
        particle: "ばかり",
        reading: "bakari",
        nameThai: "เพิ่ง/แต่...เท่านั้น",
        description: "ใช้แสดงว่าเพิ่งทำ หรือทำแต่สิ่งเดียว",
        emoji: "🔄",
        color: "#F94144",
        examples: [
          {
            japanese: "食べたばかり",
            hiragana: "たべたばかり",
            meaning: "เพิ่งกิน",
          },
          {
            japanese: "ゲームばかりしている",
            hiragana: "げーむばかりしている",
            meaning: "เล่นแต่เกม",
          },
          {
            japanese: "来たばかりです",
            hiragana: "きたばかりです",
            meaning: "เพิ่งมา",
          },
          {
            japanese: "肉ばかり食べる",
            hiragana: "にくばかりたべる",
            meaning: "กินแต่เนื้อ",
          },
        ],
      },
    ],
  },
  {
    id: "approximation",
    name: "程度助詞",
    nameThai: "คำช่วยแสดงระดับ",
    particles: [
      {
        id: "kurai",
        particle: "くらい/ぐらい",
        reading: "kurai/gurai",
        nameThai: "ประมาณ",
        description: "ใช้แสดงปริมาณประมาณ",
        emoji: "📏",
        color: "#577590",
        examples: [
          {
            japanese: "3時間くらい",
            hiragana: "さんじかんくらい",
            meaning: "ประมาณ 3 ชั่วโมง",
          },
          {
            japanese: "1000円ぐらい",
            hiragana: "せんえんぐらい",
            meaning: "ประมาณ 1000 เยน",
          },
          {
            japanese: "10人くらい来ました",
            hiragana: "じゅうにんくらいきました",
            meaning: "มาประมาณ 10 คน",
          },
          {
            japanese: "このくらい",
            hiragana: "このくらい",
            meaning: "ประมาณนี้",
          },
        ],
      },
      {
        id: "hodo",
        particle: "ほど",
        reading: "hodo",
        nameThai: "ประมาณ/ยิ่ง...ยิ่ง",
        description: "ใช้แสดงระดับ หรือเปรียบเทียบ",
        emoji: "📊",
        color: "#43AA8B",
        examples: [
          {
            japanese: "死ぬほど疲れた",
            hiragana: "しぬほどつかれた",
            meaning: "เหนื่อยจะตาย",
          },
          {
            japanese: "練習するほど上手になる",
            hiragana: "れんしゅうするほどじょうずになる",
            meaning: "ยิ่งซ้อมยิ่งเก่ง",
          },
          {
            japanese: "泣くほど嬉しい",
            hiragana: "なくほどうれしい",
            meaning: "ดีใจจนร้องไห้",
          },
          {
            japanese: "彼ほど上手じゃない",
            hiragana: "かれほどじょうずじゃない",
            meaning: "ไม่เก่งเท่าเขา",
          },
        ],
      },
    ],
  },
  {
    id: "contrast",
    name: "逆接助詞",
    nameThai: "คำช่วยแสดงความขัดแย้ง",
    particles: [
      {
        id: "kedo",
        particle: "けど/けれども",
        reading: "kedo",
        nameThai: "แต่",
        description: "ใช้แสดงความขัดแย้ง หรือเกริ่นนำ",
        emoji: "↔️",
        color: "#F8961E",
        examples: [
          {
            japanese: "高いけど美味しい",
            hiragana: "たかいけどおいしい",
            meaning: "แพงแต่อร่อย",
          },
          {
            japanese: "すみませんけど",
            hiragana: "すみませんけど",
            meaning: "ขอโทษครับ/ค่ะ แต่ว่า...",
          },
          {
            japanese: "疲れたけど楽しかった",
            hiragana: "つかれたけどたのしかった",
            meaning: "เหนื่อยแต่สนุก",
          },
          {
            japanese: "難しいけど面白い",
            hiragana: "むずかしいけどおもしろい",
            meaning: "ยากแต่น่าสนใจ",
          },
        ],
      },
      {
        id: "noni",
        particle: "のに",
        reading: "noni",
        nameThai: "ทั้งที่",
        description: "ใช้แสดงความขัดแย้งกับความคาดหวัง",
        emoji: "😤",
        color: "#9B5DE5",
        examples: [
          {
            japanese: "勉強したのに落ちた",
            hiragana: "べんきょうしたのにおちた",
            meaning: "ทั้งที่อ่านหนังสือแต่สอบตก",
          },
          {
            japanese: "暑いのにコートを着る",
            hiragana: "あついのにこーとをきる",
            meaning: "ทั้งที่ร้อนแต่ใส่โค้ท",
          },
          {
            japanese: "呼んだのに来ない",
            hiragana: "よんだのにこない",
            meaning: "ทั้งที่เรียกแต่ไม่มา",
          },
          {
            japanese: "約束したのに忘れた",
            hiragana: "やくそくしたのにわすれた",
            meaning: "ทั้งที่สัญญาแต่ลืม",
          },
        ],
      },
    ],
  },
];
