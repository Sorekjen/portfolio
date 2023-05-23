import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { PageContext } from '../App';
import { useContext } from 'react';

function Footer() {
	const content = useContext(PageContext);
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
            <div className='text-slate-500 p-6 md:p-0 text-center mb-10'>
				{content?.footer.content}
			</div>
		</div>
	);
}
export default Footer;