import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import NavbarComponent from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "Galcorp-logistic",
  description: "Gal is the ideal international freight forwarder to suit your freight and logistics needs. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavbarComponent />
          <div className={'container mx-auto px-4 py-10'}>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html >
  );
}
