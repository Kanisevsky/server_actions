import { Inter } from 'next/font/google';
import './globals.css';
import Hero from '@/components/Hero';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Server Actions',
  description: 'Guide of how to use nextjs 14 server actions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        {children}
      </body>
    </html>
  );
}
