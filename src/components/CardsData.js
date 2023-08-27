import "./CardStyles.css";

function CardsData(props) {
  console.log(props);
  return (
    <div className="t-card mt-5" onClick={props.handleCardClick}>
      <div className="t-image">
        <img src={props.image} alt="img" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default CardsData;
