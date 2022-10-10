import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

import Logo from "./Logo";

const pages = ["Home", "Diaries", "Tasks"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="/">Home</Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link href="/diaries">Diaries</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
