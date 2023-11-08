import "./globals.css";
import Navbar from "./header/page.jsx";
import Footer from "./footer/page.jsx";

export const metadata = {
  title: "Portfolio Project by Milan Carevic",
  description: "Portfolio Website for Milan Carevic, based in Canada.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content={`width=${viewport.width}, initial-scale=${viewport.initialScale}`}
        />
        <meta name="color-scheme" content="light dark" />
        <title>Portfolio Project by Milan Carevic</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
