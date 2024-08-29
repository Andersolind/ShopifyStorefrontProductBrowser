import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, FlatList, ListRenderItemInfo } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../components/CommonHeader'
import { ProductsProps } from '../models/products'
import productsData from '../data/productsData'
import { colors } from '../constants'
import { ShoppingCartIcon } from 'react-native-heroicons/outline'
import { ListItem } from '../components/AccordionItem'

const { width, height } = Dimensions.get('window');

const ProductDetails = ({ route }: any) => {
  const _id = route?.params?.id;

  const [productdata, setProductsData] = useState<ProductsProps[] | null>(null)
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const getProductDetails = productsData.filter((id => id.id === _id));
      setProductsData(getProductDetails);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [_id])

  const RenderItem = ({ item }: ListRenderItemInfo<ProductsProps>) => {
    return <ListItem item={item} />
  }

  return (
    <View style={styles.container}>
      <CommonHeader title="Product Details" />
      <View>
        {isLoading && productdata ? (
          <Text>Loader</Text>) :
          (
            <><View>
              {/* image */}
              <View style={styles.imgView}>

                {productdata && (
                  <Image
                    source={{
                      uri: productdata[0].images[0].url
                    }}
                    style={styles.img} />
                )}

              </View>
              {/* title */}
              <Text>
                {productdata && productdata[0].title}
              </Text>
              {/* price */}
              <Text>
                ${productdata && productdata[0].variants[0].price.amount}
              </Text>
              <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', marginVertical: 5
              }}>
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
             

            </View></>
          )
        }
      </View>
      <View>
                <FlatList data={productdata} contentContainerStyle={styles.container}
                  keyExtractor={(item: any) => item?.id}
                  renderItem={RenderItem}
                  refreshing={refreshing}
                  onRefresh={() => {
                    getData();
                  }
                  }
                  numColumns={2}
                />
              </View>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultWhite, height: height,
    position: 'relative',
    flex:1
  },
  imgView: {
    width: width,
    height: height / 2
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  bottomMenu: {
    position: 'absolute'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },

})

export default ProductDetails