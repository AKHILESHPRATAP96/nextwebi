import { Box, Typography, Button, Grid, Paper, Stack } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function About() {
  return (
    <Box px={4} py={6}>

      <Stack gap={2}>
      <Typography sx={{ paddingX: 4,}} variant="overline" color="#D9D9D9" fontWeight={600} letterSpacing={1} fontFamily={"Oswald"}>
        DMCI
      </Typography>
      <Typography sx={{ paddingX: 4,}} variant="h4" fontWeight={700} mt={1}  color="#979797" fontFamily={"Oswald"}>
        Message From Our DMCI President
      </Typography>
      <Typography sx={{ paddingX: 4,}} variant="body1" color="#C1C1C1"  mb={3} maxWidth={600} fontFamily={"Oswald"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      </Stack>
      <Grid container  px={4} >
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#f2f2f2",
              borderRadius: 3,
              height: 400,
              width:"98%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              position: "relative",
            }}
          >
            <Typography variant="h6" fontWeight={600} color="gray">
              PLACE IMAGE HERE
            </Typography>
            <Box
              sx={{
                position: "absolute",
                width: 55,
                height: 55,
                borderRadius: "50%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
                cursor: "pointer",
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 32, color: "gray" }} />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} >
          <Typography variant="h6" fontWeight={700} color="#979797" fontFamily={"Oswald"} pt={8}>
          Best Choicing
          </Typography>
          <Typography variant="body2" fontSize={'16px'}  fontWeight={600} maxWidth={250} color="#C1C1C1" fontFamily={"Oswald"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          ml:4,
          backgroundColor: "#C2C2C2",
          color: "#fff",
          borderRadius: 3,
          paddingX: 4,
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { backgroundColor: "#b0b0b0" },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
}
