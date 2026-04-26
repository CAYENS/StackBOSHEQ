import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AuthSessionProvider } from "@/components/providers/session-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://bosheq.com"),
  title: "BOSHEQ | Crafted Atmosphere",
  description: "Luxury fragrance candles designed as atmospheric objects.",
  openGraph: {
    title: "BOSHEQ",
    description: "Crafted Atmosphere",
    url: "https://bosheq.com",
    siteName: "BOSHEQ"
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://bosheq.com" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
