import React from "react";
import { Box, Typography, Card, CardContent, Button, Chip, Grid, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const blogPosts = [
  {
    title: "Tips Saving Your Budget World Travelling",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    tags: ["Travelling", "Tips & Trick"],
  },
  {
    title: "Best Travelling Destination For Private",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    tags: ["Travelling", "Tips & Trick"],
  },
  {
    title: "Woman Solo Travelling Tips & Trick",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    tags: ["Travelling", "Tips & Trick"],
  },
];

const Blog = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 5, px: 2 }}>
      {/* Heading & "Discover All" Link */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" color="#7B7B7B" fontFamily={"Archivo"}>
          Travelling Blog
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{ textTransform: "none", color: "text.secondary", fontSize: "14px" }}
        >
          Discover All
        </Button>
      </Stack>

      {/* Blog Cards */}
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
                backgroundColor: "#f9f9f9",
                height:"100%",
                width:"90%",
                
              }}
            >
              {/* Image Placeholder */}
              <Box
                sx={{
                  height: 180,
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "gray",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                PLACE IMAGE HERE
              </Box>

              <CardContent>
                {/* Tags */}
                <Stack direction="row" spacing={1} mb={1} color={"#9D9D9D"} fontFamily={"Archivo"}>
                  {post.tags.map((tag, i) => (
                    <Chip key={i} label={tag} sx={{ backgroundColor: "#f0f0f0", fontSize: "12px" }} />
                  ))}
                </Stack>

                {/* Title */}
                <Typography variant="h6" fontWeight="bold" gutterBottom color="#7B7B7B" fontFamily={"Archivo"}>
                  {post.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="#6E6E6E" mb={2} fontFamily={"Archivo"}>
                  {post.description}
                </Typography>

                {/* Read More Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#BDBDBD",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: "20px",
                    boxShadow: "none",
                    fontSize: "14px",
                    "&:hover": { backgroundColor: "#ccc" },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
