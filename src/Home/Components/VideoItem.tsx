import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Video, { VideoRef } from 'react-native-video';
import * as Progress from 'react-native-progress';
import FeedBtn from './FeedBtn';
import UserInfo from './UserInfo';
const {width,height} = Dimensions.get('window');
type VideoItemProps = {
    videoUri:string | NodeRequire,
    index:number,
    currentVideoIndex:number,
}

const VideoItem = ({videoUri,currentVideoIndex,index}:VideoItemProps) => {
      const [paused, setPaused] = useState(true);
      const [videoPercentage, setVideoPercentage] = useState(0);
      const videoRef = useRef<VideoRef>(null);
    useEffect(()=>{
      if(!videoRef.current) return;
      if(currentVideoIndex !== index){
        videoRef.current?.seek(0);
        setPaused(true);
      }else {
        setPaused(false);
      }
    },[currentVideoIndex,videoRef.current]);
    const onProgress = (data)=>{
      const curTime = data.currentTime;
      const duration = data.seekableDuration;
      const percentage = (curTime/duration);
      setVideoPercentage(percentage);
    }
  return (
    <View className=" bg-black" style={{width,height:height-50}}>
        <TouchableOpacity onPress={()=>setPaused(prevState=>!prevState)} className='flex-1'>
        <Video
          ref={videoRef}
          onProgress={onProgress}
          source={{ uri: videoUri}}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          controls={false}
          paused={paused}
          repeat={true}
          style={{width:'100%',height:'100%'}}
        />
        </TouchableOpacity>
        {/* Progress Bar */}
        <View className='absolute top-0 left-0'>
        <Progress.Bar progress={videoPercentage} width={width} color='white' borderWidth={0}/>
        </View>

        {/* Right Side Actions */}
        <View className="absolute right-4 bottom-40 space-y-6">
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