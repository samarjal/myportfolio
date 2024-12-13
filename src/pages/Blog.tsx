import './Home.css';

export default function Blog() {
  const posts = [
    {
      title: 'Getting Started with React and TypeScript',
      date: '2024-03-15',
      excerpt: 'Learn how to set up a new React project with TypeScript and best practices.',
      readTime: '5 min read',
    },
    {
      title: 'Modern CSS Techniques',
      date: '2024-03-10',
      excerpt: 'Exploring the latest CSS features and how to use them effectively.',
      readTime: '4 min read',
    },
  ];

  return (
    <div className="min-h-screen custom-bg py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">something cool to read</h1>
        <p className="text-gray-100 mb-6 text-center text-6xl px-12 py-32"> 
          [work in progress...] 
        </p>
        {/* <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-800/50 p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                <span className="text-sm text-gray-400">{post.readTime}</span>
              </div>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{post.date}</span>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div> */}
      </div>
    </div>
  );
}