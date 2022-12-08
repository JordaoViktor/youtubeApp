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
import { UserTokensType, useUserInformation } from '@store/useUserInformation';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

import { youtubeDataAPI } from '@services/apis/youtubeDataAPI';

import { useYoutubeData } from '@store/useYoutubeData';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { createStyles } from './styles';

async function openLink(videoID:string, themeColor:string) {
  try {
    const url = `https://www.youtube.com/watch?v=${videoID}`;
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
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
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
      });
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

  await GoogleSignin.signOut();
};

const fetchData = async () => {
  try {
    const { data: videosInfo } = await youtubeDataAPI('videos').get(
      '',
    );

    useYoutubeData.setState(() => ({
      youtubeData: videosInfo,
    }));
  } catch (error) {
    console.log('error', error);
  }
};

export const HomeScreen = () => {
  const Styles = useThemeAwareObject(createStyles);
  const { theme } = useTheme();
  const { userInfo } = useUserInformation();

  const { youtubeData } = useYoutubeData();

  useEffect(() => {
    fetchData();
  }, [userInfo.idToken]);

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
          renderItem={({ item }) => (
            <Card
              onPress={() => openLink(item.id, theme.color.detail)}
              videoTitle={item.snippet.title}
              channelName={item.snippet.channelTitle}
              visualizationCount={item.statistics.viewCount}
              timeAgo={item.snippet.publishedAt}
              thumbnail={item?.id}
            />
          )}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};
