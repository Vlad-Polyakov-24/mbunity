import Link from 'next/link';
import { classNames } from '@shared/lib/classNames';
import { footerNavigation } from '../../model/data/navigation.data';
import { FooterNavigationTheme } from '../../model/types/Navigation.types';
import styles from './FooterNavigation.module.scss';

type FooterNavigationProps = {
	className?: string;
	theme: FooterNavigationTheme;
};

const FooterNavigation = ({ className, theme }: FooterNavigationProps) => (
	<ul className={classNames(styles.list, {}, [className])}>
		{footerNavigation[theme].map(({ label, path, outside }) => (
			<li key={label}>
				{outside ? (
					<a href={path} className={styles.list__link}>{label}</a>
				) : (
					<Link href={path} className={styles.list__link}>{label}</Link>
				)}
			</li>
		))}
	</ul>
);

export default FooterNavigation;