import "./style/Card.css";

function Card(props) {
  return <div className="card card-shadow">{props.children}</div>;
}

export default Card;
