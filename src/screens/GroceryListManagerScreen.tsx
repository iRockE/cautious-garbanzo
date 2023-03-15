import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import DraggableFlatList, {
  DragEndParams,
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {useAppSelector} from '../app/hooks';
import {getLists} from '../features/groceryList/groceryListsSlice';
import {GroceryListData} from '../interfaces/interfaces';
import {RootStackParamList} from '../navigation/PrimaryNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'GroceryListManager'>;

const GroceryListManagerScreen = ({navigation}: Props): JSX.Element => {
  const groceryLists = useAppSelector(getLists);

  const onDragEnd = ({data}: DragEndParams<GroceryListData>) => {};

  return (
    <View style={styles.container}>
      <DraggableFlatList
        keyboardShouldPersistTaps={'handled'}
        data={groceryLists}
        renderItem={({
          item,
          drag,
          isActive,
        }: RenderItemParams<GroceryListData>) => (
          <Button
            onPress={() => {
              navigation.push('GroceryList', {list: item});
            }}
            title={item.title}
          />
        )}
        keyExtractor={(item: GroceryListData) => item.id}
        onDragEnd={onDragEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroceryListManagerScreen;
