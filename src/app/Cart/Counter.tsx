import styled from "styled-components";

import { TSelectedProduct } from "./CartItem";
import useMKSContext from "../../hooks/useMKSContext";

type Action = "add" | "remove";

const Counter = ({ product }: TSelectedProduct) => {
  const { selected, setSelected } = useMKSContext();

  const handleClick = (action: Action) => {
    const arr = [...selected];
    const i = arr.findIndex((obj) => obj.id === product.id);

    if (action === "add") {
      arr[i].quantity += 1;
      setSelected(arr);
    }

    if (action === "remove" && product.quantity > 1) {
      arr[i].quantity -= 1;
      setSelected(arr);
    }
  };

  return (
    <MKSCounter>
      <button onClick={() => handleClick("remove")}>-</button>
      <span>{product.quantity}</span>
      <button onClick={() => handleClick("add")}>+</button>
    </MKSCounter>
  );
};

export default Counter;

const MKSCounter = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2px;

  button {
    padding-inline: 5px;
  }

  span {
    font-size: 9px;
    padding-inline: 8px;
    border-right: 1px solid var(--border);
    border-left: 1px solid var(--border);
  }
`;
