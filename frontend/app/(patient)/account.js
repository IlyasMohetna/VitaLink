import React, {useContext} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext  } from '../../context/AuthProvider';

const Account = () => {
  const items = [
    {
      name: "Profile",
      icon: "person",
    },
    {
      name: "Paramètres",
      icon: "settings",
    },
    {
      name: "Déconnexion",
      icon: "exit-to-app",
    },
  ];

  const { logout, error, isLoading } = useContext(AuthContext);

  return (
    <View className="flex-1 bg-white" >
      <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200" onPress={() => logout()}>
        <Icon name="exit-to-app" size={24} color="black" className="mr-4" />
        <Text className="text-lg">Déconnexion</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Account;
