// Example usage in your blog form component
"use client";
import { useImageUpload } from "@/app/hooks/useImageUpload";
import { useState, useEffect } from "react";

export function BlogForm() {
  const { uploadImage, isUploading } = useImageUpload();
  const [coverImage, setCoverImage] = useState('');
  const [progress, setProgress] = useState(0);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const url = await uploadImage(file);
        setCoverImage(url);
        setProgress(100); // Set progress to 100% after successful upload
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleImageChange}
        disabled={isUploading}
        accept="image/*"
      />
      {isUploading && <p>Uploading... {progress}%</p>}
      {coverImage && <img src={coverImage} alt="Preview" />}
    </div>
  );
}