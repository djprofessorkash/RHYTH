import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RHYTH: Music for every moment.",
  description: "A full-stack radio streaming application for event-driven and mood-driven music listening experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
