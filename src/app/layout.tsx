"use client";
import "@/css/globals.css";
import Provider from "@/components/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fastly.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.1/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css"
        />
      </head>
      <body className="font-wanted font-medium text-white">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
