import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useAppSelector} from '../app/hooks';
import {getLists} from '../features/groceryList/groceryListsSlice';
import {RootStackParamList} from '../navigation/PrimaryNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'GroceryListManager'>;

const GroceryListManagerScreen = ({navigation}: Props): JSX.Element => {
  const groceryLists = useAppSelector(getLists);

  return (
    <View style={styles.container}>
      {groceryLists.map(groceryList => (
        <Button
          onPress={() =>
            navigation.navigate('GroceryList', {list: groceryList})
          }
          title={groceryList.title}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroceryListManagerScreen;
