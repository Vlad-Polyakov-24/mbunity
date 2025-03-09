import { Routes } from '@shared/config/routes';
import { FooterNavigationTheme } from '../types/Navigation.types';

export const links = [
	{
		label: 'Home',
		href: Routes.HOME,
	},
	{
		label: 'Features',
		href: Routes.FEATURES,
		nested: [
			{
				label: 'Feature #1',
				href: `${Routes.FEATURES}/feature1`,
			},
			{
				label: 'Feature #2',
				href: `${Routes.FEATURES}/feature2`,
			},
			{
				label: 'Feature #3',
				href: `${Routes.FEATURES}/feature3`,
			},
		],
	},
	{
		label: 'Blog',
		href: Routes.BLOG,
	},
	{
		label: 'Shop',
		href: Routes.SHOP,
	},
	{
		label: 'About',
		href: Routes.ABOUT,
	},
	{
		label: 'Contact',
		href: Routes.CONTACT,
	},
];

export const footerNavigation: Record<FooterNavigationTheme, { label: string, path: string, outside?: boolean }[]> = {
	[FooterNavigationTheme.COMPANY]: [
		{
			label: 'About',
			path: Routes.ABOUT,
		},
		{
			label: 'Contact',
			path: Routes.CONTACT,
		},
		{
			label: 'Blogs',
			path: Routes.BLOG,
		},
	],
	[FooterNavigationTheme.LEGAL]: [
		{
			label: 'Privacy Policy',
			path: Routes.HOME,
		},
		{
			label: 'Terms & Services',
			path: Routes.HOME,
		},
		{
			label: 'Terms of Use',
			path: Routes.HOME,
		},
		{
			label: 'Refund Policy',
			path: Routes.HOME,
		},
	],
	[FooterNavigationTheme.QUICK_LINKS]: [
		{
			outside: true,
			label: 'Techlabz Keybox',
			path: 'https://www.google.com/',
		},
		{
			outside: true,
			label: 'Downloads',
			path: 'https://www.google.com/',
		},
		{
			outside: true,
			label: 'Forum',
			path: 'https://www.google.com/',
		},
	],
};