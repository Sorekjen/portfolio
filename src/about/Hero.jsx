export default function(){
	return (
		<>
            <div class='mb-4 tracking-widest'>Hi, my name is</div>
            <div class='font-bold text-6xl mb-4 h-16 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>
                Jakob Kjellerup.
            </div>
            <div class='tracking-wide font-bold text-4xl mb-10'>
                Full stack software engineer student with a passion for learning.
            </div>
            <div className='max-w-lg font-medium'>
                Studying to become a software engineer at {' '}<a href="https://www.via.dk">VIA</a>{' '}
                designing and building various digital solutions
                that are robust and made with the best practices.
            </div>
            <div className='mt-10 bg-blue-500 w-fit rounded'>
            <button onClick={()=> window.scrollTo(0,900)} class=' z-10 hover:transition hover:-translate-x-1 hover:-translate-y-1 text-blue-500 border-2 p-4 border-blue-500 rounded bg-slate-900'>
                Check me out!
            </button>
            </div>
        </>)
}