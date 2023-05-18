import { INFO } from '../data/user.js';
import React, { useState, useEffect } from 'react';
import pokedex from '../assets/pokedex.png';
import event from '../assets/event4u.png';
import fugthuset from '../assets/fugthuset.png';
import Break from '../common/Break.jsx';

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
        <div className='text-slate-300 font-bold text-center'>{pageIntro && pageIntro}</div>
		<ul>
			{pageInfo?.map((entry, index) => (
				<li key={entry.title}>
					<div className='flex flex-col mb-10'> 
					</div>
				</li>))}

						
		</ul>
			{pageInfo && (
				<>
					<div className='flex flex-col justify-between md:m-auto p-10 flex-col m-5 text-slate-300'>
						{pageInfo.map((entry, index) => (<div className='p-10'>
							<div key={entry.title} className='flex flex-col mb-10'>
								<div className='justify-center text-center w-full font-bold text-lg'>
									{entry.title}
								</div>
								<div className='scale-75'>
									<img src={entry.img} />
								</div>
                                <div>{entry.description}</div>                                <div>{entry.description}</div>
                                <a href={entry.link}>{entry.linkText}</a>

							</div>
                            <Break/>
						</div>))}
					</div>
				</>
			)}
		</>
	);
}
export default Projects;
