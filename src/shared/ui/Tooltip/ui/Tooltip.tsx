import { forwardRef, type CSSProperties, type ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Tooltip.module.scss';

type TooltipProps = {
	className?: string;
	children: ReactNode;
	style?: CSSProperties;
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
	(props, ref) => {
		const { className, children, style } = props;

		return (
			<div ref={ref} className={classNames(styles.tooltip, {}, [className])} style={style}>
				{children}
			</div>
		);
	});

export default Tooltip;