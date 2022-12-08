import React, { memo } from 'react';
import {
  Image,
  StyleProp,
  Text, TouchableOpacity, View, ViewStyle,
  Dimensions,
} from 'react-native';
import dayjs from 'dayjs';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';
import { WithChildren } from '../../@types/utils';

import { createStyles } from './styles';

type CardProps = WithChildren<{
  active?: boolean;
  pressableTestID?: string;
  onPress: () => void;
  textStyle?: StyleProp<ViewStyle>;
  videoTitle: string;
  channelName: string;
  visualizationCount: number;
  timeAgo: string;
  thumbnail: string;
  cardTextInfoTestID: string;
  cardTextTitleTestID:string;
}>

const screenWidth = Dimensions.get('window').width;

const CardComponent = ({
  channelName,
  visualizationCount,
  timeAgo,
  videoTitle,
  active,
  pressableTestID,
  onPress,
  thumbnail,
  cardTextInfoTestID,
  cardTextTitleTestID,
}: CardProps) => {
  const Styles = useThemeAwareObject(createStyles);

  return (
    <TouchableOpacity
      style={Styles.container}
      testID={pressableTestID}
      disabled={!active}
      onPress={onPress}
    >
      <Image
        source={{ uri: `https://i.ytimg.com/vi/${thumbnail}/mqdefault.jpg` }}
        style={Styles.thumbnail}
        // @ts-ignore
        width={screenWidth}
        height={200}
        resizeMode="cover"
        testID="Card-Thumbnail"
      />

      <View style={Styles.channelInfoWrapper}>

        <View style={Styles.channelTextsContainer}>
          <Text style={Styles.title} testID={cardTextTitleTestID}>{videoTitle}</Text>
          <View style={Styles.channelInfosContainer}>

            <Text style={Styles.channelInfosText} testID={cardTextInfoTestID}>
              {channelName}
              •
              {visualizationCount}
              {' '}

              views
              •
              {dayjs(timeAgo).fromNow()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

CardComponent.defaultProps = {
  active: true,
  pressableTestID: 'CardTestID',
  channelImageTestID: 'CardChannelImageTestID',
  cardTextInfoTestID: 'Card-Text-Information',
  cardTextTitleTestID: 'Card-Text-Title',
  onPress: () => {},
};

export const Card = memo(CardComponent);
