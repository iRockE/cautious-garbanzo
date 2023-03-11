import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {useAppSelector} from './src/app/hooks';

import GroceryList from './src/components/GroceryList';
import {COLORS} from './src/constants/Colors';
import {getLists} from './src/features/groceryList/groceryListsSlice';

function App(): JSX.Element {
  const lists = useAppSelector(getLists);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.caribbean}
      />
      <GroceryList listData={lists[0]} />
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
