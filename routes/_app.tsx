import { AppProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>🍊 Paste</title>
      </head>
      <body class="w-full max-w-screen-md mx-auto text-lg font-mono dark:bg-gray-900 dark:text-white">
        <Header />
        <Component />
      </body>
    </html>
  );
}
