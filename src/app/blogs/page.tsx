import Link from 'next/link';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
}

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return res.json();
}

export default async function BlogList() {
  const blogs: Blog[] = await getBlogs();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <Link 
            key={blog._id} 
            href={`/blogs/${blog.slug}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={blog.coverImage} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-2">{blog.excerpt}</p>
              <p className="text-sm text-gray-500">
                {new Date(blog.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}