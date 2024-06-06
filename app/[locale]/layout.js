import { Roboto_Mono, Ubuntu } from "next/font/google";
import Navigation from "../components/MyNavigation";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";

import "@/app/globals.css";

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "James Joseph Vilca",
  description: "Portfolio",
};

const locales = ["es", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${roboto_mono.variable} ${ubuntu.variable} ubuntu`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
