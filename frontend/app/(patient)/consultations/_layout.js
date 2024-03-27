import { Stack } from "expo-router";
import { Text, Platform } from "react-native";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      {Platform.OS === "ios" ? (
        <Stack.Screen
          name="[id]"
          options={{
            headerShown: false,
            headerTitle: "",
            headerBackVisible: true,
            headerTintColor: "black",
            headerBackTitle: "Retour",
            presentation: "modal",
          }}
        />
      ) : (
        <Stack.Screen
          name="[id]"
          options={{
            headerShown: true,
            headerTitle: "Retour",
            headerBackVisible: true,
            headerTintColor: "black",
            headerBackTitle: "Retour",
            presentation: "modal",
          }}
        />
      )}
    </Stack>
  );
};

export default Layout;
