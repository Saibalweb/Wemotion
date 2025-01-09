import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
interface UserInfoProp {
  userName: string;
  uri: String;
  caption: String;
}
export default function UserInfo({userName,uri,caption}:UserInfoProp) {
  return (
    <View className="absolute bottom-8 left-4 right-20">
      <View className="flex-row items-center space-x-2">
        <Image
          source={{uri: 'https://i.pravatar.cc/300'}}
          className="w-10 h-10 rounded-full border border-white"
        />
        <Text className="text-white text-xl font-semibold ml-2">{userName}</Text>
      </View>
      <Text className="text-white mt-2 text-sm">
        {caption}
      </Text>
    </View>
  );
}
