import {
  FlatList,
  sliderList,
  TouchableOpacity,
  Image,
  View,
  Text,
  Virtualizedlist,
  SafeAreaView,
  RefreshControl
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import {
  Carousel,
  ActionSheet,
  Colors,
  Modal,
  Drawer,
  Avatar,
  AnimatedImage,
} from "react-native-ui-lib";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import call from "react-native-phone-call";

const args = {
  number: "+33603900169",
  prompt: true,
  skipCanOpen: true,
};

const navig = [
  {
    url: "https://ideausher.com/wp-content/uploads/2022/10/Cover-Image-AI-for-medical-diagnosis-1.webp",
  },
  {
    url: "https://www.easel.ly/blog/wp-content/uploads/2020/03/health-care-infographic-templates.jpg",
  },
  {
    url: "https://www.cignaglobal.com/static/images/blog/healthcare.webp",
  },
];

const specialities = [
  {
    name: "Cardiologie",
    icon: <FontAwesome5 name="heartbeat" size={24} color="white" />,
    background: "bg-orange-500",
  },
  {
    name: "Dermatologie",
    icon: <FontAwesome5 name="hands-wash" size={24} color="white" />,
    background: "bg-blue-500",
  },
  {
    name: "Neurologie",
    icon: <MaterialCommunityIcons name="brain" size={24} color="white" />,
    background: "bg-green-500",
  },
  {
    name: "Pédiatrie",
    icon: <FontAwesome5 name="baby" size={24} color="white" />,
    background: "bg-gray-500",
  },
  {
    name: "Psychiatrie",
    icon: <MaterialIcons name="psychology" size={24} color="white" />,
    background: "bg-gray-500",
  },
  {
    name: "Pneumologie",
    icon: <FontAwesome6 name="lungs" size={24} color="white" />,
    background: "bg-gray-500",
  },
];

const advices = [
  {
    id: "1",
    date: "10/10/2020",
    doctor: "Dr Ilyas",
    fullText: "Drink at least 8 glasses of water a day to stay hydrated.",
  },
  {
    id: "2",
    date: "10/10/2020",
    doctor: "Dr Ilyas",
    fullText:
      "Getting 7-9 hours of sleep is crucial for your body’s recovery and to reduce stress.",
  },
];

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return '"' + text + '"';
};

const start_call = () => {
  call(args).catch(console.error);
};

const Home = () => {
  const { user, refreshing, refreshUser } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAdvice, setSelectedAdvice] = useState(null);

  const openModal = (advice) => {
    setSelectedAdvice(advice);
    setModalVisible(true);
  };
  
  return (
    <SafeAreaView>
      <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshUser} />
      }>
        <View className="px-4 mt-4">
          <View className=" flex-row">
            <Text className="text-2xl">Bienvenu</Text>
            <Text className="text-2xl font-bold ml-2">{user?.identity?.first_name}</Text>
          </View>

          <View>
            <TouchableOpacity
              className="py-3 mt-3 rounded-xl bg-red-500"
              onPress={start_call}
            >
              <Text className="text-base font-bold text-center text-white">
                Une urgence ? appeler notre IA{" "}
                <FontAwesome5 name="robot" size={24} color="white" />
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-5">
            <FlatList
              data={navig}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              renderItem={({ item, index }) => (
                <View>
                  <AnimatedImage
                    className="h-[180px] w-[350px] mr-3 rounded-lg object-cover"
                    source={{ uri: item?.url }}
                  />
                </View>
              )}
            />
          </View>

          <View className="mt-4 flex-row">
            <Text className="text-xl">Nos spécialités</Text>
          </View>

          <View className="flex mt-5 px-1">
            <FlatList
              data={specialities}
              horizontal={false}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
              renderItem={({ item }) => (
                <View className="mt-2 w-1/3 items-center">
                  <View
                    className={`rounded-full justify-center items-center h-16 w-16 ${item.background} shadow-lg`}
                  >
                    {item.icon}
                  </View>
                  <View className="mt-2 p-2 shadow-lg bg-white rounded-lg">
                    <Text className="text-center text-sm font-bold">
                      {item.name}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingHorizontal: 4 }}
            />
          </View>

          <View className="mt-4 flex-row">
            <Text className="text-xl">Les astuces de nos experts</Text>
          </View>

          <View className="flex items-center justify-center">
            <FlatList
              data={advices}
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="bg-white p-4 rounded-lg m-2 shadow"
                  onPress={() => {
                    setSelectedAdvice(item);
                    setModalVisible(true);
                  }}
                >
                  <View className="flex-row">
                    <View className="items-center">
                      <Avatar
                        className="mr-4 items-center"
                        source={{
                          uri: "https://pngimg.com/d/doctor_PNG15992.png",
                        }}
                      />
                      <Text className="text-lg text-black font-bold">
                        {item.doctor}
                      </Text>
                    </View>
                    <View className="flex ml-4">
                      <Text
                        style={{ width: 200 }}
                        className="text-sm font-bold flex text-gray-600"
                        numberOfLines={2}
                      >
                        {truncateText(item.fullText, 100)}
                      </Text>
                      <Text className="mt-2 text-sm text-gray-500">
                        {item.date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />

            <Modal
              animationType="fade"
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
              onBackgroundPress={() => console.log("background pressed")}
              transparent={true}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <View className="m-4 bg-white rounded-lg p-6 shadow-lg">
                  <Text className="text-lg font-semibold mb-4">
                    Advice of the Day
                  </Text>
                  <Text className="text-gray-800">
                    {selectedAdvice?.fullText}
                  </Text>
                  <TouchableOpacity
                    className="bg-blue-500 mt-4 p-2 rounded-lg"
                    onPress={() => setModalVisible(false)}
                  >
                    <Text className="text-white text-center">Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;