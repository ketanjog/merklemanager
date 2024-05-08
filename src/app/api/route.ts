export const dynamic = 'force-dynamic' // defaults to auto
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const hello = await kv.get('hohohohohohohohoho')
  return NextResponse.json(hello);
  //return new Response('Hello, world!')
}