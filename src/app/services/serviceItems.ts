// Data-driven catalogue for the Services hub. Each entry renders its own
// SEO-optimized page at /services/<slug> via the ServiceItem page + the shared
// TechnicalPageLayout. Grouped into the four categories shown on the Services hub.

export type ServiceCategory =
  | 'Statistical & Data'
  | 'Research Topics'
  | 'Writing & Dissertation'
  | 'Formatting & Support';

export interface ServiceSection {
  title: string;
  content: string;
}

export interface ServiceItem {
  slug: string;
  category: ServiceCategory;
  /** lucide-react icon name resolved in the Services hub + ServiceItem page */
  icon: string;
  cardTitle: string; // short label for the hub card
  cardBlurb: string; // one-line blurb for the hub card
  title: string; // H1 / page title
  subtitle: string;
  metaDescription: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  sections: ServiceSection[];
  related: { name: string; url: string }[];
}

const ZERO = 'Every deliverable carries our guarantee of zero plagiarism and zero AI-detected content — 100% original, human-written work backed by a Turnitin-style similarity report.';

export const serviceItems: ServiceItem[] = [
  // ─────────────────────────── STATISTICAL & DATA ───────────────────────────
  {
    slug: 'statistical-analysis',
    category: 'Statistical & Data',
    icon: 'LineChart',
    cardTitle: 'Statistical Analysis',
    cardBlurb: 'Regression, ANOVA, SEM & more',
    title: 'Statistical Analysis Services',
    subtitle: 'Regression, ANOVA, SEM and advanced modelling for research',
    metaDescription: 'Expert statistical analysis services for thesis and research — regression, ANOVA, MANOVA, SEM, and factor analysis with correct test selection, interpretation, and publication-ready tables.',
    primaryKeywords: ['statistical analysis services', 'thesis statistical analysis', 'data analysis for research'],
    secondaryKeywords: ['regression analysis', 'ANOVA and MANOVA', 'structural equation modelling', 'factor analysis', 'hypothesis testing'],
    sections: [
      { title: 'What our statistical analysis covers', content: 'We handle the full quantitative pipeline: data cleaning and coding, descriptive statistics, assumption checks, and the right inferential tests for your hypotheses. Whether you need multiple regression, ANOVA/MANOVA, chi-square, correlation, reliability analysis, or structural equation modelling (SEM), our statisticians choose methods that match your research design rather than forcing your data into a familiar test.' },
      { title: 'Correct tests, defensible interpretation', content: 'Reviewers reject papers when the wrong test is used or assumptions are ignored. We verify normality, homogeneity, multicollinearity, and sample adequacy before analysis, and we document every decision so your methodology chapter and viva answers are airtight. You receive annotated output plus a plain-language interpretation you can actually explain to your committee.' },
      { title: 'Publication-ready results', content: 'Results arrive as clean APA/journal-style tables and figures, ready to drop into your thesis or manuscript. ' + ZERO },
    ],
    related: [
      { name: 'SPSS Analysis Service', url: '/services/spss-analysis' },
      { name: 'R Programming Support', url: '/services/r-programming' },
      { name: 'Thesis Statistics', url: '/services/thesis-statistics' },
    ],
  },
  {
    slug: 'spss-analysis',
    category: 'Statistical & Data',
    icon: 'Database',
    cardTitle: 'SPSS Analysis Service',
    cardBlurb: 'IBM SPSS for your research data',
    title: 'SPSS Analysis Service',
    subtitle: 'IBM SPSS analysis and interpretation for your research data',
    metaDescription: 'Professional SPSS analysis service for PhD and Masters research — data entry, descriptive and inferential statistics, reliability and regression in IBM SPSS, with clear interpretation.',
    primaryKeywords: ['SPSS analysis service', 'SPSS data analysis', 'SPSS help for thesis'],
    secondaryKeywords: ['SPSS regression', 'reliability analysis SPSS', 'SPSS output interpretation', 'questionnaire data analysis'],
    sections: [
      { title: 'End-to-end SPSS support', content: 'From raw questionnaire responses to a finished results chapter, we manage variable definition, value labels, missing-data handling, and the complete analysis in IBM SPSS. Common requests include Cronbach’s alpha reliability, exploratory factor analysis, t-tests, ANOVA, correlation, and linear/logistic regression.' },
      { title: 'You understand every number', content: 'We return the .sav file, the full output, and a written interpretation that maps each table back to your research questions and hypotheses — so you can defend the analysis confidently in your viva.' },
      { title: 'Quality you can trust', content: ZERO },
    ],
    related: [
      { name: 'Statistical Analysis', url: '/services/statistical-analysis' },
      { name: 'Data Analysis Service', url: '/services/data-analysis' },
      { name: 'SPSS Tools', url: '/tools/spss' },
    ],
  },
  {
    slug: 'data-analysis',
    category: 'Statistical & Data',
    icon: 'Search',
    cardTitle: 'Data Analysis Service',
    cardBlurb: 'Qualitative & quantitative methods',
    title: 'Data Analysis Service',
    subtitle: 'Qualitative and quantitative data analysis for every discipline',
    metaDescription: 'Comprehensive data analysis service covering quantitative and qualitative research — statistics, thematic analysis, NVivo and ATLAS.ti coding, and mixed-methods integration.',
    primaryKeywords: ['data analysis service', 'qualitative data analysis', 'quantitative data analysis'],
    secondaryKeywords: ['thematic analysis', 'NVivo coding', 'ATLAS.ti analysis', 'mixed methods research', 'content analysis'],
    sections: [
      { title: 'Quantitative and qualitative, done right', content: 'Not every research question is a number. We support quantitative analysis (statistics, econometrics, modelling) and qualitative analysis (thematic, content, framework, and grounded-theory approaches) — plus mixed-methods studies where the two must be integrated into one coherent story.' },
      { title: 'The right tools for the job', content: 'We work in SPSS, R, Python, STATA, and EViews for numbers, and NVivo and ATLAS.ti for coding interviews, focus groups, and open-ended survey data. Deliverables include coding frameworks, theme maps, and interpretation aligned to your objectives.' },
      { title: 'Original, defensible work', content: ZERO },
    ],
    related: [
      { name: 'Statistical Analysis', url: '/services/statistical-analysis' },
      { name: 'SPSS Analysis Service', url: '/services/spss-analysis' },
      { name: 'Research Methodology', url: '/services/research-methodology' },
    ],
  },
  {
    slug: 'r-programming',
    category: 'Statistical & Data',
    icon: 'TerminalSquare',
    cardTitle: 'R Programming Support',
    cardBlurb: 'Statistical computing & visualization',
    title: 'R Programming Support',
    subtitle: 'Statistical computing, modelling, and visualization in R',
    metaDescription: 'R programming support for research — statistical modelling, data wrangling with tidyverse, reproducible analysis, and publication-quality ggplot2 visualizations with commented code.',
    primaryKeywords: ['R programming support', 'R statistical analysis', 'R programming help for thesis'],
    secondaryKeywords: ['ggplot2 visualization', 'tidyverse data wrangling', 'reproducible research in R', 'R modelling'],
    sections: [
      { title: 'From messy data to reproducible analysis', content: 'We build clean, reproducible R scripts that take you from raw data to results: importing and reshaping data with the tidyverse, running models (regression, GLMs, time series, multilevel/mixed models), and validating assumptions. Every script is commented so you can rerun and adapt it.' },
      { title: 'Publication-quality visualization', content: 'Using ggplot2 and related packages, we produce clear, journal-ready charts — from faceted plots to correlation heatmaps — formatted to your target journal’s style.' },
      { title: 'Learn as you go', content: 'Prefer to run it yourself? We can annotate the code and walk you through it. ' + ZERO },
    ],
    related: [
      { name: 'Statistical Analysis', url: '/services/statistical-analysis' },
      { name: 'Data Analysis Service', url: '/services/data-analysis' },
      { name: 'MATLAB', url: '/tools/matlab' },
    ],
  },

  // ─────────────────────────── RESEARCH TOPICS ───────────────────────────
  {
    slug: 'computer-science',
    category: 'Research Topics',
    icon: 'Cpu',
    cardTitle: 'Computer Science',
    cardBlurb: 'AI, ML, cybersecurity & IoT',
    title: 'Computer Science Research Help',
    subtitle: 'AI, machine learning, cybersecurity, and IoT research support',
    metaDescription: 'Computer science research help across AI, machine learning, deep learning, cybersecurity, and IoT — from topic selection and implementation to Scopus/IEEE publication.',
    primaryKeywords: ['computer science research help', 'machine learning research support', 'AI research implementation'],
    secondaryKeywords: ['deep learning thesis', 'cybersecurity research', 'IoT research help', 'data science project help', 'algorithm implementation'],
    sections: [
      { title: 'Cutting-edge CS domains', content: 'We support research across artificial intelligence, machine learning and deep learning, computer vision, NLP, cybersecurity, blockchain, cloud computing, and the Internet of Things. Whether you need a novel model, a comparative study, or a systematic review, we help you frame a contribution that reviewers recognise as original.' },
      { title: 'Implementation and experiments', content: 'Our engineers implement and benchmark models in Python (TensorFlow, PyTorch, scikit-learn), design fair experiments, and report metrics correctly (accuracy, precision/recall, F1, AUC). You get reproducible code, datasets, and result tables ready for your paper.' },
      { title: 'Straight to publication', content: 'We align the work with IEEE and Scopus-indexed venues and support the write-up end to end. ' + ZERO },
    ],
    related: [
      { name: 'CS Research Guide', url: '/blog/computer-science-research' },
      { name: 'Research Methodology', url: '/services/research-methodology' },
      { name: 'IEEE Journals', url: '/journals/ieee' },
    ],
  },
  {
    slug: 'engineering',
    category: 'Research Topics',
    icon: 'Cog',
    cardTitle: 'Engineering',
    cardBlurb: 'Civil, mechanical, electrical & more',
    title: 'Engineering Research Help',
    subtitle: 'Civil, mechanical, electrical, and electronics research support',
    metaDescription: 'Engineering research help across mechanical, civil, electrical, and electronics disciplines — simulation, modelling, and analysis in ANSYS, MATLAB, and STAAD with IEEE/Scopus publication.',
    primaryKeywords: ['engineering research help', 'engineering project guidance', 'engineering thesis support'],
    secondaryKeywords: ['ANSYS simulation', 'MATLAB Simulink modelling', 'FEA and CFD analysis', 'STAAD ETABS analysis', 'engineering paper writing'],
    sections: [
      { title: 'Every engineering branch', content: 'We support mechanical, civil, electrical, electronics, and applied engineering research — from design and simulation to prototyping and validation. Typical projects involve FEA, CFD, control systems, power systems, structural and geotechnical modelling, and embedded/IoT hardware.' },
      { title: 'Simulation and analysis tools', content: 'Our team works in ANSYS, MATLAB/Simulink, COMSOL, STAAD.Pro, ETABS, and specialised solvers, producing validated models and clearly documented results that stand up to examiner scrutiny.' },
      { title: 'From lab to journal', content: 'We help convert your results into IEEE/Scopus-ready manuscripts. ' + ZERO },
    ],
    related: [
      { name: 'Mechanical Engineering', url: '/blog/mechanical-engineering-research' },
      { name: 'Civil Engineering', url: '/blog/civil-engineering-research' },
      { name: 'ANSYS', url: '/tools/ansys' },
    ],
  },
  {
    slug: 'management',
    category: 'Research Topics',
    icon: 'Briefcase',
    cardTitle: 'Management',
    cardBlurb: 'HRM, finance, marketing & strategy',
    title: 'Management Research Help',
    subtitle: 'HRM, finance, marketing, and strategy research support',
    metaDescription: 'Management research help for MBA and PhD scholars — HRM, finance, marketing, and strategy studies with questionnaire design, SEM analysis, and ABDC/Scopus publication support.',
    primaryKeywords: ['management research help', 'management thesis help', 'MBA dissertation help'],
    secondaryKeywords: ['HRM research', 'finance research', 'marketing research', 'SEM analysis', 'ABDC journal publication'],
    sections: [
      { title: 'Business research that stands up', content: 'We support management research across HRM, finance, marketing, operations, and strategy — from sharpening your research questions and conceptual framework to designing valid, reliable instruments. We know what ABDC and Scopus business reviewers look for.' },
      { title: 'Rigorous analysis', content: 'Survey studies are analysed with SPSS, AMOS, and SmartPLS (including CFA and structural equation modelling); qualitative and case studies with NVivo. We report validity, reliability, and model fit correctly.' },
      { title: 'Targeting the right journals', content: 'We help position your paper for ABDC-listed and Scopus-indexed management journals. ' + ZERO },
    ],
    related: [
      { name: 'Management Research Guide', url: '/blog/management-research-help' },
      { name: 'Finance Research', url: '/blog/finance-research-help' },
      { name: 'ABDC Journals', url: '/journals/abdc' },
    ],
  },
  {
    slug: 'nursing-healthcare',
    category: 'Research Topics',
    icon: 'HeartPulse',
    cardTitle: 'Nursing & Healthcare',
    cardBlurb: 'Clinical & community health topics',
    title: 'Nursing & Healthcare Research Help',
    subtitle: 'Clinical, community health, and nursing research support',
    metaDescription: 'Nursing and healthcare research help — clinical and community health studies, systematic reviews, biostatistics, and PubMed/Scopus publication support with zero plagiarism.',
    primaryKeywords: ['nursing research help', 'healthcare research support', 'nursing thesis help'],
    secondaryKeywords: ['clinical research', 'community health research', 'systematic review nursing', 'biostatistics', 'PubMed publication'],
    sections: [
      { title: 'Evidence-based from the start', content: 'We support nursing and allied-health research across clinical practice, community and public health, patient outcomes, and health education. Study designs include cross-sectional and cohort studies, RCTs, quasi-experimental designs, and systematic reviews following PRISMA.' },
      { title: 'Sound biostatistics', content: 'Health data demands care — we handle sample-size justification, appropriate tests, survival analysis, and effect-size reporting, with interpretation your ethics committee and examiners will accept.' },
      { title: 'Publish with confidence', content: 'We target PubMed/MEDLINE and Scopus-indexed nursing and health journals. ' + ZERO },
    ],
    related: [
      { name: 'Medical Thesis Help', url: '/blog/medical-thesis-help' },
      { name: 'Research Methodology', url: '/services/research-methodology' },
      { name: 'PubMed', url: '/journals/pubmed' },
    ],
  },
  {
    slug: 'social-sciences',
    category: 'Research Topics',
    icon: 'Users',
    cardTitle: 'Social Sciences',
    cardBlurb: 'Sociology, psychology & economics',
    title: 'Social Sciences Research Help',
    subtitle: 'Sociology, psychology, and economics research support',
    metaDescription: 'Social sciences research help across sociology, psychology, and economics — survey and qualitative design, statistical and thematic analysis, and Scopus/ABDC publication support.',
    primaryKeywords: ['social sciences research help', 'sociology research support', 'psychology research help'],
    secondaryKeywords: ['economics research', 'survey research design', 'thematic analysis', 'SPSS for social sciences', 'qualitative research'],
    sections: [
      { title: 'Understanding people and systems', content: 'We support research in sociology, psychology, economics, education, political science, and public policy. From framing a theory-driven question to selecting the right methodology, we help you build a study that contributes to the literature.' },
      { title: 'Quantitative and qualitative rigour', content: 'Depending on your design, we run statistical analysis (SPSS, R, STATA) or qualitative analysis (thematic and content analysis in NVivo), and we handle validated psychometric scales, reliability, and validity properly.' },
      { title: 'Original scholarship', content: ZERO },
    ],
    related: [
      { name: 'Research Methodology', url: '/services/research-methodology' },
      { name: 'Data Analysis Service', url: '/services/data-analysis' },
      { name: 'HR Research Help', url: '/blog/hr-research-help' },
    ],
  },
  {
    slug: 'mathematics',
    category: 'Research Topics',
    icon: 'Sigma',
    cardTitle: 'Mathematics',
    cardBlurb: 'Pure, applied & computational maths',
    title: 'Mathematics Research Help',
    subtitle: 'Pure, applied, and computational mathematics research support',
    metaDescription: 'Mathematics research help across pure, applied, and computational mathematics — proofs, modelling, numerical methods, and LaTeX manuscript preparation for indexed journals.',
    primaryKeywords: ['mathematics research help', 'applied mathematics research', 'computational mathematics support'],
    secondaryKeywords: ['mathematical modelling', 'numerical methods', 'proof writing', 'LaTeX for maths', 'operations research'],
    sections: [
      { title: 'Pure to applied', content: 'We support research in analysis, algebra, topology, differential equations, optimization, probability and statistics, and mathematical modelling of real-world systems. Whether your work is theorem-and-proof or simulation-driven, we help you structure a rigorous contribution.' },
      { title: 'Computation and typesetting', content: 'For applied and computational work we implement models and numerical methods in MATLAB, Python, or R, and typeset everything cleanly in LaTeX — equations, theorems, and figures formatted to journal standards.' },
      { title: 'Precise and original', content: ZERO },
    ],
    related: [
      { name: 'R Programming Support', url: '/services/r-programming' },
      { name: 'LaTeX Formatting', url: '/formats/latex' },
      { name: 'MATLAB', url: '/tools/matlab' },
    ],
  },

  // ─────────────────────────── WRITING & DISSERTATION ───────────────────────────
  {
    slug: 'manuscript-writing',
    category: 'Writing & Dissertation',
    icon: 'FileText',
    cardTitle: 'Manuscript Writing',
    cardBlurb: 'Publication-ready manuscripts',
    title: 'Manuscript Writing Services',
    subtitle: 'Publication-ready manuscripts for indexed journals',
    metaDescription: 'Manuscript writing services for journal publication — structured IMRaD manuscripts, clear argumentation, and target-journal formatting for Scopus, SCI, and IEEE with zero plagiarism.',
    primaryKeywords: ['manuscript writing services', 'research manuscript preparation', 'journal manuscript writing'],
    secondaryKeywords: ['IMRaD structure', 'manuscript for Scopus', 'scientific writing', 'journal submission support'],
    sections: [
      { title: 'A manuscript reviewers want to accept', content: 'We turn your results into a compelling, well-structured manuscript following the IMRaD format — a focused introduction with a clear gap, transparent methods, results that tell a story, and a discussion that positions your contribution against the literature.' },
      { title: 'Tailored to your target journal', content: 'We format to your chosen journal’s guidelines — word limits, reference style, figure specs — and craft a strong title and abstract to improve desk-acceptance odds.' },
      { title: 'Original and defensible', content: ZERO },
    ],
    related: [
      { name: 'Abstract Writing', url: '/services/abstract-writing' },
      { name: 'Journal Publication', url: '/services/journal-publication' },
      { name: 'Paper Formatting', url: '/blog/paper-formatting' },
    ],
  },
  {
    slug: 'abstract-writing',
    category: 'Writing & Dissertation',
    icon: 'FileSignature',
    cardTitle: 'Abstract Writing',
    cardBlurb: 'Concise, keyword-rich abstracts',
    title: 'Abstract Writing Services',
    subtitle: 'Concise, keyword-rich abstracts that get read',
    metaDescription: 'Abstract writing services for papers and theses — concise, keyword-rich structured abstracts that summarise your aim, methods, results, and contribution and improve discoverability.',
    primaryKeywords: ['abstract writing services', 'research abstract writing', 'thesis abstract help'],
    secondaryKeywords: ['structured abstract', 'conference abstract', 'keyword optimization', 'abstract for journal'],
    sections: [
      { title: 'The most-read part of your paper', content: 'Editors, reviewers, and search engines all judge your work by its abstract first. We write tight, structured abstracts that state the problem, approach, key results, and contribution in the word limit — with the right keywords so your paper is discoverable in Scopus and Google Scholar.' },
      { title: 'For journals, conferences, and theses', content: 'We craft abstracts for journal submissions, conference calls, and thesis front matter, matching each venue’s style and length rules.' },
      { title: 'Original wording', content: ZERO },
    ],
    related: [
      { name: 'Manuscript Writing', url: '/services/manuscript-writing' },
      { name: 'Conference Paper Writing', url: '/blog/conference-paper-writing' },
      { name: 'Journal Publication', url: '/services/journal-publication' },
    ],
  },
  {
    slug: 'dissertation-writing',
    category: 'Writing & Dissertation',
    icon: 'BookMarked',
    cardTitle: 'Dissertation Writing',
    cardBlurb: 'Full dissertation support',
    title: 'Dissertation Writing Services',
    subtitle: 'End-to-end dissertation support from proposal to submission',
    metaDescription: 'Dissertation writing services for PhD and Masters scholars — full support from proposal and literature review to methodology, results, and discussion, with unlimited revisions.',
    primaryKeywords: ['dissertation writing services', 'PhD dissertation help', 'Masters dissertation writing'],
    secondaryKeywords: ['dissertation proposal', 'dissertation chapters', 'dissertation editing', 'dissertation assistance'],
    sections: [
      { title: 'Every stage, one team', content: 'From topic and proposal through to the bound submission, we support the whole dissertation: literature review, methodology, data collection instruments, analysis, results, and discussion. You keep control of the direction while we provide structure, drafting help, and expert feedback.' },
      { title: 'Consistent, examiner-ready quality', content: 'We ensure your argument flows across chapters, your objectives are answered, and your formatting and referencing are consistent — with unlimited revisions until it meets your supervisor’s expectations.' },
      { title: 'Guaranteed originality', content: ZERO },
    ],
    related: [
      { name: 'Chapter Writing', url: '/services/chapter-writing' },
      { name: 'Dissertation Guide', url: '/blog/dissertation-writing' },
      { name: 'Thesis Chapters', url: '/services/thesis-chapters' },
    ],
  },
  {
    slug: 'chapter-writing',
    category: 'Writing & Dissertation',
    icon: 'ListOrdered',
    cardTitle: 'Chapter Writing',
    cardBlurb: 'All PhD chapters covered',
    title: 'Thesis Chapter Writing Services',
    subtitle: 'Chapter-by-chapter thesis writing support',
    metaDescription: 'Thesis chapter writing services — introduction, literature review, methodology, results, and discussion written to your university format with expert guidance and zero plagiarism.',
    primaryKeywords: ['chapter writing services', 'thesis chapter writing', 'PhD chapter help'],
    secondaryKeywords: ['literature review writing', 'methodology chapter', 'results and discussion', 'introduction chapter'],
    sections: [
      { title: 'Support for the chapter you need', content: 'Stuck on one chapter or need all of them? We write and refine each thesis chapter — introduction, literature review, methodology, results, discussion, and conclusion — as standalone deliverables or as a cohesive whole aligned to your research objectives.' },
      { title: 'Consistency and flow', content: 'We keep terminology, notation, and argument consistent across chapters, and ensure each one connects logically to the next so your thesis reads as a single, coherent piece of scholarship.' },
      { title: 'Original and referenced', content: ZERO },
    ],
    related: [
      { name: 'Dissertation Writing', url: '/services/dissertation-writing' },
      { name: 'Literature Review', url: '/blog/literature-review-writing' },
      { name: 'Thesis Chapters', url: '/services/thesis-chapters' },
    ],
  },
  {
    slug: 'research-gap-analysis',
    category: 'Writing & Dissertation',
    icon: 'SearchCheck',
    cardTitle: 'Research Gap Analysis',
    cardBlurb: 'Identify unexplored research areas',
    title: 'Research Gap Analysis',
    subtitle: 'Identify unexplored, publishable research areas',
    metaDescription: 'Research gap analysis to find unexplored, publishable areas in your field — systematic literature mapping, gap identification, and a defensible justification for your study.',
    primaryKeywords: ['research gap analysis', 'research gap identification', 'find research gap'],
    secondaryKeywords: ['literature gap', 'systematic literature review', 'research justification', 'novelty in research'],
    sections: [
      { title: 'Find a gap worth filling', content: 'A strong study starts with a genuine gap. We systematically map recent literature in your area, cluster what is already known, and surface the theoretical, methodological, contextual, and empirical gaps that reviewers will accept as a real contribution.' },
      { title: 'A defensible justification', content: 'You receive a concise gap analysis with supporting citations you can drop straight into your introduction and proposal — plus suggested research questions that address the gap.' },
      { title: 'Rigorous and original', content: ZERO },
    ],
    related: [
      { name: 'Problem Identification', url: '/services/problem-identification' },
      { name: 'Literature Review', url: '/blog/literature-review-writing' },
      { name: 'Research Proposal', url: '/blog/research-proposal-writing' },
    ],
  },
  {
    slug: 'problem-identification',
    category: 'Writing & Dissertation',
    icon: 'Lightbulb',
    cardTitle: 'Problem Identification',
    cardBlurb: 'Define your research problem',
    title: 'Research Problem Identification',
    subtitle: 'Define a clear, researchable problem statement',
    metaDescription: 'Research problem identification services — turn a broad interest into a clear, focused, researchable problem statement with aim, objectives, and questions that guide your whole study.',
    primaryKeywords: ['research problem identification', 'problem statement writing', 'define research problem'],
    secondaryKeywords: ['research questions', 'research objectives', 'research aim', 'problem formulation'],
    sections: [
      { title: 'From broad interest to sharp problem', content: 'Most projects stall because the problem is too vague or too broad. We help you narrow a topic into a specific, feasible, and significant problem statement — then derive a clear aim, measurable objectives, and answerable research questions that keep your whole study focused.' },
      { title: 'Feasible and significant', content: 'We pressure-test scope against your timeline, data access, and resources, so you commit to a problem you can actually finish and defend.' },
      { title: 'Original framing', content: ZERO },
    ],
    related: [
      { name: 'Research Gap Analysis', url: '/services/research-gap-analysis' },
      { name: 'Research Methodology', url: '/services/research-methodology' },
      { name: 'Research Proposal', url: '/blog/research-proposal-writing' },
    ],
  },

  // ─────────────────────────── FORMATTING & SUPPORT ───────────────────────────
  {
    slug: 'formatting',
    category: 'Formatting & Support',
    icon: 'AlignLeft',
    cardTitle: 'Formatting',
    cardBlurb: 'APA, MLA, IEEE, Harvard & more',
    title: 'Academic Formatting Services',
    subtitle: 'APA, MLA, IEEE, Harvard, and LaTeX formatting done right',
    metaDescription: 'Academic formatting services for every major style — APA, MLA, IEEE, Harvard, and LaTeX. Precise citations, references, tables, and journal templates for thesis and manuscript submission.',
    primaryKeywords: ['academic formatting services', 'thesis formatting', 'citation and referencing'],
    secondaryKeywords: ['APA formatting', 'MLA formatting', 'IEEE formatting', 'Harvard referencing', 'LaTeX formatting'],
    sections: [
      { title: 'One team, every style', content: 'We format thesis chapters and manuscripts in all major styles — APA (7th edition), MLA (9th edition), IEEE, Harvard, Chicago, Vancouver — and typeset in LaTeX where required. Headings, tables, figures, equations, and page layout all match your university or target journal exactly.' },
      { title: 'Citations and references that check out', content: 'We build accurate in-text citations and reference lists, fix inconsistencies, and manage everything in reference managers (Zotero, Mendeley, EndNote) so nothing breaks when you revise.' },
      { title: 'Submission-ready', content: 'Your document arrives ready to submit, with a style checklist. ' + ZERO },
    ],
    related: [
      { name: 'APA & MLA', url: '/formats/apa-mla' },
      { name: 'IEEE Format', url: '/formats/ieee-format' },
      { name: 'Harvard', url: '/formats/harvard' },
      { name: 'LaTeX', url: '/formats/latex' },
    ],
  },
  {
    slug: 'research-methodology',
    category: 'Formatting & Support',
    icon: 'Workflow',
    cardTitle: 'Research Methodology',
    cardBlurb: 'Design, sampling & analysis',
    title: 'Research Methodology Help',
    subtitle: 'Research design, sampling, and analysis planning',
    metaDescription: 'Research methodology help — choose the right research design, sampling strategy, data-collection instruments, and analysis plan, with a defensible, examiner-ready methodology chapter.',
    primaryKeywords: ['research methodology help', 'research design', 'methodology chapter writing'],
    secondaryKeywords: ['sampling techniques', 'data collection methods', 'quantitative and qualitative design', 'mixed methods'],
    sections: [
      { title: 'A methodology that holds up', content: 'The methodology chapter is where most vivas are won or lost. We help you justify your research philosophy and design, choose the right sampling strategy and sample size, develop valid instruments, and plan an analysis that actually answers your questions.' },
      { title: 'Quantitative, qualitative, or mixed', content: 'Whether your study is survey-based, experimental, qualitative, or mixed-methods, we map the design end to end and write it up so examiners can see it is rigorous and appropriate.' },
      { title: 'Defensible and original', content: ZERO },
    ],
    related: [
      { name: 'Methodology Guide', url: '/blog/research-methodology-help' },
      { name: 'Data Analysis Service', url: '/services/data-analysis' },
      { name: 'Problem Identification', url: '/services/problem-identification' },
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  'Statistical & Data',
  'Research Topics',
  'Writing & Dissertation',
  'Formatting & Support',
];

export function getServiceItem(slug: string): ServiceItem | undefined {
  return serviceItems.find((s) => s.slug === slug);
}

export const serviceSlugs = serviceItems.map((s) => s.slug);
