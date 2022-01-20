import styled from "styled-components";
import { pallete, theme } from "../themeVariables";
import { FeatureItem } from "./FeatureItem";
import { FeatureInfo } from "./FeatureInfo";

import monitoringIcon from "../assets/image/monitoring_icon.svg";
import widgetSystemIcon from "../assets/image/widget_system_icon.svg";
import best_performance_icon from "../assets/image/best_performance_icon.svg";

import firstFeature from "../assets/image/first_feature.png";
import secondFeature from "../assets/image/second_feature.png";
import thirdFeature from "../assets/image/third_feature.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturesContainer = styled.section`
  margin: 0 ${theme.sectionMargin};
`;
const FeaturesTitle = styled.h2`
  font-size: 40px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: ${pallete.darkBlue};
  margin: 30px 0;
`;
const FeaturesParagraph = styled.p`
  font-family: Roboto, sans-serif;
  color: ${pallete.secundaryColor};
  font-size: 18px;
`;
const FeaturesItensBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
`;

export const FeaturesSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <FeaturesContainer>
      <FeaturesTitle>Main Features</FeaturesTitle>
      <FeaturesParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        doloremque, iure, cum commodi non facilis adipisci nemo culpa ipsum
        voluptas ducimus quibusdam perspiciatis, perferendis ipsam aperiam
        repellendus deleniti sed officiis eaque! Fugit facilis minima nesciunt
        consectetur optio. Quo itaque, omnis veritatis fugiat at quas blanditiis
        deserunt delectus culpa fuga hic minus voluptate voluptas voluptates
        quibusdam quod odio ad aperiam accusantium est repellendus voluptatem
        perspiciatis? Ab facere quam perspiciatis velit molestias!
      </FeaturesParagraph>
      <FeaturesItensBox>
        <FeatureItem
          img={monitoringIcon}
          title="Monitoring 24/7"
          description="Lorem ipsum dolor sit amet, consectetur adipis
cing elit. Elementum nisi aliquet volutpat."
        />
        <FeatureItem
          img={widgetSystemIcon}
          title="Widget System"
          description="Sapien in etiam vitae nibh nunc mattis imperdiet
sed nullam. Vitae et, tortor pulvinar risus pulvinar."
        />
        <FeatureItem
          img={best_performance_icon}
          title="Best Performance"
          description="Lorem ipsum dolor sit amet, consectetur adipis
cing elit. Elementum nisi aliquet volutpat."
        />
      </FeaturesItensBox>
      <FeatureInfo
        dataAos="fade-right"
        title="Automated Reports &amp; Widget Alerts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
        img={firstFeature}
      />
      <FeatureInfo
        reverse
        dataAos="fade-left"
        title="Automated Reports &amp; Widget Alerts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
        img={secondFeature}
      />
      <FeatureInfo
        dataAos="fade-right"
        title="Automated Reports &amp; Widget Alerts"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
        img={thirdFeature}
      />
    </FeaturesContainer>
  );
};
