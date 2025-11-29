import {
	SiCss,
	SiDjango,
	SiDocker,
	SiExpress,
	SiFastapi,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiJupyter,
	SiLaravel,
	SiLinux,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiNodedotjs,
	SiNumpy,
	SiPandas,
	SiPhp,
	SiPostgresql,
	SiPostman,
	SiPython,
	SiReact,
	SiRedis,
	SiScikitlearn,
	SiSqlite,
	SiTailwindcss,
	SiTensorflow,
	SiTypescript,
	SiVite,
} from '@icons-pack/react-simple-icons';
import { Code2 } from 'lucide-react';
import { MatplotlibIcon } from '@/components/icons/MatplotlibIcon';
import { SeabornIcon } from '@/components/icons/SeabornIcon';

export const skillIcons = {
	frontend: {
		React: SiReact,
		TypeScript: SiTypescript,
		JavaScript: SiJavascript,
		Tailwind: SiTailwindcss,
		HTML5: SiHtml5,
		CSS3: SiCss,
		Vite: SiVite,
	},

	backend: {
		Python: SiPython,
		Django: SiDjango,
		FastAPI: SiFastapi,
		Laravel: SiLaravel,
		PHP: SiPhp,
		'Node.js': SiNodedotjs,
		'Express.js': SiExpress,
		NestJS: SiNestjs,
	},

	database: {
		PostgreSQL: SiPostgresql,
		MongoDB: SiMongodb,
		MySQL: SiMysql,
		SQLite: SiSqlite,
		Redis: SiRedis,
	},
	dataScience: {
		NumPy: SiNumpy,
		Pandas: SiPandas,
		'Scikit-learn': SiScikitlearn,
		Matplotlib: MatplotlibIcon,
		Seaborn: SeabornIcon,
		Jupyter: SiJupyter,
		TensorFlow: SiTensorflow,
	},
	tools: {
		Git: SiGit,
		GitHub: SiGithub,
		Docker: SiDocker,
		Linux: SiLinux,
		Postman: SiPostman,
		'VS Code': Code2,
	},
};

export const projects = [
	{
		id: 1,
		title: 'ficogest.ma',
		description:
			'A complete web application designed to help accounting offices efficiently manage their clients, services, payments, and expenses. The system provides an intuitive dashboard, detailed service tracking, payment management, and easy-to-read financial insights.',
		tags: [
			'Laravel',
			'React',
			'MySQL',
			'shadcn UI',
			'Tailwind CSS',
			'inertiajs',
		],
		image: 'ficogest.avif',
	},
	{
		id: 2,
		title: 'lebedouin.ma',
		description:
			'A multi-tenant reservation platform for restaurants, hotels, and event venues. Features real-time availability checking, automated booking confirmations, and a comprehensive admin dashboard for managing reservations across multiple locations.',
		tags: ['Django', 'Tailwind CSS', 'PostgreSQL', 'HTMX', 'Alpine.js'],
		image: 'lebedouin.avif',
	},
	{
		id: 3,
		title: 'Travel Planning Platform',
		description:
			'A travel companion app that generates personalized trip itineraries based on user preferences, offers interactive destination guides, and integrates seamless booking for flights and accommodations.',
		tags: ['Django', 'MySQL', 'Tailwind CSS', 'HTMX', 'Alpine.js'],
		image: 'travel_planning.avif',
	},
	{
		id: 4,
		title: 'Fitness Management System',
		description:
			'A comprehensive gym platform featuring personalized workout plans, live streaming fitness classes, progress tracking with analytics, and member scheduling with class reservations.',
		tags: ['Django', 'MySQL', 'Tailwind CSS', 'HTMX', 'Alpine.js'],
		image: 'fitness_management.avif',
	},
	{
		id: 5,
		title: 'Pizza Online Ordering System',
		description:
			'An online ordering platform with custom pizza builder, real-time order tracking, secure payment processing, and Redis-powered session management for optimal cart performance.',
		tags: ['Django', 'React', 'PostgreSQL', 'Redis'],
		image: 'pizza_ordering.avif',
	},
];

export const processSteps = [
	{
		number: '01',
		title: 'Back End Developer',
		companyName: 'Mafazaa',
		period: 'May 2025 – Present · Part-time · Remote',
		description:
			'Develop backend APIs and services using NestJS, Express.js, and MongoDB. Collaborate with a remote team to deliver scalable and secure backend systems following clean architecture principles.',
		technologies: ['NestJS', 'TypeScript', 'Express.js', 'MongoDB'],
		alignment: 'left' as const,
	},
	{
		number: '02',
		title: 'Full Stack Developer',
		companyName: 'Evoleo Maroc',
		period: 'Nov 2024 – Oct 2025 · Full-time · Marrakesh, Morocco',
		description:
			'Developed and maintained full-stack web applications using FastAPI, Laravel, and React.js. Designed RESTful APIs, ensured technical support, and conducted quality assurance testing.',
		technologies: [
			'FastAPI',
			'Laravel',
			'React.js',
			'MySQL',
			'Python',
			'PHP',
			'JavaScript',
		],
		alignment: 'right' as const,
	},
	{
		number: '03',
		title: 'Django Developer',
		companyName: 'GreenCommunication',
		period: 'Apr 2024 – Oct 2024 · Full-time · Marrakesh, Morocco',
		description:
			'Built and maintained web applications using Django, Tailwind CSS, JavaScript, and MySQL. Focused on backend logic, UI integration, and improving overall system performance.',
		technologies: [
			'Django',
			'MySQL',
			'Tailwind CSS',
			'HTMX',
			'Alpine.js',
			'JavaScript',
			'Python',
		],
		alignment: 'left' as const,
	},
	{
		number: '04',
		title: 'Assistant Accountant',
		companyName: 'ONSSA Marrakech',
		period: 'Oct 2022 – Mar 2024 · Full-time · Marrakesh, Morocco',
		description:
			'Handled accounting tasks including financial data entry, reporting, and reconciliation. Strengthened attention to detail and analytical thinking applicable to software development.',
		technologies: ['Excel', 'Accounting Systems'],
		alignment: 'right' as const,
	},
	{
		number: '05',
		title: 'Web Developer Intern',
		companyName: 'The Originals Creative Agency',
		period: 'Aug 2022 – Oct 2022 · Internship · Marrakesh, Morocco',
		description:
			'Worked on full-stack development tasks using Node.js, Express.js, and React.js. Contributed to internal tools and client projects under supervision.',
		technologies: ['Node.js', 'Express.js', 'React.js', 'JavaScript'],
		alignment: 'left' as const,
	},
	{
		number: '06',
		title: 'Django Developer Intern',
		companyName: 'GreenCommunication',
		period: 'Jun 2021 – Oct 2021 · Internship · Marrakesh, Morocco',
		description:
			'Built internal web platforms using Django, MySQL, and Tailwind CSS. Assisted in backend development, database modeling, and UI improvements.',
		technologies: [
			'Django',
			'MySQL',
			'Tailwind CSS',
			'JavaScript',
			'Python',
		],
		alignment: 'right' as const,
	},
	{
		number: '07',
		title: 'Web Developer Intern',
		companyName: 'Weshore Agency',
		period: 'May 2019 – May 2019 · Internship · Marrakesh, Morocco',
		description:
			'Developed a management web application using PHP and MySQL. Integrated WordPress components and contributed to improving workflow automation.',
		technologies: ['PHP', 'MySQL', 'WordPress', 'JavaScript'],
		alignment: 'left' as const,
	},
	{
		number: '08',
		title: 'Web Developer Intern',
		companyName: 'Prefecture of Marrakesh',
		period: 'Jul 2018 – Jul 2018 · Internship · Marrakesh, Morocco',
		description:
			'Created an internal management system using PHP and MySQL for administrative operations. Focused on backend logic and data management.',
		technologies: ['PHP', 'MySQL'],
		alignment: 'right' as const,
	},
];

export const education = [
	{
		degree: "Bachelor's degree, Artificial Intelligence, Machine Learning & Big Data",
		institution:
			'National School of Applied Sciences of Khouribga (ENSA Khouribga)',
		period: 'Oct 2025 – Present',
		description:
			'Currently pursuing a degree focused on AI, machine learning algorithms, data analysis, and big data technologies.',
	},
	{
		degree: 'Higher National Diploma, DEVELOPMENT OF INFORMATION SYSTEMS',
		institution:
			'Advanced Technician Certificate (BTS) - Center BTS Hassan II Marrakesh',
		period: '2017 – 2019',
		description:
			'Completed advanced technician certificate in development of information systems.',
	},
	{
		degree: 'High School Diploma, SCIENCE PHYSIQUE',
		institution: 'Maghreb Al Arabi High School',
		period: '2015 – 2016',
		description:
			'Completed secondary education with a focus on physical sciences.',
	},
];

export const certificates = [
	{
		title: 'AWS Certified Cloud Practitioner',
		issuer: 'Amazon Web Services',
		date: '2024',
		description:
			'Demonstrated knowledge of AWS Cloud concepts, services, and terminology.',
		link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
	},
	{
		title: 'Google Data Analytics Professional Certificate',
		issuer: 'Google',
		date: '2023',
		description:
			'Completed coursework in data analytics, including SQL, R, Tableau, and data visualization.',
		link: 'https://www.coursera.org/professional-certificates/google-data-analytics',
	},
	{
		title: 'Meta React Developer Certificate',
		issuer: 'Meta',
		date: '2023',
		description:
			'Learned to build dynamic and interactive web apps using React.',
		link: 'https://www.coursera.org/professional-certificates/meta-react-developer',
	},
];

export const socialLinks = {
	github: 'https://github.com/idrissiradi',
	linkedin: 'https://www.linkedin.com/in/idrissi-radi-ahmed/',
	x: 'https://x.com/idrissiradi',
	email: 'idrissiradi@gmail.com',
};
