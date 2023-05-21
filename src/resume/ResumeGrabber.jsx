import pdf from "../assets/resume.pdf";
export default function ({ content }) {
	return (
		<div className=' mt-24 flex flex-col justify-center'>
			{content?.text}
			<div className="flex flex-col">


				<div className=' bg-blue-500 w-fit rounded m-auto'>
                    <a href = {pdf} target ={"_blank"}>
					<button
						class=' z-10 font-medium hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-2 border-blue-500 rounded bg-slate-900'>
						{content?.buttonpdf}
					</button>
                    </a>
				</div>
			</div>
		</div>
	);
}
