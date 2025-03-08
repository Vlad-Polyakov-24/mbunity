import { Button, ButtonTheme, ButtonType } from '@shared/ui/Button';

const NotFound = () => (
	<div className={'not-found-page'}>
		<h1>Page not found</h1>
		<Button as={ButtonType.LINK} theme={ButtonTheme.WHITE}>Home page</Button>
	</div>
);

export default NotFound;