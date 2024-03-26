import { Stack } from "expo-router";
import { Text } from "react-native";
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
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackVisible: true,
          headerTintColor: "black",
          headerBackTitle: "Retour",
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default Layout;
