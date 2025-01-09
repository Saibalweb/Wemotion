import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {Heart, MessageCircle, Share2, MoreVertical} from 'lucide-react-native';
interface FeedBtnProp {
  icon: String;
  text: String | null;
  onPress: ()=>void;
}
export default function FeedBtn({icon, text, onPress,...props}: FeedBtnProp) {
    function Icon(){
        switch(icon){
            case 'heart':
                return <Heart size={30} color="#fff" />;
            case 'comment':
                return <MessageCircle size={30} color="#fff" />;
            case 'share':
                return <Share2 size={30} color="#fff" />;
            case 'vertical':
                return <MoreVertical size={30} color="#fff" />;
            default:
                return <Text>Icon not found</Text>;
        }
    }
  return (
    <TouchableOpacity className="items-center my-1" onPress={onPress}>
      <Icon/>
      {text && <Text className="text-white text-lg my-1">{text}</Text>}
    </TouchableOpacity>
  );
}
