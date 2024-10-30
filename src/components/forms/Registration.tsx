import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../redux/store';
import { signup } from '../../redux/users/asyncActions';
import { FormInput } from './FormInput';
import { registerSchema, TRegisterValues } from './schemas';

interface Props {
	onCloseModal: () => void;
	onChangeType: () => void;
}

export const Registration: React.FC<Props> = ({ onChangeType }) => {
	const dispatch = useAppDispatch();

	const form = useForm<TRegisterValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
			firstName: '',
			lastName: '',
		},
	});

	const onSubmit = async (data: TRegisterValues) => {
		try {
			await dispatch(
				signup({
					email: data.email,
					password: data.password,
					firstName: data.firstName,
					lastName: data.lastName,
				}),
			).unwrap();
			toast.success('Вы успешно зарегистрированы! Войдите в аккаунт');
			onChangeType();
		} catch (error) {
			console.log(error);
			toast.error('Такой email уже зарегистрирован');
		}
	};

	return (
		<FormProvider {...form}>
			<form className="form" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="form__content-registration">
					<div className="form__header">
						<h3 className="form__title">Регистрация</h3>
						<p className="form__subtitle">
							Введите свои данные, чтобы создать аккаунт
						</p>
					</div>

					<FormInput label="Email" name="email" />
					<FormInput label="Имя" name="firstName" />
					<FormInput label="Фамилия" name="lastName" />
					<FormInput label="Пароль" name="password" type="password" />
					<FormInput
						label="Подтвердите пароль"
						name="confirmPassword"
						type="password"
					/>
				</div>
				<button
					className="primary-button"
					disabled={form.formState.isSubmitting}>
					Создать аккаунт
				</button>
			</form>
		</FormProvider>
	);
};