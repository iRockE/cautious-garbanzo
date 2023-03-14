import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch} from '../app/hooks';
import {COLORS} from '../constants/Colors';
import {addItem} from '../features/groceryList/groceryListsSlice';

type AddItemProps = {
  listId: string;
};

const AddItem = ({listId}: AddItemProps) => {
  const [text, onChangeText] = React.useState('');

  const dispatch = useAppDispatch();

  const onSubmit = () => {
    if (text) {
      dispatch(
        addItem({
          listId: listId,
          title: text,
        }),
      );
      onChangeText('');
    }
  };

  return (
    <View style={styles.wrapper}>
      <Icon
        style={styles.addIcon}
        name="add-circle-outline"
        size={24}
        color={COLORS.grey}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        blurOnSubmit={text.length === 0}
        returnKeyType={'next'}
        placeholder="Add Item"
        placeholderTextColor={COLORS.grey}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    color: COLORS.grey,
    height: 40,
    margin: 2,
    paddingVertical: 10,
    paddingHorizontal: 34,
  },
  addIcon: {
    top: 9,
    left: 5,
    position: 'absolute',
  },
});

export default AddItem;
