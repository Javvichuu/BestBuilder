import {
  Text,
  Pressable,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
const { height } = Dimensions.get('window');

export default Card = (props) => {
  const description = "Este es un texto muy largo que ocupa múltiples líneas...".repeat(10);

  return (
    <Pressable onPress={props.onRutina} delayPressIn={0}>
      <ImageBackground
        source={{uri:props.imagenes}}
        style={styles.containerImage}
        imageStyle={styles.backgroundImage}
        pointerEvents="box-none"
      >
        <View style={styles.container}>
            <Text style={styles.title}>Título</Text>
            <View style={styles.line} />
            
           <View style={styles.descripcionContainer}>
                <ScrollView>
                    <Text style={styles.descripcionText}>{description}</Text>
                </ScrollView>
            </View>
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.employerContainer}>
              <View style={styles.hoursContainer}>
                <Icon name="location" size={35} color={'white'} />
                <Text style={styles.hoursText}>Valenc.</Text>
              </View>
              <View style={styles.hoursContainer}>
                <Icon name="user" size={35} color={'white'} />
                <Text style={styles.hoursText}>4</Text>
              </View>
              <View style={styles.hoursContainer}>
                <Icon name="calendar" size={35} color={'white'} />
                <Text style={styles.hoursText}>4</Text>
              </View>
              
            </View>
            
            <View style={styles.precioContainer}>
              <Text style={styles.precio}>123€</Text>
            </View>
          </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    width: '100%',
    minHeight: 300,
    maxHeight: height * 0.7,
    borderColor: '#33FF00',
    borderWidth: 2,
    marginTop: 10,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    alignContent:"center",
    alignItems:"center"
  },
  title: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    borderColor: '#33FF00',
    borderWidth: 1,
    width: '95%',
    marginVertical: 10,
  },
  descripcionContainer: {
    width: '95%',
    backgroundColor: 'rgba(128, 128, 128, 0.8)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    height:115
  },
  descripcionText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    flexShrink: 1,
  },

  employerContainer: {
    width: '94%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 13,
    marginLeft:7
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  hoursText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  precioContainer: {
    alignItems: 'flex-end',
    width:"95%",
    
  },
  precio: {
    fontSize: 35,
    color: '#32CD32',
    fontWeight: 'bold',
    
  },
  backgroundImage: {
    opacity: 0.4,
    resizeMode: 'cover',
  },
});