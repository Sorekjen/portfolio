import React from 'react';
import PersonalSkill from './PersonalSkill';
import Heading from '../common/Heading';
import Break from '../common/Break';
import HeroWrapper from '../about/HeroWrapper';
import SectionWrapper from '../about/SectionWrapper';

export default function ({ skills}) {
    return (
        <>
        <HeroWrapper>
            <Heading text={skills.title} />
        </HeroWrapper>
            {skills.entries.map((skill) => (
                <SectionWrapper>
                <PersonalSkill skill={skill} />
                </SectionWrapper>
            ))}
            <Break />

    </>);
}