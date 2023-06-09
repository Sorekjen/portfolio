import pokedex from '../assets/pokedex.png';
import event from '../assets/event4u.png';
import fugthuset from '../assets/fugthuset.png';
import Text from './Text';
import SkillTag from './SkillTag';

export default function Project({ entry }) {
	const images = [event, pokedex, fugthuset];
	return (
		<li key={entry.description} className={`flex flex-col md:odd:flex-row-reverse md:even:flex-row my-10 ${entry.title !== "Event4U" ? "hover:bg-slate-800  rounded hover:shadow-inner cursor-pointer" : " cursor-default"} p-5 transition-all hover:transition-all opacity-1`}>
			<div className='h-full flex flex-col mb-10 px-5'>
				<div className='text-slate-200 w-full font-medium text-lg'>
					{entry.title}
				</div>
				<div className='leading-normal'><Text text={entry.description}/></div>
				<div className='flex flex-row flex-wrap'>
					{entry.tags.map((tag, index) => {
						return(<div key={index} className='mr-2 mt-2'><SkillTag key={index} text={tag}/></div>)
				
					})}
					
				</div>


			</div>
			<div className='w-48 mx-auto'>
				<img
					className=' w-48 max-w-lg border-slate-700 border-2 rounded-sm'
					src={images[entry.logo]}
				/>
				</div>
		</li>
	);
}
