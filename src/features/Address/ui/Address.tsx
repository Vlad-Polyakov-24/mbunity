import { classNames } from '@shared/lib/classNames';
import { Icon, IconSize } from '@shared/ui/Icon';
import { data } from '../model/data/address.data';
import { AddressTheme } from '../model/types/Address.types';
import styles from './Address.module.scss';

type AddressProps = {
	className?: string;
	theme?: AddressTheme;
};

const Address = ({ className, theme = AddressTheme.PAGE }: AddressProps) => (
	<ul className={classNames(styles.address, {}, [className, styles[theme]])}>
		{data.map(({ icon, label, href }, i) => (
			<li key={i} className={styles.address__item}>
				<Icon icon={icon} size={IconSize.SIZE_24} />
				{href ? (
					<a href={href}>{label}</a>
				) : (
					<p>{label}</p>
				)}
			</li>
		))}
	</ul>
);

export default Address;