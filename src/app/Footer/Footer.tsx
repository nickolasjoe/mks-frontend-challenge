import styled from "styled-components";

const Footer = () => {
  return (
    <MKSFooter>
      <small>
        MKS sistemas © Todos os direitos reservados. Feito com ❤️ por{" "}
        <a href="https://www.nickolasjoe.com/">Nickolas Joe</a>.
      </small>
    </MKSFooter>
  );
};

export default Footer;

const MKSFooter = styled.footer`
  background: var(--white-2);
  padding: 8px 15px;
  text-align: center;
  line-height: 1.3;

  small {
    display: block;
    font-size: 12px;
    @media (max-width: 485px) {
      max-width: 300px;
      margin-inline: auto;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;
