import "./globals.css";
import Navbar from "./components/NavBar";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Bank Al-Falas",
  description: "Created by Salem, Osama, and Abdullah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
