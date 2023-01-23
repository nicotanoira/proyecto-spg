import React from 'react';
import FourImagesDisplay from '../components/FourImagesDisplay';
import ConfiguratorBanner from '../components/ConfiguratorBanner';
import Contact from "../components/Contact";
import { Box } from "@mui/system";
import {
  topTitleBanner,
  bottomTitleBanner,
  imageBanner,
  descriptionBanner,
} from '../constants/services3D/Banner';
import {
  topTitle,
  bottomTitle,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  firstImageTitle,
  firstImageTitleResp,
  secondImageTitle,
  secondImageTitleResp,
  thirdImageTitle,
  thirdImageTitleResp,
  fourthImageTitle,
  fourthImageTitleResp,
  firstImageDescription,
  secondImageDescription,
  thirdImageDescription,
  fourthImageDescription,
  firstImageDescriptionResp,
  secondImageDescriptionResp,
  thirdImageDescriptionResp,
  fourthImageDescriptionResp,
} from '../constants/services3D/constants';
import VideoBanner from '../components/VideoBanner';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

export default function Services3D() {
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
        firstImageTitleResp={firstImageTitleResp}
        secondImageTitleResp={secondImageTitleResp}
        thirdImageTitleResp={thirdImageTitleResp}
        fourthImageTitleResp={fourthImageTitleResp}
        firstImageDescription={firstImageDescription}
        secondImageDescription={secondImageDescription}
        thirdImageDescription={thirdImageDescription}
        fourthImageDescription={fourthImageDescription}
        firstImageDescriptionResp={firstImageDescriptionResp}
        secondImageDescriptionResp={secondImageDescriptionResp}
        thirdImageDescriptionResp={thirdImageDescriptionResp}
        fourthImageDescriptionResp={fourthImageDescriptionResp}
      />
      <VideoBanner />
      <Contact />
    </Box>
  );
}
