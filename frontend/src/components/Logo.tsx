import { StyleSheet, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Foundation name='music' size={60} color='#14213d' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#fca311',
    borderRadius: 10,
  },
});
