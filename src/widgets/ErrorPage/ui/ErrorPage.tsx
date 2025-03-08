import { Button, ButtonTheme } from '@shared/ui/Button';

const ErrorPage = () => {

	const reloadPage = () => {
		location.reload();
	};

	return (
		<section className={'not-found-page'}>
			<h1>¡Ups, algo anda mal!</h1>
			<Button theme={ButtonTheme.WHITE} onClick={reloadPage} text={'Actualizar la página'} />
		</section>
	);
};

export { ErrorPage };
