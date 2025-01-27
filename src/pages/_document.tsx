import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="w-screen h-screen overflow-x-hidden box-border">
      <Head />
      <body className="antialiased w-full h-full box-border">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
