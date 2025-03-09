import React from "react";
import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import img from '../assets/Vector.png'

const IntroductionComponent = () => {

    const stats = [
        { number: "85", label: "Our Destination" },
        { number: "115", label: "Travel Package" },
        { number: "856", label: "Tour Guide" },
        { number: "20", label: "World Country" },
    ];
    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                backgroundColor: "#ffff",
                gap: 2.5,
                mt: 6
            }}
        >
            {/* Left Section */}
            <Box
                sx={{
                    position: "relative",
                    width: { xs: "100%", md: "45%" },
                    maxWidth: "500px",
                    padding: 2,
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 3,
                        left: 3,
                        width: "50%",
                        height: "70%",
                        backgroundColor: "#BDBDBD",
                        borderRadius: "8px",
                        zIndex: 0,
                    }}
                />
                {/* <Box
                    component="img"
                   
                    alt="Travel"

                    sx={{
                        width: 500,
                        height: 510,
                        borderRadius: "10   px",
                        border: "15px solid #FFFFFF",
                        position: "relative",
                        zIndex: 1,
                        "&. MuiBox-root css-1513gtq": {
                            borderRadius: "100px",
                        }

                    }}
                /> */}
               <img
  style={{
    width: "100%", // Makes it responsive
   
    
    height: "480px", // Maintains aspect ratio
    borderRadius: 10,
    border: "15px solid #FFFFFF",
    position: "relative",
  }}
  src="https://s3-alpha-sig.figma.com/img/21b3/ed5e/1b8734c09a1cf9d37ac55a31f933b29d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wq3Nakc672k2orkZ3r91xz1Kwpwx8A8SLcy68Hla5tRWahti2FudaNesMrU3PISF5q-GbwbyxRHLQVnL2OtDPHHOCchJagu0PLXMLf9XfwdFa7HA5YG~9EQPBzcey-BG17Sujdnle4jybQ8DZW9LJWptiJ-HT7jtzzg4pWirVdTkVEN78J0tbpVtYW8fFiskgK~jM443aIvMDFJ3EbTcwD3CQETo6wdIpX13Qa6E3d3YO8k7M82zoRZznyr9lyH8aXGwwczd-sVdTeq5m3YNIzRAR5L-QJvzak4qEEdlohRrOauKvLhgJqRc5hX1SYU4BRCfo-xJUhguOxrsSKlAmA__" 
  alt="Responsive"
/>

            </Box>

            {/* Right Content */}
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    position: "relative",
                    "&.MuiBox-root": {
                        zIndex: 1
                    },
                    py: 8


                }}
            >

                <Box
                    position="absolute"
                    top={-48}
                    right={390}
                    width="20%"
                    height="60%"
                    bgcolor="#F9F9F9"
                    
                    sx={{
                        "&.MuiBox-root": {
                            zIndex: -1,

                        },
                        flex: "none",
                        alignSelf: "auto",
                        borderBottomLeftRadius:20,
                        borderBottomRightRadius:20
                    }}


                />
                <Box
                    component='img'
                    src={img}
                    position="absolute"
                    top={-10}
                    right={10}
                    width="10%"
                    height="10%"
                    sx={{
                        "&.MuiBox-root": {
                            zIndex: -1,

                        },
                        flex: "none",
                        alignSelf: "auto"
                    }}


                />
                <Typography
                    variant="h4"

                    sx={{
                        color: "#7B7B7B", fontWeight: 700, fontSize: "60px", fontFamily: "Archivo", lineHeight: "59px", LetterSpacing:
                            "0% "
                    }}
                >
                    DMCI,
                    <Typography component="span" color="text.secondary" sx={{
                        color: "#7B7B7B", fontWeight: 700, fontSize: "40px", fontFamily: "Archivo", lineHeight: "59px", LetterSpacing:
                            "0% "
                    }}>
                        Your Travel Partner
                    </Typography>
                    <Typography color="text.secondary" sx={{
                        color: "#7B7B7B", fontWeight: 700, fontSize: "40px", fontFamily: "Archivo", lineHeight: "59px", LetterSpacing:
                            "0% "
                    }}>
                        In North America
                    </Typography>
                </Typography>

                <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{
                    color: "#7B7B7B", fontWeight: 700, fontSize: "40px", fontFamily: "Archivo", lineHeight: "59px", LetterSpacing:
                        "0% "
                }}>
                    For 22 Years
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ color: "#7B7B7B", fontWeight: 400, fontFamily: "Archivo", fontSize: "16px" }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2, lineHeight: 1.6, color: "#7B7B7B", fontWeight: 400, fontFamily: " Archivo", fontSize: "16px" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                </Typography>

                {/* Bullet Points */}
                <Stack spacing={1} sx={{ mb: 3 }}>
                    <Typography variant="body1" display="flex" alignItems="center" color={"#7B7B7B"}>
                        <CheckCircleIcon sx={{ color: "#BDBDBD", mr: 1, fontSize: "15px" }} />
                        World Level Insurance Travelling
                    </Typography>
                    <Typography variant="body1" display="flex" alignItems="center" color={"#7B7B7B"}>
                        <CheckCircleIcon sx={{ color: "#BDBDBD", mr: 1, fontSize: "15px" }} />
                        Many Language Tour Guide Skills
                    </Typography>
                </Stack>

                {/* Buttons */}
                <Stack direction="row" spacing={2} alignItems="center">
                    <Button
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#898989",
                            color: "#ffff",
                            borderRadius: "38px",
                            px: { lg: 3, md: 1 },
                            py: { lg: 1.5, md: 1 },
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        Learn More →
                    </Button>

                    <Typography
                        display="flex"
                        alignItems="center"
                        color="text.disabled"
                        sx={{ fontSize: "1rem" }}
                    >
                        <PhoneIcon sx={{ mr: 1 }} /> 123 456 789
                    </Typography>
                </Stack>
            </Box>
{/* stats */}
<Box
      sx={{
        backgroundColor: "#BDBDBD",
        textAlign: "center",
        py: 6,
        px: 2,
        width: "100%",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index} sx={{ position: "relative" }}>
      

            {/* Main Content */}
            <Typography
              variant="h4"
              fontWeight="bold"
              color="white"
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, opacity: 0.6 }}
            >
              {stat.number}
              <Typography
                variant="caption"
                component="span"
                sx={{ fontSize: "1rem", verticalAlign: "super" }}
              >
                +
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="white"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {stat.label}
            </Typography>

           
          </Grid>
        ))}
      </Grid>
    </Box>





        </Box>
    );
};

export default IntroductionComponent;
