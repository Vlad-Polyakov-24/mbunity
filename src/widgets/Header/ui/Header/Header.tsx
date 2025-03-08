import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import { HeaderContent } from '../HeaderContent/HeaderContent';
import { Hamburger } from '@features/Hamburger';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = ({ className }: HeaderProps) => {

	return (
		<header className={classNames(styles.header, {}, [className])}>
			<Container className={styles.header__container}>
				<Logo className={styles.header__logo} />
				<HeaderContent />
				<Hamburger />
			</Container>
		</header>
	);
};

export default Header;