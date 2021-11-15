import React from "react";
import { PaginationItem, Dots, PaginationWrapper } from "./index.styled";
import { MAX_ELEMS, RESUME_ITEMS_DISTANCE } from "./constants";

function Pagination({
  totalResults,
  page,
  handleChangePage,
}: {
  totalResults: number;
  page: number;
  handleChangePage: (value: number) => void;
}) {
  if (totalResults <= 10) {
    return <></>;
  }

  var remainder = totalResults % 10;
  var count = Math.floor(totalResults / 10) + (remainder != 0 ? 1 : 0);

  var paginationItems;

  if (count > MAX_ELEMS) {
    let awayFromLeft = page - 1 > RESUME_ITEMS_DISTANCE;
    let awayFromRight = count - page > RESUME_ITEMS_DISTANCE;
    let inTheMiddle = awayFromLeft && awayFromRight;

    let fstelem = inTheMiddle ? page - 1 : awayFromLeft ? count - 4 : 3;
    let sndelem = inTheMiddle ? page : awayFromLeft ? count - 3 : 4;
    let trdelem = inTheMiddle ? page + 1 : awayFromLeft ? count - 2 : 5;

    const leftitem = awayFromLeft ? (
      <Dots data-testid="left-dots">...</Dots>
    ) : (
      <PaginationItem onClick={() => handleChangePage(2)} active={page == 2}>
        2
      </PaginationItem>
    );

    const rightitem = awayFromRight ? (
      <Dots data-testid="right-dots">...</Dots>
    ) : (
      <PaginationItem
        onClick={() => handleChangePage(count - 1)}
        active={page == count - 1}
      >
        {count - 1}
      </PaginationItem>
    );

    paginationItems = (
      <>
        <PaginationItem
          onClick={() => handleChangePage(1)}
          active={page == 1}
          data-testid="bigger-pagination"
        >
          1
        </PaginationItem>
        {leftitem}
        <PaginationItem
          onClick={() => handleChangePage(fstelem)}
          active={page == fstelem}
        >
          {fstelem}
        </PaginationItem>
        <PaginationItem
          onClick={() => handleChangePage(sndelem)}
          active={page == sndelem}
        >
          {sndelem}
        </PaginationItem>
        <PaginationItem
          onClick={() => handleChangePage(trdelem)}
          active={page == trdelem}
        >
          {trdelem}
        </PaginationItem>
        {rightitem}
        <PaginationItem
          onClick={() => handleChangePage(count)}
          active={page == count}
        >
          {count}
        </PaginationItem>
      </>
    );
  } else {
    paginationItems = Array(count)
      .fill(0)
      .map((_, idx) => (
        <PaginationItem
          onClick={() => handleChangePage(1 + idx)}
          active={page == idx + 1}
          key={idx}
          data-testid={`smaller-pagination-${idx + 1}`}
        >
          {1 + idx}
        </PaginationItem>
      ));
  }

  return (
    <PaginationWrapper data-testid="pagination">
      {page != 1 ? (
        <PaginationItem
          data-testid="pagination-step-backwards"
          onClick={() => handleChangePage(page - 1)}
        >
          &laquo;
        </PaginationItem>
      ) : (
        <></>
      )}
      {paginationItems}
      {page != count ? (
        <PaginationItem
          data-testid="pagination-step-forwards"
          onClick={() => handleChangePage(page + 1)}
        >
          &raquo;
        </PaginationItem>
      ) : (
        <></>
      )}
    </PaginationWrapper>
  );
}

export default Pagination;
