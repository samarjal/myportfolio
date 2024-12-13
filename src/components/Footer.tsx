
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900/80 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} Kumar Samar Jal
        </p>
      </div>
    </footer>
  );
}