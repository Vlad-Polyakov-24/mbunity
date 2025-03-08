'use client';

import { useCallback, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { classNames } from '@shared/lib/classNames';
import { Button, ButtonTheme, ButtonType } from '@shared/ui/Button';
import { NavigationList } from '../NavigationList/NavigationList';
import { appStore } from '@entities/App';
import { Routes } from '@shared/config/routes';
import { NavigationListTheme } from '../../model/types/Navigation.types';
import styles from './NavigationMobile.module.scss';

type NavigationMobileProps = {
	className?: string;
};

const NavigationMobile = ({ className }: NavigationMobileProps) => {
	const { isMobileNav, set } = appStore();
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const nav = navRef.current;

		if (!nav) return;

		if (isMobileNav) {
			disableBodyScroll(nav);
		} else {
			enableBodyScroll(nav);
		}

		return () => enableBodyScroll(nav);
	}, [isMobileNav]);

	const handleCloseMenu = useCallback(() => {
		set({ isMobileNav: false });
	}, [set]);

	return (
		<nav
			ref={navRef}
			className={classNames(styles.nav, { [styles.open]: isMobileNav }, [className])}
			onClick={() => set({ isMobileNav: false })}
		>
			<div
				className={styles.nav__inner}
				onClick={(e) => e.stopPropagation()}
			>
				<NavigationList theme={NavigationListTheme.MOBILE} />
				<Button
					as={ButtonType.LINK}
					to={Routes.CONTACTS}
					theme={ButtonTheme.OUTLINE}
					text={'Envía tu solicitud'}
					className={'m-centred mt-32'}
					onClick={handleCloseMenu}
				/>
			</div>
		</nav>
	);
};

export default NavigationMobile;