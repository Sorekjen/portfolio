import { useEffect, useState } from 'react';
export default function({text, list}) {
	const [fadeProp, setFadeProp] = useState( {fade: 'opacity-100', duration: 5500});
	const [wordOrder, setWordOrder] = useState(0);
    const wordChangeInterval = 6000;

	useEffect(() => {
		const fadeTimeout = setInterval(() => {
			if  (fadeProp.fade === 'opacity-100')
			{
				setFadeProp({duration: 500, fade: 'opacity-0 ' })
			} else {
				setWordOrder(
					(prevWordOrder) => (prevWordOrder + 1) % list.length
				);
				setFadeProp({duration: 5500, fade: 'opacity-100' });
			}
		
            
		}, fadeProp.duration);

		return () => clearInterval(fadeTimeout);
	}, [fadeProp]);


	return (
		<h2 className='tracking-wide font-bold text-2xl 2xl:text-4xl mb-4 2xl:mb-10'>
			{text}
            <span
				className={`animate-in slide-in-from-top-0 animate-out slide-out-to-top-0 ease-in-out duration-500 transition-all font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 ${fadeProp.fade}`}>
				{list[wordOrder]}
			</span>
		</h2>
	);
};
