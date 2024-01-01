import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./sections/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sergio's Portfolio",
  description: "Portfolio made by Sergio Guzman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-dark bg-light text-black dark:text-light-main`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
