import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercedes",
  description: "Benz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-700`}>
        <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow ">
          {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
