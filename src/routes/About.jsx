import React, {useContext, useRef} from 'react';
import Break from '../common/Break.jsx';
import Summary from '../about/Summary.jsx';
import Hero from '../about/Hero.jsx';
import Personal from '../about/Personal.jsx';
import Current from '../about/Current.jsx';
import SectionWrapper from '../about/SectionWrapper.jsx';
import HeroWrapper from '../about/HeroWrapper.jsx';
import {PageContext} from '../App.jsx';


export default function About() {
	const content = useContext(PageContext)
	const summarySection = useRef()

		

	console.log(content)
	return (
		<div key={content.language} className='p-4 2xl:p-0'>
			{content?.about && (
				<>
					<section  className='min-h-screen flex flex-col justify-center'>
						<HeroWrapper>
							<Hero text={content.about.hero} summarySectionRef={summarySection}/>
						</HeroWrapper>
					</section>
					<Break />
					<section ref={summarySection}>
						<SectionWrapper>
							<Summary text={content.about.summary}/>
						</SectionWrapper>
					</section>
					<Break />
					<section>
						<SectionWrapper>
							<Personal text={content.about.personal}/>
						</SectionWrapper>
					</section>
					<Break />
					<section>
						<SectionWrapper>
							<Current text={content.about.current}/>
						</SectionWrapper>
					</section>
					<Break />
				</>
			)}
		</div>
	);
};
