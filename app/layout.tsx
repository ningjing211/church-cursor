import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '主信教會',
  description: '主信教會官方網站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={notoSansTC.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="antialiased bg-gradient-to-br from-teal-950 via-teal-900 to-teal-950 min-h-screen">
        {children}
      </body>
    </html>
  );
} 