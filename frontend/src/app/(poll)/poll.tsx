import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoBackBtn from '../../components/GoBackBtn';
import { Controller } from 'react-hook-form';
import SelectField from '../../components/SelectField';
import { mapEnumToOptions } from '../../utility/mapEnumToOptions';
import { MusicGenre } from '../../@types/MusicGenre.enum';
import TextField from '../../components/TextField';
import PressBtn from '../../components/PressBtn';
import { useHandlePollForm } from '../../hooks/useHandlePollForm';

export default function Poll() {
  const { control, handleSubmit, setValue, errors, onSubmit } = useHandlePollForm();

  return (
    <SafeAreaView style={styles.container}>
      <GoBackBtn />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Encuesta</Text>
        <Controller
          control={control}
          render={() => (
            <SelectField
              name='musicGenre'
              setValue={setValue}
              items={mapEnumToOptions(MusicGenre)}
              placeholder='Seleccione estilo músical'
              error={errors.musicGenre?.message}
            />
          )}
          name='musicGenre'
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder='johndoe@email.org'
              error={errors.email?.message}
            />
          )}
          name='email'
        />
        <PressBtn title='Enviar' onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: '#fffff',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    width: '75%',
    alignSelf: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 20,
    color: '#000000',
    borderBottomWidth: 0.25,
    borderBottomColor: 'gray',
    width: '100%',
    textAlign: 'center',
    paddingBottom: 5,
  },
});
