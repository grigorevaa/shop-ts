import { Minus, Plus } from 'lucide-react';

interface Props {
	value: number;
	onChangeInput: (value: number) => void;
	onChangeCart?: (type: 'plus' | 'minus') => void;
	disabledInput?: boolean;
}

export const CountBar: React.FC<Props> = ({
	value,
	onChangeInput,
	onChangeCart,
	disabledInput = false,
}) => {
	const onClickPlus = () => {
		onChangeInput?.(value! + 1);
		onChangeCart?.('plus');
	};

	const onClickMinus = () => {
		if (value! <= 1) return;
		onChangeInput?.(value! - 1);
		onChangeCart?.('minus');
	};

	return (
		<div className="count-bar">
			<button
				className="count-bar__button"
				onClick={onClickMinus}
				disabled={value! <= 1}>
				<Minus className="count-bar__icon" />
			</button>

			<input
				className="count-bar__input"
				value={value}
				onChange={e => onChangeInput?.(Number(e.target.value))}
				disabled={disabledInput}
				type="number"
			/>
			<button className="count-bar__button" onClick={onClickPlus}>
				<Plus className="count-bar__icon" />
			</button>
		</div>
	);
};
