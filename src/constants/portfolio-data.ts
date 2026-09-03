import { Code2, Server, Brain, BarChart3 } from 'lucide-react';

export const skills = [
	{ icon: Brain, title: 'Data Science & Machine Learning', color: 'accent' },
	{
		icon: Code2,
		title: 'Deep Learning, NLP & Computer Vision',
		color: 'primary',
	},
	{ icon: BarChart3, title: 'Big Data & Data Engineering', color: 'accent' },
	{ icon: Server, title: 'MLOps & API Deployment', color: 'primary' },
];

export const stackGroups = [
	{
		name: 'Machine Learning & Data Science',
		pills: [
			{ label: 'Python', active: true },
			{ label: 'scikit-learn', active: true },
			{ label: 'pandas', active: true },
			{ label: 'NumPy', active: true },
			{ label: 'Matplotlib', active: true },
			{ label: 'Seaborn', active: true },
		],
	},
	{
		name: 'Deep Learning & AI',
		pills: [
			{ label: 'PyTorch', active: true },
			{ label: 'NLP', active: true },
			{ label: 'Computer Vision', active: true },
			{ label: 'Transformers', active: true },
			{ label: 'Hugging Face', active: true },
		],
	},
	{
		name: 'Big Data & MLOps',
		pills: [
			{ label: 'PySpark', active: true },
			{ label: 'Hadoop', active: true },
			{ label: 'FastAPI', active: true },
			{ label: 'Docker', active: true },
		],
	},
	{
		name: 'Backend & Databases',
		pills: [
			{ label: 'Django', active: true },
			{ label: 'Laravel', active: true },
			{ label: 'PostgreSQL', active: true },
			{ label: 'MongoDB', active: true },
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
		title: 'VisioMark (Multimodal Ad Creative Analyzer)',
		description:
			'Final Year Capstone Project: an end-to-end multimodal AI system that analyzes advertising creatives and generates captions. Uses PyTorch EfficientNet-B0 for content type and mood classification, HuggingFace MiniLM for text encoding, Flan-T5-base for caption generation, and cosine similarity for visual-text alignment scoring. K-Means extracts dominant colors. Built without any external APIs — all models trained and served locally. FastAPI backend and React frontend.',
		tech: [
			'PyTorch',
			'EfficientNet-B0',
			'HuggingFace',
			'Flan-T5',
			'MiniLM',
			'FastAPI',
			'React',
			'K-Means',
		],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: 'EfficientNet-B0', key: 'Vision Model' },
			{ value: 'Flan-T5', key: 'Caption Gen.' },
			{ value: 'MiniLM', key: 'Text Encoder' },
			{ value: 'Cosine Similarity', key: 'Alignment Score' },
		],
		featured: true,
		link: 'https://github.com/idrissiradi/ad-creative-analyzer',
	},
	{
		title: 'Sentiment Classifier (GloVe + Bidirectional LSTM)⁠',
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
		featured: false,
		architecture: [
			{ from: 'Raw Text', to: 'GloVe-100d Embeddings', highlight: true },
			{
				from: 'GloVe-100d Embeddings',
				to: 'BiLSTM + Dropout',
				highlight: true,
			},
			{
				from: 'BiLSTM + Dropout',
				to: 'Binary Classification',
				highlight: true,
			},
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
		featured: false,
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
		tech: ['PySpark', 'Hadoop', 'YARN', 'MLlib', 'Python'],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: 'PySpark', key: 'Engine' },
			{ value: 'YARN', key: 'Cluster' },
			{ value: 'MLlib', key: 'Framework' },
		],
		featured: false,
		architecture: [
			{ from: 'Raw CSV', to: 'PySpark Pipeline', highlight: true },
			{
				from: 'PySpark Pipeline',
				to: 'StringIndexer → OHE → VectorAssembler',
				highlight: true,
			},
			{
				from: 'VectorAssembler',
				to: 'LR / DT / Random Forest',
				highlight: true,
			},
			{ label: 'Hadoop / YARN · HDFS Parquet output', accent: true },
		],
		link: 'https://github.com/idrissiradi/telco_churn_prediction',
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
			'XGBoost',
		],
	},
	{
		title: 'Deep Learning & AI',
		skills: [
			'PyTorch',
			'NLP',
			'Computer Vision',
			'HuggingFace',
			'Transformers',
		],
	},
	{
		title: 'Big Data & Data Engineering',
		skills: ['PySpark', 'Hadoop / YARN', 'HDFS'],
	},
	{
		title: 'MLOps & Deployment',
		skills: ['Docker', 'FastAPI', 'MLflow', 'Git '],
	},
	{
		title: 'Backend Development',
		skills: ['Django', 'FastAPI', 'Laravel', 'Node.js', 'Express.js'],
	},
	{
		title: 'Databases',
		skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
	},
];

export const experiences = [
	{
		title: 'Freelance Full-Stack Developer',
		company: 'Self-employed',
		period: 'Jan 2026 – Jul 2026',
		type: 'Freelance',
		location: 'Marrakesh, Morocco',
		description:
			'Developed custom business web applications for accounting, real estate, and rental/reservation management using Django, FastAPI, Laravel, React, and SQL databases.\nBuilt a multi-client accounting platform, with role-based permissions, invoicing, reporting, and dashboards, allowing accountants to manage clients remotely .\nDeveloped business management and rental/reservation applications that gave owners real-time visibility into purchases, sales, profits, and tax obligations, replacing manual bookkeeping and in-person follow-ups.\nWorked directly with clients to understand their workflows, translate requirements into technical solutions, and develop tailored applications.',
		tech: [
			'Django',
			'FastAPI',
			'Laravel',
			'React.js',
			'Python',
			'PHP',
			'SQL',
		],
		current: false,
	},
	{
		title: 'Full Stack Developer',
		company: 'Evoleo Maroc',
		period: 'Nov 2024 – Oct 2025',
		type: 'Full-time',
		location: 'Marrakesh, Morocco',
		description:
			'Led the development of an invoice scanner with FastAPI, React, and PaddleOCR, working with two interns to extract data from PDFs and images and identify recurring invoice templates.\nIntegrated extracted invoice data directly into the accounting software, including chart-of-accounts mapping and configurable Excel exports, removing a manual and error-prone data-entry step.\nIntegrated a hotel check-in/check-out system with a shared MySQL database, connecting operational data directly to Evoleo’s human resources software.\nProvided technical mentoring for the interns: code review, testing, support, and follow-up.',
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
			'Developed reservation and business management applications for the hospitality, restaurant, and car rental sectors using Django, Python, and JavaScript.\nBuilt a riad and restaurant management application covering room and table reservations, meals, activities, availability, invoicing, and client management, with dashboards for monitoring revenue, invoices, and profit.\nDeveloped a car rental application with check-in/check-out, vehicle availability, client document management, and operational dashboards, helping staff manage daily rental operations from one system.',
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
			'Provided IT support, resolving hardware, software, and network issues to minimize downtime.\nProcessed and structured operational datasets, preparing Excel reports.',
		tech: ['Excel', 'Windows', 'Microsoft Office', 'Technical Support'],
		current: false,
	},
	{
		title: 'Web Developer Intern',
		company: 'The Originals Creative Agency',
		period: 'Aug 2022 – Oct 2022',
		type: 'Internship',
		location: 'Marrakesh, Morocco',
		description:
			'Internship focused on full-stack JavaScript development.\nDeveloped client-facing features using Node.js, Express.js, and ReactJS.\nContributed to API integration and frontend component development.',
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
			'Completed an internship as a Django developer intern.\nBuilt web application features using Django, MySQL, and Tailwind CSS.\nLearned team workflows, version control (Git), and deployment practices.',
		tech: ['Django', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Python'],
		current: false,
	},
];

export const education = [
	{
		degree: "Master's Degree in Data Science and Artificial Intelligence (SDIA)",
		school: 'ENSET Mohammedia - Hassan II University of Casablanca',
		period: 'oct 2026 – Jun 2028',
		tags: ['AI', 'Machine Learning', 'Data Science', 'Deep Learning'],
		current: true,
	},
	{
		degree: "Professional Bachelor's Degree in Artificial Intelligence, Machine Learning & Big Data",
		school: 'National School of Applied Sciences of Khouribga (ENSA Khouribga) - Khouribga, Morocco',
		period: 'Oct 2025 – Jun 2026',

		tags: ['Deep Learning', 'Big Data', 'Machine Learning', 'Data Science'],
		current: false,
	},
	{
		degree: 'Higher Technician Diploma in Information Systems Development',
		school: 'BTS Center Hassan II - Marrakesh, Morocco',
		period: '2017 – 2019',
		current: false,
	},
	{
		degree: 'High School Diploma in Physical Sciences',
		school: 'Maghreb Al Arabi High School - Marrakesh, Morocco',
		period: '2015 – 2016',
		current: false,
	},
];

export const certificates = [
	// --- deeplearning ai ─────────────────────────────
	{
		title: 'PyTorch for Deep Learning Professional Certificate',
		issuer: 'DeepLearning.AI',
		date: '2026',
		description:
			'Professional PyTorch track — building, training, and evaluating deep learning models, with emphasis on real-world deep learning workflows.',
		credentialUrl:
			'https://coursera.org/share/511cfd1cff4e6f00dc2e2f8d4d6fbdf7',
	},
	// ── DataCamp — Science tracks ─────────────────────────────────
	{
		title: 'Machine Learning Scientist in Python',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Advanced ML scientist track — supervised/unsupervised learning, model evaluation, feature engineering, and end-to-end ML workflows in Python.',
		credentialUrl:
			'https://www.datacamp.com/completed/statement-of-accomplishment/track/cde61f3834c85eb2f07d6acf6981a99207d63306',
	},
	{
		title: 'Data Scientist',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Comprehensive data science track covering Python, statistical modeling, machine learning, and data storytelling.',
		credentialUrl:
			'https://www.datacamp.com/completed/statement-of-accomplishment/track/66e8954c2bb20241cd3ae36999eaae854aaeba4e',
	},

	// ── DataCamp — Engineering tracks ────────────────────────────
	{
		title: 'Professional Data Engineer',
		issuer: 'DataCamp',
		date: '2026',
		description:
			'Advanced data engineering — pipeline architecture, cloud data platforms, workflow orchestration.',
		credentialUrl:
			'https://www.datacamp.com/completed/statement-of-accomplishment/track/f6708b3aa7074212d85d3b165bba22cb064530f3',
	},
];

export const socialLinks = {
	github: 'https://github.com/idrissiradi',
	linkedin: 'https://www.linkedin.com/in/idrissi-radi-ahmed/',
	x: 'https://x.com/idrissiradi',
	email: 'idrissiradi@gmail.com',
	cv: 'https://drive.google.com/file/d/14EJj9YARLtFIsvl0LTdF7Y8rcTb_KLK8/preview',
};
