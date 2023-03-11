import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/Colors';

type ItemProps = {
  title: string;
};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.caribbean,
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 2,
    marginBottom: 2,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
  },
});

export default Item;
