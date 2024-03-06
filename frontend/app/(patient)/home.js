import { FlatList, sliderList, Image, View, Text } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import {Carousel, ActionSheet, Colors, Drawer} from 'react-native-ui-lib';

const navig = [
  {
    url: "https://ideausher.com/wp-content/uploads/2022/10/Cover-Image-AI-for-medical-diagnosis-1.webp"
  },
  {
    url: "https://www.easel.ly/blog/wp-content/uploads/2020/03/health-care-infographic-templates.jpg"
  },
  {
    url: "https://www.cignaglobal.com/static/images/blog/healthcare.webp"
  }
];
const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <View className="px-4 mt-4">
      <View className=" flex-row">
        <Text className="text-2xl">Bienvenu</Text>
        <Text className="text-2xl font-bold ml-2">{user?.name}</Text>
      </View>
      <ActionSheet
            title={'Title'}
            message={'Message goes here'}
            cancelButtonIndex={3}
            destructiveButtonIndex={0}
            options={[
              {label: '', onPress: () => console.log('cancel')},
              {label: '', onPress:() => console.log('cancel')},
              {label: 'Cancel', onPress: () => console.log('cancel')}
            ]}
        />

      <View className="mt-5">
        <FlatList data={navig} horizontal={true} showsHorizontalScrollIndicator={true} renderItem={({item, index}) => (
          <View>
            <Image
              className="h-[180px] w-[350px] mr-3 rounded-lg object-cover"
              source={{uri:item?.url}} 
            />
        </View>
        )}/>

    
      </View>
    </View>
  )
}

export default Home