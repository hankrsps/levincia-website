import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export const metadata: Metadata = { title: { default:"Levincia | Forge Your Legacy", template:"%s | Levincia" }, description:"Levincia 317 RSPS — Forge Your Legacy." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav/>{children}<Footer/></body></html>}
