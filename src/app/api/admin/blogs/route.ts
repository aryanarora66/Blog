import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();
    
    const blog = new Blog({
      ...body,
      author: session.user.id,
    });

    await blog.save();
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}