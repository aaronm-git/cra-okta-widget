import { Link } from 'react-router-dom';

export default function DevTools() {
	return (
		<div className="text-center card p-4 my-5 shadow rounded">
			<h4
				className="
				text-muted
				text-uppercase
				text-monospace
			"
			>
				Dev Tools
			</h4>
			<div className="btn-group" role="group">
				<button type="button" className="btn btn-outline-secondary" onClick={refreshPage}>
					<i className="bi bi-arrow-repeat"></i> Refresh Page
				</button>

				<button type="button" className="btn btn-outline-secondary" onClick={clearOktaCookies}>
					<i className="bi bi-building-fill-gear"></i> Clear Okta Cookies
				</button>

				<Link className="btn btn-outline-secondary" to="callback">
					<i className="bi bi-link-45deg"></i> Login Callback Page
				</Link>

				<Link to="/auth/profile" className="btn btn-outline-secondary">
					<i className="bi bi-person-circle"></i> User Profile
				</Link>
			</div>
		</div>
	);
}

const refreshPage = () => window.location.reload(false);

const clearOktaCookies = () => {
	// prompt to confirm
	if (window.confirm('Are you sure you want to clear Okta cookies?')) {
		// clear cookies
		document.cookie.split(';').forEach((c) => {
			document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
		});

		// Redirect to the login page
		window.location.href = '/login';
		return;
	}
};
