import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/screens/Login"
import Registrar from "./src/screens/Registrar"
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator options="headerShown=false">
      <Stack.Screen name="Login" component={Registrar} />
      <Stack.Screen name="Registrar" component={Registrar} />
    </Stack.Navigator>
    </NavigationContainer>
);
}