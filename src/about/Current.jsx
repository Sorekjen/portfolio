import React from 'react';
import Heading from '../common/Heading';
import CourseTag from '../common/CourseTag';
import { useInView } from 'react-intersection-observer';

export default function () {
	const { ref, inView } = useInView({
		threshold: 0.1,
	});

	return (
		<div
			ref={ref}
			className={`${
				inView ? 'animate-in' : 'opacity-0'
			} fade-in zoom-in duration-1000 ease-in-out transition-all`}>

                
			<Heading text={'What am I up to?'} />
			<div className='flex flex-row'>
				<div className=' max-w-lg mr-5'>
					<p className='mb-2'>
						I am currently studying to become a software engineer at{' '}
						<a>VIA University College</a>. I am in my fourth
						semester where the focus is on developing a software
						solutions with system integration and focusing on
						working in a big team with agile project management.
					</p>
					<div className='flex flex-row'>
						{['WEB', 'CLOUD', 'ADS', 'EMB'].map((entry) => (
							<div className='m-2'>
								<CourseTag text={entry} />
							</div>
						))}
					</div>

					<p className='mb-2'>
						I am working on a <a>project</a> with a large group of
						students where we are designing and building a software
						solution for a mock company <a> Fugt Huset</a>. The
						focus with this project is collaborating on a project
						that has multiple teams and a software solution with
						different and decoupled systems.
					</p>
				</div>
			</div>
		</div>
	);
}
