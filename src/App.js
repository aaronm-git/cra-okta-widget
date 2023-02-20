import { Routes, Route, useNavigate } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
// Components
import SecureRoute from 'components/SecureRoute';
// Pages
import Home from 'pages/Home';
import Login from 'pages/Login';
import Contact from 'pages/Contact';
import About from 'pages/About';
import Profile from 'pages/Profile';
// Okta
import oktaConfig from 'configs/okta';

export default function App() {
	const oktaAuth = new OktaAuth(oktaConfig);
	const navigate = useNavigate();

	const restoreOriginalUri = (_oktaAuth, originalUri) => {
		navigate(toRelativeUrl(originalUri || '/', window.location.origin));
	};
	return (
		<Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login">
					<Route index="true" exact element={<Login />} />
					<Route path="callback" element={<LoginCallback />} />
				</Route>
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="auth" element={<SecureRoute />}>
					<Route path="profile" element={<Profile />} />
				</Route>
			</Routes>
		</Security>
	);
}
