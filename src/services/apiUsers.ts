import supabase from './supabase';

export const login = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		throw new Error(error.message);
	}

	localStorage.setItem('user', JSON.stringify(data.user));

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
	localStorage.removeItem('user');
	if (error) {
		throw new Error(error.message);
	}
};

export const getUser = async () => {
	const { data: session } = await supabase.auth.getSession();
	if (!session.session) return null;

	const { data, error } = await supabase.auth.getUser();

	if (error) {
		throw new Error(error.message);
	}

	return data?.user;
};

export const updateUser = async (
	firstName: string,
	lastName: string,
	password?: string,
) => {
	const updateObj = {
		password,
		data: {
			firstName,
			lastName,
		},
	};

	if (!password) {
		delete updateObj.password;
	}

	const { error: updateError } = await supabase.auth.updateUser(updateObj);
	const { data, error: getError } = await supabase.auth.getUser();
	localStorage.setItem('user', JSON.stringify(data.user));

	if (updateError || getError) {
		throw new Error(updateError?.message || getError?.message);
	}

	return data;
};
