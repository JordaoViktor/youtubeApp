import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/@types/theme';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.detail,
      borderRadius: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: '800',
      color: theme.color.primary,
    },
  });
  return styles;
};
