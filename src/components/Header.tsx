import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ProfileAndCart } from './ProfileAndCart';
import { Search } from './Search';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<div className="header">
			<div className="container">
				<Link to="/">
					<Logo />
				</Link>
				<Search />
				<ProfileAndCart />
			</div>
		</div>
	);
};
