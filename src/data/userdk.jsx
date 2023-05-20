export const INFODK = {
	main: {
		title: 'Jakob Kjellerup Software Engineer',
		name: 'Jakob Kjellerup',
		email: 'sorenkjellerup@gmail.com',
	},

	socials: {
		github: 'https://github.com/',
		linkedin: 'https://linkedin.com/',
	},
	nav: [{
			label: 'Om mig',
			path: '/',
		},
		{
			label: 'Portfolie',
			path: '/projects',
		},
		{
			label: 'Kontakt',

			path: '/contact',
		}],

	about: {
		hero: {
			text: (
				<>
					<div className='mb-4 tracking-widest'>
						<p>Hej, mit navn er</p>
					</div>
					<div className='font-bold text-6xl mb-4 h-16 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>
						<p>Jakob Kjellerup</p>
					</div>
					<div className='tracking-wide font-bold text-4xl mb-10'>
						<p>
							Full stack softwareingeniør studerende der brænder
							for at lære.
						</p>
					</div>
					<div className='max-w-lg font-medium'>
						<p>
							Jeg studerer til softwareingeniør på VIA University
							College. Jeg designer og bygger forskellige
							softwareløsninger, der er robuste og lavet med
							bedste praksis, hvor det er målet at have kode af
							høj kvalitet, der er nem at læse og vedligeholde.
						</p>
					</div>
				</>
			),
			button: 'Klik her!',
		},
		summary: {
			title: 'Hvem er jeg?',
			text: (
				<>
					<p className='mb-2'>
						Hej! Mit navn er Jakob, og jeg elsker at løse problemer.
						Jeg har et værktøjssæt og en indstilling, der gør det
						muligt for mig at klare alt, hvad jeg sætter mig for.
						Jeg er passioneret omkring altid at lære noget nyt og
						udvide mit værktøjssæt.
					</p>
					<p className='mb-2'>
						Jeg elsker at arbejde i et team med fokus på god
						kommunikation og effektiv projektstyring. Jeg trives med
						at arbejde med nye og komplekse problemer og designe
						løsninger til dem.
					</p>
					<p className='mb-2'>
						Softwareverdenen udvikler sig altid, men med min
						grundlæggende viden og passion for læring er jeg altid
						klar til at tilpasse mig.
					</p>
					<p className='mb-2'>
						Jeg ser frem til at være en del af et hold dygtige
						kolleger, der designer, implementerer, tester og
						implementerer løsninger af høj kvalitet.
					</p>
				</>
			),
		},
		skills: {
			title: 'Hvad kan jeg?',
			tabs: [
				{
					title: 'Softwareudvikling',
					content: {
						text: (
							<p>
								Jeg har en omfattende forståelse for
								softwareudviklingslivscyklussen, herunder
								kravindsamling, analyse, design, implementering,
								test og implementering. Jeg prioriterer hver
								fase for at sikre en problemfri projektudførelse
								og succesfuld levering.
							</p>
						),
						tags: ['Agil', 'Scrum', 'DevOps', 'CI/CD'],
					},
				},
				{
					title: 'Programmeringssprog',
					content: {
						text: (
							<p>
								Jeg er dygtig inden for flere
								programmeringsparadigmer og sprog. Denne
								alsidighed gør det muligt for mig at tilpasse
								mig forskellige projektbehov og løse komplekse
								kodningsudfordringer effektivt. Jeg forstår
								vigtigheden af at skrive kode, der er nem at
								læse og vedligeholde, og at 10 gode linjer kode
								er bedre end 1000 dårlige.
							</p>
						),
						tags: ['SOLID', 'JavaScript', 'Java', 'C#'],
					},
				},
				{
					title: 'Softwarearkitektur',
					content: {
						text: (
							<p>
								Med en god viden om softwarearkitekturer og
								systemer som klient-server, microservices og
								distribuerede systemer kan jeg designe og
								udvikle skalerbare løsninger skræddersyet til
								specifikke behov. Min ekspertise sikrer robust
								og effektiv systemdesign og implementering.
							</p>
						),
						tags: ['Klient/Server', 'Layered', 'Microservices'],
					},
				},
				{
					title: 'Webudvikling',
					content: {
						text: (
							<p>
								Jeg har god beherskelse af HTML, CSS og
								JavaScript. Ved hjælp af forskellige værktøjer
								kan jeg skabe intuitive brugergrænseflader og
								engagerende weboplevelser, der prioriterer
								brugervenlighed og tilgængelighed.
							</p>
						),
						tags: ['React', 'JavaScript', 'TypeScript', 'Tailwind'],
					},
				},
				{
					title: 'Backend-udvikling',
					content: {
						text: (
							<p>
								Med en solid baggrund inden for
								backend-udvikling kan jeg bygge pålidelige og
								skalerbare API'er. Jeg har praktisk erfaring med
								at designe og implementere database-lag for at
								sikre effektiv datalagring og -hentning. Det er
								vigtigt, at backend-systemer integrerer
								problemfrit med frontend-komponenter, hvilket
								resulterer i sammenhængende applikationer.
							</p>
						),
						tags: ['Java', 'SQL', 'API', 'Database', 'Design'],
					},
				},
			],
			button: 'Se mit arbejde!',
		},

		personal: {
			title: 'Hvad driver mig?',
			text: (
				<p>
					Jeg har en umættelig nysgerrighed, der driver mig til at
					udforske en bred vifte af emner. Jeg elsker at dykke dybt
					ned i tingene og geek'e ud over detaljerne, og jeg nyder at
					dele min viden eller lære af andre. Min passion for
					madlavning fører mig ofte til at eksperimentere med nye
					opskrifter i køkkenet og udforske nye ingredienser og
					kulinariske kulturer. Jeg finder også dyb tilfredsstillelse
					i at forbinde med naturen, om det så er gennem en stille
					gåtur eller i min egen lejlighed, hvor jeg nyder at passe på
					min samling af unikke planter og se dem vokse og blomstre.
				</p>
			),
		},
		current: {
			title: 'Hvad laver jeg lige nu?',
			text: [
				<p className='mb-2'>
					Jeg studerer i øjeblikket til softwareingeniør på{' '}
					<a>VIA University College</a>. Jeg er på fjerde semester,
					hvor fokus er på at udvikle softwareløsninger med
					systemintegration og arbejde i store teams med agil
					projektstyring.
				</p>,
				<p className='mb-2'>
					Jeg arbejder på et <a>projekt</a> med en stor gruppe
					studerende, hvor vi designer og bygger en softwareløsning
					til en fiktiv virksomhed, <a>Fugt Huset</a>. Fokus i dette
					projekt er samarbejde på et projekt, der involverer flere
					teams og systemintegration.
				</p>,
				<p className='mb-2'>
					I min fritid arbejder jeg altid på et projekt. At kunne få
					en skør idé og føre den til virkelighed er det, jeg elsker
					ved at være ingeniør. Hvis du vil se, hvad jeg arbejder på
					lige nu, kan du tjekke min <a>projekter</a>-side.
				</p>,
			],
		},
	},

	toolbox: {
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
			{
				title: 'Development',
				entries: [
					'Agile development',
					'Scrum',
					'DevObs',
					'CI/CD',
					'Kanpan',
					'Unified process',
				],
			},
		],

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
	footer: {
		content: (
			<>
				Bygget fra bunden af{' '}
				<a href='/portfolio/contact'>yours truly</a> med{' '}
				<a href='https://vitejs.dev/'>ViteJS</a> og{' '}
				<a href='https://tailwindcss.com/'>Tailwind CSS</a>, skriftypen
				er fra <a href='https://rsms.me/inter/'>Inter</a>.
			</>
		),
	},

	contact: {
		title: (
			<>
				<div className='text-slate-300 text-center mb-10'>
					Jeg er altid åben for at diskutere nye projekter, kreative
					ideer eller muligheder.
				</div>
				<div className='text-center text-slate-300 mb-10'>
					Tøv ikke med at kontakte mig!
				</div>
			</>
		),
	},
	projects: [
		{
			title: 'Event4U',
			description: (
				<p>
					En webapplikation, der giver brugerne mulighed for at
					oprette og deltage i begivenheder. Bygget med Blazor og C#
					med en RESTful API skrevet i Java. Bagved ligger en
					database, der bruger EF Core til at gemme data.
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
					En pokedex web applikation bygget med React. Du kan søge
					efter en pokemon og se dens detaljer. Dataen kommer fra
					PokeAPI. Der er også en Quiz hvor du kan se om du er en ægte
					pokemon fan!
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
					En hjemmeside til en fiktiv virksomhed, der har brug for et
					system til at overvåge og holde styr på deres
					drivhusplanter. Systemet er en 3-lags arkitektur, hvor
					frontend er bygget med React, backend er skrevet med NextJS
					og TypeScript og gemmer data fra drivhusene i en
					Prisma-relationsdatabase. Backend'en bruger microservices,
					der er hostet på Google Cloud Hosting, og kommunikerer med
					frontend via en RESTful API. Derudover får backend'en data
					fra en IoT-enhed, hvor vi har skrevet softwaren i C på en
					ATMEGA-mikrocontroller.
				</p>
			),
			logo: '2',
			tags: ['React', 'ViteJS', 'Prisma', 'RESTful API', 'C'],
			link: 'https://github.com',
		},
	],
	projectIntro: (
		<>
			Her er nogle af mine projekter. Jeg arbejder på at få flere af mine
			projekter vist her.
		</>
	),
};
