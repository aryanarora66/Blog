// hooks/useImageUpload.ts
import { useState } from 'react';
import { getSession } from "@/lib/auth";

export function useImageUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadImage = async (file: File) => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Upload failed');
      }

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