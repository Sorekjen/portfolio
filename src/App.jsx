import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Footer from './common/Footer';

export default function App() {
	return (
		<div className='min-h-screen '>
			<Navigation />
			<div className='max-w-4xl m-auto p-6'>
				<Outlet />
			</div>
			<Footer/>
		</div>
	);
}
