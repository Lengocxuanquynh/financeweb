import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { constructMetadata } from "@/lib/metadata";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <AuthProvider>
          <main id="main-content">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
