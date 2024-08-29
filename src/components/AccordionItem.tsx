import { useState } from "react";
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Variant } from "../models/data";


export const ListItem = ({ item }: { item:  Variant }) => {
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
            <TouchableNativeFeedback onPress={onItemPress} >
                <View style={styles.container}>
                    <Image source={{ uri: item.image.url }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>

            <Animated.View style={animatedStyle}>
                <Text>{item.product.options[0].name}</Text>
                {item.availableForSale === false ? <Text>{item.availableForSale}</Text> :
                <Text style={styles.availableItem}>{item.availableForSale}</Text>}
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    availableItem:{
        textDecorationLine:'line-through'
    },
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
    container: {flex:1,flexDirection: "row", width:'auto'},
    image: { width: 50, height: 50, margin: 10, borderRadius: 5 },
    textContainer: { justifyContent: "space-around" },
    details: { margin: 10 },
    text: { opacity: 0.7 }
})