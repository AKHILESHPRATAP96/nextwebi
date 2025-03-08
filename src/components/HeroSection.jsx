import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import "./HeroSection.css"

function HeroSection() {
  const [destination, setdestination] = React.useState("");
  const [tourType, settourType] = React.useState("");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "center",
    borderRadius: "38px",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#ffff",
    }),
  }));
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      component="section"
      display={"flex"}
      flexDirection={"column"}
      // gap={2}
      height={"138px"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ background: "linear-gradient(to bottom, #A0A0A0E5, #A0A0A066)" }}
    >
      <Box component="section">
        <Typography className="font" textAlign={"center"}>
          Redefining travel services in Canada & USA
        </Typography>
        <Typography textAlign={"center"} className="mainHeading">
          Leading DMC For Canada & USA
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Item>
              {" "}
              {/* select destination */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Destination
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={destination}
                  label="pakage"
                  onChange={handleChange}
                  sx={{ borderRadius: "30px" }}
                >
                  <MenuItem value={10}>Destination1</MenuItem>
                  <MenuItem value={20}>Destination2</MenuItem>
                  <MenuItem value={30}>Destination3</MenuItem>
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Item>
              {" "}
              {/* select Tour Type */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tour Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={tourType}
                  label="Age"
                  onChange={handleChange}
                  sx={{ borderRadius: "30px" }}
                >
                  <MenuItem value={10}>TourType1</MenuItem>
                  <MenuItem value={20}>TourType2</MenuItem>
                  <MenuItem value={30}>TourType3</MenuItem>
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Item>
              {" "}
              <Button
                sx={{
                  backgroundColor: "#C2C2C2",
                  color: "#ffff",
                  borderRadius: "38px",
                  px: 10,
                }}
              >
                Find Package
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HeroSection;
