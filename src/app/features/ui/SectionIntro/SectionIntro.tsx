import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames('', {}, [className])}>
		<Container>
			<h1>Features page</h1>
		</Container>
	</section>
);

export { SectionIntro };