import PhoneIcon from '@shared/assets/icons/phone.svg';
import MailIcon from '@shared/assets/icons/mail.svg';
import LocationIcon from '@shared/assets/icons/location.svg';

export const data = [
	{
		icon: <PhoneIcon />,
		label: '+1012 3456 789',
		href: 'tel:+1012 3456 789',
	},
	{
		icon: <MailIcon />,
		label: 'demo@gmail.com',
		href: 'mailto:demo@gmail.com',
	},
	{
		icon: <LocationIcon />,
		label: <>132 Dartmouth Street Boston, <br className={'br-lg'} /> Massachusetts 02156 United States</>,
	},
];