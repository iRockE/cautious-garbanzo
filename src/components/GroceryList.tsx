import React from 'react';
import {StyleSheet, View} from 'react-native';
import DraggableFlatList, {
  DragEndParams,
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {useAppDispatch} from '../app/hooks';
import {updateListItems} from '../features/groceryList/groceryListsSlice';
import {GroceryListData, ItemData} from '../interfaces/interfaces';
import AddItem from './AddItem';
import GroceryItem from './GroceryItem';
import GroceryListHeader from './GroceryListHeader';

type GroceryListProps = {
  listData: GroceryListData;
};

function GroceryList({listData}: GroceryListProps): JSX.Element {
  const [editingEnabled, setEditingEnabled] = React.useState(false);

  const dispatch = useAppDispatch();

  const onDragEnd = ({data}: DragEndParams<ItemData>) => {
    dispatch(
      updateListItems({
        listId: listData.id,
        items: data,
      }),
    );
  };

  const toggleEditing = () => {
    setEditingEnabled(!editingEnabled);
  };

  return (
    <View style={styles.container}>
      <GroceryListHeader
        listId={listData.id}
        title={listData.title}
        editingEnabled={editingEnabled}
        toggleEditing={toggleEditing}
      />
      <DraggableFlatList
        keyboardShouldPersistTaps={'handled'}
        data={listData.items}
        renderItem={({item, drag, isActive}: RenderItemParams<ItemData>) => (
          <GroceryItem
            itemData={item}
            drag={drag}
            dragging={isActive}
            listId={listData.id}
            editingEnabled={editingEnabled}
          />
        )}
        keyExtractor={(item: ItemData) => item.id}
        onDragEnd={onDragEnd}
      />
      <AddItem listId={listData.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroceryList;
