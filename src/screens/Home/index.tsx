import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';

import { Header } from '@components/Header';
import { Card } from '@components/Card';
import JordaoVictor from '@assets/images/JordaoVictor.jpg';
import { useUserInformation } from '@store/useUserInformation';
import { User } from '@react-native-google-signin/google-signin';

import { youtubeDataAPI } from '@services/apis/youtubeDataAPI';
import { err } from 'react-native-svg/lib/typescript/xml';
import { youtubeAnalyticsAPI } from '@services/apis/youtubeAnalyticsAPI';
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

// thumbnail, total views count, total subscribers gained, likes

export const HomeScreen = () => {
  const Styles = useThemeAwareObject(createStyles);
  const { userInfo } = useUserInformation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const { data } = await youtubeDataAPI.get(
        //   '&myRating=like',
        // );
        //
        const { data } = await youtubeAnalyticsAPI.get('reports?startDate=2017-01-01&metrics=views%2Ccomments%2Clikes%2Cdislikes%2CestimatedMinutesWatched%2CaverageViewDuration&endDate=2018-05-01&ids=channel%3D%3DMINE');
        console.data({ data });
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
    //   const data = event.json();
    //   console.log('data', data);
    // }).catch((error) => { console.log('error', error); });
  }, []);
  return (
    <View
      style={Styles.container}
    >
      <Header
        title="My Videos"
        sourceImage={userInfo?.user?.photo || undefined}
        handleArrowPress={() => { useUserInformation.setState({ userInfo: {} as User }); }}
      />
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
