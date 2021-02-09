import { ApolloProvider } from "@apollo/client";
import React from "react";
import AbcLayout from "./components/AbcLayout";
import Routes from "./routes";
import api from "./services/api";

const App = () => {
  return (
    <AbcLayout>
      <ApolloProvider client={api}>
        <Routes />
      </ApolloProvider>
    </AbcLayout>
  );
};

export default App;
