import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const SignupPage = () => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          dob: new Date(),
        }
      });
    
      const onSubmit = data => console.log(data);
    
      const password = watch("password");
    
      return (
        <SafeAreaView className="flex-1 px-7 bg-white">
          <ScrollView className="px-7">
            <Text className="text-4xl font-bold text-center mt-6 mb-4">Créer mon compte</Text>    
            <Controller
              control={control}
              rules={{ required: 'Le prénom est requis' }}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Prénom"
                  className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${errors.firstName ? 'border-red-500 border-2' : ''}`}
                />
              )}
            />
            {errors.firstName && <Text className="text-red-500">{errors.firstName.message}</Text>}
    
            <Controller
              control={control}
              rules={{ required: 'Le nom est requis' }}
              name="lastName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Nom"
                  className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${errors.lastName ? 'border-red-500 border-2' : ''}`}
                />
              )}
            />
            {errors.lastName && <Text className="text-red-500">{errors.lastName.message}</Text>}
    
            {/* Email */}
            <Controller
              control={control}
              rules={{
                required: "L'email est requis",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "L'email n'est pas valide",
                }
              }}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Email"
                  className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${errors.email ? 'border-red-500 border-2' : ''}`}
                />
              )}
            />
            {errors.email && <Text className="text-red-500">{errors.email.message}</Text>}
    
            {/* Phone */}
            <Controller
              control={control}
              rules={{ required: 'Le numéro de téléphone est requis' }}
              name="phone"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Téléphone"
                  className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${errors.phone ? 'border-red-500 border-2' : ''}`}
                />
              )}
            />
            {errors.phone && <Text className="text-red-500">{errors.phone.message}</Text>}
    
            {/* Password */}
            <Controller
              control={control}
              rules={{
                required: 'Le mot de passe est requis',
                minLength: {
                  value: 6,
                  message: 'Le mot de passe doit contenir au moins 6 caractères',
                }
              }}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  textContentType={'oneTimeCode'}
                  placeholder="Mot de passe"
                  secureTextEntry
                  className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${errors.password ? 'border-red-500 border-2' : ''}`}
                />
              )}
            />
            {errors.password && <Text className="text-red-500">{errors.password.message}</Text>}
    
            {/* Confirm Password */}
            <Controller
              control={control}
              rules={{
                validate: value =>
                  value === password || 'Les mots de passe ne correspondent pas',
              }}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  textContentType={'oneTimeCode'}
                  placeholder="Confirmer le mot de passe"
                  secureTextEntry
                  className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${errors.confirmPassword ? 'border-red-500 border-2' : ''}`}
                />
              )}
            />
            {errors.confirmPassword && <Text className="text-red-500">{errors.confirmPassword.message}</Text>}

            <Controller
              control={control}
              rules={{ required: 'La date de naissance est requise' }}
              name="dob"
              render={({ field: { onChange, onBlur, value } }) => (
                <RNDateTimePicker mode="date" value={value} />
              )}
            />
            {errors.dob && <Text className="text-red-500">{errors.dob.message}</Text>}

            <TouchableOpacity onPress={handleSubmit(onSubmit)} className="bg-black py-4 mt-4 rounded-xl flex-row justify-center items-center">
              <Text className="text-white text-lg">
                Créer
              </Text>
              <AntDesign name="arrowright" size={22} color="white" style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
  );
};

export default SignupPage;
