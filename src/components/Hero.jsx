import styled from "styled-components";
import { Header } from "./Header";
import { pallete, theme } from "../themeVariables";
import { Button } from "./UI/Button";
import mainChart from "../assets/image/main-screen.png";

const PinkBorder = styled.div`
  background-color: ${pallete.pink};
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
`;

const HeroContainer = styled.section`
  height: 100vh;
  background-color: ${pallete.darkBlue};
  clip-path: polygon(0 0, 100% 0, 100% 73%, 0 98%);
`;

const ContentContainer = styled.div`
  display: flex;
  margin: ${theme.sectionMargin};
`;

const HeroInfoBox = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
`;

const HeroTitle = styled.h1`
  color: ${pallete.white};
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 50px;
  text-align: left;
  padding: 10px;
`;

const HeroInfo = styled.p`
  padding: 10px;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: ${pallete.secundaryColor};
  text-align: left;
  margin-bottom: 30px;
`;

const ImgBox = styled.div`
  position: absolute;
  right: 0;
  top: 210px;
  z-index: 2;
`;

const CardImg = styled.img``;

export const Hero = () => {
  return (
    <>
      <PinkBorder>
        <HeroContainer>
          <Header />
          <ContentContainer>
            <HeroInfoBox>
              <HeroTitle>
                Monitor your business on real-time dashboard
              </HeroTitle>
              <HeroInfo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum nisi aliquet volutpat pellentesque volutpat est.
                Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.{" "}
              </HeroInfo>
              <Button left pink text="Try for free" />
            </HeroInfoBox>
          </ContentContainer>
        </HeroContainer>
      </PinkBorder>
      <ImgBox>
        <CardImg src={mainChart} alt="Imagens de graficos" />
      </ImgBox>
    </>
  );
};
