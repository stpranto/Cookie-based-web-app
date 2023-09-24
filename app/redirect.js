import { NextResponse } from 'next/server';

export default function handler(req, res) {
  // Redirect the user to the home page ("/")
  return NextResponse.redirect('/', { status: 302 });
}
