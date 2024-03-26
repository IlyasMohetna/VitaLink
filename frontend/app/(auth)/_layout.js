// navigators/AuthStackNavigator.js
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="landing" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          headerTitle: "Connectez-vous",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="code_signup"
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackVisible: true,
          headerTintColor: "black",
          headerBackTitle: "Retour à l'introduction",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackVisible: true,
          headerTintColor: "black",
          headerBackTitle: "Retour",
        }}
      />
    </Stack>
  );
}
