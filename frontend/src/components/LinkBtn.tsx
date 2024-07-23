import { Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

interface LinkBtnProps {
  pathname: string;
  text: string;
}

export default function LinkBtn({ pathname, text }: LinkBtnProps) {
  return (
    <Link
      asChild
      href={{
        pathname,
      }}
    >
      <Pressable style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#14213d',
    alignSelf: 'center',
    borderRadius: 30,
  },
  text: {
    fontWeight: '500',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
    letterSpacing: 1,
  },
});
