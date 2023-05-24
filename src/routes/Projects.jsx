import React, { useContext } from 'react';
import Project from '../common/Project.jsx';
import SectionWrapper from '../about/SectionWrapper.jsx';
import { PageContext } from '../App';
import { Link } from 'react-router-dom';

function Projects() {
	const content = useContext(PageContext);
	return (
		<div key={content.language}>
			<div className='text-slate-300 p-4 md:p-0 md:pt-24 font-bold text-center pt-24'>
				{content?.projectIntro}
			</div>
			<ul className=''>
				{content?.projects.map((entry, index) => {
					if (entry.title === "Event4u") return (
						<SectionWrapper>
						<Project
							key={entry.description}
							entry={entry}
						/>
					</SectionWrapper>
					); else return (
				
					<SectionWrapper>
						<Link to={entry.link}>
						<Project
							key={entry.description}
							entry={entry}
						/>
						</Link>
					</SectionWrapper>
				)})}
			</ul>
		</div>
	);
}
export default Projects;
