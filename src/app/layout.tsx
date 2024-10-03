import '@/styles/main.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='dark' style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
