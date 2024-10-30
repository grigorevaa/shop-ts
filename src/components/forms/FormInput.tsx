import { X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

interface Props {
	label: string;
	name: string;
	type?: string;
}

export const FormInput: React.FC<Props> = ({ label, name, type = 'text' }) => {
	const {
		register,
		watch,
		formState: { errors },
		setValue,
	} = useFormContext();

	const value = watch(name);
	const error = errors[name]?.message as string;

	const onClickClear = () => {
		setValue(name, '', { shouldValidate: true });
	};

	return (
		<div className="form-input">
			<div className={'form-input__input'}>
				<p className="form-input__label">{label}</p>
				<input {...register(name)} type={type} />
				{value && (
					<button className="form-input__clear" onClick={onClickClear}>
						<X className="icon" />
					</button>
				)}
			</div>

			<p className={error ? 'form-input__error' : 'form-input__error-hidden'}>
				{error ? error : 'error placeholder'}
			</p>
		</div>
	);
};
