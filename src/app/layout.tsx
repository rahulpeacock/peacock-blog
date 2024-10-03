import '@/styles/main.css';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

const commitMono = localFont({
  src: [
    {
      path: './_fonts/CommitMono-500-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './_fonts/CommitMono-700-Regular.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-commit-mono',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='dark' style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={`${commitMono.className}`}>{children}</body>
    </html>
  );
}
