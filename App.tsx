import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useAppSelector} from './src/app/hooks';

import GroceryList from './src/components/GroceryList';
import {COLORS} from './src/constants/Colors';
import {getLists} from './src/features/groceryList/groceryListsSlice';

function App(): JSX.Element {
  const lists = useAppSelector(getLists);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={COLORS.caribbean}
        />
        <GroceryList listData={lists[0]} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.alice,
  },
});

export default App;
