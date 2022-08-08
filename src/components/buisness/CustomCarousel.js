import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../styles/CustomCarousel.css'

export default function CustomCarousel({nbItems, children}) {
    const {L, M, S, XS} = nbItems;

    if (!children) {
        return <></>
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: L || 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: M || 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: S || 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: XS || 1
        }
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
        >
            {children}
        </Carousel>
    )

};
