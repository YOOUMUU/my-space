import NavBar from '@components/Navigation/NavBar';
import '@styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from './AuthProvider';
import Footer from '@components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Space',
  description: 'My Space Appication for Next.js and TypeScript learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
