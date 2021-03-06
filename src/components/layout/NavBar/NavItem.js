import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { pageLink } from "../../../general/constant";

export default function NavItem({ label, to, activeOnlyWhenExact, icon }) {
  let match = useRouteMatch({
    path: to || pageLink.index,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "active" : ""}>
      <Link to={to}>
        <Typography
          // variant="h6"
          noWrap
          variant="h6"
          component="div"
          color={match ? "white" : "#858585"}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {" "}
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 2, pr: 2, pt: 1 }}
          >
            {icon}
            &ensp;
            {label}
          </Box>
        </Typography>
      
      </Link>
    </div>
  );
}
