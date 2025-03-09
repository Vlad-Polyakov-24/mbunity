import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames(styles.intro, {}, [className])}>
		<Container>
			<h1>Contact page</h1>
		</Container>
	</section>
);

export { SectionIntro };