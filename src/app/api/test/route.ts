// src/app/api/test/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET() {
  try {
    await connectDB();
    
    // Count the number of blog posts
    const totalBlogs = await Blog.countDocuments();
    
    // Check the database connection
    const dbStatus = {
      connected: true,
      totalBlogs
    };
    
    return NextResponse.json({
      status: 'ok',
      dbStatus,
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('API test error:', error);
    return NextResponse.json(
      { 
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}