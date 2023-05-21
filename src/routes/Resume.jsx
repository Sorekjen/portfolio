import React, { useContext } from 'react';
import { PageContext } from '../App.jsx';
import SoftwareSkillsContainer from '../resume/SoftwareSkillsContainer.jsx';

import ToolboxContainer from '../resume/ToolboxContainer.jsx';
import PersonalSkillsContainer from '../resume/PersonalSkillsContainer.jsx';
import ResumeGrabber from '../resume/ResumeGrabber.jsx';
import Education from '../resume/Education.jsx';
import Experience from '../resume/Experience.jsx';
import HeroWrapper from '../about/HeroWrapper.jsx';
import SectionWrapper from '../about/SectionWrapper.jsx';

export default function () {
	const content = useContext(PageContext);
	return (
		<div key={content.language}  className='content-center w-full pt-20'>
			<HeroWrapper>
				<ResumeGrabber content={content.resume.intro} />
			</HeroWrapper>
			<SectionWrapper>
				<SoftwareSkillsContainer
					skills={content.resume.softwareSkills}
				/>
			</SectionWrapper>

			<PersonalSkillsContainer skills={content.resume.personalSkills} />
			<SectionWrapper>
				<ToolboxContainer skills={content.resume.skills} />
			</SectionWrapper>
			<SectionWrapper>
				<Experience experience={content.resume.experience} />
			</SectionWrapper>
			<SectionWrapper>
				<Education education={content.resume.education} />
			</SectionWrapper>
		</div>
	);
}
