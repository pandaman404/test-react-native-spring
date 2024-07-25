import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface ErrorMsgProps {
  text: string;
}

export default function ErrorMessage({ text }: ErrorMsgProps) {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.red,
    fontSize: 12,
  },
});
