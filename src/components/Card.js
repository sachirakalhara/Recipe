import { useNavigate } from "react-router-dom";
import CardsData from "./CardsData";
import "./CardStyles.css";
import { useEffect, useState } from "react";
import { getAllReceip } from "../utils/APIUtils";
import { ACCESS_TOKEN, BASE_URL } from "../constants";

function Card() {
  const navigate = useNavigate();
  const [receips, setReceips] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      getAllReceip(accessToken)
        .then((response) => {
          setReceips(response.data);
        })
        .catch((error) => {
          console.error("Error retrieving receips:", error);
        });
    }
  }, []);

  const handleCardClick = (re) => {
    navigate("/view", { state: re });
  };

  return (
    <div className="card">
      <h1>Dive into Recipes</h1>
      <div className="recipecard-container">
        {receips.map((receip) => (
          <CardsData
            key={receip.id}
            image={`${BASE_URL}/recipe/image/${receip?.id}`}
            heading={receip.title}
            text={receip.ingredients}
            handleCardClick={() => handleCardClick(receip)}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
