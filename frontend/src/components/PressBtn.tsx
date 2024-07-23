import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

interface FormBtnProps {
  title: string;
  onPress: any;
}

export default function PressBtn({ title, onPress }: FormBtnProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* <ActivityIndicator size='small' color='#ffffff' /> */}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14213d',
    height: 50,
    width: '100%',
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
