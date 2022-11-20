import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ing from './Ing';

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Ing"
        component={Ing}
        options={{headerShown: false}}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Home;
