import React from 'react';
import Heading from '../common/Heading';
import Text from '../common/Text';

export default function ({text}) {
	return (
		<>
			<Heading text={text.title} />
			<div className='flex flex-col'>
				{text.text.map((text, index) => (
					<div
						key={index}
						className=' max-w-lg mr-5'>
						<Text text={text}/>
					</div>
				))}
			</div>
		</>
	);
}
