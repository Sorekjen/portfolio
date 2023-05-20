import { INFO } from '../data/user.js';
import React, { useState, useEffect } from 'react';
import pokedex from '../assets/pokedex.png';
import event from '../assets/event4u.png';
import fugthuset from '../assets/fugthuset.png';
import Break from '../common/Break.jsx';
import Project from '../common/Project.jsx';
import SectionWrapper from '../about/SectionWrapper.jsx';

function Projects() {
	const [pageInfo, setPageInfo] = useState(null);
	const [pageIntro, setPageIntro] = useState(null);
	useEffect(() => {
		console.log(INFO);
		let projects = INFO.projects;
		projects[0].img = pokedex;
		projects[1].img = event;
		projects[2].img = fugthuset;

		setPageInfo(projects);
		setPageIntro(INFO.projectIntro);
	}, []);

	return (
		<>
			<div className='text-slate-300 font-bold text-center mt-24'>
				{pageIntro && pageIntro}
			</div>
			{pageInfo && (
				<>
					<ul className="hover:opacity-100 transition-all hover:transition-all">
						{pageInfo.map((entry, index) => (
							<SectionWrapper>
								<Project key={index} entry={entry} />

							</SectionWrapper>
						))}
					</ul>
				</>
			)}
		</>
	);
}
export default Projects;
