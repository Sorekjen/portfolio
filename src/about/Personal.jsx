import React, { useState } from 'react';
import Heading from '../common/Heading';
import Text from '../common/Text';
import { INFO } from '../data/user';

export default function Personal({text}) {

    


	return (
		<>
        <Heading text={text.title} />
        <Text text={text.text} />
        </>)
}