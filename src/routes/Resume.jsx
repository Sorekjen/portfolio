import React, { useContext, useRef } from 'react';
import { PageContext } from '../App.jsx';
import SoftwareSkillsContainer from '../resume/SoftwareSkillsContainer.jsx';

import ToolboxContainer from '../resume/ToolboxContainer.jsx';
import PersonalSkillsContainer from '../resume/PersonalSkillsContainer.jsx';
import Education from '../resume/Education.jsx';
import Experience from '../resume/Experience.jsx';
import HeroWrapper from '../about/HeroWrapper.jsx';
import SectionWrapper from '../about/SectionWrapper.jsx';
import ResumeHero from '../resume/ResumeHero.jsx';

export default function () {

	const sRef = useRef();
	const psRef = useRef();
	const eRef = useRef();


	const content = useContext(PageContext);

	function handleClick(index) {
		console.log(index)

		if (index === 0)
		sRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
		if (index === 1)
		psRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
		if (index === 2)
		eRef.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}


	return (
		<div
			key={content.language}
			className='content-center w-full p-4 md:p-8'>
			<HeroWrapper>
				<ResumeHero handleClick={handleClick} content={content.resume.hero}/>
			</HeroWrapper>
			<section ref={sRef} className='pt-24'>
				<SoftwareSkillsContainer
					skills={content.resume.softwareSkills}
				/>
			</section>

			<section ref={psRef} className='pt-24'>
			<PersonalSkillsContainer skills={content.resume.personalSkills} />
			</section>
			<section ref={eRef} className='pt-24'>
			<SectionWrapper>
				<ToolboxContainer skills={content.resume.skills} />
			</SectionWrapper>
			</section>
			<SectionWrapper>
				<Experience experience={content.resume.experience} />
			</SectionWrapper>
			<SectionWrapper>
				<Education education={content.resume.education} />
			</SectionWrapper>
		</div>
	);
}
