import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Container className="mt-5 mb-5 about-us">
        <div>
          <div>
            <div className={`text-image-grid`}>
              <div>
                <div className="text-image-grid-title">What is Receip</div>
                <div className="text-image-grid-line"></div>
                <div className="text-image-grid-description">
                  "Receip" is an innovative online platform designed for recipe
                  enthusiasts and food lovers to connect, share, and explore a
                  wide variety of recipes. The website provides a user-friendly
                  space where users can discover, contribute, and collaborate on
                  culinary creations from around the world. Whether you're a
                  seasoned chef or a cooking enthusiast, Receip offers an
                  engaging and interactive experience that celebrates the joy of
                  cooking and sharing.
                </div>
              </div>
              <div>
                <img
                  src="about-us.jpg"
                  alt="img"
                  className="text-image-grid-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-image-grid-title">
            Key Features and Highlights:
          </div>
          <div className="text-image-grid-line  mb-4"></div>
          <div className="accordion-container">
            <Accordion className="accordion" defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Recipe Sharing</Accordion.Header>
                <Accordion.Body>
                  Receip serves as a hub for sharing recipes of all types – from
                  family classics to experimental dishes. Users can create their
                  profiles and upload their favorite recipes, complete with
                  detailed ingredient lists, step-by-step instructions, and
                  eye-catching images.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Explore and Discover</Accordion.Header>
                <Accordion.Body>
                  With a vast collection of recipes spanning various cuisines
                  and dietary preferences, users can explore new flavors and
                  cooking techniques. The website's search and filtering
                  features make it easy to find recipes that match specific
                  ingredients, meal types, or dietary needs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Community Interaction</Accordion.Header>
                <Accordion.Body>
                  Receip fosters a sense of community by allowing users to
                  follow each other, leave comments, and even engage in
                  discussions about cooking tips, ingredient substitutions, and
                  personal experiences with a recipe. This social aspect
                  encourages learning and collaboration.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Categories and Tags</Accordion.Header>
                <Accordion.Body>
                  Recipes are organized into categories such as appetizers, main
                  courses, desserts, and more. Users can also apply relevant
                  tags to their recipes, making it easier for others to find
                  specific types of dishes.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Collaborative Features</Accordion.Header>
                <Accordion.Body>
                  Receip may offer features that allow users to collaborate on
                  recipes. For example, users could collaborate on a shared
                  recipe collection for a special occasion or event.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
