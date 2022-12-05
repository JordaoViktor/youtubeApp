import React, { memo } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text, TouchableOpacity, View, ViewStyle,
  Dimensions,
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
  thumbnail: string;
  channelImage: ImageSourcePropType;
  channelImageTestID: string;
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
        source={{ uri: `https://i.ytimg.com/vi/${thumbnail}/mqdefault.jpg` }}
        style={Styles.thumbnail}
        width={screenWidth}
        height={200}
        resizeMode="cover"
        testID="Card-Thumbnail"
      />

      <View style={Styles.channelInfoWrapper}>
        <TouchableOpacity style={Styles.channelImageWrapper} testID={channelImageTestID} onPress={onChannelImagePress}>
          <Image source={{ uri: `https://i.ytimg.com/vi/${channelImage}/default.jpg` || JordaoVictor }} style={Styles.channelImage} resizeMode="contain" />
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
