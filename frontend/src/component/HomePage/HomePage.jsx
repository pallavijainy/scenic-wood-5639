import React from "react";
import "./HomePage.css";
import { Box, Image, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CarouselTop from "./CarouselTop";
import CarouselLast from "./CarouselLast";
import Footer from "../Footer/Footer";

const HomePage = () => {
  let token = JSON.parse(sessionStorage.getItem("token"));
  return (
    <>
      <Box className="homePage">
        <Box className="home_text" display={{base:"none",md:"flex"}}>
          <Box className="home_text_img" >
            <Image
              src="https://user-images.githubusercontent.com/104529601/220612628-f256d676-adcc-4e17-8ff1-dcbc47de3ad8.png"
              alt="logo"
            />
            <Text as="u" style={{ marginTop: "10px" }} >
              <Link to={"/#"}>Find a Store</Link>
            </Text>
          </Box>
          <Box style={{ textAlignLast: "left" }} display={{base:"none" , md:"block"}}>
            <Text>Free Shipping for Rewards or Orders $75+</Text>
            <Text as="u">
              {!token && <Link to={"/login"}>Sign In / Join Now</Link>}
            </Text>
          </Box>
        </Box>

        {/* TopCarousel */}
        <CarouselTop />

        {/* Video */}
        <Box className="video_Home">
          <video
            className="video_section"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_left.mp"
            loop="loop"
            muted="muted"
            playsinline=""
            autoplay="autoplay"
          ></video>

          <Image
            className="video_section"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_right.jpg"
            alt="img"
          />
        </Box>

        <Stack spacing={5}>
          <Heading as="h3" size="lg">
            Famous for Converse
          </Heading>
          <Text>
            Elevate your sneaker style with trendy and iconic favorites.
          </Text>
          <Text as="u">
            <Link style={{ fontSize: "large", cursor: "pointer" }} to={"/#"}>
              SHOP CONVERSE
            </Link>
          </Text>
        </Stack>

        {/* Offer */}
        <Box className="off_Home">
          <Box className="off_Home_img">
            <Image
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/promo/promo_up_to_30_off_select_nike_new.png"
              alt="off"
              width="100%"
            />
          </Box>
          <Box className="off_Home_link">
            <Box className="off_Home_li">
              <Text as="u">
                <Link to={"/#"}>SHOP THE SALE</Link>
              </Text>
            </Box>
            <Box className="off_Home_li">
              <Text as="u">
                <Link to={"/#"}>SHOP ALL NIKE</Link>
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Shoes */}
        <Box className="shoes_Home">
          <Heading as="h2" size="lg">
            Shop by Category
          </Heading>
          <Box className="shoes_ho">
            <Box className="shoes_ho_hover">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/categories/wk4_022123_categorybanner_1_newarrivals.jpg"
                alt="shoes"
              />
              <Text fontWeight="bold">Arrivals</Text>
            </Box>
            <Box className="shoes_ho_hover">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/categories/wk51_011523_categorybanner_2_running.jpg"
                alt="shoes"
              />
              <Text fontWeight="bold">Running Shoes</Text>
            </Box>
            <Box className="shoes_ho_hover">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/categories/wk4_022123_categorybanner_3_blockheel.jpg"
                alt="shoes"
              />
              <Text fontWeight="bold">Block Heel Sandals</Text>
            </Box>
            <Box className="shoes_ho_hover">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/categories/wk51_011523_categorybanner_4_footbeds.jpg"
                alt="shoes"
              />
              <Text fontWeight="bold">Footbed Sandals</Text>
            </Box>
          </Box>
        </Box>

        {/* 70% off */}
        <Box className="offer_home_l">
          <Box className="offer_home">
            <Box className="offer_hom">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/promo/70_banner_type_2x.png"
                alt="70% Off"
              />
            </Box>
            <Box className="offer_hom">
              <Text as="u">
                <Link to={"/#"} style={{ fontSize: "large" }}>
                  SHOES NOW
                </Link>
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Miss Deals */}
        <Box className="miss_deals_home">
          <Heading as="h3" size="lg">
            Can't Miss Deals
          </Heading>
          <Box className="miss_deals">
            <Box>
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/price-bubbles/pricebubble_4.jpg?h=148&iar=0&w=150&hash=0D31954CDD61FD512D6B402C90F7E1A7"
                alt="MissDeals"
              />
              <Box className="miss_deals_text">
                <Text>
                  Up to 40% Off
                  <br />
                  Select Kids'
                  <br />
                  Styles
                </Text>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/price-bubbles/pricebubble_3.jpg?h=148&iar=0&w=150&hash=140B58C81D1D96E3E0A51DEC697C7B2A"
                alt="MissDeals"
              />
              <Box className="miss_deals_text">
                <Text>
                  Up to 30% Off
                  <br />
                  Select Athletics
                </Text>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/price-bubbles/pricebubble_1.jpg?h=148&iar=0&w=150&hash=04C3CD4854DC7C0CEFE1DF07FE6F1679"
                alt="MissDeals"
              />
              <Box className="miss_deals_text">
                <Text>
                  Up to 25% Off
                  <br />
                  Select Crocs
                </Text>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/price-bubbles/pricebubble_2.jpg?h=148&iar=0&w=150&hash=48B1236B967EDC165670B2EF1BE2228A"
                alt="MissDeals"
              />
              <Box className="miss_deals_text">
                <Text>
                  Sandals
                  <br />
                  Under
                  <br />
                  $40
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* FamousFootWear */}
        <Box className="famous_home">
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk2_020923_hp_experience_1_story_left_bhm.jpg"
            alt="pic"
            width="50%"
          />
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
            alt="videoPic"
            width="50%"
          />
        </Box>
        <Text>
          Follow us @famousfootwear to see their creative twists on our shoes
          throughout the month.
        </Text>

        <Box className="style_home">
          <Box className="style_home_section">
            <Image
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/2-stories/wk4_022123_hp_story_2_a_distorted.jpg"
              alt=""
            />
            <br />
            <Heading size="md">Style of the Week</Heading>
            <br />
            <Text>
              Trending neutrals + cool retro vibes = the perfect sneaker combo.
            </Text>
            <br />
            <Text as="u">
              <Link to={"/#"} style={{ fontWeight: "bold" }}>
                SHOP NIKE WAFFLE DEBUT
              </Link>
            </Text>
          </Box>
          <Box className="style_home_section" style={{ marginLeft: "20px" }}>
            <Image
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/2-stories/wk4_022123_hp_story_2_b_distortedcrocs.gif"
              alt=""
            />
            <br />
            <Heading size="md">Turn on the Brights</Heading>
            <br />
            <Text>Make every step more fun with bold colors from Crocs.</Text>
            <br />
            <Text as="u">
              <Link to={"/#"} style={{ fontWeight: "bold" }}>
                SHOP CROCS
              </Link>
            </Text>
          </Box>
        </Box>

        <Box className="footer_img">
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk3_021223_hp_left_loafers.jpg"
            alt="pic"
            width="50%"
          />

          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk3_021223_hp_right_loafers.jpg"
            alt="pic"
            width="50%"
          />
        </Box>
        <br />
        <Text>
          The perfect transition shoe from the early spring chill to late spring
          sunshine.
        </Text>
        <br />
        <Text as="u">
          <Link to={"/#"} style={{ fontWeight: "bold" }}>
            SHOP SPRING LOAFERS
          </Link>
        </Text>

        {/* BestSellers */}

        {/* Gotta Brands */}
        <Box className="gotta_brands">
          <Heading size="md" fontSize="2xl">
            Gotta-Have Brands
          </Heading>
          <Box className="gotta_brands_logo">
            <Box className="gotta_brands_box" style={{ marginLeft: "0px" }}>
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/tests/hp-bts-redesign/brands/hp_logo_nike.png"
                alt="logo"
              />
            </Box>
            <Box className="gotta_brands_box">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/tests/hp-bts-redesign/brands/hp_logo_converse.png"
                alt="logo"
              />
            </Box>
            <Box className="gotta_brands_box">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/logos/hp_logo_vans.jpg"
                alt="logo"
              />
            </Box>
            <Box className="gotta_brands_box">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/fall/logos/hp_logo_heydude.png"
                alt="logo"
              />
            </Box>
            <Box className="gotta_brands_box">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/fall/logos/hp_logo_birkenstock.png"
                alt="logo"
              />
            </Box>
            <Box className="gotta_brands_box">
              <Image
                src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/logos/hp_logo_crocs.jpg"
                alt="logo"
              />
            </Box>
          </Box>
        </Box>

        {/* New Arrivals */}

        {/* Red Banner */}
        <Box className="red_banner">
          <Box className="red_banner_pic">
            <Image
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/back-to-school/rewards-hp-banner/rewards_logo.png"
              alt="redBanner"
              width="50%"
              marginLeft="40px"
            />
          </Box>
          <Box className="red_banner_pic">
            <Heading size="md" color="#fff" marginRight="140px">
              REWARDS YOU'LL LOVE
            </Heading>
            <br />
            <br />
            <Image
              src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/back-to-school/rewards-hp-banner/rewards_benefits.png"
              alt="redBanner"
            />
          </Box>
          <Box className="red_banner_pic">
            <Button id="butt">JOIN NOW</Button>
            <Text as="u" marginLeft="20px" color="#fff">
              <Link to={"/signup"}>SIGN IN</Link>
            </Text>
          </Box>
        </Box>

        {/* CarouselLast... */}
        <CarouselLast />

        <Text as="u">
          <Heading size="md" marginBottom="50px">
            <Link to={"/#"}>GET MORE FRESH INSPO</Link>
          </Heading>
        </Text>

        <hr />

        {/* Text */}
        <Box className="text_home">
          <Text fontSize="3xl">Shop for:</Text>
          <Box className="text_ho">
            <Text as="u" fontWeight="bold">
              <Link to={"/#"}>WOMEN</Link>
            </Text>
            <Text as="u" marginLeft="10px" fontWeight="bold">
              <Link to={"/#"}>MEN</Link>
            </Text>
            <Text as="u" marginLeft="10px" fontWeight="bold">
              <Link to={"/#"}>KIDS</Link>
            </Text>
            <Text as="u" marginLeft="10px" fontWeight="bold">
              <Link to={"/#"}>SALE</Link>
            </Text>
          </Box>
          <Text fontSize="4xl" marginTop="70px">
            Find Your Next Pair of Shoes at Famous Footwear
          </Text>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
