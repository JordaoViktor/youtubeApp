import React from 'react';
import {
  Text, View,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { Header } from '@components/Header';
import { createStyles } from './styles';

const DATA = [
  {
    title: 'First Item herhehdsadasdsadassda',
  },
  {
    title: 'Second Item assaasdsadasdsadas',
  },
];

export const HomeScreen = () => {
  const Styles = useThemeAwareObject(createStyles);

  return (
    <View
      style={Styles.container}
    >
      <Header title="My Videos" />
      <View style={Styles.flatlistWrapper}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};
