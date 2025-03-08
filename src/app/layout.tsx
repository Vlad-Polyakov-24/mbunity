import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@globals/providers/ErrorBoundary';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import '@globals/styles/index.scss';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Mbunity',
  description: 'Developed by Vlad Poliakov',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang={'en'}>
  <body className={`${poppins.variable}`}>
  <ErrorBoundary>
    <Header />
    <main className={'main'}>{children}</main>
    <Footer />
  </ErrorBoundary>
  <ToastContainer theme={'light'} />
  </body>
  </html>
);

export default RootLayout;
