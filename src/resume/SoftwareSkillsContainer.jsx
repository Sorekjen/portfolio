import React from 'react';
import SoftwareSkill from './SoftwareSkill';
import Heading from '../common/Heading';
import Break from '../common/Break';

export default function ({ skills }) {
    return (
        <>
            <Heading text={skills.title} />
            {skills.entries.map((skill) => (
                <SoftwareSkill skill={skill} />
            ))}
            <Break />

    </>);
}