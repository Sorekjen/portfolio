import React, {useContext} from 'react';
import { PageContext } from '../App.jsx';
import SoftwareSkillsContainer from '../resume/SoftwareSkillsContainer.jsx';

import ToolboxContainer from '../resume/ToolboxContainer.jsx';
import PersonalSkillsContainer from '../resume/PersonalSkillsContainer.jsx';
import ResumeGrabber from '../resume/ResumeGrabber.jsx';
import Education from '../resume/Education.jsx';
import Experience from '../resume/Experience.jsx';

export default function () {
	const content = useContext(PageContext);
	return (
		<div className='content-center w-full'>

		<ResumeGrabber content={content.resume.intro}/>

		<SoftwareSkillsContainer skills={content.resume.softwareSkills}/>

		<PersonalSkillsContainer skills={content.resume.personalSkills}/>

		<ToolboxContainer skills={content.resume.skills}/>

		<Education education={content.resume.education}/>

		<Experience experience={content.resume.experience}/>


			<div className=' mt-20 flex md:flex-row justify-between p-10 flex-col text-slate-300'>
				{/*content.resume.skills.map((entry) => (
						<div className='flex flex-col mb-10'>
							<div className='justify-center text-center w-full font-bold text-lg'>
								{entry.title}
							</div>
							{entry.entries.map((skill) => (
								<div className='text-center justify-center w-full'>
									{skill}
								</div>
							))}
						</div>
							))*/}
			</div>
			<div className='flex flex-col justify-center text-slate-300'>
				{content.resume.personalSkillsTitle}

				</div>

		</div>
	);
}
