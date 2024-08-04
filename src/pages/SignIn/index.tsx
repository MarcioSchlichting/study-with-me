import {useNavigation} from "@react-navigation/native";

type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;
const SignIn = () => {
    const navigation = useNavigation();
    return (<>SignIn</>);
}

export default SignIn;