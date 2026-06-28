import { ExperienceItem, SkillCategory, ProjectItem } from './types';

export const statsData = [
  { value: 1, label: '01+', suffix: ' Years Experience', desc: 'Working in high-pace corporate & start-up environments.' },
  { value: 2, label: '02', suffix: ' Companies Worked', desc: 'Frost & Sullivan and Onwords Smart Solutions.' },
  { value: 5, label: '05+', suffix: ' Projects Completed', desc: 'Case studies in CRM automation, BI, and active campaigns.' },
  { value: 6, label: '06+', suffix: ' Core Tools Utilized', desc: 'Power BI, Google & Meta Ads, Excel, Python, and CRM.' }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-frost',
    company: 'Frost & Sullivan',
    location: 'Corporate Office',
    position: 'CRM Executive',
    duration: 'December 2025 – Present',
    responsibilities: [
      'CRM operations management and enterprise lead lifecycle tracking across global pipelines.',
      'Ensuring absolute data validation, customer data quality assurance, and compliance checks.',
      'Generating high-level commercial business reporting and interactive operational dashboard generation.',
      'Providing end-to-end stakeholder support, analytics support, and spearheading process improvement initiatives.',
      'Automating complex recurring reporting workflows to save valuable executive overhead hours.'
    ],
    tech: ['CRM Administration', 'Lead Lifecycle', 'Data Validation', 'Business Reporting', 'Dashboard Automation'],
    logoType: 'consulting'
  },
  {
    id: 'exp-onwords',
    company: 'Onwords Smart Solutions',
    location: 'Coimbatore',
    position: 'Digital Marketing Executive',
    duration: '5 Months (2023 - 2024)',
    responsibilities: [
      'Successfully deployed and managed highly optimized Meta Ads & Google Ads campaigns.',
      'Conducted strict daily campaign performance monitoring, audience targeting, and multi-layered segmentation.',
      'Generated granular performance reporting and ROI analysis to maximize advertising return on investment.',
      'Created custom Power BI dashboards integrated with Excel reporting, delivering instant marketing insights.',
      'Tracked central KPIs and audited advertising campaign effectiveness to drive strategic lead generation.'
    ],
    tech: ['Meta Ads', 'Google Ads', 'Power BI', 'Microsoft Excel', 'Campaign Analytics', 'ROI Analysis'],
    logoType: 'digital'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analytics',
    icon: 'BarChart3',
    skills: [
      'Power BI',
      'Microsoft Excel',
      'Data Visualization',
      'KPI Tracking',
      'Dashboard Reporting'
    ]
  },
  {
    title: 'CRM Operations',
    icon: 'Hub',
    skills: [
      'Lead Management',
      'CRM Administration',
      'Data Validation',
      'Customer Lifecycle Tracking',
      'Process Optimization'
    ]
  },
  {
    title: 'Digital Marketing',
    icon: 'AdsClick',
    skills: [
      'Meta Ads',
      'Google Ads',
      'Campaign Analytics',
      'Audience Segmentation',
      'Performance Reporting'
    ]
  },
  {
    title: 'Technical & Business',
    icon: 'Terminal',
    skills: [
      'Python',
      'SQL',
      'Statistics',
      'Business Intelligence',
      'Problem Solving'
    ]
  }
];

export const projectData: ProjectItem[] = [
  {
    id: 'project-dashboard',
    title: 'Analytics Dashboard Project',
    subtitle: 'Enterprise Performance Monitor',
    description: 'Comprehensive business intelligence & data visualization suite for monitoring key operational KPIs with dynamic filtering and automated Excel feeds.',
    longDescription: 'This project demonstrates the translation of raw organizational metrics into visual analytical controls. Developed to support executive-level operational reviews, it implements a structured data schema with live dashboard reports.',
    category: 'Data Analytics',
    tech: ['Power BI', 'Microsoft Excel', 'DAX', 'SQL', 'Data Modeling'],
    imageType: 'dashboard',
    caseStudyMetrics: [
      { label: 'Data Latency Reduced', value: '75%' },
      { label: 'Reporting Speed-up', value: '4x' },
      { label: 'Automated KPI Cards', value: '24' }
    ],
    keyOutcomes: [
      'Designed star-schema data models to join cross-departmental operations data.',
      'Formulated advanced DAX measures for complex dynamic trend calculations.',
      'Integrated real-time spreadsheet updates via scheduled automated data pipelines.'
    ]
  },
  {
    id: 'project-marketing',
    title: 'Marketing Campaign Performance Analysis',
    subtitle: 'Stochastic Advertising Optimization',
    description: 'A complete campaign performance audit and performance simulation. Analyzes demographic segmentation, visual ad variant returns, cost-per-acquisition (CPA), and overall ROI.',
    longDescription: 'A systematic analytics review examining historical performance data from Meta and Google advertising campaigns. By applying statistical clustering, the project isolates high-affinity audiences and provides a roadmap for optimized budget reallocation.',
    category: 'Digital Marketing',
    tech: ['Google Ads', 'Meta Ads', 'Excel PowerQuery', 'Cohort Analysis'],
    imageType: 'campaign',
    caseStudyMetrics: [
      { label: 'CPA Reduction', value: '22%' },
      { label: 'ROAS Improvement', value: '1.8x' },
      { label: 'Reallocated Budget', value: '$12K' }
    ],
    keyOutcomes: [
      'Created custom marketing attribution models for long-cycle consumer products.',
      'Isolated seasonal ad placement decay rates using cohort performance groups.',
      'Automated daily programmatic data refreshes from search and social platforms.'
    ]
  },
  {
    id: 'project-crm',
    title: 'CRM Reporting Solution',
    subtitle: 'Lead Lifecycle Automation & Funnel Audit',
    description: 'High-end analytical solution designed to track quality metrics of inbound leads. Bridges field operations and executive pipelines, implementing systematic validation checks.',
    longDescription: 'Addressing lead leakage and pipeline integrity, this solution standardizes lead capture scoring and traces conversions. It models customer lifecycle checkpoints to reveal stages where potential contracts drop off.',
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
    description: 'A premium consulting-style Power BI solution tailored for corporate managers. Delivers real-time strategic support by visualizing market expansion indices and pipeline performance.',
    longDescription: 'A custom BI dashboard structured in a clean Swiss-minimalist layout representing Frost & Sullivan and McKinsey-style information density. Emphasizes clean grid alignments, structural color accents, and extreme legibility of high-priority metrics.',
    category: 'Business Intelligence',
    tech: ['Power BI', 'SQL Server', 'UI/UX Design', 'Data Visualization'],
    imageType: 'bi',
    caseStudyMetrics: [
      { label: 'Executive Adoption Rate', value: '92%' },
      { label: 'Time-to-Insight', value: '<5s' },
      { label: 'Cross-functional Panels', value: '6' }
    ],
    keyOutcomes: [
      'Built tailored report structures prioritizing core metrics with zero dashboard noise.',
      'Constructed highly performant queries addressing complex nested SQL databases.',
      'Deployed strict role-based access configurations to protect sensitive corporate intelligence.'
    ]
  },
  {
    id: 'project-stats',
    title: 'Statistical Research & Data Analysis',
    subtitle: 'Mathematical Models for Lead Scoring',
    description: 'Academic and professional research exploring mathematical regression models and predictive analytics. Formulates dynamic tier classifications for marketing campaign leads.',
    longDescription: 'Leveraging post-graduate mathematics expertise, this project models the correlation between early campaign engagement values and eventual lifecycle conversion probability. Developed using Python statistical libraries.',
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
