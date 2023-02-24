import {
  Box,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import image from "./image/Shoe-Land-1.png";
import "./navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <Box id="nav" p={{ base: "10px", md: "none" }}>
      <Box
        className="wrapper"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
          <Box
            className="logo"
            display={{ base: "center" }}
            width={{ base: "20%", md: "10%" }}
          >
        <Link to={"/"}>
            <img src={image} alt="" />
        </Link>
          </Box>

        <Box>
          <Box display={"flex"} justifyContent="space-between" mt={"20px"}>
            <Box display={"flex"} justifyContent="space-between">
              <InputGroup display={{ base: "none", md: "flex" }}>
                <Input
                  variant="outline"
                  placeholder="Find Something Famous For You"
                  width={"300px"}
                />
                <InputRightAddon children={<SearchIcon />} />
              </InputGroup>
            </Box>
            <Box display={"flex"} gap="30px">
              <AccountCircleIcon fontSize="large" />
              <FavoriteBorderIcon fontSize="large" />
              <Link to="/cart"><ShoppingCartIcon fontSize="large" /></Link>
            </Box>
          </Box>

          <Box class="navbar" display={{ base: "none", md: "block" }}>
            <div class="dropdown">
              <button class="dropbtn">
                New & Now
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <Box class="header">
                  <Text as="b">Spotlight On</Text>
                  <Text>New Arrivals</Text>
                  <Text>Eco-Conscious Styles</Text>
                  <Text as="b">Shop by Occasion</Text>
                  <Text>Weddings & Events</Text>
                  <Text>Beach Getaway</Text>
                </Box>
                <div
                  class="row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                  }}
                >
                  <div class="column">
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/new-and-now/2023/spring/wk2_020823_site_ads_mega_nav_spg23_getaway.jpg"
                      alt=""
                      width={"200px"}
                    />
                    <Text>GETAWAY SHOP</Text>
                  </div>
                  <div class="column">
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/new-and-now/2023/spring/mega_nav_spg23_wsneakershop.jpg"
                      alt=""
                      width={"200px"}
                    />
                    <Text>SNEAKER SHOP</Text>
                  </div>
                  <div class="column">
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/new-and-now/2023/spring/wk2_020823_site_ads_mega_nav_spg23_activeshop.jpg"
                      alt=""
                      width={"200px"}
                    />
                    <Text>ACTIVE SHOP</Text>
                  </div>
                  <div class="column">
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/new-and-now/2023/spring/wk2_020823_site_ads_mega_nav_spg23_eventedit.jpg"
                      alt=""
                      width={"200px"}
                    />
                    <Text>EVENT EDIT</Text>
                  </div>
                </div>
              </div>
            </div>

            {/* ////////////////////////// */}

            <div class="dropdown">
              <button class="dropbtn">
                <Link to={"/womens"}>Women</Link>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <div
                  class="row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                  }}
                >
                  <div class="column">
                    <Box class="header">
                      <Text as="b">Women's Shoes</Text>
                      <Text>View All</Text>
                      <Text>Sneakers & Athletics</Text>
                      <Text>Sandals</Text>
                      <Text>Heels</Text>
                      <Text>Loafers & Oxfords</Text>
                      <Text>Flats</Text>
                      <Text>Clogs & Mules</Text>
                      <Text>Boots</Text>
                      <Text>Boat Shoes</Text>
                      <Text>Slippers</Text>
                      <Text>Work & Safety</Text>
                    </Box>
                  </div>
                  <div class="column">
                    <Text as="b">Apparel</Text>
                    <Text>Tops</Text>
                    <Text>Bottoms</Text>
                    <Text as="b">Other Ways To Shop</Text>
                    <Text>Sale</Text>
                    <Text>New Arrivals</Text>
                    <Text>Back in Stock</Text>
                    <Text>Eco-Conscious</Text>
                    <Text as="b">Spotlight On</Text>
                    <Text>Sneaker Trend Shop</Text>
                    <Text>Active & Outdoor Shop</Text>
                    <Text>Weddings & Events</Text>
                    <Text>Beach Getaway Styles</Text>
                  </div>
                  <div class="column">
                    <Text as="b">Shop by Size</Text>
                    <div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Text fontSize={"30px"}>4.5</Text>
                        <Text fontSize={"30px"}>5.0</Text>
                        <Text fontSize={"30px"}>5.5</Text>
                        <Text fontSize={"30px"}>6.0</Text>
                      </div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Text fontSize={"30px"}>6.5</Text>
                        <Text fontSize={"30px"}>7.0</Text>
                        <Text fontSize={"30px"}>7.5</Text>
                        <Text fontSize={"30px"}>8.0</Text>
                      </div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Text fontSize={"30px"}>8.5</Text>
                        <Text fontSize={"30px"}>9.0</Text>
                        <Text fontSize={"30px"}>9.5</Text>
                        <Text fontSize={"30px"}>8.0</Text>
                      </div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Text fontSize={"30px"}>4.5</Text>
                        <Text fontSize={"30px"}>7.0</Text>
                        <Text fontSize={"30px"}>9.5</Text>
                        <Text fontSize={"30px"}>2.0</Text>
                      </div>
                    </div>
                    <Text>Wide Width</Text>
                    <Text>Narrow Width</Text>
                    <Text>Wide Calf Boots</Text>
                  </div>

                  <div class="column">
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/womens-tab/2023/spring/wk2_020823_site_ads_mega_nav_spg23_heydude.jpg"
                      alt=""
                    />
                    <Text>HEYDUDE SHOES</Text>
                  </div>
                </div>
              </div>
            </div>

            {/* //////////////////////////////////// */}

            <div class="dropdown">
              <button class="dropbtn">
                <Link to={"/mens"}>Men</Link>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <div
                  class="row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                  }}
                >
                  <div class="column">
                    <Box class="header">
                      <Text as="b">Women's Shoes</Text>
                      <Text>View All</Text>
                      <Text>Sneakers & Athletics</Text>
                      <Text>Sandals</Text>
                      <Text>Heels</Text>
                      <Text>Loafers & Oxfords</Text>
                      <Text>Flats</Text>
                      <Text>Clogs & Mules</Text>
                      <Text>Boots</Text>
                      <Text>Boat Shoes</Text>
                      <Text>Slippers</Text>
                      <Text>Work & Safety</Text>
                    </Box>
                  </div>
                  <div class="column">
                    <Text as="b">Apparel</Text>
                    <Text>Tops</Text>
                    <Text>Bottoms</Text>
                    <Text as="b">Other Ways To Shop</Text>
                    <Text>Sale</Text>
                    <Text>New Arrivals</Text>
                    <Text>Back in Stock</Text>
                    <Text>Eco-Conscious</Text>
                    <Text as="b">Spotlight On</Text>
                    <Text>Sneaker Trend Shop</Text>
                    <Text>Active & Outdoor Shop</Text>
                    <Text>Weddings & Events</Text>
                    <Text>Beach Getaway Styles</Text>
                  </div>
                  <div class="column">
                    <Text as="b">Shop by Size</Text>
                    <div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Text fontSize={"30px"}>4.5</Text>
                        <Text fontSize={"30px"}>5.0</Text>
                        <Text fontSize={"30px"}>5.5</Text>
                        <Text fontSize={"30px"}>6.0</Text>
                      </div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Text fontSize={"30px"}>6.5</Text>
                        <Text fontSize={"30px"}>7.0</Text>
                        <Text fontSize={"30px"}>7.5</Text>
                        <Text fontSize={"30px"}>8.0</Text>
                      </div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Text fontSize={"30px"}>8.5</Text>
                        <Text fontSize={"30px"}>9.0</Text>
                        <Text fontSize={"30px"}>9.5</Text>
                        <Text fontSize={"30px"}>8.0</Text>
                      </div>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <Text fontSize={"30px"}>4.5</Text>
                        <Text fontSize={"30px"}>7.0</Text>
                        <Text fontSize={"30px"}>9.5</Text>
                        <Text fontSize={"30px"}>2.0</Text>
                      </div>
                    </div>
                    <Text>Wide Width</Text>
                    <Text>Narrow Width</Text>
                    <Text>Wide Calf Boots</Text>
                  </div>

                  <div class="column">
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/mens-tab/2023/spring/wk2_020823_site_ads_mega_nav_spg23_mens_nike.jpg"
                      alt=""
                    />
                    <Text>SHOP MEN'S NIKE</Text>
                  </div>
                </div>
              </div>
            </div>

            {/* //////////////////////////////////// */}

            <div class="dropdown">
              <button class="dropbtn">
                <Link to={"/kids"}> Kids</Link>
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <div
                  class="row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                  }}
                >
                  <div class="column">
                    <Box class="header">
                      <Text as="b">Shop by Size</Text>
                      <Text>Baby (0-3.5)</Text>
                      <Text>Toddler (4-10)</Text>
                      <Text>Little Kid (10.5-3)</Text>
                      <Text>Big Kid (3.5-7)</Text>
                      <Text></Text>
                      <Text>View All Kids' Shoes</Text>
                    </Box>
                  </div>
                  <div class="column">
                    <Text as="b">Girls' Shoes</Text>
                    <Text>View All</Text>
                    <Text>Sneakers & Athletics</Text>
                    <Text>Sandals</Text>
                    <Text>Dress Shoes</Text>
                    <Text>Boat Shoes</Text>
                    <Text>Slippers</Text>
                  </div>
                  <div class="column">
                    <Text as="b">Boys' Shoes</Text>
                    <Text>View All</Text>
                    <Text>Sneakers & Athletics</Text>
                    <Text>Sandals</Text>
                    <Text>Dress Shoes</Text>
                    <Text>Boat Shoes</Text>
                    <Text>Slippers</Text>
                  </div>
                  <div class="column">
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/kids-tab/2023/spring/wk2_020823_site_ads_mega_nav_spg23_kids_skechers.jpg"
                      alt=""
                    />
                    <Text>SHOP KIDS' SKECHERS</Text>
                  </div>
                </div>
              </div>
            </div>

            {/* ///////////////////////////////////////// */}

            <div class="dropdown">
              <button class="dropbtn">
                Brands
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <div class="row">
                  <div style={{ display: "flex" }}>
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/nike.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/vans.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/adidas_update.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/converse.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/skechers.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/crocs.svg"
                      alt=""
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/birkenstock.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/newbalance.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/asics.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/puma.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/crocs.svg"
                      alt=""
                    />
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/brand-logos/drscholls.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ////////////////////////////////brands//////////////// */}

            <div class="dropdown">
              <button class="dropbtn">
                Accessories
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <div
                  class="row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                  }}
                >
                  <div class="column">
                    <Box class="header">
                      <Text as="b">Accessories</Text>
                      <Text>View All</Text>
                      <Text>Socks</Text>
                      <Text>Bags</Text>
                      <Text>Lanyards</Text>
                      <Text>Shoe Charms</Text>
                      <Text>Water Bottles</Text>
                      <Text>Hair Accessories</Text>
                      <Text>Hats & Gloves</Text>
                      <Text>Insoles & Inserts</Text>
                      <Text>Slippers</Text>
                    </Box>
                  </div>
                  <div class="column">
                    <Text as="b">Bags</Text>
                    <Text>View All</Text>
                    <Text>Backpacks</Text>
                    <Text>Luch Boxes & Bags</Text>
                    <Text>Drawstring Bags</Text>
                    <Text>Totes & Duffel Bags</Text>
                    <Text>Mini Bags</Text>
                    <Text>Fanny Packs</Text>
                  </div>
                  <div class="column">
                    <Text as="b">Slippers</Text>
                    <Text>All Slippers</Text>
                    <Text>Women</Text>
                    <Text>Men</Text>
                    <Text>Kids</Text>
                  </div>
                  <div class="column">
                    <Text as="b">Other Ways to Shop</Text>
                    <Text>Sale</Text>
                    <Text>New Arrivals</Text>
                    <Text>Eco-Conscious</Text>
                    <Text>Kids</Text>
                  </div>
                </div>
              </div>
            </div>

            {/* //////////////////sale/////////////////////////// */}

            <div class="dropdown">
              <button class="dropbtn">
                Sale
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <div
                  class="row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                  }}
                >
                  <div class="column">
                    <Box class="header">
                      <Text as="b">Sale</Text>
                      <Text>View All</Text>
                      <Text>Women</Text>
                      <Text>Men</Text>
                      <Text>Girls</Text>
                      <Text>Boys</Text>
                      <Text>Clearance</Text>
                    </Box>
                  </div>
                  <div class="column">
                    <Text as="b">Shop by Brand</Text>
                    <Text>Nike</Text>
                    <Text>adidas</Text>
                    <Text>Converse</Text>
                    <Text>Vans</Text>
                    <Text>Birkenstock</Text>
                    <Text>Crocs</Text>
                    <Text>Timberland</Text>
                    <Text>Dr. Martens</Text>
                  </div>
                  <div class="column">
                    <Text as="b">Shop by Price Point</Text>
                    <Text>Under $75</Text>
                    <Text>Under $50</Text>
                    <Text>Under $30</Text>
                  </div>
                  <div class="column">
                    <img
                      src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/mega-menu/sale/2022/clearance-evergreen/090622_meganav_clearance.jpg"
                      alt=""
                    />
                    <Text>SHOP CLEARANCE</Text>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
      <hr />
    </Box>
  );
};

export default Navbar;
