import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { colors } from '../constants';
import productsData from '../data/productsData'
import { Item } from '../models/products';
import { useNavigation } from '@react-navigation/native';

import { ShoppingCartIcon } from 'react-native-heroicons/outline';
import Loader from '../components/Loader';

const { height } = Dimensions.get('window');

const Home = () => {
  const navigation: any = useNavigation();
  const [productsArray, setProductsArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    try {
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

    return (
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Go to Products Detail"
        accessibilityHint="Navigates to the product details"
        onPress={() => navigation.navigate('ProductDetails', { id: item.id, image: item?.images[0].url })}
        style={styles.productView}>
        {/* image */}
        <Image
          style={styles.img}
          source={{
            uri: item.images[0].url,
          }}
        />
        <View accessible={true} style={styles.textView}>
          {/* title */}
          <Text>{item?.title}</Text>
          <View accessible={true} style={styles.addToCartContainer}>
            <Text style={styles.minVariant}>
              ${item?.compareAtPriceRange.minVariantPrice.amount}</Text>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Add to Cart"
              accessibilityHint="Navigates to the product details"
              style={styles.addToCart}>
              <ShoppingCartIcon size={20} color={colors.textBlack} />
            </TouchableOpacity>
          </View>

        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Header />
      <View>
        {isLoading ? (
          <Loader title="Product is loading" />) :
          (
            <FlatList data={productsArray} contentContainerStyle={styles.container}
              keyExtractor={(item: any) => item?.id}
              renderItem={RenderItem}
              refreshing={refreshing}
              onRefresh={() => {
                getData();
              }}
              numColumns={2}
            />
          )
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  addToCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  minVariant: {
    fontWeight: '600',
    color: colors.textBlack,
    fontSize: 12
  },
  addToCart: {
    backgroundColor: colors.designColor,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 6,
  },
  container: {
    backgroundColor: "white",
    paddingBottom: 300,
  },
  textView: {
    padding: 10
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
    height: "50%",
    objectFit: "contain",
    marginTop: -1
  },
})


export default Home

