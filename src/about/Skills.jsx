import React, { useEffect, useState } from 'react';
import SkillTag from '../common/SkillTag';
import { Link } from 'react-router-dom';
export default function Skills() {
	const [currentTab, setCurrentTab] = useState(0);

	const tabContent = [
		// Software Development Lifecycle
		<div className='py-4'>
			<p>
				I have a comprehensive understanding of the software development
				lifecycle, including requirements gathering, analysis, design,
				implementation, testing, and deployment. I prioritize each phase
				to ensure smooth project execution and successful delivery.
			</p>
			<div className='flex py-3'>
				{['Agile', 'Scrum', 'DevObs', 'CI/CD'].map((entry, index) => (
					<div
						className='flex mr-4'
						key={index}>
						<SkillTag text={entry} />
					</div>
				))}
			</div>
		</div>,

		// Programming paradigms and languages
		<div className='py-4'>
			<p>
				I am proficient in multiple programming paradigms and languages.
				This versatility allows me to adapt to various project
				requirements and solve complex coding challenges efficiently.
			</p>
			<div className='flex py-3'>
				{['SOLID', 'JavaScript', 'Java', 'C#'].map((entry, index) => (
					<div
						className='flex mr-4'
						key={index}>
						<SkillTag text={entry} />
					</div>
				))}
			</div>
		</div>,

		// Software Architecture
		<div className='py-4'>
			<p>
				With a good knowledge of software architectures and systems,
				such as client-server, microservices, and distributed systems, I
				can design and develop scalable solutions tailored to specific
				needs. My expertise ensures robust and efficient system design
				and implementation.
			</p>
			<div className='flex py-3'>
				{['Client/Server', 'Layered', 'Microservices'].map(
					(entry, index) => (
						<div
							className='flex mr-4'
							key={index}>
							<SkillTag text={entry} />
						</div>
					)
				)}
			</div>
		</div>,

		// Frontend
		<div className='py-4'>
			<p>
				Specializing in front-end development, I have a strong command
				of HTML, CSS, and JavaScript. I can create intuitive user
				interfaces and engaging web experiences that prioritize
				usability and accessibility.
			</p>
			<div className='flex py-3'>
				{['React', 'Vue', 'Angular', 'Svelte'].map((entry, index) => (
					<div
						className='flex mr-4'
						key={index}>
						<SkillTag text={entry} />
					</div>
				))}
			</div>
		</div>,

		// Backend
		<div className='py-4'>
			<p>
				With a solid foundation in backend development, I excel at
				building reliable and scalable APIs. I have hands-on experience
				in designing and implementing database tiers to ensure efficient
				data storage and retrieval. My backend systems seamlessly
				integrate with front-end components, resulting in cohesive
				applications.
			</p>
			<div className='flex py-3'>
				{['React', 'Vue', 'Angular', 'Svelte'].map((entry, index) => (
					<div
						className='flex mr-4'
						key={index}>
						<SkillTag text={entry} />
					</div>
				))}
			</div>
		</div>,
		<div className='py-4'>
			<p>
				With a solid foundation in backend development, I excel at
				building reliable and scalable APIs. I have hands-on experience
				in designing and implementing database tiers to ensure efficient
				data storage and retrieval. My backend systems seamlessly
				integrate with front-end components, resulting in cohesive
				applications.
			</p>
			<div className='flex py-3'>
				{['React', 'Vue', 'Angular', 'Svelte'].map((entry, index) => (
					<div
						className='flex mr-4'
						key={index}>
						<SkillTag text={entry} />
					</div>
				))}
			</div>
		</div>,
	];

	return (
		<>
			<div className=' min-h-max flex'>
				<ul className='flex flex-wrap flex-col text-sm font-medium text-center text-gray-500 border-r border-gray-200 dark:border-gray-700 dark:text-gray-400'>
					{Array.from([
						'Software Development Lifecycle',
						'Programming paradigms and languages',
						'Software Architecture',
						'Web Development',
						'Backend Development',
					]).map((tab, index) => {
						return (
							<li
								className='mr-2'
								key={index}>
								<a
									className={`py-2 px-4 block hover:text-gray-900 dark:hover:text-white cursor-pointer ${
										currentTab === index
											? 'text-gray-900 dark:text-white'
											: ''
									}`}
									onClick={() => setCurrentTab(index)}>
									{tab}
								</a>
							</li>
						);
					})}
                    <li className='mt-16 mr-2'>
                        <Link className='mt-14' to="/toolbox">
                            Toolbox</Link>
                    </li>
                            
				</ul>
				<div className='max-w-md px-5'>{tabContent[currentTab]}</div>

			</div>
            <div className='mx-auto mt-10 bg-blue-500 w-fit rounded'>
						<Link to="/projects"><button class=' z-10 hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-4 border-blue-500 rounded bg-slate-900'>
							Check out my work!
						</button>
                        </Link>
						</div>
		</>
	);
}