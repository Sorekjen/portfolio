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
import { useInView } from "react-intersection-observer";

function About() {
	const [pageInfo, setPageInfo] = useState(null);

	useEffect(() => {
		console.log(INFO);
		setPageInfo(INFO.about);
	}, []);

	const { heroRef, heroInView } = useInView({
		threshold: 0,
	});

	const { summaryRef, summaryInView } = useInView({
		threshold: 0,
	});

	const { skillsRef, skillsInView } = useInView({
		threshold: 0,
	});

	const { personalRef, personalInView } = useInView({
		threshold: 0,
	});

	const { currentRef, currentInView } = useInView({
		threshold: 0,
	});

	const { ref, inView } = useInView({
		threshold: 0.1,
	});


	useEffect(() => {
		console.log(heroInView);
	}, [heroInView]);


	return (
		<>
			{pageInfo?.education?.title && (
				<>
					<section className='min-h-screen flex flex-col justify-center'>
						<Hero />
					</section>
					<Break />
					<section>
						<Summary />
					</section>
					<Break />
					<section>
						<Skills />
					</section>
					<Break />
					<section>
						<Personal />
					</section>
					<Break />
					<section>
						<Current />
					</section>
					<Break />
				</>
			)}
		</>
	);
}
export default About;
