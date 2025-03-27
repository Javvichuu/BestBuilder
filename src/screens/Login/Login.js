import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import { HelperText } from 'react-native-paper';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const uriImagen =
    'https://static.vecteezy.com/system/resources/previews/004/916/463/non_2x/background-for-mobile-with-silhouette-of-backhoe-and-heavy-machinery-over-the-city-with-building-constructions-vector.jpg';

  const emailHasErrors = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,}$/;
    return email !== '' && !regex.test(email);
  };

  const contrasenyaHasErrors = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return password !== '' && !regex.test(password);
  };

  const loginUsuario = async () => {
    if (email === '' || password === '') {
      Alert.alert('ERROR', 'Please fill in all fields');
    } else if (emailHasErrors() || contrasenyaHasErrors()) {
      Alert.alert('Invalid data');
    } else {
      props.navigation.navigate('Navegacion');
    }
  };

  return (
    <ImageBackground source={{ uri: uriImagen }} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.boxContainer}>

            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/logoPNG.png')}
                style={styles.image}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.title}>Bienvenido!</Text>
              
              <TextInput
                style={styles.input}
                placeholder="Introduce el Email"
                placeholderTextColor="white"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {emailHasErrors() && (
                <HelperText type="error">Invalid email address</HelperText>
              )}

              <TextInput
                style={styles.input}
                placeholder="Introduce la contraseña"
                placeholderTextColor="white"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {contrasenyaHasErrors() && (
              <HelperText type="error">
                Invalid password, You need 8 characters, a capital letter, a
                lowercase letter, and a number.
              </HelperText>
            )}

            <View style={styles.buttonContainer}>
              <Pressable style={styles.bottom} onPress={() => loginUsuario()}>
                <Text style={styles.textLogin}>Login</Text>
              </Pressable>
            </View>

            <View style={styles.registerContainer}>
              <Text style={styles.textRegister}>No tienes cuenta? </Text>
              <Pressable
                onPress={() => {
                  props.navigation.navigate('Registrar');
                }}>
                <Text style={{ ...styles.textRegister, color: '#33FF00' }}>
                  Registrate
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    borderWidth: 2,
    borderColor: '#33FF00',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    width: '80%',
  },
  imageContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  textLogin: {
    fontSize: 20,
    color: 'white',
  },
  textRegister: {
    fontSize: 18,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },
  input: {
    color: '#F9FAFB',
    padding: 16,
    borderRadius: 8,
    borderColor: '#00FF66',
    borderWidth: 1,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: '#228B22',
    justifyContent: 'center',
    borderRadius: 5,
    height: 55,
    width: 160,
    alignItems: 'center',
  },
  registerContainer: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
});
