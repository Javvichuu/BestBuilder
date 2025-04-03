import { createStackNavigator } from '@react-navigation/stack';
import MisProyectos from "./MisProyectos";
import CrearProyecto from "./CrearProyecto";

const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Stack.Navigator options="headerShown=false">
      <Stack.Screen name="MisProyectos" component={MisProyectos}  options={{ headerShown:false}}/>
      <Stack.Screen name="CrearProyecto" component={CrearProyecto} options={{ headerShown:false}}/>
    </Stack.Navigator>
);
}