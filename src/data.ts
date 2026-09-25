import { ExperienceItem, SkillCategory, ProjectItem } from './types';

export const statsData = [
  { value: 3, label: '$3M+', suffix: ' FY26 Revenue Tracked', desc: '' },
  { value: 6, label: '06+', suffix: ' Projects Shipped', desc: 'End-to-end analytics, ML, BI, and CRM builds.' },
  { value: 12, label: '12', suffix: ' Core Tools', desc: 'Python, SQL, PostgreSQL, Fabric, Power BI, Streamlit, XGBoost, more.' },
  { value: 4, label: '04', suffix: ' ML Models in Production', desc: 'Lead scoring, survival analysis, CLV, and causal uplift.' }
];
 
export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-frost',
    company: 'Frost & Sullivan',
    location: 'Chennai, India',
    position: 'Executive — Customer Experience (CRM Analytics)',
    duration: 'December 2025 – Present',
    responsibilities: [
      'Own the CRM analytics layer for the India business — building Microsoft Fabric dashboards tracking $2.5M+ in FY26 revenue across 7,600+ enquiries, 3,200+ leads, and 4,400+ firmographic records across Americas, APAC, EU, Middle East, and South Asia.',
      'Designed multi-page Power BI reports covering sales performance by practice area, revenue by request type / service / quarter, and lead-source attribution — used weekly by senior commercial stakeholders.',
      'Built DAX measures and semantic models to surface KPI trends (MoM revenue movement, enquiry-to-lead conversion, channel attribution) with no manual refresh overhead.',
      'Integrated multi-source data (Excel, SharePoint, SQL Server, Dynamics 365, HubSpot, master datasets) via Power Query and Microsoft Fabric — eliminating manual consolidation across four business accounts.',
      'Ran CRM data operations at scale — lead qualification, routing, deduplication, contact enrichment, and high-volume processing for thousands of records per week.',
      'Partnered with marketing and sales to structure lead-source taxonomy (Direct/Web, Internal Referral, Email Marketing, External Distributors, PR/Social, Conference/Webinar) that now drives channel-level reporting decisions.'
    ],
    tech: ['Microsoft Fabric', 'Power BI', 'DAX', 'Power Query', 'SQL', 'Dynamics 365', 'HubSpot'],
    logoType: 'consulting'
  },
  {
    id: 'exp-onwords',
    company: 'Onwords Smart Solutions',
    location: 'Coimbatore, India',
    position: 'Digital Marketing Executive',
    duration: 'May 2025 – Sep 2025',
    responsibilities: [
      'Delivered daily, weekly and monthly commercial reports across four client accounts — giving account managers visibility into sales trend, visit volume, and campaign performance.',
      'Designed and maintained a marketing performance dashboard integrating campaign activity, customer engagement, and revenue data — the primary view used in weekly client reviews.',
      'Managed Meta Ads and Google Ads campaigns with daily performance monitoring, audience targeting, and multi-layered segmentation.',
      'Generated granular ROI analysis and custom Power BI dashboards bound to live Excel reports, delivering instant marketing insights.',
      'Coordinated across sales, creative, and analytics teams to define reporting requirements, standardise metric definitions, and remove ambiguity in performance discussions.'
    ],
    tech: ['Meta Ads', 'Google Ads', 'Power BI', 'Excel', 'Campaign Analytics', 'ROI Analysis'],
    logoType: 'digital'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Engineering',
    icon: 'Database',
    skills: [
      'Microsoft Fabric',
      'PostgreSQL',
      'PySpark',
      'Spark SQL',
      'Medallion Architecture',
      'ETL Pipeline Design',
      'Star Schema',
      'Data Quality'
    ]
  },
  {
    title: 'Analytics & BI',
    icon: 'BarChart3',
    skills: [
      'Power BI',
      'DAX',
      'Power Query',
      'Semantic Models',
      'Streamlit',
      'Plotly',
      'KPI Reporting',
      'Executive Dashboards'
    ]
  },
  {
    title: 'Machine Learning',
    icon: 'BrainCircuit',
    skills: [
      'scikit-learn',
      'XGBoost',
      'Cox Proportional Hazards',
      'Logistic Regression',
      'Random Forest',
      'Model Calibration',
      'Quantile Risk Tiers',
      'Uplift Modeling (T-learner)',
      'Customer Lifetime Value'
    ]
  },
  {
    title: 'CRM & RevOps',
    icon: 'Hub',
    skills: [
      'HubSpot',
      'Microsoft Dynamics 365',
      'Lead Scoring',
      'Lead Routing',
      'Funnel Analytics',
      'Campaign Attribution',
      'Customer Segmentation',
      'Revenue Operations'
    ]
  }
];

export const projectData: ProjectItem[] = [
  {
    id: 'project-creditpulse',
    title: 'CreditPulse — CRM & RevOps Analytics Platform',
    subtitle: 'End-to-End Medallion Pipeline + ML + Dashboard',
    liveDemo: 'https://creditpulse-analytics.streamlit.app',
    githubUrl: 'https://github.com/STELLARSCRIPTER/Credit-Risk',
    description: 'A production-style analytics platform spanning raw CRM data through a Bronze → Silver → Gold medallion warehouse, four production ML models, and an 11-page executive dashboard. Deployed publicly on Streamlit Community Cloud with cloud PostgreSQL (Supabase).',
    longDescription: 'Built end-to-end on PostgreSQL, Python, scikit-learn, XGBoost, lifelines, Plotly, Streamlit, and Prefect — with a fully idempotent pipeline orchestrated as 8 dependent tasks with retry policies and per-task timeouts. Diagnosed and resolved a 20-minute runtime bottleneck by vectorising a survival prediction call (~40× speedup).',
    category: 'Marketing / RevOps Analytics Engineering',
    tech: ['PostgreSQL', 'Python', 'scikit-learn', 'XGBoost', 'lifelines', 'Prefect', 'Streamlit', 'Supabase'],
    imageType: 'dashboard',
    caseStudyMetrics: [
      { label: 'Lead Scoring AUC', value: '0.77' },
      { label: 'Cox PH C-index', value: '0.675' },
      { label: 'Portfolio CLV', value: '$170M' },
      { label: 'Do Not Disturb Leads', value: '2,612' }
    ],
    keyOutcomes: [
      'Built a 50,871-lead medallion pipeline (Bronze → Silver → Gold) with deliberate data-quality issues and full idempotency.',
      'Trained and calibrated a Random Forest lead-scoring model at AUC 0.77 with a full calibration check.',
      'Developed a Cox Proportional Hazards survival model (C-index 0.675) forecasting per-lead time-to-conversion.',
      'Modelled survival-integrated Customer Lifetime Value — $170M discounted portfolio CLV across the book.',
      'Built a T-learner causal uplift model distinguishing 10,730 Persuadable leads from 2,612 Do-Not-Disturb leads — an insight A/B testing alone cannot produce.',
      'Orchestrated the full pipeline with Prefect 3.x — 8 dependent tasks with retry policies, timeouts, and a verified 5m 11s run.'
    ]
  },
  {
    id: 'project-churn',
    title: 'Customer Churn Performance Analysis',
    subtitle: 'Retention Analytics & Segmentation',
    liveDemo: 'https://public.tableau.com/views/churn_modelling_17838472688850/Churn_Analysis',
    description: 'A customer-focused analytics solution evaluating churn behaviour and supporting retention-driven marketing strategies across demographics, geography, and activity levels.',
    longDescription: 'Analyses segmentation across customer demographics, geography, and activity status to identify high-risk groups and engagement gaps. Supports CRM and marketing teams in optimising targeting, retention campaigns, and lifecycle management.',
    category: 'Customer Analytics',
    tech: ['PostgreSQL', 'Python', 'Tableau', 'Excel', 'Customer Segmentation'],
    imageType: 'campaign',
    caseStudyMetrics: [
      { label: 'Churn Rate Identified', value: '20.5%' },
      { label: 'High-Risk Segment', value: 'Age 40–55' },
      { label: 'Active Customers', value: '51.5%' }
    ],
    keyOutcomes: [
      'Identified high churn concentration across specific age groups and regions.',
      'Built customer segmentation model based on demographics and activity status.',
      'Enabled comparison between active and exited customers for behavioural insights.',
      'Designed interactive Tableau dashboard for real-time KPI tracking and filtering.',
      'Improved visibility into customer retention patterns for CRM decision-making.',
      'Performed exploratory analysis to detect patterns influencing customer churn.'
    ]
  },
  {
    id: 'project-crm',
    title: 'CRM Reporting Solution',
    subtitle: 'Lead Lifecycle Automation & Funnel Audit',
    description: 'High-end analytical solution tracking quality metrics of inbound leads, bridging field operations and executive pipelines with systematic validation checks.',
    longDescription: 'Addressing lead leakage and pipeline integrity, this solution standardises lead capture scoring and traces conversions through customer lifecycle checkpoints to reveal stages where potential contracts drop off.',
    category: 'CRM Operations',
    tech: ['CRM Ops', 'VBA Data Cleaner', 'Advanced Excel', 'Funnel Analytics'],
    imageType: 'crm',
    caseStudyMetrics: [
      { label: 'Lead Leakage Prevented', value: '31%' },
      { label: 'QA Check Automation', value: '95%' },
      { label: 'Funnel Visibility', value: '100%' }
    ],
    keyOutcomes: [
      'Enforced automated customer record data validation rules via script structures.',
      'Mapped touchpoint latencies to reveal bottlenecks in regional account assignments.',
      'Produced modular, presentation-ready slide decks directly bound to active reports.'
    ]
  },
  {
    id: 'project-bi',
    title: 'Business Intelligence Dashboard',
    subtitle: 'Stakeholder Strategic Reporting Portal',
    description: 'A consulting-style Power BI solution tailored for corporate managers — delivering real-time strategic support by visualising market expansion indices and pipeline performance.',
    longDescription: 'A custom BI dashboard structured in a clean Swiss-minimalist layout mirroring Frost & Sullivan and McKinsey-style information density. Emphasises clean grid alignments, structural colour accents, and extreme legibility of high-priority metrics.',
    category: 'Business Intelligence',
    tech: ['Power BI', 'SQL Server', 'UI/UX Design', 'Data Visualization'],
    imageType: 'bi',
    caseStudyMetrics: [
      { label: 'Executive Adoption Rate', value: '92%' },
      { label: 'Time-to-Insight', value: '<5s' },
      { label: 'Cross-functional Panels', value: '6' }
    ],
    keyOutcomes: [
      'Built tailored report structures prioritising core metrics with zero dashboard noise.',
      'Constructed highly performant queries addressing complex nested SQL databases.',
      'Deployed strict role-based access configurations to protect sensitive corporate intelligence.'
    ]
  },
  {
    id: 'project-stats',
    title: 'Statistical Research & Data Analysis',
    subtitle: 'Mathematical Models for Lead Scoring',
    description: 'Academic and professional research exploring mathematical regression models and predictive analytics for marketing campaign lead classification.',
    longDescription: 'Leveraging post-graduate mathematics expertise, this project models the correlation between early campaign engagement values and eventual lifecycle conversion probability using Python statistical libraries.',
    category: 'Technical & Business',
    tech: ['Python', 'Pandas/NumPy', 'Regression Analysis', 'Mathematical Modeling'],
    imageType: 'stats',
    caseStudyMetrics: [
      { label: 'Scoring Predictive Power', value: '89%' },
      { label: 'Mathematics Formulations', value: '3' },
      { label: 'Audited Samples', value: '25K+' }
    ],
    keyOutcomes: [
      'Applied advanced regression analysis to estimate dynamic weight assignments.',
      'Reduced manual verification overhead by automatically filtering outlier registrations.',
      'Drafted clear mathematical methodologies translated into corporate language for C-suite decision makers.'
    ]
  }
];