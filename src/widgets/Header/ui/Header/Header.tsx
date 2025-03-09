import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { HeaderContent } from '../HeaderContent/HeaderContent';
import { Hamburger } from '@features/Hamburger';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => (
	<header className={classNames(styles.header, {}, [className])}>
		<Container className={styles.header__container}>
			<HeaderContent />
			<Hamburger />
		</Container>
	</header>
);

export default Header;