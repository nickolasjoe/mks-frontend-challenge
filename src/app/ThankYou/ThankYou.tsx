import styled from "styled-components";

import Wrapper from "../Global";

const ThankYou = () => {
  return (
    <Wrapper>
      <div>
        <Title>Obrigado.</Title>
        <Message>
          Obrigado por comprar com a MKS Sistemas. Embora este site seja
          fictício, você foi um usuário de verdade. ❤️
        </Message>
      </div>
    </Wrapper>
  );
};

export default ThankYou;

const Title = styled.h1`
  font-size: 24px;
  padding-bottom: 1px;
  margin-bottom: 15px;
  border-right: 4px solid;
  width: 8ch;
  margin-inline: auto;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s steps(8), blinking 0.5s infinite step-end alternate;
`;

const Message = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  max-width: 600px;
`;
