import {Text, TouchableOpacity, View} from 'react-native';
import {DiscoverStack} from './src/Discover/Navigatioin/DiscoverStack';
import {HomeStack} from './src/Home/Navigation/HomeStack';
import {NotificationStack} from './src/Notification/Navigation/NotificationStack';
import {ProfileStack} from './src/Profile/Navigation/ProfileStack';
import { CameraStack } from './src/Camera/Navigation/CameraStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {House, LayoutGrid,Bell,UserRound ,Video} from 'lucide-react-native';
import { AuthStack } from './src/Auth/Navigation/AuthStack';

const isLoggedIn = true;
const Tab = createBottomTabNavigator();
const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View className="flex-row bg-black">
      {state.routes.map((route, index: Number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
            if(!isLoggedIn && (index === 2 || index===3 || index===4)){
               return;
            }
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        if(index==2){
            return (
                <TouchableOpacity className='relative bottom-2' style={{transform: [{ translateY: -20 }]}} key={route.key}>
                    <View className='p-2 border-2 border-white rounded-full'>
                        <View className='bg-purple-500 p-4 rounded-full'>
                        <Video size={30} color={'#fff'}/>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
          <TouchableOpacity className="flex-1 justify-center items-center bg-red-700" onPress={onPress} key={route.key}>
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: options.tabBarActiveTintColor,
                size: 25,
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      id={undefined}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#A858F4',
        tabBarInactiveTintColor: '#FCFCFC',
        tabBarStyle: {
            height: 50, 
            position: 'absolute', 
            bottom: 0,
            left: 0,
            right: 0,
          }
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <House color={color} size={size} fill={focused? color: '#2C2C2C'}/>
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverTab"
        component={DiscoverStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <LayoutGrid color={color} size={size} fill={focused? color: '#2C2C2C'} />
          ),
        }}
      />
      <Tab.Screen
       name='Camera'
       component={CameraStack}

      />
      <Tab.Screen
        name="NotificationTab"
        component={NotificationStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Bell color={color} size={size} fill={focused? color: '#2C2C2C'}/>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <UserRound color={color} size={size} fill={focused? color: '#2C2C2C'}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export {MainApp};
