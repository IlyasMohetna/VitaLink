import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
            <Icon name={item.icon} size={24} color="black" className="mr-4" />
            <Text className="text-lg">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Account;
