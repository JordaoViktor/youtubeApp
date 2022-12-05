import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../theme/@types/theme';

const { width } = Dimensions.get('window');
export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.secondary,
    },
    title: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.color.primary,
    },
    thumbnail: {
      height: 200,
      width: '100%',
    },

    channelImage: {
      backgroundColor: 'blue',
      width: 30,
      height: 30,
      borderRadius: 25,
      marginTop: 10,
      marginRight: 5,
    },

    channelTextsContainer: {
      paddingLeft: 10,
      paddingTop: 10,
      width: '90%',
    },
    channelImageWrapper: {
    },
    channelInfoWrapper: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      width: '100%',
    },
    channelInfosContainer: {
      paddingBottom: 10,
      flexWrap: 'wrap',
    },
    channelInfosText: {
      fontSize: 14,
      fontWeight: '300',
      color: theme.color.primary,
      flexWrap: 'wrap',
      maxWidth: width - 70,
    },
  });
  return styles;
};
