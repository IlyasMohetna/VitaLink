import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-ui-lib";
import { Link, Redirect, router, useNavigation } from "expo-router";
const Consultations = () => {
  const navigation = useNavigation();
  const [consultations, setConsultations] = useState(null);
  const [loading, setLoading] = useState(true);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return '"' + text + '"';
  };
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
                <Avatar
                  className="mr-4 w-40"
                  source={{
                    uri: "https://pngimg.com/uploads/doctor/doctor_PNG15992.png",
                  }}
                  size={60}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-sm font-bold text-gray-600">
                    Categorie : {item.categorie}
                  </Text>
                  <Text className="mt-2 text-sm text-gray-600">
                    {truncateText(item.symptomes, 150)}
                  </Text>
                </View>
              </View>
              <View className="flex-row mt-2 items-center justify-between">
                <View className="flex-grow">
                  <Text className="font-bold text-sm text-gray-500">
                    Début : {item.debut}
                  </Text>
                  <Text className="font-bold text-sm text-gray-500">
                    Fin : {item.fin}
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
