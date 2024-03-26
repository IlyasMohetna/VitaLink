import { Stack } from "expo-router";

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
          headerTitle: "aa",
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
