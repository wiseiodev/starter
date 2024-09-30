import '@/config/globals.css';

import { appOptions, geistMono, geistSans } from '@/config/app-options';

import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${appOptions.appName}`,
  description: 'Hit the ground running with this starter app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>'
        ></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex flex-col min-h-screen'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
