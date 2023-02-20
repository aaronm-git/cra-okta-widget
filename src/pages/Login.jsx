import MainLayout from 'components/layouts/MainLayout';
// components
import OktaWidget from 'components/OktaWidget';

export default function Login() {
	return (
		<MainLayout>
			<OktaWidget onSuccess={(tokens) => console.log('Success', tokens)} onError={(err) => console.error('Error', err)} />
		</MainLayout>
	);
}
