import { useState } from "react";
import { Box, Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import StarIcon from "@mui/icons-material/Star";

const cards = [
  { title: "Bali One Day", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit", topOffer: true },
  { title: "Karimunjawa One Night", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit", topOffer: true },
  { title: "Komodo Island", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
  { title: "Bromo Sunrise", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
  { title: "Bali One Day", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit", topOffer: true },
  { title: "Karimunjawa One Night", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit", topOffer: true },
  { title: "Komodo Island", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
  { title: "Bromo Sunrise", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" }
];

export default function TourPackage() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < cards.length - 1) setIndex(index + 1);
  };
  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", overflow: "hidden", display:"flex",flexDirection:"column",alignItems:"center"}}>

      {/* Navigation Arrows */}
     <Stack width={'100%'} direction={'row'} justifyContent={'space-around'} >
<Typography variant="h5" fontWeight="bold" gutterBottom>
        Introducing India, Oman And UAE As Our New Products
      </Typography>
      <Stack  direction={'row'} justifyContent={'space-around'} >
     <IconButton
        onClick={prevSlide}
        disabled={index === 0}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      
      <IconButton
        onClick={nextSlide}
       
        disabled={index === cards.length - 1}
      >
        <ArrowForwardIosIcon />
      </IconButton>
        </Stack>

     </Stack>
      {/* Cards Slider */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          transform: `translateX(-${index * 320}px)`,
          transition: "transform 0.5s ease-in-out"
        }}
      >
        {cards.map((card, i) => (
          <Card key={i} sx={{ minWidth: 300, padding: 2, boxShadow: 3, borderRadius: 2 }}>
            {card.topOffer && (
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "grey.800",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "4px"
                }}
              >
                Top Offer
              </Box>
            )}
            <Box sx={{ height: 120, bgcolor: "grey.300", display: "flex", alignItems: "center", justifyContent: "center" }}>
              PLACE IMAGE HERE
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", gap: 0.5, color: "gold" }}>
                {[...Array(5)].map((_, star) => (
                  <StarIcon key={star} fontSize="small" />
                ))}
              </Box>
              <Typography variant="h6" fontWeight={600} mt={1}>{card.title}</Typography>
              <Typography variant="body2" color="text.secondary">{card.desc}</Typography>
              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" fontWeight={700}>{card.price} / Pack</Typography>
                <Typography color="primary" sx={{ cursor: "pointer" }}>Order Now</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Dots Indicator */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}>
        {cards.map((_, i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: i === index ? "grey.800" : "grey.400"
            }}
          />
        ))}
      </Box>
    </Box>
  );
}