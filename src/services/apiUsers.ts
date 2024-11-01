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

	if (!error && data) {
		await supabase
			.from('carts')
			.insert([{ totalPrice: 0, userId: data.user?.id }])
			.select();
	}

	if (error) {
		throw new Error(error.message);
	}

	return data;
};

export const logout = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) {
		throw new Error(error.message);
	}
};

export const getUser = async () => {
	const { data, error } = await supabase.auth.getUser();

	if (error) {
		throw new Error(error.message);
	}

	return data;
};
