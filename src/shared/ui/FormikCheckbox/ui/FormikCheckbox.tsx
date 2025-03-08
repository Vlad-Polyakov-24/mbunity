import type { InputHTMLAttributes, ReactNode } from 'react';
import { Field, useField } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { Icon, IconSize } from '@shared/ui/Icon';
import styles from './FormikCheckbox.module.scss';
import CheckIcon from '@shared/assets/icons/check.svg';

interface FormikCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	name: string;
	label?: string | ReactNode;
}

const FormikCheckbox = (props: FormikCheckboxProps) => {
	const { className, name, label, ...rest } = props;
	const [, meta] = useField(name);
	const isError = meta.touched && meta.error;

	return (
	<label className={classNames(styles.checkbox, { [styles['checkbox--error']]: isError }, [className])}>
		<Field className={styles.checkbox__input} type={'checkbox'} name={name} {...rest} />
		<div className={styles.checkbox__fake}>
			<span className={styles.checkbox__box}>
				<Icon icon={<CheckIcon />} className={styles.checkbox__icon} size={IconSize.SIZE_16} />
			</span>
			{label && <span className={styles.checkbox__label}>{label}</span>}
		</div>
	</label>
	);
};

export default FormikCheckbox;