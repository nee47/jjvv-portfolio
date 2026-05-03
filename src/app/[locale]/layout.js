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
  description: "Portfolio del desarrollador web James Vilca, especialista en Next.js, React, y Node.js en Lima, Peru.",
  keywords: ["Desarrollador Web", "Full Stack Developer", "Next.js", "React", "Node.js", "Programador Peru", "James Vilca", "Peru Lima"],
  authors: [{ name: "James Vilca" }],
  creator: "James Vilca",
  metadataBase: new URL("https://devmotec.com"), // Base URL for the project
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      es: "/es",
    },
  },
  openGraph: {
    title: "James Vilca - Full-stack developer",
    description: "Portfolio del desarrollador web James Vilca, especialista en Next.js, React, y Node.js en Lima, Peru.",
    url: "https://devmotec.com", // Example URL, replace with actual if known
    siteName: "James Vilca Portfolio",
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
