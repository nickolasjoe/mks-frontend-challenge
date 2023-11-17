import styled from "styled-components";

const Wrapper = ({ children }: React.PropsWithChildren) => {
  return <MKSWrapper>{children}</MKSWrapper>;
};

export default Wrapper;

const MKSWrapper = styled.div`
  min-height: calc(100vh - 131.59px);
  display: grid;
  place-items: center;
  padding: 15px;
`;
