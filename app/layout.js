// app/layout.js

import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio website of Lakesh Shrestha – Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
