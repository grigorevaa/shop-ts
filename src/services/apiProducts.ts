import supabase from './supabase';

export const getSearchedProducts = async (searchStr: string) => {
	const { data, error } = await supabase
		.from('products')
		.select()
		.like('name', `%${searchStr}%`);

	if (error) {
		console.log(error);
		throw new Error('Cannot load products');
	}

	return data;
};
