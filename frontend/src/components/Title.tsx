import { Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 20,
    color: Colors.yellow,
    borderBottomWidth: 0.25,
    borderBottomColor: Colors.lightGray,
    width: '100%',
    textAlign: 'center',
    paddingBottom: 5,
  },
});
