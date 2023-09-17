import { ChakraProvider } from "@chakra-ui/react";
import { render } from "preact";
import { App } from "./app.tsx";
import "materialize-css/dist/css/materialize.min.css";

render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("app")!,
);
