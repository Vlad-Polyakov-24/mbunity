import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo, LogoTheme } from '@shared/ui/Logo';
import { FooterList } from '../FooterList/FooterList';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = ({ className }: FooterProps) => (
	<footer className={classNames(styles.footer, {}, [className])}>
		<Container>
			<div className={styles.footer__inner}>
				<Logo theme={LogoTheme.FOOTER} className={'m-centred'} />
			</div>
			<div className={styles.footer__inner}>
				<FooterList />
			</div>
		</Container>
	</footer>
);

export default Footer;