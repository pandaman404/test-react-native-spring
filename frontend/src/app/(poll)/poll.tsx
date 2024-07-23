import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoBackBtn from '../../components/GoBackBtn';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import SelectField from '../../components/SelectField';
import { mapEnumToOptions } from '../../utils/mapEnumToOptions';
import { MusicGenre } from '../../@types/MusicGenre.enum';
import InputField from '../../components/InputField';
import PressBtn from '../../components/PressBtn';

type FormData = {
  musicalGenre: string;
  email: string;
};

export default function Poll() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      musicalGenre: '',
      email: '',
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoBackBtn />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Encuesta</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={() => (
            <SelectField
              setValue={setValue}
              items={mapEnumToOptions(MusicGenre)}
              placeholder='Seleccione un estilo músical'
              error={errors.musicalGenre?.message}
            />
          )}
          name='musicalGenre'
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputField
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
