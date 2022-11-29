import React from 'react';
import {
  View,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { Header } from '@components/Header';
import { Card } from '@components/Card';
import JordaoVictor from '@assets/images/JordaoVictor.jpg';
import { createStyles } from './styles';

const DATA = [
  {
    title: 'First Item herhehdsadasdsadassda',
    thumbnail: JordaoVictor,
    channelImage: JordaoVictor,
  },
  {
    title: 'Second Item assaasdsadasdsadas',
    thumbnail: JordaoVictor,
    channelImage: JordaoVictor,
  },
  {
    title: 'First Item herhehdsadasdsadassda',
    thumbnail: JordaoVictor,
    channelImage: JordaoVictor,
  },
  {
    title: 'Second Item assaasdsadasdsadas',
    thumbnail: JordaoVictor,
    channelImage: JordaoVictor,
  },
  {
    title: 'First Item herhehdsadasdsadassda',
    thumbnail: JordaoVictor,
    channelImage: JordaoVictor,
  },
  {
    title: 'Second Item assaasdsadasdsadas',
    thumbnail: JordaoVictor,
    channelImage: JordaoVictor,
  },
  {
    title: 'First Item herhehdsadasdsadassda',
    thumbnail: JordaoVictor,
    channelImage: JordaoVictor,
  },
  {
    title: 'Second Item assaasdsadasdsadas',
    thumbnail: JordaoVictor,
    channelImage: JordaoVictor,
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
            <Card
              onPress={() => { }}
              videoTitle={item.title}
              channelName="Channel namedasasdadsadssaddas"
              visualizationCount="650 views"
              timeAgo="10 minutes ago"
              thumbnail={item.thumbnail}
              channelImage={item.channelImage}
            />
          )}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};
