import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/@types/theme';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.detail,
    },
  });
  return styles;
};
