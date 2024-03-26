import { ActivityIndicator, Text, View } from "react-native";
// Import Link and router if needed for navigation, not used in this snippet
// import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react"; // Added useEffect
import { ScrollView } from "react-native-gesture-handler";

export default function Modal() {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true); // Fixed the useState declaration and set initial state to true

  // useEffect(() => {
  //   // Simulate a loading process, for example, fetching data with Axios
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Hide loading indicator after a delay
  //   }, 2000); // 2000 milliseconds = 2 seconds delay

  //   return () => clearTimeout(timer); // Cleanup the timer
  // }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      {loading ? ( // Corrected variable name to 'loading'
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="gray" />
        </View>
      ) : (
        // Your content goes here, after loading is complete
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Content Loaded
        </Text>
      )}
    </ScrollView>
  );
}
