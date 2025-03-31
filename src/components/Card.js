import {
  Text,
  Pressable,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const { height } = Dimensions.get('window');

export default Card = (props) => {
  return (
    <Pressable onPress={props.onRutina}>
      <ImageBackground
        source={require('../assets/logoPNG.png')}
        style={styles.container}
        imageStyle={styles.backgroundImage}>
        <View style={styles.overlay}>
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Título</Text>
            <View style={styles.line} />
            
            <View style={styles.descripcionContainer}>
              <Text style={styles.descripcionText}>
                Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.Descripción del servicio o actividad.
              </Text>
            </View>
          </ScrollView>

          <View style={styles.bottomSection}>
            <View style={styles.employerContainer}>
              <View style={styles.iconsContainer}>
                <Icon name="user" size={35} color={'white'} />
                <Icon name="user" size={35} color={'white'} />
                <Icon name="user" size={35} color={'white'} />
                <Icon name="user" size={35} color={'white'} />
              </View>
              
              <View style={styles.hoursContainer}>
                <Text style={styles.hoursText}>4</Text>
                <Icon name="calendar" size={35} color={'white'} />
              </View>
            </View>
            
            <View style={styles.precioContainer}>
              <Text style={styles.precio}>123€</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 300,  // Altura mínima
    maxHeight: height * 0.7,  // Altura máxima (70% de la pantalla)
    borderColor: '#33FF00',
    borderWidth: 2,
    marginTop: 10,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 50, 71, 0.7)',
    padding: 15,
    justifyContent: 'space-between', // Separa el contenido superior del inferior
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
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
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  descripcionText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
  },
  bottomSection: {
    marginTop: 20,  // Más espacio arriba del precio
  },
  employerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    gap: 15,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  hoursText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  precioContainer: {
    alignItems: 'flex-end',
    marginTop: 10,  // Separación adicional del precio
    paddingRight: 15,
  },
  precio: {
    fontSize: 32,
    color: '#228B22',
    fontWeight: 'bold',
  },
  backgroundImage: {
    opacity: 0.5,
    resizeMode: 'cover',
  },
});