import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aluraflix",
  description: "Portal de cursos em vídeos da Alura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header/>
        {children}
      <footer>
         <Footer/>
      </footer>
      </body>
    </html>
  );
}
