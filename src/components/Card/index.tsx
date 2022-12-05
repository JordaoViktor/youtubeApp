import React, { memo } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text, TouchableOpacity, View, ViewStyle,
} from 'react-native';
import { useThemeAwareObject } from '@hooks/style/useThemeAwareObject';
import JordaoVictor from '@assets/images/JordaoVictor.jpg';
import { WithChildren } from '../../@types/utils';

import { createStyles } from './styles';

type CardProps = WithChildren<{
  active?: boolean;
  pressableTestID?: string;
  onPress: () => void;
  onChannelImagePress?: () => void;
  textStyle?: StyleProp<ViewStyle>;
  videoTitle: string;
  channelName: string;
  visualizationCount: string;
  timeAgo: string;
  thumbnail: ImageSourcePropType;
  channelImage: ImageSourcePropType;
  channelImageTestID: string;
  cardTextInfoTestID: string;
  cardTextTitleTestID:string;
}>

const CardComponent = ({
  channelName,
  visualizationCount,
  timeAgo,
  videoTitle,
  active,
  pressableTestID,
  onPress,
  onChannelImagePress,
  thumbnail,
  channelImage,
  channelImageTestID,
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
        source={{ uri: 'https://i.ytimg.com/vi/eZxMY6K9BZM/mqdefault.jpg' }}
        style={Styles.thumbnail}
        resizeMode="cover"
        testID="Card-Thumbnail"
      />

      <View style={Styles.channelInfoWrapper}>
        <TouchableOpacity testID={channelImageTestID} onPress={onChannelImagePress}>
          <Image source={channelImage || JordaoVictor} style={Styles.channelImage} resizeMode="contain" />
        </TouchableOpacity>

        <View style={Styles.channelTextsContainer}>
          <Text style={Styles.title} testID={cardTextTitleTestID}>{videoTitle}</Text>
          <View style={Styles.channelInfosContainer}>

            <Text style={Styles.channelInfosText} testID={cardTextInfoTestID}>
              {channelName}
              •
              {visualizationCount}
              •
              {timeAgo}
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
