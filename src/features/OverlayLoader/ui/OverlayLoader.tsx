import { classNames } from '@shared/lib/classNames';
import { Loader } from '@shared/ui/Loader';
import styles from './OverlayLoader.module.scss';

type OverlayLoaderProps = {
	className?: string;
};

const OverlayLoader = ({ className }: OverlayLoaderProps) => (
	<div className={classNames(styles['overlay-loader'], {}, [className])}><Loader /></div>
);

export default OverlayLoader;