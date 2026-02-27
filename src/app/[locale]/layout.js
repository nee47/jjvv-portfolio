import { Roboto_Mono, Ubuntu, Archivo, Libre_Franklin } from "next/font/google";
import Navigation from "../components/MyNavigation";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";

import "@/src/app/globals.css";

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});

const archivo = Archivo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-archivo",
});

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "James Vilca - Full-stack developer - Programador Full-stack en Peru",
  description: "Portfolio del desarrollador web James Vilca, Peru Lima",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${roboto_mono.variable} ${ubuntu.variable} ${archivo.variable} `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
