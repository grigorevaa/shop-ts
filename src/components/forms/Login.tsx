import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAppDispatch } from '../../redux/store';
import { login } from '../../redux/users/asyncActions';
import { FormInput } from './FormInput';
import { loginSchema, TLoginValues } from './schemas';

interface Props {
	onCloseModal: () => void;
}

export const Login: React.FC<Props> = ({ onCloseModal }) => {
	const dispatch = useAppDispatch();

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
		} catch (error) {
			console.log(error);
			toast.error('Неправильный email или пароль');
		}
	};

	return (
		<FormProvider {...form}>
			<form className="form" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="form__content">
					<div className="form__header">
						<h3 className="form__title">Войти</h3>
						<p className="form__subtitle">Введите свои данные, чтобы войти</p>
					</div>

					<FormInput label="Email" name="email" />
					<FormInput label="Password" name="password" type="password" />
				</div>
				<button
					className="primary-button"
					disabled={form.formState.isSubmitting}>
					Войти
				</button>
			</form>
		</FormProvider>
	);
};
