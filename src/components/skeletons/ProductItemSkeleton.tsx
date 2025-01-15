interface Props {
	className?: string;
}

export const ProductItemSkeleton: React.FC<Props> = ({ className }) => {
	return <div className={className}></div>;
};
