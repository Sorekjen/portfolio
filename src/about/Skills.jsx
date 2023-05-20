import React, { useState } from 'react';
import SkillTag from '../common/SkillTag';
import { Link } from 'react-router-dom';
import Heading from '../common/Heading.jsx';

export default function Skills({ text }) {
	const [currentTab, setCurrentTab] = useState(0);

	return (
		<>
			<Heading text={text.title} />

			<div className=' min-h-max flex flex-col md:flex-row'>
				<ul className='flex flex-wrap flex-col text-sm font-medium text-center text-gray-500 border-r border-gray-200 dark:border-gray-700 dark:text-gray-400'>
					{text.tabs.map((tab, index) => {
						return (
							<li
								className='mr-2'
								key={index}>
								<a
									className={`py-2 px-4 block font-normal text-lg cursor-pointer hover:-translate-x-2 hover:trawansition-all transition-all hover:text-blue-300 ${
										currentTab === index
											? 'text-blue-500'
											: ''
									}`}
									onClick={() => setCurrentTab(index)}>
									{tab.title}
								</a>
							</li>
						);
					})}
				</ul>
				<div className='max-w-md px-5'>
					<div className='py-4'>
						{text.tabs[currentTab].content.text}
						<div className='flex py-3'>
							{text.tabs[currentTab].content.tags.map(
								(entry, index) => (
									<div
										className='flex mr-4'
										key={index}>
										<SkillTag text={entry} />
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='mx-auto mt-10 bg-blue-500 w-fit rounded'>
				<Link to='/projects'>
					<button class=' z-10 transition-all hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-4 border-blue-500 rounded bg-slate-900'>
						{text.button}
					</button>
				</Link>
			</div>
		</>
	);
}
