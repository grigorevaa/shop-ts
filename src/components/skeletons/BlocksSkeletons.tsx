interface Props {
	type: string;
}

export const BlocksSkeletons: React.FC<Props> = ({ type }) => {
	let className: string = 'b-s-' + type + ' skeleton';
	return <div className={className} />;
};
