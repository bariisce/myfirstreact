import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "./Button.style";
const Button = ({text, onPress}) => {
    return (
        <TouchableOpacity style={Styles.container} onPress={onPress}>
            <Text style={Styles.text}>{text}</Text>
        </TouchableOpacity>
    )
} 

export default Button;