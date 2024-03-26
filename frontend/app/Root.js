import React, { useContext, useEffect, useState } from "react";
import { Stack } from "expo-router";
import { AuthContext } from "../context/AuthProvider";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    SecureStore.getItemAsync("user")
      .then((userString) => {
        if (userString) {
          setUser(JSON.parse(userString));
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(patient)"
        options={{ headerShown: false, gestureEnabled: true }}
      />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack>
  );
};

export default Root;
