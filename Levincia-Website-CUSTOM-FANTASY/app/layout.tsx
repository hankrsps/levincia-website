import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = { metadataBase:new URL("https://levincia-ps.com"), title:{default:"Levincia | Forge Your Legacy",template:"%s | Levincia"}, description:"Levincia 317 RSPS — Forge Your Legacy. News, downloads, highscores, wiki and community." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/>{children}<Footer/></body></html>}
