import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </React.Fragment>
  );
}

export default App;
