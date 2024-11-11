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

export const getUserRating = async (productId: number, userId: string) => {
	const { data, error } = await supabase
		.from('ratings')
		.select()
		.eq('productId', productId)
		.eq('userId', userId)
		.maybeSingle();

	if (error) {
		console.log(error);
		throw new Error(
			'Cannot load user rating for product with id: ' + productId,
		);
	}

	if (!data) {
		return null;
	}

	return data.rating;
};

export const setUserRating = async (
	productId: number,
	userId: string,
	currentRating: number,
	ratingCount: number,
	userRating: number,
) => {
	const newRatingCount = ratingCount + 1;
	const newRating = (currentRating * ratingCount + userRating) / newRatingCount;

	const { error: errorRating } = await supabase
		.from('ratings')
		.insert([{ productId, userId, rating: userRating }])
		.select()
		.single();

	if (errorRating) {
		console.log(errorRating);
		throw new Error('Cannot set user rating for product with id: ' + productId);
	}

	const { error: errorProduct } = await supabase
		.from('products')
		.update({
			rating: newRating,
			ratingCount: newRatingCount,
		})
		.eq('id', productId);

	if (errorProduct) {
		console.log(errorProduct);
		throw new Error('Cannot set rating for product with id: ' + productId);
	}

	return { userRating, newRating, newRatingCount };
};

export const updateUserRating = async (
	productId: number,
	userId: string,
	currentRating: number,
	currentUserRating: number,
	ratingCount: number,
	newUserRating: number,
) => {
	const newRating =
		(currentRating * ratingCount - currentUserRating + newUserRating) /
		ratingCount;

	const { error: errorRating } = await supabase
		.from('ratings')
		.update({ rating: newUserRating })
		.eq('productId', productId)
		.eq('userId', userId);

	if (errorRating) {
		console.log(errorRating);
		throw new Error('Cannot set user rating for product with id: ' + productId);
	}

	const { error: errorProduct } = await supabase
		.from('products')
		.update({
			rating: newRating,
		})
		.eq('id', productId);

	if (errorProduct) {
		console.log(errorProduct);
		throw new Error('Cannot set rating for product with id: ' + productId);
	}

	return { newRating, newUserRating };
};
