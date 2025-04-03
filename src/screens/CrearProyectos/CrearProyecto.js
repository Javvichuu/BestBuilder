import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { HelperText } from 'react-native-paper';

export default function CrearProyecto(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [user, setUser] = useState('');
  const uriImagen =
    'https://static.vecteezy.com/system/resources/previews/030/317/947/non_2x/innovation-in-progress-project-blueprint-design-unfolds-as-designers-and-architects-collaborate-vertical-mobile-wallpaper-ai-generated-free-photo.jpg';

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

  return (
    <ImageBackground source={{ uri: uriImagen }} style={styles.background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <View style={styles.card}>
              <Text style={styles.title}>Crear Proyecto</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                  style={styles.input}
                  value={user}
                  placeholder="MiProyecto1"
                  placeholderTextColor="#aaa"
                  onChangeText={setUser}
                />
                {usuarioHasErrors() && (
                  <HelperText type="error" style={styles.errorText}>
                    Mínimo 3 caracteres, solo letras, números, guiones y guiones
                    bajos
                  </HelperText>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Descripción</Text>
                <TextInput
                  style={styles.inputDescripcion}
                  placeholder="Descripcion del proyecto"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#aaa"
                />
                {emailHasErrors() && (
                  <HelperText type="error" style={styles.errorText}>
                    Por favor ingrese un correo válido
                  </HelperText>
                )}
              </View>

              <View style={styles.inputContainer}>
                <View style={[styles.inputGroup, styles.horizontalInputGroup]}>
                  <Text style={styles.label}>Precio</Text>
                  <TextInput
                    style={styles.inputPrecio}
                    placeholder="30.000€"
                    placeholderTextColor="#aaa"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                  {contrasenyaHasErrors() && (
                    <HelperText type="error" style={styles.errorText}>
                      Requiere 8+ caracteres, mayúscula, minúscula y número
                    </HelperText>
                  )}
                </View>

                <View style={[styles.inputGroup, styles.horizontalInputGroup]}>
                  <Text style={{ ...styles.label, textAlign: 'end' }}>
                    Nº Trabajadores
                  </Text>
                  <TextInput
                    style={styles.inputTrabajadores}
                    placeholder="17"
                    placeholderTextColor="#aaa"
                    value={repeatPass}
                    onChangeText={setRepeatPass}
                    secureTextEntry
                  />
                  {password !== repeatPass && repeatPass !== '' && (
                    <HelperText type="error" style={styles.errorText}>
                      Las contraseñas no coinciden
                    </HelperText>
                  )}
                </View>
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Ubicacion</Text>
                <TextInput
                  style={styles.input}
                  value={user}
                  placeholder="Madrid"
                  placeholderTextColor="#aaa"
                  onChangeText={setUser}
                />
                {usuarioHasErrors() && (
                  <HelperText type="error" style={styles.errorText}>
                    Mínimo 3 caracteres, solo letras, números, guiones y guiones
                    bajos
                  </HelperText>
                )}
              </View>

              <View style={styles.buttonsContainer}>
                <Pressable
                  style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={()=>props.navigation.goBack()}>
                  <Text style={styles.buttonText}>Volver</Text>
                </Pressable>
                <Pressable
                  style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={() => props.navigation.goBack()}
>
                  <Text style={styles.buttonText}>Crear</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Cambiado de space-between
    gap: 10,
    width: '100%',
  },
  buttonsContainer:{
 flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalInputGroup: {
    flex: 1,
    marginHorizontal: 5,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 12,
    padding: 30,
    shadowColor: '#33FF00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(51, 255, 0, 0.3)',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
    fontFamily: 'Nunito  ',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#33FF00',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#fff',
    padding: 14,
    borderBottomWidth: 2,
    
    borderColor: '#32CD32',
    borderWidth: 0,
    fontSize: 16,
    marginBottom: 4,
  },
  inputDescripcion: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#fff',
    padding: 14,
    borderBottomWidth: 2,
    
    borderColor: '#32CD32',
    borderWidth: 0,
    fontSize: 16,
    marginBottom: 4,
    height: 130,
  },
  inputPrecio: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#fff',
    padding: 14,
    borderBottomWidth: 2,
    
    borderColor: '#32CD32',
    borderWidth: 0,
    fontSize: 16,
    marginBottom: 4,
    width: 140, // Ancho fijo para precio
  },
  inputTrabajadores: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#fff',
    padding: 14,
    borderBottomWidth: 2,
    
    borderColor: '#32CD32',
    borderWidth: 0,
    fontSize: 16,
    marginBottom: 4,
    width: 100, // Ancho fijo más pequeño para trabajadores
    marginLeft: 'auto', // Esto empujará el input al final
  },
  errorText: {
    color: '#ff5252',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#228B22',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#33FF00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
    width:"47%"
  },
  buttonPressed: {
    backgroundColor: '#1e7a1e',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
