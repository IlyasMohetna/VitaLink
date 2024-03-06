import React, { useState, useContext } from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import { Link } from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { AuthContext  } from '../../context/AuthProvider';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useContext(AuthContext);
  return (
    <SafeAreaView className="container px-7 bg-white h-full">
        <View className="mt-40">
            <Text className="text-4xl font-extrabold text-textDark">
                VitaLink
            </Text>

            <View className="mt-4">
        
            <TextInput
                onChangeText={setEmail}
                placeholder={'Email'}
                value={email}
                className="bg-zinc-200 py-3 rounded-xl pl-5"
            />
            
            <TextInput
                secureTextEntry={true}
                onChangeText={setPassword}
                placeholder={'Password'}
                value={password}
                className="bg-zinc-200 py-3 rounded-xl pl-5 mt-3"
            />

            {error && <Text className="font-bold mt-2 text-red-500">{error}</Text>}

            <TouchableOpacity
                className="flex items-end mt-2"
                onPress={() => router.goBack()}>
            
                <Text className="font-bold text-textDark">Mot de passe oublié ?</Text>

            </TouchableOpacity>
        </View>

        <TouchableOpacity 
            onPress={() => login(email, password)}
            className="py-3 mt-3 rounded-xl border-2 bg-black">
            <Text className="text-base text-center text-white">
                Se connecter
            </Text>
        </TouchableOpacity>

        <View className="flex flex-row items-center justify-center mt-4">
            <Text className="text-textDark">Vous n'avez pas de compte ?</Text>

            <TouchableOpacity onPress={() => router.replace('/code_signup')}>
                <Text className="underline ml-2 text-textDark">Créer un</Text>
            </TouchableOpacity>
        </View>
    </View>
  </SafeAreaView>
  );
}
