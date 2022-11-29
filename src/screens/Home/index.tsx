import React from 'react';
import {
  Text, View,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

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
      <Text>Home Screen</Text>
      <View style={{ width: 300, height: 500, backgroundColor: 'red' }}>
        <FlashList
          data={DATA}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};
