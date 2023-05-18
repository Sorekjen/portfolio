import React, { useEffect, useState } from 'react';
import LanguageDropDown from './LanguageDropDown';
import NavLink from './NavLink';
import NavButton from './NavButton';
import { useLocation } from 'react-router-dom';
import { use } from 'i18next';

function Navigation() {
	let location = useLocation();
	const [path, setPath] = useState(location.pathname);
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [navItems] = useState([
		{
			label: 'Home',
			path: '/',
		},
		{
			label: 'About',
			path: '/about',
		},
		{
			label: 'Projects',
			path: '/projects',
		},
		{
			label: 'Contact',

			path: '/contact',
		},
	]);

	useEffect(() => {
		console.log(location.pathname);
		setPath(location.pathname)
	}, [location]);

	const toggleLanguageDropdown = () => {
		setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<nav className='bg-white border-gray-200 dark:bg-gray-900'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<div className='flex items-center md:order-2 '>
					<NavButton
							isMobileMenuOpen={isMobileMenuOpen}
							toggleMobileMenu={toggleMobileMenu}
						/>
						<LanguageDropDown
							isLanguageDropdownOpen={isLanguageDropdownOpen}
							toggleLanguageDropdown={toggleLanguageDropdown}
						/>

					</div>
					<div
						className={`${
							!isMobileMenuOpen ? 'show' : 'hidden'
						}  transition-transform items-center justify-between align-right w-full md:flex md:w-auto md:order-1`}>
						<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-gray-900 dark:border-gray-700'>
							{navItems.map((link) => (
								<li key={location.label}>
									<NavLink link={link}  path={path} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
export default Navigation;