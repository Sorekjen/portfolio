import React from 'react';
import Heading from '../common/Heading';
import CourseTag from '../common/CourseTag';

export default function () {

	return (
		<>
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


					<p className='mb-2'>
						I am working on a <a>project</a> with a large group of
						students where we are designing and building a software
						solution for a mock company <a> Fugt Huset</a>. The
						focus with this project is collaborating on a project
						that has multiple teams and system integration.
					</p>
                    <p className='mb-2'>
						In my spare time I am always working on a project. being able to get a crazy idea and will it into existence is what I love about being an engineer. To see what I am currently working on, check out my <a>projects</a> page.
					</p>

				</div>
			</div>
		</>
	);
}
