import { useState } from "react";
import { Box, Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const cards = [
  { title: "Bali One Day", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit", topOffer: true },
  { title: "Karimunjawa One Night", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit", topOffer: true },
  { title: "Komodo Island", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
  { title: "Bromo Sunrise", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit" },
  { title: "Bali One Day", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit", },
  { title: "Karimunjawa One Night", price: "$189", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",  },
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
    <Box bgcolor={"#F3F3F3"} sx={{ width: "100%", padding: "50px 120px", overflow: "hidden" }}>
      {/* Header */}
      <Typography sx={{ color: "#7B7B7B", fontWeight: 700, fontSize: "36px", fontFamily: "Archivo", lineHeight: 1.2 }}>
        Introducing India, Oman And
      </Typography>
      <Typography sx={{ color: "#7B7B7B", fontWeight: 700, fontSize: "36px", fontFamily: "Archivo", mb: 4, lineHeight: 1.2 }}>
        UAE As Our New Products
      </Typography>

      {/* Navigation Arrows */}
      <Stack direction={'row'} justifyContent={'flex-end'} mb={2}>
        <IconButton onClick={prevSlide} disabled={index === 0} sx={{ color: "#BDBDBD" }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={nextSlide} disabled={index === cards.length - 1} sx={{ color: "#BDBDBD" }}>
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </Stack>

      {/* Card Slider */}
      <Box sx={{ display: "flex", gap: 3, transform: `translateX(-${index * 320}px)`, transition: "transform 0.5s ease-in-out" }}>
        {cards.map((card, i) => (
          <Card key={i} sx={{ minWidth: 300, borderRadius: 3, boxShadow: 1, position: "relative", background: "white" }}>
            {card.topOffer && (
              <Box sx={{ position: "absolute", top: 0, left: 0, backgroundColor: "#4A4A4A", color: "white", padding: "6px 12px", borderRadius: "8px 0 8px 0", fontSize: "14px", fontWeight: 600, fontFamily: "Archivo" }}>
                Top Offer
              </Box>
            )}
            <Box sx={{ height: 300,width:300, bgcolor: "#E0E0E0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#7B7B7B", fontWeight: 500, fontFamily: "Archivo" }}>
              PLACE IMAGE HERE
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", gap: 0.5, color: "#FFB400" }}>
                {[...Array(5)].map((_, star) => (
                  <StarIcon key={star} fontSize="small" />
                ))}
              </Box>
              <Typography variant="h6"  fontWeight={700} mt={1} fontSize={"18px"} fontFamily="Archivo" color="#7B7B7B">
                {card.title}
              </Typography>
              <Typography variant="body2" color="#7B7B7B" fontSize={"14px"} fontFamily="Archivo" fontWeight={500}>
                {card.desc}
              </Typography>
              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" fontWeight={700} fontSize={"18px"} color="#6E6E6E" fontFamily="Archivo">
                  {card.price} / Pack
                </Typography>
                <Typography color="#7B7B7B" sx={{ cursor: "pointer", fontSize: "14px", fontWeight: 600, fontFamily: "Archivo" }}>
                  Order Now →
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Dots Indicator */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
        {cards.map((_, i) => (
          <Box key={i} sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: i === index ? "#4A4A4A" : "#D9D9D9" }} />
        ))}
      </Box>
    </Box>
  );
}