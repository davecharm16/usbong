import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import 'react-native-gesture-handler';
import MainNavigationContainer from './src/navigation';
import auth from '@react-native-firebase/auth';

function App(): React.JSX.Element {
  // const [loggedIn] = useState<boolean>(true);
  const user = auth().currentUser;
  console.log(user);
  return (
    <Provider store={store}>
      <MainNavigationContainer />
    </Provider>
  );
}

export default App;
