import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {useAppDispatch} from '../app/hooks';
import {COLORS} from '../constants/Colors';
import {
  removeItem,
  updateItem,
} from '../features/groceryList/groceryListsSlice';
import {ItemData} from '../interfaces/interfaces';

type GroceryItemProps = {
  itemData: ItemData;
  listId: string;
  drag: () => void;
  dragging: boolean;
};

const GroceryItem = ({itemData, listId, drag}: GroceryItemProps) => {
  const [text, onChangeText] = React.useState(itemData.title);

  const dispatch = useAppDispatch();

  const onEditText = () => {
    dispatch(
      updateItem({
        listId: listId,
        itemId: itemData.id,
        itemTitle: text,
      }),
    );
  };

  const onRemove = () => {
    dispatch(
      removeItem({
        listId: listId,
        itemId: itemData.id,
      }),
    );
  };

  const startDrag = () => {
    drag();
    ReactNativeHapticFeedback.trigger('soft');
  };

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.buttonWrapper} onPressIn={startDrag}>
        <Icon name="drag-indicator" size={24} color={COLORS.white} />
      </Pressable>
      <TextInput
        style={styles.title}
        value={text}
        onChangeText={onChangeText}
        onEndEditing={onEditText}
      />
      <Pressable style={styles.buttonWrapper} onPress={onRemove}>
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
  buttonWrapper: {
    alignSelf: 'stretch',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GroceryItem;
