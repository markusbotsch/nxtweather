import './globals.css';
import { Lato, Jost, Ultra } from 'next/font/google';

import Header from './components/Header';

const lato = Lato({ weight: ["400", "700"], subsets: ['latin'], variable: '--font-lato' });
const jost = Jost({weight: ["400", "700"], subsets: ['latin'], variable: '--font-jost'});

export const metadata = {
  title: 'NxtWeather',
  description: 'NxtWeather – ein Next.js-Demoprojekt von Markus Botsch',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${jost.variable}`}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
