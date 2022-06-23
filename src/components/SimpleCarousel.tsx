import { Carousel } from "react-responsive-carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SimpleCarouselProps {
  carouselItemData: {
    url: string;
    description: string;
  }[];
}

export default function SimpleCarousel(props: SimpleCarouselProps) {
  const carouselElements = props.carouselItemData.map((item, idx) => {
    return (
      <div key={`${item.url}_${idx}`}>
        <img src={item.url} />
        <p className="legend">{item.description}</p>
      </div>
    );
  });

  return <Carousel>{carouselElements}</Carousel>;
}
