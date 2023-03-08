import React from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import ItemData from '../interfaces/ItemData';
import Item from './GroceryItem';

type GroceryListProps = {
  items: ItemData[];
};

function GroceryList(props: GroceryListProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.items}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default GroceryList;
