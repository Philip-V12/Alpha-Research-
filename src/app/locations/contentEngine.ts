// Deterministic content generator for location pages. The goal is that the
// ~280+ city pages read as if written by many different human writers — not one
// template copy-pasted. We achieve this by hashing each city slug and using the
// hash (with different offsets) to pick from several independent banks of
// phrasing for every part of the page, then weaving in each city's real region
// and profile facts. The same city always renders the same content (stable for
// SEO and prerendering), but different cities get different structure and voice.

import type { City } from './cities';

export interface LocationContent {
  heroIntro: string;
  sections: { title: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  closing: string;
}

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

// Small helper to describe the academic character of a city.
function scholarNoun(city: City): string {
  if (city.tier === 'metro') return 'research scholars and faculty';
  if (city.tier === 'major') return 'PhD and Masters scholars';
  return city.country === 'India' ? 'research scholars' : 'researchers and postgraduate students';
}

const HERO = [
  (c: string, r: string) => `Alpha Research provides complete PhD, thesis, and journal-publication support to scholars in ${c}, ${r}. From your first research proposal to final publication, our IIM- and IIT-alumni team works with you at every stage — with a firm guarantee of zero plagiarism and zero AI-generated content.`,
  (c: string, r: string) => `Looking for reliable, end-to-end research assistance in ${c}? Alpha Research helps ${r} scholars turn raw ideas into published, defensible work — thesis writing, statistics, manuscript preparation, and journal publication, all delivered by real subject experts, never AI.`,
  (c: string, r: string) => `Scholars across ${c} trust Alpha Research for PhD guidance, thesis writing, and Scopus/SCI/IEEE publication support. We combine ${r}'s academic ambitions with the rigour of experienced researchers and a strict 100% original-content promise.`,
  (c: string, r: string) => `Whether you are starting a PhD or racing a submission deadline in ${c}, Alpha Research offers professional, confidential research support — from problem identification and methodology to data analysis and journal publication — with zero plagiarism guaranteed.`,
  (c: string, r: string) => `Alpha Research is a trusted academic consultancy serving ${c} and the wider ${r} region. We support ${'scholars'} through the full research journey — proposal, literature review, statistics, writing, and publication — with genuine, human-written work you can defend with confidence.`,
  (c: string, r: string) => `Get expert, affordable research help in ${c} with Alpha Research. Our team supports ${r} scholars in every discipline — engineering, management, medical, sciences, and social sciences — delivering original thesis and paper content backed by a similarity report.`,
  (c: string, r: string) => `From ${c}'s campuses to international journals, Alpha Research guides scholars through PhD thesis writing, statistical analysis, and manuscript publication. We serve ${r} with dependable timelines, transparent pricing, and a zero-AI, zero-plagiarism commitment.`,
  (c: string, r: string) => `Alpha Research brings professional research consultancy to ${c}. We help ${r}'s postgraduate and doctoral scholars with everything from research design and data analysis to editing and Scopus-indexed publication — all handcrafted by domain experts.`,
];

const SCENE_WITH_PROFILE = [
  (c: string, nick: string, kf: string[]) => `${c} is known as ${nick}, and that character shows in its research community. With ${kf[0]} and ${kf[1] ?? 'a growing scholar base'}, the city produces a steady stream of ambitious PhD and Masters candidates — exactly the scholars we support day to day.`,
  (c: string, nick: string, kf: string[]) => `As ${nick}, ${c} carries a distinct academic identity. ${kf[0] ? `Its strength in ${kf[0]}` : 'Its universities'} means researchers here often work on demanding, discipline-specific problems, and our specialists are matched to the subject rather than assigned at random.`,
  (c: string, nick: string, kf: string[]) => `${c}, ${nick}, has long attracted serious scholars. ${kf.slice(0, 2).join(' and ')} shape the kinds of projects we see from the city — and we tailor our methodology, tools, and journal targeting to fit them.`,
];

const SCENE_GENERIC = [
  (c: string, r: string, s: string) => `${c} is home to a committed community of ${s} across ${r}. Balancing coursework, data collection, and family or job commitments is hard — Alpha Research takes the pressure off by handling the heavy lifting of your research while you stay in control of the direction.`,
  (c: string, r: string, s: string) => `Across ${c} and neighbouring ${r} towns, ${s} increasingly seek dependable research partners rather than one-off help. We build a long-term working relationship, supporting you from the proposal through to a published paper.`,
  (c: string, r: string, s: string) => `Many ${s} in ${c} come to us after a supervisor asks for stronger methodology, cleaner statistics, or a publishable manuscript. Wherever you are in ${r}, we meet you at your current stage and move the work forward.`,
  (c: string, r: string, s: string) => `${c} may be one of many centres of learning in ${r}, but every scholar's project is unique. That is why we never recycle content — each thesis, chapter, and paper we prepare for ${c} researchers is written from scratch for that specific study.`,
];

const SERVICES_FRAME = [
  (c: string) => `Every service we offer nationally is available to ${c} scholars, delivered remotely with the same quality and confidentiality: PhD thesis writing, chapter-by-chapter support, literature reviews and systematic reviews (PRISMA), research methodology design, and problem/gap identification.`,
  (c: string) => `Researchers in ${c} rely on us across the full pipeline — statistical analysis in SPSS, R, Python, and STATA; qualitative coding in NVivo and ATLAS.ti; manuscript and abstract writing; formatting in APA, MLA, IEEE, and Harvard; and end-to-end journal publication support.`,
  (c: string) => `From data analysis to defence, ${c} scholars use us for SPSS and R analysis, thesis and dissertation writing, IEEE and Scopus paper preparation, plagiarism removal, proofreading, and viva-ready documentation — each handled by an expert in that area.`,
  (c: string) => `Whatever your ${c} project needs — a sharper research proposal, a rigorous methodology chapter, publication-ready statistics, a polished manuscript, or Scopus/SCI/UGC-CARE publication — we assemble the right specialists and deliver on an agreed timeline.`,
];

const PUBLICATION = [
  (c: string) => `For publication, we help ${c} scholars target the right venue — Scopus, SCI/SCIE, IEEE, PubMed, ABDC, or UGC-CARE — and prepare the manuscript to that journal's exact requirements, then support you through peer-review revisions until acceptance.`,
  (c: string) => `Getting published from ${c} is easier with a partner who knows indexing. We match your study to appropriate Scopus- and SCI-indexed journals, format precisely, draft strong cover letters, and guide you through reviewer responses.`,
  (c: string) => `We take ${c} researchers all the way to publication: journal selection, manuscript preparation, submission, and revision support for Scopus, SCI, IEEE, and ABDC-listed journals — with realistic advice about scope and fit.`,
];

const TRUST = [
  (c: string) => `Scholars in ${c} choose Alpha Research because we are transparent about timelines and pricing, keep every project strictly confidential, and back all work with a Turnitin-style similarity report proving it is 100% original and human-written.`,
  (c: string) => `What sets us apart for ${c} researchers is accountability: a single point of contact, unlimited revisions within scope, on-time delivery even for urgent deadlines, and an ironclad zero-plagiarism, zero-AI guarantee.`,
  (c: string) => `${c} scholars stay with us because the quality is consistent. Real subject experts, defensible methodology, clean statistics, and honest guidance — plus complete confidentiality and a plagiarism report with every deliverable.`,
];

const CLOSING = [
  (c: string) => `Ready to move your research forward in ${c}? Contact Alpha Research today for a free consultation and a clear, no-obligation plan for your thesis, paper, or publication.`,
  (c: string) => `If you are a scholar in ${c} who wants dependable, original research support, reach out to Alpha Research now — tell us your stage and deadline, and we will map out the fastest ethical path to completion.`,
  (c: string) => `Start your ${c} research project with a team that guarantees original work and on-time delivery. Get in touch with Alpha Research for a friendly, confidential discussion of your requirements.`,
];

export function generateLocationContent(city: City): LocationContent {
  const h = hash(city.slug);
  const c = city.name;
  const r = city.region;
  const s = scholarNoun(city);

  const heroIntro = pick(HERO, h)(c, r);

  // Scene section — use the rich profile when we have one, else a varied generic.
  let sceneParagraph: string;
  if (city.profile?.nickname && city.profile?.knownFor) {
    sceneParagraph = pick(SCENE_WITH_PROFILE, h >> 2)(c, city.profile.nickname, city.profile.knownFor);
  } else {
    sceneParagraph = pick(SCENE_GENERIC, h >> 2)(c, r, s);
  }
  if (city.profile?.universities?.length) {
    sceneParagraph += ` We regularly assist scholars connected with institutions such as ${city.profile.universities.slice(0, 3).join(', ')}.`;
  }

  const sections = [
    {
      title: `Research & PhD support for scholars in ${c}`,
      paragraphs: [sceneParagraph, pick(SERVICES_FRAME, h >> 4)(c)],
    },
    {
      title: `Journal publication assistance in ${c}`,
      paragraphs: [pick(PUBLICATION, h >> 6)(c)],
    },
    {
      title: `Why ${c} scholars choose Alpha Research`,
      paragraphs: [pick(TRUST, h >> 8)(c)],
    },
  ];

  const faqs = [
    {
      q: `Do you provide PhD thesis writing help in ${c}?`,
      a: `Yes. We offer complete PhD and Masters thesis support to scholars in ${c} and across ${r} — proposal, literature review, methodology, data analysis, results, discussion, and final formatting — all written from scratch with a zero-plagiarism guarantee.`,
    },
    {
      q: `Can you help with journal publication from ${c}?`,
      a: `Absolutely. We support ${c} researchers with Scopus, SCI/SCIE, IEEE, PubMed, ABDC, and UGC-CARE publication — from journal selection and manuscript preparation to peer-review revisions.`,
    },
    {
      q: `Is your research work in ${c} original and confidential?`,
      a: `Every deliverable for ${c} scholars is 100% original, human-written, and accompanied by a similarity report. All projects are handled with strict confidentiality.`,
    },
    {
      q: `Do I need to visit an office in ${c}?`,
      a: `No. We work with ${c} scholars entirely online — by email, call, and video — so you get expert support wherever you are in ${r}, on your own schedule.`,
    },
  ];

  const closing = pick(CLOSING, h >> 10)(c);

  return { heroIntro, sections, faqs, closing };
}
