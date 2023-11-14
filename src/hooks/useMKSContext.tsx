import { useContext } from "react";

import { MKSContext } from "../context/MKSContext";

const useMKSContext = () => {
  const context = useContext(MKSContext);
  if (!context) throw new Error("Missing MKSContextProvider");
  return context;
};

export default useMKSContext;
