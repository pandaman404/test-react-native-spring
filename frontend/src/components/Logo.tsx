import { StyleSheet, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Foundation name='music' size={60} color={Colors.blue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: Colors.yellow,
    borderRadius: 10,
  },
});
