import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

const packages = [
    {
        title: "Ski Packages",
        image: "PLACE_IMAGE_HERE",
    },
    {
        title: "Escorted Group Tours",
        image: "PLACE_IMAGE_HERE",
    },
    {
        title: "Self Drive Holidays",
        image: "PLACE_IMAGE_HERE",
    },
];

const PackagesSection = () => {
    return (
        <Box sx={{ px: { xs: 2, md: 10 }, py: 6, mt: 5, textAlign: "left", backgroundColor: "#ffff" }}>
            {/* Title & Description */}
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Typography variant="body2" sx={{ color: "#D9D9D9", textTransform: "uppercase", fontWeight: 600, fontFamily: "Oswald" }}>
                        Most Popular
                    </Typography>
                    <Typography textTransform={"none"} variant="h4" sx={{ color: "#979797", fontWeight: 600, fontFamily: "Oswald", fontSize: { xs: "32px", md: "45px" }, mt: 3 }}>
                        Canada Special Packages
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{ color: "#979797", fontWeight: 400, fontFamily: "Archivo", fontSize: "15px", lineHeight: "26px", px: { xs: 2, md: 8 } }}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                    </Typography>
                </Grid>
            </Grid>

            {/* Package Cards */}
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {packages.map((pkg, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: 330,
                                height: 450,
                                borderRadius: "16px",
                                background: "linear-gradient(to bottom, #E0E0E0, #BDBDBD)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                padding: 2,
                                boxShadow: 3,
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        >
                            {/* Image Placeholder */}
                            <Typography
                                sx={{
                                    color: "#9E9E9E",
                                    fontSize: "12px",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    fontWeight: 600,
                                }}
                            >
                                {pkg.image}
                            </Typography>

                            {/* Content */}
                            <Box textAlign="center" sx={{ mt: "auto" }}>
                                <Typography
                                    sx={{
                                        color: "#757575",
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Canada
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        mt: 1,
                                    }}
                                >
                                    {pkg.title}
                                </Typography>

                                {/* Button */}
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        textTransform: "none",
                                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                                        color: "#fff",
                                        borderRadius: "24px",
                                        paddingX: 3,
                                        boxShadow: 0,
                                        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                                    }}
                                >
                                    See Package →
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PackagesSection;
