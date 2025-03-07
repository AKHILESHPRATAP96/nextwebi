import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Header() {
    return (
        <Box component="section" width={"100%"}>
            <Stack bgcolor={"#898989"} direction={"row"} justifyContent={"space-between"} px={10}>

                <div style={{ display: "flex", gap: 30, alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center" }}>
                        <CallIcon sx={{ color: "#FFFFFF", fontWeight: 900, fontSize: "20px" }} fontSize='small' />
                        <Typography fontWeight={400} fontSize={"15px"} color='#ffff'>+62 123 456 789</Typography>
                    </div>
                    <div style={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center" }}>
                        <CallIcon sx={{ color: "#FFFFFF", fontWeight: 900, fontSize: "20px" }} fontSize='small' />
                        <Typography fontWeight={400} fontSize={"15px"} color='#ffff'>+62 123 456 789</Typography>
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton><FacebookRoundedIcon sx={{ color: "#ffff" }} fontSize='small' /></IconButton>
                    <IconButton><TwitterIcon sx={{ color: "#ffff" }} fontSize='small' /></IconButton>
                    <IconButton><InstagramIcon sx={{ color: "#ffff" }} fontSize='small' /></IconButton>
                    <IconButton><PinterestIcon sx={{ color: "#ffff" }} fontSize='small' /></IconButton>
                </div>

            </Stack>
            This Box renders as an HTML section element.
        </Box>

    )
}

export default Header