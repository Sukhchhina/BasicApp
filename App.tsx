import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/components/Screen1';
import Screen2 from './src/components/Screen2';
import SplashScreen from './src/components/SplashScreen';
import Checkboxlayout from './src/components/Checkboxlayout';
import Pizzadropdown from './src/components/Pizzadropdown';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Checkbox" component={Checkboxlayout}
        />
        <Stack.Screen name="Pizzadropdown" component={Pizzadropdown}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
