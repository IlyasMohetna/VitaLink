import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function PatientLayout() {
    return(
        <GestureHandlerRootView style={{ flex: 1}}>
            <Tabs>
                <Tabs.Screen name="appointments" options={{
                    title:'Mes RDV',
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name="calendar" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="calls" options={{
                    title:'Mes appels',
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons name="call-end" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="doctors" options={{
                    title:'Docteurs',
                    tabBarIcon: ({size, color}) => (
                        <AntDesign name="medicinebox" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="account" options={{
                    title:'Mon compte',
                    tabBarIcon: ({size, color}) => (
                        <MaterialCommunityIcons name="account" size={24} color="black" />
                    )
                }} />
            </Tabs>
        </GestureHandlerRootView>
    )
};