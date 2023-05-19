import { INFO } from '../data/user.js';
import React, { useState, useEffect } from 'react';
import pokedex from '../assets/pokedex.png';
import event from '../assets/event4u.png';
import fugthuset from '../assets/fugthuset.png';
import Break from '../common/Break.jsx';
import Project from '../common/Project.jsx';

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
        <div className='text-slate-300 font-bold text-center mt-24'>{pageIntro && pageIntro}</div>
		<ul>


						
		</ul>
			{pageInfo && (
				<>
					<div className='flex flex-col justify-between md:m-auto p-10 flex-col m-5 text-slate-300'><ul>
						{pageInfo.map((entry, index) => (<div className='p-10'>
							<li className='flex even:flex-row odd:flex-row-reverse'><Project entry={entry} /></li>
							

						</div>))}
						</ul></div>
				</>
			)}
		</>
	);
}
export default Projects;
