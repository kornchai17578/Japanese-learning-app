import * as Speech from "expo-speech";
import { useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { hiraganaData } from "../../data/hiragana";
import { katakanaData } from "../../data/katakana";
import { vocabularyData } from "../../data/vocabulary";

type QuizType = "hiragana" | "katakana" | "vocabulary";

interface Question {
  question: string;
  correctAnswer: string;
  options: string[];
  audio?: string;
}

function generateHiraganaQuestions(): Question[] {
  const allChars = hiraganaData.flatMap((g) => g.characters);
  const questions: Question[] = [];

  for (let i = 0; i < 10; i++) {
    const shuffled = [...allChars].sort(() => Math.random() - 0.5);
    const correct = shuffled[0];
    const wrongOptions = shuffled.slice(1, 4).map((c) => c.romaji);

    questions.push({
      question: correct.char,
      correctAnswer: correct.romaji,
      options: [...wrongOptions, correct.romaji].sort(
        () => Math.random() - 0.5
      ),
      audio: correct.char,
    });
  }

  return questions;
}

function generateKatakanaQuestions(): Question[] {
  const allChars = katakanaData.flatMap((g) => g.characters);
  const questions: Question[] = [];

  for (let i = 0; i < 10; i++) {
    const shuffled = [...allChars].sort(() => Math.random() - 0.5);
    const correct = shuffled[0];
    const wrongOptions = shuffled.slice(1, 4).map((c) => c.romaji);

    questions.push({
      question: correct.char,
      correctAnswer: correct.romaji,
      options: [...wrongOptions, correct.romaji].sort(
        () => Math.random() - 0.5
      ),
      audio: correct.char,
    });
  }

  return questions;
}

function generateVocabQuestions(): Question[] {
  const questions: Question[] = [];
  const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5);

  for (let i = 0; i < Math.min(10, shuffled.length); i++) {
    const correct = shuffled[i];
    const wrongOptions = shuffled
      .filter((v) => v.japanese !== correct.japanese)
      .slice(0, 3)
      .map((v) => v.thai);

    questions.push({
      question: correct.japanese,
      correctAnswer: correct.thai,
      options: [...wrongOptions, correct.thai].sort(() => Math.random() - 0.5),
      audio: correct.hiragana,
    });
  }

  return questions;
}

export default function QuizScreen() {
  const [quizType, setQuizType] = useState<QuizType | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);

  const bounceAnim = useRef(new Animated.Value(1)).current;

  const startQuiz = (type: QuizType) => {
    setQuizType(type);
    let newQuestions: Question[];
    if (type === "hiragana") {
      newQuestions = generateHiraganaQuestions();
    } else if (type === "katakana") {
      newQuestions = generateKatakanaQuestions();
    } else {
      newQuestions = generateVocabQuestions();
    }
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowResult(false);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === questions[currentIndex].correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setScore((s) => s + 1);
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1.2,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((i) => i + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const playAudio = () => {
    if (questions[currentIndex]?.audio) {
      Speech.speak(questions[currentIndex].audio!, { language: "ja" });
    }
  };

  // Menu screen
  if (!quizType) {
    return (
      <View className="flex-1 bg-green-50 items-center justify-center px-6">
        <Text className="text-6xl mb-4">🎯</Text>
        <Text className="text-3xl font-bold text-green-600 mb-2">
          ทดสอบความรู้
        </Text>
        <Text className="text-gray-500 mb-8">เลือกประเภทข้อสอบ</Text>

        <TouchableOpacity
          onPress={() => startQuiz("hiragana")}
          className="bg-pink-500 rounded-2xl px-8 py-4 mb-4 w-full"
        >
          <Text className="text-white text-xl font-bold text-center">
            📝 ฮิรางานะ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => startQuiz("katakana")}
          className="bg-teal-500 rounded-2xl px-8 py-4 mb-4 w-full"
        >
          <Text className="text-white text-xl font-bold text-center">
            📝 คาตากานะ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => startQuiz("vocabulary")}
          className="bg-yellow-500 rounded-2xl px-8 py-4 w-full"
        >
          <Text className="text-white text-xl font-bold text-center">
            📚 คำศัพท์
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Result screen
  if (showResult) {
    const stars = score >= 8 ? 3 : score >= 5 ? 2 : score >= 3 ? 1 : 0;
    return (
      <View className="flex-1 bg-purple-50 items-center justify-center px-6">
        <Text className="text-6xl mb-4">🎉</Text>
        <Text className="text-3xl font-bold text-purple-600 mb-2">
          เสร็จสิ้น!
        </Text>

        <View className="bg-white rounded-3xl p-6 my-6 items-center w-full">
          <Text className="text-gray-500 mb-2">คะแนนของคุณ</Text>
          <Text className="text-5xl font-bold text-purple-600">
            {score}/{questions.length}
          </Text>
          <View className="flex-row mt-4">
            {[1, 2, 3].map((i) => (
              <Text key={i} className="text-4xl mx-1">
                {i <= stars ? "⭐" : "☆"}
              </Text>
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => startQuiz(quizType)}
          className="bg-purple-500 rounded-2xl px-8 py-4 mb-4 w-full"
        >
          <Text className="text-white text-xl font-bold text-center">
            🔄 เล่นอีกครั้ง
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setQuizType(null)}
          className="bg-gray-300 rounded-2xl px-8 py-4 w-full"
        >
          <Text className="text-gray-700 text-xl font-bold text-center">
            🏠 กลับหน้าหลัก
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Quiz screen
  const question = questions[currentIndex];
  return (
    <View className="flex-1 bg-blue-50 px-6 pt-6">
      {/* Progress */}
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity
          onPress={() => setQuizType(null)}
          className="bg-gray-200 rounded-full px-3 py-1"
        >
          <Text className="text-gray-600">✕ ยกเลิก</Text>
        </TouchableOpacity>
        <Text className="text-gray-500">
          ข้อ {currentIndex + 1}/{questions.length}
        </Text>
        <View className="flex-row items-center">
          <Text className="text-2xl">⭐</Text>
          <Text className="text-xl font-bold text-yellow-500 ml-1">
            {score}
          </Text>
        </View>
      </View>

      {/* Progress bar */}
      <View className="bg-gray-200 rounded-full h-2 mb-6">
        <View
          className="bg-blue-500 rounded-full h-2"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </View>

      {/* Question */}
      <Animated.View
        style={{ transform: [{ scale: bounceAnim }] }}
        className="bg-white rounded-3xl p-8 items-center mb-6 shadow-lg"
      >
        <Text className="text-6xl mb-4">{question.question}</Text>
        <TouchableOpacity
          onPress={playAudio}
          className="bg-blue-100 rounded-full px-4 py-2"
        >
          <Text className="text-blue-500">🔊 ฟังเสียง</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Options */}
      <View className="space-y-3">
        {question.options.map((option, index) => {
          let bgColor = "bg-white";
          if (selectedAnswer === option) {
            bgColor = isCorrect ? "bg-green-400" : "bg-red-400";
          } else if (selectedAnswer && option === question.correctAnswer) {
            bgColor = "bg-green-400";
          }

          return (
            <TouchableOpacity
              key={`${option}-${index}`}
              onPress={() => handleAnswer(option)}
              disabled={!!selectedAnswer}
              className={`${bgColor} rounded-2xl p-4 mb-2 shadow-md`}
            >
              <Text
                className={`text-xl text-center font-medium ${
                  selectedAnswer === option ? "text-white" : "text-gray-700"
                }`}
              >
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Feedback */}
      {isCorrect !== null && (
        <View className="items-center mt-6">
          <Text className="text-4xl">
            {isCorrect ? "🎉 ถูกต้อง!" : "😅 ลองอีกครั้ง"}
          </Text>
        </View>
      )}
    </View>
  );
}
