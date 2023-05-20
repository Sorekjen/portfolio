import pokedex from '../assets/pokedex.png';
import event from '../assets/event4u.png';
import fugthuset from '../assets/fugthuset.png';

import SkillTag from './SkillTag';

export default function Project({ entry }) {
	const images = [event, pokedex, fugthuset];
	return (
		<li className='flex flex-col md:odd:flex-row-reverse md:even:flex-row my-10 hover:bg-slate-800 rounded hover:shadow-inner p-5 transition-all hover:transition-all opacity-1'>
			<div className='h-full flex flex-col mb-10 px-5'>
				<div className='text-slate-200 w-full font-medium text-lg'>
					{entry.title}
				</div>
				<div className='leading-normal'>{entry.description}</div>
				<div className='flex flex-row'>
					{entry.tags.map((tag, index) => {
						console.log(tag);
						return(<div key={index} className='mr-2 mt-2'><SkillTag key={index} text={tag}/></div>)
				
					})}
					
				</div>


			</div>
			<div className='w-64 mx-auto'>
				<img
					className='w-64 max-w-lg border-slate-700 hover:border-slate-400 transition-all hover:transition-all hover:scale-110 border-2 rounded-sm'
					src={images[entry.logo]}
				/>
				</div>
		</li>
	);
}
