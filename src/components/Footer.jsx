import React from "react";
import { Box, Typography, Grid, Link, Divider } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#9E9E9E", color: "white", py: 4, px: 2 }}>
            <Grid container spacing={3} justifyContent="center">
                {/* Left Section - Logo & Contact */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" fontWeight="bold">
                        <img src="https://s3-alpha-sig.figma.com/img/cc5a/dff5/fb4721b74e20a52be04318cfeffac6d5?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AYjmbUnhL1DW0BmVo-rnYJPlVS0P06xO6mAzh67AUpstMrjy6IX650XyDIFu1lqZiwLbZWv8NRgZuwuDbtgXEj6PSg-chPFZJG-nmAAOZaQX4xQfEDHM7GI2x0QtMq7bUUx19WdAMzisCMMUn7ONPwoL1O8L45h0-BfHjvxtob~9yzGGOUaExOB07DrOAnwyI3aHfqXxIMoynPPK1NAZH2qEG9-IC~~EQ3j1mXIRPnbVKtByLm4k~Tt2nOh7QDWY9N1Z~Q7kRmJa6hnHLTu7uqrfI~WWggmRHcDIN6~kM5Ftg-L7Pqso3~UBD1skZ8fIYionp~6GEfjRCDIsNhm5kg__"
                        width={100} />
                    </Typography>
                    <Typography variant="body2" mt={1} mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Email fontSize="small" />
                        <Typography variant="body2">Hello@Email.com</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                        <Phone fontSize="small" />
                        <Typography variant="body2">+62 123 456 789</Typography>
                    </Box>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" fontWeight="bold">
                        Quick Links
                    </Typography>
                    {["Home", "About Us", "Our Service", "Package"].map((item, index) => (
                        <Typography key={index} variant="body2" mt={1}>
                            ▸ <Link href="#" color="inherit" underline="none">{item}</Link>
                        </Typography>
                    ))}
                </Grid>

                {/* Useful Links */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" fontWeight="bold">
                        Useful Links
                    </Typography>
                    {["Privacy Policy", "Disclaimer", "Terms & Condition", "GDPR"].map((item, index) => (
                        <Typography key={index} variant="body2" mt={1}>
                            ▸ <Link href="#" color="inherit" underline="none">{item}</Link>
                        </Typography>
                    ))}
                </Grid>

                {/* Follow Us */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" fontWeight="bold">
                        Follow Us
                    </Typography>
                    <Typography variant="body2" mt={1} mb={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Box display="flex" gap={2}>
                        <Link href="#" color="inherit"><FacebookRoundedIcon /></Link>
                        <Link href="#" color="inherit"><TwitterIcon /></Link>
                        <Link href="#" color="inherit"><InstagramIcon /></Link>
                        <Link href="#" color="inherit"><PinterestIcon /></Link>
                    </Box>
                </Grid>
            </Grid>

            {/* Bottom Divider & Credits */}
            <Divider sx={{ my: 3, borderColor: "white" }} />
            <Typography align="center" variant="body2">
                DESIGN BY NEXTWEBI
            </Typography>
        </Box>
    );
};

export default Footer;
