import { useState } from "react";
import styled from "styled-components";

import Cart from "../../assets/cart.svg?react";

import Navbar from "../Navbar";
import MKSLogo from "./MKSLogo";
import useMKSContext from "../../hooks/useMKSContext";

const Header = () => {
  const { selected } = useMKSContext();
  const [isOpen, setIsOpen] = useState(false);

  const calculateTotalItems = () =>
    selected.reduce((acc, current) => current.quantity + acc, 0);

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <MKSHeader>
        <MKSNav>
          <MKSLogo />
          <CartButton onClick={() => setIsOpen(true)}>
            <Cart />
            {calculateTotalItems()}
          </CartButton>
        </MKSNav>
      </MKSHeader>
    </>
  );
};

export default Header;

const MKSHeader = styled.header`
  background: var(--blue);
  padding: 26px 15px;
`;

const MKSNav = styled.nav`
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
`;

const CartButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: var(--black-3);
  background: var(--white-1);
  padding: 15px 28px 15px 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: 0.2s ease-out;
  &:hover {
    background-color: var(--black-3);
    color: var(--white-1);

    path {
      fill: var(--white-1);
    }
  }

  path {
    transition: 0.2s ease-out;
  }
`;
