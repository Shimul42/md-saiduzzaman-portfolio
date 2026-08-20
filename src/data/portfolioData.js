export const portfolioData = {
  personal: {
    name: "Md. Saiduzzaman",
    title: "AI/ML Researcher | Computer Science & Engineering Graduate",
    tagline: "Exploring Artificial Intelligence through Machine Learning, Deep Learning, Computer Vision, Explainable AI, and interdisciplinary research.",
    location: "Rajshahi, Bangladesh",
    email: "shimulhussian711@gmail.com",
    phone: "+880 1767-270092",
    github: "https://github.com/Shimul42",
    linkedin: "https://www.linkedin.com/in/md-saiduzzaman-424467300",
    domainUrl: "https://md-saiduzzaman.vercel.app"
  },
  education: [
    {
      degree: "Bachelor of Science (B.Sc.) in Computer Science & Engineering",
      institution: "Varendra University",
      location: "Rajshahi, Bangladesh",
      graduationDate: "July 2026",
      cgpa: "3.65",
      maxCgpa: "4.00",
      highlights: [
        "Specialized coursework in Machine Learning, Deep Learning, Image Processing, and Computational Algorithms.",
        "Author and co-author of accepted peer-reviewed undergraduate conference papers.",
        "Undergraduate Thesis on Computational Binding-Site Prediction via AlphaFold models."
      ]
    }
  ],
  profile: {
    summary: "Computer Science & Engineering graduate with a CGPA of 3.65/4.00 from Varendra University, with research and project experience in Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and Explainable AI. Experienced in applying AI and computational methods to healthcare, agriculture, and bioinformatics problems, with conference research contributions and a bachelor's thesis involving AlphaFold and machine learning. Interested in advanced AI research, particularly deep learning, computer vision, explainable AI, and multimodal learning."
  },
  researchInterests: [
    "Artificial Intelligence & Deep Learning",
    "Computer Vision & Pattern Recognition",
    "Explainable AI (XAI) & Interpretability (SHAP)",
    "Bioinformatics & Computational Biology (AlphaFold)",
    "Multimodal Machine Learning",
    "Healthcare AI & Clinical Diagnostics",
    "Agricultural AI & Precision Farming"
  ],
  research: [
    {
      id: "thesis-tb",
      title: "Binding Site Prediction of Tuberculosis-Related Proteins Using AlphaFold and Machine Learning Approaches: A Computational Study",
      type: "Bachelor's Thesis Research",
      status: "Thesis research completed; manuscript in preparation for journal submission.",
      statusType: "preparation",
      domain: "Bioinformatics & Computational Drug Discovery",
      description: "Computational binding-site prediction using AlphaFold-derived protein structures and machine learning algorithms to assist structural analysis and computational drug discovery pipelines for tuberculosis targets.",
      methodology: [
        "AlphaFold 3D structural model acquisition and stereochemical validation",
        "Spatial coordinate feature extraction and amino acid microenvironment representation",
        "Supervised machine learning algorithms trained for pocket/binding-residue classification",
        "Validation against experimentally resolved crystallographic complexes"
      ],
      tags: ["AlphaFold", "Computational Biology", "Machine Learning", "Tuberculosis", "Binding-Site Prediction"]
    },
    {
      id: "emotion-recognition",
      title: "Facial Emotion Recognition via Deep Transfer Learning",
      type: "Ongoing Research",
      status: "Ongoing Research",
      statusType: "ongoing",
      domain: "Computer Vision & Deep Learning",
      description: "Developing robust facial emotion classification pipelines resilient to illumination variance, occlusions, and facial orientation through fine-tuned convolutional architectures and custom augmentation policies.",
      methodology: [
        "Facial landmark detection and adaptive region-of-interest cropping",
        "Evaluation of deep CNN backbones with transfer learning",
        "Data augmentation strategies to address class imbalance across fine-grained emotions"
      ],
      tags: ["Computer Vision", "Deep Learning", "Facial Emotion", "Transfer Learning", "Data Augmentation"]
    },
    {
      id: "wesad-stress",
      title: "Multimodal Stress Detection via Physiological Signals (WESAD)",
      type: "Ongoing Research",
      status: "Ongoing Research",
      statusType: "ongoing",
      domain: "Multimodal Machine Learning & Healthcare AI",
      description: "Investigating stress and affective state classification using multimodal biosignals (ECG, EDA, Respiration, Temperature) from wearable sensor arrays with deep temporal feature extractors.",
      methodology: [
        "Time-domain, frequency-domain, and statistical feature engineering across raw sensor channels",
        "Artifact reduction and Butterworth bandpass filtering",
        "Multimodal fusion using deep sequential learning models"
      ],
      tags: ["Multimodal ML", "WESAD Dataset", "ECG", "EDA", "Physiological Signals", "Deep Learning"]
    },
    {
      id: "heart-disease-xai",
      title: "Interpretable Heart Disease Prediction Framework using Ensemble Learning & SHAP",
      type: "Ongoing Research",
      status: "Ongoing Research",
      statusType: "ongoing",
      domain: "Explainable AI & Clinical Diagnostic AI",
      description: "Designing high-accuracy clinical diagnostic workflows for cardiovascular disease risk stratification, incorporating TreeSHAP values for local and global model interpretability.",
      methodology: [
        "Comparative assessment of tree-based ensembles (XGBoost, Random Forest, LightGBM)",
        "Repeated stratified cross-validation to mitigate clinical bias",
        "Explainable AI (SHAP summary and force plots) for clinical decision support"
      ],
      tags: ["Explainable AI", "SHAP", "Ensemble Learning", "Predictive Modeling", "Healthcare AI"]
    }
  ],
  publications: [
    {
      id: "ucics-2026-heart",
      title: "Clinical Utility of Machine Learning Algorithms in Predicting the Presence of Heart Disease: A Cross-Validated Analysis",
      conference: "UCICS 2026 — 2nd Undergraduate Conference on Intelligent Computing and Systems",
      status: "Accepted, published, and presented",
      year: "2026",
      summary: "Presented an empirical validation of supervised machine learning algorithms across standardized clinical cardiovascular datasets with cross-validation pipelines to verify generalizability.",
      tags: ["Machine Learning", "Heart Disease Prediction", "Cross-Validation", "Clinical AI"]
    },
    {
      id: "ucics-2025-plastic",
      title: "Advancing Plastic Pollution Detection in Underwater Environments Using CNN Architectures",
      conference: "UCICS 2025 — 1st Undergraduate Conference on Intelligent Computing and Systems",
      status: "Accepted, published, and presented",
      year: "2025",
      summary: "Implemented convolutional neural network architectures to detect and classify submerged plastic debris from underwater imagery under degraded visual conditions.",
      tags: ["CNN", "Computer Vision", "Environmental AI", "Plastic Pollution"]
    }
  ],
  projects: [
    {
      id: "agroguard-ai",
      title: "AgroGuard AI 2.0",
      subtitle: "AI-Powered Smart Agriculture Advisory Platform",
      featured: true,
      description: "An AI-powered agricultural advisory platform integrating meteorological data streams and computer-vision-based crop disease diagnosis to support smallholder farmers with actionable interventions.",
      architecture: [
        "Frontend: Interactive, mobile-responsive React dashboard with localized language support",
        "Backend: High-throughput asynchronous FastAPI microservice handling inference pipelines",
        "Vision Model: Deep Convolutional Neural Network trained to identify foliage pathologies",
        "Persistence & Ops: PostgreSQL relational database with containerized Docker deployment"
      ],
      technologies: ["Python", "PyTorch / TensorFlow", "Computer Vision", "FastAPI", "React", "PostgreSQL", "Docker"],
      github: "https://github.com/Shimul42/AgroGuard-AI-2.0",
      stats: {
        accuracy: "High diagnostic precision across multiple leaf pathologies",
        deployment: "Docker Containerized",
        latency: "< 250ms API response"
      }
    }
  ],
  skills: {
    programming: ["Python", "C++", "Java", "JavaScript", "SQL", "C"],
    ai_ml: ["Machine Learning", "Deep Learning", "Computer Vision", "Explainable AI (XAI)", "Multimodal Learning", "Transfer Learning"],
    frameworks_libraries: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "XGBoost", "SHAP", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    bioinformatics: ["AlphaFold", "Protein Structure Analysis", "Binding-Site Prediction", "Computational Drug Discovery", "PDB Data Processing"],
    web_backend: ["React.js", "FastAPI", "Node.js", "HTML5", "CSS3 / Tailwind CSS", "RESTful APIs"],
    databases_tools: ["PostgreSQL", "MySQL", "Git", "GitHub", "Docker", "Linux / Bash", "MATLAB", "LaTeX"]
  },
 certificates: [
    {
      id: "cert-1",
      title: "UCICS 2026 — Certificate of Participation",
      issuer: "UCICS 2026 — 2nd Undergraduate Conference on Intelligent Computing and Systems",
      year: "2026",
      category: "Conference & Academic",
      image: "/certificates/Scan_20260820_182625.jpg",
      description: "Active participation in conference technical sessions and academic research tracks."
    },
    {
      id: "cert-2",
      title: "UCICS 2026 — Certificate of Appreciation for Volunteer Contribution",
      issuer: "UCICS 2026 — Varendra University",
      year: "2026",
      category: "Academic Leadership",
      image: "/certificates/Scan_20260820_182740.jpg",
      description: "Recognized for organizational, logistical, and technical volunteer support in executing UCICS 2026."
    },
    {
      id: "cert-3",
      title: "UCICS 2026 — Research Author Recognition",
      issuer: "UCICS 2026 — Intelligent Computing and Systems",
      year: "2026",
      category: "Research Contribution",
      image: "/certificates/Scan_20260820_182656.jpg",
      description: "Recognized author for accepted clinical machine learning research paper on heart disease prediction."
    },
    {
      id: "cert-4",
      title: "UCICS 2025 — Research Author Recognition",
      issuer: "UCICS 2025 — 1st Undergraduate Conference on Intelligent Computing and Systems",
      year: "2025",
      category: "Research Contribution",
      image: "/certificates/Scan_20260820_182715.jpg",
      description: "Recognized author for underwater environmental CNN computer vision research paper."
    },
    {
      id: "cert-5",
      title: "National AI Build-a-Thon — Final Round Participant",
      issuer: "Milliox Bangladesh",
      year: "2024",
      category: "Hackathon & Competition",
      image: "/certificates/Scan_20260820_182727.jpg",
      description: "Qualified for the competitive national final round solving real-world applied AI engineering challenges."
    },
    {
      id: "cert-6",
      title: "VU Tech Carnival 2024 — Certificate of Achievement",
      issuer: "VU Tech Carnival 2024 — Varendra University",
      year: "2024",
      category: "Technical Competition",
      image: "/certificates/Scan_20260820_182753.jpg",
      description: "Awarded for exceptional performance in university-wide technical innovation tracks."
    },
    {
      id: "cert-7",
      title: "3D Printing Workshop",
      issuer: "Robotic Society of Varendra University",
      year: "2024",
      category: "Workshop & Engineering",
      image: "/certificates/Scan_20260820_183351.jpg",
      description: "Hands-on engineering workshop on rapid prototyping, slicing software, and 3D fabrication."
    },
    {
      id: "cert-8",
      title: "AI for NextGen Leaders",
      issuer: "Varendra University Science Club",
      year: "2024",
      category: "Leadership & AI",
      image: "/certificates/photo_2026-08-20_18-43-28.jpg",
      description: "Specialized training on AI ethics, forward-looking technologies, and academic leadership."
    },
    {
      id: "cert-9",
      title: "Tech Debate 3.0",
      issuer: "Department of Computer Science & Engineering, Varendra University",
      year: "2023",
      category: "Debate & Communication",
      image: "/certificates/photo_2026-08-20_18-43-50.jpg",
      description: "Technical debate competition critically analyzing ethical implications of generative AI and automation."
    }
  ],
  cv: {
    assetPath: "/cv/Md_Saiduzzaman_Academic_CV.pdf",
    fileName: "Md_Saiduzzaman_Academic_CV.pdf",
    lastUpdated: "July 2026"
  }
};