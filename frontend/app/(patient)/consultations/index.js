import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar } from "react-native-ui-lib";
import { Link, Redirect, router } from "expo-router";
const Consultations = () => {
  const data = [
    {
      id: 1,
      categorie: "Symptomes",
      symptomes:
        "Apparemment, vous semblez souffrir de maux de tête, ce qui indique que vous pourriez être malade. Pour résoudre ce problème, il est essentiel de vous reposer suffisamment. Le repos permet à votre corps de récupérer et de se régénérer, ce qui peut souvent atténuer les symptômes liés aux maux de tête. En outre, assurez-vous de vous hydrater adéquatement en buvant beaucoup d'eau, car la déshydratation peut souvent aggraver les maux de tête. Vous pourriez également envisager de prendre des analgésiques en vente libre, tels que le paracétamol ou l'ibuprofène, pour soulager temporairement la douleur, mais assurez-vous de respecter les doses recommandées. Si les maux de tête persistent ou s'aggravent, il est important de consulter un professionnel de la santé pour un diagnostic et un traitement appropriés. En attendant, favorisez un environnement calme et détendu, évitez les déclencheurs potentiels tels que le bruit fort ou la lumière vive, et essayez des techniques de relaxation comme la respiration profonde ou la méditation pour apaiser votre esprit et votre corps.",
      debut: "26/03/2024 à 09:50",
      fin: "26/03/2024 à 09:55",
    },
    {
      id: 2,
      categorie: "Symptomes",
      symptomes:
        "Apparemment, vous semblez souffrir de maux de tête, ce qui indique que vous pourriez être malade. Pour résoudre ce problème, il est essentiel de vous reposer suffisamment. Le repos permet à votre corps de récupérer et de se régénérer, ce qui peut souvent atténuer les symptômes liés aux maux de tête. En outre, assurez-vous de vous hydrater adéquatement en buvant beaucoup d'eau, car la déshydratation peut souvent aggraver les maux de tête. Vous pourriez également envisager de prendre des analgésiques en vente libre, tels que le paracétamol ou l'ibuprofène, pour soulager temporairement la douleur, mais assurez-vous de respecter les doses recommandées. Si les maux de tête persistent ou s'aggravent, il est important de consulter un professionnel de la santé pour un diagnostic et un traitement appropriés. En attendant, favorisez un environnement calme et détendu, évitez les déclencheurs potentiels tels que le bruit fort ou la lumière vive, et essayez des techniques de relaxation comme la respiration profonde ou la méditation pour apaiser votre esprit et votre corps.",
      debut: "26/03/2024 à 09:56",
      fin: "26/03/2024 à 09:57",
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return '"' + text + '"';
  };

  const openConsultation = (id) => {
    router.navigate("(patient)/consultations/" + id);
  };

  return (
    <ScrollView>
      <FlatList
        data={data}
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
                  onPress={() => openConsultation(item.id)}
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
