import {
  Box,
  IconButton,
  Stack,
  Typography,
  Toolbar,
  Button,
  AppBar,
  Menu,
  MenuItem,
  Drawer,
  List,
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

function Header() {
  const navItems = ["Canada", "USA"];
  const [companyAnchor, setCompanyAnchor] = useState(null);
  const [destinationAnchor, setDestinationAnchor] = useState(null);
  const [themeAnchor, setThemeAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box component="section" width="100%" position="relative">
      <AppBar position="static" color="inherit" sx={{ boxShadow: 0 }}>

        {/* Top Bar */}
        <Stack
          bgcolor="#898989"
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          height={{ xs: "auto", sm: "54px" }}
          px={{ xs: 2, sm: 4 }}
          py={{ xs: 1, sm: 0 }}
          gap={{ xs: 1, sm: 0 }} // Prevents stacking issues
        >
          {/* Contact Info */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <CallIcon sx={{ color: "#FFFFFF" }} fontSize="small" />
              <Typography color="#fff" fontFamily="Archivo">+62 123 456 789</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CallIcon sx={{ color: "#FFFFFF" }} fontSize="small" />
              <Typography color="#fff" fontFamily="Archivo">+62 123 456 789</Typography>
            </Stack>
          </Stack>

          {/* Social Icons */}
          <Stack direction="row" spacing={1}>
            {[FacebookRoundedIcon, TwitterIcon, InstagramIcon, PinterestIcon].map((Icon, index) => (
              <IconButton key={index} size="small">
                <Icon sx={{ color: "#fff" }} />
              </IconButton>
            ))}
          </Stack>
        </Stack>

        {/* Navigation Bar */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 4 },
            py: 1,
          }}
        >
          {/* Mobile Menu Button */}
          <IconButton color="inherit" onClick={() => setMobileOpen(true)} sx={{ display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <img
            src="https://s3-alpha-sig.figma.com/img/cc5a/dff5/fb4721b74e20a52be04318cfeffac6d5?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AYjmbUnhL1DW0BmVo-rnYJPlVS0P06xO6mAzh67AUpstMrjy6IX650XyDIFu1lqZiwLbZWv8NRgZuwuDbtgXEj6PSg-chPFZJG-nmAAOZaQX4xQfEDHM7GI2x0QtMq7bUUx19WdAMzisCMMUn7ONPwoL1O8L45h0-BfHjvxtob~9yzGGOUaExOB07DrOAnwyI3aHfqXxIMoynPPK1NAZH2qEG9-IC~~EQ3j1mXIRPnbVKtByLm4k~Tt2nOh7QDWY9N1Z~Q7kRmJa6hnHLTu7uqrfI~WWggmRHcDIN6~kM5Ftg-L7Pqso3~UBD1skZ8fIYionp~6GEfjRCDIsNhm5kg__"
            height={40}
            alt="Logo"
          />

          {/* Desktop Menu */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button onClick={(e) => setCompanyAnchor(e.currentTarget)} sx={{ color: "#6E6E6E", fontWeight: 800 }}>
              The Company <ArrowDropDownIcon />
            </Button>
            <Menu anchorEl={companyAnchor} open={Boolean(companyAnchor)} onClose={() => setCompanyAnchor(null)}>
              <MenuItem>About Us</MenuItem>
              <MenuItem>Our Team</MenuItem>
            </Menu>

            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#6E6E6E", fontWeight: 800 }}>{item}</Button>
            ))}

            <Button onClick={(e) => setDestinationAnchor(e.currentTarget)} sx={{ color: "#6E6E6E", fontWeight: 800 }}>
              Other Destinations <ArrowDropDownIcon />
            </Button>
            <Menu anchorEl={destinationAnchor} open={Boolean(destinationAnchor)} onClose={() => setDestinationAnchor(null)}>
              <MenuItem>Europe</MenuItem>
              <MenuItem>Asia</MenuItem>
            </Menu>

            <Button sx={{ color: "#6E6E6E", fontWeight: 700 }}>Contact</Button>
          </Stack>

          {/* Get a Quote Button */}
          <Button
            sx={{
              backgroundColor: "#898989",
              color: "#fff",
              borderRadius: "30px",
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.2 },
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 500,
              fontFamily: "Archivo",
              display: { xs: "none", md: "inline-flex" }, // Hide on small screens
            }}
          >
            Get a Quote
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List sx={{ width: 250 }}>
          {["The Company", "Destinations", "Canada", "USA", "Contact", "Get Quotes"].map((text, index) => (
            <ListItemButton key={index}>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Header;
