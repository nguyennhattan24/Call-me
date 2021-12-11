import React, { useState, useEffect } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import styles from '../StyleSheet/LoginTS'

export default function LoginMail({ navigation }: { navigation: any }) {
  const [Email, useEmail] = useState('');
  const [Password, UsePassword] = useState('');
  const SignIn = (Email: string, Password: string) => {
    if (!Email.trim()) {
      alert('Please Enter Username');
      return;
    }
    if (!Password.trim()) {
      alert('Please Enter Password');
      return;
    }
    auth()
      .signInWithEmailAndPassword(Email, Password)
      .catch(error => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  function onAuthStateChanged(user: any) {
    if (user) {
      navigation.replace('FirstScreen');
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Logo.png')}
        style={styles.Img}
      />
      <Text style={styles.Title}>CALL ME</Text>
      <TextInput
        onChangeText={useEmail}
        value={Email}
        placeholder="Email"
        placeholderTextColor="grey"
        style={styles.TextIP}
      />
      <TextInput
        onChangeText={UsePassword}
        value={Password}
        style={styles.TextIP}
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => SignIn(Email, Password)} style={styles.Signin}>
        <Text style={styles.txtLogin}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.txtSignUp}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}