import { zodResolver } from '@hookform/resolvers/zod';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/asyncActions';
import { useAppDispatch } from '../../redux/store';
import { FormInput } from './FormInput';
import { loginSchema, TLoginValues } from './schemas';

interface Props {
  onCloseModal: () => void;
}

export const Login: React.FC<Props> = ({ onCloseModal }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<TLoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: TLoginValues) => {
    try {
      await dispatch(login(data)).unwrap();
      toast.success('Вы успешно вошли в свой аккаунт');
      onCloseModal();
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Неправильный email или пароль');
    }
  };

  return (
    <FormProvider {...form}>
      <form className="form" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="form__content-login">
          <div className="form__header">
            <h3 className="form__title">Войти</h3>
            <p className="form__subtitle">Введите свои данные, чтобы войти</p>
          </div>

          <FormInput label="Email" name="email" />
          <FormInput label="Password" name="password" type="password" />
          <button
            className="primary-button"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              'Войти'
            )}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
