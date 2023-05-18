function Skills({ skills }) {
	return (
		<div className="flex md:flex-row justify-between md:m-auto p-10 flex-col m-5 text-slate-300">
			{skills.map((entry) => (
				<div className="flex flex-col mb-10">
					<div className='justify-center text-center w-full font-bold text-lg'>{entry.title}</div>
					{entry.entries.map((skill) => (
						<div className='text-center justify-center w-full'>{skill}</div>
					))}
				</div>
			))}
		</div>
	);
}
export default Skills;
