import React from "react";
import { View,StyleSheet,Text } from "react-native";


export default function Map({route}) {

    const {location} = route.params;

    return (
        <View style={style.body}>
            <Text style = {
                styles.Text}>
                {location}
            </Text>
        </View>
    );
}




const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
    }
});