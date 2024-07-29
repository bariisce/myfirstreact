import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MemberResult({route}){
    const {user} = route.params;

    return (
        <View>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}>Üye Adı: {user.userName}</Text>
            <Text style={styles.label}>Üye SoyAdı: {user.userLastName}</Text>
            <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-Mail Adresi: {user.userEmail}</Text>
            <Text style={styles.label}>Üye Şehri: {user.userCity}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 30,
        margin: 10,
    },
    message: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
export default MemberResult;