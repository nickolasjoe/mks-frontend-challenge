import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MKSContextProvider } from "./context/MKSContext";
import Header from "./app/Layout/Header";
import Products from "./app/Products";
import ThankYou from "./app/ThankYou";
import Footer from "./app/Layout/Footer";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MKSContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="thank-you" element={<ThankYou />} />
          </Routes>
          <Footer />
        </MKSContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
