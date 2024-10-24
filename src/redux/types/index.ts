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

export interface ProductsSliceState {
	items: Product[];
	status: Status;
}

export interface SearchSliceState {
	items: Product[];
	status: Status;
}
