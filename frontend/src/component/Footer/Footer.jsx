import React from "react";
import "./Footer.css";
import { Box, Text, Button, Input, Image} from "@chakra-ui/react"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Box className="footer_page">

            <Box className="email_footer" >
                <Box>
                    <Text>Sign up for special offers & trend updates</Text>
                </Box>
                <Box className="inputButton" >
                    <Input variant='outline' placeholder='Email' style={{ paddingRight: "150px" }} />
                    <Button width='50%' marginLeft='10px' colorScheme='blue'><Link to={"/signup"}>SIGN UP</Link></Button>
                </Box>
            </Box>

            <Box className="iconImage">
                <Image src='https://user-images.githubusercontent.com/104529601/220588119-fe561362-0836-45c9-beed-0f9b6edf32df.png' alt='lastImage' />
            </Box>

            <Box className="footer_sectin" >
                <Box className="footer_icon" >
                    <Text style={{fontWeight: "bold", marginTop: "13px", marginRight: "50px" }} >CONNECT WITH US</Text>
                    <Image src="https://user-images.githubusercontent.com/104529601/220595704-32423a7a-d4be-4060-9b95-bdff1d520a8a.png" alt="icon" />
                </Box>


                <Box className="footerSection" >

                    <Box className="foot">
                        <Box className="footer" >
                            <Text as='b'>STORES</Text>
                            <ul style={{ marginTop: "10px" }} >
                                <li><Link href="#" >Famously Fast Pickup</Link></li>
                                <li><Link href="#" >Find A Store</Link></li>
                            </ul>
                        </Box>
                        <Box className="footer">
                            <Text as='b' >FAMOUSLY YOU</Text>
                            <ul style={{ marginTop: "10px" }} >
                                <li><Link to={"/signup"} >Sign In / Join Now</Link></li>
                                <li><Link href="#" >Learn More</Link></li>
                                <li><Link href="#" >Credit Card</Link></li>
                                <li><Link href="#" >Mobile App</Link></li>
                                <li><Link href="#" >Rewards Terms</Link></li>
                            </ul>
                        </Box>
                        <Box className="footer">
                            <Text as='b' >HELP</Text>
                            <ul style={{ marginTop: "10px" }} >
                                <li><Link href="#" >FAQ / Contact Us</Link></li>
                                <li><Link href="#" >Shipping & Returns</Link></li>
                                <li><Link href="#" >Exclusions</Link></li>
                                <li><Link href="#" >Track My Order</Link></li>
                                <li><Link href="#" >Gift Cards</Link></li>
                                <li><Link href="#" >Shoe Size Charts</Link></li>
                                <li><Link href="#" >Zip</Link></li>
                                <li><Link href="#" >Unsubscribe from Email</Link></li>
                                <li><Link href="#" >Accessibility</Link></li>
                                <li><Link href="#" >Do Not Sell or Share My Personal</Link></li>
                                <li><Link href="#" >Information</Link></li>
                            </ul>
                        </Box>
                        <Box className="footer">
                            <Text as='b' >ABOUT US</Text>
                            <ul style={{ marginTop: "10px" }} >
                                <li><Link href="#" >About Us</Link></li>
                                <li><Link href="#" >Careers</Link></li>
                                <li><Link href="#" >Credit Card</Link></li>
                                <li><Link href="#" >Ticket to Dream</Link></li>
                                <li><Link href="#" >Site Map</Link></li>
                                <li><Link href="#" >Eco-Conscious</Link></li>
                            </ul>
                        </Box>
                    </Box>


                    <Box style={{ cursor: " pointer" }} >
                        <Image src="https://user-images.githubusercontent.com/104529601/220604462-e3008c51-f882-4e16-95f7-a15582123043.png" alt="" />
                    </Box>
                </Box>

                <Box className="footerText" >
                    <Text as='sub' >Yes, I would like to receive emails with trends, updates & special offers a few times a week. By providing my information, I am certifying that I am at least 18 years old. Note: we collect and use the information you provide in accordance with our Privacy Policy.</Text>
                </Box>

            </Box>


        </Box>
    )
}

export default Footer;