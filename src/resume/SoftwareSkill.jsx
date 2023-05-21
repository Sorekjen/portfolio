import React from 'react';
import SkillTag from '../common/SkillTag';

export default function ({ skill }) {
	return (
		<div className='flex flex-col md:flex-row mb-10'>
			<div className='my-auto w-96 font-bold text-lg md:border-r-2 border-slate-400'>
				<p className={`text-slate-300`}>{skill.title}</p>
			</div>
			<div className='w-fit p-3'>
				<p>{skill.content.text}</p>
				<div className='flex flex-row py-3'>
					{skill.content.tags.map((entry, index) => (
						<div
							className='flex mr-4'
							key={index}>
							<SkillTag text={entry} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
