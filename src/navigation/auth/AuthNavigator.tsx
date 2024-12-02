import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../features/auth/screens/Login';

export type RootStackParamList = {
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
