import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import * as React from "react";

import Logo from "./Logo";

const ApplicationBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href={"/"}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
            </Link>

            <Link href="/diaries">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Diaries
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ApplicationBar;
