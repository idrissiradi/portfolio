export const projects = [
  {
    id: "01",
    tag: "ML / Data Science",
    featured: true,
    status: "Complete",
    title: "VisioMark — Multimodal AI Ad Creative Analyzer",
    description:
      "PFE project: an end-to-end multimodal AI system that analyzes advertising creatives and generates captions. Uses PyTorch EfficientNet-B0 for content type and mood classification, HuggingFace MiniLM for text encoding, Flan-T5-base for caption generation, and cosine similarity for visual-text alignment scoring. K-Means extracts dominant colors. Built without any external APIs — all models trained and served locally. FastAPI backend and React frontend.",
    stack: ["PyTorch", "EfficientNet-B0", "HuggingFace", "Flan-T5", "MiniLM", "FastAPI", "React", "K-Means"],
    metrics: [
      { value: "EfficientNet-B0", label: "Vision Model" },
      { value: "Flan-T5", label: "Caption Gen." },
      { value: "MiniLM", label: "Text Encoder" },
      { value: "Cosine Sim.", label: "Alignment Score" },
    ],
    href: "https://github.com/idrissiradi/ad-creative-analyzer",
  },
  {
    id: "02",
    tag: "ML / Data Science",
    featured: true,
    status: "Complete",
    title: "Sentiment Classifier — GloVe + LSTM on SST-2",
    description:
      "NLP pipeline for binary sentiment classification on the Stanford Sentiment Treebank (SST-2). Pre-trained GloVe-100d embeddings loaded as a frozen embedding layer, passed into a bidirectional LSTM with dropout regularization. Trained with Adam optimizer and binary cross-entropy loss. Achieved ~81.8% accuracy on the SST-2 validation set, matching reported benchmarks for non-transformer LSTM baselines on this dataset.",
    stack: ["PyTorch", "GloVe-100d", "LSTM", "NLP", "SST-2", "Python", "NumPy"],
    metrics: [
      { value: "81.8%", label: "Val. Accuracy" },
      { value: "GloVe-100d", label: "Embeddings" },
      { value: "BiLSTM", label: "Architecture" },
    ],
    href: "#",
  },
  {
    id: "03",
    tag: "ML / Data Science",
    featured: true,
    status: "Complete",
    title: "Fraud Detection System",
    description:
      'Binary classification pipeline on 6.3M+ financial transactions with severe class imbalance (0.3% fraud). Applied class_weight="balanced" to handle imbalance without oversampling. Built a full scikit-learn Pipeline with preprocessing (StandardScaler, OneHotEncoder) and Logistic Regression. Prioritized recall over precision to minimize missed fraud cases — a false negative is far more costly than a false positive in financial fraud. Deployed as an interactive Streamlit app for real-time transaction prediction.',
    stack: ["Python", "scikit-learn", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Kaggle"],
    metrics: [
      { value: "0.94", label: "Fraud Recall" },
      { value: "0.95", label: "Accuracy" },
      { value: "6.3M+", label: "Transactions" },
      { value: "0.3%", label: "Fraud Rate" },
    ],
    href: "#",
  },
  {
    id: "04",
    tag: "ML / Data Science",
    featured: true,
    status: "Complete",
    title: "Telco Customer Churn — Distributed ML",
    description:
      "End-to-end PySpark MLlib classification pipeline on a Hadoop/YARN distributed cluster. Full pipeline: data cleaning, StringIndexer → OneHotEncoder → Imputer → VectorAssembler, then three classifiers (Logistic Regression, Decision Tree, Random Forest) trained and evaluated on AUC-ROC, F1, and Accuracy. Models and predictions persisted to HDFS as Parquet.",
    stack: ["PySpark", "Hadoop", "YARN", "MLlib", "Python"],
    metrics: [
      { value: "PySpark", label: "Engine" },
      { value: "YARN", label: "Cluster" },
      { value: "MLlib", label: "Framework" },
    ],
    href: "#",
  },
  {
    id: "05",
    tag: "ML / Data Science",
    featured: true,
    status: "Complete",
    title: "Bulldozer Price Prediction (Kaggle Bluebook)",
    description:
      "Regression pipeline on 400,000+ heavy equipment auction records from Kaggle Bluebook. Handled complex temporal and categorical features: sale date decomposition, ordinal encoding of equipment specs, and imputation of 50+ columns with high missing rates. RandomForest regressor with time-based train/validation split to prevent data leakage. Optimized for RMSLE, the official Kaggle metric.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "RandomForest", "Kaggle"],
    metrics: [
      { value: "0.245", label: "RMSLE Score" },
      { value: "400K+", label: "Records" },
      { value: "50+", label: "Features" },
    ],
    href: "#",
  },
  {
    id: "06",
    tag: "ML / Data Science",
    featured: true,
    status: "Complete",
    title: "Heart Disease Prediction Model",
    description:
      "End-to-end binary classification comparing Logistic Regression, KNN, and Random Forest with hyperparameter tuning (RandomizedSearchCV + GridSearchCV). Best model: 88.5% test accuracy, 92% recall, 86.7% F1 on 5-fold cross-validation. High recall was the target metric; in medical screening, missing a positive is more costly than a false alarm.",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    metrics: [
      { value: "88.5%", label: "Accuracy" },
      { value: "92%", label: "Recall" },
      { value: "86.7%", label: "F1 Score" },
    ],
    href: "#",
  },
  {
    id: "07",
    tag: "ML / Data Science",
    featured: true,
    status: "Complete",
    title: "Titanic Survival Prediction (Kaggle)",
    description:
      "Logistic regression with structured feature engineering from raw fields: title extraction from passenger names (Mr/Mrs/Miss/Master), family size construction, cabin deck encoding, age binning. Used sklearn Pipeline to prevent data leakage. Result: 81% local accuracy, 77% Kaggle public leaderboard score.",
    stack: ["scikit-learn", "pandas", "Pipeline", "Kaggle"],
    metrics: [
      { value: "81%", label: "Local Acc." },
      { value: "77%", label: "Kaggle Score" },
    ],
    href: "#",
  },
];

export const skillGroups = [
  {
    title: "Machine Learning & Data Science",
    items: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Deep Learning & AI",
    items: ["PyTorch", "NLP", "Computer Vision", "HuggingFace", "Transformers"],
  },
  {
    title: "Big Data & Data Engineering",
    items: ["PySpark", "Hadoop / YARN", "HDFS"],
  },
  {
    title: "MLOps & Deployment",
    items: ["Docker", "FastAPI", "MLflow", "Git"],
  },
  {
    title: "Backend Development",
    items: ["Django", "FastAPI", "Laravel", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
];

// Slightly condensed set used in the About section's stack overview
export const aboutStack = [
  {
    title: "Machine Learning & Data Science",
    items: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Deep Learning & AI",
    items: ["PyTorch", "NLP", "Computer Vision", "Transformers", "Hugging Face"],
  },
  {
    title: "Big Data & MLOps",
    items: ["PySpark", "Hadoop", "FastAPI", "Docker"],
  },
  {
    title: "Backend & Databases",
    items: ["Django", "Laravel", "PostgreSQL", "MongoDB"],
  },
];

export const aboutFocus = [
  "Data Science & Machine Learning",
  "Deep Learning, NLP & Computer Vision",
  "Big Data & Data Engineering",
  "MLOps & API Deployment",
];

export const experience = [
  {
    company: "Evoleo Maroc",
    period: "Nov 2024 – Oct 2025",
    role: "Full Stack Developer",
    bullets: [
      "Developed and maintained full-stack web applications using FastAPI (Python), Laravel (PHP), React.js, and MySQL.",
      "Designed and implemented RESTful APIs consumed by web clients.",
      "Performed code reviews, technical support, and quality assurance across projects.",
    ],
    stack: ["FastAPI", "Laravel", "React.js", "MySQL", "Python", "PHP", "JavaScript"],
  },
  {
    company: "GreenCommunication",
    period: "Apr 2024 – Oct 2024",
    role: "Django Developer",
    bullets: [
      "Built responsive web applications using Django, Tailwind CSS, JavaScript, and MySQL.",
      "Designed and implemented RESTful APIs consumed by web clients.",
      "Performed code reviews, technical support, and quality assurance across projects.",
    ],
    stack: ["Django", "MySQL", "Tailwind CSS", "HTMX", "Alpine.js", "JavaScript", "Python"],
  },
  {
    company: "ONSSA Marrakech",
    period: "Oct 2022 – Mar 2024",
    role: "IT Technician & Data Management",
    bullets: [
      "Configured and maintained workstations, printers, and Windows/Office environments.",
      "Trained end-users on internal tools and procedures.",
      "Processed operational data and produced structured Excel reports for management.",
    ],
    stack: ["Excel", "Windows", "Microsoft Office", "Technical Support"],
  },
  {
    company: "The Originals Creative Agency",
    period: "Aug 2022 – Oct 2022",
    role: "Web Developer Intern",
    bullets: [
      "Internship focused on full-stack JavaScript development.",
      "Developed client-facing features using Node.js, Express.js, and ReactJS.",
      "Contributed to API integration and frontend component development.",
    ],
    stack: ["Node.js", "Express.js", "React.js", "JavaScript"],
  },
  {
    company: "GreenCommunication",
    period: "Jun 2021 – Oct 2021",
    role: "Django Developer Intern",
    bullets: [
      "Completed an internship as a Django developer intern.",
      "Built web application features using Django, MySQL, and Tailwind CSS.",
      "Learned team workflows, version control (Git), and deployment practices.",
    ],
    stack: ["Django", "MySQL", "Tailwind CSS", "JavaScript", "Python"],
  },
];

export const education = [
  {
    school: "National School of Applied Sciences of Khouribga (ENSA Khouribga)",
    location: "Khouribga, Morocco",
    degree: "Professional Bachelor's Degree in Artificial Intelligence, Machine Learning & Big Data",
    description:
      "Currently pursuing a degree focused on AI, machine learning algorithms, data analysis, and big data technologies.",
    tags: ["Deep Learning", "Big Data", "Machine Learning", "Data Science"],
    period: "Oct 2025 – Jun 2026",
  },
  {
    school: "BTS Center Hassan II",
    location: "Marrakesh, Morocco",
    degree: "Higher Technician Diploma in Information Systems Development",
    description: "Completed advanced technician certificate in development of information systems.",
    tags: [],
    period: "2017 – 2019",
  },
  {
    school: "Maghreb Al Arabi High School",
    location: "Marrakesh, Morocco",
    degree: "High School Diploma in Physical Sciences",
    description: "Completed secondary education with a focus on physical sciences.",
    tags: [],
    period: "2015 – 2016",
  },
];

export const certificates = [
  {
    title: "PyTorch for Deep Learning Professional Certificate",
    description:
      "Professional PyTorch track — building, training, and evaluating deep learning models, with emphasis on real-world deep learning workflows.",
    issuer: "DeepLearning.AI",
    year: "2026",
  },
  {
    title: "Machine Learning Scientist in Python",
    description:
      "Advanced ML scientist track — supervised/unsupervised learning, model evaluation, feature engineering, and end-to-end ML workflows in Python.",
    issuer: "DataCamp",
    year: "2026",
  },
  {
    title: "Data Scientist",
    description:
      "Comprehensive data science track covering Python, statistical modeling, machine learning, and data storytelling.",
    issuer: "DataCamp",
    year: "2026",
  },
  {
    title: "Professional Data Engineer",
    description: "Advanced data engineering — pipeline architecture, cloud data platforms, workflow orchestration.",
    issuer: "DataCamp",
    year: "2026",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const contactInfo = {
  location: "Marrakech, Morocco",
  email: "idrissiradi@gmail.com",
  linkedin: "#", // TODO: add real LinkedIn URL
  github: "https://github.com/idrissiradi",
  cvHref: "#", // TODO: link real CV file
};
