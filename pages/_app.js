import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      authConfig={{
        authUrl: "/api/auth",
        domain: "https://sign-in-b4xz-25sr119wo-placeparks.vercel.app/",
        loginRedirect: "/main",
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
