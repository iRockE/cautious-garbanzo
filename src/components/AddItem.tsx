import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {COLORS} from '../constants/Colors';
import {addItem} from '../features/groceryList/groceryListsSlice';

type AddItemProps = {
  listId: string;
};

const AddItem = ({listId}: AddItemProps) => {
  const [text, onChangeText] = React.useState('');

  const dispatch = useAppDispatch();

  const onsubmit = () => {
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
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button onPress={onsubmit} title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  input: {
    color: COLORS.black,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddItem;
