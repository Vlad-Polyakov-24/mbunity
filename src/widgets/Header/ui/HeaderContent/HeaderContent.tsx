'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { classNames } from '@shared/lib/classNames';
import { Logo } from '@shared/ui/Logo';
import { Navigation } from '@features/Navigation';
import { UserControl } from '@features/UserControl';
import { appStore } from '@entities/App';
import styles from './HeaderContent.module.scss';

type HeaderContentProps = {
	className?: string;
};

const HeaderContent = ({ className }: HeaderContentProps) => {
	const { isMobileNav, set } = appStore();
	const pathname = usePathname();
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const content = contentRef.current;

		if (!content) return;

		if (isMobileNav) {
			disableBodyScroll(content);
		} else {
			enableBodyScroll(content);
		}

		return () => enableBodyScroll(content);
	}, [isMobileNav]);

	const handleCloseMenu = useCallback(() => {
		set({ isMobileNav: false });
	}, [set]);

	return (
		<>
			<Logo className={classNames(styles.logo, { [styles.open]: isMobileNav }, [])} />
			<div ref={contentRef} className={classNames(styles.content, { [styles.open]: isMobileNav }, [className])}>
				<Navigation pathname={pathname} handleCloseMenu={handleCloseMenu} />
				<UserControl />
			</div>
		</>
	);
};

export { HeaderContent };