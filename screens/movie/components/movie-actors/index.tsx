import {
  ActorsHeader,
  ActorsHeaderText,
  ActorsList,
  ActorsItem,
} from "./index.styled";

function MovieActors({ actors }: { actors: string }) {
  if (!actors || actors == "" || actors == "N/A") {
    return <></>;
  }

  var actorslist = actors.split(",");

  return (
    <>
      <ActorsHeader data-testid="actors-header">
        <ActorsHeaderText>Actors</ActorsHeaderText>
      </ActorsHeader>
      <ActorsList>
        {actorslist.map((item, i) => (
          <ActorsItem key={i}>{item}</ActorsItem>
        ))}
      </ActorsList>
    </>
  );
}

export default MovieActors;
