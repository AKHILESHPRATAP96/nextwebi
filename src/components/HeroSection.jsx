import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./HeroSection.css";

function HeroSection() {
  const [destination, setDestination] = React.useState("");
  const [tourType, setTourType] = React.useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "center",
    borderRadius: "38px",
    boxShadow: "none",
    color: theme.palette.text.secondary,
  }));

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleTourTypeChange = (event) => {
    setTourType(event.target.value);
  };

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="350px"
      paddingX={4}
      sx={{ background: "linear-gradient(to bottom, #A0A0A0E5, #A0A0A066)" }}
    >
      <Typography className="font" textAlign="center" gutterBottom>
        Redefining travel services in Canada & USA
      </Typography>
      <Typography className="heading" textAlign="center"  gutterBottom>
        Leading DMC For Canada & USA
      </Typography>

      <Grid container spacing={2} justifyContent="center" maxWidth={900} marginTop={2}>
        <Grid item xs={12} sm={4}>
          <Item>
            <FormControl fullWidth>
              <InputLabel sx={{color:"#BDBDBD"}}>Destination</InputLabel>
              <Select
                value={destination}
                onChange={handleDestinationChange}
                sx={{ borderRadius: "30px" }}
              >
                <MenuItem value={10}>Destination1</MenuItem>
                <MenuItem value={20}>Destination2</MenuItem>
                <MenuItem value={30}>Destination3</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <FormControl fullWidth>
              <InputLabel sx={{color:"#BDBDBD"}}>Tour Type</InputLabel>
              <Select
                value={tourType}
                onChange={handleTourTypeChange}
                sx={{ borderRadius: "30px" }}
              >
                <MenuItem value={10}>TourType1</MenuItem>
                <MenuItem value={20}>TourType2</MenuItem>
                <MenuItem value={30}>TourType3</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item>
            <Button
            className="btn"
              sx={{
                backgroundColor: "#C2C2C2",
                color: "#fff",
                borderRadius: "38px",
                px: 5,
                py: 1.5,
                fontSize: 16,
                fontWeight: 600,
                width: "100%",
              }}
              size="large"
            >
              Find Package
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;