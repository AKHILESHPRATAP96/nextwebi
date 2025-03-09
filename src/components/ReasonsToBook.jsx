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
        <Box textAlign="center" py={5} bgcolor="#F9F9F9">
            <Typography variant="h4" fontWeight={700} color="#6D6D6D" gutterBottom>
                # Reasons To Book
            </Typography>
            <Typography variant="h4" fontWeight={700} color="#6D6D6D" gutterBottom>
                With DMCI
            </Typography>
            <Grid container spacing={3} justifyContent="center" mt={3}>
                {reasons.map((reason, index) => (
                    <Grid item key={index}>
                        <Paper
                            onMouseOver={() => setSelected(index)}
                            elevation={0}
                            sx={{
                                width: 230,
                                height: 200,
                                p: 3,
                                textAlign: "center",
                                borderRadius: 4,
                                border: selected === index ? "none" : "1px dashed #D3D3D3",
                                backgroundColor: selected === index ? "#979797" : "transparent",
                                color: selected === index ? "white" : "#7B7B7B",
                                cursor: "pointer",
                                transition: "0.3s",
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} sx={{ opacity: 0.6 }}>
                                {reason.number}
                            </Typography>
                            <Typography variant="subtitle1" fontWeight={700} mt={1}>
                                {reason.title}
                            </Typography>
                            <Typography variant="body2" mt={1}>
                                {reason.desc}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
