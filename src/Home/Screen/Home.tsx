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
import VideoItem from '../Components/VideoItem';
const SCREEN_HEIGHT = Dimensions.get('window').height-50;
const videos = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
 ];

export default function Home() {
  const [activeTab, setActiveTab] = useState('trending');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, // Adjust threshold percentage
    minimumViewTime: 100, // Minimum time in ms item needs to be visible
  }

const onViewableItemsChanged = ({viewableItems, changed}) => {
  if(viewableItems.length > 0 && viewableItems[0].index !== currentVideoIndex && viewableItems[0].isViewable){
    setCurrentVideoIndex(viewableItems[0].index);
  }
}
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
      renderItem={({item,index}) => <VideoItem videoUri={item} index= {index} currentVideoIndex={currentVideoIndex}/>}
      snapToAlignment="start"
      decelerationRate={0.9}
      snapToInterval={SCREEN_HEIGHT}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      pagingEnabled
      style={{flex:1}}
      maxToRenderPerBatch={2}
      windowSize={3}
      removeClippedSubviews={true}
      disableIntervalMomentum={true}
      />
    </SafeAreaView>
  );
}