import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import 'react-native-gesture-handler';
import MainNavigationContainer from './src/navigation';



function App(): React.JSX.Element {
  // const [loggedIn] = useState<boolean>(true);


  return (
    <Provider store={store}>
      <MainNavigationContainer/>
    </Provider>
  );
}

export default App;
