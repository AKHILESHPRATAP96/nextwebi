import React from "react";
import { Box, Typography, Button, Stack,Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PhoneIcon from "@mui/icons-material/Phone";

const IntroductionComponent = () => {

    const stats = [
        { number: "85+", label: "Our Destination" },
        { number: "115+", label: "Travel Package" },
        { number: "856+", label: "Tour Guide" },
        { number: "20+", label: "World Country" },
      ];
    return (

        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                backgroundColor: "#ffff",
                // padding: { xs: 2, md: 6 },
                gap: 20
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
                        top: 5,
                        left: 5,
                        width: "50%",
                        height: "70%",
                        backgroundColor: "#BDBDBD",
                        borderRadius: "8px",
                        zIndex: 0,
                    }}
                />
                <Box
                    component="img"
                    src="https://s3-alpha-sig.figma.com/img/21b3/ed5e/1b8734c09a1cf9d37ac55a31f933b29d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wq3Nakc672k2orkZ3r91xz1Kwpwx8A8SLcy68Hla5tRWahti2FudaNesMrU3PISF5q-GbwbyxRHLQVnL2OtDPHHOCchJagu0PLXMLf9XfwdFa7HA5YG~9EQPBzcey-BG17Sujdnle4jybQ8DZW9LJWptiJ-HT7jtzzg4pWirVdTkVEN78J0tbpVtYW8fFiskgK~jM443aIvMDFJ3EbTcwD3CQETo6wdIpX13Qa6E3d3YO8k7M82zoRZznyr9lyH8aXGwwczd-sVdTeq5m3YNIzRAR5L-QJvzak4qEEdlohRrOauKvLhgJqRc5hX1SYU4BRCfo-xJUhguOxrsSKlAmA__"
                    alt="Travel"
                    sx={{
                        width: "590px",
                        height: "627px",
                        borderRadius: "8px",
                        position: "relative",
                        zIndex: 1,

                    }}
                />
            </Box>

            {/* Right Content */}
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    padding: { xs: 2, md: 4 },
                    textAlign: "left",
                }}
            >
                <Typography
                    variant="h4"

                    sx={{ color: "#7B7B7B", fontWeight: 700, fontSize: "64px", fontFamily: "Archivo" }}
                >
                    DMCI,
                    <Typography component="span" color="text.secondary" sx={{ color: "#7B7B7B", fontWeight: 700, fontSize: "44px", fontFamily: "Archivo" }}>
                        Your Travel Partner In North America
                    </Typography>
                </Typography>

                <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{ color: "#7B7B7B", fontSize: "44px", fontWeight: 700, fontFamily: "Archivo" }}>
                    For 22 Years
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ color: "#7B7B7B", fontWeight: 400, fontFamily: "Archivo", fontSize: "20px" }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2, lineHeight: 1.6, color: "#7B7B7B", fontWeight: 400, fontFamily: " Archivo", fontSize: "20px" }}>
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
                            px: { lg: 6, md: 2 },
                            py: { lg: 2, md: 2 },
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
         
    <Box
      sx={{
        backgroundColor: "#BDBDBD",
        textAlign: "center",
        py: 4,
        px: 2,
        width:"100%"
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="white"
              sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              {stat.number}
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
