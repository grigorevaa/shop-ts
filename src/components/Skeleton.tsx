import ContentLoader from 'react-content-loader';

interface Props {
	type: string;
}

export const Skeleton: React.FC<Props> = ({ type }) => {
	if (type === 'categories') {
		return (
			<ContentLoader
				speed={2}
				width={500}
				height={30}
				viewBox="0 0 500 30"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<rect x="0" y="1" rx="10" ry="10" width="70" height="30" />
				<rect x="90" y="1" rx="10" ry="10" width="70" height="30" />
				<rect x="180" y="1" rx="10" ry="10" width="70" height="30" />
				<rect x="270" y="1" rx="10" ry="10" width="70" height="30" />
			</ContentLoader>
		);
	}

	if (type === 'category-with-products') {
		return (
			<ContentLoader
				speed={2}
				width={1300}
				height={900}
				viewBox="0 0 1300 900"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<rect x="0" y="40" rx="10" ry="10" width="200" height="40" />
				<rect x="0" y="100" rx="50" ry="50" width="290" height="280" />
				<rect x="0" y="395" rx="10" ry="10" width="290" height="70" />
				<rect x="0" y="480" rx="10" ry="10" width="290" height="40" />

				<rect x="336" y="100" rx="50" ry="50" width="290" height="280" />
				<rect x="336" y="395" rx="10" ry="10" width="290" height="70" />
				<rect x="336" y="480" rx="10" ry="10" width="290" height="40" />

				<rect x="672" y="100" rx="50" ry="50" width="290" height="280" />
				<rect x="672" y="395" rx="10" ry="10" width="290" height="70" />
				<rect x="672" y="480" rx="10" ry="10" width="290" height="40" />

				<rect x="1008" y="100" rx="50" ry="50" width="290" height="280" />
				<rect x="1008" y="395" rx="10" ry="10" width="290" height="70" />
				<rect x="1008" y="480" rx="10" ry="10" width="290" height="40" />
			</ContentLoader>
		);
	}

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

	if (type === 'cart-items') {
		return (
			<ContentLoader
				speed={2}
				width={800}
				height={340}
				viewBox="0 0 800 340"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<rect x="10" y="10" rx="10" ry="10" width="80" height="80" />
				<rect x="110" y="35" rx="10" ry="10" width="150" height="30" />
				<rect x="410" y="35" rx="10" ry="10" width="90" height="30" />
				<rect x="540" y="30" rx="10" ry="10" width="110" height="40" />
				<rect x="710" y="35" rx="10" ry="10" width="90" height="30" />

				<rect x="10" y="130" rx="10" ry="10" width="80" height="80" />
				<rect x="110" y="155" rx="10" ry="10" width="150" height="30" />
				<rect x="410" y="155" rx="10" ry="10" width="90" height="30" />
				<rect x="540" y="150" rx="10" ry="10" width="110" height="40" />
				<rect x="710" y="155" rx="10" ry="10" width="90" height="30" />

				<rect x="10" y="250" rx="10" ry="10" width="80" height="80" />
				<rect x="110" y="275" rx="10" ry="10" width="150" height="30" />
				<rect x="410" y="275" rx="10" ry="10" width="90" height="30" />
				<rect x="540" y="270" rx="10" ry="10" width="110" height="40" />
				<rect x="710" y="275" rx="10" ry="10" width="90" height="30" />
			</ContentLoader>
		);
	}

	if (type === 'cart-total-info') {
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

	if (type === 'cart-sidebar-item') {
		return (
			<ContentLoader
				speed={2}
				width={80}
				height={18}
				viewBox="0 0 80 18"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<rect x="0" y="0" rx="10" ry="10" width="80" height="18" />
			</ContentLoader>
		);
	}

	if (type === 'cart-sidebar-total') {
		return (
			<ContentLoader
				speed={2}
				width={80}
				height={20}
				viewBox="0 0 80 20"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<rect x="0" y="0" rx="10" ry="10" width="80" height="20" />
			</ContentLoader>
		);
	}

	if (type === 'product-rating') {
		return (
			<ContentLoader
				speed={2}
				width={120}
				height={24}
				viewBox="0 0 120 24"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<rect x="0" y="0" rx="10" ry="10" width="120" height="24" />
			</ContentLoader>
		);
	}

	if (type === 'product-user-rating') {
		return (
			<ContentLoader
				speed={2}
				width={600}
				height={50}
				viewBox="0 0 600 50"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<rect x="0" y="0" rx="10" ry="10" width="600" height="50" />
			</ContentLoader>
		);
	}

	return null;
};
