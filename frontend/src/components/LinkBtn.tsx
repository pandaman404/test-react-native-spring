import { Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../@types/AppStackNavigator';

interface LinkBtnProps {
  pathname: string;
  text: string;
}

export default function LinkBtn({ pathname, text }: LinkBtnProps) {
  const navigation = useNavigation<NavigationProps>();
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Poll')}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    width: '50%',
    backgroundColor: Colors.blue,
    alignSelf: 'center',
    borderRadius: 30,
  },
  text: {
    fontWeight: '500',
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 1,
  },
});
