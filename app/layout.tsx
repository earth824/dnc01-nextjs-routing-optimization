import './globals.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <header className="h-10 bg-green-400">Main Header</header>
        {children}
      </body>
    </html>
  );
}
