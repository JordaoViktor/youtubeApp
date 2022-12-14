import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/@types/theme';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: theme.color.detail,
    },
    flatlistWrapper: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.color.secondary,
    },
  });
  return styles;
};
