import React from 'react';
import Heading from '../common/Heading';
import Break from '../common/Break';
import Text from '../common/Text';

export default function ({ experience}) {
    return (
        <>
            <Heading text={experience.title} />
            <Text text={experience.intro}/>

            
            

            <div className=' bg-blue-500 w-fit rounded mx-auto mt-4'>
            <Link to={"/projects"}>
            <button
                class=' z-10 font-medium hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-2 border-blue-500 rounded bg-slate-900'>
                {experience.button}
            </button>
            </Link>
            </div>
            <Break />

    </>);
}