'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { classNames } from '@shared/lib/classNames';
import { appState } from '@entities/App';
import { links } from '../../model/data/navigation.data';
import { NavigationListTheme } from '../../model/types/Navigation.types';
import styles from './NavigationList.module.scss';

type NavigationListProps = {
	className?: string;
	theme?: NavigationListTheme;
};

const NavigationList = ({ className, theme = NavigationListTheme.PC }: NavigationListProps) => {
	const { set } = appState();

	const handleCloseMenu = useCallback(() => {
		set({ isMobileNav: false });
	}, [set]);

	return (
		<ul className={classNames(styles.list, {}, [className, styles[theme]])}>
			{links.map(link => (
				<li key={link.label} className={styles.list__item}>
					<Link href={`#${link.href}`} className={styles.list__link} onClick={handleCloseMenu}>{link.label}</Link>
				</li>
			))}
		</ul>
	);
};

export { NavigationList };