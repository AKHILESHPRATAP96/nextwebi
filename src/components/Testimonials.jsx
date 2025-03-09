import { useState } from "react";
import { Box, Typography, Paper, Avatar, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward, Star } from "@mui/icons-material";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    name: "Mr. John Doe",
    role: "TRAVELLERS",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Ms. Jane Smith",
    role: "EXPLORER",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        background: "linear-gradient(to bottom, #7d7d7d, #bfbfbf)",
        position: "relative",
      }}
    >
      <Typography variant="overline" color="#DBDBDB" fontFamily={"Oswald"}>
        TESTIMONIALS
      </Typography>
      <Typography variant="h4" fontWeight="bold" color="white" mt={1} fontFamily={"Oswald"}>
        Create A Tailored Itinerary That <br /> Exceeds Your Expectations
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 3,paddingX:25 }} >
        {testimonials.map((testimonial, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              flex: "1 1 45%",
              p: 4,
              borderRadius: 3,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              textAlign: "center",
              minHeight: 200,
              backdropFilter: "blur(10px)",
              transition: "transform 0.5s ease-in-out",
            
              
            }}
          >
            <Box display="flex" justifyContent="center" mb={1}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} sx={{ color: "#FFD700" }} />
              ))}
            </Box>
            <Typography variant="body1" fontStyle="italic" mb={2} fontFamily={"Archivo"} color="##6E6E6E">
              “ {testimonial.text} “
            </Typography>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                mx: "auto",
                border: "3px solid white",
              }}
            />
            <Typography variant="h6" fontWeight={400} mt={2} fontFamily={"Oswald"} color="#FFFFFF">
              {testimonial.name}
            </Typography>
            <Typography variant="caption" color="#DBDBDB" fontFamily={"Oswald"} >
              {testimonial.role}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* Pagination Dots */}
      <Box mt={4} display="flex" justifyContent="center">
        {testimonials.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: i === currentIndex ? 15 : 10,
              height: i === currentIndex ? 15 : 10,
              backgroundColor: i === currentIndex ? "white" : "gray",
              borderRadius: "50%",
              mx: 1,
              transition: "all 0.3s ease-in-out",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
