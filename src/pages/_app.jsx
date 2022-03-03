import { SessionProvider } from "next-auth/react";
import "../../styles/global.css";
import { Header } from "../Components/Header/Header";

function MyApp({ Component, pageProps:{session,...pageProps}}) {

  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  
  );
}

export default MyApp;
