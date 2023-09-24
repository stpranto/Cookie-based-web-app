import { parseCookies } from 'nookies'; // Import parseCookies from nookies
import Link from 'next/link';

const Preferences = ({ userPreference }) => {
  return (
    <div>
      <h1>User Preferences</h1>
      <p>Selected Preference: {userPreference || 'No preference set'}</p>
      <Link href="/">Go back to the home page</Link>
    </div>
  );
};

// Fetch and parse the user preference cookie
export async function getServerSideProps(context) {
  const cookies = parseCookies(context);

  // Extract the user preference from the cookies
  const userPreference = cookies.userPreference || null;

  // Pass the user preference as a prop to the component
  return {
    props: {
      userPreference,
    },
  };
}

export default Preferences;

