import { Text, Pressable, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../@types/AppStackNavigator';

export default function GoBackBtn() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Home')}>
      <AntDesign name='caretleft' size={16} color={Colors.black} />
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
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
