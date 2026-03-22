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
	{ icon: Brain, title: 'Machine Learning & Data Science', color: 'accent' },
	{ icon: BarChart3, title: 'Big Data & Data Engineering', color: 'accent' },
	{ icon: Server, title: 'MLOps & API Deployment', color: 'primary' },
	{ icon: Code2, title: 'Full-Stack Engineering', color: 'primary' },
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
			'End-to-end binary classification comparing Logistic Regression, KNN, and Random Forest with hyperparameter tuning (RandomizedSearchCV + GridSearchCV). Best model: 88.5% test accuracy, 92% recall, 86.7% F1 on 5-fold cross-validation. High recall was the target metric — in medical screening, missing a positive is more costly than a false alarm.',
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
		metrics: { accuracy: '88.5%', recall: '92%', f1: '86.7%' },
	},
	{
		title: 'Titanic Survival Prediction (Kaggle)',
		description:
			'Logistic regression with structured feature engineering from raw fields: title extraction from passenger names (Mr/Mrs/Miss/Master), family size construction, cabin deck encoding, age binning. Used sklearn Pipeline to prevent data leakage. Result: 81% local accuracy, 77% Kaggle public leaderboard score.',
		image: titanicMlImg,
		tech: [
			'Python',
			'scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'Seaborn',
		],

		github: 'https://github.com/idrissiradi/titanic_ml',
		category: 'data-science',
		metrics: { local: '81%', kaggle: '77%' },
	},

	{
		title: 'Telco Customer Churn — Distributed ML',
		description:
			'End-to-end PySpark MLlib classification pipeline on a Hadoop/YARN distributed cluster. Full pipeline: data cleaning, StringIndexer → OneHotEncoder → Imputer → VectorAssembler, then three classifiers (Logistic Regression, Decision Tree, Random Forest) trained and evaluated on AUC-ROC, F1, and Accuracy. Models and predictions persisted to HDFS as Parquet.',
		image: titanicMlImg,
		tech: ['PySpark', 'Hadoop', 'YARN', 'MLlib', 'HDFS', 'Python'],

		github: 'https://github.com/idrissiradi/telco_churn_prediction',
		category: 'data-science',
		metrics: { engine: 'PySpark', cluster: 'Hadoop/YARN', models: '3' },
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
		title: 'Machine Learning & Data Science',
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
		title: 'Data Engineering & Big Data',
		skills: [
			'PySpark',
			'Apache Spark',
			'Hadoop / HDFS',
			'YARN',
			'Apache Airflow',
			'SQL',
			'MongoDB',
		],
	},
	{
		title: 'MLOps & Deployment',
		skills: ['MLflow', 'Docker', 'FastAPI', 'Git', 'Linux', 'REST APIs'],
	},
	{
		title: 'Backend Development',
		skills: ['Python', 'Django', 'FastAPI', 'Laravel', 'Node.js', 'PHP'],
	},
	{
		title: 'Frontend Development',
		skills: [
			'React',
			'TypeScript',
			'JavaScript',
			'Tailwind CSS',
			'HTML5 / CSS3',
		],
	},
	{
		title: 'Database & Storage',
		skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
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
	// ── DataCamp — Engineering tracks ────────────────────────────
	{
		title: 'Professional Data Engineer',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Advanced data engineering track covering pipeline architecture, cloud data platforms, workflow orchestration, and production-grade data infrastructure.',
		credentialUrl: 'https://www.datacamp.com/portfolio/idrissiradi',
	},
	{
		title: 'Data Engineer',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Data engineering track covering ETL pipelines, data warehousing, database management, and scalable data processing with Python.',
		credentialUrl: 'https://www.datacamp.com/portfolio/idrissiradi',
	},
	{
		title: 'Associate Data Engineer',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Foundational data engineering track covering SQL, database design, data pipelines, and cloud storage fundamentals.',
		credentialUrl: 'https://www.datacamp.com/portfolio/idrissiradi',
	},

	// ── DataCamp — Science tracks ─────────────────────────────────
	{
		title: 'Data Scientist',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Comprehensive data science track covering Python, statistical modeling, machine learning, and data storytelling.',
		credentialUrl: 'https://www.datacamp.com/portfolio/idrissiradi',
	},
	{
		title: 'Associate Data Scientist in Python',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Data science track covering Python, data manipulation with Pandas, statistical analysis, machine learning with scikit-learn, and data visualization. Projects include Airbnb Market Trends, NYC School Test Results, and Students Mental Health analysis.',
		credentialUrl: 'https://www.datacamp.com/portfolio/idrissiradi',
	},
	{
		title: 'Data Analyst',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Data analysis track covering exploratory data analysis, data cleaning, statistical thinking, and visualization with Python.',
		credentialUrl: 'https://www.datacamp.com/portfolio/idrissiradi',
	},
	{
		title: 'Python Data Fundamentals',
		issuer: 'DataCamp',
		date: '2025',
		description:
			'Foundational Python track for data science: NumPy, Pandas, Matplotlib, and core data manipulation techniques.',
		credentialUrl: 'https://www.datacamp.com/portfolio/idrissiradi',
	},
];

export const socialLinks = {
	github: 'https://github.com/idrissiradi',
	linkedin: 'https://www.linkedin.com/in/idrissi-radi-ahmed/',
	x: 'https://x.com/idrissiradi',
	email: 'idrissiradi@gmail.com',
};
