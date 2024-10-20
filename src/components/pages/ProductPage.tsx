import { Sidebar } from '../Sidebar';

interface Props {
	className?: string;
}

export const ProductPage: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Sidebar />
		</div>
	);
};
