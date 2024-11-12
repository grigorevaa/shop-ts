import { Link } from 'react-router-dom';
import { Product } from '../redux/types';

interface Props {
	onSelectItem: () => void;
	item: Product;
}

export const SearchItem: React.FC<Props> = ({ item, onSelectItem }) => {
	return (
		<Link
			className="search-item"
			to={`/product/${item.id}`}
			onClick={onSelectItem}>
			<img className="search-item__img" src={item.img} alt={item.name} />
			<span className="search-item__name">{item.name}</span>
		</Link>
	);
};
