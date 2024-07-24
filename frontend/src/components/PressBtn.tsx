import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/colors';

interface FormBtnProps {
  title: string;
  onPress: any;
  isLoading: boolean;
}

export default function PressBtn({ title, onPress, isLoading }: FormBtnProps) {
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={isLoading}>
      {isLoading ? <ActivityIndicator size='small' color={Colors.white} /> : <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1,
  },
});
