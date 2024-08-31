import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../constants';

const {height} = Dimensions.get('window');
const Loader = ({title}: {title:string}) => {
  return (
    <View style={styles.container}>
        <View style={{marginTop:-100}}>
      <Text>{title? title : 'Loading'}</Text>
     <ActivityIndicator size={'large'} color={colors.designColor}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:height -50,
        alignItems:'center',justifyContent:'center',
        backgroundColor:'#0000000080'

    }
})

export default Loader