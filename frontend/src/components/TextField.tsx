import { Noop } from 'react-hook-form';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface InputFieldProps {
  value: string;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  placeholder: string;
  error?: string;
}

export default function TextField({ value, onChange, onBlur, placeholder, error }: InputFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={styles.input}
        placeholderTextColor={Colors.gray}
      />
      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderWidth: 0.5,
    borderColor: Colors.gray,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  textError: {
    color: Colors.red,
    fontSize: 12,
    marginTop: 5,
  },
});
