import { useState } from "react";
import { ProductsProps } from "../models/products";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";


export const ListItem = ({ item }: { item: ProductsProps }) => {
    const [expanded, setExpanded] = useState(false);

    const onItemPress = () => {
        setExpanded(!expanded)
    }

    const animatedStyle = useAnimatedStyle(() => {
        const animatedHeight = expanded ? withTiming(100) : withTiming(0)
        return {
            height: animatedHeight,
        }
    })

    return (
        <View style={styles.wrap}>
            <TouchableWithoutFeedback onPress={onItemPress} >
                <View style={styles.container}>
                    <Image source={{ uri: item.images[0].url }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{item.variants[0].title}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <Animated.View style={animatedStyle}>
                <Text>{item.variants[0].product.options[0].name}</Text>
            </Animated.View>
        </View>
    )

}

const styles = StyleSheet.create({
    wrap: {
        borderColor: '#ccc',
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2
    },
    container: { flexDirection: "row" },
    image: { width: 50, height: 50, margin: 10, borderRadius: 5 },
    textContainer: { justifyContent: "space-around" },
    details: { margin: 10 },
    text: { opacity: 0.7 }
})