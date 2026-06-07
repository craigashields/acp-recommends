import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import siteMetadata from "@/data/site-data";
import Footer from "@/components/footer";
import ClientLogger from "@/components/client-logger";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.siteUrl),
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: siteMetadata.siteLogo }],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: siteMetadata.siteLogo }],
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.headerTitle || siteMetadata.title,
    images: [{ url: siteMetadata.socialBanner }],
    locale: siteMetadata.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang={siteMetadata.language}>
        <body className="antialiased">
          <ClientLogger />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header />
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
