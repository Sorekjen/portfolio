import React, { useState } from 'react';
export default function ({ tabs }) {
	const [active, setActive] = useState(tabs[0].title);
	return (
		<div className={'mt-10 w-full flex flex-col'}>
			<ul
				className={
					'text-xl text-slate-300 font-medium w-full flex flex-row content-between justify-evenly'
				}>
				{tabs.map((tab) => (
					<li
						onClick={() => setActive(tab.title)}
						className={`${
							active === tab.title ? 'border-b-2 text-slate-200' : 'text-slate-500 border-b-2 border-slate-900'
						} cursor-pointer p-2 m-2 w-1/3 text-center hover:bg-slate-800 transition-all`}>
						{tab.title}
					</li>
				))}
			</ul>
			<div className='p-10'>
				{tabs.map((tab) => (
					<div
						className={`${
							active === tab.title ? 'flex' : 'hidden'
						} transition-all`}>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	);
}
