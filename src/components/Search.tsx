import { Search as SearchIcon, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { fetchSearchList } from '../redux/search/asyncActions';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { SearchItem } from './SearchItem';

export const Search: React.FC = () => {
	const { items: searchedProducts, status } = useAppSelector(
		state => state.search,
	);
	const dispatch = useAppDispatch();
	const [searchStr, setSearchStr] = useState('');
	const [focused, setFocused] = useState(false);
	const ref = useRef(null);

	useClickAway(ref, () => {
		setFocused(false);
	});

	useDebounce(
		() => {
			dispatch(fetchSearchList(searchStr));
		},
		500,
		[searchStr],
	);

	const onSelectItem = () => {
		setSearchStr('');
		setFocused(false);
	};

	return (
		<>
			{focused && <div className="search-blackout" />}

			<div className="search-bar" ref={ref}>
				<div className="icon">
					<SearchIcon width={22} height={22} />
				</div>
				<input
					type="text"
					placeholder="Поиск..."
					value={searchStr}
					onChange={e => setSearchStr(e.target.value)}
					onFocus={() => setFocused(true)}
				/>
				{searchStr && (
					<button className="clear-button" onClick={() => setSearchStr('')}>
						<X width={22} height={22} />
					</button>
				)}

				{searchedProducts.length > 0 && (
					<div className={`search-popup${focused ? '-visible' : ''}`}>
						{searchedProducts.slice(0, 5).map(item => (
							<SearchItem
								key={item.id}
								item={item}
								onSelectItem={onSelectItem}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
};
