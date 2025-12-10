import * as Speech from "expo-speech";
import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Sentence, sentencesData } from "../../data/sentences";

function SentenceCard({ sentence }: { sentence: Sentence }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Speech.speak(sentence.hiragana, { language: "ja", rate: 0.8 });

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.02,
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
        className="bg-white rounded-2xl p-4 mb-3 shadow-md"
      >
        <View className="flex-row items-start">
          <Text className="text-3xl mr-3">{sentence.emoji}</Text>
          <View className="flex-1">
            <Text className="text-xl font-bold text-gray-800">
              {sentence.japanese}
            </Text>
            <Text className="text-base text-gray-500 mt-1">
              {sentence.hiragana}
            </Text>
            <Text className="text-base text-pink-500 mt-1">
              {sentence.thai}
            </Text>
            <View className="bg-gray-100 rounded-lg px-2 py-1 mt-2 self-start">
              <Text className="text-xs text-gray-500">
                💭 {sentence.situation}
              </Text>
            </View>
          </View>
          <Text className="text-gray-400">🔊</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function SentencesScreen() {
  const [selectedCategory, setSelectedCategory] = useState(sentencesData[0].id);

  const currentCategory =
    sentencesData.find((c) => c.id === selectedCategory) || sentencesData[0];

  return (
    <View className="flex-1 bg-purple-50">
      {/* Category selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-14 px-2 py-2"
      >
        {sentencesData.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 mx-1 rounded-full flex-row items-center`}
            style={{
              backgroundColor:
                selectedCategory === category.id ? category.color : "#FFF",
            }}
          >
            <Text className="mr-1">{category.emoji}</Text>
            <Text
              className={`font-bold ${
                selectedCategory === category.id
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Header */}
      <View
        className="mx-4 rounded-2xl p-4 mb-3"
        style={{ backgroundColor: currentCategory.color }}
      >
        <Text className="text-white text-center">
          <Text className="text-2xl">{currentCategory.emoji}</Text>{" "}
          <Text className="text-xl font-bold">{currentCategory.name}</Text>
        </Text>
        <Text className="text-white/80 text-center mt-1">
          {currentCategory.sentences.length} ประโยค • แตะเพื่อฟังเสียง
        </Text>
      </View>

      {/* Sentences */}
      <ScrollView className="flex-1 px-4">
        {currentCategory.sentences.map((sentence, index) => (
          <SentenceCard
            key={`${sentence.japanese}-${index}`}
            sentence={sentence}
          />
        ))}
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
