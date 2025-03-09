import Link from 'next/link';
import { classNames } from '@shared/lib/classNames';
import { Tooltip } from '@shared/ui/Tooltip';
import { Icon, IconSize } from '@shared/ui/Icon';
import { links } from '../../model/data/navigation.data';
import styles from './NavigationList.module.scss';
import ArrowIcon from '@shared/assets/icons/arrow-to-bottom.svg';

type NavigationListProps = {
	className?: string;
	handleCloseMenu?: () => void;
	pathname?: string;
};

const NavigationList = ({ className, handleCloseMenu, pathname }: NavigationListProps) => (
	<ul className={classNames(styles.list, {}, [className])}>
		{links.map(({ label, href, nested }) => (
			<li key={label} className={styles.list__item}>
				<Link
					href={href}
					className={classNames(styles.list__link, { [styles.active]: pathname === href }, [])}
					onClick={handleCloseMenu}
				>
					{label}
					{nested && <Icon icon={<ArrowIcon />} size={IconSize.SIZE_16} />}
				</Link>
				{nested && nested.length > 0 && (
					<Tooltip className={styles.tooltip}>
						{nested.map(({ label: subLabel, href: subHref }) => (
							<Link key={subLabel} href={subHref} className={styles.list__link} onClick={handleCloseMenu}>
								{subLabel}
							</Link>
						))}
					</Tooltip>
				)}
			</li>
		))}
	</ul>
);

export { NavigationList };