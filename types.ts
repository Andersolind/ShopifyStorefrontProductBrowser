import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined,
    Intro:undefined,
    Cart:undefined,
    ProductDetails:undefined
    PruductList:undefined,
    Checkout:undefined
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;