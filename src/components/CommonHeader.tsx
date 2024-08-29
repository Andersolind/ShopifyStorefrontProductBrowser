import { View, Text, Pressable, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types';
import { ArrowLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/outline';
import { colors } from '../constants';

const CommonHeader = ({ title }: { title: string }) => {
    const navigation: NavigationProps = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.goBack()}
                    style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <ArrowLeftIcon color={colors.textBlack} size={20} />
                    <Text style={{color:colors.textBlack,marginLeft:5,fontWeight:'600'}}>{title}</Text>
                </Pressable>
                
                {/* logo */}
                <Pressable onPress={() => navigation.navigate('Intro')}>
                    <Text>Reactiv</Text>
                </Pressable>
                {/* shopping cart */}
                <Pressable >
                    <ShoppingCartIcon color={colors.textBlack} size={22} />
                    <View style={styles.cartCount}>
                        <Text style={styles.cartText}>0</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({

    cartCount: {
        borderRadius: 50,
        backgroundColor: 'black',
        position: 'absolute',
        right: -4,
        top: -6,
        width: 14,
        height: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cartIcon: {
        position: 'relative'
    },
    cartText: {
        color: 'white',
        fontSize: 10,
        fontWeight: '700'

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBlockColor: 'grey'
    }
})

export default CommonHeader