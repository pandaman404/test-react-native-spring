import { Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default function GoBackBtn() {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <AntDesign name='caretleft' size={16} color='#000000' />
      <Text style={styles.text}>Regresar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  text: {
    marginLeft: 10,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
