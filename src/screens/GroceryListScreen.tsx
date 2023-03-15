import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useAppSelector} from '../app/hooks';
import GroceryList from '../components/GroceryList';
import {getLists} from '../features/groceryList/groceryListsSlice';
import {RootStackParamList} from '../navigation/PrimaryNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'GroceryList'>;

const GroceryListScreen = ({navigation}: Props): JSX.Element => {
  const lists = useAppSelector(getLists);

  return <GroceryList listData={lists[0]} />;
};

export default GroceryListScreen;
