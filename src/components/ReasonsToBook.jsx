import React, { useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

const reasons = [
    { number: "01", title: "Exclusive Travel Deals", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
    { number: "02", title: "Hassle-Free Booking", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
    { number: "03", title: "Experienced Travel Experts", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
    { number: "04", title: "24/7 Customer Support", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
];

export default function ReasonsToBook() {
    const [selected, setSelected] = useState(2);

    return (
        <Box textAlign="center" py={5}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                # Reasons To Book
            </Typography>
            <Typography variant="h5" fontWeight={600} gutterBottom>
                With DMCI
            </Typography>
            <Grid container spacing={2} justifyContent="center" mt={3}>
                {reasons.map((reason, index) => (
                    <Grid item key={index}>
                        <Paper
                            onMouseOver={() => setSelected(index)}
                            //   onMouseLeave={() => setSelected(2)}
                            elevation={selected === index ? 4 : 0}
                            sx={{
                                width: 220,
                                height: 150,
                                p: 2,
                                textAlign: "center",
                                borderRadius: 3,
                                border: selected === index ? "none" : "1px dashed #ccc",
                                backgroundColor: selected === index ? "#757575" : "transparent",
                                color: selected === index ? "white" : "black",
                                cursor: "pointer",
                                transition: "0.3s",
                                '&:hover': { backgroundColor: selected === index ? "#757575" : "#f5f5f5" },
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} sx={{ opacity: 0.7 }}>
                                {reason.number}
                            </Typography>
                            <Typography variant="subtitle1" fontWeight={600}>
                                {reason.title}
                            </Typography>
                            <Typography variant="body2" mt={1}>{reason.desc}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
