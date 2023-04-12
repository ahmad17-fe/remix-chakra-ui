import { ChakraProvider } from "@chakra-ui/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getEnv } from "env.server";
import stylesheet from "~/styles/global.css";
import theme from "~/theme";
import type { ENV } from "~/env.server";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesheet,
    },
  ];
};

interface LoaderData {
  ENV: ENV;
}

export const loader: LoaderFunction = () => {
  return json<LoaderData>({
    ENV: getEnv(),
  });
};

function Document({ children }: { children: React.ReactNode }) {
  const { ENV } = useLoaderData<LoaderData>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
