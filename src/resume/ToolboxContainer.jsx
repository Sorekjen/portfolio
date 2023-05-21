import React from 'react';
import Tool from './Tool';
import Heading from '../common/Heading';
import Tabs from '../common/Tabs';
import Break from '../common/Break';


export default function ({ skills }) {

	const tabs = [
		{
			title: skills.languages.title,
			content: (
				<div className={'flex flex-row flex-wrap'}>
					{skills?.languages?.entries.map((tool) => (
						<Tool
							key={tool.label}
							label={tool.label}
							image={tool.image}
						/>
					))}
				</div>
			)
		},
        {
			title: skills.frameworks.title,
			content: (
				<div className={'flex flex-row flex-wrap'}>
					{skills?.frameworks?.entries.map((tool) => (
						<Tool
							key={tool.label}
							label={tool.label}
							image={tool.image}
						/>
					))}
				</div>
			)
		},
        {
			title: skills.tools.title,
			content: (
				<div className={'flex flex-row flex-wrap'}>
					{skills?.tools?.entries.map((tool) => (
						<Tool
							key={tool.label}
							label={tool.label}
							image={tool.image}
						/>
					))}
				</div>
			)
		},
	];

	return (
		<>
			<Heading text={skills.title} />
			<Tabs tabs={tabs} />
            <Break />

            <Break />
            <Break />
		</>
	);
}
