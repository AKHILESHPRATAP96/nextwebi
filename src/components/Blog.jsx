import React from "react";
import { Box, Typography, Card, CardContent, Button, Chip, Grid } from "@mui/material";
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
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 5 }}>
      {/* Heading & "Discover All" Link */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Travelling Blog
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{ textTransform: "none", color: "gray", fontSize: "14px" }}
        >
          Discover All
        </Button>
      </Box>

      {/* Blog Cards */}
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                "&:hover": { transform: "scale(1.02)", transition: "0.3s" },
              }}
            >
              {/* Image Placeholder */}
              <Box
                sx={{
                  height: 180,
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                PLACE IMAGE HERE
              </Box>

              <CardContent sx={{ textAlign: "left" }}>
                {/* Tags */}
                <Box display="flex" gap={1} mb={1}>
                  {post.tags.map((tag, i) => (
                    <Chip key={i} label={tag} sx={{ backgroundColor: "#f5f5f5", fontSize: "12px" }} />
                  ))}
                </Box>

                {/* Title */}
                <Typography variant="h6" fontWeight="bold">
                  {post.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {post.description}
                </Typography>

                {/* Read More Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#e0e0e0",
                    color: "black",
                    textTransform: "none",
                    borderRadius: "20px",
                    "&:hover": { backgroundColor: "#d6d6d6" },
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
