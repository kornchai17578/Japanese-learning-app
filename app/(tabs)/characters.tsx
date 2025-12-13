import * as Speech from "expo-speech";
import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Character, CharacterGroup, hiraganaData } from "../../data/hiragana";
import { katakanaData } from "../../data/katakana";

function CharCard({ char }: { char: Character }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Speech.speak(char.char, { language: "ja" });

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPress={handlePress}
        className="bg-white rounded-2xl p-3 m-1 shadow-md items-center justify-center"
        style={{ width: 65, height: 80 }}
      >
        <Text className="text-3xl font-bold text-gray-700">{char.char}</Text>
        <Text className="text-sm text-pink-500 mt-1">{char.romaji}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

function CharacterGroupView({ group }: { group: CharacterGroup }) {
  return (
    <View className="mb-4">
      <Text className="text-lg font-bold text-gray-600 px-4 mb-2">
        {group.name}
      </Text>
      <View className="flex-row flex-wrap justify-center">
        {group.characters.map((char) => (
          <CharCard key={char.char} char={char} />
        ))}
      </View>
    </View>
  );
}

export default function CharactersScreen() {
  const [activeType, setActiveType] = useState<"hiragana" | "katakana">(
    "hiragana"
  );

  const data = activeType === "hiragana" ? hiraganaData : katakanaData;

  return (
    <View className="flex-1 bg-pink-50">
      {/* Toggle Switch */}
      <View className="flex-row justify-center py-4">
        <View className="flex-row bg-white rounded-full p-1 shadow-md">
          <TouchableOpacity
            onPress={() => setActiveType("hiragana")}
            className={`px-6 py-3 rounded-full ${
              activeType === "hiragana" ? "bg-pink-500" : "bg-transparent"
            }`}
          >
            <Text
              className={`font-bold text-lg ${
                activeType === "hiragana" ? "text-white" : "text-gray-500"
              }`}
            >
              ひらがな
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveType("katakana")}
            className={`px-6 py-3 rounded-full ${
              activeType === "katakana" ? "bg-teal-500" : "bg-transparent"
            }`}
          >
            <Text
              className={`font-bold text-lg ${
                activeType === "katakana" ? "text-white" : "text-gray-500"
              }`}
            >
              カタカナ
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Title */}
      <View className="items-center mb-2">
        <Text className="text-2xl font-bold text-gray-700">
          {activeType === "hiragana" ? "📝 ฮิรางานะ" : "📝 คาตากานะ"}
        </Text>
        <Text className="text-gray-500">🔊 แตะตัวอักษรเพื่อฟังเสียง</Text>
      </View>

      {/* Character Grid */}
      <ScrollView className="flex-1">
        {data.map((group) => (
          <CharacterGroupView key={group.name} group={group} />
        ))}
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
