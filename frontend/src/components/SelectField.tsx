import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Colors } from '../constants/colors';

interface SelectFieldProps {
  onChange: (...event: any[]) => void;
  items: { label: string; value: string }[];
  placeholder: string;
  error?: string;
}

export default function SelectField({ items, onChange, placeholder, error }: SelectFieldProps) {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => {
          onChange(value);
        }}
        items={items}
        placeholder={{
          label: placeholder,
          value: null,
        }}
        style={pickerSelectStyles}
      />
      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  viewContainer: {
    borderWidth: 0.5,
    borderColor: Colors.gray,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 0,
  },
  placeholder: {
    color: Colors.gray,
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textError: {
    color: Colors.red,
    fontSize: 12,
    marginTop: 5,
  },
});
