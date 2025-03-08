import { classNames } from '@shared/lib/classNames';
import { NavigationMobile, NavigationPC } from '@features/Navigation';
import styles from './HeaderContent.module.scss';

type HeaderContentProps = {
	className?: string;
};

const HeaderContent = ({ className }: HeaderContentProps) => {

	return (
		<div className={classNames(styles.content, {}, [className])}>
			<NavigationPC />
			<NavigationMobile />
		</div>
	);
};

export { HeaderContent };