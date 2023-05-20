import React from 'react';
import dkIcon from '../assets/denmark.svg';
import ukIcon from '../assets/united kingdom.svg';

function LanguageDropDown({
	setLanguage,
	language,
}) {
	return (
		<>
			<div className='flex items-center md:order-2'>
				<button
					onClick={() => setLanguage('dk')}
					className='inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
					<img
						src={dkIcon}
						className={`${
							language === 'dk' ? 'opacity-100 w-11 h-7' : 'opacity-70 w-9 h-6'
						} transition-all`}
					/>
				</button>
				<button
					onClick={() => setLanguage('en')}
					className='inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'>
					<img
						src={ukIcon}
						className={`${
							language === 'en' ? 'opacity-100 w-11 h-7' : 'opacity-70 w-9 h-6'
						} transition-all`}
					/>
				</button>
			</div>
		</>
	);
}
export default LanguageDropDown;
