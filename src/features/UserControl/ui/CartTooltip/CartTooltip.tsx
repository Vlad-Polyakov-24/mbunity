import type { RefObject } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Tooltip } from '@shared/ui/Tooltip';
import styles from './CartTooltip.module.scss';

type CartTooltipProps = {
	className?: string;
	tooltipRef: RefObject<HTMLDivElement | null>;
};

const CartTooltip = ({ className, tooltipRef }: CartTooltipProps) => (
	<Tooltip ref={tooltipRef} className={classNames(styles.tooltip, {}, [className])}>
		<p className={styles.tooltip__caption}>Cart:</p>
		<p className={styles.tooltip__empty}>Empty</p>
	</Tooltip>
);

export { CartTooltip };