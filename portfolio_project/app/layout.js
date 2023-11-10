import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./header/page.jsx";
import Footer from "./footer/page.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Project by Milan Carevic",
  description: "Portfolio Webiste by Milan Carevic, Canada. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <Head>
        <link rel="canonical" href="https://webstack-portfolio-project-alpha.vercel.app/" />
        <link rel="manifest" href="manifest.json" />
        <meta property="og:url" content="https://webstack-portfolio-project-alpha.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio Project by Milan Carevic" />
        <meta property="og:description" content="Portfolio Website by Milan Carevic, Canada." />
        <meta property="og:image" content="https://webstack-portfolio-project-alpha.vercel.app/react_portfolio1.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1050" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;"></meta>
        <meta name="theme-color" content="#121212" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} `} suppressHydrationWarning={true}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
