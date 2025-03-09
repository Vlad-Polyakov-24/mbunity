'use client';

import { useCallback } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { newsletterSchema } from '@shared/config/validationSchemas';
import styles from './NewsletterForm.module.scss';

type NewsletterFormProps = {
	className?: string;
};

const NewsletterForm = ({ className }: NewsletterFormProps) => {

	const handleSubmit = useCallback(
		(values: { email: string }, { resetForm }: FormikHelpers<{ email: string }>) => {
			console.log('values: ', values);
			resetForm();
		},
		[]
	);

	return (
		<Formik initialValues={{ email: '' }} onSubmit={handleSubmit} validationSchema={newsletterSchema}>
			<Form className={classNames(styles.form, {}, [className])}>
				<Field
					className={styles.form__field}
					name={'email'}
					paceholder={'Your email address'}
				/>
				<Button
					type={'submit'}
					theme={ButtonTheme.CLEAR}
					size={ButtonSize.TEXT}
					className={styles.form__btn}
					text={'Subscribe'}
				/>
			</Form>
		</Formik>
	);
};

export { NewsletterForm };