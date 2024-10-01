import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./global.scss"
import { Header } from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Lions | Concessionária de seminovos",
  description: "O seu carro dos sonhos está aqui na Lions Seminovos! Veículos de alta qualidade, rigorosamente inspecionados e com procedência garantida. Confira!",
  keywords: [
    "seminovos",
    "carros usados",
    "concessionária de seminovos",
    "veículos inspecionados",
    "compra de carros usados",
    "carros de qualidade",
    "Lions Seminovos"
  ],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/bannerLions.webp`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
