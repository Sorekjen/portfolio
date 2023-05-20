import React from 'react'
import Heading from '../common/Heading'
import portrait from '../assets/portrait.svg'
import { useInView } from "react-intersection-observer";

export default function Summary() {
	const { ref, inView } = useInView({
		threshold: 0.1,
	});

	return (
		<div
			ref={ref}
			className={`${
				inView ? 'animate-in' : 'opacity-0'
			} fade-in zoom-in duration-1000 ease-in-out transition-all`}>
<Heading text={'Who am I?'} />
<div className='flex flex-col md:flex-row'>
<div className=' max-w-lg mr-5'>
    <p className='mb-2'>
        Hello! My name is Jakob and I love solving
        problems. I have a toolbox and mindset that
        enables me to do anything I set my mind to.
        I am passionate about always learning
        something new and sharpening and expanding
        my toolbox.
    </p>
    <p className='mb-2'>
        I love working in a team, with focus on
        great communication and efficient project
        management. I thrive on working with new and
        complex problems and designing solutions for
        them.
    </p>
    <p className='mb-2'>
        The software world is always evolving, but
        with my foundation and passion for learning,
        I am always ready adapt.
    </p>
    <p className='mb-2'>
        I look forward to being part of a team of
        skilled colleagues that design, implement,
        test and deploy high quality solutions.
    </p>
</div>
<div className='border-2 border-slate-400 border-spacing-2 border-content-center justify-center mx-auto w-fit h-fit'>
    <img
        className='w-96'
        src={portrait}
    />
</div>
</div>
</div>)
}

