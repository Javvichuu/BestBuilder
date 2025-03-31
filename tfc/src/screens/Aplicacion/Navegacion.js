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
                    backgroundColor: '#101037',
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: '#607cff',
                tabBarInactiveTintColor: '#cdcdcd',
            }}>
                <Tab.Screen
                    name="Home"
                    component={MisProyectos}
                    options={{
                        title: "Home",
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                        headerShown: false
                    }}
                />
                 <Tab.Screen
                    name="Home1"
                    component={Home}
                    options={{
                        title: "Home1",
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                        headerShown: false
                    }}
                />
                 <Tab.Screen
                    name="Home2"
                    component={Home}
                    options={{
                        title: "Home",
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
        </PaperProvider>
    );
}

export default HomeNavegacion;