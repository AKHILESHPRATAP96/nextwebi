import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function About() {
  return (
    <Box p={4}>
      <Typography variant="overline" color="textSecondary">
        DMCI
      </Typography>
      <Typography variant="h4" fontWeight="bold" mt={1}>
        Message From Our DMCI President
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              height: 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="textSecondary">
              PLACE IMAGE HERE
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 2,
                cursor: "pointer",
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 30, color: "gray" }} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">
            Best Choosing
          </Typography>
          <Typography variant="body2" color="textSecondary" fontWeight="bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#c4c4c4",
          color: "black",
          borderRadius: 3,
          paddingX: 3,
          "&:hover": { backgroundColor: "#b0b0b0" },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
}
