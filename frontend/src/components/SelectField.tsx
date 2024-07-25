import RNPickerSelect from 'react-native-picker-select';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';
import ErrorMessage from './ErrorMessage';

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
      {error && <ErrorMessage text={error} />}
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
});
