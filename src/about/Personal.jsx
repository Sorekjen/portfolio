import React, { useState } from 'react';
import Heading from '../common/Heading';
import Text from '../common/Text';
import { INFO } from '../data/user';
import { useInView } from "react-intersection-observer";

export default function Personal() {

    
    const [pageInfo, setPageInfo] = useState(INFO.about);
	const { ref, inView } = useInView({
		threshold: 0.1,
	});

	return (
		<div
			ref={ref}
			className={`${
				inView ? 'animate-in' : 'opacity-0'
			} fade-in zoom-in duration-1000 ease-in-out transition-all`}>
        <Heading text={pageInfo.interestTitle} />
        <Text text={pageInfo.interestDescription} />
        </div>)
}