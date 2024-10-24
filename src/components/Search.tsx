import { Search as SearchIcon, X } from 'lucide-react';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { fetchSearchList } from '../redux/search/asyncActions';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const Search: React.FC = () => {
	const { items: searchedProducts, status } = useAppSelector(
		state => state.search,
	);
	const dispatch = useAppDispatch();
	const [searchStr, setSearchStr] = useState('');

	useDebounce(
		() => {
			dispatch(fetchSearchList(searchStr));
		},
		500,
		[searchStr],
	);

	return (
		<>
			<div className="search-bar">
				<div className="icon">
					<SearchIcon width={22} height={22} />
				</div>
				<input
					type="text"
					placeholder="Поиск..."
					value={searchStr}
					onChange={e => setSearchStr(e.target.value)}
				/>
				<button className="clear-button">
					<X width={22} height={22} />
				</button>
			</div>
		</>
	);
};
