import supabase from './supabase';

export const getCategories = async () => {
	const { data, error } = await supabase
		.from('categories')
		.select('*, products(*)');

	if (error) {
		console.log(error);
		throw new Error('Cannot load products');
	}

	return data;
};
