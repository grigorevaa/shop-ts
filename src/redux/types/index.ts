export type CategoryWithProducts = {
	id: number;
	name: string;
	products: Product[];
};

export type Product = {
	id: number;
	name: string;
	description: string;
	img: string;
	price: number;
	rating: number;
};

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export interface SearchSliceState {
	items: Product[];
	status: Status;
}

export interface ProductSliceState {
	product: Product | null;
	status: Status;
}

export interface CategoriesSliceState {
	categories: CategoryWithProducts[];
	status: Status;
}
