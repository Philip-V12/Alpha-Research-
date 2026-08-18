import { useParams, Navigate } from 'react-router';
import {
  LineChart, Database, Search, TerminalSquare, Cpu, Cog, Briefcase,
  HeartPulse, Users, Sigma, FileText, FileSignature, BookMarked,
  ListOrdered, SearchCheck, Lightbulb, AlignLeft, Workflow,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { TechnicalPageLayout } from '../components/TechnicalPageLayout';
import { getServiceItem } from '../services/serviceItems';

const ICONS: Record<string, ReactNode> = {
  LineChart: <LineChart className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Database: <Database className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Search: <Search className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  TerminalSquare: <TerminalSquare className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Cpu: <Cpu className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Cog: <Cog className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Briefcase: <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  HeartPulse: <HeartPulse className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Users: <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Sigma: <Sigma className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  FileText: <FileText className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  FileSignature: <FileSignature className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  BookMarked: <BookMarked className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  ListOrdered: <ListOrdered className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  SearchCheck: <SearchCheck className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Lightbulb: <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  AlignLeft: <AlignLeft className="w-10 h-10 md:w-12 md:h-12 text-white" />,
  Workflow: <Workflow className="w-10 h-10 md:w-12 md:h-12 text-white" />,
};

export default function ServiceItem() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getServiceItem(slug) : undefined;

  if (!item) {
    return <Navigate to="/services" replace />;
  }

  return (
    <TechnicalPageLayout
      title={item.title}
      subtitle={item.subtitle}
      description={item.metaDescription}
      icon={ICONS[item.icon] ?? ICONS.FileText}
      primaryKeywords={item.primaryKeywords}
      secondaryKeywords={item.secondaryKeywords}
      sections={item.sections.map((s) => ({
        title: s.title,
        content: <p>{s.content}</p>,
      }))}
      relatedLinks={{
        title: 'Related Services',
        links: item.related,
      }}
    />
  );
}
