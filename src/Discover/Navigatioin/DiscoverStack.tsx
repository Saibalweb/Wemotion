import { createStackNavigator } from "@react-navigation/stack";
import Discover from "../Screen/Discover";

type DiscoverStackParam = {
    Discover: undefined;
}
const Stack = createStackNavigator<DiscoverStackParam>();

const DiscoverStack = ()=>{
    return (
        <Stack.Navigator id={undefined}>
            <Stack.Screen name="Discover" component={Discover} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export {DiscoverStack}