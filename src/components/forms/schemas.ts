import { z } from 'zod';

export const passwordSchema = z
	.string()
	.min(6, { message: 'Введите корректный пароль' });

export const loginSchema = z.object({
	email: z.string().email({ message: 'Введите корректную почту' }),
	password: passwordSchema,
});

export const registerSchema = z
	.object({
		email: z.string().email({ message: 'Введите корректную почту' }),
		password: passwordSchema,
		confirmPassword: passwordSchema,
		firstName: z.string().min(3, { message: 'Введите корректное имя' }),
		lastName: z.string().min(3, { message: 'Введите корректную фамилию' }),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

export type TLoginValues = z.infer<typeof loginSchema>;
export type TRegisterValues = z.infer<typeof registerSchema>;
