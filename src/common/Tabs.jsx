import React, { useState } from 'react';
import NavButton from '../Navigation/NavButton.jsx';

export default function ({ tabs }) {
	const [active, setActive] = useState(tabs[0].title);
	const [isMobileMenuOpen, setIsMobileTabOpen] = useState(false);

	function toggleMobileMenu() {
		setIsMobileTabOpen(!isMobileMenuOpen);
	}

	function handleClick(tabTitle) {
		toggleMobileMenu();
		setActive(tabTitle);
	}

	return (
		<div className={'mt-10 w-full flex flex-col'}>
			<div className='flex flex-row justify-between'>
				<ul
					className={
						'text-xl text-slate-300 md:flex-row font-medium w-full flex flex-col content-between justify-evenly'
					}>
					{tabs.map((tab) => (
						<li
							onClick={() => handleClick(tab.title)}
							className={`${
								active === tab.title
									? 'border-b-2 text-slate-200'
									: 'text-slate-500 border-b-2 border-slate-900'
							} ${!isMobileMenuOpen && active !== tab.title ? 'max-[700px]:hidden' : 'show' } cursor-pointer p-2 m-2 w-1/3 md:text-center text-left md:hover:bg-slate-800 transition-all`}>
							{tab.title}
						</li>
					))}
				</ul>
				<div className={`md:hidden show`}>
					<NavButton
						isMobileMenuOpen={isMobileMenuOpen}
						toggleMobileMenu={toggleMobileMenu}
					/>
				</div>
			</div>
			<div className='p-10'>
				{tabs.map((tab) => (
					<div
						className={`${
							active === tab.title ? 'flex' : 'hidden'
						} transition-all`}>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	);
}
