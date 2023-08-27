import { BASE_URL } from "../constants";

export const getAllCategories = (accessToken) => {
  return fetch(`${BASE_URL}/category`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching categories:", error);
      throw error;
    });
};

export const signUp = (data) => {
  return fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error signing up:", error);
      throw error;
    });
};

export const login = (data) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error logging in:", error);
      throw error;
    });
};

export const getCurrentUser = (accessToken) => {
  return fetch(`${BASE_URL}/user/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching current user:", error);
      throw error;
    });
};

export const createReceip = (receip, accessToken) => {
  return fetch(`${BASE_URL}/recipe`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(receip),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error creating receip:", error);
      throw error;
    });
};

export const getAllReceip = (accessToken) => {
  return fetch(`${BASE_URL}/recipe`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error retrieving receip:", error);
      throw error;
    });
};

export const getRecipeById = (recipeId, accessToken) => {
  return fetch(`${BASE_URL}/recipe/${recipeId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error retrieving recipe by ID:", error);
      throw error;
    });
};


export const likeReceip = (data, accessToken) => {
  return fetch(`${BASE_URL}/user/like/recipe`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error creating receip:", error);
      throw error;
    });
};
