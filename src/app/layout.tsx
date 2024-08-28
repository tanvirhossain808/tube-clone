import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/ui/Header/Header"
import ClientProvider from "@/components/ClientProvider"
import Sidebar from "@/components/Sidebar/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Youtube",
    description: "This clone is made for educational purpose",
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-bg h-full w-full max-w-[1440px] mx-auto`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ClientProvider>
                        <header className="sticky top-0">
                            <Header />
                        </header>
                        <div className="flex">
                            <Sidebar />
                            <main className="flex-1 overflow-auto max-h-[calc(100vh-56px)]">
                                {children}
                            </main>
                        </div>
                    </ClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
