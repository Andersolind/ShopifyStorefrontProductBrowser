import { View, Text, Dimensions, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import { colors } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types';

const { height } = Dimensions.get('window');

const Intro = () => {
    const navigation: NavigationProps = useNavigation();
    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <Image
                    style={styles.introImg}
                    source={{
                        uri: 'https://cdn.shopify.com/s/files/1/0654/2458/8973/files/15432182594235543675_2048_1180x400.jpg',
                    }} />
            </View>

            {/* bottom */}
            <View style={styles.bottom}>
                <Text style={styles.title}>Great way to lift your style</Text>

                <Text style={styles.subtitle} >
                    <Text> Complete your style with awesome collections from Reactive</Text>
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={() => navigation.navigate('Home')}>
                        Get Started
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultWhite,
        height: height,
    },
    top: {
        height: height / 2,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    introImg: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        marginTop: -10
    },
    bottom: {
        flex: 1,
        padding: 30,
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 36,
        fontWeight: '700',
        textAlign: 'center',
    },
    subtitle: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 20
    },
    button: {

        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '600',
        color: 'black'
    },
    image: {
        width: 300,
        height: 300
    }

});

export default Intro