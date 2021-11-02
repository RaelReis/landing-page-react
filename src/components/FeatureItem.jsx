import styled from "styled-components";
import { pallete } from "../themeVariables";

const FeatureItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const FeatureImg = styled.img``;
const FeatureTitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${pallete.darkBlue};
  margin: 25px;
`;
const FeatureDescription = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${pallete.secundaryColor};
`;

export const FeatureItem = ({ img, alt, title, description }) => {
  return (
    <FeatureItemBox>
      <FeatureImg src={img} alt={alt} />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureItemBox>
  );
};
