import React from 'react';
import { Box } from "@mui/system";
import FourImagesDisplay from '../components/FourImagesDisplay';
import ConfiguratorBanner from '../components/ConfiguratorBanner';
import Contact from "../components/Contact";
import {
  topTitle,
  bottomTitle,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  firstImageTitle,
  secondImageTitle,
  thirdImageTitle,
  fourthImageTitle,
  firstImageDescription,
  secondImageDescription,
  thirdImageDescription,
  fourthImageDescription,
  firstImageTitleResp,
  secondImageTitleResp,
  thirdImageTitleResp,
  fourthImageTitleResp,
  firstImageDescriptionResp,
  secondImageDescriptionResp,
  thirdImageDescriptionResp,
  fourthImageDescriptionResp,
} from '../constants/renderings/fourImagesDisplay';
import {
  topTitleBanner,
  bottomTitleBanner,
  imageBanner,
  descriptionBanner,
  descriptionBannerResp
} from '../constants/renderings/Banner';
import CarouselBanner from '../components/CarouselBanner';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

export default function RendersAndModelServices() {
  const { pathname } = useLocation();
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname])

  const styles = {
		container: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			overflowX: "hidden",
		},
	};
	return (
		<Box sx={styles.container}>
      <ConfiguratorBanner
        topTitleBanner={topTitleBanner}
        bottomTitleBanner={bottomTitleBanner}
        imageBanner={imageBanner}
        descriptionBanner={descriptionBanner}
        descriptionBannerResp={descriptionBannerResp}
      />
      <FourImagesDisplay
        topTitle={topTitle}
        bottomTitle={bottomTitle}
        firstImage={firstImage}
        secondImage={secondImage}
        thirdImage={thirdImage}
        fourthImage={fourthImage}
        firstImageTitle={firstImageTitle}
        secondImageTitle={secondImageTitle}
        thirdImageTitle={thirdImageTitle}
        fourthImageTitle={fourthImageTitle}
        firstImageDescription={firstImageDescription}
        secondImageDescription={secondImageDescription}
        thirdImageDescription={thirdImageDescription}
        fourthImageDescription={fourthImageDescription}
        firstImageTitleResp={firstImageTitleResp}
        secondImageTitleResp={secondImageTitleResp}
        thirdImageTitleResp={thirdImageTitleResp}
        fourthImageTitleResp={fourthImageTitleResp}
        firstImageDescriptionResp={firstImageDescriptionResp}
        secondImageDescriptionResp={secondImageDescriptionResp}
        thirdImageDescriptionResp={thirdImageDescriptionResp}
        fourthImageDescriptionResp={fourthImageDescriptionResp}
      />
      <CarouselBanner />
      <Contact />
    </Box>
  );
}
