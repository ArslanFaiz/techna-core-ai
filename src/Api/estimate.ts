import axios from "axios";

const api = axios.create({
  baseURL: "https://technacore-portfolio-backend-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export type EstimateData = {
  name: string;
  email: string;
  phone: string;
  keyFeatures: string[]; // array of features
  projectComplexity: string;
  projectOverview: string;
  suggestedTimeline: string;
};

export const createEstimate = async (data: EstimateData) => {
  try {
    const response = await api.post("/estimates", data);
    return response.data;
  } catch (error: any) {
    console.error(
      "Create estimate failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};
