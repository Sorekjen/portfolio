import React, {useState} from 'react';
import { INFO } from '../data/user.jsx';
export default function () {
	const [pageInfo, setPageInfo] = useState(INFO.about);
	console.log(INFO)
	return (
		<div className='content-center'>
			<div className=' mt-20 mb-96 flex md:flex-row justify-between p-10 flex-col text-slate-300'>
				{pageInfo.skills &&
					pageInfo.skills.map((entry) => (
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
					))}
			</div>
		</div>
	);
}
