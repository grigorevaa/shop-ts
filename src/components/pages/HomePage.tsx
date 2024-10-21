import { useState } from 'react';
import { Categories } from '../Categories';
import { Sort } from '../Sort';

export const HomePage: React.FC = () => {
	const [moved, setMoved] = useState(true);

	return (
		<>
			<div
				className={`container--home ${moved ? 'container--home--moved' : ''}`}>
				<div className="content-top">
					<Categories />
					<Sort />
				</div>
			</div>

			<div className="container">
				<div className="content-bottom">
					<div className="products">aaaaaaaaaa</div>
				</div>
			</div>
		</>
	);
};
