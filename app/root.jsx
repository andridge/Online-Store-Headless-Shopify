const { MetaFunction } = require("@vercel/remix");
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
const defaultStyle = {
  background: "#000000",
};

export default function App() {
  return (
    <html lang="en" style={defaultStyle}>
      
      <head>
        <Meta />
        <Links />
      </head>
      <body >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
