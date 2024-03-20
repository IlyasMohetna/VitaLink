import React, { useState } from "react";
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
} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment"; // Assuming you use moment for date formatting and manipulation

const SignupPage = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      dob: new Date(),
    },
    criteriaMode: "all",
  });

  const calculateAge = (dob) => {
    const birthdate = moment(dob);
    const today = moment();
    return today.diff(birthdate, "years");
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  return (
    <SafeAreaView className="flex-1 px-7 bg-white">
      <ScrollView className="px-7" showsVerticalScrollIndicator={false}>
        <Text className="text-4xl font-bold text-center mt-6 mb-4">
          Créer mon compte
        </Text>
        <Controller
          control={control}
          rules={{ required: "Le prénom est requis" }}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Prénom"
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.firstName ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.firstName && (
          <Text className="text-red-500">{errors.firstName.message}</Text>
        )}

        <Controller
          control={control}
          rules={{ required: "Le nom est requis" }}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nom"
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.lastName ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.lastName && (
          <Text className="text-red-500">{errors.lastName.message}</Text>
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
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Téléphone"
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.phone ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.phone && (
          <Text className="text-red-500">{errors.phone.message}</Text>
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
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType={"oneTimeCode"}
              placeholder="Confirmer le mot de passe"
              secureTextEntry
              className={`bg-zinc-200 py-4 rounded-xl pl-5 mt-3 ${
                errors.confirmPassword ? "border-red-500 border-2" : ""
              }`}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text className="text-red-500">{errors.confirmPassword.message}</Text>
        )}

        <Controller
          control={control}
          name="dob"
          rules={{
            required: "Date of birth is required",
            validate: {
              minAge: (value) =>
                calculateAge(value) >= 18 ||
                "You must be at least 18 years old",
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
                        setShowDatePicker(Platform.OS === 'ios');
                        if (selectedDate) {
                          const formattedDate = moment(selectedDate).toISOString();
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
          <Text className="text-white text-lg">Créer</Text>
          <AntDesign
            name="arrowright"
            size={22}
            color="white"
            style={{ marginLeft: 16 }}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupPage;