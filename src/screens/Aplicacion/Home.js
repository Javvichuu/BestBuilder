import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import { HelperText } from 'react-native-paper';
export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHasErrors = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return email != '' && !regex.test(email);
  };

  const contrasenyaHasErrors = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return password != '' && !regex.test(password);
  };

   const loginUsuario = async () => {
        if (email === '' || password === '') {
            Alert.alert("ERROR", 'Please fill in all fields')
        }}

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#343434', // bg-gray-950
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 90,
  },
  formContainer: {
    paddingHorizontal: 16, // px-4
    width: '100%',
    color: '#006400', // Verde oscuro
    flex: 2.5,
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 16, // gap-4
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  registerContainer: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48, // text-5xl
    fontWeight: 'bold',
    marginBottom: 24, // mb-6
    color: 'white', // text-gray-50
    marginTop: 30,
  },
  textLogin: {
    fontSize: 20,
    color: 'white',
  },
  textRegister: {
    fontSize: 17,
    color: 'white',
  },
  input: {
    backgroundColor: '#404040', // bg-gray-800
    color: '#F9FAFB', // text-gray-50
    padding: 12, // p-3
    borderRadius: 8, // rounded-lg
    borderColor: '#228B22', // Verde
    borderWidth: 1,
  },
  bottom: {
    backgroundColor: '#228B22', // Verde
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#32A832',
    height: 55,
    width: 160,
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 10,
  },
});
