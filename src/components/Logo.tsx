import logoSvg from '../assets/img/logo-2.svg';

export const Logo: React.FC = () => {
	return (
		<div className="logo">
			<img src={logoSvg} alt="logo" height={48} width={48} />
			<div>
				<h1>Sweets Shop</h1>
				<span>Лучшие вкусности мира!</span>
			</div>
		</div>
	);
};
