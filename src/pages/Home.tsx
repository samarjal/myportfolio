import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-bg text-center px-4">
      
      <h1 className="manrope-header text-5xl md:text-7xl font-bold text-white mb-6">
        hi. this is samar.
      </h1>
      <p className="manrope-header text-xl md:text-2xl text-gray-300 mb-12">
        what's in the name?
      </p>
      <Link
        to="/projects"
        className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 transition-colors duration-200"
      >
        my work
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
}