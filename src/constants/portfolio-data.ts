import { Code2, Server, Brain, BarChart3 } from 'lucide-react';
import accountingFirmImg from '../assets/images/ficogest.avif';
import butcherShopImg from '../assets/images/butcher_shop.avif';
import restaurantImg from '../assets/images/lebedouin.avif';
import travelImg from '../assets/images/travel_planning.avif';
import fitnessImg from '../assets/images/fitness_management.avif';
import pizzaImg from '../assets/images/pizza_ordering.avif';

export const skills = [
	{ icon: Brain, title: 'Machine Learning & Deep Learning', color: 'accent' },
	{ icon: Code2, title: 'Full-Stack Engineering', color: 'primary' },
	{ icon: BarChart3, title: 'Big Data & Data Engineering', color: 'accent' },
	{ icon: Server, title: 'MLOps & API Deployment', color: 'primary' },
];

export const stackGroups = [
	{
		name: 'ML / Deep learning & Data Science',
		pills: [
			{ label: 'Python', active: true },
			{ label: 'scikit-learn', active: true },
			{ label: 'pandas', active: true },
			{ label: 'NumPy', active: true },
			{ label: 'Matplotlib', active: true },
			{ label: 'Seaborn', active: true },
			{ label: 'PyTorch', active: true },
			{ label: 'NLP', active: true },
			{ label: 'Computer Vision', active: true },
		],
	},
	{
		name: 'Data Engineering & Big Data',
		pills: [
			{ label: 'PySpark', active: true },
			{ label: 'SQL', active: true },
			{ label: 'MongoDB', active: true },
			{ label: 'Hadoop / YARN', active: true },
			{ label: 'HDFS', active: true },
			{ label: 'Apache Airflow', active: false },
		],
	},
	{
		name: 'MLOps & Deployment',
		pills: [
			{ label: 'Docker', active: true },
			{ label: 'FastAPI', active: true },
			{ label: 'Streamlit', active: true },
			{ label: 'Git', active: true },
			{ label: 'Linux', active: true },
			{ label: 'MLflow', active: false },
		],
	},
	{
		name: 'Web Development & Frameworks',
		pills: [
			{ label: 'Django', active: true },
			{ label: 'Laravel', active: true },
			{ label: 'React', active: true },
		],
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
		title: 'VisioMark — Multimodal AI Ad Creative Analyzer',
		description:
			'PFE project: an end-to-end multimodal AI system that analyzes advertising creatives and generates captions. Uses PyTorch EfficientNet-B0 for content type and mood classification, HuggingFace MiniLM for text encoding, Flan-T5-base for caption generation, and cosine similarity for visual-text alignment scoring. K-Means extracts dominant colors. Built without any external APIs — all models trained and served locally. FastAPI backend, trilingual React frontend (EN/FR/AR + RTL), fully containerized with Docker.',
		tech: [
			'PyTorch',
			'EfficientNet-B0',
			'HuggingFace',
			'Flan-T5',
			'MiniLM',
			'FastAPI',
			'React',
			'Docker',
			'K-Means',
		],
		category: 'data-science',
		status: 'live' as const,
		metrics: [
			{ value: 'EfficientNet-B0', key: 'Vision Model' },
			{ value: 'Flan-T5', key: 'Caption Gen.' },
			{ value: 'EN/FR/AR', key: 'Trilingual UI' },
			{ value: 'No APIs', key: 'Fully Local' },
		],
		featured: true,
		architecture: [
			{ from: 'Ad Image', to: 'EfficientNet-B0', highlight: true },
			{ from: 'EfficientNet-B0', to: 'Mood + Content Type', highlight: true },
			{ from: 'Ad Copy', to: 'MiniLM Encoder', highlight: true },
			{ from: 'MiniLM Encoder', to: 'Alignment Score (cosine)', highlight: true },
			{ label: 'Flan-T5 → Caption Generation', accent: true },
			{ label: 'FastAPI + Docker → React UI (EN/FR/AR)', accent: true },
		],
		link: 'https://github.com/idrissiradi/ad-creative-analyzer',
	},
	{
		title: 'Sentiment Classifier — GloVe + LSTM on SST-2',
		description:
			'NLP pipeline for binary sentiment classification on the Stanford Sentiment Treebank (SST-2). Pre-trained GloVe-100d embeddings loaded as a frozen embedding layer, passed into a bidirectional LSTM with dropout regularization. Trained with Adam optimizer and binary cross-entropy loss. Achieved ~81.8% accuracy on the SST-2 validation set, matching reported benchmarks for non-transformer LSTM baselines on this dataset.',
		tech: [
			'PyTorch',
			'GloVe-100d',
			'LSTM',
			'NLP',
			'SST-2',
			'Python',
			'NumPy',
		],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: '81.8%', key: 'Val. Accuracy' },
			{ value: 'GloVe-100d', key: 'Embeddings' },
			{ value: 'BiLSTM', key: 'Architecture' },
		],
		featured: true,
		architecture: [
			{ from: 'Raw Text', to: 'GloVe-100d Embeddings', highlight: true },
			{ from: 'GloVe-100d Embeddings', to: 'BiLSTM + Dropout', highlight: true },
			{ from: 'BiLSTM + Dropout', to: 'Binary Classification', highlight: true },
			{ label: 'SST-2 Dataset · Adam · BCE Loss', accent: true },
		],
		link: 'https://github.com/idrissiradi/glove-sentiment',
	},
	{
		title: 'Fraud Detection System',
		description:
			'Binary classification pipeline on 6.3M+ financial transactions with severe class imbalance (0.3% fraud). Applied class_weight="balanced" to handle imbalance without oversampling. Built a full scikit-learn Pipeline with preprocessing (StandardScaler, OneHotEncoder) and Logistic Regression. Prioritized recall over precision to minimize missed fraud cases — a false negative is far more costly than a false positive in financial fraud. Deployed as an interactive Streamlit app for real-time transaction prediction.',
		tech: [
			'Python',
			'scikit-learn',
			'Streamlit',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'Seaborn',
			'Kaggle',
		],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: '0.94', key: 'Fraud Recall' },
			{ value: '0.95', key: 'Accuracy' },
			{ value: '6.3M+', key: 'Transactions' },
			{ value: '0.3%', key: 'Fraud Rate' },
		],
		featured: true,
		architecture: [
			{ from: 'Raw Data', to: 'EDA & Cleaning', highlight: true },
			{ from: 'EDA & Cleaning', to: 'sklearn Pipeline', highlight: true },
			{
				from: 'sklearn Pipeline',
				to: 'Logistic Regression',
				highlight: true,
			},
			{ label: 'Streamlit App', accent: true },
		],
		link: 'https://github.com/idrissiradi/fraud-detection-ML',
	},
	{
		title: 'Telco Customer Churn — Distributed ML',
		description:
			'End-to-end PySpark MLlib classification pipeline on a Hadoop/YARN distributed cluster. Full pipeline: data cleaning, StringIndexer → OneHotEncoder → Imputer → VectorAssembler, then three classifiers (Logistic Regression, Decision Tree, Random Forest) trained and evaluated on AUC-ROC, F1, and Accuracy. Models and predictions persisted to HDFS as Parquet.',
		tech: [ 'PySpark', 'Hadoop', 'YARN', 'MLlib', 'Python' ],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: 'PySpark', key: 'Engine' },
			{ value: 'YARN', key: 'Cluster' },
			{ value: 'MLlib', key: 'Framework' },
		],
		featured: true,
		architecture: [
			{ from: 'Raw CSV', to: 'PySpark Pipeline', highlight: true },
			{ from: 'PySpark Pipeline', to: 'StringIndexer → OHE → VectorAssembler', highlight: true },
			{ from: 'VectorAssembler', to: 'LR / DT / Random Forest', highlight: true },
			{ label: 'Hadoop / YARN · HDFS Parquet output', accent: true },
		],
		link: 'https://github.com/idrissiradi/telco_churn_prediction',
	},
	{
		title: 'Bulldozer Price Prediction (Kaggle Bluebook)',
		description:
			'Regression pipeline on 400,000+ heavy equipment auction records from Kaggle Bluebook. Handled complex temporal and categorical features: sale date decomposition, ordinal encoding of equipment specs, and imputation of 50+ columns with high missing rates. RandomForest regressor with time-based train/validation split to prevent data leakage. Optimized for RMSLE; the official Kaggle metric.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
		tech: [
			'Python',
			'scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'RandomForest',
			'Kaggle',
		],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: '0.245', key: 'RMSLE Score' },
			{ value: '400K+', key: 'Records' },
			{ value: '50+', key: 'Features' },
		],
		featured: true,
		architecture: [
			{ from: 'Auction Records 400K+', to: 'Feature Engineering', highlight: true },
			{ from: 'Feature Engineering', to: 'RandomForestRegressor', highlight: true },
			{ from: 'RandomForestRegressor', to: 'RMSLE 0.245', highlight: true },
			{ label: 'Time-based split · No data leakage', accent: true },
		],
		link: 'https://github.com/idrissiradi/bulldozer-price-prediction',
	},
	{
		title: 'Heart Disease Prediction Model',
		description:
			'End-to-end binary classification comparing Logistic Regression, KNN, and Random Forest with hyperparameter tuning (RandomizedSearchCV + GridSearchCV). Best model: 88.5% test accuracy, 92% recall, 86.7% F1 on 5-fold cross-validation. High recall was the target metric; in medical screening, missing a positive is more costly than a false alarm.',
		tech: [
			'Python',
			'scikit-learn',
			'Pandas',
			'NumPy',
			'Matplotlib',
			'Seaborn',
			'Jupyter',
		],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: '88.5%', key: 'Accuracy' },
			{ value: '92%', key: 'Recall' },
			{ value: '86.7%', key: 'F1 Score' },
		],
		featured: true,
		architecture: [
			{ from: 'Clinical Features', to: 'sklearn Pipeline', highlight: true },
			{ from: 'sklearn Pipeline', to: 'LR / KNN / Random Forest', highlight: true },
			{ from: 'Random Forest', to: '88.5% Acc · 92% Recall', highlight: true },
			{ label: 'RandomizedSearchCV + GridSearchCV · 5-fold CV', accent: true },
		],
		link: 'https://github.com/idrissiradi/heart-disease-project',
	},
	{
		title: 'Titanic Survival Prediction (Kaggle)',
		description:
			'Logistic regression with structured feature engineering from raw fields: title extraction from passenger names (Mr/Mrs/Miss/Master), family size construction, cabin deck encoding, age binning. Used sklearn Pipeline to prevent data leakage. Result: 81% local accuracy, 77% Kaggle public leaderboard score.',
		tech: [ 'scikit-learn', 'pandas', 'Pipeline', 'Kaggle' ],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: '81%', key: 'Local Acc.' },
			{ value: '77%', key: 'Kaggle Score' },
		],
		featured: true,
		architecture: [
			{ from: 'Raw Passenger Data', to: 'Feature Engineering', highlight: true },
			{ from: 'Feature Engineering', to: 'sklearn Pipeline', highlight: true },
			{ from: 'sklearn Pipeline', to: 'Logistic Regression', highlight: true },
			{ label: '81% local · 77% Kaggle leaderboard', accent: true },
		],
		link: 'https://github.com/idrissiradi/titanic_ml',
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
			'shadcn UI',
			'Tailwind CSS',
			'Inertia.js',
		],
		category: 'web-development',
		status: 'live' as const,
		link: 'https://github.com/idrissiradi/moujoud_app',
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
		category: 'web-development',
		status: 'live' as const,
		link: 'https://github.com/idrissiradi/cabinet_management',
	},
	{
		title: 'Restaurant & Hotel Booking App',
		description:
			'A multi-tenant reservation platform for restaurants, hotels, and event venues. Features real-time availability checking, automated booking confirmations, and a comprehensive admin dashboard for managing reservations across multiple locations.',
		image: restaurantImg,
		tech: [ 'Django', 'Tailwind CSS', 'PostgreSQL', 'HTMX', 'Alpine.js' ],
		category: 'web-development',
		status: 'live' as const,
	},
	{
		title: 'Travel Planning Platform',
		description:
			'A travel companion app that generates personalized trip itineraries based on user preferences, offers interactive destination guides, and integrates seamless booking for flights and accommodations.',
		image: travelImg,
		tech: [ 'Django', 'MySQL', 'Tailwind CSS', 'HTMX', 'Alpine.js' ],
		category: 'web-development',
		status: 'live' as const,
	},
	{
		title: 'Fitness Management System',
		description:
			'A comprehensive gym platform featuring personalized workout plans, live streaming fitness classes, progress tracking with analytics, and member scheduling with class reservations.',
		image: fitnessImg,
		tech: [ 'Django', 'MySQL', 'Tailwind CSS', 'HTMX', 'Alpine.js' ],
		category: 'web-development',
		status: 'live' as const,
	},
	{
		title: 'Pizza Online Ordering System',
		description:
			'An online ordering platform with custom pizza builder, real-time order tracking, secure payment processing, and Redis-powered session management for optimal cart performance.',
		image: pizzaImg,
		tech: [ 'Django', 'React', 'PostgreSQL', 'Redis' ],
		category: 'web-development',
		status: 'live' as const,
	},
];

export const skillCategories = [
	{
		title: 'ML / Deep Learning',
		skills: [
			'Python',
			'scikit-learn',
			'PyTorch',
			'NLP',
			'Computer Vision',
			'HuggingFace',
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
			'PySpark / MLlib',
			'Apache Spark',
			'Hadoop / YARN / HDFS',
			'Apache Airflow',
			'SQL & NoSQL',
			'MongoDB',
		],
	},
	{
		title: 'MLOps & Deployment',
		skills: [
			'Docker',
			'FastAPI',
			'streamlit',
			'Git / GitHub',
			'Linux / Bash',
		],
	},
	{
		title: 'Backend Development',
		skills: [
			'Python',
			'Django',
			'FastAPI',
			'Laravel',
			'Node.js',
			'Express.js',
			'PHP',
		],
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
		skills: [ 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis' ],
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
		title: 'IT Technician & Data Management',
		company: 'ONSSA Marrakech',
		period: 'Oct 2022 – Mar 2024',
		type: 'Full-time',
		location: 'Marrakesh, Morocco',
		description:
			'Technical support, end-user training, data processing and Excel reporting.',
		tech: [ 'Excel', 'Windows', 'Microsoft Office', 'Technical Support' ],
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
		tech: [ 'Node.js', 'Express.js', 'React.js', 'JavaScript' ],
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
		tech: [ 'Django', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Python' ],
		current: false,
	},
];

export const education = [
	{
		degree: "Bachelor's Degree in AI Engineering, Machine Learning & Big Data",
		school: 'National School of Applied Sciences of Khouribga (ENSA Khouribga)',
		period: 'Oct 2025 – Jun 2026',
		description:
			'Currently pursuing a degree focused on AI, machine learning algorithms, data analysis, and big data technologies.',
		tags: [
			'Deep Learning',
			'Big Data',
			'Machine Learning',
			'Data Science',
		],
		current: false,
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
	// ── DataCamp — Science tracks ─────────────────────────────────
	{
		title: 'Data Scientist',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Comprehensive data science track covering Python, statistical modeling, machine learning, and data storytelling.',
		credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/66e8954c2bb20241cd3ae36999eaae854aaeba4e',
	},
	{
		title: 'Associate Data Scientist in Python',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Data science track covering Python, data manipulation with Pandas, statistical analysis, machine learning with scikit-learn, and data visualization. Projects include Airbnb Market Trends, NYC School Test Results, and Students Mental Health analysis.',
		credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/403922b98320622a3ad116803fb57eb4fc82b938',
	},
	{
		title: 'Data Analyst',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Data analysis track covering exploratory data analysis, data cleaning, statistical thinking, and visualization with Python.',
		credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/4db2e36fdce7e1b03f5f2f2014f33f83c2494849',
	},

	// ── DataCamp — Engineering tracks ────────────────────────────
	{
		title: 'Professional Data Engineer',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Advanced data engineering track covering pipeline architecture, cloud data platforms, workflow orchestration, and production-grade data infrastructure.',
		credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/f6708b3aa7074212d85d3b165bba22cb064530f3',
	},
	{
		title: 'Data Engineer',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Data engineering track covering ETL pipelines, data warehousing, database management, and scalable data processing with Python.',
		credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/6f3328031d3e6978628a41afb531fa5b3820801f',
	},
	{
		title: 'Associate Data Engineer',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Foundational data engineering track covering SQL, database design, data pipelines, and cloud storage fundamentals.',
		credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/5d2ed0c02a01857b5ba3da686a2947209798e187',
	},
	{
		title: 'Python Data Fundamentals',
		issuer: 'DataCamp',
		date: '2025',
		description:
			'Foundational Python track for data science: NumPy, Pandas, Matplotlib, and core data manipulation techniques.',
		credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/58161f1b7d2ac44e9c4fe8685c9910375b99d5af',
	},
	// ── IBM — Credly badges  ─────────────────────────────────
	{
		title: 'Hadoop Foundations',
		issuer: 'IBM / Credly',
		date: '2025',
		description: 'Foundational Hadoop certification covering HDFS architecture, MapReduce, YARN, and distributed data processing on the Hadoop ecosystem.',
		credentialUrl: 'https://www.credly.com/badges/c81bb2cc-c22f-4483-a58b-5d2a7ff4d7ab',
	},
	{
		title: 'Git',
		issuer: 'IBM / Credly',
		date: '2021',
		description: 'Version control certification covering Git fundamentals, branching strategies, merging, and collaborative workflows.',
		credentialUrl: 'https://www.credly.com/badges/3d43b48b-d04d-4b36-8d17-a8659cd4dbc3',
	},
	{
		title: 'API & Web Development',
		issuer: 'IBM / Credly',
		date: '2021',
		description: 'Certification covering RESTful API design, HTTP fundamentals, and web development practices.',
		credentialUrl: 'https://www.credly.com/badges/434007b8-693a-4912-8e61-53fa0bee1c12',
	},

];

export const socialLinks = {
	github: 'https://github.com/idrissiradi',
	linkedin: 'https://www.linkedin.com/in/idrissi-radi-ahmed/',
	x: 'https://x.com/idrissiradi',
	email: 'idrissiradi@gmail.com',
	cv: 'https://www.idradi.com/',
};
