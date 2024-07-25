import { View, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoBackBtn from '../components/GoBackBtn';
import Title from '../components/Title';
import { Controller } from 'react-hook-form';
import SelectField from '../components/SelectField';
import TextField from '../components/TextField';
import PressBtn from '../components/PressBtn';
import ErrorMessage from '../components/ErrorMessage';
import { mapEnumToOptions } from '../utility/mapEnumToOptions';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MusicGenre } from '../@types/MusicGenre.enum';
import { useHandlePollForm } from '../hooks/useHandlePollForm';

export default function PollScreen() {
  const { control, handleSubmit, errors, onSubmit, isSubmitting, remoteErrorMessage } = useHandlePollForm();
  return (
    <SafeAreaView style={styles.container}>
      <GoBackBtn />
      <View style={styles.formContainer}>
        <Title text='Encuesta' />
        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <SelectField
              onChange={onChange}
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
        <PressBtn title='Enviar' onPress={handleSubmit(onSubmit)} isLoading={isSubmitting} />
        <View>{remoteErrorMessage.length > 0 && <ErrorMessage text={remoteErrorMessage} />}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: Colors.white,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    width: '75%',
    alignSelf: 'center',
    position: 'relative',
  },
});
