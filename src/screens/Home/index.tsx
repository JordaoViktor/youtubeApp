import React, { useEffect } from 'react';
import {
  View, Alert,
  Linking,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';
import { useTheme } from '@hooks/style/useTheme';
import { Header } from '@components/Header';
import { Card } from '@components/Card';
import JordaoVictor from '@assets/images/JordaoVictor.jpg';
import { UserTokensType, useUserInformation } from '@store/useUserInformation';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

import { youtubeDataAPI } from '@services/apis/youtubeDataAPI';

import { youtubeAnalyticsAPI } from '@services/apis/youtubeAnalyticsAPI';
import { useYoutubeData, YoutubeDTOItem } from '@store/useYoutubeData';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { createStyles } from './styles';

async function openLink(videoID:string, themeColor:string) {
  try {
    const url = `https://www.youtube.com/watch?v=${videoID}`;
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: themeColor,
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: themeColor,
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },

      });

      Alert.alert(JSON.stringify(result));
    } else Linking.openURL(url);
  } catch (error:any) {
    Alert.alert(error.message);
  }
}

const handleArrowPress = async () => {
  useUserInformation.setState({
    userInfo: {} as User,
    userTokens: {} as UserTokensType,
  });
  await GoogleSignin.revokeAccess();
  await GoogleSignin.signOut();
};

// thumbnail,
// total views count,
// total subscribers gained,
// likes

const fetchData = async () => {
  try {
    const { data: videosInfo } = await youtubeDataAPI.get(
      '',
    );
    useYoutubeData.setState(() => ({
      youtubeData: videosInfo,
    }));
    console.log('videos', videosInfo);
    const { data } = await youtubeAnalyticsAPI.get(
      // '/reports/metrics=views%2Clikes%2Cdislikes%2CsubscribersGained&ids=channel%3D%3DMINE',
      // 'reports?startDate=2017-01-01&metrics=metrics=views%2Clikes%2Cdislikes%2CsubscribersGained%2C&endDate=2018-05-01&ids=channel%3D%3DMINE',
      // 'startDate=2017-01-01&metrics=views%2Ccomments%2Clikes%2Cdislikes%2CsubscribersGained&endDate=2022-05-01&ids=channel%3D%3DMINE',
      '',
    );
    // console.log('data', data);
  } catch (error) {
    console.log('error', error);
  }
};

export const HomeScreen = () => {
  const Styles = useThemeAwareObject(createStyles);
  const { theme } = useTheme();
  const { userInfo } = useUserInformation();

  const { youtubeData } = useYoutubeData();

  console.log('aaa', userInfo?.user?.photo);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={Styles.container}
    >
      <Header
        title="My Videos"
        sourceImage={userInfo?.user?.photo || undefined}
        handleArrowPress={handleArrowPress}
      />
      <View style={Styles.flatlistWrapper}>
        <FlashList
          data={youtubeData.items}
          contentContainerStyle={{
            paddingBottom: 70,
          }}
          renderItem={({ item }) => {
            console.log(item.snippet.thumbnails.default.url);
            return (
              <Card
                onPress={() => openLink(item.id, theme.color.detail)}
                videoTitle={item.snippet.title}
                channelName={item.snippet.channelTitle}
                visualizationCount="650 views"
                timeAgo="10 minutes ago"
                thumbnail={item?.id}
                channelImage={item?.snippet?.channelId}
              />
            );
          }}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};
