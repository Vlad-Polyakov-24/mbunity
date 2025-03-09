import { NavigationList } from '../NavigationList/NavigationList';

type NavigationClientProps = {
	className?: string;
	handleCloseMenu?: () => void;
	pathname?: string;
};

const Navigation = ({ className, handleCloseMenu, pathname }: NavigationClientProps) => (
	<nav className={className}>
		<NavigationList handleCloseMenu={handleCloseMenu} pathname={pathname} />
	</nav>
);

export default Navigation;