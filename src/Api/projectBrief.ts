import axios from "axios";

const api = axios.create({
  baseURL: "https://technacore-portfolio-backend-production.up.railway.app/api",
  // Don't set JSON content type; browser will handle multipart automatically
});

export type ProjectBriefData = {
  email: string;
  phone: string;
  message: string;
  document: File; // File object from input
};

export const createProjectBrief = async (data: any) => {
  try {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);
    formData.append("document", data.document);

    const response = await api.post("/project-briefs", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // contains documentUrl from backend
  } catch (error: any) {
    console.error(
      "Create project brief failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};
