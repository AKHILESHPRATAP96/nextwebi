import {
  Box,
  IconButton,
  Stack,
  Typography,
  Toolbar,
  Button,
  AppBar,
  CssBaseline,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

function Header() {
  //   const navigate = useNavigate();

  const navItems = ["Canada", "USA"];
  const [companyAnchor, setCompanyAnchor] = useState(null);
  const [destinationAnchor, setDestinationAnchor] = useState(null);
  const [themeAnchor, setThemeAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false); // State for mobile menu

  return (
    <Box component="section" width={"100%"}>
      {/* Header with contact details and social icons */}
      <Stack
        bgcolor={"#898989"}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        width={"100%"}
        px={{ xs: 2, sm: 8 }}
        py={1}
      >
        {/* Contact Numbers */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <CallIcon sx={{ color: "#FFFFFF" }} />
            <Typography color="#ffff">+62 123 456 789</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <CallIcon sx={{ color: "#FFFFFF" }} />
            <Typography color="#ffff">+62 123 456 789</Typography>
          </Stack>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={1}>
          <IconButton>
            <FacebookRoundedIcon sx={{ color: "#ffff" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ color: "#ffff" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "#ffff" }} />
          </IconButton>
          <IconButton>
            <PinterestIcon sx={{ color: "#ffff" }} />
          </IconButton>
        </Stack>
      </Stack>

      {/* Navigation Bar */}
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        color="inherit"
        sx={{ boxShadow: 0, py: 1 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, sm: 10 },
          }}
        >
          {/* Menu Icon (For Mobile) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <img
            src="https://s3-alpha-sig.figma.com/img/cc5a/dff5/fb4721b74e20a52be04318cfeffac6d5?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AYjmbUnhL1DW0BmVo-rnYJPlVS0P06xO6mAzh67AUpstMrjy6IX650XyDIFu1lqZiwLbZWv8NRgZuwuDbtgXEj6PSg-chPFZJG-nmAAOZaQX4xQfEDHM7GI2x0QtMq7bUUx19WdAMzisCMMUn7ONPwoL1O8L45h0-BfHjvxtob~9yzGGOUaExOB07DrOAnwyI3aHfqXxIMoynPPK1NAZH2qEG9-IC~~EQ3j1mXIRPnbVKtByLm4k~Tt2nOh7QDWY9N1Z~Q7kRmJa6hnHLTu7uqrfI~WWggmRHcDIN6~kM5Ftg-L7Pqso3~UBD1skZ8fIYionp~6GEfjRCDIsNhm5kg__"
            width={128}
            alt="Logo"
          />

          {/* Navigation Items & Dropdowns (Hidden on Small Screens) */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {/* Company Dropdown */}
            <Button
              onClick={(e) => setCompanyAnchor(e.currentTarget)}
              sx={{ color: "#6E6E6E", fontWeight: 800 }}
            >
              The Company <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={companyAnchor}
              open={Boolean(companyAnchor)}
              onClose={() => setCompanyAnchor(null)}
            >
              <MenuItem onClick={() => navigate("/about")}>About Us</MenuItem>
              <MenuItem onClick={() => navigate("/team")}>Our Team</MenuItem>
            </Menu>

            {/* Other Navigation Buttons */}
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#6E6E6E", fontWeight: 800 }}>
                {item}
              </Button>
            ))}

            {/* Destination Dropdown */}
            <Button
              onClick={(e) => setDestinationAnchor(e.currentTarget)}
              sx={{ color: "#6E6E6E", fontWeight: 800 }}
            >
              Other Destinations <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={destinationAnchor}
              open={Boolean(destinationAnchor)}
              onClose={() => setDestinationAnchor(null)}
            >
              <MenuItem>Europe</MenuItem>
              <MenuItem>Asia</MenuItem>
            </Menu>

            {/* By Themes Dropdown */}
            <Button
              onClick={(e) => setThemeAnchor(e.currentTarget)}
              sx={{ color: "#6E6E6E", fontWeight: 800 }}
            >
              By Themes <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={themeAnchor}
              open={Boolean(themeAnchor)}
              onClose={() => setThemeAnchor(null)}
            >
              <MenuItem>Modern</MenuItem>
              <MenuItem>Classic</MenuItem>
            </Menu>
            <Button sx={{ color: "#6E6E6E", fontWeight: 800 }}>Contact</Button>
          </Stack>

          {/* Get Quotes Button */}
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "#898989",
              color: "#ffff",
              borderRadius: "38px",
              px: { lg: 4, md: 2 },
              maxHeight: 35,
              display: { xs: "none", sm: "block" },
            }}
          >
            Get Quotes
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <ListItem>
            <ListItemText primary="The Company" />
          </ListItem>
          <ListItemButton onClick={() => navigate("/about")}>
            <ListItemText primary="About Us" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/team")}>
            <ListItemText primary="Our Team" />
          </ListItemButton>

          <ListItem>
            <ListItemText primary="Destinations" />
          </ListItem>
          <ListItemButton>
            <ListItemText primary="Europe" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Asia" />
          </ListItemButton>

          <ListItem>
            <ListItemText primary="By Themes" />
          </ListItem>
          <ListItemButton>
            <ListItemText primary="Modern" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Classic" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Canada" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="USA" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Contact" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Get Quotes" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}

export default Header;
