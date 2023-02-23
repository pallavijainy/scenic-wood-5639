import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselLast.css"
import { Box, Heading, Image } from "@chakra-ui/react"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,  display: "block", marginRight: "60px", background: "transparent"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginLeft:"60px" ,  background: "black", }}
            onClick={onClick}
        />
    );
}


export default class CarouselTop extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            // speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            // prevArrow: <SamplePrevArrow />,
            // nextArrow: <SampleNextArrow />,
          
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };



        return (
            <Box className="carouselLast" >
                <Heading size='lg' marginBottom='20px' >We Love To See Your Style</Heading>
                <Slider {...settings}>
                    <Box className="carousel_last" id="ujju" >
                        <Image src="https://edge.curalate.com/v1/img/e9Xq2OhRqYInf_6BpsbXjpFNQAcYHv3wFzlw86cPudA=/sc/300x300?spatialTags=0.6154106855392456:0.9486562609672546&typ=webp" alt="pic" width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/aijVEDqZPuesWEtFimb0mphdU0c7Rrn1YeUidgMw4wA=/sc/600x600?spatialTags=0.2536981403827667:0.8374757170677185&typ=webp" alt="pic" width="95%"/>
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/V-1Y4UrHvdw5SuZrhgygHdvA7F6vOk0kOSzaDjzjgH0=/sc/600x600?spatialTags=0.25533631443977356:0.8637176156044006&typ=webp" alt="pic" width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/4xPOYBDrprT_GjGA9gkbNexBrM6m55bHRigMJv4uIcY=/sc/600x600?spatialTags=0.5242109894752502:0.8848299980163574&typ=webp" alt="pic" width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/V0ueiF6qzP_v7ZtRt_A4Tj7NSKzeIFCGM_49tyObIhM=/sc/600x600?spatialTags=0.4161788523197174:0.558647632598877&typ=webp" alt="pic"  width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/a9xprBLRNfBfGuhCwAk7bnkEDcrm746HgsL5z2ED2VU=/sc/600x600?spatialTags=0.5011678338050842:0.8783594369888306&typ=webp" alt="pic"  width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/idTFWzSOKuS0SJEMovr4UWxRb8J8vrAy5Y93tq3RTvM=/sc/600x600?typ=webp" alt="pic"  width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/Nc0sDfzn4GuUprbqAKBl3JaLnkYdm5W9v2i987DXsk8=/sc/600x600?spatialTags=0.6631720662117004:0.7836650609970093&typ=webp" alt="pic"  width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/GojtJyaInKAL3FobaQJTg5MF678MsKuNtVT100Z_0Qg=/sc/600x600?spatialTags=0.45641303062438965:0.9007125496864319&typ=webp" alt="pic"  width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/TRk_vj-Vw6wxJgV0T8oXvs9_lhm7s2-77iFzChsIcV0=/sc/600x600?spatialTags=0.5076647400856018:0.7356035709381104&typ=webp" alt="pic"  width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/KchphUDOXWKPhYbSBcS4drBnog3kaLaonb8saupDyTw=/sc/600x600?spatialTags=0.5296133160591125:0.7767232656478882&typ=webp" alt="pic"  width="95%" />
                    </Box>
                    <Box className="carousel_last" >
                        <Image src="https://edge.curalate.com/v1/img/D2j_JDw1xknF6AVnTd5oocrI-3-1wATrj0eo_jY6h84=/sc/600x600?spatialTags=0.22992286086082458:0.8860145807266235&typ=webp" alt="pic"  width="95%" />
                    </Box>
                </Slider>
            </Box>
        );
    }
}