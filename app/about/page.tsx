export const dynamic = 'force-static';

import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'About me',
  description: 'A person who loves to learn new things',
};

const AboutPage = async () => {
  const session = await getServerSession();

  // if (!session) {
  //   return <p>You must be signed in...</p>
  // }

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="container">
      <h1 className="title">About me</h1>
      <p className="leading-loose">A person who loves to learn new things.</p>
    </div>
  );
};

export default AboutPage;
