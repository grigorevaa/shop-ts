import supabase from './supabase';

export const getSearchedProducts = async (searchStr: string) => {
	const { data, error } = await supabase
		.from('products')
		.select()
		.ilike('name', `%${searchStr}%`);

	if (error) {
		console.log(error);
		throw new Error('Cannot load products');
	}

	return data;
};

export const getProduct = async (id: number) => {
	const { data, error } = await supabase
		.from('products')
		.select()
		.eq('id', id)
		.single();

	if (error) {
		console.log(error);
		throw new Error('Cannot load product with id: ' + id);
	}

	return data;
};
