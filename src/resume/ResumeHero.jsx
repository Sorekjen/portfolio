import pdfEn from '../assets/pdf-en.pdf';
import pdfDk from '../assets/pdf-dk.pdf';

export default function ({ content, handleClick, language }) {
	const pdf = language === 'en' ? pdfEn : pdfDk;
	return (
		<div
			className={
				'mt-28 md:mt-12 2xl:mt-0 flex flex-col justify-center min-h-[90vh]'
			}>
			<p className='mx-auto font-bold text-6xl mb-10 h-16 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>
				{content.title}
			</p>
			<div className='flex flex-col'>
				<div className='flex flex-col md:flex-row justify-evenly content-evenly'>
					{content.TOC.content.map((item, index) => {
						return (
							<div
								className='flex flex-col border-2 border-slate-400 rounded p-8 transition-all md:hover:bg-slate-800 cursor-pointer md:hover:scale-110 m-2'
								onClick={() => handleClick(index)}
								key={item.title}>
								<p className=' text-slate-300 font-medium text-lg leading-loose'>
									{item.title}
								</p>
								<ul className='text-slate-400 list-disc list-inside'>
									{item.list}
								</ul>
							</div>
						);
					})}
				</div>
			</div>

			<div
				className={
					'flex flex-col md:flex-row justify-center content-center mt-10'
				}>
				<div className=' bg-blue-500 w-fit rounded m-auto md:m-0'>
					<a
						href={pdf}
						target={'_blank'}>
						<button className=' z-10 font-medium hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-2 border-blue-500 rounded bg-slate-900'>
							{content.buttonpdf}
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
