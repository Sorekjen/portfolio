function Education({ entry }) {
	return (
		<div className="m-auto max-w-lg">
			{' '}
			<div className='flex flex-col items-center justify-center font-bold text-lg m-3 color text-slate-300 '>
				{entry.title}
			</div>
            <div className="flex flex-row text-gray-400 w-full">
                <div className="justify-left">{entry.place}</div>
                 <div className="justify-self-end mr-0 ml-11 justify-end justify-right text-right align-self-end">{entry.timeFrame}</div>
                 </div>
			<div className=' flex flex-col items-center justify-center font-normal color text-slate-200'>
				{entry.description}
			</div>
		</div>
	);
}
export default Education;
