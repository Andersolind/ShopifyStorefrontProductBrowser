import { View, Text, SafeAreaView, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Bars4Icon, XMarkIcon } from 'react-native-heroicons/outline'
import { colors } from '../constants'

const SideMenu = () => {

  const navigations = [
    {
      title: 'Home',

    },
    {
      title: 'Intro',
    },
    {
      title: 'Cart',
    },
    {
      title: 'Products',
    }
  ]
  const navigation: any = useNavigation()
  return (
    <SafeAreaView style={styles.container} >
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 10, textAlign: 'center' }}>Press to navigate</Text>

        </View>
        {navigations.map(({ title }: { title: string }) => (
          <Pressable key={title} style={styles.menu} onPress={()=>navigation.navigate(title)}>
            <Text style={styles.menuText}>{title}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  menu: {
    backgroundColor: 'black',
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 30
  },
  menuText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600'
  }
})

export default SideMenu