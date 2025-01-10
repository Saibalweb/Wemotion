import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

type Notification = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  thumbnail?: string;
  thumbnailType?: 'video' | 'motion';
  timestamp: Date;
};

export default function Notification() {
  // Mock notifications data
  const notifications: Record<string, Notification[]> = {
    New: [
      {
        id: '1',
        user: {
          name: 'Rosalie_Gorczany',
          avatar: '/placeholder.svg?height=40&width=40',
        },
        action: 'Started following you.',
        timestamp: new Date(),
      },
      {
        id: '2',
        user: {
          name: 'Rosalie_Gorczany',
          avatar: '/placeholder.svg?height=40&width=40',
        },
        action: 'has Submitted A video reply on your video',
        thumbnail: '/placeholder.svg?height=40&width=40',
        thumbnailType: 'video',
        timestamp: new Date(),
      },
    ],
    Today: [
      {
        id: '3',
        user: {
          name: 'Rosalie_Gorczany',
          avatar: '/placeholder.svg?height=40&width=40',
        },
        action: 'Started following you.',
        timestamp: new Date(),
      },
      {
        id: '4',
        user: {
          name: 'Rosalie_Gorczany',
          avatar: '/placeholder.svg?height=40&width=40',
        },
        action: 'has Submitted motion on your Video',
        thumbnail: '/placeholder.svg?height=40&width=40',
        thumbnailType: 'motion',
        timestamp: new Date(),
      },
    ],
    Older: [
      {
        id: '5',
        user: {
          name: 'Rosalie_Gorczany',
          avatar: '/placeholder.svg?height=40&width=40',
        },
        action: 'Started following you.',
        timestamp: new Date(Date.now() - 86400000),
      },
    ],
  };

  const renderNotification = (notification: Notification) => (
    <TouchableOpacity
      key={notification.id}
      className="flex-row items-center px-4 py-3"
    >
      <Image
        source={{ uri: notification.user.avatar }}
        className="w-12 h-12 rounded-full bg-gray-800"
      />
      <View className="flex-1 ml-3">
        <Text className="text-white">
          <Text className="font-semibold">{notification.user.name}</Text>
          {' '}
          <Text className="text-gray-400">{notification.action}</Text>
        </Text>
      </View>
      {notification.thumbnail && (
        <View className="ml-2">
          <Image
            source={{ uri: notification.thumbnail }}
            className="w-10 h-10 rounded bg-gray-800"
          />
          <View className="absolute bottom-0 right-0 bg-purple-600 rounded p-0.5">
            {notification.thumbnailType === 'video' ? (
              <Text className="text-white text-[10px]">▶</Text>
            ) : (
              <Text className="text-white text-[10px]">M</Text>
            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="px-4 py-4">
        <Text className="text-white text-center text-2xl font-bold">
          Notifications
        </Text>
      </View>

      {/* Notifications List */}
      <ScrollView className="flex-1">
        {Object.entries(notifications).map(([section, items]) => (
          <View key={section}>
            <Text className="text-gray-400 text-sm px-4 py-2">
              {section}
            </Text>
            {items.map(renderNotification)}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}