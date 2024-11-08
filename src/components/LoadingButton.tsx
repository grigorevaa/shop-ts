import { CircularProgress } from '@mui/material';

interface Props {
	className?: string;
}

export const LoadingButton: React.FC<Props> = () => {
	return (
		<button className="loading-button" disabled>
			<div className="icon">
				<CircularProgress size={18} color="inherit" />
			</div>
		</button>
	);
};
