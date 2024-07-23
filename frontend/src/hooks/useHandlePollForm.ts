import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface FormData {
  musicGenre: string;
  email: string;
}

const schema = object({
  musicGenre: string().required('Estilo músical es requerido'),
  email: string().email('Formato de correo invalido').required('Correo es requerido'),
});

export function useHandlePollForm() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return {
    control,
    handleSubmit,
    setValue,
    errors,
    onSubmit,
  };
}
