import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import MisProyectos from "../CrearProyectos/MisProyectos";
import CrearProyecto from "../CrearProyectos/CrearProyecto";
import Navegacion from "../CrearProyectos/Navegacion";
import { PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const HomeNavegacion = (props) => {
    return (
        <PaperProvider>
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: '#228B22',
                tabBarInactiveTintColor: '#cdcdcd',
            }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color="#228B22" />
                        ),
                        headerShown: false
                    }}
                />
                 <Tab.Screen
                    name="MisProyectos"
                    component={Navegacion}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="add" size={size} color="#228B22" />
                        ),
                        headerShown: false
                    }}
                />
                 <Tab.Screen
                    name="Home2"
                    component={Home}
                    options={{
                        title: "Home",
                        tabBarLabel: "Perfil",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" size={size} color="#228B22" />
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </PaperProvider>
    );
}

export default HomeNavegacion;