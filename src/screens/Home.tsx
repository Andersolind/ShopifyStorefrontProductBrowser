import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { colors } from '../constants';
import productsData from '../data/productsData'
import { Item } from '../models/products';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types';

const { height } = Dimensions.get('window');

const Home = () => {
  const navigation: any = useNavigation();
  const [productsArray, setProductsArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
      //  console.log(productsData,'data');
      // const response = await fetch('https://gist.githubusercontent.com/tsopin/22b7b6b32cef24dbf3dd98ffcfb63b1a/raw/6f379a4730ceb3c625afbcb0427ca9db7f7f3b8b/testProducts.json')
      //  const response = await fetch(productsData); 

      // const json = await response.json();
      setProductsArray(productsData);
      setIsLoading(false);
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const RenderItem = ({ item }: Item) => {
    console.log(item.images[0].url)
    return (
      <TouchableOpacity 
      onPress={() => navigation.navigate('ProductDetails',{id:item?.id})} 
      style={styles.productView}>

        <Image
          style={styles.img}
          source={{
            uri: item.images[0].url,
          }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View>

      <Header />

      <View>
        {isLoading ? (
          <Text>Loader</Text>) :
          (


            <FlatList data={productsArray} contentContainerStyle={styles.container}
              keyExtractor={(item: any) => item?.id}
              renderItem={RenderItem}
              refreshing={refreshing}
              onRefresh={() => {
                getData();
              }
              }
              numColumns={2}
            />
          )
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultWhite,
    paddingBottom: 200,
  },
  productView: {
    flex: 1,
    height: height / 3,
    borderWidth: 0.5,
    borderColor: colors.textBlack,
    margin: 5,
    borderRadius: 6,
    marginHorizontal: 10,
    overflow: 'hidden',
    position: 'relative'
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    marginTop: -10
  },
})


export default Home

