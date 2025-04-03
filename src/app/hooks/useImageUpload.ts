// app/hooks/useImageUpload.ts
import { useState } from 'react';

export function useImageUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadImage = async (file: File): Promise<string> => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    try {
      // Simulate progress updates
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 5;
          return newProgress < 90 ? newProgress : prev;
        });
      }, 100);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        // Try to get error message from response
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Upload failed with status: ${response.status}`);
      }

      setProgress(100);
      const { url } = await response.json();
      return url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading, error, progress };
}