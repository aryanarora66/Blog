// app/api/admin/upload/route.ts
import { NextResponse } from 'next/server';
import { getAuthenticatedImageKit } from '@/lib/imagekit-auth';

export async function POST(req: Request) {
  try {
    const imagekit = await getAuthenticatedImageKit();
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const buffer = await file.arrayBuffer();
    const result = await imagekit.upload({
      file: Buffer.from(buffer),
      fileName: `blog-${Date.now()}-${file.name}`,
      folder: '/blog-images',
    });

    return NextResponse.json({ url: result.url });
  } catch (error) {
    console.error('Image upload failed:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed' },
      { status: error instanceof Error && error.message.includes('Unauthorized') ? 401 : 500 }
    );
  }
}