import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./header/page.jsx";
import Footer from "./footer/page.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Project by Milan Carevic",
  description: "Portfolio Webiste for Milan Carevic, based in Canada. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <Head>
        <link
          rel="canonical"
          href="https://webstack-portfolio-project-alpha.vercel.app/"
        />
        <link rel="manifest" href="manifest.json" />
        <meta property="og:image" content="/assets/react_portfolio1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:description" content="Portfolio Webiste for Milan Carevic, based in Canada." />
        <meta property="og:title" content="Portfolio Project by Milan Carevic" />
        <meta property="og:url" content="https://webstack-portfolio-project-alpha.vercel.app/" />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;"
        ></meta>
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
