import { View, Text, Pressable, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { colors } from '../constants';

const CommonHeader = ({ title }: { title: string }) => {
    const navigation: NavigationProps = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.goBack()}
                    style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <ArrowLeftIcon color={colors.textBlack} size={20} />
                    <Text>{title}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({

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