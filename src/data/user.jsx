export const INFO = {
	language: 'en',
	main: {
		title: 'Jakob Kjellerup Software Engineer',
		name: 'Jakob Kjellerup',
		email: 'sorenkjellerup@gmail.com',
	},

	socials: {
		github: 'https://github.com/',
		linkedin: 'https://linkedin.com/',
	},

	nav: [
		{
			label: 'About',
			path: '/',
		},
		{
			label: 'Portfolio',
			path: '/projects',
		},
		{
			label: 'Resume',
			path: '/resume',
		},
		{
			label: 'Contact',
			path: '/contact',
		},
	],
	about: {
		hero: {
			text: (
				<>
					<div className='mb-4 tracking-widest'>
						<p>Hi, my name is</p>
					</div>
					<div className='font-bold text-4xl 2xl:text-6xl mb-4 h-10 2xl:h-16 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>
						<p>Jakob Kjellerup</p>
					</div>
					<div className='tracking-wide font-bold text-2xl 2xl:text-4xl mb-4 2xl:mb-10'>
						<p>
							Full stack software engineer student with a passion
							for learning/to learn.
						</p>
					</div>
					<div className='max-w-lg font-medium'>
						<p>
							Studying to become a software engineer at VIA
							University College. Designing and building various
							software solutions that are robust, made with the
							best practices and where quality code, that is easy
							to read and maintain, is a priority.
						</p>
					</div>
				</>
			),
			button: 'Check me out!',
		},
		summary: {
			title: 'Who am I?',
			text: (
				<>
					<p className='mb-2'>
						Hello! My name is Jakob and I love solving problems. I
						have a toolbox and a mindset that enables me to do
						anything I set my mind to. I am passionate about always
						learning something new and expanding my toolbox.
					</p>
					<p className='mb-2'>
						I love working in a team, with focus on great
						communication and efficient project management. I thrive
						on working with new and complex problems and designing
						solutions for them.
					</p>
					<p className='mb-2'>
						The software world is always evolving, but with my
						foundation and passion for learning, I am always ready
						to adapt.
					</p>
					<p className='mb-2'>
						I look forward to being part of a team of skilled
						colleagues that design, implement, test and deploy high
						quality solutions.
					</p>
				</>
			),
		},
		personal: {
			title: 'What drives me?',
			text: (
				<p>
					I have an insatiable curiosity that drives me to explore a
					wide range of topics. I love diving deep into things and
					geek about the details, and I enjoy sharing my knowledge or
					learning from others. My passion for cooking often leads me
					to experiment with new recipes in the kitchen and explore
					new ingredients and culinary cultures. I also find deep
					satisfaction in connecting with nature, whether through a
					quiet walk or in my own apartment, where I enjoy taking care
					of my collection of unique plants and watching them grow and
					bloom.
				</p>
			),
		},
		current: {
			title: 'What am I up to?',
			text: [
				<p className='mb-2'>
					I am currently studying to become a software engineer at{' '}
					<a>VIA University College</a>. I am in my fourth semester
					where the focus is on developing a software solutions with
					system integration as well as focusing on working in a big
					team with agile project management.
				</p>,
				<p className='mb-2'>
					In my spare time I am always working on a project. Being
					able to get a crazy idea and will it into existence is what
					I love about being an engineer. To see what I am currently
					working on, check out my <a>portfolio</a>.
				</p>,
			],
		},
	},

	resume: {
		hero: {
			title: 'Resume',
			TOC: {
				content: [
					{
						title: 'Skills',
						list: (
							<>
								<li>Software Development</li>
								<li>Programming</li>
								<li>Software Architecture</li>
								<li>Web Development</li>
								<li>Backend Development</li>
							</>
						),
					},
					{
						title: 'Personal Skills',
						list: (
							<>
								<li>Communication</li>
								<li>Problem Solving</li>
								<li>Adaptability</li>
								<li>Creativity</li>
								<li>Teamwork</li>
							</>
						),
					},
					{
						title: 'Experience',
						list: (
							<>
								<li>Toolbox</li>
								<li>Experience</li>
								<li>Projects</li>
								<li>Education</li>
							</>
						),
					},
				],
			},
			buttonpdf: 'Grab a pdf',
		},
		skills: {
			title: 'My Toolbox',
			intro: 'I have a wide range of tools that i am familiar with and I am always striving to learn new things and sharpen my skills. Below are some of my skills and tools that I am familiar with:',
			languages: {
				title: 'Programming',
				entries: [
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
						label: 'JavaScript',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
						label: 'TypeScript',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
						label: 'C#',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
						label: 'Java',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
						label: 'HTML',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
						label: 'CSS',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
						label: 'SQL',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
						label: 'C',
					},
				],
			},
			tools: {
				title: 'Tools',
				entries: [
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
						label: 'Git',
					},
					{
						image: 'https://img.icons8.com/ios-glyphs/480/FFFFFF/github.png',
						label: 'Github',
					},
					/*{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'WSL',
					},*/
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
						label: 'Docker',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
						label: 'VSC',
					},
					{
						image: 'https://img.icons8.com/ios-filled/500/FFFFFF/unity.png',
						label: 'Unity',
					},
					/*{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'DataGrip',
					},*/
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
						label: 'IntelliJ',
					},
					{
						image: 'https://img.icons8.com/small/256/FFFFFF/jetbrains--v1.png',
						label: 'Rider',
					},
				],
			},
			frameworks: {
				title: 'Frameworks',
				entries: [
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
						label: 'React',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
						label: 'NodeJS',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Tailwind',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
						label: 'ExpressJS',
						color: 'white',
					},

					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
						label: '.Net Core',
					},
					/*{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'EF core',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Blazor',
					},*/
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
						label: 'Spring Boot',
					},
					/*{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Hibernate',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'JUnit',
					},*/
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
						label: 'Jest',
					},
				],
			},
		},
		softwareSkills: {
			title: 'Skills',
			entries: [
				{
					title: 'Software Development',
					content: {
						text: (
							<p>
								I have a comprehensive understanding of the
								software development lifecycle, including
								requirements gathering, analysis, design,
								implementation, testing, and deployment. I am
								familiar with agile development and Scrum to ensure
								smooth project execution and successful
								delivery.
							</p>
						),
						tags: ['Agile', 'Scrum', 'DevObs', 'CI/CD'],
					},
				},
				{
					title: 'Programming',
					content: {
						text: (
							<p>
								I am proficient in multiple programming
								paradigms and languages. This versatility allows
								me to adapt to various project requirements and
								solve complex coding challenges efficiently. I
								understand the importance of writing code that
								is easy to read and maintain to minimize
								complications and to enable great cooporation
								between team members.
							</p>
						),
						tags: ['SOLID', 'JavaScript', 'Java', 'C#'],
					},
				},
				{
					title: 'Software Architecture',
					content: {
						text: (
							<p>
								With a good knowledge of software architecture
								and different system designs, such as
								client-server, microservices, and distributed
								systems, I can design and develop scalable
								solutions tailored to specific needs.
							</p>
						),
						tags: ['Client/Server', 'Layered', 'Microservices'],
					},
				},
				{
					title: 'Web Development',
					content: {
						text: (
							<p>
								I have a strong command of HTML, CSS, and
								JavaScript. Using various tools I can create
								intuitive user interfaces and engaging web
								experiences that prioritize usability and
								accessibility.
							</p>
						),
						tags: ['React', 'JavaScript', 'TypeScript', 'Tailwind'],
					},
				},
				{
					title: 'Backend Development',
					content: {
						text: (
							<p>
								With a solid foundation in backend development,
								I can build reliable and scalable APIs. I have
								hands-on experience in designing and
								implementing database tiers to ensure efficient
								data storage and retrieval. Its important that
								backend systems seamlessly integrate with
								front-end components, resulting in cohesive
								applications.
							</p>
						),
						tags: ['Java', 'SQL', 'API', 'Database Design'],
					},
				},
			],
			button: 'Check out my work!',
		},
		personalSkills: {
			title: 'Personal Skills',
			entries: [
				{
					title: 'Communication',
					description:
						'I am a great communicator and I thrive on working in a team. I am always ready to help and I am not afraid to ask for help when I need it. I am always open to feedback and I am always looking for ways to improve myself and my work.',
				},
				{
					title: 'Problem Solving',
					description:
						'I am a great problem solver and I love working with new and complex problems. I am always ready to dive into something new and produce something elegant.',
				},
				{
					title: 'Adaptability',
					description:
						'I am a quick learner and I am always ready to learn new things. I am always looking for new challenges to expand my knowledge and skills.',
				},
				{
					title: 'Creativity',
					description:
						'I am a creative person and I love to create new things. I am always looking for new ways to solve problems and I am always ready to try new things.',
				},
				{
					title: 'Teamwork',
					description:
						'I am a great team player and I am always ready to help others. I am always looking for new ways to improve my teamwork skills.',
				},
			],
		},
		education: {
			title: 'Education',
			entries: [
				{
					title: 'Software Engineering',
					subtitle: 'VIA University College',
					date: '2020 - 2023',
					description:
						'Studying to become a software engineer at VIA University College. Designing and building various software solutions that are robust, made with the best practices and where quality code that is easy to read and maintain is a priority.',
				},
				{
					title: 'Higher Technical Examination',
					subtitle: 'Herningsholm erhvervsgymnasium',
					date: '2017 - 2020',
					description:
						'I graduated with a higher technical examination in 2020. I studied mathematics, physics and computer science. I also had a focus on entrepreneurship and innovation.',
				},
			],
		},
		experience: {
			title: 'Experience',
			intro: 'I am currently taking my degree, but I am always looking for new opportunities to learn and grow.',
			button: 'Check out my projects!',
		},
	},
	footer: {
		content: (
			<>
				Built from scratch by{' '}
				<a
					className={'font-bold text-slate-300 cursor-pointer'}
					href='/portfolio/contact'>
					me
				</a>{' '}
				using{' '}
				<a
					className={'font-bold text-slate-300 cursor-pointer'}
					href='https://vitejs.dev/'>
					ViteJS
				</a>{' '}
				and{' '}
				<a
					className={'font-bold text-slate-300 cursor-pointer'}
					href='https://tailwindcss.com/'>
					Tailwind CSS
				</a>
				, All text is set in the{' '}
				<a
					className={'font-bold text-slate-300 cursor-pointer'}
					href='https://rsms.me/inter/'>
					Inter
				</a>{' '}
				typeface. Icons from{' '}
				<a
					className={'font-bold text-slate-300 cursor-pointer'}
					href='https://icons8.com'>
					Icons8
				</a>{' '}
				and{' '}
				<a
					className={'font-bold text-slate-300 cursor-pointer'}
					href='https://devicon.dev/'>
					Devicon
				</a>
				.
			</>
		),
	},

	contact: {
		title: (
			<>
				<div className='text-slate-300 text-center mb-10'>
					I am always open to discussing new projects, creative ideas
					or opportunities to be part of your visions.
				</div>
				<div className='text-center text-slate-300 underline'>
					316471@via.dk
				</div>
			</>
		),
	},
	projects: [

		{
			title: 'FugtHuset',
			description: (
				<p>
					I am currently working in a team of 12 building a website for a mock company that
					needs a system to monitor and keep track of their greenhouse
					plants. The frontend is built using React, the backend is
					written using NextJS and typescript and stores the data from
					the greenhouses in a Prisma relational database. The backend
					uses cloud hosting and a RESTful API to communicate with the
					frontend. In addition to this the backend gets sensor data
					from an IOT device.
				</p>
			),
			logo: '2',
			tags: ['React', 'ViteJS', 'Prisma', 'REST', 'C'],
			link: 'https://github.com/SW-SEP4-S23',
		},

		{
			title: 'Pokedex',
			description: (
				<p>
					A Pokedex web application that allows you to search and
					filter pokemon and to view their stats and evolutions. The
					app is made with React and uses the PokeAPI to fetch data.
					In addition you can take a quiz and see if you are a true
					pokemon fan!
				</p>
			),
			logo: '1',
			tags: ['React', 'PokeAPI'],
			link: 'https://sorekjen.github.io/pokedex',
		},


		{
			title: 'Event4U',
			description: (
				<p>
					A social media platform designed to connect people with a
					shared goal of doing something good for the environment. The
					platform is using a Blazor frontend, a RESTful web API
					written in Java and a strong backend written in C# with
					Entity framework core and a postgresSQL database to store
					data.
				</p>
			),
			logo: '0',
			tags: ['C#', 'Blazor', 'Java', 'EFC', 'RESTful', '.Net'],
			link: '',
		},
	],
	projectIntro:
		'Here are a few of my projects! I am working on getting more of my projects hosted and displayed here!',
};
