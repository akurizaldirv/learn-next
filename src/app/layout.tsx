import {Metadata} from "next";
import "./global.css";
import {Inter, Archivo} from "next/font/google";
import FooterComponent from "@/shared/components/footer/Footer";
import HeaderComponent from "@/shared/components/header/Header";

export const metadata: Metadata = {
    title: {
        default: 'Purifion - Medical-Grade Air Purifier',
        template: '%s | Purifion'
    },
    description: 'A Leading provider of medical-grade air purifiers. Say good bye to 99% of harmful particles',
}

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const archivo = Archivo({
    subsets: ["latin"],
    variable: "--font-archivo",
})

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${archivo.variable} font-sans flex flex-col h-screen`}>
                <header>
                    <HeaderComponent />
                </header>
                <main className={"flex-1"}>
                    {children}
                </main>
                <footer className={""}>
                    <FooterComponent />
                </footer>
            </body>
        </html>
    )
}
