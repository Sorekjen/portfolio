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
			label: 'Contact',
			path: '/contact',
		},
		{
			label: 'Resume',
			path: '/resume',
		},
	],
	about: {
		hero: {
			text: (
				<>
					<div className='mb-4 tracking-widest'>
						<p>Hi, my name is</p>
					</div>
					<div className='font-bold text-6xl mb-4 h-16 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>
						<p>Jakob Kjellerup</p>
					</div>
					<div className='tracking-wide font-bold text-4xl mb-10'>
						<p>
							Full stack software engineer student with a passion
							for learning.
						</p>
					</div>
					<div className='max-w-lg font-medium'>
						<p>
							Studying to become a software engineer at VIA
							University College. Designing and building various
							software solutions that are robust and made with the
							best practices and where quality code that is easy
							to read and maintain is the goal.
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
						have a toolbox and mindset that enables me to do
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
						adapt.
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
					wide range of topics. I love delving deep into things and
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
					system integration and focusing on working in a big team
					with agile project management.
				</p>,
				<p className='mb-2'>
					I am working on a <a>project</a> with a large group of
					students where we are designing and building a software
					solution for a mock company <a> Fugt Huset</a>. The focus
					with this project is collaborating on a project that has
					multiple teams and system integration.
				</p>,
				<p className='mb-2'>
					In my spare time I am always working on a project. being
					able to get a crazy idea and will it into existence is what
					I love about being an engineer. To see what I am currently
					working on, check out my <a>projects</a> page.
				</p>,
			],
		},
	},

	resume: {
		intro: {
			button: 'Check out my resume!',
			buttonpdf: 'Grab a copy',
		},
		skills: {
			title: 'My Toolbox',
			languages: {
				title: 'Programmeringssprog',
				entries: [
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'JavaScript',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'TypeScript',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'C#',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Java',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'HTML',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'CSS',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'SQL',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'C',
					},
				],
			},
			tools: {
				title: 'Værktøj',
				entries: [
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Git',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Github',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'WSL',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Docker',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'VSC',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Unity',
					},
				],
			},
			frameworks: {
				title: 'Frameworks',
				entries: [
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'React',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'NodeJS',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Tailwind',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'ExpressJS',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Bootstrap',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: '.Net Core',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'EF core',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Blazor',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'JavaFX',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Unity',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Spring Boot',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Hibernate',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'JUnit',
					},
					{
						image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
						label: 'Jest',
					},
				],
			},
			development: {
				title: 'Udvikling',
				entries: [
					'Agile development',
					'Scrum',
					'DevObs',
					'CI/CD',
					'Kanpan',
					'Unified process',
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
								implementation, testing, and deployment. I
								prioritize each phase to ensure smooth project
								execution and successful delivery.
							</p>
						),
						tags: ['Agile', 'Scrum', 'DevObs', 'CI/CD'],
					},
				},
				{
					title: 'Programming languages',
					content: {
						text: (
							<p>
								I am proficient in multiple programming
								paradigms and languages. This versatility allows
								me to adapt to various project requirements and
								solve complex coding challenges efficiently. I
								understand the importance of writing code that
								is easy to read and maintain and that 10 great
								lines of code are better than 1000 bad ones.
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
								With a good knowledge of software architectures
								and systems, such as client-server,
								microservices, and distributed systems, I can
								design and develop scalable solutions tailored
								to specific needs. My expertise ensures robust
								and efficient system design and implementation.
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
						tags: ['Java', 'SQL', 'API', 'Database', 'Design'],
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
						'Currently studying to become a software engineer at VIA University College. I am in my fourth semester where the focus is on developing a software solutions with system integration and focusing on working in a big team with agile project management.',
				},
				{
					title: 'High School',
					subtitle: 'Viborg Gymnasium og HF',
					date: '2017 - 2020',
					description:
						'Graduated from Viborg Gymnasium og HF with a focus on math and physics. I was part of the student council and was responsible for planning and executing events for the students.',
				
				}]},
		experience: {
			title: 'Experience',
			intro: 'I currently have no work experience, but I am always looking for new opportunities to learn and grow.',
			button: 'Check out my projects!',
		}
	},
	footer: {
		content: (
			<>
				Built from scratch by <a href='/portfolio/contact'>me</a> using{' '}
				<a href='https://vitejs.dev/'>ViteJS</a> and{' '}
				<a href='https://tailwindcss.com/'>Tailwind CSS</a>, All text is
				set in the <a href='https://rsms.me/inter/'>Inter</a> typeface.
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
				<div className='text-center text-slate-300 mb-10'>
					Dont hesitate to contact me!
				</div>
			</>
		),
	},
	projects: [
		{
			title: 'Event4U',
			description: (
				<p>
					A social media platform designed to connect people with a
					shared goal of doing somethign good for the environment. The
					platform is designed to make it easy to create and join
					events, and to share your experiences with others. The
					platform is using a Blazor frontend, a RESTful web API
					writting in Java and strong backend written in C# with EF
					core.
				</p>
			),
			logo: '0',
			tags: ['C#', 'Blazor', 'Java', 'EF Core', 'RESTful API'],
			link: 'https://github.com',
		},

		{
			title: 'Pokedex',
			description: (
				<p>
					A Pokedex app that allows you to search and filter pokemon
					to and view their stats and evolutions. The app is made with
					React and uses the PokeAPI to fetch data. In addition you
					can take a quiz and see if you are a true pokemon fan!
				</p>
			),
			logo: '1',
			tags: ['React', 'PokeAPI'],
			link: 'Sorekjen.github.io/pokedex',
		},

		{
			title: 'FugtHuset',
			description: (
				<p>
					A website for a mock company that needs a system to monitor
					and keep track of their greenhouse plants. The system is a 3
					tier system with the frontend built using React, the backend
					is written using NextJS and typescript and stores the data
					from the greenhouses in a Prisma relational database. The is
					backend uses microservices hosted on google cloud hosting
					and using RESTful API to communicate with the frontend. In
					addition to this the backend get data from an iot device
					where we wrote the software in C on an ATMEGA
					microcontroller.
				</p>
			),
			logo: '2',
			tags: ['React', 'ViteJS', 'Prisma', 'RESTful API', 'C'],
			link: 'https://github.com',
		},
	],
	projectIntro:
		'Here are some of my projects! I am working on getting more of my projects hosted and displayed here!',
};
