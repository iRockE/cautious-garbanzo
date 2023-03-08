import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import GroceryList from './src/components/GroceryList';
import {COLORS} from './src/constants/Colors';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.caribbean}
      />
      <GroceryList
        items={[
          {
            id: '1',
            title: 'ice creamm',
          },
          {
            id: '2',
            title: 'milk',
          },
          {
            id: '3',
            title: 'yogurt',
          },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
