import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

const First = () => {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }
  return null;
};

export default First;