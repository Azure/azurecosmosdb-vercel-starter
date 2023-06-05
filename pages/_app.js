// pages/_app.js
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
