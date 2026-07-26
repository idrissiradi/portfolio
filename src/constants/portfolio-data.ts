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
		title: 'VisioMark — Multimodal AI Ad Creative Analyzer',
		description:
			'PFE project: an end-to-end multimodal AI system that analyzes advertising creatives and generates captions. Uses PyTorch EfficientNet-B0 for content type and mood classification, HuggingFace MiniLM for text encoding, Flan-T5-base for caption generation, and cosine similarity for visual-text alignment scoring. K-Means extracts dominant colors. Built without any external APIs — all models trained and served locally. FastAPI backend and React frontend.',
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
		tech: ['PySpark', 'Hadoop', 'YARN', 'MLlib', 'Python'],
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
			{
				from: 'Auction Records 400K+',
				to: 'Feature Engineering',
				highlight: true,
			},
			{
				from: 'Feature Engineering',
				to: 'RandomForestRegressor',
				highlight: true,
			},
			{
				from: 'RandomForestRegressor',
				to: 'RMSLE 0.245',
				highlight: true,
			},
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
			{
				from: 'Clinical Features',
				to: 'sklearn Pipeline',
				highlight: true,
			},
			{
				from: 'sklearn Pipeline',
				to: 'LR / KNN / Random Forest',
				highlight: true,
			},
			{
				from: 'Random Forest',
				to: '88.5% Acc · 92% Recall',
				highlight: true,
			},
			{
				label: 'RandomizedSearchCV + GridSearchCV · 5-fold CV',
				accent: true,
			},
		],
		link: 'https://github.com/idrissiradi/heart-disease-project',
	},
	{
		title: 'Titanic Survival Prediction (Kaggle)',
		description:
			'Logistic regression with structured feature engineering from raw fields: title extraction from passenger names (Mr/Mrs/Miss/Master), family size construction, cabin deck encoding, age binning. Used sklearn Pipeline to prevent data leakage. Result: 81% local accuracy, 77% Kaggle public leaderboard score.',
		tech: ['scikit-learn', 'pandas', 'Pipeline', 'Kaggle'],
		category: 'data-science',
		status: 'completed' as const,
		metrics: [
			{ value: '81%', key: 'Local Acc.' },
			{ value: '77%', key: 'Kaggle Score' },
		],
		featured: true,
		architecture: [
			{
				from: 'Raw Passenger Data',
				to: 'Feature Engineering',
				highlight: true,
			},
			{
				from: 'Feature Engineering',
				to: 'sklearn Pipeline',
				highlight: true,
			},
			{
				from: 'sklearn Pipeline',
				to: 'Logistic Regression',
				highlight: true,
			},
			{ label: '81% local · 77% Kaggle leaderboard', accent: true },
		],
		link: 'https://github.com/idrissiradi/titanic_ml',
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
		title: 'Full Stack Developer',
		company: 'Evoleo Maroc',
		period: 'Nov 2024 – Oct 2025',
		type: 'Full-time',
		location: 'Marrakesh, Morocco',
		description:
			'Developed and maintained full-stack web applications using FastAPI (Python), Laravel (PHP), React.js, and MySQL.\nDesigned and implemented RESTful APIs consumed by web clients.\nPerformed code reviews, technical support, and quality assurance across projects.',
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
			'Built responsive web applications using Django, Tailwind CSS, JavaScript, and MySQL.\nDesigned and implemented RESTful APIs consumed by web clients.\nPerformed code reviews, technical support, and quality assurance across projects.',
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
			'Configured and maintained workstations, printers, and Windows/Office environments.\nTrained end-users on internal tools and procedures.\nProcessed operational data and produced structured Excel reports for management.',
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
		degree: "Professional Bachelor's Degree in Artificial Intelligence, Machine Learning & Big Data",
		school: 'National School of Applied Sciences of Khouribga (ENSA Khouribga) - Khouribga, Morocco',
		period: 'Oct 2025 – Jun 2026',
		description:
			'Currently pursuing a degree focused on AI, machine learning algorithms, data analysis, and big data technologies.',
		tags: ['Deep Learning', 'Big Data', 'Machine Learning', 'Data Science'],
		current: false,
	},
	{
		degree: 'Higher Technician Diploma in Information Systems Development',
		school: 'BTS Center Hassan II - Marrakesh, Morocco',
		period: '2017 – 2019',
		description:
			'Completed advanced technician certificate in development of information systems.',
	},
	{
		degree: 'High School Diploma in Physical Sciences',
		school: 'Maghreb Al Arabi High School - Marrakesh, Morocco',
		period: '2015 – 2016',
		description:
			'Completed secondary education with a focus on physical sciences.',
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
		credentialUrl: 'https://coursera.org/share/511cfd1cff4e6f00dc2e2f8d4d6fbdf7',
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
	cv: 'https://drive.google.com/file/d/1QUDPuYCD0Y2Go0XERZYc9lYZOyLd-6GM/preview',
};
