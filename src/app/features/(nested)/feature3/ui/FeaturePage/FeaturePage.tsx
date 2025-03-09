import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';

type FeaturePageProps = {
	className?: string;
};

const FeaturePage = ({ className }: FeaturePageProps) => (
	<>
		<Container>
			<section className={classNames('', {}, [className])}>
				<h1>Feature #3</h1>
			</section>
		</Container>
	</>
);

export default FeaturePage;