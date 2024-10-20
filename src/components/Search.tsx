import { Search as SearchIcon, X } from 'lucide-react';

export const Search: React.FC = () => {
	return (
		<div className="search-bar">
			<div className="icon">
				<SearchIcon width={22} height={22} />
			</div>
			<input type="text" placeholder="Search" />
			<button className="clear-button">
				<X width={22} height={22} />
			</button>
		</div>
	);
};
