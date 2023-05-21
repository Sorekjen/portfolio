import React from 'react';
import SoftwareSkill from './SoftwareSkill';
import Heading from '../common/Heading';
import Break from '../common/Break';
import SectionWrapper from '../about/SectionWrapper';
import HeroWrapper from '../about/HeroWrapper';
export default function ({ skills }) {
	return (
		<>
			<HeroWrapper>
				<Heading text={skills.title} />
			</HeroWrapper>

			{skills.entries.map((skill) => (
				<>
					<SectionWrapper>
						<SoftwareSkill skill={skill} />
					</SectionWrapper>
				</>
			))}
			<Break />
		</>
	);
}
