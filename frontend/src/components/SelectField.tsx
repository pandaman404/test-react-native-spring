import { FieldValues, UseFormSetValue, Path } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  setValue: UseFormSetValue<T>;
  items: { label: string; value: string }[];
  placeholder: string;
  error?: string;
}

export default function SelectField<T extends FieldValues>({
  items,
  name,
  setValue,
  placeholder,
  error,
}: SelectFieldProps<T>) {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={(value) => {
          setValue(name, value);
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
    borderColor: 'gray',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 0,
  },
  placeholder: {
    color: 'gray',
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
