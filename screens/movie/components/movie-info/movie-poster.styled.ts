import styled from "@emotion/styled";

export const MoviePosterCard = styled.div`
  border: 1px solid #eaeaea;
  borderradius: 8px;
  grid-area: poster;
  width: 350px;
  border-radius: 8px;
`;

export const PosterImg = styled.img`
  width: 100%;
`;

export const PosterInfo = styled.div`
  display: grid;
  gap: 10px;
  padding: 10px 30px;
`;

export const InfoRating = styled.p`
  font-size: 26px;
  padding: 0;
  margin: 0;
`;

export const RatingSpan = styled.span`
  color: #757575;
  font-size: 16px;
  padding: 0 0 4px 4px;
`;

export const IMdbVotes = styled.span`
  color: #757575;
  font-size: 14px;
`;

export const IMDbRatingWrapper = styled.div`
  display: flex;
  align-items: end;
`;
