import { ActivityIndicator, Text, View } from "react-native";
// Import Link and router if needed for navigation, not used in this snippet
// import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react"; // Added useEffect
import { ScrollView } from "react-native-gesture-handler";
import axiosConfig from "../../../helpers/axiosConfig";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import SpecialityIcon from "../../../Components/SpecialityIcon";
import { FloatingButton } from "react-native-ui-lib";

export default function Modal() {
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [consultation, setConsultation] = useState(null);

  useEffect(() => {
    axiosConfig
      .get("/api/consultation/" + id)
      .then((response) => {
        setConsultation(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  }, []);

  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        {loading ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large" color="gray" />
          </View>
        ) : (
          <View className="flex-1">
            <SpecialityIcon
              name={consultation?.speciality}
              classname="w-full h-1/3 flex justify-center items-center"
              iconStyle={{ size: 70 }}
            />
            <View className="flex-row mt-2 px-4">
              <View className="flex-grow mr-2">
                <Text className="mb-1 font-bold">Début</Text>
                <View className="rounded-xl bg-gray-300 p-2">
                  <Text className="text-gray-700">{consultation?.start}</Text>
                </View>
              </View>
              <View className="flex-grow ml-2">
                <Text className="mb-1 font-bold">Fin</Text>
                <View className="rounded-xl bg-gray-300 p-2">
                  <Text className="text-gray-700">{consultation?.end}</Text>
                </View>
              </View>
            </View>
            <View className="px-4 py-2">
              <View>
                <Text className="text-lg font-bold text-gray-800 mt-4">
                  Symptomes
                </Text>
                <Text className="text-base text-gray-600 mt-2">
                  {consultation?.symptoms}
                </Text>
              </View>
              <View>
                <Text className="text-lg font-bold text-gray-800 mt-4">
                  Diagnostique
                </Text>
                <Text className="text-base text-gray-600 mt-2">
                  {consultation?.diagnosis}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      {!loading && (
        <FloatingButton
          visible={true}
          button={{ label: "Réserver", onPress: () => console.log("approved") }}
        />
      )}
    </View>
  );
}
