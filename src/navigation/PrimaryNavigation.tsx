import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GroceryListManagerScreen from '../screens/GroceryListManagerScreen';
import GroceryListScreen from '../screens/GroceryListScreen';

export type RootStackParamList = {
  GroceryListManager: undefined;
  GroceryList: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const PrimaryNavigation = (): JSX.Element => {
  return (
    <RootStack.Navigator
      initialRouteName="GroceryListManager"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name="GroceryListManager"
        component={GroceryListManagerScreen}
      />
      <RootStack.Screen name="GroceryList" component={GroceryListScreen} />
    </RootStack.Navigator>
  );
};

export default PrimaryNavigation;
