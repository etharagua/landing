import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
// pages/_app.js
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import InsightRoll from "@/components/InsightRoll";
import Link from "next/link";

const insights = [
    "🌟🚀", " ", " "," "," ",
    "Te Invitamos a Nuestro Próximo Evento, este 8 de Abril, desde las 9:30 de la mañana en la UPT Aragua",
    "Únete a nuestro Seminario Blockchain 2025 | 1er Capítulo | Onboarding",
    "Empieza tu Recorrido en la web3 ¡No te lo pierdas!",
    " ", " "," "," ", "🌟🚀",
];

// const insights = [
//   "🌟🚀", " ", " "," "," ",
//   "Te Invitamos a Nuestro Próximo Evento, Únete al BaseCamp de ScaffoldStark",
//   "Sesiones virtuales: 27, 29 de enero y 3 de febrero",
//   "Sesión presencial el 11 de Febrero, desde las 9:00 de la mañana en la UPT Aragua",
//   "Desarrolla smart contracts con Starknet ¡No te lo pierdas!",
//   " ", " "," "," ", "🌟🚀",
// ];

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
    <Link href="/eventos" className="text-white">
      <InsightRoll insights={insights} />
    </Link>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont  bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
