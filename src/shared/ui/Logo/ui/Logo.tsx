import { classNames } from '@shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme, ButtonType } from '@shared/ui/Button';
import { Routes } from '@shared/config/routes';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
};

const Logo = ({ className }: LogoProps) => (
	<strong className={classNames(styles.logo, {}, [className])}>
		<Button as={ButtonType.LINK} to={Routes.HOME} theme={ButtonTheme.CLEAR} size={ButtonSize.TEXT}>
			<LogoIcon />
		</Button>
	</strong>
);

export default Logo;