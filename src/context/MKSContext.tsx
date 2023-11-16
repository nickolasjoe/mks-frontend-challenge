import { createContext, useState } from "react";

export type Product = {
  id: number;
  name: "string";
  description: "string";
  photo: "string";
  price: "string";
};

export type SelectedProduct = Product & {
  quantity: number;
};

type TMKSContext = {
  selected: SelectedProduct[];
  setSelected: React.Dispatch<React.SetStateAction<SelectedProduct[]>>;
};

export const MKSContext = createContext<TMKSContext | null>(null);

export const MKSContextProvider = ({ children }: React.PropsWithChildren) => {
  const [selected, setSelected] = useState<SelectedProduct[]>([]);

  return (
    <MKSContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {children}
    </MKSContext.Provider>
  );
};
