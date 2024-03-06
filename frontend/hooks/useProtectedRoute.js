import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    const isUndefined = segments[0] == undefined;
    if (
      !user &&
      !inAuthGroup && !isUndefined
    ) {
      router.push("/login");
    } else if (user && inAuthGroup) {
      router.navigate("/appointments");
    }else if (isUndefined) {
        router.navigate('/landing');
    }
  }, [user, segments]);
}