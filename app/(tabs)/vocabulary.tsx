import * as Speech from "expo-speech";
import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  categoryNames,
  vocabularyData,
  VocabularyItem,
} from "../../data/vocabulary";

function VocabCard({ item }: { item: VocabularyItem }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // Speak the hiragana
    Speech.speak(item.hiragana, { language: "ja" });

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.05,
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
        className="bg-white rounded-2xl p-4 m-2 shadow-md items-center"
        style={{ width: 160, minHeight: 140 }}
      >
        <Text className="text-5xl mb-2">{item.emoji}</Text>
        <Text className="text-2xl font-bold text-gray-700">
          {item.japanese}
        </Text>
        <Text className="text-lg text-gray-500">{item.hiragana}</Text>
        <Text className="text-sm text-pink-500 mt-1">{item.thai}</Text>
        <Text className="text-xs text-gray-400 mt-1">🔊 แตะเพื่อฟัง</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function VocabularyScreen() {
  const categories = Object.keys(categoryNames);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredVocab =
    selectedCategory === "all"
      ? vocabularyData
      : vocabularyData.filter((item) => item.category === selectedCategory);

  return (
    <View className="flex-1 bg-yellow-50">
      {/* Category selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-14 px-2 py-2"
      >
        <TouchableOpacity
          onPress={() => setSelectedCategory("all")}
          className={`px-4 py-2 mx-1 rounded-full ${
            selectedCategory === "all" ? "bg-yellow-500" : "bg-white"
          }`}
        >
          <Text
            className={`font-bold ${
              selectedCategory === "all" ? "text-white" : "text-yellow-600"
            }`}
          >
            📚 ทั้งหมด
          </Text>
        </TouchableOpacity>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            className={`px-4 py-2 mx-1 rounded-full ${
              selectedCategory === cat ? "bg-yellow-500" : "bg-white"
            }`}
          >
            <Text
              className={`font-bold ${
                selectedCategory === cat ? "text-white" : "text-yellow-600"
              }`}
            >
              {categoryNames[cat].emoji} {categoryNames[cat].name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Vocabulary cards */}
      <ScrollView className="flex-1 px-2">
        <View className="flex-row flex-wrap justify-center py-4">
          {filteredVocab.map((item, index) => (
            <VocabCard key={`${item.japanese}-${index}`} item={item} />
          ))}
        </View>

        <View className="items-center py-4 pb-10">
          <Text className="text-gray-500">
            📖 รวม {filteredVocab.length} คำศัพท์
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
