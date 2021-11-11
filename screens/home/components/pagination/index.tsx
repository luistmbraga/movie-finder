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

  return (
    <Pagination
      sx={{ marginTop: 5 }}
      count={count}
      page={page}
      onChange={(e, value) => handleChangePage(value)}
    />
  );
}

export default Pages;
