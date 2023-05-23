import React from 'react';
import SkillTag from '../common/SkillTag';
import Text from '../common/Text';

export default function ({ skill }) {
	return (
		<div className='flex flex-col md:flex-row mb-10'>
			<div className='my-auto md:w-96 font-bold text-lg md:border-r-2 border-slate-400 text-center md:text-center'>
				<p className={`text-slate-300`}>{skill.title}</p>
			</div>
			<div className='w-fit p-3'>
				<Text text={skill.content.text} />
				<div className='flex flex-row flex-wrap py-3'>
					{skill.content.tags.map((entry, index) => (
						<div
							className='flex mr-4 mb-2'
							key={index}>
							<SkillTag text={entry} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
