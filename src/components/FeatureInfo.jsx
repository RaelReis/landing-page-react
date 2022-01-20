import styled, { keyframes } from "styled-components";
import { pallete } from "../themeVariables";

export const FeatureInfo = ({ title, description, img, alt, reverse, dataAos }) => {


  const FeatureInfoContainer = styled.div`
    display: flex;
    flex-direction: ${reverse ? "row-reverse" : "row"};
    align-items: center;
    justify-content: space-between;
  `;
  const InfoBox = styled.div`
    max-width: 500px;
  `;
  const InfoTitle = styled.h3`
    text-align: left;
    font-family: Roboto, sans-serif;
    font-size: 40px;
    color: ${pallete.darkBlue};
    margin: 30px 0;
  `;
  const InfoDescription = styled.p`
    text-align: left;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: ${pallete.secundaryColor};
  `;
  const FeatureImage = styled.img``;

  return (
    <FeatureInfoContainer data-aos={dataAos}>
      <InfoBox>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>{description}</InfoDescription>
      </InfoBox>
      <FeatureImage src={img} alt={alt} />
    </FeatureInfoContainer>
  );
};
