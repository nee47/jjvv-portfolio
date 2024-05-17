import { Roboto_Mono, Ubuntu } from "next/font/google";
import Navigation from "./components/MyNavigation";
import "./globals.css";

const robot_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "James Joseph Vilca",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
