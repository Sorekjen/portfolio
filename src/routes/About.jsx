import React, {useContext, useEffect, useRef, useState} from 'react';
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
	const [word, setWord] = useState(0)

	const cycleWord = () => {
		if (word < content.about.hero.list.length - 1) {
			setWord(word + 1)
		} else {
			setWord(0)
		}
	}



	useEffect(() => {
		const timeout = setTimeout(() => {
			cycleWord()
		}, 3000)
		return () => clearTimeout(timeout)
	}, [word])


		return (
		<div key={content.language} className='p-8 2xl:p-0'>
			{content?.about && (
				<>
					<section  className='min-h-screen flex flex-col justify-center'>
						<HeroWrapper>
							<Hero content={content.about.hero} summarySectionRef={summarySection} wordIndex={word}/>
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
