export default function handler(req, res) {
  const posts = [
    { id: 1, title: 'Next.js Basics', content: 'Next.js is a React framework...' },
    { id: 2, title: 'API Routes in Next.js', content: 'API Routes allow you to create RESTful APIs...' },
  ];

  res.status(200).json(posts);
}