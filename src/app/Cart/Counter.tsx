import styled from "styled-components";

type TCounter = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ count, setCount }: TCounter) => {
  return (
    <MKSCounter>
      <button
        onClick={() => {
          if (count > 1) setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
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
