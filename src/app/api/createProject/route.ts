export const dynamic = "force-dynamic"; // defaults to auto
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { Project } from '../../../types/types';
import { error } from 'console';

export async function GET(request: Request) {
  return new Response("Hello, world!");
}

export async function POST(request: Request) {
  const body = await request.json();
  const {title} = body;

  const hello = await kv.get("project:"+title);
  if (hello) {
    console.log("Project already exists")
    return NextResponse.error();
  }
  const project = {
    author: "",
    title,
    counter: 0,
    tree: [],
    changelog: "",
  };
  try {
    await kv.set( "project:" + title, project);
  }
  catch (e) {
    console.log(e);
    return NextResponse.error();
  }
  
  return NextResponse.json(project);
}
