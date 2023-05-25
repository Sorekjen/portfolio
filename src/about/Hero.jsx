export default function ({ text, summarySectionRef }) {
	return (
		<div className="mt-20 2xl:mt-0 md:p-8 2xl:p-0">
			{text.text}
			<div className='mt-10 bg-blue-500 w-fit rounded'>
				<button
					onClick={() =>
						summarySectionRef.current.scrollIntoView({
							behavior: 'smooth',
							block: 'center'
						})
					}
					class=' z-10 hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-4 border-blue-500 rounded bg-slate-900'>
					{text.button}
				</button>
			</div>
		</div>
	);
}
