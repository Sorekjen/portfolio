export const INFO = {
	main: {
		title: 'Jakob Kjellerup Software Engineer',
		name: 'Jakob Kjellerup',
		email: 'sorenkjellerup@gmail.com',
	},

	socials: {
		github: 'https://github.com/',
		linkedin: 'https://linkedin.com/',
	},

	homepage: {
		title: 'Motivated and eager to learn with a strong foundation and a persistent drive to acquire new skills.',
		search: 'I am currently looking for an internship in the fall of 2023!',
		description:
			"Software engineering student taking my bachelor at VIA. I'm committed and sharp in both academics and projects. I love working in a team, with focus on great communication and efficient project management. I thrive on working with new and complex problems and developing quality solutions for them. The software world is constantly evolving and there are too many technologies to count, but with my knowledgde of software systems and passion for learning, I am always ready to dive into something new and produce something elegant. I look forward to being part of a team of skilled colleagues that make modern and reliable software.",
	},

	about: {
		intro: "Hi, I'm Jakob!",
        education: {
            title: 'Education',
            entries: [
                {
                    title: 'Software Engineer',
                    place: 'VIA University College',
                    timeFrame: '2020 - 2024',
                    description: 'Studying at VIA we work with a wide variety of technologies, platforms and processes that enable us go from a clients requirements to a strong powerful solution that is reliable and made with the best practices that makes the system maintainable and scaleable.',
        }]},
		skillsTitle: 'Skills',
		skills: [
			{
				title: 'Languages',
				entries: [
                    'JavaScript',
                    'TypeScript',
					'C#',
					'Java',
					'HTML',
					'CSS',
					'SQL',
					'C++',
					'C',
				],
			},
			{
				title: 'Tools',
				entries: [
					'Git',
                    'Github',
					'WSL',
                    'Docker',
					'Visual Studio Code',
					'IntelliJ, Rider, DataGrip',
					'Unity',
				],
			},
			{
				title: 'Frameworks and Libraries',
				entries: [
					'React',
					'React Native',
					'Node.js',
                    'Tailwind CSS',
					'Express.js',
					'Bootstrap',
                    'ASP.NET Core',
                    'Entity Framework Core',
					'Blazor',
                    'JavaFX',
                    'Spring Boot',
                    'Hibernate',
                    'JUnit',
                    'Jest',
				],
			},
			{ title: 'Development', entries: [
                'Agile development', 
                'Scrum', 
                'DevObs',
                'CI/CD',
                'Kanpan', 
                'Unified process',
            ] },
		],

		interestTitle: 'What drives me?',
		interestDescription:
			'I have an insatiable curiosity that drives me to explore a wide range of topics. I love delving deep into things and geek about the details, and I enjoy sharing my knowledge or learning from others. My passion for cooking often leads me to experiment with new recipes in the kitchen and explore new ingredients and culinary cultures. I also find deep satisfaction in connecting with nature, whether through a quiet walk or in my own apartment, where I enjoy taking care of my collection of unique plants and watching them grow and bloom.',

		personalSkillsTitle: 'Personal Skills',
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
				title: 'Time Management',
				description:
					'I am a great time manager and I am always ready to take on new challenges. I am always looking for new ways to improve my time management skills.',
			},
			{
				title: 'Teamwork',
				description:
					'I am a great team player and I am always ready to help others. I am always looking for new ways to improve my teamwork skills.',
			},
		],
	},

	contact: {
		title: 'I would love to hear from you if you!',
	},
	projects: [
		{
			title: 'Event4U',
			description:'A social media platform designed to connect people with a shared goal of doing somethign good for the environment. The platform is designed to make it easy to create and join events, and to share your experiences with others. The platform is using a Blazor frontend, a RESTful web API writting in Java and strong backend written in C# with EF core.',
			logo: '/src/assets/event4u.png',
			linkText: 'Im working on getting it hosted!',
			tags: ['C#', 'Blazor', 'Java', 'EF Core', 'RESTful API'],
			link: 'https://github.com',
		},

		{
			title: 'Pokedex',
			description:'A Pokedex app that allows you to search and filter pokemon to and view their stats and evolutions. The app is made with React and uses the PokeAPI to fetch data. In addition you can take a quiz and see if you are a true pokemon fan!',
			logo: '/src/assets/pokedex.png',
			linkText: 'View Project',
			tags: ['React', 'PokeAPI'],
			link: 'Sorekjen.github.io/pokedex',
		},

		{
			title: 'FugtHuset',
			description:'A website for a mock company that needs a system to monitor and keep track of their greenhouse plants. The system is a 3 tier system with the frontend built using React, the backend is written using NextJS and typescript and stores the data from the greenhouses in a Prisma relational database. The is backend uses microservices hosted on google cloud hosting and using RESTful API to communicate with the frontend. In addition to this the backend get data from an iot device where we wrote the software in C on an ATMEGA microcontroller.',
			logo: '/src/assets/fugthus.png',
			linkText: 'View Project',
			tags: ['React', 'ViteJS', 'Prisma', 'RESTful API', 'C'],
			link: 'https://github.com',
		},
	],
    projectIntro: 'Here are some of my projects! I am working on getting more of my projects hosted and displayed here!',

};
