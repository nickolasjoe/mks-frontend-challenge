import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import CartList from "../Cart";
import useMKSContext from "../../../hooks/useMKSContext";
import { formatCurrency } from "../../../utils/numbers";

type TNavbar = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: TNavbar) => {
  const { selected } = useMKSContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (selected.length > 0) setIsOpen(true);
  }, [selected, setIsOpen]);

  useEffect(() => {
    if (isOpen) document.body.classList.add("navbar-open");
    else document.body.classList.remove("navbar-open");
  }, [isOpen]);

  const isCartEmpty = selected.length === 0;

  const calculateTotalInProducts = () =>
    formatCurrency(
      selected.reduce(
        (acc, current) => Number(current.price) * current.quantity + acc,
        0,
      ),
    );

  return (
    <MKSNavbar className={isOpen ? "active" : ""}>
      <Div100vh>
        <MKSCart>
          <div>
            <TitleWrapper>
              <CartTitle>
                Carrinho
                <br />
                de compras
              </CartTitle>
              <CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
            </TitleWrapper>
            {isCartEmpty ? (
              <EmptyCartMessage>Seu carrinho está vazio! 🙁</EmptyCartMessage>
            ) : (
              <CartList />
            )}
          </div>
          {!isCartEmpty && (
            <CartTotal>
              <p>Total:</p>
              <p>{calculateTotalInProducts()}</p>
            </CartTotal>
          )}
        </MKSCart>
        <CheckoutButton
          onClick={() => {
            setIsOpen(false);
            if (!isCartEmpty) navigate("/thank-you");
          }}
        >
          {isCartEmpty ? "Continuar Comprando" : "Finalizar Compra"}
        </CheckoutButton>
      </Div100vh>
    </MKSNavbar>
  );
};

export default Navbar;

const MKSNavbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 486px;
  background-color: var(--blue);
  box-shadow: -5px 0 6px rgba(0, 0, 0, 0.13);
  transition: transform 0.3s ease-in;
  transform: translateX(100%);
  z-index: 2;
  &.active {
    transform: translateX(0);
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const MKSCart = styled.div`
  flex: 1;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 450px) {
    padding: 15px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EmptyCartMessage = styled.p`
  color: var(--white-1);
  text-align: center;
`;

const CartTitle = styled.h1`
  font-size: 27px;
  line-height: 1.2;
  font-weight: 700;
  color: var(--white-1);
  margin-bottom: 64px;
`;

const CloseButton = styled.button`
  font-size: 22px;
  font-weight: 300;
  color: var(--white-1);
  background-color: var(--black-3);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.2s ease-out;
  &:hover {
    color: var(--black-3);
    background-color: var(--white-1);
  }
`;

const CartTotal = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: var(--white-1);
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  color: var(--white-1);
  background-color: var(--black-3);
  padding: 40px;
  text-align: center;
  transition: 0.2s ease-out;
  &:hover {
    color: var(--black-3);
    background-color: var(--white-1);
  }
`;
