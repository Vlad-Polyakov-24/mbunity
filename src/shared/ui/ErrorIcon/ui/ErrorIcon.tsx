import { classNames } from '@shared/lib/classNames';
import { Icon, IconSize } from '@shared/ui/Icon';
import ErrIcon from '@shared/assets/icons/error.svg';
import styles from './ErrorIcon.module.scss';

type ErrorIconProps = {
	className?: string;
};

const ErrorIcon = ({ className }: ErrorIconProps) => (
	<Icon icon={<ErrIcon />} size={IconSize.SIZE_20} className={classNames(styles.error, {}, [className])} />
);

export default ErrorIcon;