import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { WhatWeDo } from "./pages/WhatWeDo";
import ServiceItem from "./pages/ServiceItem";
import { Contact } from "./pages/Contact";

// Technical Pages - Software & Tools
import { ANSYSPage } from "./pages/technical/ANSYSPage";
import { CFDPage } from "./pages/technical/CFDPage";
import { SimulinkPage } from "./pages/technical/SimulinkPage";
import { MATLABPage } from "./pages/technical/MATLABPage";
import { SPSSPage } from "./pages/technical/SPSSPage";

// Technical Pages - Formatting
import { LaTeXPage } from "./pages/technical/LaTeXPage";
import { IEEEFormatPage } from "./pages/technical/IEEEFormatPage";
import { APAMLAPage } from "./pages/technical/APAMLAPage";
import { HarvardPage } from "./pages/technical/HarvardPage";

// Technical Pages - Journals
import { ScopusPage } from "./pages/technical/ScopusPage";
import { SCIPage } from "./pages/technical/SCIPage";
import { IEEEPage } from "./pages/technical/IEEEPage";
import { PubMedPage } from "./pages/technical/PubMedPage";
import { ABDCPage } from "./pages/technical/ABDCPage";

// Service Pages
import { ThesisStatisticsPage } from "./pages/services/ThesisStatisticsPage";
import { ThesisEditingPage } from "./pages/services/ThesisEditingPage";
import { PhDSynopsisPage } from "./pages/services/PhDSynopsisPage";
import { ThesisChaptersPage } from "./pages/services/ThesisChaptersPage";
import { ResearchPaperPage } from "./pages/services/ResearchPaperPage";
import { JournalPublicationPage } from "./pages/services/JournalPublicationPage";

import { Blog } from "./pages/Blog";
import { BlogArticle } from "./pages/BlogArticle";
import { LocationsHub } from "./pages/LocationsHub";
import { LocationPage } from "./pages/LocationPage";

import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "what-we-do", Component: WhatWeDo },
      { path: "contact", Component: Contact },

      // Blog / Articles
      { path: "blog", Component: Blog },
      // Locations (static routes take precedence over blog/:slug)
      { path: "blog/locations", Component: LocationsHub },
      { path: "blog/locations/:slug", Component: LocationPage },
      { path: "blog/:slug", Component: BlogArticle },

      // Software & Tools
      { path: "tools/ansys", Component: ANSYSPage },
      { path: "tools/cfd", Component: CFDPage },
      { path: "tools/simulink", Component: SimulinkPage },
      { path: "tools/matlab", Component: MATLABPage },
      { path: "tools/spss", Component: SPSSPage },

      // Formatting
      { path: "formats/latex", Component: LaTeXPage },
      { path: "formats/ieee-format", Component: IEEEFormatPage },
      { path: "formats/apa-mla", Component: APAMLAPage },
      { path: "formats/harvard", Component: HarvardPage },

      // Journals
      { path: "journals/scopus", Component: ScopusPage },
      { path: "journals/sci", Component: SCIPage },
      { path: "journals/ieee", Component: IEEEPage },
      { path: "journals/pubmed", Component: PubMedPage },
      { path: "journals/abdc", Component: ABDCPage },

      // Services
      { path: "services/thesis-statistics", Component: ThesisStatisticsPage },
      { path: "services/thesis-editing", Component: ThesisEditingPage },
      { path: "services/phd-synopsis", Component: PhDSynopsisPage },
      { path: "services/thesis-chapters", Component: ThesisChaptersPage },
      { path: "services/research-paper", Component: ResearchPaperPage },
      { path: "services/journal-publication", Component: JournalPublicationPage },

      // New categorized service item pages (statistical-analysis, spss-analysis,
      // data-analysis, r-programming, computer-science, engineering, management,
      // nursing-healthcare, social-sciences, mathematics, manuscript-writing,
      // abstract-writing, dissertation-writing, chapter-writing,
      // research-gap-analysis, problem-identification, formatting,
      // research-methodology). Static routes above take precedence.
      { path: "services/:slug", Component: ServiceItem },

      { path: "*", Component: NotFound },
    ],
  },
]);
