import React from 'react';
import {FlatList} from 'react-native';

import ItemData from '../interfaces/ItemData';
import Item from './GroceryItem';

type GroceryListProps = {
  items: ItemData[];
};

function GroceryList(props: GroceryListProps): JSX.Element {
  return (
    <FlatList
      data={props.items}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
}

export default GroceryList;
