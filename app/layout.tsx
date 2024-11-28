import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/layout/Header';

const NohemiBold = localFont({
  src: './fonts/Nohemi-Bold.otf',
  variable: '--font-nohemi-bold',
  weight: '100 900',
});
const NohemiMedium = localFont({
  src: './fonts/Nohemi-Medium.otf',
  variable: '--font-nohemi-medium',
  weight: '100 900',
});

const NohemiRegular = localFont({
  src: './fonts/Nohemi-Regular.otf',
  variable: '--font-nohemi-regular',
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
        className={`${NohemiBold.variable} ${NohemiMedium.variable} ${NohemiRegular.variable}  antialiased`}
        style={{ fontFamily: 'var(--font-nueue-regular), sans-serif' }} // Default to regular font
      >
        <Header />
        <div className="container bg-primaryBlack mt-[60px] h-[100vh] w-[100vw] p-2 flex flex-col  items-start justify-center">
          <div className="w-full md:w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
