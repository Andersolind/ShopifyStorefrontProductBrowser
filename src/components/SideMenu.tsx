import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

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
    }
  ]
  const navigation: any = useNavigation()
  return (
    <SafeAreaView style={styles.container} >
      <View>
        <View style={styles.subView}>
          <Text style={styles.button}>Press to navigate</Text>

        </View>
        {navigations.map(({ title }: { title: string }) => (
          <Pressable key={title} style={styles.menu} onPress={() => navigation.navigate(title)}>
            <Text style={styles.menuText}>{title}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  subView: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  button: {
    fontSize: 14, fontWeight: '600', marginTop: 10, textAlign: 'center'
  },
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