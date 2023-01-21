import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function DemoCarousel ({ blockWidth, filename, centerMode, axis, width, height }) {
    return (
        <Carousel width={blockWidth} autoPlay axis={axis} infiniteLoop stopOnHover showThumbs={false} transitionTime={1000} useKeyboardArrows centerMode={centerMode}>
            <div>
                <Image src={`/images/${filename}.jpg`} width={width} height={height} style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
                <Image src={`/images/${filename}.jpg`} width={width} height={height} style={{ width: "100%", height: "100%" }} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <Image src={`/images/${filename}.jpg`} width={width} height={height} style={{ width: "100%", height: "100%" }} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}