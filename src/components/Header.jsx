import styled from "styled-components";
import analyticsLogo from "../assets/image/analytics_logo.svg";

import { pallete, theme } from "../themeVariables";
import { Button } from "./UI/Button";



const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px ${theme.sectionMargin};
`;

const NavContainer = styled.div`
  display: flex;
`;

const Logo = styled.img``;

const NavItemList = styled.ul`
  display: flex;
  margin-left: 75px;
`;

const NavItem = styled.li`
  margin: 15px;
  padding: 10px;
  color: ${pallete.secundaryColor};
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all .3s;

  &:hover {
    border-bottom: 2px solid ${pallete.secundaryColor};
  }
`;

const SignBox = styled.div``;

export const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo src={analyticsLogo} alt="Logo Analytics" />
        <NavItemList>
          <NavItem>Products</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>FAQ</NavItem>
          <NavItem>Blog</NavItem>
        </NavItemList>
      </NavContainer>
      <SignBox>
        <Button dark text="Sign Up" />
        <Button dark text="Sign In" />
      </SignBox>
    </HeaderContainer>
  );
};
