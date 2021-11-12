import React from "react";
import Pagination from "@mui/material/Pagination";

function Pages({
  totalResults,
  page,
  handleChangePage,
}: {
  totalResults: number;
  page: number;
  handleChangePage: (value: number) => void;
}) {
  if (totalResults < 10) {
    return <></>;
  }

  var remainder = totalResults % 10;
  var count = Math.floor(totalResults / 10) + (remainder != 0 ? 1 : 0);

  const aStyle = {
    color: "black",
    float: "left",
    padding: "8px 16px",
    textDecoration: "none",
  };
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <div style={{ display: "inline-block" }}>
        <a style={aStyle} href="#">
          &laquo;
        </a>
        <a style={aStyle} href="#">
          1
        </a>
        <a style={aStyle} href="#">
          2
        </a>
        <a style={aStyle} href="#">
          3
        </a>
        <a style={aStyle} href="#">
          4
        </a>
        <a style={aStyle} href="#">
          &raquo;
        </a>
      </div>
      <Pagination
        sx={{ marginTop: 5 }}
        count={count}
        page={page}
        onChange={(e, value) => handleChangePage(value)}
      />
    </div>
  );
}

export default Pages;
