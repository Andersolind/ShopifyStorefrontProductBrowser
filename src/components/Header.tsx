import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Bars4Icon } from "react-native-heroicons/outline";
import { colors } from '../constants';
const Header = () => {
    return (
        <SafeAreaView>
            <View>
              <Bars4Icon color={colors.textBlack}
              fill={colors.textBlack} size={20} />
            </View>
        </SafeAreaView>
    )
}

export default Header