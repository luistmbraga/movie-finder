import React from "react";
import { Bar, BarLogo } from "./topbar.styled";

function TopBar() {
  return (
    <Bar>
      <BarLogo src="logo.png" alt="logo" />
    </Bar>
  );
}

export default TopBar;
