import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import LoginScreen from "../pages/LoginScreen";
import {} from "../components/BottomTabs";
import {RootTabParamList} from "../types/RootStackParamList";

const Stack = createNativeStackNavigator<RootTabParamList>();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        </Stack.Navigator>
    );
}