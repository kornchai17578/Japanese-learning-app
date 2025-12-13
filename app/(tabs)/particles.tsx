import * as Speech from "expo-speech";
import { useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Particle, ParticleGroup, particlesData } from "../../data/particles";

function ParticleCard({
  particle,
  isExpanded,
  onPress,
}: {
  particle: Particle;
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
        className="mb-2 rounded-2xl p-4 shadow-md"
        style={{ backgroundColor: particle.color }}
      >
        {/* Header */}
        <View className="flex-row items-center">
          <Text className="text-3xl mr-3">{particle.emoji}</Text>
          <View className="flex-1">
            <View className="flex-row items-center">
              <Text className="text-3xl font-bold text-white mr-2">
                {particle.particle}
              </Text>
              <Text className="text-lg text-white/80">
                ({particle.reading})
              </Text>
            </View>
            <Text className="text-white/90">{particle.nameThai}</Text>
          </View>
          <Text className="text-xl text-white">{isExpanded ? "▼" : "▶"}</Text>
        </View>

        {/* Expanded Content */}
        {isExpanded && (
          <View className="mt-3 bg-white/20 rounded-xl p-3">
            <Text className="text-white font-medium mb-3">
              📖 {particle.description}
            </Text>

            <Text className="text-white font-bold mb-2">ตัวอย่าง:</Text>
            {particle.examples.map((ex, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => speakExample(ex.japanese)}
                className="bg-white rounded-xl p-3 mb-2 shadow-sm"
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-1 mr-2">
                    <Text className="text-gray-800 font-bold text-lg">
                      {ex.japanese}
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

function ParticleGroupSection({ group }: { group: ParticleGroup }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View className="mb-4 px-4">
      <View className="bg-white rounded-2xl p-4 mb-3 shadow-md">
        <Text className="text-2xl font-bold text-gray-700">
          📚 {group.name}
        </Text>
        <Text className="text-gray-500 text-lg font-bold">
          {group.nameThai}
        </Text>
      </View>

      {group.particles.map((particle) => (
        <ParticleCard
          key={particle.id}
          particle={particle}
          isExpanded={expandedId === particle.id}
          onPress={() => toggleExpand(particle.id)}
        />
      ))}
    </View>
  );
}

export default function ParticlesScreen() {
  return (
    <View className="flex-1 bg-purple-50">
      {/* Header */}
      <View className="items-center py-4">
        <Text className="text-3xl font-bold text-gray-700">🔗 คำช่วย</Text>
        <Text className="text-gray-500">25 คำช่วยหลักในภาษาญี่ปุ่น</Text>
      </View>

      {/* Particles List */}
      <ScrollView className="flex-1">
        {particlesData.map((group) => (
          <ParticleGroupSection key={group.id} group={group} />
        ))}
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
