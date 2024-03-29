import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export function useProtectedRoute(user, refreshing) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    const isUndefined = segments[0] == undefined;
    if (!user && !inAuthGroup && !isUndefined) {
      router.push("/login");
    } else if (user && inAuthGroup) {
      if (user.type == "patient") {
        router.navigate("(patient)/home");
      }
    } else if (isUndefined) {
      router.navigate("/landing");
    }
  }, [user, segments]);
}
