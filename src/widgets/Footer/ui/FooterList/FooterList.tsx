import { classNames } from '@shared/lib/classNames';
import { Address } from '@features/Address';
import { Newsletter } from '@features/Newsletter';
import { FooterNavigation, FooterNavigationTheme } from '@features/Navigation';
import styles from './FooterList.module.scss';

type FooterListProps = {
	className?: string;
};

const FooterList = ({ className }: FooterListProps) => (
	<ul className={classNames(styles.list, {}, [className])}>
		<li className={styles.list__item}>
			<p className={styles.list__caption}>Reach us</p>
			<Address />
		</li>
		<li className={styles.list__item}>
			<p className={styles.list__caption}>Company</p>
			<FooterNavigation theme={FooterNavigationTheme.COMPANY} />
		</li>
		<li className={styles.list__item}>
			<p className={styles.list__caption}>Legal</p>
			<FooterNavigation theme={FooterNavigationTheme.LEGAL} />
		</li>
		<li className={styles.list__item}>
			<p className={styles.list__caption}>Quick Links</p>
			<FooterNavigation theme={FooterNavigationTheme.QUICK_LINKS} />
		</li>
		<li className={styles.list__item}>
			<Newsletter />
		</li>
	</ul>
);

export { FooterList };