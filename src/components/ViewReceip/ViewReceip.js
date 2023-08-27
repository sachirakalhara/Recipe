import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Lightbox from "react-lightbox-component";
import Hero from "../Hero";
import { getRecipeById, likeReceip } from "../../utils/APIUtils";
import { ACCESS_TOKEN, BASE_URL } from "../../constants";
import "./ViewReceip.css";

const ViewReceip = (re) => {
  const location = useLocation();
  const recipeData = location.state;
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [receip, setReciep] = useState(null);

  useEffect(() => {
    getRecipeById(recipeData?.id, localStorage.getItem(ACCESS_TOKEN))
      .then((recipe) => {
        setReciep(recipe?.data);
        setLikes(recipe?.data.likes);
      })
      .catch((error) => {
        console.error("Error fetching recipe by ID:", error);
      });
  }, [recipeData?.id]);

  useEffect(() => {
    if (receip?.current_user_liked) {
      setIsClicked(true);
    }
  }, [receip?.current_user_liked]);

  const handleClick = () => {
    let count = likes;
    if (isClicked) {
      count = count - 1;
    } else {
      count = count + 1;
    }
    setIsClicked(!isClicked);
    const data = {
      recipeId: recipeData.id,
    };

    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      likeReceip(data, accessToken)
        .then((response) => {
          setLikes(count);
        })
        .catch((error) => {
          console.error("Error liking receip:", error);
        });
    }
  };

  return (
    <>
      <Hero
        cName="hero"
        heroImg="icon-banner3jpg.jpg"
        title="Explore Your Taste"
        text="Choose Your Flavour"
      />
      <Container>
        <Row className="justify-content-center mt-5 mb-5">
          <Col xs={10} md={7} lg={5} className="p-0 receip-column">
            <Lightbox
              images={[
                {
                  src: `${BASE_URL}/recipe/image/${recipeData?.id}`,
                  title: recipeData?.title,
                  description: "img 1",
                },
              ]}
            />
          </Col>
          <Col xs={10} md={7} lg={7} className={`product-details`}>
            <h1 style={{ fontWeight: "800" }}>{receip?.title}</h1>
            <b className={`h5 mt-3 d-block`}>{receip?.ingredients}</b>
            <div className="mt-4">
              <b className="h5" style={{ fontWeight: "600" }}>
                Instructions
              </b>
              <p
                className="mt-1 h5 text-instructions"
                style={{ opacity: "0.8" }}
              >
                {receip?.instructions}
              </p>
            </div>
            <Row className="mt-4">
              <Col md={6} className="mb-4">
                <p className="mt-1 h5 text-wrap">
                  <b className="h5" style={{ fontWeight: "600" }}>
                    Preparation time:{" "}
                  </b>
                  <span style={{ opacity: "0.8" }}>
                    {receip?.preparation_time} mins
                  </span>
                </p>
              </Col>
              <Col md={6}>
                <p className="mt-1 h5 text-wrap">
                  <b className="h5" style={{ fontWeight: "600" }}>
                    Serving size:{" "}
                  </b>
                  <span style={{ opacity: "0.8" }}>
                    {receip?.serving_size} person
                  </span>
                </p>
              </Col>
            </Row>
            <div className="reciep-category">
              <h4>
                <Badge pill bg="warning" text="dark">
                  {receip?.category_name}
                </Badge>
              </h4>
            </div>
            <div className="mt-4">
              <button
                className={`like-button ${isClicked && "liked"}`}
                onClick={handleClick}
              >
                <span className="likes-counter">{`Like | ${likes}`}</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewReceip;
