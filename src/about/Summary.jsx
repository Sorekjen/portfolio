import React from 'react';
import Heading from '../common/Heading';
import portrait from '../assets/portrait.svg';

import Text from '../common/Text';

export default function Summary({text}) {
	return (
		<>
			<Heading text={text.title} />
			<div className='flex flex-col md:flex-row'>
				<div className=' max-w-lg mr-5'>
					<Text text={text.text}/>
				</div>
				<div className='border-2 border-slate-400 border-spacing-2 border-content-center justify-center mx-auto w-fit h-fit'>
					<img
						className='w-96'
						src={portrait}
					/>
				</div>
			</div>
		</>
	);
}
