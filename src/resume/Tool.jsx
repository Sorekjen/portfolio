export default function ({ label, image, link }) {
	return (
		<a className={'m-2 shadow-[0_10px_50px_0px_rgba(0,0,0,0.5)] bg-slate-900 hover:-translate-y-1 transition-all z-30'} href={link}>
			<div className=' w-28 h-28 flex flex-col justify-center items-center'>
				<img className={'w-20 h-20'} src={image}/>
				<p className={' text-sm font-normal uppercase'}>{label}</p>
			</div>
		</a>
	);
}
