import TextLoop from "./TextLoop";


export default function ({ content, summarySectionRef, wordIndex }) {
	return (
		<div className='mt-20 2xl:mt-0 md:p-8 2xl:p-0'>
			<div className='mb-4 tracking-widest'>
				{content.intro}
			</div>
			<div className='font-bold text-4xl 2xl:text-6xl mb-4 h-10 2xl:h-16 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>
				{content.name}
			</div>
			<div className='tracking-wide font-bold text-2xl 2xl:text-4xl mb-4 2xl:mb-10'>
				<TextLoop text={content.punchline} list={content.list} />
			</div>
			<div className='max-w-lg font-medium'>
				{content.summary}
			</div>
			<div className='mt-10 bg-blue-500 w-fit rounded'>
				<button
					onClick={() =>
						summarySectionRef.current.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
						})
					}
					className='font-bold z-10 hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-4 border-blue-500 rounded bg-slate-900'>
					{content.button}
				</button>
			</div>
		</div>
	);
}
