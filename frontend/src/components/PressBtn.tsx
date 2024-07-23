import { Pressable, StyleSheet, Text } from 'react-native';

interface FormBtnProps {
  title: string;
  onPress: any;
}

export default function PressBtn({ title, onPress }: FormBtnProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCA311',
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1,
  },
});
