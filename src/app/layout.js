import "./globals.css";
import Navbar from "./components/NavBar";

export const metadata = {
  title: "Al Nahda",
  description: "Created by Salem, Osama, and Abdullah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
