import { User } from '@supabase/supabase-js';

export type Product = {
	id: number;
	name: string;
	description: string;
	img: string;
	price: number;
	rating: number;
	category: number;
};

export enum Status {
	IDLE = 'idle',
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export type CategoryWithProducts = {
	id: number;
	name: string;
	products: Product[];
};

export type CartItem = {
	products: Product | null;
	quantity: number;
};

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

export interface AuthSliceState {
	user: User | null;
	status: Status;
}

export interface CartSliceState {
	cartId: number | null;
	totalPrice: number;
	items: CartItem[];
	status: Status;
}
