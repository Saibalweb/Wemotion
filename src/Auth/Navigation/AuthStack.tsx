import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import ForgotPassword from '../Screen/ForgotPassword';

type AuthStackParam = {
    Login: {userId:String};
    SignUp: undefined;
    ForgotPassword: undefined;
}

const Stack = createStackNavigator<AuthStackParam>();

export function AuthStack(){
    return(
        <Stack.Navigator id={undefined}>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}