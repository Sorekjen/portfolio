import React from 'react';
import Heading from '../common/Heading';
import Break from '../common/Break';

export default function ({ education}) {
    return (
        <>
            <Heading text={education.title} />
            {education.entries.map((education) => (
            
            <div className='flex flex-col mb-10'>
                <div className='justify-center text-center w-full font-bold text-lg'>
                    {education.title}
                </div>
                <div className='text-center justify-center w-full'>
                    {education.subtitle}
                </div>
                <div className='text-center justify-center w-full'>
                    {education.date}
                </div>
                <div className='text-center justify-center w-full'>
                    {education.description}
                </div>
            </div>
            
            
            ))}
            <Break />

    </>);
}