import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';

function Contact() {
	return (
		<div className='flex flex-col min-h-screen justify-center content-center p-auto'>
			<div className='text-slate-300 text-center mb-10'>
				I am always open to discussing new projects, creative ideas or
				opportunities to be part of your visions.
			</div>

			<div className='text-center text-slate-300 mb-10'>
				Dont hesitate to contact me!
			</div>
			<div className='flex flex-row justify-evenly p-5'>
				<a
					
					href={'https://sorekjen.github.com/'}>
					<AiOutlineGithub color={"lightgrey"} className='w-16 h-16 color'/>{' '}
				</a>
				<a href={'mailto: sorenkjellerup@gmail.com'}>
					<MdEmail className='w-16 h-16' color={"lightgrey"} />{' '}
				</a>
				<a
					className='w-16 h-16'
					href={'https://www.linkedin.com/'}>
					<AiOutlineLinkedin color={"lightgrey"} className='w-16 h-16'/>
				</a>
			</div>
		</div>
	);
}
export default Contact;
