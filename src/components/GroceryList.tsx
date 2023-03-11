import React from 'react';
import {FlatList} from 'react-native';
import { GroceryListData } from '../interfaces/interfaces';

import Item from './GroceryItem';

type GroceryListProps = {
  listData: GroceryListData;
};

function GroceryList(props: GroceryListProps): JSX.Element {
  return (
    <FlatList
      data={props.listData.items}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
}

export default GroceryList;
