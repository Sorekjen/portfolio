import React from 'react';
import PersonalSkill from './PersonalSkill';
import Heading from '../common/Heading';
import Break from '../common/Break';

export default function ({ skills}) {
    return (
        <>
            <Heading text={skills.title} />
            {skills.entries.map((skill) => (
                <PersonalSkill skill={skill} />
            ))}
            <Break />

    </>);
}