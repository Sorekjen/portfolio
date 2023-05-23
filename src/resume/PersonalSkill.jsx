import React from 'react';
import Text from '../common/Text';
export default function ({ skill }) {
	return (
		<div className='flex flex-col md:flex-row mb-10'>
			<div className='md:w-64 my-auto font-bold text-lg md:border-r-2 border-slate-400 md:text-left text-center'>
				<p className={`text-slate-300`}>{skill.title}</p>
			</div>
			<div className="w-fit p-3">
				<Text text={skill.description} />
			</div>
		</div>
	);
}
