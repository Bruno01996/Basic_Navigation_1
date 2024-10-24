import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { DetailsScreen } from './components/DetailsScreen';
import { MoviesScreen } from './components/MoviesScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Movies" component={MoviesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


