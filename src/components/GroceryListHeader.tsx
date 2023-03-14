import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/Colors';

type GroceryListHeaderProps = {
  listId: string;
  title: string;
};

const GroceryListHeader = ({listId, title}: GroceryListHeaderProps) => {
  const goBack = () => {};

  const toggleEditing = () => {};

  return (
    <View style={styles.header}>
      <Pressable style={styles.buttonWrapper} onPress={goBack}>
        <Icon name="arrow-back" size={24} color={COLORS.white} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.buttonWrapper} onPress={toggleEditing}>
        <Icon name="edit" size={24} color={COLORS.white} />
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
