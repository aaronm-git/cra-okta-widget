import Navbar from 'components/Navbar';
import DevTools from 'components/DevTools';

export default function MainLayout({ children, className, ...props }) {
	return (
		<>
			<Navbar />
			<div {...props} className={`container bg-black ${className}`}>
				{children}
				<DevTools />
			</div>
		</>
	);
}
