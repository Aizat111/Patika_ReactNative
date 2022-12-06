import React from 'react';
import {View, Text, TouchableOpacity, Alert } from 'react-native';
import style from './Card.Style'

const Card = (props) =>{
    return(
        <View style={style.container}>
            <View style={style.body}>
                <Text style={style.title}>{props.title}</Text>
                <Text style={style.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style={style.button_container} onPress={()=>Alert.alert('Merhaba '+ props.title)}>
                <Text style={style.button_title}> I LIKED </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Card;