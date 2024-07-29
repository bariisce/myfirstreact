import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Input from "../components/Input";
import Button from '../components/Button/Button';

function MemberSign({navigation}) {
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userCity, setUserCity] = useState('');

    function handleSubmit(){
        if (!userName || !userLastName || !userAge || !userEmail || !userCity){
            Alert.alert('Kebap Gym', 'You have to fill out all places ! !')
            return;
        }

        const user = {
            userName,
            userLastName,
            userAge,
            userEmail,
            userCity
        }

        navigation.navigate('MemberResultScreen', {user});
    }
    return (
        <View>
            <Input label="Üye Adı" placeholder="Enter Your Name" onChangeText={setUserName}/>
            <Input label="Üye Soyadı" placeholder="Enter Your Last Name" onChangeText={setUserLastName}/>
            <Input label="Üye Yaş" placeholder="Enter Your Age" onChangeText={setUserAge}/>
            <Input label="Üye E-Posta" placeholder="Enter Your E-Mail" onChangeText={setUserEmail}/>
            <Input label="Üye Şehir" placeholder="Enter Your City" onChangeText={setUserCity}/>
            <Button text="Sign UP" onPress={handleSubmit}/>
        </View>
    )
}

export default MemberSign;