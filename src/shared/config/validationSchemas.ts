import * as yup from 'yup';
import NewsletterForm from '@features/Newsletter/ui/NewsletterForm/NewsletterForm';

export const contactsSchema = yup.object().shape({
	first_name: yup
		.string()
		.trim()
		.required('El campo es obligatorio')
		.max(24, 'El primer nombre debe tener menos de 24 caracteres'),
	last_name: yup
		.string()
		.trim()
		.required('El campo es obligatorio')
		.max(24, 'El apellido debe tener menos de 24 caracteres'),
	birthday: yup
		.date()
		.required('La fecha de nacimiento es obligatoria'),
	email: yup
		.string()
		.trim()
		.email('Dirección de correo electrónico no válida')
		.required('El correo electrónico es obligatorio'),
	contact_number: yup
		.string()
		.required('Introduzca el número de teléfono')
		.matches(
			/^\+52\s\(\d{3}\)\s\d{3}-\d{4}$/,
			'Formato de número incorrecto. Debe ser +52 (000) 000-0000'
		),
	mailing: yup.boolean().default(false),
	conditions: yup
		.boolean()
		.oneOf([true], 'Debes aceptar los términos y condiciones'),
});

export const newsletterSchema = yup.object().shape({
	email: yup
		.string()
		.trim()
		.email('Invalid email address')
		.required('Email is required'),
});
