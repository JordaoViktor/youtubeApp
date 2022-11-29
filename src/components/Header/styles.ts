import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/@types/theme';

export const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 60,
      backgroundColor: theme.color.detail,
      paddingHorizontal: 20,
    },
    image: {
      backgroundColor: 'blue',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    title: {
      fontWeight: '300',
      fontSize: 18,
    },
  });
  return styles;
};
