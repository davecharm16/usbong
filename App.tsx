import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigation/auth/AuthNavigator';



function App(): React.JSX.Element {

  return (
    <Provider store={store}>
        <NavigationContainer>
          <AuthNavigator/>
        </NavigationContainer>
    </Provider>
  );
}

export default App;
