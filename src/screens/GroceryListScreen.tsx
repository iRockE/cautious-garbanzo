import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import GroceryList from '../components/GroceryList';
import {RootStackParamList} from '../navigation/PrimaryNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'GroceryList'>;

const GroceryListScreen = ({route}: Props): JSX.Element => {
  const {list} = route.params;

  return <GroceryList listData={list} />;
};

export default GroceryListScreen;
