import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const baseUrl = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://fibo.pe")

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0099CC" },
    { media: "(prefers-color-scheme: dark)", color: "#04262F" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: "FIBO — Hábitos que respaldan tu bienestar",
    template: "%s | FIBO",
  },
  description:
    "La app de bienestar integral para la Gen Z que convierte tus micro-hábitos de bolsillo, cuerpo y mente en una Reserva de Bienestar y microseguros on-demand con Pacífico Seguros.",
  applicationName: "FIBO",
  authors: [{ name: "FIBO — Pacífico Seguros × UCSUR" }],
  generator: "Next.js",
  keywords: [
    "FIBO",
    "Pacífico Seguros",
    "bienestar integral",
    "microseguros",
    "Gen Z",
    "hábitos saludables",
    "Reserva de Bienestar",
    "finanzas personales",
    "salud mental",
    "Quererte Sano",
    "PWA",
  ],
  creator: "Equipo FIBO",
  publisher: "Pacífico Seguros",
  category: "health",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "FIBO",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: baseUrl,
    siteName: "FIBO",
    title: "FIBO — Hábitos que respaldan tu bienestar",
    description:
      "Transforma tu constancia diaria en una Reserva de Bienestar y microseguros accesibles sin permanencia obligatoria. Respaldado por Pacífico Seguros.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FIBO — Tu bienestar construye tu respaldo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIBO — Hábitos que respaldan tu bienestar",
    description:
      "Convierte tus micro-hábitos de bolsillo, cuerpo y mente en respaldo médico real.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        fontHeading.variable,
        "font-sans",
        fontSans.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
