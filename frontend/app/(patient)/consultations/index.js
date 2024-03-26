import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Avatar } from "react-native-ui-lib";
import {
  Link,
  Redirect,
  router,
  useFocusEffect,
  useNavigation,
} from "expo-router";
import axiosConfig from "../../../helpers/axiosConfig";
import SpecialityIcon from "../../../Components/SpecialityIcon";
const Consultations = () => {
  const navigation = useNavigation();
  const [consultations, setConsultations] = useState(null);
  const [loading, setLoading] = useState(true);

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const fetchConsultations = useCallback(() => {
    setLoading(true); // Set loading to true each time we start fetching
    axiosConfig
      .get("/api/consultation")
      .then((response) => {
        setConsultations(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false); // Ensure loading is set to false even if there's an error
      });
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchConsultations();
    }, [fetchConsultations])
  );

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      {loading && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="gray" />
        </View>
      )}
      <FlatList
        data={consultations}
        numColumns={1}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View className="p-3">
            <View className="bg-white p-4 rounded-lg m-1 shadow">
              <View className="flex-row">
                <SpecialityIcon
                  name={item.speciality}
                  classname="rounded-full justify-center items-center h-16 w-16 shadow-lg"
                />
                <View className="flex-1 ml-4">
                  <Text className="text-sm font-bold text-gray-600">
                    Spécialité : {item.speciality}
                  </Text>
                  <Text className="mt-2 text-sm text-gray-600">
                    {truncateText(item.symptoms, 150)}
                  </Text>
                </View>
              </View>
              <View className="flex-row mt-2 items-center justify-between">
                <View className="flex-grow">
                  <Text className="font-bold text-sm text-gray-500">
                    Début : {item.start}
                  </Text>
                  <Text className="font-bold text-sm text-gray-500">
                    Fin : {item.end}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    router.push("(patient)/consultations/" + item.id)
                  }
                  className="ml-4 bg-blue-500 px-8 py-2 rounded-full"
                >
                  <Text className="text-white">Voir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Consultations;
