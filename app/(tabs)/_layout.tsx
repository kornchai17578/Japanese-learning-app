import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "../global.css";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF6B9D",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          height: 85,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        headerStyle: {
          backgroundColor: "#FF6B9D",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "หน้าหลัก",
          headerTitle: "🎌 เรียนภาษาญี่ปุ่น",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="characters"
        options={{
          title: "ตัวอักษร",
          headerTitle: "📝 ตัวอักษร",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="text" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="verbForms"
        options={{
          title: "รูปกริยา",
          headerTitle: "🔤 รูปกริยา",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="git-branch" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="particles"
        options={{
          title: "คำช่วย",
          headerTitle: "🔗 คำช่วย",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="link" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vocabulary"
        options={{
          title: "คำศัพท์",
          headerTitle: "📚 คำศัพท์",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sentences"
        options={{
          title: "ประโยค",
          headerTitle: "💬 ประโยค",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: "ทดสอบ",
          headerTitle: "❓ ทดสอบ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="help-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
