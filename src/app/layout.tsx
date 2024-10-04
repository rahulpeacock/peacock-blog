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
      <body
        className={`${commitMono.className} bg-[url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='10' height='20'><text x='0' y='16' fill='%23C6D1F1' font-family='CommitMono'>~</text></svg>')]`}
      >
        {children}
      </body>
    </html>
  );
}
