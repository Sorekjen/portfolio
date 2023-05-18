import React, { useState, useEffect } from 'react';
import { INFO } from '../data/user.js';
import Heading from '../common/Heading.jsx';
import Text from '../common/Text.jsx';
import portrait from '../assets/portrait.svg';
import Education from '../common/Education.jsx';
import Skills from '../common/Skills.jsx';
import Break from '../common/Break.jsx';

function About() {
	const [pageInfo, setPageInfo] = useState(null);

	useEffect(() => {
		console.log(INFO);
		setPageInfo(INFO.about);
	}, []);

	return (
		<>
			{pageInfo?.intro && (
				<>
					<div className=' mt-10 flex flex-row'>
						<div class='ml-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 justify-center w-full m-auto justify flex content-center font-extrabold text-5xl'>
							{pageInfo.intro}
						</div>
						<div>
						<img
							className='w-96 h-96 h-'
							src={portrait}
						/>
                        </div>

					</div>

					<div className='mb-0 p-2 rounded-3xl justify-self-end '>
						<Heading text={pageInfo.title} />
                        
                        <Education entry={pageInfo.Education.entries[0]} />
                                                <Heading text={pageInfo.skillsTitle.title} />
                                                <Break />

                        <Skills skills={pageInfo.skills} />
					</div>
                    <Break />
                    <Heading text={pageInfo.interestTitle} />
                    <Text text={pageInfo.interestDescription} />
                    <Break />
			</>)}
	</>);
}
export default About;
