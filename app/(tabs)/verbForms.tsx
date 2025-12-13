import * as Speech from "expo-speech";
import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { VerbForm, verbFormsData } from "../../data/verbForms";

function VerbFormCard({
  form,
  isExpanded,
  onPress,
}: {
  form: VerbForm;
  isExpanded: boolean;
  onPress: () => void;
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
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

  const speakExample = (text: string) => {
    Speech.speak(text, { language: "ja" });
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
        className="mx-4 mb-3 rounded-2xl p-4 shadow-md"
        style={{ backgroundColor: form.color }}
      >
        {/* Header */}
        <View className="flex-row items-center">
          <Text className="text-4xl mr-3">{form.emoji}</Text>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-white">{form.name}</Text>
            <Text className="text-lg text-white/80">{form.nameThai}</Text>
          </View>
          <Text className="text-2xl text-white">{isExpanded ? "▼" : "▶"}</Text>
        </View>

        {/* Expanded Content */}
        {isExpanded && (
          <View className="mt-4 bg-white/20 rounded-xl p-3">
            <Text className="text-white font-medium mb-1">
              📖 {form.description}
            </Text>
            <Text className="text-white/80 text-sm mb-3">💡 {form.usage}</Text>

            <Text className="text-white font-bold mb-2">ตัวอย่าง:</Text>
            {form.examples.map((ex, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => speakExample(ex.conjugated)}
                className="bg-white rounded-xl p-3 mb-2 shadow-sm"
              >
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-gray-800 font-bold text-lg">
                      {ex.dictionary} → {ex.conjugated}
                    </Text>
                    <Text className="text-gray-600">{ex.hiragana}</Text>
                    <Text className="text-gray-500 text-sm">{ex.meaning}</Text>
                  </View>
                  <Text className="text-2xl">🔊</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

export default function VerbFormsScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View className="flex-1 bg-orange-50">
      {/* Header */}
      <View className="items-center py-4">
        <Text className="text-3xl font-bold text-gray-700">🔤 รูปกริยา</Text>
        <Text className="text-gray-500">12 รูปหลักที่ใช้ในการผันกริยา</Text>
      </View>

      {/* Verb Forms List */}
      <ScrollView className="flex-1">
        {verbFormsData.map((form) => (
          <VerbFormCard
            key={form.id}
            form={form}
            isExpanded={expandedId === form.id}
            onPress={() => toggleExpand(form.id)}
          />
        ))}
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
