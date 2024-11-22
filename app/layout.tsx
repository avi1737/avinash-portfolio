import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/layout/Header';
import StickyWidget from './components/layout/StickyWidget';
import Hero from './components/layout/Hero';

const NueueMontrealBold = localFont({
  src: './fonts/NeueMontreal-Bold.otf',
  variable: '--font-nueue-bold',
  weight: '100 900',
});
const NueueMontrealLight = localFont({
  src: './fonts/NeueMontreal-Light.otf',
  variable: '--font-nueue-light',
  weight: '100 900',
});

const NueueMontrealRegular = localFont({
  src: './fonts/NeueMontreal-Regular.otf',
  variable: '--font-nueue-regular',
  weight: '100 900',
});

const NueueMontrealMedium = localFont({
  src: './fonts/NeueMontreal-Medium.otf',
  variable: '--font-nueue-medium',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Avinash Varpeti - Software Engineer',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NueueMontrealRegular.variable} ${NueueMontrealMedium.variable} ${NueueMontrealBold.variable} ${NueueMontrealLight.variable} antialiased`}
        style={{ fontFamily: 'var(--font-nueue-regular), sans-serif' }} // Default to regular font
      >
        <Header />
        <div className="container mt-[100px] flex flex-col lg:flex-row items-start justify-center pb-[100px]">
          <StickyWidget />
          <div className="w-full lg:w-1/2">{children}</div>
        </div>
      </body>
    </html>
  );
}
