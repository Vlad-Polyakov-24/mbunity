import { classNames } from '@shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme, ButtonType } from '@shared/ui/Button';
import { Routes } from '@shared/config/routes';
import { LogoTheme } from '@shared/ui/Logo';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
	theme?: LogoTheme;
};

const Logo = ({ className, theme = LogoTheme.HEADER }: LogoProps) => (
	<strong className={classNames(styles.logo, {}, [className, styles[theme]])}>
		<Button as={ButtonType.LINK} to={Routes.HOME} theme={ButtonTheme.CLEAR} size={ButtonSize.TEXT}>
			<LogoIcon />
		</Button>
	</strong>
);

export default Logo;