import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer, Colors } from "react-native-ui-lib";

export default function LandingPage() {
  return (
    <SafeAreaView className="container px-7 bg-white h-full">
      <View className="flex justify-center items-center mt-20">
        <View className="mb-8">
          <Image
            style={{ width: 400, height: 300 }}
            source={{
              uri: "https://www.neoito.com/blog/wp-content/uploads/2023/03/AI-in-Healthcare-Revolutionizing-the-Way-to-Treat-Patients.png",
            }}
          />
        </View>
      </View>
      <Text className="text-4xl font-extrabold text-textDark">VitaLink</Text>
      <Text className="text-sm opacity-60 text-textDark tracking-tight">
        Votre application santé en relation avec l'IA
      </Text>
      <View className="mt-6">
        <Link href={"/login"} asChild>
          <TouchableOpacity className="py-3 mt-3 rounded-xl border-2 bg-black">
            <Text className="text-base text-center text-white">
              Se connecter
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href={"/signup"} asChild>
          <TouchableOpacity className="py-3 mt-3 rounded-xl bg-white border-2 border-black">
            <Text className="text-base text-center text-black">
              Créer un compte
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
