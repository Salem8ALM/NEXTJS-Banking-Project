import "./globals.css";
import Navbar from "./components/NavBar";

export const metadata = {
  title: "Bank Al-Falas",
  description: "Created by Salem, Osama, and Abdullah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
