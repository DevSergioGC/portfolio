import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "../sections/NavBar";
import i18nConfig from "../../i18nConfig.js";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sergio's Portfolio",
  description: "Portfolio made by Sergio Guzman",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={`${inter.className} dark:bg-dark-main bg-light-main text-black dark:text-white`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
