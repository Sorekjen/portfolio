import React, { useState } from 'react';
import Heading from '../common/Heading';
import Text from '../common/Text';
import { INFO } from '../data/user';

export default function Personal() {

    
    const [pageInfo, setPageInfo] = useState(INFO.about);


	return (
		<>
        <Heading text={pageInfo.interestTitle} />
        <Text text={pageInfo.interestDescription} />
        </>)
}