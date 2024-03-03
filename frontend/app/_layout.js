import { Stack } from "expo-router";

export default () => {
    return(
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="login" options={{headerShown: false, headerTitle: "Connectez-vous",headerBackVisible: false}}/>
        <Stack.Screen name="code_signup" options={{headerShown: true, headerTitle: "", headerBackVisible: true, headerTintColor: "black", headerBackTitle: "Retour à l'introduction" }}/>
        <Stack.Screen name="signup" options={{headerShown: true, headerTitle: "", headerBackVisible: true, headerTintColor: "black", headerBackTitle: "Retour à" }}/>
        <Stack.Screen name="(patient)" options={{headerShown: false}}/>
    </Stack>
    )
};