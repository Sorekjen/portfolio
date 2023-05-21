import React, { useState } from 'react';
export default function ({ tabs }) {
	const [active, setActive] = useState(tabs[0].title);
	return (
		<div className={' w-full flex flex-col'}>
			<ul
				className={
					'text-xl text-slate-300 font-medium w-full flex flex-row content-between justify-evenly'
				}>
				{tabs.map((tab) => (
					<li
						onClick={() => setActive(tab.title)}
						className={`${
							active === tab.title ? 'border-b-2' : ''
						} cursor-pointer p-2 m-2 w-1/3 text-center`}>
						{tab.title}
					</li>
				))}
			</ul>
			<div>
				{tabs.map((tab) => (
					<div
						className={`${
							active === tab.title ? 'flex' : 'hidden'
						}`}>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	);
}
