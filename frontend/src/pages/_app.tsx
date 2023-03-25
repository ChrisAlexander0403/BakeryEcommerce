// import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
// import "../assets/sass/style.scss";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
		const mainScript = document.createElement("script");
		mainScript.src = "js/main.js";
		setTimeout(() => {
      document.body.appendChild(mainScript);
    }, 100);
	});

  return <Component {...pageProps} />
}
