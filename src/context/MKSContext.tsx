import { createContext, useState } from "react";
import { Product } from "../app/Products/ProductItem";

export type TMKSContext = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProducts: Product[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const MKSContext = createContext<TMKSContext | null>(null);

export const MKSContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  return (
    <MKSContext.Provider
      value={{
        isNavbarOpen,
        setIsNavbarOpen,
        selectedProducts,
        setSelectedProducts,
      }}
    >
      {children}
    </MKSContext.Provider>
  );
};
