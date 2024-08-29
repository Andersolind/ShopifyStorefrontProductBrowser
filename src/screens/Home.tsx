import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { colors } from '../constants';
import productsData from '../data/productsData'
import { Item } from '../models/products';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types';
import { ShoppingCartIcon } from 'react-native-heroicons/outline';

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
        onPress={() => navigation.navigate('ProductDetails', { id: item.id, image:item?.images[0].url })}
        style={styles.productView}>
          {/* image */}
        <Image
          style={styles.img}
          source={{
            uri: item.images[0].url,
          }}
        />
        <View style={styles.textView}>
          {/* title */}
          <Text>{item?.title}</Text>

          <View style={{
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'space-between', marginVertical: 5
          }}>

            <Text style={{ fontWeight: '600', color: colors.textBlack, fontSize: 12 }}>
              ${item?.compareAtPriceRange.minVariantPrice.amount}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.designColor,
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 6,
              }}>
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

