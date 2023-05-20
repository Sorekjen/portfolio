import React from 'react';
import dkIcon from '../assets/denmark.svg';
import ukIcon from '../assets/united kingdom.svg';

function LanguageDropDown({setLanguage, toggleLanguageDropdown, isLanguageDropdownOpen }) {
	return (
		<>
			<div className='flex items-center md:order-2'>
				<button
					onClick={() => setLanguage("dk")}
					className='inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
					<img
						src={dkIcon}
						className='w-9 h-6'
					/>
				</button>
				<button
					onClick={() => setLanguage("en")}
					className='inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
					<img
						src={ukIcon}
						className='w-9 h-6'
					/>
				</button>
			</div>
		</>
	);
}
export default LanguageDropDown;
