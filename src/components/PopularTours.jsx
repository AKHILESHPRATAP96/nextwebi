import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Stack, styled } from "@mui/system";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// Styled Card Component
const StyledCard = styled(Card)({
    width: "350px",
    height: "500px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "24px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(to bottom, #E0E0E0, #BDBDBD)",
    position: "relative",
    border: "3px solid rgba(255, 255, 255, 0.8)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)",
    },
    borderRadius: 20,
    border: "10px solid #FFFFFF",
});

// Styled Text Over Image
const ImageText = styled(Typography)({
    color: "#9E9E9E",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: 600,
    position: "absolute",
    top: "20%",
});

// Individual Card Component
const TourCard = ({ title, description, price }) => {
    return (
        <StyledCard>
            <ImageText>Place Image Here</ImageText>

            <CardContent sx={{ textAlign: "center", width: "100%" }}>
                <Typography sx={{ color: "#fff", fontSize: "18px", fontWeight: "bold" ,textAlign:"start"}}>
                    {title}
                </Typography>
                <Typography sx={{ color: "#fff", fontSize: "14px", mb: 2 ,textAlign:"start"}}>
                    {description}
                </Typography>

                <Stack direction={"row"} justifyContent={'space-between'}>
              <div>
              <Typography sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold",textAlign:"start" }}>
                    {price} +
                </Typography>

                <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                    Tour Package
                </Typography>
              </div>
                <ArrowForwardIosSharpIcon sx={{color:"#fff"}}/>
                </Stack>
            </CardContent>
        </StyledCard>
    );
};

// Main Section
const PopularTours = () => {
    return (
        <Box sx={{ padding: 6 }} position={"relative"} >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "60%",
                    background: "linear-gradient(to bottom, #757575, #F5F5F5)",
                    // borderRadius: "8px",
                    zIndex: -1,
                }}
            />
            {/* Title */}
            <Box sx={{ textAlign: "left", mb: 4 }}>
                <Typography variant="h5"  sx={{ color: "#ffff", fontWeight: 700, fontFamily: "Archivo", fontSize: "40px",lineHeight:"59px" }}>
                    Most Popular Tours
                </Typography>
                <Typography variant="h5" sx={{ color: "#ffff", fontWeight: 700, fontFamily: "Archivo", fontSize: "45px" ,lineHeight:"59px"}}>
                    In <span style={{ color: "#ffff" }}>USA</span>
                </Typography>
            </Box>

            {/* Tour Cards */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item  >
                    <TourCard title="High Mountain" description="Lorem ipsum dolor sit amet consectetur adipiscing elit" price="350" />
                </Grid>
                <Grid item  >
                    <TourCard title="USA Mountain" description="Lorem ipsum dolor sit amet consectetur adipiscing elit" price="18" />
                </Grid>
                <Grid item   >
                    <TourCard title="River Country" description="Lorem ipsum dolor sit amet consectetur adipiscing elit" price="38" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PopularTours;
