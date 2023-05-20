export default function ({text}) {
    console.log("hero log" + text)
	return (
		<>
{text.text}
			<div className='mt-10 bg-blue-500 w-fit rounded'>
				<button
					onClick={() => window.scrollTo(0, 900)}
					class=' z-10 hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-4 border-blue-500 rounded bg-slate-900'>
					{text.button}
				</button>
			</div>
		</>
	);
}
