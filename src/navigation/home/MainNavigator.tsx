import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../features/home/screens/HomeScreen';
import NotifScreen from '../../features/home/screens/NotifScreen';

export type RootStackParamList = {
  Home: undefined;
  Notification: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const MainNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={NotifScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
