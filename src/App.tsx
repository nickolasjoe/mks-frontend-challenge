import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MKSContextProvider } from "./context/MKSContext";
import Header from "./app/Header";
import Products from "./app/Products";
import Footer from "./app/Footer";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MKSContextProvider>
          <Header />
          <Products />
        </MKSContextProvider>
        <Footer />
      </QueryClientProvider>
    </>
  );
};

export default App;
