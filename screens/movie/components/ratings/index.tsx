import React from "react";
import { Ratings, Rating } from "../../domain/entities/movie";
import {
  RatingsHeader,
  RatingsHeaderText,
  RatingsList,
  RatingsItem,
} from "./index.styled";

function OtherRatings({ ratings }: { ratings: Ratings }) {
  if (!ratings || ratings.length == 0) {
    return <></>;
  }

  return (
    <>
      <RatingsHeader data-testid="ratings-header">
        <RatingsHeaderText>Ratings</RatingsHeaderText>
      </RatingsHeader>
      <RatingsList>
        {ratings.map((item: Rating, index: number) => {
          return (
            <RatingsItem key={index}>
              {item.source} {"  "} {item.value}
            </RatingsItem>
          );
        })}
      </RatingsList>
    </>
  );
}

export default OtherRatings;
