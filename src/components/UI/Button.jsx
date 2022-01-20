import styled from "styled-components";
import { pallete } from "../../themeVariables";

export const Button = ({ text, pink, dark, left, right, ...rest }) => {
  const align =
    (left && { marginRight: "auto" }) || (right && { marginLeft: "auto" });

  const DarkButton = styled.button`
    border: 1px solid transparent;
    border-radius: 99px;
    padding: 10px 40px;
    background: transparent;
    color: ${pallete.secundaryColor};
    text-transform: capitalize;
    margin: 0 5px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border: 1px solid ${pallete.borderColor};
    }
  `;

  const PinkButton = styled.button`
    border: none;
    border-radius: 99px;
    background: ${pallete.pink};
    color: ${pallete.white};
    padding: 15px 70px;
    margin: 0 5px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
  `;

  return (
    <>
      {dark && <DarkButton style={align}>{text}</DarkButton>}
      {pink && <PinkButton style={align}>{text}</PinkButton>}
    </>
  );
};
