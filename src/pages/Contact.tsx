import { Mail, Github, Linkedin } from 'lucide-react';
import './Home.css';

export default function Contact() {
  return (
    <div className="min-h-screen custom-bg py-20 px-4 flex items-center justify-center ">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">let's connect :D</h1>

        {/* Icons Section */}
        <div className="flex justify-center space-x-6 mb-12 ">
          {/* GitHub */}
          <a
            href="https://github.com/samarjal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-8 h-8" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kumarsamarjal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>

          {/* Email */}
          <a
            href="mailto:samarjal543@gmail.com"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1">
          <form className="bg-gray-800/50 p-8 backdrop-blur-sm mx-auto w-full max-w-md ">
            <div className="space-y-6 ">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-300 mb-2">
                  good name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700/50 border border-gray-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-300 mb-2">
                  e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700/50 border border-gray-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-300 mb-2">
                  message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-700/50 border border-gray-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 transition-colors duration-200 text-base"
              >
                send your message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
