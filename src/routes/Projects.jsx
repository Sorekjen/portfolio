import React, { useContext } from 'react';
import Project from '../common/Project.jsx';
import SectionWrapper from '../about/SectionWrapper.jsx';
import { PageContext } from '../App';

function Projects() {
	const content = useContext(PageContext);
	return (
		<div key={content.language}>
			<div className='text-slate-300 font-bold text-center mt-24'>
				{content?.projectIntro}
			</div>
			<ul className='hover:opacity-100 transition-all hover:transition-all'>
				{content?.projects.map((entry, index) => (
					<SectionWrapper>
						<Project
							key={entry.description}
							entry={entry}
						/>
					</SectionWrapper>
				))}
			</ul>
		</div>
	);
}
export default Projects;
