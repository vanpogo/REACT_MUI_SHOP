import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { BannerContainer, BannerImage } from "../../styles/Banner";
import Image from "../../images/banner.png";

const Banner = () => {
  return (
    <BannerContainer>
      <Box
        flex={1}
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-end",
          },
          marginRight: { xs: 0, sm: "15px" },
        }}
      >
        <BannerImage sx={{ backgroundImage: `url(${Image})` }} />
      </Box>
      <Box
        flex={1}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", sm: "flex-start", md: "flex-start" },
          paddingTop: { xs: "0", sm: "25px" },
          flexDirection: "column",
          marginLeft: { xs: 0, sm: "15px" },
        }}
      >
        <Typography
          variant="h6"
          fontSize={{ xs: "25px", sm: "17px", md: "22px" }}
          fontWeight={"500"}
        >
          Huge Collection
        </Typography>
        <Typography
          pt={2}
          variant="h2"
          fontWeight={"500"}
          fontSize={{ xs: "20px", sm: "50px", md: "72px" }}
        >
          New Bags
        </Typography>
        <Box pt={3} sx={{ width: { xs: "90%", sm: "80%", md: "50%" } }}>
          <Typography variant="h6" fontSize={"15px"} lineHeight={1.2}>
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore et dolore magna
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            width: { xs: "90%", sm: "70%", md: "50%" },
            marginTop: "30px",
            padding: "15px 0 15px 0",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          SHOP NOW
        </Button>
      </Box>
    </BannerContainer>
  );
};

export default Banner;
