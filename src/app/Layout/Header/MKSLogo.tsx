import styled from "styled-components";

const MKSLogo = () => {
  return (
    <Logo href="/">
      MKS <span>Sistemas</span>
    </Logo>
  );
};

export default MKSLogo;

const Logo = styled.a`
  color: var(--white-1);
  font-size: 40px;
  font-weight: 600;

  span {
    font-size: 20px;
    font-weight: 300;
  }
`;
