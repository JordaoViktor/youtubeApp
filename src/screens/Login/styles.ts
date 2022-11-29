import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/@types/theme';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.color.surface,
      padding: 20,
    },
    mainTitle: {
      fontWeight: '600',
      fontSize: 20,
      color: theme.color.secondary,
    },
    signinWrapper: {
      width: 300,
      height: 50,
    },
  });
  return styles;
};
