import React, { useState, useEffect } from 'react';
import { INFO } from '../data/user.js';
import Heading from '../common/Heading.jsx';
import Text from '../common/Text.jsx';
import portrait from '../assets/portrait.svg';
import Education from '../common/Education.jsx';
import Skills from '../about/Skills.jsx';
import Break from '../common/Break.jsx';
import CourseTag from '../common/CourseTag.jsx';
import Summary from '../about/Summary.jsx';

function About() {
	const [pageInfo, setPageInfo] = useState(null);

	useEffect(() => {
		console.log(INFO);
		setPageInfo(INFO.about);
	}, []);

	return (
		<>
			{pageInfo?.education?.title && (
				<>
					<section className='min-h-screen flex flex-col justify-center'>
						<div class='mb-4 tracking-widest'>Hi, my name is</div>
						<div class='font-bold text-6xl mb-4 h-16 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>
							Jakob Kjellerup.
						</div>
						<div class='tracking-wide font-bold text-4xl mb-10'>
							Full stack software engineer student with a passion for learning.
						</div>
						<div className='max-w-lg font-medium'>
							Studying to become a software engineer at {' '}<a href="https://www.via.dk">VIA</a>{' '}
							designing and building various digital solutions
							that are robust and made with the best practices.
						</div>
						<div className='mt-10 bg-blue-500 w-fit rounded'>
						<button onClick={()=> window.scrollTo(0,900)} class=' z-10 hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-4 border-blue-500 rounded bg-slate-900'>
							Check me out!
						</button>
						</div>


						<div></div>
					</section>
					<Break />
					<section id="summary">
						<Summary />
					</section>
					<Break />

					<section>
						<Heading text={'What can I do?'} />
						<div className='flex flex-row'></div>
						<Skills skills={pageInfo.skills} />
					</section>
					<Break />
					<Heading text={pageInfo.interestTitle} />
					<Text text={pageInfo.interestDescription} />
					<Break />
					<section>
						<Heading text={'What am I up to?'} />
						<div className='flex flex-row'>
							<div className=' max-w-lg mr-5'>
								<p className='mb-2'>
									I am currently studying to become a software
									engineer at {' '}<a >VIA University College</a>. I am in
									my fourth semester where the focus is on
									developing a software solutions with system
									integration and focusing on working in a big
									team with agile project management.
								</p>
								<div className='flex flex-row'>
									{['WEB', 'CLOUD', 'ADS', 'EMB'].map(
										(entry) => (
											<div className='m-2'>
												<CourseTag text={entry} />
											</div>
										)
									)}
								</div>

								<p className='mb-2'>
									I am working on a {' '} 
									<a>
									project
									</a>{' '}
									with a large group of students where we are
									designing and building a software solution
									for a mock company 									<a>
									{' '}Fugt Huset
									</a>. The focus with this
									project is collaborating on a project that
									has multiple teams and a software solution
									with different and decoupled systems.
								</p>
							</div>
							<div className='border-2 border-slate-400 border-spacing-2 border-content-center justify-center mx-auto w-fit h-fit'>
								<img className='w-96'></img>
							</div>
						</div>
					</section>
					<Break />


				</>
			)}
		</>
	);
}
export default About;
