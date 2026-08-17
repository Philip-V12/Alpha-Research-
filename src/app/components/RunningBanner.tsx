const ITEMS = [
  'Zero Plagiarism',
  'Zero AI Detection',
  '100% Human-Written Content',
  'Engineering Specializations Across Every Discipline',
  'Multi-Domain Research Expertise',
  'Advanced Simulation & Modeling Tools',
  'Scopus • SCI • IEEE • PubMed • ABDC',
  'End-to-End Research Support',
];

export function RunningBanner() {
  // Duplicate the list so the loop is seamless
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-teal-600 text-white overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee py-2.5">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center mx-6 text-sm font-semibold tracking-wide">
            <span className="mr-6 text-teal-200">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
