import { Metadata } from 'next';
import { Lato, Nunito } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { template: '%s | DEVNEST', default: 'DEVNEST' }
};

const lato = Lato({
  weight: ['400', '700']
});

const nunito = Nunito({ weight: ['400', '500', '600', '700'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${lato.className}`}>
        <header className="h-10 bg-green-400">
          <nav className="flex gap-4">
            <Link href="/login" className={`${nunito.className} font-bold`}>
              Login
            </Link>
            <Link href="/register" className={nunito.className}>
              Register
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
