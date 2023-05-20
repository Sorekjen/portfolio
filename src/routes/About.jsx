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
import Hero from '../about/Hero.jsx';
import Personal from '../about/Personal.jsx';
import Current from '../about/Current.jsx';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../about/SectionWrapper.jsx';

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
						<SectionWrapper>
							<Hero />
						</SectionWrapper>
					</section>
					<Break />
					<section>
						<SectionWrapper>
							<Summary />
						</SectionWrapper>
					</section>
					<Break />
					<section>
						<SectionWrapper>
							<Skills />
						</SectionWrapper>
					</section>
					<Break />
					<section>
						<SectionWrapper>
							<Personal />
						</SectionWrapper>
					</section>
					<Break />
					<section>
						<SectionWrapper>
							<Current />
						</SectionWrapper>
					</section>
					<Break />
				</>
			)}
		</>
	);
}
export default About;
