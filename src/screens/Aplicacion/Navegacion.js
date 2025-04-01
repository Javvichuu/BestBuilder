import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import MisProyectos from "./MisProyectos"
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
                tabBarActiveTintColor: '#228B22', // Cambiado a ForestGreen
                tabBarInactiveTintColor: '#cdcdcd',
            }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color="#228B22" /> // Cambiado a ForestGreen
                        ),
                        headerShown: false
                    }}
                />
                 <Tab.Screen
                    name="MisProyectos"
                    component={MisProyectos}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="add" size={size} color="#228B22" /> // Cambiado a ForestGreen
                        ),
                        headerShown: false
                    }}
                />
                 <Tab.Screen
                    name="Home2"
                    component={Home}
                    options={{
                        title: "Home",
                        tabBarLabel: "Ajustes",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings" size={size} color="#228B22" /> // Cambiado a ForestGreen
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </PaperProvider>
    );
}

export default HomeNavegacion;