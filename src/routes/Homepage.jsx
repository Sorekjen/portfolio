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

    

    return (<>
    {pageInfo?.title &&


        <div className='max-w-lg m-8 h-fit rounded-3xl '>
        <Heading text={pageInfo.title} />
        <Text text={pageInfo.description} />

        <div className="font-extrabold mt-10">
  <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 justify-center w-full m-auto justify flex content-center">
    {pageInfo.search}
  </p>
</div>

        </div>
}
    </>)
}export default Homepage;