import { IMaskInput } from 'react-imask';
import { ErrorMessage, useField } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { ErrorIcon } from '@shared/ui/ErrorIcon';
import styles from './FormikInput.module.scss';

interface MaskInputProps {
	className?: string;
	name: string;
	mask: string;
	label?: string;
	placeholder?: string;
}

const MaskInput = (props: MaskInputProps) => {
	const { className, label, name, ...rest } = props;
	const [field, meta, helpers] = useField(name);
	const isError = meta.touched && meta.error;

	return (
		<label className={classNames(styles.input, { [styles['input--error']]: isError }, [className])}>
			{label && <p className={styles.input__caption}>{label}</p>}
			<span className={styles.input__wrapper}>
				<IMaskInput
					className={styles.input__field}
					onAccept={(value: string) => helpers.setValue(value)}
					{...field}
					{...rest}
				/>
				<ErrorMessage name={name} render={() => <ErrorIcon />} />
			</span>
		</label>
	);
};

export default MaskInput;