import _ from 'lodash';
import { CategoryWithProducts } from './../redux/types/index';
export const sortCategories = (
	categories: CategoryWithProducts[],
	sortBy: string,
) => {
	const sortedCategories = _.cloneDeep(categories);
	const compareFunction = (a: any, b: any) => {
		switch (sortBy) {
			case 'rating-desc': {
				return b.rating - a.rating;
			}
			case 'rating-asc': {
				return a.rating - b.rating;
			}
			case 'price-asc': {
				return a.price - b.price;
			}
			case 'price-desc': {
				return b.price - a.price;
			}
			case 'alphabet': {
				return a.name.localeCompare(b.name);
			}
			default: {
				return 0;
			}
		}
	};

	sortedCategories.forEach(category => {
		category.products.sort(compareFunction);
	});

	return sortedCategories;
};
