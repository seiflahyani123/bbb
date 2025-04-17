import Player from "./Player";
import players from "./players";
function Playerlist() {
  return (
    <div
    style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {players.map((el) => (
        <Player {...el} />
      ))}
    </div>
  );
}
export default Playerlist;
