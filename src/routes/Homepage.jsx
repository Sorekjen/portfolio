import { useEffect, useState } from 'react';
import { INFO } from '../data/user.js';
import Heading from '../common/Heading.jsx';
import Text from '../common/Text.jsx';

function Homepage() {
	const [pageInfo, setPageInfo] = useState(null);

	useEffect(() => {
		console.log(INFO);
		setPageInfo(INFO.homepage);
	}, []);

	return (
		<>
			{pageInfo?.title && (
				<div className='w-full  h-fit '>
					<Heading text={pageInfo.title} />
					<Text text={pageInfo.description} />

					<div className='font-extrabold mt-10'>

					</div>
				</div>
			)}
		</>
	);
}
export default Homepage;
