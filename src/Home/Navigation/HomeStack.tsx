import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screen/Home";
type HomeStackParam ={
    Home: undefined;
}
const Stack = createStackNavigator<HomeStackParam>();
const HomeStack = () => {
    return (
        <Stack.Navigator id={undefined}>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export {HomeStack};