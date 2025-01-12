import { createStackNavigator } from "@react-navigation/stack";
import Camera from "../Screen/Camera";
type CameraStackParam = {
    Camera: undefined;
}
const Stack = createStackNavigator();
const CameraStack = () => {
    return (
        <Stack.Navigator id={undefined}>
            <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
    )
}
export  {CameraStack};