import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../Utils/Constants";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "black",
        top: 0,
        justifyContent: "space-between",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default NavBar;

/*
  Notes :- 
  - with the sx prop we can define any style we want 
*/
