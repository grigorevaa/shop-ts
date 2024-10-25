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
			<img src={item.img} alt={item.name} />
			<span>{item.name}</span>
		</Link>
	);
};
