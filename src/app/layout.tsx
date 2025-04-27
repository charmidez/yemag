
import "../styles/globals.css"
import Navbar from "@/components/ui/navbar";

import localFont from "next/font/local";

const monsterat = localFont({
  src: "/fonts/montserrat/Montserrat-Light.woff2"   
  })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-light">
        <Navbar className="bg-violet-400 font-light" />
        <div className={` p-4  ${monsterat.className}`}>
          {children}
        </div>
      </body>
    </html>
  );
} 


