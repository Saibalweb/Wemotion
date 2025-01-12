import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../Screens/Notification";
type NotificationStackParam = {
    Notification: undefined;
}
const Stack = createStackNavigator<NotificationStackParam>();

const NotificationStack = ()=>{
    return(
        <Stack.Navigator id={undefined}>
            <Stack.Screen name="Notification" component={Notification} options={{title:"Notification",headerShown:false}}/>
        </Stack.Navigator>
    )
}
export {NotificationStack}