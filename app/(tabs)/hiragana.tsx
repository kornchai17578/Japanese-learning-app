import * as Speech from "expo-speech";
import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Character, hiraganaData } from "../../data/hiragana";

function CharacterCard({ char, romaji }: Character) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePress = () => {
    // Speak the character
    Speech.speak(char, { language: "ja" });

    // Animate
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

    setIsFlipped(!isFlipped);
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPress={handlePress}
        className="bg-white rounded-2xl p-4 m-2 shadow-md items-center justify-center"
        style={{ width: 80, height: 100 }}
      >
        <Text className="text-4xl font-bold text-pink-500">{char}</Text>
        <Text className="text-lg text-gray-500 mt-1">{romaji}</Text>
        <Text className="text-xs text-gray-400 mt-1">🔊</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function HiraganaScreen() {
  const [selectedGroup, setSelectedGroup] = useState(0);

  return (
    <View className="flex-1 bg-pink-50">
      {/* Group selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-14 px-2 py-2"
      >
        {hiraganaData.map((group, index) => (
          <TouchableOpacity
            key={group.name}
            onPress={() => setSelectedGroup(index)}
            className={`px-4 py-2 mx-1 rounded-full ${
              selectedGroup === index ? "bg-pink-500" : "bg-white"
            }`}
          >
            <Text
              className={`font-bold ${
                selectedGroup === index ? "text-white" : "text-pink-500"
              }`}
            >
              {group.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Characters */}
      <ScrollView className="flex-1 px-2">
        <View className="flex-row flex-wrap justify-center py-4">
          {hiraganaData[selectedGroup].characters.map((char) => (
            <CharacterCard key={char.char} {...char} />
          ))}
        </View>

        {/* Instructions */}
        <View className="items-center py-4 px-6">
          <Text className="text-gray-500 text-center">
            👆 แตะตัวอักษรเพื่อฟังเสียง
          </Text>
        </View>

        {/* All characters view */}
        <View className="bg-white rounded-3xl mx-4 p-4 mb-6">
          <Text className="text-xl font-bold text-pink-500 mb-4 text-center">
            ฮิรางานะทั้งหมด
          </Text>
          <View className="flex-row flex-wrap justify-center">
            {hiraganaData.flatMap((group) =>
              group.characters.map((char) => (
                <TouchableOpacity
                  key={char.char}
                  onPress={() => Speech.speak(char.char, { language: "ja" })}
                  className="bg-pink-100 rounded-xl p-2 m-1"
                >
                  <Text className="text-2xl text-center">{char.char}</Text>
                </TouchableOpacity>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
