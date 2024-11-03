import { z } from 'zod';

export const passwordSchema = z
	.string()
	.min(6, { message: 'Введите корректный пароль (мин. 6 символов)' });

export const passwordProfileSchema = z
	.string()
	.min(6, { message: 'Введите корректный пароль (мин. 6 символов)' })
	.optional()
	.or(z.literal(''));

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

export const profileSchema = z
	.object({
		firstName: z.string().min(3, { message: 'Введите корректное имя' }),
		lastName: z.string().min(3, { message: 'Введите корректную фамилию' }),
		password: passwordProfileSchema,
		confirmPassword: passwordProfileSchema,
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

export type TLoginValues = z.infer<typeof loginSchema>;
export type TRegisterValues = z.infer<typeof registerSchema>;
export type TProfileValues = z.infer<typeof profileSchema>;
