import {
    Animated,
    Image,
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Keyboard, 
    ScrollView
  } from "react-native";
  import React, { useState } from "react";
  import { router } from "expo-router";
  
  import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from "react-native-confirmation-code-field";
  import { AntDesign } from '@expo/vector-icons';

  const { Value, Text: AnimatedText } = Animated;
  const animationsColor = [...new Array(6)].map(() => new Value(0));
  const animationsScale = [...new Array(6)].map(() => new Value(1));

  const animateCell = ({ hasValue, index, isFocused }) => {
    Animated.parallel([
      Animated.timing(animationsColor[index], {
        useNativeDriver: false,
        toValue: isFocused ? 1 : 0,
        duration: 250,
      }),
      Animated.spring(animationsScale[index], {
        useNativeDriver: false,
        toValue: hasValue ? 0 : 1,
        duration: hasValue ? 300 : 250,
      }),
    ]).start();
  };
  
  export default function AnimatedExample(){
    
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: 6 });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
  
    const renderCell = ({ index, symbol, isFocused }) => {
      const hasValue = Boolean(symbol);
      const animatedCellStyle = {
        backgroundColor: hasValue
          ? animationsScale[index].interpolate({
              inputRange: [0, 1],
              outputRange: ["#3557b7", "#f7fafe"],
            })
          : animationsColor[index].interpolate({
              inputRange: [0, 1],
              outputRange: ['#fff', '#f7fafe'],
            }),
        borderRadius: animationsScale[index].interpolate({
          inputRange: [0, 1],
          outputRange: [55, 8],
        }),
        transform: [
          {
            scale: animationsScale[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0.2, 1],
            }),
          },
        ],
      };

      setTimeout(() => {
        animateCell({ hasValue, index, isFocused });
      }, 0);
  
      return (
        <AnimatedText
          key={index}
          style={[{
            marginHorizontal: 8,
            height: 45,
            width: 45,
            lineHeight: 55 - 5,
            fontSize: 30,
            textAlign: "center",
            borderRadius: 8,
            color: "#3759b8",
            backgroundColor: "#fff",
        
            // IOS
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
        
            // Android
            elevation: 3,
          }, animatedCellStyle]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </AnimatedText>
      );
    };

    const VerifySignupCode = async () => {
      router.replace({ pathname: "/signup", params: { code: value } });
    };
  
    return (
      <SafeAreaView className="min-h-full p-5">
        <ScrollView>
        <Text className="pt-4 text-4xl font-bold text-center pb-10">Verification</Text>
        <Image style={{width: 290, height: 180}} className="mx-auto" source={{
            uri: 'https://www.instasent.com/bundles/inlabweb/img/verify.png'
        }} />
        
        <Text className="pt-7 text-center">
          Après avoir contacté notre conseiller d'IA{"\n"} Un code est envoyé par SMS
        </Text>

        <View className="px-7 mt-1 items-center">
            <TouchableOpacity>
              <Text className="underline font-bold text-textDark">Vous n'avez pas encore appeler ?</Text>
            </TouchableOpacity>
        </View>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={6}
          rootStyle={{
            height: 50,
            marginTop: 30,
            paddingHorizontal: 10,
            justifyContent: "center",
          }}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
        
        <View className="px-7 mt-4">
          <TouchableOpacity 
              disabled={value.length !== 6}
              onPress={() => {
                if (value.length === 6) {
                  VerifySignupCode();
                }
              }}
              className={`py-3 mt-3 w-full rounded-xl border-2 ${value.length === 6 ? 'bg-black border-black' : 'bg-gray-300 border-gray-300'}`}>
              <Text className={`text-base text-center ${value.length === 6 ? 'text-white' : 'text-black'}`}>
                  Valider
              </Text>
          </TouchableOpacity>
        </View>

        </ScrollView>
      </SafeAreaView>
    );
  };
  