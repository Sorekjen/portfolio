import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { PageContext } from '../App';
import { useContext } from 'react';
import HeroWrapper from '../about/HeroWrapper.jsx';
import { Link } from 'react-router-dom';
import Text from '../common/Text.jsx';

function Contact() {
	const content = useContext(PageContext);
	return (
		<div key={content.language}>
			<HeroWrapper>
				<div className='flex flex-col md:min-h-[75vh] 2xl:min-h-[85vh] justify-center content-center p-4 2xl:p-auto'>
					<Text text={content?.contact.title}/>
					<div className='flex flex-row justify-evenly p-5'>
						<a href={'https://github.com/sorekjen'}>
							<IconContext.Provider
								value={{
									color: 'lightgrey',
									className:
										'w-16 h-16 hover:scale-150 transition-all',
								}}>
								<AiOutlineGithub />
							</IconContext.Provider>
						</a>
						<a>
							<a
								href='mailto:sorenkjellerup@gmail.com'
								>
								<IconContext.Provider
									value={{
										color: '#ff5d5d',
										className:
											'w-16 h-16 hover:scale-150 transition-all',
									}}>
									<MdEmail />
								</IconContext.Provider>
							</a>
						</a>
						<a
							href={
								'https://www.linkedin.com/in/jakob-kjellerup-66888a277/'
							}>
							<IconContext.Provider
								value={{
									color: '#0E76A8',
									className:
										'w-16 h-16 hover:scale-150 transition-all',
								}}>
								<AiOutlineLinkedin />
							</IconContext.Provider>{' '}
						</a>
					</div>
				</div>
			</HeroWrapper>
		</div>
	);
}
export default Contact;
