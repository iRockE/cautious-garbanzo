import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {COLORS} from '../constants/Colors';
import {removeItem} from '../features/groceryList/groceryListsSlice';
import {ItemData} from '../interfaces/interfaces';

type ItemProps = {
  itemData: ItemData;
  listId: string;
};

const Item = ({itemData, listId}: ItemProps) => {
  const dispatch = useAppDispatch();

  const onRemove = () => {
    dispatch(
      removeItem({
        listId: listId,
        itemId: itemData.id,
      }),
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{itemData.title}</Text>
      <Pressable style={styles.closeButtonWrapper} onPress={onRemove}>
        <Icon name="close" size={24} color={COLORS.white} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: COLORS.caribbean,
    padding: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    marginBottom: 2,
  },
  title: {
    flex: 1,
    padding: 5,
    color: COLORS.white,
    fontSize: 18,
  },
  closeButtonWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Item;
