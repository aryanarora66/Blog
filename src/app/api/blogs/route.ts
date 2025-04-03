// app/api/blogs/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET(req: Request) {
  try {
    await connectDB();
    
    // Get only published blogs
    const blogs = await Blog.find({ published: true })
      .sort({ publishedAt: -1 }) // Sort by publish date, newest first
      .select('title slug excerpt coverImage publishedAt tags')
      .lean();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}