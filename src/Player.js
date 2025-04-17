import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Player({
  joureur = "mana3rich",
  équipe = "bhim",
  nationalite = "tounsi",
  numéro_de_maillot = "999",
  age = "777",
  url = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32f35092-228c-4622-9ed4-8677191edb9c/d2z49l1-2a6dc2ab-ee4d-42a9-aba9-5619d641d446.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyZjM1MDkyLTIyOGMtNDYyMi05ZWQ0LTg2NzcxOTFlZGI5Y1wvZDJ6NDlsMS0yYTZkYzJhYi1lZTRkLTQyYTktYWJhOS01NjE5ZDY0MWQ0NDYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n0Wee_qcnudQxBRQeulUyJlfTRoANV6s7LROFAn3YaQ",
}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} style={{width:"280",height:"160px"}}/>
        <Card.Body>
          <Card.Title>{joureur}</Card.Title>
          <Card.Text>{équipe}</Card.Text>
          <Card.Text>{nationalite}</Card.Text>
          <Card.Text>{numéro_de_maillot}</Card.Text>
          <Card.Text>{age}</Card.Text>
          {/* <Card.Text>{url}</Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Player;
