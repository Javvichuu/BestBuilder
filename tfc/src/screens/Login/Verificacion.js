import {useState} from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
export default function Codigo(props) {
  const [codigo, setCodigo] = useState('');

  const handleOnPress=(()=>{
    props.navigation.navigate('RestablecerContra')
  })
  return (
    <View style={styles.container}>    
      <View style={styles.subContainer}>
        <Image source={require('../../assets/logoPNG.png')} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
         <Text style={styles.text}>✸ Te hemos enviado un codigo de verificacion en tu correo, por favor ves a tu correo e introducelo.</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Introduce el codigo de verificacion"
            value={codigo}
            onChangeText={setCodigo}
          />
        </View>

        <View style={styles.subContainer}>
          <Pressable style={styles.bottom} onPress={handleOnPress}>
            <Text style={styles.textLogin}>Enviar</Text>
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
    backgroundColor: '#343434', 
    paddingTop:110
  },
  subContainer: {
    alignItems: 'center',
    marginBottom: 15,
    flex:1,
  },
  formContainer: {
    paddingHorizontal: 16, 
    width: '100%',
    color: '#00008B',
    flex:1.5,
    marginTop:5
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding:10,
    textAlign:"center"
  },
  inputContainer: {
    flexDirection: 'column',
    gap: 16,
    marginTop:20,
    marginBottom:20
  },
  image: {
    width: 260,
    height: 260,
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
    borderColor: '#32A832',
    height: 55,
    width: 160,
    alignItems: 'center',
  },
});
