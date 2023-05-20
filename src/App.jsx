import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Footer from './common/Footer';
import { INFODK } from './data/userdk';
import { INFO } from './data/user';
import ScrollToTop from './common/ScrollToTop';

export const PageContext = React.createContext();

export default function App() {
	const [language, setLanguage] = useState('en'); // ['en', 'es'
	const [pageInfo, setPageInfo] = useState(INFO);

	useEffect(() => {
		console.log(pageInfo);
	}, [pageInfo]);

	useEffect(() => {
		if (language === 'dk') setPageInfo(INFODK);
		else if (language === 'en') setPageInfo(INFO);
	}, [language]);

	return (
		<div className='min-h-screen '>
			<PageContext.Provider value={pageInfo}>
				<Navigation
					setLanguage={setLanguage}
					language={language}
				/>
				<ScrollToTop />
				<div className='max-w-4xl m-auto p-6'>
					<Outlet />
				</div>
				<Footer />
			</PageContext.Provider>
		</div>
	);
}
