import { classNames } from '@shared/lib/classNames';
import { NewsletterForm } from '../NewsletterForm/NewsletterForm';
import styles from './Newsletter.module.scss';

type NewsletterProps = {
	className?: string;
};

const Newsletter = ({ className }: NewsletterProps) => (
	<div className={classNames(styles.newsletter, {}, [className])}>
		<h2 className={styles.newsletter__title}>Join Our Newsletter</h2>
		<NewsletterForm className={styles.newsletter__form} />
		<p className={styles.newsletter__info}>*  Will send you weekly updates for your better tool management.</p>
	</div>
);

export default Newsletter;