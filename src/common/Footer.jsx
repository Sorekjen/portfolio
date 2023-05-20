import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';

function Footer() {
	return (
		<div className=''>

			<div className='flex flex-row justify-center p-5'>
				<a
					
					href={'https://www.github.com/sorekjen'}>
					<AiOutlineGithub color={"lightgrey"} className='w-8 h-8 color'/>{' '}
				</a>
				<a className="mx-5" href={'mailto:sorenkjellerup@gmail.com'}>
					<MdEmail className='w-8 h-8' color={"lightgrey"} />{' '}
				</a>
				<a className='w-8 h-8' href={'https://www.linkedin.com/in/jakob-kjellerup-66888a277/'}>
					<AiOutlineLinkedin color={"lightgrey"} className='w-8 h-8'/>
				</a>
			</div>
            <div className='text-slate-500 text-center mb-10'>
            Built from scratch by {' '}<a href="/portfolio/contact">me</a>{' '} using {' '}<a href="https://vitejs.dev/">ViteJS</a>{' '} and {' '}<a href="https://tailwindcss.com/">Tailwind CSS</a>, All text is set in the {' '}<a href="https://rsms.me/inter/">Inter</a>{' '} typeface.
			</div>
		</div>
	);
}
export default Footer;