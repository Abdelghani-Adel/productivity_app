import React, { Fragment } from "react";
import ApplicationBar from "../ApplicationBar/ApplicationBar";
import Container from "@mui/material/Container";

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <ApplicationBar />
      <Container>
        <main>{props.children}</main>
      </Container>
    </Fragment>
  );
};

export default Layout;
