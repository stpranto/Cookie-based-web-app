import { NextResponse } from 'next/server';

export default function handler(req, res) {
  // Get the incoming "Authorization" header from the request
  const incomingAuthorizationHeader = req.headers.get('Authorization');

  // Check if the "Authorization" header is present
  if (incomingAuthorizationHeader) {
    // Prefix the token with "Bearer "
    const modifiedAuthorizationHeader = `Bearer ${incomingAuthorizationHeader}`;

    // Add the modified "Authorization" header to the response
    res.headers.set('Authorization', modifiedAuthorizationHeader);
  }

  // Continue processing the request and producing the response
  return NextResponse.next();
}
