import React from 'react';
import {Pressable, StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/Colors';

type GroceryListHeaderProps = {
  listId: string;
  title: string;
  editingEnabled: boolean;
  toggleEditing: () => void;
};

const GroceryListHeader = ({
  listId,
  title,
  editingEnabled,
  toggleEditing,
}: GroceryListHeaderProps) => {
  const [groceryListTitle, onChangeGroceryListTitle] = React.useState(title);

  const onEditTitle = () => {};

  const goBack = () => {};

  return (
    <View style={styles.header}>
      <Pressable style={styles.buttonWrapper} onPress={goBack}>
        <Icon name="arrow-back" size={24} color={COLORS.white} />
      </Pressable>
      <TextInput
        editable={editingEnabled}
        style={styles.title}
        value={groceryListTitle}
        onChangeText={onChangeGroceryListTitle}
        onEndEditing={onEditTitle}
      />
      <Pressable style={styles.buttonWrapper} onPress={toggleEditing}>
        <Icon
          name={editingEnabled ? 'done' : 'edit'}
          size={24}
          color={COLORS.white}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: COLORS.tangerine,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 18,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  buttonWrapper: {
    alignSelf: 'stretch',
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GroceryListHeader;
