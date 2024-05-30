import { Roboto_Mono, Ubuntu } from "next/font/google";
import Navigation from "./components/MyNavigation";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.variable} ${ubuntu.variable} ubuntu`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
