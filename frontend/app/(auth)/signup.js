import React, { useState, useContext } from "react";
import {
  Modal,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment"; // Assuming you use moment for date formatting and manipulation
import { AuthContext } from "../../context/AuthProvider";

const SignupPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "me",
      last_name: "meme",
      email: "meme@meme.meme",
      phone_number: "0763647384",
      password: "ilyass",
      password_confirmation: "ilyass",
      dob: new Date(),
    },
  });

  const calculateAge = (dob) => {
    const birthdate = moment(dob);
    const today = moment();
    return today.diff(birthdate, "years");
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const { register, error, isLoading } = useContext(AuthContext);

  const onSubmit = (data) => register(data);

  const password = watch("password");

  return (
    <SafeAreaView className="flex-1 px-7 bg-white">
      <ScrollView className="px-7" showsVerticalScrollIndicator={false}>
        <Text className="text-4xl font-bold text-center mt-6 mb-4">
          Créer mon compte
        </Text>

        {error && <Text className="font-bold text-red-500">{error}</Text>}
        <Controller
          control={control}
          rules={{ required: "Le prénom est requis" }}
          name="first_name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Prénom"
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.first_name ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.first_name && (
          <Text className="text-red-500">{errors.first_name.message}</Text>
        )}

        <Controller
          control={control}
          rules={{ required: "Le nom est requis" }}
          name="last_name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nom"
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.last_name ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.last_name && (
          <Text className="text-red-500">{errors.last_name.message}</Text>
        )}

        {/* Email */}
        <Controller
          control={control}
          rules={{
            required: "L'email est requis",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "L'email n'est pas valide",
            },
          }}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.email ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.email && (
          <Text className="text-red-500">{errors.email.message}</Text>
        )}

        {/* Phone */}
        <Controller
          control={control}
          rules={{ required: "Le numéro de téléphone est requis" }}
          name="phone_number"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Téléphone"
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.phone_number ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.phone_number && (
          <Text className="text-red-500">{errors.phone_number.message}</Text>
        )}

        {/* Password */}
        <Controller
          control={control}
          rules={{
            required: "Le mot de passe est requis",
            minLength: {
              value: 6,
              message: "Le mot de passe doit contenir au moins 6 caractères",
            },
          }}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType={"oneTimeCode"}
              placeholder="Mot de passe"
              secureTextEntry
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.password ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.password && (
          <Text className="text-red-500">{errors.password.message}</Text>
        )}

        {/* Confirm Password */}
        <Controller
          control={control}
          rules={{
            validate: (value) =>
              value === password || "Les mots de passe ne correspondent pas",
          }}
          name="password_confirmation"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType={"oneTimeCode"}
              placeholder="Confirmer le mot de passe"
              secureTextEntry
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.password_confirmation ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.password_confirmation && (
          <Text className="text-red-500">
            {errors.password_confirmation.message}
          </Text>
        )}

        <Controller
          control={control}
          name="dob"
          rules={{
            required: "La date de naissance est requise",
            validate: {
              minAge: (value) =>
                calculateAge(value) >= 18 || "Vous devez avoir au moins 18 ans",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                  errors.dob ? "border-red-500 border-2" : ""
                }`}
              >
                <Text>
                  {value
                    ? moment(value).format("DD/MM/YYYY")
                    : "Select your date of birth"}
                </Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="slide"
                visible={showDatePicker}
                onRequestClose={() => setShowDatePicker(false)}
              >
                <TouchableOpacity
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  className="flex-1 justify-end "
                  activeOpacity={1}
                  onPressOut={() => setShowDatePicker(false)}
                >
                  <View
                    className={`bg-white ${
                      Platform.OS === "ios" ? "pb-22" : "pb-0"
                    } pt-4 rounded-t-3xl`}
                  >
                    <RNDateTimePicker
                      value={value ? new Date(value) : new Date()}
                      mode="date"
                      display={Platform.OS === "ios" ? "spinner" : "default"}
                      onChange={(event, selectedDate) => {
                        setShowDatePicker(Platform.OS === "ios");
                        if (selectedDate) {
                          const formattedDate =
                            moment(selectedDate).toISOString();
                          onChange(formattedDate);
                        }
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </Modal>
            </>
          )}
        />
        {errors.dob && (
          <Text className="text-red-500">{errors.dob.message}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-black py-4 mt-4 rounded-xl flex-row justify-center items-center"
        >
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text className="text-white text-lg">Créer</Text>
              <AntDesign
                name="arrowright"
                size={22}
                color="white"
                style={{ marginLeft: 16 }}
              />
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupPage;
