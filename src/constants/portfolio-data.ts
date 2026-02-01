import { Code2, Server, Brain, BarChart3 } from 'lucide-react';

export const skills = [
	{ icon: Code2, title: 'Full-Stack Development', color: 'primary' },
	{ icon: Brain, title: 'AI & Machine Learning', color: 'accent' },
	{ icon: Server, title: 'REST API Development', color: 'primary' },
	{
		icon: BarChart3,
		title: 'Data Analysis & Visualization',
		color: 'accent',
	},
];

export const navLinks = [
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Education', href: '#education' },
	// { label: "Certificates", href: "#certificates" },
	{ label: 'Contact', href: '#contact' },
];

export const projects = [
	{
		title: 'Accounting Firm Management System',
		description:
			'A complete web application designed to help accounting offices efficiently manage their clients, services, payments, and expenses. The system provides an intuitive dashboard, detailed service tracking, payment management, and easy-to-read financial insights.',
		image: 'https://idradi.com/img/ficogest.avif',
		tech: [
			'Laravel',
			'React',
			'MySQL',
			'shadcn UI',
			'Tailwind CSS',
			'Inertia.js',
		],
	},
	{
		title: 'Restaurant & Hotel Booking App',
		description:
			'A multi-tenant reservation platform for restaurants, hotels, and event venues. Features real-time availability checking, automated booking confirmations, and a comprehensive admin dashboard for managing reservations across multiple locations.',
		image: 'https://idradi.com/img/lebedouin.avif',
		tech: ['Django', 'Tailwind CSS', 'PostgreSQL', 'HTMX', 'Alpine.js'],
	},
	{
		title: 'Travel Planning Platform',
		description:
			'A travel companion app that generates personalized trip itineraries based on user preferences, offers interactive destination guides, and integrates seamless booking for flights and accommodations.',
		image: 'https://idradi.com/img/travel_planning.avif',
		tech: ['Django', 'MySQL', 'Tailwind CSS', 'HTMX', 'Alpine.js'],
	},
	{
		title: 'Fitness Management System',
		description:
			'A comprehensive gym platform featuring personalized workout plans, live streaming fitness classes, progress tracking with analytics, and member scheduling with class reservations.',
		image: 'https://idradi.com/img/fitness_management.avif',
		tech: ['Django', 'MySQL', 'Tailwind CSS', 'HTMX', 'Alpine.js'],
	},
	{
		title: 'Pizza Online Ordering System',
		description:
			'An online ordering platform with custom pizza builder, real-time order tracking, secure payment processing, and Redis-powered session management for optimal cart performance.',
		image: 'https://idradi.com/img/pizza_ordering.avif',
		tech: ['Django', 'React', 'PostgreSQL', 'Redis'],
	},
];

export const skillCategories = [
	{
		title: 'Frontend Development',
		skills: [
			'React',
			'TypeScript',
			'JavaScript',
			'Tailwind CSS',
			'HTML5',
			'CSS3',
			'Vite',
		],
	},
	{
		title: 'Backend Development',
		skills: [
			'Python',
			'Django',
			'FastAPI',
			'Node.js',
			'Express.js',
			'Laravel',
			'PHP',
		],
	},
	{
		title: 'Database & Storage',
		skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
	},
	{
		title: 'Data Science',
		skills: ['Machine Learning', 'Data Analysis', 'Big Data'],
	},
	{
		title: 'Development Tools',
		skills: ['Git', 'Docker', 'Linux', 'VS Code'],
	},
];

export const experiences = [
	{
		title: 'Full Stack Developer',
		company: 'Evoleo Maroc',
		period: 'Nov 2024 – Oct 2025 · Full-time · Marrakesh, Morocco',
		description:
			'Developed and maintained full-stack web applications using FastAPI, Laravel, and React.js. Designed RESTful APIs, ensured technical support, and conducted quality assurance testing.',
		tech: [
			'FastAPI',
			'Laravel',
			'React.js',
			'MySQL',
			'Python',
			'PHP',
			'JavaScript',
		],
		current: false,
	},
	{
		title: 'Django Developer',
		company: 'GreenCommunication',
		period: 'Apr 2024 – Oct 2024 · Full-time · Marrakesh, Morocco',
		description:
			'Built and maintained web applications using Django, Tailwind CSS, JavaScript, and MySQL. Focused on backend logic, UI integration, and improving overall system performance.',
		tech: [
			'Django',
			'MySQL',
			'Tailwind CSS',
			'HTMX',
			'Alpine.js',
			'JavaScript',
			'Python',
		],
	},
	{
		title: 'Assistant Accountant',
		company: 'ONSSA Marrakech',
		period: 'Oct 2022 – Mar 2024 · Full-time · Marrakesh, Morocco',
		description:
			'Handled accounting tasks including financial data entry, reporting, and reconciliation. Strengthened attention to detail and analytical thinking applicable to software development.',
		tech: ['Excel', 'Accounting Systems'],
	},
	{
		title: 'Web Developer Intern',
		company: 'The Originals Creative Agency',
		period: 'Aug 2022 – Oct 2022 · Internship · Marrakesh, Morocco',
		description:
			'Worked on full-stack development tasks using Node.js, Express.js, and React.js. Contributed to internal tools and client projects under supervision.',
		tech: ['Node.js', 'Express.js', 'React.js', 'JavaScript'],
	},
	{
		title: 'Django Developer Intern',
		company: 'GreenCommunication',
		period: 'Jun 2021 – Oct 2021 · Internship · Marrakesh, Morocco',
		description:
			'Built internal web platforms using Django, MySQL, and Tailwind CSS. Assisted in backend development, database modeling, and UI improvements.',
		tech: ['Django', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Python'],
	},
	{
		title: 'Web Developer Intern',
		company: 'Weshore Agency',
		period: 'May 2019 – May 2019 · Internship · Marrakesh, Morocco',
		description:
			'Developed a management web application using PHP and MySQL. Integrated WordPress components and contributed to improving workflow automation.',
		tech: ['PHP', 'MySQL', 'WordPress', 'JavaScript'],
	},
	{
		title: 'Web Developer Intern',
		company: 'Prefecture of Marrakesh',
		period: 'Jul 2018 – Jul 2018 · Internship · Marrakesh, Morocco',
		description:
			'Created an internal management system using PHP and MySQL for administrative operations. Focused on backend logic and data management.',
		tech: ['PHP', 'MySQL'],
	},
];

export const education = [
	{
		degree: "Bachelor's degree, Artificial Intelligence, Machine Learning & Big Data",
		school: 'National School of Applied Sciences of Khouribga (ENSA Khouribga)',
		period: 'Oct 2025 – Present',
		description:
			'Currently pursuing a degree focused on AI, machine learning algorithms, data analysis, and big data technologies.',
		current: true,
	},
	{
		degree: 'Higher National Diploma, DEVELOPMENT OF INFORMATION SYSTEMS',
		school: 'Advanced Technician Certificate (BTS) - Center BTS Hassan II Marrakesh',
		period: '2017 – 2019',
		description:
			'Completed advanced technician certificate in development of information systems.',
	},
	{
		degree: 'High School Diploma, SCIENCE PHYSIQUE',
		school: 'Maghreb Al Arabi High School',
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
