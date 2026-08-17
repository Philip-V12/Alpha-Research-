import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { Seo } from '../components/Seo';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-teal-50">
      <Seo title="Page Not Found | Alpha Research" noindex />
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-teal-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition">
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
