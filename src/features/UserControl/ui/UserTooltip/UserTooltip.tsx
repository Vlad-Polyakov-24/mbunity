import type { RefObject } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Tooltip } from '@shared/ui/Tooltip';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { userList } from '../../model/data/userControl.data';
import styles from './UserTooltip.module.scss';

type UserTooltipProps = {
	className?: string;
	tooltipRef: RefObject<HTMLDivElement | null>;
};

const UserTooltip = ({ className, tooltipRef }: UserTooltipProps) => {

	const handleClick = (caption: string) => {
		alert(`${caption} logic`);
	};

	return (
		<Tooltip ref={tooltipRef} className={classNames(styles.tooltip, {}, [className])}>
			<ul className={styles.tooltip__list}>
				{userList.map(({ label }) => (
					<li key={label}>
						<Button
							theme={ButtonTheme.CLEAR}
							size={ButtonSize.TEXT}
							className={styles.tooltip__btn}
							text={label}
							onClick={() => handleClick(label)}
						/>
					</li>
				))}
			</ul>
		</Tooltip>
	);
};

export { UserTooltip };