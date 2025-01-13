import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Video,{VideoRef} from 'react-native-video';
import { Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react-native';
import FeedBtn from '../Components/FeedBtn';
import UserInfo from '../Components/UserInfo';
import VideoItem from '../Components/VideoItem';
const videos = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
 ];

export default function Home() {
  const [activeTab, setActiveTab] = useState('trending');
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      
      {/* Navigation Tabs */}
      <View className="flex-row space-x-4 px-4 pt-2 absolute top-0 left-10 right-0 z-10">
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
      <FlatList
      data={videos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <VideoItem videoUri={item} />}
      snapToAlignment="start"
      decelerationRate={0.95}
      snapToInterval={Dimensions.get('window').height-50}
      pagingEnabled
      style={{flex:1}}
      />
    </SafeAreaView>
  );
}