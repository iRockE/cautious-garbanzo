import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Colors';
import {GroceryListData} from '../interfaces/interfaces';
import AddItem from './AddItem';
import Item from './GroceryItem';

type GroceryListProps = {
  listData: GroceryListData;
};

function GroceryList({listData}: GroceryListProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listData.title}</Text>
      <FlatList
        data={listData.items}
        renderItem={({item}) => <Item itemData={item} listId={listData.id} />}
        keyExtractor={item => item.id}
      />
      <AddItem listId={listData.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    marginVertical: 2,
    marginHorizontal: 12,
  },
});

export default GroceryList;
