import { useRouter } from "expo-router";
import { useRef } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const menuItems = [
  {
    id: "hiragana",
    title: "ฮิรางานะ",
    subtitle: "あいうえお",
    emoji: "📝",
    color: "#FF6B9D",
    route: "/hiragana",
  },
  {
    id: "katakana",
    title: "คาตากานะ",
    subtitle: "アイウエオ",
    emoji: "📝",
    color: "#4ECDC4",
    route: "/katakana",
  },
  {
    id: "vocabulary",
    title: "คำศัพท์",
    subtitle: "300+ คำ 16 หมวด",
    emoji: "📚",
    color: "#FFE66D",
    route: "/vocabulary",
  },
  {
    id: "sentences",
    title: "ประโยค",
    subtitle: "110+ ประโยคชีวิตประจำวัน",
    emoji: "💬",
    color: "#DDA0DD",
    route: "/sentences",
  },
  {
    id: "quiz",
    title: "ทดสอบ",
    subtitle: "เก็บคะแนน ⭐",
    emoji: "❓",
    color: "#95E1D3",
    route: "/quiz",
  },
];

function MenuCard({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPress={() => router.push(item.route as any)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
        className="mb-4 rounded-3xl p-6 shadow-lg"
        style={{ backgroundColor: item.color }}
      >
        <View className="flex-row items-center">
          <Text className="text-5xl mr-4">{item.emoji}</Text>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-white">{item.title}</Text>
            <Text className="text-lg text-white/80">{item.subtitle}</Text>
          </View>
          <Text className="text-3xl">▶</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gradient-to-b from-pink-50 to-purple-50">
      <ScrollView className="flex-1 px-5 pt-4">
        {/* Header */}
        <View className="items-center mb-6">
          <Text className="text-6xl mb-2">🎌</Text>
          <Text className="text-3xl font-bold text-pink-500">สวัสดี!</Text>
          <Text className="text-lg text-gray-500">
            มาเรียนภาษาญี่ปุ่นกันเถอะ!
          </Text>
        </View>

        {/* Progress Card */}
        <View className="bg-white rounded-3xl p-5 mb-6 shadow-md">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-gray-500">ความก้าวหน้า</Text>
              <Text className="text-2xl font-bold text-pink-500">เริ่มต้น</Text>
            </View>
            <View className="flex-row">
              <Text className="text-3xl">⭐</Text>
              <Text className="text-2xl font-bold text-yellow-500 ml-1">0</Text>
            </View>
          </View>
          <View className="bg-gray-200 rounded-full h-3 mt-3">
            <View className="bg-pink-400 rounded-full h-3 w-1/12" />
          </View>
        </View>

        {/* Menu Items */}
        <Text className="text-xl font-bold text-gray-700 mb-4">
          เลือกบทเรียน
        </Text>
        {menuItems.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}

        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
