import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
);
