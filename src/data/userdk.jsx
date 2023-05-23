export const INFODK = {
	language: 'dk',
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
			label: 'Om mig',
			path: '/',
		},
		{
			label: 'Portfolie',
			path: '/projects',
		},

		{
			label: 'Resumé',
			path: '/resume',
		},
		{
			label: 'Kontakt',
			path: '/contact',
		},
	],

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
							softwareløsninger, der er robuste og lavet med de
							bedste praksis og hvor det er målet at have kode af
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
						Jeg er altid klar til at lære noget nyt og udvide mit
						værktøjssæt.
					</p>
					<p className='mb-2'>
						Jeg elsker at arbejde i et team med fokus på god
						kommunikation og effektiv projektstyring. Jeg trives med
						at arbejde med nye og komplekse problemer og designe
						løsninger til dem.
					</p>
					<p className='mb-2'>
						Softwareverdenen udvikler sig hele tiden, men med min
						grundlæggende viden og passion for læring er jeg altid
						klar til at tilpasse mig.
					</p>
					<p className='mb-2'>
						Jeg ser frem til at være en del af et hold dygtige
						kolleger, der designer, implementerer, tester og leverer
						løsninger af høj kvalitet.
					</p>
				</>
			),
		},
		personal: {
			title: 'Hvad driver mig?',
			text: (
				<p>
					Jeg har en umættelig nysgerrighed, der driver mig til at
					udforske en bred vifte af emner. Jeg elsker at dykke dybt
					ned i tingene og nørde over detaljerne, og jeg nyder at dele
					min viden eller lære af andre. Min passion for madlavning
					fører mig ofte til at eksperimentere med nye opskrifter i
					køkkenet og udforske nye ingredienser og kulturer. Jeg
					finder også dyb tilfredsstillelse i at forbinde med naturen,
					om det er gennem en stille gåtur eller i min egen lejlighed,
					hvor jeg nyder at passe min samling af unikke planter og se
					dem vokse og blomstre.
				</p>
			),
		},
		current: {
			title: 'Hvad laver jeg nu?',
			text: [
				<p className='mb-2'>
					Jeg studerer i øjeblikket til softwareingeniør på{' '}
					<a>VIA University College</a>. Jeg er på fjerde semester,
					hvor fokus er på at udvikle softwareløsninger med
					systemintegration og arbejde i store teams med agil
					projektstyring.
				</p>,
				<p className='mb-2'>
					I min fritid arbejder jeg altid på et nyt projekt. At kunne
					få en skør idé og føre den til virkelighed er det, jeg
					elsker ved at være ingeniør.
				</p>,
			],
		},
	},

	resume: {
		hero: {
			title: 'Resumé',
			TOC: {
				content: [
					{
						title: 'Kompetencer',
						list: (
							<>
								<li>Software Udvikling</li>
								<li>Programming</li>
								<li>Softwarearkitektur</li>
								<li>Webudvikling</li>
								<li>Backend-udvikling</li>
							</>
						),
					},
					{
						title: 'Personlige kompetencer',
						list: (
							<>
								<li>Kommunikation</li>
								<li>Problemløsning</li>
								<li>Tilpasningsevne</li>
								<li>Kreativitet</li>
								<li>Samarbejde</li>
							</>
						),
					},
					{
						title: 'Erfaring',
						list: (
							<>
								<li>Værktøjskasse</li>
								<li>Arbejdserfaring</li>
								<li>Projekter</li>
								<li>Uddannelse</li>
							</>
						),
					},
				],
			},
			buttonpdf: 'Download som PDF',
		},
		skills: {
			title: 'Min Værktøjskasse',
			Intro: 'Her er en liste af noget af det værktøj jeg har arbejdet med. Jeg er altid klar til at lære noget nyt!',
			languages: {
				title: 'Programmering',
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
				title: 'Værktøj',
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
			title: 'Færdigheder',
			entries: [
				{
					title: 'Softwareudvikling',
					content: {
						text: (
							<p>
								Jeg har en god forståelse af
								softwareudviklingens proces, herunder
								kravindsamling, analyse, design, implementering,
								test og levering. Jeg har erfaring med at
								arbejde agilt og arbejde med Scrumt til sikre en
								problemfri projektudførelse og succesfuld
								levering.
							</p>
						),
						tags: ['Agile', 'Scrum', 'DevObs', 'CI/CD'],
					},
				},
				{
					title: 'Programmeringssprog',
					content: {
						text: (
							<p>
								Jeg er dygtig i flere programmeringssprog og
								paradigmer. Dette giver mig mulighed for at
								tilpasse mig forskellige projektkrav og løse
								komplekse kode udfordringer. Jeg forstår
								vigtigheden af at skrive kode der er nem at læse
								og vedligeholde for at sikre god samarbejdelse.
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
								Med en god viden om softwarearkitektur og
								systemer som klient-server, microservices og
								distribuerede systemer kan jeg designe og
								udvikle skalerbare løsninger skræddersyet til
								specifikke behov.
							</p>
						),
						tags: ['Klient/server', 'Lagdelt', 'Microservices'],
					},
				},
				{
					title: 'Webudvikling',
					content: {
						text: (
							<p>
								Jeg har stærke kompetencer inden for HTML, CSS
								og JavaScript. Ved hjælp af forskellige
								værktøjer kan jeg skabe intuitive
								brugergrænseflader og engagerende weboplevelser,
								der prioriterer brugervenlighed og
								tilgængelighed.
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
								Med en solid baggrund i backend-udvikling kan
								jeg opbygge pålidelige og skalerbare API'er. Jeg
								har praktisk erfaring med at designe og
								implementere databaser for at sikre effektiv
								lagring og hentning af data.
							</p>
						),
						tags: ['Java', 'SQL', 'API', 'Database', 'Design'],
					},
				},
			],
			button: 'Se mit arbejde!',
		},
		personalSkills: {
			title: 'Personlige færdigheder',
			entries: [
				{
					title: 'Kommunikation',
					description:
						'Jeg er en fremragende kommunikator, og jeg trives med at arbejde i et team. Jeg er altid klar til at hjælpe, og jeg er ikke bange for at bede om hjælp, når jeg har brug for det. Jeg er altid åben for feedback og altid på udkig efter måder at forbedre mig selv og mit arbejde på.',
				},
				{
					title: 'Problem løsning',
					description:
						'Jeg er en fremragende problemløser, og jeg elsker at arbejde med nye og komplekse problemer. Jeg er altid klar til at dykke ned i noget nyt og producere noget elegant.',
				},
				{
					title: 'Tilpasningsevne',
					description:
						'Jeg er en hurtig lærende, og jeg er altid klar til at lære nye ting. Jeg er altid på udkig efter nye udfordringer for at udvide min viden og mine færdigheder.',
				},
				{
					title: 'Kreativitet',
					description:
						'Jeg er en kreativ person, og jeg elsker at skabe nye ting. Jeg er altid på udkig efter nye måder at løse problemer på, og jeg er altid klar til at prøve nye ting.',
				},
				{
					title: 'Samarbejde',
					description:
						'Jeg er en god holdspiller, og jeg er altid klar til at hjælpe andre. Jeg er altid på udkig efter nye måder at forbedre mine samarbejdsevner på.',
				},
			],
		},
		education: {
			title: 'Uddannelse',
			entries: [
				{
					title: 'Softwareingeniør',
					subtitle: 'VIA University College',
					date: '2020 - 2023',
					description:
						'Jeg studerer til softwareingeniør på VIA University College. Jeg er på fjerde semester, hvor fokus er på at udvikle softwareløsninger med systemintegration og arbejde i store teams med agil projektstyring.',
				},
				{
					title: 'HTX',
					subtitle: 'Herningsholm erhvervsgymnasium',
					date: '2017 - 2020',
					description:
						'På HTX lærte jeg om softwareudvikling, elektronik, matematik og fysik. Jeg lærte også om projektstyring og samarbejde i store grupper.',
				},
			],
		},
		experience: {
			title: 'Erfaring',
			intro: 'Jeg er lige nu i gang med at tage min uddannelse og har derfor ikke noget relevant arbejdserfaring. Her er nogle af de projekter jeg har arbejdet på.',
			button: 'Projekter',
		},
	},
	footer: {
		content: (
			<>
				Bygget fra bunden af{' '}
				<a className={'font-medium text-slate-300'} href='/portfolio/contact'>yours truly</a> med{' '}
				<a className={'font-medium text-slate-300'} href='https://vitejs.dev/'>ViteJS</a> og{' '}
				<a className={'font-medium text-slate-300'} href='https://tailwindcss.com/'>Tailwind CSS</a>, skriftypen
				er fra <a className={'font-medium text-slate-300'} href='https://rsms.me/inter/'>Inter</a>. Ikoner er fra{' '}
				<a className={'font-medium text-slate-300'} href='https://icons8.com'>Icons8</a> og{' '}
				<a className={'font-medium text-slate-300'} href='https://devicon.dev/'>Devicon</a>.
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
			tags: ['C#', 'Blazor', 'Java', 'EFC', 'RESTful', '.Net', 'SQL'],
			link: 'https://github.com/Sorekjen/sep3-3vent4u',
		},

		{
			title: 'Pokedex',
			description: (
				<p>
					En pokedex web applikation bygget med React. Du kan søge
					efter en pokemon og se dens detaljer. Dataene kommer fra
					PokeAPIen. Der er også en Quiz hvor du kan se om du er en
					ægte pokemon fan!
				</p>
			),
			logo: '1',
			tags: ['React', 'PokeAPI'],
			link: 'https://Sorekjen.github.io/pokedex',
		},

		{
			title: 'FugtHuset',
			description: (
				<p>
					Jeg arbejder lige nu på en hjemmeside til en fiktiv
					virksomhed, der har brug for et system til at overvåge og
					holde styr på deres drivhusplanter. Systemet er en 3-lags
					arkitektur, hvor frontend er bygget med React, backend er
					skrevet med NextJS og TypeScript og gemmer data fra
					drivhusene i en Prisma-relationsdatabase. Backend'en bruger
					microservices, der er hostet på Google Cloud Hosting, og
					kommunikerer med frontend via en RESTful API. Derudover får
					backend'en data fra en IoT-enhed, hvor vi har skrevet
					softwaren i C på en ATMEGA-mikrocontroller.
				</p>
			),
			logo: '2',
			tags: ['React', 'ViteJS', 'Prisma', 'RESTful', 'C'],
			link: 'https://github.com/SW-SEP4-S23',
		},
	],
	projectIntro: (
		<p>
			Her er nogle af mine projekter. Jeg arbejder på at få flere af mine
			projekter vist her.
		</p>
	),
};
