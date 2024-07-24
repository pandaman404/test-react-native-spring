import type { Poll } from '../@types/Poll';
import type { MusicGenre } from '../@types/MusicGenre.enum';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { createPoll } from '../api/pollService';
import { emailPattern } from '../constants/validator-patterns';
import { useState } from 'react';
import { HttpStatusCode } from 'axios';
import { Keyboard } from 'react-native';

interface FormData {
  musicGenre: string;
  email: string;
}

const schema = object({
  musicGenre: string().required('Estilo músical es requerido'),
  email: string().matches(emailPattern, 'Formato de correo invalido').required('Correo es requerido'),
});

export function useHandlePollForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [remoteErrorMessage, setRemoteErrorMessage] = useState<string>('');

  const onSubmit = async (data: FormData) => {
    Keyboard.dismiss();
    setRemoteErrorMessage('');
    try {
      if (isValid) {
        const { email, musicGenre } = data;

        let newPoll: Poll = {
          id: null,
          email: email,
          musicGenre: musicGenre as MusicGenre,
        };

        const res = await createPoll(newPoll);
        if (res.code === HttpStatusCode.Created) {
          reset();
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setRemoteErrorMessage(error.message);
        console.log('catch onsubmit');
      }
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
    remoteErrorMessage,
  };
}
