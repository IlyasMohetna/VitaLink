import React from "react";
import { View, Text } from "react-native";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const specialities = [
  {
    name: "Cardiologie",
    iconType: FontAwesome5,
    iconName: "heartbeat",
    background: "bg-orange-500",
  },
  {
    name: "Dermatologie",
    iconType: FontAwesome5,
    iconName: "hands-wash",
    background: "bg-blue-500",
  },
  {
    name: "Neurologie",
    iconType: MaterialCommunityIcons,
    iconName: "brain",
    background: "bg-green-500",
  },
  {
    name: "Pédiatrie",
    iconType: FontAwesome5,
    iconName: "baby",
    background: "bg-gray-500",
  },
  {
    name: "Psychiatrie",
    iconType: MaterialIcons,
    iconName: "psychology",
    background: "bg-gray-500",
  },
  {
    name: "Pneumologie",
    iconType: FontAwesome5, // Adjust based on actual library if FontAwesome6 was a typo
    iconName: "lungs", // Ensure the iconName is correct for the used library
    background: "bg-gray-500",
  },
];

const findSpeciality = (name) =>
  specialities.find((spec) => spec.name === name);

const SpecialityIcon = ({
  name,
  containerStyle,
  backgroundClass,
  iconStyle,
  classname,
}) => {
  const speciality = findSpeciality(name);

  if (!speciality) {
    return <Text>Icon not found</Text>; // Or any fallback you prefer
  }

  // Default icon properties
  const defaultIconProps = {
    size: 24,
    color: "white",
    ...iconStyle, // Override defaults with any custom icon style provided
  };

  const IconComponent = speciality.iconType;

  // Assuming your setup converts className to style
  // Apply className directly if your project supports it
  return (
    <View
      className={`${
        classname +
        " " +
        (backgroundClass ? backgroundClass : speciality.background)
      }`}
      style={[{ padding: 10, borderRadius: 50 }, containerStyle]}
    >
      <IconComponent name={speciality.iconName} {...defaultIconProps} />
    </View>
  );
};

export default SpecialityIcon;
