import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/PrimaryNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'GroceryListManager'>;

const GroceryListManagerScreen = ({navigation}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>manager</Text>
      <Button
        onPress={() => navigation.navigate('GroceryList')}
        title="navigate"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GroceryListManagerScreen;
