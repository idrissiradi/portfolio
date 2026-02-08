import { Code2, Server, Brain, BarChart3 } from 'lucide-react';
import heartDiseaseImg from '../assets/images/heart-disease-classification-project.avif';
import titanicMlImg from '../assets/images/titanic_project.avif';
import accountingFirmImg from '../assets/images/ficogest.avif';
import butcherShopImg from '../assets/images/butcher_shop.avif';
import restaurantImg from '../assets/images/lebedouin.avif';
import travelImg from '../assets/images/travel_planning.avif';
import fitnessImg from '../assets/images/fitness_management.avif';
import pizzaImg from '../assets/images/pizza_ordering.avif';

export const skills = [
	{ icon: Code2, title: 'Full-Stack Development', color: 'primary' },
	{ icon: Brain, title: 'Machine Learning & Data Science', color: 'accent' },
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
	{ label: 'Certificates', href: '#certificates' },
	{ label: 'Contact', href: '#contact' },
];

export const projects = [
	// ==================== DATA SCIENCE PROJECTS ====================
	{
		title: 'Heart Disease Prediction Model',
		description:
			'Built an end-to-end machine learning classification model to predict heart disease risk using patient medical data. Performed exploratory data analysis, feature engineering, and compared multiple ML algorithms including Logistic Regression, KNN, and Random Forest to achieve optimal performance.',
		image: heartDiseaseImg,
		tech: [
			'Python',
			'scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'Seaborn',
			'Jupyter',
		],
		github: 'https://github.com/idrissiradi/heart-disease-project',
		category: 'data-science',
	},
	{
		title: 'Titanic Survival Prediction (Kaggle)',
		description:
			'Developed a machine learning model to predict passenger survival on the Titanic using the famous Kaggle dataset. Implemented data preprocessing, feature engineering, handled missing values, and achieved 81% accuracy with Random Forest Classifier.',
		image: titanicMlImg,
		tech: [
			'Python',
			'scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'Seaborn',
			'Google colab',
		],
		github: 'https://github.com/idrissiradi/titanic_ml',
		category: 'data-science',
	},

	{
		title: 'House Price Prediction Model',
		description:
			'Building a regression model to predict house prices based on features like location, size, and amenities. Applying feature selection, data normalization, and model evaluation techniques to optimize prediction accuracy.',
		image: titanicMlImg,
		tech: [
			'Python',
			'scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'Google colab',
		],
		github: '#',
		category: 'data-science',
	},

	// ==================== WEB DEVELOPMENT PROJECTS ====================
	{
		title: 'Butcher Shop Management System',
		description:
			'A complete management solution for butcher shops featuring real-time inventory tracking, sales and purchase management, supplier relationships, and profit monitoring. Provides comprehensive dashboards for business insights, automated stock alerts, and detailed financial reporting.',
		image: butcherShopImg,
		tech: [
			'Laravel',
			'React',
			'MySQL',
			'Inertia.js',
			'Tailwind CSS',
			'shadcn/ui',
		],
		github: 'https://github.com/idrissiradi/moujoud_app',
		category: 'web-development',
	},
	{
		title: 'Accounting Firm Management System',
		description:
			'A complete web application designed to help accounting offices efficiently manage their clients, services, payments, and expenses. The system provides an intuitive dashboard, detailed service tracking, payment management, and easy-to-read financial insights.',
		image: accountingFirmImg,
		tech: [
			'Laravel',
			'React',
			'MySQL',
			'shadcn UI',
			'Tailwind CSS',
			'Inertia.js',
		],
		github: 'https://github.com/idrissiradi/cabinet_management',
		category: 'web-development',
	},
	{
		title: 'Restaurant & Hotel Booking App',
		description:
			'A multi-tenant reservation platform for restaurants, hotels, and event venues. Features real-time availability checking, automated booking confirmations, and a comprehensive admin dashboard for managing reservations across multiple locations.',
		image: restaurantImg,
		tech: ['Django', 'Tailwind CSS', 'PostgreSQL', 'HTMX', 'Alpine.js'],
		github: '#',
		category: 'web-development',
	},
	{
		title: 'Travel Planning Platform',
		description:
			'A travel companion app that generates personalized trip itineraries based on user preferences, offers interactive destination guides, and integrates seamless booking for flights and accommodations.',
		image: travelImg,
		tech: ['Django', 'MySQL', 'Tailwind CSS', 'HTMX', 'Alpine.js'],
		github: '#',
		category: 'web-development',
	},
	{
		title: 'Fitness Management System',
		description:
			'A comprehensive gym platform featuring personalized workout plans, live streaming fitness classes, progress tracking with analytics, and member scheduling with class reservations.',
		image: fitnessImg,
		tech: ['Django', 'MySQL', 'Tailwind CSS', 'HTMX', 'Alpine.js'],
		github: '#',
		category: 'web-development',
	},
	{
		title: 'Pizza Online Ordering System',
		description:
			'An online ordering platform with custom pizza builder, real-time order tracking, secure payment processing, and Redis-powered session management for optimal cart performance.',
		image: pizzaImg,
		tech: ['Django', 'React', 'PostgreSQL', 'Redis'],
		github: '#',
		category: 'web-development',
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
		title: 'Data Science & Machine Learning',
		skills: [
			'Python',
			'scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'Seaborn',
			'Jupyter Notebook',
		],
	},
	{
		title: 'Development Tools',
		skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Postman'],
	},
];

export const experiences = [
	{
		title: 'Full Stack Developer',
		company: 'Evoleo Maroc',
		period: 'Nov 2024 – Oct 2025',
		type: 'Full-time',
		location: 'Marrakesh, Morocco',
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
		period: 'Apr 2024 – Oct 2024',
		type: 'Full-time',
		location: 'Marrakesh, Morocco',
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
		current: false,
	},
	{
		title: 'Assistant Accountant',
		company: 'ONSSA Marrakech',
		period: 'Oct 2022 – Mar 2024',
		type: 'Full-time',
		location: 'Marrakesh, Morocco',
		description:
			'Handled accounting tasks including financial data entry, reporting, and reconciliation. Strengthened attention to detail and analytical thinking applicable to software development.',
		tech: ['Excel', 'Accounting Systems'],
		current: false,
	},
	{
		title: 'Web Developer Intern',
		company: 'The Originals Creative Agency',
		period: 'Aug 2022 – Oct 2022',
		type: 'Internship',
		location: 'Marrakesh, Morocco',
		description:
			'Worked on full-stack development tasks using Node.js, Express.js, and React.js. Contributed to internal tools and client projects under supervision.',
		tech: ['Node.js', 'Express.js', 'React.js', 'JavaScript'],
		current: false,
	},
	{
		title: 'Django Developer Intern',
		company: 'GreenCommunication',
		period: 'Jun 2021 – Oct 2021',
		type: 'Internship',
		location: 'Marrakesh, Morocco',
		description:
			'Built internal web platforms using Django, MySQL, and Tailwind CSS. Assisted in backend development, database modeling, and UI improvements.',
		tech: ['Django', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Python'],
		current: false,
	},
	{
		title: 'Web Developer Intern',
		company: 'Weshore Agency',
		period: 'May 2019 – May 2019',
		type: 'Internship',
		location: 'Marrakesh, Morocco',
		description:
			'Developed a management web application using PHP and MySQL. Integrated WordPress components and contributed to improving workflow automation.',
		tech: ['PHP', 'MySQL', 'WordPress', 'JavaScript'],
		current: false,
	},
	{
		title: 'Web Developer Intern',
		company: 'Prefecture of Marrakesh',
		period: 'Jul 2018 – Jul 2018',
		type: 'Internship',
		location: 'Marrakesh, Morocco',
		description:
			'Created an internal management system using PHP and MySQL for administrative operations. Focused on backend logic and data management.',
		tech: ['PHP', 'MySQL'],
		current: false,
	},
];

export const education = [
	{
		degree: "Bachelor's Degree in AI Engineering, Machine Learning & Big Data",
		school: 'National School of Applied Sciences of Khouribga (ENSA Khouribga)',
		period: 'Oct 2025 – Present',
		description:
			'Currently pursuing a degree focused on AI, machine learning algorithms, data analysis, and big data technologies.',
		current: true,
	},
	{
		degree: 'Higher Technician Diploma in Information Systems Development',
		school: 'BTS Center Hassan II - Marrakesh',
		period: '2017 – 2019',
		description:
			'Completed advanced technician certificate in development of information systems.',
	},
	{
		degree: 'High School Diploma in Physical Sciences',
		school: 'Maghreb Al Arabi High School',
		period: '2015 – 2016',
		description:
			'Completed secondary education with a focus on physical sciences.',
	},
];

export const certificates = [
	{
		title: 'Associate Data Scientist in Python',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Comprehensive data science track covering Python programming, data manipulation with Pandas, statistical analysis, machine learning with scikit-learn, and data visualization.',
		credentialUrl:
			'https://www.datacamp.com/tracks/associate-data-scientist-in-python',
	},
	{
		title: 'Git & GitHub Essentials',
		issuer: 'Amigoscode',
		date: '2024',
		description:
			'Completed certification covering version control fundamentals, Git workflows, GitHub collaboration, branching strategies, and best practices for software development.',
		credentialUrl: 'https://amigoscode.com',
	},
	{
		title: 'Python Programming Certificate',
		issuer: 'Udemy',
		date: '2023',
		description:
			'Completed comprehensive Python programming course covering fundamentals, object-oriented programming, data structures, and practical application development.',
		credentialUrl: '#',
	},
	{
		title: 'Java Programming Certificate',
		issuer: 'Udemy',
		date: '2023',
		description:
			'Completed Java programming certification covering core Java concepts, OOP principles, data structures, and software development practices.',
		credentialUrl: '#',
	},
];

export const socialLinks = {
	github: 'https://github.com/idrissiradi',
	linkedin: 'https://www.linkedin.com/in/idrissi-radi-ahmed/',
	x: 'https://x.com/idrissiradi',
	email: 'idrissiradi@gmail.com',
};
