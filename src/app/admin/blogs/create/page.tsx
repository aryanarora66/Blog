// app/admin/blogs/create/page.tsx
"use client";

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/apiClient';
import dynamic from 'next/dynamic';

// Lazy load the rich text editor
const RichTextEditor = dynamic(
  () => import('@/components/RichTextEditor'),
  { ssr: false, loading: () => <p>Loading editor...</p> }
);

export default function CreateBlog() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    coverImage: '',
    tags: '',
    published: false
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && { 
        slug: value.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      })
    }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [validationErrors]);

  const handleContentChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate image file
      if (!file.type.startsWith('image/')) {
        setValidationErrors(prev => ({
          ...prev,
          coverImage: 'Please select an image file'
        }));
        return;
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setValidationErrors(prev => ({
          ...prev,
          coverImage: 'Image size must be less than 5MB'
        }));
        return;
      }

      setImageFile(file);
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.coverImage;
        return newErrors;
      });

      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.slug.trim()) errors.slug = 'Slug is required';
    if (!formData.content.trim()) errors.content = 'Content is required';
    if (!formData.excerpt.trim()) errors.excerpt = 'Excerpt is required';
    if (!imageFile && !formData.coverImage) errors.coverImage = 'Cover image is required';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError('');

    try {
      // Upload image if selected
      let coverImageUrl = formData.coverImage;
      if (imageFile) {
        const { url } = await apiClient.uploadImage(imageFile);
        coverImageUrl = url;
      }

      // Create blog with all data
      await apiClient.createBlog({
        ...formData,
        coverImage: coverImageUrl,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      });

      // Show success notification
      // (You can implement a toast notification system here)
      
      router.push('/admin/blogs');
    } catch (err) {
      console.error('Blog creation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to create blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  validationErrors.title ? 'border-red-500' : ''
                }`}
              />
              {validationErrors.title && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.title}</p>
              )}
            </div>

            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                Slug *
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  validationErrors.slug ? 'border-red-500' : ''
                }`}
              />
              {validationErrors.slug && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.slug}</p>
              )}
            </div>

            <div>
              <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
                Cover Image *
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                onChange={handleImageChange}
                accept="image/*"
                className={`mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 ${
                    validationErrors.coverImage ? 'border-red-500' : ''
                  }`}
                disabled={isSubmitting}
              />
              {validationErrors.coverImage && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.coverImage}</p>
              )}
              {(imagePreview || formData.coverImage) && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700">Preview:</h3>
                  <img 
                    src={imagePreview || formData.coverImage} 
                    alt="Cover preview" 
                    className="mt-2 h-48 w-full object-cover rounded-md border"
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                Excerpt *
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                rows={3}
                value={formData.excerpt}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  validationErrors.excerpt ? 'border-red-500' : ''
                }`}
              />
              {validationErrors.excerpt && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.excerpt}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content *
              </label>
              <RichTextEditor
                value={formData.content}
                onChange={handleContentChange}
                className={`mt-1 ${
                  validationErrors.content ? 'border-red-500 rounded-md border' : ''
                }`}
              />
              {validationErrors.content && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.content}</p>
              )}
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags (comma separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g., technology, web development, nextjs"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
                Publish immediately
              </label>
            </div>

            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.push('/admin/blogs')}
                disabled={isSubmitting}
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : 'Create Blog'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}