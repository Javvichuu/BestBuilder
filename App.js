import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/screens/Login/Login";
import Registrar from "./src/screens/Login/Registrar";
import Verificacion from "./src/screens/Login/Verificacion";
import Navegacion from "./src/screens/Aplicacion/Navegacion";
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator options="headerShown=false">
      <Stack.Screen name="Login" component={Login}  options={{ headerShown:false}}/>
      <Stack.Screen name="Registrar" component={Registrar} options={{ headerShown:false}}/>
      <Stack.Screen name="Verificacion" component={Verificacion} options={{ headerShown:false}}/>
      <Stack.Screen name="Navegacion" component={Navegacion} options={{ headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
);
}