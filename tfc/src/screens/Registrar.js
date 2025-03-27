import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

 <View style={styles.subContainer}>
        <Image source={require('../assets/Logo.png')} style={styles.image} />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Registro</Text>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Introduce Nombre de Usuario"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Introduce el Email"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Introduce la contraseña"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Repetir contraseña"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>


        <View style={styles.subContainer}>
          <Pressable style={styles.bottom}>
            <Text style={styles.textLogin}>Login</Text>
          </Pressable>
        </View>
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
    backgroundColor: '#1F1F1F', // bg-gray-950
    height:"100%"
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  formContainer: {
    paddingHorizontal: 16, // px-4
    width: '100%',
    color: '#006400', // Verde oscuro
  },
  title: {
    fontSize: 48, // text-5xl
    fontWeight: 'bold',
    marginBottom: 24, // mb-6
    color: 'white', // text-gray-50
  },
  textLogin: {
    fontSize: 18,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 13, // gap-4
  },
  input: {
    backgroundColor: '#404040', // bg-gray-800
    color: '#F9FAFB', // text-gray-50
    padding: 13, // p-3
    borderRadius: 8, // rounded-lg
    borderColor: "#228B22", // Verde
    borderWidth: 1
  },
  bottom: {
    backgroundColor: '#228B22', // Verde
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    height: 55,
    width: 160,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
