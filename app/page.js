import { useState } from 'react';
import { setCookie } from 'nookies'; // Nookies is a Next.js package for working with cookies
import Link from 'next/link';
<Link href="/preferences">Go to Preferences</Link>

export default function Home() {
  const [userPreference, setUserPreference] = useState('');

  const handleSetPreference = (preference) => {
    // Set the user preference as a cookie
    setCookie(null, 'userPreference', preference, {
      maxAge: 30 * 24 * 60 * 60, // Cookie expiration time (in seconds)
      path: '/', // Path where the cookie is accessible (root path)
    });

    // Update the state with the selected preference
    setUserPreference(preference);
  };

  return (
    <div>
      <h1>Cookie Setting App</h1>
      <p>Selected Preference: {userPreference}</p>

      <button onClick={() => handleSetPreference('theme: dark')}>
        Set Dark Theme
      </button>

      <button onClick={() => handleSetPreference('language: en')}>
        Set Language to English
      </button>
    </div>
  );
}
