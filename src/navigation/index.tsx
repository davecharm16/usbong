import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './auth/AuthNavigator';
import MainNavigator from './home/MainNavigator';
import { useAppSelector } from '../redux/hooks/reduxHooks';

const MainNavigationContainer = () => {
  const loggedIn = useAppSelector((state) => state.user.loggedIn);
  console.log(loggedIn);
  return (
    <NavigationContainer>
          {
            !loggedIn
            ?
            <AuthNavigator/>
            :
            <MainNavigator/>
          }
        </NavigationContainer>
  );
};

export default MainNavigationContainer;
