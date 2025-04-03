// app/admin/blogs/edit/[id]/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { apiClient } from '@/lib/apiClient';

interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  published: boolean;
}

export default function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;
  
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    coverImage: '',
    tags: [],
    published: false
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await apiClient.getBlog(blogId);
        setFormData({
          title: blog.title,
          slug: blog.slug,
          content: blog.content,
          excerpt: blog.excerpt,
          coverImage: blog.coverImage,
          tags: blog.tags,
          published: blog.published
        });
      } catch (err) {
        setError('Failed to load blog data');
        console.error('Error fetching blog:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && { 
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      })
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Upload new image if selected
      let coverImageUrl = formData.coverImage;
      if (imageFile) {
        const { url } = await apiClient.uploadImage(imageFile);
        coverImageUrl = url;
      }

      // Update blog with all data
      await apiClient.updateBlog(blogId, {
        ...formData,
        coverImage: coverImageUrl,
      });

      router.push('/admin/blogs');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ... (keep the same header and layout as before) ... */}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ... (other form fields remain the same) ... */}
        
        <div>
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            onChange={handleImageChange}
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {imageFile ? (
            <div className="mt-2">
              <p className="text-sm text-gray-500">New image selected: {imageFile.name}</p>
            </div>
          ) : formData.coverImage ? (
            <div className="mt-2">
              <img 
                src={formData.coverImage} 
                alt="Current cover" 
                className="h-40 object-cover rounded"
              />
            </div>
          ) : null}
        </div>

        {/* ... (rest of the form remains the same) ... */}
      </form>
    </div>
  );
}