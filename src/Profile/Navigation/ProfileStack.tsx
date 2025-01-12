import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screen/Profile";
type ProfileStackParam = {
    Profile: undefined;
}
const Stack = createStackNavigator<ProfileStackParam>();

const ProfileStack = ()=>{
    return(
        <Stack.Navigator id={undefined}>
            <Stack.Screen name="Profile" component={Profile} options={{title:"Profile",headerShown:false}}/>
        </Stack.Navigator>
    )
}
export {ProfileStack}