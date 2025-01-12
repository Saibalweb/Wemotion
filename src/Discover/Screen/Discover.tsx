import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Search,Video} from 'lucide-react-native';

export default function Discover() {
  // Mock data for grid items
  const gridItems = Array(12).fill({
    id: 1,
    thumbnail: '/placeholder.svg?height=300&width=300',
    avatar: '/placeholder.svg?height=50&width=50',
    username: 'Rosalie_Gorczany',
  });

  const renderGridItem = (item: (typeof gridItems)[0], index: number) => (
    <TouchableOpacity key={index} className="w-1/2 aspect-square p-0.5">
      <View className="relative w-full h-full">
        <Image
          source={{uri: item.thumbnail}}
          className="w-full h-full rounded-lg bg-gray-800"
        />
        <View className="absolute bottom-2 left-2 right-2">
          <View className="flex-row items-center space-x-2">
            <Image
              source={{uri: item.avatar}}
              className="w-8 h-8 rounded-full border border-white"
            />
            <Text className="text-white text-md ml-2" numberOfLines={1}>
              {item.username}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Search Bar */}
      <View className="px-6 py-2 my-4 mx-2 bg-gray-800/40 rounded-full">
        <View className="flex-row items-center">
          <Search size={25} color="#666" className="mr-4" />
          <TextInput
            placeholder="Search for user"
            placeholderTextColor="#666"
            className="p-4  text-white w-11/12"
          />
        </View>
      </View>

      {/* Grid Content */}
      <ScrollView className="flex-1">
        <View className="flex-row flex-wrap">
          {gridItems.map((item, index) => renderGridItem(item, index))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
