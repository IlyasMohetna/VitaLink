// navigators/AuthStackNavigator.js
import React from "react";
import { Slot, Stack } from "expo-router";
import { AuthProvider } from "../context/AuthProvider";
import Root from "./Root";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
}
