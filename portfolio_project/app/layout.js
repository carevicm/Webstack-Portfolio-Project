import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "./header/page.jsx";
import Footer from "./footer/page.jsx";

const inter = Inter({ subsets: ["latin"] });
const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://webstack-portfolio-project-alpha.vercel.app";

export const metadata = {
  metadataBase: new URL(baseURL),
  title: "Portfolio Project by Milan Carevic",
  description: "Portfolio Website by Milan Carevic, Canada.",
  keywords: "Milan Carevic, Portfolio, Web Development, Canada",
  authors: { name: "Milan Carevic" },
  robots: "index, follow",
  openGraph: {
    title: "Portfolio Project by Milan Carevic",
    description: "Portfolio Website by Milan Carevic, Canada.",
    type: "website",
    images: ["/og_image.jpg"],
  },
  twitter: {
    site: "@milan84carevic",
    card: "summary_large_image",
    images: ["/og_image.jpg"],
    description: "Portfolio Website by Milan Carevic, Canada.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors.name} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={baseURL} />
        <link rel="manifest" href="manifest.json" />
        {Object.entries(metadata.openGraph).map(([key, value]) =>
          key !== "images" ? (
            <meta key={key} property={`og:${key}`} content={value} />
          ) : null
        )}
        {metadata.openGraph.images.map((image, index) => (
          <meta
            key={index}
            property="og:image"
            content={new URL(image, metadata.metadataBase).toString()}
          />
        ))}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        {metadata.twitter.images.map((image, index) => (
          <meta
            key={index}
            name="twitter:image"
            content={new URL(image, metadata.metadataBase).toString()}
          />
        ))}
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