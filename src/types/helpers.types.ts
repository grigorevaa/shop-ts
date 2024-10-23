export type Product = {
	id: number;
	name: string;
	description: string;
	img: string;
	price: number;
	rating: number;
};

export type CategoryWithProducts = {
	id: number;
	name: string;
	products: Product[];
};
