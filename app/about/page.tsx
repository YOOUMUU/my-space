export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About me',
  description: 'A person who loves to learn new things',
};

const AboutPage = () => {
  return (
    <div className="container">
      <h1 className="title">About me</h1>
      <p className="leading-loose">A person who loves to learn new things.</p>
    </div>
  );
};

export default AboutPage;
