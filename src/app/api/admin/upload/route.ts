// app/api/admin/upload/route.ts
import { NextResponse } from 'next/server';
import { uploadToImageKit } from '@/lib/imagekit-auth';
import { getSession } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    // Verify authentication
    const session = await getSession();
    if (!session) {
      console.log('i am unauthorized here')
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Process form data
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Use the existing uploadToImageKit function
    const url = await uploadToImageKit(file);

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Image upload failed:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed' },
      { status: error instanceof Error && error.message.includes('Unauthorized') ? 401 : 500 }
    );
  }
}