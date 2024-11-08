import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logout, updateUser } from '../../redux/auth/asyncActions';
import { clearLocalCart } from '../../redux/cart/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { FormInput } from './FormInput';
import { profileSchema, TProfileValues } from './schemas';

interface Props {
	className?: string;
}

export const Profile: React.FC<Props> = () => {
	const { user } = useAppSelector(state => state.auth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const defaultValues = {
		email: user?.email || '',
		password: '',
		confirmPassword: '',
		firstName: user?.user_metadata.firstName || '',
		lastName: user?.user_metadata.lastName || '',
	};

	const form = useForm({
		resolver: zodResolver(profileSchema),
		defaultValues,
	});

	useEffect(() => {
		form.reset(defaultValues);
	}, [user]);

	const onSubmit = async (data: TProfileValues) => {
		try {
			await dispatch(
				updateUser({
					firstName: data.firstName,
					lastName: data.lastName,
					password: data.password,
				}),
			).unwrap();
			toast.success('Данные успешно изменены');
			navigate('/');
		} catch (error) {
			console.log(error);
			toast.error('Произошла ошибка при изменении данных');
		}
	};

	const onSignOut = () => {
		dispatch(clearLocalCart());
		dispatch(logout());
		navigate('/');
	};

	return (
		<div className="profile-page">
			<div className="container">
				<FormProvider {...form}>
					<form className="form" onSubmit={form.handleSubmit(onSubmit)}>
						<div className="form__content-profile">
							<div className="form__header">
								<h3 className="form__title">Личные данные</h3>
								<p className="form__subtitle">
									Введите данные, чтобы изменить их
								</p>
							</div>

							<FormInput label="Email" name="email" disabled />
							<FormInput label="Имя" name="firstName" />
							<FormInput label="Фамилия" name="lastName" />
							<FormInput label="Пароль" name="password" type="password" />
							<FormInput
								label="Повторите пароль"
								name="confirmPassword"
								type="password"
							/>

							<div className="form__buttons">
								<button
									className="primary-button"
									type="submit"
									disabled={form.formState.isSubmitting}>
									Изменить данные
								</button>
								<button
									className="primary-button"
									onClick={onSignOut}
									type="button"
									disabled={form.formState.isSubmitting}>
									Выйти из аккаунта
								</button>
							</div>
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	);
};
