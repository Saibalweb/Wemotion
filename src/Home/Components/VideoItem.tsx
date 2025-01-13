import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Video, { VideoRef } from 'react-native-video'
import FeedBtn from './FeedBtn';
import UserInfo from './UserInfo';
const {width,height} = Dimensions.get('window');
type VideoItemProps = {
    videoUri:string | NodeRequire,
}

const VideoItem = ({videoUri}:VideoItemProps) => {
      const [activeTab, setActiveTab] = useState('trending');
      const [paused, setPaused] = useState(false);
      const videoRef = useRef<VideoRef>(null);
      console.log(JSON.stringify(videoRef,null,2));
  return (
    <View className=" bg-black" style={{width,height:height-50}}>
        <TouchableOpacity onPress={()=>setPaused(prevState=>!prevState)} className='flex-1'>
        <Video
          ref={videoRef}
          source={{ uri: videoUri}}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          paused={paused}
          repeat={false}
          style={{width:'100%',height:'100%'}}
        />
        </TouchableOpacity>
        {/* Progress Bar */}
        <View className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
          <View className="h-full bg-white w-1/2" />
        </View>

        {/* Right Side Actions */}
        <View className="absolute right-4 bottom-28 space-y-6">
            <FeedBtn icon={'heart'} text={'50k'} onPress={()=>console.log('this')}/>
            <FeedBtn icon={'comment'} text={'1k'} onPress={()=>console.log('this comment')}/>
            <FeedBtn icon={'share'} text={'Share'} onPress={()=>console.log('this share')}/>
            <FeedBtn icon={'vertical'} text ={null }onPress={()=>console.log('this share')}/>
            
        </View>

        {/* User Info */}
        <UserInfo userName='Saibal Kole' caption={'This is best Video This is best Video This is best Video This is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best VideoThis is best Video'} uri={'https://i.pravatar.cc/300'}/>
      </View>
  )
}

export default VideoItem