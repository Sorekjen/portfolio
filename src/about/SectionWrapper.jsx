import React, { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import Break from '../common/Break';
import { useInView } from "react-intersection-observer";

export default function SectionWrapper({ children }) {
    
    const [show, setShow] = useState(false);

    const { ref, inView } = useInView({
		threshold: 0.3,
	});

    useEffect(() => {
        if (inView) {
            if(!show)
                setShow(true);
            
        }
    }, [inView]);

	return (
		<div
			ref={ref}
			className={`${
				show ? 'animate-in' : 'opacity-0'
			} fade-in slide-in-from-bottom duration-1000 ease-in-out transition-all`}>
            {children}
        </div>
    );
}