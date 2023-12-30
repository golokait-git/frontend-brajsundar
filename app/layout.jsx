import "./globals.css";
import { Poppins } from "next/font/google";
import NavbarSelector from "./navbar-selector";
import Footer from "../app/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Brajsundar Das",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="description"
        content="The urban spiritual leader | Author | Spiritual Relationship Coach | Global public speaker | Teacher of Bhāgavata knowledge"
      />
      <meta name="title" content="Brajsundar Das" />
      <body className={`bg-gradient-to-r from-[#f4e9d9] to-[#ffffff] ${poppins.className}`} >
        <NavbarSelector />
        {children}
        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
