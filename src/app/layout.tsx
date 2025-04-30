import Footer from "@/components/ui/footer";
import "../styles/globals.css";
import Navbar from "@/components/ui/navbar";
import Sheetbar from "@/components/ui/sheetbar";
//import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/fav.ico" type="image/x-icon" />
        <title>YEMAG</title>
      </head>
      <body>
        <header>
          <Sheetbar className="px-16 py-2" />
          <Navbar className="bg-mine-white px-16 py-2" />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
