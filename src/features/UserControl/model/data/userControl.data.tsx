import { UserControlTypes } from '../types/UserControl.types';
import UserIcon from '@shared/assets/icons/user.svg';
import CartIcon from '@shared/assets/icons/cart.svg';

export const list = [
	{
		type: UserControlTypes.USER,
		icon: <UserIcon />,
	},
	{
		type: UserControlTypes.CART,
		icon: <CartIcon />,
	},
];

export const userList = [
	{
		label: 'Settings',
	},
	{
		label: 'Logout',
	},
];