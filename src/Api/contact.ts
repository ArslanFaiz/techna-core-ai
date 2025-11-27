import axios from "axios";

const api = axios.create({
  baseURL: "https://technacore-portfolio-backend-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Correct Types
export type ContactData = {
  name: string;
  email: string;
  contact: string; 
  service: string;
  projectDetail: string;
};

// Create Contact
export const createContact = async (data: ContactData) => {
  try {
    const response = await api.post("/contacts", data);
    return response.data;
  } catch (error: any) {
    console.error("Create contact failed:", error.response?.data || error.message);
    throw error;
  }
};
