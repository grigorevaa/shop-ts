import supabase from './supabase';

export const login = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		throw new Error(error.message);
	}

	return data;
};

export const signup = async (
	email: string,
	password: string,
	firstName: string,
	lastName: string,
) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				firstName,
				lastName,
			},
		},
	});

	if (error) {
		throw new Error(error.message);
	}

	return data;
};
