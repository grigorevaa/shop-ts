import ContentLoader from 'react-content-loader';

interface Props {
	type: string;
}

export const Skeleton: React.FC<Props> = ({ type }) => {
	if (type === 'product-page') {
		return (
			<ContentLoader
				speed={2}
				width={1280}
				height={600}
				viewBox="0 0 1280 600"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<rect x="0" y="0" rx="50" ry="50" width="600" height="600" />
				<rect x="620" y="0" rx="10" ry="10" width="400" height="35" />
				<rect x="620" y="43" rx="10" ry="10" width="70" height="30" />
				<rect x="620" y="80" rx="10" ry="10" width="600" height="70" />
				<rect x="620" y="160" rx="10" ry="10" width="110" height="40" />
				<rect x="620" y="210" rx="10" ry="10" width="300" height="60" />
			</ContentLoader>
		);
	}

	return null;
};
