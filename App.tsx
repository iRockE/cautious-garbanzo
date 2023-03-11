import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useAppSelector} from './src/app/hooks';
import AddItem from './src/components/AddItem';

import GroceryList from './src/components/GroceryList';
import {COLORS} from './src/constants/Colors';
import {selectList} from './src/features/groceryList/groceryListSlice';

function App(): JSX.Element {
  const list = useAppSelector(selectList);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.caribbean}
      />
      <GroceryList items={list} />
      <AddItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.alice,
  },
});

export default App;
