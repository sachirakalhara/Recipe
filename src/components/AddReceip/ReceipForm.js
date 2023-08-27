import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import UploadFiles from "../ImageComponents/drag-and-drop-upload/Upload-File";
import ImageOverlay from "../ImageComponents/ImageOverlay";
import { createReceip, getAllCategories } from "../../utils/APIUtils";
import { ACCESS_TOKEN } from "../../constants";
import "./ReceipForm.css";

const ReceipForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    preparation_time: "",
    category_id: "",
    serving_size: "",
    image: "",
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [imageFile, setImageFile] = useState([]);
  const [categories, setCategories] = useState([]);
  const [base64IMG, setBase64IMG] = useState([]);

  useEffect(() => {
    getAllCategories(localStorage.getItem(ACCESS_TOKEN))
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const reader = new FileReader();
    if (Array.isArray(imageFile) && imageFile.length > 0) {
      reader.readAsDataURL(imageFile[0]);

      reader.onload = () => {
        setBase64IMG(reader.result);
      };
    } else {
      console.error("Invalid image file array");
    }
  }, [imageFile]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      image: imageFile,
    }));
  }, [imageFile]);

  useEffect(() => {
    const hasEmptyField = Object.values(formData).some((value) => value === "");
    setIsSubmitDisabled(hasEmptyField);
  }, [formData]);

  const handleSubmit = (event) => {
    console.log(formData.category_id);
    event.preventDefault();
    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );
    if (isAnyFieldEmpty) {
      return;
    }

    const receip = {
      title: formData.title,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
      preparation_time: formData.preparation_time,
      category_id: formData.category_id,
      serving_size: formData.serving_size,
      imageUrl: base64IMG,
    };

    createReceip(receip, localStorage.getItem(ACCESS_TOKEN))
      .then((response) => {
        alert("Receip created successfully!");
      })
      .catch((error) => {
        console.error("Error creating receip:", error);
        alert("Error creating receip!");
      })
      .finally(() => {
        setFormData({
          title: "",
          ingredients: "",
          instructions: "",
          preparation_time: "",
          category_id: "",
          serving_size: "",
          image: "",
        });
        setImageFile([]);
        setBase64IMG("");
      });
  };

  const handleReset = () => {
    setFormData({
      title: "",
      ingredients: "",
      instructions: "",
      preparation_time: "",
      category_id: "",
      serving_size: "",
      image: "",
    });
    setIsSubmitDisabled(true);
    setImageFile([]);
  };

  const handleDeleteImage = () => {
    setImageFile([]);
    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  return (
    <Container className="receip-form">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="dropzone">
          {imageFile.length ? (
            <>
              <img
                src={imageFile[0].preview}
                className="preview"
                alt="uploaded img"
              />
              <ImageOverlay handleDeleteImage={handleDeleteImage} />
            </>
          ) : (
            <div className="upload-image">
              <UploadFiles
                id="upload-files"
                type="Receip Image"
                setImageFile={setImageFile}
              />
            </div>
          )}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mt-3">
          <Form.Label className="receip-form-label">Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="ingredients" className="mt-3">
          <Form.Label className="receip-form-label">Ingredients</Form.Label>
          <Form.Control
            as="textarea"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="instructions" className="mt-3">
          <Form.Label className="receip-form-label">Instructions</Form.Label>
          <Form.Control
            as="textarea"
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group controlId="preparation_time">
              <Form.Label className="receip-form-label">
                Preparation Time
              </Form.Label>
              <Form.Control
                type="number"
                name="preparation_time"
                value={formData.preparation_time}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="category_id">
              <Form.Label className="receip-form-label">Category</Form.Label>
              <Form.Control
                as="select"
                name="category_id"
                value={formData.category_id}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="serving_size" className="mt-3">
          <Form.Label className="receip-form-label">Serving Size</Form.Label>
          <Form.Control
            type="number"
            name="serving_size"
            value={formData.serving_size}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="receip-form-buttons mt-4 mb-5 d-flex justify-content-center">
          <Button
            className="mr-2"
            variant="primary"
            type="submit"
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
          <Button
            className="ml-2"
            variant="danger"
            type="button"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ReceipForm;
