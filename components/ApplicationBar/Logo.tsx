import Typography from "@mui/material/Typography";
import Link from "next/link";

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      LOGO
      {/* this is an error */}
      {/* <Link href="/">LOGO</Link> */}
    </Typography>
  );
};

export default Logo;
