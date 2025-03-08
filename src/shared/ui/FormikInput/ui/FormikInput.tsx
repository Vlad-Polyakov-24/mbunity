import type { InputHTMLAttributes } from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { ErrorIcon } from '@shared/ui/ErrorIcon';
import styles from './FormikInput.module.scss';

interface FormikInputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
}

const FormikInput = (props: FormikInputProps) => {
	const { className, label, type = 'text', ...rest } = props;
	const [field, meta] = useField(rest.name!);
	const isError = meta.touched && meta.error;

	return (
		<label className={classNames(styles.input, { [styles['input--error']]: isError }, [className])}>
			{label && <p className={styles.input__caption}>{label}</p>}
			<span className={styles.input__wrapper}>
				<Field className={styles.input__field} type={type} {...rest} {...field} />
				{isError && rest.name && <ErrorMessage name={rest.name} render={() => <ErrorIcon />} />}
			</span>
		</label>
	);
};

export default FormikInput;