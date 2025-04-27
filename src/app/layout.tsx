import "../styles/globals.css";
import Navbar from "@/components/ui/navbar";
import Sheetbar from "@/components/ui/sheetbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/fav.ico" type="image/x-icon" />
        <title>YEMAG</title>
      </head>
      <body className="bg-amber-400" cz-shortcut-listen="true">
        <header>
          <Sheetbar className="px-16 py-2" />
          <Navbar className="bg-mine-white px-16 py-2" />
        </header>

        <main>{children}</main>

        <footer></footer>
      </body>
    </html>
  );
}
