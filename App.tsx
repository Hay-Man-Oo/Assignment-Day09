import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Home from './components/Home';
import Favourite from './components/Favourite';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation
    screenOptions={({ navigation }: any) => ({
      headerTitle: 'Seattle Constulting Myanmar',
      headerTintColor: '#1588ea',
      headerTitleStyle: {
      fontWeight: 'bold',
      },
    })}>
      
      <Drawer.Screen name="Home" component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'violet'} size={30} />
          ),
        }}
      />
      <Drawer.Screen name="Favourite" component={Favourite}
      options={{
        drawerIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="star-outline" color={'violet'} size={30} />
        ),
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
