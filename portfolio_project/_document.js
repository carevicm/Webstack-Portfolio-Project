import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // Remove getInitialProps if you're not using it for anything specific

  render() {
    return (
      <Html lang="en"> {/* Remove inline style if not necessary */}
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="color-scheme" content="light dark" />
          <link rel="manifest" href="/manifest.json" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
          {/* Add other head elements here */}
        </Head>
        <body suppressHydrationWarning>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
