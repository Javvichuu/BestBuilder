import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { HelperText } from 'react-native-paper';

export default function Registrar(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [user, setUser] = useState('');
  const uriImagen =
    'https://static.vecteezy.com/system/resources/previews/004/916/463/non_2x/background-for-mobile-with-silhouette-of-backhoe-and-heavy-machinery-over-the-city-with-building-constructions-vector.jpg';

  const emailHasErrors = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return email != '' && !regex.test(email);
  };

  const contrasenyaHasErrors = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return password != '' && !regex.test(password);
  };

  const usuarioHasErrors = () => {
    const regex = /^[a-zA-Z0-9_-]{3,20}$/;
    return user != '' && !regex.test(user);
  };

  const registerUser = async () => {
    if (email === '' || password === '') {
      Alert.alert('ERROR', 'Please fill in all fields');
    } else if (password !== repeatPass) {
      Alert.alert('ERROR', 'Passwords do not match');
    } else if (
      emailHasErrors() ||
      contrasenyaHasErrors() ||
      usuarioHasErrors()
    ) {
      Alert.alert('ERROR', 'Invalid data');
    } else {
      props.navigation.navigate('Verificacion');
    }
  };

  return (
    <ImageBackground source={{ uri: uriImagen }} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/logoPNGsinletra.png')}
                style={styles.image}
              />
            </View>

            <View style={styles.formContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>Unete a </Text>
                <Text style={{ ...styles.title, color: '#33FF00' }}>
                  BESTBUILDER!
                </Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Introduce Nombre de Usuario"
                  placeholderTextColor="white"
                  value={user}
                  onChangeText={setUser}
                />
                {usuarioHasErrors() && (
                  <HelperText type="error">
                    Invalid username, you need at least 3 characters
                  </HelperText>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="Introduce el Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="white"
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
                {contrasenyaHasErrors() && (
                  <HelperText type="error">
                    Invalid password, you need 8 characters, a capital letter, a
                    lowercase letter, and a number.
                  </HelperText>
                )}

                <TextInput
                  style={styles.input}
                  placeholder="Repetir contraseña"
                  placeholderTextColor="white"
                  value={repeatPass}
                  onChangeText={setRepeatPass}
                  secureTextEntry
                />
                {contrasenyaHasErrors() && (
                  <HelperText type="error">
                    Invalid password, You need 8 characters, a capital letter, a
                    lowercase letter, and a number.
                  </HelperText>
                )}
              </View>

              <View style={styles.buttonContainer}>
                <Pressable style={styles.bottom} onPress={() => registerUser()}>
                  <Text style={styles.textLogin}>Registrar</Text>
                </Pressable>
              </View>

              <View style={styles.loginContainer}>
                <Text style={styles.textRegister}>Ya tienes una cuenta?</Text>
                <Pressable
                  onPress={() => {
                    props.navigation.navigate('Login');
                  }}>
                  <Text style={{ ...styles.textRegister, color: '#33FF00' }}>
                    {' '}
                    Logueate
                  </Text>
                </Pressable>
              </View>
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
    width: '85%',
  },
  imageContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
        fontFamily: 'Roboto-Medium',
  },
  textLogin: {
    fontSize: 18,
    color: 'white',
  },
  textRegister: {
    fontSize: 17,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },
  input: {
    color: '#F9FAFB',
    padding: 12,
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
  loginContainer: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 140,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
