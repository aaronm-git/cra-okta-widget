import MainLayout from 'components/layouts/MainLayout';
// Okta
import { useOktaAuth } from '@okta/okta-react';

export default function Profile() {
	const { authState } = useOktaAuth();
	console.log('authState', authState);

	return (
		<MainLayout>
			<div className="card p-4 my-5 shadow rounded">
				<h4 className="text-muted text-uppercase">User Profile</h4>
				<div className="card-body">
					<p className="card-text">
						<strong>Name:</strong> {authState?.idToken?.claims?.name}
					</p>
					<p className="card-text">
						<strong>Username:</strong> {authState?.idToken?.claims?.preferred_username}
					</p>
					<p className="card-text">
						<strong>Email:</strong> {authState?.idToken?.claims?.email}
					</p>
				</div>
			</div>
		</MainLayout>
	);
}
