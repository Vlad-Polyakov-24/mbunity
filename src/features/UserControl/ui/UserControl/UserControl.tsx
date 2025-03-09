'use client';

import { useEffect, useRef } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useToggle } from '@shared/hooks/useToggle';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
import { UserTooltip } from '../UserTooltip/UserTooltip';
import { CartTooltip } from '../CartTooltip/CartTooltip';
import { list } from '../../model/data/userControl.data';
import { UserControlTypes } from '../../model/types/UserControl.types';
import styles from './UserControl.module.scss';

type UserControlProps = {
	className?: string;
};

const UserControl = ({ className }: UserControlProps) => {
	const { isOpen: isUserOpen, open: openUser, close: closeUser } = useToggle();
	const { isOpen: isCartOpen, open: openCart, close: closeCart } = useToggle();
	const tooltipUserRef = useRef<HTMLDivElement>(null);
	const tooltipCartRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (tooltipUserRef.current && !tooltipUserRef.current.contains(event.target as Node)) {
				closeUser();
			}
			if (tooltipCartRef.current && !tooltipCartRef.current.contains(event.target as Node)) {
				closeCart();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => document.removeEventListener('click', handleClickOutside);
	}, [closeCart, closeUser]);

	const data = {
		[UserControlTypes.USER]: {
			handler: () => {
				closeCart();
				openUser();
			},
			tooltip: isUserOpen && <UserTooltip tooltipRef={tooltipUserRef} />,
		},
		[UserControlTypes.CART]: {
			handler: () => {
				closeUser();
				openCart();
			},
      tooltip: isCartOpen && <CartTooltip tooltipRef={tooltipCartRef} />,
		},
	};

	return (
		<ul className={classNames(styles.control, {}, [className])}>
			{list.map(({ icon, type }, i) => (
				<li key={i} className={styles.control__item}>
					<Button
						className={styles.control__btn}
						theme={ButtonTheme.CLEAR}
						size={ButtonSize.TEXT}
						onClick={data[type].handler}
					>
						<Icon icon={icon} size={IconSize.SIZE_30} />
					</Button>
					{data[type].tooltip}
				</li>
			))}
		</ul>
	);
};

export default UserControl;