import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import { Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react-native';
import FeedBtn from './Components/FeedBtn';
import UserInfo from './Components/UserInfo';

export default function Home() {
  const [activeTab, setActiveTab] = useState('trending');
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      
      {/* Navigation Tabs */}
      <View className="flex-row  space-x-4 px-4 pt-2 absolute top-0 left-10 right-0 z-10">
        <TouchableOpacity 
          onPress={() => setActiveTab('trending')}
          className="px-2"
        >
          <Text className={`text-lg ${activeTab === 'trending' ? 'text-white font-bold' : 'text-gray-400'}`}>
            trending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setActiveTab('following')}
          className="px-2"
        >
          <Text className={`text-lg ${activeTab === 'following' ? 'text-white font-bold' : 'text-gray-400'}`}>
            following
          </Text>
        </TouchableOpacity>
      </View>

      {/* Video Content */}
      <View className="flex-1">
        <Video
          source={{ uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="contain"
          paused={true}
          repeat={false}
          style={{flex:1}}
        />

        {/* Progress Bar */}
        <View className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
          <View className="h-full bg-white w-1/2" />
        </View>

        {/* Right Side Actions */}
        <View className="absolute right-4 bottom-20 space-y-6">
            <FeedBtn icon={'heart'} text={'50k'} onPress={()=>console.log('this')}/>
            <FeedBtn icon={'comment'} text={'1k'} onPress={()=>console.log('this comment')}/>
            <FeedBtn icon={'share'} text={'Share'} onPress={()=>console.log('this share')}/>
            <FeedBtn icon={'vertical'} text ={null }onPress={()=>console.log('this share')}/>
            
        </View>

        {/* User Info */}
        <UserInfo userName='Saibal Kole' caption={'This is best Video'} uri={'https://i.pravatar.cc/300'}/>
      </View>
    </SafeAreaView>
  );
}