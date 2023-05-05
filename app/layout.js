import './globals.css';
import { Lato, Jost } from 'next/font/google';

import Header from './components/Header';

const lato = Lato({ weight: ["400", "700"], subsets: ['latin'], variable: '--lato-font'});
console.log("Schrift:", lato);
const jost = Jost({weight: ["400", "700"], subsets: ['latin'], variable: '--jost-font'});

export const metadata = {
  title: 'NxtWeather',
  description: 'NxtWeather – ein Next.js-Demoprojekt von Markus Botsch',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${jost.variable} `}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
