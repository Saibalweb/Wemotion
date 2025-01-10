import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {
  Home,
  Search,
  PlusCircle,
  Bell,
  User,
  Link,
  Heart,
  Settings,
  ChevronDown,
} from 'lucide-react-native';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Videos');

  const renderGridItem = (index: number) => (
    <View className="relative w-[33.33%] aspect-square p-0.5">
      <Image
        source={{ uri: '/placeholder.svg?height=300&width=300' }}
        className="w-full h-full bg-gray-800"
      />
      <View className="absolute bottom-2 left-2 flex-row items-center">
        <Heart size={12} color="white" />
        <Text className="text-white text-xs ml-1">15.6k</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-white text-lg font-semibold mr-1">
            Rosalie_0xrczmy
          </Text>
          <ChevronDown size={20} color="white" />
        </TouchableOpacity>
        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Link size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Settings size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Info */}
      <View className="items-center mt-4">
        <Image
          source={{ uri: '/placeholder.svg?height=100&width=100' }}
          className="w-20 h-20 rounded-full bg-gray-800"
        />
        <Text className="text-white text-lg font-semibold mt-2">
          Rosalie_0xrczmy
        </Text>
      </View>

      {/* Stats */}
      <View className="flex-row justify-center space-x-8 mt-6">
        <View className="items-center">
          <Text className="text-white font-bold">999M</Text>
          <Text className="text-gray-400 text-sm">Following</Text>
        </View>
        <View className="items-center">
          <Text className="text-white font-bold">999K</Text>
          <Text className="text-gray-400 text-sm">Followers</Text>
        </View>
        <View className="items-center">
          <Text className="text-white font-bold">999</Text>
          <Text className="text-gray-400 text-sm">Likes</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity className="mx-20 mt-4 bg-purple-600 rounded-full py-2.5">
        <Text className="text-white text-center font-semibold">
          Edit profile
        </Text>
      </TouchableOpacity>

      {/* Content Tabs */}
      <View className="flex-row mt-6 border-b border-gray-800">
        {['Videos', 'Motions'].map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`flex-1 items-center py-3 ${
              activeTab === tab ? 'border-b-2 border-white' : ''
            }`}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              className={`${
                activeTab === tab ? 'text-white' : 'text-gray-500'
              } font-semibold`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Grid Content */}
      <ScrollView>
        <View className="flex-row flex-wrap">
          {[...Array(9)].map((_, index) => renderGridItem(index))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around py-2 border-t border-gray-800">
        <TouchableOpacity>
          <Home size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Search size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <PlusCircle size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Bell size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <User size={24} color="purple" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}