import pokedex from '../assets/pokedex.png';
import SkillTag from './SkillTag';

export default function Project({ entry }) {
	return (
		<>
			<div
				key={entry.title}
				className='flex flex-col mb-10'>
				<div className='justify-center text-center w-full font-bold text-lg'>
					{entry.title}
				</div>
				<div>{entry.description}</div>
				<div className='flex flex-row justify-center'>
					{entry.tags.map((tag) => (
						<SkillTag tag={tag} />
					))}
				</div>

				<div className='mt-10 bg-blue-500 w-fit rounded'>
					<button
						href={entry.link}
						class=' z-10 hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-4 border-blue-500 rounded bg-slate-900'>
						Check me out!
					</button>
				</div>
			</div>
			<div className='scale-75'>
				<img
					className=' rounded-xl opacity-50 hover:transition-all hover:opacity-100 '
					src={pokedex}
				/>
			</div>
		</>
	);
}
