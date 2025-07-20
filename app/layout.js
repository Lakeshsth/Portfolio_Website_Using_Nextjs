import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Portfolio website of Lakesh Shrestha – Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}