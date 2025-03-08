import { classNames } from '@shared/lib/classNames';
import { NavigationList } from '../NavigationList/NavigationList';
import styles from './NavigationPC.module.scss';

type NavigationPCProps = {
	className?: string;
};

const NavigationPC = ({ className }: NavigationPCProps) => (
	<nav className={classNames(styles.nav, {}, [className])}>
		<NavigationList />
	</nav>
);

export default NavigationPC;