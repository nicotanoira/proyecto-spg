import React from 'react';
import FourImagesDisplay from '../components/FourImagesDisplay';
import ConfiguratorBanner from '../components/ConfiguratorBanner';
import Contact from "../components/Contact";
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
  secondImageTitle,
  thirdImageTitle,
  fourthImageTitle,
  firstImageDescription,
  secondImageDescription,
  thirdImageDescription,
  fourthImageDescription,
} from '../constants/services3D/constants';
import VideoBanner from '../components/VideoBanner';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

export default function Services3D() {
  const { pathname } = useLocation();
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname])

  return (
    <div>
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
        firstImageDescription={firstImageDescription}
        secondImageDescription={secondImageDescription}
        thirdImageDescription={thirdImageDescription}
        fourthImageDescription={fourthImageDescription}
      />
      <VideoBanner />
      <Contact />
    </div>
  );
}
